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
  departments.name as department_name, departments.id as department_id,
  affiliations.name as affiliation_name, affiliations.id as affiliation_id,
  concat(affiliations.name, "/",departments.name) AS "concat",
  lookup_group_department.group_id
  from lookup_group_department
  INNER JOIN departments ON lookup_group_department.department_id=departments.id
  INNER JOIN affiliations ON departments.affiliation_id=affiliations.id
  where group_id=?';

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute([$id]);
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
