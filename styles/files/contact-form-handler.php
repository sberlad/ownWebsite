<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $phone = $_POST['phone-number'];
    $message = $_POST['message'];

    $email_from = 'contactform@samuelberlad.com';
    $email_subject = 'New Form Submission';
    $email_body =   "User Name: $name.\n";
                    "User eMail: $visitor_email.\n";
                    "User Message: $message.n";

    $to = 'info@samuelberlad.com';

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact-legal.html");
?>