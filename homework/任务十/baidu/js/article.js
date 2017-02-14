$(document).ready(function(){
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