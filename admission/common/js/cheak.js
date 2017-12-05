 $(function(){
 	$.ajax({
 	  url: '/admission/dev/test.php',
 	  dataType: 'text'
 	}).then(
 		function(data){
 			//console.log(data);
 			var flag = data;
 			if(flag === '1'){
 				otameshi_up = 1;
 			};
 		},
 		function(data){
 			console.log('ng');
 		}
 	)
 });