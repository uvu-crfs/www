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
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `affiliations`
--

LOCK TABLES `affiliations` WRITE;
/*!40000 ALTER TABLE `affiliations` DISABLE KEYS */;
INSERT INTO `affiliations` VALUES (10,'BYU'),(6,'KU'),(5,'Mt. SAC'),(11,'New Affiliation'),(9,'NPS'),(8,'OAC'),(2,'Snow College'),(3,'UAEA'),(4,'USTA'),(1,'UVU');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (4,'ART 300'),(2,'ART 300R'),(3,'ART 371R'),(26,'ART 471R'),(13,'BOT 3700'),(14,'BOT 3705'),(7,'BOT 4300'),(21,'COMM 350R'),(15,'CRN 23970'),(27,'DGM 3320'),(25,'DGM 3540'),(33,'EDUC 5750'),(29,'ENG 2010'),(30,'ENG 3010'),(5,'ENG 3050'),(6,'ENG 3460'),(18,'ENGL 201H'),(28,'ENGL 2050'),(9,'ESL 2110'),(10,'ESL 2120'),(11,'ESL 2130'),(12,'ESL 2140'),(19,'GEO 3500'),(24,'GEO 525R'),(22,'HLTH 4140'),(1,'HLTH 482R'),(8,'HONR 100R'),(23,'PHYS 525R'),(20,'Physics 1800'),(31,'POLS 1000'),(16,'REC 4400'),(32,'TECH 200');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (10,'Accessibility Services'),(3,'College of Humanities and Social Sciences'),(1,'College of Science and Health'),(9,'College of Technology and Computing'),(4,'Community and Continuing Education'),(5,'Honors'),(7,'Multicultural Student Services'),(11,'OEL'),(12,'School of Education'),(2,'School of the Arts'),(6,'University College'),(8,'USTA');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (46,'Accessibility Services'),(65,'AJC Architects'),(58,'American Heritage'),(4,'Art Dept. Photography'),(14,'Biology Department Botany Class'),(18,'Biology Department Plant Ecology Class'),(29,'Botany Club'),(69,'BYU Natural History'),(51,'CCE Astronomy'),(68,'CCE Faculty'),(54,'CCE Photography'),(53,'CCE Plein Air Watercolor'),(32,'Communicating Environments '),(16,'Community Ed Natural History'),(8,'Community Ed Night Photography'),(9,'Community Ed Photography'),(13,'Community Ed Plein Air'),(35,'Community Health'),(79,'Consulting Group'),(7,'Creative Writing'),(43,'DGM'),(66,'Digital Media'),(47,'Digital Photography and Compositing'),(48,'Editor\'s Workshop'),(78,'ELL Group'),(81,'ELL Level 5'),(83,'ELL Level 6'),(25,'English as a Second Language'),(52,'English Intermediate Courses'),(62,'Environmental Stewardship'),(84,'Environmental Writing'),(17,'ESL Program'),(26,'Geomorphology '),(70,'High Altitude Research'),(44,'Historic Processes and Photographic Illustration'),(49,'Honors Astronomy'),(67,'Honors Colloquim'),(34,'Kansas University Geology'),(1,'Macro Invertebrate Research'),(87,'Maeser Prep'),(38,'Mt. SAC'),(23,'Native American Initiative Program'),(82,'Natural History of Utah'),(21,'Natural Resources Management'),(3,'Natural Resources Summer Camp'),(27,'Nature to the Classroom'),(42,'New Group'),(55,'NPS Leadership Team'),(59,'NPS NHA'),(31,'NPS Wayne High School'),(50,'OAC WFA Course'),(76,'OEL Retreat'),(22,'Open House'),(77,'Outdoor Adventure Center'),(60,'Outdoor Recreation'),(5,'Physics Department Research'),(56,'Physics Workshop'),(11,'Pleasant Creek Research'),(30,'Plein Air Watercolor'),(74,'Project Development'),(72,'Provo STEM Endorsement'),(2,'Public and Community Health'),(85,'Research Writing'),(12,'Science Association of Women'),(63,'Snow College'),(71,'Snow College and Colombia'),(10,'Snow College Honors'),(19,'Space Plasma Physics'),(86,'Spanish Class'),(45,'Special Topics in Landscape Photography'),(64,'Technology and Human Life'),(88,'Test Group'),(75,'U-NP Conference'),(36,'USTA Astronomy'),(37,'USTA Geology'),(6,'Utah Art Education Association'),(15,'UVU Honors'),(24,'UVU Learning Communities'),(61,'UVU Photo Faculty'),(80,'UVU Photography'),(28,'UVU Physics Class'),(73,'UVU Risk Management'),(20,'Wilderness Writing');
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
  `affiliation_id` int(11) NOT NULL,
  KEY `group_id` (`group_id`),
  KEY `affiliation_id` (`affiliation_id`),
  CONSTRAINT `lookup_group_affiliation_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  CONSTRAINT `lookup_group_affiliation_ibfk_2` FOREIGN KEY (`affiliation_id`) REFERENCES `affiliations` (`id`)
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
  `course_id` int(11) NOT NULL,
  KEY `group_id` (`group_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `lookup_group_course_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
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
  `department_id` int(11) NOT NULL,
  KEY `group_id` (`group_id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `lookup_group_department_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
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
  PRIMARY KEY (`id`),
  KEY `visit_id` (`visit_id`),
  CONSTRAINT `sensor_1_ibfk_1` FOREIGN KEY (`visit_id`) REFERENCES `visits` (`id`)
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
  PRIMARY KEY (`id`),
  KEY `visit_id` (`visit_id`),
  CONSTRAINT `sensor_2_ibfk_1` FOREIGN KEY (`visit_id`) REFERENCES `visits` (`id`)
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
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
  PRIMARY KEY (`id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `visits_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visits`
--

LOCK TABLES `visits` WRITE;
/*!40000 ALTER TABLE `visits` DISABLE KEYS */;
INSERT INTO `visits` VALUES (2,1,1404194400000,1404280800000,2,1,0,1,0,0,0,0,NULL,'Jake Loveless'),(3,2,1404972000000,1405231200000,4,3,7,1,2,1,1,0,'First visit from the department.','James Bemel'),(4,3,1405317600000,1405576800000,4,3,2,4,2,1,1,1,'First teacher left early.','Chad Dewey'),(5,1,1405404000000,1405490400000,2,1,0,1,0,0,0,0,NULL,'Jake Loveless'),(6,4,1405922400000,1406354400000,6,5,10,7,2,1,0,0,'One student left early for a day and a night.','Kevin Schley'),(7,5,1406268000000,1406440800000,3,2,2,3,0,0,0,0,'Five people on day one only, then four people.','Kasey Johnson'),(8,4,1406527200000,1407477600000,12,11,11,4,3,1,0,1,'Fred White and his wife stayed two extra nights.','Travis Lovell'),(9,7,1408341600000,1408514400000,2,1,10,1,0,0,1,0,NULL,'Stephenie Clegg'),(10,6,1407477600000,1407564000000,3,2,5,5,4,1,1,0,'This was a retreat for the journal editors, value issue on the water nothing recorded.','Scott Hatch'),(11,5,1408600800000,1408687200000,2,1,0,1,0,0,0,0,NULL,'Kim Nielsen'),(12,8,1408687200000,1408773600000,2,1,8,10,3,1,1,0,NULL,'Ivan Mangum'),(13,9,1409810400000,1409983200000,3,2,5,6,4,1,1,0,NULL,'Ivan Mangum'),(14,10,1410415200000,1410588000000,2,1,15,8,5,1,0,1,'Vol. ditch digging','Renee Faatz'),(15,11,1410588000000,1410674400000,2,1,2,1,1,0,0,0,'On going research, family was present as well.','Suzanne Walther'),(16,12,1411106400000,1411192800000,2,1,6,2,2,1,1,0,'Heath brought his young daughter and didn\'t ask if it was okay.','Julie Nance'),(17,5,1411106400000,1411624800000,2,1,1,1,0,0,0,0,'Optics equipment trip.','Kim Nielsen'),(18,13,1411624800000,1411797600000,3,2,12,3,2,1,1,0,'The 15th person only stayed one day and night.','John Gilbert'),(19,14,1412229600000,1412402400000,3,2,6,7,2,1,1,1,NULL,'Renee Van Buren'),(20,15,1412834400000,1413093600000,4,3,12,8,7,1,1,1,'Good group of honor students.','Allen Hill'),(21,16,1413352800000,1413612000000,4,3,14,0,1,1,1,1,'Great group lots of questions.','Renee Van Buren'),(22,5,1413352800000,1413439200000,2,1,0,0,0,0,0,0,NULL,'Kim Nielsen'),(23,17,1413784800000,1414044000000,4,3,9,10,4,1,0,1,'Korea, Japan, China, Mexico, Peru, Russia, and Guatamala, two extra day visitors.','Kevin Eyraud'),(24,18,1414130400000,1414216800000,2,1,5,11,1,1,0,0,'Double booked with physics research, trash not weighed water esitmated.','Michael Stevens'),(25,19,1414130400000,1414303200000,3,2,1,4,1,1,0,0,'Trash not weighed water not measurable.','Kim Nielsen'),(26,20,1414648800000,1414821600000,3,2,2,5,1,1,0,1,NULL,'Scott Hatch'),(27,21,1414821600000,1414998000000,3,2,8,15,2,1,0,1,NULL,'Scott Williams'),(28,22,1415343600000,1415430000000,2,1,12,9,0,0,0,0,'Eleven on the first day twenty-two on the second.',''),(29,23,1416553200000,1416726000000,3,2,11,10,10,0,0,1,'Some left early and other arrived late.','Ken Sekaquaptewa'),(30,24,1417762800000,1417849200000,2,1,9,4,3,1,0,0,'Honors program plug','Ethan Sproat Tiffany Nez'),(31,19,1418367600000,1418540400000,3,2,1,5,2,0,0,0,'Didn\'t do an evaluations because this group was here a month ago.','Kim Nielsen'),(32,25,1426485600000,1426744800000,4,3,9,6,5,1,1,1,'High water use','Kevin Eyraud'),(33,26,1426831200000,1427004000000,3,2,3,12,3,1,1,0,NULL,'Suzanne Walther'),(34,27,1427436000000,1427608800000,3,2,15,8,7,1,1,1,NULL,'Scott Williams'),(35,28,1428040800000,1428213600000,3,2,2,4,1,1,1,1,NULL,'Kim Nielsen'),(38,29,1428300000000,1428472800000,3,2,10,2,1,1,1,1,NULL,'Matt Wang'),(39,5,1429250400000,1429423200000,3,2,0,3,1,0,0,0,'Data not taken because of the small group size.','Kim Nielsen'),(40,30,1430373600000,1430546400000,3,2,8,4,3,1,1,0,NULL,'Delayna Crockett'),(41,9,1429768800000,1429941600000,3,2,4,12,4,1,1,1,NULL,'Ivan Mangum'),(42,31,1430719200000,1430719200000,1,0,13,20,5,0,0,0,NULL,'Cindy Micheli'),(43,32,1430805600000,1431064800000,4,3,13,9,3,1,1,1,NULL,'Maria Blevins'),(44,7,1431064800000,1431151200000,2,1,3,4,2,1,1,0,'Cloudy so no star gazing.','Ivan Mangum'),(45,9,1431669600000,1431756000000,2,1,10,6,3,1,0,0,NULL,'Ivan Mangum'),(46,34,1432274400000,1432792800000,7,6,6,18,3,1,0,1,'One student left on the second day.','Diane Kamola'),(47,14,1432792800000,1432965600000,3,2,4,8,2,1,0,1,NULL,'Renee Van Buren'),(48,35,1433311200000,1433656800000,5,4,11,3,3,1,1,1,'Two came the second day, and one left early.','James Bemel'),(49,36,1434261600000,1434607200000,5,4,8,6,8,1,0,1,'The instructor brought his wife and four kids; one woman brought her daughter, and the two of them left a day early.','Rich Tolman'),(50,37,1434866400000,1435212000000,5,4,9,8,3,1,0,1,NULL,'Rich Tolman'),(51,38,1435212000000,1435471200000,4,3,8,9,2,1,0,1,'Extra instructor the first night, and the toilet was running, using insane amounts of water...so the water total isn\'t accurate.','Becca Walker'),(52,73,1441951200000,1442037600000,2,1,2,0,0,0,0,0,'AED delivery and risk evaluation.','Robin Enbermeyer'),(53,43,1436162400000,1436421600000,5,4,2,13,5,0,0,0,NULL,'Grant Flygare'),(54,44,1436767200000,1437804000000,13,12,6,6,4,0,0,0,'14 permanent members. Intern came for 4 days, adjunct faculty came for a total of 12 days, models for 12. 217 day use total because of Fred and his wife visiting, along with a man to repair the weather station.','Travis Lovell'),(55,45,1437976800000,1438495200000,6,4,7,3,1,0,0,0,'The full moon dampened the dark sky tour.','Kevin Schley'),(56,46,1438581600000,1438581600000,1,0,1,0,1,0,0,0,'','Pola Morrison'),(57,47,1439532000000,1439704800000,3,2,6,10,4,0,0,0,NULL,'Reese Christensen'),(58,48,1439791200000,1439964000000,3,2,7,6,2,0,0,0,'One student','Karin Anderson'),(59,49,1440741600000,1440828000000,2,1,10,11,11,0,0,0,'','Renee Faatz'),(60,50,1441432800000,1441605600000,3,2,7,11,2,0,0,0,'','Kimberly Reynolds'),(61,51,1441864800000,1442037600000,3,2,7,6,3,0,0,0,'','John Gilbert'),(62,53,1442469600000,1442728800000,3,2,9,2,2,0,0,0,'Annette covering','Ivan Magnum'),(63,18,1443074400000,1443247200000,3,2,8,5,2,0,0,0,'One student had to leave in the middle of the night because his wife went into labor! Excitement at the field station.','Renee Van Buren'),(64,52,1443420000000,1443592800000,3,2,5,1,1,0,0,0,'','Linda Shelton'),(65,53,1443679200000,1443852000000,3,2,11,2,3,0,0,0,NULL,'Patty'),(66,54,1444370400000,1444543200000,2,1,6,11,2,0,0,0,'Annette covering','John Gilbert'),(67,55,1444716000000,1444888800000,3,2,7,2,1,0,0,0,'One woman came day 2,  Jeff williams came day 2 and 3 but no overnight','Christy Gluck'),(68,1,1444975200000,1445148000000,3,2,1,7,1,0,0,0,'','Kim Nelsen'),(69,25,1445234400000,1445580000000,4,3,11,10,5,0,0,0,'','Kevin Eyraud'),(70,18,1445580000000,1445666400000,2,1,10,8,1,0,0,0,'','Michael Stevens'),(71,58,1446012000000,1446271200000,4,3,5,6,3,0,0,0,'','Andrew Bibby '),(72,22,1446879600000,1446966000000,2,1,10,7,0,0,0,0,'Didn\'t include Michael and Keith','Andrew Bibby '),(73,59,1447311600000,1447311600000,1,0,6,2,0,0,0,0,'','Shirley Torgeson'),(74,60,1447484400000,1447657200000,2,2,11,5,1,0,0,0,NULL,'Scott Williams'),(75,61,1452754800000,1453014000000,4,3,1,2,3,0,0,0,NULL,'Travis Lovell'),(76,62,1452754800000,1452927600000,3,2,3,1,4,0,0,0,NULL,'Ethan Sproat'),(77,63,1455260400000,1455346800000,19,1,10,9,1,0,0,0,NULL,'English Brooks'),(78,28,1455865200000,1456038000000,3,2,5,11,1,0,0,0,NULL,'Kim Nielsen'),(79,64,1456470000000,1456556400000,2,1,12,17,7,0,0,0,'Fred and his wife were here, six people stayed off site.','Anne Arendt'),(81,65,1457593200000,1457679600000,2,2,2,2,1,0,0,0,'','Michael Stevens'),(82,27,1457074800000,1457247600000,3,2,16,5,6,0,0,0,NULL,'Scott Willaims'),(83,51,1457679600000,1457852400000,3,2,5,4,3,0,0,0,'One couple left on the second day','John Gilbert'),(84,29,1457852400000,1458021600000,3,2,7,3,1,0,0,0,NULL,'Ally Searle'),(85,55,1458108000000,1458108000000,1,0,5,2,0,0,0,0,NULL,'Christy Gluck'),(86,66,1458280800000,1458367200000,2,1,2,4,0,0,0,0,NULL,'Katelyn Earl'),(87,25,1459144800000,1459404000000,4,3,14,5,5,0,0,0,NULL,'Kevin Eyraud'),(88,52,1459404000000,1459576800000,3,2,14,5,5,0,0,0,'','Linda Shelton'),(89,67,1460095200000,1460268000000,3,2,16,5,4,0,0,0,'','Kate McPhearson'),(90,31,1458885600000,1458885600000,1,0,15,12,4,0,0,0,'','Alicia LaFever'),(91,32,1462255200000,1462514400000,4,3,14,9,4,0,0,0,'','Maria Blevins'),(92,68,1462428000000,1462428000000,1,0,1,4,4,0,0,0,'','Ivan Mangum'),(93,69,1462600800000,1462860000000,4,3,14,9,6,0,0,0,'','John Bennion'),(94,66,1463119200000,1463205600000,2,1,5,2,0,0,0,0,'','Katelyn Earl'),(95,62,1463378400000,1463896800000,7,6,7,4,4,0,0,0,'Eleven people, one joined on Thursday and 1 one joined on Friday.','Ethan Sproat'),(96,70,1464328800000,1464501600000,3,2,1,5,1,0,0,0,'','Kim Nielsen'),(97,34,1464674400000,1465538400000,11,10,8,16,3,0,0,0,'','Diane Kamola'),(98,71,1462946400000,1463032800000,2,1,8,3,4,0,0,0,'','Dennis Faatz'),(99,72,1463119200000,1463464800000,5,4,17,3,4,0,0,0,'One woman stayed off-site with family. Also, they started hauling trash before weighing it, so we don\'t have trash info.','Jennifer Remy'),(103,74,1467957600000,1468562400000,8,7,1,0,1,0,0,0,NULL,'Ethan Sproat'),(104,75,1468994400000,1469253600000,4,3,11,3,0,0,0,0,'5 came on the second day','Gina Gilson'),(105,4,1469426400000,1469858400000,6,5,5,8,2,0,0,0,'Lots of moving around.','Travis Lovell'),(106,36,1469944800000,1470290400000,5,4,5,11,3,0,0,0,NULL,'Duane Merrel'),(107,76,1470895200000,1470981600000,2,1,9,6,0,0,0,0,'Some spent a night offsite','Kathy Ardmore'),(108,28,1471240800000,1471586400000,5,5,4,1,1,0,0,0,NULL,'Kim Nielsen'),(109,77,1472882400000,1473055200000,3,2,15,5,2,0,0,0,NULL,'Kim Reynolds'),(110,54,1473314400000,1473487200000,3,2,8,5,3,0,0,0,'One spouse','Bryan Niven'),(111,78,1473919200000,1474005600000,2,1,3,5,8,0,0,0,NULL,'Brian MacKay'),(112,79,1475215200000,1475301600000,2,1,10,2,2,0,0,0,'two spouses, three photographers for PR','Simon Crosette'),(113,80,1474005600000,1474178400000,3,2,10,2,2,0,0,0,NULL,'Travis Lovell'),(114,80,1475215200000,1475301600000,2,1,10,2,2,0,0,0,NULL,'Lonna King'),(115,81,1476165600000,1476338400000,3,2,7,7,4,0,0,0,NULL,'Brian MacKay'),(116,18,1476424800000,1476511200000,2,1,9,2,1,0,0,0,NULL,'Michael Stevens'),(117,82,1476856800000,1477116000000,4,3,0,23,1,0,0,0,'Three left on the third day.','Renee Van Buren'),(118,83,1477288800000,1477634400000,5,4,0,0,5,0,0,0,NULL,'Kevin Eyraud'),(119,67,1477634400000,1477807200000,3,2,10,11,5,0,0,0,'Carl Haisch came for one night','Allen Hill'),(120,31,1473228000000,1473314400000,2,1,7,10,3,0,0,0,NULL,'Cindy Micheli'),(121,63,1487314800000,1487401200000,2,1,11,9,1,0,0,0,NULL,'English Brooks'),(122,28,1487919600000,1488092400000,3,2,9,3,1,0,0,0,NULL,'Kim Nielsen'),(123,1,1489042800000,1489215600000,3,2,9,15,1,0,0,0,NULL,'Linda Shelton'),(124,65,1490335200000,1490508000000,3,2,4,7,0,0,0,0,NULL,'Jill Jones'),(125,52,1490680800000,1490853600000,3,2,6,15,4,0,0,0,NULL,'Heidi Condi');
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

-- Dump completed on 2017-04-16  7:26:30
