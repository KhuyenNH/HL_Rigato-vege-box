$(document).ready(function(){
var urlpath = new RegExp(/\/customer\/new_customer_edit1\?/g);
$('.cv-btn').on('click',function(){
	var that = $(this);
	$.ajax({
		url : '/shop/',
		type: 'GET',
		cache: false,
    	timeout: 30000,
    	dataType: 'html',
    	async: false
	}).then(
		function(data){
			var login = function login(){
				var value = $(data).find('.user').length;
					return value;
				};
			if(login() === 1){
				var alink = that.attr('href');
				alink = alink.replace(urlpath,'/catalog/detail/addCart?quantity=1&')
				that.attr('href',alink);
			}
		},
		function(data){}
		)
});

});
