import {pikadayToTimeStamp, unixToDate} from '/mithril/utils.js';

export var pikaday = {
  date:{toString:_=>''},
  oncreate:(vnode) => {
    vnode.state.date = new Pikaday({field: document.getElementById(vnode.attrs.htmlId)});
    if (vnode.attrs.createFunc)
      vnode.attrs.obj[vnode.attrs.key] = vnode.attrs.createFunc();
    if (vnode.attrs.obj[vnode.attrs.key]){
      vnode.state.date.setDate(unixToDate(vnode.attrs.obj[vnode.attrs.key]));
    }
  },
  view:(vnode)=> m(`input#${vnode.attrs.htmlId}`, {
    value: vnode.state.date.toString(),
    onchange:_ => {
      vnode.attrs.obj[vnode.attrs.key] = pikadayToTimeStamp(vnode.state.date);
      if (vnode.attrs.changeFunc){
        vnode.attrs.changeFunc(vnode.attrs.obj[vnode.attrs.key]);
      }
    }
  })
};
