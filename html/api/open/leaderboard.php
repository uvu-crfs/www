<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

$id = $_GET['sensor_id'];
if (!is_numeric($id)) {
    echo "Missing requried numeric param 'sendor_id'";

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

$query = '
  SELECT name as group_name, visit_id, ROUND(total/days,2) as per_day FROM (
    SELECT visit_id, total, group_id, start_date, end_date,
      ((end_date - start_date)/86400000) as days
    FROM (
      SELECT visit_id, SUM(quantity) AS total
      FROM '.$sensor_table.'
      GROUP BY visit_id
      ORDER BY total LIMIT ?
    ) AS tmp1
    INNER JOIN visits ON visits.id=tmp1.visit_id
    WHERE start_date >= ?
    AND end_date <= ?
  ) AS tmp2
  INNER JOIN groups ON groups.id=tmp2.group_id
  ORDER BY per_day
';

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute([$limit, $start, $end]);
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
