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

$query = 'SELECT affiliations.name FROM lookup_group_affiliation
  INNER JOIN groups
  ON lookup_group_affiliation.group_id=groups.id
  INNER JOIN affiliations
  ON lookup_group_affiliation.affiliation_id=affiliations.id';

$stmt = $GLOBALS['pdo']->prepare($query);
//$stmt->execute([$start, $end]);
$stmt->execute();

$array = get_all_rows($stmt);
$affiliations = array_count_values(array_map(('getName'), $array));
$output = [];
foreach ($affiliations as $key => $value) {
    array_push($output, [$key, $value]);
}
echo print_json($output);

//expected output ~ [["Snow College",2],["UAEA",1],["KU",1],["Mt. SAC",1]]
