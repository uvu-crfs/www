<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    return http_response_code(404);
}
require_once '/var/www/lib/database.php';
get_all_courses_and_affiliations();
