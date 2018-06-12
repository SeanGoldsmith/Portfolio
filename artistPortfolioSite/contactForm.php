<?php

	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$mailFrom = $_POST['mail'];
	$message = $_POST['message'];

	$mailTo = "seangoldsmith@goldsmithweb.com";
	$headers = "From: ".$mailFrom;
	$txt = "You have recieved an email from ".$name.".\n\nSubject: ".$subject."\n\n".$message;

	mail($mailTo, $subject, $txt, $headers);
    header('Location: contact.php');
    exit;