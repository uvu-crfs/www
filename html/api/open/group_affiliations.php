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
  lookup_group_affiliation.group_id,
  lookup_group_affiliation.affiliation_id,
  affiliations.name as affiliation_name
  from lookup_group_affiliation
  INNER JOIN affiliations ON lookup_group_affiliation.affiliation_id=affiliations.id
  where group_id=?';

try {
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute([$id]);
} catch (PDOException $e) {
    echo 'Database issue: '.$e->getMessage();

    return http_response_code(400);
}
echo print_json(get_all_rows($stmt));
