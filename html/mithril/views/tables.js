export default {
  select: [],
  headers: [],
  query: localStorage.getItem("tableQuery") || 'SELECT * FROM groups',
  view:(vnode) => m('',[
    m('h1.title', 'Tables'),
    m('p.p', 'Enter a MySQL "SELECT" query here and it will return a table which can be copy and pasted into a spreadsheet if needed.'),
    m('form', {
      onsubmit:(e) => {
        e.preventDefault();
        m.request(`/api/admin/sqlSelect.php?query=${vnode.state.query}`)
        .then(
          (r) => {
            vnode.state.select = r;
            vnode.state.headers = Object.keys(vnode.state.select[0]);
            localStorage.setItem("tableQuery", vnode.state.query);
          },
          window.requestError
        );
    }}, [
      m('input[type=text]', { style: 'width: 80vw;',
        value: vnode.state.query,
        onchange: (e) => vnode.state.query = e.target.value
      }),
      m('input[type=submit]')
    ]),
    m('br'),
    vnode.state.select.length !== 0 ? m('table.table.is-bordered.is-striped', [
      m('thead.thead',m('tr.tr', [
        vnode.state.headers.map((v) => m('td.td', v))
      ])),
      m('tfoot.tfoot', vnode.state.select.map((r) => m('tr.tr', [
        vnode.state.headers.map((h) => m('td.td', r[h]))
      ])))
    ]) : null
  ])
};
