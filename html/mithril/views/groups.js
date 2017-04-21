import {getGroup, getGroups, addGroup, editGroup, deleteGroup, getAttachedCourses,
  getAttachedDepartments, getAttachedAffiliations} from '/mithril/utils.js';
import {addModal, deleteModal, editGroupModal, attachCourseToGroupModal} from '/mithril/components/modals.js';

let groupDetails = {
  oninit:(vnode) => {
    vnode.state.group = vnode.attrs;
    vnode.state.attachCourseModal = {group_id:vnode.state.group.id};
  },
  onredraw:(vnode) => {
  },
  view:(vnode) => vnode.attrs.detailsOpen ? m('',[
    m(attachCourseToGroupModal, vnode.state.attachCourseModal),
    m('',[
      m('button.button.is-small', {onclick:_=> vnode.state.attachCourseModal.modal = true },'Attach affiliation/department/course'),
      m('',[
        (g.groupLookup[vnode.state.group.id].affiliations &&
          g.groupLookup[vnode.state.group.id].affiliations.length > 0) ? m('',[
          m('span','Affiliations:'),
          g.groupLookup[vnode.state.group.id].affiliations.map((v) => m('span.tag', v.affiliation_name,
            m('button.delete.is-small', {onclick:_ => {
                m.request({method:'DELETE', url:'api/admin/lookup_group_affiliation.php',
                  data:{'group_id':v.group_id, 'affiliation_id':v.affiliation_id}})
                .then( _ => getAttachedAffiliations(v.group_id), window.requestError );
            }})
          ))
        ]):null,
        (g.groupLookup[vnode.state.group.id].departments &&
          g.groupLookup[vnode.state.group.id].departments.length > 0) ? m('',[
          m('span','Departments:'),
          g.groupLookup[vnode.state.group.id].departments.map((v) => m('span.tag', v.concat,
            m('button.delete.is-small', {onclick:_ => {
                m.request({method:'DELETE', url:'api/admin/lookup_group_department.php',
                  data:{'group_id':v.group_id, 'department_id':v.department_id}})
                .then( _ => getAttachedDepartments(v.group_id), window.requestError );
            }})
          ))
        ]):null,
        (g.groupLookup[vnode.state.group.id].courses &&
          g.groupLookup[vnode.state.group.id].courses.length > 0) ? m('',[
          m('span','Courses:'),
          g.groupLookup[vnode.state.group.id].courses.map((v) => m('span.tag', v.concat,
            m('button.delete.is-small', {onclick:_ => {
                m.request({method:'DELETE', url:'api/admin/lookup_group_course.php',
                  data:{'group_id':v.group_id, 'course_id':v.course_id}})
                .then( _ => getAttachedCourses(v.group_id), window.requestError );
            }})
          )),
        ]) : null,
      ]),
    ]),
  ]) : null,
};

export default {
  oninit: (vnode) => {
    vnode.state.add = {modal:false, type: 'group', func: addGroup, data:{}};
    vnode.state.delete = {modal:false, type: 'group', func: deleteGroup};
    vnode.state.edit = {modal:false, type: 'group', func: editGroup, data:{}};
    if (g.groups.length === 0) getGroups();
    vnode.state.openDetails = (group) => {
      group.detailsOpen = !group.detailsOpen;
      if (g.groupLookup[group.id]){
        if(!g.groupLookup[group.id].courses) getAttachedCourses(group.id);
        if(!g.groupLookup[group.id].departments) getAttachedDepartments(group.id);
        if(!g.groupLookup[group.id].affiliations) getAttachedAffiliations(group.id);
      }
    };
  },
  view:(vnode) => m('',[
    m('.level',[
      m('.level-left', m('h1.title','Groups')),
      m('.level-right', m('button.button.is-primary.add-button',
        {onclick:_ => vnode.state.add.modal = true}, 'Add Group')),
    ]),
    m(addModal, vnode.state.add, [
      m('.label', 'Name'),
      m('input.input', {onchange:(e) => vnode.state.add.data.name = e.target.value}, ''),
    ]),
    m(deleteModal, vnode.state.delete),
    m(editGroupModal, vnode.state.edit, [
      m('.label', 'Name'),
      m('input.input', {
        value: vnode.state.edit.data.name,
        oninput:(e) => vnode.state.edit.data.name = e.target.value
      }, ''),
    ]),
    g.groups.map((g) => m('.card', {group:g, editModal:vnode.state.edit, style:'padding: 10px;'}, [
      m('',[
        m('button.button.is-small',
          {style:'margin:0 10px 0 0;', onclick:(e) => vnode.state.openDetails(g) },[
          m('', {style:'padding:0 2px;'}, 'Details'),
          m('.fa', {class:g.detailsOpen?'fa-angle-down':'fa-angle-up'}, ''),
        ]),
        m('span', g.name),
        //Delete Btn
        g.detailsOpen ? m('button.button.is-danger.is-small.is-pulled-right',
        {onclick:_ => {
          vnode.state.delete.modal = true;
          vnode.state.delete.id = g.id;
          vnode.state.delete.name = `${g.name}`;
        }},
        'Delete') : null,
        //Edit Btn
        g.detailsOpen ? m('button.button.is-primary.is-small.is-pulled-right',
          {onclick:_ => {
            vnode.state.edit.modal = true;
            vnode.state.edit.data.id = `${g.id}`;
            vnode.state.edit.data.name = `${g.name}`;
          }}, 'Edit') : null,
      ]),
      m(groupDetails, g),
    ]))
  ])
};
