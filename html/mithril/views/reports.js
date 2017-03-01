export default {
  oninit: function(vnode) {
    vnode.state = {affiliations: [], courses:[], departments:[]};
    m.request({url:"/api/open/report/affiliations.php"}).then(
      function(r){//regular req
        console.log(r);
        var temp = [];
        for (var key in r) {
          temp.push([key,r[key]]);//was append
        }
        console.log(temp);

        vnode.state.affiliations = temp;
      }, function(r) {//error req
        console.log(r);
      }
    );
    m.request({url:"/api/open/report/courses_and_affiliations.php"}).then(
      function(r){//regular req
        var temp = [];
        for (var key in r) { temp.push([key,r[key]]); }
        vnode.state.courses = temp;
      }, function(r) { console.log(r); }//error req
    );
    m.request({url:"/api/open/report/departments_and_affiliations.php"}).then(
      function(r){//regular req
        var temp = [];
        for (var key in r) { temp.push([key,r[key]]); }
        vnode.state.departments = temp;
      }, function(r) { console.log(r); }
    );
  },//end oninit
  onupdate: function(vnode) {
    //make c3 generate a report
    c3.generate({
      bindto: '#chart_affiliations',
        data: {
            columns: vnode.state.affiliations,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
    c3.generate({
      bindto: '#chart_courses',
        data: {
            columns: vnode.state.courses,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        }
    });
    c3.generate({
      bindto: '#chart_departments',
        data: {
            columns: vnode.state.departments,
            type : 'pie',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
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
