export var addNotification = function(text){
  g.notifications.push(text); m.redraw();
  setTimeout(function () {g.notifications.shift(); m.redraw(); }, 4000);
};
export var clearNotifications = _ => notifications = [];

export var unixToDate = (unix) => {
  if (!unix) return 'Date Unknown';
  console.log(unix);
  var t = new Date();
  t.setUTCMilliseconds(unix);
  return t.toDateString();
};

export var unixToTime = (unix) => {
  if (!unix) return 'Date Unknown';
  var t = new Date();
  t.setUTCMilliseconds(unix);
  return t.toString();
};

export var sqlRequest = function(vnode){
  vnode.state.sql.last = vnode.state.sql.query;
  return m.request({method:'POST', url:'/login/sql.php', data:{query:vnode.state.sql.query}})
  .then(
    (r) => vnode.state.sql.response = r,
    (r) => { console.log('Error', r); vnode.state.sql.response = r; }
  )
  .then(function(){ vnode.state.sql.query = ''; m.redraw(); });
};

export var getSensors = function(){
  return m.request({url: '/api/admin/sensor/types.php'})
  .then(
    function(r){ g.sensors = r; },
    function(r){ console.log("Could not request sensors", r);
  });
};

export var addSensor = function(vnode){
  return m.request({method: 'POST', url: '/api/admin/sensor/type.php', data:vnode.state.data })
  .then(
    (r) => { getSensors(); addNotification('New sensor "' + vnode.state.data.name + '" with units of "' + vnode.state.data.unit + '"'); },
    (r) => console.log("Could not add sensor", r)
  )
  .then( _ => vnode.state.close() );
};

export var deleteSensor = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/sensor/type.php', data: {id:vnode.attrs.id} })
  .then(
    function(r){ getSensors(); addNotification("Deleted sensor " + vnode.attrs.name); },
    function(r){ console.log("Could not delete sensors", id, r); }
  )
  .then( _ => vnode.state.close() );
};

export var addSensorData = function(data){
  if (!data.timestamp) data.timestamp = Date.now();
  //TODO needs visit
  console.log(data);
  return m.request({method: 'POST', url: '/api/admin/sensor/value.php', data: data})
  .then(
    function(r){ getSensors();  },
    function(r){ console.log("Could not add sensor data", r); }
  )
  .then(function(){data.quantity = 0;})
  ;
};

export var getGroups = function(){
  return m.request({url: '/api/admin/groups.php'})
  .then(
    function(r){ g.groups = r; createGroupsLookup(r); },
    function(r){ console.log("Could not request groups", r);
  });
};

let createGroupsLookup = (groups) => {
  for (var i in groups){ g.groupLookup[groups[i].id] = groups[i]; }
};

export var addGroup = function(vnode){
  return m.request({url: '/api/admin/group.php', method:'POST', data:vnode.state.data})
  .then( (r) => getGroups(), (r) => console.log("Could not add group", r) )
  .then( _ => vnode.state.close() );
};

export var deleteGroup = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/group.php', data: {id:vnode.attrs.id}})
  .then(
    (r) => { getGroups(); addNotification("Deleted group " + vnode.attrs.name); },
    (r) => console.log("Could not delete sensors", vnode.attrs.name, r)
  )
  .then( _ => vnode.state.close() );
};

export var getVisits = function(){
  return m.request({url: '/api/admin/visits.php'})
  .then(
    function(r){ g.visits = r; },
    function(r){ console.log("Could not request visits", r);
  });
};

export var addVisit = function(vnode){
  console.log(vnode.state.data);
  return m.request({url: '/api/admin/visit.php', method:'POST', data:vnode.state.data})
  .then( (r) => getVisits(), (r) => console.log("Could not add visit", r) )
  .then( _ => vnode.state.close() );
};
