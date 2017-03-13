import {getSensors} from '/mithril/utils.js';
import AddSensorData from '/mithril/components/addSensorData.js';

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
      m('.title','Welcome Home'),
      m("a[href='http://www.uvu.edu/crfs/']",
        'Capitol Reef Field Station Home'),
      g.uvu.loggedIn && vnode.state.activeVisits.length > 0 ? m('',
        g.sensors.map(function(v){ return m(AddSensorData,{sensor:v, visits: vnode.state.activeVisits}); }))
      : null,
    ]);
  }
};
