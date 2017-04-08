import {getSensors} from '/mithril/utils.js';
import addSensorData from '/mithril/components/addSensorData.js';
import leaderboards from '/mithril/components/leaderboards.js';

export default {
  oninit: function(vnode){
    getSensors();
    vnode.state.activeVisits = [];
    m.request({url: '/api/open/active_visits.php'}).then(
      (data) => vnode.state.activeVisits = data,
      (error) => console.log(error)
    );
  },
  view: function(vnode) {
    return m('',[
      g.uvu.admin && vnode.state.activeVisits.length > 0 ? m('',
        g.sensors.map(function(v){ return m(addSensorData,{sensor:v, visits: vnode.state.activeVisits}); }))
      : null,
      m(leaderboards),
      m("a[href='http://www.uvu.edu/crfs/']",
        'Capitol Reef Field Station Home'),
    ]);
  }
};
