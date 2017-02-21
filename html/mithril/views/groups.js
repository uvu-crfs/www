import {getGroups, addGroup, deleteGroup} from '/mithril/utils.js';
import {addModal, deleteModal} from '/mithril/components/modals.js';

let groupDetails = {
  onchange:(vnode) => console.log(vnode.attrs),
  view:(vnode) => vnode.attrs.detailsOpen ? m('',[
    vnode.attrs.contact ? m('',[
      m('', `Contact Name: ${vnode.attrs.contact.name}`),
    ]) : null,
  ]) : null,
};

let addGroupModalBody = (vnode) => [
  m('.label', 'Name'),
  m('input.input', {onchange:(e) => vnode.state.data.name = e.target.value}, ''),
];

export default {
  oninit: (vnode) => {
    vnode.state.add = {modal:false, type: 'group', func:addGroup, body:addGroupModalBody };
    vnode.state.delete = {modal:false, type:'group', func: deleteGroup};
    getGroups();
    vnode.state.openDetails = (group) => {
      group.detailsOpen = !group.detailsOpen;
      group.contact = {name:'This will get update one day'};
    };
  },
  view:(vnode) => m('',[
    m('.level',[
      m('.level-left', m('.title','Groups')),
      m('.level-right',m('button.button.is-primary',
        {onclick:_ => vnode.state.add.modal = true }, 'Add')),
    ]),
    m(addModal, vnode.state.add),
    g.groups.map((g) => m('.card', {style:'padding: 10px;'}, [
      m('',[
        m('button.button.is-small',
          {style:'margin:0 10px 0 0;', onclick:(e) => vnode.state.openDetails(g) },[
          m('', {style:'padding:0 2px;'}, 'Details'),
          m('.fa', {class:g.detailsOpen?'fa-angle-down':'fa-angle-up'}, ''),
        ]),
        m('span', g.name),
        g.detailsOpen ? m('button.button.is-danger.is-small.is-pulled-right',
        {onclick:_ => {
          vnode.state.delete.modal = true;
          vnode.state.delete.id = g.id;
          vnode.state.delete.name = `${g.name}`;
        }},
        'Delete') : null,
      ]),
      m(groupDetails, g),
      m(deleteModal, vnode.state.delete),
    ]))
  ])
};
