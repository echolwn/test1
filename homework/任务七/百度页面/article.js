$(document).ready(function(){
	// var i=10;
	// $(this).css("width","10px");
	// $(this).css("height","10px");
	// $(this).css("border-radius","width");
	// if(i>=10&&i<42){
	// 	setInterval(function(){
	// 	$(this).css("width",i+2+"px");
	// 	$(this).css("weight",i+2+"px");
	// 	if(i==42){
	// 		setTimeout("setInterval()",1000);
	// 		setInterval(function(){
	// 			$(this).css("width",i-2+"px");
	// 			$(this).css("weight",i-2+"px");
	// 			if(i==10){
	// 				setTimeout("setInterval()",1000);
	// 			}
	// 		},1000);
	// 	}
	// 	},1000);
	// }
	$(".mul li").each(function(index){
		$(this).click(function(){
			console.log(this);
			$(".mul .gray").removeClass("gray");
			$(".bianli.play").removeClass("play");
			$(".mul li").eq(index).addClass("gray");
			console.log($(".bianli"));
			$(".bianli").eq(index).addClass("play");
		});
	});
});