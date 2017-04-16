import {getSensors, addSensor, deleteSensor, unixToTime} from '/mithril/utils.js';
import {addModal, deleteModal} from '/mithril/components/modals.js';
import addSensorData from '/mithril/components/addSensorData.js';

let addSensorModalBody = (vnode) => [
  m('.label', 'Name'),
  m('input.input', {onchange:(e) => vnode.state.data.name = e.target.value}, ''),
  m('.label', 'Units'),
  m('input.input', {onchange:function(e){ vnode.state.data.unit = e.target.value; }}, ''),
];

let deleteData = {modal:false, type:'sensor', func: deleteSensor};

let sensorLine = {
  oninit:(vnode) => {
    vnode.state.open = false;
    vnode.state.values = [];
    vnode.state.openDetails = _ => {
      vnode.state.open = !vnode.state.open;
      m.request({url:`/api/admin/sensor/values.php?sensor=${vnode.attrs.id}`})
      .then((r) => vnode.state.values = r, window.requestError);
    };
  },
  view:(vnode) => m('.card', {style:'padding: 10px;'}, [
    m('button.button.is-small',
      {style:'margin:0 10px 0 0;', onclick:(e) => vnode.state.openDetails() },[
      m('', {style:'padding:0 2px;'}, 'Details'),
      m('.fa', {class:vnode.state.open?'fa-angle-down':'fa-angle-up'}, ''),
    ]),
    m('span', vnode.attrs.name),
    vnode.state.open ? m('button.button.is-danger.is-small.is-pulled-right',
      {onclick:_ => {
        deleteData.modal = true;
        deleteData.id = vnode.attrs.id;
        deleteData.name = `${vnode.attrs.name}`;
      }}, 'Delete') : null,
    vnode.state.open ? m('',[
      m(addSensorData,{sensor:vnode.attrs}),
      vnode.state.values.map((v) => m('', [
        m('span' , unixToTime(v.timestamp) ),
        m('span' , ' - ' ),
        m('span', `${v.quantity} ${vnode.attrs.unit}`),

      ]))
    ]) : null,
  ])
};

export default {
  oninit:function(vnode){
    vnode.state.add = {modal:false, type: 'sensor', func:addSensor, body:addSensorModalBody };
    vnode.state.delete = deleteData;
    if (g.sensors.length === 0) getSensors();
   },
  view: function(vnode){ return m('',[
    m('.level',[
      m('.level-left', m('h1.title','Sensors')),
      m('.level-right',m('button.button.is-primary.add-button',
        {onclick:function(){ vnode.state.add.modal = true; }} ,'Add')),
    ]),
    m(addModal, vnode.state.add),
    m(deleteModal, vnode.state.delete),
    m('',g.sensors.map((v) => m(sensorLine, v) )),
  ]);}
};
