import {addSensorData} from '/mithril/utils.js';

export default {
  oninit:function(vnode){
    vnode.state = {sensor: Number(vnode.attrs.id), quantity: 0};
  },
  view: function(vnode){
    return m('',[
      m('span',  vnode.attrs.name),
      m('input', {
        type:"number", min:'0', step:"0.1", value:vnode.state.quantity,
        onchange:function(e){ vnode.state.quantity = Number(e.target.value); }
      }, ''),
      m('span', vnode.attrs.unit),
      m('button', {
        onclick:function(){
          if(vnode.state.quantity > 0) addSensorData(vnode.state); },
        class: (vnode.state.quantity > 0) ? '' : '',
      }, 'Add')
    ]);
  }
};
