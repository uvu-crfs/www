import {getGroups, getVisits, htmlDateToUnix, addVisit, unixToDate, blankFirstOption, getTimeStamp} from '/mithril/utils.js';
import {addVisitModal, deleteModal} from '/mithril/components/modals.js';
import {s2Component} from '/mithril/components/s2Component.js';
//let deleteData = {modal:false, type:'sensor', func: deleteVisit};

// var makeAutoComplete = function(element, isInitialized) {
//   let groupNames = g.groups.map((v) => v.name);
//   console.log(groupNames);
//   if (!isInitialized) {
//     $(element).autocomplete({
//       source: groupNames
//     });
//   }
// };

//let groupNames = g.groups.map((v) => {id: v.id}, {name: v.name});

let addVisitModalBody = (vnode) => [
  m('.label', 'Group'),
  m(s2Component, {
    request_data: vnode.state.data,
    request_attr: 'group_id',
    data: g.groups.map(function(obj) {
      let newObj = {};
      newObj.id = obj.id;
      newObj.text = obj.name;
      return newObj;
    })
  }),
  //m('button', {disabled:true}, 'Add') //TODO this should add a group
  m('.label', 'Start Date'),
  m('input[type="date"]', {oninput:(e) => {vnode.state.data.start_date = htmlDateToUnix(e.target.value); console.log(vnode.state.data); }}, ''),
  m('.label', 'End Date'),
  m('input[type="date"]', {oninput:(e) => vnode.state.data.end_date = htmlDateToUnix(e.target.value) }, ''),
];

// let addVisitModalBody = (vnode) => [
//   m('.label', 'Group'),
//   m('select', {onchange:(e) => vnode.state.data.group_id = e.target.value},
//     g.groups.map( (v) => m('option', {value:v.id}, v.name) )
//   ),
//   m('button', {disabled:true}, 'Add')
// ];

let visitCard = {
  oninit:(vnode) => {
    vnode.state.open = false;
    vnode.state.values = [];
    vnode.state.openDetails = _ => {
      vnode.state.open = !vnode.state.open;
    };
  },
  view:(vnode) => m('.card', {style:'padding: 10px;'}, [
    m('button.button.is-small',
      {style:'margin:0 10px 0 0;', onclick:(e) => vnode.state.openDetails() },[
      m('', {style:'padding:0 2px;'}, 'Details'),
      m('.fa', {class:vnode.state.open?'fa-angle-down':'fa-angle-up'}, ''),
    ]),
    m('span', {style:'font-weight: bold;'},`Start:`),
    m('span', {style:'padding:0 5px;'},`${unixToDate(vnode.attrs.start_date)}`),
    m('span', {style:'font-weight: bold;'},`End:`),
     m('span', {style:'padding:0 5px;'},`${unixToDate(vnode.attrs.end_date)}`),
    g.groupLookup[vnode.attrs.group_id] ? m('span', {style:"font-weight:bold;"}, g.groupLookup[vnode.attrs.group_id].name) : null,
    //m('span', vnode.attrs.name),
    vnode.state.open ? m('button.button.is-danger.is-small.is-pulled-right',
      {onclick:_ => {
        deleteData.modal = true;
        deleteData.id = vnode.attrs.id;
        deleteData.name = `${vnode.attrs.name}`;
      }}, 'Delete') : null,
    vnode.state.open ? m('',[
      m('', JSON.stringify(vnode.attrs)),
    ]) : null,
  ])
};


export default {
  oninit:(vnode) => {
    vnode.state.add = {modal:false, type: 'sensor', func:addVisit, body:addVisitModalBody };
    if (g.visits.length === 0) getVisits();
    if (g.groups.length === 0) getGroups();
  },
  view:(vnode) => m('',[
    m('.level',[
      m('.level-left', m('.title','Visits')),
      m('.level-right',m('button.button.is-primary.add-button', {onclick:function(){ vnode.state.add.modal = true; }} ,'Add')),
    ]),
    m(addVisitModal, vnode.state.add),
    g.visits.map((v)=> m(visitCard, v)),
  ])
};
