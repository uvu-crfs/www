import {addAffiliation, addDepartment, addCourse, blankFirstOption,
  getAffiliations, getDepartments, getCourses, attachCourseToGroup,
  attachDepartmentToGroup, attachAffiliationToGroup
} from '/mithril/utils.js';

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
  view:(vnode) => vnode.attrs.modal ? m('modal.is-active', {
    onkeyup:(e) => { if (e.keyCode === 27 /*esc*/)  vnode.state.close(); }
  },[
    m('.modal-background', {onclick:vnode.state.close }, ''),
    m('form.modal-card', {onsubmit:e => {
      e.preventDefault();
      vnode.attrs.func(vnode);
      vnode.state.close();
    }}, [
      m('header.modal-card-head',[
        m('p.modal-card-title', `Add ${vnode.attrs.type}`),
        m('.delete', {onclick:vnode.state.close }, ''),
      ]),
      m('section.modal-card-body', vnode.attrs.body(vnode)),
      m('footer.modal-card-foot',[
        m('input.button.is-primary[type=submit][value="Add"]'),
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

export var addVisitModal = {
  oninit:(vnode) => {
    vnode.state.close = _ => {
      vnode.attrs.modal = false;
      vnode.state.data = {};
    };
    // vnode.state.data = vnode.attrs.data || {};
    vnode.state.data = {};
  },
  view:(vnode) => vnode.attrs.modal ? m('.modal.is-active', [
    m('.modal-background', {onclick:vnode.state.close }, ''),
    m('.modal-card',[
      m('header.modal-card-head',[
        m('p.modal-card-title', `Add Visit`),
        m('button.delete', {onclick:vnode.state.close }, ''),
      ]),
      m('section.modal-card-body', vnode.attrs.body(vnode)),
      m('footer.modal-card-foot',[
        m('a.button.is-primary', {onclick: _ => vnode.attrs.func(vnode) }, 'Add'),
        m('a.button',  {onclick:vnode.state.close }, 'Cancel')
      ])
    ])
  ]) : null
};

export var editVisitModal = {
  oninit:(vnode) => {
    vnode.state.close = _ => vnode.attrs.modal = false;
    vnode.state.data = vnode.attrs.data || {};
  },
  view:(vnode) => vnode.attrs.modal ? m('.modal.is-active', [
    m('.modal-background', {onclick:vnode.state.close }, ''),
    m('.modal-card',[
      m('header.modal-card-head',[
        m('p.modal-card-title', `Edit Visit`),
        m('button.delete', {onclick:vnode.state.close }, ''),
      ]),
      m('section.modal-card-body', vnode.attrs.body(vnode)),
      m('footer.modal-card-foot',[
        m('a.button.is-primary', {onclick: _ => vnode.attrs.func(vnode) }, 'Update'),
        m('a.button',  {onclick:vnode.state.close }, 'Cancel')
      ])
    ])
  ]) : null
};

export var attachCourseToGroupModal = {
  oninit:(vnode) => {
    if (g.affiliations.length === 0) getAffiliations();
    vnode.state = vnode.attrs;
    console.log(vnode.state);
    vnode.state.data = {group_id: vnode.state.group_id};
    vnode.state.data.newAffil = {modal:false};
    vnode.state.type = 'course to group';
    //vnode.state.func = attachCourseToGroup;
    vnode.state.body = (vnode) => [
      m('.label', 'Affiliation'),
      m('select', {onchange:(e) => {
        vnode.state.data.affiliation = g.affiliations[e.target.value];
        console.log(vnode.state.data.affiliation);
        vnode.state.data.affiliation_id = vnode.state.data.affiliation.id;
        vnode.attrs.func = attachAffiliationToGroup;
        getDepartments(vnode.state.data.affiliation.id);
      }},
        blankFirstOption(g.affiliations.map((v,i) => m('option', {value:i} ,v.name)))
      ),
      m('button.button.is-small', {onclick:() => vnode.state.data.newAffil.modal = true },"New"),
      m(addAffiliationModal, vnode.state.data.newAffil),
      (vnode.state.data.affiliation && vnode.state.data.affiliation.departments) ? m('', [
        m('.label', 'Department'),
        m('select', {onchange:(e) => {
            vnode.state.department = vnode.state.data.affiliation.departments[e.target.value];
            vnode.state.data.department_id = vnode.state.department.id;
            vnode.attrs.func = attachDepartmentToGroup;
            getCourses(vnode.state.department);
        }},
          blankFirstOption(vnode.state.data.affiliation.departments.map((v, i) => m('option', {value:i}, v.name)))
        ),
        (vnode.state.department && vnode.state.department.courses) ? m('', [
          m('.label', 'Course'),
          m('select', {onchange:(e) => {
              vnode.state.course = vnode.state.department.courses[e.target.value];
              console.log(vnode.state.course);
              vnode.state.data.course_id = vnode.state.course.id;
              vnode.attrs.func = attachCourseToGroup;
          }},
            blankFirstOption(vnode.state.department.courses.map((v, i) => m('option', {value:i}, v.name)))
          ),
        ]) : null,
      ]) : null,
    ];
  },
  view:(vnode) => m(addModal, vnode.state),
};
