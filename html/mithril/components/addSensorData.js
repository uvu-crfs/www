import {addSensorData, getGroups, getVisits, unixToDate, blankFirstOption} from '/mithril/utils.js';

export default {
  oninit:function(vnode){
    vnode.state = {sensor: Number(vnode.attrs.sensor.id), quantity: 0};
    if (g.visits.length === 0) getVisits();
    if (g.groups.length === 0) getGroups();
    if (vnode.attrs.homePage) {
      vnode.state.initialSelectionId = vnode.attrs.visits[0].id;
      vnode.state.visit_id = vnode.attrs.visits[0].id;
    }
  },
  oncreate: (vnode) => $(`#sensor_${vnode.attrs.sensor.name}`).select2({ placeholder: "Choose a visit", width : '340px'}),
  onupdate: (vnode) => $(`#sensor_${vnode.attrs.sensor.name}`).select2({ placeholder: "Choose a visit", width : '340px'}),
  view: function(vnode){
    return m('form', {
      onsubmit:function(e){
        e.preventDefault();
        if(vnode.state.quantity > 0) addSensorData(vnode.state);
        g.updateLeaderboard = true;
      },
    },[
      m('span',  vnode.attrs.sensor.name),
      m('input', {
        type:"number", min:'0', step:"0.1", value:vnode.state.quantity,
        onchange:function(e){ vnode.state.quantity = Number(e.target.value); }
      }, ''),
      m('span', vnode.attrs.sensor.unit),
      m(`select#sensor_${vnode.attrs.sensor.name}`,{
        onchange:function(e){
          let value = JSON.parse(e.target.value);
          vnode.state.visit_id = value.id;
          if (!vnode.attrs.homePage) vnode.state.timestamp = value.start_date;
        }},
        blankFirstOption((vnode.attrs.visits || g.visits).map((v) => m('option',{
          selected: v.id === vnode.state.initialSelectionId,
          value:JSON.stringify({id:v.id,start_date:parseInt(v.start_date)+1}),
        },
        `${unixToDate(v.start_date)} - ${g.groupLookup[v.group_id] ? g.groupLookup[v.group_id].name : ''}`)))
      ),
      m('input[type="submit"][value="Add Data"]', {
        disabled : (vnode.state.quantity === 0 || typeof(vnode.state.visit_id) === 'undefined')
      })
    ]);
  }
};
