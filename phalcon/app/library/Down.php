<?php
namespace app\library;

/* 下载类 */
class Down{

  /* Blob方式 */
  static function fileBlob($path='',$filename=''){
    $file = $path.$filename;
    return file_get_contents($file);
  }

  /* 导出Excel */
  static function excel($name='',$table='<table></table>'){
    // 输出数据
    echo $table;
    // 下载
    header("Content-type:application/octet-stream");
    header("Accept-Ranges:bytes");
    header("Content-type:application/vnd.ms-excel");
    header("Content-Disposition:attachment;filename=$name.xls");
    header("Pragma: no-cache");
    header("Expires: 0");
  }

}