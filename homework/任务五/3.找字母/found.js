var zm=["a","x","b","d","m","a","k","m","p","j","a"];
// 记录每个字母的出现的次数
var count={};
// 记录每个字母出现的位置
var pos={};
var value;
var index;
// 遍历zm，并且统计每个字母出现的次数和位置
for(var i=0;i<zm.length;i++){
	var char=zm[i];
	if(count[char]){
		count[char]+=1;
		pos[char]+=','+i;
	}
	else{
		count[char]=1;
		pos[char]=i;
	}
}
// 输出每个字母出现的次数以及出现的位置
console.log(count);
console.log(pos);
var max=count[Object.keys(count).sort(function(a,b){
	return count[a]<count[b];
})[0]];
console.log(max);
var pu=[];
for(i in count){
	if(count[i]>=max){
		max=count[i];
		pu.push(i);
		console.log(pu);
	}
}
document.write("出现最多的是"+pu+'<br>');
for(var i=0;i<pu.length;i++){
	key=pu[i];
	document.write(key+"的次数为："+count[key]+'<br>');
	document.write(key+"的位置为："+pos[key]+'<br>');
}