(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/logo.5ba10043.svg"},13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(9),i=n.n(a),c=(n(18),n(6)),s=n(10),l=n.n(s),u=(n(19),n(11)),h=n(12),p=n(5),f=n.n(p),d=n(7),g=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r},m=function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready.then((function(e){return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:g("BLN0oNeI3RI2PAdGHU963MhGp0YV-1F0nl1-l6b9lE2OlUd0wxknTHEk5Ts477x9DFymWNY0vx61ZCTtmhhlqVs")}).then((function(e){return console.log("User is subscribed.",e),e}))})).catch((function(e){return console.warn("error during notification subscription: ",e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://test.watermelon-solutions.de/api/push-service/subscribe",{headers:{"content-type":"application/json;charset=UTF-8","sec-fetch-mode":"cors"},body:JSON.stringify(t),method:"POST",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return e.key}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var b=function(){var e=Object(r.useState)(),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(""),s=Object(c.a)(i,2),p=s[0],f=s[1],d=Object(r.useState)(""),g=Object(c.a)(d,2),b=g[0],w=g[1];return Object(r.useEffect)((function(){"serviceWorker"in navigator&&"PushManager"in window&&(Notification.requestPermission((function(e){return e})).then((function(e){"granted"===e&&function(){var e={body:"I'm a automatic push message!",icon:"/react-push-project/logo192.png",vibrate:[200,100,200],tag:"welcome-push",image:"/react-push-project/logo192.png",badge:"https://spyna.it/icons/android-icon-192x192.png",actions:[{action:"Detail",title:"View",icon:"https://via.placeholder.com/128/ff0000"}]};navigator.serviceWorker.ready.then((function(t){t.showNotification("Hello there \ud83d\udc4b",e)}))}()})),console.log("Registering to the server!"),m().then((function(e){var t=v(e);a(t)})))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"This is the test PWA for my"," ",o.a.createElement("a",{href:"https://github.com/mjoellnier/react-push-project",target:"_blank",rel:"noopener noreferrer"},"React Push Project")),o.a.createElement("div",{id:"notification-form-wrapper"},o.a.createElement("form",{id:"notification-form",action:"submit"},o.a.createElement("input",{className:"input-field",placeholder:"Notification-Title",maxLength:50,value:p,onChange:function(e){return f(e.target.value)}}),o.a.createElement("input",{className:"input-field",placeholder:"Notification-Message",maxLength:200,value:b,onChange:function(e){return w(e.target.value)}}),o.a.createElement("input",{type:"button",value:"SEND!",className:"send-button",onClick:function(){fetch("https://test.watermelon-solutions.de/api/push-service/send",{user:n,title:p,message:b}).catch((function(e){return console.log("Error during push message sending: ",e)}))}}))),o.a.createElement("div",{className:"socialBanner"},o.a.createElement(h.a,{screenName:"coding_max"}),o.a.createElement(u.a,{href:"https://github.com/mjoellnier","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large","aria-label":"Follow @mjoellnier on GitHub",style:{float:"right"}},"Follow @mjoellnier"))))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-push-project",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-push-project","/sw.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")):j(t,e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.5a681e2b.chunk.js.map