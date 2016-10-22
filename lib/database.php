<?php
    //PDO tutorial https://phpdelusions.net/pdo
    require_once '/var/www/lib/helper_functions.php';
    function connect_to_databse()
    {
        $db_json = file_get_contents('/var/www/lib/database.json');
        $db = json_decode($db_json, true);
        $servername = $db['host']; //.':'.$db['port'];
        $dsn = "mysql:host=$servername;dbname=".$db['dbname'].';charset=utf8';
        $opt = [
          PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
          PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
          PDO::ATTR_EMULATE_PREPARES => false,
        ];
        $GLOBALS['pdo'] = new PDO($dsn, $db['username'], $db['password'], $opt);
    }
    connect_to_databse();

    function show_tables()
    {
        $stmt = $GLOBALS['pdo']->prepare('show tables');
        $stmt->execute();

        return $stmt->fetch();
    }

    function describe_table($table_name)
    {
        //TODO figure out how to make $table_name a good variable
        $stmt = $GLOBALS['pdo']->prepare('SHOW COLUMNS FROM jason');
        $stmt->execute();

        return $stmt->fetch();
    }
    describe_table('');
