$(document).ready(function(){
	$(".return_top").click(function(){
		$("html,body").animate({"scrollTop":0},1000);
	});
	$(window).scroll(function(){
		var Sctop = $(window).scrollTop();
		Sctop>1200?$(".nav").stop().animate({"height":375},300) && $(".return_top").show():$(".nav").stop().animate({"height":0},300)&&$(".return_top").hide();
	});
	function toDou(n){
		if(n<10){
		return '0'+n;
		}else{
			return ''+n;
			}
	}
	function tick(){
		var oDate=new Date();
		var str=toDou(oDate.getHours())+":"+toDou(oDate.getMinutes())+":"+toDou(oDate.getSeconds());
		$(".rq").html(str);
	}
	setInterval(tick,1000);
	tick();

})