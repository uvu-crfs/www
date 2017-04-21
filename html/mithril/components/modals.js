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
  oninit:(vnode) => vnode.state.close = _ => vnode.attrs.modal = false,
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
      vnode.children.length === 0 ? m('section.modal-card-body', vnode.attrs.body(vnode)) : null,
      vnode.children.length !== 0 ? m('section.modal-card-body', vnode.children) : null,
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
  },
  view:(vnode) => m(addModal, vnode.state, [
    m('.label', 'Name'),
    m('input.input', {onchange:(e) => vnode.state.data.name = e.target.value}, ''),
  ]),
};

export var addDepartmentModal = {
  oninit:(vnode) => {
    vnode.state = vnode.attrs;
    vnode.state.data = vnode.attrs.data || {};
    vnode.state.type = 'department';
    vnode.state.func = addDepartment;
  },
  view:(vnode) => m(addModal, vnode.state, [
    m('.label', 'Name'),
    m('input.input', {onchange:(e) => vnode.state.data.name = e.target.value}, ''),
  ]),
};

export var addCourseModal = {
  oninit:(vnode) => {
    vnode.state = vnode.attrs;
    vnode.state.data = vnode.attrs.data || {};
    vnode.state.type = 'course';
    vnode.state.func = addCourse;
  },
  view:(vnode) => m(addModal, vnode.state, [
    m('.label', 'Name'),
    m('input.input', {onchange:(e) => vnode.state.data.name = e.target.value}, ''),
  ]),
};

export var addVisitModal = {
  oninit:(vnode) => {
    vnode.state.close = _ => {
      vnode.attrs.modal = false;
      vnode.state.data = {};
    };
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

export var editGroupModal = {
  oninit:(vnode) => {
    vnode.state.close = _ => vnode.attrs.modal = false;
    vnode.state.data = vnode.attrs.data || {};
  },
  view:(vnode) => vnode.attrs.modal ? m('modal.is-active', {
    onkeyup:(e) => { if (e.keyCode === 27 /*esc*/)  vnode.state.close(); }
  },[
    m('.modal-background', {onclick:vnode.state.close }, ''),
    m('form.modal-card', [
      m('header.modal-card-head',[
        m('p.modal-card-title', `Update ${vnode.attrs.type}`),
        m('.delete', {onclick:vnode.state.close }, ''),
      ]),
      vnode.children.length === 0 ? m('section.modal-card-body', vnode.attrs.body(vnode)) : null,
      vnode.children.length !== 0 ? m('section.modal-card-body', vnode.children) : null,
      m('footer.modal-card-foot',[
        m('a.button.is-primary[type=submit]', {onclick: _ => vnode.attrs.func(vnode) }, 'Update'),
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
    vnode.state.data = {group_id: vnode.attrs.group_id};
    vnode.state.data.newAffil = {modal:false};
    vnode.state.type = 'course to group';
  },
  onupdate:(vnode) => {
    $(`#affiliationSelect`).select2({ placeholder: "Choose an affiliation", width : '340px'});
    $(`#departmentSelect`).select2({ placeholder: "Choose an department", width : '340px'});
    $(`#courseSelect`).select2({ placeholder: "Choose an course", width : '340px'});
  },
  view:(vnode) => m(addModal, vnode.state, [
    m('.label', 'Affiliation'),
    m('select#affiliationSelect', {onchange:(e) => {
      vnode.state.data.affiliation = g.affiliations[e.target.value];
      vnode.state.data.affiliation_id = vnode.state.data.affiliation.id;
      vnode.attrs.func = attachAffiliationToGroup;
      getDepartments(vnode.state.data.affiliation.id);
    }},
      blankFirstOption(g.affiliations.map((v,i) => m('option', {value:i} ,v.name)))
    ),
    // m('button.button.is-small', {onclick:() => vnode.state.data.newAffil.modal = true },"New"),
    m(addAffiliationModal, vnode.state.data.newAffil),
    (vnode.state.data.affiliation && vnode.state.data.affiliation.departments) ? m('', [
      m('.label', 'Department'),
      m('select#departmentSelect', {onchange:(e) => {
          vnode.state.department = vnode.state.data.affiliation.departments[e.target.value];
          vnode.state.data.department_id = vnode.state.department.id;
          vnode.attrs.func = attachDepartmentToGroup;
          getCourses(vnode.state.department);
      }},
        blankFirstOption(vnode.state.data.affiliation.departments.map((v, i) => m('option', {value:i}, v.name)))
      ),
      (vnode.state.department && vnode.state.department.courses) ? m('', [
        m('.label', 'Course'),
        m('select#courseSelect', {onchange:(e) => {
            vnode.state.course = vnode.state.department.courses[e.target.value];
            vnode.state.data.course_id = vnode.state.course.id;
            vnode.attrs.func = attachCourseToGroup;
        }},
          blankFirstOption(vnode.state.department.courses.map((v, i) => m('option', {value:i}, v.name)))
        ),
      ]) : null,
    ]) : null,
  ]),
};
