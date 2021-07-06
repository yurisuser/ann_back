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
-- Table structure for table `catalog_element_page`
--

DROP TABLE IF EXISTS `catalog_element_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `catalog_element_page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `headText` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paragraphText` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `spreadsheetId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `spreadSheetPageNum` int(11) NOT NULL,
  `catalogElementId` int(11) DEFAULT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b22d33eee12c850d6b09f471a8e` (`catalogElementId`),
  CONSTRAINT `FK_b22d33eee12c850d6b09f471a8e` FOREIGN KEY (`catalogElementId`) REFERENCES `catalog_element` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog_element_page`
--

LOCK TABLES `catalog_element_page` WRITE;
/*!40000 ALTER TABLE `catalog_element_page` DISABLE KEYS */;
INSERT INTO `catalog_element_page` VALUES (3,'кккккккккккк','10636650.jpg','paragraphText','1RcqPesW1hDsTqc57iNDxzgMHXfLxxAPJYkz26wCQv3c',1,38,'gdfgdfggg dfg \ndfgdgdggreg e rgerge eger gegerg ege  egergergergergerge eg ergeg e'),(6,'seeeesesdfgeeeee','11409760.jpg','paragraphText','1RcqPesW1hDsTqc57iNDxzgMHXfLxxAPJYkz26wCQv3c',1,32,'23423b b23 234b 234 2 234 2242'),(8,'Визитки','11409766.jpg','Базовая модель. Ламинация и краска.','1RcqPesW1hDsTqc57iNDxzgMHXfLxxAPJYkz26wCQv3c',1,30,'Могут быть из бумаги,  покрытые чем-то, или нет. Там еще новера телефонов, может мыло, ФИО. \nЕсли надо - то вообще без текста');
/*!40000 ALTER TABLE `catalog_element_page` ENABLE KEYS */;
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
