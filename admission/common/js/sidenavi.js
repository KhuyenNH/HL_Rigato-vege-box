//ページロード時
(function(){
	var CLASS = {
		active:'location',
		accordionWrap:'js_accordion_wrap',
		accordionArea:'js_accordion_area',
		accordionBtn:'js_accordion_btn',
		accordionOpen:'open'
	}
	
	var pathName = location.pathname;
	
	//indexをスラッシュ止めに変換
	var removeFilename = ['/index.html','/index.htm','/index.shtml','/index.shtm'];
	for(var i=0;i<removeFilename.length;i++){
		var reg = new RegExp(removeFilename[i]+"$");
		if (pathName.match(reg)) {
    		pathName = pathName.substring(0,pathName.lastIndexOf(removeFilename[i]))+'/';
		}
	}
	
	//アンカーリンク対応　ハッシュ値を結合
	var hash = location.hash;
	if(hash){pathName+=hash;}
	
	
	//後方一致によるデータ決定、複数ヒット時にはパスの長い方を採用
	var activeData = null;
	for(var i=0;i<DATA.length;i++){
		var pathReg = new RegExp(DATA[i][0]+"$");
		if (pathName.match(pathReg)) {
			if(!activeData){
				activeData = DATA[i];
			}else{
				activeData = (activeData[0].length<=DATA[i][0].length)?DATA[i]:activeData;
			}
		}
	}
	
	
	//対象idにアクティブ処理
	if(activeData){
		for(var i=1;i<activeData.length;i++){
			
			var $trg = $('#'+activeData[i]).addClass(CLASS.active);
			
			//アコーディオン展開
			var $accordionWrap = $trg.parents('.'+CLASS.accordionWrap);
			if($accordionWrap.length){
				$accordionWrap.find('.'+CLASS.accordionArea).css({display:'block'});
				$accordionWrap.find('.'+CLASS.accordionBtn).addClass(CLASS.accordionOpen);
			}
			
		}
	}
	
	//アンカーリンク
	$('#side_navi a:not(.'+CLASS.accordionBtn+')').on('click',function(){
		$('#side_navi .'+CLASS.active).removeClass(CLASS.active);
		$(this).addClass(CLASS.active);
	});
	
})();
