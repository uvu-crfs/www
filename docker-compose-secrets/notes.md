# Docker setup

## Useful commands
* Start the server, restarted every time
  * `docker-compose up --force-recreate crfs`
  * `docker-compose up crfs`
* Rebuild the container
  * `docker-compose build crfs`
*  Stop all docker-compose (including mariadb)
  * `docker-compose stop`
* See running docker containers
  * `docker ps`
* Connect to a running docker container
  * `docker exec -i -t <container id|name> /bin/bash`
  * `docker exec -i -t www_maria_1 /bin/bash` - mysql(maria) database
* Run with ports
  * `docker-compose run --service-ports <compose name>`

## Setup mysql
* Connected to the mysql box
  * `docker exec -i -t www_maria_1 /bin/bash`
* Create a user with privileges
  * `mysql`
  * `CREATE USER 'crfs'@'%' IDENTIFIED BY 'crfs';`
  * `GRANT ALL PRIVILEGES ON *.* TO 'crfs'@'%';`
* Create a database
  * `CREATE DATABASE crfs;`
* Leave mysql
  * `exit`
* Create groups and visits tables
  * `mysql crfs`
  * `CREATE TABLE groups(id int not null AUTO_INCREMENT PRIMARY KEY, name varchar (255), contact_name varchar (255), affiliation varchar (255), course_num varchar (255), notes varchar (255));`
  * `create table visits(id int not null AUTO_INCREMENT PRIMARY KEY, group_id int, start_date int, end_date int, days int, nights int, students_female int, students_male int, advisors_female int, advisors_male int, evaluation_complete int, summary_complete int, notes varchar(255));`
* Leave box
  * `exit`
  * `exit`
