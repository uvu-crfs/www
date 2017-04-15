import {pikaday} from '/mithril/components/pikaday.js';

var leaderboard = {
  leaders:[], active:[],
  getLeaderboard:(vnode, sensor_info) => {
    let start = '', end = '';
    if (localStorage.getItem("leaderboardStart") !== null) {
      start = `&start=${localStorage.getItem("leaderboardStart")}`;
    }
    if (localStorage.getItem("leaderboardEnd") !== null) {
      end = `&end=${localStorage.getItem("leaderboardEnd")}`;
    }
    Promise.all([
      m.request(`/api/open/leaderboard.php?sensor_id=${sensor_info.id}${start}${end}`)
        .then( (r) => vnode.state.leaders = r, window.requestError ),
      m.request(`/api/open/active_usage.php?sensor_id=${sensor_info.id}${start}${end}`)
        .then( (r) => vnode.state.active = r, window.requestError ),
    ])
    .then(_ => vnode.state.updateC3Columns(vnode))
    .then(_ => vnode.state.updateChart(vnode))
    ;
  },
  columns: [],
  concat: [],
  updateC3Columns:(vnode) => {
    let cols = [['x']];
    vnode.state.concat = vnode.state.active.concat(vnode.state.leaders);
    vnode.state.concat.forEach((e,idx) => {
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
        groups : [vnode.state.concat.map((e) => e.group_name)],
      },
      color: { pattern: g.uvuColors.sort(_ => 0.5 - Math.random()) },
      legend: { hide: true },
      axis: { x: { type: 'category' },  y: { label: vnode.attrs.unit }, },
      title: { text: `${vnode.attrs.name}` },
      bar: { width: { ratio: 0.5 } }
    });
  },
  updateChart:(vnode) => {
    if(vnode.state.chart) vnode.state.chart.destroy();
    vnode.state.generateChart(vnode);
  },
  view:(vnode)=> m(`#leaderboard${vnode.attrs.id}`, [
    m('', JSON.stringify(vnode.attrs)),
    m('', JSON.stringify(vnode.state.concat)),
  ]),
  oninit:(vnode) => vnode.state.getLeaderboard(vnode, vnode.attrs),
  oncreate:(vnode) => vnode.state.generateChart(vnode),
  onremove:(vnode) => vnode.state.chart.destroy(),
};

export default {
  leaderboards:[],
  startDate:{},
  endDate:{},
  oninit:(vnode) => {
    m.request('/api/open/sensor/types.php')
      .then((r) => vnode.state.leaderboards = r, window.requestError );
    vnode.state.updateGraphs = _ =>  {
      let tmp = JSON.parse(JSON.stringify(vnode.state.leaderboards));
      vnode.state.leaderboards = [];
      m.redraw(); vnode.state.leaderboards = tmp;
    };
  },
  view:(vnode) => m('',[
    m('.title', `Leaderboard${vnode.state.leaderboards.length>1?'s':''}`),
    m('',[
      m('span', 'Start:'),
      m(pikaday,{ htmlId:'leaderboardStart',
        createFunc: _ => localStorage.getItem('leaderboardStart'),
        changeFunc: (date) => {localStorage.setItem('leaderboardStart', date); vnode.state.updateGraphs();}
      }),
      m('span', 'End:'),
      m(pikaday,{ htmlId:'leaderboardEnd',
        createFunc: _ => localStorage.getItem('leaderboardEnd'),
        changeFunc: (date) => {localStorage.setItem('leaderboardEnd', date); vnode.state.updateGraphs();}
      }),
    ]),
    vnode.state.leaderboards.map((l) => m(leaderboard, l)),
  ]),
};
