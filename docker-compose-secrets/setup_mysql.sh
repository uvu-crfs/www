mysql -e "CREATE USER 'crfs'@'%' IDENTIFIED BY 'crfs';"
mysql -e "GRANT ALL PRIVILEGES ON *.* TO 'crfs'@'%';"
mysql -e "CREATE DATABASE crfs;"
mysql crfs -e "CREATE TABLE groups(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, contact_id INT);"
mysql crfs -e "CREATE TABLE visits(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, group_id INT NOT NULL, start_date INT, end_date INT, days INT, nights INT, students_female INT, students_male INT, advisors INT, evaluation INT, summary INT, darksky INT, notes VARCHAR(255));"
mysql crfs -e "CREATE TABLE sensors(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, unit VARCHAR(255) NOT NULL);"
mysql crfs -e "CREATE TABLE affiliations(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);"
mysql crfs -e "CREATE TABLE departments(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, affiliation_id INT NOT NULL);"
mysql crfs -e "CREATE TABLE courses(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, department_id INT NOT NULL);"
mysql crfs -e "CREATE TABLE contacts(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL);"
mysql crfs -e "CREATE TABLE lookup_group_affiliation(group_id INT NOT NULL, affiliation_id INT NOT NULL);"
mysql crfs -e "CREATE TABLE lookup_group_department(group_id INT NOT NULL, department_id INT NOT NULL);"
mysql crfs -e "CREATE TABLE lookup_group_course(group_id INT NOT NULL, course_id INT NOT NULL);"
