<?php
	$emailto = "Juan Alberto Jimenez Angel <jualjiman@gmail.com>";
	$subject = "Contacto emdmexico.com";
	
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $name." Mensaje desde emdmexico.com.\nMensaje:\n ".$_POST["message"]."\n\nInformación del remitente mensaje:\nNombre:\n ".$name."\n\nEmail:\n ".$email;

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