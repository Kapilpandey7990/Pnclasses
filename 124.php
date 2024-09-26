<?php 

if(function_exists("opcache_reset")){
	opcache_reset();
	echo "opcache_reset ok<br>\n";
}

header("X-LiteSpeed-Purge: *");


if (extension_loaded('redis')) {
   $redis = new Redis();
	$redis->connect('127.0.0.1', 6379);
	 
	$redis->flushAll();
	echo "Redis ok<br>\n";
}



?>

