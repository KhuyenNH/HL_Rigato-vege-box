$(function(){
  var getCookie = function(key){
    var val = document.cookie.match(new RegExp('(^|\\s)'+key+'=([^;]+)'));
    return !!val && unescape(val[2]);
  };

  if(getCookie("admission") == 4710){
  	$('.send-msg').css('display','none');
  	$('#detail #price').prepend('<p style="color: #900; font-weight: bold; font-size: 14px; text-align: left;">※販売価格はご請求時にお値引きいたします。</p>');
  	$('.note').prepend('<p style="color: #900; font-weight: bold; font-size: 18px;">※販売価格は、ご請求時にお値引きいたします。お買いものカゴやメール内では通常価格が表示されます。<br>※お届け方法をヤマト宅急便に選択されてる場合はヤマト宅急便配料のみ発生いたします。</p>');
  };
});