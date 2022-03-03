<?php
ini_set('display_errors','On');
error_reporting('E_ALL');

$fio = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);
$fio = urldecode($fio);
$email = urldecode($email);
$text = urldecode($text);
$fio = trim($fio);
$email = trim($email);
$text = trim($text);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("Kristinaserebro2603@gmail.com", "Вопрос с сайта Parikmag", "ФИО: ".$fio."\n Вопрос: ".$text."\n E-mail: ".$email ,"From: .$email \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
// 4QwL^y&nkgJnGVOJMA#m
?>