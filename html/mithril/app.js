if (g.docker) {
  g.uvu = {
    loggedIn: true,
    displayName : "Docker Person",
    mail : "email@server.tld",
    entitlements : "urn:mace:uvu.edu:entitlement:iam:services:crfs:admin",
  };
}
g.uvu.admin = g.uvu.entitlements.includes('services:crfs:admin');
g.notifications = [];
g.sensors = [];
if (g.docker) console.log("globals", g);


import headerFooter from '/mithril/components/headerFooter.js';
import home from '/mithril/views/home.js';
import reportsView from '/mithril/views/reports.js';
import sensorsView from '/mithril/views/sensors.js';
import developerView from '/mithril/views/developer.js';

m.route(document.body, "/home", {
  "/home": headerFooter(home),
  "/reports": headerFooter(reportsView),
  // "/usage": headerFooter(''),
  // "/visits": headerFooter(''),
  // "/groups": headerFooter(''),
  "/sensors": headerFooter(g.uvu.loggedIn ? sensorsView : ''),
  "/developer": headerFooter(g.docker || uvu.admin ? developerView : '')
});
