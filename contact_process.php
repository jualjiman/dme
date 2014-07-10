<?php
	$emailto = "Juan Alberto Jimenez Angel <jualjiman@gmail.com>, Juan Alberto Jimenez <blow.it.away@live.com.mx>";//"Alejandro Zarco González <alejandrozarco@emdmexico.com>, Alejandro Villamizar <alejandrovillamizar@emdmexico.com>";
	//
	$subject = "Contacto emdmexico.com";
	
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = "Mensaje desde emdmexico.com.\n\n ".$_POST["message"]."\n\n-------------------------------\nInformación del remitente:\n\nNombre:\n ".$name."\n\nEmail:\n ".$email;

	$headers   = array();
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-type: text/plain; charset=iso-8859-1";
	$headers[] = "From: ".$name." <".$email.">";
	$headers[] = "Subject: ".$subject;
	$headers[] = "X-Mailer: PHP/".phpversion();
	
	$message_info = mail( $emailto, $subject, $message, implode( "\r\n",$headers ) );
	
	if( $message_info === true ){
		echo '[OK]';
	}
	else{
		echo '[NOK]';
	}
?>