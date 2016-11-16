<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$stmt = $GLOBALS['pdo']->prepare('select * FROM groups');
$stmt->execute();
print_json(get_all_rows($stmt));
