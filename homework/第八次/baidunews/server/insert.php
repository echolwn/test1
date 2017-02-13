<?php 
header('Content-type: application/json;charset=utf-8');
require_once('db.php');
if($link){
	// 插入新闻
	$newstitle=addslashes(htmlspecialchars($_GET['newstitle']));
	$newstype=addslashes(htmlspecialchars($_GET['newstype']));
	$newsimg=addslashes(htmlspecialchars($_GET['newsimg']));
	$newssrc=addslashes(htmlspecialchars($_GET['newssrc']));
	$newstime=addslashes(htmlspecialchars($_GET['newstime']));
	$sql="INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`) VALUES('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
	mysqli_query($link,"SET NAMES utf8");
	$result=mysqli_query($link,$sql);
	echo json_encode(array('success'=>'ok'));
}

 ?>
