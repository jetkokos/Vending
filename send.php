<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';
    
	// Переменные
	$name = $_POST['name'];
    $tel = $_POST['tel'];
    $e_mail = $_POST['e_mail'];
    $good_name = $_POST['good_name'];
    $good_quantity = $_POST['good_quantity'];
    $comment = $_POST['comment'];
    
	// Настройки
	$mail = new PHPMailer;
	try {
    //Server settings
    $mail->SMTPDebug = 1;
    $mail->CharSet = "utf-8";                             // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'mail.vend-torg.ru';  		  // Specify main and backup SMTP servers (SMTP сервер почты, откуда посылается письмо, например - "smtp.yandex.ru")
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'info@vend-torg.ru';        	  // SMTP username (Логин почты, откуда посылается письмо)
    $mail->Password = 'githublol';           // SMTP password (Пароль почты, откуда посылается письмо)
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('info@vend-torg.ru');		  		//My e-mail (Почта, откуда посылается письмо - могут быть одинаковыми)
    $mail->addAddress('info@vend-torg.ru');            // Add a recipient (Почта, куда посылается письмо  - могут быть одинаковыми)
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    for ($ct = 0; $ct < count($_FILES['uploaded_file']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['uploaded_file']['name'][$ct]));
        $filename = $_FILES['uploaded_file']['name'][$ct];
        if (move_uploaded_file($_FILES['uploaded_file']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }
   

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Заявка с сайта';
    $mail->Body = "Имя: $name <br> Телефон: $tel <br> ";
    $mail->AltBody = "Имя: $name \r\n Телефон: $tel \r\n";
    

    $mail->send();
    echo 'Message has been sent';
    $answer = '1';
} catch (Exception $e) {
    $answer = '0';
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>	
