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

export var blankFirstOption = (options) => {
  options.unshift(m('option', {style:'display:none;'}, ''));
  return options;
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

export var card = {
  view:(vnode) => m('.card', {style:'padding: 10px;'}, [
    m('',[
      m('button.button.is-small',
        {style:'margin:0 10px 0 0;', onclick:(e) => vnode.state.detailsOpen = !vnode.state.detailsOpen },[
        m('', {style:'padding:0 2px;'}, 'Details'),
        m('.fa', {class:vnode.state.detailsOpen?'fa-angle-down':'fa-angle-up'}, ''),
      ]),
      m('span', vnode.attrs.name),
      vnode.state.detailsOpen ? m('button.button.is-danger.is-small.is-pulled-right',
      {onclick:_ => {
        vnode.attrs.delete.modal = true;
        vnode.attrs.delete.id = vnode.attrs.id;
        vnode.attrs.delete.name = `${vnode.attrs.name}`;
      }},
      'Delete') : null,
    ]),
    vnode.state.detailsOpen ? m(vnode.attrs.details,vnode.attrs) : null,
  ])
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

export var addAffiliation = function(vnode){
  return m.request({url: '/api/admin/affiliation.php', method:'POST', data:vnode.state.data})
  .then( (r) => getAffiliations(), (r) => console.log("Could not add visit", r) )
  .then( _ => vnode.state.close() );
};

let createAffiliationLookup = (affiliations) => {
  for (var i in affiliations){
    g.affiliationLookup[affiliations[i].id] = affiliations[i];
   }
};
export var getAffiliations = function(vnode){
  return m.request({url: '/api/admin/affiliations.php'})
  .then(
    (r) => { g.affiliations = r; createAffiliationLookup(r); },
    (r) => console.log("Could not get affiliations", r)
  );
};

export var deleteAffiliation = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/affiliation.php', data: {id:vnode.attrs.id}})
  .then(
    (r) => { getAffiliations(); addNotification("Deleted affiliation " + vnode.attrs.name); },
    (r) => console.log("Could not delete affiliation", vnode.attrs.name, r)
  )
  .then( _ => vnode.state.close() );
};

export var addDepartment = function(vnode){
  console.log(vnode.state);
  return m.request({url: '/api/admin/department.php', method:'POST', data:vnode.state.data})
  .then(
    (r) => getDepartments(vnode.state.data.affiliation_id ),//console.log('Added department, TODO: Refresh something eventually', r),
    (r) => console.log("Could not add department", r) )
  .then( _ => vnode.state.close() );
};

export var deleteDepartment = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/department.php', data: {id:vnode.attrs.id}})
  .then(
    (r) => { console.log('Deleted department, TODO: Refresh something eventually', r); addNotification("Deleted department " + vnode.attrs.name); },
    (r) => console.log("Could not delete department", vnode.attrs.name, r)
  )
  .then( _ => vnode.state.close() );
};

export var getDepartments = function(affiliation_id){
  return m.request({url: `api/open/departments_by_affiliation.php?affiliation_id=${affiliation_id}`})
  .then(
    (r) => { g.affiliationLookup[affiliation_id].departments = r; console.log(g.affiliationLookup[affiliation_id]); },
    (r) => console.log("Could not get departments", r)
  );
};

export var deleteCourse = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/course.php', data: {id:vnode.attrs.id}})
  .then(
    (r) => { console.log('Deleted course, TODO: Refresh something eventually', r); addNotification("Deleted course " + vnode.attrs.name); },
    (r) => console.log("Could not delete course", vnode.attrs.name, r)
  )
  .then( _ => vnode.state.close() );
};

export var addCourse = function(vnode){
  console.log(vnode.state);
  return m.request({url: '/api/admin/course.php', method:'POST', data:vnode.state.data})
  .then(
    (r) => console.log('Added course, TODO: Refresh something eventually', r),
    (r) => console.log("Could not add department", r) )
  .then( _ => vnode.state.close() );
};

export var getCourses = function(department){
  return m.request({url: `api/open/courses_by_department.php?department_id=${department.id}`})
  .then(
    (r) => { department.courses = r; console.log(department); },
    (r) => console.log("Could not get courses", r)
  );
};
