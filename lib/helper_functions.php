<?php

  function print_array_contents($array)
  {
      echo print_r(array_values($array));
  }

  function array_to_json($array)
  {
      $json = array();
      array_push($json, $array);

      return json_encode($json, JSON_PRETTY_PRINT);
  }
