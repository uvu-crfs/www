//TODO Fix notifications

export var addNotification = function(text){
  g.notifications.push(text); m.redraw();
  setTimeout(function () {g.notifications.shift(); m.redraw(); }, 4000);
};
export var clearNotifications = _ => notifications = [];

export var sqlRequest = function(vnode){
  vnode.state.sql.last = vnode.state.sql.query;
  return m.request({method:'POST', url:'/login/sql.php', data:{query:vnode.state.sql.query}})
  .then(
    function(r){
      vnode.state.sql.response = r;
    },
    function(r){ console.log('Error', r); vnode.state.sql.response = r; }
  )
  .then(function(){ vnode.state.sql.query = ''; m.redraw(); })
  ;
};

export var getSensors = function(){
  return m.request({url: '/api/admin/sensor/types.php'})
  .then(
    function(r){ g.sensors = r; },
    function(r){ console.log("Could not request sensors", r);
  });
};

export var addSensor = function(vnode){
  return m.request({method: 'POST', url: '/api/admin/sensor/type.php',
    data: {name:vnode.state.add.name, unit:vnode.state.add.unit}
  })
  .then(
    function(r){ getSensors();
       addNotification('New sensor "' + vnode.state.add.name +
       '" with units of "' + vnode.state.add.unit + '"');
    },
    function(r){ console.log("Could not add sensor", r); }
  )
  .then(function(){vnode.state.addModalOpen = false;})
  ;
};

export var deleteSensor = function(vnode){
  return m.request({
      method: 'DELETE', url: '/api/admin/sensor/type.php',
      data: {id:vnode.state.delete.id}
  })
  .then(
    function(r){
      getSensors();
      addNotification("Deleted sensor " + vnode.state.delete.name);
    },
    function(r){ console.log("Could not delete sensors", id, r); }
  )
  .then(function(){ vnode.state.deleteModalOpen = false; });
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
    function(r){ g.groups = r; },
    function(r){ console.log("Could not request groups", r);
  });
};
