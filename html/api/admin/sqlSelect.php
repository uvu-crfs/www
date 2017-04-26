<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$query = $_GET['query'];

if(stripos($query , "SELECT") !== 0){
  echo "Query must start with 'SELECT'";
  return http_response_code(400);
}

if(stripos($query , ";") !== false){
  echo "Query must not have a ';'";
  return http_response_code(400);
}

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute();
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
