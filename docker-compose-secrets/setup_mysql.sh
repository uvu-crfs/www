mysql -e "CREATE USER 'crfs'@'%' IDENTIFIED BY 'crfs';"
mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'crfs'@'%';"
mysql -e "CREATE DATABASE crfs;"
mysql crfs -e "CREATE TABLE groups(id int not null AUTO_INCREMENT PRIMARY KEY, name varchar (255), contact_name varchar (255), affiliation varchar (255), course_num varchar (255), notes varchar (255));"
mysql crfs -e "create table visits(id int not null AUTO_INCREMENT PRIMARY KEY, group_id int, start_date int, end_date int, days int, nights int, students_female int, students_male int, advisors_female int, advisors_male int, evaluation_complete int, summary_complete int, notes varchar(255));"
mysql crfs -e "create table sensors(id int not null AUTO_INCREMENT PRIMARY KEY, name varchar(255) not null, unit varchar(255) not null);"