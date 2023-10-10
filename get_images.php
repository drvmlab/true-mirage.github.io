<?php
header('Content-Type: application/json');

$directory = 'images/';
$images = glob($directory . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);

echo json_encode($images);
?>