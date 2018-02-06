/*
Author:kermit
Email:455196886@qq.com
Company:http://dragontrail.com/
Creattime:2017-1-18
*/


export default function() {
	var common = {};
	common.screenWidth = document.body.offsetWidth;
	common.screenHeight = document.body.offsetHeight;
	common.browser = function(){
   		var u = navigator.userAgent, app = navigator.appVersion;   
       	return {//移动终端浏览器版本信息   
            trident: u.indexOf('Trident') > -1, //IE内核  
            presto: u.indexOf('Presto') > -1, //opera内核 
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            wechat: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger' //是否微信内置浏览器
        };
	}()
	return common;
}


// 公共js
// var Common = function() {
// 	var common = this;
// 	common.screenWidth = $(window).width();
// 	common.screenHeight = $(window).height();
// 	//浏览器的判断
// 	common.browser = function(){
//    		var u = navigator.userAgent, app = navigator.appVersion;   
//        	return {//移动终端浏览器版本信息   
//             trident: u.indexOf('Trident') > -1, //IE内核  
//             presto: u.indexOf('Presto') > -1, //opera内核 
//             webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
//             gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
//             mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
//             ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//             android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
//             iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
//             iPad: u.indexOf('iPad') > -1, //是否iPad
//             webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
//             wechat: u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger' //是否微信内置浏览器
//         };
// 	}()
// 	//获取cookie
//  	common.GetCookie = function(name){
// 		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
// 		if(arr=document.cookie.match(reg))
// 		return unescape(arr[2]);
// 		else
// 		return null;
//  	}
//  	//写cookie
//  	common.SetCookie = function(name,value,day){
// 		var exp = new Date();
// 		exp.setTime(exp.getTime() + day*24*60*60*1000);
// 		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+"; path=/";
//  	}
// 	//页面窗口变化
// 	common.WindowResize = function(){
// 		$(window).resize(function(event){
// 			common.screenWidth = $(window).width();
// 			common.screenHeight = $(window).height();
// 			//console.log('WindowResize',common.screenWidth,common.screenHeight);
// 		});
// 	}
// 	//toast提示
// 	common.Toast = function(text){
// 		$('body').append('<div class="toast animated fadeIn">'+text+'</div>');
// 		setTimeout(function(){
// 			$(".toast").remove();
// 		},2000);
// 	};
// 	//页面滚动
// 	common.WindowScroll = function(){
// 		$(window).on('scroll',function(){
// 			var scrollTop = $(window).scrollTop();
// 			//console.log('scrollTop',scrollTop);
// 		});
// 	}
// 	//初始化
// 	common.Init = function(){
// 		//console.log('common init');
// 		//console.log('common.browser',common.browser);
// 		common.WindowResize();
// 		common.WindowScroll();
// 	}
// }
// var Common = new Common();
// Common.Init();
