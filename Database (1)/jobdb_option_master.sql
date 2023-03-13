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
-- Table structure for table `option_master`
--

DROP TABLE IF EXISTS `option_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_master` (
  `option_id` int NOT NULL AUTO_INCREMENT,
  `s_id` int DEFAULT NULL,
  `option_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`option_id`),
  KEY `fk_option_master_1_idx` (`s_id`),
  CONSTRAINT `select_id` FOREIGN KEY (`s_id`) REFERENCES `select_master` (`select_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `option_master`
--

LOCK TABLES `option_master` WRITE;
/*!40000 ALTER TABLE `option_master` DISABLE KEYS */;
INSERT INTO `option_master` VALUES (1,1,'gujarat'),(2,1,'uttarpradesh'),(3,1,'rajasthan'),(4,1,'tamilnadu'),(5,1,'punjab'),(6,2,'ahmedabad'),(7,2,'surat'),(8,2,'rajkot'),(9,2,'bhavnagar'),(10,2,'junagadh'),(11,3,'single'),(12,3,'married'),(13,3,'divorce'),(14,4,'ssc'),(15,4,'hsc'),(16,4,'bachelor'),(17,4,'master'),(18,5,'php'),(19,5,'nodejs'),(20,5,'java'),(21,5,'python'),(22,6,'development'),(23,6,'designing'),(24,6,'marketing'),(25,7,'ahmedabad'),(26,7,'bhavnagar'),(27,7,'rajkot'),(28,8,'hindi'),(29,8,'english');
/*!40000 ALTER TABLE `option_master` ENABLE KEYS */;
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
