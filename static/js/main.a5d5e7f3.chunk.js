(this.webpackJsonpzotalabs=this.webpackJsonpzotalabs||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(4),r=n.n(s),j=(n(10),n(11),n(2));n(12),n(13);var d=function(e){var t=e.report;return console.log(t),Object(c.jsxs)("div",{className:"weather",children:[Object(c.jsxs)("div",{id:"temp",children:[Math.floor(t.main.temp),Object(c.jsx)("sup",{children:"\xb0"})]}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{id:"icon",alt:"Weather Icon",src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png")})}),Object(c.jsx)("div",{id:"status",children:t.weather[0].main}),Object(c.jsxs)("div",{id:"extras",children:[Object(c.jsxs)("div",{className:"range",children:["Low ",Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"tempText",children:[Math.floor(t.main.temp_min),Object(c.jsx)("sup",{children:"\xb0"})]})]}),Object(c.jsxs)("div",{className:"range",children:["High ",Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"tempText",children:[Math.floor(t.main.temp_max),Object(c.jsx)("sup",{children:"\xb0"})]})]})]}),Object(c.jsxs)("div",{id:"city",children:[["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]," . ",t.name]})]})};var o=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)({}),r=Object(j.a)(s,2),o=r[0],h=r[1],u=Object(a.useState)(!1),b=Object(j.a)(u,2),l=b[0],p=b[1],O=function(e){13!==(e.keyCode||e.which)&&"click"!==e.type||fetch("https:api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=332bee308a0911eb0b8806ee55b08a3d&units=metric")).then((function(e){return e.json()})).then((function(e){return h(e)})).then((function(){return p(!0)}),i(""))};return Object(c.jsxs)("div",{className:"inputHolder",children:[Object(c.jsx)("input",{id:"input",placeholder:"Enter City",value:n,onChange:function(e){return i(e.target.value)},onKeyPress:O}),Object(c.jsx)("button",{id:"button",onClick:O,children:"search"}),Object(c.jsx)("div",{children:!0===l?Object(c.jsx)(d,{report:o}):""})]})};n(14);var h=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(o,{}),Object(c.jsx)("div",{className:"name",children:"WEATHER APP"})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),u()}],[[15,1,2]]]);
//# sourceMappingURL=main.a5d5e7f3.chunk.js.map