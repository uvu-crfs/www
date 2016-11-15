<?php

require_once '/var/www/lib/database.php';
switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    handleGet();
    break;
  case 'POST':
    //http_response_code(201);
    break;
  case 'PUT':
    //http_response_code(200);
    break;
  case 'DELETE':
    //http_response_code(204);
    break;
  default:
    http_response_code(404);
    break;
}

function handleGet()
{
    $id = $_GET['id'];

    if (!is_numeric($id)) {
        http_response_code(400);

        return;
    }
    $stmt = $GLOBALS['pdo']->prepare('select * from groups where id = ?');
    $stmt->execute([$id]);
    print_json($stmt->fetch());
}
