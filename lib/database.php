<?php

require_once '/var/www/lib/helper_functions.php';

function connect_to_databse()
{
    //$db_json = file_get_contents('/var/www/lib/database.json');
    $db_json = file_get_contents('/var/secrets/database.json');
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

function post($table_name, $available_keys, $required_keys)
{
    insert($table_name, $available_keys, $required_keys);
    return_last_id();
}

function insert($table_name, $available_keys, $required_keys)
{
    $data = post_data();
    foreach ($required_keys as $key) {
        if (!array_key_exists($key, $data)) {
            bad_request("Key '".$key."' is required");
        }
    }

    $keys = [];
    $values = [];
    $value_placeholders = [];
    foreach ($available_keys as $key) {
        if (in_array($data[$key], $data)) {
            array_push($keys, $key);
            array_push($values, $data[$key]);
            array_push($value_placeholders, '?');
        }
    }
    if (count($keys) === 0) {
        return http_response_code(400);
    }

    if (in_array('timestamp', $available_keys) && !in_array('timestamp', $keys)) {
        array_push($keys, 'timestamp');
        array_push($values, time());
        array_push($value_placeholders, '?');
    }

    $keys_str = implode(',', $keys);
    $values_str = implode(',', $value_placeholders);
    $query = 'insert into '.$table_name.'('.$keys_str.') values ('.$values_str.')';
    //echo 'Query: '.$query;
    //var_dump($values);

    try {
        $stmt = $GLOBALS['pdo']->prepare($query);
        $stmt->execute($values);
    } catch (PDOException $e) {
        echo 'Database issue: '.$e->getMessage();

        return http_response_code(500);
    }
}

function put($table_name, $available_keys)
{
    $data = post_data();
    if (!array_key_exists('id', $data) || !whole_int($data['id'])) {
        return http_response_code(400);
    }

    $keys = [];
    $values = [];
    foreach ($available_keys as $key) {
        if (in_array($data[$key], $data)) {
            array_push($keys, $key);
            array_push($values, $data[$key]);
        }
    }
    if (count($keys) === 0) {
        return http_response_code(400);
    }

    $set_vals = [];
    $vals = [];
    for ($i = 0; $i < count($keys); ++$i) {
        $temp = $keys[$i].'=? ';
        array_push($set_vals, $temp);
        array_push($vals, $values[$i]);
    }

    array_push($vals, $data['id']);
    $query = 'update '.$table_name.' set '.implode(',', $set_vals).'where id = ?';
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute($vals);
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
        echo '"id" is not numeric:'.$id;

        return http_response_code(400);
    }
    delete($table_name, $id);
}

function delete($table_name, $id)
{
    $stmt = $GLOBALS['pdo']->prepare('delete from '.$table_name.' where id = ?');
    $stmt->execute([$id]);
    http_response_code(204);
}

function get_all_rows_from_table($table_name)
{
    $stmt = $GLOBALS['pdo']->prepare('select * FROM '.$table_name);
    $stmt->execute();
    print_json(get_all_rows($stmt));
}

/*
  Returns Associative Array of Affiliations from Database
*/
function get_all_affiliations()
{
    $stmt = $GLOBALS['pdo']->prepare('SELECT affiliations.name FROM lookup_group_affiliation
      INNER JOIN groups
      ON lookup_group_affiliation.group_id=groups.id
      INNER JOIN affiliations
      ON lookup_group_affiliation.affiliation_id=affiliations.id;');
    $stmt->execute();
    $array = get_all_rows($stmt);
    $affiliations = array_map(('getName'), $array);
    echo json_encode(array_count_values($affiliations));
}

/*
  Returns Associative Array of Affiliations and Departments from Database
*/
function get_all_departments_and_affiliations()
{
  $stmt = $GLOBALS['pdo']->prepare('SELECT concat(affiliations.name, " ", departments.name) FROM lookup_group_department
		INNER JOIN groups
		ON lookup_group_department.group_id=groups.id
		INNER JOIN departments
		ON lookup_group_department.department_id=departments.id
    INNER JOIN affiliations
    ON departments.affiliation_id=affiliations.id;');
  $stmt->execute();
  $array = get_all_rows($stmt);
  $deptsAndAffiliations = array_map(('getAffiliationsAndDepartments'), $array);
  echo json_encode(array_count_values($deptsAndAffiliations));
}

/*
  Returns Associative Array of Affiliations and Courses from Database
*/
function get_all_courses_and_affiliations()
{
  $stmt = $GLOBALS['pdo']->prepare('SELECT concat(affiliations.name, " ", courses.name) FROM lookup_group_course
    INNER JOIN groups
    ON lookup_group_course.group_id=groups.id
    INNER JOIN courses
    ON lookup_group_course.course_id=courses.id
    INNER JOIN departments
    ON departments.id=courses.department_id
    INNER JOIN affiliations
    ON affiliations.id=departments.affiliation_id;');
  $stmt->execute();
  $array = get_all_rows($stmt);
  $coursesAndAffiliations = array_map(('getAffiliationsAndCourses'), $array);
  echo json_encode(array_count_values($coursesAndAffiliations));
}

/*
  Returns Value of Key of Key/Value pair
*/
function getAffiliationsAndDepartments($indexInArray)
{
  return $indexInArray['concat(affiliations.name, " ", departments.name)'];
}

/*
  Returns Value of Key of Key/Value pair
*/
function getAffiliationsAndCourses($indexInArray)
{
  return $indexInArray['concat(affiliations.name, " ", courses.name)'];
}

/*
  Returns Value of Key of Key/Value pair
*/
function getValue($array, $key)
{
  return $array[$key];
}
/*
Returns the 'name' from the key/value pair
*/
function getName($indexInArray)
{
    return $indexInArray['name'];
}

function create_sensor_table($id)
{
    $query = 'create table sensor_'.$id.
      '(id int not null AUTO_INCREMENT PRIMARY KEY, quantity DECIMAL(10,3) not null, timestamp int not null, visit_id int not null)';

    try {
        $stmt = $GLOBALS['pdo']->prepare($query);
        $stmt->execute($values);
    } catch (PDOException $e) {
        echo 'Database issue: '.$e->getMessage();

        return http_response_code(500);
    }
}

function delete_sensor_table($id)
{
    if (!is_numeric($id)) {
        bad_request("Must send a number under key 'id'");
    }
    $query = 'drop table sensor_'.$id;
    echo 'Query '.$query."\n";
    $stmt = $GLOBALS['pdo']->prepare($query);
    $stmt->execute();
}
