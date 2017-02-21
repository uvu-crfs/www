import {addSensorData, getGroups, getVisits, unixToDate, blankFirstOption} from '/mithril/utils.js';

export default {
  oninit:function(vnode){
    vnode.state = {sensor: Number(vnode.attrs.id), quantity: 0};
    if (g.visits.length === 0) getVisits();
    if (g.groups.length === 0) getGroups();
  },
  view: function(vnode){
    return m('form',[
      m('span',  vnode.attrs.name),
      m('input', {
        type:"number", min:'0', step:"0.1", value:vnode.state.quantity,
        onchange:function(e){ vnode.state.quantity = Number(e.target.value); }
      }, ''),
      m('span', vnode.attrs.unit),
      m('select',{ onchange:function(e){ vnode.state.visit_id = e.target.value; }},
        blankFirstOption(g.visits.map((v) => m('option', {value:v.id},
        `${unixToDate(v.start_date)} - ${g.groupLookup[v.group_id] ? g.groupLookup[v.group_id].name : ''}`)))
      ),
      m('button[type="submit"]', {
        //disabled: "false", TODO figure out how to test if this is working
        onclick:function(e){
          e.preventDefault();
          if(vnode.state.quantity > 0) addSensorData(vnode.state); },
      }, 'Add')
    ]);
  }
};
