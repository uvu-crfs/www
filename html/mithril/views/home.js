import {getSensors} from '/mithril/utils.js';
import AddSensorData from '/mithril/components/addSensorData.js';

export default {
  oncreate:function(vnode){ getSensors(); },
  view: function(vnode) {
    return m('',[
      m('.title','Welcome Home'),
      m("a[href='http://www.uvu.edu/crfs/']",
        'Capitol Reef Field Station Home'),
      g.uvu.loggedIn ? m('',
        g.sensors.map(function(v){ return m(AddSensorData,v); }))
      : null,
    ]);
  }
};
