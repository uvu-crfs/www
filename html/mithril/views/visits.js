export default {
  view:(vnode) => m('',[
    m('.level',[
      m('.level-left', m('.title','Visits')),
      //m('.level-right',m('button.button.is-primary', {onclick:function(){ vnode.state.add.modal = true; }} ,'Add')),
    ]),
  ])
};
