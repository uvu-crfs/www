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
* Remove the database (to start fresh)
  * `docker rm www_maria_1`

## Setup mysql
* `docker exec -i -t www_maria_1 /bin/bash -c "/var/secrets/setup_mysql.sh"`

## Database
* Save a backup
* `docker exec -i -t www_maria_1 /bin/bash -c "mysqldump crfs > /var/secrets/mysql_dump.sql"`
* Restore backup
* `docker exec -i -t www_maria_1 /bin/bash -c "mysql crfs < mysql_dump.sql"`


## Trail PHP logs
`docker exec -it www_crfs_1 /bin/bash -c "tail -f /var/log/httpd/ssl_error_log"``
