(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),o=n(4),i=n.n(o),a=(n(14),n(5)),h=n(6),u=n(8),j=n(7),d=(n.p,n(15),n(3),function(e){var t=e.searchChange;return Object(r.jsx)("input",{type:"search",placeholder:"search robots",onChange:t})}),b=function(e){var t=e.username,n=e.email,c=e.id;return Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("h2",{children:n})]})]})},l=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(b,{id:t[n].id,username:t[n].username,email:t[n].email},t[n].id)}))})},f=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={searchfield:"",robots:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.username.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"robofriends"}),Object(r.jsx)(d,{searchChange:this.onSearchChange}),Object(r.jsx)(l,{robots:t})]})}}]),n}(c.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.9584491c.chunk.js.map