<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$id = $_GET['sensor'];
if (!is_numeric($id)) {
    return http_response_code(400);
}
get_all_rows_from_table('sensor_'.$id);
