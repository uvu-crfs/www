<?php

$sensor = $_GET['sensor'];
if (!is_numeric($sensor)) {
    bad_request("Must send a number under url param 'sensor' ex. ?sensor=1");
}
