<?php

require_once '/var/www/lib/database.php';

$table_name = 'affiliations';
$affiliation_keys = ['name'];

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    get_by_id($table_name);
    break;
  case 'POST':
    post($table_name, $affiliation_keys);
    break;
  case 'PUT':
    put($table_name, $affiliation_keys);
    break;
  case 'DELETE':
    delete_by_id($table_name);
    break;
  default:
    http_response_code(404);
    break;
}
