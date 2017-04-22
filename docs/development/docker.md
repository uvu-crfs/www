# Docker

This is a list of commands that could be helpful.

* Start the server
  * `docker-compose up crfs`
* Start the server if the were errors
  * `docker-compose up --force-recreate crfs`
*  Stop all docker-compose started containers
  * `docker-compose stop`
* See running docker containers
  * `docker ps`
* Connect to the running database container
  * `docker exec -i -t www_maria_1 /bin/bash`
* Connect to the running apache/php container
  * `docker exec -i -t www_crfs_1 /bin/bash`
* Tail PHP logs
  `docker exec -it www_crfs_1 /bin/bash -c "tail -f /var/log/httpd/ssl_error_log"`
* Remove the database (to start fresh)
  * `docker rm www_maria_1`
* Run a script to initialize the database
  * `docker exec -i -t www_maria_1 /bin/bash -c "/var/secrets/setup_mysql.sh"`
* Save a backup of the database
  * `docker exec -i -t www_maria_1 /bin/bash -c "mysqldump crfs > /var/secrets/mysql_dump.sql"`
* Restore the database from a backkup
  * `docker exec -i -t www_maria_1 /bin/bash -c "mysql crfs < /var/secrets/mysql_dump.sql"`
