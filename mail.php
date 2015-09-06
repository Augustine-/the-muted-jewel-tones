<?php 

require (__DIR__.'/vendor/phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer;

$mail->IsSMTP();
$mail->CharSet = 'UTF-8';

$mail->SMTPDebug = 2;
$mail->SMTPSecure = 'ssl';
$mail->Host       = "ssl://smtp.gmail.com"; // SMTP server example
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->Port       = 465;                    // set the SMTP port for the GMAIL server
$mail->Username   = "mutedjeweltones@gmail.com"; // SMTP account username example
$mail->Password   = "twomangentleman";        // SMTP account password example

$mail->From     = $_POST['email'];
$mail->FromName = $_POST['name'];
$mail->addAddress('augustine.wittkower@gmail.com', ' The Muted Jewel Tones');     // Add a recipient
$mail->addReplyTo('info@example.com', 'Information');
$mail->Subject = 'Contact Form Message';
$mail->Body    = $_POST['message'];

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
};

?>

