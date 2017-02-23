// Component containing a Select that uses Select2 for functionality. 
export var s2Component = {

  oncreate: (vnode) => s2Component._configure(vnode), 

  view: function(vnode) {
    var current = 0;
    return m('select', {class: 'select-field'})
  },

  _configure: function(vnode) {

    console.log("Inside configure");
    console.log(vnode.dom);

     	$(vnode.dom).select2({
        //tags: "true",
        placeholder: "Select an option",
        allowClear: true,
        data: vnode.attrs.data
      }); 
  }
  
};