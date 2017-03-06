export default {
  active: false,
  open:_ => {g.uvu.loggedIn = false; g.uvu.admin = false;},
  uvu:_ => {g.uvu.loggedIn = true; g.uvu.admin = false;},
  admin:_ => {g.uvu.loggedIn = true; g.uvu.admin = true;},
  view:(vnode) => g.docker ? m('nav.panel', {style:"position:fixed; bottom:0; right:0;"},[
    vnode.state.active? m('span', [
      m('p.panel-tabs',[
        m('a',{
          onclick: _ => vnode.state.open(),
          class: !g.uvu.loggedIn ? "is-active" : "",
        },'Open'),
        m('a', {
          onclick: _ => vnode.state.uvu(),
          class: g.uvu.loggedIn && !g.uvu.admin  ? "is-active" : "",
        },'UVU'),
        m('a',{
          onclick: _ => vnode.state.admin(),
          class: g.uvu.admin ? "is-active" : "",
        },'Admin'),
      ]),
      m('.panel-block',[
        m('input.input',{
          placeholder:'name',
          value:g.uvu.displayName,
          oninput:(e) => g.uvu.displayName = e.target.value,
        },'')
      ]),
      m('.panel-block',[
        m('input.input',{
          placeholder:'email',
          value:g.uvu.mail,
          oninput:(e) => g.uvu.mail = e.target.value,
        },'')
      ]),
    ]) : null,
    m('p.panel-heading', [
      m('a', {onclick:_ => vnode.state.active = !vnode.state.active},[
          m('span','Developer Options'),
          m('span.fa', {class:!vnode.state.active?'fa-angle-down':'fa-angle-up', style:"padding: 2px;"}, ''),
      ]),
    ]),
  ]) : null
};
