<?php
 $imgpath =  (empty($_SERVER["HTTPS"]) ? "http://" : "https://").$_SERVER["HTTP_HOST"];
 function imgPath(){
	echo "$imgpath/admission/";
};
//CDN用のパスに変更
 function cdnPath(){
	 $host = $_SERVER["HTTP_HOST"];
	if($host === 'stg.radishbo-ya.co.jp'){
		echo "//contstg.radishbo-ya.co.jp" ;
	}elseif($host === 'www.radishbo-ya.co.jp'){
		echo "//cont.radishbo-ya.co.jp" ;
	}
  };
//キャッシュ対策
 function filedata($filename) {
  if (file_exists($filename)) {
    echo date('YmdHis', filemtime($filename));
  } else {
    echo date('H',time());
  }
};

//パラメーターを参照してheaderの文言の出しわけ
 function snsHeader(){
  $parameter = $_GET["utm_source"];
    switch(true){
      case preg_match("/facebook/i",$parameter) === 1 :
        echo <<< EOM
            <header class="limit" id="header">
            <div class="container facebook">
            <h1>Facebookユーザーにおすすめ！期間限定商品</h1>
            </div>
            </header>
EOM;
        break;

      case preg_match("/twitter/i",$parameter) === 1 :
        echo <<< EOM
            <header class="limit" id="header">
            <div class="container twitter">
            <h1>Twitterユーザーにおすすめ！期間限定商品</h1>
            </div>
            </header>
EOM;
        break;

      case preg_match("/smartnews/i",$parameter) === 1 :
        echo <<< EOM
            <header class="limit" id="header">
            <div class="container smartnews">
            <h1>SmartNewsユーザーにおすすめ！期間限定商品</h1>
            </div>
            </header>
EOM;
        break;

      case preg_match("/ameba/i",$parameter) === 1 :
        echo <<< EOM
            <header class="limit" id="header">
            <div class="container ameba">
            <h1>Amebaユーザーにおすすめ！期間限定商品</h1>
            </div>
            </header>
EOM;
        break;

      case preg_match("/line/i",$parameter) === 1 :
        echo <<< EOM
            <header class="limit" id="header">
            <div class="container line_user">
            <h1>LINEユーザーにおすすめ！期間限定商品</h1>
            </div>
            </header>
EOM;
        break;
      case preg_match("/jcom/i",$parameter) === 1 :
        echo <<< EOM
            <header class="limit" id="header">
            <div class="container jcom">
            <h1>J:COMをご覧いただいた方限定キャンペーン！</h1>
            <p>お電話での申し込みはこちらから　<br><a href="tel:0120831065">0120-831-065</a></p>
            </div>
            </header>
EOM;
        break;
      case preg_match("/ibm_nic_radish/i",$parameter) === 1 :
        echo <<< EOM
            <header class="limit" id="header">
            <div class="container ibm-nic">
            <h1>IBM/NIC社員限定</h1>
            </div>
            </header>
EOM;
        break;
      case preg_match("/kurashiru/i",$parameter) === 1 :
        echo <<< EOM
            <header class="limit" id="header">
            <div class="container kurashiru">
            <h1>kurashiruユーザーにおすすめ！期間限定商品</h1>
            </div>
            </header>
EOM;
        break;
      case preg_match("/snscampaign_radish/i",$parameter) === 1 :
        echo <<< EOM
            <header class="limit" id="header">
            <div class="sns_container snscampaign_radish">
            <h1>第1回野菜選挙「苦手キノコ編」応募者限定</h1>
            </div>
            </header>
EOM;
        break;
    };
};

 function companyHeader(){
  $companyParam = $_GET["P"];
    switch(true){
      case preg_match("/8004/i",$companyParam) === 1 :
        echo <<< EOM
            <header class="limit company_header">
            <div class="company_container">
            <h1>富士通グループ社員様向け割引</h1>
            </div>
            </header>
EOM;
        break;

      case preg_match("/8586/i",$companyParam) === 1 :
        echo <<< EOM
            <header class="limit company_header">
            <div class="company_container">
            <h1>大日本印刷社員様向け割引</h1>
            </div>
            </header>
EOM;
        break;

      case preg_match("/8587/i",$companyParam) === 1 :
        echo <<< EOM
            <header class="limit company_header">
            <div class="company_container">
            <h1>J-WAVE社員様向け割引</h1>
            </div>
            </header>
EOM;
        break;

      case preg_match("/4701/i",$companyParam) === 1 :
        echo <<< EOM
            <header class="limit company_header">
            <div class="company_container">
            <h1>学研社員様向け割引</h1>
            </div>
            </header>
EOM;
        break;

    };
};

