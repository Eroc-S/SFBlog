<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "newsletter";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
$stmt->bind_param("s", $email);

// Get the email from the form
$email = $_POST['email'];

// Execute the statement
if ($stmt->execute()) {
    echo "Email subscribed successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>