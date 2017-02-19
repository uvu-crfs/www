import {sqlRequest, addNotification} from '/mithril/utils.js';

export default {
  oninit:function(vnode){ vnode.state = { sql:{last:''} }; },
  view: function(vnode){ return m('',[
    m('a[href="phpinfo.php"]', 'PHP info'),
    m('.title', "Developer Tools"),
    m('',[
      m('.subtitle', 'Notifications'),
      m('form',[
        m('input',{
          onchange:function(e){ vnode.state.notification = e.target.value; },
          placeholder:'Notification text'
        },''),
        m('button',{
          type:'submit',
          onclick:function(e){e.preventDefault(); addNotification(vnode.state.notification); }
        },'submit')
      ])
    ]),
    m('',[
      m('form',[
        m('.subtitle', 'SQL Requests'),
        m('input',{
          onchange:function(e){ vnode.state.sql.query = e.target.value; },
          placeholder:'SQL statement',
          value: vnode.state.sql.query
        },''),
        m('button',{
          type:'submit',
          onclick:function(e){e.preventDefault(); sqlRequest(vnode); }
        },'submit'),
        m('br',''),
        vnode.state.sql.last.length > 0 ? m('', 'Last request: ' + vnode.state.sql.last) : null,
        m('',JSON.stringify(vnode.state.sql.response)),
      ])
    ])
  ]);}
};
