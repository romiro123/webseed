<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
require 'telegram/TelegramSender.php';

$telegram_send_result = (new TelegramSender())->send([
    'name' => $_POST['имя'],
    'phone' => $_POST['телефон']
]);

$file = $_FILES['file'];

$c = true;
// Формирование самого письма
$title = "Заявка с сайта Webseed.ru";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Настройки вашей почты
  $mail->Host       = 'smtp.jino.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'info@webseed.ru'; // Логин на почте
  $mail->Password   = 'Uvz4wu5mk`62'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('info@webseed.ru', 'Webseed New Lead'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('nick.iv.dev@gmail.com');
  $mail->addAddress('nikita03.1998@mail.ru');

  // Прикрипление файлов к письму
  if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
      $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
      $filename = $file['name'][$ct];
      if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
          $mail->addAttachment($uploadfile, $filename);
          $rfile[] = "Файл $filename прикреплён";
      } else {
          $rfile[] = "Не удалось прикрепить файл $filename";
      }
    }
  }

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $email_send_result = (bool) $mail->send();

} catch (Exception $e) {
  $msg = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  $email_send_result = false;
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode([
  'status' => $email_send_result && $email_send_result,
  'email_send_result'=> $email_send_result,
  'telegram_send_result' => $telegram_send_result
]);
