<?php

namespace app\modules\admin\controller;

use app\library\Upload;
use app\model\SysConfig;

class SysConfigController extends UserBase {

  static private $imgDir = 'upload/admin/';

  /* 列表 */
  function listAction(){
    $config = SysConfig::find(['','columns'=>'name,title,val'])->toArray();
		$data = [];
		foreach($config as $val){
      $data[$val['name']] = $val['val'];
      if($val['name']=='logo' || $val['name']=='login_bg') $data[$val['name']] = $this->config->imgUrl.$val['val'];
		}
		return self::getJSON(['code'=>0,'list'=>$data]);
  }

  /* 编辑 */
  function editAction(){
    $data = $this->request->get('data');
    if(empty($data)) return self::getJSON(['code'=>4000]);
    $data = json_decode($data);
    unset($data->logo);
    unset($data->login_bg);
    foreach($data as $key=>$val){
      $model = SysConfig::findFirst(['name=:name:','bind'=>['name'=>$key]]);
      if($model){
        $model->val = $val;
        if($model->save()==false) return self::error(4022);
      };
    }
    return self::getJSON(['code'=>0]);
  }

  /* 上传图片 */
  function upImageAction(){
    $type = $this->request->get('type');
    $base64 = $this->request->get('base64');
    if(empty($type) || empty($base64)) return self::getJSON(['code'=>4000]);
    // 上传
    $up = Upload::base64(self::$imgDir,$base64,$type);
    // 保存数据
    if($type=='logo') $name = 'logo';
    else if($type=='bg') $name = 'login_bg';
    if ($up['status']){
      $model = SysConfig::findFirst(['name=:name:','bind'=>['name'=>$name]]);
      $img = $model->val;
      $model->val = self::$imgDir.$up['file'];
      if($model->save()==true){
        @unlink($img);
        return self::getJSON(['code'=>0,'img'=>self::$imgDir.$up['file']]);
      }else{
        return self::getJSON(['code'=>4030]);
      }
    }else{
      return self::getJSON(['code'=>4030]);
    }
  }

}