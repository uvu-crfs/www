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
g.groups = [];
g.groupLookup = {};
g.visits = [];
g.affiliations = [];
g.affiliationLookup = {};
g.uvuColors = ['#00843D', '#4BA23F', '#78BE20', '#C5E86C', '#86C8BC', '#00BFB3',
    '#0095C8', '#BDD6E6', '#595478', '#DDD0CE', '#BC8279', '#823B34', '#E15230',
    '#D45D00', '#FFB500', '#FBD865', '#696158', '#A7A8AA'];

if (g.docker) console.log("globals", g);

import headerFooter from '/mithril/components/headerFooter.js';
import home from '/mithril/views/home.js';
import reportsView from '/mithril/views/reports.js';
import sensorsView from '/mithril/views/sensors.js';
import groupsView from '/mithril/views/groups.js';
import visitsView from '/mithril/views/visits.js';
import affiliationView from '/mithril/views/affiliation.js';
import developerView from '/mithril/views/developer.js';

m.route(document.body, "/home", {
  "/home": headerFooter(home),
  "/reports": headerFooter(reportsView),
  "/visits": headerFooter(g.uvu.loggedIn ? visitsView : ''),
  "/groups": headerFooter(g.uvu.loggedIn ? groupsView : ''),
  "/sensors": headerFooter(g.uvu.loggedIn ? sensorsView : ''),
  "/affiliations": headerFooter(g.uvu.loggedIn ? affiliationView : ''),
  "/developer": headerFooter(g.docker || g.uvu.admin ? developerView : '')
});

import {addNotification} from '/mithril/utils.js';
window.requestError = (e) => {
  addNotification(e);
  console.log(e);
};
