// Component containing a Select that uses Select2 for functionality.
export var s2Component = {

  oncreate: (vnode) => s2Component._configure(vnode),
  oninit:(vnode) => {
    if (vnode.attrs.data && vnode.attrs.data.length > 0)
      vnode.attrs.request_data[vnode.attrs.request_attr] = vnode.attrs.data[0].id;
  },
  view: function(vnode) {
    var current = 0;
    return m('select', {
      class: 'select-field',
      onchange:(e) => {
        vnode.attrs.request_data[vnode.attrs.request_attr] = parseInt(e.target.value, 10);
      },
    });
  },

  _configure: function(vnode) {

    // console.log("Inside configure");
    // console.log(vnode.dom);

     	$(vnode.dom).select2({
        //tags: "true",
        placeholder: "Select an option",
        allowClear: true,
        data: vnode.attrs.data
      });
  }

};
