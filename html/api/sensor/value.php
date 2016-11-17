<?php

require_once '/var/www/lib/database.php';

$table_name = 'sensor_';
$senor_data_keys = ['quantity', 'timestamp'];
$required_keys = ['quantity'];

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
    post($table_name.$sensor, $senor_data_keys, $required_keys);
    break;
  case 'PUT':
    $sensor = get_sensor_id();
    put($table_name.$sensor, $senor_data_keys);
    break;
  case 'DELETE':
    $sensor = get_sensor_id();
    delete_by_id($table_name.$sensor);
    break;
  default:
    http_response_code(404);
    break;
}

function get_sensor_id()
{
    var_dump(post_data());
    $sensor = post_data()['sensor'];
    echo 'sensor: '.$sensor."\n";
    if (!is_numeric($sensor)) {
        bad_request("Must send a number under key 'sensor'");
    }

    return $sensor;
}
