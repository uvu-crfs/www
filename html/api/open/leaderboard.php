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

$limit = '3';
$tmp = $_GET['limit'];
if (is_numeric($tmp)) {
    $limit = $tmp;
}
$now = time() * 1000;
$query =
"SELECT
  name as group_name, visit_id, ROUND(total/(days * people),2) as per_day,
  start_date, end_date
FROM (
    SELECT visit_id, total, group_id, start_date, end_date,
      (IFNULL(students_female,0) + IFNULL(students_male,0) + IFNULL(advisors,0)) AS people,
      ((end_date - start_date)/86400000) + 1  AS days
      -- 86400000 is days in micro-seconds 1000 * 60 * 60 * 24
      -- +1 one is because dates are at time 0:00 instead of 23:59
    FROM (
      SELECT visit_id, SUM(quantity) AS total
      FROM ${sensor_table}
      GROUP BY visit_id
      ORDER BY total
    ) AS tmp1
    INNER JOIN visits ON visits.id=tmp1.visit_id
    WHERE start_date >= ? AND end_date <= ?
    AND end_date < ?
  ) AS tmp2
  INNER JOIN groups ON groups.id=tmp2.group_id
  ORDER BY per_day LIMIT ?
";

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute([$start, $end, $now, $limit]);
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
