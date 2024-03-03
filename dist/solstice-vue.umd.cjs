(function(e,x){typeof exports=="object"&&typeof module<"u"?module.exports=x(require("vue")):typeof define=="function"&&define.amd?define(["vue"],x):(e=typeof globalThis<"u"?globalThis:e||self,e.SolsticeVue=x(e.Vue))})(this,function(e){"use strict";function x(t){return e.getCurrentScope()?(e.onScopeDispose(t),!0):!1}function I(t){return typeof t=="function"?t():e.unref(t)}const K=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const W=Object.prototype.toString,R=t=>W.call(t)==="[object Object]",P=()=>{};function H(t,o){function n(...l){return new Promise((r,a)=>{Promise.resolve(t(()=>o.apply(this,l),{fn:o,thisArg:this,args:l})).then(r).catch(a)})}return n}const z=t=>t();function J(t=z){const o=e.ref(!0);function n(){o.value=!1}function l(){o.value=!0}const r=(...a)=>{o.value&&t(...a)};return{isActive:e.readonly(o),pause:n,resume:l,eventFilter:r}}function G(t){return t||e.getCurrentInstance()}function Q(...t){if(t.length!==1)return e.toRef(...t);const o=t[0];return typeof o=="function"?e.readonly(e.customRef(()=>({get:o,set:P}))):e.ref(o)}function Y(t,o,n={}){const{eventFilter:l=z,...r}=n;return e.watch(t,H(l,o),r)}function X(t,o,n={}){const{eventFilter:l,...r}=n,{eventFilter:a,pause:s,resume:m,isActive:k}=J(l);return{stop:Y(t,o,{...r,eventFilter:a}),pause:s,resume:m,isActive:k}}function A(t,o=!0,n){G()?e.onMounted(t,n):o?t():e.nextTick(t)}function L(t){var o;const n=I(t);return(o=n==null?void 0:n.$el)!=null?o:n}const B=K?window:void 0;function j(...t){let o,n,l,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,l,r]=t,o=B):[o,n,l,r]=t,!o)return P;Array.isArray(n)||(n=[n]),Array.isArray(l)||(l=[l]);const a=[],s=()=>{a.forEach(p=>p()),a.length=0},m=(p,f,w,g)=>(p.addEventListener(f,w,g),()=>p.removeEventListener(f,w,g)),k=e.watch(()=>[L(o),I(r)],([p,f])=>{if(s(),!p)return;const w=R(f)?{...f}:f;a.push(...n.flatMap(g=>l.map(_=>m(p,g,_,w))))},{immediate:!0,flush:"post"}),u=()=>{k(),s()};return x(u),u}function Z(){const t=e.ref(!1);return e.getCurrentInstance()&&e.onMounted(()=>{t.value=!0}),t}function v(t){const o=Z();return e.computed(()=>(o.value,!!t()))}function ee(t,o={}){const{window:n=B}=o,l=v(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const a=e.ref(!1),s=u=>{a.value=u.matches},m=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",s):r.removeListener(s))},k=e.watchEffect(()=>{l.value&&(m(),r=n.matchMedia(I(t)),"addEventListener"in r?r.addEventListener("change",s):r.addListener(s),a.value=r.matches)});return x(()=>{k(),m(),r=void 0}),a}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M="__vueuse_ssr_handlers__",te=ne();function ne(){return M in T||(T[M]=T[M]||{}),T[M]}function F(t,o){return te[t]||o}function oe(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const ae={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},U="vueuse-storage";function le(t,o,n,l={}){var r;const{flush:a="pre",deep:s=!0,listenToStorageChanges:m=!0,writeDefaults:k=!0,mergeDefaults:u=!1,shallow:p,window:f=B,eventFilter:w,onError:g=i=>{console.error(i)},initOnMounted:_}=l,b=(p?e.shallowRef:e.ref)(typeof o=="function"?o():o);if(!n)try{n=F("getDefaultStorage",()=>{var i;return(i=B)==null?void 0:i.localStorage})()}catch(i){g(i)}if(!n)return b;const N=I(o),C=oe(N),E=(r=l.serializer)!=null?r:ae[C],{pause:q,resume:h}=X(b,()=>S(b.value),{flush:a,deep:s,eventFilter:w});return f&&m&&A(()=>{j(f,"storage",y),j(f,U,$),_&&y()}),_||y(),b;function S(i){try{if(i==null)n.removeItem(t);else{const d=E.write(i),V=n.getItem(t);V!==d&&(n.setItem(t,d),f&&f.dispatchEvent(new CustomEvent(U,{detail:{key:t,oldValue:V,newValue:d,storageArea:n}})))}}catch(d){g(d)}}function D(i){const d=i?i.newValue:n.getItem(t);if(d==null)return k&&N!=null&&n.setItem(t,E.write(N)),N;if(!i&&u){const V=E.read(d);return typeof u=="function"?u(V,N):C==="object"&&!Array.isArray(V)?{...N,...V}:V}else return typeof d!="string"?d:E.read(d)}function $(i){y(i.detail)}function y(i){if(!(i&&i.storageArea!==n)){if(i&&i.key==null){b.value=N;return}if(!(i&&i.key!==t)){q();try{(i==null?void 0:i.newValue)!==E.write(b.value)&&(b.value=D(i))}catch(d){g(d)}finally{i?e.nextTick(h):h()}}}}}function re(t){return ee("(prefers-color-scheme: dark)",t)}function se(t={}){const{selector:o="html",attribute:n="class",initialValue:l="auto",window:r=B,storage:a,storageKey:s="vueuse-color-scheme",listenToStorageChanges:m=!0,storageRef:k,emitAuto:u,disableTransition:p=!0}=t,f={auto:"",light:"light",dark:"dark",...t.modes||{}},w=re({window:r}),g=e.computed(()=>w.value?"dark":"light"),_=k||(s==null?Q(l):le(s,l,a,{window:r,listenToStorageChanges:m})),b=e.computed(()=>_.value==="auto"?g.value:_.value),N=F("updateHTMLAttrs",(h,S,D)=>{const $=typeof h=="string"?r==null?void 0:r.document.querySelector(h):L(h);if(!$)return;let y;if(p&&(y=r.document.createElement("style"),y.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),r.document.head.appendChild(y)),S==="class"){const i=D.split(/\s/g);Object.values(f).flatMap(d=>(d||"").split(/\s/g)).filter(Boolean).forEach(d=>{i.includes(d)?$.classList.add(d):$.classList.remove(d)})}else $.setAttribute(S,D);p&&(r.getComputedStyle(y).opacity,document.head.removeChild(y))});function C(h){var S;N(o,n,(S=f[h])!=null?S:h)}function E(h){t.onChanged?t.onChanged(h,C):C(h)}e.watch(b,E,{flush:"post",immediate:!0}),A(()=>E(b.value));const q=e.computed({get(){return u?_.value:b.value},set(h){_.value=h}});try{return Object.assign(q,{store:_,system:g,state:b})}catch{return q}}const c=(t,o)=>{const n=t.__vccOpts||t;for(const[l,r]of o)n[l]=r;return n},ie={name:"sol-color-mode",setup(){return{colorMode:se({emitAuto:!0,attribute:"data-bs-theme"})}}},de={class:"d-flex align-items-center"},ce={class:"btn btn-link text-reset dropdown-toggle p-1",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},me={class:"bi bi-brightness-high-fill"},fe={class:"bi bi-moon-stars-fill"},he={class:"bi bi-circle-half"},pe={class:"dropdown-menu p-1"},be={class:"mb-1"},ue=e.createElementVNode("i",{class:"bi bi-brightness-high-fill"},null,-1),ge={class:"mb-1"},_e=e.createElementVNode("i",{class:"bi bi-moon-stars-fill"},null,-1),ye=e.createElementVNode("i",{class:"bi bi-circle-half"},null,-1);function ke(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("div",de,[e.createElementVNode("div",null,[e.createElementVNode("button",ce,[e.withDirectives(e.createElementVNode("i",me,null,512),[[e.vShow,l.colorMode=="light"]]),e.withDirectives(e.createElementVNode("i",fe,null,512),[[e.vShow,l.colorMode=="dark"]]),e.withDirectives(e.createElementVNode("i",he,null,512),[[e.vShow,l.colorMode=="auto"]])]),e.createElementVNode("ul",pe,[e.createElementVNode("li",be,[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item rounded",l.colorMode=="light"?"active":""]),href:"#",role:"button",onClick:o[0]||(o[0]=s=>l.colorMode="light")},[ue,e.createTextVNode(" Light")],2)]),e.createElementVNode("li",ge,[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item rounded",l.colorMode=="dark"?"active":""]),href:"#",role:"button",onClick:o[1]||(o[1]=s=>l.colorMode="dark")},[_e,e.createTextVNode(" Dark")],2)]),e.createElementVNode("li",null,[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item rounded",l.colorMode=="auto"?"active":""]),href:"#",role:"button",onClick:o[2]||(o[2]=s=>l.colorMode="auto")},[ye,e.createTextVNode(" Auto")],2)])])])])}const Ne=c(ie,[["render",ke]]),we={name:"axdd-panel",data:function(){return{}}},Ee={class:"card rounded-3 border-0 mb-4 p-4"};function Se(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("div",Ee,[e.renderSlot(t.$slots,"default")])}const Ve=c(we,[["render",Se]]),xe={name:"sol-sidebar",inject:["mq"],props:{appName:{type:String,default:"appName"},pageTitle:{type:String,default:"pageTitle"},userName:{type:String,default:"userName"},appRootUrl:{type:String,default:"#"},sidebarClass:{type:String,default:"bg-brand"},signOutUrl:{type:String,default:"#"},isPreview:{type:Boolean,default:!1}},created:function(){}},$e={key:0,class:"py-2 px-3 small bg-black bg-opacity-10"},Be={class:"d-flex"},Ce=e.createElementVNode("div",{class:"flex-fill"},"username",-1),Ie={class:"flex-fill text-end"},Te=["href"],Me={key:0,class:"btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2","data-bs-toggle":"collapse","data-bs-target":"#sidebar-nav-collapse",role:"button","aria-expanded":"false","aria-controls":"sidebar-nav-collapse","aria-label":"Toggle Navigation Menu"},qe=[e.createElementVNode("i",{class:"bi bi-list fw-bold fs-6"},null,-1)],De={key:0,role:"navigation"},Oe=e.createElementVNode("ul",{class:"text-white"},[e.createElementVNode("li",null,"nav 1"),e.createElementVNode("li",null,"nav 2"),e.createElementVNode("li",null,"nav 3"),e.createElementVNode("li",null,"nav 4")],-1),Pe={key:1,class:"mb-3 text-light"},ze=e.createElementVNode("div",{class:"sol-sidebar-logo"}," ",-1),Ae={class:"flex-fill"},Le={key:0},je={class:"font-weight-light py-3 small"},Fe=e.createStaticVNode('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul></ul>',1);function Ue(t,o,n,l,r,a){const s=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([a.mq.mdMinus?"":"d-flex vh-100"]),style:e.normalizeStyle([n.isPreview?"min-height: auto !important;":""])},[e.createElementVNode("div",{class:e.normalizeClass([n.sidebarClass+[a.mq.mdMinus?"":" overflow-auto"],"sol-sidebar d-flex flex-column"]),style:e.normalizeStyle([a.mq.mdMinus?"":"min-width: 280px; max-width:280px;"])},[e.createElementVNode("header",null,[t.$slots.profile?(e.openBlock(),e.createElementBlock("div",$e,[e.renderSlot(t.$slots,"profile",{},()=>[e.createElementVNode("div",Be,[Ce,e.createElementVNode("div",Ie,[e.createElementVNode("a",{href:n.signOutUrl,class:"text-white"},"Sign out",8,Te)])])])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass([[a.mq.lgMinus?"sol-sidebar-brand-sm":"sol-sidebar-brand"],"px-3"])},[t.$slots.navigation?(e.openBlock(),e.createElementBlock("a",Me,qe)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["d-inline align-middle",[a.mq.mdPlus?"h2":"h3"]])},[e.createVNode(s,{to:n.appRootUrl,class:"ff-encode-sans text-decoration-none text-light"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.appName),1)]),_:1},8,["to"])],2)],2)]),e.createElementVNode("div",{id:"sidebar-nav-collapse",class:e.normalizeClass(["px-3 flex-fill",[a.mq.mdMinus?"collapse":"collapse.show d-flex flex-column justify-content-between"]])},[t.$slots.navigation?(e.openBlock(),e.createElementBlock("nav",De,[e.renderSlot(t.$slots,"navigation",{},()=>[Oe])])):e.createCommentVNode("",!0),t.$slots.aside?(e.openBlock(),e.createElementBlock("aside",Pe,[e.renderSlot(t.$slots,"aside",{},()=>[e.createTextVNode("this is aside content")])])):e.createCommentVNode("",!0)],2),ze],6),e.createElementVNode("div",{id:"scrollbody",class:e.normalizeClass([[a.mq.mdMinus?"":"flex-fill overflow-y-scroll"],"d-flex bg-body text-body"]),style:{"padding-top":"37px !important"}},[e.createElementVNode("div",{class:e.normalizeClass([[a.mq.lgPlus?"px-5":""],"container-xl d-flex flex-column"])},[e.createElementVNode("main",Ae,[e.renderSlot(t.$slots,"main")]),t.$slots.footer?(e.openBlock(),e.createElementBlock("footer",Le,[e.renderSlot(t.$slots,"footer",{},()=>[e.createElementVNode("div",je,[Fe,e.createElementVNode("div",null," Copyright © "+e.toDisplayString(new Date().getFullYear())+" University of Washington ",1)])])])):e.createCommentVNode("",!0)],2)],2)],6)}const Ke=c(xe,[["render",Ue]]),We={name:"axdd-topbar",inject:["mq"],props:{appName:{type:String,default:"appName"},appRootUrl:{type:String,default:"#"},topbarClass:{type:String,default:"bg-brand"},isPreview:{type:Boolean,default:!1}},components:{},data(){return{}},created:function(){}},Re={class:"w-100"},He={key:0,class:"bg-black bg-opacity-10 text-white py-2 small"},Je={class:"container-xl"},Ge={class:"axdd-topbar-brand"},Qe={class:"container-xl axdd-topbar-logo"},Ye={key:0,class:"btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2","data-bs-toggle":"collapse","data-bs-target":"#topbar-nav-collapse",role:"button","aria-expanded":"false","aria-controls":"topbar-nav-collapse","aria-label":"Toggle Navigation Menu"},Xe=[e.createElementVNode("i",{class:"bi bi-list fw-bold text-white fs-6"},null,-1)],Ze={class:"w-100 flex-fill bg-body text-body"},ve={class:"container-xl"},et={class:"row"},tt={role:"navigation"},nt={key:0},ot={class:"col"},at={key:0,class:"my-3"},lt=e.createElementVNode("div",{style:{outline:"dashed 1px lightgray"}},[e.createElementVNode("h1",null,"Hello world..."),e.createElementVNode("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")],-1),rt={class:"w-100"},st={key:0,class:"bg-dark text-white py-2 small"},it={class:"container-xl"},dt={class:"text-white font-weight-light py-3"},ct=e.createStaticVNode('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul>',1);function mt(t,o,n,l,r,a){const s=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([n.topbarClass+[n.isPreview?" ":" min-vh-100"],"d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])},[e.createElementVNode("header",Re,[t.$slots.profile?(e.openBlock(),e.createElementBlock("div",He,[e.createElementVNode("div",Je,[e.renderSlot(t.$slots,"profile",{},()=>[e.createTextVNode("Welcome!")])])])):e.createCommentVNode("",!0),e.createElementVNode("div",Ge,[e.createElementVNode("div",Qe,[t.$slots.navigation?(e.openBlock(),e.createElementBlock("a",Ye,Xe)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["d-inline align-middle text-white",[a.mq.xlPlus?"h2":"h3"]])},[e.createVNode(s,{to:n.appRootUrl,class:"axdd-font-encode-sans text-white text-decoration-none"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.appName),1)]),_:1},8,["to"])],2)])])]),e.createElementVNode("div",Ze,[e.createElementVNode("div",ve,[e.createElementVNode("div",et,[t.$slots.navigation||t.$slots.aside?(e.openBlock(),e.createElementBlock("div",{key:0,class:"",style:e.normalizeStyle(a.mq.xlPlus?"min-width: 272px; max-width: 272px":"")},[e.createElementVNode("div",{id:"topbar-nav-collapse",class:e.normalizeClass([a.mq.xlPlus?"collapse.show":"collapse"])},[e.createElementVNode("nav",tt,[e.renderSlot(t.$slots,"navigation")]),t.$slots.aside?(e.openBlock(),e.createElementBlock("aside",nt,[e.renderSlot(t.$slots,"aside",{},()=>[e.createTextVNode("this is aside content")])])):e.createCommentVNode("",!0)],2)],4)):e.createCommentVNode("",!0),e.createElementVNode("div",ot,[t.$slots.bar?(e.openBlock(),e.createElementBlock("div",at,[e.renderSlot(t.$slots,"bar")])):e.createCommentVNode("",!0),e.createElementVNode("main",null,[e.renderSlot(t.$slots,"main",{},()=>[lt])])])])])]),e.createElementVNode("footer",rt,[t.$slots.footer?(e.openBlock(),e.createElementBlock("div",st,[e.createElementVNode("div",it,[e.renderSlot(t.$slots,"footer",{},()=>[e.createElementVNode("div",dt,[ct,e.createElementVNode("div",null," Copyright © "+e.toDisplayString(new Date().getFullYear())+" University of Washington ",1)])])])])):e.createCommentVNode("",!0)])],2)}const ft=c(We,[["render",mt]]),ht={name:"axdd-card",data:function(){return{}}},pt={class:"card shadow-sm rounded-3 mb-4"},bt={key:0,class:"card-header bg-transparent border-0 rounded-top p-3"},ut={key:1,class:"card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"},gt={key:2,class:"card-body"},_t={key:3,class:"card-footer bg-black bg-opacity-10 border-0 rounded-bottom"};function yt(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("div",pt,[t.$slots.heading?(e.openBlock(),e.createElementBlock("div",bt,[e.renderSlot(t.$slots,"heading")])):e.createCommentVNode("",!0),t.$slots["heading-action"]?(e.openBlock(),e.createElementBlock("div",ut,[e.renderSlot(t.$slots,"heading-action")])):e.createCommentVNode("",!0),t.$slots.body?(e.openBlock(),e.createElementBlock("div",gt,[e.renderSlot(t.$slots,"body")])):e.createCommentVNode("",!0),t.$slots.footer?(e.openBlock(),e.createElementBlock("div",_t,[e.renderSlot(t.$slots,"footer")])):e.createCommentVNode("",!0)])}const kt=c(ht,[["render",yt]]),Nt={name:"axdd-card-heading",props:{level:{type:Number,required:!0}},data:function(){return{}},computed:{checkedLevel(){return this.level>0&&this.level<7?this.level:2}}};function wt(t,o,n,l,r,a){return e.openBlock(),e.createBlock(e.resolveDynamicComponent(`h${a.checkedLevel}`),{class:"h6 m-0 fw-bold"},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default")]),_:3})}const Et=c(Nt,[["render",wt]]),St={name:"axdd-card-action",data:function(){return{}}};function Vt(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(t.$slots,"default")])}const xt=c(St,[["render",Vt]]),$t={name:"axdd-card-tabs",data:function(){return{}}};function Bt(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(t.$slots,"default")])}const Ct=c($t,[["render",Bt]]),It={name:"axdd-tabs-list",props:{variant:{type:String,required:!1,default:"lines"},tabsId:{type:[String,Number],required:!0}}},Tt=["id"],Mt=["id"];function qt(t,o,n,l,r,a){return n.variant=="lines"?(e.openBlock(),e.createElementBlock("ul",{key:0,class:"nav nav-lines border-bottom",id:n.tabsId,role:"tablist"},[e.renderSlot(t.$slots,"items")],8,Tt)):n.variant=="pills"?(e.openBlock(),e.createElementBlock("ul",{key:1,class:e.normalizeClass(["bg-light gap-1 rounded-3 p-1","nav nav-"+n.variant]),id:n.tabsId,role:"tablist"},[e.renderSlot(t.$slots,"items")],10,Mt)):e.createCommentVNode("",!0)}const Dt=c(It,[["render",qt]]),Ot={name:"axdd-tabs-display",props:{tabsId:{type:[String,Number],required:!0}}},Pt=["id"];function zt(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("div",{class:"tab-content",id:n.tabsId+"Content"},[e.renderSlot(t.$slots,"panels")],8,Pt)}const At=c(Ot,[["render",zt]]),Lt={name:"axdd-tabs-item",props:{variant:{type:String,required:!1,default:"lines"},panelId:{type:[String,Number],required:!0},tabsId:{type:[String,Number],required:!0},activeTab:{type:Boolean,required:!1}},computed:{elements(){return document.getElementsByClassName(this.tabsId+"-link")},classObject(){let t={};return t[this.tabsId+"-link"]=!0,t.active=this.activeTab,t}},methods:{findIndex(t){return[].findIndex.call(this.elements,o=>o===t)},moveTab(t){this.elements[t].click(),this.elements[t].focus(),Array.from(this.elements).forEach((o,n)=>{n==t?o.tabIndex=0:o.tabIndex=-1})},moveNext(t){const o=this.findIndex(t.target);o<this.elements.length-1&&this.moveTab(o+1)},movePrev(t){const o=this.findIndex(t.target);o>0&&this.moveTab(o-1)},onClick(t){const o=this.findIndex(t.target);this.moveTab(o)}}},jt={class:"nav-item",role:"presentation"},Ft=["tabindex","id","data-bs-target","aria-controls","aria-selected"],Ut=["tabindex","id","data-bs-target","aria-controls","aria-selected"],Kt=["tabindex","id","data-bs-target","aria-controls","aria-selected"];function Wt(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("li",jt,[n.variant=="lines"?(e.openBlock(),e.createElementBlock("button",{key:0,class:e.normalizeClass(["nav-lines-link text-secondary border-bottom border-white border-4 p-3",a.classObject]),tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[0]||(o[0]=e.withKeys((...s)=>a.moveNext&&a.moveNext(...s),["right"])),o[1]||(o[1]=e.withKeys((...s)=>a.movePrev&&a.movePrev(...s),["left"]))],onClick:o[2]||(o[2]=(...s)=>a.onClick&&a.onClick(...s))},[e.renderSlot(t.$slots,"default")],42,Ft)):n.variant=="pills"?(e.openBlock(),e.createElementBlock("button",{key:1,class:e.normalizeClass(["nav-pills-link rounded-3 px-3 py-2",a.classObject]),tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[3]||(o[3]=e.withKeys((...s)=>a.moveNext&&a.moveNext(...s),["right"])),o[4]||(o[4]=e.withKeys((...s)=>a.movePrev&&a.movePrev(...s),["left"]))],onClick:o[5]||(o[5]=(...s)=>a.onClick&&a.onClick(...s))},[e.renderSlot(t.$slots,"default")],42,Ut)):(e.openBlock(),e.createElementBlock("button",{key:2,class:e.normalizeClass(["nav-link",a.classObject]),tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[6]||(o[6]=e.withKeys((...s)=>a.moveNext&&a.moveNext(...s),["right"])),o[7]||(o[7]=e.withKeys((...s)=>a.movePrev&&a.movePrev(...s),["left"]))],onClick:o[8]||(o[8]=(...s)=>a.onClick&&a.onClick(...s))},[e.renderSlot(t.$slots,"default")],42,Kt))])}const Rt=c(Lt,[["render",Wt]]),Ht={name:"axdd-tabs-panel",props:{panelId:{type:[String,Number],required:!0},activePanel:{type:Boolean,required:!1}},methods:{setFocus(){document.getElementById(this.panelId+"-tab").focus()}}},Jt=["id","aria-labelledby"];function Gt(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["tab-pane fade",{"show active":n.activePanel}]),id:n.panelId,role:"tabpanel","aria-labelledby":n.panelId+"-tab",tabindex:"0",onKeydown:o[0]||(o[0]=e.withKeys(e.withModifiers((...s)=>a.setFocus&&a.setFocus(...s),["shift","prevent"]),["tab"]))},[e.renderSlot(t.$slots,"default")],42,Jt)}const Qt=c(Ht,[["render",Gt]]),Yt={name:"axdd-profile",props:{variant:{type:String,default:"standard"},userNetid:{type:String,required:!0},userOverride:{type:String,required:!1},userOfficialName:{type:String},userPreferredName:{type:String},userPronouns:{type:String},signoutUrl:{type:String},profileUrl:{type:String}},data:function(){return{}}},Xt={key:0,class:"d-flex"},Zt={class:"flex-fill dropdown"},vt={key:0,class:"text-white text-decoration-none",href:"#",role:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},en={class:"me-1"},tn=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger me-1"},null,-1),nn={class:"text-decoration-underline"},on={key:1,class:"text-white",href:"#",role:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},an={class:"dropdown-menu p-3 bg-dark border-0 text-white small","aria-labelledby":"dropdownMenuButton1",style:{width:"220px"}},ln={key:0,class:"small text-danger"},rn=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger"},null,-1),sn={class:"small"},dn={class:"small"},cn=["href"],mn=["href"],fn=e.createElementVNode("a",{href:"sadkf"},"sign out test",-1),hn={key:1,class:"d-flex"},pn={key:0,class:"flex-fill text-white"},bn={class:"me-1"},un=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger"},null,-1),gn={key:1,class:"flex-fill text-white"},_n={class:"flex-fill text-end"},yn=["href"],kn=e.createElementVNode("a",{href:"sadkf"},"sign out test",-1);function Nn(t,o,n,l,r,a){return n.variant==="flyout"?(e.openBlock(),e.createElementBlock("div",Xt,[e.createElementVNode("div",Zt,[n.userOverride?(e.openBlock(),e.createElementBlock("a",vt,[e.createElementVNode("span",en,e.toDisplayString(n.userNetid),1),tn,e.createElementVNode("span",nn,e.toDisplayString(n.userOverride),1)])):(e.openBlock(),e.createElementBlock("a",on,e.toDisplayString(n.userNetid),1)),e.createElementVNode("div",an,[n.userOverride?(e.openBlock(),e.createElementBlock("p",ln,[e.createTextVNode(" overriding as "),rn,e.createTextVNode(" "+e.toDisplayString(n.userOverride),1)])):e.createCommentVNode("",!0),e.createElementVNode("p",sn,e.toDisplayString(n.userOfficialName)+", "+e.toDisplayString(n.userPreferredName)+", "+e.toDisplayString(n.userPronouns),1),e.createElementVNode("p",dn,[e.createElementVNode("a",{href:n.profileUrl},"go to profile",8,cn)]),e.createElementVNode("div",null,[n.signoutUrl?e.renderSlot(t.$slots,"default",{key:0},()=>[e.createElementVNode("a",{href:n.signoutUrl,class:"text-white"},"Sign out",8,mn)]):e.renderSlot(t.$slots,"default",{key:1},()=>[fn])])])])])):(e.openBlock(),e.createElementBlock("div",hn,[n.userOverride?(e.openBlock(),e.createElementBlock("div",pn,[e.createElementVNode("span",bn,e.toDisplayString(n.userNetid),1),un,e.createTextVNode(" "+e.toDisplayString(n.userOverride),1)])):(e.openBlock(),e.createElementBlock("div",gn,e.toDisplayString(n.userNetid),1)),e.createElementVNode("div",_n,[n.signoutUrl?e.renderSlot(t.$slots,"default",{key:0},()=>[e.createElementVNode("a",{href:n.signoutUrl,class:"text-white"},"Sign out",8,yn)]):e.renderSlot(t.$slots,"default",{key:1},()=>[kn])])]))}const wn=c(Yt,[["render",Nn]]),En={name:"axdd-disclosure-action",props:{disclosureId:{type:[String,Number],required:!0},isLink:{type:Boolean},hasIndicator:{type:Boolean}}},Sn=["href","aria-controls"],Vn=["data-bs-target","aria-controls"],xn={key:0,class:"bi bi-chevron-right text-dark-beige","aria-hidden":"true"};function $n(t,o,n,l,r,a){return n.isLink?(e.openBlock(),e.createElementBlock("a",{key:0,"data-bs-toggle":"collapse",href:"#"+n.disclosureId,role:"button","aria-expanded":"false","aria-controls":n.disclosureId},[e.renderSlot(t.$slots,"default",{},void 0,!0)],8,Sn)):(e.openBlock(),e.createElementBlock("button",{key:1,class:e.normalizeClass(["btn btn-beige",[n.hasIndicator?"chevron":""]]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+n.disclosureId,"aria-expanded":"false","aria-controls":n.disclosureId},[n.hasIndicator?(e.openBlock(),e.createElementBlock("i",xn)):e.createCommentVNode("",!0),e.renderSlot(t.$slots,"default",{},void 0,!0)],10,Vn))}const Bn=c(En,[["render",$n],["__scopeId","data-v-bac417f3"]]),Cn={name:"axdd-disclosure-panel",props:{disclosureId:{type:[String,Number],required:!0}}},In=["id"];function Tn(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("div",{class:"collapse",id:n.disclosureId},[e.renderSlot(t.$slots,"default")],8,In)}const Mn=c(Cn,[["render",Tn]]),qn={name:"axdd-disclosure-block",props:{blockId:{type:[String,Number],required:!0},blockTitle:{type:String,required:!0}}},Dn=t=>(e.pushScopeId("data-v-075da959"),t=t(),e.popScopeId(),t),On={class:"rounded-3 p-3 mb-2"},Pn={class:"d-flex"},zn={class:"me-3",style:{width:"330px"}},An=["data-bs-target","aria-controls"],Ln=Dn(()=>e.createElementVNode("i",{class:"bi bi-chevron-right mx-2","aria-hidden":"true"},null,-1)),jn=["id"],Fn={class:"flex-fill"},Un=["id","aria-labelledby"];function Kn(t,o,n,l,r,a){return e.openBlock(),e.createElementBlock("div",On,[e.createElementVNode("div",Pn,[e.createElementVNode("div",zn,[e.createElementVNode("a",{href:"#",class:"chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+n.blockId+"-panel","aria-expanded":"false","aria-controls":n.blockId+"-panel"},[Ln,e.createElementVNode("span",{class:"fw-bold",id:n.blockId+"-heading"},e.toDisplayString(n.blockTitle),9,jn)],8,An)]),e.createElementVNode("div",Fn,[e.renderSlot(t.$slots,"header",{},void 0,!0)])]),e.createElementVNode("div",{id:n.blockId+"-panel",class:"collapse","aria-labelledby":n.blockId+"-heading"},[e.renderSlot(t.$slots,"body",{},void 0,!0)],8,Un)])}const Wn=c(qn,[["render",Kn],["__scopeId","data-v-075da959"]]),Rn={name:"sol-link",props:{variant:{type:String,required:!0,default:"default"},href:{type:String,required:!0,default:"/"},color:{type:String,required:!1},icon:{type:String,required:!1}},data:function(){return{}}};function Hn(t,o,n,l,r,a){const s=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock(e.Fragment,null,[n.variant=="default"?(e.openBlock(),e.createBlock(s,{key:0,to:n.href,class:e.normalizeClass(n.color),onClick:o[0]||(o[0]=m=>t.$emit("click",m))},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default")]),_:3},8,["to","class"])):e.createCommentVNode("",!0),n.variant=="quiet"?(e.openBlock(),e.createBlock(s,{key:1,to:n.href,class:e.normalizeClass([n.color,"link-underline link-underline-opacity-0 link-underline-opacity-100-hover"]),onClick:o[1]||(o[1]=m=>t.$emit("click",m))},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default")]),_:3},8,["to","class"])):e.createCommentVNode("",!0),n.variant=="icon"?(e.openBlock(),e.createBlock(s,{key:2,to:n.href,class:e.normalizeClass([n.color,"link-underline link-underline-opacity-0 link-underline-opacity-100-hover"]),onClick:o[2]||(o[2]=m=>t.$emit("click",m))},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("i",{class:e.normalizeClass(["bi "+n.icon,"me-1"])},null,2),[[e.vShow,n.icon]]),e.renderSlot(t.$slots,"default")]),_:3},8,["to","class"])):e.createCommentVNode("",!0)],64)}const O={Card:kt,CardHeading:Et,CardAction:xt,CardTabs:Ct,DisclosureAction:Bn,DisclosureBlock:Wn,DisclosurePanel:Mn,Profile:wn,TabsList:Dt,TabsDisplay:At,TabsItem:Rt,TabsPanel:Qt,Sidebar:Ke,Topbar:ft,ColorMode:Ne,Panel:Ve,Link:c(Rn,[["render",Hn]])};return{install(t){for(const o in O)if(Object.prototype.hasOwnProperty.call(O,o)){const n=O[o];t.component(n.name,n)}}}});
