var leaderboard = {
  data:[],
  getLeaderboard:(vnode, sensor_info) => {
    //TODO limit to date range using &start=<dateTimestamp>&end=<dateTimestamp>,
    m.request(`/api/open/leaderboard.php?sensor_id=${sensor_info.id}`).then(
      (r) => { vnode.state.data = r; vnode.state.updateC3Columns(vnode); },
      window.requestError
    ).then(_ => vnode.state.updateChart(vnode))
    ;
  },
  columns: [],
  updateC3Columns:(vnode) => {
    let cols = [['x']];
    vnode.state.data.forEach((e,idx) => {
      cols[0].push(e.group_name);
      let row = [e.group_name];
      for(var i=0; i < idx; i++){ row.push(null); }
      row.push(e.per_day);
      cols.push(row);
    });
    vnode.state.columns = cols;
  },
  generateChart:(vnode) => {
    vnode.state.chart = c3.generate({
      bindto: `#leaderboard${vnode.attrs.id}`,
      data: {
        x : 'x',
        columns: vnode.state.columns,
        type: 'bar',
        groups : [vnode.state.data.map((e) => e.group_name)],
      },
      color: { pattern: g.uvuColors.sort(_ => 0.5 - Math.random()) },
      legend: { hide: true },
      axis: { x: { type: 'category' },  y: { label: vnode.attrs.unit }, },
      title: { text: `${vnode.attrs.name}` },
      bar: { width: { ratio: 0.5 } }
    });
  },
  updateChart:(vnode) => {
    vnode.state.chart.destroy();
    vnode.state.generateChart(vnode);
  },
  view:(vnode)=> m(`#leaderboard${vnode.attrs.id}`, [
    m('', JSON.stringify(vnode.attrs)),
    m('', JSON.stringify(vnode.state.data)),
  ]),
  oninit:(vnode) => vnode.state.getLeaderboard(vnode, vnode.attrs),
  oncreate:(vnode) => vnode.state.generateChart(vnode),
  onremove:(vnode) => vnode.state.chart.destroy(),
};

export default {
  leaderboards:[],
  oninit:(vnode) => {
    m.request('/api/open/sensor/types.php')
      .then((r) => vnode.state.leaderboards = r, window.requestError );
  },
  view:(vnode) => m('',[
    m('.title', `Leaderboard${vnode.state.leaderboards.length>1?'s':''}`),
    vnode.state.leaderboards.map((l) => m(leaderboard, l)),
  ]),
};
