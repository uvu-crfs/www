<?php

require_once '/var/www/lib/database.php';

$table_name = 'lookup_group_course';
$lookup_keys = ['group_id', 'course_id'];

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    get_by_id($table_name);
    break;
  case 'POST':
    post($table_name, $lookup_keys);
    break;
  case 'PUT':
    put($table_name, $lookup_keys);
    break;
  case 'DELETE':
    $query='DELETE FROM '.$table_name.' WHERE group_id = ? AND course_id = ?';
    $data = post_data();
    $values = [$data['group_id'],$data['course_id']];
    run_query($query,$values);
    break;
  default:
    http_response_code(404);
    break;
}
