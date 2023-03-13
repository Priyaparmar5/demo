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
-- Table structure for table `education_detail`
--

DROP TABLE IF EXISTS `education_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education_detail` (
  `edu_id` int NOT NULL AUTO_INCREMENT,
  `candidate_id` int DEFAULT NULL,
  `course_name` varchar(45) DEFAULT NULL,
  `university` varchar(45) DEFAULT NULL,
  `percentage` varchar(45) DEFAULT NULL,
  `passing_year` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`edu_id`),
  KEY `fk_candidates_acadamic_id_idx` (`candidate_id`),
  CONSTRAINT `fk_education_detail_1` FOREIGN KEY (`candidate_id`) REFERENCES `basic_detail` (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_detail`
--

LOCK TABLES `education_detail` WRITE;
/*!40000 ALTER TABLE `education_detail` DISABLE KEYS */;
INSERT INTO `education_detail` VALUES (1,1,'ssc','GTU','2020','80'),(2,2,'bachelor','gu','2021','90%'),(3,3,'bachelor',' gtu ','2023 ','80 '),(4,4,'ssc','gseb','2016','80 '),(5,4,'hsc','gseb','2028','82'),(6,4,'bachelor','gu','2021','80 '),(7,5,'bachelor','sdcfd','df','gdf'),(8,6,'ssc','gesb','2016','80 '),(9,6,'hsc','gseb','2018','85'),(10,6,'bachelor','gu','2021','82'),(11,7,'ssc','gseb ','2023 ','80 '),(12,8,'bachelor','gu ','2023 ','80 '),(13,9,'bachelor','gtu ','2021','80 '),(14,9,'master','gtu ','2023  ','80 '),(15,10,'bachelor','gu','2021','60'),(16,10,'master','ks school of business management','2023','65'),(17,11,'bachelor','gtu ',' 2021','80 '),(18,11,'master','gtu ','2023 ','90'),(19,12,'bachelor','gtu ','2023 ','70 '),(20,12,'master','gtu ','2025','80 '),(21,13,'bachelor','gtu  ','2023  ','80  '),(22,13,'master','gtu  ','2023  ','80  '),(23,14,'bachelor','gtu  ','2023  ','70'),(24,15,'ssc','gseb ','2021 ','75'),(25,15,'hsc','gseb ','2023   ','76'),(26,16,'ssc','gseb  ','2021 ','80 '),(27,16,'hsc','gseb  ','2023  ','85'),(28,17,'bachelor','gtu ','2021','80 '),(29,17,'master','gtu','2023   ','75'),(30,18,'ssc','gtu ','2023 ','80 '),(31,18,'hsc','gtu ','2026','85'),(32,19,'hsc','gtu ','2023','80 '),(33,20,'bachelor','vc','2023','80'),(34,20,'master','cvbc','cvb','cbcv'),(35,21,'hsc','gtu g','2023 ','80'),(36,22,'hsc','gtu g','2023 ','80'),(37,23,'bachelor','spu','2021','80 '),(38,23,'master','spu ','2023  ','80  '),(39,24,'bachelor','gtu ','2023 ','80 '),(40,25,'ssc','cbse','2021 ','56'),(41,25,'hsc','cbse','2021 ','70'),(42,26,'ssc','gu','2021 ','80 '),(43,27,'ssc','gu','2021 ','80 '),(44,28,'ssc','gu','2021 ','80 '),(45,29,'ssc','gu','2021 ','80 '),(46,30,'ssc','gu','2021 ','80 '),(47,31,'ssc','gu','2021 ','80 ');
/*!40000 ALTER TABLE `education_detail` ENABLE KEYS */;
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
