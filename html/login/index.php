<?php

echo 'displayName: '.getenv('displayName').'<br>';
echo 'mail: '.getenv('mail').'<br>';
echo 'uvuEntitlements: '.getenv('uvuEntitlements').'<br>';
echo '<br>';

$url = 'http'.(isset($_SERVER['HTTPS']) ? 's' : '').'://'."{$_SERVER['HTTP_HOST']}/{$_SERVER['REQUEST_URI']}";
echo "<a href='https://cas.uvu.edu/cas/logout?destination=$url'>Logout</a>";
