// 结果，运算值
var result="",num1,num2;
// 记录按下按钮的值
var butt=[];
// 记录结果的值
var resu=[];
var content;
// 判断是否可以输入数字
var flag=true;
// 加法运算
function plus(num11,num22){
	var r1,r2,m;
    try{
    	r1=num11.toString().split(".")[1].length;
    }catch(e){
    	r1=0;
    }
    try{
    	r2=num22.toString().split(".")[1].length;
    }catch(e){
    	r2=0;
    }
    m=Math.pow(10,Math.max(r1,r2));
	result=(num11*m+num22*m)/m;
	return result;
}
// 减法运算
function mins(num11,num22){
	result=parseFloat(num11)-parseFloat(num22);
	return result;
}
// 乘法运算
function time(num11,num22){
	var m=0,s1=num11.toString(),s2=num22.toString();
    try{
    	m+=s1.split(".")[1].length;
    }catch(e){}
    try{
    	m+=s2.split(".")[1].length;
    }catch(e){}
	result=Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
	return result;
}
// 除法运算
function devide(num11,num22){
	if(num22==0){
		result="除数不能为0";
	}
	else{
		var t1=0,t2=0,r1,r2;
    	try{
    		t1=num11.toString().split(".")[1].length;
    	}catch(e){}
    	try{
    		t2=num22.toString().split(".")[1].length;
    	}catch(e){}
    	with(Math){
        	r1=Number(num11.toString().replace(".",""));
       		r2=Number(num22.toString().replace(".",""));
        	result=parseFloat((r1/r2)*pow(10,t2-t1)).toFixed(8);
    	}
	}
	return result;
}
// 开平方
function pow(num11){
	result=Math.sqrt(num11);
	return result;
}
//将小数换成百分数形式
function bai(num11){
	var result=Number(num11*100).toFixed(1);
    result+="%";
    return result;
}
// 取负数
function fu(num11){
	result=-num11;
	return result;
}
// 取倒数
function dao(num11){
	if(num11==0){
		result="0不能进行倒数运算";
	}
	else{
		result=1/num11;
	}
	return result;
}
// sin
function sin(num11){
	result=parseFloat(Math.sin(num11*Math.PI/180).toFixed(8));
	return result;
}
// cos
function cos(num11){
	result=parseFloat(Math.cos(num11*Math.PI/180)).toFixed(8);
	return result;
}
// tan
function tan(num11){
	result=parseFloat(Math.tan(num11*Math.PI/180)).toFixed(8);
	return result;
}
// 后退
function back(){
	if(!isNaN(butt[butt.length-1])){
		if(butt[butt.length-1]>9){
			var n=butt[butt.length-1].split("");
			console.log(n);
			for(var i=0;i<n.length-1;i++){
				var con="";
				con+=n[i];
				butt.pop();
				butt.push(con);
			}
		}
	}
	else{
		butt.pop();
	}
	document.getElementById("result").innerHTML=butt;
}
function num7(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num7").value;
		butt.push(content);
		}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num7").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num7").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function num8(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num8").value;
		butt.push(content);
		}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num8").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num8").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function num9(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num9").value;
		butt.push(content);
		}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num9").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num9").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function num6(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num6").value;
		butt.push(content);
		}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num6").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num6").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function num5(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num5").value;
		butt.push(content);
		}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num5").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num5").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function num4(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num4").value;
		butt.push(content);
		}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num4").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num4").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function num3(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num3").value;
		butt.push(content);
		}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num3").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num3").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function num2(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num2").value;
		butt.push(content);
		}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num2").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num2").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function num1(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num1").value;
		butt.push(content);
	}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num1").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num1").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function num(){
	var i=butt.length-1;
	if(flag==true){
		if(isNaN(butt[i])||butt==null){
		content=document.getElementById("num").value;
		butt.push(content);
	}
		if(!isNaN(butt[i])){
			content+=document.getElementById("num").value;
			butt[i]=content;
		}
	}
	else{
		butt=[];
		var content1=document.getElementById("num").value;
		butt.push(content1);
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
// 小数点
function num00(){
	var number=0;
	var i=butt.length-1;
	if(flag==true){
		if(!isNaN(butt[i])){
			content+=document.getElementById("num00").value;
			butt[i]=content;
		}
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function sin1(){
	flag=false;
	var i=butt.length-1;
	if(!isNaN(butt[i])){
		content=butt[i];
		console.log(content);
		content=sin(content);
		butt[i]=content;
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function cos1(){
	flag=false;
	var i=butt.length-1;
	if(!isNaN(butt[i])){
		content=butt[i];
		content=cos(content);
		butt[i]=content;
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function tan1(){
	flag=false;
	var i=butt.length-1;
	if(!isNaN(butt[i])){
		content=butt[i];
		content=tan(content);
		butt[i]=content;
	}
	// console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
// 求负
function num01(){
	flag=false;
	var i=butt.length-1;
	if(!isNaN(butt[i])){
		content=butt[i];
		content=-content;
		butt[i]=content;
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
// 倒数
function divide1(){
	flag=false;
	var i=butt.length-1;
	if(!isNaN(butt[i])){
		content=butt[i];
		content=dao(content);
		butt[i]=content;
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function divide(){
	content=document.getElementById("chu").value;
	butt.push(content);
	// console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
// 百分数
function quyu(){
	flag=false;
	var i=butt.length-1;
	if(!isNaN(butt[i])){
		content=butt[i];
		content=bai(content);
		butt[i]=content;
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
function times(){
	content=document.getElementById("cheng").value;
	butt.push(content);
	// console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
// 开根号
function pow2(){
	flag=false;
	var i=butt.length-1;
	if(!isNaN(butt[i])){
		content=butt[i];
		content=pow(content);
		butt[i]=content;
	}
	console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
// 减法运算
function minus(){
	content=document.getElementById("jian").value;
	butt.push(content);
	// console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
// 加法运算
function plus1(){
	content=document.getElementById("jia").value;
	butt.push(content);
	// console.log(butt);
	for(var key in butt){
		document.getElementById("result").innerHTML=butt[key];
	}
}
// 利用数组中字符串的个数来进行区分
function equal(){
	content=document.getElementById("equal").value;
	butt.push(content);
	// 不需要判断运算符的位置
	if(butt.length==2){
		if(butt[1]=="等于"){
			console.log(butt[0]);
			document.getElementById("result").innerHTML="等于"+butt[0];
		}
	}
	// 判断是进行什么运算
	if(butt.length==4){
		if(butt[3]=="等于"){
			switch(butt[1]){
				case "加号":
				butt.push(plus(butt[0],butt[2]));
				break;
				case "减号":
				butt.push(mins(butt[0],butt[2]));
				break;
				case "乘号":
				butt.push(time(butt[0],butt[2]));
				break;
				case "除号":
				butt.push(devide(butt[0],butt[2]));
				break;
			}
			document.getElementById("result").innerHTML="等于"+butt[4];
		}
	}
	// 根据判断运算符来进行四则运算
	if(butt.length>=6){
		if(butt[butt.length-1]=="等于"){
			for(var i=0;i<butt.length;i++){
				if(butt[i]=="乘号"){
					console.log(1);
					var nu=time(butt[i-1],butt[i+1]);
					// 将数组中的指定位置的数值改变
					butt.splice(i-1,3,nu.toString());
					console.log(butt);
				}
				if(butt[i]=="除号"){
					var rn=devide(butt[i-1],butt[i+1]);
					butt.splice(i-1,3,rn.toString());
					console.log(butt);
				}
			}
			for(var i=0;i<butt.length;i++){
				if(butt[i]=="加号"){
					var on=plus(butt[i-1],butt[i+1]);
					butt.splice(i-1,3,on.toString());
					console.log(butt);
					console.log(i);
				}
				if(butt[i]=="减号"){
					var mi=mins(butt[i-1],butt[i+1]);
					butt.splice(i-1,3,mi.toString());
					console.log(butt);
				}
			}
		}
		butt.push(result);
		document.getElementById("result").innerHTML="等于"+butt[butt.length-1];
	}
}
function back1(){
	content=document.getElementById("back").value;
	// butt.push(content);
	// console.log(butt);
	back();
}
function dzero(){
	// console.log(butt);
	// deleteall(butt);
	butt.splice(0,butt.length);
	document.getElementById("result").innerHTML="";
}
console.log(butt);

