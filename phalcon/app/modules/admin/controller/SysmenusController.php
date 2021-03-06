<?php

namespace app\modules\admin\controller;

use app\common\Base;
use app\common\AdminToken;
use app\model\SysMenu;

class SysMenusController extends Base {

  static private $menus=[]; // 菜单
  private static $tokenData;
  private static $permAll;

  /* 构造函数 */
  function initialize(){
    parent::initialize();
    // 验证
    self::$tokenData = AdminToken::verify();
  }

  /* 获取[菜单] */
	function getMenusAction(){
    // 全部菜单
    self::$menus = [];
    $all = SysMenu::find(['columns'=>'id,fid,title,url,ico','order'=>'sort DESC,id'])->toArray();
    foreach($all as $val){
      self::$menus[$val['fid']][] = $val;
    }
    // 全部权限
    self::$permAll = AdminToken::perm(self::$tokenData->uid);
    // 组合菜单
    return self::getJSON(['code'=>0,'menus'=>self::_getMenu(0)]);
  }
  // 递归菜单
	static private function _getMenu($fid){
    $data = [];
    $M = isset(self::$menus[$fid])?self::$menus[$fid]:[];
		foreach($M as $val){
      if(isset(self::$permAll[$val['id']])){
        $val['children'] = self::_getMenu($val['id']);
        $data[] = $val;
      }
		}
		return $data;
  }
  
}