<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$current_time = time() * 1000;
$yesterday = strtotime("-1 days") * 1000;

$query =
"SELECT * FROM visits
 WHERE start_date <= ${current_time}
 AND end_date >= ${yesterday}
";
//Yesteday because timestamps are always 12am of the day

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute();
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
