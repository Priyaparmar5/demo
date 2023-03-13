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
-- Table structure for table `preferences`
--

DROP TABLE IF EXISTS `preferences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preferences` (
  `preferences_id` int NOT NULL AUTO_INCREMENT,
  `candidate_id` int DEFAULT NULL,
  `expected_ctc` varchar(45) DEFAULT NULL,
  `current_ctc` varchar(45) DEFAULT NULL,
  `notice_period` varchar(45) DEFAULT NULL,
  `preferred_location` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`preferences_id`),
  KEY `fk_preferences_id_idx` (`candidate_id`),
  CONSTRAINT `fk_preferences_id` FOREIGN KEY (`candidate_id`) REFERENCES `basic_detail` (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preferences`
--

LOCK TABLES `preferences` WRITE;
/*!40000 ALTER TABLE `preferences` DISABLE KEYS */;
INSERT INTO `preferences` VALUES (1,3,'400000 ','600000','1','bhavnagar'),(2,4,'500000','400000','2','ahmedabad'),(3,6,'400000 ','600000  ','2 ','ahmedabad'),(4,9,'400000 ','400000 ','1','rajkot'),(5,10,'400000  ','600000  ','1','bhavnagar'),(6,11,'400000 ','400000 ','1','bhavnagar'),(7,12,'400000 ','400000  ','1','bhavnagar'),(8,13,'400000 ','600000  ','2  ','bhavnagar'),(9,14,'700000 ','400000   ','1 ','bhavnagar'),(10,15,'450000','300000','1 ','bhavnagar'),(11,16,'400000 ','600000   ','1 ','bhavnagar'),(12,17,'400000','400000   ','1','ahmedabad'),(13,18,'400000 ','600000   ','1  ','rajkot'),(14,19,'400000 ','400000  ','1  ','bhavnagar'),(15,20,'400000','600000  ','1','rajkot'),(16,21,'400000','400000 ','1 ','rajkot'),(17,22,'400000','400000 ','1 ','rajkot'),(18,23,'500000 ','400000  ','2  ','rajkot'),(19,24,'400000 ','400000   ','1  ','rajkot'),(20,25,'480000','420000  ','3','bhavnagar'),(21,26,'800000 ','600000','1  ','bhavnagar'),(22,27,'800000 ','600000','1  ','bhavnagar'),(23,28,'800000 ','600000','1  ','bhavnagar'),(24,29,'800000 ','600000','1  ','bhavnagar'),(25,30,'800000 ','600000','1  ','bhavnagar'),(26,31,'800000 ','600000','1  ','bhavnagar');
/*!40000 ALTER TABLE `preferences` ENABLE KEYS */;
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
