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
-- Table structure for table `work_experience`
--

DROP TABLE IF EXISTS `work_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_experience` (
  `id_experience` int NOT NULL AUTO_INCREMENT,
  `candidate_id` int DEFAULT NULL,
  `company_name` varchar(45) DEFAULT NULL,
  `designation` varchar(45) DEFAULT NULL,
  `from_date` varchar(45) DEFAULT NULL,
  `end_date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_experience`),
  KEY `fk_candidate_exp_id_idx` (`candidate_id`),
  CONSTRAINT `fk_candidate_exp_id` FOREIGN KEY (`candidate_id`) REFERENCES `basic_detail` (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_experience`
--

LOCK TABLES `work_experience` WRITE;
/*!40000 ALTER TABLE `work_experience` DISABLE KEYS */;
INSERT INTO `work_experience` VALUES (1,3,'esparkbiz ','developer ','2023-02-10','2023-02-10'),(2,4,'radix ','devloper','2023-02-11','2023-02-24'),(3,6,'esparkbiz ','designer  ','2023-02-10','2023-02-10'),(4,9,'esparkbiz ','designer ','2023-02-09','2023-03-11'),(5,9,'radix  ','designer ','2023-04-21','2023-04-07'),(6,10,'veritas','designer  ','2023-02-03','2023-03-12'),(7,11,'ordex','designer  ','2023-02-11','2023-03-02'),(8,12,'ordex ','QA','2023-02-16','2023-03-19'),(9,12,'ordex ','QA','2023-02-22','2023-03-12'),(10,13,'esparkbiz  ','designer   ','2023-02-11','2023-02-22'),(11,14,'esparkbiz  ','designer   ','2023-02-09','2023-03-12'),(12,15,'shaligram','marketing','2023-02-12','2023-02-15'),(13,16,'-','-','2023-02-18',''),(14,17,'esparkbiz   ','designer  ','2023-02-04','2023-02-08'),(15,18,'esparkbiz ','designer   ','2023-02-03','2023-02-26'),(16,19,'esparkbiz  ',' designer','2023-02-02','2023-02-01'),(17,20,'esparkbiz v','gdfg','2023-02-04','2023-03-01'),(18,21,'rgd','dfgd','2023-02-01','2023-02-02'),(19,22,'rgd','dfgd','2023-02-01','2023-02-02'),(20,23,'vcerp','designer   ','2023-02-04','2023-02-11'),(21,24,'esparkbiz  ','designer   ','2023-02-04','2023-03-04'),(22,25,'tridhya','designer    ','2023-02-25','2023-03-25'),(23,26,'abc','designer   ','2023-02-08','2023-03-02'),(24,27,'abc','designer   ','2023-02-08','2023-03-02'),(25,28,'abc','designer   ','2023-02-08','2023-03-02'),(26,29,'abc','designer   ','2023-02-08','2023-03-02'),(27,30,'abc','designer   ','2023-02-08','2023-03-02'),(28,31,'abc','designer   ','2023-02-08','2023-03-02');
/*!40000 ALTER TABLE `work_experience` ENABLE KEYS */;
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
