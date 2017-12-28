smoothScroll = function(){
	$("#welcomeset a[href^='#']").click(function(){
		var Hash = $(this.hash);
		var HashOffset = $(Hash).offset().top;
		$("html,body").animate({ scrollTop: HashOffset}, 'slow','swing');
		return false;
	});
}
lazyload = function(){
	/*IE8*/
	var userAgent = window.navigator.userAgent.toLowerCase();
	var appVersion = window.navigator.appVersion.toLowerCase();
	if(appVersion.indexOf("msie 8.") != -1) {
		$("#welcomeset .lazy,#welcomeset .bgLoad").lazyload({
			effect : "show",
			effectspeed: 1
		});
	}else{
		$("#welcomeset .lazy,#welcomeset .bgLoad").lazyload({
			effect : "fadeIn",
			effectspeed: 500
		});
	}
}
colorbox = function(){
	$(".popup_mv").colorbox({
		iframe:true,
		innerWidth:"767",
		innerHeight:"432",
		maxWidth:"100%",
		maxHeight:"90%",
		returnFocus:false
	});
}
imgChange = function(){
	var wid = $(window).width();
	if (wid < 768) {
		$('img').each(function () {
			$(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
		});
	}
	$(window).load(function () {
		if ((navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {

		} else {
			$(function () {
				var timer = false;
				$(window).resize(function () {
					if (timer !== false) {
						clearTimeout(timer);
					}
					timer = setTimeout(function () {
						location.reload();
					}, 200);
				});
			});
		}
	});
}
$(function(){
	smoothScroll();
	lazyload();
	colorbox();
	imgChange();
});

jQuery.fn.rollover = function(suffix) {
	suffix = suffix || '_on';
	var check = new RegExp(suffix + '\\.\\w+$');
	return this.each(function() {
		var img = jQuery(this);
		var src = img.attr('src');
		if (check.test(src)) return;
		var _on = src.replace(/\.\w+$/, suffix + '$&');
		jQuery('<img>').attr('src', _on);
		img.hover(
			function() { img.attr('src', _on); },
			function() { img.attr('src', src); }
		);
	});
};
$(function(){
	$('img.rollover').rollover();
});



/* Reponsive for meta
-------------------------------------- */
$(window).resize(function() {
    if (screen.width <= 767) {
        $('meta[name="viewport"]').attr('content', 'width=767, user-scalable=no, shrink-to-fit=no');
    } else if (screen.width <= 1110) {
        $('meta[name="viewport"]').attr('content', 'width=1350, user-scalable=no, shrink-to-fit=no');
    } else {
        $('meta[name="viewport"]').attr('content', 'width=device-width, user-scalable=no, shrink-to-fit=no');
    }
}).resize();

/* Slider thumbnail
-------------------------------------- */
$(".slider_thumb").slick({
	centerPadding: '220px',
    dots: true,
	arrows: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
/* Accordion
-------------------------------------- */
var open = 'images/btn_open.png';
var close = 'images/btn_close.png';

$('.accordion_prev').click(function(event) {
	event.preventDefault();
	var thisElem = $(this).find('img');
	if (thisElem.attr('src') === open) {
		thisElem.attr('src', close);
	} else {
		thisElem.attr('src', open)
	}

	$(this).stop().prev().slideToggle();
});
var arrow_up = 'images/arrow_up.png';
var arrow_down = 'images/arrow_down.png';
$('.accordion_text').click(function(event) {
	event.preventDefault();
	var thisElem = $(this).find('img');
	if (thisElem.attr('src') === arrow_up) {
		thisElem.attr('src', arrow_down);
	} else {
		thisElem.attr('src', arrow_up)
	}
	$(this).stop().prev().toggleClass('collapse');
});
