// MENU

$(".button-collapse").sideNav();

$(document).ready(function(){
	$('.modal-trigger').leanModal();
});

$(".slide").cycle({
	fx:     'fade', 
    speed:  'slow', 
    timeout: 5000
});

$(document).ready(function() {
    $('select').material_select();
});

/*$(document).ready(function() {
	var lar =  $('body').width();
	if(lar > 1600){
		$("body p, body a, body span").css({"font-size":"2.0em"});
	}else{
		$("body p, body a, body span").css({"font-size":"1.6em"});
	}
});

$(window).resize(function (){
	var lar =  $('body').width();
	if(lar > 1600){
		$("body p, body a, body span").css({"font-size":"2.0em"});
	}else{
		$("body p, body a, body span").css({"font-size":"1.6em"});
	}
});*/



$(document).ready(function(){
	$('.slider').slider({full_width: true, interval: 3000});
	entrada();

	var rol = window.pageYOffset;
	if( rol > 200){
		$("#topo nav").removeClass("transparent");
		$("#topo nav").addClass("dark-blue");
		
	}else{
		$("#topo nav").removeClass("dark-blue");
		$("#topo nav").addClass("transparent");
	}
	
	var case_a = ($("#case li").width() * 1.5);
	$("#case li").css({"height":case_a});
	
});
$(window).scroll(function(){
	var rol = window.pageYOffset;
	
	if( rol > 200){
		$("#topo nav").removeClass("transparent");
		$("#topo nav").addClass("dark-blue");
	}else{
		$("#topo nav").removeClass("dark-blue");
		$("#topo nav").addClass("transparent");
		
	}
});

$(window).resize(function(){
	var case_a = ($("#case li").width() * 1.5);
	$("#case li").css({"height":case_a});
});

/*
function entrada(){
	setTimeout(pasok, 2000);
}

function pasok(){
	$("#entrada h1").css({"color":"red"})
	setTimeout(function(){
		$("#entrada").css({"background-color":"#ff9800","height":"0vh"})
		$(".geral").css({"display":"block"})
	}, 1000)
}
*/