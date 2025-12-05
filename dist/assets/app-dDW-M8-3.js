(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const bg=()=>{};var du={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Sg=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],c=n[e++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|d>>6,b=d&63;u||(b=64,a||(E=64)),r.push(e[f],e[g],e[E],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Id(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Sg(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const g=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new Cg;const E=i<<2|c>>4;if(r.push(E),d!==64){const b=c<<4&240|d>>2;if(r.push(b),g!==64){const O=d<<6&192|g;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rg=function(n){const t=Id(n);return Ad.encodeByteArray(t,!0)},xi=function(n){return Rg(n).replace(/\./g,"")},bd=function(n){try{return Ad.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=()=>Pg().__FIREBASE_DEFAULTS__,Dg=()=>{if(typeof process>"u"||typeof du>"u")return;const n=du.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Og=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&bd(n[1]);return t&&JSON.parse(t)},ao=()=>{try{return bg()||Ng()||Dg()||Og()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sd=n=>ao()?.emulatorHosts?.[n],kg=n=>{const t=Sd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Cd=()=>ao()?.config,Rd=n=>ao()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Pd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[xi(JSON.stringify(e)),xi(JSON.stringify(a)),""].join(".")}const _s={};function Mg(){const n={prod:[],emulator:[]};for(const t of Object.keys(_s))_s[t]?n.emulator.push(t):n.prod.push(t);return n}function xg(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let fu=!1;function Nd(n,t){if(typeof window>"u"||typeof document>"u"||!Dr(window.location.host)||_s[n]===t||_s[n]||fu)return;_s[n]=t;function e(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Mg().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,b){E.setAttribute("width","24"),E.setAttribute("id",b),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{fu=!0,a()},E}function f(E,b){E.setAttribute("id",b),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=xg(r),b=e("text"),O=document.getElementById(b)||document.createElement("span"),D=e("learnmore"),P=document.getElementById(D)||document.createElement("a"),M=e("preprendIcon"),x=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const $=E.element;c($),f(P,D);const B=d();u(x,M),$.append(x,O,P,B),document.body.appendChild($)}i?(O.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function Ug(){const n=ao()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $g(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qg(){const n=bt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Hg(){return!Ug()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wg(){try{return typeof indexedDB=="object"}catch{return!1}}function zg(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{t(s.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="FirebaseError";class Ne extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Kg,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Gg(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ne(s,c,r)}}function Gg(n,t){return n.replace(Yg,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Yg=/\{\$([^}]+)}/g;function Qg(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Ae(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(pu(i)&&pu(a)){if(!Ae(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function pu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function hs(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function ds(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Xg(n,t){const e=new Jg(n,t);return e.subscribe.bind(e)}class Jg{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Zg(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=sa),s.error===void 0&&(s.error=sa),s.complete===void 0&&(s.complete=sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zg(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function sa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n){return n&&n._delegate?n._delegate:n}class Rn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Vg;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(n_(t))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=wn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=wn){return this.instances.has(t)}getOptions(t=wn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e_(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=wn){return this.component?this.component.multipleInstances?t:wn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e_(n){return n===wn?void 0:n}function n_(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new t_(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const s_={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},i_=Y.INFO,o_={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},a_=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=o_[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class dc{constructor(t){this.name=t,this._logLevel=i_,this._logHandler=a_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?s_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const c_=(n,t)=>t.some(e=>n instanceof e);let mu,gu;function l_(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u_(){return gu||(gu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dd=new WeakMap,Oa=new WeakMap,Od=new WeakMap,ia=new WeakMap,fc=new WeakMap;function h_(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{e(Ye(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Dd.set(e,n)}).catch(()=>{}),fc.set(t,n),t}function d_(n){if(Oa.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Oa.set(n,t)}let ka={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Oa.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Od.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ye(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function f_(n){ka=n(ka)}function p_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(oa(this),t,...e);return Od.set(r,t.sort?t.sort():[t]),Ye(r)}:u_().includes(n)?function(...t){return n.apply(oa(this),t),Ye(Dd.get(this))}:function(...t){return Ye(n.apply(oa(this),t))}}function m_(n){return typeof n=="function"?p_(n):(n instanceof IDBTransaction&&d_(n),c_(n,l_())?new Proxy(n,ka):n)}function Ye(n){if(n instanceof IDBRequest)return h_(n);if(ia.has(n))return ia.get(n);const t=m_(n);return t!==n&&(ia.set(n,t),fc.set(t,n)),t}const oa=n=>fc.get(n);function g_(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,t),c=Ye(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ye(a.result),u.oldVersion,u.newVersion,Ye(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const __=["get","getKey","getAll","getAllKeys","count"],y_=["put","add","delete","clear"],aa=new Map;function _u(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(aa.get(t))return aa.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=y_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||__.includes(e)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&u.done]))[0]};return aa.set(t,i),i}f_(n=>({...n,get:(t,e,r)=>_u(t,e)||n.get(t,e,r),has:(t,e)=>!!_u(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(v_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function v_(n){return n.getComponent()?.type==="VERSION"}const Va="@firebase/app",yu="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new dc("@firebase/app"),T_="@firebase/app-compat",w_="@firebase/analytics-compat",I_="@firebase/analytics",A_="@firebase/app-check-compat",b_="@firebase/app-check",S_="@firebase/auth",C_="@firebase/auth-compat",R_="@firebase/database",P_="@firebase/data-connect",N_="@firebase/database-compat",D_="@firebase/functions",O_="@firebase/functions-compat",k_="@firebase/installations",V_="@firebase/installations-compat",L_="@firebase/messaging",M_="@firebase/messaging-compat",x_="@firebase/performance",F_="@firebase/performance-compat",U_="@firebase/remote-config",$_="@firebase/remote-config-compat",B_="@firebase/storage",j_="@firebase/storage-compat",q_="@firebase/firestore",H_="@firebase/ai",W_="@firebase/firestore-compat",z_="firebase",K_="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="[DEFAULT]",G_={[Va]:"fire-core",[T_]:"fire-core-compat",[I_]:"fire-analytics",[w_]:"fire-analytics-compat",[b_]:"fire-app-check",[A_]:"fire-app-check-compat",[S_]:"fire-auth",[C_]:"fire-auth-compat",[R_]:"fire-rtdb",[P_]:"fire-data-connect",[N_]:"fire-rtdb-compat",[D_]:"fire-fn",[O_]:"fire-fn-compat",[k_]:"fire-iid",[V_]:"fire-iid-compat",[L_]:"fire-fcm",[M_]:"fire-fcm-compat",[x_]:"fire-perf",[F_]:"fire-perf-compat",[U_]:"fire-rc",[$_]:"fire-rc-compat",[B_]:"fire-gcs",[j_]:"fire-gcs-compat",[q_]:"fire-fst",[W_]:"fire-fst-compat",[H_]:"fire-vertex","fire-js":"fire-js",[z_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new Map,Y_=new Map,Ma=new Map;function Eu(n,t){try{n.container.addComponent(t)}catch(e){be.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function pr(n){const t=n.name;if(Ma.has(t))return be.debug(`There were multiple attempts to register component ${t}.`),!1;Ma.set(t,n);for(const e of Fi.values())Eu(e,n);for(const e of Y_.values())Eu(e,n);return!0}function pc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function jt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qe=new Os("app","Firebase",Q_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=K_;function kd(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:La,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Qe.create("bad-app-name",{appName:String(s)});if(e||(e=Cd()),!e)throw Qe.create("no-options");const i=Fi.get(s);if(i){if(Ae(e,i.options)&&Ae(r,i.config))return i;throw Qe.create("duplicate-app",{appName:s})}const a=new r_(s);for(const u of Ma.values())a.addComponent(u);const c=new X_(e,r,a);return Fi.set(s,c),c}function Vd(n=La){const t=Fi.get(n);if(!t&&n===La&&Cd())return kd();if(!t)throw Qe.create("no-app",{appName:n});return t}function Xe(n,t,e){let r=G_[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),i=t.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),be.warn(a.join(" "));return}pr(new Rn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="firebase-heartbeat-database",Z_=1,bs="firebase-heartbeat-store";let ca=null;function Ld(){return ca||(ca=g_(J_,Z_,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(bs)}catch(e){console.warn(e)}}}}).catch(n=>{throw Qe.create("idb-open",{originalErrorMessage:n.message})})),ca}async function ty(n){try{const e=(await Ld()).transaction(bs),r=await e.objectStore(bs).get(Md(n));return await e.done,r}catch(t){if(t instanceof Ne)be.warn(t.message);else{const e=Qe.create("idb-get",{originalErrorMessage:t?.message});be.warn(e.message)}}}async function vu(n,t){try{const r=(await Ld()).transaction(bs,"readwrite");await r.objectStore(bs).put(t,Md(n)),await r.done}catch(e){if(e instanceof Ne)be.warn(e.message);else{const r=Qe.create("idb-set",{originalErrorMessage:e?.message});be.warn(r.message)}}}function Md(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=1024,ny=30;class ry{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new iy(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>ny){const s=oy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){be.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tu(),{heartbeatsToSend:e,unsentEntries:r}=sy(this._heartbeatsCache.heartbeats),s=xi(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return be.warn(t),""}}}function Tu(){return new Date().toISOString().substring(0,10)}function sy(n,t=ey){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wu(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),wu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class iy{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wg()?zg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await ty(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return vu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return vu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function wu(n){return xi(JSON.stringify({version:2,heartbeats:n})).length}function oy(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){pr(new Rn("platform-logger",t=>new E_(t),"PRIVATE")),pr(new Rn("heartbeat",t=>new ry(t),"PRIVATE")),Xe(Va,yu,n),Xe(Va,yu,"esm2020"),Xe("fire-js","")}ay("");var cy="firebase",ly="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe(cy,ly,"app");function xd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uy=xd,Fd=new Os("auth","Firebase",xd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new dc("@firebase/auth");function hy(n,...t){Ui.logLevel<=Y.WARN&&Ui.warn(`Auth (${Or}): ${n}`,...t)}function Ai(n,...t){Ui.logLevel<=Y.ERROR&&Ui.error(`Auth (${Or}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n,...t){throw mc(n,...t)}function ie(n,...t){return mc(n,...t)}function Ud(n,t,e){const r={...uy(),[t]:e};return new Os("auth","Firebase",r).create(t,{appName:n.name})}function ve(n){return Ud(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mc(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Fd.create(n,...t)}function j(n,t,...e){if(!n)throw mc(t,...e)}function ye(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Ai(t),new Error(t)}function Se(n,t){n||ye(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(){return typeof self<"u"&&self.location?.href||""}function dy(){return Iu()==="http:"||Iu()==="https:"}function Iu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dy()||Bg()||"connection"in navigator)?navigator.onLine:!0}function py(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e){this.shortDelay=t,this.longDelay=e,Se(e>t,"Short delay should be less than long delay!"),this.isMobile=Fg()||jg()}get(){return fy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n,t){Se(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_y=new Vs(3e4,6e4);function un(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function De(n,t,e,r,s={}){return Bd(n,s,async()=>{let i={},a={};r&&(t==="GET"?a=r:i={body:JSON.stringify(r)});const c=ks({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:t,headers:u,...i};return $g()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Dr(n.emulatorConfig.host)&&(d.credentials="include"),$d.fetch()(await jd(n,n.config.apiHost,e,c),d)})}async function Bd(n,t,e){n._canInitEmulator=!1;const r={...my,...t};try{const s=new Ey(n),i=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw hi(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw hi(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw hi(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ud(n,f,d);Jt(n,f)}}catch(s){if(s instanceof Ne)throw s;Jt(n,"network-request-failed",{message:String(s)})}}async function Ls(n,t,e,r,s={}){const i=await De(n,t,e,r,s);return"mfaPendingCredential"in i&&Jt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function jd(n,t,e,r){const s=`${t}${e}?${r}`,i=n,a=i.config.emulator?gc(n.config,s):`${n.config.apiScheme}://${s}`;return gy.includes(e)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function yy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ey{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ie(this.auth,"network-request-failed")),_y.get())})}}function hi(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=ie(n,t,r);return s.customData._tokenResponse=e,s}function Au(n){return n!==void 0&&n.enterprise!==void 0}class vy{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return yy(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ty(n,t){return De(n,"GET","/v2/recaptchaConfig",un(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n,t){return De(n,"POST","/v1/accounts:delete",t)}async function $i(n,t){return De(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Iy(n,t=!1){const e=mt(n),r=await e.getIdToken(t),s=_c(r);j(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:ys(la(s.auth_time)),issuedAtTime:ys(la(s.iat)),expirationTime:ys(la(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function la(n){return Number(n)*1e3}function _c(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Ai("JWT malformed, contained fewer than 3 sections"),null;try{const s=bd(e);return s?JSON.parse(s):(Ai("Failed to decode base64 JWT payload"),null)}catch(s){return Ai("Caught error parsing JWT payload as JSON",s?.toString()),null}}function bu(n){const t=_c(n);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ne&&Ay(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ay({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(n){const t=n.auth,e=await n.getIdToken(),r=await mr(n,$i(t,{idToken:e}));j(r?.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?qd(s.providerUserInfo):[],a=Cy(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=c?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Fa(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function Sy(n){const t=mt(n);await Bi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Cy(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function qd(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(n,t){const e=await Bd(n,{},async()=>{const r=ks({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await jd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Dr(n.emulatorConfig.host)&&(u.credentials="include"),$d.fetch()(a,u)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Py(n,t){return De(n,"POST","/v2/accounts:revokeToken",un(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):bu(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){j(t.length!==0,"internal-error");const e=bu(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ry(t,e);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:i}=e,a=new lr;return r&&(j(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),s&&(j(typeof s=="string","internal-error",{appName:t}),a.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return ye("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,t){j(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class Xt{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new by(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await mr(this,this.stsTokenManager.getToken(this.auth,t));return j(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Iy(this,t)}reload(){return Sy(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Xt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(ve(this.auth));const t=await this.getIdToken();return await mr(this,wy(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,i=e.phoneNumber??void 0,a=e.photoURL??void 0,c=e.tenantId??void 0,u=e._redirectEventId??void 0,d=e.createdAt??void 0,f=e.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:b,providerData:O,stsTokenManager:D}=e;j(g&&D,t,"internal-error");const P=lr.fromJSON(this.name,D);j(typeof g=="string",t,"internal-error"),je(r,t.name),je(s,t.name),j(typeof E=="boolean",t,"internal-error"),j(typeof b=="boolean",t,"internal-error"),je(i,t.name),je(a,t.name),je(c,t.name),je(u,t.name),je(d,t.name),je(f,t.name);const M=new Xt({uid:g,auth:t,email:s,emailVerified:E,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:P,createdAt:d,lastLoginAt:f});return O&&Array.isArray(O)&&(M.providerData=O.map(x=>({...x}))),u&&(M._redirectEventId=u),M}static async _fromIdTokenResponse(t,e,r=!1){const s=new lr;s.updateFromServerResponse(e);const i=new Xt({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Bi(i),i}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?qd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new lr;c.updateFromIdToken(r);const u=new Xt({uid:s.localId,auth:t,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map;function Ee(n){Se(n instanceof Function,"Expected a class definition");let t=Su.get(n);return t?(Se(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Su.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Hd.type="NONE";const Cu=Hd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n,t,e){return`firebase:${n}:${t}:${e}`}class ur{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=bi(this.userKey,s.apiKey,i),this.fullPersistenceKey=bi("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await $i(this.auth,{idToken:t}).catch(()=>{});return e?Xt._fromGetAccountInfoResponse(this.auth,e,t):null}return Xt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new ur(Ee(Cu),t,r);const s=(await Promise.all(e.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Ee(Cu);const a=bi(r,t.config.apiKey,t.name);let c=null;for(const d of e)try{const f=await d._get(a);if(f){let g;if(typeof f=="string"){const E=await $i(t,{idToken:f}).catch(()=>{});if(!E)break;g=await Xt._fromGetAccountInfoResponse(t,E,f)}else g=Xt._fromJSON(t,f);d!==i&&(c=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ur(i,t,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(e.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new ur(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Gd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Qd(t))return"Blackberry";if(Xd(t))return"Webos";if(zd(t))return"Safari";if((t.includes("chrome/")||Kd(t))&&!t.includes("edge/"))return"Chrome";if(Yd(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if(r?.length===2)return r[1]}return"Other"}function Wd(n=bt()){return/firefox\//i.test(n)}function zd(n=bt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Kd(n=bt()){return/crios\//i.test(n)}function Gd(n=bt()){return/iemobile/i.test(n)}function Yd(n=bt()){return/android/i.test(n)}function Qd(n=bt()){return/blackberry/i.test(n)}function Xd(n=bt()){return/webos/i.test(n)}function yc(n=bt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ny(n=bt()){return yc(n)&&!!window.navigator?.standalone}function Dy(){return qg()&&document.documentMode===10}function Jd(n=bt()){return yc(n)||Yd(n)||Xd(n)||Qd(n)||/windows phone/i.test(n)||Gd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n,t=[]){let e;switch(n){case"Browser":e=Ru(bt());break;case"Worker":e=`${Ru(bt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Or}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=i=>new Promise((a,c)=>{try{const u=t(i);a(u)}catch(u){c(u)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ky(n,t={}){return De(n,"GET","/v2/passwordPolicy",un(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=6;class Ly{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??Vy,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pu(this),this.idTokenSubscription=new Pu(this),this.beforeStateQueue=new Oy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ee(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ur.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await $i(this,{idToken:t}),r=await Xt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(jt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(t);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Bi(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=py()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(jt(this.app))return Promise.reject(ve(this));const e=t?mt(t):null;return e&&j(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(ve(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return jt(this.app)?Promise.reject(ve(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await ky(this),e=new Ly(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Os("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Py(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ee(t)||this._popupRedirectResolver;j(e,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[Ee(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const i=typeof e=="function"?e:e.next.bind(e);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,s);return()=>{a=!0,u()}}else{const u=t.addObserver(e);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Zd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&hy(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ln(n){return mt(n)}class Pu{constructor(t){this.auth=t,this.observer=null,this.addObserver=Xg(e=>this.observer=e)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xy(n){co=n}function tf(n){return co.loadJS(n)}function Fy(){return co.recaptchaEnterpriseScript}function Uy(){return co.gapiScript}function $y(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class By{constructor(){this.enterprise=new jy}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class jy{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const qy="recaptcha-enterprise",ef="NO_RECAPTCHA";class Hy{constructor(t){this.type=qy,this.auth=Ln(t)}async verify(t="verify",e=!1){async function r(i){if(!e){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Ty(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new vy(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Au(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:t}).then(d=>{a(d)}).catch(()=>{a(ef)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new By().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!e&&Au(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Fy();u.length!==0&&(u+=c),tf(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Nu(n,t,e,r=!1,s=!1){const i=new Hy(n);let a;if(s)a=ef;else try{a=await i.verify(e)}catch{a=await i.verify(e,!0)}const c={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ua(n,t,e,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Nu(n,t,e,e==="getOobCode");return r(n,i)}else return r(n,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Nu(n,t,e,e==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(n,t){const e=pc(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),i=e.getOptions();if(Ae(i,t??{}))return s;Jt(s,"already-initialized")}return e.initialize({options:t})}function zy(n,t){const e=t?.persistence||[],r=(Array.isArray(e)?e:[e]).map(Ee);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t?.popupRedirectResolver)}function Ky(n,t,e){const r=Ln(n);j(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=nf(t),{host:a,port:c}=Gy(t),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(Ae(d,r.config.emulator)&&Ae(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Dr(a)?(Pd(`${i}//${a}${u}`),Nd("Auth",!0)):Yy()}function nf(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Gy(n){const t=nf(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Du(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Du(a)}}}function Du(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Yy(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ye("not implemented")}_getIdTokenResponse(t){return ye("not implemented")}_linkToIdToken(t,e){return ye("not implemented")}_getReauthenticationResolver(t){return ye("not implemented")}}async function Qy(n,t){return De(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,t){return Ls(n,"POST","/v1/accounts:signInWithPassword",un(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(n,t){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",un(n,t))}async function Zy(n,t){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",un(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Ec{constructor(t,e,r,s=null){super("password",r),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new Ss(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Ss(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e?.email&&e?.password){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ua(t,e,"signInWithPassword",Xy);case"emailLink":return Jy(t,{email:this._email,oobCode:this._password});default:Jt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ua(t,r,"signUpPassword",Qy);case"emailLink":return Zy(t,{idToken:e,email:this._email,oobCode:this._password});default:Jt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,t){return Ls(n,"POST","/v1/accounts:signInWithIdp",un(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="http://localhost";class Pn extends Ec{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Jt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...i}=e;if(!r||!s)return null;const a=new Pn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const e=this.buildRequest();return hr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,hr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,hr(t,e)}buildRequest(){const t={requestUri:tE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=ks(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nE(n){const t=hs(ds(n)).link,e=t?hs(ds(t)).deep_link_id:null,r=hs(ds(n)).deep_link_id;return(r?hs(ds(r)).link:null)||r||e||t||n}class vc{constructor(t){const e=hs(ds(t)),r=e.apiKey??null,s=e.oobCode??null,i=eE(e.mode??null);j(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=nE(t);try{return new vc(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.providerId=kr.PROVIDER_ID}static credential(t,e){return Ss._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=vc.parseLink(e);return j(r,"argument-error"),Ss._fromEmailAndCode(t,r.code,r.tenantId)}}kr.PROVIDER_ID="password";kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends rf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends Ms{constructor(){super("facebook.com")}static credential(t){return Pn._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return He.credentialFromTaggedObject(t)}static credentialFromError(t){return He.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return He.credential(t.oauthAccessToken)}catch{return null}}}He.FACEBOOK_SIGN_IN_METHOD="facebook.com";He.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pn._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return We.credentialFromTaggedObject(t)}static credentialFromError(t){return We.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return We.credential(e,r)}catch{return null}}}We.GOOGLE_SIGN_IN_METHOD="google.com";We.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Ms{constructor(){super("github.com")}static credential(t){return Pn._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ze.credentialFromTaggedObject(t)}static credentialFromError(t){return ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ze.credential(t.oauthAccessToken)}catch{return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends Ms{constructor(){super("twitter.com")}static credential(t,e){return Pn._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ke.credentialFromTaggedObject(t)}static credentialFromError(t){return Ke.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Ke.credential(e,r)}catch{return null}}}Ke.TWITTER_SIGN_IN_METHOD="twitter.com";Ke.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(n,t){return Ls(n,"POST","/v1/accounts:signUp",un(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const i=await Xt._fromIdTokenResponse(t,r,s),a=Ou(r);return new Nn({user:i,providerId:a,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Ou(r);return new Nn({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Ou(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Ne{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ji.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new ji(t,e,r,s)}}function sf(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ji._fromErrorAndOperation(n,i,t,r):i})}async function sE(n,t,e=!1){const r=await mr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Nn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n,t,e=!1){const{auth:r}=n;if(jt(r.app))return Promise.reject(ve(r));const s="reauthenticate";try{const i=await mr(n,sf(r,s,t,n),e);j(i.idToken,r,"internal-error");const a=_c(i.idToken);j(a,r,"internal-error");const{sub:c}=a;return j(n.uid===c,r,"user-mismatch"),Nn._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(n,t,e=!1){if(jt(n.app))return Promise.reject(ve(n));const r="signIn",s=await sf(n,r,t),i=await Nn._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(i.user),i}async function oE(n,t){return of(Ln(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(n){const t=Ln(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function aE(n,t,e){if(jt(n.app))return Promise.reject(ve(n));const r=Ln(n),a=await Ua(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rE).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&af(n),u}),c=await Nn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function cE(n,t,e){return jt(n.app)?Promise.reject(ve(n)):oE(mt(n),kr.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&af(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lE(n,t){return De(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uE(n,{displayName:t,photoURL:e}){if(t===void 0&&e===void 0)return;const r=mt(n),i={idToken:await r.getIdToken(),displayName:t,photoUrl:e,returnSecureToken:!0},a=await mr(r,lE(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function hE(n,t,e,r){return mt(n).onIdTokenChanged(t,e,r)}function dE(n,t,e){return mt(n).beforeAuthStateChanged(t,e)}function fE(n,t,e,r){return mt(n).onAuthStateChanged(t,e,r)}function pE(n){return mt(n).signOut()}const qi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(qi,"1"),this.storage.removeItem(qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=1e3,gE=10;class lf extends cf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jd(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!e&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Dy()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,gE):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},mE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}lf.type="LOCAL";const _E=lf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends cf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}uf.type="SESSION";const hf=uf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new lo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:i}=e.data,a=this.handlersMap[s];if(!a?.size)return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(e.origin,i)),u=await yE(c);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=Tc("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:d,data:e},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return window}function vE(n){oe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){return typeof oe().WorkerGlobalScope<"u"&&typeof oe().importScripts=="function"}async function TE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wE(){return navigator?.serviceWorker?.controller||null}function IE(){return df()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="firebaseLocalStorageDb",AE=1,Hi="firebaseLocalStorage",pf="fbase_key";class xs{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function uo(n,t){return n.transaction([Hi],t?"readwrite":"readonly").objectStore(Hi)}function bE(){const n=indexedDB.deleteDatabase(ff);return new xs(n).toPromise()}function $a(){const n=indexedDB.open(ff,AE);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Hi,{keyPath:pf})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Hi)?t(r):(r.close(),await bE(),t(await $a()))})})}async function ku(n,t,e){const r=uo(n,!0).put({[pf]:t,value:e});return new xs(r).toPromise()}async function SE(n,t){const e=uo(n,!1).get(t),r=await new xs(e).toPromise();return r===void 0?null:r.value}function Vu(n,t){const e=uo(n,!0).delete(t);return new xs(e).toPromise()}const CE=800,RE=3;class mf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $a(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>RE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return df()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lo._getInstance(IE()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await TE(),!this.activeServiceWorker)return;this.sender=new EE(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||wE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await $a();return await ku(t,qi,"1"),await Vu(t,qi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ku(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>SE(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Vu(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=uo(s,!1).getAll();return new xs(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mf.type="LOCAL";const PE=mf;new Vs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n,t){return t?Ee(t):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends Ec{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return hr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return hr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return hr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function DE(n){return of(n.auth,new wc(n),n.bypassAuthState)}function OE(n){const{auth:t,user:e}=n;return j(e,t,"internal-error"),iE(e,new wc(n),n.bypassAuthState)}async function kE(n){const{auth:t,user:e}=n;return j(e,t,"internal-error"),sE(e,new wc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,e,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return DE;case"linkViaPopup":case"linkViaRedirect":return kE;case"reauthViaPopup":case"reauthViaRedirect":return OE;default:Jt(this.auth,"internal-error")}}resolve(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new Vs(2e3,1e4);class ar extends gf{constructor(t,e,r,s,i){super(t,e,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const t=Tc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,VE.get())};t()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="pendingRedirect",Si=new Map;class ME extends gf{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Si.get(this.auth._key());if(!t){try{const r=await xE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Si.set(this.auth._key(),t)}return this.bypassAuthState||Si.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xE(n,t){const e=$E(t),r=UE(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function FE(n,t){Si.set(n._key(),t)}function UE(n){return Ee(n._redirectPersistence)}function $E(n){return bi(LE,n.config.apiKey,n.name)}async function BE(n,t,e=!1){if(jt(n.app))return Promise.reject(ve(n));const r=Ln(n),s=NE(r,t),a=await new ME(r,s,e).execute();return a&&!e&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=600*1e3;class qE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!HE(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!_f(t)){const r=t.error.code?.split("auth/")[1]||"internal-error";e.onError(ie(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=jE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lu(t))}saveEventToCache(t){this.cachedEventUids.add(Lu(t)),this.lastProcessedEventTime=Date.now()}}function Lu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function _f({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function HE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _f(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(n,t={}){return De(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KE=/^https?/;async function GE(n){if(n.config.emulator)return;const{authorizedDomains:t}=await WE(n);for(const e of t)try{if(YE(e))return}catch{}Jt(n,"unauthorized-domain")}function YE(n){const t=xa(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&a.hostname===r}if(!KE.test(e))return!1;if(zE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=new Vs(3e4,6e4);function Mu(){const n=oe().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function XE(n){return new Promise((t,e)=>{function r(){Mu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mu(),e(ie(n,"network-request-failed"))},timeout:QE.get()})}if(oe().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(oe().gapi?.load)r();else{const s=$y("iframefcb");return oe()[s]=()=>{gapi.load?r():e(ie(n,"network-request-failed"))},tf(`${Uy()}?onload=${s}`).catch(i=>e(i))}}).catch(t=>{throw Ci=null,t})}let Ci=null;function JE(n){return Ci=Ci||XE(n),Ci}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=new Vs(5e3,15e3),tv="__/auth/iframe",ev="emulator/auth/iframe",nv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sv(n){const t=n.config;j(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?gc(t,ev):`https://${n.config.authDomain}/${tv}`,r={apiKey:t.apiKey,appName:n.name,v:Or},s=rv.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${e}?${ks(r).slice(1)}`}async function iv(n){const t=await JE(n),e=oe().gapi;return j(e,n,"internal-error"),t.open({where:document.body,url:sv(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ie(n,"network-request-failed"),c=oe().setTimeout(()=>{i(a)},ZE.get());function u(){oe().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},av=500,cv=600,lv="_blank",uv="http://localhost";class xu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hv(n,t,e,r=av,s=cv){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...ov,width:r.toString(),height:s.toString(),top:i,left:a},d=bt().toLowerCase();e&&(c=Kd(d)?lv:e),Wd(d)&&(t=t||uv,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[b,O])=>`${E}${b}=${O},`,"");if(Ny(d)&&c!=="_self")return dv(t||"",c),new xu(null);const g=window.open(t||"",c,f);j(g,n,"popup-blocked");try{g.focus()}catch{}return new xu(g)}function dv(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="__/auth/handler",pv="emulator/auth/handler",mv=encodeURIComponent("fac");async function Fu(n,t,e,r,s,i){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Or,eventId:s};if(t instanceof rf){t.setDefaultLanguage(n.languageCode),a.providerId=t.providerId||"",Qg(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(t instanceof Ms){const f=t.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),d=u?`#${mv}=${encodeURIComponent(u)}`:"";return`${gv(n)}?${ks(c).slice(1)}${d}`}function gv({config:n}){return n.emulator?gc(n,pv):`https://${n.authDomain}/${fv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="webStorageSupport";class _v{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hf,this._completeRedirectFn=BE,this._overrideRedirectResult=FE}async _openPopup(t,e,r,s){Se(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Fu(t,e,r,xa(),s);return hv(t,i,Tc())}async _openRedirect(t,e,r,s){await this._originValidation(t);const i=await Fu(t,e,r,xa(),s);return vE(i),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:i}=this.eventManagers[e];return s?Promise.resolve(s):(Se(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await iv(t),r=new qE(t);return e.register("authEvent",s=>(j(s?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(ua,{type:ua},s=>{const i=s?.[0]?.[ua];i!==void 0&&e(!!i),Jt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=GE(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Jd()||zd()||yc()}}const yv=_v;var Uu="@firebase/auth",$u="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tv(n){pr(new Rn("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zd(n)},d=new My(r,s,i,u);return zy(d,e),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),pr(new Rn("auth-internal",t=>{const e=Ln(t.getProvider("auth").getImmediate());return(r=>new Ev(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(Uu,$u,vv(n)),Xe(Uu,$u,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=300,Iv=Rd("authIdTokenMaxAge")||wv;let Bu=null;const Av=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Iv)return;const s=e?.token;Bu!==s&&(Bu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bv(n=Vd()){const t=pc(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Wy(n,{popupRedirectResolver:yv,persistence:[PE,_E,hf]}),r=Rd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Av(i.toString());dE(e,a,()=>a(e.currentUser)),hE(e,c=>a(c))}}const s=Sd("auth");return s&&Ky(e,`http://${s}`),e}function Sv(){return document.getElementsByTagName("head")?.[0]??document}xy({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const i=ie("internal-error");i.customData=s,e(i)},r.type="text/javascript",r.charset="UTF-8",Sv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tv("Browser");var ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Je,yf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function y(){}y.prototype=m.prototype,T.F=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(w,v,I){for(var _=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)_[ot-2]=arguments[ot];return m.prototype[v].apply(w,_)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);const w=Array(16);if(typeof m=="string")for(var v=0;v<16;++v)w[v]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(v=0;v<16;++v)w[v]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],v=T.g[2];let I=T.g[3],_;_=m+(I^y&(v^I))+w[0]+3614090360&4294967295,m=y+(_<<7&4294967295|_>>>25),_=I+(v^m&(y^v))+w[1]+3905402710&4294967295,I=m+(_<<12&4294967295|_>>>20),_=v+(y^I&(m^y))+w[2]+606105819&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(m^v&(I^m))+w[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=m+(I^y&(v^I))+w[4]+4118548399&4294967295,m=y+(_<<7&4294967295|_>>>25),_=I+(v^m&(y^v))+w[5]+1200080426&4294967295,I=m+(_<<12&4294967295|_>>>20),_=v+(y^I&(m^y))+w[6]+2821735955&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(m^v&(I^m))+w[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=m+(I^y&(v^I))+w[8]+1770035416&4294967295,m=y+(_<<7&4294967295|_>>>25),_=I+(v^m&(y^v))+w[9]+2336552879&4294967295,I=m+(_<<12&4294967295|_>>>20),_=v+(y^I&(m^y))+w[10]+4294925233&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(m^v&(I^m))+w[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=m+(I^y&(v^I))+w[12]+1804603682&4294967295,m=y+(_<<7&4294967295|_>>>25),_=I+(v^m&(y^v))+w[13]+4254626195&4294967295,I=m+(_<<12&4294967295|_>>>20),_=v+(y^I&(m^y))+w[14]+2792965006&4294967295,v=I+(_<<17&4294967295|_>>>15),_=y+(m^v&(I^m))+w[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=m+(v^I&(y^v))+w[1]+4129170786&4294967295,m=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(m^y))+w[6]+3225465664&4294967295,I=m+(_<<9&4294967295|_>>>23),_=v+(m^y&(I^m))+w[11]+643717713&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^m&(v^I))+w[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=m+(v^I&(y^v))+w[5]+3593408605&4294967295,m=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(m^y))+w[10]+38016083&4294967295,I=m+(_<<9&4294967295|_>>>23),_=v+(m^y&(I^m))+w[15]+3634488961&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^m&(v^I))+w[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=m+(v^I&(y^v))+w[9]+568446438&4294967295,m=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(m^y))+w[14]+3275163606&4294967295,I=m+(_<<9&4294967295|_>>>23),_=v+(m^y&(I^m))+w[3]+4107603335&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^m&(v^I))+w[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=m+(v^I&(y^v))+w[13]+2850285829&4294967295,m=y+(_<<5&4294967295|_>>>27),_=I+(y^v&(m^y))+w[2]+4243563512&4294967295,I=m+(_<<9&4294967295|_>>>23),_=v+(m^y&(I^m))+w[7]+1735328473&4294967295,v=I+(_<<14&4294967295|_>>>18),_=y+(I^m&(v^I))+w[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=m+(y^v^I)+w[5]+4294588738&4294967295,m=y+(_<<4&4294967295|_>>>28),_=I+(m^y^v)+w[8]+2272392833&4294967295,I=m+(_<<11&4294967295|_>>>21),_=v+(I^m^y)+w[11]+1839030562&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^m)+w[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=m+(y^v^I)+w[1]+2763975236&4294967295,m=y+(_<<4&4294967295|_>>>28),_=I+(m^y^v)+w[4]+1272893353&4294967295,I=m+(_<<11&4294967295|_>>>21),_=v+(I^m^y)+w[7]+4139469664&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^m)+w[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=m+(y^v^I)+w[13]+681279174&4294967295,m=y+(_<<4&4294967295|_>>>28),_=I+(m^y^v)+w[0]+3936430074&4294967295,I=m+(_<<11&4294967295|_>>>21),_=v+(I^m^y)+w[3]+3572445317&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^m)+w[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=m+(y^v^I)+w[9]+3654602809&4294967295,m=y+(_<<4&4294967295|_>>>28),_=I+(m^y^v)+w[12]+3873151461&4294967295,I=m+(_<<11&4294967295|_>>>21),_=v+(I^m^y)+w[15]+530742520&4294967295,v=I+(_<<16&4294967295|_>>>16),_=y+(v^I^m)+w[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=m+(v^(y|~I))+w[0]+4096336452&4294967295,m=y+(_<<6&4294967295|_>>>26),_=I+(y^(m|~v))+w[7]+1126891415&4294967295,I=m+(_<<10&4294967295|_>>>22),_=v+(m^(I|~y))+w[14]+2878612391&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~m))+w[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=m+(v^(y|~I))+w[12]+1700485571&4294967295,m=y+(_<<6&4294967295|_>>>26),_=I+(y^(m|~v))+w[3]+2399980690&4294967295,I=m+(_<<10&4294967295|_>>>22),_=v+(m^(I|~y))+w[10]+4293915773&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~m))+w[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=m+(v^(y|~I))+w[8]+1873313359&4294967295,m=y+(_<<6&4294967295|_>>>26),_=I+(y^(m|~v))+w[15]+4264355552&4294967295,I=m+(_<<10&4294967295|_>>>22),_=v+(m^(I|~y))+w[6]+2734768916&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~m))+w[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=m+(v^(y|~I))+w[4]+4149444226&4294967295,m=y+(_<<6&4294967295|_>>>26),_=I+(y^(m|~v))+w[11]+3174756917&4294967295,I=m+(_<<10&4294967295|_>>>22),_=v+(m^(I|~y))+w[2]+718787259&4294967295,v=I+(_<<15&4294967295|_>>>17),_=y+(I^(v|~m))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.v=function(T,m){m===void 0&&(m=T.length);const y=m-this.blockSize,w=this.C;let v=this.h,I=0;for(;I<m;){if(v==0)for(;I<=y;)s(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(w[v++]=T.charCodeAt(I++),v==this.blockSize){s(this,w),v=0;break}}else for(;I<m;)if(w[v++]=T[I++],v==this.blockSize){s(this,w),v=0;break}}this.h=v,this.o+=m},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;m=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=m&255,m/=256;for(this.v(T),T=Array(16),m=0,y=0;y<4;++y)for(let w=0;w<32;w+=8)T[m++]=this.g[y]>>>w&255;return T};function i(T,m){var y=c;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;const y=[];let w=!0;for(let v=T.length-1;v>=0;v--){const I=T[v]|0;w&&I==m||(y[v]=I,w=!1)}this.g=y}var c={};function u(T){return-128<=T&&T<128?i(T,function(m){return new a([m|0],m<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return P(d(-T));const m=[];let y=1;for(let w=0;T>=y;w++)m[w]=T/y|0,y*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return P(f(T.substring(1),m));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(m,8));let w=g;for(let I=0;I<T.length;I+=8){var v=Math.min(8,T.length-I);const _=parseInt(T.substring(I,I+v),m);v<8?(v=d(Math.pow(m,v)),w=w.j(v).add(d(_))):(w=w.j(y),w=w.add(d(_)))}return w}var g=u(0),E=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-P(this).m();let T=0,m=1;for(let y=0;y<this.g.length;y++){const w=this.i(y);T+=(w>=0?w:4294967296+w)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(O(this))return"0";if(D(this))return"-"+P(this).toString(T);const m=d(Math.pow(T,6));var y=this;let w="";for(;;){const v=B(y,m).g;y=M(y,v.j(m));let I=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=v,O(y))return I+w;for(;I.length<6;)I="0"+I;w=I+w}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function O(T){if(T.h!=0)return!1;for(let m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=M(this,T),D(T)?-1:O(T)?0:1};function P(T){const m=T.g.length,y=[];for(let w=0;w<m;w++)y[w]=~T.g[w];return new a(y,~T.h).add(E)}n.abs=function(){return D(this)?P(this):this},n.add=function(T){const m=Math.max(this.g.length,T.g.length),y=[];let w=0;for(let v=0;v<=m;v++){let I=w+(this.i(v)&65535)+(T.i(v)&65535),_=(I>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);w=_>>>16,I&=65535,_&=65535,y[v]=_<<16|I}return new a(y,y[y.length-1]&-2147483648?-1:0)};function M(T,m){return T.add(P(m))}n.j=function(T){if(O(this)||O(T))return g;if(D(this))return D(T)?P(this).j(P(T)):P(P(this).j(T));if(D(T))return P(this.j(P(T)));if(this.l(b)<0&&T.l(b)<0)return d(this.m()*T.m());const m=this.g.length+T.g.length,y=[];for(var w=0;w<2*m;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(let v=0;v<T.g.length;v++){const I=this.i(w)>>>16,_=this.i(w)&65535,ot=T.i(v)>>>16,St=T.i(v)&65535;y[2*w+2*v]+=_*St,x(y,2*w+2*v),y[2*w+2*v+1]+=I*St,x(y,2*w+2*v+1),y[2*w+2*v+1]+=_*ot,x(y,2*w+2*v+1),y[2*w+2*v+2]+=I*ot,x(y,2*w+2*v+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function x(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function $(T,m){this.g=T,this.h=m}function B(T,m){if(O(m))throw Error("division by zero");if(O(T))return new $(g,g);if(D(T))return m=B(P(T),m),new $(P(m.g),P(m.h));if(D(m))return m=B(T,P(m)),new $(P(m.g),m.h);if(T.g.length>30){if(D(T)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var y=E,w=m;w.l(T)<=0;)y=K(y),w=K(w);var v=H(y,1),I=H(w,1);for(w=H(w,2),y=H(y,2);!O(w);){var _=I.add(w);_.l(T)<=0&&(v=v.add(y),I=_),w=H(w,1),y=H(y,1)}return m=M(T,v.j(m)),new $(v,m)}for(v=g;T.l(m)>=0;){for(y=Math.max(1,Math.floor(T.m()/m.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),I=d(y),_=I.j(m);D(_)||_.l(T)>0;)y-=w,I=d(y),_=I.j(m);O(I)&&(I=E),v=v.add(I),T=M(T,_)}return new $(v,T)}n.B=function(T){return B(this,T).h},n.and=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<m;w++)y[w]=this.i(w)&T.i(w);return new a(y,this.h&T.h)},n.or=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<m;w++)y[w]=this.i(w)|T.i(w);return new a(y,this.h|T.h)},n.xor=function(T){const m=Math.max(this.g.length,T.g.length),y=[];for(let w=0;w<m;w++)y[w]=this.i(w)^T.i(w);return new a(y,this.h^T.h)};function K(T){const m=T.g.length+1,y=[];for(let w=0;w<m;w++)y[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(y,T.h)}function H(T,m){const y=m>>5;m%=32;const w=T.g.length-y,v=[];for(let I=0;I<w;I++)v[I]=m>0?T.i(I+y)>>>m|T.i(I+y+1)<<32-m:T.i(I+y);return new a(v,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,yf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Je=a}).apply(typeof ju<"u"?ju:typeof self<"u"?self:typeof window<"u"?window:{});var di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ef,fs,vf,Ri,Ba,Tf,wf,If;(function(){var n,t=Object.defineProperty;function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof di=="object"&&di];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(o,l){if(l)t:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in h))break t;h=h[A]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function f(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,A,S){for(var k=Array(arguments.length-2),G=2;G<arguments.length;G++)k[G-2]=arguments[G];return l.prototype[A].apply(p,k)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function O(o,l){for(let p=1;p<arguments.length;p++){const A=arguments[p];var h=typeof A;if(h=h!="object"?h:A?Array.isArray(A)?"array":h:"null",h=="array"||h=="object"&&typeof A.length=="number"){h=o.length||0;const S=A.length||0;o.length=h+S;for(let k=0;k<S;k++)o[h+k]=A[k]}else o.push(A)}}class D{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function P(o){a.setTimeout(()=>{throw o},0)}function M(){var o=T;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class x{constructor(){this.h=this.g=null}add(l,h){const p=$.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var $=new D(()=>new B,o=>o.reset());class B{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let K,H=!1,T=new x,m=()=>{const o=Promise.resolve(void 0);K=()=>{o.then(y)}};function y(){for(var o;o=M();){try{o.h.call(o.g)}catch(h){P(h)}var l=$;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}H=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o})();function _(o){return/^[\s\xa0]*$/.test(o)}function ot(o,l){v.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}g(ot,v),ot.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ot.Z.h.call(this)},ot.prototype.h=function(){ot.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var St="closure_listenable_"+(Math.random()*1e6|0),Ct=0;function Vt(o,l,h,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=A,this.key=++Ct,this.da=this.fa=!1}function me(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function $t(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function jn(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function qn(o){const l={};for(const h in o)l[h]=o[h];return l}const ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gn(o,l){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)o[h]=p[h];for(let S=0;S<ke.length;S++)h=ke[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Yt(o){this.src=o,this.g={},this.h=0}Yt.prototype.add=function(o,l,h,p,A){const S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);const k=ge(o,l,p,A);return k>-1?(l=o[k],h||(l.fa=!1)):(l=new Vt(l,this.src,S,!!p,A),l.fa=h,o.push(l)),l};function Bt(o,l){const h=l.type;if(h in o.g){var p=o.g[h],A=Array.prototype.indexOf.call(p,l,void 0),S;(S=A>=0)&&Array.prototype.splice.call(p,A,1),S&&(me(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ge(o,l,h,p){for(let A=0;A<o.length;++A){const S=o[A];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return A}return-1}var Ve="closure_lm_"+(Math.random()*1e6|0),Qt={};function Hn(o,l,h,p,A){if(Array.isArray(l)){for(let S=0;S<l.length;S++)Hn(o,l[S],h,p,A);return null}return h=Js(h),o&&o[St]?o.J(l,h,c(p)?!!p.capture:!1,A):$o(o,l,h,!1,p,A)}function $o(o,l,h,p,A,S){if(!l)throw Error("Invalid event type");const k=c(A)?!!A.capture:!!A;let G=zn(o);if(G||(o[Ve]=G=new Yt(o)),h=G.add(l,h,p,k,S),h.proxy)return h;if(p=qr(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)I||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(Xs(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function qr(){function o(h){return l.call(o.src,o.listener,h)}const l=Bo;return o}function Qs(o,l,h,p,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)Qs(o,l[S],h,p,A);else p=c(p)?!!p.capture:!!p,h=Js(h),o&&o[St]?(o=o.i,S=String(l).toString(),S in o.g&&(l=o.g[S],h=ge(l,h,p,A),h>-1&&(me(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[S],o.h--)))):o&&(o=zn(o))&&(l=o.g[l.toString()],o=-1,l&&(o=ge(l,h,p,A)),(h=o>-1?l[o]:null)&&Wn(h))}function Wn(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[St])Bt(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Xs(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=zn(l))?(Bt(h,o),h.h==0&&(h.src=null,l[Ve]=null)):me(o)}}}function Xs(o){return o in Qt?Qt[o]:Qt[o]="on"+o}function Bo(o,l){if(o.da)o=!0;else{l=new ot(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&Wn(o),o=h.call(p,l)}return o}function zn(o){return o=o[Ve],o instanceof Yt?o:null}var Kn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Js(o){return typeof o=="function"?o:(o[Kn]||(o[Kn]=function(l){return o.handleEvent(l)}),o[Kn])}function gt(){w.call(this),this.i=new Yt(this),this.M=this,this.G=null}g(gt,w),gt.prototype[St]=!0,gt.prototype.removeEventListener=function(o,l,h,p){Qs(this,o,l,h,p)};function st(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new v(l,o);else if(l instanceof v)l.target=l.target||o;else{var A=l;l=new v(p,o),gn(l,A)}A=!0;let S,k;if(h)for(k=h.length-1;k>=0;k--)S=l.g=h[k],A=_e(S,p,!0,l)&&A;if(S=l.g=o,A=_e(S,p,!0,l)&&A,A=_e(S,p,!1,l)&&A,h)for(k=0;k<h.length;k++)S=l.g=h[k],A=_e(S,p,!1,l)&&A}gt.prototype.N=function(){if(gt.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)me(h[p]);delete o.g[l],o.h--}}this.G=null},gt.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},gt.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function _e(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let A=!0;for(let S=0;S<l.length;++S){const k=l[S];if(k&&!k.da&&k.capture==h){const G=k.listener,ft=k.ha||k.src;k.fa&&Bt(o.i,k),A=G.call(ft,p)!==!1&&A}}return A&&!p.defaultPrevented}function Zs(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Hr(o){o.g=Zs(()=>{o.g=null,o.i&&(o.i=!1,Hr(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Wr extends w{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Hr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(o){w.call(this),this.h=o,this.g={}}g(Le,w);var zr=[];function Kr(o){$t(o.g,function(l,h){this.g.hasOwnProperty(h)&&Wn(l)},o),o.g={}}Le.prototype.N=function(){Le.Z.N.call(this),Kr(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gn=a.JSON.stringify,eg=a.JSON.parse,ng=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Tl(){}function wl(){}var Gr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function jo(){v.call(this,"d")}g(jo,v);function qo(){v.call(this,"c")}g(qo,v);var _n={},Il=null;function ti(){return Il=Il||new gt}_n.Ia="serverreachability";function Al(o){v.call(this,_n.Ia,o)}g(Al,v);function Yr(o){const l=ti();st(l,new Al(l))}_n.STAT_EVENT="statevent";function bl(o,l){v.call(this,_n.STAT_EVENT,o),this.stat=l}g(bl,v);function Rt(o){const l=ti();st(l,new bl(l,o))}_n.Ja="timingevent";function Sl(o,l){v.call(this,_n.Ja,o),this.size=l}g(Sl,v);function Qr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function Xr(){this.g=!0}Xr.prototype.ua=function(){this.g=!1};function rg(o,l,h,p,A,S){o.info(function(){if(o.g)if(S){var k="",G=S.split("&");for(let tt=0;tt<G.length;tt++){var ft=G[tt].split("=");if(ft.length>1){const _t=ft[0];ft=ft[1];const re=_t.split("_");k=re.length>=2&&re[1]=="type"?k+(_t+"="+ft+"&"):k+(_t+"=redacted&")}}}else k=null;else k=S;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+h+`
`+k})}function sg(o,l,h,p,A,S,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+h+`
`+S+" "+k})}function Yn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+og(o,h)+(p?" "+p:"")})}function ig(o,l){o.info(function(){return"TIMEOUT: "+l})}Xr.prototype.info=function(){};function og(o,l){if(!o.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(o=0;o<S.length;o++)if(Array.isArray(S[o])){var h=S[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var A=p[0];if(A!="noop"&&A!="stop"&&A!="close")for(let k=1;k<p.length;k++)p[k]=""}}}}return Gn(S)}catch{return l}}var ei={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Cl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Rl;function Ho(){}g(Ho,Tl),Ho.prototype.g=function(){return new XMLHttpRequest},Rl=new Ho;function Jr(o){return encodeURIComponent(String(o))}function ag(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function Me(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new Le(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pl}function Pl(){this.i=null,this.g="",this.h=!1}var Nl={},Wo={};function zo(o,l,h){o.M=1,o.A=ri(ne(l)),o.u=h,o.R=!0,Dl(o,null)}function Dl(o,l){o.F=Date.now(),ni(o),o.B=ne(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Hl(h.i,"t",p),o.C=0,h=o.j.L,o.h=new Pl,o.g=cu(o.j,h?l:null,!o.u),o.P>0&&(o.O=new Wr(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(zr[0]=A.toString()),A=zr);for(let S=0;S<A.length;S++){const k=Hn(h,A[S],p||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.J?qn(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Yr(),rg(o.i,o.v,o.B,o.l,o.S,o.u)}Me.prototype.ba=function(o){o=o.target;const l=this.O;l&&Ue(o)==3?l.j():this.Y(o)},Me.prototype.Y=function(o){try{if(o==this.g)t:{const G=Ue(this.g),ft=this.g.ya(),tt=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||Xl(this.g)))){this.K||G!=4||ft==7||(ft==8||tt<=0?Yr(3):Yr(2)),Ko(this);var l=this.g.ca();this.X=l;var h=cg(this);if(this.o=l==200,sg(this.i,this.v,this.B,this.l,this.S,G,l),this.o){if(this.U&&!this.L){e:{if(this.g){var p,A=this.g;if((p=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(p)){var S=p;break e}}S=null}if(o=S)Yn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Go(this,o);else{this.o=!1,this.m=3,Rt(12),yn(this),Zr(this);break t}}if(this.R){o=!0;let _t;for(;!this.K&&this.C<h.length;)if(_t=lg(this,h),_t==Wo){G==4&&(this.m=4,Rt(14),o=!1),Yn(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==Nl){this.m=4,Rt(15),Yn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Yn(this.i,this.l,_t,null),Go(this,_t);if(Ol(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||h.length!=0||this.h.h||(this.m=1,Rt(16),o=!1),this.o=this.o&&o,!o)Yn(this.i,this.l,h,"[Invalid Chunked Response]"),yn(this),Zr(this);else if(h.length>0&&!this.W){this.W=!0;var k=this.j;k.g==this&&k.aa&&!k.P&&(k.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),na(k),k.P=!0,Rt(11))}}else Yn(this.i,this.l,h,null),Go(this,h);G==4&&yn(this),this.o&&!this.K&&(G==4?su(this.j,this):(this.o=!1,ni(this)))}else Ig(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),yn(this),Zr(this)}}}catch{}finally{}};function cg(o){if(!Ol(o))return o.g.la();const l=Xl(o.g);if(l==="")return"";let h="";const p=l.length,A=Ue(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return yn(o),Zr(o),"";o.h.i=new a.TextDecoder}for(let S=0;S<p;S++)o.h.h=!0,h+=o.h.i.decode(l[S],{stream:!(A&&S==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Ol(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function lg(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Wo:(h=Number(l.substring(h,p)),isNaN(h)?Nl:(p+=1,p+h>l.length?Wo:(l=l.slice(p,p+h),o.C=p+h,l)))}Me.prototype.cancel=function(){this.K=!0,yn(this)};function ni(o){o.T=Date.now()+o.H,kl(o,o.H)}function kl(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Qr(d(o.aa,o),l)}function Ko(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Me.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(ig(this.i,this.B),this.M!=2&&(Yr(),Rt(17)),yn(this),this.m=2,Zr(this)):kl(this,this.T-o)};function Zr(o){o.j.I==0||o.K||su(o.j,o)}function yn(o){Ko(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Kr(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Go(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Yo(h.h,o))){if(!o.L&&Yo(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){t:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)ci(h),oi(h);else break t;ea(h),Rt(18)}}else h.xa=A[1],0<h.xa-h.K&&A[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Qr(d(h.Va,h),6e3));Ml(h.h)<=1&&h.ta&&(h.ta=void 0)}else vn(h,11)}else if((o.L||h.g==o)&&ci(h),!_(l))for(A=h.Ba.g.parse(l),l=0;l<A.length;l++){let tt=A[l];const _t=tt[0];if(!(_t<=h.K))if(h.K=_t,tt=tt[1],h.I==2)if(tt[0]=="c"){h.M=tt[1],h.ba=tt[2];const re=tt[3];re!=null&&(h.ka=re,h.j.info("VER="+h.ka));const Tn=tt[4];Tn!=null&&(h.za=Tn,h.j.info("SVER="+h.za));const $e=tt[5];$e!=null&&typeof $e=="number"&&$e>0&&(p=1.5*$e,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Be=o.g;if(Be){const ui=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ui){var S=p.h;S.g||ui.indexOf("spdy")==-1&&ui.indexOf("quic")==-1&&ui.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Qo(S,S.h),S.h=null))}if(p.G){const ra=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;ra&&(p.wa=ra,nt(p.J,p.G,ra))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var k=o;if(p.na=au(p,p.L?p.ba:null,p.W),k.L){xl(p.h,k);var G=k,ft=p.O;ft&&(G.H=ft),G.D&&(Ko(G),ni(G)),p.g=k}else nu(p);h.i.length>0&&ai(h)}else tt[0]!="stop"&&tt[0]!="close"||vn(h,7);else h.I==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?vn(h,7):ta(h):tt[0]!="noop"&&h.l&&h.l.qa(tt),h.A=0)}}Yr(4)}catch{}}var ug=class{constructor(o,l){this.g=o,this.map=l}};function Vl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ll(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ml(o){return o.h?1:o.g?o.g.size:0}function Yo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Qo(o,l){o.g?o.g.add(l):o.h=l}function xl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Vl.prototype.cancel=function(){if(this.i=Fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Fl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return b(o.i)}var Ul=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hg(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let A,S=null;p>=0?(A=o[h].substring(0,p),S=o[h].substring(p+1)):A=o[h],l(A,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function xe(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof xe?(this.l=o.l,ts(this,o.j),this.o=o.o,this.g=o.g,es(this,o.u),this.h=o.h,Xo(this,Wl(o.i)),this.m=o.m):o&&(l=String(o).match(Ul))?(this.l=!1,ts(this,l[1]||"",!0),this.o=ns(l[2]||""),this.g=ns(l[3]||"",!0),es(this,l[4]),this.h=ns(l[5]||"",!0),Xo(this,l[6]||"",!0),this.m=ns(l[7]||"")):(this.l=!1,this.i=new ss(null,this.l))}xe.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(rs(l,$l,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(rs(l,$l,!0),"@"),o.push(Jr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(rs(h,h.charAt(0)=="/"?pg:fg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",rs(h,gg)),o.join("")},xe.prototype.resolve=function(o){const l=ne(this);let h=!!o.j;h?ts(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)es(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var A=l.h.lastIndexOf("/");A!=-1&&(p=l.h.slice(0,A+1)+p)}if(A=p,A==".."||A==".")p="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){p=A.lastIndexOf("/",0)==0,A=A.split("/");const S=[];for(let k=0;k<A.length;){const G=A[k++];G=="."?p&&k==A.length&&S.push(""):G==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),p&&k==A.length&&S.push("")):(S.push(G),p=!0)}p=S.join("/")}else p=A}return h?l.h=p:h=o.i.toString()!=="",h?Xo(l,Wl(o.i)):h=!!o.m,h&&(l.m=o.m),l};function ne(o){return new xe(o)}function ts(o,l,h){o.j=h?ns(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function es(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function Xo(o,l,h){l instanceof ss?(o.i=l,_g(o.i,o.l)):(h||(l=rs(l,mg)),o.i=new ss(l,o.l))}function nt(o,l,h){o.i.set(l,h)}function ri(o){return nt(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function ns(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function rs(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,dg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function dg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var $l=/[#\/\?@]/g,fg=/[#\?:]/g,pg=/[#\?]/g,mg=/[#\?@]/g,gg=/#/g;function ss(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function En(o){o.g||(o.g=new Map,o.h=0,o.i&&hg(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=ss.prototype,n.add=function(o,l){En(this),this.i=null,o=Qn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Bl(o,l){En(o),l=Qn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function jl(o,l){return En(o),l=Qn(o,l),o.g.has(l)}n.forEach=function(o,l){En(this),this.g.forEach(function(h,p){h.forEach(function(A){o.call(l,A,p,this)},this)},this)};function ql(o,l){En(o);let h=[];if(typeof l=="string")jl(o,l)&&(h=h.concat(o.g.get(Qn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return En(this),this.i=null,o=Qn(this,o),jl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=ql(this,o),o.length>0?String(o[0]):l):l};function Hl(o,l,h){Bl(o,l),h.length>0&&(o.i=null,o.g.set(Qn(o,l),b(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const A=Jr(h);h=ql(this,h);for(let S=0;S<h.length;S++){let k=A;h[S]!==""&&(k+="="+Jr(h[S])),o.push(k)}}return this.i=o.join("&")};function Wl(o){const l=new ss;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Qn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function _g(o,l){l&&!o.j&&(En(o),o.i=null,o.g.forEach(function(h,p){const A=p.toLowerCase();p!=A&&(Bl(this,p),Hl(this,A,h))},o)),o.j=l}function yg(o,l){const h=new Xr;if(a.Image){const p=new Image;p.onload=f(Fe,h,"TestLoadImage: loaded",!0,l,p),p.onerror=f(Fe,h,"TestLoadImage: error",!1,l,p),p.onabort=f(Fe,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=f(Fe,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Eg(o,l){const h=new Xr,p=new AbortController,A=setTimeout(()=>{p.abort(),Fe(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(A),S.ok?Fe(h,"TestPingServer: ok",!0,l):Fe(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Fe(h,"TestPingServer: error",!1,l)})}function Fe(o,l,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function vg(){this.g=new ng}function Jo(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Jo,Tl),Jo.prototype.g=function(){return new si(this.i,this.h)};function si(o,l){gt.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(si,gt),n=si.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,os(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;zl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function zl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?is(this):os(this),this.readyState==3&&zl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,is(this))},n.Na=function(o){this.g&&(this.response=o,is(this))},n.ga=function(){this.g&&is(this)};function is(o){o.readyState=4,o.l=null,o.j=null,o.B=null,os(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function os(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Kl(o){let l="";return $t(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Zo(o,l,h){t:{for(p in h){var p=!1;break t}p=!0}p||(h=Kl(h),typeof o=="string"?h!=null&&Jr(h):nt(o,l,h))}function at(o){gt.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(at,gt);var Tg=/^https?$/i,wg=["POST","PUT"];n=at.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Rl.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){Gl(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(wg,l,void 0)>=0)||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,k]of h)this.g.setRequestHeader(S,k);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(S){Gl(this,S)}};function Gl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Yl(o),ii(o)}function Yl(o){o.A||(o.A=!0,st(o,"complete"),st(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,st(this,"complete"),st(this,"abort"),ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),at.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ql(this):this.Xa())},n.Xa=function(){Ql(this)};function Ql(o){if(o.h&&typeof i<"u"){if(o.v&&Ue(o)==4)setTimeout(o.Ca.bind(o),0);else if(st(o,"readystatechange"),Ue(o)==4){o.h=!1;try{const S=o.ca();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var p;if(p=S===0){let k=String(o.D).match(Ul)[1]||null;!k&&a.self&&a.self.location&&(k=a.self.location.protocol.slice(0,-1)),p=!Tg.test(k?k.toLowerCase():"")}h=p}if(h)st(o,"complete"),st(o,"success");else{o.o=6;try{var A=Ue(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Yl(o)}}finally{ii(o)}}}}function ii(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||st(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ue(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ue(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),eg(l)}};function Xl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ig(o){const l={};o=(o.g&&Ue(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(_(o[p]))continue;var h=ag(o[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[A]||[];l[A]=S,S.push(h)}jn(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function as(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Jl(o){this.za=0,this.i=[],this.j=new Xr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=as("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=as("baseRetryDelayMs",5e3,o),this.Za=as("retryDelaySeedMs",1e4,o),this.Ta=as("forwardChannelMaxRetries",2,o),this.va=as("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Vl(o&&o.concurrentRequestLimit),this.Ba=new vg,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Jl.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){Rt(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=au(this,null,this.W),ai(this)};function ta(o){if(Zl(o),o.I==3){var l=o.V++,h=ne(o.J);if(nt(h,"SID",o.M),nt(h,"RID",l),nt(h,"TYPE","terminate"),cs(o,h),l=new Me(o,o.j,l),l.M=2,l.A=ri(ne(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=cu(l.j,null),l.g.ea(l.A)),l.F=Date.now(),ni(l)}ou(o)}function oi(o){o.g&&(na(o),o.g.cancel(),o.g=null)}function Zl(o){oi(o),o.v&&(a.clearTimeout(o.v),o.v=null),ci(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function ai(o){if(!Ll(o.h)&&!o.m){o.m=!0;var l=o.Ea;K||m(),H||(K(),H=!0),T.add(l,o),o.D=0}}function Ag(o,l){return Ml(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Qr(d(o.Ea,o,l),iu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new Me(this,this.j,o);let S=this.o;if(this.U&&(S?(S=qn(S),gn(S,this.U)):S=this.U),this.u!==null||this.R||(A.J=S,S=null),this.S)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=eu(this,A,l),h=ne(this.J),nt(h,"RID",o),nt(h,"CVER",22),this.G&&nt(h,"X-HTTP-Session-Id",this.G),cs(this,h),S&&(this.R?l="headers="+Jr(Kl(S))+"&"+l:this.u&&Zo(h,this.u,S)),Qo(this.h,A),this.Ra&&nt(h,"TYPE","init"),this.S?(nt(h,"$req",l),nt(h,"SID","null"),A.U=!0,zo(A,h,null)):zo(A,h,l),this.I=2}}else this.I==3&&(o?tu(this,o):this.i.length==0||Ll(this.h)||tu(this))};function tu(o,l){var h;l?h=l.l:h=o.V++;const p=ne(o.J);nt(p,"SID",o.M),nt(p,"RID",h),nt(p,"AID",o.K),cs(o,p),o.u&&o.o&&Zo(p,o.u,o.o),h=new Me(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=eu(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Qo(o.h,h),zo(h,p,l)}function cs(o,l){o.H&&$t(o.H,function(h,p){nt(l,p,h)}),o.l&&$t({},function(h,p){nt(l,p,h)})}function eu(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;t:{var A=o.i;let G=-1;for(;;){const ft=["count="+h];G==-1?h>0?(G=A[0].g,ft.push("ofs="+G)):G=0:ft.push("ofs="+G);let tt=!0;for(let _t=0;_t<h;_t++){var S=A[_t].g;const re=A[_t].map;if(S-=G,S<0)G=Math.max(0,A[_t].g-100),tt=!1;else try{S="req"+S+"_"||"";try{var k=re instanceof Map?re:Object.entries(re);for(const[Tn,$e]of k){let Be=$e;c($e)&&(Be=Gn($e)),ft.push(S+Tn+"="+encodeURIComponent(Be))}}catch(Tn){throw ft.push(S+"type="+encodeURIComponent("_badmap")),Tn}}catch{p&&p(re)}}if(tt){k=ft.join("&");break t}}k=void 0}return o=o.i.splice(0,h),l.G=o,k}function nu(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;K||m(),H||(K(),H=!0),T.add(l,o),o.A=0}}function ea(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Qr(d(o.Da,o),iu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,ru(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Qr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),oi(this),ru(this))};function na(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function ru(o){o.g=new Me(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=ne(o.na);nt(l,"RID","rpc"),nt(l,"SID",o.M),nt(l,"AID",o.K),nt(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&nt(l,"TO",o.ia),nt(l,"TYPE","xmlhttp"),cs(o,l),o.u&&o.o&&Zo(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=ri(ne(l)),h.u=null,h.R=!0,Dl(h,o)}n.Va=function(){this.C!=null&&(this.C=null,oi(this),ea(this),Rt(19))};function ci(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function su(o,l){var h=null;if(o.g==l){ci(o),na(o),o.g=null;var p=2}else if(Yo(o.h,l))h=l.G,xl(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var A=o.D;p=ti(),st(p,new Sl(p,h)),ai(o)}else nu(o);else if(A=l.m,A==3||A==0&&l.X>0||!(p==1&&Ag(o,l)||p==2&&ea(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),A){case 1:vn(o,5);break;case 4:vn(o,10);break;case 3:vn(o,6);break;default:vn(o,2)}}}function iu(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function vn(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const A=!p;p=new xe(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ts(p,"https"),ri(p),A?yg(p.toString(),h):Eg(p.toString(),h)}else Rt(2);o.I=0,o.l&&o.l.pa(l),ou(o),Zl(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function ou(o){if(o.I=0,o.ja=[],o.l){const l=Fl(o.h);(l.length!=0||o.i.length!=0)&&(O(o.ja,l),O(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function au(o,l,h){var p=h instanceof xe?ne(h):new xe(h);if(p.g!="")l&&(p.g=l+"."+p.g),es(p,p.u);else{var A=a.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;const S=new xe(null);p&&ts(S,p),l&&(S.g=l),A&&es(S,A),h&&(S.h=h),p=S}return h=o.G,l=o.wa,h&&l&&nt(p,h,l),nt(p,"VER",o.ka),cs(o,p),p}function cu(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new at(new Jo({ab:h})):new at(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function lu(){}n=lu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function li(){}li.prototype.g=function(o,l){return new Lt(o,l)};function Lt(o,l){gt.call(this),this.g=new Jl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!_(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Xn(this)}g(Lt,gt),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){ta(this.g)},Lt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Gn(o),o=h);l.i.push(new ug(l.Ya++,o)),l.I==3&&ai(l)},Lt.prototype.N=function(){this.g.l=null,delete this.j,ta(this.g),delete this.g,Lt.Z.N.call(this)};function uu(o){jo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}g(uu,jo);function hu(){qo.call(this),this.status=1}g(hu,qo);function Xn(o){this.g=o}g(Xn,lu),Xn.prototype.ra=function(){st(this.g,"a")},Xn.prototype.qa=function(o){st(this.g,new uu(o))},Xn.prototype.pa=function(o){st(this.g,new hu)},Xn.prototype.oa=function(){st(this.g,"b")},li.prototype.createWebChannel=li.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,If=function(){return new li},wf=function(){return ti()},Tf=_n,Ba={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ei.NO_ERROR=0,ei.TIMEOUT=8,ei.HTTP_ERROR=6,Ri=ei,Cl.COMPLETE="complete",vf=Cl,wl.EventType=Gr,Gr.OPEN="a",Gr.CLOSE="b",Gr.ERROR="c",Gr.MESSAGE="d",gt.prototype.listen=gt.prototype.J,fs=wl,at.prototype.listenOnce=at.prototype.K,at.prototype.getLastError=at.prototype.Ha,at.prototype.getLastErrorCode=at.prototype.ya,at.prototype.getStatus=at.prototype.ca,at.prototype.getResponseJson=at.prototype.La,at.prototype.getResponseText=at.prototype.la,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Fa,Ef=at}).apply(typeof di<"u"?di:typeof self<"u"?self:typeof window<"u"?window:{});const qu="@firebase/firestore",Hu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new dc("@firebase/firestore");function tr(){return Dn.logLevel}function L(n,...t){if(Dn.logLevel<=Y.DEBUG){const e=t.map(Ic);Dn.debug(`Firestore (${Vr}): ${n}`,...e)}}function Ce(n,...t){if(Dn.logLevel<=Y.ERROR){const e=t.map(Ic);Dn.error(`Firestore (${Vr}): ${n}`,...e)}}function gr(n,...t){if(Dn.logLevel<=Y.WARN){const e=t.map(Ic);Dn.warn(`Firestore (${Vr}): ${n}`,...e)}}function Ic(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Af(n,r,e)}function Af(n,t,e){let r=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ce(r),new Error(r)}function Z(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Af(t,s,r)}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ne{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(It.UNAUTHENTICATED)))}shutdown(){}}class Rv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Pv{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Z(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let i=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Te,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;t.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Te)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new bf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string",2055,{h:t}),new It(t)}}class Nv{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Dv{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Nv(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(It.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ov{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Z(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>r(i)))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(Z(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Wu(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=kv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%62))}return r}}function Q(n,t){return n<t?-1:n>t?1:0}function ja(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),i=t.charAt(r);if(s!==i)return ha(s)===ha(i)?Q(s,i):ha(s)?1:-1}return Q(n.length,t.length)}const Vv=55296,Lv=57343;function ha(n){const t=n.charCodeAt(0);return t>=Vv&&t<=Lv}function _r(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="__name__";class se{constructor(t,e,r){e===void 0?e=0:e>t.length&&q(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&q(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return se.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof se?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=se.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return Q(t.length,e.length)}static compareSegments(t,e){const r=se.isNumericId(t),s=se.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?se.extractNumericId(t).compare(se.extractNumericId(e)):ja(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Je.fromString(t.substring(4,t.length-2))}}class et extends se{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new et(e)}static emptyPath(){return new et([])}}const Mv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends se{construct(t,e,r){return new vt(t,e,r)}static isValidIdentifier(t){return Mv.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zu}static keyField(){return new vt([zu])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vt(e)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(et.fromString(t))}static fromName(t){return new F(et.fromString(t).popFirst(5))}static empty(){return new F(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new et(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n,t,e){if(!e)throw new V(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xv(n,t,e,r){if(t===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ku(n){if(!F.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gu(n){if(F.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Cf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ho(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Zt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ho(n);throw new V(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Fs(n,t){if(!Cf(n))throw new V(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){e=`Expected '${r}' field to equal '${i.value}'`;break}}if(e)throw new V(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=-62135596800,Qu=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Qu);return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Yu)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qu}_compareTo(t){return this.seconds===t.seconds?Q(this.nanoseconds,t.nanoseconds):Q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:rt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Fs(t,rt._jsonSchema))return new rt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Yu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}rt._jsonSchemaVersion="firestore/timestamp/1.0",rt._jsonSchema={type:dt("string",rt._jsonSchemaVersion),seconds:dt("number"),nanoseconds:dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(t){return new W(t)}static min(){return new W(new rt(0,0))}static max(){return new W(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=-1;function Fv(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=W.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new tn(s,F.empty(),t)}function Uv(n){return new tn(n.readTime,n.key,Cs)}class tn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new tn(W.min(),F.empty(),Cs)}static max(){return new tn(W.max(),F.empty(),Cs)}}function $v(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:Q(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Bv)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):R.reject(e)}static resolve(t){return new R(((e,r)=>{e(t)}))}static reject(t){return new R(((e,r)=>{r(t)}))}static waitFor(t){return new R(((e,r)=>{let s=0,i=0,a=!1;t.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&e()}),(u=>r(u)))})),a=!0,i===s&&e()}))}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next((s=>s?R.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,i)=>{r.push(e.call(this,s,i))})),this.waitFor(r)}static mapArray(t,e){return new R(((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;e(t[d]).next((f=>{a[d]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(t,e){return new R(((r,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):r()};i()}))}}function qv(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Mr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}fo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=-1;function po(n){return n==null}function Wi(n){return n===0&&1/n==-1/0}function Hv(n){return typeof n=="number"&&Number.isInteger(n)&&!Wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="";function Wv(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Xu(t)),t=zv(n.get(e),t);return Xu(t)}function zv(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":e+="";break;case Rf:e+="";break;default:e+=i}}return e}function Xu(n){return n+Rf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function hn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Pf(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e){this.comparator=t,this.root=e||Et.EMPTY}insert(t,e){return new it(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new it(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fi(this.root,t,this.comparator,!1)}getReverseIterator(){return new fi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fi(this.root,t,this.comparator,!0)}}class fi{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new Et(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw q(27949);return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(t,e,r,s,i){return this}insert(t,e,r){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.comparator=t,this.data=new it(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Zu(this.data.getIterator())}getIteratorFrom(t){return new Zu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class Zu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.fields=t,t.sort(vt.comparator)}static empty(){return new Mt([])}unionWith(t){let e=new pt(vt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Mt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _r(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Nf("Invalid base64 string: "+i):i}})(t);return new Tt(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const Kv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function en(n){if(Z(!!n,39018),typeof n=="string"){let t=0;const e=Kv.exec(n);if(Z(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nn(n){return typeof n=="string"?Tt.fromBase64String(n):Tt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="server_timestamp",Of="__type__",kf="__previous_value__",Vf="__local_write_time__";function Sc(n){return(n?.mapValue?.fields||{})[Of]?.stringValue===Df}function mo(n){const t=n.mapValue.fields[kf];return Sc(t)?mo(t):t}function Rs(n){const t=en(n.mapValue.fields[Vf].timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t,e,r,s,i,a,c,u,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f}}const zi="(default)";class Ps{constructor(t,e){this.projectId=t,this.database=e||zi}static empty(){return new Ps("","")}get isDefaultDatabase(){return this.database===zi}isEqual(t){return t instanceof Ps&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="__type__",Yv="__max__",pi={mapValue:{}},Mf="__vector__",Ki="value";function rn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sc(n)?4:Xv(n)?9007199254740991:Qv(n)?10:11:q(28295,{value:n})}function fe(n,t){if(n===t)return!0;const e=rn(n);if(e!==rn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Rs(n).isEqual(Rs(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=en(s.timestampValue),c=en(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,i){return nn(s.bytesValue).isEqual(nn(i.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,i){return ct(s.geoPointValue.latitude)===ct(i.geoPointValue.latitude)&&ct(s.geoPointValue.longitude)===ct(i.geoPointValue.longitude)})(n,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ct(s.integerValue)===ct(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ct(s.doubleValue),c=ct(i.doubleValue);return a===c?Wi(a)===Wi(c):isNaN(a)&&isNaN(c)}return!1})(n,t);case 9:return _r(n.arrayValue.values||[],t.arrayValue.values||[],fe);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Ju(a)!==Ju(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!fe(a[u],c[u])))return!1;return!0})(n,t);default:return q(52216,{left:n})}}function Ns(n,t){return(n.values||[]).find((e=>fe(e,t)))!==void 0}function yr(n,t){if(n===t)return 0;const e=rn(n),r=rn(t);if(e!==r)return Q(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,t.booleanValue);case 2:return(function(i,a){const c=ct(i.integerValue||i.doubleValue),u=ct(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,t);case 3:return th(n.timestampValue,t.timestampValue);case 4:return th(Rs(n),Rs(t));case 5:return ja(n.stringValue,t.stringValue);case 6:return(function(i,a){const c=nn(i),u=nn(a);return c.compareTo(u)})(n.bytesValue,t.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=Q(c[d],u[d]);if(f!==0)return f}return Q(c.length,u.length)})(n.referenceValue,t.referenceValue);case 8:return(function(i,a){const c=Q(ct(i.latitude),ct(a.latitude));return c!==0?c:Q(ct(i.longitude),ct(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return eh(n.arrayValue,t.arrayValue);case 10:return(function(i,a){const c=i.fields||{},u=a.fields||{},d=c[Ki]?.arrayValue,f=u[Ki]?.arrayValue,g=Q(d?.values?.length||0,f?.values?.length||0);return g!==0?g:eh(d,f)})(n.mapValue,t.mapValue);case 11:return(function(i,a){if(i===pi.mapValue&&a===pi.mapValue)return 0;if(i===pi.mapValue)return 1;if(a===pi.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const E=ja(u[g],f[g]);if(E!==0)return E;const b=yr(c[u[g]],d[f[g]]);if(b!==0)return b}return Q(u.length,f.length)})(n.mapValue,t.mapValue);default:throw q(23264,{he:e})}}function th(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return Q(n,t);const e=en(n),r=en(t),s=Q(e.seconds,r.seconds);return s!==0?s:Q(e.nanos,r.nanos)}function eh(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=yr(e[s],r[s]);if(i)return i}return Q(e.length,r.length)}function Er(n){return qa(n)}function qa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=en(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return nn(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return F.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=qa(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${qa(e.fields[a])}`;return s+"}"})(n.mapValue):q(61005,{value:n})}function Pi(n){switch(rn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=mo(n);return t?16+Pi(t):16;case 5:return 2*n.stringValue.length;case 6:return nn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Pi(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return hn(r.fields,((i,a)=>{s+=i.length+Pi(a)})),s})(n.mapValue);default:throw q(13486,{value:n})}}function nh(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ha(n){return!!n&&"integerValue"in n}function Cc(n){return!!n&&"arrayValue"in n}function rh(n){return!!n&&"nullValue"in n}function sh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ni(n){return!!n&&"mapValue"in n}function Qv(n){return(n?.mapValue?.fields||{})[Lf]?.stringValue===Mf}function Es(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return hn(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Es(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Es(n.arrayValue.values[e]);return t}return{...n}}function Xv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Yv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Ni(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Es(e)}setAll(t){let e=vt.emptyPath(),r={},s=[];t.forEach(((a,c)=>{if(!e.isImmediateParentOf(c)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=Es(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Ni(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Ni(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){hn(e,((s,i)=>t[s]=i));for(const s of r)delete t[s]}clone(){return new Ot(Es(this.value))}}function xf(n){const t=[];return hn(n.fields,((e,r)=>{const s=new vt([e]);if(Ni(r)){const i=xf(r.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new Mt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,s,i,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new At(t,0,W.min(),W.min(),W.min(),Ot.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,W.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,W.min(),W.min(),Ot.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,W.min(),W.min(),Ot.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,e){this.position=t,this.inclusive=e}}function ih(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),e.key):r=yr(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function oh(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!fe(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Jv(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{}class ht extends Ff{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new tT(t,e,r):e==="array-contains"?new rT(t,r):e==="in"?new sT(t,r):e==="not-in"?new iT(t,r):e==="array-contains-any"?new oT(t,r):new ht(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new eT(t,r):new nT(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(yr(e,this.value)):e!==null&&rn(this.value)===rn(e)&&this.matchesComparison(yr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends Ff{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new te(t,e)}matches(t){return Uf(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Uf(n){return n.op==="and"}function $f(n){return Zv(n)&&Uf(n)}function Zv(n){for(const t of n.filters)if(t instanceof te)return!1;return!0}function Wa(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+Er(n.value);if($f(n))return n.filters.map((t=>Wa(t))).join(",");{const t=n.filters.map((e=>Wa(e))).join(",");return`${n.op}(${t})`}}function Bf(n,t){return n instanceof ht?(function(r,s){return s instanceof ht&&r.op===s.op&&r.field.isEqual(s.field)&&fe(r.value,s.value)})(n,t):n instanceof te?(function(r,s){return s instanceof te&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Bf(a,s.filters[c])),!0):!1})(n,t):void q(19439)}function jf(n){return n instanceof ht?(function(e){return`${e.field.canonicalString()} ${e.op} ${Er(e.value)}`})(n):n instanceof te?(function(e){return e.op.toString()+" {"+e.getFilters().map(jf).join(" ,")+"}"})(n):"Filter"}class tT extends ht{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class eT extends ht{constructor(t,e){super(t,"in",e),this.keys=qf("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class nT extends ht{constructor(t,e){super(t,"not-in",e),this.keys=qf("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function qf(n,t){return(t.arrayValue?.values||[]).map((e=>F.fromName(e.referenceValue)))}class rT extends ht{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Cc(e)&&Ns(e.arrayValue,this.value)}}class sT extends ht{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ns(this.value.arrayValue,e)}}class iT extends ht{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ns(this.value.arrayValue,e)}}class oT extends ht{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Cc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Ns(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(t,e=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function ah(n,t=null,e=[],r=[],s=null,i=null,a=null){return new aT(n,t,e,r,s,i,a)}function Rc(n){const t=z(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Wa(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),po(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Er(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Er(r))).join(",")),t.Te=e}return t.Te}function Pc(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Jv(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Bf(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!oh(n.startAt,t.startAt)&&oh(n.endAt,t.endAt)}function za(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function cT(n,t,e,r,s,i,a,c){return new Us(n,t,e,r,s,i,a,c)}function Nc(n){return new Us(n)}function ch(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hf(n){return n.collectionGroup!==null}function vs(n){const t=z(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ie.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pt(vt.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ie.push(new Yi(i,r))})),e.has(vt.keyField().canonicalString())||t.Ie.push(new Yi(vt.keyField(),r))}return t.Ie}function ae(n){const t=z(n);return t.Ee||(t.Ee=lT(t,vs(n))),t.Ee}function lT(n,t){if(n.limitType==="F")return ah(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Yi(s.field,i)}));const e=n.endAt?new Gi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Gi(n.startAt.position,n.startAt.inclusive):null;return ah(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ka(n,t){const e=n.filters.concat([t]);return new Us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ga(n,t,e){return new Us(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function go(n,t){return Pc(ae(n),ae(t))&&n.limitType===t.limitType}function Wf(n){return`${Rc(ae(n))}|lt:${n.limitType}`}function er(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>jf(s))).join(", ")}]`),po(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Er(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Er(s))).join(",")),`Target(${r})`})(ae(n))}; limitType=${n.limitType})`}function _o(n,t){return t.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,t)&&(function(r,s){for(const i of vs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=ih(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,vs(r),s)||r.endAt&&!(function(a,c,u){const d=ih(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,vs(r),s))})(n,t)}function uT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zf(n){return(t,e)=>{let r=!1;for(const s of vs(n)){const i=hT(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function hT(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?yr(u,d):q(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){hn(this.inner,((e,r)=>{for(const[s,i]of r)t(s,i)}))}isEmpty(){return Pf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=new it(F.comparator);function Re(){return dT}const Kf=new it(F.comparator);function ps(...n){let t=Kf;for(const e of n)t=t.insert(e.key,e);return t}function Gf(n){let t=Kf;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function In(){return Ts()}function Yf(){return Ts()}function Ts(){return new Mn((n=>n.toString()),((n,t)=>n.isEqual(t)))}const fT=new it(F.comparator),pT=new pt(F.comparator);function X(...n){let t=pT;for(const e of n)t=t.add(e);return t}const mT=new pt(Q);function gT(){return mT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wi(t)?"-0":t}}function Qf(n){return{integerValue:""+n}}function _T(n,t){return Hv(t)?Qf(t):Dc(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this._=void 0}}function yT(n,t,e){return n instanceof Qi?(function(s,i){const a={fields:{[Of]:{stringValue:Df},[Vf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sc(i)&&(i=mo(i)),i&&(a.fields[kf]=i),{mapValue:a}})(e,t):n instanceof vr?Jf(n,t):n instanceof Tr?Zf(n,t):(function(s,i){const a=Xf(s,i),c=lh(a)+lh(s.Ae);return Ha(a)&&Ha(s.Ae)?Qf(c):Dc(s.serializer,c)})(n,t)}function ET(n,t,e){return n instanceof vr?Jf(n,t):n instanceof Tr?Zf(n,t):e}function Xf(n,t){return n instanceof Xi?(function(r){return Ha(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(t)?t:{integerValue:0}:null}class Qi extends yo{}class vr extends yo{constructor(t){super(),this.elements=t}}function Jf(n,t){const e=tp(t);for(const r of n.elements)e.some((s=>fe(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Tr extends yo{constructor(t){super(),this.elements=t}}function Zf(n,t){let e=tp(t);for(const r of n.elements)e=e.filter((s=>!fe(s,r)));return{arrayValue:{values:e}}}class Xi extends yo{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function lh(n){return ct(n.integerValue||n.doubleValue)}function tp(n){return Cc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,e){this.field=t,this.transform=e}}function vT(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof vr&&s instanceof vr||r instanceof Tr&&s instanceof Tr?_r(r.elements,s.elements,fe):r instanceof Xi&&s instanceof Xi?fe(r.Ae,s.Ae):r instanceof Qi&&s instanceof Qi})(n.transform,t.transform)}class TT{constructor(t,e){this.version=t,this.transformResults=e}}class Ht{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ht}static exists(t){return new Ht(void 0,t)}static updateTime(t){return new Ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Di(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Eo{}function np(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Oc(n.key,Ht.none()):new $s(n.key,n.data,Ht.none());{const e=n.data,r=Ot.empty();let s=new pt(vt.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new dn(n.key,r,new Mt(s.toArray()),Ht.none())}}function wT(n,t,e){n instanceof $s?(function(s,i,a){const c=s.value.clone(),u=hh(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,t,e):n instanceof dn?(function(s,i,a){if(!Di(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=hh(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(rp(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function ws(n,t,e,r){return n instanceof $s?(function(i,a,c,u){if(!Di(i.precondition,a))return c;const d=i.value.clone(),f=dh(i.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof dn?(function(i,a,c,u){if(!Di(i.precondition,a))return c;const d=dh(i.fieldTransforms,u,a),f=a.data;return f.setAll(rp(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,t,e,r):(function(i,a,c){return Di(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,t,e)}function IT(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),i=Xf(r.transform,s||null);i!=null&&(e===null&&(e=Ot.empty()),e.set(r.field,i))}return e||null}function uh(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&_r(r,s,((i,a)=>vT(i,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class $s extends Eo{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dn extends Eo{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rp(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function hh(n,t,e){const r=new Map;Z(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,ET(a,c,e[s]))}return r}function dh(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,yT(i,a,t))}return r}class Oc extends Eo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AT extends Eo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&wT(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ws(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ws(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Yf();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=e.has(s.key)?null:c;const u=np(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),X())}isEqual(t){return this.batchId===t.batchId&&_r(this.mutations,t.mutations,((e,r)=>uh(e,r)))&&_r(this.baseMutations,t.baseMutations,((e,r)=>uh(e,r)))}}class kc{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Z(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=(function(){return fT})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new kc(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,J;function RT(n){switch(n){case C.OK:return q(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function sp(n){if(n===void 0)return Ce("GRPC error has no .code"),C.UNKNOWN;switch(n){case ut.OK:return C.OK;case ut.CANCELLED:return C.CANCELLED;case ut.UNKNOWN:return C.UNKNOWN;case ut.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ut.INTERNAL:return C.INTERNAL;case ut.UNAVAILABLE:return C.UNAVAILABLE;case ut.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ut.NOT_FOUND:return C.NOT_FOUND;case ut.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ut.ABORTED:return C.ABORTED;case ut.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ut.DATA_LOSS:return C.DATA_LOSS;default:return q(39323,{code:n})}}(J=ut||(ut={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=new Je([4294967295,4294967295],0);function fh(n){const t=PT().encode(n),e=new yf;return e.update(t),new Uint8Array(e.digest())}function ph(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Je([e,r],0),new Je([s,i],0)]}class Vc{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new ms(`Invalid padding: ${e}`);if(r<0)throw new ms(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ms(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new ms(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Je.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(Je.fromNumber(r)));return s.compare(NT)===1&&(s=new Je([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=fh(t),[r,s]=ph(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Vc(i,s,e);return r.forEach((c=>a.insert(c))),a}insert(t){if(this.ge===0)return;const e=fh(t),[r,s]=ph(e);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Bs.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new vo(W.min(),s,new it(Q),Re(),X())}}class Bs{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Bs(r,e,X(),X(),X())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class ip{constructor(t,e){this.targetId=t,this.Ce=e}}class op{constructor(t,e,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class mh{constructor(){this.ve=0,this.Fe=gh(),this.Me=Tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=X(),e=X(),r=X();return this.Fe.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}})),new Bs(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=gh()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class DT{constructor(t){this.Ge=t,this.ze=new Map,this.je=Re(),this.Je=mi(),this.He=mi(),this.Ye=new it(Q)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:q(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,s)=>{this.rt(s)&&e(s)}))}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const i=s.target;if(za(i))if(r===0){const a=new F(i.path);this.et(e,a,At.newNoDocument(a,W.min()))}else Z(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const c=this.ut(t),u=c?this.ct(c,t,a):1;if(u!==0){this.it(e);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,c;try{a=nn(r).toUint8Array()}catch(u){if(u instanceof Nf)return gr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Vc(a,s,i)}catch(u){return gr(u instanceof ms?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.et(e,i,null),s++)})),s}Tt(t){const e=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&za(c.target)){const u=new F(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,At.newNoDocument(u,t))}i.Be&&(e.set(a,i.ke()),i.qe())}}));let r=X();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(t)));const s=new vo(t,e,this.Ye,this.je,r);return this.je=Re(),this.Je=mi(),this.He=mi(),this.Ye=new it(Q),s}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.Qe(e,1):s.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new mh,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new pt(Q),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new pt(Q),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||L("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new mh),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function mi(){return new it(F.comparator)}function gh(){return new it(F.comparator)}const OT={asc:"ASCENDING",desc:"DESCENDING"},kT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VT={and:"AND",or:"OR"};class LT{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ya(n,t){return n.useProto3Json||po(t)?t:{value:t}}function Ji(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ap(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function MT(n,t){return Ji(n,t.toTimestamp())}function ce(n){return Z(!!n,49232),W.fromTimestamp((function(e){const r=en(e);return new rt(r.seconds,r.nanos)})(n))}function Lc(n,t){return Qa(n,t).canonicalString()}function Qa(n,t){const e=(function(s){return new et(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function cp(n){const t=et.fromString(n);return Z(fp(t),10190,{key:t.toString()}),t}function Xa(n,t){return Lc(n.databaseId,t.path)}function da(n,t){const e=cp(t);if(e.get(1)!==n.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(up(e))}function lp(n,t){return Lc(n.databaseId,t)}function xT(n){const t=cp(n);return t.length===4?et.emptyPath():up(t)}function Ja(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function up(n){return Z(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function _h(n,t,e){return{name:Xa(n,t),fields:e.value.mapValue.fields}}function FT(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:q(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(d,f){return d.useProto3Json?(Z(f===void 0||typeof f=="string",58123),Tt.fromBase64String(f||"")):(Z(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Tt.fromUint8Array(f||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&(function(d){const f=d.code===void 0?C.UNKNOWN:sp(d.code);return new V(f,d.message||"")})(a);e=new op(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=da(n,r.document.name),i=ce(r.document.updateTime),a=r.document.createTime?ce(r.document.createTime):W.min(),c=new Ot({mapValue:{fields:r.document.fields}}),u=At.newFoundDocument(s,i,a,c),d=r.targetIds||[],f=r.removedTargetIds||[];e=new Oi(d,f,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=da(n,r.document),i=r.readTime?ce(r.readTime):W.min(),a=At.newNoDocument(s,i),c=r.removedTargetIds||[];e=new Oi([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=da(n,r.document),i=r.removedTargetIds||[];e=new Oi([],i,s,null)}else{if(!("filter"in t))return q(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new CT(s,i),c=r.targetId;e=new ip(c,a)}}return e}function UT(n,t){let e;if(t instanceof $s)e={update:_h(n,t.key,t.value)};else if(t instanceof Oc)e={delete:Xa(n,t.key)};else if(t instanceof dn)e={update:_h(n,t.key,t.data),updateMask:GT(t.fieldMask)};else{if(!(t instanceof AT))return q(16599,{Vt:t.type});e={verify:Xa(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Qi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof vr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Tr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw q(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:MT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)})(n,t.precondition)),e}function $T(n,t){return n&&n.length>0?(Z(t!==void 0,14353),n.map((e=>(function(s,i){let a=s.updateTime?ce(s.updateTime):ce(i);return a.isEqual(W.min())&&(a=ce(i)),new TT(a,s.transformResults||[])})(e,t)))):[]}function BT(n,t){return{documents:[lp(n,t.path)]}}function jT(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=lp(n,s);const i=(function(d){if(d.length!==0)return dp(te.create(d,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((f=>(function(E){return{field:nr(E.field),direction:WT(E.dir)}})(f)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ya(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:s}}function qT(n){let t=xT(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Z(r===1,65062);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=(function(g){const E=hp(g);return E instanceof te&&$f(E)?E.getFilters():[E]})(e.where));let a=[];e.orderBy&&(a=(function(g){return g.map((E=>(function(O){return new Yi(rr(O.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(E)))})(e.orderBy));let c=null;e.limit&&(c=(function(g){let E;return E=typeof g=="object"?g.value:g,po(E)?null:E})(e.limit));let u=null;e.startAt&&(u=(function(g){const E=!!g.before,b=g.values||[];return new Gi(b,E)})(e.startAt));let d=null;return e.endAt&&(d=(function(g){const E=!g.before,b=g.values||[];return new Gi(b,E)})(e.endAt)),cT(t,s,a,i,c,"F",u,d)}function HT(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function hp(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=rr(e.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=rr(e.unaryFilter.field);return ht.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=rr(e.unaryFilter.field);return ht.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rr(e.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ht.create(rr(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return te.create(e.compositeFilter.filters.map((r=>hp(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(e.compositeFilter.op))})(n):q(30097,{filter:n})}function WT(n){return OT[n]}function zT(n){return kT[n]}function KT(n){return VT[n]}function nr(n){return{fieldPath:n.canonicalString()}}function rr(n){return vt.fromServerFormat(n.fieldPath)}function dp(n){return n instanceof ht?(function(e){if(e.op==="=="){if(sh(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NAN"}};if(rh(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(sh(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NOT_NAN"}};if(rh(e.value))return{unaryFilter:{field:nr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(e.field),op:zT(e.op),value:e.value}}})(n):n instanceof te?(function(e){const r=e.getFilters().map((s=>dp(s)));return r.length===1?r[0]:{compositeFilter:{op:KT(e.op),filters:r}}})(n):q(54877,{filter:n})}function GT(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function fp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e,r,s,i=W.min(),a=W.min(),c=Tt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new Ge(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(t){this.yt=t}}function QT(n){const t=qT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ga(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(){this.Cn=new JT}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(tn.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(tn.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class JT{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new pt(et.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new pt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pp=41943040;class Dt{static withCacheSize(t){return new Dt(t,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(pp,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new wr(0)}static cr(){return new wr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="LruGarbageCollector",ZT=1048576;function vh([n,t],[e,r]){const s=Q(n,e);return s===0?Q(t,r):s}class tw{constructor(t){this.Ir=t,this.buffer=new pt(vh),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();vh(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ew{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){L(Eh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Mr(e)?L(Eh,"Ignoring IndexedDB error during garbage collection: ",e):await Lr(e)}await this.Vr(3e5)}))}}class nw{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return R.resolve(fo.ce);const r=new tw(e);return this.mr.forEachTarget(t,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(t,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(yh)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yh):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,s,i,a,c,u,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(t,r,e)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(t,r)))).next((g=>(d=Date.now(),tr()<=Y.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function rw(n,t){return new nw(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(){this.changes=new Mn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&ws(r.mutation,s,Mt.empty(),rt.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,X()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=X()){const s=In();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((i=>{let a=ps();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=In();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,X())))}populateOverlays(t,e,r){const s=[];return r.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,c)=>{e.set(a,c)}))}))}computeViews(t,e,r,s){let i=Re();const a=Ts(),c=(function(){return Ts()})();return e.forEach(((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof dn)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),ws(f.mutation,d,f.mutation.getFieldMask(),rt.now())):a.set(d.key,Mt.empty())})),this.recalculateAndSaveOverlays(t,i).next((u=>(u.forEach(((d,f)=>a.set(d,f))),e.forEach(((d,f)=>c.set(d,new iw(f,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(t,e){const r=Ts();let s=new it(((a,c)=>a-c)),i=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=e.get(u);if(d===null)return;let f=r.get(u)||Mt.empty();f=c.applyToLocalView(d,f),r.set(u,f);const g=(s.get(c.batchId)||X()).add(u);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,g=Yf();f.forEach((E=>{if(!i.has(E)){const b=np(e.get(E),r.get(E));b!==null&&g.set(E,b),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return R.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Hf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):R.resolve(In());let c=Cs,u=i;return a.next((d=>R.forEach(d,((f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?R.resolve():this.remoteDocumentCache.getEntry(t,f).next((E=>{u=u.insert(f,E)}))))).next((()=>this.populateOverlays(t,d,i))).next((()=>this.computeViews(t,u,d,X()))).next((f=>({batchId:c,changes:Gf(f)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next((r=>{let s=ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=ps();return this.indexManager.getCollectionParents(t,i).next((c=>R.forEach(c,(u=>{const d=(function(g,E){return new Us(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((f=>{f.forEach(((g,E)=>{a=a.insert(g,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,At.newInvalidDocument(f)))}));let c=ps();return a.forEach(((u,d)=>{const f=i.get(u);f!==void 0&&ws(f.mutation,d,Mt.empty(),rt.now()),_o(e,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:ce(s.createTime)}})(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(s){return{name:s.name,query:QT(s.bundledQuery),readTime:ce(s.readTime)}})(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.overlays=new it(F.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=In();return R.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,i)=>{this.St(t,e,i)})),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=In(),i=e.length+1,a=new F(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new it(((d,f)=>d-f));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=In(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=In(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,f)=>c.set(d,f))),!(c.size()>=s)););return R.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ST(e,r));let i=this.qr.get(e);i===void 0&&(i=X(),this.qr.set(e,i)),this.qr.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.Qr=new pt(yt.$r),this.Ur=new pt(yt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new yt(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new yt(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new F(new et([])),r=new yt(e,t),s=new yt(e,t+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new F(new et([])),r=new yt(e,t),s=new yt(e,t+1);let i=X();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new yt(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class yt{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return F.comparator(t.key,e.key)||Q(t.Yr,e.Yr)}static Kr(t,e){return Q(t.Yr,e.Yr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new pt(yt.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new bT(i,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new yt(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ei(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?bc:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new yt(e,0),s=new yt(e,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new pt(Q);return e.forEach((s=>{const i=new yt(s,0),a=new yt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new yt(new F(i),0);let c=new pt(Q);return this.Zr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Yr)),!0)}),a),R.resolve(this.ti(c))}ti(t){const e=[];return t.forEach((r=>{const s=this.Xr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){Z(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,(s=>{const i=new yt(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new yt(e,0),s=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(t){this.ri=t,this.docs=(function(){return new it(F.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Re();return e.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=Re();const a=e.path,c=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||$v(Uv(f),r)<=0||(s.has(f.key)||_o(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(t,e,r,s){q(9500)}ii(t,e){return R.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new dw(this)}getSize(t){return R.resolve(this.size)}}class dw extends sw{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Nr.addEntry(t,s)):this.Nr.removeEntry(r)})),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(t){this.persistence=t,this.si=new Mn((e=>Rc(e)),Pc),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.oi=0,this._i=new Mc,this.targetCount=0,this.ai=wr.ur()}forEachTarget(t,e){return this.si.forEach(((r,s)=>e(s))),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new wr(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),R.waitFor(i).next((()=>s))}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),R.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,e){this.ui={},this.overlays={},this.ci=new fo(0),this.li=!1,this.li=!0,this.hi=new lw,this.referenceDelegate=t(this),this.Pi=new fw(this),this.indexManager=new XT,this.remoteDocumentCache=(function(s){return new hw(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new YT(e),this.Ii=new aw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new cw,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new uw(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){L("MemoryPersistence","Starting transaction:",t);const s=new pw(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(t,e){return R.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class pw extends jv{constructor(t){super(),this.currentSequenceNumber=t}}class xc{constructor(t){this.persistence=t,this.Ri=new Mc,this.Vi=null}static mi(t){return new xc(t)}get fi(){if(this.Vi)return this.Vi;throw q(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,(r=>{const s=F.fromPath(r);return this.gi(t,s).next((i=>{i||e.removeEntry(s,W.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class Zi{constructor(t,e){this.persistence=t,this.pi=new Mn((r=>Wv(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=rw(this,e)}static mi(t,e){return new Zi(t,e)}Ei(){}di(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return R.forEach(this.pi,((r,s)=>this.br(t,r,s).next((i=>i?R.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(t,(a=>this.br(t,a,e).next((c=>{c||(r++,i.removeEntry(a,W.min()))})))).next((()=>i.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),R.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Pi(t.data.value)),e}br(t,e,r){return R.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.pi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=s}static As(t,e){let r=X(),s=X();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fc(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Hg()?8:qv(bt())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.ys(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(t,e,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new mw;return this.Ss(t,e,a).next((c=>{if(i.result=c,this.Vs)return this.bs(t,e,a,c.size)}))})).next((()=>i.result))}bs(t,e,r,s){return r.documentReadCount<this.fs?(tr()<=Y.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",er(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(tr()<=Y.DEBUG&&L("QueryEngine","Query:",er(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(tr()<=Y.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",er(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ae(e))):R.resolve())}ys(t,e){if(ch(e))return R.resolve(null);let r=ae(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ga(e,null,"F"),r=ae(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((i=>{const a=X(...i);return this.ps.getDocuments(t,a).next((c=>this.indexManager.getMinOffset(t,r).next((u=>{const d=this.Ds(e,c);return this.Cs(e,d,a,u.readTime)?this.ys(t,Ga(e,null,"F")):this.vs(t,d,e,u)}))))})))))}ws(t,e,r,s){return ch(e)||s.isEqual(W.min())?R.resolve(null):this.ps.getDocuments(t,r).next((i=>{const a=this.Ds(e,i);return this.Cs(e,a,r,s)?R.resolve(null):(tr()<=Y.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),er(e)),this.vs(t,a,e,Fv(s,Cs)).next((c=>c)))}))}Ds(t,e){let r=new pt(zf(t));return e.forEach(((s,i)=>{_o(t,i)&&(r=r.add(i))})),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(t,e,r){return tr()<=Y.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",er(e)),this.ps.getDocumentsMatchingQuery(t,e,tn.min(),r)}vs(t,e,r,s){return this.ps.getDocumentsMatchingQuery(t,r,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="LocalStore",_w=3e8;class yw{constructor(t,e,r,s){this.persistence=t,this.Fs=e,this.serializer=s,this.Ms=new it(Q),this.xs=new Mn((i=>Rc(i)),Pc),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ow(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Ew(n,t,e,r){return new yw(n,t,e,r)}async function gp(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=X();for(const d of s){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return e.localDocuments.getDocuments(r,u).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function vw(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),i=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,f){const g=d.batch,E=g.keys();let b=R.resolve();return E.forEach((O=>{b=b.next((()=>f.getEntry(u,O))).next((D=>{const P=d.docVersions.get(O);Z(P!==null,48541),D.version.compareTo(P)<0&&(g.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),f.addEntry(D)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(u,g)))})(e,r,t,i).next((()=>i.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=X();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function _p(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function Tw(n,t){const e=z(n),r=t.snapshotVersion;let s=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.Ns.newChangeBuffer({trackRemovals:!0});s=e.Ms;const c=[];t.targetChanges.forEach(((f,g)=>{const E=s.get(g);if(!E)return;c.push(e.Pi.removeMatchingKeys(i,f.removedDocuments,g).next((()=>e.Pi.addMatchingKeys(i,f.addedDocuments,g))));let b=E.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?b=b.withResumeToken(Tt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),s=s.insert(g,b),(function(D,P,M){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=_w?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0})(E,b,f)&&c.push(e.Pi.updateTargetData(i,b))}));let u=Re(),d=X();if(t.documentUpdates.forEach((f=>{t.resolvedLimboDocuments.has(f)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(ww(i,a,t.documentUpdates).next((f=>{u=f.ks,d=f.qs}))),!r.isEqual(W.min())){const f=e.Pi.getLastRemoteSnapshotVersion(i).next((g=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return R.waitFor(c).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(e.Ms=s,i)))}function ww(n,t,e){let r=X(),s=X();return e.forEach((i=>r=r.add(i))),t.getEntries(n,r).next((i=>{let a=Re();return e.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(W.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):L(Uc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function Iw(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=bc),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Aw(n,t){const e=z(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.Pi.getTargetData(r,t).next((i=>i?(s=i,R.resolve(s)):e.Pi.allocateTargetId(r).next((a=>(s=new Ge(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function Za(n,t,e){const r=z(n),s=r.Ms.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Mr(a))throw a;L(Uc,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(s.target)}function Th(n,t,e){const r=z(n);let s=W.min(),i=X();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,f){const g=z(u),E=g.xs.get(f);return E!==void 0?R.resolve(g.Ms.get(E)):g.Pi.getTargetData(d,f)})(r,a,ae(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,t,e?s:W.min(),e?i:X()))).next((c=>(bw(r,uT(t),c),{documents:c,Qs:i})))))}function bw(n,t,e){let r=n.Os.get(t)||W.min();e.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(t,r)}class wh{constructor(){this.activeTargetIds=gT()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sw{constructor(){this.Mo=new wh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new wh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="ConnectivityMonitor";class Ah{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){L(Ih,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){L(Ih,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi=null;function tc(){return gi===null?gi=(function(){return 268435456+Math.round(2147483648*Math.random())})():gi++,"0x"+gi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="RestConnection",Rw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Pw{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===zi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(t,e,r,s,i){const a=tc(),c=this.zo(t,e.toUriEncodedString());L(fa,`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(c),f=Dr(d);return this.Jo(t,c,u,r,f).then((g=>(L(fa,`Received RPC '${t}' ${a}: `,g),g)),(g=>{throw gr(fa,`RPC '${t}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Ho(t,e,r,s,i,a){return this.Go(t,e,r,s,i)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Vr})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),r&&r.headers.forEach(((s,i)=>t[i]=s))}zo(t,e){const r=Rw[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class Dw extends Pw{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,i){const a=tc();return new Promise(((c,u)=>{const d=new Ef;d.setWithCredentials(!0),d.listenOnce(vf.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ri.NO_ERROR:const g=d.getResponseJson();L(wt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(g)),c(g);break;case Ri.TIMEOUT:L(wt,`RPC '${t}' ${a} timed out`),u(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const E=d.getStatus();if(L(wt,`RPC '${t}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const O=b?.error;if(O&&O.status&&O.message){const D=(function(M){const x=M.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(x)>=0?x:C.UNKNOWN})(O.status);u(new V(D,O.message))}else u(new V(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(C.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(wt,`RPC '${t}' ${a} completed.`)}}));const f=JSON.stringify(s);L(wt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",f,r,15)}))}T_(t,e,r){const s=tc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=If(),c=wf(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const f=i.join("");L(wt,`Creating RPC '${t}' stream ${s}: ${f}`,u);const g=a.createWebChannel(f,u);this.I_(g);let E=!1,b=!1;const O=new Nw({Yo:P=>{b?L(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,P):(E||(L(wt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),E=!0),L(wt,`RPC '${t}' stream ${s} sending:`,P),g.send(P))},Zo:()=>g.close()}),D=(P,M,x)=>{P.listen(M,($=>{try{x($)}catch(B){setTimeout((()=>{throw B}),0)}}))};return D(g,fs.EventType.OPEN,(()=>{b||(L(wt,`RPC '${t}' stream ${s} transport opened.`),O.o_())})),D(g,fs.EventType.CLOSE,(()=>{b||(b=!0,L(wt,`RPC '${t}' stream ${s} transport closed`),O.a_(),this.E_(g))})),D(g,fs.EventType.ERROR,(P=>{b||(b=!0,gr(wt,`RPC '${t}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),O.a_(new V(C.UNAVAILABLE,"The operation could not be completed")))})),D(g,fs.EventType.MESSAGE,(P=>{if(!b){const M=P.data[0];Z(!!M,16349);const x=M,$=x?.error||x[0]?.error;if($){L(wt,`RPC '${t}' stream ${s} received error:`,$);const B=$.status;let K=(function(m){const y=ut[m];if(y!==void 0)return sp(y)})(B),H=$.message;K===void 0&&(K=C.INTERNAL,H="Unknown error status: "+B+" with message "+$.message),b=!0,O.a_(new V(K,H)),g.close()}else L(wt,`RPC '${t}' stream ${s} received:`,M),O.u_(M)}})),D(c,Tf.STAT_EVENT,(P=>{P.stat===Ba.PROXY?L(wt,`RPC '${t}' stream ${s} detected buffering proxy`):P.stat===Ba.NOPROXY&&L(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{O.__()}),0),O}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function pa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){return new LT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t,e,r=1e3,s=1.5,i=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="PersistentStream";class Ep{constructor(t,e,r,s,i,a,c,u){this.Mi=t,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new yp(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Ce(e.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===e&&this.G_(r,s)}),(r=>{t((()=>{const s=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return L(bh,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(L(bh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ow extends Ep{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=FT(this.serializer,t),r=(function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?ce(a.readTime):W.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Ja(this.serializer),e.addTarget=(function(i,a){let c;const u=a.target;if(c=za(u)?{documents:BT(i,u)}:{query:jT(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ap(i,a.resumeToken);const d=Ya(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=Ji(i,a.snapshotVersion.toTimestamp());const d=Ya(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,t);const r=HT(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Ja(this.serializer),e.removeTarget=t,this.q_(e)}}class kw extends Ep{constructor(t,e,r,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Z(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Z(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Z(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=$T(t.writeResults,t.commitTime),r=ce(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Ja(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>UT(this.serializer,r)))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{}class Lw extends Vw{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(t,Qa(e,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(C.UNKNOWN,i.toString())}))}Ho(t,e,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(t,Qa(e,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(C.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Mw{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ce(e),this.aa=!1):L("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="RemoteStore";class xw{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{xn(this)&&(L(On,"Restarting streams for network reachability change."),await(async function(u){const d=z(u);d.Ea.add(4),await js(d),d.Ra.set("Unknown"),d.Ea.delete(4),await wo(d)})(this))}))})),this.Ra=new Mw(r,s)}}async function wo(n){if(xn(n))for(const t of n.da)await t(!0)}async function js(n){for(const t of n.da)await t(!1)}function vp(n,t){const e=z(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),qc(e)?jc(e):xr(e).O_()&&Bc(e,t))}function $c(n,t){const e=z(n),r=xr(e);e.Ia.delete(t),r.O_()&&Tp(e,t),e.Ia.size===0&&(r.O_()?r.L_():xn(e)&&e.Ra.set("Unknown"))}function Bc(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(W.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xr(n).Y_(t)}function Tp(n,t){n.Va.Ue(t),xr(n).Z_(t)}function jc(n){n.Va=new DT({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),xr(n).start(),n.Ra.ua()}function qc(n){return xn(n)&&!xr(n).x_()&&n.Ia.size>0}function xn(n){return z(n).Ea.size===0}function wp(n){n.Va=void 0}async function Fw(n){n.Ra.set("Online")}async function Uw(n){n.Ia.forEach(((t,e)=>{Bc(n,t)}))}async function $w(n,t){wp(n),qc(n)?(n.Ra.ha(t),jc(n)):n.Ra.set("Unknown")}async function Bw(n,t,e){if(n.Ra.set("Online"),t instanceof op&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(n,t)}catch(r){L(On,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await to(n,r)}else if(t instanceof Oi?n.Va.Ze(t):t instanceof ip?n.Va.st(t):n.Va.tt(t),!e.isEqual(W.min()))try{const r=await _p(n.localStore);e.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(d);f&&i.Ia.set(d,f.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(Tt.EMPTY_BYTE_STRING,f.snapshotVersion)),Tp(i,u);const g=new Ge(f.target,u,d,f.sequenceNumber);Bc(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){L(On,"Failed to raise snapshot:",r),await to(n,r)}}async function to(n,t,e){if(!Mr(t))throw t;n.Ea.add(1),await js(n),n.Ra.set("Offline"),e||(e=()=>_p(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(On,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await wo(n)}))}function Ip(n,t){return t().catch((e=>to(n,e,t)))}async function Io(n){const t=z(n),e=sn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:bc;for(;jw(t);)try{const s=await Iw(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,qw(t,s)}catch(s){await to(t,s)}Ap(t)&&bp(t)}function jw(n){return xn(n)&&n.Ta.length<10}function qw(n,t){n.Ta.push(t);const e=sn(n);e.O_()&&e.X_&&e.ea(t.mutations)}function Ap(n){return xn(n)&&!sn(n).x_()&&n.Ta.length>0}function bp(n){sn(n).start()}async function Hw(n){sn(n).ra()}async function Ww(n){const t=sn(n);for(const e of n.Ta)t.ea(e.mutations)}async function zw(n,t,e){const r=n.Ta.shift(),s=kc.from(r,t,e);await Ip(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Io(n)}async function Kw(n,t){t&&sn(n).X_&&await(async function(r,s){if((function(a){return RT(a)&&a!==C.ABORTED})(s.code)){const i=r.Ta.shift();sn(r).B_(),await Ip(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Io(r)}})(n,t),Ap(n)&&bp(n)}async function Sh(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),L(On,"RemoteStore received new credentials");const r=xn(e);e.Ea.add(3),await js(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await wo(e)}async function Gw(n,t){const e=z(n);t?(e.Ea.delete(2),await wo(e)):t||(e.Ea.add(2),await js(e),e.Ra.set("Unknown"))}function xr(n){return n.ma||(n.ma=(function(e,r,s){const i=z(e);return i.sa(),new Ow(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:Fw.bind(null,n),t_:Uw.bind(null,n),r_:$w.bind(null,n),H_:Bw.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),qc(n)?jc(n):n.Ra.set("Unknown")):(await n.ma.stop(),wp(n))}))),n.ma}function sn(n){return n.fa||(n.fa=(function(e,r,s){const i=z(e);return i.sa(),new kw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Hw.bind(null,n),r_:Kw.bind(null,n),ta:Ww.bind(null,n),na:zw.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Io(n)):(await n.fa.stop(),n.Ta.length>0&&(L(On,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,c=new Hc(t,e,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wc(n,t){if(Ce("AsyncQueue",`${t}: ${n}`),Mr(n))return new V(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{static emptySet(t){return new dr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=ps(),this.sortedSet=new it(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof dr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new dr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.ga=new it(F.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):q(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Ir{constructor(t,e,r,s,i,a,c,u,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach((c=>{a.push({type:0,doc:c})})),new Ir(t,e,dr.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&go(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Qw{constructor(){this.queries=Rh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=z(e),i=s.queries;s.queries=Rh(),i.forEach(((a,c)=>{for(const u of c.Sa)u.onError(r)}))})(this,new V(C.ABORTED,"Firestore shutting down"))}}function Rh(){return new Mn((n=>Wf(n)),go)}async function Sp(n,t){const e=z(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.ba()&&t.Da()&&(r=2):(i=new Yw,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await e.onListen(s,!0);break;case 1:i.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Wc(a,`Initialization of query '${er(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&zc(e)}async function Cp(n,t){const e=z(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.Sa.indexOf(t);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=t.Da()?0:1:!i.ba()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Xw(n,t){const e=z(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&zc(e)}function Jw(n,t,e){const r=z(n),s=r.queries.get(t);if(s)for(const i of s.Sa)i.onError(e);r.queries.delete(t)}function zc(n){n.Ca.forEach((t=>{t.next()}))}var ec,Ph;(Ph=ec||(ec={})).Ma="default",Ph.Cache="cache";class Rp{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ir(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Ir.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ec.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t){this.key=t}}class Np{constructor(t){this.key=t}}class Zw{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=X(),this.mutatedKeys=X(),this.eu=zf(t),this.tu=new dr(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new Ch,s=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((f,g)=>{const E=s.get(f),b=_o(this.query,g)?g:null,O=!!E&&this.mutatedKeys.has(E.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let P=!1;E&&b?E.data.isEqual(b.data)?O!==D&&(r.track({type:3,doc:b}),P=!0):this.su(E,b)||(r.track({type:2,doc:b}),P=!0,(u&&this.eu(b,u)>0||d&&this.eu(b,d)<0)&&(c=!0)):!E&&b?(r.track({type:0,doc:b}),P=!0):E&&!b&&(r.track({type:1,doc:E}),P=!0,(u||d)&&(c=!0)),P&&(b?(a=a.add(b),i=D?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort(((f,g)=>(function(b,O){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Rt:P})}};return D(b)-D(O)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(r),s=s??!1;const c=e&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new Ir(this.query,t.tu,i,a,t.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Ch,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=X(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new Np(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new Pp(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=X();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Ir.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Kc="SyncEngine";class tI{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class eI{constructor(t){this.key=t,this.hu=!1}}class nI{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Mn((c=>Wf(c)),go),this.Iu=new Map,this.Eu=new Set,this.du=new it(F.comparator),this.Au=new Map,this.Ru=new Mc,this.Vu={},this.mu=new Map,this.fu=wr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function rI(n,t,e=!0){const r=Mp(n);let s;const i=r.Tu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Dp(r,t,e,!0),s}async function sI(n,t){const e=Mp(n);await Dp(e,t,!0,!1)}async function Dp(n,t,e,r){const s=await Aw(n.localStore,ae(t)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,e);let c;return r&&(c=await iI(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&vp(n.remoteStore,s),c}async function iI(n,t,e,r,s){n.pu=(g,E,b)=>(async function(D,P,M,x){let $=P.view.ru(M);$.Cs&&($=await Th(D.localStore,P.query,!1).then((({documents:T})=>P.view.ru(T,$))));const B=x&&x.targetChanges.get(P.targetId),K=x&&x.targetMismatches.get(P.targetId)!=null,H=P.view.applyChanges($,D.isPrimaryClient,B,K);return Dh(D,P.targetId,H.au),H.snapshot})(n,g,E,b);const i=await Th(n.localStore,t,!0),a=new Zw(t,i.Qs),c=a.ru(i.documents),u=Bs.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);Dh(n,e,d.au);const f=new tI(t,e,a);return n.Tu.set(t,f),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function oI(n,t,e){const r=z(n),s=r.Tu.get(t),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!go(a,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Za(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&$c(r.remoteStore,s.targetId),nc(r,s.targetId)})).catch(Lr)):(nc(r,s.targetId),await Za(r.localStore,s.targetId,!0))}async function aI(n,t){const e=z(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),$c(e.remoteStore,r.targetId))}async function cI(n,t,e){const r=mI(n);try{const s=await(function(a,c){const u=z(a),d=rt.now(),f=c.reduce(((b,O)=>b.add(O.key)),X());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let O=Re(),D=X();return u.Ns.getEntries(b,f).next((P=>{O=P,O.forEach(((M,x)=>{x.isValidDocument()||(D=D.add(M))}))})).next((()=>u.localDocuments.getOverlayedDocuments(b,O))).next((P=>{g=P;const M=[];for(const x of c){const $=IT(x,g.get(x.key).overlayedDocument);$!=null&&M.push(new dn(x.key,$,xf($.value.mapValue),Ht.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,M,c)})).next((P=>{E=P;const M=P.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(b,P.batchId,M)}))})).then((()=>({batchId:E.batchId,changes:Gf(g)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new it(Q)),d=d.insert(c,u),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,e),await qs(r,s.changes),await Io(r.remoteStore)}catch(s){const i=Wc(s,"Failed to persist write");e.reject(i)}}async function Op(n,t){const e=z(n);try{const r=await Tw(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Au.get(i);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Z(a.hu,14607):s.removedDocuments.size>0&&(Z(a.hu,42227),a.hu=!1))})),await qs(e,r,t)}catch(r){await Lr(r)}}function Nh(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=z(a);u.onlineState=c;let d=!1;u.queries.forEach(((f,g)=>{for(const E of g.Sa)E.va(c)&&(d=!0)})),d&&zc(u)})(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function lI(n,t,e){const r=z(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),i=s&&s.key;if(i){let a=new it(F.comparator);a=a.insert(i,At.newNoDocument(i,W.min()));const c=X().add(i),u=new vo(W.min(),new Map,new it(Q),a,c);await Op(r,u),r.du=r.du.remove(i),r.Au.delete(t),Gc(r)}else await Za(r.localStore,t,!1).then((()=>nc(r,t,e))).catch(Lr)}async function uI(n,t){const e=z(n),r=t.batch.batchId;try{const s=await vw(e.localStore,t);Vp(e,r,null),kp(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await qs(e,s)}catch(s){await Lr(s)}}async function hI(n,t,e){const r=z(n);try{const s=await(function(a,c){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next((g=>(Z(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f))).next((()=>u.localDocuments.getDocuments(d,f)))}))})(r.localStore,t);Vp(r,t,e),kp(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await qs(r,s)}catch(s){await Lr(s)}}function kp(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Vp(n,t,e){const r=z(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),r.Vu[r.currentUser.toKey()]=s}}function nc(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||Lp(n,r)}))}function Lp(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&($c(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),Gc(n))}function Dh(n,t,e){for(const r of e)r instanceof Pp?(n.Ru.addReference(r.key,t),dI(n,r)):r instanceof Np?(L(Kc,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||Lp(n,r.key)):q(19791,{wu:r})}function dI(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(L(Kc,"New document in limbo: "+e),n.Eu.add(r),Gc(n))}function Gc(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new F(et.fromString(t)),r=n.fu.next();n.Au.set(r,new eI(e)),n.du=n.du.insert(e,r),vp(n.remoteStore,new Ge(ae(Nc(e.path)),r,"TargetPurposeLimboResolution",fo.ce))}}async function qs(n,t,e){const r=z(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{a.push(r.pu(u,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const f=d?!d.fromCache:e?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(d){s.push(d);const f=Fc.As(u.targetId,d);i.push(f)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,d){const f=z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>R.forEach(d,(E=>R.forEach(E.Es,(b=>f.persistence.referenceDelegate.addReference(g,E.targetId,b))).next((()=>R.forEach(E.ds,(b=>f.persistence.referenceDelegate.removeReference(g,E.targetId,b)))))))))}catch(g){if(!Mr(g))throw g;L(Uc,"Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const b=f.Ms.get(E),O=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(O);f.Ms=f.Ms.insert(E,D)}}})(r.localStore,i))}async function fI(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){L(Kc,"User change. New user:",t.toKey());const r=await gp(e.localStore,t);e.currentUser=t,(function(i,a){i.mu.forEach((c=>{c.forEach((u=>{u.reject(new V(C.CANCELLED,a))}))})),i.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await qs(e,r.Ls)}}function pI(n,t){const e=z(n),r=e.Au.get(t);if(r&&r.hu)return X().add(r.key);{let s=X();const i=e.Iu.get(t);if(!i)return s;for(const a of i){const c=e.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Mp(n){const t=z(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Op.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pI.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lI.bind(null,t),t.Pu.H_=Xw.bind(null,t.eventManager),t.Pu.yu=Jw.bind(null,t.eventManager),t}function mI(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uI.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hI.bind(null,t),t}class eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=To(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Ew(this.persistence,new gw,t.initialUser,this.serializer)}Cu(t){return new mp(xc.mi,this.serializer)}Du(t){return new Sw}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eo.provider={build:()=>new eo};class gI extends eo{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){Z(this.persistence.referenceDelegate instanceof Zi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ew(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new mp((r=>Zi.mi(r,e)),this.serializer)}}class rc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fI.bind(null,this.syncEngine),await Gw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Qw})()}createDatastore(t){const e=To(t.databaseInfo.databaseId),r=(function(i){return new Dw(i)})(t.databaseInfo);return(function(i,a,c,u){return new Lw(i,a,c,u)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,i,a,c){return new xw(r,s,i,a,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Nh(this.syncEngine,e,0)),(function(){return Ah.v()?new Ah:new Cw})())}createSyncEngine(t,e){return(function(s,i,a,c,u,d,f){const g=new nI(s,i,a,c,u,d);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=z(e);L(On,"RemoteStore shutting down."),r.Ea.add(5),await js(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}rc.provider={build:()=>new rc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ce("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="FirestoreClient";class _I{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Ac.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{L(on,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(L(on,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Wc(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ma(n,t){n.asyncQueue.verifyOperationInProgress(),L(on,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await gp(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function Oh(n,t){n.asyncQueue.verifyOperationInProgress();const e=await yI(n);L(on,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Sh(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Sh(t.remoteStore,s))),n._onlineComponents=t}async function yI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(on,"Using user provided OfflineComponentProvider");try{await ma(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;gr("Error using user provided cache. Falling back to memory cache: "+e),await ma(n,new eo)}}else L(on,"Using default OfflineComponentProvider"),await ma(n,new gI(void 0));return n._offlineComponents}async function Fp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(on,"Using user provided OnlineComponentProvider"),await Oh(n,n._uninitializedComponentsProvider._online)):(L(on,"Using default OnlineComponentProvider"),await Oh(n,new rc))),n._onlineComponents}function EI(n){return Fp(n).then((t=>t.syncEngine))}async function Up(n){const t=await Fp(n),e=t.eventManager;return e.onListen=rI.bind(null,t.syncEngine),e.onUnlisten=oI.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=sI.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=aI.bind(null,t.syncEngine),e}function vI(n,t,e={}){const r=new Te;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new xp({next:E=>{f.Nu(),a.enqueueAndForget((()=>Cp(i,g)));const b=E.docs.has(c);!b&&E.fromCache?d.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&E.fromCache&&u&&u.source==="server"?d.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new Rp(Nc(c.path),f,{includeMetadataChanges:!0,qa:!0});return Sp(i,g)})(await Up(n),n.asyncQueue,t,e,r))),r.promise}function TI(n,t,e={}){const r=new Te;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const f=new xp({next:E=>{f.Nu(),a.enqueueAndForget((()=>Cp(i,g))),E.fromCache&&u.source==="server"?d.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new Rp(c,f,{includeMetadataChanges:!0,qa:!0});return Sp(i,g)})(await Up(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="firestore.googleapis.com",Vh=!0;class Lh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bp,this.ssl=Vh}else this.host=t.host,this.ssl=t.ssl??Vh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=pp;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ZT)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$p(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ao{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Cv;switch(r.type){case"firstParty":return new Dv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=kh.get(e);r&&(L("ComponentProvider","Removing Datastore"),kh.delete(e),r.terminate())})(this),Promise.resolve()}}function wI(n,t,e,r={}){n=Zt(n,Ao);const s=Dr(t),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${t}:${e}`;s&&(Pd(`https://${c}`),Nd("Firestore",!0)),i.host!==Bp&&i.host!==c&&gr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Ae(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=It.MOCK_USER;else{d=Lg(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new It(g)}n._authCredentials=new Rv(new bf(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Fr(this.firestore,t,this._query)}}class lt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ze(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Fs(e,lt._jsonSchema))return new lt(t,r||null,new F(et.fromString(e.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:dt("string",lt._jsonSchemaVersion),referencePath:dt("string")};class Ze extends Fr{constructor(t,e,r){super(t,e,Nc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new F(t))}withConverter(t){return new Ze(this.firestore,t,this._path)}}function HR(n,t,...e){if(n=mt(n),Sf("collection","path",t),n instanceof Ao){const r=et.fromString(t,...e);return Gu(r),new Ze(n,null,r)}{if(!(n instanceof lt||n instanceof Ze))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Gu(r),new Ze(n.firestore,null,r)}}function jp(n,t,...e){if(n=mt(n),arguments.length===1&&(t=Ac.newId()),Sf("doc","path",t),n instanceof Ao){const r=et.fromString(t,...e);return Ku(r),new lt(n,null,new F(r))}{if(!(n instanceof lt||n instanceof Ze))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Ku(r),new lt(n.firestore,n instanceof Ze?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="AsyncQueue";class xh{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new yp(this,"async_queue_retry"),this._c=()=>{const r=pa();r&&L(Mh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=pa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=pa();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Te;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Mr(t))throw t;L(Mh,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,Ce("INTERNAL UNHANDLED ERROR: ",Fh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Hc.createAndSchedule(this,t,e,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&q(47125,{Pc:Fh(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Fh(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Fn extends Ao{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new xh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new xh(t),this._firestoreClient=void 0,await t}}}function II(n,t){const e=typeof n=="object"?n:Vd(),r=typeof n=="string"?n:zi,s=pc(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=kg("firestore");i&&wI(s,...i)}return s}function Yc(n){if(n._terminated)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AI(n),n._firestoreClient}function AI(n){const t=n._freezeSettings(),e=(function(s,i,a,c){return new Gv(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,$p(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new _I(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qt(Tt.fromBase64String(t))}catch(e){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new qt(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Fs(t,qt._jsonSchema))return qt.fromBase64String(t.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:dt("string",qt._jsonSchemaVersion),bytes:dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Q(this._lat,t._lat)||Q(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:le._jsonSchemaVersion}}static fromJSON(t){if(Fs(t,le._jsonSchema))return new le(t.latitude,t.longitude)}}le._jsonSchemaVersion="firestore/geoPoint/1.0",le._jsonSchema={type:dt("string",le._jsonSchemaVersion),latitude:dt("number"),longitude:dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,t._values)}toJSON(){return{type:ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Fs(t,ue._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new ue(t.vectorValues);throw new V(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ue._jsonSchemaVersion="firestore/vectorValue/1.0",ue._jsonSchema={type:dt("string",ue._jsonSchemaVersion),vectorValues:dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=/^__.*__$/;class SI{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new dn(t,this.data,this.fieldMask,e,this.fieldTransforms):new $s(t,this.data,e,this.fieldTransforms)}}class qp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new dn(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Hp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ac:n})}}class So{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new So({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return no(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(Hp(this.Ac)&&bI.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class CI{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||To(t)}Cc(t,e,r,s=!1){return new So({Ac:t,methodName:e,Dc:r,path:vt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Co(n){const t=n._freezeSettings(),e=To(n._databaseId);return new CI(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Wp(n,t,e,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,t,e,s);Jc("Data must be an object, but it was:",a,r);const c=Kp(r,a);let u,d;if(i.merge)u=new Mt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const E=sc(t,g,e);if(!a.contains(E))throw new V(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Yp(f,E)||f.push(E)}u=new Mt(f),d=a.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,d=a.fieldTransforms;return new SI(new Ot(c),u,d)}class Ro extends Hs{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ro}}function zp(n,t,e){return new So({Ac:3,Dc:t.settings.Dc,methodName:n._methodName,fc:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Qc extends Hs{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=zp(this,t,!0),r=this.vc.map((i=>Un(i,e))),s=new vr(r);return new ep(t.path,s)}isEqual(t){return t instanceof Qc&&Ae(this.vc,t.vc)}}class Xc extends Hs{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=zp(this,t,!0),r=this.vc.map((i=>Un(i,e))),s=new Tr(r);return new ep(t.path,s)}isEqual(t){return t instanceof Xc&&Ae(this.vc,t.vc)}}function RI(n,t,e,r){const s=n.Cc(1,t,e);Jc("Data must be an object, but it was:",s,r);const i=[],a=Ot.empty();hn(r,((u,d)=>{const f=Zc(t,u,e);d=mt(d);const g=s.yc(f);if(d instanceof Ro)i.push(f);else{const E=Un(d,g);E!=null&&(i.push(f),a.set(f,E))}}));const c=new Mt(i);return new qp(a,c,s.fieldTransforms)}function PI(n,t,e,r,s,i){const a=n.Cc(1,t,e),c=[sc(t,r,e)],u=[s];if(i.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(sc(t,i[E])),u.push(i[E+1]);const d=[],f=Ot.empty();for(let E=c.length-1;E>=0;--E)if(!Yp(d,c[E])){const b=c[E];let O=u[E];O=mt(O);const D=a.yc(b);if(O instanceof Ro)d.push(b);else{const P=Un(O,D);P!=null&&(d.push(b),f.set(b,P))}}const g=new Mt(d);return new qp(f,g,a.fieldTransforms)}function NI(n,t,e,r=!1){return Un(e,n.Cc(r?4:3,t))}function Un(n,t){if(Gp(n=mt(n)))return Jc("Unsupported field value:",t,n),Kp(n,t);if(n instanceof Hs)return(function(r,s){if(!Hp(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=Un(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,t)}return(function(r,s){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _T(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:Ji(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ji(s.serializer,i)}}if(r instanceof le)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:ap(s.serializer,r._byteString)};if(r instanceof lt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ue)return(function(a,c){return{mapValue:{fields:{[Lf]:{stringValue:Mf},[Ki]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Dc(c.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${ho(r)}`)})(n,t)}function Kp(n,t){const e={};return Pf(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hn(n,((r,s)=>{const i=Un(s,t.mc(r));i!=null&&(e[r]=i)})),{mapValue:{fields:e}}}function Gp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof le||n instanceof qt||n instanceof lt||n instanceof Hs||n instanceof ue)}function Jc(n,t,e){if(!Gp(e)||!Cf(e)){const r=ho(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function sc(n,t,e){if((t=mt(t))instanceof bo)return t._internalPath;if(typeof t=="string")return Zc(n,t);throw no("Field path arguments must be of type string or ",n,!1,void 0,e)}const DI=new RegExp("[~\\*/\\[\\]]");function Zc(n,t,e){if(t.search(DI)>=0)throw no(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new bo(...t.split("."))._internalPath}catch{throw no(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function no(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new V(C.INVALID_ARGUMENT,c+n+u)}function Yp(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new OI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(tl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class OI extends Qp{data(){return super.data()}}function tl(n,t){return typeof t=="string"?Zc(n,t):t instanceof bo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class el{}class VI extends el{}function WR(n,t,...e){let r=[];t instanceof el&&r.push(t),r=r.concat(e),(function(i){const a=i.filter((u=>u instanceof nl)).length,c=i.filter((u=>u instanceof Po)).length;if(a>1||a>0&&c>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Po extends VI{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Po(t,e,r)}_apply(t){const e=this._parse(t);return Xp(t._query,e),new Fr(t.firestore,t.converter,Ka(t._query,e))}_parse(t){const e=Co(t.firestore);return(function(i,a,c,u,d,f,g){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){$h(g,f);const O=[];for(const D of g)O.push(Uh(u,i,D));E={arrayValue:{values:O}}}else E=Uh(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||$h(g,f),E=NI(c,a,g,f==="in"||f==="not-in");return ht.create(d,f,E)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function zR(n,t,e){const r=t,s=tl("where",n);return Po._create(s,r,e)}class nl extends el{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new nl(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:te.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Xp(a,u),a=Ka(a,u)})(t._query,e),new Fr(t.firestore,t.converter,Ka(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Uh(n,t,e){if(typeof(e=mt(e))=="string"){if(e==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hf(t)&&e.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!F.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nh(n,new F(r))}if(e instanceof lt)return nh(n,e._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ho(e)}.`)}function $h(n,t){if(!Array.isArray(n)||n.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Xp(n,t){const e=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class LI{convertValue(t,e="none"){switch(rn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ct(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(nn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw q(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return hn(t,((s,i)=>{r[s]=this.convertValue(i,e)})),r}convertVectorValue(t){const e=t.fields?.[Ki].arrayValue?.values?.map((r=>ct(r.doubleValue)));return new ue(e)}convertGeoPoint(t){return new le(ct(t.latitude),ct(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=mo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Rs(t));default:return null}}convertTimestamp(t){const e=en(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);Z(fp(r),9688,{name:t});const s=new Ps(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(e)||Ce(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class gs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Sn extends Qp{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(tl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Sn._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Sn._jsonSchema={type:dt("string",Sn._jsonSchemaVersion),bundleSource:dt("string","DocumentSnapshot"),bundleName:dt("string"),bundle:dt("string")};class ki extends Sn{data(t={}){return super.data(t)}}class fr{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new gs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new ki(this._firestore,this._userDataWriter,r.key,r,new gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new ki(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new ki(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:MI(c.type),doc:u,oldIndex:d,newIndex:f}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=fr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ac.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(e.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function MI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(n){n=Zt(n,lt);const t=Zt(n.firestore,Fn);return vI(Yc(t),n._key).then((e=>FI(t,n,e)))}fr._jsonSchemaVersion="firestore/querySnapshot/1.0",fr._jsonSchema={type:dt("string",fr._jsonSchemaVersion),bundleSource:dt("string","QuerySnapshot"),bundleName:dt("string"),bundle:dt("string")};class Zp extends LI{constructor(t){super(),this.firestore=t}convertBytes(t){return new qt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new lt(this.firestore,null,e)}}function GR(n){n=Zt(n,Fr);const t=Zt(n.firestore,Fn),e=Yc(t),r=new Zp(t);return kI(n._query),TI(e,n._query).then((s=>new fr(t,r,n,s)))}function xI(n,t,e){n=Zt(n,lt);const r=Zt(n.firestore,Fn),s=Jp(n.converter,t,e);return No(r,[Wp(Co(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ht.none())])}function YR(n,t,e,...r){n=Zt(n,lt);const s=Zt(n.firestore,Fn),i=Co(s);let a;return a=typeof(t=mt(t))=="string"||t instanceof bo?PI(i,"updateDoc",n._key,t,e,r):RI(i,"updateDoc",n._key,t),No(s,[a.toMutation(n._key,Ht.exists(!0))])}function QR(n){return No(Zt(n.firestore,Fn),[new Oc(n._key,Ht.none())])}function XR(n,t){const e=Zt(n.firestore,Fn),r=jp(n),s=Jp(n.converter,t);return No(e,[Wp(Co(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then((()=>r))}function No(n,t){return(function(r,s){const i=new Te;return r.asyncQueue.enqueueAndForget((async()=>cI(await EI(r),s,i))),i.promise})(Yc(n),t)}function FI(n,t,e){const r=e.docs.get(t._key),s=new Zp(n);return new Sn(n,s,t._key,r,new gs(e.hasPendingWrites,e.fromCache),t.converter)}function JR(...n){return new Qc("arrayUnion",n)}function ZR(...n){return new Xc("arrayRemove",n)}(function(t,e=!0){(function(s){Vr=s})(Or),pr(new Rn("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Fn(new Pv(r.getProvider("auth-internal")),new Ov(a,r.getProvider("app-check-internal")),(function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ps(d.options.projectId,f)})(a,s),a);return i={useFetchStreams:e,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Xe(qu,Hu,t),Xe(qu,Hu,"esm2020")})();const UI={apiKey:"AIzaSyAeqLB4zXNzqCnKuY3bNBlzrO-h7eVLnCw",authDomain:"bby28-758e7.firebaseapp.com",projectId:"bby28-758e7",appId:"1:147865864481:web:c6e35a67953e3bbabed660"},tm=kd(UI),Do=bv(tm),$I=II(tm);async function tP(n,t){return cE(Do,n,t)}async function eP(n,t,e,r){const i=(await aE(Do,t,e)).user;await uE(i,{displayName:n});try{await xI(jp($I,"users",i.uid),{name:n,email:t,country:"Canada",school:"BCIT",set:r.set,age:r.age}),console.log("Firestore user document created successfully!")}catch(a){console.error("Error creating user document in Firestore:",a)}return i}async function nP(){await pE(Do),window.location.href="index.html"}function BI(n){return fE(Do,n)}function rP(n){const t=(n?.code||"").toLowerCase();return{"auth/invalid-credential":"Wrong email or password.","auth/invalid-email":"Please enter a valid email address.","auth/user-not-found":"No account found with that email.","auth/wrong-password":"Incorrect password.","auth/too-many-requests":"Too many attempts. Try again later.","auth/email-already-in-use":"Email is already in use.","auth/weak-password":"Password too weak (min 6 characters).","auth/missing-password":"Password cannot be empty.","auth/network-request-failed":"Network error. Try again."}[t]||"Something went wrong. Please try again."}class jI extends HTMLElement{constructor(){super(),this.renderFooter()}renderFooter(){this.innerHTML=`
      <footer class="footer">
        <div class="containment">
          <a href="/assignments.html" class="text-decoration-none">
            <figure><img
                src="images/assignments_icon.png"
                alt="Assignments"
                class="footIcon"
              />
              <figcaption class="figcap">Assignments</figcaption>
            </figure>
          </a>
          <a href="main.html" class="text-decoration-none">
            <figure>
              <img
                src="images/map_icon.png"
                alt="Map"
                class="footIcon"
              />
              <figcaption class="figcap">Map</figcaption>
            </figure>
          </a>
          <a href="schedule.html" class="text-decoration-none">
            <figure>
              <img
                src="images/schedule_icon.png"
                alt="Schedule"
                class="footIcon"
              />
              <figcaption class="figcap">Schedule</figcaption>
            </figure>
          </a>
        </div>
      </footer>
    `}}customElements.define("site-footer",jI);var Pt="top",xt="bottom",Ft="right",Nt="left",Oo="auto",Ur=[Pt,xt,Ft,Nt],kn="start",Ar="end",em="clippingParents",rl="viewport",sr="popper",nm="reference",ic=Ur.reduce(function(n,t){return n.concat([t+"-"+kn,t+"-"+Ar])},[]),sl=[].concat(Ur,[Oo]).reduce(function(n,t){return n.concat([t,t+"-"+kn,t+"-"+Ar])},[]),rm="beforeRead",sm="read",im="afterRead",om="beforeMain",am="main",cm="afterMain",lm="beforeWrite",um="write",hm="afterWrite",dm=[rm,sm,im,om,am,cm,lm,um,hm];function pe(n){return n?(n.nodeName||"").toLowerCase():null}function Ut(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function Vn(n){var t=Ut(n).Element;return n instanceof t||n instanceof Element}function Wt(n){var t=Ut(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function il(n){if(typeof ShadowRoot>"u")return!1;var t=Ut(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function qI(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{},s=t.attributes[e]||{},i=t.elements[e];!Wt(i)||!pe(i)||(Object.assign(i.style,r),Object.keys(s).forEach(function(a){var c=s[a];c===!1?i.removeAttribute(a):i.setAttribute(a,c===!0?"":c)}))})}function HI(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(r){var s=t.elements[r],i=t.attributes[r]||{},a=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:e[r]),c=a.reduce(function(u,d){return u[d]="",u},{});!Wt(s)||!pe(s)||(Object.assign(s.style,c),Object.keys(i).forEach(function(u){s.removeAttribute(u)}))})}}const ol={name:"applyStyles",enabled:!0,phase:"write",fn:qI,effect:HI,requires:["computeStyles"]};function he(n){return n.split("-")[0]}var Cn=Math.max,ro=Math.min,br=Math.round;function oc(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function fm(){return!/^((?!chrome|android).)*safari/i.test(oc())}function Sr(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var r=n.getBoundingClientRect(),s=1,i=1;t&&Wt(n)&&(s=n.offsetWidth>0&&br(r.width)/n.offsetWidth||1,i=n.offsetHeight>0&&br(r.height)/n.offsetHeight||1);var a=Vn(n)?Ut(n):window,c=a.visualViewport,u=!fm()&&e,d=(r.left+(u&&c?c.offsetLeft:0))/s,f=(r.top+(u&&c?c.offsetTop:0))/i,g=r.width/s,E=r.height/i;return{width:g,height:E,top:f,right:d+g,bottom:f+E,left:d,x:d,y:f}}function al(n){var t=Sr(n),e=n.offsetWidth,r=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:r}}function pm(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&il(e)){var r=t;do{if(r&&n.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Pe(n){return Ut(n).getComputedStyle(n)}function WI(n){return["table","td","th"].indexOf(pe(n))>=0}function fn(n){return((Vn(n)?n.ownerDocument:n.document)||window.document).documentElement}function ko(n){return pe(n)==="html"?n:n.assignedSlot||n.parentNode||(il(n)?n.host:null)||fn(n)}function Bh(n){return!Wt(n)||Pe(n).position==="fixed"?null:n.offsetParent}function zI(n){var t=/firefox/i.test(oc()),e=/Trident/i.test(oc());if(e&&Wt(n)){var r=Pe(n);if(r.position==="fixed")return null}var s=ko(n);for(il(s)&&(s=s.host);Wt(s)&&["html","body"].indexOf(pe(s))<0;){var i=Pe(s);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return s;s=s.parentNode}return null}function Ws(n){for(var t=Ut(n),e=Bh(n);e&&WI(e)&&Pe(e).position==="static";)e=Bh(e);return e&&(pe(e)==="html"||pe(e)==="body"&&Pe(e).position==="static")?t:e||zI(n)||t}function cl(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function Is(n,t,e){return Cn(n,ro(t,e))}function KI(n,t,e){var r=Is(n,t,e);return r>e?e:r}function mm(){return{top:0,right:0,bottom:0,left:0}}function gm(n){return Object.assign({},mm(),n)}function _m(n,t){return t.reduce(function(e,r){return e[r]=n,e},{})}var GI=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,gm(typeof t!="number"?t:_m(t,Ur))};function YI(n){var t,e=n.state,r=n.name,s=n.options,i=e.elements.arrow,a=e.modifiersData.popperOffsets,c=he(e.placement),u=cl(c),d=[Nt,Ft].indexOf(c)>=0,f=d?"height":"width";if(!(!i||!a)){var g=GI(s.padding,e),E=al(i),b=u==="y"?Pt:Nt,O=u==="y"?xt:Ft,D=e.rects.reference[f]+e.rects.reference[u]-a[u]-e.rects.popper[f],P=a[u]-e.rects.reference[u],M=Ws(i),x=M?u==="y"?M.clientHeight||0:M.clientWidth||0:0,$=D/2-P/2,B=g[b],K=x-E[f]-g[O],H=x/2-E[f]/2+$,T=Is(B,H,K),m=u;e.modifiersData[r]=(t={},t[m]=T,t.centerOffset=T-H,t)}}function QI(n){var t=n.state,e=n.options,r=e.element,s=r===void 0?"[data-popper-arrow]":r;s!=null&&(typeof s=="string"&&(s=t.elements.popper.querySelector(s),!s)||pm(t.elements.popper,s)&&(t.elements.arrow=s))}const ym={name:"arrow",enabled:!0,phase:"main",fn:YI,effect:QI,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Cr(n){return n.split("-")[1]}var XI={top:"auto",right:"auto",bottom:"auto",left:"auto"};function JI(n,t){var e=n.x,r=n.y,s=t.devicePixelRatio||1;return{x:br(e*s)/s||0,y:br(r*s)/s||0}}function jh(n){var t,e=n.popper,r=n.popperRect,s=n.placement,i=n.variation,a=n.offsets,c=n.position,u=n.gpuAcceleration,d=n.adaptive,f=n.roundOffsets,g=n.isFixed,E=a.x,b=E===void 0?0:E,O=a.y,D=O===void 0?0:O,P=typeof f=="function"?f({x:b,y:D}):{x:b,y:D};b=P.x,D=P.y;var M=a.hasOwnProperty("x"),x=a.hasOwnProperty("y"),$=Nt,B=Pt,K=window;if(d){var H=Ws(e),T="clientHeight",m="clientWidth";if(H===Ut(e)&&(H=fn(e),Pe(H).position!=="static"&&c==="absolute"&&(T="scrollHeight",m="scrollWidth")),H=H,s===Pt||(s===Nt||s===Ft)&&i===Ar){B=xt;var y=g&&H===K&&K.visualViewport?K.visualViewport.height:H[T];D-=y-r.height,D*=u?1:-1}if(s===Nt||(s===Pt||s===xt)&&i===Ar){$=Ft;var w=g&&H===K&&K.visualViewport?K.visualViewport.width:H[m];b-=w-r.width,b*=u?1:-1}}var v=Object.assign({position:c},d&&XI),I=f===!0?JI({x:b,y:D},Ut(e)):{x:b,y:D};if(b=I.x,D=I.y,u){var _;return Object.assign({},v,(_={},_[B]=x?"0":"",_[$]=M?"0":"",_.transform=(K.devicePixelRatio||1)<=1?"translate("+b+"px, "+D+"px)":"translate3d("+b+"px, "+D+"px, 0)",_))}return Object.assign({},v,(t={},t[B]=x?D+"px":"",t[$]=M?b+"px":"",t.transform="",t))}function ZI(n){var t=n.state,e=n.options,r=e.gpuAcceleration,s=r===void 0?!0:r,i=e.adaptive,a=i===void 0?!0:i,c=e.roundOffsets,u=c===void 0?!0:c,d={placement:he(t.placement),variation:Cr(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:s,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,jh(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,jh(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ll={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ZI,data:{}};var _i={passive:!0};function tA(n){var t=n.state,e=n.instance,r=n.options,s=r.scroll,i=s===void 0?!0:s,a=r.resize,c=a===void 0?!0:a,u=Ut(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&d.forEach(function(f){f.addEventListener("scroll",e.update,_i)}),c&&u.addEventListener("resize",e.update,_i),function(){i&&d.forEach(function(f){f.removeEventListener("scroll",e.update,_i)}),c&&u.removeEventListener("resize",e.update,_i)}}const ul={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:tA,data:{}};var eA={left:"right",right:"left",bottom:"top",top:"bottom"};function Vi(n){return n.replace(/left|right|bottom|top/g,function(t){return eA[t]})}var nA={start:"end",end:"start"};function qh(n){return n.replace(/start|end/g,function(t){return nA[t]})}function hl(n){var t=Ut(n),e=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:e,scrollTop:r}}function dl(n){return Sr(fn(n)).left+hl(n).scrollLeft}function rA(n,t){var e=Ut(n),r=fn(n),s=e.visualViewport,i=r.clientWidth,a=r.clientHeight,c=0,u=0;if(s){i=s.width,a=s.height;var d=fm();(d||!d&&t==="fixed")&&(c=s.offsetLeft,u=s.offsetTop)}return{width:i,height:a,x:c+dl(n),y:u}}function sA(n){var t,e=fn(n),r=hl(n),s=(t=n.ownerDocument)==null?void 0:t.body,i=Cn(e.scrollWidth,e.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),a=Cn(e.scrollHeight,e.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),c=-r.scrollLeft+dl(n),u=-r.scrollTop;return Pe(s||e).direction==="rtl"&&(c+=Cn(e.clientWidth,s?s.clientWidth:0)-i),{width:i,height:a,x:c,y:u}}function fl(n){var t=Pe(n),e=t.overflow,r=t.overflowX,s=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+s+r)}function Em(n){return["html","body","#document"].indexOf(pe(n))>=0?n.ownerDocument.body:Wt(n)&&fl(n)?n:Em(ko(n))}function As(n,t){var e;t===void 0&&(t=[]);var r=Em(n),s=r===((e=n.ownerDocument)==null?void 0:e.body),i=Ut(r),a=s?[i].concat(i.visualViewport||[],fl(r)?r:[]):r,c=t.concat(a);return s?c:c.concat(As(ko(a)))}function ac(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function iA(n,t){var e=Sr(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function Hh(n,t,e){return t===rl?ac(rA(n,e)):Vn(t)?iA(t,e):ac(sA(fn(n)))}function oA(n){var t=As(ko(n)),e=["absolute","fixed"].indexOf(Pe(n).position)>=0,r=e&&Wt(n)?Ws(n):n;return Vn(r)?t.filter(function(s){return Vn(s)&&pm(s,r)&&pe(s)!=="body"}):[]}function aA(n,t,e,r){var s=t==="clippingParents"?oA(n):[].concat(t),i=[].concat(s,[e]),a=i[0],c=i.reduce(function(u,d){var f=Hh(n,d,r);return u.top=Cn(f.top,u.top),u.right=ro(f.right,u.right),u.bottom=ro(f.bottom,u.bottom),u.left=Cn(f.left,u.left),u},Hh(n,a,r));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function vm(n){var t=n.reference,e=n.element,r=n.placement,s=r?he(r):null,i=r?Cr(r):null,a=t.x+t.width/2-e.width/2,c=t.y+t.height/2-e.height/2,u;switch(s){case Pt:u={x:a,y:t.y-e.height};break;case xt:u={x:a,y:t.y+t.height};break;case Ft:u={x:t.x+t.width,y:c};break;case Nt:u={x:t.x-e.width,y:c};break;default:u={x:t.x,y:t.y}}var d=s?cl(s):null;if(d!=null){var f=d==="y"?"height":"width";switch(i){case kn:u[d]=u[d]-(t[f]/2-e[f]/2);break;case Ar:u[d]=u[d]+(t[f]/2-e[f]/2);break}}return u}function Rr(n,t){t===void 0&&(t={});var e=t,r=e.placement,s=r===void 0?n.placement:r,i=e.strategy,a=i===void 0?n.strategy:i,c=e.boundary,u=c===void 0?em:c,d=e.rootBoundary,f=d===void 0?rl:d,g=e.elementContext,E=g===void 0?sr:g,b=e.altBoundary,O=b===void 0?!1:b,D=e.padding,P=D===void 0?0:D,M=gm(typeof P!="number"?P:_m(P,Ur)),x=E===sr?nm:sr,$=n.rects.popper,B=n.elements[O?x:E],K=aA(Vn(B)?B:B.contextElement||fn(n.elements.popper),u,f,a),H=Sr(n.elements.reference),T=vm({reference:H,element:$,placement:s}),m=ac(Object.assign({},$,T)),y=E===sr?m:H,w={top:K.top-y.top+M.top,bottom:y.bottom-K.bottom+M.bottom,left:K.left-y.left+M.left,right:y.right-K.right+M.right},v=n.modifiersData.offset;if(E===sr&&v){var I=v[s];Object.keys(w).forEach(function(_){var ot=[Ft,xt].indexOf(_)>=0?1:-1,St=[Pt,xt].indexOf(_)>=0?"y":"x";w[_]+=I[St]*ot})}return w}function cA(n,t){t===void 0&&(t={});var e=t,r=e.placement,s=e.boundary,i=e.rootBoundary,a=e.padding,c=e.flipVariations,u=e.allowedAutoPlacements,d=u===void 0?sl:u,f=Cr(r),g=f?c?ic:ic.filter(function(O){return Cr(O)===f}):Ur,E=g.filter(function(O){return d.indexOf(O)>=0});E.length===0&&(E=g);var b=E.reduce(function(O,D){return O[D]=Rr(n,{placement:D,boundary:s,rootBoundary:i,padding:a})[he(D)],O},{});return Object.keys(b).sort(function(O,D){return b[O]-b[D]})}function lA(n){if(he(n)===Oo)return[];var t=Vi(n);return[qh(n),t,qh(t)]}function uA(n){var t=n.state,e=n.options,r=n.name;if(!t.modifiersData[r]._skip){for(var s=e.mainAxis,i=s===void 0?!0:s,a=e.altAxis,c=a===void 0?!0:a,u=e.fallbackPlacements,d=e.padding,f=e.boundary,g=e.rootBoundary,E=e.altBoundary,b=e.flipVariations,O=b===void 0?!0:b,D=e.allowedAutoPlacements,P=t.options.placement,M=he(P),x=M===P,$=u||(x||!O?[Vi(P)]:lA(P)),B=[P].concat($).reduce(function(Yt,Bt){return Yt.concat(he(Bt)===Oo?cA(t,{placement:Bt,boundary:f,rootBoundary:g,padding:d,flipVariations:O,allowedAutoPlacements:D}):Bt)},[]),K=t.rects.reference,H=t.rects.popper,T=new Map,m=!0,y=B[0],w=0;w<B.length;w++){var v=B[w],I=he(v),_=Cr(v)===kn,ot=[Pt,xt].indexOf(I)>=0,St=ot?"width":"height",Ct=Rr(t,{placement:v,boundary:f,rootBoundary:g,altBoundary:E,padding:d}),Vt=ot?_?Ft:Nt:_?xt:Pt;K[St]>H[St]&&(Vt=Vi(Vt));var me=Vi(Vt),$t=[];if(i&&$t.push(Ct[I]<=0),c&&$t.push(Ct[Vt]<=0,Ct[me]<=0),$t.every(function(Yt){return Yt})){y=v,m=!1;break}T.set(v,$t)}if(m)for(var jn=O?3:1,qn=function(Bt){var ge=B.find(function(Ve){var Qt=T.get(Ve);if(Qt)return Qt.slice(0,Bt).every(function(Hn){return Hn})});if(ge)return y=ge,"break"},ke=jn;ke>0;ke--){var gn=qn(ke);if(gn==="break")break}t.placement!==y&&(t.modifiersData[r]._skip=!0,t.placement=y,t.reset=!0)}}const Tm={name:"flip",enabled:!0,phase:"main",fn:uA,requiresIfExists:["offset"],data:{_skip:!1}};function Wh(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function zh(n){return[Pt,Ft,xt,Nt].some(function(t){return n[t]>=0})}function hA(n){var t=n.state,e=n.name,r=t.rects.reference,s=t.rects.popper,i=t.modifiersData.preventOverflow,a=Rr(t,{elementContext:"reference"}),c=Rr(t,{altBoundary:!0}),u=Wh(a,r),d=Wh(c,s,i),f=zh(u),g=zh(d);t.modifiersData[e]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:f,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":g})}const wm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:hA};function dA(n,t,e){var r=he(n),s=[Nt,Pt].indexOf(r)>=0?-1:1,i=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,a=i[0],c=i[1];return a=a||0,c=(c||0)*s,[Nt,Ft].indexOf(r)>=0?{x:c,y:a}:{x:a,y:c}}function fA(n){var t=n.state,e=n.options,r=n.name,s=e.offset,i=s===void 0?[0,0]:s,a=sl.reduce(function(f,g){return f[g]=dA(g,t.rects,i),f},{}),c=a[t.placement],u=c.x,d=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=a}const Im={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:fA};function pA(n){var t=n.state,e=n.name;t.modifiersData[e]=vm({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const pl={name:"popperOffsets",enabled:!0,phase:"read",fn:pA,data:{}};function mA(n){return n==="x"?"y":"x"}function gA(n){var t=n.state,e=n.options,r=n.name,s=e.mainAxis,i=s===void 0?!0:s,a=e.altAxis,c=a===void 0?!1:a,u=e.boundary,d=e.rootBoundary,f=e.altBoundary,g=e.padding,E=e.tether,b=E===void 0?!0:E,O=e.tetherOffset,D=O===void 0?0:O,P=Rr(t,{boundary:u,rootBoundary:d,padding:g,altBoundary:f}),M=he(t.placement),x=Cr(t.placement),$=!x,B=cl(M),K=mA(B),H=t.modifiersData.popperOffsets,T=t.rects.reference,m=t.rects.popper,y=typeof D=="function"?D(Object.assign({},t.rects,{placement:t.placement})):D,w=typeof y=="number"?{mainAxis:y,altAxis:y}:Object.assign({mainAxis:0,altAxis:0},y),v=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(H){if(i){var _,ot=B==="y"?Pt:Nt,St=B==="y"?xt:Ft,Ct=B==="y"?"height":"width",Vt=H[B],me=Vt+P[ot],$t=Vt-P[St],jn=b?-m[Ct]/2:0,qn=x===kn?T[Ct]:m[Ct],ke=x===kn?-m[Ct]:-T[Ct],gn=t.elements.arrow,Yt=b&&gn?al(gn):{width:0,height:0},Bt=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:mm(),ge=Bt[ot],Ve=Bt[St],Qt=Is(0,T[Ct],Yt[Ct]),Hn=$?T[Ct]/2-jn-Qt-ge-w.mainAxis:qn-Qt-ge-w.mainAxis,$o=$?-T[Ct]/2+jn+Qt+Ve+w.mainAxis:ke+Qt+Ve+w.mainAxis,qr=t.elements.arrow&&Ws(t.elements.arrow),Qs=qr?B==="y"?qr.clientTop||0:qr.clientLeft||0:0,Wn=(_=v?.[B])!=null?_:0,Xs=Vt+Hn-Wn-Qs,Bo=Vt+$o-Wn,zn=Is(b?ro(me,Xs):me,Vt,b?Cn($t,Bo):$t);H[B]=zn,I[B]=zn-Vt}if(c){var Kn,Js=B==="x"?Pt:Nt,gt=B==="x"?xt:Ft,st=H[K],_e=K==="y"?"height":"width",Zs=st+P[Js],Hr=st-P[gt],Wr=[Pt,Nt].indexOf(M)!==-1,Le=(Kn=v?.[K])!=null?Kn:0,zr=Wr?Zs:st-T[_e]-m[_e]-Le+w.altAxis,Kr=Wr?st+T[_e]+m[_e]-Le-w.altAxis:Hr,Gn=b&&Wr?KI(zr,st,Kr):Is(b?zr:Zs,st,b?Kr:Hr);H[K]=Gn,I[K]=Gn-st}t.modifiersData[r]=I}}const Am={name:"preventOverflow",enabled:!0,phase:"main",fn:gA,requiresIfExists:["offset"]};function _A(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function yA(n){return n===Ut(n)||!Wt(n)?hl(n):_A(n)}function EA(n){var t=n.getBoundingClientRect(),e=br(t.width)/n.offsetWidth||1,r=br(t.height)/n.offsetHeight||1;return e!==1||r!==1}function vA(n,t,e){e===void 0&&(e=!1);var r=Wt(t),s=Wt(t)&&EA(t),i=fn(t),a=Sr(n,s,e),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(r||!r&&!e)&&((pe(t)!=="body"||fl(i))&&(c=yA(t)),Wt(t)?(u=Sr(t,!0),u.x+=t.clientLeft,u.y+=t.clientTop):i&&(u.x=dl(i))),{x:a.left+c.scrollLeft-u.x,y:a.top+c.scrollTop-u.y,width:a.width,height:a.height}}function TA(n){var t=new Map,e=new Set,r=[];n.forEach(function(i){t.set(i.name,i)});function s(i){e.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(c){if(!e.has(c)){var u=t.get(c);u&&s(u)}}),r.push(i)}return n.forEach(function(i){e.has(i.name)||s(i)}),r}function wA(n){var t=TA(n);return dm.reduce(function(e,r){return e.concat(t.filter(function(s){return s.phase===r}))},[])}function IA(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function AA(n){var t=n.reduce(function(e,r){var s=e[r.name];return e[r.name]=s?Object.assign({},s,r,{options:Object.assign({},s.options,r.options),data:Object.assign({},s.data,r.data)}):r,e},{});return Object.keys(t).map(function(e){return t[e]})}var Kh={placement:"bottom",modifiers:[],strategy:"absolute"};function Gh(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Vo(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,r=e===void 0?[]:e,s=t.defaultOptions,i=s===void 0?Kh:s;return function(c,u,d){d===void 0&&(d=i);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Kh,i),modifiersData:{},elements:{reference:c,popper:u},attributes:{},styles:{}},g=[],E=!1,b={state:f,setOptions:function(M){var x=typeof M=="function"?M(f.options):M;D(),f.options=Object.assign({},i,f.options,x),f.scrollParents={reference:Vn(c)?As(c):c.contextElement?As(c.contextElement):[],popper:As(u)};var $=wA(AA([].concat(r,f.options.modifiers)));return f.orderedModifiers=$.filter(function(B){return B.enabled}),O(),b.update()},forceUpdate:function(){if(!E){var M=f.elements,x=M.reference,$=M.popper;if(Gh(x,$)){f.rects={reference:vA(x,Ws($),f.options.strategy==="fixed"),popper:al($)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(w){return f.modifiersData[w.name]=Object.assign({},w.data)});for(var B=0;B<f.orderedModifiers.length;B++){if(f.reset===!0){f.reset=!1,B=-1;continue}var K=f.orderedModifiers[B],H=K.fn,T=K.options,m=T===void 0?{}:T,y=K.name;typeof H=="function"&&(f=H({state:f,options:m,name:y,instance:b})||f)}}}},update:IA(function(){return new Promise(function(P){b.forceUpdate(),P(f)})}),destroy:function(){D(),E=!0}};if(!Gh(c,u))return b;b.setOptions(d).then(function(P){!E&&d.onFirstUpdate&&d.onFirstUpdate(P)});function O(){f.orderedModifiers.forEach(function(P){var M=P.name,x=P.options,$=x===void 0?{}:x,B=P.effect;if(typeof B=="function"){var K=B({state:f,name:M,instance:b,options:$}),H=function(){};g.push(K||H)}})}function D(){g.forEach(function(P){return P()}),g=[]}return b}}var bA=Vo(),SA=[ul,pl,ll,ol],CA=Vo({defaultModifiers:SA}),RA=[ul,pl,ll,ol,Im,Tm,Am,ym,wm],ml=Vo({defaultModifiers:RA});const bm=Object.freeze(Object.defineProperty({__proto__:null,afterMain:cm,afterRead:im,afterWrite:hm,applyStyles:ol,arrow:ym,auto:Oo,basePlacements:Ur,beforeMain:om,beforeRead:rm,beforeWrite:lm,bottom:xt,clippingParents:em,computeStyles:ll,createPopper:ml,createPopperBase:bA,createPopperLite:CA,detectOverflow:Rr,end:Ar,eventListeners:ul,flip:Tm,hide:wm,left:Nt,main:am,modifierPhases:dm,offset:Im,placements:sl,popper:sr,popperGenerator:Vo,popperOffsets:pl,preventOverflow:Am,read:sm,reference:nm,right:Ft,start:kn,top:Pt,variationPlacements:ic,viewport:rl,write:um},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const qe=new Map,ga={set(n,t,e){qe.has(n)||qe.set(n,new Map);const r=qe.get(n);if(!r.has(t)&&r.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`);return}r.set(t,e)},get(n,t){return qe.has(n)&&qe.get(n).get(t)||null},remove(n,t){if(!qe.has(n))return;const e=qe.get(n);e.delete(t),e.size===0&&qe.delete(n)}},PA=1e6,NA=1e3,cc="transitionend",Sm=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),DA=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),OA=n=>{do n+=Math.floor(Math.random()*PA);while(document.getElementById(n));return n},kA=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const r=Number.parseFloat(t),s=Number.parseFloat(e);return!r&&!s?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*NA)},Cm=n=>{n.dispatchEvent(new Event(cc))},we=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),an=n=>we(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(Sm(n)):null,$r=n=>{if(!we(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const r=n.closest("summary");if(r&&r.parentNode!==e||r===null)return!1}return t},cn=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",Rm=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?Rm(n.parentNode):null},so=()=>{},zs=n=>{n.offsetHeight},Pm=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,_a=[],VA=n=>{document.readyState==="loading"?(_a.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of _a)t()}),_a.push(n)):n()},zt=()=>document.documentElement.dir==="rtl",Gt=n=>{VA(()=>{const t=Pm();if(t){const e=n.NAME,r=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=r,n.jQueryInterface)}})},kt=(n,t=[],e=n)=>typeof n=="function"?n.call(...t):e,Nm=(n,t,e=!0)=>{if(!e){kt(n);return}const s=kA(t)+5;let i=!1;const a=({target:c})=>{c===t&&(i=!0,t.removeEventListener(cc,a),kt(n))};t.addEventListener(cc,a),setTimeout(()=>{i||Cm(t)},s)},gl=(n,t,e,r)=>{const s=n.length;let i=n.indexOf(t);return i===-1?!e&&r?n[s-1]:n[0]:(i+=e?1:-1,r&&(i=(i+s)%s),n[Math.max(0,Math.min(i,s-1))])},LA=/[^.]*(?=\..*)\.|.*/,MA=/\..*/,xA=/::\d+$/,ya={};let Yh=1;const Dm={mouseenter:"mouseover",mouseleave:"mouseout"},FA=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Om(n,t){return t&&`${t}::${Yh++}`||n.uidEvent||Yh++}function km(n){const t=Om(n);return n.uidEvent=t,ya[t]=ya[t]||{},ya[t]}function UA(n,t){return function e(r){return _l(r,{delegateTarget:n}),e.oneOff&&N.off(n,r.type,t),t.apply(n,[r])}}function $A(n,t,e){return function r(s){const i=n.querySelectorAll(t);for(let{target:a}=s;a&&a!==this;a=a.parentNode)for(const c of i)if(c===a)return _l(s,{delegateTarget:a}),r.oneOff&&N.off(n,s.type,t,e),e.apply(a,[s])}}function Vm(n,t,e=null){return Object.values(n).find(r=>r.callable===t&&r.delegationSelector===e)}function Lm(n,t,e){const r=typeof t=="string",s=r?e:t||e;let i=Mm(n);return FA.has(i)||(i=n),[r,s,i]}function Qh(n,t,e,r,s){if(typeof t!="string"||!n)return;let[i,a,c]=Lm(t,e,r);t in Dm&&(a=(O=>function(D){if(!D.relatedTarget||D.relatedTarget!==D.delegateTarget&&!D.delegateTarget.contains(D.relatedTarget))return O.call(this,D)})(a));const u=km(n),d=u[c]||(u[c]={}),f=Vm(d,a,i?e:null);if(f){f.oneOff=f.oneOff&&s;return}const g=Om(a,t.replace(LA,"")),E=i?$A(n,e,a):UA(n,a);E.delegationSelector=i?e:null,E.callable=a,E.oneOff=s,E.uidEvent=g,d[g]=E,n.addEventListener(c,E,i)}function lc(n,t,e,r,s){const i=Vm(t[e],r,s);i&&(n.removeEventListener(e,i,!!s),delete t[e][i.uidEvent])}function BA(n,t,e,r){const s=t[e]||{};for(const[i,a]of Object.entries(s))i.includes(r)&&lc(n,t,e,a.callable,a.delegationSelector)}function Mm(n){return n=n.replace(MA,""),Dm[n]||n}const N={on(n,t,e,r){Qh(n,t,e,r,!1)},one(n,t,e,r){Qh(n,t,e,r,!0)},off(n,t,e,r){if(typeof t!="string"||!n)return;const[s,i,a]=Lm(t,e,r),c=a!==t,u=km(n),d=u[a]||{},f=t.startsWith(".");if(typeof i<"u"){if(!Object.keys(d).length)return;lc(n,u,a,i,s?e:null);return}if(f)for(const g of Object.keys(u))BA(n,u,g,t.slice(1));for(const[g,E]of Object.entries(d)){const b=g.replace(xA,"");(!c||t.includes(b))&&lc(n,u,a,E.callable,E.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const r=Pm(),s=Mm(t),i=t!==s;let a=null,c=!0,u=!0,d=!1;i&&r&&(a=r.Event(t,e),r(n).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),d=a.isDefaultPrevented());const f=_l(new Event(t,{bubbles:c,cancelable:!0}),e);return d&&f.preventDefault(),u&&n.dispatchEvent(f),f.defaultPrevented&&a&&a.preventDefault(),f}};function _l(n,t={}){for(const[e,r]of Object.entries(t))try{n[e]=r}catch{Object.defineProperty(n,e,{configurable:!0,get(){return r}})}return n}function Xh(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function Ea(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const Ie={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${Ea(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${Ea(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(r=>r.startsWith("bs")&&!r.startsWith("bsConfig"));for(const r of e){let s=r.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),t[s]=Xh(n.dataset[r])}return t},getDataAttribute(n,t){return Xh(n.getAttribute(`data-bs-${Ea(t)}`))}};class Ks{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const r=we(e)?Ie.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof r=="object"?r:{},...we(e)?Ie.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[r,s]of Object.entries(e)){const i=t[r],a=we(i)?"element":DA(i);if(!new RegExp(s).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${s}".`)}}}const jA="5.3.8";class ee extends Ks{constructor(t,e){super(),t=an(t),t&&(this._element=t,this._config=this._getConfig(e),ga.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ga.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,r=!0){Nm(t,e,r)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return ga.get(an(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return jA}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const va=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>Sm(e)).join(","):null},U={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let r=n.parentNode.closest(t);for(;r;)e.push(r),r=r.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!cn(e)&&$r(e))},getSelectorFromElement(n){const t=va(n);return t&&U.findOne(t)?t:null},getElementFromSelector(n){const t=va(n);return t?U.findOne(t):null},getMultipleElementsFromSelector(n){const t=va(n);return t?U.find(t):[]}},Lo=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,r=n.NAME;N.on(document,e,`[data-bs-dismiss="${r}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),cn(this))return;const i=U.getElementFromSelector(this)||this.closest(`.${r}`);n.getOrCreateInstance(i)[t]()})},qA="alert",HA="bs.alert",xm=`.${HA}`,WA=`close${xm}`,zA=`closed${xm}`,KA="fade",GA="show";class Mo extends ee{static get NAME(){return qA}close(){if(N.trigger(this._element,WA).defaultPrevented)return;this._element.classList.remove(GA);const e=this._element.classList.contains(KA);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),N.trigger(this._element,zA),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=Mo.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Lo(Mo,"close");Gt(Mo);const YA="button",QA="bs.button",XA=`.${QA}`,JA=".data-api",ZA="active",Jh='[data-bs-toggle="button"]',tb=`click${XA}${JA}`;class xo extends ee{static get NAME(){return YA}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ZA))}static jQueryInterface(t){return this.each(function(){const e=xo.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}N.on(document,tb,Jh,n=>{n.preventDefault();const t=n.target.closest(Jh);xo.getOrCreateInstance(t).toggle()});Gt(xo);const eb="swipe",Br=".bs.swipe",nb=`touchstart${Br}`,rb=`touchmove${Br}`,sb=`touchend${Br}`,ib=`pointerdown${Br}`,ob=`pointerup${Br}`,ab="touch",cb="pen",lb="pointer-event",ub=40,hb={endCallback:null,leftCallback:null,rightCallback:null},db={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class io extends Ks{constructor(t,e){super(),this._element=t,!(!t||!io.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return hb}static get DefaultType(){return db}static get NAME(){return eb}dispose(){N.off(this._element,Br)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),kt(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=ub)return;const e=t/this._deltaX;this._deltaX=0,e&&kt(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,ib,t=>this._start(t)),N.on(this._element,ob,t=>this._end(t)),this._element.classList.add(lb)):(N.on(this._element,nb,t=>this._start(t)),N.on(this._element,rb,t=>this._move(t)),N.on(this._element,sb,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===cb||t.pointerType===ab)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const fb="carousel",pb="bs.carousel",pn=`.${pb}`,Fm=".data-api",mb="ArrowLeft",gb="ArrowRight",_b=500,ls="next",Jn="prev",ir="left",Li="right",yb=`slide${pn}`,Ta=`slid${pn}`,Eb=`keydown${pn}`,vb=`mouseenter${pn}`,Tb=`mouseleave${pn}`,wb=`dragstart${pn}`,Ib=`load${pn}${Fm}`,Ab=`click${pn}${Fm}`,Um="carousel",yi="active",bb="slide",Sb="carousel-item-end",Cb="carousel-item-start",Rb="carousel-item-next",Pb="carousel-item-prev",$m=".active",Bm=".carousel-item",Nb=$m+Bm,Db=".carousel-item img",Ob=".carousel-indicators",kb="[data-bs-slide], [data-bs-slide-to]",Vb='[data-bs-ride="carousel"]',Lb={[mb]:Li,[gb]:ir},Mb={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},xb={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Gs extends ee{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=U.findOne(Ob,this._element),this._addEventListeners(),this._config.ride===Um&&this.cycle()}static get Default(){return Mb}static get DefaultType(){return xb}static get NAME(){return fb}next(){this._slide(ls)}nextWhenVisible(){!document.hidden&&$r(this._element)&&this.next()}prev(){this._slide(Jn)}pause(){this._isSliding&&Cm(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){N.one(this._element,Ta,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){N.one(this._element,Ta,()=>this.to(t));return}const r=this._getItemIndex(this._getActive());if(r===t)return;const s=t>r?ls:Jn;this._slide(s,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,Eb,t=>this._keydown(t)),this._config.pause==="hover"&&(N.on(this._element,vb,()=>this.pause()),N.on(this._element,Tb,()=>this._maybeEnableCycle())),this._config.touch&&io.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of U.find(Db,this._element))N.on(r,wb,s=>s.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(ir)),rightCallback:()=>this._slide(this._directionToOrder(Li)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),_b+this._config.interval))}};this._swipeHelper=new io(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Lb[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=U.findOne($m,this._indicatorsElement);e.classList.remove(yi),e.removeAttribute("aria-current");const r=U.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);r&&(r.classList.add(yi),r.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const r=this._getActive(),s=t===ls,i=e||gl(this._getItems(),r,s,this._config.wrap);if(i===r)return;const a=this._getItemIndex(i),c=b=>N.trigger(this._element,b,{relatedTarget:i,direction:this._orderToDirection(t),from:this._getItemIndex(r),to:a});if(c(yb).defaultPrevented||!r||!i)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=i;const f=s?Cb:Sb,g=s?Rb:Pb;i.classList.add(g),zs(i),r.classList.add(f),i.classList.add(f);const E=()=>{i.classList.remove(f,g),i.classList.add(yi),r.classList.remove(yi,g,f),this._isSliding=!1,c(Ta)};this._queueCallback(E,r,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(bb)}_getActive(){return U.findOne(Nb,this._element)}_getItems(){return U.find(Bm,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return zt()?t===ir?Jn:ls:t===ir?ls:Jn}_orderToDirection(t){return zt()?t===Jn?ir:Li:t===Jn?Li:ir}static jQueryInterface(t){return this.each(function(){const e=Gs.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}N.on(document,Ab,kb,function(n){const t=U.getElementFromSelector(this);if(!t||!t.classList.contains(Um))return;n.preventDefault();const e=Gs.getOrCreateInstance(t),r=this.getAttribute("data-bs-slide-to");if(r){e.to(r),e._maybeEnableCycle();return}if(Ie.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});N.on(window,Ib,()=>{const n=U.find(Vb);for(const t of n)Gs.getOrCreateInstance(t)});Gt(Gs);const Fb="collapse",Ub="bs.collapse",Ys=`.${Ub}`,$b=".data-api",Bb=`show${Ys}`,jb=`shown${Ys}`,qb=`hide${Ys}`,Hb=`hidden${Ys}`,Wb=`click${Ys}${$b}`,wa="show",cr="collapse",Ei="collapsing",zb="collapsed",Kb=`:scope .${cr} .${cr}`,Gb="collapse-horizontal",Yb="width",Qb="height",Xb=".collapse.show, .collapse.collapsing",uc='[data-bs-toggle="collapse"]',Jb={parent:null,toggle:!0},Zb={parent:"(null|element)",toggle:"boolean"};class Ds extends ee{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const r=U.find(uc);for(const s of r){const i=U.getSelectorFromElement(s),a=U.find(i).filter(c=>c===this._element);i!==null&&a.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Jb}static get DefaultType(){return Zb}static get NAME(){return Fb}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(Xb).filter(c=>c!==this._element).map(c=>Ds.getOrCreateInstance(c,{toggle:!1}))),t.length&&t[0]._isTransitioning||N.trigger(this._element,Bb).defaultPrevented)return;for(const c of t)c.hide();const r=this._getDimension();this._element.classList.remove(cr),this._element.classList.add(Ei),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Ei),this._element.classList.add(cr,wa),this._element.style[r]="",N.trigger(this._element,jb)},a=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[r]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown()||N.trigger(this._element,qb).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,zs(this._element),this._element.classList.add(Ei),this._element.classList.remove(cr,wa);for(const s of this._triggerArray){const i=U.getElementFromSelector(s);i&&!this._isShown(i)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Ei),this._element.classList.add(cr),N.trigger(this._element,Hb)};this._element.style[e]="",this._queueCallback(r,this._element,!0)}_isShown(t=this._element){return t.classList.contains(wa)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=an(t.parent),t}_getDimension(){return this._element.classList.contains(Gb)?Yb:Qb}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(uc);for(const e of t){const r=U.getElementFromSelector(e);r&&this._addAriaAndCollapsedClass([e],this._isShown(r))}}_getFirstLevelChildren(t){const e=U.find(Kb,this._config.parent);return U.find(t,this._config.parent).filter(r=>!e.includes(r))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const r of t)r.classList.toggle(zb,!e),r.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const r=Ds.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t]()}})}}N.on(document,Wb,uc,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of U.getMultipleElementsFromSelector(this))Ds.getOrCreateInstance(t,{toggle:!1}).toggle()});Gt(Ds);const Zh="dropdown",tS="bs.dropdown",$n=`.${tS}`,yl=".data-api",eS="Escape",td="Tab",nS="ArrowUp",ed="ArrowDown",rS=2,sS=`hide${$n}`,iS=`hidden${$n}`,oS=`show${$n}`,aS=`shown${$n}`,jm=`click${$n}${yl}`,qm=`keydown${$n}${yl}`,cS=`keyup${$n}${yl}`,or="show",lS="dropup",uS="dropend",hS="dropstart",dS="dropup-center",fS="dropdown-center",An='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',pS=`${An}.${or}`,Mi=".dropdown-menu",mS=".navbar",gS=".navbar-nav",_S=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",yS=zt()?"top-end":"top-start",ES=zt()?"top-start":"top-end",vS=zt()?"bottom-end":"bottom-start",TS=zt()?"bottom-start":"bottom-end",wS=zt()?"left-start":"right-start",IS=zt()?"right-start":"left-start",AS="top",bS="bottom",SS={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},CS={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class de extends ee{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=U.next(this._element,Mi)[0]||U.prev(this._element,Mi)[0]||U.findOne(Mi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return SS}static get DefaultType(){return CS}static get NAME(){return Zh}toggle(){return this._isShown()?this.hide():this.show()}show(){if(cn(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,oS,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(gS))for(const r of[].concat(...document.body.children))N.on(r,"mouseover",so);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(or),this._element.classList.add(or),N.trigger(this._element,aS,t)}}hide(){if(cn(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,sS,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))N.off(r,"mouseover",so);this._popper&&this._popper.destroy(),this._menu.classList.remove(or),this._element.classList.remove(or),this._element.setAttribute("aria-expanded","false"),Ie.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,iS,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!we(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Zh.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof bm>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:we(this._config.reference)?t=an(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=ml(t,this._menu,e)}_isShown(){return this._menu.classList.contains(or)}_getPlacement(){const t=this._parent;if(t.classList.contains(uS))return wS;if(t.classList.contains(hS))return IS;if(t.classList.contains(dS))return AS;if(t.classList.contains(fS))return bS;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(lS)?e?ES:yS:e?TS:vS}_detectNavbar(){return this._element.closest(mS)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Ie.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...kt(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const r=U.find(_S,this._menu).filter(s=>$r(s));r.length&&gl(r,e,t===ed,!r.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=de.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===rS||t.type==="keyup"&&t.key!==td)return;const e=U.find(pS);for(const r of e){const s=de.getInstance(r);if(!s||s._config.autoClose===!1)continue;const i=t.composedPath(),a=i.includes(s._menu);if(i.includes(s._element)||s._config.autoClose==="inside"&&!a||s._config.autoClose==="outside"&&a||s._menu.contains(t.target)&&(t.type==="keyup"&&t.key===td||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const c={relatedTarget:s._element};t.type==="click"&&(c.clickEvent=t),s._completeHide(c)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),r=t.key===eS,s=[nS,ed].includes(t.key);if(!s&&!r||e&&!r)return;t.preventDefault();const i=this.matches(An)?this:U.prev(this,An)[0]||U.next(this,An)[0]||U.findOne(An,t.delegateTarget.parentNode),a=de.getOrCreateInstance(i);if(s){t.stopPropagation(),a.show(),a._selectMenuItem(t);return}a._isShown()&&(t.stopPropagation(),a.hide(),i.focus())}}N.on(document,qm,An,de.dataApiKeydownHandler);N.on(document,qm,Mi,de.dataApiKeydownHandler);N.on(document,jm,de.clearMenus);N.on(document,cS,de.clearMenus);N.on(document,jm,An,function(n){n.preventDefault(),de.getOrCreateInstance(this).toggle()});Gt(de);const Hm="backdrop",RS="fade",nd="show",rd=`mousedown.bs.${Hm}`,PS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},NS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Wm extends Ks{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return PS}static get DefaultType(){return NS}static get NAME(){return Hm}show(t){if(!this._config.isVisible){kt(t);return}this._append();const e=this._getElement();this._config.isAnimated&&zs(e),e.classList.add(nd),this._emulateAnimation(()=>{kt(t)})}hide(t){if(!this._config.isVisible){kt(t);return}this._getElement().classList.remove(nd),this._emulateAnimation(()=>{this.dispose(),kt(t)})}dispose(){this._isAppended&&(N.off(this._element,rd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(RS),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=an(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,rd,()=>{kt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Nm(t,this._getElement(),this._config.isAnimated)}}const DS="focustrap",OS="bs.focustrap",oo=`.${OS}`,kS=`focusin${oo}`,VS=`keydown.tab${oo}`,LS="Tab",MS="forward",sd="backward",xS={autofocus:!0,trapElement:null},FS={autofocus:"boolean",trapElement:"element"};class zm extends Ks{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return xS}static get DefaultType(){return FS}static get NAME(){return DS}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,oo),N.on(document,kS,t=>this._handleFocusin(t)),N.on(document,VS,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,oo))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const r=U.focusableChildren(e);r.length===0?e.focus():this._lastTabNavDirection===sd?r[r.length-1].focus():r[0].focus()}_handleKeydown(t){t.key===LS&&(this._lastTabNavDirection=t.shiftKey?sd:MS)}}const id=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",od=".sticky-top",vi="padding-right",ad="margin-right";class hc{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,vi,e=>e+t),this._setElementAttributes(id,vi,e=>e+t),this._setElementAttributes(od,ad,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,vi),this._resetElementAttributes(id,vi),this._resetElementAttributes(od,ad)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,r){const s=this.getWidth(),i=a=>{if(a!==this._element&&window.innerWidth>a.clientWidth+s)return;this._saveInitialAttribute(a,e);const c=window.getComputedStyle(a).getPropertyValue(e);a.style.setProperty(e,`${r(Number.parseFloat(c))}px`)};this._applyManipulationCallback(t,i)}_saveInitialAttribute(t,e){const r=t.style.getPropertyValue(e);r&&Ie.setDataAttribute(t,e,r)}_resetElementAttributes(t,e){const r=s=>{const i=Ie.getDataAttribute(s,e);if(i===null){s.style.removeProperty(e);return}Ie.removeDataAttribute(s,e),s.style.setProperty(e,i)};this._applyManipulationCallback(t,r)}_applyManipulationCallback(t,e){if(we(t)){e(t);return}for(const r of U.find(t,this._element))e(r)}}const US="modal",$S="bs.modal",Kt=`.${$S}`,BS=".data-api",jS="Escape",qS=`hide${Kt}`,HS=`hidePrevented${Kt}`,Km=`hidden${Kt}`,Gm=`show${Kt}`,WS=`shown${Kt}`,zS=`resize${Kt}`,KS=`click.dismiss${Kt}`,GS=`mousedown.dismiss${Kt}`,YS=`keydown.dismiss${Kt}`,QS=`click${Kt}${BS}`,cd="modal-open",XS="fade",ld="show",Ia="modal-static",JS=".modal.show",ZS=".modal-dialog",tC=".modal-body",eC='[data-bs-toggle="modal"]',nC={backdrop:!0,focus:!0,keyboard:!0},rC={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Pr extends ee{constructor(t,e){super(t,e),this._dialog=U.findOne(ZS,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new hc,this._addEventListeners()}static get Default(){return nC}static get DefaultType(){return rC}static get NAME(){return US}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,Gm,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(cd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||N.trigger(this._element,qS).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(ld),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){N.off(window,Kt),N.off(this._dialog,Kt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Wm({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new zm({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=U.findOne(tC,this._dialog);e&&(e.scrollTop=0),zs(this._element),this._element.classList.add(ld);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,WS,{relatedTarget:t})};this._queueCallback(r,this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,YS,t=>{if(t.key===jS){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),N.on(window,zS,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),N.on(this._element,GS,t=>{N.one(this._element,KS,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(cd),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,Km)})}_isAnimated(){return this._element.classList.contains(XS)}_triggerBackdropTransition(){if(N.trigger(this._element,HS).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(Ia)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(Ia),this._queueCallback(()=>{this._element.classList.remove(Ia),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),r=e>0;if(r&&!t){const s=zt()?"paddingLeft":"paddingRight";this._element.style[s]=`${e}px`}if(!r&&t){const s=zt()?"paddingRight":"paddingLeft";this._element.style[s]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const r=Pr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof r[t]>"u")throw new TypeError(`No method named "${t}"`);r[t](e)}})}}N.on(document,QS,eC,function(n){const t=U.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),N.one(t,Gm,s=>{s.defaultPrevented||N.one(t,Km,()=>{$r(this)&&this.focus()})});const e=U.findOne(JS);e&&Pr.getInstance(e).hide(),Pr.getOrCreateInstance(t).toggle(this)});Lo(Pr);Gt(Pr);const sC="offcanvas",iC="bs.offcanvas",Oe=`.${iC}`,Ym=".data-api",oC=`load${Oe}${Ym}`,aC="Escape",ud="show",hd="showing",dd="hiding",cC="offcanvas-backdrop",Qm=".offcanvas.show",lC=`show${Oe}`,uC=`shown${Oe}`,hC=`hide${Oe}`,fd=`hidePrevented${Oe}`,Xm=`hidden${Oe}`,dC=`resize${Oe}`,fC=`click${Oe}${Ym}`,pC=`keydown.dismiss${Oe}`,mC='[data-bs-toggle="offcanvas"]',gC={backdrop:!0,keyboard:!0,scroll:!1},_C={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class ln extends ee{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return gC}static get DefaultType(){return _C}static get NAME(){return sC}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||N.trigger(this._element,lC,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new hc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(hd);const r=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(ud),this._element.classList.remove(hd),N.trigger(this._element,uC,{relatedTarget:t})};this._queueCallback(r,this._element,!0)}hide(){if(!this._isShown||N.trigger(this._element,hC).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(dd),this._backdrop.hide();const e=()=>{this._element.classList.remove(ud,dd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new hc().reset(),N.trigger(this._element,Xm)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){N.trigger(this._element,fd);return}this.hide()},e=!!this._config.backdrop;return new Wm({className:cC,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new zm({trapElement:this._element})}_addEventListeners(){N.on(this._element,pC,t=>{if(t.key===aC){if(this._config.keyboard){this.hide();return}N.trigger(this._element,fd)}})}static jQueryInterface(t){return this.each(function(){const e=ln.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}N.on(document,fC,mC,function(n){const t=U.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),cn(this))return;N.one(t,Xm,()=>{$r(this)&&this.focus()});const e=U.findOne(Qm);e&&e!==t&&ln.getInstance(e).hide(),ln.getOrCreateInstance(t).toggle(this)});N.on(window,oC,()=>{for(const n of U.find(Qm))ln.getOrCreateInstance(n).show()});N.on(window,dC,()=>{for(const n of U.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&ln.getOrCreateInstance(n).hide()});Lo(ln);Gt(ln);const yC=/^aria-[\w-]*$/i,Jm={"*":["class","dir","id","lang","role",yC],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},EC=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),vC=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,TC=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?EC.has(e)?!!vC.test(n.nodeValue):!0:t.filter(r=>r instanceof RegExp).some(r=>r.test(e))};function wC(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const s=new window.DOMParser().parseFromString(n,"text/html"),i=[].concat(...s.body.querySelectorAll("*"));for(const a of i){const c=a.nodeName.toLowerCase();if(!Object.keys(t).includes(c)){a.remove();continue}const u=[].concat(...a.attributes),d=[].concat(t["*"]||[],t[c]||[]);for(const f of u)TC(f,d)||a.removeAttribute(f.nodeName)}return s.body.innerHTML}const IC="TemplateFactory",AC={allowList:Jm,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},bC={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},SC={entry:"(string|element|function|null)",selector:"(string|element)"};class CC extends Ks{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return AC}static get DefaultType(){return bC}static get NAME(){return IC}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[s,i]of Object.entries(this._config.content))this._setContent(t,i,s);const e=t.children[0],r=this._resolvePossibleFunction(this._config.extraClass);return r&&e.classList.add(...r.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,r]of Object.entries(t))super._typeCheckConfig({selector:e,entry:r},SC)}_setContent(t,e,r){const s=U.findOne(r,t);if(s){if(e=this._resolvePossibleFunction(e),!e){s.remove();return}if(we(e)){this._putElementInTemplate(an(e),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(e);return}s.textContent=e}}_maybeSanitize(t){return this._config.sanitize?wC(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return kt(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const RC="tooltip",PC=new Set(["sanitize","allowList","sanitizeFn"]),Aa="fade",NC="modal",Ti="show",DC=".tooltip-inner",pd=`.${NC}`,md="hide.bs.modal",us="hover",ba="focus",Sa="click",OC="manual",kC="hide",VC="hidden",LC="show",MC="shown",xC="inserted",FC="click",UC="focusin",$C="focusout",BC="mouseenter",jC="mouseleave",qC={AUTO:"auto",TOP:"top",RIGHT:zt()?"left":"right",BOTTOM:"bottom",LEFT:zt()?"right":"left"},HC={allowList:Jm,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},WC={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class jr extends ee{constructor(t,e){if(typeof bm>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return HC}static get DefaultType(){return WC}static get NAME(){return RC}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(pd),md,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=N.trigger(this._element,this.constructor.eventName(LC)),r=(Rm(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!r)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:i}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(i.append(s),N.trigger(this._element,this.constructor.eventName(xC))),this._popper=this._createPopper(s),s.classList.add(Ti),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))N.on(c,"mouseover",so);const a=()=>{N.trigger(this._element,this.constructor.eventName(MC)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown()||N.trigger(this._element,this.constructor.eventName(kC)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ti),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))N.off(s,"mouseover",so);this._activeTrigger[Sa]=!1,this._activeTrigger[ba]=!1,this._activeTrigger[us]=!1,this._isHovered=null;const r=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName(VC)))};this._queueCallback(r,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(Aa,Ti),e.classList.add(`bs-${this.constructor.NAME}-auto`);const r=OA(this.constructor.NAME).toString();return e.setAttribute("id",r),this._isAnimated()&&e.classList.add(Aa),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new CC({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[DC]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Aa)}_isShown(){return this.tip&&this.tip.classList.contains(Ti)}_createPopper(t){const e=kt(this._config.placement,[this,t,this._element]),r=qC[e.toUpperCase()];return ml(this._element,t,this._getPopperConfig(r))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return kt(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:r=>{this._getTipElement().setAttribute("data-popper-placement",r.state.placement)}}]};return{...e,...kt(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")N.on(this._element,this.constructor.eventName(FC),this._config.selector,r=>{const s=this._initializeOnDelegatedTarget(r);s._activeTrigger[Sa]=!(s._isShown()&&s._activeTrigger[Sa]),s.toggle()});else if(e!==OC){const r=e===us?this.constructor.eventName(BC):this.constructor.eventName(UC),s=e===us?this.constructor.eventName(jC):this.constructor.eventName($C);N.on(this._element,r,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusin"?ba:us]=!0,a._enter()}),N.on(this._element,s,this._config.selector,i=>{const a=this._initializeOnDelegatedTarget(i);a._activeTrigger[i.type==="focusout"?ba:us]=a._element.contains(i.relatedTarget),a._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(pd),md,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=Ie.getDataAttributes(this._element);for(const r of Object.keys(e))PC.has(r)&&delete e[r];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:an(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,r]of Object.entries(this._config))this.constructor.Default[e]!==r&&(t[e]=r);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=jr.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Gt(jr);const zC="popover",KC=".popover-header",GC=".popover-body",YC={...jr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},QC={...jr.DefaultType,content:"(null|string|element|function)"};class El extends jr{static get Default(){return YC}static get DefaultType(){return QC}static get NAME(){return zC}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[KC]:this._getTitle(),[GC]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=El.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Gt(El);const XC="scrollspy",JC="bs.scrollspy",vl=`.${JC}`,ZC=".data-api",tR=`activate${vl}`,gd=`click${vl}`,eR=`load${vl}${ZC}`,nR="dropdown-item",Zn="active",rR='[data-bs-spy="scroll"]',Ca="[href]",sR=".nav, .list-group",_d=".nav-link",iR=".nav-item",oR=".list-group-item",aR=`${_d}, ${iR} > ${_d}, ${oR}`,cR=".dropdown",lR=".dropdown-toggle",uR={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},hR={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Fo extends ee{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return uR}static get DefaultType(){return hR}static get NAME(){return XC}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=an(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,gd),N.on(this._config.target,gd,Ca,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const r=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(r.scrollTo){r.scrollTo({top:s,behavior:"smooth"});return}r.scrollTop=s}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=a=>this._targetLinks.get(`#${a.target.id}`),r=a=>{this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(e(a))},s=(this._rootElement||document.documentElement).scrollTop,i=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const a of t){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(a));continue}const c=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(i&&c){if(r(a),!s)return;continue}!i&&!c&&r(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=U.find(Ca,this._config.target);for(const e of t){if(!e.hash||cn(e))continue;const r=U.findOne(decodeURI(e.hash),this._element);$r(r)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,r))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Zn),this._activateParents(t),N.trigger(this._element,tR,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(nR)){U.findOne(lR,t.closest(cR)).classList.add(Zn);return}for(const e of U.parents(t,sR))for(const r of U.prev(e,aR))r.classList.add(Zn)}_clearActiveClass(t){t.classList.remove(Zn);const e=U.find(`${Ca}.${Zn}`,t);for(const r of e)r.classList.remove(Zn)}static jQueryInterface(t){return this.each(function(){const e=Fo.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}N.on(window,eR,()=>{for(const n of U.find(rR))Fo.getOrCreateInstance(n)});Gt(Fo);const dR="tab",fR="bs.tab",Bn=`.${fR}`,pR=`hide${Bn}`,mR=`hidden${Bn}`,gR=`show${Bn}`,_R=`shown${Bn}`,yR=`click${Bn}`,ER=`keydown${Bn}`,vR=`load${Bn}`,TR="ArrowLeft",yd="ArrowRight",wR="ArrowUp",Ed="ArrowDown",Ra="Home",vd="End",bn="active",Td="fade",Pa="show",IR="dropdown",Zm=".dropdown-toggle",AR=".dropdown-menu",Na=`:not(${Zm})`,bR='.list-group, .nav, [role="tablist"]',SR=".nav-item, .list-group-item",CR=`.nav-link${Na}, .list-group-item${Na}, [role="tab"]${Na}`,tg='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Da=`${CR}, ${tg}`,RR=`.${bn}[data-bs-toggle="tab"], .${bn}[data-bs-toggle="pill"], .${bn}[data-bs-toggle="list"]`;class Nr extends ee{constructor(t){super(t),this._parent=this._element.closest(bR),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,ER,e=>this._keydown(e)))}static get NAME(){return dR}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),r=e?N.trigger(e,pR,{relatedTarget:t}):null;N.trigger(t,gR,{relatedTarget:e}).defaultPrevented||r&&r.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(bn),this._activate(U.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(Pa);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,_R,{relatedTarget:e})};this._queueCallback(r,t,t.classList.contains(Td))}_deactivate(t,e){if(!t)return;t.classList.remove(bn),t.blur(),this._deactivate(U.getElementFromSelector(t));const r=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(Pa);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,mR,{relatedTarget:e})};this._queueCallback(r,t,t.classList.contains(Td))}_keydown(t){if(![TR,yd,wR,Ed,Ra,vd].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(s=>!cn(s));let r;if([Ra,vd].includes(t.key))r=e[t.key===Ra?0:e.length-1];else{const s=[yd,Ed].includes(t.key);r=gl(e,t.target,s,!0)}r&&(r.focus({preventScroll:!0}),Nr.getOrCreateInstance(r).show())}_getChildren(){return U.find(Da,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const r of e)this._setInitialAttributesOnChild(r)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),r=this._getOuterElement(t);t.setAttribute("aria-selected",e),r!==t&&this._setAttributeIfNotExists(r,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=U.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const r=this._getOuterElement(t);if(!r.classList.contains(IR))return;const s=(i,a)=>{const c=U.findOne(i,r);c&&c.classList.toggle(a,e)};s(Zm,bn),s(AR,Pa),r.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,r){t.hasAttribute(e)||t.setAttribute(e,r)}_elemIsActive(t){return t.classList.contains(bn)}_getInnerElement(t){return t.matches(Da)?t:U.findOne(Da,t)}_getOuterElement(t){return t.closest(SR)||t}static jQueryInterface(t){return this.each(function(){const e=Nr.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}N.on(document,yR,tg,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!cn(this)&&Nr.getOrCreateInstance(this).show()});N.on(window,vR,()=>{for(const n of U.find(RR))Nr.getOrCreateInstance(n)});Gt(Nr);const PR="toast",NR="bs.toast",mn=`.${NR}`,DR=`mouseover${mn}`,OR=`mouseout${mn}`,kR=`focusin${mn}`,VR=`focusout${mn}`,LR=`hide${mn}`,MR=`hidden${mn}`,xR=`show${mn}`,FR=`shown${mn}`,UR="fade",wd="hide",wi="show",Ii="showing",$R={animation:"boolean",autohide:"boolean",delay:"number"},BR={animation:!0,autohide:!0,delay:5e3};class Uo extends ee{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return BR}static get DefaultType(){return $R}static get NAME(){return PR}show(){if(N.trigger(this._element,xR).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(UR);const e=()=>{this._element.classList.remove(Ii),N.trigger(this._element,FR),this._maybeScheduleHide()};this._element.classList.remove(wd),zs(this._element),this._element.classList.add(wi,Ii),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||N.trigger(this._element,LR).defaultPrevented)return;const e=()=>{this._element.classList.add(wd),this._element.classList.remove(Ii,wi),N.trigger(this._element,MR)};this._element.classList.add(Ii),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(wi),super.dispose()}isShown(){return this._element.classList.contains(wi)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const r=t.relatedTarget;this._element===r||this._element.contains(r)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,DR,t=>this._onInteraction(t,!0)),N.on(this._element,OR,t=>this._onInteraction(t,!1)),N.on(this._element,kR,t=>this._onInteraction(t,!0)),N.on(this._element,VR,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Uo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Lo(Uo);Gt(Uo);function jR(){BI(async n=>{if(!n){const t=window.location.pathname;!t.endsWith("index.html")&&!t.endsWith("login.html")&&!t.endsWith("signup.html")&&(location.href="login.html");return}})}jR();export{rP as a,Do as b,$I as c,jp as d,xI as e,bv as f,KR as g,QR as h,XR as i,HR as j,GR as k,tP as l,JR as m,ZR as n,fE as o,nP as p,WR as q,BI as r,eP as s,YR as u,zR as w};
