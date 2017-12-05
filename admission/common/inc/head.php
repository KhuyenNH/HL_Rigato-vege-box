<?php
	//$cookieVar = $_GET['P'];
	if(isset($_GET['P'])){
	 $cookieVar = $_GET['P'];
	 setcookie( "admission", $cookieVar, 0, "/" );
	 }
?>