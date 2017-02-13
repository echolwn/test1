var num=document.getElementById("score");
function showPic(){
	document.getElementById("score").innerHTML=Date();
	var number=num.value;
	if(!number.trim()){
		alert("请输入0-100的数值");
		return;
	}
	if(number<=100&&number>=90)
		alert("该生为一等生！");
	else if(number<90&&number>=80)
		alert("该生为二等生!");
	else if(number<80&&number>=70)
		alert("该生为三等生！");
	else if(number<70&&number>=60)
		alert("该生为四等生！");
	else if(number<60&&number>=50)
		alert("该生为五等生！");
	else if(number<50&&number>=40)
		alert("该生为六等生！");
	else if(number<40&&number>=30)
		alert("该生为七等生!");
	else if(number<30&&number>=20)
		alert("该生为八等生！");
	else if(number<20&&number<=10)
		alert("该生为九等生！");
	else if(number<10&&number>=0)
		alert("该生为十等生");
	else 
		alert("请输入0-100的分数！");
}