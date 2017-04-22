import {getGroups, getVisit, getVisits, editVisit, htmlDateToUnix, addVisit,
    unixToDate, blankFirstOption, getTimeStamp, deleteVisit} from '/mithril/utils.js';
import {addVisitModal, editVisitModal, deleteModal} from '/mithril/components/modals.js';
import {s2Component} from '/mithril/components/s2Component.js';
import {pikaday} from '/mithril/components/pikaday.js';

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
  // m('button', {disabled:true}, 'Add Group'), //TODO this should add a group,
  m('.label', 'Start Date'),
  m(pikaday, {obj:vnode.state.data, key:'start_date', htmlId: "startDate"}),
  m('.label', 'End Date'),
  m(pikaday, {obj:vnode.state.data, key:'end_date', htmlId: "endDate"}),
  m('.label', 'Days'),
  m('input.input[type="number"]', {onchange:(e) => vnode.state.data.days = e.target.value }, ''),
  m('.label', 'Nights'),
  m('input.input[type="number"]', {onchange:(e) => vnode.state.data.nights = e.target.value }, ''),
  m('.label', 'Female Students'),
  m('input.input[type="number"]', {onchange:(e) => vnode.state.data.students_female = e.target.value }, ''),
  m('.label', 'Male Students'),
  m('input.input[type="number"]', {onchange:(e) => vnode.state.data.students_male = e.target.value }, ''),
  m('.label', 'Advisors'),
  m('input.input[type="number"]', {onchange:(e) => vnode.state.data.advisors = e.target.value }, ''),
  m('.label', 'Evaluation Complete'),
  m('label',
    m('input[type="checkbox"]', {
      onclick: (e) => {
        vnode.state.data.evaluation =  e.target.checked;
      }
    }, ''), ''),
  m('.label', 'Summary Complete'),
  m('label',
    m('input[type="checkbox"]', {
      onclick: (e) => {
        vnode.state.data.summary = e.target.checked;
      }
    }, ''), ''),
  m('.label', 'Dark Sky Tour Given'),
  m('label',
    m('input[type="checkbox"]', {
      onclick: (e) => {
        vnode.state.data.darksky = e.target.checked;
      }
    }, ''), ''),
  m('.label', 'Notes'),
  m('input.input', {onchange:(e) => vnode.state.data.notes = e.target.value }, ''),
  m('.label', 'Contact'),
  m('input.input', {onchange:(e) => vnode.state.data.contact = e.target.value }, ''),
];

let editVisitModalBody = (vnode) => [
  m('.label', 'Group'),
  m(s2Component, {
    request_data: vnode.state.data,
    request_attr: 'group_id',
    value: vnode.attrs.data.group_id,
    data: g.groups.map(function(obj) {
      let newObj = {};
      newObj.id = obj.id;
      newObj.text = obj.name;
      return newObj;
    }),
  }),
  m('.label', 'Start Date'),
  m(pikaday, {obj:vnode.attrs.data, key:'start_date', htmlId: "editStartDate"}),
  m('.label', 'End Date'),
  m(pikaday, {obj:vnode.attrs.data, key:'end_date', htmlId: "editEndDate"}),
  m('.label', 'Days'),
  m('input.input[type="number"]', {
    value: vnode.attrs.data.days,
    onchange:(e) => vnode.attrs.data.days = e.target.value
  }, ''),
  m('.label', 'Nights'),
  m('input.input[type="number"]', {
    value: vnode.attrs.data.nights,
    onchange:(e) => vnode.attrs.data.nights = e.target.value
  }, ''),
  m('.label', 'Female Students'),
  m('input.input[type="number"]', {
    value: vnode.attrs.data.students_female,
    onchange:(e) => vnode.attrs.data.students_female = e.target.value
  }, ''),
  m('.label', 'Male Students'),
  m('input.input[type="number"]', {
    value: vnode.attrs.data.students_male,
    onchange:(e) => vnode.attrs.data.students_male = e.target.value
  }, ''),
  m('.label', 'Advisors'),
  m('input.input', {
    value: vnode.attrs.data.advisors,
    onchange:(e) => vnode.attrs.data.advisors = e.target.value
  }, ''),
  m('.label', 'Evaluation Complete'),
  m('label',
    m('input[type="checkbox"]', {
      checked: vnode.attrs.data.evaluation === '1' || vnode.attrs.data.evaluation === true,
      onclick: (e) => {
        vnode.attrs.data.evaluation = e.target.checked;
      }
    }, ''), ''),
  m('.label', 'Summary Complete'),
  m('label',
    m('input[type="checkbox"]', {
      checked: vnode.attrs.data.summary === '1' || vnode.attrs.data.summary === true,
      onclick: (e) => {
        vnode.attrs.data.summary = e.target.checked;
      }
    }, ''), ''),
  m('.label', 'Dark Sky Tour Given'),
  m('label',
    m('input[type="checkbox"]', {
      checked: vnode.attrs.data.darksky === '1' || vnode.attrs.data.darksky === true,
      onclick: (e) => {
        vnode.attrs.data.darksky = e.target.checked;
      }
    }, ''), ''),
  m('.label', 'Notes'),
  m('input.input', {
    value: vnode.attrs.data.notes,
    onchange:(e) => vnode.attrs.data.notes = e.target.value
  }, ''),
  m('.label', 'Contact'),
  m('input.input', {
    value: vnode.attrs.data.contact,
    onchange:(e) => vnode.attrs.data.contact = e.target.value
  }, ''),
];

let visitCard = {
  delete: {modal:false, type:'visit', func: deleteVisit},
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
    m('span', {style:'padding:0 5px;'},`${unixToDate(vnode.attrs.visit.start_date)}`),
    m('span', {style:'font-weight: bold;'},`End:`),
     m('span', {style:'padding:0 5px;'},`${unixToDate(vnode.attrs.visit.end_date)}`),
    g.groupLookup[vnode.attrs.visit.group_id] ? m('span', {style:"font-weight:bold;"}, g.groupLookup[vnode.attrs.visit.group_id].name) : null,
    vnode.state.open ? m('button.button.is-danger.is-small.is-pulled-right',
      {onclick:_ => {
        vnode.state.delete.modal = true;
        vnode.state.delete.id = vnode.attrs.visit.id;
        if (vnode.attrs.visit.group_id) vnode.state.delete.name = g.groupLookup[vnode.attrs.visit.group_id].name;
      }}, 'Delete') : null,
    vnode.state.open ? m('button.button.is-primary.is-small.is-pulled-right',
      {onclick:_ => {
        vnode.attrs.editModal.modal = true;
        vnode.attrs.editModal.data = Object.assign({}, vnode.attrs.visit);
      }}, 'Edit') : null,
    vnode.state.open ? m('',[
      vnode.attrs.visit.contact ? m('',[
        m('','Contact:'),
        m('p.box',vnode.attrs.visit.contact)
      ]) : null,
      vnode.attrs.visit.days || vnode.attrs.visit.nights || vnode.attrs.visit.advisors ||
        vnode.attrs.visit.students_female || vnode.attrs.visit.students_male ? m('',[
        m('','Counts:'),
        m('.box',[
          vnode.attrs.visit.days ? m('.tag.is-medium', `Days: ${vnode.attrs.visit.days} `): null,
          vnode.attrs.visit.nights ? m('.tag.is-medium', `Nights: ${vnode.attrs.visit.nights}`): null,
          vnode.attrs.visit.advisors ? m('.tag.is-medium', `Advisors: ${vnode.attrs.visit.advisors} `): null,
          vnode.attrs.visit.students_female ? m('.tag.is-medium', `Female Students: ${vnode.attrs.visit.students_female}`): null,
          vnode.attrs.visit.students_male ? m('.tag.is-medium', `Male Students: ${vnode.attrs.visit.students_male}`): null,
        ])
      ]): null,
      vnode.attrs.visit.darksky === '1' || vnode.attrs.visit.evaluation === '1' ||
        vnode.attrs.visit.summary === '1' ? m('', [
        m('', 'Completed:'),
        m('.box',[
          vnode.attrs.visit.darksky === '1' ? m('.tag.is-medium', 'Dark Sky Tour') : null,
          vnode.attrs.visit.evaluation === '1' ? m('.tag.is-medium', 'Evaluation') : null,
          vnode.attrs.visit.summary === '1' ? m('.tag.is-medium', 'Summary') : null,
        ])
      ]): null,
      vnode.attrs.visit.notes ? m('', [
        m('', 'Notes'),
        m('.box', m('', vnode.attrs.visit.notes))
      ]) : null,
    ]) : null,
    vnode.state.delete.modal ? m(deleteModal, vnode.state.delete) : null
  ])
};

export default {
  oninit:(vnode) => {
    vnode.state.add = {modal:false, type: 'visit', func:addVisit, body: addVisitModalBody};
    vnode.state.edit = {modal:false, type: 'visit', func:editVisit, body:editVisitModalBody};//must be passed to each visitCard so editModal can be triggered
    if (g.visits.length === 0) getVisits();
    if (g.groups.length === 0) getGroups();
  },
  view:(vnode) => m('',[
    m('.level',[
      m('.level-left', m('h1.title','Visits')),
      m('.level-right',m('button.button.is-primary.add-button', {onclick:function(){ vnode.state.add.modal = true;}} ,'Add Visit')),
    ]),
    m(addVisitModal, vnode.state.add),
    m(editVisitModal, vnode.state.edit),
    g.visits.map((v)=> m(visitCard, {visit:v,editModal:vnode.state.edit})),//becomes vnode.attrs of visitCard
  ])
};
