import developerOptions from "./developerOptions.js";

var header = {
  linkAttrs: function(r) {
    var attrs = {href: "./#!" + r, class: m.route.get() == r ? 'is-active': ''};
    if (isIE){ attrs.onclick = _ => location.reload(); }
    return attrs;
  },
  mobileLinkAttrs: function(r) {
    return {href: "./#!" + r, style: `${m.route.get() == r ? 'background-color: #FFF8E6;': ''}`};
  },
  oninit: function(){},
  view:function(){
    return m('',[ m(mobileView), m(desktopView)]);
  }
};

let mobileView = {
  open: false,
  view:(vnode) => m(".nav.has-shadow.is-hidden-desktop", [
    m('.nav-right', {style:'flex-grow: 0;'}, m('.nav-item',[
      m('.fa.fa-bars.fa-2x', {
        style:'color: white;', onclick: _=> vnode.state.open = !vnode.state.open
      })
    ])),
    !vnode.state.open ? null : m('nav.panel', {style:"position: absolute; top: 50px; font-size:20px;"}, [
      g.uvu.loggedIn ?
        m('p.panel-tabs', {style:'padding: 10px;'} ,g.uvu.displayName) :
        m('p.panel-tabs', {style:'padding: 10px;'} , 'Open Access') ,
      m('a.panel-tabs', header.mobileLinkAttrs("/home"), 'Home'),
      m('a.panel-tabs', header.mobileLinkAttrs("/reports"), 'Reports'),
      g.uvu.admin ? m('a.panel-tabs', header.mobileLinkAttrs("/visits"), 'Visists') : null,
      g.uvu.admin ? m('a.panel-tabs', header.mobileLinkAttrs("/groups"), 'Groups') : null,
      g.uvu.admin ? m('a.panel-tabs', header.mobileLinkAttrs("/sensors"), 'Sensors') : null,
      g.uvu.admin ? m('a.panel-tabs', header.mobileLinkAttrs("/affiliations"), 'Affiliations') : null,
      g.docker ? m('a.panel-tabs', header.mobileLinkAttrs("/developer"), 'Developer') : null,
      g.docker ?
        g.uvu.loggedIn ?
          m('a.panel-tabs', {onclick:_ => g.uvu.loggedIn = false}, 'Logout') :
          m('a.panel-tabs', {onclick:_ => g.uvu.loggedIn = true}, 'Login')
      : g.uvu.loggedIn ?
          m(`a.panel-tabs[title='Logout'][href='https://cas.uvu.edu/cas/logout?destination=https%3A%2F%2Fcrfs.uvu.com']`, 'Logout'):
          m(`a.panel-tabs[title='Login'href='/uvu']`, 'Login')
    ])
  ])
};

let desktopView = {
  view:() => m(".nav.has-shadow.is-hidden-touch", [
    m('.nav-left',[
      m("a.nav-item.is-tab", header.linkAttrs("/home"),  "Home"),
      m("a.nav-item.is-tab", header.linkAttrs("/reports"),  "Reports"),
      g.uvu.admin ? m("a.nav-item.is-tab", header.linkAttrs("/visits"),  "Visits") : null,
      g.uvu.admin ? m("a.nav-item.is-tab", header.linkAttrs("/groups"),  "Groups") : null,
      g.uvu.admin ? m("a.nav-item.is-tab", header.linkAttrs("/sensors"),  "Sensors") : null,
      g.uvu.admin ? m("a.nav-item.is-tab", header.linkAttrs("/affiliations"),  "Affiliations") : null,
      g.docker ? m("a.nav-item.is-tab", header.linkAttrs("/developer"),  "Developer") : null,
    ]),
    m('.nav-right', {style:'flex-grow: 0;'}, [
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
        m("a[href='/uvu'].nav-item",'Login')
    ])
  ])
};

export default function headerFooter(content){
  return {
    view: function(vnode) {
      return m('',  [
        m(header),
        m('#content', m(content, vnode.state)),
        m(developerOptions),
        (g.notifications.length > 0) ? m('.message',
          {style:'position: absolute; top: 50px; right: 10px;'} ,[
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

// http://stackoverflow.com/questions/19999388/check-if-user-is-using-ie-with-jquery
function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) { // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) { // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) { // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // other browser
    return false;
}
var isIE = detectIE();
