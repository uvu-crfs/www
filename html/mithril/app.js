if (docker) {
  loggedIn = true;
  uvu = {
    displayName : "Docker Person",
    mail : "email@server.tld",
    entitlements : "crfs.admin"
  };
}
console.log("loggedIn", loggedIn);
console.log("uvu", uvu);

var notifications = [];
var addNotification = function(text){
  notifications.push(text); m.redraw();
  setTimeout(function () {notifications.shift(); m.redraw(); }, 4000);
};

var sensors = [];
var getSensors = function(){
  m.request({url: '/api/sensor/types.php'})
  .then(
    function(r){ sensors = r; },
    function(r){ console.log("Could not request sensors", r);
  });
};
var addSensor = function(vnode){
  m.request({method: 'POST', url: '/api/sensor/type.php',
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
var deleteSensor = function(vnode){
  m.request({
      method: 'DELETE', url: '/api/sensor/type.php',
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
var addSensorData = function(data){
  console.log(data);
  //TODO something is weird with the timestamp
  m.request({method: 'POST', url: '/api/sensor/value.php', data: data})
  .then(
    function(r){ getSensors();  },
    function(r){ console.log("Could not add sensor data", r); }
  )
  .then(function(){data.quantity = 0;})
  ;
};

var homeAddSensorDataComponent = {
  oninit:function(vnode){
    vnode.state = {sensor: Number(vnode.attrs.id), quantity: 0};
  },
  view: function(vnode){
    return m('',[
      m('span',  vnode.attrs.name),
      m('input', {
        type:"number", min:'0', step:"0.1", value:vnode.state.quantity,
        onchange:function(e){ vnode.state.quantity = Number(e.target.value); }
      }, ''),
      m('span', vnode.attrs.unit),
      m('button', {
        onclick:function(){
          if(vnode.state.quantity > 0) addSensorData(vnode.state); },
        class: (vnode.state.quantity > 0) ? '' : '',
      }, 'Add')
    ]);
  }
};

var home = {
  oncreate:function(vnode){ getSensors(); },
  view: function(vnode) {
    return m('',[
      m('.title','Welcome Home'),
      m("a[href='http://www.uvu.edu/crfs/']",
        'Capitol Reef Field Station Home'),
      loggedIn ? m('',
        sensors.map(function(v){ return m(homeAddSensorDataComponent,v); }))
      : null,
    ]);
  }
};

var reportsComponent = {
    view: function(vnode) {
        return m("", [
            m(".title", {class: "title"}, "Reports"),
        ]);
    }
};

var sensorsComponent = {
  oninit:function(vnode){ vnode.state = { delete:{name:''}, add:{}}; },
  oncreate:function(vnode){ getSensors(); },
  view: function(vnode){ return m('',[
    m('.level',[
      m('.level-left', m('.title','Sensors')),
      m('.level-right',m('button.button.is-primary',
        {onclick:function(){ vnode.state.addModalOpen = true; }} ,'Add')),
    ]),
    m('.modal',{class: vnode.state.addModalOpen ? 'is-active':''}, [
      m('.modal-background',
        {onclick:function(){vnode.state.addModalOpen = false;}}, ''),
      m('.modal-card',[
        m('header.modal-card-head',[
          m('p.modal-card-title', 'Add Sensor'),
          m('button.delete',
            {onclick:function(){vnode.state.addModalOpen = false;}}, ''),
        ]),
        m('section.modal-card-body', [
          m('.label', 'Name'),
          m('input.input',
            {onchange:function(e){ vnode.state.add.name = e.target.value; }},
          ''),
          m('.label', 'Units'),
          m('input.input',
            {onchange:function(e){ vnode.state.add.unit = e.target.value; }},
          ''),
        ]),
        m('footer.modal-card-foot',[
          m('a.button.is-success', {onclick:function(){addSensor(vnode);}}, 'Add'),
          m('a.button', {onclick:function(){vnode.state.addModalOpen = false;}}, 'Cancel')
        ])
      ])
    ]),
    m('',sensors.map(function(v){ return m('', [
      m('span', v.name + "  " +v.unit),
      m('button', {onclick:function(){
        vnode.state.delete = v; vnode.state.deleteModalOpen = true;
      }}, 'Delete'),
      m('.modal',{class: vnode.state.deleteModalOpen ? 'is-active':''}, [
        m('.modal-background',
          {onclick:function(){vnode.state.deleteModalOpen = false;}}, ''),
        m('.modal-card',[
          m('header.modal-card-head',[
            m('p.modal-card-title', 'Delete Sensor'),
            m('button.delete', {onclick:function(){ vnode.state.deleteModalOpen = false;}}, ''),
          ]),
          m('section.modal-card-body', [
            m('p',"Are you sure you want to delete the '" + vnode.state.delete.name + "' sensor?")
          ]),
          m('footer.modal-card-foot',[
            m('a.button.is-danger', {onclick:function(){deleteSensor(vnode);}}, 'Delete'),
            m('a.button', {onclick:function(){vnode.state.deleteModalOpen = false;}}, 'Cancel')
          ])
        ])
      ])
    ]); }))
  ]);}
};

var sqlResponse = '';
var sqlRequest = function(vnode){
  vnode.state.sql.last = vnode.state.sql.query;
  m.request({method:'POST', url:'/login/sql.php', data:{query:vnode.state.sql.query}})
  .then(
    function(r){
      vnode.state.sql.response = r;
      sqlResponse = r;
      console.log("var sqlResponse = ", r);
      console.log("JSON.stringify(sqlResponse) = ", JSON.stringify(r));
    },
    function(r){ console.log('Error', r); vnode.state.sql.response = r; }
  )
  .then(function(){ vnode.state.sql.query = ''; m.redraw(); })
  ;
};

var developerComponent = {
  oninit:function(vnode){ vnode.state = { sql:{last:''} }; },
  view: function(vnode){ return m('',[
    m('.title', "Developer Tools"),
    m('',[
      m('.subtitle', 'Notifications'),
      m('form',[
        m('input',{
          onchange:function(e){ vnode.state.notification = e.target.value; },
          placeholder:'Notification text'
        },''),
        m('button',{
          type:'submit',
          onclick:function(e){e.preventDefault(); addNotification(vnode.state.notification); }
        },'submit')
      ])
    ]),
    m('',[
      m('form',[
        m('.subtitle', 'SQL Requests'),
        m('input',{
          onchange:function(e){ vnode.state.sql.query = e.target.value; },
          placeholder:'SQL statement',
          value: vnode.state.sql.query
        },''),
        m('button',{
          type:'submit',
          onclick:function(e){e.preventDefault(); sqlRequest(vnode); }
        },'submit'),
        m('br',''),
        vnode.state.sql.last.length > 0 ? m('', 'Last request: ' + vnode.state.sql.last) : null,
        //m('',JSON.stringify(vnode.state.sql.response)),
        m('',JSON.stringify(vnode.state.sql.response)),
      ])
    ])
  ]);}
};

function headerFooter(content){
  return {
    view: function(vnode) {
      return m('',  [
        m(header),
        m('',{style:'padding:1vh 1vw;'}, m(content, vnode.state)),
        //m('h1','FOOTER')
        (notifications.length > 0) ? m('.notification.is-info',
        {style:'position: absolute; top: 50px; right: 10px; z-index: 2;'} ,[
          m('.delete',{onclick:function(){notifications = []; }},''),
          notifications.map(function(v){ return m('',  v); })
        ]) : null,
      ]);
    }
  };
}

var header = {
  linkAttrs: function(r) {
    return {href: "./#!" + r, class: m.route.get() == r ? 'is-active': ''};
  },
  oninit: function(){},
  view:function(){
    return m(".nav.has-shadow ", [
      m('.nav-left',[
        m("a.nav-item",{href: "./#!/home", style:'font-size:large;'}, "Capitol Reef"),
        m("a.nav-item.is-tab", header.linkAttrs("/reports"),  "Reports"),
        loggedIn ? m("a.nav-item.is-tab", header.linkAttrs("/sensors"),  "Sensors") : null,
        docker ? m("a.nav-item.is-tab", header.linkAttrs("/developer"),  "Developer") : null,
      ]),
      m('.nav-center',[
        m('.nav-item', uvu.displayName)
      ]),
      m('.nav-right', [
        loggedIn ?
          m("a[href='https://my.uvu.edu/Shibboleth.sso/Logout'].nav-item", 'Logout') :
          m("a[href='/login'].nav-item",'Login')
      ])
    ]);
  }
};

m.route(document.body, "/home", {
  '/home': headerFooter(home),
  "/reports": headerFooter(reportsComponent),
  // "/usage": headerFooter(''),
  // "/visits": headerFooter(''),
  // "/groups": headerFooter(''),
  "/sensors": headerFooter(loggedIn ? sensorsComponent : ''),
  "/developer": headerFooter(docker ? developerComponent : '')
});
