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
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `originalName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fafa88e4e6d0451ec7cfdcf17a` (`originalName`),
  UNIQUE KEY `IDX_332d10755187ac3c580e21fbc0` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (53,'11409760.jpg','362f76c99ac1123796346e599e7b8f38.jpg'),(55,'10636650.jpg','598b3f2d89431d10429d5bf253171015f3.jpg'),(58,'1.png','8d25a1041672c8bc384beffbfe1339b6b.png'),(59,'2.png','4bb71a44ceb05da06d56a43441c710208.png'),(60,'3.png','9f04674fa8c7cab0fac1d7bae7070431.png'),(61,'4.png','a773b78432a0eadc57dd8d1f38ce546f.png'),(62,'5.png','16db2634ed1107ab52bb58106425e17410e.png'),(63,'6.png','398b2d22b6f166d2cbfe9eb96ea68eaf.png'),(64,'7.png','8bcfc5c5d4d17c67ff0d6fc6c32fe6710.png'),(65,'8.png','6f2f01e3b1d61abb8810d5f821d160194.png'),(66,'9.png','a9f0dea3ff1927ae171c5b42d84a2a6c.png'),(73,'11409766.jpg','6a6727410fa710061308857693d49f12b.jpg'),(99,'11566999.jpg','401174de515810cc52cc916b1df697311.jpg'),(100,'11413432.jpg','eef1ab886cf107198ff59476715783c1.jpg'),(101,'11553431.jpg','420372c05a3d781a2883db3cc140c1e9.jpg'),(102,'11553427.jpg','104b9a54bb361c3ad3e3210dff80bc0267.jpg'),(103,'13740341.jpg','f8956fa4219b2ba318dc68ce7f3ec56b.jpg'),(104,'11649948.jpg','d8f8fbc2a118e04974d2c9ed971d1084d.jpg'),(105,'11876320.jpg','f9d43c959385b962e41634f89230d73b.jpg'),(106,'12894304.jpg','1e926e2710a84f4cfc63fddb9181055a10a.jpg'),(107,'14071550.jpg','705ed5c184ffe41b788dea91117c82dc.jpg'),(108,'11412170.jpg','a125ef39a226b9d45c91e7e053ce36da.jpg'),(109,'12387633.jpg','83d51f10adbb73019eb4589d8f38e917a.jpg'),(110,'13339681.jpg','451026b66d456c71aa8d85a6197d1f585.jpg'),(111,'13430171.jpg','98d64e6e0a8c11f92105c016b8aaf2adc.jpg'),(112,'13736542.jpg','c2725bed746a5bfae786db10943bdc97d.jpg'),(113,'Визитки.jpg','84eebe4b43f73f564a9d7c16cc1074b10b.jpg'),(114,'Виниловые Магниты.jpg','711a83b31856007e273810feeabbdc4ec.jpg'),(115,'Листовки.jpg','793985ff80bc1e1ee8b294959aab4905.jpg'),(116,'Календарь.jpg','497752acb9449e3a67747f5d8909c0b3.jpg'),(117,'Буклет.jpg','e1a51003310ee6b0295c791302b810be1040.jpg'),(118,'Блокноты.jpg','6e59b36a1f52210e135f334ef6314b5df.jpg'),(119,'Фигурная наклейка.png','41e4e106f3c1b4579a435e7cbd737ff8c.png'),(120,'Бейдж.jpg','c6bf2a2638df9181eb9ec7532aef34f7.jpg'),(121,'Каталог.jpg','8a5e2f6b62c179771010df41fae6685de8.jpg'),(122,'Настольные календари.jpg','ae15f084110e5d35cc495d5e25b5c8d8b.jpg'),(123,'папка.jpg','25105a551c14579603d5b0d02a61f7a98.jpg'),(124,'Полиграфические конверты.jpg','f52c301f01625a9c2ec36597c2a05101a.jpg'),(125,'Брендированные ручки.jpg','ba6d3abf10b8688b147f29de9357d7993.jpg'),(126,'Футболка.jpg','daa652e3b9cc84547ece869075182ecb.jpg'),(127,'Чашка.jpg','65835c2b1e910a910ff875910c695d101a85.jpg'),(128,'Баннер.jpg','58f088cf47ff6fe27c5e388c4369268c.jpg'),(129,'Плакаты.jpg','077a10fba8b83ff945103b988fb87f92da.jpg'),(130,'Самоклейка.jpg','1d542f4b63f5957f44038e9ae9220c6d.jpg'),(131,'1_Блокнот.jpg','161edf212bd41061015c497f9f11ba545d.jpg'),(132,'Жадор прайс превью1.jpg','1080b5106c59a1c156d9343f10be3e5ac89.jpg'),(133,'Зеленая.jpg','2a12c8793fead72785eed1402889ca52.jpg'),(134,'Превью планер А5_2.jpg','0f10ad11089a0962b2be107e828ef210e93e.jpg'),(135,'flyer_Noord_prw2.jpg','271675caeba6350a43ed754d8f9c1911.jpg'),(136,'Mariner_broshure_prw_2.jpg','791efd102cd0b22abaa123e1f200b2eb3.jpg'),(137,'AN_47 Карта клиента.jpg','7c5d9fe3e89f2db09e816f275bf26586.jpg'),(138,'Визитка Грузоперевозки 1.jpg','d9106a886c463b06324241f1a3102a1fc7.jpg'),(139,'Визитка Зоряна_.jpg','ce60610b98f10957a210ab9d343569385b3.jpg'),(140,'Визитка Квартиры1.jpg','243c64efa355f12bc8e6efdc8d5f78c8.jpg'),(141,'Карта клиента 1.jpg','fa946b2362606699b16c58dbbfa59416.jpg'),(142,'О-ла-ла визитка (2).jpg','766d02583e9568be8e9ea81057c65faa.jpg'),(143,'О-ла-ла визитка (5).jpg','e985581277f6398d900de21f4f48b4ce.jpg'),(144,'Світ_нейлс_визитка_1.jpg','cce76edf9710621c2158ae64f72afc54e.jpg'),(145,'Світ_нейлс_визитка_2.jpg','43c6a101108dbf4c10c62a6a783f39d6795.jpg'),(146,'7_июль.jpg','047535eb2b5fb1b49caa826a32e4b2c0.jpg'),(147,'превью визуализ.jpg','633af71316710583c93a24c2a3283934.jpg'),(148,'A5_Flyer_H2O_prw_4.jpg','0102382c10b969484ea0acf3926d4a4212.jpg'),(149,'А5_2.jpg','cb3d9db9103a135f6b101f9c298fd55671.jpg'),(150,'А5_5.jpg','c10da733b4510dd1764d1aef45a772aaf5.jpg'),(151,'еврофлаер 1 (2).jpg','17d2f5e0a41f1081e6e7756e103eaac36.jpg'),(152,'Флаер.jpg','47ae637b1745344c5e6650543231af53.jpg'),(153,'Флаер (1).jpg','f79410c78fd71e58d251577c51d5c4817.jpg'),(154,'Флаер Лагерь.jpg','5710104e4441cce3101920ce2fb072a7e79.jpg'),(155,'unnamed.jpg','3cae59ebf7544c2afba7a6d8e9d8b2fb.jpg'),(156,'Ручка с логотипом.jpg','107df49743cc29b27238cc9241e10c9b13.jpg'),(157,'Ручка с логотипом2.jpg','3b9e9b56144929c7a5d8fa7d13daace9.jpg'),(158,'7.jpg','cc11b4b73f37ee100bcad1da42610e335d.jpg'),(159,'Коллаж А2 Дети.jpg','fdf25398e809c158abcbf21093a3370ee.jpg'),(160,'Розклад_1_3.jpg','b0aedee2888229510106103012e1025f7944.jpg');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
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
