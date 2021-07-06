-- MySQL dump 10.13  Distrib 5.7.34, for Linux (x86_64)
--
-- Host: localhost    Database: proj
-- ------------------------------------------------------
-- Server version	5.7.34-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `catalog_element`
--

DROP TABLE IF EXISTS `catalog_element`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalog_element` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `viewName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `catalogTypeId` int(11) DEFAULT NULL,
  `order` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c5cd152398f1f527420a03f69bd` (`catalogTypeId`),
  CONSTRAINT `FK_c5cd152398f1f527420a03f69bd` FOREIGN KEY (`catalogTypeId`) REFERENCES `catalog_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog_element`
--

LOCK TABLES `catalog_element` WRITE;
/*!40000 ALTER TABLE `catalog_element` DISABLE KEYS */;
INSERT INTO `catalog_element` VALUES (30,'Визитки','Визитки.jpg',13,1),(31,'Пластиковые карты','Виниловые Магниты.jpg',3,2),(32,'Еврофлайеера','Листовки.jpg',13,3),(34,'Календари','Календарь.jpg',13,5),(35,'Буклеты','Буклет.jpg',13,6),(37,'Блокноты','Блокноты.jpg',13,1),(38,'Самоклейка','Фигурная наклейка.png',14,1),(39,'Бейджи','Бейдж.jpg',13,1),(40,'Каталоги','Каталог.jpg',13,1),(41,'Листовки','Листовки.jpg',13,1),(42,'Настольные календари','Настольные календари.jpg',13,1),(43,'Папки','папка.jpg',13,1),(44,'Конверты','Полиграфические конверты.jpg',13,1),(45,'Брендированные ручки','Брендированные ручки.jpg',3,1),(46,'Виниловые магниты','Виниловые Магниты.jpg',3,1),(47,'Футболки','Футболка.jpg',3,1),(48,'Чашки','Чашка.jpg',3,1),(49,'Баннеры','Баннер.jpg',2,1),(50,'Плакаты','Плакаты.jpg',2,1),(51,'Самоклейка','Самоклейка.jpg',2,1);
/*!40000 ALTER TABLE `catalog_element` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-06  7:06:08
