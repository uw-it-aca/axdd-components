(function(f,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(f=typeof globalThis<"u"?globalThis:f||self,e(f.SolsticeVue={},f.Vue))})(this,function(f,e){"use strict";const k=(t,o)=>{const n=t.__vccOpts||t;for(const[a,s]of o)n[a]=s;return n},W={props:{variant:{type:String,required:!1,default:"lines"},tabsId:{type:[String,Number],required:!0}}},R=["id"],J=["id"];function H(t,o,n,a,s,l){return n.variant=="lines"?(e.openBlock(),e.createElementBlock("ul",{key:0,class:"nav nav-lines border-bottom",id:n.tabsId,role:"tablist"},[e.renderSlot(t.$slots,"items")],8,R)):n.variant=="pills"?(e.openBlock(),e.createElementBlock("ul",{key:1,class:e.normalizeClass(["bg-light gap-1 rounded-3 p-1","nav nav-"+n.variant]),id:n.tabsId,role:"tablist"},[e.renderSlot(t.$slots,"items")],10,J)):e.createCommentVNode("",!0)}const G=k(W,[["render",H]]),Q={props:{tabsId:{type:[String,Number],required:!0}}},Y=["id"];function X(t,o,n,a,s,l){return e.openBlock(),e.createElementBlock("div",{class:"tab-content",id:n.tabsId+"Content"},[e.renderSlot(t.$slots,"panels")],8,Y)}const Z=k(Q,[["render",X]]),v={props:{variant:{type:String,required:!1,default:"lines"},panelId:{type:[String,Number],required:!0},tabsId:{type:[String,Number],required:!0},activeTab:{type:Boolean,required:!1}},computed:{elements(){return document.getElementsByClassName(this.tabsId+"-link")},classObject(){let t={};return t[this.tabsId+"-link"]=!0,t.active=this.activeTab,t}},methods:{findIndex(t){return[].findIndex.call(this.elements,o=>o===t)},moveTab(t){this.elements[t].click(),this.elements[t].focus(),Array.from(this.elements).forEach((o,n)=>{n==t?o.tabIndex=0:o.tabIndex=-1})},moveNext(t){const o=this.findIndex(t.target);o<this.elements.length-1&&this.moveTab(o+1)},movePrev(t){const o=this.findIndex(t.target);o>0&&this.moveTab(o-1)},onClick(t){const o=this.findIndex(t.target);this.moveTab(o)}}},ee={class:"nav-item",role:"presentation"},te=["tabindex","id","data-bs-target","aria-controls","aria-selected"],ne=["tabindex","id","data-bs-target","aria-controls","aria-selected"],oe=["tabindex","id","data-bs-target","aria-controls","aria-selected"];function le(t,o,n,a,s,l){return e.openBlock(),e.createElementBlock("li",ee,[n.variant=="lines"?(e.openBlock(),e.createElementBlock("button",{key:0,class:e.normalizeClass(["nav-lines-link text-secondary border-bottom border-white border-4 p-3",l.classObject]),tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[0]||(o[0]=e.withKeys((...r)=>l.moveNext&&l.moveNext(...r),["right"])),o[1]||(o[1]=e.withKeys((...r)=>l.movePrev&&l.movePrev(...r),["left"]))],onClick:o[2]||(o[2]=(...r)=>l.onClick&&l.onClick(...r))},[e.renderSlot(t.$slots,"default")],42,te)):n.variant=="pills"?(e.openBlock(),e.createElementBlock("button",{key:1,class:e.normalizeClass(["nav-pills-link rounded-3 px-3 py-2",l.classObject]),tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[3]||(o[3]=e.withKeys((...r)=>l.moveNext&&l.moveNext(...r),["right"])),o[4]||(o[4]=e.withKeys((...r)=>l.movePrev&&l.movePrev(...r),["left"]))],onClick:o[5]||(o[5]=(...r)=>l.onClick&&l.onClick(...r))},[e.renderSlot(t.$slots,"default")],42,ne)):(e.openBlock(),e.createElementBlock("button",{key:2,class:e.normalizeClass(["nav-link",l.classObject]),tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[6]||(o[6]=e.withKeys((...r)=>l.moveNext&&l.moveNext(...r),["right"])),o[7]||(o[7]=e.withKeys((...r)=>l.movePrev&&l.movePrev(...r),["left"]))],onClick:o[8]||(o[8]=(...r)=>l.onClick&&l.onClick(...r))},[e.renderSlot(t.$slots,"default")],42,oe))])}const ae=k(v,[["render",le]]),se={props:{panelId:{type:[String,Number],required:!0},activePanel:{type:Boolean,required:!1}},methods:{setFocus(){document.getElementById(this.panelId+"-tab").focus()}}},re=["id","aria-labelledby"];function ie(t,o,n,a,s,l){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["tab-pane fade",{"show active":n.activePanel}]),id:n.panelId,role:"tabpanel","aria-labelledby":n.panelId+"-tab",tabindex:"0",onKeydown:o[0]||(o[0]=e.withKeys(e.withModifiers((...r)=>l.setFocus&&l.setFocus(...r),["shift","prevent"]),["tab"]))},[e.renderSlot(t.$slots,"default")],42,re)}const de=k(se,[["render",ie]]),ce={inject:["mq"],props:{appName:{type:String,default:"appName"},pageTitle:{type:String,default:"pageTitle"},userName:{type:String,default:"userName"},appRootUrl:{type:String,default:"#"},sidebarClass:{type:String,default:"bg-brand"},signOutUrl:{type:String,default:"#"},isPreview:{type:Boolean,default:!1}},created:function(){}},me={key:0,class:"py-2 px-3 small bg-black bg-opacity-10"},fe={class:"d-flex"},he=e.createElementVNode("div",{class:"flex-fill"},"username",-1),be={class:"flex-fill text-end"},ge=["href"],ue={key:0,class:"btn btn-link btn-sm border border-1 border-light rounded-3 py-0 px-1 text-light d-lg-none me-2","data-bs-toggle":"collapse","data-bs-target":"#sidebar-nav-collapse",role:"button","aria-expanded":"false","aria-controls":"sidebar-nav-collapse","aria-label":"Toggle Navigation Menu"},pe=[e.createElementVNode("i",{class:"bi bi-list fw-bold fs-6"},null,-1)],ye={key:0,role:"navigation"},_e=e.createElementVNode("ul",{class:"text-white"},[e.createElementVNode("li",null,"nav 1"),e.createElementVNode("li",null,"nav 2"),e.createElementVNode("li",null,"nav 3"),e.createElementVNode("li",null,"nav 4")],-1),Ne={key:1,class:"mb-3 text-light"},we=e.createElementVNode("div",{class:"sol-sidebar-logo"}," ",-1),ke={class:"flex-fill"},Se={key:0},Ee={class:"font-weight-light py-3 small"},Ve=e.createStaticVNode('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>',1);function xe(t,o,n,a,s,l){const r=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([l.mq.mdMinus?"":"d-flex vh-100"]),style:e.normalizeStyle([n.isPreview?"min-height: auto !important;":""])},[e.createElementVNode("div",{class:e.normalizeClass([n.sidebarClass+[l.mq.mdMinus?"":" overflow-auto"],"sol-sidebar d-flex flex-column"]),style:e.normalizeStyle([l.mq.mdMinus?"":"min-width: 280px; max-width:280px;"])},[e.createElementVNode("header",null,[t.$slots.profile?(e.openBlock(),e.createElementBlock("div",me,[e.renderSlot(t.$slots,"profile",{},()=>[e.createElementVNode("div",fe,[he,e.createElementVNode("div",be,[e.createElementVNode("a",{href:n.signOutUrl,class:"text-white"},"Sign out",8,ge)])])])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass([[l.mq.lgMinus?"sol-sidebar-brand-sm":"sol-sidebar-brand"],"px-3"])},[t.$slots.navigation?(e.openBlock(),e.createElementBlock("a",ue,pe)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["d-inline align-middle",[l.mq.mdPlus?"h2":"h3"]])},[e.createVNode(r,{to:n.appRootUrl,class:"ff-encode-sans text-decoration-none text-light"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.appName),1)]),_:1},8,["to"])],2)],2)]),e.createElementVNode("div",{id:"sidebar-nav-collapse",class:e.normalizeClass(["px-3 flex-fill",[l.mq.mdMinus?"collapse":"collapse.show d-flex flex-column justify-content-between"]])},[t.$slots.navigation?(e.openBlock(),e.createElementBlock("nav",ye,[e.renderSlot(t.$slots,"navigation",{},()=>[_e])])):e.createCommentVNode("",!0),t.$slots.aside?(e.openBlock(),e.createElementBlock("aside",Ne,[e.renderSlot(t.$slots,"aside",{},()=>[e.createTextVNode("this is aside content")])])):e.createCommentVNode("",!0)],2),we],6),e.createElementVNode("div",{id:"scrollbody",class:e.normalizeClass([[l.mq.mdMinus?"":"flex-fill overflow-y-scroll"],"d-flex bg-body text-body"]),style:{"padding-top":"37px !important"}},[e.createElementVNode("div",{class:e.normalizeClass([[l.mq.lgPlus?"px-5":""],"container-xl d-flex flex-column"])},[e.createElementVNode("main",ke,[e.renderSlot(t.$slots,"main")]),t.$slots.footer?(e.openBlock(),e.createElementBlock("footer",Se,[e.renderSlot(t.$slots,"footer",{},()=>[e.createElementVNode("div",Ee,[Ve,e.createElementVNode("div",null," Copyright © "+e.toDisplayString(new Date().getFullYear())+" University of Washington ",1)])])])):e.createCommentVNode("",!0)],2)],2)],6)}const Ce=k(ce,[["render",xe]]),Be={inject:["mq"],props:{appName:{type:String,default:"appName"},appRootUrl:{type:String,default:"#"},topbarClass:{type:String,default:"bg-brand"},isPreview:{type:Boolean,default:!1},backgroundClass:{type:String,default:"bg-body"}},components:{},data(){return{}},created:function(){}},Te={class:"w-100"},Me={key:0,class:"bg-black bg-opacity-10 text-white py-2 small"},$e={class:"container-xl"},Oe={class:"axdd-topbar-brand"},Ie={class:"container-xl axdd-topbar-logo"},Pe={key:0,class:"btn btn-link btn-sm d-xl-none border border-1 border-light rounded-3 py-0 px-1 text-white me-2","data-bs-toggle":"collapse","data-bs-target":"#topbar-nav-collapse",role:"button","aria-expanded":"false","aria-controls":"topbar-nav-collapse","aria-label":"Toggle Navigation Menu"},De=[e.createElementVNode("i",{class:"bi bi-list fw-bold text-white fs-6"},null,-1)],ze={class:"container-xl"},qe={class:"row"},Ae={role:"navigation"},je={key:0},Le={class:"col"},Fe={key:0,class:"my-3"},Ue=e.createElementVNode("div",{style:{outline:"dashed 1px lightgray"}},[e.createElementVNode("h1",null,"Hello world..."),e.createElementVNode("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")],-1),Ke={class:"w-100"},We={key:0,class:"bg-dark text-white py-2 small"},Re={class:"container-xl"},Je={class:"text-white font-weight-light py-3"},He=e.createStaticVNode('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/" class="link-primary">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/" class="link-primary">Terms</a></li></ul>',1);function Ge(t,o,n,a,s,l){const r=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([n.topbarClass+[n.isPreview?" ":" min-vh-100"],"d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])},[e.createElementVNode("header",Te,[t.$slots.profile?(e.openBlock(),e.createElementBlock("div",Me,[e.createElementVNode("div",$e,[e.renderSlot(t.$slots,"profile",{},()=>[e.createTextVNode("Welcome!")])])])):e.createCommentVNode("",!0),e.createElementVNode("div",Oe,[e.createElementVNode("div",Ie,[t.$slots.navigation?(e.openBlock(),e.createElementBlock("a",Pe,De)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["d-inline align-middle text-white",[l.mq.xlPlus?"h2":"h3"]])},[e.createVNode(r,{to:n.appRootUrl,class:"ff-encode-sans text-white text-decoration-none"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.appName),1)]),_:1},8,["to"])],2)])])]),e.createElementVNode("div",{class:e.normalizeClass([n.backgroundClass,"w-100 flex-fill text-body"])},[e.createElementVNode("div",ze,[e.createElementVNode("div",qe,[t.$slots.navigation||t.$slots.aside?(e.openBlock(),e.createElementBlock("div",{key:0,class:"",style:e.normalizeStyle(l.mq.xlPlus?"min-width: 272px; max-width: 272px":"")},[e.createElementVNode("div",{id:"topbar-nav-collapse",class:e.normalizeClass([l.mq.xlPlus?"collapse.show":"collapse"])},[e.createElementVNode("nav",Ae,[e.renderSlot(t.$slots,"navigation")]),t.$slots.aside?(e.openBlock(),e.createElementBlock("aside",je,[e.renderSlot(t.$slots,"aside",{},()=>[e.createTextVNode("this is aside content")])])):e.createCommentVNode("",!0)],2)],4)):e.createCommentVNode("",!0),e.createElementVNode("div",Le,[t.$slots.bar?(e.openBlock(),e.createElementBlock("div",Fe,[e.renderSlot(t.$slots,"bar")])):e.createCommentVNode("",!0),e.createElementVNode("main",null,[e.renderSlot(t.$slots,"main",{},()=>[Ue])])])])])],2),e.createElementVNode("footer",Ke,[t.$slots.footer?(e.openBlock(),e.createElementBlock("div",We,[e.createElementVNode("div",Re,[e.renderSlot(t.$slots,"footer",{},()=>[e.createElementVNode("div",Je,[He,e.createElementVNode("div",null," Copyright © "+e.toDisplayString(new Date().getFullYear())+" University of Washington ",1)])])])])):e.createCommentVNode("",!0)])],2)}const Qe=k(Be,[["render",Ge]]),Ye={props:{variant:{type:String,default:"standard"},userNetid:{type:String,required:!0},userOverride:{type:String,required:!1},userOfficialName:{type:String},userPreferredName:{type:String},userPronouns:{type:String},signoutUrl:{type:String},profileUrl:{type:String}},data:function(){return{}}},Xe={key:0,class:"d-flex"},Ze={class:"flex-fill dropdown"},ve={key:0,class:"text-white text-decoration-none",href:"#",role:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},et={class:"me-1"},tt=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger me-1"},null,-1),nt={class:"text-decoration-underline"},ot={key:1,class:"text-white",href:"#",role:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},lt={class:"dropdown-menu p-3 bg-dark border-0 text-white small","aria-labelledby":"dropdownMenuButton1",style:{width:"220px"}},at={key:0,class:"small text-danger"},st=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger"},null,-1),rt={class:"small"},it={class:"small"},dt=["href"],ct=["href"],mt=e.createElementVNode("a",{href:"sadkf"},"sign out test",-1),ft={key:1,class:"d-flex"},ht={key:0,class:"flex-fill text-white"},bt={class:"me-1"},gt=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger"},null,-1),ut={key:1,class:"flex-fill text-white"},pt={class:"flex-fill text-end"},yt=["href"],_t=e.createElementVNode("a",{href:"sadkf"},"sign out test",-1);function Nt(t,o,n,a,s,l){return n.variant==="flyout"?(e.openBlock(),e.createElementBlock("div",Xe,[e.createElementVNode("div",Ze,[n.userOverride?(e.openBlock(),e.createElementBlock("a",ve,[e.createElementVNode("span",et,e.toDisplayString(n.userNetid),1),tt,e.createElementVNode("span",nt,e.toDisplayString(n.userOverride),1)])):(e.openBlock(),e.createElementBlock("a",ot,e.toDisplayString(n.userNetid),1)),e.createElementVNode("div",lt,[n.userOverride?(e.openBlock(),e.createElementBlock("p",at,[e.createTextVNode(" overriding as "),st,e.createTextVNode(" "+e.toDisplayString(n.userOverride),1)])):e.createCommentVNode("",!0),e.createElementVNode("p",rt,e.toDisplayString(n.userOfficialName)+", "+e.toDisplayString(n.userPreferredName)+", "+e.toDisplayString(n.userPronouns),1),e.createElementVNode("p",it,[e.createElementVNode("a",{href:n.profileUrl},"go to profile",8,dt)]),e.createElementVNode("div",null,[n.signoutUrl?e.renderSlot(t.$slots,"default",{key:0},()=>[e.createElementVNode("a",{href:n.signoutUrl,class:"text-white"},"Sign out",8,ct)]):e.renderSlot(t.$slots,"default",{key:1},()=>[mt])])])])])):(e.openBlock(),e.createElementBlock("div",ft,[n.userOverride?(e.openBlock(),e.createElementBlock("div",ht,[e.createElementVNode("span",bt,e.toDisplayString(n.userNetid),1),gt,e.createTextVNode(" "+e.toDisplayString(n.userOverride),1)])):(e.openBlock(),e.createElementBlock("div",ut,e.toDisplayString(n.userNetid),1)),e.createElementVNode("div",pt,[n.signoutUrl?e.renderSlot(t.$slots,"default",{key:0},()=>[e.createElementVNode("a",{href:n.signoutUrl,class:"text-white"},"Sign out",8,yt)]):e.renderSlot(t.$slots,"default",{key:1},()=>[_t])])]))}const wt=k(Ye,[["render",Nt]]);function z(t){return e.getCurrentScope()?(e.onScopeDispose(t),!0):!1}function M(t){return typeof t=="function"?t():e.unref(t)}const kt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const St=Object.prototype.toString,Et=t=>St.call(t)==="[object Object]",q=()=>{};function Vt(t,o){function n(...a){return new Promise((s,l)=>{Promise.resolve(t(()=>o.apply(this,a),{fn:o,thisArg:this,args:a})).then(s).catch(l)})}return n}const A=t=>t();function xt(t=A){const o=e.ref(!0);function n(){o.value=!1}function a(){o.value=!0}const s=(...l)=>{o.value&&t(...l)};return{isActive:e.readonly(o),pause:n,resume:a,eventFilter:s}}function Ct(t){return e.getCurrentInstance()}function Bt(...t){if(t.length!==1)return e.toRef(...t);const o=t[0];return typeof o=="function"?e.readonly(e.customRef(()=>({get:o,set:q}))):e.ref(o)}function Tt(t,o,n={}){const{eventFilter:a=A,...s}=n;return e.watch(t,Vt(a,o),s)}function Mt(t,o,n={}){const{eventFilter:a,...s}=n,{eventFilter:l,pause:r,resume:p,isActive:N}=xt(a);return{stop:Tt(t,o,{...s,eventFilter:l}),pause:r,resume:p,isActive:N}}function j(t,o=!0,n){Ct()?e.onMounted(t,n):o?t():e.nextTick(t)}function L(t){var o;const n=M(t);return(o=n==null?void 0:n.$el)!=null?o:n}const B=kt?window:void 0;function F(...t){let o,n,a,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,a,s]=t,o=B):[o,n,a,s]=t,!o)return q;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const l=[],r=()=>{l.forEach(h=>h()),l.length=0},p=(h,d,S,u)=>(h.addEventListener(d,S,u),()=>h.removeEventListener(d,S,u)),N=e.watch(()=>[L(o),M(s)],([h,d])=>{if(r(),!h)return;const S=Et(d)?{...d}:d;l.push(...n.flatMap(u=>a.map(y=>p(h,u,y,S))))},{immediate:!0,flush:"post"}),g=()=>{N(),r()};return z(g),g}function $t(){const t=e.ref(!1),o=e.getCurrentInstance();return o&&e.onMounted(()=>{t.value=!0},o),t}function Ot(t){const o=$t();return e.computed(()=>(o.value,!!t()))}function It(t,o={}){const{window:n=B}=o,a=Ot(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const l=e.ref(!1),r=g=>{l.value=g.matches},p=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",r):s.removeListener(r))},N=e.watchEffect(()=>{a.value&&(p(),s=n.matchMedia(M(t)),"addEventListener"in s?s.addEventListener("change",r):s.addListener(r),l.value=s.matches)});return z(()=>{N(),p(),s=void 0}),l}const $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__",Pt=Dt();function Dt(){return O in $||($[O]=$[O]||{}),$[O]}function U(t,o){return Pt[t]||o}function zt(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const qt={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},K="vueuse-storage";function At(t,o,n,a={}){var s;const{flush:l="pre",deep:r=!0,listenToStorageChanges:p=!0,writeDefaults:N=!0,mergeDefaults:g=!1,shallow:h,window:d=B,eventFilter:S,onError:u=i=>{console.error(i)},initOnMounted:y}=a,b=(h?e.shallowRef:e.ref)(typeof o=="function"?o():o);if(!n)try{n=U("getDefaultStorage",()=>{var i;return(i=B)==null?void 0:i.localStorage})()}catch(i){u(i)}if(!n)return b;const w=M(o),T=zt(w),E=(s=a.serializer)!=null?s:qt[T],{pause:I,resume:c}=Mt(b,()=>P(b.value),{flush:l,deep:r,eventFilter:S});d&&p&&j(()=>{F(d,"storage",_),F(d,K,D),y&&_()}),y||_();function V(i,m){d&&d.dispatchEvent(new CustomEvent(K,{detail:{key:t,oldValue:i,newValue:m,storageArea:n}}))}function P(i){try{const m=n.getItem(t);if(i==null)V(m,null),n.removeItem(t);else{const x=E.write(i);m!==x&&(n.setItem(t,x),V(m,x))}}catch(m){u(m)}}function C(i){const m=i?i.newValue:n.getItem(t);if(m==null)return N&&w!=null&&n.setItem(t,E.write(w)),w;if(!i&&g){const x=E.read(m);return typeof g=="function"?g(x,w):T==="object"&&!Array.isArray(x)?{...w,...x}:x}else return typeof m!="string"?m:E.read(m)}function _(i){if(!(i&&i.storageArea!==n)){if(i&&i.key==null){b.value=w;return}if(!(i&&i.key!==t)){I();try{(i==null?void 0:i.newValue)!==E.write(b.value)&&(b.value=C(i))}catch(m){u(m)}finally{i?e.nextTick(c):c()}}}}function D(i){_(i.detail)}return b}function jt(t){return It("(prefers-color-scheme: dark)",t)}function Lt(t={}){const{selector:o="html",attribute:n="class",initialValue:a="auto",window:s=B,storage:l,storageKey:r="vueuse-color-scheme",listenToStorageChanges:p=!0,storageRef:N,emitAuto:g,disableTransition:h=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes||{}},S=jt({window:s}),u=e.computed(()=>S.value?"dark":"light"),y=N||(r==null?Bt(a):At(r,a,l,{window:s,listenToStorageChanges:p})),b=e.computed(()=>y.value==="auto"?u.value:y.value),w=U("updateHTMLAttrs",(c,V,P)=>{const C=typeof c=="string"?s==null?void 0:s.document.querySelector(c):L(c);if(!C)return;let _;if(h&&(_=s.document.createElement("style"),_.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),s.document.head.appendChild(_)),V==="class"){const D=P.split(/\s/g);Object.values(d).flatMap(i=>(i||"").split(/\s/g)).filter(Boolean).forEach(i=>{D.includes(i)?C.classList.add(i):C.classList.remove(i)})}else C.setAttribute(V,P);h&&(s.getComputedStyle(_).opacity,document.head.removeChild(_))});function T(c){var V;w(o,n,(V=d[c])!=null?V:c)}function E(c){t.onChanged?t.onChanged(c,T):T(c)}e.watch(b,E,{flush:"post",immediate:!0}),j(()=>E(b.value));const I=e.computed({get(){return g?y.value:b.value},set(c){y.value=c}});try{return Object.assign(I,{store:y,system:u,state:b})}catch{return I}}const Ft={setup(){return{colorMode:Lt({emitAuto:!0,attribute:"data-bs-theme"})}}},Ut={class:"d-flex align-items-center"},Kt={class:"btn btn-link text-reset dropdown-toggle p-1",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false","aria-label":"Choose color mode"},Wt={class:"bi bi-brightness-high-fill"},Rt={class:"bi bi-moon-stars-fill"},Jt={class:"bi bi-circle-half"},Ht={class:"dropdown-menu p-1"},Gt={class:"mb-1"},Qt=e.createElementVNode("i",{class:"bi bi-brightness-high-fill"},null,-1),Yt={class:"mb-1"},Xt=e.createElementVNode("i",{class:"bi bi-moon-stars-fill"},null,-1),Zt=e.createElementVNode("i",{class:"bi bi-circle-half"},null,-1);function vt(t,o,n,a,s,l){return e.openBlock(),e.createElementBlock("div",Ut,[e.createElementVNode("div",null,[e.createElementVNode("button",Kt,[e.withDirectives(e.createElementVNode("i",Wt,null,512),[[e.vShow,a.colorMode=="light"]]),e.withDirectives(e.createElementVNode("i",Rt,null,512),[[e.vShow,a.colorMode=="dark"]]),e.withDirectives(e.createElementVNode("i",Jt,null,512),[[e.vShow,a.colorMode=="auto"]])]),e.createElementVNode("ul",Ht,[e.createElementVNode("li",Gt,[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item rounded",a.colorMode=="light"?"active":""]),href:"#",role:"button",onClick:o[0]||(o[0]=r=>a.colorMode="light")},[Qt,e.createTextVNode(" Light")],2)]),e.createElementVNode("li",Yt,[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item rounded",a.colorMode=="dark"?"active":""]),href:"#",role:"button",onClick:o[1]||(o[1]=r=>a.colorMode="dark")},[Xt,e.createTextVNode(" Dark")],2)]),e.createElementVNode("li",null,[e.createElementVNode("a",{class:e.normalizeClass(["dropdown-item rounded",a.colorMode=="auto"?"active":""]),href:"#",role:"button",onClick:o[2]||(o[2]=r=>a.colorMode="auto")},[Zt,e.createTextVNode(" Auto")],2)])])])])}const en=k(Ft,[["render",vt]]);f.SColorMode=en,f.SProfile=wt,f.SSidebar=Ce,f.STabsDisplay=Z,f.STabsItem=ae,f.STabsList=G,f.STabsPanel=de,f.STopbar=Qe,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
