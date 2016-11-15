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

    function get_all_rows($stmt)
    {
        $all = array();
        while ($row = $stmt->fetch()) {
            $all[] = $row;
        }

        return $all;
    }
    function return_last_id()
    {
        print_json(array('id' => $GLOBALS['pdo']->lastInsertId()));
    }
    function post($table_name, $avaliable_keys)
    {
        $data = post_data();
        $keys = [];
        $values = [];
        foreach ($avaliable_keys as $key) {
            if (in_array($data[$key], $data)) {
                array_push($keys, $key);
                array_push($values, $data[$key]);
            }
        }
        if (count($keys) === 0) {
            return http_response_code(400);
        }
        $keys_str = implode(',', $keys);
        $values_str = str_repeat('? ', count($keys));
        $query = 'insert into '.$table_name.'('.$keys_str.') values ('.$values_str.')';
        $stmt = $GLOBALS['pdo']->prepare($query);
        $stmt->execute($values);
        return_last_id();
    }
    function get_by_id($table_name)
    {
        $id = $_GET['id'];
        if (!is_numeric($id)) {
            return http_response_code(400);
        }
        $stmt = $GLOBALS['pdo']->prepare('select * from '.$table_name.' where id = ?');
        $stmt->execute([$id]);
        print_json($stmt->fetch());
    }
    function delete_by_id($table_name)
    {
        $id = post_data()['id'];
        if (!is_numeric($id)) {
            return http_response_code(400);
        }
        $stmt = $GLOBALS['pdo']->prepare('delete from '.$table_name.' where id = ?');
        $stmt->execute([$id]);
        http_response_code(204);
    }
