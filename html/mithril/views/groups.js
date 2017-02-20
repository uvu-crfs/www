import {getGroups} from '/mithril/utils.js';

let groupDetails = {
  onchange:(vnode) => console.log(vnode.attrs),
  view:(vnode) => vnode.attrs.detailsOpen ? m('',[
    vnode.attrs.contact ? m('',[
      m('', `Contact Name: ${vnode.attrs.contact.name}`),
    ]) : null,
  ]) : null,
};

export default {
  oninit: (vnode) => {
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
        {onclick:_ => console.log('Add Group')} ,'Add')),
    ]),
    g.groups.map((g) => m('.card', {style:'padding: 10px;'}, [
      m('',[
        m('button.button.is-small',
          {style:'margin:0 10px 0 0;', onclick:(e) => vnode.state.openDetails(g) },[
          m('', {style:'padding:0 2px;'}, 'Details'),
          !g.detailsOpen ? m('.fa.fa-angle-up','') : null,
          g.detailsOpen ? m('.fa.fa-angle-down','') : null,
        ]),
        m('span', g.name),
        g.detailsOpen ? m('button.button.is-danger.is-small.is-pulled-right',
        {onclick:_ => console.log(`Need to delete ${g.id}`)},
        'Delete') : null,
      ]),
      m(groupDetails, g),

    ]))
  ])
};
