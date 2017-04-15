import {pikadayToTimeStamp, unixToDate} from '/mithril/utils.js';

export var pikaday = {
  date:{},
  oncreate:(vnode) => {
    vnode.state.date = new Pikaday({field: document.getElementById(vnode.attrs.htmlId)});
    if (vnode.attrs.timestamp){
      vnode.state.date.setDate(unixToDate(vnode.attrs.timestamp));
    }
    console.log(vnode.state.date.toString());
  },
  view:(vnode)=> m(`input#${vnode.attrs.htmlId}`, {
    value: vnode.state.date.toString(),
    onchange:_ => vnode.attrs.timestamp = pikadayToTimeStamp(vnode.state.date)
  })
};
