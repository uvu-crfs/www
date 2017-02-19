//TODO Fix notifications

export var notifications = [];
export var getNotifications = _ => notifications;
export var addNotification = function(text){
  notifications.push(text); m.redraw();
  setTimeout(function () {notifications.shift(); m.redraw(); }, 4000);
};
export var clearNotifications = _ => notifications = []



export var sqlRequest = function(vnode){
  vnode.state.sql.last = vnode.state.sql.query;
  m.request({method:'POST', url:'/login/sql.php', data:{query:vnode.state.sql.query}})
  .then(
    function(r){
      vnode.state.sql.response = r;
    },
    function(r){ console.log('Error', r); vnode.state.sql.response = r; }
  )
  .then(function(){ vnode.state.sql.query = ''; m.redraw(); })
  ;
};
