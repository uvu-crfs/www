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
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'Macro Invertebrate Research',NULL),(2,'Public and Community Health',NULL),(3,'Natural Resources Summer Camp',NULL),(4,'Art Dept. Photography',NULL),(5,'Physics Department Research',NULL),(6,'Utah Art Education Association',NULL),(7,'Creative Writing',NULL),(8,'Community Ed Night Photography',NULL),(9,'Community Ed Photography',NULL),(10,'Snow College Honors',NULL),(11,'Pleasant Creek Research',NULL),(12,'Science Association of Women',NULL),(13,'Community Ed Plein Air',NULL),(14,'Biology Department Botany Class',NULL),(15,'UVU Honors',NULL),(16,'Community Ed Natural History',NULL),(17,'ESL Program',NULL),(18,'Biology Department Plant Ecology Class',NULL),(19,'Space Plasma Physics',NULL),(20,'Wilderness Writing',NULL),(21,'Natural Resources Management',NULL),(22,'Open House',NULL),(23,'Native American Initiative Program',NULL),(24,'UVU Learning Communities',NULL),(25,'English as a Second Language',NULL),(26,'Geomorphology ',NULL),(27,'Nature to the Classroom',NULL),(28,'UVU Physics Class',NULL),(29,'Botany Club',NULL),(30,'Plein Air Watercolor',NULL),(31,'NPS Wayne High School',NULL),(32,'Communicating Environments ',NULL),(34,'Kansas University Geology',NULL),(35,'Community Health',NULL),(36,'USTA Astronomy',NULL),(37,'USTA Geology',NULL),(38,'Mt. SAC',NULL),(39,'Creative Writing',NULL),(40,'Art Dept. Photography',NULL),(42,'New Group',NULL),(43,'DGM',NULL),(44,'Historic Processes and Photographic Illustration',NULL),(45,'Special Topics in Landscape Photography',NULL),(46,'Accessibility Services',NULL),(47,'Digital Photography and Compositing',NULL),(48,'Editor\'s Workshop',NULL),(49,'Honors Astronomy',NULL),(50,'OAC WFA Course',NULL),(51,'CCE Astronomy',NULL),(52,'English Intermediate Courses',NULL),(53,'CCE Plein Air Watercolor',NULL),(54,'CCE Photography',NULL),(55,'NPS Leadership Team',NULL),(56,'Physics Workshop',NULL),(57,'English as a Second Language Classes',NULL),(58,'American Heritage',NULL),(59,'NPS NHA',NULL),(60,'Outdoor Recreation',NULL),(61,'UVU Photo Faculty',NULL),(62,'Environmental Stewardship',NULL),(63,'Snow College',NULL),(64,'Technology and Human Life',NULL),(65,'AJC Architects',NULL),(66,'Digital Media',NULL),(67,'Honors Colloquim',NULL),(68,'CCE Faculty',NULL),(69,'BYU Natural History',NULL),(70,'High Altitude Research',NULL),(71,'Snow College and Colombia',NULL),(72,'Provo STEM Endorsement',NULL);
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensor_1`
--

LOCK TABLES `sensor_1` WRITE;
/*!40000 ALTER TABLE `sensor_1` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensor_2`
--

LOCK TABLES `sensor_2` WRITE;
/*!40000 ALTER TABLE `sensor_2` DISABLE KEYS */;
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
  `start_date` int(11) DEFAULT NULL,
  `end_date` int(11) DEFAULT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
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

-- Dump completed on 2017-04-03  6:22:01
