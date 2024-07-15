<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set up email parameters
$to = 'info@djordjeveljkovic.com'; // Replace with your email address
$subject = 'Message from Contact Form';
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";

// Email body
$body = "<html><body>";
$body .= "<h2>New Message from Contact Form</h2>";
$body .= "<p><strong>Name:</strong> $name</p>";
$body .= "<p><strong>Email:</strong> $email</p>";
$body .= "<p><strong>Message:</strong><br>$message</p>";
$body .= "</body></html>";

// Send email
if (mail($to, $subject, $body, $headers)) {
    // Email sent successfully
    echo json_encode(['status' => 'success']);
} else {
    // Email sending failed
    echo json_encode(['status' => 'error', 'message' => 'Failed to send email. Please try again later.']);
}
?>
