(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,n,t){e.exports=t(29)},21:function(e,n,t){},27:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),c=t.n(r),i=(t(21),t(9)),l=t(10),s=t(14),u=t(11),h=t(15),d=function(e){var n=e.name,t=e.email,o=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},f=function(e){var n=e.robots;return a.a.createElement("div",null,n.map((function(e,t){return a.a.createElement(d,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},m=t(3),g=function(e){e.searchfield;var n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{label:"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},b=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=(t(27),function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).state={robots:[]},e}return Object(h.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state.robots,n=this.props,t=n.searchField,o=n.onSearchChange,r=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return e.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(g,{searchChange:o}),a.a.createElement(b,null,a.a.createElement(f,{robots:r}))):a.a.createElement("h1",null,"Loading")}}]),n}(o.Component)),p=Object(m.b)((function(e){return{searchField:e.searchField}}),(function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})}}}))(v),w=t(13),E=(t(28),t(1)),j={searchField:""},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=Object(w.createLogger)(),O=Object(E.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}}),Object(E.a)(k));c.a.render(a.a.createElement(m.a,{store:O},a.a.createElement(p,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends_Advance",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends_Advance","/service-worker.js");y?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.b3c35910.chunk.js.map