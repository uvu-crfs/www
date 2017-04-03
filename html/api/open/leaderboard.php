<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';

//params sensor_id, start_from, end_from

$id = $_GET['sensor_id'];
if (!is_numeric($id)) {
    echo "Missing requried numeric param 'sendor_id'";

    return http_response_code(400);
}
// $sensor_table = 'sensor_'.$id;
// $start = '0';
// $end = '1600000000000';
// $limit = '3';

$query = '
  SELECT visit_id, total, name as group_name FROM (
    SELECT visit_id, total, group_id, start_date, end_date FROM (
      SELECT visit_id, SUM(quantity) AS total
      FROM sensor_2
      GROUP BY visit_id
      ORDER BY total LIMIT 3
    ) AS tmp1
    INNER JOIN visits ON visits.id=tmp1.visit_id
    WHERE start_date >= 1488524400000
    AND end_date <= 1501251531830
  ) AS tmp2
  INNER JOIN groups ON groups.id=tmp2.group_id
';

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute();
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
