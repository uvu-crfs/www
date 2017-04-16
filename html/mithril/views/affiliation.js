import {addAffiliationModal, addDepartmentModal, addCourseModal, deleteModal} from '/mithril/components/modals.js';
import {card, getAffiliations, deleteAffiliation, deleteDepartment,
  getDepartments, deleteCourse, getCourses} from '/mithril/utils.js';


let departmentDetails = {
  oninit:(vnode) => {
    if (!vnode.attrs.department.courses) {
        vnode.attrs.department.courses = [];
        getCourses(vnode.attrs.department);
    }
    vnode.state.add = {modal:false, data:{department_id:vnode.attrs.department.id, department:vnode.attrs.department}};
    vnode.state.delete = {modal:false, type:'course', func:deleteCourse};
  },
  view:(vnode) => m('.padding-department',[
    m('.level.department',[
      m('.level-left.department', m('h3.title.is-5',[
        m('span', 'Courses'),
        m('button.button.is-small.is-light',
           {onclick:_ => {vnode.state.add.modal = true; console.log(vnode.state.add); } }, 'Add'),
      ])),
    ]),
    m(addCourseModal, vnode.state.add),
    m(deleteModal, vnode.state.delete),
    //vnode.attrs.department.courses.map((v) => JSON.stringify(v)),
    vnode.attrs.department.courses ? vnode.attrs.department.courses.map((v) => m(card, {
      id: v.id,
      name: v.name,
      details:'', //TODO if there are course details ever add them here
      delete:vnode.state.delete,
    })) : null,
  ])
};

let affiliationDetails = {
  oninit:(vnode) => {
    if (!vnode.attrs.affiliation.departments) {
        vnode.attrs.affiliation.departments = [];
        getDepartments(vnode.attrs.affiliation.id);
    }
    vnode.state.add = {modal:false, data:{affiliation_id:vnode.attrs.affiliation.id}};
    vnode.state.delete = {modal:false, type:'department', func:deleteDepartment};
  },
  onchange:(vnode) => console.log(vnode.attrs),
  view:(vnode) => m('',[
    m('.level',[
      m('.level-left', m('h2.title.is-4',[
        m('span', 'Departments'),
        m('button.button.is-small.is-light',
           {onclick:_ => {vnode.state.add.modal = true; console.log(vnode.state.add); } }, 'Add'),
      ])),
    ]),
    m(addDepartmentModal, vnode.state.add),
    m(deleteModal, vnode.state.delete),
    //vnode.attrs.affiliation.departments.map((v) => JSON.stringify(v)),
    vnode.attrs.affiliation.departments ? vnode.attrs.affiliation.departments.map((v) => m(card, {
      id: v.id,
      name: v.name,
      department: v,
      details:departmentDetails,
      delete:vnode.state.delete,
    })) : null,
  ])
};

export default {
  oninit:(vnode) => {
    if (g.affiliations.length === 0) getAffiliations();
    vnode.state.add = {modal:false};
    vnode.state.delete = {modal:false, type:'affiliation', func:deleteAffiliation};
  },
  view:(vnode) => m('',[
    m('.level',[
      m('.level-left', m('h1.title','Affiliations')),
      m('.level-right',m('button.button.is-primary.add-button',
        {onclick:_ => {vnode.state.add.modal = true; console.log(vnode.state.add);} }, 'Add')),
    ]),
    m(addAffiliationModal, vnode.state.add),
    m(deleteModal, vnode.state.delete),
    //g.affiliations.map((v) => m('', JSON.stringify(v))),
    g.affiliations.map((v) => m(card, {
      id: v.id,
      name: v.name,
      affiliation: v,
      details:affiliationDetails,
      delete:vnode.state.delete,
    })),
  ])
};
