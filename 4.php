<?php

$data = array(
    "Ленинградская область" => array("Санкт-Петербург", "Всеволожск"),
    "Тюменская область" => array("Тюмень", "Ялуторовск")
);

function generateMenu(Array $data) {
    echo "<ul>";
    
    foreach ($data as $state => $towns) {
        echo "<li>" . implode(", ", $towns) . "</li>";
    }

    echo "</ul>";
}

?>

<!DOCTYPE html>
<html lang="ru">

<head>
	<title></title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
	<div>
		<ul>
			<?php
				echo generateMenu($data);
			?>
		</ul>
	</div>
</body>

</html>