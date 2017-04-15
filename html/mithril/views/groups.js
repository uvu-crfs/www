import {getGroups, addGroup, deleteGroup, getAttachedCourses,
  getAttachedDepartments, getAttachedAffiliations} from '/mithril/utils.js';
import {addModal, deleteModal, attachCourseToGroupModal} from '/mithril/components/modals.js';

let groupDetails = {
  oninit:(vnode) => {
    vnode.state.group = vnode.attrs;
    vnode.state.attachCourseModal = {group_id:vnode.state.group.id};
    if(!vnode.state.group.courses) getAttachedCourses(vnode.state.group.id);
    if(!vnode.state.group.departments) getAttachedDepartments(vnode.state.group.id);
    if(!vnode.state.group.affiliations) getAttachedAffiliations(vnode.state.group.id);
  },
  view:(vnode) => vnode.attrs.detailsOpen ? m('',[
    m(attachCourseToGroupModal, vnode.state.attachCourseModal),
    vnode.attrs.contact ? m('',[
      m('', `Contact Name: ${vnode.attrs.contact.name}`),
      m('button.button.is-small', {onclick:_=> vnode.state.attachCourseModal.modal = true },'Attach affiliation/department/course'),
      m('',[
        (vnode.state.group.affiliations && vnode.state.group.affiliations.length > 0) ? m('',[
          m('span','Affiliations:'),
          vnode.state.group.affiliations.map((v) => m('span.tag', v.affiliation_name,
          m('button.delete.is-small', {onclick:_ => {
              m.request({method:'DELETE', url:'api/admin/lookup_group_affiliation.php',
                data:{'group_id':v.group_id, 'affiliation_id':v.affiliation_id}})
              .then( _ => getAttachedAffiliations(v.group_id), window.requestError );
          }})
          ))
        ]):null,
        (vnode.state.group.departments && vnode.state.group.departments.length > 0) ? m('',[
          m('span','Departments:'),
          vnode.state.group.departments.map((v) => m('span.tag', v.concat,
            m('button.delete.is-small', {onclick:_ => {
                m.request({method:'DELETE', url:'api/admin/lookup_group_department.php',
                  data:{'group_id':v.group_id, 'department_id':v.department_id}})
                .then( _ => getAttachedDepartments(v.group_id), window.requestError );
            }})
          ))
        ]):null,
        (vnode.state.group.courses && vnode.state.group.courses.length > 0) ? m('',[
          m('span','Courses:'),
          vnode.state.group.courses.map((v) => m('span.tag', v.concat,
            m('button.delete.is-small', {onclick:_ => {
                console.log(v);
                m.request({method:'DELETE', url:'api/admin/lookup_group_course.php',
                  data:{'group_id':v.group_id, 'course_id':v.course_id}})
                .then( _ => getAttachedAffiliations(v.group_id), window.requestError );
            }})
          )),
        ]) : null,
      ]),
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
    if (g.groups.length === 0) getGroups();
    vnode.state.openDetails = (group) => {
      group.detailsOpen = !group.detailsOpen;
      group.contact = {name:'This will get update one day'};
    };
  },
  view:(vnode) => m('',[
    m('.level',[
      m('.level-left', m('.title','Groups')),
      m('.level-right', m('button.button.is-primary.add-button',
        {onclick:_ => vnode.state.add.modal = true}, 'Add')),
    ]),
    m(addModal, vnode.state.add),
    m(deleteModal, vnode.state.delete),
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
    ]))
  ])
};
