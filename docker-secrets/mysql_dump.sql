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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `affiliations`
--

LOCK TABLES `affiliations` WRITE;
/*!40000 ALTER TABLE `affiliations` DISABLE KEYS */;
INSERT INTO `affiliations` VALUES (1,'UVU'),(2,'Snow College'),(3,'UAEA'),(4,'USTA'),(5,'Mt. SAC'),(6,'KU'),(8,'OAC'),(9,'NPS'),(10,'BYU');
/*!40000 ALTER TABLE `affiliations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'Macro Invertebrate Research',NULL),(2,'Public and Community Health',NULL),(3,'Natural Resources Summer Camp',NULL),(4,'Art Dept. Photography',NULL),(5,'Physics Department Research',NULL),(6,'Utah Art Education Association',NULL),(7,'Creative Writing',NULL),(8,'Community Ed Night Photography',NULL),(9,'Community Ed Photography',NULL),(10,'Snow College Honors',NULL),(11,'Pleasant Creek Research',NULL),(12,'Science Association of Women',NULL),(13,'Community Ed Plein Air',NULL),(14,'Biology Department Botany Class',NULL),(15,'UVU Honors',NULL),(16,'Community Ed Natural History',NULL),(17,'ESL Program',NULL),(18,'Biology Department Plant Ecology Class',NULL),(19,'Space Plasma Physics',NULL),(20,'Wilderness Writing',NULL),(21,'Natural Resources Management',NULL),(22,'Open House',NULL),(23,'Native American Initiative Program',NULL),(24,'UVU Learning Communities',NULL),(25,'English as a Second Language',NULL),(26,'Geomorphology ',NULL),(27,'Nature to the Classroom',NULL),(28,'UVU Physics Class',NULL),(29,'Botany Club',NULL),(30,'Plein Air Watercolor',NULL),(31,'NPS Wayne High School',NULL),(32,'Communicating Environments ',NULL),(34,'Kansas University Geology',NULL),(35,'Community Health',NULL),(36,'USTA Astronomy',NULL),(37,'USTA Geology',NULL),(38,'Mt. SAC',NULL),(40,'Art Dept. Photography',NULL),(42,'New Group',NULL),(43,'DGM',NULL),(44,'Historic Processes and Photographic Illustration',NULL),(45,'Special Topics in Landscape Photography',NULL),(46,'Accessibility Services',NULL),(47,'Digital Photography and Compositing',NULL),(48,'Editor\'s Workshop',NULL),(49,'Honors Astronomy',NULL),(50,'OAC WFA Course',NULL),(51,'CCE Astronomy',NULL),(52,'English Intermediate Courses',NULL),(53,'CCE Plein Air Watercolor',NULL),(54,'CCE Photography',NULL),(55,'NPS Leadership Team',NULL),(56,'Physics Workshop',NULL),(58,'American Heritage',NULL),(59,'NPS NHA',NULL),(60,'Outdoor Recreation',NULL),(61,'UVU Photo Faculty',NULL),(62,'Environmental Stewardship',NULL),(63,'Snow College',NULL),(64,'Technology and Human Life',NULL),(65,'AJC Architects',NULL),(66,'Digital Media',NULL),(67,'Honors Colloquim',NULL),(68,'CCE Faculty',NULL),(69,'BYU Natural History',NULL),(70,'High Altitude Research',NULL),(71,'Snow College and Colombia',NULL),(72,'Provo STEM Endorsement',NULL),(73,'UVU Risk Management',NULL);
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
INSERT INTO `lookup_group_affiliation` VALUES (3,2),(6,3),(10,2),(34,6),(38,5),(50,1),(50,1),(55,9),(59,9),(63,2),(69,10),(71,2);
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
INSERT INTO `lookup_group_department` VALUES (1,1),(5,1),(8,4),(9,4),(11,1),(12,1),(13,4),(16,4),(23,7),(27,1),(29,1),(30,4),(33,4),(46,10),(51,4),(53,4),(54,4),(56,1),(61,2),(62,3),(65,11),(66,9),(68,4),(70,1);
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
  `timestamp` int(11) NOT NULL,
  `visit_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensor_1`
--

LOCK TABLES `sensor_1` WRITE;
/*!40000 ALTER TABLE `sensor_1` DISABLE KEYS */;
INSERT INTO `sensor_1` VALUES (1,44.000,2147483647,3);
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
  `timestamp` int(11) NOT NULL,
  `visit_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensor_2`
--

LOCK TABLES `sensor_2` WRITE;
/*!40000 ALTER TABLE `sensor_2` DISABLE KEYS */;
INSERT INTO `sensor_2` VALUES (1,538.000,2147483647,3);
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visits`
--

LOCK TABLES `visits` WRITE;
/*!40000 ALTER TABLE `visits` DISABLE KEYS */;
INSERT INTO `visits` VALUES (2,1,1404194400000,1404280800000,2,1,0,1,0,0,0,0,NULL),(3,2,1404972000000,1405231200000,4,3,7,1,2,1,1,0,'First visit from the department.'),(4,3,1405317600000,1405576800000,4,3,2,4,2,1,1,1,'First teacher left early.'),(5,1,1405404000000,1405490400000,2,1,0,1,0,0,0,0,NULL),(6,4,1405922400000,1406354400000,6,5,10,7,2,1,0,0,'One student left early for a day and a night.'),(7,5,1406268000000,1406440800000,3,2,2,3,0,0,0,0,'Five people on day one only, then four people.'),(8,4,1406527200000,1407477600000,12,11,11,4,3,1,0,1,'Fred White and his wife stayed two extra nights.'),(9,7,1408341600000,1408514400000,2,1,10,1,0,0,1,0,NULL),(10,6,1407477600000,1407564000000,3,2,5,5,4,1,1,0,'This was a retreat for the journal editors, value issue on the water nothing recorded.'),(11,5,1408600800000,1408687200000,2,1,0,1,0,0,0,0,NULL),(12,8,1408687200000,1408773600000,2,1,8,10,3,1,1,0,NULL),(13,9,1409810400000,1409983200000,3,2,5,6,4,1,1,0,NULL),(14,10,1410415200000,1410588000000,2,1,15,8,5,1,0,1,'Vol. ditch digging'),(15,11,1410588000000,1410674400000,2,1,2,1,1,0,0,0,'On going research, family was present as well.'),(16,12,1411106400000,1411192800000,2,1,6,2,2,1,1,0,'Heath brought his young daughter and didn\'t ask if it was okay.'),(17,5,1411106400000,1411624800000,2,1,1,1,0,0,0,0,'Optics equipment trip.'),(18,13,1411624800000,1411797600000,3,2,12,3,2,1,1,0,'The 15th person only stayed one day and night.'),(19,14,1412229600000,1412402400000,3,2,6,7,2,1,1,1,NULL),(20,15,1412834400000,1413093600000,4,3,12,8,7,1,1,1,'Good group of honor students.'),(21,16,1413352800000,1413612000000,4,3,14,0,1,1,1,1,'Great group lots of questions.'),(22,5,1413352800000,1413439200000,2,1,0,0,0,0,0,0,NULL),(23,17,1413784800000,1414044000000,4,3,9,10,4,1,0,1,'Korea, Japan, China, Mexico, Peru, Russia, and Guatamala, two extra day visitors.'),(24,18,1414130400000,1414216800000,2,1,5,11,1,1,0,0,'Double booked with physics research, trash not weighed water esitmated.'),(25,19,1414130400000,1414303200000,3,2,1,4,1,1,0,0,'Trash not weighed water not measurable.'),(26,20,1414648800000,1414821600000,3,2,2,5,1,1,0,1,NULL),(27,21,1414821600000,1414998000000,3,2,8,15,2,1,0,1,NULL),(28,22,1415343600000,1415430000000,2,1,12,9,0,0,0,0,'Eleven on the first day twenty-two on the second.'),(29,23,1416553200000,1416726000000,3,2,11,10,10,0,0,1,'Some left early and other arrived late.'),(30,24,1417762800000,1417849200000,2,1,9,4,3,1,0,0,'Honors program plug'),(31,19,1418367600000,1418540400000,3,2,1,5,2,0,0,0,'Didn\'t do an evaluations because this group was here a month ago.'),(32,25,1426485600000,1426744800000,4,3,9,6,5,1,1,1,'High water use'),(33,26,1426831200000,1427004000000,3,2,3,12,3,1,1,0,NULL),(34,27,1427436000000,1427608800000,3,2,15,8,7,1,1,1,NULL),(35,28,1428040800000,1428213600000,3,2,2,4,1,1,1,1,NULL),(38,29,1428300000000,1428472800000,3,2,10,2,1,1,1,1,NULL),(39,5,1429250400000,1429423200000,3,2,0,3,1,0,0,0,'Data not taken because of the small group size.'),(40,30,1430373600000,1430546400000,3,2,8,4,3,1,1,0,NULL),(41,9,1429768800000,1429941600000,3,2,4,12,4,1,1,1,NULL),(42,31,1430719200000,1430719200000,1,0,13,20,5,0,0,0,NULL),(43,32,1430805600000,1431064800000,4,3,13,9,3,1,1,1,NULL),(44,7,1431064800000,1431151200000,2,1,3,4,2,1,1,0,'Cloudy so no star gazing.'),(45,9,1431669600000,1431756000000,2,1,10,6,3,1,0,0,NULL),(46,34,1432274400000,1432792800000,7,6,6,18,3,1,0,1,'One student left on the second day.'),(47,14,1432792800000,1432965600000,3,2,4,8,2,1,0,1,NULL),(48,35,1433311200000,1433656800000,5,4,11,3,3,1,1,1,'Two came the second day, and one left early.'),(49,36,1434261600000,1434607200000,5,4,8,6,8,1,0,1,'The instructor brought his wife and four kids; one woman brought her daughter, and the two of them left a day early.'),(50,37,1434866400000,1435212000000,5,4,9,8,3,1,0,1,NULL),(51,38,1435212000000,1435471200000,4,3,8,9,2,1,0,1,'Extra instructor the first night, and the toilet was running, using insane amounts of water...so the water total isn\'t accurate.'),(52,73,1441951200000,1442037600000,2,1,2,0,0,0,0,0,'AED delivery and risk evaluation.');
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

-- Dump completed on 2017-04-03 22:12:31
