(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,n,t){e.exports=t(41)},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),c=t.n(o),u=(t(8),t(18)),l=t(2),i=t(4),m=t(3),s=t.n(m),d="https://boiling-dusk-56132.herokuapp.com/api/persons",f=function(e){return s.a.post(d,e).then((function(e){return e.data}))},h=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},g=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},p=function(e){var n=e.addName,t=e.newName,a=e.newNumber,o=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:t,onChange:o}),r.a.createElement("br",null),"number:",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},v=function(e){var n=e.persons,t=e.newFilter,a=e.deletePersonHandler,o=e.style;return r.a.createElement("div",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,n){return r.a.createElement("p",{key:n},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return a(n,o)}},"delete"))})))},w=function(e){var n=e.notification;return null===n.message?null:r.a.createElement("div",{className:n.type},n.message)},E=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),m=Object(i.a)(c,2),d=m[0],E=m[1],j=Object(a.useState)(""),O=Object(i.a)(j,2),k=O[0],y=O[1],C=Object(a.useState)(""),N=Object(i.a)(C,2),S=N[0],F=N[1],I=Object(a.useState)({message:null,type:null}),P=Object(i.a)(I,2),T=P[0],x=P[1];Object(a.useEffect)((function(){s.a.get("http://localhost:3001/persons").then((function(e){o(e.data)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{notification:T}),r.a.createElement(g,{newFilter:S,handleFilterChange:function(e){console.log(e.target.value),F(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(p,{addName:function(e){e.preventDefault();var n=t.findIndex((function(e){return e.name===d}));-1!==n?window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))&&h(t[n].id,{name:d,number:k}).then((function(e){o(Object(u.a)(t).map((function(e){return e.name===d?Object(l.a)(Object(l.a)({},e),{},{number:k}):e}))),E(""),y(""),x({message:"Modified ".concat(e.name),type:"confirm"}),setTimeout((function(){return x(Object(l.a)(Object(l.a)({},T),{},{message:null}))}),4e3)})):f({name:d,number:k}).then((function(e){o(t.concat(e)),E(""),y(""),x({message:"Added ".concat(e.name),type:"confirm"}),setTimeout((function(){return x(Object(l.a)(Object(l.a)({},T),{},{message:null}))}),4e3)}))},newName:d,newNumber:k,handleNameChange:function(e){console.log(e.target.value),E(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),y(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(v,{persons:t,newFilter:S,deletePersonHandler:function(e){window.confirm("Delete ".concat(t[e].name,"?"))&&b(t[e].id).then((function(n){o(t.filter((function(n,t){return e!==t})))})).catch((function(n){x({message:"Information of ".concat(t[e].name," has already been removed from the server"),type:"error"}),o(t.filter((function(n,t){return e!==t}))),setTimeout((function(){return x(Object(l.a)(Object(l.a)({},T),{},{message:null}))}),4e3)}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){}},[[19,1,2]]]);
//# sourceMappingURL=main.06bb95e6.chunk.js.map