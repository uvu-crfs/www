This is just a read me on how to set up the original tables.

```
show tables;
```


```
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
)
```

```
describe groups;
```

# Visit
```
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
)
```

# Sensor
CREATE TABLE `sensors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
)

## Data
```
CREATE TABLE `sensor_#` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` decimal(10,3) NOT NULL,
  `timestamp` bigint(20) DEFAULT NULL,
  `visit_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `visit_id` (`visit_id`),
  CONSTRAINT `sensor_1_ibfk_1` FOREIGN KEY (`visit_id`) REFERENCES `visits` (`id`)
)
```

CREATE TABLE `affiliations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
)

CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
)

CREATE TABLE `departments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
)

CREATE TABLE `lookup_group_affiliation` (
  `group_id` int(11) NOT NULL,
  `affiliation_id` int(11) NOT NULL,
  KEY `group_id` (`group_id`),
  KEY `affiliation_id` (`affiliation_id`),
  CONSTRAINT `lookup_group_affiliation_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  CONSTRAINT `lookup_group_affiliation_ibfk_2` FOREIGN KEY (`affiliation_id`) REFERENCES `affiliations` (`id`)
)

CREATE TABLE `lookup_group_course` (
  `group_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  KEY `group_id` (`group_id`),
  KEY `course_id` (`course_id`),
  CONSTRAINT `lookup_group_course_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  CONSTRAINT `lookup_group_course_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
)

CREATE TABLE `lookup_group_department` (
  `group_id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  KEY `group_id` (`group_id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `lookup_group_department_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`),
  CONSTRAINT `lookup_group_department_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
)
