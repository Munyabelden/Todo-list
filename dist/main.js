(()=>{var e={144:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"body{font-family:sans-serif;box-sizing:border-box}ul{list-style:none}button{background:none;border:none;outline:rgba(0,0,0,0);cursor:pointer}button .fa-solid{color:#a9a9a9;font-size:18px}.container{margin:30px auto;box-shadow:0 0 5px 5px #d3d3d3;width:fit-content}.container .title{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-block:6px;padding-inline:5px;border-block:2px solid #d3d3d3}.container .title h1{font-size:18px;font-weight:500}.container .title button{color:#a9a9a9}.container .todo-form{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-block:15px;padding-inline:5px;border-bottom:2px solid #d3d3d3}.container .todo-form input{border:none;outline:rgba(0,0,0,0);font-size:18px;font-style:italic}.container #delete-btn{font-size:18px;color:gray;background:#efefef;text-align:center;width:100%;padding:12px;margin:0}.list-container{margin-left:-40px;margin-block:0}.list-container li{display:flex;flex-direction:row;align-items:center;justify-content:space-between;border-bottom:1px solid #d3d3d3;padding-inline:5px;width:400px}.list-container li div{display:flex;border:none;flex-direction:row;gap:10px}.list-container li div .edit-input{border:none;outline:rgba(0,0,0,0);font-size:18px;padding-block:15px;background:rgba(0,0,0,0)}.list-container li .remove-btn{display:none}",""]);const s=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var c=o(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},668:()=>{document.addEventListener("DOMContentLoaded",(()=>{let e=(()=>{let e;return e=null===localStorage.getItem("items")?[]:JSON.parse(localStorage.getItem("items")),e})();e.sort(((e,t)=>e.index-t.index)),document.querySelector(".container").innerHTML='\n        <div class="title">\n          <h1>Today\'s to Do</h1>\n          <button type="button" class="reload"><i class="fa-solid fa-arrows-rotate"></i></button>\n        </div>\n        <form class="todo-form">\n          <input type="text" name="text" id="text-add" placeholder="Add to your list...">\n          <button type="submit" id="submit-btn"><i class="fa-solid fa-right-to-bracket"></i></button>\n        </form>\n        <ul class="list-container">\n        </ul>\n        <button type="button" id="delete-btn">Clear all completed</button>\n      ';const t=t=>{const n=document.querySelector(".list-container"),o=document.createElement("li");o.innerHTML=`\n          <div>\n            <input type="checkbox" name="checkbox" id="checkbox">\n            <input type="text" class="edit-input" id="${t.index}" name="task" value="${t.description}">\n          </div>\n          <button type="button" class="list-btn" ><i class="fa-solid fa-ellipsis-vertical"></i></button>\n          <button type="button" class="remove-btn" id="${t.index}"><i class="fa-solid fa-trash-can"></i></button>\n        `,n.insertAdjacentElement("beforeend",o),document.querySelectorAll(".edit-input").forEach((t=>{t.addEventListener("input",(()=>{const n=parseInt(t.id,10);let o=JSON.parse(localStorage.getItem("items"));e=o,e[n].description=document.getElementById(n).value,o=e,localStorage.setItem("items",JSON.stringify(e))}))}))};e.forEach((e=>t(e))),document.querySelector(".todo-form").addEventListener("submit",(n=>{n.preventDefault();const o=document.querySelector("#text-add").value,r=e.length+1;if(""===o)return;const i={complete:!1,description:o,index:r};t(i),e.push(i),localStorage.setItem("items",JSON.stringify(e)),location.reload()})),document.querySelectorAll(".list-btn").forEach((t=>{t.addEventListener("click",(()=>{const n=t.closest("li");n.style.background="bisque",t.style.display="none";const o=n.querySelector(".remove-btn");o.style.display="block",o.addEventListener("click",(()=>{n.remove(),n.style.border="none";const t=parseInt(o.id);e=e.filter((e=>e.index!==t)),e.forEach(((e,t)=>{e.index=t+1})),localStorage.setItem("items",JSON.stringify(e)),window.location.reload()}))}))}))}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(144),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,n(668)})()})();