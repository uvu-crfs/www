import {pikaday} from '/mithril/components/pikaday.js';
import {getVisits, unixToDate} from '/mithril/utils.js';

var leaderboard = {
  leaders:[], active:[],
  getLeaderboard:(vnode, sensor_info) => {
    let start = '', end = '', limit = '';
    if (localStorage.getItem("leaderboardStart") !== null) {
      start = `&start=${localStorage.getItem("leaderboardStart")}`;
    }
    if (localStorage.getItem("leaderboardEnd") !== null) {
      end = `&end=${localStorage.getItem("leaderboardEnd")}`;
    }
    if (localStorage.getItem("leaderboardCount") !== null) {
      limit = `&limit=${localStorage.getItem("leaderboardCount")}`;
      vnode.state.showLabels = localStorage.getItem("leaderboardCount") <= 25;
    }
    Promise.all([
      m.request(`/api/open/leaderboard.php?sensor_id=${sensor_info.id}${start}${end}${limit}`)
        .then( (r) => vnode.state.leaders = r, window.requestError ),
      m.request(`/api/open/active_usage.php?sensor_id=${sensor_info.id}${start}${end}`)
        .then( (r) => vnode.state.active = r, window.requestError ),
    ])
    .then(_ => vnode.state.updateChart(vnode));
  },
  generateChart:(vnode) => {
    let jsonData = vnode.state.active.concat(vnode.state.leaders);
    vnode.state.chart = c3.generate({
      bindto: `#leaderboard${vnode.attrs.id}`,
      color: { pattern: g.uvuColors.sort(_ => 0.5 - Math.random()) },
      data: {
        type:'bar', json: jsonData,
        keys: { x : 'visit_id', value: ['per_day'], title: 'group_name', },
        labels: { format: (v, id, i, j) => { if(vnode.state.showLabels) return v; }},
        color: (_,d) => g.uvuColors[d.x % g.uvuColors.length]
      },
      tooltip: {
        format: {
          name:  (name, ratio, id, index) => (g.visits.length === 0) ? '' :
            `${unixToDate(g.visitLookup[jsonData[index].visit_id].start_date)} -
            ${unixToDate(g.visitLookup[jsonData[index].visit_id].end_date)}`,
          value:(value, ratio, id) => `${value} ${vnode.attrs.unit} per person per day`,
          title: (x) => jsonData[x].group_name,
         }
      },
      legend: { hide: true },
      title: { text: `${vnode.attrs.name}` },
      axis: {
        x: { type: 'category', tick: { format: (x) => { if(vnode.state.showLabels) return jsonData[x].group_name; }}},
        y: { label: `${vnode.attrs.unit} \\ person \\ day` },
      },
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
  onbeforeupdate:(vnode) => { if (g.updateLeaderboard) vnode.state.getLeaderboard(vnode, vnode.attrs); },
};

export default {
  leaderboards:[],
  startDate:{},
  endDate:{},
  oninit:(vnode) => {
    if (g.visits.length === 0) getVisits();
    vnode.state.count = localStorage.getItem('leaderboardCount') || 3;
    m.request('/api/open/sensor/types.php')
      .then((r) => vnode.state.leaderboards = r.reverse(), window.requestError );
    vnode.state.updateGraphs = _ =>  {
      let tmp = JSON.parse(JSON.stringify(vnode.state.leaderboards));
      vnode.state.leaderboards = [];
      m.redraw(); vnode.state.leaderboards = tmp;
    };
  },
  onupdate:(vnode) => { if (g.updateLeaderboard) g.updateLeaderboard = false; },
  view:(vnode) => m('',[
    m('h2.title.is-4', `Leaderboard${vnode.state.leaderboards.length>1?'s':''}`),
    m('',[
      m('span', 'Start:'),
      m(pikaday,{ htmlId:'leaderboardStart', obj:{}, key:'start_date',
        createFunc: _ => localStorage.getItem('leaderboardStart'),
        changeFunc: (date) => {localStorage.setItem('leaderboardStart', date); vnode.state.updateGraphs();}
      }),
      m('span', 'End:'),
      m(pikaday,{ htmlId:'leaderboardEnd', obj:{}, key:'end_date',
        createFunc: _ => localStorage.getItem('leaderboardEnd'),
        changeFunc: (date) => {localStorage.setItem('leaderboardEnd', date); vnode.state.updateGraphs();}
      }),
      m('span', 'Count:'),
      m('input[type=number][min=1]', {
        value: vnode.state.count,
        oninput: (e) => {
          localStorage.setItem('leaderboardCount', e.target.value);
          vnode.state.count = e.target.value;
          vnode.state.updateGraphs();
        }
      })
    ]),
    vnode.state.leaderboards.map((l) => m(leaderboard, l)),
  ]),
};
