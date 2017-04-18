import {addSensorData, getGroups, getVisits, unixToDate, blankFirstOption} from '/mithril/utils.js';

export default {
  oninit:function(vnode){
    vnode.state = {sensor: Number(vnode.attrs.sensor.id), quantity: 0};
    if (g.visits.length === 0) getVisits();
    if (g.groups.length === 0) getGroups();
  },
  oncreate: (vnode) => $(`#sensor_${vnode.attrs.sensor.name}`).select2({ placeholder: "Choose a visit", width : '340px'}),
  view: function(vnode){
    return m('form',[
      m('span',  vnode.attrs.sensor.name),
      m('input', {
        type:"number", min:'0', step:"0.1", value:vnode.state.quantity,
        onchange:function(e){ vnode.state.quantity = Number(e.target.value); }
      }, ''),
      m('span', vnode.attrs.sensor.unit),
      m(`select#sensor_${vnode.attrs.sensor.name}`,{ onchange:function(e){
          let value = JSON.parse(e.target.value);
          vnode.state.visit_id = value.id;
          if (!vnode.attrs.homePage) vnode.state.timestamp = value.start_date;
        }},
        blankFirstOption((vnode.attrs.visits || g.visits).map((v) => m('option',
          {value:JSON.stringify({id:v.id,start_date:parseInt(v.start_date)+1})},
        `${unixToDate(v.start_date)} - ${g.groupLookup[v.group_id] ? g.groupLookup[v.group_id].name : ''}`)))
      ),
      m('button[type="submit"]', {
        //disabled: "false", TODO figure out how to test if this is working
        onclick:function(e){
          e.preventDefault();
          if(vnode.state.quantity > 0) addSensorData(vnode.state); },
      }, 'Add Data')
    ]);
  }
};
