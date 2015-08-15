<?php 

$name        = $_POST['name'];
$email       = $_POST['email'];
$message     = $_POST['message'];
$formcontent = "From: $name \n Message: $message";
$recipient   = "augustine.wittkower@gmail.com";
$subject     = "Contact Form";
$mailheader  = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die(print_r(error_get_last()));
echo "Thank You!";

?>