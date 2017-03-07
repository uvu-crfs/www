import {sqlRequest, addNotification, getTimeStamp, htmlDateToUnix, unixToDate, unixToTime} from '/mithril/utils.js';

export default {
  oninit:function(vnode){
    vnode.state = { sql:{last:''}};
    vnode.state.date = "2017-03-06";
    vnode.state.unix = getTimeStamp();
  },
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
    ]),
    m('',[
      m('.subtitle', 'Time'),
      m('button', {
        onclick:_ => vnode.state.currentTime = getTimeStamp()
      },'Current Unix Time'),
      m('span',vnode.state.currentTime),
      m('br'),
      m('input[type=date]', {
        placeholder: 'Unix timestamp',
        value: vnode.state.date,
        oninput:(e) =>  vnode.state.date = e.target.value
      }, ''),
      vnode.state.date ? m('span', "Value:") : null,
      m('span', vnode.state.date),
      vnode.state.date ? m('span', {style:"padding:0 5px;"}, "htmlDateToUnix():") : null,
      m('span', htmlDateToUnix(vnode.state.date)),
      m('br'),
      m('input[type=number]', {
        placeholder: 'Unix timestamp',
        value: vnode.state.unix,
        oninput:(e) =>  vnode.state.unix = parseInt(e.target.value)
      }, ''),
      vnode.state.unix ? m('span', "Date:") : null,
      m('span', unixToDate(vnode.state.unix)),
      vnode.state.unix ? m('span', {style:"padding:0 5px;"}, "Time:") : null,
      m('span', unixToTime(vnode.state.unix)),
    ])
  ]);}
};
