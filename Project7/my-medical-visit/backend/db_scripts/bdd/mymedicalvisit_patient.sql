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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-08 10:47:32
