<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}

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

require_once '/var/www/lib/database.php';

$query = '
  SELECT
    lgc.group_id, visit_count,
    CONCAT(affiliations.name, " ", courses.name) as name,
    affiliations.name AS affiliation_name,
    courses.name AS course_name
  FROM (
    SELECT group_id, COUNT(*) AS visit_count FROM (
      SELECT group_id, id AS visit_id FROM visits
      WHERE start_date >= ? AND end_date <= ?
    ) AS tmp
    GROUP BY group_id
  ) AS tmp2
  JOIN lookup_group_course lgc ON tmp2.group_id = lgc.group_id
  JOIN courses ON courses.id = lgc.course_id
  JOIN departments ON departments.id = courses.department_id
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
    array_push($output, [$row['name'], $row['visit_count']]);
}
echo print_json($output);
