(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,n,t){e.exports=t(23)},17:function(e,n,t){},18:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),a=t(7),i=t.n(a),c=(t(17),t(8)),s=t.n(c),l=(t(18),t(10)),u=t(11),h=t(5),p=t.n(h),d=t(9),f=function(e){for(var n=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),t=window.atob(n),o=new Uint8Array(t.length),r=0;r<t.length;++r)o[r]=t.charCodeAt(r);return o},g=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready.then((function(e){return e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:f("BLN0oNeI3RI2PAdGHU963MhGp0YV-1F0nl1-l6b9lE2OlUd0wxknTHEk5Ts477x9DFymWNY0vx61ZCTtmhhlqVs")}).then((function(e){return console.log("User is subscribed.",e),e}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var m=function(){return Object(o.useEffect)((function(){"serviceWorker"in navigator&&"PushManager"in window&&(Notification.requestPermission((function(e){return e})).then((function(e){"granted"===e&&function(){var e={body:"I'm a automatic push message!",icon:"/react-push-project/logo192.png",vibrate:[200,100,200],tag:"welcome-push",image:"/react-push-project/logo192.png",badge:"https://spyna.it/icons/android-icon-192x192.png",actions:[{action:"Detail",title:"View",icon:"https://via.placeholder.com/128/ff0000"}]};navigator.serviceWorker.ready.then((function(n){n.showNotification("Hello there \ud83d\udc4b",e)}))}()})),console.log("Registering to the server!"),g().then((function(e){return n=e,void fetch("https://test.watermelon-solutions.de/api/push-service/subscribe",{headers:{"content-type":"application/json;charset=UTF-8","sec-fetch-mode":"cors"},body:JSON.stringify(n),method:"POST",mode:"cors"}).then((function(e){return e.json})).then((function(e){return console.log(e)}));var n})))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"This is the test PWA for my"," ",r.a.createElement("a",{href:"https://github.com/mjoellnier/react-push-project",target:"_blank",rel:"noopener noreferrer"},"React Push Project")),r.a.createElement("div",{className:"socialBanner"},r.a.createElement(u.a,{screenName:"coding_max"}),r.a.createElement(l.a,{href:"https://github.com/mjoellnier","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large","aria-label":"Follow @mjoellnier on GitHub",style:{float:"right"}},"Follow @mjoellnier"))))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-push-project",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-push-project","/sw.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")):w(n,e)}))}}()},8:function(e,n,t){e.exports=t.p+"static/media/logo.5ba10043.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.282be593.chunk.js.map