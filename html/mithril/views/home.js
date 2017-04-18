import {getSensors} from '/mithril/utils.js';
import addSensorData from '/mithril/components/addSensorData.js';
import leaderboards from '/mithril/components/leaderboards.js';

export default {
  oninit: function(vnode){
    getSensors();
    vnode.state.activeVisits = [];
    m.request({url: '/api/open/active_visits.php'}).then(
      (data) => vnode.state.activeVisits = data,
      window.requestError
    );
  },
  view: function(vnode) {
    return m('',[
      m('h1.title', 'Home'),
      g.uvu.admin && vnode.state.activeVisits.length > 0 ? m('', [
        m('h2.title.is-4', ['Quick Input',
          m('.fa.fa-question-circle-o[title="These are current visitors"]', {style:'font-size: small;'}),
        ]),
        g.sensors.map(function(v){ return m(addSensorData,{sensor:v, visits: vnode.state.activeVisits, homePage:true}); })
      ])
      : null,
      m(leaderboards),
      // m("a[href='http://www.uvu.edu/crfs/']", 'Capitol Reef Field Station Home'),
    ]);
  }
};
