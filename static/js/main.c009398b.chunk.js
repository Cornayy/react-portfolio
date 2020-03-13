(this["webpackJsonpreact-typescript-boilerplate"]=this["webpackJsonpreact-typescript-boilerplate"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/placeholder.6a9d678d.png"},32:function(e,t,a){e.exports=a(56)},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);a(33),a(34),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(39),a(40),a(41),function(){return r.a.createElement("section",{className:"intro d-flex align-items-center"},r.a.createElement("div",{className:"container text-center text-white left-side"},r.a.createElement("h1",{className:"intro-left"},"Hi, I'm"),r.a.createElement("h1",{className:"intro-left intro-name"},"Corn\xe9 Eggebeen.")),r.a.createElement("div",{className:"container text-center right-side text-wrap ml-4"},r.a.createElement("h1",{className:"intro-right"},"A developer who is interested in the latest technologies.")))}),i=(a(42),a(12)),m=a(18),s=function(){return r.a.createElement(i.a,{variant:"light",expand:"lg"},r.a.createElement(i.a.Brand,{href:"#home"},"Corn\xe9 Eggebeen"),r.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.a.Link,{href:"#about-me-section"},"ABOUT ME")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.a.Link,{href:"#my-work-section"},"MY WORK")))))},u=(a(47),function(){return r.a.createElement("section",{className:"about-section",id:"about-me-section"},r.a.createElement("div",{className:"container-fluid about-me text-center"},r.a.createElement("h1",{className:"pt-5"},"About Me"),r.a.createElement("hr",null),r.a.createElement("p",null,"I am Corn\xe9 Eggebeen, currently studying Informatics / Software Engineering at Avans University of Applied Sciences."),r.a.createElement("p",null,"Have a look at my work and contact me if you are interested.")))}),E=a(21),f=a.n(E),d=a(27),p=a(24),g=(a(49),a(30)),h=a(29),b=a(7),w=a(28),v=a.n(w),y=function(e){var t=e.repository;return r.a.createElement(b.a,{className:"mb-5",onClick:function(){return N(t.url)}},r.a.createElement(b.a.Img,{style:{height:"15rem"},variant:"top",src:v.a}),r.a.createElement(b.a.Body,{style:{height:"10rem"}},r.a.createElement(b.a.Title,null,t.name),r.a.createElement(b.a.Text,null,t.description)),r.a.createElement(b.a.Footer,null,r.a.createElement("small",{className:"text-muted"},t.language)))},N=function(e){return window.location.href=e},k=function(){var e=Object(n.useState)(!0),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(p.a)(l,2),i=o[0],m=o[1],s=function(e){return e.slice(0,6).map((function(e){return{name:e.name,language:e.language,description:e.description,url:e.html_url}}))};return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/cornayy/repos");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=s(a),m(n),c(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Github data could not be retrieved, error: ".concat(e.t0,"."));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("section",{className:"work-section",id:"my-work-section"},r.a.createElement("div",{className:"container-fluid work text-center pb-5"},r.a.createElement("h1",{className:"pt-5"},"My Work"),r.a.createElement("hr",null),r.a.createElement("p",{className:"pb-5"},"Check out the projects I have done on GitHub!"),a?r.a.createElement(h.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(g.a,null,i.map((function(e){return r.a.createElement(y,{key:e.name,repository:e})})))))},x=(a(50),a(51),function(e){var t=e.project;return r.a.createElement(b.a,{onClick:function(){return j(t.url)},style:{width:"50rem",margin:"2rem"}},r.a.createElement(b.a.Img,{src:t.image}),r.a.createElement(b.a.Footer,{style:{background:"rgba(39, 38, 38, 0.91)",color:"whitesmoke",border:"none"}},r.a.createElement("p",null,t.name)))}),j=function(e){return window.location.href=e},C=[{url:"https://www.andreeggebeen.nl/",name:"Andr\xe9 Eggebeen Woning-en Projectstoffering",image:"https://www.andreeggebeen.nl/img/intro-bg.jpg"}],I=function(){return r.a.createElement("section",{className:"projects-section"},r.a.createElement("div",{className:"container-fluid projects text-center"},r.a.createElement("h1",{className:"pt-5"},"Projects"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row justify-content-center mt-5"},C.map((function(e){return r.a.createElement(x,{key:e.name,project:e})})))))},A=(a(52),a(17)),O=a(31),B=a(23),L=function(){return r.a.createElement("footer",{className:"page-footer font-small"},r.a.createElement("div",{className:"container-fluid light-dark"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-xl-12 py-5 mt-5"},r.a.createElement("div",{className:"mb-5 flex-center"},r.a.createElement("a",{className:"contact-icon mr-md-5 mr-3",href:"https://github.com/Cornayy"},r.a.createElement(A.a,{title:"GitHub",icon:B.a,size:"2x",style:{color:"white"}})),r.a.createElement("a",{className:"contact-icon mr-md-5 mr-3",href:"mailto:corneeggebeen@outlook.com"},r.a.createElement(A.a,{title:"Mail",icon:O.a,size:"2x",style:{color:"white"}})),r.a.createElement("a",{className:"contact-icon mr-md-5 mr-3",href:"https://www.linkedin.com/in/corn%C3%A9-eggebeen-970058146/",title:"LinkedIn"},r.a.createElement(A.a,{title:"LinkedIn",icon:B.b,size:"2x",style:{color:"white"}})))))),r.a.createElement("div",{className:"footer-copyright text-center p-4 dark"},r.a.createElement("p",{className:"mt-5 footer-text"},"Copyright \xa9 ",(new Date).getFullYear()," | ",r.a.createElement("b",null,"Corn\xe9 Eggebeen"))))};l.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(o,null),r.a.createElement(u,null),r.a.createElement(k,null),r.a.createElement(I,null),r.a.createElement(L,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c009398b.chunk.js.map