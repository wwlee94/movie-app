(this["webpackJsonpshow-me-the-movie"]=this["webpackJsonpshow-me-the-movie"]||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),s=n.n(o),i=(n(16),n(1)),c=n.n(i),l=n(2),u=n(5),m=n(6),v=n(9),p=n(7),h=n(10),d=(n(18),n(19),n(8));function f(e){var t=e.poster,n=e.alt;return(r.a.createElement("img",{src:t,alt:n,title:n,className:"Movie__Poster"}))}function _(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},t)}var g=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.synopsis,s=function(e){return e/10/2*10}(e.rating);return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(f,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Rating"},r.a.createElement("div",null,r.a.createElement(d.a,{value:Number(s),size:20})),r.a.createElement("div",null," ",s.toFixed(2)," / 5.0 Point ")),r.a.createElement("div",{className:"Movie__Genres"},a.map((function(e,t){return r.a.createElement(_,{key:t,genre:e})}))),r.a.createElement("div",{className:"Movie__Synopsis"},o)))},E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},n._getMovies=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,console.log(t),n.setState({movies:t});case 5:case"end":return e.stop()}}),e)}))),n._callApi=Object(l.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.data.movies);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),n._renderMovies=function(){return n.state.movies.map((function(e,t){return r.a.createElement(g,{key:e.id,title:e.title_long,poster:e.large_cover_image,genres:e.genres,synopsis:e.synopsis,rating:e.rating})}))},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){this.state.movies;return r.a.createElement("div",{className:this.state.movies?"App":"App--loading"},this.state.movies?this._renderMovies():"Loading ...")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.32712618.chunk.js.map