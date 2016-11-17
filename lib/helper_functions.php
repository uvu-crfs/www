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

  function print_array($array)
  {
      var_dump($array);
  }

  function whole_int($val)
  {
      //http://php.net/manual/en/function.is-numeric.php
      $val = strval($val);
      $val = str_replace('-', '', $val);

      if (ctype_digit($val)) {
          if ($val === (string) 0) {
              return true;
          } elseif (ltrim($val, '0') === $val) {
              return true;
          }
      }

      return false;
  }

  function bad_request($str)
  {
      http_response_code(400);
      exit($str);
  }
