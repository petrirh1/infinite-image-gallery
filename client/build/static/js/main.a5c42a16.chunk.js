(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,a,t){e.exports=t(51)},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(14),l=t.n(r),s=t(3),i=t(2),m=t(15),o=t.n(m),u=(t(39),function(e){var a=e.image;return c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{className:"image",src:a.urls.regular,alt:""}),c.a.createElement("div",{className:"details-container"},c.a.createElement("div",{className:"details"},c.a.createElement("img",{className:"profile-image",src:a.user.profile_image.medium,alt:""}),c.a.createElement("p",{className:"username"},c.a.createElement("a",{href:a.user.links.html,target:"_blank",rel:"noopener noreferrer"},a.user.name)),c.a.createElement("a",{href:a.links.html,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"material-icons"},"link")))))}),f=(t(40),function(){return c.a.createElement("div",{className:"loading-spinner"},c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}))}),E=t(16),d=t.n(E),h=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(0),m=Object(i.a)(l,2),E=m[0],h=m[1],g=Object(n.useState)(!0),p=Object(i.a)(g,2),b=p[0],v=p[1],N=Object(n.useState)(!0),j=Object(i.a)(N,2),O=j[0],k=j[1];Object(n.useEffect)((function(){S()}),[]);var S=function(){h(E+25),o.a.get("/api/photos?count=".concat(25,"&start=").concat(E)).then((function(e){r([].concat(Object(s.a)(t),Object(s.a)(e.data))),v(!1)})).catch((function(e){console.error(e),k(!1)}))};return c.a.createElement(d.a,{dataLength:t.length,next:S,hasMore:O,endMessage:c.a.createElement("h5",null,"You've just reached the end of the internet."),scrollThreshold:.85},b?c.a.createElement(f,null):c.a.createElement("div",{className:"container"},t.map((function(e,a){return c.a.createElement(u,{key:a,image:e})}))))},g=(t(41),t(17)),p=t.n(g),b=function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"header fade-in"},c.a.createElement("img",{className:"app-logo",src:"./app-logo.svg",alt:""}),c.a.createElement("h3",{className:"header-title"},"Infinite Gallery")))},v=(t(50),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null),c.a.createElement(h,null))});l.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a5c42a16.chunk.js.map