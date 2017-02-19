if (docker) {
  loggedIn = true;
  uvu = {
    displayName : "Docker Person",
    mail : "email@server.tld",
    entitlements : "urn:mace:uvu.edu:entitlement:iam:services:crfs:admin",
  };
}


uvu.admin = uvu.entitlements.includes('services:crfs:admin');
console.log("loggedIn", loggedIn);
console.log("uvu", uvu);



var sensors = [];
var getSensors = function(){
  m.request({url: '/api/admin/sensor/types.php'})
  .then(
    function(r){ sensors = r; },
    function(r){ console.log("Could not request sensors", r);
  });
};
var addSensor = function(vnode){
  m.request({method: 'POST', url: '/api/admin/sensor/type.php',
    data: {name:vnode.state.add.name, unit:vnode.state.add.unit}
  })
  .then(
    function(r){ getSensors();
      // addNotification('New sensor "' + vnode.state.add.name +
      // '" with units of "' + vnode.state.add.unit + '"');
    },
    function(r){ console.log("Could not add sensor", r); }
  )
  .then(function(){vnode.state.addModalOpen = false;})
  ;
};
var deleteSensor = function(vnode){
  m.request({
      method: 'DELETE', url: '/api/admin/sensor/type.php',
      data: {id:vnode.state.delete.id}
  })
  .then(
    function(r){
      getSensors();
      //addNotification("Deleted sensor " + vnode.state.delete.name);
    },
    function(r){ console.log("Could not delete sensors", id, r); }
  )
  .then(function(){ vnode.state.deleteModalOpen = false; });
};
var addSensorData = function(data){
  console.log(data);
  //TODO something is weird with the timestamp
  m.request({method: 'POST', url: '/api/admin/sensor/value.php', data: data})
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
  oninit: function(vnode) {
    vnode.state = {affiliations: []};
    m.request({url:"/api/admin/reports.php"}).then(
      function(r){//regular req
        console.log(r);
        var temp = [];
        for (var key in r) {
          temp.push([key,r[key]]);//was append
        }
        console.log(temp);

        vnode.state.affiliations = temp;
      }, function(r) {//error req
        console.log(r);
      }
    );
  },//end oninit
  onupdate: function(vnode) {
    //make c3 generate a report
    vnode.state.chart = c3.generate({
      bindto: '#chart',
        data: {
            columns: vnode.state.affiliations,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
  },
    view: function(vnode) {
        return m("", [
            m(".title", {class: "title"}, "Reports"),
            m("#chart", "")
        ]);
    }
};

var sensorsView = {
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




import headerFooter from '/mithril/components/headerFooter.js'
//import sensorsView from '/mithril/views/sensors.js'
import developerView from '/mithril/views/developer.js'

m.route(document.body, "/home", {
  "/home": headerFooter(home),
  "/reports": headerFooter(reportsComponent),
  // "/usage": headerFooter(''),
  // "/visits": headerFooter(''),
  // "/groups": headerFooter(''),
  "/sensors": headerFooter(loggedIn ? sensorsView : ''),
  "/developer": headerFooter(docker || uvu.admin ? developerView : '')
});
