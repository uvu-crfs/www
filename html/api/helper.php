<?php

  require_once '/var/www/lib/database.php';

  echo array_to_json(show_tables());
