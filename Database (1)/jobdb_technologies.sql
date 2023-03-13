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
-- Table structure for table `technologies`
--

DROP TABLE IF EXISTS `technologies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technologies` (
  `technologies_id` int NOT NULL AUTO_INCREMENT,
  `candidate_id` int DEFAULT NULL,
  `tech_name` varchar(45) DEFAULT NULL,
  `tech_expertise` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`technologies_id`),
  KEY `fk_technologies_id_idx` (`candidate_id`),
  CONSTRAINT `fk_technologies_id` FOREIGN KEY (`candidate_id`) REFERENCES `basic_detail` (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technologies`
--

LOCK TABLES `technologies` WRITE;
/*!40000 ALTER TABLE `technologies` DISABLE KEYS */;
INSERT INTO `technologies` VALUES (1,3,'php','beginer'),(2,3,'nodejs','mediator'),(3,3,'java','beginer'),(4,3,'python','expert'),(5,4,'php','mediator'),(6,4,'nodejs','beginer'),(7,4,'java','expert'),(8,6,'php','beginer'),(9,6,'nodejs','mediator'),(10,6,'java','expert'),(11,6,'python','mediator'),(12,9,'php','beginer'),(13,9,'nodejs','mediator'),(14,9,'java','beginer'),(15,9,'python','expert'),(16,10,'php','expert'),(17,10,'nodejs','beginer'),(18,10,'java','mediator'),(19,11,'php','beginer'),(20,11,'nodejs','mediator'),(21,11,'java','expert'),(22,11,'python','mediator'),(23,12,'php','beginer'),(24,12,'nodejs','mediator'),(25,12,'java','expert'),(26,12,'python','mediator'),(27,13,'php','beginer'),(28,13,'nodejs','beginer'),(29,13,'java','beginer'),(30,13,'python','beginer'),(31,14,'php','mediator'),(32,14,'nodejs','beginer'),(33,14,'java','mediator'),(34,14,'python','expert'),(35,15,'php','beginer'),(36,15,'nodejs','mediator'),(37,15,'java','expert'),(38,15,'python','mediator'),(39,16,'php','beginer'),(40,16,'nodejs','mediator'),(41,16,'java','expert'),(42,16,'python','beginer'),(43,17,'php','beginer'),(44,17,'nodejs','mediator'),(45,17,'java','expert'),(46,17,'python','mediator'),(47,18,'php','mediator'),(48,18,'nodejs','beginer'),(49,18,'java','beginer'),(50,18,'python','expert'),(51,19,'php','beginer'),(52,19,'nodejs','mediator'),(53,19,'java','expert'),(54,19,'python','beginer'),(55,20,'php','beginer'),(56,20,'nodejs','mediator'),(57,20,'java','expert'),(58,20,'python','beginer'),(59,21,'php','beginer'),(60,21,'nodejs','mediator'),(61,21,'java','mediator'),(62,21,'python','beginer'),(63,22,'php','beginer'),(64,22,'nodejs','mediator'),(65,22,'java','mediator'),(66,22,'python','beginer'),(67,23,'php','beginer'),(68,23,'nodejs','mediator'),(69,23,'java','expert'),(70,23,'python','beginer'),(71,24,'php','beginer'),(72,24,'nodejs','mediator'),(73,24,'java','mediator'),(74,24,'python','beginer'),(75,25,'php','expert'),(76,25,'nodejs','mediator'),(77,25,'java','beginer'),(78,25,'python','mediator'),(79,26,'php','beginer'),(80,26,'nodejs','mediator'),(81,26,'java','expert'),(82,27,'php','beginer'),(83,27,'nodejs','mediator'),(84,27,'java','expert'),(85,28,'php','beginer'),(86,28,'nodejs','mediator'),(87,28,'java','expert'),(88,29,'php','beginer'),(89,29,'nodejs','mediator'),(90,29,'java','expert'),(91,30,'php','beginer'),(92,30,'nodejs','mediator'),(93,30,'java','expert'),(94,31,'php','beginer'),(95,31,'nodejs','mediator'),(96,31,'java','expert');
/*!40000 ALTER TABLE `technologies` ENABLE KEYS */;
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
