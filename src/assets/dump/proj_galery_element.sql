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
-- Table structure for table `galery_element`
--

DROP TABLE IF EXISTS `galery_element`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `galery_element` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `viewName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int(11) NOT NULL,
  `galeryTypeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6ae4c6378559bbb2c0470cf9f62` (`galeryTypeId`),
  CONSTRAINT `FK_6ae4c6378559bbb2c0470cf9f62` FOREIGN KEY (`galeryTypeId`) REFERENCES `galery_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `galery_element`
--

LOCK TABLES `galery_element` WRITE;
/*!40000 ALTER TABLE `galery_element` DISABLE KEYS */;
INSERT INTO `galery_element` VALUES (1,'Блокнот','1_Блокнот.jpg',1,3),(2,'Блокнот','Жадор прайс превью1.jpg',1,3),(3,'Блокнот','Зеленая.jpg',1,3),(4,'Блокнот','Превью планер А5_2.jpg',1,3),(5,'Буклет','flyer_Noord_prw2.jpg',1,3),(6,'Буклет','Mariner_broshure_prw_2.jpg',1,3),(7,'Визитка','AN_47 Карта клиента.jpg',1,3),(8,'Визитка','Визитка Грузоперевозки 1.jpg',1,3),(9,'Визитка','Визитка Зоряна_.jpg',1,3),(10,'Визитка','Визитка Квартиры1.jpg',1,3),(11,'Визитка','Карта клиента 1.jpg',1,3),(12,'Визитка','О-ла-ла визитка (2).jpg',1,3),(13,'Визитка','О-ла-ла визитка (5).jpg',1,3),(14,'Визитка','Світ_нейлс_визитка_1.jpg',1,3),(15,'Визитка','Світ_нейлс_визитка_2.jpg',1,3),(16,'Календарь','7_июль.jpg',1,3),(17,'Календарь','превью визуализ.jpg',1,3),(18,'Листовка','A5_Flyer_H2O_prw_4.jpg',1,3),(19,'Листовка','А5_2.jpg',1,3),(20,'Листовка','А5_5.jpg',1,3),(21,'Листовка','еврофлаер 1 (2).jpg',1,3),(22,'Листовка','Флаер.jpg',1,3),(23,'Листовка','Флаер (1).jpg',1,3),(24,'Листовка','Флаер Лагерь.jpg',1,3),(25,'Чашка','unnamed.jpg',1,4),(26,'Ручка с логотипом','Ручка с логотипом.jpg',1,4),(27,'Ручка с логотипом','Ручка с логотипом2.jpg',1,4),(28,'Плакат','7.jpg',1,5),(29,'Плакат','Коллаж А2 Дети.jpg',1,5),(30,'Плакат','Розклад_1_3.jpg',1,5);
/*!40000 ALTER TABLE `galery_element` ENABLE KEYS */;
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
