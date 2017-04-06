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

$query = '
  SELECT
    SUM(visit_count) AS visit_count, affiliations.name
  FROM (
    SELECT
     tmp5.group_id, tmp5.visit_count,
     COALESCE(lga.affiliation_id, tmp5.affiliation_id) AS affiliation_id
    FROM (
      SELECT
        tmp4.group_id, tmp4.visit_count,
        tmp4.department_id,
        departments.affiliation_id
      FROM (
        SELECT
          tmp3.group_id, visit_count,
          COALESCE(tmp3.department_id, lgd.department_id) AS department_id
        FROM(
          SELECT tmp2.group_id, visit_count, course_id, department_id
          FROM (
            SELECT group_id, COUNT(*) AS visit_count FROM (
              SELECT group_id, id AS visit_id FROM visits
              WHERE start_date >= ? AND end_date <= ?
            ) AS tmp
            GROUP BY group_id
          ) AS tmp2
          LEFT JOIN lookup_group_course AS lgc ON tmp2.group_id = lgc.group_id
          LEFT JOIN courses ON courses.id = lgc.course_id
        ) AS tmp3
        LEFT JOIN lookup_group_department AS lgd ON tmp3.group_id = lgd.group_id
      ) AS tmp4
      LEFT JOIN departments ON departments.id = tmp4.department_id
    ) AS tmp5
    LEFT JOIN lookup_group_affiliation AS lga ON tmp5.group_id = lga.group_id
  ) AS tmp6
  JOIN affiliations ON affiliations.id = tmp6.affiliation_id
  GROUP BY affiliations.name
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
//expected output ~ [["Snow College",2],["UAEA",1],["KU",1],["Mt. SAC",1]]
