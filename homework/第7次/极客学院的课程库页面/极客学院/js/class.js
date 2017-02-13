$(document).ready(function() {
    $(".wrap-3 .search-icon").click(function(){
        $(".wrap ul").hide();
        $(".wrap-3").hide();
        $(".sousearch").fadeIn(1000);
    });
    $(".wrong").click(function(){
        $(".sousearch").hide();
        $(".wrap ul").show();
        $(".wrap-3").show();
    });
        $(".ul-1 li").mouseover(function() {
            $('.ul-1 li').css('border-right','1px solid #EEEEEE');
           $(this).css('border-right','2px solid #fff');
        });
        $(".ul-1").mouseleave(function() {
            $('.ul-1 li').css('border-right','1px solid #35B558');
        });
    $(".ul-2 li").each(function(index) {
        $(".ul-2 li").eq(index).hover(function() {
            $(".ul-2 li").eq(index).append('<span class="class">查看全部</span>');
            $(".class").css("float", "right");
            $(".class").css("font-size","13px");
        },function(){
        	$(".class").hide();
        });
    });
    $(".table-1").css("color","#666666");
    $(".table-2").css("color","#666666");
    $(".table-3").css("color","#666666");
    $(".table-4").css("color","#666666");
    $(".table-5").css("color","#666666");
    $(".table-6").css("color","#666666");
    $(".table-7").css("color","#666666");
    $(".table-8").css("color","#666666");
    $(".table-9").css("color","#666666");
    $(".table-10").css("color","#666666");
    // 最热
    $(".select li").each(function(index){
    	$(".select li").eq(index).click(function(){
    		var consult=$(".select li").eq(index).text();
    		 $(".change").text(consult);
    	});
    });
    // 课程类型
    $(".select1 li").each(function(index){
    	$(".select1 li").eq(index).click(function(){
    		var consult=$(".select1 li").eq(index).text();
    		 $(".change1").text(consult);
    	});
    });
    // 内容类型
    $(".select3 li").each(function(index){
    	$(".select3 li").eq(index).click(function(){
    		var consult=$(".select3 li").eq(index).text();
    		 $(".change3").text(consult);
    	});
    });
    // 难度等级
    $(".select2 li").each(function(index){
    	$(".select2 li").eq(index).click(function(){
    		var consult=$(".select2 li").eq(index).text();
    		 $(".change2").text(consult);
    	});
    });
    // 最新和最热的切换
    $(".select li").each(function(index){
    	$(".select li").eq(index).click(function(){
    		$("div.tab2").removeClass("play");
    		$("div.tab.play").removeClass("play");
    		$("div.tab").eq(index).addClass("play");
    	});
    });
    $(".top6").click(function(){
    	$("div.tab2").removeClass("play");
    	$("div.tab.play").removeClass("play");
    	$("div.tab").eq(1).addClass("play");
    });
    $(".top5").click(function(){
    	$("div.tab.play").removeClass("play");
    	$("div.tab2").addClass("play");
    });
});
