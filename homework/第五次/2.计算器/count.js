function calculate(){
	document.getElementById("sub").innerHTML=Date();
	var number1=document.getElementById("first").value;
	var number2=document.getElementById("second").value;
	var number3= document.getElementById("operate").value;
	if(!number3.trim()||!number2.trim()||!number1.trim()){
		alert("输入完整信息！");
	}
	else if(number3=="+"){
		 var r1,r2,m;
    	try{
    		r1=number1.toString().split(".")[1].length;
    	}catch(e){
    		r1=0;
    	}
    	try{
    		r2=number2.toString().split(".")[1].length;
    	}catch(e){
    		r2=0;
    	}
    	m=Math.pow(10,Math.max(r1,r2));
		var sum=(number1*m+number2*m)/m;
		alert("结果为"+sum);
	}
	else if(number3=="-"){
		var sum=parseFloat(number1)-parseFloat(number2);
		alert("结果为"+sum);
	}
	else if(number3=="*"){
		var m=0,s1=number1.toString(),s2=number2.toString();
    	try{
    		m+=s1.split(".")[1].length;
    	}catch(e){}
    	try{
    		m+=s2.split(".")[1].length;
    	}catch(e){}
		var sum=Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
		alert("结果为"+sum);
	}
	else if(number3=="/"){
		if(number2==0){
			alert("除数不能为0");
			return;
		}
		else{
			var t1=0,t2=0,r1,r2;
    		try{
    			t1=number1.toString().split(".")[1].length;
    		}catch(e){}
    		try{
    			t2=number2.toString().split(".")[1].length;
    		}catch(e){}
    		with(Math){
        		r1=Number(number1.toString().replace(".",""));
       			r2=Number(number2.toString().replace(".",""));
        		var sum=(r1/r2)*pow(10,t2-t1);
				alert("结果为"+sum);
    		}
		}
	}
}