<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'GET') {
    $suggestion = isset($_POST['suggestion']) ? $_POST['suggestion'] : (isset($_GET['suggestion']) ? $_GET['suggestion'] : '');
    
    // Open the file in append mode
    $filename = 'suggestions.txt';
    $file = fopen($filename, "a");
    
    if ($file) {
        // Write the suggestion to the file
        fwrite($file, $suggestion . "\n");
        fclose($file);
        
        echo "Suggestion saved successfully!";
    } else {
        echo "Failed to save suggestion.";
    }
}
?>

