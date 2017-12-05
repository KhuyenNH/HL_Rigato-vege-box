jQuery(function($){
	/*アコーディオン　コンストラクタ
	-----------------------------------------------*/
	function accordion(_data){
		var thisE = this;
		this.activeClass = _data.activeClass;
		this.$btn = _data.$btn;
		this.$target = _data.$target;
		
		this.savedCSS = null;
		this.$btn.on('click',function(){this.blur();thisE.btnClicked();});
		
		this.onBeforeDisplayChange = function(){};
		if(typeof _data.onBeforeDisplayChange == 'function'){
			this.onBeforeDisplayChange = _data.onBeforeDisplayChange;
		}
		
		this.onAfterDisplayChange = function(){};
		if(typeof _data.onAfterDisplayChange == 'function'){
			this.onAfterDisplayChange = _data.onAfterDisplayChange;
		}
	}
	accordion.prototype.btnClicked = function(){
		this.displayChange(!this.$btn.hasClass(this.activeClass));
	}
	accordion.prototype.displayChange = function(_flg){
		this.onBeforeDisplayChange(_flg);
		
		var thisE = this;
		var elmCSS = this.savedCSS;
		if(!elmCSS){
			this.savedCSS = {
				height:this.$target.height(),
				marginTop:this.$target.css('margin-Top'),
				marginBottom:this.$target.css('margin-bottom'),
				paddingTop:this.$target.css('padding-Top'),
				paddingBottom:this.$target.css('padding-bottom')
			}
			elmCSS = this.savedCSS;
		}	
		if(_flg){//open
			this.$btn.addClass(this.activeClass);
			if(this.$target.css('display')=='none'){
				this.$target.css({
					height:0,
					marginTop:0,
					marginBottom:0,
					paddingTop:0,
					paddingBottom:0,
					overflow:'hidden',
					display:'block'
				});
			}
			this.$target.stop().animate({
				height:elmCSS.height,
				marginTop:elmCSS.marginTop,
				marginBottom:elmCSS.marginBottom,
				paddingTop:elmCSS.paddingTop,
				paddingBottom:elmCSS.paddingBottom
			},300,'swing',function(){
				thisE.elmCSS = null;
				thisE.$target.css({
					height:'',
					overflow:'',
					marginTop:'',
					marginBottom:'',
					paddingTop:'',
					paddingBottom:''
				});
				thisE.onAfterDisplayChange(_flg);
			});
		}else{//close
			this.$btn.removeClass(this.activeClass);
			this.$target.stop().slideUp(300,'swing',function(){
				thisE.elmCSS = null;
				thisE.$target.css({
					height:'',
					overflow:'',
					display:''//初期CSSが消えているため
				});
				thisE.onAfterDisplayChange(_flg);
			});
		}
	};

	
	/*クラス使用　汎用タイプ
	-----------------------------------------------*/
	(function(){
		
		var CLS = {
			wrap:'js_accordion_wrap',
			btn:'js_accordion_btn',
			trgt:'js_accordion_area',
			active:'open'
		}
		
		$('.'+CLS.wrap).each(function(){
			var $btn = $(this).find('.'+CLS.btn);
			var $trgt = $(this).find('.'+CLS.trgt);
			if($btn.length && $trgt.length){
				new accordion({
					activeClass:CLS.active,
					$btn:$btn,
					$target:$trgt
				});
			}
		});
		
	})();
	
	
});