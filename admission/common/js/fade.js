$(document).ready(
	function(){
		$("body .fade").hover(function(){
			$(this).fadeTo("fast", 0.5);
		},function(){
			$(this).fadeTo("fast", 1.0);
		});


		$("body .fade_f").hover(function(){
			$(this).css("opacity", 0.5);
		},function(){
			$(this).css("opacity", 1.0);
		});

	});