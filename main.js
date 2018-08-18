// banner1
window.onload = function(){
		var sliderbox = document.getElementById("sliderbox");
		var slider = document.getElementById("slider");
		var sliderli = slider.getElementsByTagName("li");
		var slidertab = document.getElementById("slidertab");
		var slidertabli = slidertab.getElementsByTagName("li");
		var num = 0;
//set onmouseover and onmouseout 
	sliderbox.onmouseover = function(){
		clearInterval(timer);
	}
	sliderbox.onmouseout = function(){
		timer = setInterval(autoplay,3000);
	}
//throughout slidertabli
	for (var i = 0; i < slidertabli.length; i++) {
		(function(i){
		slidertabli[i].onclick = function(){
			//循环原来的
			for (var j = 0; j < slidertabli.length; j++) {
			slidertabli[j].className = "";
			sliderli[j].style.display = "none";
			}
			slidertabli[i].className = "sliderclass";
			sliderli[i].style.display = "block";
		}
		})(i);
	}
//autoplay
	function autoplay(){
		for (var i = 0; i < sliderli.length; i++) {
			sliderli[i].style.display = "none";
			slidertabli[i].className = "";
		}
		num = ++num == sliderli.length ? 0: num ;
		slidertabli[num].className = "sliderclass";
		sliderli[num].style.display = "block";
	}
	timer = setInterval(autoplay,3000);

// 鼠标特效
var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch (++click_cnt) {
            case 10:
                $elem.innerText = "奶茶妹妹";
                break;
            case 20:
                $elem.innerText = "发起进攻(　 ´-ω ･)▄︻┻┳══━一";
                break;
            case 30:
                $elem.innerText = "﻿༺༺超༒神༻༻";
                break;
            default:
                $elem.innerText = "京东";
                break;
        }
        $elem.style.fontSize = Math.random() * 20 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
            anim = setInterval(function() {
                if (++increase == 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
// 动画特效
        var btn=document.getElementById('imgWrap');
        var imgs=document.getElementsByClassName('jd');
        var allEnd=0;//用来判断所有的图片是否都完成了所有的运动步骤
        var on=true;//用来决定用户是否可以再次点击

        //给btn添加点击事件
        btn.onclick=function(){
            console.log("on:"+on);
            if(!on){
                return;
            }
            on=false;
            var endNum=0;//运动完成的图片数量
            for(var i=0;i<imgs.length;i++){
                //写成自执行函数的原因：for循环速度很快，将会导致setTimeout中的i找不到值
                (function(i){
                    setTimeout(function(){
                        montion(imgs[i],'10ms',function(){
                            this.style.transform='scale(0)';//因为函数用了call函数，所以可以用this，否则只能用imgs[i]
                        },function(){
                            //第二步的运动从这里开始
                            montion(this,'1s',function(){
                                this.style.transform="scale(1,2)";
                                this.style.opacity=0;
                            },function(){
                                endNum++;//只要有一张图片完成了第二步，则加1
                                if(endNum===imgs.length){
                                    toBig();
                                }
                            })
                        });
                    },Math.random()*1000);
                })(i);
            }
            //定时器，用来延迟时间，不让图片同步所放
        };
        //第三个运动效果
        function toBig(){
            /*
             *坐标轴，x,y,z
             */
             for(var i=0;i<imgs.length;i++){
                imgs[i].style.transition='';
                // imgs[i].style.opacity='1';
                //想要一个物体有css3中的动作变化，那就需要给它一个初始值
                imgs[i].style.transform='rotateY(0deg) translateZ(-'+Math.random()*500+'px)';
                //自执行函数的目的是，为了找到i，否则for循环执行太快，会找不到i
                (function(i){
                    setTimeout(function(){
                        montion(imgs[i],'2s',function(){
                            this.style.opacity=1;
                            this.style.transform='rotateY(-360deg) translateZ(0)'
                        },function(){
                            allEnd++;
                            if(allEnd===imgs.length){
                                console.log("allEnd:"+allEnd+',imgs.length:'+imgs.length);
                                //这个条件成立，说明所有的图片都运动完了，接下来才允许再次点击
                                //当所有运动完了以后，才允许再次点击
                                on=true;
                                allEnd=0;
                            }
                        });
                    },Math.random()*800);
                })(i);
             }
        }
        //运动函数(运动的对象，运动的时间，运动的属性函数，运动完成后要做的事情)
        function montion(obj,time,doFn,callBack){
            obj.style.transition=time;
            doFn.call(obj);//调用函数，并且把this的指向给obj

            var called=false;//这里的原因是为了解决transitionend调用多次的bug

            obj.addEventListener('transitionend',function(){
                if(!called){
                    callBack&&callBack.call(obj);//解决如果没有传入第四个callBack参数的问题
                    called=true;
                }

            },false);//事件三阶段，第三个参数决定是在捕获阶段还是冒泡阶段，调用此函数,false代表是在冒泡阶段
        }
// banner2
var ul= document.getElementById("list-banner")
 		var li=ul.getElementsByTagName("li");
        var n=0;
        var len=li.length;

        setInterval(function(){
            li[n].style.display="none";
            n=++n==len?0:n;
            li[n].style.display="block";

        },3000);//切换时间
 // windows的最后一个反括号
 // 百叶窗
 $(function(){
    // 幻灯片图片滑动
    var a =0;
    $("#slide>.slide_box").click(function(){
        var a = $(this).find(".navbox>.navtitle a").attr("href");
        window.open(a);
        return !1 
    }),
    $("#slide>.slide_box").mouseover(function(){
        var b =$(this).index();
        if(b!= a){
            $("#slide .navsumary").hide();
            $(this).find(".navbox>.navsumary").show();
            var c = "bg" + (b + 1);
            b < a && ($.browser.msie?(
                $(".slide_box").stop().animate({backgroundPositionX: "600px"}, 0).removeClass("bg1 bg2 bg3 bg4").addClass(c),
                $("#box_1").parent().stop().animate({backgroundPositionX: "0"}, 100),
                $("#box_2").parent().stop().animate({backgroundPositionX:"-150px"},200),
                $("#box_3").parent().stop().animate({backgroundPositionX: "-300px"},300),
                $("#box_4").parent().stop().animate({backgroundPositionX: "-450px"},400,
                function(){
                    $(".slide_box,#slide").removeClass("bg1 bg2 bg3 bg4").addClass(c);
                }
            )):(
                $(".slide_box").stop().animate({backgroundPosition:"600px 0"},0).removeClass("bg1 bg2 bg3 bg4").addClass(c),
                $("#box_1").parent().stop().animate({backgroundPosition:"0 0"},100),
                $("#box_2").parent().stop().animate({backgroundPosition:"-150px 0"},200),
                $("#box_3").parent().stop().animate({backgroundPosition:"-300px 0"},300),
                $("#box_4").parent().stop().animate({backgroundPosition: "-450px 0"},400,
                function(){
                    $(".slide_box,#slide").removeClass("bg1 bg2 bg3 bg4").addClass(c)
                }
            )), a = b),b > a &&($.browser.msie?(
                $(".slide_box").stop().animate({backgroundPositionX: "-450px" },0).removeClass("bg1 bg2 bg3 bg4").addClass(c),
                $("#box_1").stop().parent().animate({backgroundPositionX:"0"},400,
                    function(){
                        $(".slide_box,#slide").removeClass("bg1 bg2 bg3 bg4").addClass(c)
                    }
                ),
                $("#box_2").parent().stop().animate({ backgroundPositionX: "-150px" }, 300),
                $("#box_3").parent().stop().animate({backgroundPositionX: "-300px"}, 200),
                $("#box_4").parent().stop().animate({backgroundPositionX: "-450px"}, 100)):($(".slide_box").stop().animate({backgroundPosition:"-600px 0"},0).removeClass("bg1 bg2 bg3 bg4").addClass(c),
                $("#box_1").stop().parent().animate({backgroundPosition:"0 0"},400,
                    function(){
                        $(".slide_box,#slide").removeClass("bg1 bg2 bg3 bg4").addClass(c)
                    }
                ),
                $("#box_2").parent().stop().animate({backgroundPosition:"-150px 0"}, 300),
                $("#box_3").parent().stop().animate({backgroundPosition:"-300px 0"},200),
                $("#box_4").parent().stop().animate({backgroundPosition: "-450px 0"},100)
            ), a = b)
        }
    });
        
});
 // 特效
function stopss(){
   return false;
}
document.oncontextmenu=stopss;
        $(document).ready(function(){
                $('#ipresenter').iPresenter({
                    animSpeed: 3000,
                    timer: '360Bar',
                    timerDiameter: 60,
                    timerStroke: 5,
                    timerPadding: 5,
                    timerColor: '#000',
                    timerBg: '#FFF',
                    timerOpacity: 0.4,
                    directionNav: false,
                    controlNav: true
                });
            });
// 特效
jQuery(".Scroll-left").slide({
    titCell: ".hd ul",
    mainCell: ".bd ul",
    autoPage: true,
    effect: "left",
    autoPlay: true,
    vis: 3
});
// 特效
    var $guideSlider = $("#guideSlider").eq(0);
    
    $guideSlider.find(".guide-list .guide").hover(function() {
    $(this).addClass("on").siblings().removeClass("on");
    });
// 背景
// 定义图片路径 {num} 为 可变的图片序号
var bgImgUrl = 'http://api.asilu.com/cdn/img/bg/{num}.jpg', bgNum,
    bgImgArr = [],
    bgDiv = document.getElementById("bg");
// 组合数组 此处 200 为 图开始序号 结束 210
for (var i=200; i <= 210; i++){
    bgImgArr.push(bgImgUrl.replace('{num}', i));
}
setBGimg();
function setBGimg(d){
    if(!bgNum || bgNum >= bgImgArr.length) bgNum = 0;
    bgDiv.style.opacity = .001;
    setTimeout(function(){
        bgDiv.style.backgroundImage = 'url('+ bgImgArr[bgNum] +')';
        bgNum++;
        bgDiv.style.opacity = 1;
    }, 1000);
    if(typeof d == 'undefined')
    setInterval(function(){setBGimg(true);}, 6000);
    // 上一行的 6000 是背景图片自动切换时间(单位 毫秒)
}
// 打字特效
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = period || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false
};
TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1)
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var that = this;
  var delta = 150 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true
  } else {
    if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500
    }
  }
  setTimeout(function() {
    that.tick()
  },
  delta)
};
 // 1.  支持 getElementsByClassName 的情况下使用 (不兼容 IE8-)
var elements = document.getElementsByClassName("txt-rotate");
if (elements) {
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period)
    }
  }
}
// windows的最后一个空格
	}
// 文字闪烁
      function changeColor() { 
        var color="#f00|#0f0|#00f|#880|#808|#088|yellow|green|blue|gray"; 
         color=color.split("|");
         document.getElementById("blink").style.color=color[parseInt(Math.random() * color.length)]; 
        }
        setInterval("changeColor()",200);  

 
	