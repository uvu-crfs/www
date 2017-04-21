export var addNotification = function(text){
  g.notifications.push(text); m.redraw();
  setTimeout(function () {g.notifications.shift(); m.redraw(); }, 4000);
};
export var clearNotifications = _ => notifications = [];

export var pikadayToTimeStamp = (pikaday) => {
  return pikaday._d.valueOf();
};

export var getTimeStamp = function(){
  return new Date().getTime();
};

export var htmlDateToUnix = function(date){
  var d = new Date(date.split('-'));
  return d.valueOf();
};

export var unixToDate = (unix) => {
  if (!unix) return 'Date Unknown';
  var t = new Date(parseInt(unix));
  return t.toDateString();
};

export var unixToTime = (unix) => {
  if (!unix) return 'Date Unknown';
  var t = new Date(parseInt(unix));
  return t.toString().split(' GMT')[0];
  //return t.toString();
};

export var blankFirstOption = (options) => {
  options.unshift(m('option', {style:'display:none;'}, ''));
  return options;
};

export var sqlRequest = function(vnode){
  vnode.state.sql.last = vnode.state.sql.query;
  return m.request({method:'POST', url:'/api/admin/sql.php', data:{query:vnode.state.sql.query}})
  .then(
    (r) => vnode.state.sql.response = r,
    (r) => {window.requestError(r); vnode.state.sql.response = r; }
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
    function(r){ g.sensors = r.reverse(); },
    window.requestError
  );
};

export var addSensor = function(vnode){
  return m.request({method: 'POST', url: '/api/admin/sensor/type.php', data:vnode.attrs.data })
  .then(
    (r) => { getSensors(); addNotification('New sensor "' + vnode.attrs.data.name + '" with units of "' + vnode.attrs.data.unit + '"'); },
    window.requestError
  )
  .then( _ => vnode.state.close() );
};

export var deleteSensor = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/sensor/type.php', data: {id:vnode.attrs.id} })
  .then(
    function(r){ getSensors(); addNotification("Deleted sensor " + vnode.attrs.name); },
    window.requestError
  )
  .then( _ => vnode.state.close() );
};

export var getSensorData = function(id){
  m.request({url:`/api/admin/sensor/values.php?sensor=${id}`})
  .then((r) => g.sensorData[id] = r.reverse() , window.requestError);
};

export var addSensorData = function(data){
  if (!data.timestamp) data.timestamp = Date.now();
  return m.request({method: 'POST', url: '/api/admin/sensor/value.php', data: data})
  .then(
    function(r){ getSensors();  getSensorData(data.sensor);},
    window.requestError
  )
  .then(function(){data.quantity = 0;});
};

export var deleteSensorData = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/sensor/value.php', data: {id:vnode.attrs.id, sensor: vnode.attrs.sensor_id} })
  .then(
    function(r){
      getSensors();
      getSensorData(vnode.attrs.sensor_id);
      addNotification("Deleted sensor data from " + vnode.attrs.name);
    },
    window.requestError
  )
  .then( _ => vnode.state.close() );
};

//***** GROUPS Fcts *****
export var getGroup = function() {
  return m.request({url: '/api/admin/group.php'})
  .then(
    function(r){ g.groupLookup[groups[r].id] = groups[r];},
    window.requestError
  );
};

export var getGroups = function(){
  return m.request({url: '/api/admin/groups.php'})
  .then(
    function(r){ g.groups = r.reverse(); createGroupsLookup(r); },
    window.requestError
  );
};

let createGroupsLookup = (groups) => {
  for (var i in groups){ g.groupLookup[groups[i].id] = groups[i]; }
};

export var addGroup = function(vnode){
  return m.request({url: '/api/admin/group.php', method:'POST', data:vnode.attrs.data})
  .then( (r) => getGroups(), window.requestError )
  .then( _ => vnode.state.close() );
};

export var editGroup = function(vnode){
    return m.request({url: '/api/admin/group.php', method:'PUT', data:vnode.attrs.data})
    .then( (r) => getGroups(), window.requestError )
    .then( _ => vnode.state.close() );
};

export var deleteGroup = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/group.php', data: {id:vnode.attrs.id}})
  .then(
    (r) => { getGroups(); addNotification("Deleted group " + vnode.attrs.name); },
    window.requestError
  )
  .then( _ => vnode.state.close() );
};
//***** GROUP Fcts *****



//***** VISIT Fcts *****
export var getVisit = function(){
  return m.request({ method: 'GET', url: '/api/admin/visit.php'})
  .then( (r) => g.visit = r , window.requestError);
};

let createVisitsLookup = (visits) => {
  for (var i in visits){ g.visitLookup[visits[i].id] = visits[i]; }
};

export var getVisits = function(){
  return m.request({url: '/api/admin/visits.php'})
  .then( (r) =>  {g.visits = r.reverse();
    createVisitsLookup(r);} , window.requestError)
  ;
};

export var addVisit = function(vnode){
  return m.request({url: '/api/admin/visit.php', method:'POST', data:vnode.state.data})
  .then( (r) => getVisits(), window.requestError )
  .then( _ => vnode.state.close() );
};

export var editVisit = function(vnode){
    return m.request({url: '/api/admin/visit.php', method:'PUT', data:vnode.attrs.data})
    .then( (r) => getVisits(), window.requestError )
    .then( _ => vnode.state.close() );
};

export var deleteVisit = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/visit.php', data: {id:vnode.attrs.id} })
  .then(
    function(r){ getVisits(); addNotification("Deleted visit " + vnode.attrs.name); },
    window.requestError
  )
  .then( _ => vnode.state.close() );
};

//***** VISIT Fcts *****

export var addAffiliation = function(vnode){
  return m.request({url: '/api/admin/affiliation.php', method:'POST', data:vnode.attrs.data})
  .then( (r) => getAffiliations(), window.requestError )
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
    (r) => { g.affiliations = r.reverse(); createAffiliationLookup(r); },
    window.requestError
  );
};

export var deleteAffiliation = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/affiliation.php', data: {id:vnode.attrs.id}})
  .then(
    (r) => { getAffiliations(); addNotification("Deleted affiliation " + vnode.attrs.name); },
    window.requestError
  )
  .then( _ => vnode.state.close() );
};

export var addDepartment = function(vnode){
  return m.request({url: '/api/admin/department.php', method:'POST', data:vnode.attrs.data})
  .then( (r) => getDepartments(vnode.attrs.data.affiliation_id ), window.requestError )
  .then( _ => vnode.state.close() );
};

export var deleteDepartment = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/department.php', data: {id:vnode.attrs.id}})
  .then(
    (r) => { console.log('Deleted department, TODO: Refresh something eventually', r); addNotification("Deleted department " + vnode.attrs.name); },
    window.requestError
  )
  .then( _ => vnode.state.close() );
};

export var getDepartments = function(affiliation_id){
  return m.request({url: `/api/open/departments_by_affiliation.php?affiliation_id=${affiliation_id}`})
  .then(
    (r) => { g.affiliationLookup[affiliation_id].departments = r; },
    window.requestError
  );
};

export var deleteCourse = function(vnode){
  return m.request({ method: 'DELETE', url: '/api/admin/course.php', data: {id:vnode.attrs.id}})
  .then(
    (r) => { console.log('Deleted course, TODO: Refresh something eventually', r); addNotification("Deleted course " + vnode.attrs.name); },
    window.requestError
  )
  .then( _ => vnode.state.close() );
};

export var addCourse = function(vnode){
  return m.request({url: '/api/admin/course.php', method:'POST', data:vnode.attrs.data})
  .then((r) =>  getCourses(vnode.attrs.data.department), window.requestError )
  .then( _ => vnode.state.close() );
};

export var getCourses = function(department){
  return m.request({url: `/api/open/courses_by_department.php?department_id=${department.id}`})
  .then(
    (r) => { department.courses = r.reverse(); },
    window.requestError
  );
};

export var attachCourseToGroup = function(vnode){
  return m.request({url: '/api/admin/lookup_group_course.php', method:'POST', data:vnode.attrs.data})
  .then(
    (r) => {getAttachedCourses(vnode.attrs.data.group_id); console.log('Attched course to group', r);},
    window.requestError )
  .then( _ => vnode.state.close() );
};

export var attachAffiliationToGroup = function(vnode){
  return m.request({url: '/api/admin/lookup_group_affiliation.php', method:'POST', data:vnode.attrs.data})
  .then(
    (r) => {getAttachedAffiliations(vnode.attrs.data.group_id); console.log('Attched affiliation to group', r);},
    window.requestError )
  .then( _ => vnode.state.close() );
};

export var attachDepartmentToGroup = function(vnode){
  return m.request({url: '/api/admin/lookup_group_department.php', method:'POST', data:vnode.attrs.data})
  .then(
    (r) => {getAttachedDepartments(vnode.attrs.data.group_id); console.log('Attched department to group', r);},
    window.requestError )
  .then( _ => vnode.state.close() );
};

export var getAttachedCourses = function(group_id){
  //console.log(group_id);
  return m.request({url: `/api/open/group_courses.php?group_id=${group_id}`})
  .then(
    (r) => { g.groupLookup[group_id].courses = r; /*console.log(g.groupLookup[group_id]);*/ },
    window.requestError
  );
};

export var getAttachedDepartments = function(group_id){
  //console.log(group_id);
  return m.request({url: `/api/open/group_departments.php?group_id=${group_id}`})
  .then(
    (r) => { g.groupLookup[group_id].departments = r; /*console.log(g.groupLookup[group_id]);*/ },
    window.requestError
  );
};
export var getAttachedAffiliations = function(group_id){
  //console.log(group_id);
  return m.request({url: `/api/open/group_affiliations.php?group_id=${group_id}`})
  .then(
    (r) => { g.groupLookup[group_id].affiliations = r; /*console.log(g.groupLookup[group_id]);*/ },
    window.requestError
  );
};
