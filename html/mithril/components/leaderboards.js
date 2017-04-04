var leaderboard = {
  //oninit:(vnode)=> console.log(vnode.attrs.name, vnode.attrs),
  view:(vnode)=> m('',[
    m(`#leaderboard${vnode.attrs.id}`,JSON.stringify(vnode.attrs)),
  ]),
  oncreate:(vnode) => {
    let cols = [['x']];
    vnode.attrs.data.forEach((e,idx) => {
      cols[0].push(e.group_name);
      let row = [e.group_name];
      for(var i=0; i < idx; i++){ row.push(null); }
      row.push(e.per_day);
      cols.push(row);
    });
    c3.generate({
      bindto: `#leaderboard${vnode.attrs.id}`,
      data: {
        x : 'x',
        columns: cols,
        type: 'bar',
        groups : [vnode.attrs.data.map((e) => e.group_name)],
      },
      legend: { hide: true },
      axis: { x: { type: 'category' },  y: { label: vnode.attrs.unit }, },
      title: { text: `${vnode.attrs.name}` },
      bar: { width: { ratio: 0.5 } }
    });
  }
};


export default {
  leaderboards:{},
  getLeaderboard:(vnode, sensor_info) => {
    //TODO limit to date range using &start=<dateTimestamp>&end=<dateTimestamp>,
    m.request(`/api/open/leaderboard.php?sensor_id=${sensor_info.id}`).then(
      (r) => {
        if (r.length === 0) return;
        vnode.state.leaderboards[sensor_info.id] = sensor_info;
        vnode.state.leaderboards[sensor_info.id].data = r;
      },
      (e) => console.log(e)
    );
  },
  oninit:(vnode) => {
    m.request('/api/open/sensor/types.php').then(
      (r) => r.forEach((s)=> vnode.state.getLeaderboard(vnode, s)),
      (e) => console.log(e)
    );
  },
  view:(vnode) => m('',[
    m('.title', `Leaderboard${Object.keys(vnode.state.leaderboards).length>1?'s':''}`),
    Object.keys(vnode.state.leaderboards).map((l) => m(leaderboard, vnode.state.leaderboards[l])),
  ]),
};
