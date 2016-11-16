<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(404);

    return;
}
require_once '/var/www/lib/database.php';

$stmt = $GLOBALS['pdo']->prepare('select * FROM visits');
$stmt->execute();
print_json(get_all_rows($stmt));
