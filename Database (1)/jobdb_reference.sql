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
-- Table structure for table `reference`
--

DROP TABLE IF EXISTS `reference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference` (
  `reference_id` int NOT NULL AUTO_INCREMENT,
  `candidate_id` int DEFAULT NULL,
  `references_name` varchar(45) DEFAULT NULL,
  `references_contact` varchar(45) DEFAULT NULL,
  `references_relation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`reference_id`),
  KEY `fk_references_id_idx` (`candidate_id`),
  CONSTRAINT `fk_references_id` FOREIGN KEY (`candidate_id`) REFERENCES `basic_detail` (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference`
--

LOCK TABLES `reference` WRITE;
/*!40000 ALTER TABLE `reference` DISABLE KEYS */;
INSERT INTO `reference` VALUES (1,3,'siya','9886546640','bro '),(2,3,'ram','9886546644','sis '),(3,4,'bhoomi','6354014027','sis'),(4,4,'rohit','6354014024','bro'),(5,6,'siya ','9868766670','sis '),(6,6,'ram ','9868766672 ','bro '),(7,9,'siya ','9868766675','bro '),(8,9,'karan','9983432341 ','sis '),(9,10,'siya ','9868766672','bro '),(10,10,'ram','9534535345','sis '),(11,11,'riya ','9868766670 ','bro'),(12,11,'sirin ','9534535345 ','sis '),(13,12,'siya  ','9868766670 ','sis '),(14,12,'ram ','9868766653','bro '),(15,13,'siya  ','9868766670 ','bro '),(16,13,'ram  ','9868766672','sis '),(17,14,'rohan  ','9868766673','bro '),(18,14,'rishi','9045543554','sis'),(19,15,'jihan','9868766671','bro '),(20,15,'ram ','9868766632','sis '),(21,16,'siya ','9868766670  ','bro  '),(22,16,'ram  ','9868766653','sis '),(23,17,'siya ','9868766670 ','sis'),(24,17,'ram','9868766653','bro '),(25,18,'siya ','9868766670 ','sis  '),(26,18,'ram  ','9868766653 ','bro '),(27,19,'siya  ','9868766670  ','bro  '),(28,19,'ram ','9868766653 ','sis  '),(29,20,'siya  ','9868766670 ','sis'),(30,20,'ram','9868766653','bro '),(31,21,'siya ','9868766670 ','sis'),(32,21,'ram','9868766653 ','bro '),(33,22,'siya ','9868766670 ','sis'),(34,22,'ram','9868766653 ','bro '),(35,23,'karan','9868767670  ','bro  '),(36,23,'riya','9888766653','sis  '),(37,24,'siya  ','9868766670  ','sis '),(38,24,'rimi','9868766672 ','bro  '),(39,25,'siya ','9868766670 ','bro '),(40,25,'ram ','9868766653','sis '),(41,26,'siya   ','9868766670   ','bro  '),(42,26,'ram ','9868766672 ','sis  '),(43,27,'siya   ','9868766670   ','bro  '),(44,27,'ram ','9868766672 ','sis  '),(45,28,'siya   ','9868766670   ','bro  '),(46,28,'ram ','9868766672 ','sis  '),(47,29,'siya   ','9868766670   ','bro  '),(48,29,'ram ','9868766672 ','sis  '),(49,30,'siya   ','9868766670   ','bro  '),(50,30,'ram ','9868766672 ','sis  '),(51,31,'siya   ','9868766670   ','bro  '),(52,31,'ram ','9868766672 ','sis  ');
/*!40000 ALTER TABLE `reference` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-17 14:41:10
