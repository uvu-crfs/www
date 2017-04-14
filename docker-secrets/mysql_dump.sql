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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sensor_1`
--

LOCK TABLES `sensor_1` WRITE;
/*!40000 ALTER TABLE `sensor_1` DISABLE KEYS */;
INSERT INTO `sensor_1` VALUES (1,44.000,2147483647,3),(2,9.500,2147483647,4);
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
  `contact` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visits`
--

LOCK TABLES `visits` WRITE;
/*!40000 ALTER TABLE `visits` DISABLE KEYS */;
INSERT INTO `visits` VALUES (2,1,1404194400000,1404280800000,2,1,0,1,0,0,0,0,NULL,'Jake Loveless'),(3,2,1404972000000,1405231200000,4,3,7,1,2,1,1,0,'First visit from the department.','James Bemel'),(4,3,1405317600000,1405576800000,4,3,2,4,2,1,1,1,'First teacher left early.','Chad Dewey'),(5,1,1405404000000,1405490400000,2,1,0,1,0,0,0,0,NULL,'Jake Loveless'),(6,4,1405922400000,1406354400000,6,5,10,7,2,1,0,0,'One student left early for a day and a night.','Kevin Schley'),(7,5,1406268000000,1406440800000,3,2,2,3,0,0,0,0,'Five people on day one only, then four people.','Kasey Johnson'),(8,4,1406527200000,1407477600000,12,11,11,4,3,1,0,1,'Fred White and his wife stayed two extra nights.','Travis Lovell'),(9,7,1408341600000,1408514400000,2,1,10,1,0,0,1,0,NULL,'Stephenie Clegg'),(10,6,1407477600000,1407564000000,3,2,5,5,4,1,1,0,'This was a retreat for the journal editors, value issue on the water nothing recorded.','Scott Hatch'),(11,5,1408600800000,1408687200000,2,1,0,1,0,0,0,0,NULL,'Kim Nielsen'),(12,8,1408687200000,1408773600000,2,1,8,10,3,1,1,0,NULL,'Ivan Mangum'),(13,9,1409810400000,1409983200000,3,2,5,6,4,1,1,0,NULL,'Ivan Mangum'),(14,10,1410415200000,1410588000000,2,1,15,8,5,1,0,1,'Vol. ditch digging','Renee Faatz'),(15,11,1410588000000,1410674400000,2,1,2,1,1,0,0,0,'On going research, family was present as well.','Suzanne Walther'),(16,12,1411106400000,1411192800000,2,1,6,2,2,1,1,0,'Heath brought his young daughter and didn\'t ask if it was okay.','Julie Nance'),(17,5,1411106400000,1411624800000,2,1,1,1,0,0,0,0,'Optics equipment trip.','Kim Nielsen'),(18,13,1411624800000,1411797600000,3,2,12,3,2,1,1,0,'The 15th person only stayed one day and night.','John Gilbert'),(19,14,1412229600000,1412402400000,3,2,6,7,2,1,1,1,NULL,'Renee Van Buren'),(20,15,1412834400000,1413093600000,4,3,12,8,7,1,1,1,'Good group of honor students.','Allen Hill'),(21,16,1413352800000,1413612000000,4,3,14,0,1,1,1,1,'Great group lots of questions.','Renee Van Buren'),(22,5,1413352800000,1413439200000,2,1,0,0,0,0,0,0,NULL,'Kim Nielsen'),(23,17,1413784800000,1414044000000,4,3,9,10,4,1,0,1,'Korea, Japan, China, Mexico, Peru, Russia, and Guatamala, two extra day visitors.','Kevin Eyraud'),(24,18,1414130400000,1414216800000,2,1,5,11,1,1,0,0,'Double booked with physics research, trash not weighed water esitmated.','Michael Stevens'),(25,19,1414130400000,1414303200000,3,2,1,4,1,1,0,0,'Trash not weighed water not measurable.','Kim Nielsen'),(26,20,1414648800000,1414821600000,3,2,2,5,1,1,0,1,NULL,'Scott Hatch'),(27,21,1414821600000,1414998000000,3,2,8,15,2,1,0,1,NULL,'Scott Williams'),(28,22,1415343600000,1415430000000,2,1,12,9,0,0,0,0,'Eleven on the first day twenty-two on the second.',''),(29,23,1416553200000,1416726000000,3,2,11,10,10,0,0,1,'Some left early and other arrived late.','Ken Sekaquaptewa'),(30,24,1417762800000,1417849200000,2,1,9,4,3,1,0,0,'Honors program plug','Ethan Sproat Tiffany Nez'),(31,19,1418367600000,1418540400000,3,2,1,5,2,0,0,0,'Didn\'t do an evaluations because this group was here a month ago.','Kim Nielsen'),(32,25,1426485600000,1426744800000,4,3,9,6,5,1,1,1,'High water use','Kevin Eyraud'),(33,26,1426831200000,1427004000000,3,2,3,12,3,1,1,0,NULL,'Suzanne Walther'),(34,27,1427436000000,1427608800000,3,2,15,8,7,1,1,1,NULL,'Scott Williams'),(35,28,1428040800000,1428213600000,3,2,2,4,1,1,1,1,NULL,'Kim Nielsen'),(38,29,1428300000000,1428472800000,3,2,10,2,1,1,1,1,NULL,'Matt Wang'),(39,5,1429250400000,1429423200000,3,2,0,3,1,0,0,0,'Data not taken because of the small group size.','Kim Nielsen'),(40,30,1430373600000,1430546400000,3,2,8,4,3,1,1,0,NULL,'Delayna Crockett'),(41,9,1429768800000,1429941600000,3,2,4,12,4,1,1,1,NULL,'Ivan Mangum'),(42,31,1430719200000,1430719200000,1,0,13,20,5,0,0,0,NULL,'Cindy Micheli'),(43,32,1430805600000,1431064800000,4,3,13,9,3,1,1,1,NULL,'Maria Blevins'),(44,7,1431064800000,1431151200000,2,1,3,4,2,1,1,0,'Cloudy so no star gazing.','Ivan Mangum'),(45,9,1431669600000,1431756000000,2,1,10,6,3,1,0,0,NULL,'Ivan Mangum'),(46,34,1432274400000,1432792800000,7,6,6,18,3,1,0,1,'One student left on the second day.','Diane Kamola'),(47,14,1432792800000,1432965600000,3,2,4,8,2,1,0,1,NULL,'Renee Van Buren'),(48,35,1433311200000,1433656800000,5,4,11,3,3,1,1,1,'Two came the second day, and one left early.','James Bemel'),(49,36,1434261600000,1434607200000,5,4,8,6,8,1,0,1,'The instructor brought his wife and four kids; one woman brought her daughter, and the two of them left a day early.','Rich Tolman'),(50,37,1434866400000,1435212000000,5,4,9,8,3,1,0,1,NULL,'Rich Tolman'),(51,38,1435212000000,1435471200000,4,3,8,9,2,1,0,1,'Extra instructor the first night, and the toilet was running, using insane amounts of water...so the water total isn\'t accurate.','Becca Walker'),(52,73,1441951200000,1442037600000,2,1,2,0,0,0,0,0,'AED delivery and risk evaluation.','Robin Enbermeyer'),(53,43,1436162400000,1436421600000,5,4,2,13,5,0,0,0,NULL,'Grant Flygare'),(54,44,1436767200000,1437804000000,13,12,6,6,4,0,0,0,'14 permanent members. Intern came for 4 days, adjunct faculty came for a total of 12 days, models for 12. 217 day use total because of Fred and his wife visiting, along with a man to repair the weather station.','Travis Lovell'),(55,45,1437976800000,1438495200000,6,4,7,3,1,0,0,0,'The full moon dampened the dark sky tour.','Kevin Schley'),(56,46,1438581600000,1438581600000,1,0,1,0,1,0,0,0,'','Pola Morrison'),(57,47,1439532000000,1439704800000,3,2,6,10,4,0,0,0,NULL,'Reese Christensen'),(58,48,1439791200000,1439964000000,3,2,7,6,2,0,0,0,'One student','Karin Anderson'),(59,49,1440741600000,1440828000000,2,1,10,11,11,0,0,0,'','Renee Faatz'),(60,50,1441432800000,1441605600000,3,2,7,11,2,0,0,0,'','Kimberly Reynolds'),(61,51,1441864800000,1442037600000,3,2,7,6,3,0,0,0,'','John Gilbert'),(62,53,1442469600000,1442728800000,3,2,9,2,2,0,0,0,'Annette covering','Ivan Magnum'),(63,18,1443074400000,1443247200000,3,2,8,5,2,0,0,0,'One student had to leave in the middle of the night because his wife went into labor! Excitement at the field station.','Renee Van Buren'),(64,52,1443420000000,1443592800000,3,2,5,1,1,0,0,0,'','Linda Shelton'),(65,53,1443679200000,1443852000000,3,2,11,2,3,0,0,0,NULL,'Patty'),(66,54,1444370400000,1444543200000,2,1,6,11,2,0,0,0,'Annette covering','John Gilbert'),(67,55,1444716000000,1444888800000,3,2,7,2,1,0,0,0,'One woman came day 2,  Jeff williams came day 2 and 3 but no overnight','Christy Gluck'),(68,1,1444975200000,1445148000000,3,2,1,7,1,0,0,0,'','Kim Nelsen'),(69,25,1445234400000,1445580000000,4,3,11,10,5,0,0,0,'','Kevin Eyraud'),(70,18,1445580000000,1445666400000,2,1,10,8,1,0,0,0,'','Michael Stevens'),(71,58,1446012000000,1446271200000,4,3,5,6,3,0,0,0,'','Andrew Bibby '),(72,22,1446879600000,1446966000000,2,1,10,7,0,0,0,0,'Didn\'t include Michael and Keith','Andrew Bibby '),(73,59,1447311600000,1447311600000,1,0,6,2,0,0,0,0,'','Shirley Torgeson'),(74,60,1447484400000,1447657200000,2,2,11,5,1,0,0,0,NULL,'Scott Williams'),(75,61,1452754800000,1453014000000,4,3,1,2,3,0,0,0,NULL,'Travis Lovell'),(76,62,1452754800000,1452927600000,3,2,3,1,4,0,0,0,NULL,'Ethan Sproat'),(77,63,1455260400000,1455346800000,19,1,10,9,1,0,0,0,NULL,'English Brooks'),(78,28,1455865200000,1456038000000,3,2,5,11,1,0,0,0,NULL,'Kim Nielsen'),(79,64,1456470000000,1456556400000,2,1,12,17,7,0,0,0,'Fred and his wife were here, six people stayed off site.','Anne Arendt'),(81,65,1457593200000,1457679600000,2,2,2,2,1,0,0,0,'','Michael Stevens'),(82,27,1457074800000,1457247600000,3,2,16,5,6,0,0,0,NULL,'Scott Willaims'),(83,51,1457679600000,1457852400000,3,2,5,4,3,0,0,0,'One couple left on the second day','John Gilbert'),(84,29,1457852400000,1458021600000,3,2,7,3,1,0,0,0,'One couple left on the second day','Ally Searle'),(85,55,1458108000000,1458108000000,1,0,5,2,0,0,0,0,NULL,'Christy Gluck'),(86,66,1458280800000,1458367200000,2,1,2,4,0,0,0,0,NULL,'Katelyn Earl'),(87,25,1459144800000,1459404000000,4,3,14,5,5,0,0,0,NULL,'Kevin Eyraud'),(88,52,1459404000000,1459576800000,3,2,14,5,5,0,0,0,'','Linda Shelton'),(89,67,1460095200000,1460268000000,3,2,16,5,4,0,0,0,'','Kate McPhearson'),(90,31,1458885600000,1458885600000,1,0,15,12,4,0,0,0,'','Alicia LaFever'),(91,32,1462255200000,1462514400000,4,3,14,9,4,0,0,0,'','Maria Blevins'),(92,68,1462428000000,1462428000000,1,0,1,4,4,0,0,0,'','Ivan Mangum'),(93,69,1462600800000,1462860000000,4,3,14,9,6,0,0,0,'','John Bennion'),(94,66,1463119200000,1463205600000,2,1,5,2,0,0,0,0,'','Katelyn Earl'),(95,62,1463378400000,1463896800000,7,6,7,4,4,0,0,0,'Eleven people, one joined on Thursday and 1 one joined on Friday.','Ethan Sproat'),(96,70,1464328800000,1464501600000,3,2,1,5,1,0,0,0,'','Kim Nielsen'),(97,34,1464674400000,1465538400000,11,10,8,16,3,0,0,0,'','Diane Kamola'),(98,71,1462946400000,1463032800000,2,1,8,3,4,0,0,0,'','Dennis Faatz'),(99,72,1463119200000,1463464800000,5,4,17,3,4,0,0,0,'One woman stayed off-site with family. Also, they started hauling trash before weighing it, so we don\'t have trash info.','Jennifer Remy');
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

-- Dump completed on 2017-04-11  0:42:01
