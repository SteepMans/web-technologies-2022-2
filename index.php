<?php

$title = "Привет, мир!";
$header = "Я php!";

function num_word($value, $words, $show = true) 
{
	$num = $value % 100;
	if ($num > 19) { 
		$num = $num % 10; 
	}
	
	$out = ($show) ?  $value . ' ' : '';
	switch ($num) {
		case 1:  $out .= $words[0]; break;
		case 2: 
		case 3: 
		case 4:  $out .= $words[1]; break;
		default: $out .= $words[2]; break;
	}
	
	return $out;
}

function get_current_time()
{
    $current_hours = date("H");
	$current_minutes = date("i");

    return num_word($current_hours, ["час", "часа", "часов"]) . ' ' . num_word($current_minutes, ["минута", "минуты", "минут"]);
}

$document = '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>' . $title . '</title>
    </head>
    <body>
        <h1>' . $header . '</h1>
        <p>'. get_current_time() .'</p>
    </body>
    </html>
';

echo $document
?>