(function(f,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(f=typeof globalThis<"u"?globalThis:f||self,e(f.SolsticeVue={},f.Vue))})(this,function(f,e){"use strict";const S=(t,o)=>{const n=t.__vccOpts||t;for(const[a,s]of o)n[a]=s;return n},R={props:{variant:{type:String,required:!1,default:"underline"},tabsId:{type:[String,Number],required:!0}}},K=["id"],J=["id"];function H(t,o,n,a,s,l){return n.variant=="underline"?(e.openBlock(),e.createElementBlock("ul",{key:0,class:"nav nav-underline border-bottom",id:n.tabsId,role:"tablist"},[e.renderSlot(t.$slots,"default")],8,K)):n.variant=="pills"?(e.openBlock(),e.createElementBlock("ul",{key:1,class:"bg-body-tertiary gap-1 rounded-3 p-1 nav nav-pills",id:n.tabsId,role:"tablist"},[e.renderSlot(t.$slots,"default")],8,J)):e.createCommentVNode("",!0)}const G=S(R,[["render",H]]),Q={props:{tabsId:{type:[String,Number],required:!0}}},Y=["id"];function X(t,o,n,a,s,l){return e.openBlock(),e.createElementBlock("div",{class:"tab-content",id:n.tabsId+"Content"},[e.renderSlot(t.$slots,"default")],8,Y)}const Z=S(Q,[["render",X]]),v={props:{variant:{type:String,required:!1,default:"lines"},panelId:{type:[String,Number],required:!0},tabsId:{type:[String,Number],required:!0},activeTab:{type:Boolean,required:!1}},computed:{elements(){return document.getElementsByClassName(this.tabsId+"-link")},classObject(){let t={};return t[this.tabsId+"-link"]=!0,t.active=this.activeTab,t}},methods:{findIndex(t){return[].findIndex.call(this.elements,o=>o===t)},moveTab(t){this.elements[t].click(),this.elements[t].focus(),Array.from(this.elements).forEach((o,n)=>{n==t?o.tabIndex=0:o.tabIndex=-1})},moveNext(t){const o=this.findIndex(t.target);o<this.elements.length-1&&this.moveTab(o+1)},movePrev(t){const o=this.findIndex(t.target);o>0&&this.moveTab(o-1)},onClick(t){const o=this.findIndex(t.target);this.moveTab(o)}}},ee={class:"nav-item",role:"presentation"},te=["tabindex","id","data-bs-target","aria-controls","aria-selected"];function ne(t,o,n,a,s,l){return e.openBlock(),e.createElementBlock("li",ee,[e.createElementVNode("a",{class:e.normalizeClass(["nav-link",l.classObject]),href:"#",tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[0]||(o[0]=e.withKeys((...i)=>l.moveNext&&l.moveNext(...i),["right"])),o[1]||(o[1]=e.withKeys((...i)=>l.movePrev&&l.movePrev(...i),["left"]))],onClick:o[2]||(o[2]=(...i)=>l.onClick&&l.onClick(...i))},[e.renderSlot(t.$slots,"default")],42,te)])}const oe=S(v,[["render",ne]]),le={props:{panelId:{type:[String,Number],required:!0},activePanel:{type:Boolean,required:!1}},methods:{setFocus(){document.getElementById(this.panelId+"-tab").focus()}}},ae=["id","aria-labelledby"];function se(t,o,n,a,s,l){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["tab-pane fade",{"show active":n.activePanel}]),id:n.panelId,role:"tabpanel","aria-labelledby":n.panelId+"-tab",tabindex:"0",onKeydown:o[0]||(o[0]=e.withKeys(e.withModifiers((...i)=>l.setFocus&&l.setFocus(...i),["shift","prevent"]),["tab"]))},[e.renderSlot(t.$slots,"default")],42,ae)}const re=S(le,[["render",se]]),ie={inject:["mq"],props:{appName:{type:String,default:"appName"},pageTitle:{type:String,default:"pageTitle"},userName:{type:String,default:"userName"},appRootUrl:{type:String,default:"#"},sidebarClass:{type:String,default:"bg-brand"},signOutUrl:{type:String,default:"#"},isPreview:{type:Boolean,default:!1}},created:function(){}},de={key:0,class:"py-2 px-3 small bg-black bg-opacity-10"},ce={class:"d-flex"},me=e.createElementVNode("div",{class:"flex-fill"},"username",-1),fe={class:"flex-fill text-end"},he=["href"],pe={key:0,class:"btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2","data-bs-toggle":"collapse","data-bs-target":"#sidebar-nav-collapse",role:"button","aria-expanded":"false","aria-controls":"sidebar-nav-collapse","aria-label":"Toggle Navigation Menu"},ue=[e.createElementVNode("i",{class:"bi bi-list fw-bold fs-6"},null,-1)],ge={key:0,role:"navigation"},be=e.createElementVNode("ul",{class:"text-white"},[e.createElementVNode("li",null,"nav 1"),e.createElementVNode("li",null,"nav 2"),e.createElementVNode("li",null,"nav 3"),e.createElementVNode("li",null,"nav 4")],-1),ye={key:1,class:"mb-3 text-light"},_e=e.createElementVNode("div",{class:"sol-sidebar-logo"}," ",-1),Ne={class:"flex-fill"},we={key:0},Se={class:"font-weight-light py-3 small"},ke=e.createStaticVNode('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>',1);function Ee(t,o,n,a,s,l){const i=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([l.mq.mdMinus?"":"d-flex vh-100"]),style:e.normalizeStyle([n.isPreview?"min-height: auto !important;":""])},[e.createElementVNode("div",{class:e.normalizeClass([n.sidebarClass+[l.mq.mdMinus?"":" overflow-auto"],"sol-sidebar d-flex flex-column"]),style:e.normalizeStyle([l.mq.mdMinus?"":"min-width: 280px; max-width:280px;"])},[e.createElementVNode("header",null,[t.$slots.profile?(e.openBlock(),e.createElementBlock("div",de,[e.renderSlot(t.$slots,"profile",{},()=>[e.createElementVNode("div",ce,[me,e.createElementVNode("div",fe,[e.createElementVNode("a",{href:n.signOutUrl,class:"text-white"},"Sign out",8,he)])])])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass([[l.mq.lgMinus?"sol-sidebar-brand-sm":"sol-sidebar-brand"],"px-3"])},[t.$slots.navigation?(e.openBlock(),e.createElementBlock("a",pe,ue)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["d-inline align-middle",[l.mq.mdPlus?"h2":"h3"]])},[e.createVNode(i,{to:n.appRootUrl,class:"ff-encode-sans text-decoration-none text-light"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.appName),1)]),_:1},8,["to"])],2)],2)]),e.createElementVNode("div",{id:"sidebar-nav-collapse",class:e.normalizeClass(["px-3 flex-fill",[l.mq.mdMinus?"collapse":"collapse.show d-flex flex-column justify-content-between"]])},[t.$slots.navigation?(e.openBlock(),e.createElementBlock("nav",ge,[e.renderSlot(t.$slots,"navigation",{},()=>[be])])):e.createCommentVNode("",!0),t.$slots.aside?(e.openBlock(),e.createElementBlock("aside",ye,[e.renderSlot(t.$slots,"aside",{},()=>[e.createTextVNode("this is aside content")])])):e.createCommentVNode("",!0)],2),_e],6),e.createElementVNode("div",{id:"scrollbody",class:e.normalizeClass([[l.mq.mdMinus?"":"flex-fill overflow-y-scroll"],"d-flex bg-body text-body"]),style:{"padding-top":"37px !important"}},[e.createElementVNode("div",{class:e.normalizeClass([[l.mq.lgPlus?"px-5":""],"container-xl d-flex flex-column"])},[e.createElementVNode("main",Ne,[e.renderSlot(t.$slots,"main")]),t.$slots.footer?(e.openBlock(),e.createElementBlock("footer",we,[e.renderSlot(t.$slots,"footer",{},()=>[e.createElementVNode("div",Se,[ke,e.createElementVNode("div",null," Copyright © "+e.toDisplayString(new Date().getFullYear())+" University of Washington ",1)])])])):e.createCommentVNode("",!0)],2)],2)],6)}const Ve=S(ie,[["render",Ee]]),xe={inject:["mq"],props:{appName:{type:String,default:"appName"},appRootUrl:{type:String,default:"#"},topbarClass:{type:String,default:"bg-brand"},isPreview:{type:Boolean,default:!1},backgroundClass:{type:String,default:"bg-body"}},components:{},data(){return{}},created:function(){}},Ce={class:"w-100"},$e={key:0,class:"bg-black bg-opacity-10 text-white py-2 small"},Be={class:"container-xl"},Te={class:"axdd-topbar-brand"},Me={class:"container-xl axdd-topbar-logo"},Oe={key:0,class:"btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2","data-bs-toggle":"collapse","data-bs-target":"#topbar-nav-collapse",role:"button","aria-expanded":"false","aria-controls":"topbar-nav-collapse","aria-label":"Toggle Navigation Menu"},De=[e.createElementVNode("i",{class:"bi bi-list fw-bold text-white fs-6"},null,-1)],Pe=["href"],Ie={class:"container-xl"},qe={class:"row"},ze={role:"navigation"},Ae={key:0},Le={class:"col"},je={key:0,class:"my-3"},Fe=e.createElementVNode("div",{style:{outline:"dashed 1px lightgray"}},[e.createElementVNode("h1",null,"Hello world..."),e.createElementVNode("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")],-1),Ue={class:"w-100"},We={key:0,class:"bg-dark text-white py-2 small"},Re={class:"container-xl"},Ke={class:"text-white font-weight-light py-3"},Je=e.createStaticVNode('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">Terms</a></li></ul>',1);function He(t,o,n,a,s,l){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([n.topbarClass+[n.isPreview?" ":" min-vh-100"],"d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])},[e.createElementVNode("header",Ce,[t.$slots.profile?(e.openBlock(),e.createElementBlock("div",$e,[e.createElementVNode("div",Be,[e.renderSlot(t.$slots,"profile",{},()=>[e.createTextVNode("Welcome!")])])])):e.createCommentVNode("",!0),e.createElementVNode("div",Te,[e.createElementVNode("div",Me,[t.$slots.navigation?(e.openBlock(),e.createElementBlock("a",Oe,De)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["d-inline align-middle text-white",[l.mq.xlPlus?"h2":"h3"]])},[e.createElementVNode("a",{href:n.appRootUrl,class:"ff-encode-sans text-white text-decoration-none"},e.toDisplayString(n.appName),9,Pe)],2)])])]),e.createElementVNode("div",{class:e.normalizeClass([n.backgroundClass,"w-100 flex-fill text-body"])},[e.createElementVNode("div",Ie,[e.createElementVNode("div",qe,[t.$slots.navigation||t.$slots.aside?(e.openBlock(),e.createElementBlock("div",{key:0,class:"",style:e.normalizeStyle(l.mq.xlPlus?"min-width: 272px; max-width: 272px":"")},[e.createElementVNode("div",{id:"topbar-nav-collapse",class:e.normalizeClass([l.mq.xlPlus?"collapse.show":"collapse"])},[e.createElementVNode("nav",ze,[e.renderSlot(t.$slots,"navigation")]),t.$slots.aside?(e.openBlock(),e.createElementBlock("aside",Ae,[e.renderSlot(t.$slots,"aside",{},()=>[e.createTextVNode("this is aside content")])])):e.createCommentVNode("",!0)],2)],4)):e.createCommentVNode("",!0),e.createElementVNode("div",Le,[t.$slots.bar?(e.openBlock(),e.createElementBlock("div",je,[e.renderSlot(t.$slots,"bar")])):e.createCommentVNode("",!0),e.createElementVNode("main",null,[e.renderSlot(t.$slots,"main",{},()=>[Fe])])])])])],2),e.createElementVNode("footer",Ue,[t.$slots.footer?(e.openBlock(),e.createElementBlock("div",We,[e.createElementVNode("div",Re,[e.renderSlot(t.$slots,"footer",{},()=>[e.createElementVNode("div",Ke,[Je,e.createElementVNode("div",null," Copyright © "+e.toDisplayString(new Date().getFullYear())+" University of Washington ",1)])])])])):e.createCommentVNode("",!0)])],2)}const Ge=S(xe,[["render",He]]),Qe={props:{variant:{type:String,default:"standard"},userNetid:{type:String,required:!0},userOverride:{type:String,required:!1},userOfficialName:{type:String},userPreferredName:{type:String},userPronouns:{type:String},signoutUrl:{type:String},profileUrl:{type:String}},data:function(){return{}}},Ye={key:0,class:"d-flex"},Xe={class:"flex-fill dropdown"},Ze={key:0,class:"text-white text-decoration-none",href:"#",role:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},ve={class:"me-1"},et=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger me-1"},null,-1),tt={class:"text-decoration-underline"},nt={key:1,class:"text-white",href:"#",role:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},ot={class:"dropdown-menu p-3 bg-dark border-0 text-white small","aria-labelledby":"dropdownMenuButton1",style:{width:"220px"}},lt={key:0,class:"small text-danger"},at=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger"},null,-1),st={class:"small"},rt={class:"small"},it=["href"],dt=["href"],ct=e.createElementVNode("a",{href:"sadkf"},"sign out test",-1),mt={key:1,class:"d-flex"},ft={key:0,class:"flex-fill text-white"},ht={class:"me-1"},pt=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger"},null,-1),ut={key:1,class:"flex-fill text-white"},gt={class:"flex-fill text-end"},bt=["href"],yt=e.createElementVNode("a",{href:"sadkf"},"sign out test",-1);function _t(t,o,n,a,s,l){return n.variant==="flyout"?(e.openBlock(),e.createElementBlock("div",Ye,[e.createElementVNode("div",Xe,[n.userOverride?(e.openBlock(),e.createElementBlock("a",Ze,[e.createElementVNode("span",ve,e.toDisplayString(n.userNetid),1),et,e.createElementVNode("span",tt,e.toDisplayString(n.userOverride),1)])):(e.openBlock(),e.createElementBlock("a",nt,e.toDisplayString(n.userNetid),1)),e.createElementVNode("div",ot,[n.userOverride?(e.openBlock(),e.createElementBlock("p",lt,[e.createTextVNode(" overriding as "),at,e.createTextVNode(" "+e.toDisplayString(n.userOverride),1)])):e.createCommentVNode("",!0),e.createElementVNode("p",st,e.toDisplayString(n.userOfficialName)+", "+e.toDisplayString(n.userPreferredName)+", "+e.toDisplayString(n.userPronouns),1),e.createElementVNode("p",rt,[e.createElementVNode("a",{href:n.profileUrl},"go to profile",8,it)]),e.createElementVNode("div",null,[n.signoutUrl?e.renderSlot(t.$slots,"default",{key:0},()=>[e.createElementVNode("a",{href:n.signoutUrl,class:"text-white"},"Sign out",8,dt)]):e.renderSlot(t.$slots,"default",{key:1},()=>[ct])])])])])):(e.openBlock(),e.createElementBlock("div",mt,[n.userOverride?(e.openBlock(),e.createElementBlock("div",ft,[e.createElementVNode("span",ht,e.toDisplayString(n.userNetid),1),pt,e.createTextVNode(" "+e.toDisplayString(n.userOverride),1)])):(e.openBlock(),e.createElementBlock("div",ut,e.toDisplayString(n.userNetid),1)),e.createElementVNode("div",gt,[n.signoutUrl?e.renderSlot(t.$slots,"default",{key:0},()=>[e.createElementVNode("a",{href:n.signoutUrl,class:"text-white"},"Sign out",8,bt)]):e.renderSlot(t.$slots,"default",{key:1},()=>[yt])])]))}const Nt=S(Qe,[["render",_t]]);function q(t){return e.getCurrentScope()?(e.onScopeDispose(t),!0):!1}function T(t){return typeof t=="function"?t():e.unref(t)}const wt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const St=Object.prototype.toString,kt=t=>St.call(t)==="[object Object]",z=()=>{};function Et(t,o){function n(...a){return new Promise((s,l)=>{Promise.resolve(t(()=>o.apply(this,a),{fn:o,thisArg:this,args:a})).then(s).catch(l)})}return n}const A=t=>t();function Vt(t=A){const o=e.ref(!0);function n(){o.value=!1}function a(){o.value=!0}const s=(...l)=>{o.value&&t(...l)};return{isActive:e.readonly(o),pause:n,resume:a,eventFilter:s}}function xt(t){return e.getCurrentInstance()}function Ct(...t){if(t.length!==1)return e.toRef(...t);const o=t[0];return typeof o=="function"?e.readonly(e.customRef(()=>({get:o,set:z}))):e.ref(o)}function $t(t,o,n={}){const{eventFilter:a=A,...s}=n;return e.watch(t,Et(a,o),s)}function Bt(t,o,n={}){const{eventFilter:a,...s}=n,{eventFilter:l,pause:i,resume:b,isActive:N}=Vt(a);return{stop:$t(t,o,{...s,eventFilter:l}),pause:i,resume:b,isActive:N}}function L(t,o=!0,n){xt()?e.onMounted(t,n):o?t():e.nextTick(t)}function j(t){var o;const n=T(t);return(o=n==null?void 0:n.$el)!=null?o:n}const $=wt?window:void 0;function F(...t){let o,n,a,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,a,s]=t,o=$):[o,n,a,s]=t,!o)return z;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const l=[],i=()=>{l.forEach(h=>h()),l.length=0},b=(h,d,k,g)=>(h.addEventListener(d,k,g),()=>h.removeEventListener(d,k,g)),N=e.watch(()=>[j(o),T(s)],([h,d])=>{if(i(),!h)return;const k=kt(d)?{...d}:d;l.push(...n.flatMap(g=>a.map(y=>b(h,g,y,k))))},{immediate:!0,flush:"post"}),u=()=>{N(),i()};return q(u),u}function Tt(){const t=e.ref(!1),o=e.getCurrentInstance();return o&&e.onMounted(()=>{t.value=!0},o),t}function Mt(t){const o=Tt();return e.computed(()=>(o.value,!!t()))}function Ot(t,o={}){const{window:n=$}=o,a=Mt(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const l=e.ref(!1),i=u=>{l.value=u.matches},b=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",i):s.removeListener(i))},N=e.watchEffect(()=>{a.value&&(b(),s=n.matchMedia(T(t)),"addEventListener"in s?s.addEventListener("change",i):s.addListener(i),l.value=s.matches)});return q(()=>{N(),b(),s=void 0}),l}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__",Dt=Pt();function Pt(){return O in M||(M[O]=M[O]||{}),M[O]}function U(t,o){return Dt[t]||o}function It(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const qt={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},W="vueuse-storage";function zt(t,o,n,a={}){var s;const{flush:l="pre",deep:i=!0,listenToStorageChanges:b=!0,writeDefaults:N=!0,mergeDefaults:u=!1,shallow:h,window:d=$,eventFilter:k,onError:g=r=>{console.error(r)},initOnMounted:y}=a,p=(h?e.shallowRef:e.ref)(typeof o=="function"?o():o);if(!n)try{n=U("getDefaultStorage",()=>{var r;return(r=$)==null?void 0:r.localStorage})()}catch(r){g(r)}if(!n)return p;const w=T(o),B=It(w),E=(s=a.serializer)!=null?s:qt[B],{pause:D,resume:c}=Bt(p,()=>P(p.value),{flush:l,deep:i,eventFilter:k});d&&b&&L(()=>{F(d,"storage",_),F(d,W,I),y&&_()}),y||_();function V(r,m){d&&d.dispatchEvent(new CustomEvent(W,{detail:{key:t,oldValue:r,newValue:m,storageArea:n}}))}function P(r){try{const m=n.getItem(t);if(r==null)V(m,null),n.removeItem(t);else{const x=E.write(r);m!==x&&(n.setItem(t,x),V(m,x))}}catch(m){g(m)}}function C(r){const m=r?r.newValue:n.getItem(t);if(m==null)return N&&w!=null&&n.setItem(t,E.write(w)),w;if(!r&&u){const x=E.read(m);return typeof u=="function"?u(x,w):B==="object"&&!Array.isArray(x)?{...w,...x}:x}else return typeof m!="string"?m:E.read(m)}function _(r){if(!(r&&r.storageArea!==n)){if(r&&r.key==null){p.value=w;return}if(!(r&&r.key!==t)){D();try{(r==null?void 0:r.newValue)!==E.write(p.value)&&(p.value=C(r))}catch(m){g(m)}finally{r?e.nextTick(c):c()}}}}function I(r){_(r.detail)}return p}function At(t){return Ot("(prefers-color-scheme: dark)",t)}function Lt(t={}){const{selector:o="html",attribute:n="class",initialValue:a="auto",window:s=$,storage:l,storageKey:i="vueuse-color-scheme",listenToStorageChanges:b=!0,storageRef:N,emitAuto:u,disableTransition:h=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},k=At({window:s}),g=e.computed(()=>k.value?"dark":"light"),y=N||(i==null?Ct(a):zt(i,a,l,{window:s,listenToStorageChanges:b})),p=e.computed(()=>y.value==="auto"?g.value:y.value),w=U("updateHTMLAttrs",(c,V,P)=>{const C=typeof c=="string"?s==null?void 0:s.document.querySelector(c):j(c);if(!C)return;let _;if(h&&(_=s.document.createElement("style"),_.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),s.document.head.appendChild(_)),V==="class"){const I=P.split(/\s/g);Object.values(d).flatMap(r=>(r||"").split(/\s/g)).filter(Boolean).forEach(r=>{I.includes(r)?C.classList.add(r):C.classList.remove(r)})}else C.setAttribute(V,P);h&&(s.getComputedStyle(_).opacity,document.head.removeChild(_))});function B(c){var V;w(o,n,(V=d[c])!=null?V:c)}function E(c){t.onChanged?t.onChanged(c,B):B(c)}e.watch(p,E,{flush:"post",immediate:!0}),L(()=>E(p.value));const D=e.computed({get(){return u?y.value:p.value},set(c){y.value=c}});try{return Object.assign(D,{store:y,system:g,state:p})}catch{return D}}const jt={setup(){return{colorMode:Lt({emitAuto:!0,attribute:"data-bs-theme"})}}},Ft={class:"d-flex align-items-center"},Ut={class:"btn btn-link text-reset dropdown-toggle p-1",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","aria-label":"Choose color mode"},Wt={class:"bi bi-brightness-high-fill"},Rt={class:"bi bi-moon-stars-fill"},Kt={class:"bi bi-circle-half"},Jt={class:"dropdown-menu p-1"},Ht={class:"mb-1"},Gt=e.createElementVNode("i",{class:"bi bi-brightness-high-fill"},null,-1),Qt={class:"mb-1"},Yt=e.createElementVNode("i",{class:"bi bi-moon-stars-fill"},null,-1),Xt=e.createElementVNode("i",{class:"bi bi-circle-half"},null,-1);function Zt(t,o,n,a,s,l){return e.openBlock(),e.createElementBlock("div",Ft,[e.createElementVNode("div",null,[e.createElementVNode("button",Ut,[e.withDirectives(e.createElementVNode("i",Wt,null,512),[[e.vShow,a.colorMode=="light"]]),e.withDirectives(e.createElementVNode("i",Rt,null,512),[[e.vShow,a.colorMode=="dark"]]),e.withDirectives(e.createElementVNode("i",Kt,null,512),[[e.vShow,a.colorMode=="auto"]])]),e.createElementVNode("ul",Jt,[e.createElementVNode("li",Ht,[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item rounded",a.colorMode=="light"?"active":""]),href:"#",role:"button",onClick:o[0]||(o[0]=i=>a.colorMode="light")},[Gt,e.createTextVNode(" Light")],2)]),e.createElementVNode("li",Qt,[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item rounded",a.colorMode=="dark"?"active":""]),href:"#",role:"button",onClick:o[1]||(o[1]=i=>a.colorMode="dark")},[Yt,e.createTextVNode(" Dark")],2)]),e.createElementVNode("li",null,[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item rounded",a.colorMode=="auto"?"active":""]),href:"#",role:"button",onClick:o[2]||(o[2]=i=>a.colorMode="auto")},[Xt,e.createTextVNode(" Auto")],2)])])])])}const vt=S(jt,[["render",Zt]]);f.SColorMode=vt,f.SProfile=Nt,f.SSidebar=Ve,f.STabsDisplay=Z,f.STabsItem=oe,f.STabsList=G,f.STabsPanel=re,f.STopbar=Ge,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
