<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$id = $_GET['group_id'];
if (!is_numeric($id)) {
    return http_response_code(400);
}

$query = 'select
  department.name as department_name, department.id as department_id,
  affiliation.name as affiliation_name, affiliation.id as affiliation_id,
  concat(affiliation.name, "/",department.name) AS "concat"
  from lookup_group_department
  INNER JOIN department ON lookup_group_department.department_id=department.id
  INNER JOIN affiliation ON department.affiliation_id=affiliation.id
  where group_id=?';

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute([$id]);
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
