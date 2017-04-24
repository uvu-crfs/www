<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$start = '0';
$tmp = $_GET['start'];
if (is_numeric($tmp)) {
    $start = $tmp;
}

$end = '3000000000000'; //01/24/2065
$tmp = $_GET['end'];
if (is_numeric($tmp)) {
    $end = $tmp;
}
/*
  Returns Associative Array of Affiliations and Departments from Database
*/

$query =
' SELECT
    group_id, visit_count, visit_count * people AS user_days,
    CONCAT(affiliations.name, " ", departments.name) AS name
  FROM (
    SELECT
      tmp3.group_id, visit_count, people,
      COALESCE(tmp3.department_id, lgd.department_id) AS department_id
    FROM(
      SELECT tmp2.group_id, visit_count, course_id, department_id, people
      FROM (
        SELECT group_id, COUNT(*) AS visit_count, people FROM (
          SELECT group_id, id AS visit_id, (IFNULL(students_female,0) + IFNULL(students_male,0) + IFNULL(advisors,0)) AS people
          FROM visits
          WHERE start_date >= ? AND end_date <= ?
        ) AS tmp
        GROUP BY group_id
      ) AS tmp2
      LEFT JOIN lookup_group_course AS lgc ON tmp2.group_id = lgc.group_id
      LEFT JOIN courses ON courses.id = lgc.course_id
    ) AS tmp3
    LEFT JOIN lookup_group_department AS lgd ON tmp3.group_id = lgd.group_id
  ) AS tmp4
  JOIN departments ON departments.id = tmp4.department_id
  JOIN affiliations ON affiliations.id = departments.affiliation_id
';

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute([$start, $end]);
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}

$output = [];
foreach (get_all_rows($stmt) as $row) {
    array_push($output, [$row['name'], $row['user_days']]);
}
echo print_json($output);
