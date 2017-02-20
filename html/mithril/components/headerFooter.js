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
        g.uvu.loggedIn ? m("a.nav-item.is-tab", header.linkAttrs("/groups"),  "Groups") : null,
        g.uvu.loggedIn ? m("a.nav-item.is-tab", header.linkAttrs("/sensors"),  "Sensors") : null,
        g.docker ? m("a.nav-item.is-tab", header.linkAttrs("/developer"),  "Developer") : null,
      ]),
      m('.nav-center',[
        m('.nav-item', g.uvu.displayName)
      ]),
      m('.nav-right', [
        g.uvu.loggedIn ?
          m("a[href='https://my.uvu.edu/Shibboleth.sso/Logout'].nav-item", 'Logout') :
          m("a[href='/login'].nav-item",'Login') //TODO change this to /uvu when the route is protected
      ])
    ]);
  }
};

export default function headerFooter(content){
  return {
    view: function(vnode) {
      return m('',  [
        m(header),
        m('',{style:'padding:1vh 1vw;'}, m(content, vnode.state)),
        //m('h1','FOOTER')
        (g.notifications.length > 0) ? m('.message',
        {style:'position: absolute; top: 50px; right: 10px; z-index: 2;'} ,[
          m('.message-header',[
            m('p',''),
            m('.delete',{onclick:function(){g.notifications = []; }},''),
          ]),
          m('.message-body',[
            g.notifications.map(function(v){ return m('',  v); })
          ]),
        ]) : null,
      ]);
    }
  };
}
