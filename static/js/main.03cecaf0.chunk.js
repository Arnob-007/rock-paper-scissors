(this.webpackJsonprps=this.webpackJsonprps||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/icon-paper.69a8c2e9.svg"},function(e,a,t){e.exports=t.p+"static/media/icon-scissors.bec2f9b3.svg"},function(e,a,t){e.exports=t.p+"static/media/icon-rock.8ce1e109.svg"},,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/bg-triangle.1fd44bdf.svg"},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/image-rules.5d74d25d.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(6),s=t.n(r),l=(t(12),t(1)),i=(t(13),function(e){var a=e.score;return n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"title"},n.a.createElement("p",{className:"title__part"},"ROCK"),n.a.createElement("p",{className:"title__part"},"PAPER"),n.a.createElement("p",{className:"title__part"},"SCISSORS")),n.a.createElement("div",{className:"scorecard"},n.a.createElement("p",{className:"score__title"},"SCORE"),n.a.createElement("p",{className:"score"},a)))}),m=(t(14),function(e){var a=e.setPlayed;return n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"rps__top"},n.a.createElement("div",{onClick:function(){return a("paper")},className:"rps paper"},n.a.createElement("img",{src:t(2),alt:""})),n.a.createElement("div",{onClick:function(){return a("scsr")},className:"rps scsr"},n.a.createElement("img",{src:t(3),alt:""}))),n.a.createElement("div",{onClick:function(){return a("rock")},className:"rps rock"},n.a.createElement("img",{src:t(4),alt:""})),n.a.createElement("img",{className:"bg__triangle",src:t(15),alt:""}))}),o=(t(16),function(){var e=Object(c.useState)(!1),a=Object(l.a)(e,2),r=a[0],s=a[1],i=function(){r?(document.getElementById("rules").classList.add("rules__disappear"),setTimeout((function(){return s(!1)}),350)):s(!0)};return n.a.createElement("div",{className:"bottom"},n.a.createElement("button",{onClick:i,className:"rules__btn"},"RULES"),r&&n.a.createElement("div",{className:"rules__container"},n.a.createElement("div",{id:"rules",className:"rules"},n.a.createElement("div",{className:"rules__top"},n.a.createElement("h2",null,"RULES"),n.a.createElement("span",{onClick:i},"\xd7")),n.a.createElement("img",{src:t(17),alt:""}))))}),u=(t(18),function(){return n.a.createElement("div",{className:"loading"},n.a.createElement("div",{className:"bounce1 itm1"}),n.a.createElement("div",{className:"bounce1 itm2"}),n.a.createElement("div",{className:"bounce1 itm3"}),n.a.createElement("div",{className:"bounce1 itm4"}))}),E=(t(19),function(e){var a=e.played,r=e.setPlayed,s=e.setScore,i=Object(c.useState)(""),m=Object(l.a)(i,2),o=m[0],E=m[1],p=Object(c.useState)(""),d=Object(l.a)(p,2),N=d[0],f=d[1],v=function(){E(""),r(""),f("")};return Object(c.useEffect)((function(){setTimeout((function(){return function(){switch(Math.floor(3*Math.random())+1){case 1:E("paper");break;case 2:E("scsr");break;case 3:E("rock");break;default:E("")}}()}),3e3)}),[]),Object(c.useEffect)((function(){""!==o&&(a===o?f("TIED"):"paper"===a?f("scsr"===o?"LOSE":"WIN"):"scsr"===a?f("rock"===o?"LOSE":"WIN"):"rock"===a&&f("paper"===o?"LOSE":"WIN"))}),[o,a]),Object(c.useEffect)((function(){"WIN"===N?s((function(e){return e+1})):"LOSE"===N&&s((function(e){return e-1}))}),[N,s]),n.a.createElement("div",{className:"playing ".concat(o&&"isresult")},n.a.createElement("div",{className:"played"},n.a.createElement("h3",null,"You Picked"),"paper"===a&&n.a.createElement("div",{className:"rps paper"},n.a.createElement("img",{src:t(2),alt:""})),"scsr"===a&&n.a.createElement("div",{className:"rps scsr"},n.a.createElement("img",{src:t(3),alt:""})),"rock"===a&&n.a.createElement("div",{className:"rps rock"},n.a.createElement("img",{src:t(4),alt:""}))),o&&n.a.createElement("div",{className:"result desktop"},n.a.createElement("h1",null,"YOU"," ",n.a.createElement("span",{className:"".concat("WIN"===N&&"win__color"," ").concat("LOSE"===N&&"lose__color")},N)),n.a.createElement("button",{onClick:v,className:"play__again"},"PLAY AGAIN")),n.a.createElement("div",{className:"played"},n.a.createElement("h3",null,"The House Picked"),""===o&&n.a.createElement("div",{className:"rps thinking"},n.a.createElement(u,null)),"paper"===o&&n.a.createElement("div",{className:"rps paper"},n.a.createElement("img",{src:t(2),alt:""})),"scsr"===o&&n.a.createElement("div",{className:"rps scsr"},n.a.createElement("img",{src:t(3),alt:""})),"rock"===o&&n.a.createElement("div",{className:"rps rock"},n.a.createElement("img",{src:t(4),alt:""}))),o&&n.a.createElement("div",{className:"result mobile"},n.a.createElement("h1",null,"YOU"," ",n.a.createElement("span",{className:"".concat("WIN"===N&&"win__color"," ").concat("LOSE"===N&&"lose__color")},N)),n.a.createElement("button",{onClick:v,className:"play__again"},"PLAY AGAIN")))}),p=(t(20),function(){var e=Object(c.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],s=Object(c.useState)(0),u=Object(l.a)(s,2),p=u[0],d=u[1];return n.a.createElement("div",{className:"app"},n.a.createElement(i,{score:p}),!t&&n.a.createElement(m,{setPlayed:r}),t&&n.a.createElement(E,{played:t,setPlayed:r,setScore:d}),n.a.createElement(o,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.03cecaf0.chunk.js.map