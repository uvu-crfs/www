<?php

require_once '/var/www/lib/database.php';

$table_name = 'lookup_group_affiliation';
$lookup_keys = ['group_id', 'affiliation_id'];

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
    delete_by_id($table_name);
    break;
  default:
    http_response_code(404);
    break;
}