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
     // 应用了单例模式，可以保护它的click方法不收到其他对象的干扰
    var obj={
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            this.button=$("#vip");
        },
        bind:function(){
            this.button.click(function(){
                window.open("http://vip.baidu.com/pcui/show/ucenterindex?vip_frm=super_account");
            });
        }
    }
    obj.init();
    // 个人中心
    var person={
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            this.personal=$("#personal");
        },
        bind:function(){
            this.personal.click(function(){
                window.open("http://i.baidu.com/");
            });
        }
    }
    person.init();
    // $("#personal").on("click", function() {
    //     window.open("http://i.baidu.com/");
    // });
    // 账号设置
    var user={
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            this.userid=$("#id");
        },
        bind:function(){
            this.userid.click(function(){
                window.open("https://passport.baidu.com/center?_t=1476792089");
            });
        }
    }
    user.init();
    // $("#id").on("click", function() {
    //     window.open("https://passport.baidu.com/center?_t=1476792089");
    // });
    // 搜索历史
    var history={
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            this.history1=$(".history");
        },
        bind:function(){
            window.open("http://i.baidu.com/my/history?from=ps");
        }
    }
    history.init();
    // $(".history").on("click", function() {
    //     window.open("http://i.baidu.com/my/history?from=ps");
    // });
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
     var color={
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            this.color1=$(".color");
        },
        bind:function(){
            this.color1.click(function(){
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
        }
    }
    color.init();
    // $(".color").on("click",function(){
    // 	$(".background").slideDown();
    // 	$(".background img").each(function(index){
    // 		$(this).click(function(){
    //             var this_src=$(this).attr('src');
    // 			// 哪里有问题？
    // 			$("body").css("background-image","url("+this_src+")");
    //             localStorage.setItem("key",this_src);
    // 		});
    // 	});
    // });
    var close={
        init:function(){
            this.render();
            this.bind();
        },
        render:function(){
            this.close1=$(".close");
        },
        bind:function(){
            this.close1.click(function(){
                $(".background").slideUp();
            });
        }
    }
    close.init();
    // $(".close").on("click",function(){
    // 	$(".background").slideUp();
    // });
});
