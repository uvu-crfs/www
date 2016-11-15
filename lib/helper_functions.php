<?php

  function print_array_contents($array)
  {
      echo print_r(array_values($array));
  }

  function print_json($array)
  {
      header('Content-Type: application/json');
      echo json_encode($array);
  }
  function post_data()
  {
      return json_decode(file_get_contents('php://input'), true);
  }

  function dump_array($array)
  {
      var_dump($array);
  }
