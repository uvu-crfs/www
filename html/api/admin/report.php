<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$query = $_GET['query'];
$start = substr($query, 0, 7);
echo 'Query: '.$query.'<br>';

if (strpos($query, ';') !== false) {
    echo "Query cannot contain a ';'.";

    return http_response_code(400);
}

if (strcasecmp($start, 'Select') !== 1) {
    echo "Your query starts with: '".$start."'";

    return http_response_code(400);
}
echo 'Query: '.$query;
