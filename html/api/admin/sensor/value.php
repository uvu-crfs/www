<?php

require_once '/var/www/lib/database.php';

$table_name = 'sensor_';
$sensor_data_keys = ['quantity', 'timestamp', 'visit_id'];
$required_keys = $sensor_data_keys;

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    $sensor = $_GET['sensor'];
    if (!is_numeric($sensor)) {
        bad_request("Must send a number under param 'sensor'");
    }
    get_by_id($table_name.$sensor);
    break;
  case 'POST':
    $sensor = get_sensor_id();
    post($table_name.$sensor, $sensor_data_keys, $required_keys);
    break;
  case 'PUT':
    $sensor = get_sensor_id();
    put($table_name.$sensor, $sensor_data_keys);
    break;
  case 'DELETE':
    $data = post_data();
    $sensor = $data['sensor'];
    if (!is_numeric($sensor)) {
        echo '"sensor" is not numeric:'.$sensor;

        return http_response_code(400);
    }
    $id = $data['id'];
    if (!is_numeric($id)) {
        echo '"id" is not numeric:'.$id;

        return http_response_code(400);
    }
    delete($table_name.$sensor, $id);
    break;
  default:
    http_response_code(404);
    break;
}

function get_sensor_id()
{
    $sensor = post_data()['sensor'];
    if (!is_numeric($sensor)) {
        bad_request("Must send a number under key 'sensor'");
    }

    return $sensor;
}
