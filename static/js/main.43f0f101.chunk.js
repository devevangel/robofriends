(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(1),i=n(2),s=n(3),u=n(4),h=(n(13),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return console.log(this.props.children),r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},this.props.children)}}]),n}(a.Component)),p=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5 tc"},r.a.createElement("img",{src:"https://robohash.org/".concat(this.props.id,"?size=200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,this.props.name),r.a.createElement("p",null,this.props.email)))}}]),n}(a.Component),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.robots.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,name:e.name,email:e.email})})))}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"searchbox",placeholder:"search robots",onChange:this.props.updateList}))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops! That is not good"):this.props.children}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={robotList:[],searchfield:""},e.handleUpdate=function(t){e.setState({searchfield:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robotList:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robotList.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield)}));return this.state.robotList.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFreinds"),r.a.createElement(m,{updateList:this.handleUpdate}),r.a.createElement(h,null,r.a.createElement(b,null,r.a.createElement(d,{robots:t})))):r.a.createElement("h1",{className:"tc"},"Loading")}}]),n}(a.Component);n(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.43f0f101.chunk.js.map