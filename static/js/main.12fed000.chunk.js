(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),l=a.n(s),c=(a(27),a(28),a(9)),i=a(10),o=a(12),u=a(11),m=a(21),h=function(e){var t=e.value,a=e.onClick,n="X"==t?"x":"O"==t?"circle":"";return r.a.createElement("button",{className:"cell ".concat(n),onClick:function(){return a()}})},d=a(6);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(m.a)(t[a],3),r=n[0],s=n[1],l=n[2];if(e[r]&&e[r]===e[s]&&e[r]===e[l])return e[r]}for(var c=0;c<e.length;c++)if(null==e[c])return null;return"DRAW"}var p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).computerTurn=function(){var e=n.state.squares.slice();if(!f(e)){for(var t=[],a=!1,r=0;r<9;r++)null==n.state.squares[r]&&(t.push(r),a=!0);a&&setTimeout((function(){var a=t[Math.floor(Math.random()*t.length)];e[a]=n.state.xIsNext?"X":"O",n.setState({squares:e,xIsNext:!n.state.xIsNext,isClickable:!0})}),1e3)}},n.restartGame=function(){n.setState({squares:Array(9).fill(null),xIsNext:!0,isClickable:!0}),sessionStorage.clear()},n.state={squares:Array(9).fill(null),xIsNext:!0,isClickable:!0,player:n.props.player},n}return Object(i.a)(a,[{key:"handleClick",value:function(e){var t=this;if(this.state.isClickable){var a=this.state.squares.slice();f(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O","ai"==this.state.player?this.setState({squares:a,xIsNext:!this.state.xIsNext,isClickable:!1},(function(){t.computerTurn(e)})):this.setState({squares:a,xIsNext:!this.state.xIsNext,isClickable:!0}))}}},{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"nextRound",value:function(e){if("user"==e){var t=Number(sessionStorage.getItem("user"))+1;sessionStorage.setItem("user",t)}if("AI"==e){var a=Number(sessionStorage.getItem("ai"))+1;sessionStorage.setItem("ai",a)}this.setState({squares:Array(9).fill(null),xIsNext:!0,isClickable:!0})}},{key:"reset",value:function(){sessionStorage.clear()}},{key:"render",value:function(){var e=this,t="ai"==this.state.player?"AI":"Friend",a=f(this.state.squares),n=Number(sessionStorage.getItem("ai")),s=Number(sessionStorage.getItem("user"));null!=n&&null!=s||(n=0,s=0);var l,c,i;"X"==a?s+=1:"O"==a?n+=1:this.state.xIsNext;a&&(i="X"==a?"user":"O"==a?"AI":"DRAW",l=r.a.createElement("button",{onClick:function(t){return e.nextRound(i)},className:"next-btn"},"Next Round"),c=r.a.createElement("button",{onClick:this.restartGame,className:"reset-btn"},"Reset"));return r.a.createElement("div",{className:"game-container"},r.a.createElement("div",{className:"status"},r.a.createElement("p",null,r.a.createElement("span",null,"Alex"),r.a.createElement("button",{"status-btn":!0},s+"-"+n),r.a.createElement("span",null,t))),r.a.createElement("div",{className:"board"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)),r.a.createElement("div",{className:"restart-game"},r.a.createElement("p",null,"X"==a?"Alex won the game":"O"==a?"".concat(this.state.player," won the game"):""),r.a.createElement("p",null,"DRAW"==a?"Its Draw":""),l,c,r.a.createElement("p",null,r.a.createElement(d.b,{to:"/",onClick:function(){return e.reset()},className:"custom-btn btn-friend"},"Home"))))}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={para:n.props.match.params.id},n}return Object(i.a)(a,[{key:"render",value:function(){var e="ai"==this.state.para?"ai":"friend"==this.state.para?"friend":"";return r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(p,{player:e})))}}]),a}(n.Component),b=a(5),E=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("p",{className:"marker-icon"},r.a.createElement("span",{className:"cell x marker-selection"}),r.a.createElement("span",{className:"cell circle marker-selection"})),r.a.createElement("p",null,"Choose your play mode"),r.a.createElement("div",{className:"select-btn"},r.a.createElement(d.b,{to:"/ai",className:"custom-btn btn-ai"},"with AI")),r.a.createElement("div",{className:"select-btn"},r.a.createElement(d.b,{to:"/friend",className:"custom-btn btn-friend"},"with a friend")))};var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:E}),r.a.createElement(b.a,{exact:!0,path:"/tictac",component:E}),r.a.createElement(b.a,{path:"/:id",component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.12fed000.chunk.js.map