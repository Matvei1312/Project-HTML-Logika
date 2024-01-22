<?php
// Викликаємо Python-скрипт через команду exec
$output = exec('python main.py'); // Замініть на шлях до вашого Python-скрипта

// Повертаємо вивід Python-скрипта як відповідь для клієнта
echo $output;
?>
