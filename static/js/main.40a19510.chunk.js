(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),c=n.n(o),r=(n(15),n(1)),s=n(2),l=n(5),u=n(4),m=n(3),d=n(6),p=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("li",{className:"TodoApp__list-item",onClick:function(){return e.props.checkItem(e.props.item.id)}},i.a.createElement("input",{type:"checkbox"}),i.a.createElement("span",null,this.props.item.title))}}]),t}(a.Component),h=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={items:[{id:1,title:"Teste",done:!1},{id:2,title:"Teste",done:!1},{id:3,title:"Teste",done:!1},{id:4,title:"Teste",done:!1},{id:5,title:"Teste",done:!1}]},e.checkItem=e.checkItem.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"checkItem",value:function(e){this.setState(function(t){return{items:t.items.map(function(t){return t.id===e&&(t.done=!t.done),t})}})}},{key:"render",value:function(){var e=this,t=this.state.items.map(function(t){return i.a.createElement(p,{key:"{item.id}",item:t,checkItem:e.checkItem})});return i.a.createElement("ul",{className:"TodoApp__list"},t)}}]),t}(a.Component);n(16);var f=function(){return i.a.createElement("div",{className:"TodoApp"},i.a.createElement("h1",{className:"TodoApp__title"},"TODO LIST"),i.a.createElement("input",{className:"TodoApp__input",placeholder:"add a new todo..."}),i.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.40a19510.chunk.js.map