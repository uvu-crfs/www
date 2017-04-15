// Component containing a Select that uses Select2 for functionality.
export var s2Component = {
  oninit:(vnode) => {
    if (vnode.attrs.data && vnode.attrs.data.length > 0)
      vnode.attrs.request_data[vnode.attrs.request_attr] = vnode.attrs.data[0].id;
  },
  oncreate: (vnode) => $(vnode.dom).select2({ placeholder: "Select an option", }),
  view: function(vnode) {
    var current = 0;
    return m('select.select-field', {
      value: vnode.attrs.value || '-1',
      onchange:(e) => {
        vnode.attrs.request_data[vnode.attrs.request_attr] = parseInt(e.target.value, 10);
      },
    }, vnode.attrs.data.map((d) => m('option', {value:d.id} , d.text)));
  },
};
