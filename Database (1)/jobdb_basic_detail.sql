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
-- Table structure for table `basic_detail`
--

DROP TABLE IF EXISTS `basic_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `basic_detail` (
  `candidate_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `designation` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `address2` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `dob` varchar(45) DEFAULT NULL,
  `zipcode` varchar(45) DEFAULT NULL,
  `relationship_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`candidate_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `basic_detail`
--

LOCK TABLES `basic_detail` WRITE;
/*!40000 ALTER TABLE `basic_detail` DISABLE KEYS */;
INSERT INTO `basic_detail` VALUES (1,'Priya ','parmar','Developer','6465014240',' shahibag','shahibag','ahmedabad','gujarat','priya@gmail.com','Male','2023-02-11','380001','married'),(2,'riya  ','parmar','Developer ','9896786450',' abad','abad ','ahmedabad ','uttarpradesh','riya@gmail.com ','Male','2023-02-04','380001 ','married'),(3,'nik ','solanki','developer ','9876543210',' abad ','abad ','ahmedabad ','tamilnadu','nik@gmail.com','Male','2023-02-17','380001 ','married'),(4,'rahul ','chauhan','designer','9345457890',' ranip','ranip','bhavnagar','rajasthan','rahul@gmail.com','Male','2023-02-04','340001','married'),(5,'Niti  ','parmar ','dev ','2344325450',' abad ','abad','ahmedabad ','rajasthan','niti@gmail.com','Male','2023-02-04','390001','married'),(6,'khushi  ','dabgar','dev ','6354014027',' abad ','abad','ahmedabad  ','gujarat','khushi@gmail.com','Female','2023-02-04','380001','single'),(7,'nidhi ','mehta','dev ','9876543219',' abad ','abad ','surat','punjab','nidhi@gmail.com','Female','2001-02-19','380021','divorce'),(8,'Niti  ','chavda','dev ','9345457895',' abad  ','abad','gandhinagar','rajasthan','niti1@gmail.com','Female','2023-02-05','453451','single'),(9,'Nitic  ','parmar ','dev ','9345457890 ',' abad ','abad ','ahmedabad  ','tamilnadu','riya@gmail.com ','Female','2023-02-19','380001 ','married'),(10,'rahi ','chauhan','marketing','9876543212',' abad  ','abad ','rajkot ','uttarpradesh','rahi@gmail.com ','Female','2023-02-18','380003','divorce'),(11,'krish ','solanki ','dev ','9876543212',' abad  ','abad ','surat ','gujarat','krish@gmail.com ','Female','2023-02-12','380001 ','married'),(12,'Priya  ','solanki ','QA','9876543212 ',' abad  ','abad  ','ahmedabad  ','punjab','priya@gmail.com ','Female','2023-02-25','380001  ','married'),(13,'Priya ','solanki  ','dev ','9876543212',' abad  ','abad  ','ahmedabad  ','rajasthan','priya@gmail.com ','Female','2023-02-28','380007','married'),(14,'nikhil ','jain','QA','9876543211',' abad ','abad ','ahmedabad  ','gujarat','nikhil@gmail.com','Male','2023-02-05','380001  ','married'),(15,'om  ','modi','marketing ','9876543212 ',' abad  ',' abad ','ahmedabad   ','rajasthan','om@gmail.com ','Female','2023-02-11','380001  ','divorce'),(16,'vishal ','solanki  ','dev ','9876543210 ',' abad  ','abad ','ahmedabad   ','uttarpradesh','pqr@gmail.com','Male','2023-02-11','380001  ','single'),(17,'Priya ','chavda ','dev  ','9876543212 ',' abad   ','abad  ','ahmedabad   ','rajasthan','priya@gmail.com ','Female','2023-02-18','380001  ','married'),(18,'alia','chavda','dev ','9876543212',' abad  ','abad ','ahmedabad   ','tamilnadu','riya@gmail.com ','Female','2023-02-04','380001  ','single'),(19,'arjun','parmar ','rd','9812564370',' abad  ','abad ','ahmedabad  ','rajasthan','xyz@gmail.com','Male','2023-02-04','380001  ','married'),(20,'kriti','bhatt','cfbf','9812564372',' vcb','vb c','vcb ','uttarpradesh','abx@gmail.com','Female','2023-02-03','380001','married'),(21,'bhoomi','gupta','HR','9812565572',' fr','frrd','fg','rajasthan','abcd@gmail.com','Female','2023-02-03','380021','married'),(22,'rohit','shah','HR','9833565572',' fr','frrd','fg','rajasthan','abc@gmail.com','Female','2023-02-03','380001','married'),(23,'vishwa ','shah','dev  ','9876543234',' abad   ',' abad  ','rajkot ','rajasthan','vishwa@gmail.com ','Female','2023-02-02','380090','single'),(24,'harsh ','patel','QA','9876543255',' abad   ','abad  ','ahmedabad   ','gujarat','harsh@gmail.com  ','Male','2023-02-05','380001 ','single'),(25,'ridhi ','solanki  ','developer ','9876543212 ',' abad   ','abad ','baroda','gujarat','ridhi@gmail.com ','Male','2023-02-11','380091','married'),(26,'megha ','patel','designer','9876543211',' naranpura','naranpura','ahmedabad  ','gujarat','megha@gmail.com','Female','2023-02-04','380006','married'),(27,'megha ','patel','designer','9876543211',' naranpura','naranpura','ahmedabad  ','gujarat','megha@gmail.com','Female','2023-02-04','380006','married'),(28,'megha ','patel','designer','9876543211',' naranpura','naranpura','ahmedabad  ','gujarat','megha@gmail.com','Female','2023-02-04','380006','married'),(29,'megha ','patel','designer','9876543211',' naranpura','naranpura','ahmedabad  ','gujarat','megha@gmail.com','Female','2023-02-04','380006','married'),(30,'megha ','patel','designer','9876543211',' naranpura','naranpura','ahmedabad  ','gujarat','megha@gmail.com','Female','2023-02-04','380006','married'),(31,'megha ','patel','designer','9876543211',' naranpura','naranpura','ahmedabad  ','gujarat','megha@gmail.com','Female','2023-02-04','380006','married');
/*!40000 ALTER TABLE `basic_detail` ENABLE KEYS */;
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
