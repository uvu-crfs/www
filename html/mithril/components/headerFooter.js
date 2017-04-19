import developerOptions from "./developerOptions.js";

var header = {
  linkAttrs: function(r) {
    return {href: "./#!" + r, class: m.route.get() == r ? 'is-active': ''};
  },
  mobileLinkAttrs: function(r) {
    return {href: "./#!" + r, style: `${m.route.get() == r ? 'background-color: #FFF8E6;': ''}`};
  },
  oninit: function(){},
  view:function(){
    return m('',[
    m('a#logo[href="http://www.uvu.edu/crfs/"]',
      m('img[src=/vendor/uvu_institutional_square/PNG/UVUSquareGreen-0001.png];',
        { style:'width:100%; height:100%;'}, '')
    ),
    m(mobileView),
    m(desktopView),
    ]);
  }
};

let mobileView = {
  open: false,
  view:(vnode) => m(".nav.has-shadow.is-hidden-desktop", [
  // view:(vnode) => m(".nav.has-shadow", [
    m('.nav-left',[
      m('',{ style:'width:60px; height:60px; display:table;'},''),
      m("a.nav-item",{href: "./#!/home", style:'font-size:large;'}, "Capitol Reef"),
    ]),
    m('.nav-right', {style:'flex-grow: 0;'}, m('.nav-item',[
      m('.fa.fa-bars.fa-3x', {
        style:'color: white;', onclick: _=> vnode.state.open = !vnode.state.open
      })
    ])),
    !vnode.state.open ? null : m('nav.panel', {style:"position: absolute; top: 60px; right: 0px; font-size:20px;"}, [
      g.uvu.loggedIn ?
        m('p.panel-tabs', {style:'padding: 10px;'} ,g.uvu.displayName) :
        m('p.panel-tabs', {style:'padding: 10px;'} , 'Open Access') ,
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
          m(`a.panel-tabs[href='https://my.uvu.edu/Shibboleth.sso/Logout']`, 'Logout'):
          m(`a.panel-tabs[href='/uvu']`, 'Login')
    ])
  ])
};

let desktopView = {
  view:() => m(".nav.has-shadow.is-hidden-touch", [
  // view:() => m(".nav.has-shadow", [
    m('.nav-left',[
      m('',{ style:'width:60px; height:60px; display:table;'},''),
      m("a.nav-item",{href: "./#!/home", style:'font-size:large;'}, "Capitol Reef"),
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

var footer = {
  view:_=> m('#footer',[
    m('#footerSchool', m('.footerAddress', m('.footinfowrap',[
      m('a[title="Utah Valley University"][href="https://www.google.com/maps/@40.278969,-111.717825,15z"]', m('span.addressText', '800 West University Parkway, Orem, UT 84058')),
      m('span', '|'),
      m('span.addressText','(801) 863-INFO (4636)'),
      m('span', '|'),
      m('a[href="http://www.uvu.edu/copyright/"]', m('span.addressText', `Copyright © ${new Date().getFullYear()}`)),
      m('span', '|'),
      m('a[href="http://www.uvu.edu/legal/"]', m('span.addressText.disclaimer', 'Disclaimers & Legal')),
      m('h4', 'UTAH VALLEY UNIVERSITY')
    ]))),
    m('#ob', m('a[href="http://a.cms.omniupdate.com/10?skin=uvu&amp;account=UVU-WWW&amp;site=UVU_Public_Site&amp;action=de&amp;path=/index.pcf"]'))
  ])
};

export default function headerFooter(content){
  return {
    view: function(vnode) {
      return m('',  [
        m(header),
        m('#content', m(content, vnode.state)),
        m(developerOptions),
        m(footer),
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
