-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: jobdb
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `language_id` int NOT NULL AUTO_INCREMENT,
  `candidate_id` int DEFAULT NULL,
  `language_read` varchar(45) DEFAULT NULL,
  `language_write` varchar(45) DEFAULT NULL,
  `language_speak` varchar(45) DEFAULT NULL,
  `language_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`language_id`),
  KEY `fk_languages_id_idx` (`candidate_id`),
  CONSTRAINT `fk_languages_id` FOREIGN KEY (`candidate_id`) REFERENCES `basic_detail` (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES (1,3,'hindi','yes','yes','yes'),(2,3,'english','yes','yes','yes'),(3,4,'hindi','yes','yes','yes'),(4,4,'english','yes','yes','yes'),(5,6,'hindi','yes','yes','no'),(6,6,'english','yes','yes','yes'),(7,9,'hindi','yes','yes','yes'),(8,9,'english','yes','yes','yes'),(9,10,'hindi','yes','yes','yes'),(10,10,'english','yes','yes','yes'),(11,11,'hindi','yes','yes','yes'),(12,11,'english','yes','yes','yes'),(13,12,'hindi','yes','yes','yes'),(14,12,'english','yes','yes','yes'),(15,13,'hindi','yes','yes','yes'),(16,13,'english','yes','yes','yes'),(17,14,'hindi','yes','yes','yes'),(18,14,'english','yes','yes','yes'),(19,15,'hindi','yes','yes','yes'),(20,15,'english','yes','yes','yes'),(21,16,'hindi','yes','yes','yes'),(22,16,'english','yes','yes','yes'),(23,17,'hindi','yes','yes','yes'),(24,17,'english','yes','yes','yes'),(25,18,'hindi','yes','yes','yes'),(26,18,'english','yes','yes','yes'),(27,19,'hindi','yes','yes','yes'),(28,19,'english','yes','yes','yes'),(29,20,'hindi','yes','yes','yes'),(30,20,'english','yes','yes','yes'),(31,21,'hindi','yes','yes','yes'),(32,21,'english','yes','yes','yes'),(33,22,'hindi','yes','yes','yes'),(34,22,'english','yes','yes','yes'),(35,23,'hindi','yes','yes','yes'),(36,23,'english','yes','yes','yes'),(37,24,'hindi','yes','yes','yes'),(38,24,'english','yes','yes','no'),(39,25,'hindi','yes','yes','yes'),(40,25,'english','yes','no','yes'),(41,26,'hindi','yes','yes','yes'),(42,26,'english','yes','yes','yes'),(43,27,'hindi','yes','yes','yes'),(44,27,'english','yes','yes','yes'),(45,28,'hindi','yes','yes','yes'),(46,28,'english','yes','yes','yes'),(47,29,'hindi','yes','yes','yes'),(48,29,'english','yes','yes','yes'),(49,30,'hindi','yes','yes','yes'),(50,30,'english','yes','yes','yes'),(51,31,'hindi','yes','yes','yes'),(52,31,'english','yes','yes','yes');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 14:41:11
