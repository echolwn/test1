<?php 
header('Content-type: application/json;charset=utf-8');
require_once('db.php');
if($link){
	// 插入新闻
    $newsid=addslashes(htmlspecialchars($_GET['id']));
	$newstitle=addslashes(htmlspecialchars($_GET['newstitle']));
	$newstype=addslashes(htmlspecialchars($_GET['newstype']));
	$newsimg=addslashes(htmlspecialchars($_GET['newsimg']));
	$newssrc=addslashes(htmlspecialchars($_GET['newssrc']));
	$newstime=addslashes(htmlspecialchars($_GET['newstime']));
	$sql="UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE id={$newsid}";
//    $sql="UPDATE `news` SET `news_text`='{$newstext}',`news_img`='{$newsimg}',`news_date`='{$newsdate}',`news_source`='{$newssource}',`news_name`='{$newsname}' WHERE id={$newsid}";
	mysqli_query($link,"SET NAMES utf8");
	$result=mysqli_query($link,$sql);
	echo json_encode(array('success'=>'ok'));
}

 ?>
