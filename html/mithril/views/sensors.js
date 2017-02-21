import {getSensors, addSensor, deleteSensor} from '/mithril/utils.js';
import sensorDataList from '/mithril/components/sensorDataList.js';
import {addModal, deleteModal} from '/mithril/components/modals.js';

let addSensorModalBody = (vnode) => [
  m('.label', 'Name'),
  m('input.input', {onchange:(e) => vnode.state.data.name = e.target.value}, ''),
  m('.label', 'Units'),
  m('input.input', {onchange:function(e){ vnode.state.data.unit = e.target.value; }}, ''),
];

export default {
  oninit:function(vnode){
    vnode.state.add = {modal:false, type: 'sensor', func:addSensor, body:addSensorModalBody };
    vnode.state.delete = {modal:false, type:'sensor', func: deleteSensor};
   },
  oncreate:function(vnode){ getSensors(); },
  view: function(vnode){ return m('',[
    m('.level',[
      m('.level-left', m('.title','Sensors')),
      m('.level-right',m('button.button.is-primary',
        {onclick:function(){ vnode.state.add.modal = true; }} ,'Add')),
    ]),
    m(addModal, vnode.state.add),
    m('',g.sensors.map(function(v){ return m('', [
      m('span', v.name + "  " +v.unit),
      m('button', {onclick:function(){
        vnode.state.delete.modal = true;
        vnode.state.delete.id = v.id;
        vnode.state.delete.name = `${v.name}`;
      }}, 'Delete'),
      m(deleteModal, vnode.state.delete),
    ]); })),
    m(sensorDataList, vnode.state)
  ]);}
};
