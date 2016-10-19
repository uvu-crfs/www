<?php

	$color = 'green';
	$fruit = 'apple';
	
	$db_json = file_get_contents("/var/www/lib/database.json");
	$db = json_decode($db_json, true);
	
	$servername = $db['host'].":".$db['port'];
	echo "<br> $servername";

	// Create connection
	$conn = new mysqli($servername, $db["username"], $db["password"] );

	// Check connection
	if ($conn->connect_error) {
    		die("Connection failed: " . $conn->connect_error);
	} 
	echo "Connected successfully";
?>
