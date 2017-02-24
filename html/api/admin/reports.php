<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';
// echo get_all_affiliations();
// echo get_all_courses();
// echo get_all_departments_and_affiliations();
get_all_courses_and_affiliations()
?>
