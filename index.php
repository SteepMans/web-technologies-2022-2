<?php
	function getGallery($directory) 
	{
		$res = "";
		$files = array_slice(scandir($directory),2);
		foreach ($files as $file) 
		{
			echo 
			"<div>
				<a href='$directory/$file'>
					<img style='width: 300px' src='$directory/$file' />
				</a>
			</div>";
		}
		return $res;
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
		<form action="upload.php" method="POST" enctype="multipart/form-data">
			<input type="file" name="file_form_upload" id="file_to_upload">
			<input type="submit" value="Отправить" name="submit">
		</form>
	</div>

	<div style="display: flex; column-gap: 15px; flex-wrap: wrap; margin-top: 20px">
		<?php
			$directory = "./img/small";
			$gallery = getGallery($directory);
			echo $gallery; 
		?>
	</div>
</body>

</html>