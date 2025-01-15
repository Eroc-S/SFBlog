<?php
// backend.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? 'Guest';
    $message = $_POST['message'] ?? '';

    // Log data to a file (basic backend example)
    $file = fopen("messages.log", "a");
    fwrite($file, "Name: $name\nMessage: $message\n\n");
    fclose($file);

    echo "Thank you, $name. Your message has been saved!";
} else {
    echo "Welcome to the backend!";
}
?>
