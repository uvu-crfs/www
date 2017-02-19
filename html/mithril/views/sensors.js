import {getSensors, addSensor, deleteSensor} from '/mithril/utils.js';

export default {
  oninit:function(vnode){ vnode.state = { delete:{name:''}, add:{}}; },
  oncreate:function(vnode){ getSensors(); },
  view: function(vnode){ return m('',[
    m('.level',[
      m('.level-left', m('.title','Sensors')),
      m('.level-right',m('button.button.is-primary',
        {onclick:function(){ vnode.state.addModalOpen = true; }} ,'Add')),
    ]),
    m('.modal',{class: vnode.state.addModalOpen ? 'is-active':''}, [
      m('.modal-background',
        {onclick:function(){vnode.state.addModalOpen = false;}}, ''),
      m('.modal-card',[
        m('header.modal-card-head',[
          m('p.modal-card-title', 'Add Sensor'),
          m('button.delete',
            {onclick:function(){vnode.state.addModalOpen = false;}}, ''),
        ]),
        m('section.modal-card-body', [
          m('.label', 'Name'),
          m('input.input',
            {onchange:function(e){ vnode.state.add.name = e.target.value; }},
          ''),
          m('.label', 'Units'),
          m('input.input',
            {onchange:function(e){ vnode.state.add.unit = e.target.value; }},
          ''),
        ]),
        m('footer.modal-card-foot',[
          m('a.button.is-success', {onclick:function(){addSensor(vnode);}}, 'Add'),
          m('a.button', {onclick:function(){vnode.state.addModalOpen = false;}}, 'Cancel')
        ])
      ])
    ]),
    m('',g.sensors.map(function(v){ return m('', [
      m('span', v.name + "  " +v.unit),
      m('button', {onclick:function(){
        vnode.state.delete = v; vnode.state.deleteModalOpen = true;
      }}, 'Delete'),
      m('.modal',{class: vnode.state.deleteModalOpen ? 'is-active':''}, [
        m('.modal-background',
          {onclick:function(){vnode.state.deleteModalOpen = false;}}, ''),
        m('.modal-card',[
          m('header.modal-card-head',[
            m('p.modal-card-title', 'Delete Sensor'),
            m('button.delete', {onclick:function(){ vnode.state.deleteModalOpen = false;}}, ''),
          ]),
          m('section.modal-card-body', [
            m('p',"Are you sure you want to delete the '" + vnode.state.delete.name + "' sensor?")
          ]),
          m('footer.modal-card-foot',[
            m('a.button.is-danger', {onclick:function(){deleteSensor(vnode);}}, 'Delete'),
            m('a.button', {onclick:function(){vnode.state.deleteModalOpen = false;}}, 'Cancel')
          ])
        ])
      ])
    ]); }))
  ]);}
};
