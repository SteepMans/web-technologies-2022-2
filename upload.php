<?php
$file_path_large = "./img/large/" . basename($_FILES["file_form_upload"]["name"]);
$file_path_small = "./img/small/" . basename($_FILES["file_form_upload"]["name"]);

$file_type = $_FILES["file_form_upload"]["type"];
$is_upload = isset($_POST["submit"]) && getimagesize($_FILES["file_form_upload"]["tmp_name"]) !== false && ($file_type == "image/jpeg" || $file_type == "image/png" || $file_type == "image/jpg");

if ($is_upload == 0) {
	echo "Ошибка загрузки файла";
	return;
}

if (move_uploaded_file($_FILES["file_form_upload"]["tmp_name"], $file_path_large)) {
	switch ($file_type)  {
		case 'image/png':
			$image = imagecreatefrompng($file_path_large);  
			$img = imagescale($image, 400, 400 );
			imagepng($img, $file_path_small);
			break;		

		case 'image/jpeg' || 'image/jpg':
			$image = imagecreatefromjpeg($file_path_large);  
			$img = imagescale($image, 400, 400 );
			imagejpeg($img, $file_path_small);
			break;		
	}
} else {
	echo "Произошла ошибка загрузки файла.";
}

header('Location: http://localhost');
?>