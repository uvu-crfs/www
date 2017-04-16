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
    vnode.state.update = _ => {
      let start = '', end = '';
      if (localStorage.getItem("reportStart") !== null) start = `&start=${localStorage.getItem("reportStart")}`;
      if (localStorage.getItem("reportEnd") !== null) end = `&end=${localStorage.getItem("reportEnd")}`;
      m.request({url:`/api/open/report/affiliations.php?a${start}${end}`})
        .then((r) => vnode.state.generatePieChart('#chart_affiliations', r), window.requestError);
      m.request({url:`/api/open/report/courses_and_affiliations.php?a${start}${end}`})
        .then((r) => vnode.state.generatePieChart('#chart_courses', r), window.requestError);
      m.request({url:`/api/open/report/departments_and_affiliations.php?a${start}${end}`})
        .then((r) => vnode.state.generatePieChart('#chart_departments', r) , window.requestError);
    };
    vnode.state.update();
  },
  view: function(vnode) {
      return m("", [
          m("h1.title", {class: "title"}, "Reports"),
          m('',[
            m('span', 'Start:'),
            m(pikaday,{ htmlId:'reportStart',
              createFunc: _ => localStorage.getItem('reportStart'),
              changeFunc: (date) => {localStorage.setItem('reportStart', date); vnode.state.update();}
            }),
            m('span', 'End: '),
            m(pikaday,{ htmlId:'reportEnd',
              createFunc: _ => localStorage.getItem('reportEnd'),
              changeFunc: (date) => {localStorage.setItem('reportEnd', date); vnode.state.update(); }
            }),
          ]),

          m("h2.title.is-4", "Affiliations"),
          m("#chart_affiliations", ""),
          m("h2.title.is-4", "Departments"),
          m("#chart_departments", ""),
          m("h2.title.is-4", "Courses"),
          m("#chart_courses", ""),
      ]);
  }
};
