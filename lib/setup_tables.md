This is just a read me on how to set up the original tables.

```
show tables;
```


```
CREATE TABLE groups(id int not null AUTO_INCREMENT PRIMARY KEY, name varchar (255), contact_name varchar (255), affiliation varchar (255), course_num varchar (255), notes varchar (255));
```

```
describe groups;
```
```
select * from groups;
```

```
insert into groups(name) values ('temp0');
insert into groups(name) values ('temp1');
```

# Visit
```
create table visits(id int not null AUTO_INCREMENT PRIMARY KEY, group_id int, start_date int, end_date int, days int, nights int, students_female int, students_male int, advisors_female int, advisors_male int, evaluation_complete int, summary_complete int, notes varchar(255));
```

# Sensor

## Types

```
create table sensors(id int not null AUTO_INCREMENT PRIMARY KEY, name varchar(255) not null, unit varchar(255) not null);
```

## Data
```
create table sensor_#(id int not null AUTO_INCREMENT PRIMARY KEY, quantity int, timestamp int);
```
