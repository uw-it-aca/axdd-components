(function(e,S){typeof exports=="object"&&typeof module<"u"?module.exports=S(require("vue")):typeof define=="function"&&define.amd?define(["vue"],S):(e=typeof globalThis<"u"?globalThis:e||self,e.AxddComponents=S(e.Vue))})(this,function(e){"use strict";var S;const V=typeof window<"u",Z=t=>typeof t=="function",v=t=>typeof t=="string",ee=()=>{};V&&((S=window==null?void 0:window.navigator)!=null&&S.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function M(t){return typeof t=="function"?t():e.unref(t)}function te(t,o){function n(...a){return new Promise((s,r)=>{Promise.resolve(t(()=>o.apply(this,a),{fn:o,thisArg:this,args:a})).then(s).catch(r)})}return n}const j=t=>t();function ne(t=j){const o=e.ref(!0);function n(){o.value=!1}function a(){o.value=!0}return{isActive:o,pause:n,resume:a,eventFilter:(...r)=>{o.value&&t(...r)}}}function oe(t){return t}function q(t){return e.getCurrentScope()?(e.onScopeDispose(t),!0):!1}function ae(t){return typeof t=="function"?e.computed(t):e.ref(t)}function A(t,o=!0){e.getCurrentInstance()?e.onMounted(t):o?t():e.nextTick(t)}var z=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,le=(t,o)=>{var n={};for(var a in t)re.call(t,a)&&o.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&z)for(var a of z(t))o.indexOf(a)<0&&se.call(t,a)&&(n[a]=t[a]);return n};function ie(t,o,n={}){const a=n,{eventFilter:s=j}=a,r=le(a,["eventFilter"]);return e.watch(t,te(s,o),r)}var de=Object.defineProperty,ce=Object.defineProperties,me=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,U=(t,o,n)=>o in t?de(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,fe=(t,o)=>{for(var n in o||(o={}))L.call(o,n)&&U(t,n,o[n]);if(C)for(var n of C(o))F.call(o,n)&&U(t,n,o[n]);return t},pe=(t,o)=>ce(t,me(o)),_e=(t,o)=>{var n={};for(var a in t)L.call(t,a)&&o.indexOf(a)<0&&(n[a]=t[a]);if(t!=null&&C)for(var a of C(t))o.indexOf(a)<0&&F.call(t,a)&&(n[a]=t[a]);return n};function he(t,o,n={}){const a=n,{eventFilter:s}=a,r=_e(a,["eventFilter"]),{eventFilter:l,pause:c,resume:w,isActive:_}=ne(s);return{stop:ie(t,o,pe(fe({},r),{eventFilter:l})),pause:c,resume:w,isActive:_}}function ue(t){var o;const n=M(t);return(o=n==null?void 0:n.$el)!=null?o:n}const B=V?window:void 0;V&&window.document,V&&window.navigator,V&&window.location;function be(...t){let o,n,a,s;if(v(t[0])||Array.isArray(t[0])?([n,a,s]=t,o=B):[o,n,a,s]=t,!o)return ee;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const r=[],l=()=>{r.forEach(m=>m()),r.length=0},c=(m,p,b)=>(m.addEventListener(p,b,s),()=>m.removeEventListener(p,b,s)),w=e.watch(()=>ue(o),m=>{l(),m&&r.push(...n.flatMap(p=>a.map(b=>c(m,p,b))))},{immediate:!0,flush:"post"}),_=()=>{w(),l()};return q(_),_}function ge(t,o=!1){const n=e.ref(),a=()=>n.value=Boolean(t());return a(),A(a,o),n}function ye(t,o={}){const{window:n=B}=o,a=ge(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const r=e.ref(!1),l=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",c):s.removeListener(c))},c=()=>{a.value&&(l(),s=n.matchMedia(ae(t).value),r.value=s.matches,"addEventListener"in s?s.addEventListener("change",c):s.addListener(c))};return e.watchEffect(c),q(()=>l()),r}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";P[T]=P[T]||{};const ke=P[T];function K(t,o){return ke[t]||o}function we(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}var Ne=Object.defineProperty,R=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Q=(t,o,n)=>o in t?Ne(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,W=(t,o)=>{for(var n in o||(o={}))Ee.call(o,n)&&Q(t,n,o[n]);if(R)for(var n of R(o))$e.call(o,n)&&Q(t,n,o[n]);return t};const Se={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function xe(t,o,n,a={}){var s;const{flush:r="pre",deep:l=!0,listenToStorageChanges:c=!0,writeDefaults:w=!0,mergeDefaults:_=!1,shallow:m,window:p=B,eventFilter:b,onError:N=i=>{console.error(i)}}=a,h=(m?e.shallowRef:e.ref)(o);if(!n)try{n=K("getDefaultStorage",()=>{var i;return(i=B)==null?void 0:i.localStorage})()}catch(i){N(i)}if(!n)return h;const g=M(o),O=we(g),y=(s=a.serializer)!=null?s:Se[O],{pause:u,resume:k}=he(h,()=>E(h.value),{flush:r,deep:l,eventFilter:b});return p&&c&&be(p,"storage",I),I(),h;function E(i){try{if(i==null)n.removeItem(t);else{const f=y.write(i),$=n.getItem(t);$!==f&&(n.setItem(t,f),p&&(p==null||p.dispatchEvent(new StorageEvent("storage",{key:t,oldValue:$,newValue:f,storageArea:n}))))}}catch(f){N(f)}}function x(i){const f=i?i.newValue:n.getItem(t);if(f==null)return w&&g!==null&&n.setItem(t,y.write(g)),g;if(!i&&_){const $=y.read(f);return Z(_)?_($,g):O==="object"&&!Array.isArray($)?W(W({},g),$):$}else return typeof f!="string"?f:y.read(f)}function I(i){if(!(i&&i.storageArea!==n)){if(i&&i.key==null){h.value=g;return}if(!(i&&i.key!==t)){u();try{h.value=x(i)}catch(f){N(f)}finally{i?e.nextTick(k):k()}}}}}function Ve(t){return ye("(prefers-color-scheme: dark)",t)}var Be=Object.defineProperty,H=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,J=(t,o,n)=>o in t?Be(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,Ie=(t,o)=>{for(var n in o||(o={}))Oe.call(o,n)&&J(t,n,o[n]);if(H)for(var n of H(o))Ce.call(o,n)&&J(t,n,o[n]);return t};function Pe(t={}){const{selector:o="html",attribute:n="class",initialValue:a="auto",window:s=B,storage:r,storageKey:l="vueuse-color-scheme",listenToStorageChanges:c=!0,storageRef:w,emitAuto:_}=t,m=Ie({auto:"",light:"light",dark:"dark"},t.modes||{}),p=Ve({window:s}),b=e.computed(()=>p.value?"dark":"light"),N=w||(l==null?e.ref(a):xe(l,a,r,{window:s,listenToStorageChanges:c})),h=e.computed({get(){return N.value==="auto"&&!_?b.value:N.value},set(u){N.value=u}}),g=K("updateHTMLAttrs",(u,k,E)=>{const x=s==null?void 0:s.document.querySelector(u);if(x)if(k==="class"){const I=E.split(/\s/g);Object.values(m).flatMap(i=>(i||"").split(/\s/g)).filter(Boolean).forEach(i=>{I.includes(i)?x.classList.add(i):x.classList.remove(i)})}else x.setAttribute(k,E)});function O(u){var k;const E=u==="auto"?b.value:u;g(o,n,(k=m[E])!=null?k:E)}function y(u){t.onChanged?t.onChanged(u,O):O(u)}return e.watch(h,y,{flush:"post",immediate:!0}),_&&e.watch(b,()=>y(h.value),{flush:"post"}),A(()=>y(h.value)),h}var G;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(G||(G={}));var Te=Object.defineProperty,Y=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,X=(t,o,n)=>o in t?Te(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,je=(t,o)=>{for(var n in o||(o={}))De.call(o,n)&&X(t,n,o[n]);if(Y)for(var n of Y(o))Me.call(o,n)&&X(t,n,o[n]);return t};je({linear:oe},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const d=(t,o)=>{const n=t.__vccOpts||t;for(const[a,s]of o)n[a]=s;return n},qe={name:"axdd-color-mode",setup(){return{colorMode:Pe({emitAuto:!0,attribute:"data-bs-theme"})}}},Ae=[e.createElementVNode("option",{value:"auto"},"Auto",-1),e.createElementVNode("option",{value:"light"},"Light",-1),e.createElementVNode("option",{value:"dark"},"Dark",-1)];function ze(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("p",null,"color mode: "+e.toDisplayString(a.colorMode),1),e.withDirectives(e.createElementVNode("select",{"onUpdate:modelValue":o[0]||(o[0]=l=>a.colorMode=l),class:"form-select"},Ae,512),[[e.vModelSelect,a.colorMode]])])}const Le=d(qe,[["render",ze]]),Fe={name:"axdd-panel",data:function(){return{}}},Ue={class:"card rounded-3 border-0 mb-4 p-4"};function Ke(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("div",Ue,[e.renderSlot(t.$slots,"default")])}const Re=d(Fe,[["render",Ke]]),Qe={name:"axdd-profile",props:{variant:{type:String,default:"standard"},userNetid:{type:String,required:!0},userOverride:{type:String,required:!1},userOfficialName:{type:String},userPreferredName:{type:String},userPronouns:{type:String},signoutUrl:{type:String},profileUrl:{type:String}},data:function(){return{}}},We={key:0,class:"d-flex"},He={class:"flex-fill dropdown"},Je={key:0,class:"text-white text-decoration-none",href:"#",role:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},Ge={class:"me-1"},Ye=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger me-1"},null,-1),Xe={class:"text-decoration-underline"},Ze={key:1,class:"text-white",href:"#",role:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},ve={class:"dropdown-menu p-3 bg-dark border-0 text-white small","aria-labelledby":"dropdownMenuButton1",style:{width:"220px"}},et={key:0,class:"small text-danger"},tt=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger"},null,-1),nt={class:"small"},ot={class:"small"},at=["href"],rt=["href"],st=e.createElementVNode("a",{href:"sadkf"},"sign out test",-1),lt={key:1,class:"d-flex"},it={key:0,class:"flex-fill text-white"},dt={class:"me-1"},ct=e.createElementVNode("i",{class:"bi bi-arrow-right text-danger"},null,-1),mt={key:1,class:"flex-fill text-white"},ft={class:"flex-fill text-end"},pt=["href"],_t=e.createElementVNode("a",{href:"sadkf"},"sign out test",-1);function ht(t,o,n,a,s,r){return n.variant==="flyout"?(e.openBlock(),e.createElementBlock("div",We,[e.createElementVNode("div",He,[n.userOverride?(e.openBlock(),e.createElementBlock("a",Je,[e.createElementVNode("span",Ge,e.toDisplayString(n.userNetid),1),Ye,e.createElementVNode("span",Xe,e.toDisplayString(n.userOverride),1)])):(e.openBlock(),e.createElementBlock("a",Ze,e.toDisplayString(n.userNetid),1)),e.createElementVNode("div",ve,[n.userOverride?(e.openBlock(),e.createElementBlock("p",et,[e.createTextVNode(" overriding as "),tt,e.createTextVNode(" "+e.toDisplayString(n.userOverride),1)])):e.createCommentVNode("",!0),e.createElementVNode("p",nt,e.toDisplayString(n.userOfficialName)+", "+e.toDisplayString(n.userPreferredName)+", "+e.toDisplayString(n.userPronouns),1),e.createElementVNode("p",ot,[e.createElementVNode("a",{href:n.profileUrl},"go to profile",8,at)]),e.createElementVNode("div",null,[n.signoutUrl?e.renderSlot(t.$slots,"default",{key:0},()=>[e.createElementVNode("a",{href:n.signoutUrl,class:"text-white"},"Sign out",8,rt)]):e.renderSlot(t.$slots,"default",{key:1},()=>[st])])])])])):(e.openBlock(),e.createElementBlock("div",lt,[n.userOverride?(e.openBlock(),e.createElementBlock("div",it,[e.createElementVNode("span",dt,e.toDisplayString(n.userNetid),1),ct,e.createTextVNode(" "+e.toDisplayString(n.userOverride),1)])):(e.openBlock(),e.createElementBlock("div",mt,e.toDisplayString(n.userNetid),1)),e.createElementVNode("div",ft,[n.signoutUrl?e.renderSlot(t.$slots,"default",{key:0},()=>[e.createElementVNode("a",{href:n.signoutUrl,class:"text-white"},"Sign out",8,pt)]):e.renderSlot(t.$slots,"default",{key:1},()=>[_t])])]))}const ut=d(Qe,[["render",ht]]),ko="",bt={name:"axdd-disclosure-action",props:{disclosureId:{type:[String,Number],required:!0},isLink:{type:Boolean},hasIndicator:{type:Boolean}}},gt=["href","aria-controls"],yt=["data-bs-target","aria-controls"],kt={key:0,class:"bi bi-chevron-right text-dark-beige","aria-hidden":"true"};function wt(t,o,n,a,s,r){return n.isLink?(e.openBlock(),e.createElementBlock("a",{key:0,"data-bs-toggle":"collapse",href:"#"+n.disclosureId,role:"button","aria-expanded":"false","aria-controls":n.disclosureId},[e.renderSlot(t.$slots,"default",{},void 0,!0)],8,gt)):(e.openBlock(),e.createElementBlock("button",{key:1,class:e.normalizeClass(["btn btn-beige",[n.hasIndicator?"chevron":""]]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+n.disclosureId,"aria-expanded":"false","aria-controls":n.disclosureId},[n.hasIndicator?(e.openBlock(),e.createElementBlock("i",kt)):e.createCommentVNode("",!0),e.renderSlot(t.$slots,"default",{},void 0,!0)],10,yt))}const Nt=d(bt,[["render",wt],["__scopeId","data-v-bac417f3"]]),Et={name:"axdd-disclosure-panel",props:{disclosureId:{type:[String,Number],required:!0}}},$t=["id"];function St(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("div",{class:"collapse",id:n.disclosureId},[e.renderSlot(t.$slots,"default")],8,$t)}const xt=d(Et,[["render",St]]),wo="",Vt={name:"axdd-disclosure-block",props:{blockId:{type:[String,Number],required:!0},blockTitle:{type:String,required:!0}}},Bt=t=>(e.pushScopeId("data-v-075da959"),t=t(),e.popScopeId(),t),Ot={class:"rounded-3 p-3 mb-2"},Ct={class:"d-flex"},It={class:"me-3",style:{width:"330px"}},Pt=["data-bs-target","aria-controls"],Tt=Bt(()=>e.createElementVNode("i",{class:"bi bi-chevron-right mx-2","aria-hidden":"true"},null,-1)),Dt=["id"],Mt={class:"flex-fill"},jt=["id","aria-labelledby"];function qt(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("div",Ot,[e.createElementVNode("div",Ct,[e.createElementVNode("div",It,[e.createElementVNode("a",{href:"#",class:"chevron d-block text-start btn-link text-reset rounded text-decoration-none py-1 ps-0 collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+n.blockId+"-panel","aria-expanded":"false","aria-controls":n.blockId+"-panel"},[Tt,e.createElementVNode("span",{class:"fw-bold",id:n.blockId+"-heading"},e.toDisplayString(n.blockTitle),9,Dt)],8,Pt)]),e.createElementVNode("div",Mt,[e.renderSlot(t.$slots,"header",{},void 0,!0)])]),e.createElementVNode("div",{id:n.blockId+"-panel",class:"collapse","aria-labelledby":n.blockId+"-heading"},[e.renderSlot(t.$slots,"body",{},void 0,!0)],8,jt)])}const At=d(Vt,[["render",qt],["__scopeId","data-v-075da959"]]),zt={name:"axdd-card",data:function(){return{}}},Lt={class:"card shadow-sm rounded-3 mb-4"},Ft={key:0,class:"card-header bg-transparent border-0 rounded-top p-3"},Ut={key:1,class:"card-header bg-transparent rounded-top border-0 p-3 d-flex align-items-center justify-content-between"},Kt={key:2,class:"card-body"},Rt={key:3,class:"card-footer bg-black bg-opacity-10 border-0 rounded-bottom"};function Qt(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("div",Lt,[t.$slots.heading?(e.openBlock(),e.createElementBlock("div",Ft,[e.renderSlot(t.$slots,"heading")])):e.createCommentVNode("",!0),t.$slots["heading-action"]?(e.openBlock(),e.createElementBlock("div",Ut,[e.renderSlot(t.$slots,"heading-action")])):e.createCommentVNode("",!0),t.$slots.body?(e.openBlock(),e.createElementBlock("div",Kt,[e.renderSlot(t.$slots,"body")])):e.createCommentVNode("",!0),t.$slots.footer?(e.openBlock(),e.createElementBlock("div",Rt,[e.renderSlot(t.$slots,"footer")])):e.createCommentVNode("",!0)])}const Wt=d(zt,[["render",Qt]]),Ht={name:"axdd-card-heading",props:{level:{type:Number,required:!0}},data:function(){return{}},computed:{checkedLevel(){return this.level>0&&this.level<7?this.level:2}}};function Jt(t,o,n,a,s,r){return e.openBlock(),e.createBlock(e.resolveDynamicComponent(`h${r.checkedLevel}`),{class:"h6 m-0 fw-bold"},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default")]),_:3})}const Gt=d(Ht,[["render",Jt]]),Yt={name:"axdd-card-action",data:function(){return{}}};function Xt(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(t.$slots,"default")])}const Zt=d(Yt,[["render",Xt]]),vt={name:"axdd-card-tabs",data:function(){return{}}};function en(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("div",null,[e.renderSlot(t.$slots,"default")])}const tn=d(vt,[["render",en]]),No="",nn={name:"axdd-tabs-list",props:{variant:{type:String,required:!1,default:"lines"},tabsId:{type:[String,Number],required:!0}}},on=["id"],an=["id"];function rn(t,o,n,a,s,r){return n.variant=="lines"?(e.openBlock(),e.createElementBlock("ul",{key:0,class:"nav nav-lines border-bottom",id:n.tabsId,role:"tablist"},[e.renderSlot(t.$slots,"items")],8,on)):n.variant=="pills"?(e.openBlock(),e.createElementBlock("ul",{key:1,class:e.normalizeClass(["bg-light gap-1 rounded-3 p-1","nav nav-"+n.variant]),id:n.tabsId,role:"tablist"},[e.renderSlot(t.$slots,"items")],10,an)):e.createCommentVNode("",!0)}const sn=d(nn,[["render",rn]]),ln={name:"axdd-tabs-display",props:{tabsId:{type:[String,Number],required:!0}}},dn=["id"];function cn(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("div",{class:"tab-content",id:n.tabsId+"Content"},[e.renderSlot(t.$slots,"panels")],8,dn)}const mn=d(ln,[["render",cn]]),fn={name:"axdd-tabs-item",props:{variant:{type:String,required:!1,default:"lines"},panelId:{type:[String,Number],required:!0},tabsId:{type:[String,Number],required:!0},activeTab:{type:Boolean,required:!1}},computed:{elements(){return document.getElementsByClassName(this.tabsId+"-link")},classObject(){let t={};return t[this.tabsId+"-link"]=!0,t.active=this.activeTab,t}},methods:{findIndex(t){return[].findIndex.call(this.elements,o=>o===t)},moveTab(t){this.elements[t].click(),this.elements[t].focus(),Array.from(this.elements).forEach((o,n)=>{n==t?o.tabIndex=0:o.tabIndex=-1})},moveNext(t){const o=this.findIndex(t.target);o<this.elements.length-1&&this.moveTab(o+1)},movePrev(t){const o=this.findIndex(t.target);o>0&&this.moveTab(o-1)},onClick(t){const o=this.findIndex(t.target);this.moveTab(o)}}},pn={class:"nav-item",role:"presentation"},_n=["tabindex","id","data-bs-target","aria-controls","aria-selected"],hn=["tabindex","id","data-bs-target","aria-controls","aria-selected"],un=["tabindex","id","data-bs-target","aria-controls","aria-selected"];function bn(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("li",pn,[n.variant=="lines"?(e.openBlock(),e.createElementBlock("button",{key:0,class:e.normalizeClass(["nav-lines-link text-secondary border-bottom border-white border-4 p-3",r.classObject]),tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[0]||(o[0]=e.withKeys((...l)=>r.moveNext&&r.moveNext(...l),["right"])),o[1]||(o[1]=e.withKeys((...l)=>r.movePrev&&r.movePrev(...l),["left"]))],onClick:o[2]||(o[2]=(...l)=>r.onClick&&r.onClick(...l))},[e.renderSlot(t.$slots,"default")],42,_n)):n.variant=="pills"?(e.openBlock(),e.createElementBlock("button",{key:1,class:e.normalizeClass(["nav-pills-link rounded-3 px-3 py-2",r.classObject]),tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[3]||(o[3]=e.withKeys((...l)=>r.moveNext&&r.moveNext(...l),["right"])),o[4]||(o[4]=e.withKeys((...l)=>r.movePrev&&r.movePrev(...l),["left"]))],onClick:o[5]||(o[5]=(...l)=>r.onClick&&r.onClick(...l))},[e.renderSlot(t.$slots,"default")],42,hn)):(e.openBlock(),e.createElementBlock("button",{key:2,class:e.normalizeClass(["nav-link",r.classObject]),tabindex:[n.activeTab?"0":"-1"],id:n.panelId+"-tab","data-bs-toggle":"tab","data-bs-target":"#"+n.panelId,type:"button",role:"tab","aria-controls":n.panelId,"aria-selected":n.activeTab,onKeydown:[o[6]||(o[6]=e.withKeys((...l)=>r.moveNext&&r.moveNext(...l),["right"])),o[7]||(o[7]=e.withKeys((...l)=>r.movePrev&&r.movePrev(...l),["left"]))],onClick:o[8]||(o[8]=(...l)=>r.onClick&&r.onClick(...l))},[e.renderSlot(t.$slots,"default")],42,un))])}const gn=d(fn,[["render",bn]]),yn={name:"axdd-tabs-panel",props:{panelId:{type:[String,Number],required:!0},activePanel:{type:Boolean,required:!1}},methods:{setFocus(){document.getElementById(this.panelId+"-tab").focus()}}},kn=["id","aria-labelledby"];function wn(t,o,n,a,s,r){return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["tab-pane fade",{"show active":n.activePanel}]),id:n.panelId,role:"tabpanel","aria-labelledby":n.panelId+"-tab",tabindex:"0",onKeydown:o[0]||(o[0]=e.withKeys(e.withModifiers((...l)=>r.setFocus&&r.setFocus(...l),["shift","prevent"]),["tab"]))},[e.renderSlot(t.$slots,"default")],42,kn)}const Nn=d(yn,[["render",wn]]),Eo="",En={name:"axdd-sidebar",inject:["mq"],props:{appName:{type:String,default:"appName"},pageTitle:{type:String,default:"pageTitle"},userName:{type:String,default:"userName"},appRootUrl:{type:String,default:"#"},sidebarClass:{type:String,default:"#"},signOutUrl:{type:String,default:"#"},isPreview:{type:Boolean,default:!1}},created:function(){}},$n={key:0,class:"py-2 px-3 small bg-black bg-opacity-10"},Sn={class:"d-flex"},xn=e.createElementVNode("div",{class:"flex-fill"},"username",-1),Vn={class:"flex-fill text-end"},Bn=["href"],On={key:0,class:"btn btn-link btn-sm d-lg-none border border-1 rounded-3 py-0 px-1 me-2","data-bs-toggle":"collapse","data-bs-target":"#sidebar-nav-collapse",role:"button","aria-expanded":"false","aria-controls":"sidebar-nav-collapse","aria-label":"Toggle Navigation Menu"},Cn=[e.createElementVNode("i",{class:"bi bi-list fw-bold fs-6"},null,-1)],In={key:0,class:"me-2"},Pn=e.createElementVNode("i",{class:"bi bi-box-fill"},null,-1),Tn={class:"flex-fill"},Dn={key:0,role:"navigation"},Mn=e.createElementVNode("ul",{class:"text-white"},[e.createElementVNode("li",null,"nav 1"),e.createElementVNode("li",null,"nav 2"),e.createElementVNode("li",null,"nav 3"),e.createElementVNode("li",null,"nav 4")],-1),jn={key:1,class:"mb-5"},qn=e.createElementVNode("div",{class:"axdd-sidebar-logo"}," ",-1),An={key:0,class:"row"},zn={class:"col"},Ln=e.createElementVNode("div",{class:"bg-gray py-2 text-center"}," default gray bar (default) ",-1),Fn={class:"flex-fill"},Un={key:1,class:"mt-auto"},Kn={class:"font-weight-light py-3 small"},Rn=e.createStaticVNode('<ul class="list-inline m-0"><ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul></ul>',1);function Qn(t,o,n,a,s,r){const l=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([r.mq.mdMinus?"":"d-flex vh-100"]),style:e.normalizeStyle([n.isPreview?"min-height: auto !important;":""])},[e.createElementVNode("div",{class:e.normalizeClass([[r.mq.mdMinus?"":"overflow-auto "+n.sidebarClass],"axdd-sidebar d-flex flex-column"]),"data-bs-theme":"dark",style:e.normalizeStyle([r.mq.mdMinus?"":"min-width: 280px; max-width:280px;"])},[e.createElementVNode("header",null,[t.$slots.profile?(e.openBlock(),e.createElementBlock("div",$n,[e.renderSlot(t.$slots,"profile",{},()=>[e.createElementVNode("div",Sn,[xn,e.createElementVNode("div",Vn,[e.createElementVNode("a",{href:n.signOutUrl,class:"text-white"},"Sign out",8,Bn)])])])])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass([[r.mq.lgMinus?"axdd-sidebar-brand-sm":"axdd-sidebar-brand"],"px-3"])},[t.$slots.navigation?(e.openBlock(),e.createElementBlock("a",On,Cn)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["d-inline align-middle",[r.mq.mdPlus?"h2":"h3"]])},[e.createVNode(l,{to:n.appRootUrl,class:"axdd-font-encode-sans text-decoration-none text-light"},{default:e.withCtx(()=>[t.$slots.logo?(e.openBlock(),e.createElementBlock("span",In,[e.renderSlot(t.$slots,"logo",{},()=>[Pn])])):e.createCommentVNode("",!0),e.createTextVNode(e.toDisplayString(n.appName),1)]),_:3},8,["to"])],2)],2)]),e.createElementVNode("div",Tn,[e.createElementVNode("div",{id:"sidebar-nav-collapse",class:e.normalizeClass(["px-3",[r.mq.mdMinus?"collapse":"collapse.show"]])},[t.$slots.navigation?(e.openBlock(),e.createElementBlock("nav",Dn,[e.renderSlot(t.$slots,"navigation",{},()=>[Mn])])):e.createCommentVNode("",!0),t.$slots.aside?(e.openBlock(),e.createElementBlock("aside",jn,[e.renderSlot(t.$slots,"aside",{},()=>[e.createTextVNode("this is aside content")])])):e.createCommentVNode("",!0)],2)]),qn],6),e.createElementVNode("div",{class:e.normalizeClass([[r.mq.mdMinus?"":"flex-fill overflow-auto"],"bg-body text-body"]),style:{"padding-top":"37px !important"}},[e.createElementVNode("div",{class:e.normalizeClass([[n.isPreview?"":"min-vh-100"],"container-xl d-flex flex-column"])},[t.$slots.bar?(e.openBlock(),e.createElementBlock("div",An,[e.createElementVNode("div",zn,[e.renderSlot(t.$slots,"bar",{},()=>[Ln])])])):e.createCommentVNode("",!0),e.createElementVNode("main",Fn,[e.renderSlot(t.$slots,"main")]),t.$slots.footer?(e.openBlock(),e.createElementBlock("footer",Un,[e.renderSlot(t.$slots,"footer",{},()=>[e.createElementVNode("div",Kn,[Rn,e.createElementVNode("div",null," Copyright © "+e.toDisplayString(new Date().getFullYear())+" University of Washington ",1)])])])):e.createCommentVNode("",!0)],2)],2)],6)}const Wn=d(En,[["render",Qn]]),So="",Hn={name:"axdd-topbar",inject:["mq"],props:{appName:{type:String,default:"appName"},appRootUrl:{type:String,default:"#"},isPreview:{type:Boolean,default:!1}},components:{},data(){return{}},created:function(){}},Jn={class:"w-100"},Gn={key:0,class:"bg-dark-purple text-white py-2 small"},Yn={class:"container-xl"},Xn={class:"bg-purple axdd-topbar-brand"},Zn={class:"container-xl axdd-topbar-logo"},vn={key:0,class:"btn btn-link btn-sm d-xl-none border border-2 rounded-3 py-0 px-1 text-white me-2","data-bs-toggle":"collapse","data-bs-target":"#topbar-nav-collapse",role:"button","aria-expanded":"false","aria-controls":"topbar-nav-collapse","aria-label":"Toggle Navigation Menu"},eo=[e.createElementVNode("i",{class:"bi bi-list fw-bold text-white fs-6"},null,-1)],to={class:"w-100 flex-fill bg-white"},no={class:"container-xl"},oo={class:"row"},ao={role:"navigation"},ro={key:0},so={class:"col"},lo={key:0,class:"my-3"},io=e.createElementVNode("div",{style:{outline:"dashed 1px lightgray"}},[e.createElementVNode("h1",null,"Hello world..."),e.createElementVNode("p",null," Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, soluta omnis repudiandae aliquam nesciunt nisi nulla, ducimus eligendi natus voluptatum iusto reiciendis deserunt tempora praesentium laboriosam ullam facilis velit culpa. ")],-1),co={class:"w-100"},mo={key:0,class:"bg-dark text-white py-2 small"},fo={class:"container-xl"},po={class:"text-white font-weight-light py-3"},_o=e.createStaticVNode('<ul class="list-inline m-0"><li class="list-inline-item"><a href="http://www.washington.edu/online/privacy/">Privacy</a></li><li class="list-inline-item"><a href="http://www.washington.edu/online/terms/">Terms</a></li></ul>',1);function ho(t,o,n,a,s,r){const l=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([[n.isPreview?" ":"min-vh-100"],"d-flex align-items-end flex-column axdd-topbar axdd-font-open-sans"])},[e.createElementVNode("header",Jn,[t.$slots.profile?(e.openBlock(),e.createElementBlock("div",Gn,[e.createElementVNode("div",Yn,[e.renderSlot(t.$slots,"profile",{},()=>[e.createTextVNode("Welcome!")])])])):e.createCommentVNode("",!0),e.createElementVNode("div",Xn,[e.createElementVNode("div",Zn,[t.$slots.navigation?(e.openBlock(),e.createElementBlock("a",vn,eo)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["d-inline align-middle text-white",[r.mq.xlPlus?"h2":"h3"]])},[e.createVNode(l,{to:n.appRootUrl,class:"axdd-font-encode-sans text-white text-decoration-none"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.appName),1)]),_:1},8,["to"])],2)])])]),e.createElementVNode("div",to,[e.createElementVNode("div",no,[e.createElementVNode("div",oo,[t.$slots.navigation||t.$slots.aside?(e.openBlock(),e.createElementBlock("div",{key:0,class:"",style:e.normalizeStyle(r.mq.xlPlus?"min-width: 272px; max-width: 272px":"")},[e.createElementVNode("div",{id:"topbar-nav-collapse",class:e.normalizeClass([r.mq.xlPlus?"collapse.show":"collapse"])},[e.createElementVNode("nav",ao,[e.renderSlot(t.$slots,"navigation")]),t.$slots.aside?(e.openBlock(),e.createElementBlock("aside",ro,[e.renderSlot(t.$slots,"aside",{},()=>[e.createTextVNode("this is aside content")])])):e.createCommentVNode("",!0)],2)],4)):e.createCommentVNode("",!0),e.createElementVNode("div",so,[t.$slots.bar?(e.openBlock(),e.createElementBlock("div",lo,[e.renderSlot(t.$slots,"bar")])):e.createCommentVNode("",!0),e.createElementVNode("main",null,[e.renderSlot(t.$slots,"main",{},()=>[io])])])])])]),e.createElementVNode("footer",co,[t.$slots.footer?(e.openBlock(),e.createElementBlock("div",mo,[e.createElementVNode("div",fo,[e.renderSlot(t.$slots,"footer",{},()=>[e.createElementVNode("div",po,[_o,e.createElementVNode("div",null," Copyright © "+e.toDisplayString(new Date().getFullYear())+" University of Washington ",1)])])])])):e.createCommentVNode("",!0)])],2)}const D={Card:Wt,CardHeading:Gt,CardAction:Zt,CardTabs:tn,DisclosureAction:Nt,DisclosureBlock:At,DisclosurePanel:xt,Profile:ut,TabsList:sn,TabsDisplay:mn,TabsItem:gn,TabsPanel:Nn,Sidebar:Wn,Topbar:d(Hn,[["render",ho]]),ColorMode:Le,Panel:Re};return{install(t){for(const o in D)if(Object.prototype.hasOwnProperty.call(D,o)){const n=D[o];t.component(n.name,n)}}}});
