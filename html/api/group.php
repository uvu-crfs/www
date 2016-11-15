<?php

require_once '/var/www/lib/database.php';

$table_name = 'groups';
$group_keys = ['name', 'contact_name', 'affiliation', 'course_num', 'notes'];

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    get_by_id($table_name);
    break;
  case 'POST':
    post($table_name, $group_keys);
    break;
  case 'PUT':
    //http_response_code(200);
    break;
  case 'DELETE':
    delete_by_id($table_name);
    break;
  default:
    http_response_code(404);
    break;
}
