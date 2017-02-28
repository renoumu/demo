$(function() {
	$('.header-menu ul li').click(function(event) {
		$(this).css('borderBottom', '3px solid #d90000')
		.children('a').css('color', '#d90000').parent()
		.siblings().css('borderBottom', 'none')
		.children('a').css('color', '#000000');
	});


	// 轮播图
	var num = 0;
	var timer;
	var nextFn = function(){
		//没加之前代表上一张，上一张淡出
		$('.banner-container li').eq(num).stop().fadeOut(1500);
		num++;
		if (num >= 3) {
			num = 0;
		}
		//更改完以后代表下一张，下一张淡入
		$('.banner-container li').eq(num).stop().fadeIn(1500);
		$('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
	}
	$('.btnList li').click(function(event) {           
	    var i=$(this).index();
	    //现在这个全局变量num就代表上一张
	    //没加之前代表上一张，上一张淡出
	    $('.banner-container li').eq(num).stop().fadeOut(1500);
	    //再让序号和num进行同步
	    num=i;
	    //重新赋值以后，num就代表下一张
	    //更改完以后代表下一张，下一张淡入
	    $('.banner-container li').eq(num).stop().fadeIn(1500);
	    $('.btnList li').eq(num).addClass('current').siblings('li').removeClass('current');
	}); 
	//自动走
	timer=setInterval(nextFn, 6000);
	//鼠标悬停时...
	$('.content-banner').hover(function() {
	    clearInterval(timer);
	}, function() {
	    clearInterval(timer);
	    timer=setInterval(nextFn, 6000);
	});

	// 公司公告
	$('.right-bottom-con li a').eq(0).css('color', '#d90000');

	// 每日资讯和财经资讯Tab切换逻辑
	$('.content-newworld-middle-top div').click(function(event) {
		$(this).removeClass('bgc-f7f7f7').addClass('checkBorder');
		$(this).siblings().removeClass('checkBorder').addClass('bgc-f7f7f7');
		var index = $(this).index();
		var $c = $('.content-newworld-middle-bottom>div:eq('+index+')');
		$c.removeClass().addClass('display').addClass('newworld-left-bottom-con');
		$c.siblings().removeClass().addClass('displayNone').addClass('newworld-left-bottom-con');
	});



	// 关于我们菜单点击效果
	$('.about-content-con-menu-list li').eq(0).css('backgroundColor', '#d90000').children('a').css('color', '#fff');
	$('.about-content-con-menu-list li').click(function(event) {
		$(this).css('backgroundColor', '#d90000').children('a').css('color', '#fff');
		$(this).siblings().css('backgroundColor', '#f5f5f5').children('a').css('color', '#5a5a5a');
	});
});