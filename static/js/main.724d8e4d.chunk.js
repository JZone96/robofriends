(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),o=n(8),i=n.n(o),a=(n(14),n(2)),h=n(3),u=n(5),l=n(4),j=(n.p,n(15),n(7),function(e){var t=e.searchChange;return Object(r.jsx)("input",{type:"search",placeholder:"search robots",onChange:t})}),d=function(e){var t=e.username,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("h2",{children:n})]})]})},b=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(d,{id:t[n].id,username:t[n].username,email:t[n].email},t[n].id)}))})},f=(n(16),function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",height:"800px",border:"10px solid transparent"},className:"example",children:e.children})}),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:" Something went wrong \xaf\\_(\u30c4)_/\xaf"}):this.props.children}}]),n}(c.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={searchfield:"",robots:[]},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.username.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"robofriends"}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)(O,{children:Object(r.jsx)(f,{children:Object(r.jsx)(b,{robots:c})})})]}):Object(r.jsx)("h1",{className:"tc",children:"LOADING..."})}}]),n}(c.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.724d8e4d.chunk.js.map