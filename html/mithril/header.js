var header = {};
header.controller = function(){};
header.view = function(){
  return m("",[
    m("span", "Home"),
    m("span", "_"),
    m("span", "Somewhere else"),
  ]);
};

m.mount(document.body.querySelector("#header"), header);
