(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/shield.a63ab2f1.png"},17:function(e,t,a){e.exports=a(34)},22:function(e,t,a){},23:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(13),o=a.n(c),i=(a(22),a(6)),s=a(7),l=a(10),u=a(9),h=a(8),m=a(11),p=(a(23),a(14)),d=a.n(p),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"MARVEL"))}}]),t}(r.a.Component),b=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,35))}),v=function(e){return r.a.createElement("div",{className:"hero"},r.a.createElement("a",{href:e.shop,target:"_blank",rel:"noopener noreferrer",title:"Web"},r.a.createElement("h2",null,e.name),r.a.createElement(n.Suspense,{fallback:r.a.createElement("span",null,"Loading...")},r.a.createElement(b,{photo:e.photo,ext:e.ext}))))},E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={characters:[],search:""},a.updateSearch=a.updateSearch.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=50&apikey=3807b873586a20c861ef6a4be192963a").then(function(e){return e.json()}).then(function(t){e.setState({characters:t.data.results})})}},{key:"updateSearch",value:function(e){this.setState({search:e.target.value.substr(0,30)})}},{key:"render",value:function(){var e=this,t=this.state.characters.filter(function(t){return-1!==t.name.toLowerCase().indexOf(e.state.search.toLowerCase())});return this.state.characters.length>0?r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("input",{type:"search",value:this.state.search,onChange:this.updateSearch,placeholder:"Buscador",id:"search"}),r.a.createElement("div",{className:"container"},t.map(function(e,t){return r.a.createElement(v,{key:t,name:e.name,photo:e.thumbnail.path,ext:e.thumbnail.extension,shop:e.urls[0].url})}))):r.a.createElement("div",{className:"load"},r.a.createElement("img",{src:d.a,className:"shield",alt:""}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(15);a.n(w).a.initializeApp({apiKey:"AIzaSyDcv89QYQrDAKoJITvjXWt5qY4LfiLxl1E",authDomain:"react-marvel-fee32.firebaseapp.com",databaseURL:"https://react-marvel-fee32.firebaseio.com",projectId:"react-marvel-fee32",storageBucket:"react-marvel-fee32.appspot.com",messagingSenderId:"120608841197",appId:"1:120608841197:web:090366f1160fc451"}),o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.c59c001b.chunk.js.map