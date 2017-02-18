<?php

require_once '/var/www/lib/database.php';

$table_name = 'visits';
$visit_keys = ['group_id', 'start_date', 'end_date', 'days', 'nights', 'advisors', 'students_female', 'students_male', 'evaluation', 'summary', 'darksky', 'notes'];

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    get_by_id($table_name);
    break;
  case 'POST':
    post($table_name, $visit_keys);
    break;
  case 'PUT':
    put($table_name, $visit_keys);
    break;
  case 'DELETE':
    delete_by_id($table_name);
    break;
  default:
    http_response_code(404);
    break;
}
