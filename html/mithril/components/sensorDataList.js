
let itemList = {
  //oncreate: (vnode) => console.log(vnode.attrs),
  oncreate: (vnode) => vnode.state = {},
  onupdate: (vnode) => console.log(vnode.attrs),
  view: (vnode) => vnode.attrs.sensorValues.map((v) => m('', [
    m('',JSON.stringify(v)),
    m('button.button.is-danger', {onclick:_ => vnode.state.modal = true },'Delete'),
    vnode.state.modal ? m('', JSON.parse(JSON.stringify(vnode.state))) : null
  ]))
};

export default {
  oninit:(vnode) => {
    vnode.state.sensorValues = [];
    vnode.state.getSensorData = (id) => {
      m.request({url:`/api/admin/sensor/values.php?sensor=${id}`})
      .then((r) => vnode.state.sensorValues = r, (r) => console.log('Error', r));
    };
  },
  //onupdate: (vnode) => console.log(g.sensors),
  view:(vnode) => m('',[
    m('','hello world'),
    m('select',
      {onchange:(e) => vnode.state.getSensorData(e.target.value) },
      g.sensors.map((s) => m('option', {value:s.id}, s.name))),
    m(itemList, vnode.state),

  ])
};
