<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Recipient email address (where the email will be sent)
    $to = "info@yourdomain.com"; // Replace with your email address
    
    // Subject and message
    $subject = "New Contact Form Submission from $name";
    $messageBody = "Name: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Message:\n$message";
    
    // Additional headers
    $headers = "From: $email";
    
    // Send the email
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "success"; // You can customize this response
    } else {
        echo "error"; // You can customize this response
    }
} else {
    echo "error"; // Handle invalid requests
}
?>