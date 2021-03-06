# Local Development

## Prerequisites

Install [docker](https://www.docker.com/community-edition). Make sure it includes docker-compose.

## Local setup

In a terminal from the root folder (`www`) type the following commands to start an apache PHP server and then initialize the database:
* `docker-compose up crfs`
* `docker exec -i -t www_maria_1 /bin/bash -c "/var/secrets/setup_mysql.sh"`

See it in your browser http://localhost

When done stop all docker containers
* `docker-compose stop`


## Helpful Hints

* Anything in the `html` folder can be accessed from a web browser.
* The file `docker-compose.yml` is how docker is configured. The `volumes` are how the folders in this file are mapped to the docker images.
* If there are database connection issues make sure the file `/var/www/secrets/database.js` exists.
* There are two copies of the main html file `html/index.php` and `html/www/index.php`. The first for open access and the second for authentication. Make sure they stay in sync.
* Both of the html files call the same MithrilJS app starting in the file `html/mithril/app.js`.
* The `lib` folder is for files that are used by PHP but cannot be accessed from the web.
