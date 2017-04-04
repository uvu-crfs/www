export default {
  departments:[],
  oninit: function(vnode) {
    m.request({url:"/api/open/report/affiliations.php"})
      .then((r) => vnode.state.generatePieChart('#chart_affiliations', r), window.requestError);
    m.request({url:"/api/open/report/courses_and_affiliations.php"})
      .then((r) => vnode.state.generatePieChart('#chart_courses', r), window.requestError);
    m.request({url:"/api/open/report/departments_and_affiliations.php"}).then(
      function(r){//regular req
        var temp = [];
        for (var key in r) { temp.push([key,r[key]]); }
        vnode.state.departments = temp;
        vnode.state.generatePieChart('#chart_departments', temp);
      }, window.requestError
    );
  },//end oninit
  generatePieChart:(id, cols) => {
    c3.generate({
      bindto: id,
      color: { pattern: g.uvuColors.sort(_ => 0.5 - Math.random()) },
      data: { type : 'pie', columns: cols
        //onclick: function (d, i) { console.log("onclick", d, i); },
        //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        //onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
    });
  },
  view: function(vnode) {
      return m("", [
          m(".title", {class: "title"}, "Reports"),
          m(".title.is-3", "Affiliations"),
          m("#chart_affiliations", ""),
          m(".title.is-3", "Departments"),
          m("#chart_departments", ""),
          m(".title.is-3", "Courses"),
          m("#chart_courses", ""),
      ]);
  }
};
