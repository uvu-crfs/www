<?php
echo readfile("test.txt");

$string = file_get_contents("/var/www/lib/database.json");
$json_a=json_decode($string,true);

foreach ($json_a as $key => $value){
  echo  "\r\n" . $key . ':' . $value;
}

?>
