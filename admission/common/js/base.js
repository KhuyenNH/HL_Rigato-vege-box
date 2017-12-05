/* base funtions
=========================================== */
var commonEffect = {
  setInit : function(){
    this.smoothScroll();
    this.naviActive();
	},
  smoothScroll : function(){
    // link scroll
    $('a[href^="#"]').click(function(){
      var the_id = $(this).attr("href");
      $('html, body').animate({
          scrollTop:$(the_id).offset().top
      }, 1000);
     return false;
    });
  },
  naviActive : function(){
    var actObj = $("body").data("nav");

    $("#gnav").find("ul > li."+ actObj +" > a").addClass("active");
  }
}


/* hover image effect
=========================================== */
var rollover = {
  setInit : function(){
    rollover.p = new Object();
    $("img.mover[src!='_on.']").each(function(){
      var n = this.src;
      var t = n.slice(n.lastIndexOf('.'));
      var o = n.replace(t, '_on'+t);
      
      var basename = n.substring(0, n.length - t.length);
      var check_o = basename.substring(basename.length - 2, basename.length);
      
      if(check_o  != "_on"){
        if(!rollover.p[n]){
          rollover.p[n] = new Image();
          rollover.p[n].src = n;
          rollover.p[o] = new Image();
          rollover.p[o].src = o;
        }
        $(this).hover(
        function(){ this.src = rollover.p[o].src; },
        function(){ this.src = rollover.p[n].src; }
        );
      }
    });  
  }
}
	
	
/* ===========================================
* START
=========================================== */
$(document).ready(function(){
	// common Effect
	commonEffect.setInit(); 
	rollover.setInit();
	
	// nav slid number 
	var navObj = $("body").data("nav");
	
	if(navObj !== undefined){
	console.log(navObj);
	var navObjString = (navObj.slice(-1));
	if(navObjString == 0){
		var navObjNum = 0;
	}else{
		var navObjNum = navObjString-2;
	}
	}
  /* global navi slider */
	var gMenu = $('.bxslider').bxSlider({
		slideWidth: "256",
		auto: false,
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 1,
		infiniteLoop: true,
		pager: false,
		responsive: true,
		startSlide:navObjNum
	});
	
	if($('#gnav').length){
		$(window).resize(function(){
			if($(this).width() < 768) {
				gMenu.reloadSlider();
			}else{
				gMenu.destroySlider();
			}
		}).trigger("resize");
	}
});


$(function(){
  $(".popup").on('click',function(){
      if($(window).width() > 767) {
        $(this).colorbox({iframe:true, width:"910", height:"80%"});
      }
  });
  $(".popup_item").on('click',function(){
    if($(window).width() > 767) {
        $(this).colorbox({iframe:true, innerWidth:"900", height:"550",returnFocus:false});
      }
  });
  $(".popup_mv").on('click',function(){
    if($(window).width() > 767) {
        $(this).colorbox({iframe:true, innerWidth:"767", innerHeight:"432",returnFocus:false});
      }
  });
});

$(function(){
  //リンクの書き換え
    var adm = 'admission';
    var dir = location.pathname.split("/");
    console.log(dir);
    if( adm != dir[1] ){
    $('#gnav li a, .fnav li a').each(function(){
      var replaceLink = $(this).attr('href').replace(adm,dir[1]);
      $(this).attr('href',replaceLink);
    });
	var href = $('.afterBtn a').attr('href',"/"+dir[1]);
  };

  //資料請求番号について
  if($.cookie('admission')){
	var plm = $.cookie('admission');
  	$('.cv-btn').each(function(){
    	$(this).attr('href', $(this).attr('href') +"&refarenceNo="+ plm);
    });
    $('.bro-btn').each(function(){
      $(this).attr('href', $(this).attr('href') +'?P='+ plm);
    });
  }else{
    switch(dir[2]){
      case '':
      case 'index.html':
        $('.cv-btn').each(function(){
          $(this).attr('href', $(this).attr('href') +"&refarenceNo=4572");
        });
      break;
      case 'palette.html':
        $('.cv-btn').each(function(){
          $(this).attr('href', $(this).attr('href') +"&refarenceNo=4558");
        });
      break;
      case 'lp':
        $('.cv-btn').each(function(){
          $(this).attr('href', $(this).attr('href') +"&refarenceNo=4586");
        });
      break;
    }
  }
});
//clickイベント
$(function(){
 $('.cv-btn').on('click',function(){
    var cvURL = $(this).attr('href');
    var Category = cvURL.match(/RR1|000|commodityCode/);
      localStorage.setItem('prodact',Category[0]);
  });
});


$(function(){
  $('.offerBtn').on('click',function(){
   $('#cboxOverlay,#colorbox',parent.document).css({visibility:'hidden'});
 });
});
