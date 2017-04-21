# Database

There needs to be a JSON file to control the database in the path `/var/www/secrets/database.json`. We use the database named `crfs`. More information can be found in the file `/docker-secrets/setup_mysql.sh` which is a script to initialize the database. All PHP calls to the database get started in the file `/lib/database.php` which is not accessible to the web.

/var/www/secrets/database.json
```json
{
	"host":"",
	"port":"",
	"dbname":"crfs",
	"username":"",
	"password":""
}
```

## Tables

### Visits
The `visits` table is the main one used for reports. It each time a `group` has visited.

### Groups
The `groups` table lists groups that have visited. You can attach `affiliations`,`courses` or `departments` to them.

### Sensors
Sensors are anything measurable. The `sensors` table list measurable things with names and units. When a new sensor is created it creates a `sensor_#` table that contains quantities tagged with a visit_id and a timestamp.

### Group Affiliations
Theses tables are for attaching affiliations of groups to know where visitors are visiting from. `affiliations` is anything. `departments` are attached to affiliations. `courses` are attached to departments.

### Lookup Tables
In order to attach multiple affiliations types to a group these tables exist: `lookup_group_affiliation`,`lookup_group_course`,`lookup_group_department`.
