<?php 
	error_reporting(0);
	$to = 'info@artemgonchar.com';
	if($_POST['param']){
		$param = json_decode($_POST['param']);
		
		$title = $param->title;
		$phone = $param->phone;	
		$name = $param->name;	
		$message = $param->message;
				
		$subject = $title. " " . $phone ;
		$bodyWindows = '<br>';
			$message = '
				   <html>
					   <head>
						   <title>'.$subject.'</title>
					   </head>
					   <body>
							<p>Имя: '.$name.'</p>  
							<p>Телефон: '.$phone.'</p>   
							<p>Вопрос: '.$message.'</p>   	
							'.$bodyWindows.'                      
					   </body>
				   </html>';
		$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	    $headers .= "From: " . $phone ."\r\n";
	    $result = mail($to, $subject, $message, $headers);
		echo json_encode($result);
}