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
  course.name as course_name, course.id as course_id,
  department.name as department_name, department.id as department_id,
  affiliation.name as affiliation_name, affiliation.id as affiliation_id,
  concat(affiliation.name, "/",department.name,"/",course.name) AS "concat"
  from lookup_group_course
  INNER JOIN course ON lookup_group_course.course_id=course.id
  INNER JOIN department ON course.department_id=department.id
  INNER JOIN affiliation ON department.affiliation_id=affiliation.id
  where group_id=?
  ;';

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute([$id]);
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
