# Developer Documentation

This is a reference for developers. To get starting developing check out the [local development](local_development.md) section.

## Technology

This is an PHP application running on an Apache web server. The user interface is written using MithrilJS. The database is MariaDB. Check the [resources](resources.md) page for additional information.

## Authentication

Details can be found on the [authentication page](authentication.md). This is the important takeaway:
* The route `/uvu` requires authentication
* The route `/api/admin` requires UVU authentication plus an entitlement


## Secrets

Since this is a public repo we put a couple files with secrets in [another repo](https://github.com/mvndaai/crfs-secrets/). Let someone know if you require access. It includes the credentials that are needed to connect to the actual database if you need to do a database backup or restore.
