var redb=document.getElementById("red");
var greenb=document.getElementById("green");
var orangeb=document.getElementById("orange");
var yellowb=document.getElementById("yellow");
var purpleb=document.getElementById("purple");
var first=document.getElementById("first1");
var word0=document.getElementById("word-0");
var game=document.getElementById("game");
var hot=document.getElementById("hot");
var shop=document.getElementById("shop");
var word=document.getElementById("word");
// 绑定事件
redb.onclick=function(){
	first.onchange("redb");
	word0.onchange("redb");
	game.onchange("redb");
	hot.onchange("redb");
	shop.onchange("redb");
	word.onchange("redb");
}
greenb.onclick=function(){
	first.onchange("greenb");
	word0.onchange("greenb");
	game.onchange("greenb");
	hot.onchange("greenb");
	shop.onchange("greenb");
	word.onchange("greenb");
}
orangeb.onclick=function(){
	first.onchange("orangeb");
	word0.onchange("orangeb");
	game.onchange("orangeb");
	hot.onchange("orangeb");
	shop.onchange("orangeb");
	word.onchange("orangeb");
}
yellowb.onclick=function(){
	first.onchange("yellowb");
	word0.onchange("yellowb");
	game.onchange("yellowb");
	hot.onchange("yellowb");
	shop.onchange("yellowb");
	word.onchange("yellowb");
}
purpleb.onclick=function(){
	first.onchange("purpleb");
	word0.onchange("purpleb");
	game.onchange("purpleb");
	hot.onchange("purpleb");
	shop.onchange("purpleb");
	word.onchange("purpleb");
}
// 页面刷新
window.onload=function(){
	var valueLocal=localStorage.getItem("key");
	console.log(valueLocal);
	first.onchange(valueLocal);
	word.onchange(valueLocal);
	game.onchange(valueLocal);
	hot.onchange(valueLocal);
	shop.onchange(valueLocal);
	word.onchange(valueLocal);
}
// 首页
first.onchange=function(color){
	console.log(2);
	switch(color){
		case "redb":
			first.style.backgroundColor="red";
			localStorage.setItem("key","redb");
			break;
		case "greenb":
			first.style.backgroundColor="green";
			localStorage.setItem("key","greenb");
			break;
		case "orangeb":
			first.style.backgroundColor="orange";
			localStorage.setItem("key","orangeb");
			break;
		case "yellowb":
			first.style.backgroundColor="yellow";
			localStorage.setItem("key","yellowb");
			break;
		case "purpleb":
			first.style.backgroundColor="purple";
			localStorage.setItem("key","purpleb");
			break;
	}
}
// 苏宁手机馆等
word0.onchange=function(color){
	switch(color){
		case "redb":
			word0.style.color="red";
			localStorage.setItem("key","redb");
			break;
		case "greenb":
			word0.style.color="green";
			localStorage.setItem("key","greenb");
			break;
		case "orangeb":
			word0.style.color="orange";
			localStorage.setItem("key","orangeb");
			break;
		case "yellowb":
			word0.style.color="yellow";
			localStorage.setItem("key","yellowb");
			break;
		case "purpleb":
			word0.style.color="purple";
			localStorage.setItem("key","purpleb");
			break;
	}
}
// 游戏
game.onchange=function(color){
	switch(color){
		case "redb":
			game.style.color="red";
			localStorage.setItem("key","redb");
			break;
		case "greenb":
			game.style.color="green";
			localStorage.setItem("key","greenb");
			break;
		case "orangeb":
			game.style.color="orange";
			localStorage.setItem("key","orangeb");
			break;
		case "yellowb":
			game.style.color="yellow";
			localStorage.setItem("key","yellowb");
			break;
		case "purpleb":
			game.style.color="purple";
			localStorage.setItem("key","purpleb");
			break;
	}
}
// 热门
hot.onchange=function(color){
	switch(color){
		case "redb":
			hot.style.color="red";
			localStorage.setItem("key","redb");
			break;
		case "greenb":
			hot.style.color="green";
			localStorage.setItem("key","greenb");
			break;
		case "orangeb":
			hot.style.color="orange";
			localStorage.setItem("key","orangeb");
			break;
		case "yellowb":
			hot.style.color="yellow";
			localStorage.setItem("key","yellowb");
			break;
		case "purpleb":
			hot.style.color="purple";
			localStorage.setItem("key","purpleb");
			break;
	}
}
// 购物
shop.onchange=function(color){
	switch(color){
		case "redb":
			shop.style.color="red";
			localStorage.setItem("key","redb");
			break;
		case "greenb":
			shop.style.color="green";
			localStorage.setItem("key","greenb");
			break;
		case "orangeb":
			shop.style.color="orange";
			localStorage.setItem("key","orangeb");
			break;
		case "yellowb":
			shop.style.color="yellow";
			localStorage.setItem("key","yellowb");
			break;
		case "purpleb":
			shop.style.color="purple";
			localStorage.setItem("key","purpleb");
			break;
	}
}
// 电视剧电影等
word.onchange=function(color){
	switch(color){
		case "redb":
			word.style.color="red";
			localStorage.setItem("key","redb");
			break;
		case "greenb":
			word.style.color="green";
			localStorage.setItem("key","greenb");
			break;
		case "orangeb":
			word.style.color="orange";
			localStorage.setItem("key","orangeb");
			break;
		case "yellowb":
			word.style.color="yellow";
			localStorage.setItem("key","yellowb");
			break;
		case "purpleb":
			word.style.color="purple";
			localStorage.setItem("key","purpleb");
			break;
	}
}