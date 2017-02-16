//This shouldn't be enabled
//loggedIn = true;

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
    function(r){ getSensors(); vnode.state.addModalOpen = false; },
    function(r){ console.log("Could not add sensor", r); }
  );
};
var deleteSensor = function(vnode){
  m.request({method: 'DELETE', url: '/api/sensor/type.php', data: {id:vnode.state.delete.id}})
  .then(
    function(r){ getSensors(); vnode.state.deleteModalOpen = false; },
    function(r){ console.log("Could not delete sensors", id, r); }
  );
};


var home = {
    oncreate:function(vnode){
      getSensors();
    },
    view: function(vnode) {
        return m('',[
          m('.title','Welcome Home'),
          loggedIn ?  m('',sensors.map(function(v){
            return m('', [
              m('span', v.name),
              m('input', ''),
              m('span', v.unit),
              m('button', 'Submit')
            ]);
          })) : null
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
    m('.title','Sensors'),
    m('button', {onclick:function(){ vnode.state.addModalOpen = true; }} ,'Add'),
    m('.modal',{class: vnode.state.addModalOpen ? 'is-active':''}, [
      m('.modal-background', {onclick:function(){vnode.state.addModalOpen = false;}}, ''),
      m('.modal-card',[
        m('header.modal-card-head',[
          m('p.modal-card-title', 'Add Sensor'),
          m('button.delete', {onclick:function(){vnode.state.addModalOpen = false;}}, ''),
        ]),
        m('section.modal-card-body', [
          m('.label', 'Name'),
          m('input.input', {onchange:function(e){ vnode.state.add.name = e.target.value; }}, ''),
          m('.label', 'Units'),
          m('input.input', {onchange:function(e){ vnode.state.add.unit = e.target.value; }}, ''),
        ]),
        m('footer.modal-card-foot',[
          m('a.button.is-success', {onclick:function(){addSensor(vnode);}}, 'Add'),
          m('a.button', {onclick:function(){vnode.state.addModalOpen = false;}}, 'Cancel')
        ])
      ])
    ]),
    m('',sensors.map(function(v){ return m('', [
      m('span', v.name + "  " +v.unit),
      m('button', {onclick:function(){ vnode.state.delete = v; vnode.state.deleteModalOpen = true; }}, 'Delete'),
      m('.modal',{class: vnode.state.deleteModalOpen ? 'is-active':''}, [
        m('.modal-background', {onclick:function(){vnode.state.deleteModalOpen = false;}}, ''),
        m('.modal-card',[
          m('header.modal-card-head',[
            m('p.modal-card-title', 'Delete Sensor'),
            m('button.delete', {onclick:function(){vnode.state.deleteModalOpen = false;}}, ''),
          ]),
          m('section.modal-card-body', [
            m('p',"Are you sure you want to delete the '" + vnode.state.delete.name + "' sensor?")
          ]),
          m('footer.modal-card-foot',[
            m('a.button.is-success', {onclick:function(){deleteSensor(vnode);}}, 'Delete'),
            m('a.button', {onclick:function(){vnode.state.deleteModalOpen = false;}}, 'Cancel')
          ])
        ])
      ])
    ]); }))
  ]);}
};

var header = {
  linkAttrs: function(r) {
    return {href: "./#!" + r, class: m.route.get() == r ? 'is-active': ''};
  },
  oninit: function(){},
  view:function(){
    return m(".nav.has-shadow ", [
      m('.nav-left',[
        m("a.nav-item",{href: "./#!/home"}, "CRFS"),
        m("a.nav-item.is-tab", header.linkAttrs("/reports"),  "Reports"),
        loggedIn ? m("a.nav-item.is-tab", header.linkAttrs("/sensors"),  "Sensors") : null,
      ]),
      m('.nav-center',[
        m('.nav-item', uvu.displayName)
      ]),
      m('.nav-right', [
        loggedIn ? m("a[href='https://my.uvu.edu/Shibboleth.sso/Logout'].nav-item", 'Logout') : null
      ])
    ]);
  }
};

function headerFooter(content){
  return {
    view: function(vnode) {
      return m('',  [
        m(header),
        m('',{style:'padding:1vh 1vw;'}, m(content, vnode.state)),
        //m('h1','FOOTER')
      ]);
    }
  };
}

m.route(document.body, "/home", {
  '/home': headerFooter(home),
  "/reports": headerFooter(reportsComponent),
  // "/usage": headerFooter(''),
  // "/visits": headerFooter(''),
  // "/groups": headerFooter(''),
  "/sensors": headerFooter(loggedIn ? sensorsComponent : ''),
});
