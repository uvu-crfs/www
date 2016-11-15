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
