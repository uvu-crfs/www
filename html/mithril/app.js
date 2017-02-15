var home = {
    view: function(vnode) {
        return m('.title','Welcome Home');
    }
};

var firstApp = {
    count : 0,
    view: function(vnode) {
        return m("main", [
            m("h1", {class: "title"}, "My first app"),
            m("button", {onclick: function() {firstApp.count++;}}, firstApp.count + " clicks"),
        ]);
    }
};

var header = {
  linkAttrs: function(r) {
    return {style:"color: white; padding: 0 5px; text-decoration: none;", href: "./#!/" + r};
  },
  oninit: function(){},
  view:function(){
    return m("", {style:"background-color: gray; width:100vw; padding: 10px 0"}, [
      m("a", header.linkAttrs("home"), "CRFS"),
      m("a", header.linkAttrs("firstApp"),  "FirstApp"),
      m('span',{style:"float:right;"} , [
        m('span', uvu.displayName),
        loggedIn ? m("a[href='https://my.uvu.edu/Shibboleth.sso/Logout']", 'Logout') : null
      ])
    ]);
  }
};

function headerFooter(content){
  return {
    view: function(vnode) {
      return m('', [
        m(header),
        m(content, vnode.state),
        //m('h1','FOOTER')
      ]);
    }
  };
}

m.route(document.body, "/home", {
  '/home': headerFooter(home),
  "/firstApp": headerFooter(firstApp),
  // "/report": headerFooter(''),
  // "/usage": headerFooter(''),
  // "/visits": headerFooter(''),
  // "/groups": headerFooter(''),
  // "/sensors": headerFooter(''),
});
