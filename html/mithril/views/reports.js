export default {
  oninit: function(vnode) {
    vnode.state = {affiliations: []};
    m.request({url:"/api/admin/reports.php"}).then(
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
  },//end oninit
  onupdate: function(vnode) {
    //make c3 generate a report
    vnode.state.chart = c3.generate({
      bindto: '#chart',
        data: {
            columns: vnode.state.affiliations,
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
            m("#chart", "")
        ]);
    }
};
