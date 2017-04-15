-- MySQL dump 10.16  Distrib 10.1.21-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: localhost
-- ------------------------------------------------------
-- Server version	10.1.21-MariaDB-1~jessie

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `affiliations`
--

DROP TABLE IF EXISTS `affiliations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `affiliations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `affiliations`
--

LOCK TABLES `affiliations` WRITE;
/*!40000 ALTER TABLE `affiliations` DISABLE KEYS */;
INSERT INTO `affiliations` VALUES (1,'UVU'),(2,'Snow College'),(3,'UAEA'),(4,'USTA'),(5,'Mt. SAC'),(6,'KU'),(8,'OAC'),(9,'NPS'),(10,'BYU'),(11,'New Affiliation');
/*!40000 ALTER TABLE `affiliations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `department_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'HLTH 482R',1),(2,'ART 300R',2),(3,'ART 371R',2),(4,'ART 300',2),(5,'ENG 3050',3),(6,'ENG 3460',3),(7,'BOT 4300',1),(8,'HONR 100R',5),(9,'ESL 2110',6),(10,'ESL 2120',6),(11,'ESL 2130',6),(12,'ESL 2140',6),(13,'BOT 3700',1),(14,'BOT 3705',1),(15,'CRN 23970',1),(16,'REC 4400',1),(18,'ENGL 201H',6),(19,'GEO 3500',1),(20,'Physics 1800',1),(21,'COMM 350R',3),(22,'HLTH 4140',1),(23,'PHYS 525R',8),(24,'GEO 525R',8),(25,'DGM 3540',9),(26,'ART 471R',2),(27,'DGM 3320',9),(28,'ENGL 2050',3),(29,'ENG 2010',3),(30,'ENG 3010',3),(31,'POLS 1000',3),(32,'TECH 200',9),(33,'EDUC 5750',12);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `affiliation_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'College of Science and Health',1),(2,'School of the Arts',1),(3,'College of Humanities and Social Sciences',1),(4,'Community and Continuing Education',1),(5,'Honors',1),(6,'University College',1),(7,'Multicultural Student Services',1),(8,'USTA',4),(9,'College of Technology and Computing',1),(10,'Accessibility Services',1),(11,'OEL',1),(12,'School of Education',1);
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `contact_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'Macro Invertebrate Research',NULL),(2,'Public and Community Health',NULL),(3,'Natural Resources Summer Camp',NULL),(4,'Art Dept. Photography',NULL),(5,'Physics Department Research',NULL),(6,'Utah Art Education Association',NULL),(7,'Creative Writing',NULL),(8,'Community Ed Night Photography',NULL),(9,'Community Ed Photography',NULL),(10,'Snow College Honors',NULL),(11,'Pleasant Creek Research',NULL),(12,'Science Association of Women',NULL),(13,'Community Ed Plein Air',NULL),(14,'Biology Department Botany Class',NULL),(15,'UVU Honors',NULL),(16,'Community Ed Natural History',NULL),(17,'ESL Program',NULL),(18,'Biology Department Plant Ecology Class',NULL),(19,'Space Plasma Physics',NULL),(20,'Wilderness Writing',NULL),(21,'Natural Resources Management',NULL),(22,'Open House',NULL),(23,'Native American Initiative Program',NULL),(24,'UVU Learning Communities',NULL),(25,'English as a Second Language',NULL),(26,'Geomorphology ',NULL),(27,'Nature to the Classroom',NULL),(28,'UVU Physics Class',NULL),(29,'Botany Club',NULL),(30,'Plein Air Watercolor',NULL),(31,'NPS Wayne High School',NULL),(32,'Communicating Environments ',NULL),(34,'Kansas University Geology',NULL),(35,'Community Health',NULL),(36,'USTA Astronomy',NULL),(37,'USTA Geology',NULL),(38,'Mt. SAC',NULL),(42,'New Group',NULL),(43,'DGM',NULL),(44,'Historic Processes and Photographic Illustration',NULL),(45,'Special Topics in Landscape Photography',NULL),(46,'Accessibility Services',NULL),(47,'Digital Photography and Compositing',NULL),(48,'Editor\'s Workshop',NULL),(49,'Honors Astronomy',NULL),(50,'OAC WFA Course',NULL),(51,'CCE Astronomy',NULL),(52,'English Intermediate Courses',NULL),(53,'CCE Plein Air Watercolor',NULL),(54,'CCE Photography',NULL),(55,'NPS Leadership Team',NULL),(56,'Physics Workshop',NULL),(58,'American Heritage',NULL),(59,'NPS NHA',NULL),(60,'Outdoor Recreation',NULL),(61,'UVU Photo Faculty',NULL),(62,'Environmental Stewardship',NULL),(63,'Snow College',NULL),(64,'Technology and Human Life',NULL),(65,'AJC Architects',NULL),(66,'Digital Media',NULL),(67,'Honors Colloquim',NULL),(68,'CCE Faculty',NULL),(69,'BYU Natural History',NULL),(70,'High Altitude Research',NULL),(71,'Snow College and Colombia',NULL),(72,'Provo STEM Endorsement',NULL),(73,'UVU Risk Management',NULL),(74,'Project Development',NULL),(75,'U-NP Conference',NULL),(76,'OEL Retreat',NULL),(77,'Outdoor Adventure Center',NULL),(78,'ELL Group',NULL),(79,'Consulting Group',NULL),(80,'UVU Photography',NULL),(81,'ELL Level 5',NULL),(82,'Natural History of Utah',NULL),(83,'ELL Level 6',NULL),(84,'Environmental Writing',NULL),(85,'Research Writing',NULL),(86,'Spanish Class',NULL),(87,'Maeser Prep',NULL),(88,'Test Group',NULL);
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookup_group_affiliation`
--

DROP TABLE IF EXISTS `lookup_group_affiliation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lookup_group_affiliation` (
  `group_id` int(11) NOT NULL,
  `affiliation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookup_group_affiliation`
--

LOCK TABLES `lookup_group_affiliation` WRITE;
/*!40000 ALTER TABLE `lookup_group_affiliation` DISABLE KEYS */;
INSERT INTO `lookup_group_affiliation` VALUES (3,2),(6,3),(10,2),(34,6),(38,5),(50,1),(50,1),(55,9),(59,9),(63,2),(69,10),(71,2),(74,1),(75,1),(73,1),(76,1),(77,1),(78,1),(84,1),(85,1),(88,6);
/*!40000 ALTER TABLE `lookup_group_affiliation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookup_group_course`
--

DROP TABLE IF EXISTS `lookup_group_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lookup_group_course` (
  `group_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookup_group_course`
--

LOCK TABLES `lookup_group_course` WRITE;
/*!40000 ALTER TABLE `lookup_group_course` DISABLE KEYS */;
INSERT INTO `lookup_group_course` VALUES (2,1),(4,2),(7,5),(7,6),(14,7),(15,8),(17,9),(17,10),(17,11),(17,12),(18,13),(18,14),(19,15),(20,6),(21,16),(24,18),(25,9),(25,10),(25,11),(25,12),(26,19),(28,20),(32,21),(35,22),(36,23),(37,24),(43,25),(44,3),(44,26),(45,2),(47,27),(48,28),(48,5),(52,29),(52,30),(57,9),(57,10),(57,11),(57,12),(58,31),(60,16),(64,32),(67,8),(72,33);
/*!40000 ALTER TABLE `lookup_group_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lookup_group_department`
--

DROP TABLE IF EXISTS `lookup_group_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lookup_group_department` (
  `group_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lookup_group_department`
--

LOCK TABLES `lookup_group_department` WRITE;
/*!40000 ALTER TABLE `lookup_group_department` DISABLE KEYS */;
INSERT INTO `lookup_group_department` VALUES (1,1),(5,1),(8,4),(9,4),(11,1),(12,1),(13,4),(16,4),(23,7),(27,1),(29,1),(30,4),(33,4),(46,10),(51,4),(53,4),(54,4),(56,1),(61,2),(62,3),(65,11),(66,9),(68,4),(70,1),(79,9),(81,3),(82,4),(83,3),(86,3),(88,2);
/*!40000 ALTER TABLE `lookup_group_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sensor_1`
--

DROP TABLE IF EXISTS `sensor_1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sensor_1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` decimal(10,3) NOT NULL,
  `timestamp` bigint(20) DEFAULT NULL,
  `visit_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensor_1`
--

LOCK TABLES `sensor_1` WRITE;
/*!40000 ALTER TABLE `sensor_1` DISABLE KEYS */;
INSERT INTO `sensor_1` VALUES (13,44.000,1404972000001,3),(14,9.500,1405317600001,4),(15,152.000,1405922400001,6),(16,206.000,1406527200001,8),(17,11.000,1407477600001,10),(18,36.000,1408341600001,9),(19,30.000,1408687200001,12),(20,12.000,1409810400001,13),(21,7.000,1410415200001,14),(22,3.600,1411106400001,16),(23,22.000,1411624800001,18),(24,27.000,1412229600001,19),(25,36.500,1412834400001,20),(26,41.000,1413352800001,21),(27,44.000,1413784800001,23),(28,5.500,1414648800001,26),(29,65.000,1416553200001,29),(30,21.000,1417762800001,30),(31,16.000,1418367600001,31),(32,49.000,1426485600001,32),(33,14.000,1426831200001,33),(34,34.000,1427436000001,34),(35,5.000,1428040800001,35),(36,21.000,1428300000001,38),(37,26.000,1430373600001,40),(38,22.000,1429768800001,41),(39,79.000,1430805600001,43),(40,6.500,1431064800001,44),(41,19.000,1431669600001,45),(42,66.500,1434866400001,50),(43,23.000,1432792800001,47),(44,20.000,1433311200001,48),(45,37.000,1433311200001,48),(46,17.000,1434866400001,50),(47,26.000,1435212000001,51),(48,29.000,1436162400001,53),(49,120.000,1436767200001,54),(50,21.500,1437976800001,55),(51,23.000,1439532000001,57),(52,12.000,1439791200001,58),(53,6.500,1440741600001,59),(54,4.600,1441432800001,60),(55,21.000,1441864800001,61),(56,34.250,1442469600001,62),(57,5.500,1443074400001,63),(58,6.000,1443420000001,64),(59,12.000,1443679200001,65),(60,15.250,1444370400001,66),(61,5.500,1444716000001,67),(62,10.000,1444975200001,68),(63,63.000,1445234400001,69),(64,4.000,1445580000001,70),(65,14.000,1446012000001,71),(66,10.000,1447484400001,74),(67,13.000,1456470000001,79),(68,6.000,1457679600001,83),(69,6.000,1457852400001,84),(70,22.000,1459144800001,87),(71,7.000,1459404000001,88),(72,14.500,1460095200001,89),(73,73.500,1462255200001,91),(74,26.500,1462600800001,93),(75,65.000,1463378400001,95),(76,10.000,1464328800001,96),(77,86.000,1464674400001,97),(78,2.300,1462946400001,98),(79,46.000,1469426400001,105),(80,5.000,1469944800001,106),(81,9.000,1471240800001,108),(82,9.000,1472882400001,109),(83,36.000,1473314400001,110),(84,8.000,1473919200001,111),(85,7.000,1475215200001,112),(86,13.000,1476165600001,115),(87,2.000,1476424800001,116),(88,20.000,1476856800001,117),(89,43.000,1477288800001,118),(90,14.000,1477634400001,119),(91,3.500,1473228000001,120),(92,0.500,1487314800001,121),(93,18.000,1487919600001,122),(94,12.000,1489042800001,123),(95,10.000,1490335200001,124),(96,17.000,1490680800001,125);
/*!40000 ALTER TABLE `sensor_1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sensor_2`
--

DROP TABLE IF EXISTS `sensor_2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sensor_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` decimal(10,3) NOT NULL,
  `timestamp` bigint(20) DEFAULT NULL,
  `visit_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensor_2`
--

LOCK TABLES `sensor_2` WRITE;
/*!40000 ALTER TABLE `sensor_2` DISABLE KEYS */;
INSERT INTO `sensor_2` VALUES (5,538.000,1404972000001,3),(6,351.000,1405317600001,4),(7,1782.000,1405922400001,6),(8,3877.000,1406527200001,8),(9,210.000,1407477600001,10),(10,381.000,1408687200001,12),(11,327.000,1409810400001,13),(12,206.000,1410415200001,14),(13,124.000,1411106400001,16),(14,496.000,1411624800001,18),(15,400.000,1412229600001,19),(16,945.000,1413352800001,21),(17,2518.000,1413784800001,23),(18,350.000,1414130400001,24),(19,260.000,1414648800001,26),(20,960.000,1414821600001,27),(21,975.000,1416553200001,29),(22,264.000,1417762800001,30),(23,315.000,1418367600001,31),(24,1430.000,1426485600001,32),(25,305.000,1426831200001,33),(26,938.000,1427436000001,34),(27,260.000,1428040800001,35),(28,430.000,1428300000001,38),(29,460.000,1430373600001,40),(30,622.000,1429768800001,41),(31,1325.000,1430805600001,43),(32,115.000,1431064800001,44),(33,415.600,1431669600001,45),(34,2993.000,1432274400001,46),(35,420.000,1432792800001,47),(36,1208.310,1433311200001,48),(37,1520.000,1434261600001,49),(38,1538.690,1434866400001,50),(39,851.920,1436162400001,53),(40,4392.000,1436767200001,54),(41,1390.000,1437976800001,55),(42,420.000,1439532000001,57),(43,490.000,1439791200001,58),(44,237.620,1440741600001,59),(45,535.000,1441432800001,60),(46,585.000,1441864800001,61),(47,584.790,1442469600001,62),(48,405.800,1443074400001,63),(49,220.370,1443420000001,64),(50,500.000,1443679200001,65),(51,278.720,1444370400001,66),(52,226.870,1444716000001,67),(53,371.000,1444975200001,68),(54,1640.000,1445234400001,69),(55,235.000,1445580000001,70),(56,547.000,1446012000001,71),(57,437.400,1447484400001,74),(58,295.000,1456470000001,79),(59,361.000,1457679600001,83),(60,403.000,1457852400001,84),(61,101.000,1458280800001,86),(62,1295.000,1459144800001,87),(63,295.000,1459404000001,88),(64,365.000,1460095200001,89),(65,1300.000,1462255200001,91),(66,830.000,1462600800001,93),(67,1325.000,1463378400001,95),(68,180.000,1464328800001,96),(69,3315.000,1464674400001,97),(70,413.310,1462946400001,98),(71,1200.000,1463119200001,99),(72,1040.000,1469426400001,105),(73,1090.000,1469944800001,106),(74,212.000,1470895200001,107),(75,650.000,1471240800001,108),(76,510.000,1472882400001,109),(77,330.000,1473919200001,111),(78,145.000,1475215200001,112),(79,925.000,1476165600001,115),(80,115.000,1476424800001,116),(81,1202.000,1476856800001,117),(82,2970.000,1477288800001,118),(83,400.000,1477634400001,119),(84,220.000,1473228000001,120),(85,78.500,1487314800001,121),(86,254.000,1487919600001,122),(87,811.000,1489042800001,123),(88,371.000,1490335200001,124),(89,975.000,1490680800001,125);
/*!40000 ALTER TABLE `sensor_2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sensors`
--

DROP TABLE IF EXISTS `sensors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sensors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensors`
--

LOCK TABLES `sensors` WRITE;
/*!40000 ALTER TABLE `sensors` DISABLE KEYS */;
INSERT INTO `sensors` VALUES (1,'Trash','lbs.'),(2,'Water','gal.');
/*!40000 ALTER TABLE `sensors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visits`
--

DROP TABLE IF EXISTS `visits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `start_date` bigint(20) DEFAULT NULL,
  `end_date` bigint(20) DEFAULT NULL,
  `days` int(11) DEFAULT NULL,
  `nights` int(11) DEFAULT NULL,
  `students_female` int(11) DEFAULT NULL,
  `students_male` int(11) DEFAULT NULL,
  `advisors` int(11) DEFAULT NULL,
  `evaluation` int(11) DEFAULT NULL,
  `summary` int(11) DEFAULT NULL,
  `darksky` int(11) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visits`
--

LOCK TABLES `visits` WRITE;
/*!40000 ALTER TABLE `visits` DISABLE KEYS */;
/*!40000 ALTER TABLE `visits` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-15 23:25:58
