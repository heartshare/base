<?php

use app\controller\Base;
use \Swoole\WebSocket\Server as WebSocket;
use \Swoole\Coroutine\Http\Client;

use app\model\UserMsg;

class SocketTask extends Base{

  /* 属性 */
  static private $msg_limit = 100;  // 消息总条数
  static private $suid = '';        // 系统消息ID
  static private $uid = '';         // 用户ID
  static private $name_fd = '';     // 缓存:SocketFD
  static private $name_uid = '';    // 缓存:用户ID

  /* 构造函数 */
  function initialize(){
    self::$suid = $this->config->socket_suid;
    self::$name_fd = $this->config->socket_name.'Fd';
    self::$name_uid = $this->config->socket_name.'Uid';
  }

  /* 客户端 */
  function sendAction($data=[]){
    $data = ['type'=>'msg','data'=>[
      'uid'=>'202005131808010001',
      'fid'=>'1',
      'title'=>'测试',
      'content'=>'内容',
    ]];
    // 是否数组
    if(!is_array($data)) exit('必须数组!');
    // 系统Token
    $token = self::setToken(self::$suid,[]);
    $data['key'] = $this->config->key;
    // 链接
    $client = new Client('127.0.0.1',$this->config->socket_port);
    // 协程
    go(function () use ($client,$token,$data) {
      $res = $client->upgrade('/?token='.$token);
      if($res) return $client->push(json_encode($data));
    });
  }

  /* 启动 */
  function startAction(){

    /* Socket服务器 */
    $server = new WebSocket($this->config->socket_ip, $this->config->socket_port);
    // 清理缓存
    if($this->redis->get(self::$name_fd)) $this->redis->delete(self::$name_fd);
    if($this->redis->get(self::$name_uid)) $this->redis->delete(self::$name_uid);

    /* 链接成功 */
    $server->on('open',function($server,$request){
      // 验证Token
      if(!isset($request->get['token'])) return false;
      $token = $request->get['token'];
      $res = self::verToken($token);
      if(isset($res->uid)){
        // 用户ID
        echo self::$uid = $res->uid;
        echo "\n";
        // 记录FD
        $this->redis->hSet(self::$name_fd,$request->fd,self::$uid);
        $this->redis->hSet(self::$name_uid,self::$uid,$request->fd);
      }else{
        $server->disconnect($request->fd);
      }
    });
    /* 退出 */
    $server->on('close',function ($ser,$fd){
      $uid = $this->redis->hGet(self::$name_fd,$fd);
      if($uid){
        $this->redis->hDel(self::$name_fd,$fd);
        if($this->redis->hGet(self::$name_uid,$uid)){
          $this->redis->hDel(self::$name_uid,$uid);
        }
      }
    });
    /* 监听消息 */
    $server->on('message',function($server,$frame) {
      self::getRouter($server, $frame);
    });
    /* 启动 */
    $server->start();
  }

  /* 消息路由 */
  private function getRouter($server,$frame){
    // 参数
    $data = json_decode($frame->data);
    // 格式错误
    if(!is_object($data)) return $server->push($frame->fd, json_encode(['code'=>400,'msg'=>'格式错误']));
    /* 消息组 */
    if($data->type=='group'){
      // 是否用户
      if(empty(self::$uid)) return false;
      // 100条分组
      echo 'is_del NOT LIKE "%\"'.self::$uid.'\"%" AND (fid='.self::$uid.' OR uid='.self::$uid.')';
      echo "\n";
      try{
        $all = UserMsg::find([
          'is_del NOT LIKE "%\"'.self::$uid.'\"%" AND (fid='.self::$uid.' OR uid='.self::$uid.')',
          'order'=>'ctime DESC',
          'limit'=>self::$msg_limit
        ]);
      }catch(\PDOException $e){
        $this->db->connect();
      }
      $all = $all?$all->toArray():[];
      // 分组
      $tmpData = [];
      $num = [];
      foreach($all as $val){
        // 是否用户
        $gid = $val['uid']!=self::$uid?'uid':'fid';
        // 是否已读
        $is_new = json_decode($val['is_new'],1);
        $is_new = in_array((string)self::$uid,$is_new)?'1':'0';
        // 组信息
        $tmpData[(string)$val[$gid]]['fid'] = $val[$gid];
        $tmpData[(string)$val[$gid]]['num'] = 0;
        $tmpData[(string)$val[$gid]]['msg'][] = [
          'id'=>$val['id'],
          'type'=>$val['type'],
          'fid'=>$val['fid'],
          'ctime'=>$val['ctime'],
          'title'=>$val['title'],
          'content'=>$val['content'],
          'img'=>self::getImg($val['fid']),
          'is_new'=>$is_new,
        ];
        // 记录未读
        if($is_new=='0'){
          if(isset($num[(string)$val[$gid]])) $num[(string)$val[$gid]]++;
          else $num[(string)$val[$gid]] = 1;
        }
      }
      // 未读数量
      foreach($num as $key=>$val){
        $tmpData[(string)$key]['num'] = $val;
      }
      // 倒序
      foreach($tmpData as $key=>$val){
        $tmpData[$key]['name'] = self::getName($key);
        $tmpData[$key]['img'] = self::getImg($key);
        $tmpData[$key]['msg'] = array_reverse($val['msg']);
      }
      // 结果
      $msg = (Object)[];
      $msg->code = 0;
      $msg->type = 'group';
      $msg->data = (Object)$tmpData;
      return $server->push($frame->fd, json_encode($msg));
    }
    /* 消息 */
    elseif($data->type=='msg'){
      // 验证系统消息
      $key = isset($data->key)?$data->key:'';
      if($data->data->fid==self::$suid && $key!=$this->config->key){
        $data->code = 500;
        $data->msg = '非法消息!';
        return $server->push($frame->fd, json_encode($data));
      }
      // 消息-保存
      try{
        $model = new UserMsg();
        $model->id = date('YmdHis').rand(1000,9999);
        $model->type = '0';
        $model->uid = $data->data->uid;
        $model->fid = $data->data->fid;
        $model->title = $data->data->title;
        $model->content = $data->data->content;
        $model->ctime = date('Y-m-d H:i:s');
        $model->save();
      }catch(\PDOException $e){
        $this->db->connect();
      }
      // 消息-结果
      $msg = (Object)[];
      $msg->code = 0;
      $msg->type = 'msg';
      $msg->data = (Object)$model->toArray();
      unset($msg->data->is_new);
      unset($msg->data->is_del);
      // 推送消息
      $fd = $this->redis->hGet(self::$name_uid,$model->uid);
      if($server->isEstablished($fd)) $server->push($fd, json_encode($msg));
      $fd = $this->redis->hGet(self::$name_uid,$model->fid);
      if($server->isEstablished($fd)) $server->push($fd, json_encode($msg));
    }
  }

  /* 用户头像 */
  private function getImg($uid){
    $img = $this->redis->get('userImg'.$uid);
		if(!$img){
      // $data = UserInfo::findFirst(['uid='.$uid,'columns'=>'img']);
      // $img = $data&&$data->img?$this->config->baseUrl.$data->img:'';
			// $this->redis->setex('userImg'.$uid,10*60,$img);
    }
    return $img;
  }
  /* 用户昵称 */
  private function getName($uid){
    $name = $this->redis->get('userName'.$uid);
		if(!$name){
      // $data = UserInfo::findFirst(['uid='.$uid,'columns'=>'nickname']);
      // $name = $data&&$data->nickname?$data->nickname:'用户昵称';
			// $this->redis->setex('userName'.$uid,10*60,$name);
    }
    return $name;
  }

}