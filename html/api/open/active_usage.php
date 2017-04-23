<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$id = $_GET['sensor_id'];
if (!is_numeric($id)) {
    echo "Missing requried numeric param 'sensor_id'";

    return http_response_code(400);
}
$sensor_table = 'sensor_'.$id;

$now = time() * 1000;
$query =
" SELECT groups.name AS group_name, per_day
  FROM(SELECT t.visit_id, group_id, ROUND(SUM(quantity)/(days * people),2) AS per_day
  FROM (SELECT
      id AS visit_id,
      group_id,
      ((end_date - ?)/86400000) AS days,
      (IFNULL(students_female,0) + IFNULL(students_male,0) + IFNULL(advisors,0)) AS people
  FROM visits
  WHERE start_date <= ? AND end_date >= ? ) AS t
  JOIN ${sensor_table} AS st ON st.visit_id = t.visit_id
  GROUP BY group_id) as t2
  JOIN groups ON groups.id = t2.group_id
";

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute([$now, $now, $now]);
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
