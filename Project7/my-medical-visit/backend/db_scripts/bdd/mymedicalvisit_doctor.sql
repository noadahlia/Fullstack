-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: mymedicalvisit
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `doctor_id` int NOT NULL AUTO_INCREMENT,
  `doctor_name` varchar(255) NOT NULL,
  `speciality_id` int DEFAULT NULL,
  `doctor_address` varchar(255) DEFAULT NULL,
  `doctor_phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`doctor_id`),
  KEY `speciality_id` (`speciality_id`),
  CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`speciality_id`) REFERENCES `speciality` (`speciality_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'Tonya Kiehn',1,'958 Parker Neck','053-886-6586'),(2,'Keith Flatley',8,'791 Claire Villages','058-377-9960'),(3,'Tina Mayer',8,'105 Arielle Islands','053-052-7104'),(4,'Kelly Dooley',9,'1053 Nikolaus Unions','056-325-3025'),(5,'Dr. Walter Jacobson',1,'37270 Zulauf Passage','054-707-6932'),(6,'Mitchell Miller',9,'13502 Tromp Gateway','056-144-5349'),(7,'Malcolm Schaden DVM',2,'4698 Lorenza Wall','055-319-4467'),(8,'Velma O\'Connell',1,'532 Jena Ridges','055-365-0329'),(9,'Madeline Harber DDS',10,'244 Cortney Courts','054-269-3363'),(10,'Mr. Ralph Koch',8,'9566 Ivy Common','059-686-1149'),(11,'Mark Crona',2,'9221 Terrence Garden','053-996-9046'),(12,'Kimberly Turner',4,'2939 Becker Track','051-759-9453'),(13,'Tanya Franecki',5,'2704 Lubowitz Village','058-490-3858'),(14,'Randall Harber Sr.',4,'749 Ethan Port','051-154-9891'),(15,'Mr. Allen Jones',2,'74884 Bruce Tunnel','054-013-3897'),(16,'Sylvia Rosenbaum',3,'21213 Grady Freeway','056-765-8402'),(17,'Tanya Hintz II',8,'7159 Orn Shore','050-594-2276'),(18,'Crystal Leffler',2,'97992 Electa Inlet','051-694-1097'),(19,'Maria Schuster V',8,'407 Lula Meadow','058-234-7304'),(20,'Barbara Jacobi',4,'493 Cecelia Cliffs','055-564-0769');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-08 10:47:32
