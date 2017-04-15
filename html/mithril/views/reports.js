import {pikaday} from '/mithril/components/pikaday.js';

export default {
  generatePieChart:(id, cols) => {
    c3.generate({
      bindto: id,
      color: { pattern: g.uvuColors.sort(_ => 0.5 - Math.random()) },
      tooltip: { format: {value:(value, ratio, id) =>
        `${value} visit - ${Math.floor(ratio*100)}%` } },
      data: { type : 'pie', columns: cols
        //onclick: function (d, i) { console.log("onclick", d, i); },
        //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
    });
  },
  oninit: function(vnode) {
    m.request({url:"/api/open/report/affiliations.php"})
      .then((r) => vnode.state.generatePieChart('#chart_affiliations', r), window.requestError);
    m.request({url:"/api/open/report/courses_and_affiliations.php"})
      .then((r) => vnode.state.generatePieChart('#chart_courses', r), window.requestError);
    m.request({url:"/api/open/report/departments_and_affiliations.php"})
      .then((r) => vnode.state.generatePieChart('#chart_departments', r) , window.requestError);
  },
  view: function(vnode) {
      return m("", [
          m(".title", {class: "title"}, "Reports"),
          m(pikaday, {timestamp:null}),
          m(".title.is-3", "Affiliations"),
          m("#chart_affiliations", ""),
          m(".title.is-3", "Departments"),
          m("#chart_departments", ""),
          m(".title.is-3", "Courses"),
          m("#chart_courses", ""),
      ]);
  }
};
