var header = {};

var style = {style:"background-color: gray; width:100vw; padding: 10px 10px"};
var route = function(r) {
  return {style:"color: white; padding: 0 5px; text-decoration: none;", href: "./#!/" + r};
};

header.oninit = function(){};
header.view = function(){
  return m("", style, [
    m("a", route("home"), "CRFS"),
    m("a", route("hello"),  "hello"),
    m('span', username),
    loggedIn ? m("a[href='https://cas.uvu.edu/cas/logout]", 'Logout') : null
  ]);
};

m.mount(document.body.querySelector("#header"), header);
