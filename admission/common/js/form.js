$(function(){
	var strServiceType = $("#serviceType").val(),
	strPlanClassCode = $("#planClassCode").val(),
	strApplicationNo = $("#applicationNo").val(),
	strCommodityCode = $("#commodityCode").val(),
	refarenceNo = $("#refarenceNo").val(),
	img;

	var contractName = {
		"0004" : "フルーツバスケットミニmini",
		"0011" : "いと愛づらし野菜セット",
		"0204" : "ぱれっと７選",
		"0205" : "ぱれっと７選たまご６個つき",
		"0206" : "ぱれっと７選たまご１０個つき",
		"0201" : "ぱれっと７選＋果物",
		"0202" : "ぱれっと７選＋果物たまご６個つき",
		"0203" : "ぱれっと７選＋果物たまご１０個つき",
		"0211" : "ぱれっと１０選",
		"0212" : "ぱれっと１０選たまご６個つき",
		"0213" : "ぱれっと１０選たまご１０個つき",
		"0214" : "ぱれっと１０選＋果物",
		"0215" : "ぱれっと１０選＋果物たまご６個つき",
		"0216" : "ぱれっと１０選＋果物たまご１０個つき",
		"0221" : "ぱれっと１２選",
		"0222" : "ぱれっと１２選たまご６個つき",
		"0223" : "ぱれっと１２選たまご１０個つき",
		"0251" : "ぱれっと７選プチ＋果物",
		"0252" : "ぱれっと７選プチ＋果物たまご６個つき",
		"0253" : "ぱれっと７選プチ＋果物たまご１０個つき",
		"0241" : "ぱれっと１０選プチ",
		"0242" : "ぱれっと１０選プチたまご６個つき",
		"0243" : "ぱれっと１０選プチたまご１０個つき",
		"0244" : "ぱれっと１０選プチ＋果物",
		"0245" : "ぱれっと１０選プチ＋果物たまご６個つき",
		"0246" : "ぱれっと１０選プチ＋果物たまご１０個つき",
		"0256" : "しきさいぱれっと",
		"0261" : "ぱれっと７選プチ",
		"0262" : "ぱれっと７選プチたまご６個つき",
		"0263" : "ぱれっと７選プチたまご１０個つき",
		"0276" : "らくらくぱれっと",
		"0291" : "産地限定ぱれっと７選プチ＋果物",
		"0292" : "産地限定ぱれっと７選プチ＋果物たまご６個つき",
		"0293" : "産地限定ぱれっと７選プチ＋果物たまご１０個つき",
		"0294" : "産地限定ぱれっと７選プチ",
		"0295" : "産地限定ぱれっと７選プチたまご６個つき",
		"0296" : "産地限定ぱれっと７選プチたまご１０個つき",
		"0297" : "産地限定７選＋果物",
		"0298" : "産地限定７選＋果物たまご６個つき",
		"0299" : "産地限定７選＋果物たまご１０個つき",
		"0317" : "厳選ひもの・漬け魚セレクト",
		"0334" : "旨味たっぷり国産若鶏セレクト",
		"0336" : "豚肉バラエティセレクト",
		"0342" : "季節の野菜・果物セレクト",
		"0343" : "旬のフルーツセレクト",
		"0346" : "楽しく作る 季節のお菓子キット",
		"0376" : "みんなの健康を考えた野菜たち30本",
		"0378" : "私が仕上げる10分キット倶楽部",
		"1010" : "らでぃっしゅクラブSセット",
		"1020" : "らでぃっしゅクラブMセット",
		"1030" : "らでぃっしゅクラブLセット",
		"1040" : "らでぃっしゅクラブ野菜・果物なしセット",
		"1050" : "らでぃっしゅクラブ野菜・果物セット"
	};

if ( strServiceType == "1" || strServiceType == "2" || strServiceType == "4") {
	//画像のURL作成
	var cont_img_url,cont_img_alt,img;
	var m = /4688|4698|4699|4713|4721|4722|4723/;
	try{
		cont_img_url = (refarenceNo.match(m))
			?'/admission/form/' + strApplicationNo + '_' + refarenceNo + '.jpg'
			:'/admission/form/' + strApplicationNo + '.jpg',
		cont_img_alt = contractName[strApplicationNo] + "のお申し込み",
		img = $('<img>').attr('src',cont_img_url);
	}
	catch(e){
		cont_img_url = '/admission/form/' + strApplicationNo + '.jpg',
		cont_img_alt = contractName[strApplicationNo] + "のお申し込み",
		img = $('<img>').attr('src',cont_img_url);
	};
	switch (refarenceNo){
		case '4688':
		case '4698':
			$('#contract_name').prepend(img);
			$('#contract_name img').attr({'alt':cont_img_alt,'width':'100%'});
			$('#contract_name img').after('<p><span style="font-size: 12px;font-weight: normal;">※確認画面では通常価格が表示されていますが、実際の請求額は初回お届けを含む4週間連続でご注文いただいたお客様に限り、キャンペーン価格にてお届けします。</span></p>');
			break;
		case '4710':
			$('#contract_name').prepend('<p>ぱれっと4週間連続お試しキャンペーン のお申し込み<br><span style="color: #900;">※販売価格は、ご請求時にお値引きいたします。ご注文フォームやメール内では通常価格が表示されます。<br>※お届け方法をヤマト宅急便に選択されてる場合はヤマト宅急便配料のみ発生いたします。</span></p>');
			break;
		case '30005':
			if(strApplicationNo === '0378'){
				$('#contract_name').prepend('<p>'+ contractName[strApplicationNo] +' のお申し込み</p>');
			}
			break;
		case '4712'://980円
			if(strApplicationNo === '0251'){
				$('#contract_name').prepend('<p>'+ contractName[strApplicationNo] +' 4週間連続お試しキャンペーンのお申し込み<br><span style="font-size: 16px;font-weight: normal;">※確認画面で料金が表示されますが実際には減額されます。</span></p>');
			}
			break;
		case '4713':
			if(strApplicationNo === '0261'){
				$('#contract_name').prepend(img);
				$('#contract_name img').attr({'alt':cont_img_alt,'width':'100%'});
				//$('#contract_name').prepend('<p>'+ contractName[strApplicationNo] +' 4週間野菜生活体験モニター募集キャンペーン<br><span style="font-size: 16px;font-weight: normal;">※確認画面では通常価格1,770円が表示されていますが、実際の請求額は初回お届けを含む4週間連続でご注文いただいたお客様に限り、1回740円（税別）にてお届けします。</span></p>');
			}
			break;
		case '4721'://野菜の日
			if(strApplicationNo === '0251'){
				$('#contract_name').prepend(img);
				$('#contract_name img').attr({'alt':cont_img_alt,'width':'100%'});
			}
			break;
		case '4722'://グルーポン
			if(strApplicationNo === '0251'){
				$('#contract_name').prepend(img);
				$('#contract_name img').attr({'alt':cont_img_alt,'width':'100%'});
			}
			break;
		default: // 申し込み番号に応じた、商品名を表示する
			$('#contract_name').prepend(img);
			$('#contract_name img').attr({'alt':cont_img_alt,'width':'100%'});
			break;
		}
		//送料に関するモーダル
}else if(strServiceType == "3"){
		switch (strApplicationNo){
		 case '9244':
			$('#contract_name').prepend('<p>登録サービス　地球まるごとごっくん牛乳９００ｍｌ（２本） のお申し込み</p>');
			break;
		}
}else{
		switch (strCommodityCode){
		 case '300705':
			$('#contract_name').prepend('<p>おためしぱれっと のお申し込み(お1人様1回、1種類のみ)</p><p class="caution" style="color: red; font-size: 14px;">※プレゼント等でご注文主様とお届け先様が異なる場合は、お届け先様にお届け日を事前にお伝えください。<br>ヤマト伝票の送り主名は「らでぃっしゅぼーや」で印字されます。</p>');
			break;
		 case '315940':
			$('#contract_name').prepend('<p>ウェルネス　おためしセット のお申し込み(お1人様1回、1種類のみ)</p><p class="caution" style="color: red; font-size: 14px;">※プレゼント等でご注文主様とお届け先様が異なる場合は、お届け先様にお届け日を事前にお伝えください。<br>ヤマト伝票の送り主名は「らでぃっしゅぼーや」で印字されます。</p>');
			break;
		 case '314025':
			$('#contract_name').prepend('<p>大人気！冷凍惣菜おためしセット のお申し込み</p><p class="caution" style="color: red; font-size: 14px;">※「宝石いちご入り11品おためしセット」もしくは、「大人気！冷凍惣菜おためしセット」どちらか1回の購入とさせていただきます。</p>');
			break;
		 case '318270':
			$('#contract_name').prepend('<p>「1,980円で試せる10分キット&果物おためしセット」 のお申し込み</p><p class="caution" style="color: red; font-size: 14px;">※着日に「月曜日」を選択された場合、「彩り5種野菜の黒酢酢豚」、「Rigato豆乳蒟蒻麺」はお届け日当日が賞味期限となります。あらかじめご了承ください。</p>');
			break;
		 default:
    		$('#contract_name').prepend('<p>初回限定おためしセットのお申し込み(お1人様1回、1種類のみ)</p><p class="caution" style="color: red; font-size: 14px;">※プレゼント等でご注文主様とお届け先様が異なる場合は、お届け先様にお届け日を事前にお伝えください。<br>ヤマト伝票の送り主名は「らでぃっしゅぼーや」で印字されます。</p>');
			break;
		}
	}


// if(strServiceType == "1"){
// 			//送料について
// 			var modalElement ='<p>10月2日のお届け分より、配送料が代わります。 <br>詳しくは<a href="#" id="send_list_btn">こちら</a></p>'+'<div class="send_list off">'+'<div class="send_list_inner">'+'<div class="clearfix">'+'<button class="close"><i class="fa fa-times" aria-hidden="true"></i>閉じる</button>'+'</div>'+'<div class="send_list_table">'+'<h3>新配送料（らでぃっしゅぼーや専用車）</h3>'+'<table class="c-table__box">'+'<tbody>'+'<tr>'+'<th class="c-table__bg_gray">ご注文金額（税抜）*1</th>'+'<th class="c-table__bg_gray">ぱれっとのみ<br>ばれっと &amp; 注文品*2<br>らでぃっしゅクラブ</th>'+'<th class="c-table__bg_gray">注文品*2のみ</th>'+'</tr>'+'<tr>'+'<th class="c-table__bg_gray">5,000円以上</th>'+'<td>0円</td>'+'<td>0円</td>'+'</tr>'+'<tr>'+'<th class="c-table__bg_gray">3,000〜4,999円</th>'+'<td>180円</td>'+'<td>300円</td>'+'</tr>'+'<tr>'+'<th class="c-table__bg_gray">3,000円未満</th>'+'<td>280円</td>'+'<td>500円</td>'+'</tr>'+'</tbody>'+'</table>'+'</div>'+'<div class="send_list_table">'+'<h3>2017年9月4週お届けまで（旧配送料）</h3>'+'<table class="c-table__box" colspan="2">'+'<tbody>'+'<tr>'+'<th class="c-table__bg_gray" scope="col" rowspan="2">ご注文金額*1</th>'+'<th class="c-table__bg_gray" scope="col" colspan="3">配送料</th>'+'</tr>'+'<tr>'+'<th class="c-table__bg_gray" scope="col">ぱれっとのみ</th>'+'<th class="c-table__bg_gray" scope="col">ぱれっと+注文品*2<br> らでぃっしゅクラブ（追加注文含む）'+'</th>'+'<th class="c-table__bg_gray" scope="col">左記以外</th>'+'</tr>'+'<tr>'+'<th class="c-table__bg_gray" colspan="1">8,000円以上<br> （8,640円以上）'+'</th>'+'<td rowspan="5">0円</td>'+'<td>0円</td>'+'<td>0円</td>'+'</tr>'+'<tr>'+'<th class="c-table__bg_gray">6,000円以上<br> （6,480円以上）'+'</th>'+'<td>100円</td>'+'<td>250円</td>'+'</tr>'+'<tr>'+'<th class="c-table__bg_gray">4,000円以上<br> （4,320円以上）'+'</th>'+'<td>150円</td>'+'<td>300円</td>'+'</tr>'+'<tr>'+'<th class="c-table__bg_gray">3,000円以上<br> （3,240円以上）'+'</th>'+'<td>250円</td>'+'<td>400円</td>'+'</tr>'+'<tr>'+'<th class="c-table__bg_gray">3,000円未満<br> （3,240円以上）'+'</th>'+'<td>350円</td>'+'<td>500円</td>'+'</tr>'+'</tbody>'+'</table>'+'</div>'+'<p>*1 産直品など、配送料を含む一部商品は、ご注文金額合計対象外です。</p>'+'<p>*2 注文品･･･ぱれっと以外の商品（単品商品や登録サービス、準定期品（頒布会）などの注文のことです。ぱれっとのお届けをお休みされている場合は適用されません。</p>'+'<button class="close"><i class="fa fa-times" aria-hidden="true"></i>閉じる</button>'+'</div>'+'</div>';
//             var h = $('html').height();

//             $('#msg').append(modalElement);
//             $('#send_list_btn, .close').on('click', function () {
//                 $('.off').fadeToggle();
//                 $('body').toggleClass('no-scroll');
//                 return false;
//             })
// }
});