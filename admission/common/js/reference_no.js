function getParam() {
    var url   = location.href;
    parameters    = url.split("?");
    params   = parameters[1].split("&");
    var paramsArray = [];
    for ( i = 0; i < params.length; i++ ) {
        neet = params[i].split("=");
        paramsArray.push(neet[0]);
        paramsArray[neet[0]] = neet[1];
    }

    var qsReferenceNo = paramsArray["P"];
	if (!qsReferenceNo) {
	qsReferenceNo = "";
	} 

  return qsReferenceNo;
    }

function setQueryString(obj) {
  var param = getParam();
  if( param != "" ){
	  var setParam = "&refarenceNo=" + param;
	  obj.href = obj.href + setParam;
  }
}