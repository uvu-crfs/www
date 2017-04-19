# Local Development

## Prerequisites

Install [docker](https://www.docker.com/community-edition) with docker-compose.

## Local setup

In a terminal from the root folder (`www`) type the following commands to start an apache PHP server and then initialize the database:
* `docker-compose up crfs`
* `docker exec -i -t www_maria_1 /bin/bash -c "/var/secrets/setup_mysql.sh"`

See it in your browser http://localhost

When done stop all docker containers
* `docker-compose stop`
