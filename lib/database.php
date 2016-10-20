<?php

    $db_json = file_get_contents('/var/www/lib/database.json');
    $db = json_decode($db_json, true);

    $servername = $db['host'].':'.$db['port'];
    echo "Server Name: $servername <br>";

    echo 'PDO_MYSQL - '.(int) extension_loaded('PDO_MYSQL');
    echo '<br>mysqli - '.(int) extension_loaded('mysqli');
    echo '<br><br><br>';
    echo var_dump(get_loaded_extensions());
