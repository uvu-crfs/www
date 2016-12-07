//Run this with node - node quick.js
var r = require('request-promise');
var host = "http://stu-web4.uvu.edu/api/";
var s = {};
//Create group
s.group = {name: "tester", notes:"updated"};
r.post({"uri":host+"group.php", "json": true,"body": {"name":s.group.name}})
.then(function(data){
  s.group.id = data.id;
  console.log("Created group", s.group.id);
  return r.put({"uri":host+"group.php", "json": true,"body": {"id":s.group.id, "notes":s.group.notes}});
}).then(function(data){
  return r.get({"uri":host+"group.php?id=" + s.group.id});
})
.then(function(data){
  if (JSON.parse(data).notes !== s.group.notes){
    console.log("Group notes was not updated");
    process.exit(1);
  }
})

//Create visit
.then(function(){
  s.visit = {notes: "testing"};
  return r.post({"uri":host+"visit.php", "json": true,"body": {"notes":s.visit.notes}});
})
.then(function(data){
  s.visit.id = data.id;
  console.log("Visit created", s.visit.id);
  s.visit.notes = "still testing";
  return r.put({"uri":host+"visit.php", "json": true,"body": {"id":s.visit.id, "notes":s.visit.notes}});
})
.then(function(a,b){
  return r.get({"uri":host+"visit.php?id=" + s.visit.id});
})
.then(function(data){
  if (JSON.parse(data).notes !== s.visit.notes){
    console.log("Visit notes was not updated");
    process.exit(1);
  }
})
//Delete Visit
.then(function(){
  return r.delete({"uri":host+"visit.php", "json": true,"body": {"id":s.visit.id}});
})
//Delete group
.then(function(){
  return r.delete({"uri":host+"group.php", "json": true,"body": {"id":s.group.id}});
})
;

s.sensor = {};
s.data = {};
