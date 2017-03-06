import developerOptions from "./developerOptions.js";

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
        g.uvu.admin ? m("a.nav-item.is-tab", header.linkAttrs("/visits"),  "Visits") : null,
        g.uvu.admin ? m("a.nav-item.is-tab", header.linkAttrs("/groups"),  "Groups") : null,
        g.uvu.admin ? m("a.nav-item.is-tab", header.linkAttrs("/sensors"),  "Sensors") : null,
        g.uvu.admin ? m("a.nav-item.is-tab", header.linkAttrs("/affiliations"),  "Affiliations") : null,
        g.docker ? m("a.nav-item.is-tab", header.linkAttrs("/developer"),  "Developer") : null,
      ]),
      m('.nav-right', [
        g.docker ? m('.nav-item', [
          g.uvu.loggedIn ?
            m('.nav-item', [
              m('', {style:'padding:0 10px;'}, g.uvu.displayName),
              m("a", {onclick:_ => g.uvu.loggedIn = false}, 'Logout')
            ]) :
            m("a.nav-item", {onclick:_ => g.uvu.loggedIn = true}, 'Login')
        ]) :
        g.uvu.loggedIn ?
          m('.nav-item', [
            m('', {style:'padding:0 10px;'}, g.uvu.displayName),
            m("a[href='https://my.uvu.edu/Shibboleth.sso/Logout']", 'Logout')
          ]) :
          m("a[href='https://stu-web4.uvu.edu/uvu'].nav-item",'Login')
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
        m(developerOptions),
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
