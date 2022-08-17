<?php
	// определяем IP-адрес клиента, зашедшего на сайт  ( clientIp - полученный IP-адрес клиента )
	$client  = @$_SERVER['HTTP_CLIENT_IP'];
	$forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
	$remote  = @$_SERVER['REMOTE_ADDR'];
 
	if(filter_var($client, FILTER_VALIDATE_IP)) 
		$clientIp = $client;
		elseif(filter_var($forward, FILTER_VALIDATE_IP)) 
			$clientIp = $forward;
			else 
				$clientIp = $remote;	
?>