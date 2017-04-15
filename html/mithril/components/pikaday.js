import {pikadayToTimeStamp, unixToDate} from '/mithril/utils.js';

export var pikaday = {
  date:{toString:_=>''},
  oncreate:(vnode) => {
    vnode.state.date = new Pikaday({field: document.getElementById(vnode.attrs.htmlId)});
    if (vnode.attrs.createFunc) vnode.attrs.timestamp = vnode.attrs.createFunc();
    if (vnode.attrs.timestamp){
      vnode.state.date.setDate(unixToDate(vnode.attrs.timestamp));
    }
  },
  view:(vnode)=> m(`input#${vnode.attrs.htmlId}`, {
    value: vnode.state.date.toString(),
    onchange:_ => {
      vnode.attrs.timestamp = pikadayToTimeStamp(vnode.state.date);
      if (vnode.attrs.changeFunc) vnode.attrs.changeFunc(vnode.attrs.timestamp);
    }
  })
};
