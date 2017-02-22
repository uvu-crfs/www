import {addAffiliation, addDepartment, addCourse} from '/mithril/utils.js';

export var deleteModal = {
  oninit:(vnode) => {
    vnode.state.close = _ => vnode.attrs.modal = false;
    vnode.state.data = vnode.attrs.data || {};
  },
  view:(vnode) => vnode.attrs.modal ? m('.modal.is-active', [
    m('.modal-background', {onclick:vnode.state.close }, ''),
    m('.modal-card',[
      m('header.modal-card-head',[
        m('p.modal-card-title', `Delete ${vnode.attrs.type}`),
        m('button.delete', {onclick:vnode.state.close }, ''),
      ]),
      m('section.modal-card-body', [
        m('p', `Are you sure that you want to delete the '${vnode.attrs.name}' ${vnode.attrs.type}? This cannot be undone.`),
      ]),
      m('footer.modal-card-foot',[
        m('a.button.is-danger', {onclick: _ => vnode.attrs.func(vnode) }, 'Delete'),
        m('a.button',  {onclick:vnode.state.close }, 'Cancel')
      ])
    ])
  ]) : null
};

export var addModal = {
  oninit:(vnode) => {
    vnode.state.close = _ => vnode.attrs.modal = false;
    vnode.state.data = vnode.attrs.data || {};
  },
  view:(vnode) => vnode.attrs.modal ? m('.modal.is-active', [
    m('.modal-background', {onclick:vnode.state.close }, ''),
    m('.modal-card',[
      m('header.modal-card-head',[
        m('p.modal-card-title', `Add ${vnode.attrs.type}`),
        m('button.delete', {onclick:vnode.state.close }, ''),
      ]),
      m('section.modal-card-body', vnode.attrs.body(vnode)),
      m('footer.modal-card-foot',[
        m('a.button.is-success', {onclick: _ => vnode.attrs.func(vnode) }, 'Add'),
        m('a.button',  {onclick:vnode.state.close }, 'Cancel')
      ])
    ])
  ]) : null
};

export var addAffiliationModal = {
  oninit:(vnode) => {
    vnode.state = vnode.attrs;
    vnode.state.data = {};
    vnode.state.type = 'affiliation';
    vnode.state.func = addAffiliation;
    vnode.state.body = (vnode) => [
      m('.label', 'Name'),
      m('input.input', {onchange:(e) => vnode.state.data.name = e.target.value}, ''),
    ];
  },
  view:(vnode) => m(addModal, vnode.state),
};

export var addDepartmentModal = {
  oninit:(vnode) => {
    vnode.state = vnode.attrs;
    vnode.state.data = vnode.attrs.data || {};
    vnode.state.type = 'department';
    vnode.state.func = addDepartment;
    vnode.state.body = (vnode) => [
      m('.label', 'Name'),
      m('input.input', {onchange:(e) => vnode.state.data.name = e.target.value}, ''),
    ];
  },
  view:(vnode) => m(addModal, vnode.state),
};

export var addCourseModal = {
  oninit:(vnode) => {
    vnode.state = vnode.attrs;
    vnode.state.data = vnode.attrs.data || {};
    vnode.state.type = 'course';
    vnode.state.func = addCourse;
    vnode.state.body = (vnode) => [
      m('.label', 'Name'),
      m('input.input', {onchange:(e) => vnode.state.data.name = e.target.value}, ''),
    ];
  },
  view:(vnode) => m(addModal, vnode.state),
};
