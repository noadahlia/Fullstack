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
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `appointment_id` int NOT NULL AUTO_INCREMENT,
  `doctor_id` int DEFAULT NULL,
  `patient_id` int DEFAULT NULL,
  `appointment_date` date DEFAULT NULL,
  `appointment_start_time` time DEFAULT NULL,
  `appointment_duration` int DEFAULT NULL,
  `appointment_show` tinyint(1) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  PRIMARY KEY (`appointment_id`),
  KEY `doctor_id` (`doctor_id`),
  KEY `patient_id` (`patient_id`),
  CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`doctor_id`),
  CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient` (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (1,5,5,'2023-04-28','10:00:00',115,1,NULL),(2,13,23,'2022-04-02','09:00:00',39,1,NULL),(3,12,12,'2023-02-20','12:00:00',31,0,NULL),(4,18,7,'2023-12-11','17:00:00',97,0,NULL),(5,11,23,'2022-01-23','09:00:00',112,1,NULL),(6,11,15,'2023-09-22','10:00:00',117,1,NULL),(7,12,41,'2022-05-24','14:00:00',110,1,NULL),(8,14,2,'2023-03-17','13:00:00',68,0,NULL),(9,11,5,'2023-09-24','11:00:00',55,1,NULL),(10,9,47,'2023-05-29','16:00:00',69,1,NULL),(11,16,26,'2022-06-20','13:00:00',30,0,NULL),(12,9,16,'2022-07-12','09:00:00',91,0,NULL),(13,1,41,'2022-06-27','16:00:00',38,1,'2022-06-27 16:00:00'),(14,20,16,'2023-07-25','11:00:00',34,0,NULL),(15,4,9,'2022-06-29','16:00:00',91,0,NULL),(16,11,29,'2022-07-13','17:00:00',79,0,NULL),(17,15,29,'2022-12-01','15:00:00',32,0,NULL),(18,2,28,'2022-02-28','14:00:00',61,1,NULL),(19,20,22,'2023-07-13','11:00:00',113,0,NULL),(20,11,5,'2023-02-09','12:00:00',69,1,NULL),(21,5,30,'2023-06-01','13:00:00',109,0,NULL),(22,17,2,'2023-04-23','12:00:00',91,0,NULL),(23,3,6,'2023-09-07','13:00:00',74,0,NULL),(24,1,36,'2022-06-15','14:00:00',81,1,'2022-06-15 14:00:00'),(25,4,12,'2023-11-18','09:00:00',120,0,NULL),(26,5,14,'2022-11-02','17:00:00',89,0,NULL),(27,6,39,'2022-10-31','09:00:00',118,1,NULL),(28,6,3,'2023-01-11','12:00:00',82,1,NULL),(29,8,38,'2023-11-28','10:00:00',49,0,NULL),(30,16,27,'2023-05-18','08:00:00',112,1,NULL),(31,2,29,'2022-07-26','08:00:00',108,0,NULL),(32,10,36,'2022-03-10','11:00:00',83,0,NULL),(33,14,20,'2023-11-07','10:00:00',119,0,NULL),(34,6,23,'2023-02-28','09:00:00',54,0,NULL),(35,2,33,'2023-11-26','08:00:00',111,1,NULL),(36,13,40,'2022-01-06','08:00:00',65,1,NULL),(37,12,41,'2022-08-19','10:00:00',118,0,NULL),(38,19,1,'2022-01-03','10:00:00',113,0,NULL),(39,17,13,'2022-12-30','12:00:00',36,1,NULL),(40,12,4,'2022-11-24','17:00:00',51,0,NULL),(41,11,49,'2023-05-15','13:00:00',117,0,NULL),(42,20,18,'2022-05-03','16:00:00',39,0,NULL),(43,8,22,'2022-04-22','14:00:00',40,0,NULL),(44,18,34,'2022-08-04','08:00:00',111,0,NULL),(45,4,36,'2022-09-21','15:00:00',105,0,NULL),(46,19,10,'2022-08-01','09:00:00',97,0,NULL),(47,2,37,'2022-03-24','16:00:00',78,0,NULL),(48,11,2,'2022-08-27','16:00:00',64,0,NULL),(49,8,10,'2022-10-10','14:00:00',31,0,NULL),(50,13,46,'2022-02-25','13:00:00',82,1,NULL),(51,2,8,'2023-03-08','08:00:00',99,1,NULL),(52,5,42,'2023-11-30','10:00:00',44,1,NULL),(53,19,47,'2023-09-02','11:00:00',98,1,NULL),(54,10,42,'2022-10-30','12:00:00',82,1,NULL),(55,4,10,'2022-04-05','12:00:00',34,0,NULL),(56,1,23,'2022-05-18','15:00:00',61,1,'2022-05-18 15:00:00'),(57,14,13,'2022-01-24','12:00:00',95,1,NULL),(58,14,50,'2023-04-23','15:00:00',84,1,NULL),(59,12,15,'2022-11-06','08:00:00',53,0,NULL),(60,7,13,'2022-12-01','09:00:00',32,1,NULL),(61,18,5,'2022-01-20','16:00:00',84,1,NULL),(62,10,45,'2023-04-07','17:00:00',88,0,NULL),(63,19,39,'2023-05-05','16:00:00',109,1,NULL),(64,3,17,'2022-09-28','09:00:00',119,1,NULL),(65,4,21,'2023-05-15','17:00:00',87,0,NULL),(66,8,13,'2022-01-23','10:00:00',100,0,NULL),(67,6,12,'2023-12-24','15:00:00',87,1,NULL),(68,16,45,'2022-06-26','16:00:00',83,0,NULL),(69,12,18,'2023-09-18','11:00:00',76,1,NULL),(70,20,35,'2023-03-03','11:00:00',91,1,NULL),(71,20,34,'2023-10-03','13:00:00',40,0,NULL),(72,19,12,'2023-03-11','16:00:00',91,1,NULL),(73,8,4,'2023-04-12','11:00:00',113,0,NULL),(74,4,10,'2022-06-09','10:00:00',90,0,NULL),(75,8,36,'2022-10-27','15:00:00',106,1,NULL),(76,20,40,'2022-07-09','15:00:00',72,0,NULL),(77,20,36,'2023-04-05','12:00:00',118,1,NULL),(78,16,12,'2023-10-26','09:00:00',67,0,NULL),(79,6,15,'2022-12-19','14:00:00',89,0,NULL),(80,5,26,'2022-03-10','13:00:00',114,0,NULL),(81,18,14,'2022-02-16','10:00:00',67,1,NULL),(82,8,19,'2022-07-11','14:00:00',96,0,NULL),(83,2,5,'2022-10-30','09:00:00',61,0,NULL),(84,11,13,'2022-02-07','17:00:00',108,0,NULL),(85,9,50,'2022-12-17','14:00:00',110,1,NULL),(86,16,17,'2023-05-17','10:00:00',75,0,NULL),(87,3,36,'2023-10-21','10:00:00',62,1,NULL),(88,5,30,'2023-03-23','13:00:00',89,0,NULL),(89,9,12,'2022-06-19','14:00:00',58,0,NULL),(90,14,21,'2022-01-25','14:00:00',47,1,NULL),(91,9,40,'2022-12-26','17:00:00',71,1,NULL),(92,3,39,'2022-11-03','14:00:00',73,1,NULL),(93,12,41,'2023-06-18','15:00:00',107,0,NULL),(94,19,29,'2022-11-08','13:00:00',69,1,NULL),(95,14,39,'2022-11-25','17:00:00',90,0,NULL),(96,18,41,'2023-03-23','12:00:00',116,0,NULL),(97,16,38,'2022-01-22','09:00:00',71,0,NULL),(98,8,16,'2023-12-05','08:00:00',87,1,NULL),(99,8,21,'2022-12-21','10:00:00',69,0,NULL),(100,7,8,'2023-01-08','08:00:00',62,0,NULL),(101,1,8,'2023-12-17','16:00:00',15,1,'2023-12-17 16:00:00');
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `patient_name` varchar(255) NOT NULL,
  `patient_blood_type` varchar(10) DEFAULT NULL,
  `patient_phone` varchar(20) DEFAULT NULL,
  `patient_address` varchar(255) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Henrietta Bergstrom','B-','055-222-2976','997 Schiller Ferry','1971-07-06'),(2,'Zachary Hauck','B+','053-664-1833','9769 Schamberger Estate','1979-05-25'),(3,'Van Heaney','B-','058-848-2168','143 Howe Islands','1996-03-21'),(4,'Lois Moore','O+','059-462-3236','82755 Osinski Extension','1956-12-22'),(5,'Luther Kihn','A+','058-136-0638','71953 Boehm Mountain','1995-02-25'),(6,'Sonia Murray','AB+','051-051-9808','4060 Joshuah Harbor','1965-12-10'),(7,'Dr. Caleb Lehner','A-','052-537-5204','8222 Alec Drives','1978-09-21'),(8,'Leah Muller','B+','055-226-5280','7606 Grayce Valley','1997-01-10'),(9,'Curtis Wolff','AB-','051-713-5878','2148 Willms Terrace','1998-12-26'),(10,'Dr. Jean Kirlin','AB+','051-415-9425','2863 Reynolds Key','1963-07-04'),(11,'Julian Batz Sr.','AB-','058-913-2619','9633 Kuhlman Forges','1986-12-22'),(12,'Janis Kozey','AB+','052-692-1890','31649 Bartell Gardens','2001-11-29'),(13,'Jerome Bednar','O+','051-122-9747','5816 Barrows Hills','2000-05-21'),(14,'Lena Gorczany V','A+','055-423-3611','4258 Kian Summit','1997-06-17'),(15,'Jesse Dach','O-','058-162-9227','9558 Remington Wall','1958-11-19'),(16,'Rodney Glover','AB+','053-768-7771','2566 Rowe Loop','1996-03-28'),(17,'Andy Turner','AB+','051-457-5212','72212 Huels Way','1973-02-21'),(18,'Sherri Barrows','A+','058-633-3200','31639 Ezekiel Shore','1950-10-12'),(19,'Elbert Sauer','AB+','053-933-1716','5759 Lueilwitz Prairie','1974-08-06'),(20,'Ms. Kathryn Halvorson','B-','056-565-4712','6499 Perry Fields','1952-03-25'),(21,'Cassandra White','B-','057-783-4769','3427 Roob Lights','1958-04-14'),(22,'Terrance Franey','B+','056-718-9458','651 Huel Route','1988-06-10'),(23,'Tami Ortiz','AB+','056-095-4375','986 Daniel Keys','1978-09-11'),(24,'Dan Gislason','A-','057-575-8199','30349 Okuneva Shores','1970-08-30'),(25,'Mr. Emilio Miller','A-','051-683-9971','29424 Wolf Keys','1958-10-20'),(26,'Leland Howell','B-','057-707-5856','66735 Jaycee Falls','1954-05-07'),(27,'Nellie Ullrich IV','O+','052-020-6911','63726 Kariane Expressway','1953-04-24'),(28,'Dr. Norma Heidenreich','A+','056-189-6870','26284 Ward Manors','1993-08-10'),(29,'Grady Smith-Kuhic','O+','053-055-0688','866 Bauch Motorway','2000-09-10'),(30,'Dr. Bryan Homenick','A+','057-275-7094','22274 Quigley Flat','1987-10-30'),(31,'Crystal Corwin','O-','054-203-7524','24952 Angie Heights','1960-05-14'),(32,'Lonnie Tremblay PhD','A+','051-537-1131','76346 DuBuque Islands','1960-04-16'),(33,'Sheila Hane','B-','051-386-1309','893 Kreiger Expressway','1968-02-18'),(34,'Deanna Wilderman','O+','053-522-3735','1897 Daugherty Loop','1988-12-15'),(35,'Jean Deckow','AB-','054-348-6942','1990 Conroy Village','1983-05-08'),(36,'Ernest Schaefer','O+','051-946-7885','98997 Macejkovic Court','1964-12-09'),(37,'Brandy Kreiger','AB-','053-547-4858','19941 Conn Lock','1977-03-16'),(38,'Janis Gorczany','AB-','055-153-0812','56991 Eddie Skyway','1961-10-26'),(39,'David Reilly','A-','059-301-7120','477 Wilderman Landing','1954-03-11'),(40,'Salvatore Franecki-Thompson','O-','056-266-6007','2682 Gabe Valley','1964-02-11'),(41,'Samuel Raynor','A-','056-338-2409','609 Kenneth Path','1981-07-01'),(42,'Dr. Gustavo D\'Amore','A-','050-238-7106','23752 Bridget Manors','1957-06-22'),(43,'Dr. Ira Metz','B-','059-022-3513','895 Dillan Mount','1991-06-20'),(44,'Edward Jakubowski','O+','058-481-0901','135 Crist Prairie','1954-03-20'),(45,'Arthur Hammes','B+','057-851-9288','917 Harvey Ways','1986-09-07'),(46,'Eduardo Gulgowski-Zemlak','O-','056-383-7230','9402 Larson Fort','1950-07-04'),(47,'Ebony Kunze MD','AB-','054-632-2178','3670 Carleton Estate','1969-08-01'),(48,'Angel Cummerata','AB+','057-100-6936','48582 Mills Summit','1957-02-25'),(49,'Neil Tromp','B+','057-641-8926','7916 Skiles Fort','1960-09-30'),(50,'Donna Haley II','A+','059-136-1816','37507 Renner Shoals','1986-06-07');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `speciality`
--

DROP TABLE IF EXISTS `speciality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `speciality` (
  `speciality_id` int NOT NULL AUTO_INCREMENT,
  `speciality_name` varchar(255) NOT NULL,
  PRIMARY KEY (`speciality_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `speciality`
--

LOCK TABLES `speciality` WRITE;
/*!40000 ALTER TABLE `speciality` DISABLE KEYS */;
INSERT INTO `speciality` VALUES (1,'Cardiology'),(2,'Dermatology'),(3,'Endocrinology'),(4,'Gastroenterology'),(5,'Neurology'),(6,'Orthopedics'),(7,'Pediatrics'),(8,'Psychiatry'),(9,'Radiology'),(10,'Urology');
/*!40000 ALTER TABLE `speciality` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-08 10:55:29
