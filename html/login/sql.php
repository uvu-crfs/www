<?php
  require_once '/var/www/lib/database.php';
  switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
      $data = post_data();
      try {
          $stmt = $GLOBALS['pdo']->prepare($data['query']);
          $stmt->execute();
      } catch (PDOException $e) {
          echo 'Database issue: '.$e->getMessage();

          return http_response_code(400);
      }
      echo print_json(get_all_rows($stmt));
      break;
    default:
      http_response_code(404);
      break;
  }
