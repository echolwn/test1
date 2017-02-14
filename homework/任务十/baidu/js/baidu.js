$(document).ready(function() {
    var bgimage=localStorage.getItem('key');
    if(bgimage){
        $("body").css("background-image","url("+bgimage+")");
    }
	$(".hide").hide();
    $.post("https://api.heweather.com/x3/weather?cityid=CN101010100&key=83eddad5ecd842d6aa88013639640647",
        function(data, status) {
            console.log(data);
            $(".city").text(data["HeWeather data service 3.0"][0]["basic"]["city"]);
            $(".degree").text(data["HeWeather data service 3.0"][0]["now"]["tmp"]);
            $(".how").text(data["HeWeather data service 3.0"][0]["aqi"]["city"]["qlty"]);
            $(".number").text(data["HeWeather data service 3.0"][0]["now"]["wind"]["deg"]);
        });
    // 我的vip
    $("#vip").on("click", function() {
        window.open("http://vip.baidu.com/pcui/show/ucenterindex?vip_frm=super_account");
    });
    // 个人中心
    $("#personal").on("click", function() {
        window.open("http://i.baidu.com/");
    });
    // 账号设置
    $("#id").on("click", function() {
        window.open("https://passport.baidu.com/center?_t=1476792089");
    });
    // 搜索历史
    $(".history").on("click", function() {
        window.open("http://i.baidu.com/my/history?from=ps");
    });
    $(function(){
    	$(window).scroll(function(){
    		var this_scrollTop=$(this).scrollTop();
    		if(this_scrollTop>=35){
    			$(".form").hide();
    			$(".logo").hide();
    			$(".hide").show();
    		}
    		if(this_scrollTop<35){
    			$(".form").show();
    			$(".logo").show();
    			$(".hide").hide();
    		}
    	});
    });
    $(".color").on("click",function(){
    	$(".background").slideDown();
    	$(".background img").each(function(index){
    		$(this).click(function(){
                var this_src=$(this).attr('src');
    			// 哪里有问题？
    			$("body").css("background-image","url("+this_src+")");
                localStorage.setItem("key",this_src);
    		});
    	});
    });
    $(".close").on("click",function(){
    	$(".background").slideUp();
    });
});
