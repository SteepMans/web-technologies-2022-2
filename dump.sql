-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               10.3.22-MariaDB - mariadb.org binary distribution
-- Операционная система:         Win64
-- HeidiSQL Версия:              12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Дамп структуры для таблица lesson21.feedback
CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `answer` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `product_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`) USING BTREE,
  CONSTRAINT `FK_feedback_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lesson21.feedback: ~2 rows (приблизительно)
INSERT INTO `feedback` (`id`, `name`, `answer`, `product_id`) VALUES
	(1, 'Test', 'norm', 1),
	(13, 'Test', 'norm2', 1);

-- Дамп структуры для таблица lesson21.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `description` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `image` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `price` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lesson21.products: ~6 rows (приблизительно)
INSERT INTO `products` (`id`, `name`, `description`, `image`, `price`) VALUES
	(1, 'Ботинки', 'Бархатные тяги', '1.png', 10000),
	(2, 'Ботинки2', 'Бархатные тяги', '1.png', 10000),
	(3, 'Ботинки3', 'Бархатные тяги', '1.png', 10000),
	(4, 'Ботинки4', 'Бархатные тяги', '1.png', 10000),
	(5, 'Ботинки5', 'Бархатные тяги', '1.png', 10000),
	(6, 'Ботинки6', 'Бархатные тяги', '1.png', 10000);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
