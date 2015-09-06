<?php 

require '/vendor/phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

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

