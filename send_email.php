<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $comments = $_POST['COMMENTS'];
    
    $to = "andreea.alexandra25@yahoo.com";
    $subject = "New Form Submission";
    $message = "Name: $username\n";
    $message .= "Email: $email\n";
    $message .= "Comments:\n$comments";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}
?>