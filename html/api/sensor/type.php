<?php

require_once '/var/www/lib/database.php';

$table_name = 'sensors';
$senor_type_keys = ['name', 'unit'];

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    get_by_id($table_name);
    break;
  case 'POST':
    insert($table_name, $senor_type_keys, $senor_type_keys);
    $sensor_id = $GLOBALS['pdo']->lastInsertId();
    create_sensor_table($sensor_id);
    print_json(array('id' => $sensor_id));
    break;
  case 'PUT':
    put($table_name, $senor_type_keys);
    break;
  case 'DELETE':
    $id = post_data()['id'];
    delete($table_name, $id);
    delete_sensor_table($id);
    http_response_code(204);
    break;
  default:
    http_response_code(404);
    break;
}
