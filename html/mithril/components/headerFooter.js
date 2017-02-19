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

//import {notifications, addNotification, clearNotifications} from '/mithril/utils.js'

export default function headerFooter(content){
  return {
    view: function(vnode) {
      return m('',  [
        m(header),
        m('',{style:'padding:1vh 1vw;'}, m(content, vnode.state)),
        //m('h1','FOOTER')
        // (notifications.length > 0) ? m('.notification.is-info',
        // {style:'position: absolute; top: 50px; right: 10px; z-index: 2;'} ,[
        //   m('.delete',{onclick:function(){clearNotifications(); }},''),
        //   notifications.map(function(v){ return m('',  v); })
        // ]) : null,
      ]);
    }
  };
}
