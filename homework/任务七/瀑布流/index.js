$(document).ready(function(){
	$(window).on("load",function(){
		// 加载瀑布流布局
		imgLocation();
		// 随着滑动条不断下滑，不断加载图片
		var dataImg={"data":[{"src":"1.jpg"},{"src":"2.jpeg"},{"src":"3.jpg"},{"src":"4.jpeg"},{"src":"5.jpg"}]};
		window.onscroll=function(){
			if(scrollside()){
				$.each(dataImg.data,function(index,value){
					var box=$("<div>").addClass("box").appendTo($(".container"));
					var content=$("<div>").addClass("content").appendTo(box);
					console.log("./picture/"+$(value).attr("src"));
					$("<img>").attr("src","./picture/"+$(value).attr("src")).appendTo(content);
				});
				imgLocation();
			}
		};
	});
});
window.onresize=function(){
	imgLocation();
}
// 鼠标滚动事件
function scrollside(){
	var box=$(".box");
	// 当鼠标停在某一处位置继续向下滑动时
	var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	// 滑动条所在的位置
	var documentHeight=$(document).width();
	var scrollHeight=$(window).scrollTop();
	// 判断滑动条的位置是否符合要加载剩下的图片的情况
	return(lastboxHeight<scrollHeight+documentHeight)?true:false;
}
// 图片摆放
function imgLocation(){
	var box=$(".box");
	// 获取第一张图片的宽度
	var boxWidth=box.eq(0).width();
	// 求出每一行图片的个数
	var num=Math.floor($(window).width()/boxWidth);
	// 用来存放每张图片的高度
	var boxHeight=[];
	// 遍历图片
	box.each(function(index,value){
		value.style.cssText='';
		// console.log(index+""+value);
		// 获取当前图片的高度
		var boxheight=box.eq(index).height();
		// 选取图片到第一行
		if(index<num){
			// 图片高度存入数组中
			boxHeight[index]=boxheight;
		}
		else{
			// 取出数组中最小的高度
			var minHeight=Math.min.apply(null,boxHeight);
			// 找到最小高度的是哪一个数组
			var minindex=$.inArray(minHeight,boxHeight);
			// 将下一行的第一个图片放到高度最小的那张图片下面
			$(value).css({
				"position":"absolute",
				"top":minHeight,
				"left":box.eq(minindex).position().left
			});
			// 修改最小高度的那张图片的所在列的高度
			boxHeight[minindex]+=box.eq(index).height();
		}
	});
}
