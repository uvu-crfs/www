<?php
  echo 'Method: '.$_SERVER['REQUEST_METHOD'].'<br>';
  require_once '/var/www/lib/database.php';
  echo print_json(show_tables());
