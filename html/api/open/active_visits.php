<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$current_time = time() * 1000;
$query = 'select * from visits where start_date <= '.$current_time.
  ' and end_date >= '.$current_time;

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute();
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
