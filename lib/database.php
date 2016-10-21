<?php
    //PDO tutorial https://phpdelusions.net/pdo
    $db_json = file_get_contents('/var/www/lib/database.json');
    $db = json_decode($db_json, true);

    $servername = $db['host'].':'.$db['port'];
    echo "Server Name: $servername <br>";

    $dsn = "mysql:host=$servername;dbname=".$db['dbname'].';charset=utf8';
    $opt = [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES => false,
    ];
    //Something is broken on the next line
    $pdo = new PDO($dsn, $db['username'], $db['password'], $opt);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
