var of=Object.defineProperty,pd=i=>{throw TypeError(i)},lf=(i,t,e)=>t in i?of(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,vn=(i,t,e)=>lf(i,typeof t!="symbol"?t+"":t,e),fr=(i,t,e)=>t.has(i)||pd("Cannot "+e),R=(i,t,e)=>(fr(i,t,"read from private field"),e?e.call(i):t.get(i)),mt=(i,t,e)=>t.has(i)?pd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Vi=(i,t,e,s)=>(fr(i,t,"write to private field"),t.set(i,e),e),_e=(i,t,e)=>(fr(i,t,"access private method"),e);let cf=class{constructor(t,e=!1){vn(this,"timeout",null),vn(this,"startTimeWithMs",0),this.delay=t,this.max_delay=e}async wait(){return this.startTimeWithMs===0&&(this.startTimeWithMs=Date.now()),this.timeout&&(this.max_delay===!1||this.startTimeWithMs+this.max_delay>Date.now())&&(clearTimeout(this.timeout),this.timeout=null),new Promise(t=>{this.timeout||(this.timeout=setTimeout(()=>{this.timeout=null,this.startTimeWithMs=0,t(!0)},this.delay))})}};var bn,vs;let df=class{constructor(t=window,e="scroll-position1"){mt(this,bn,new cf(100,500)),mt(this,vs,!1),vn(this,"handleScroll",async()=>{R(this,vs)&&(await R(this,bn).wait(),sessionStorage.setItem(this.scrollId,JSON.stringify({url:location.href,scrollTop:this.scrollElement instanceof Window?window.scrollY:this.scrollElement.scrollTop})))}),this.scrollElement=t,this.scrollId=e,"scrollRestoration"in history&&(history.scrollRestoration="manual")}restoreScrollPosition(){const t=sessionStorage.getItem(this.scrollId);if(t){const{url:e,scrollTop:s}=JSON.parse(t);if(e===location.href)this.scrollElement.scrollTo(0,s);else if(window.location.hash!==""){const n=window.location.hash.substring(1),r=document.getElementById(n);r&&r.scrollIntoView()}}Vi(this,vs,!0)}connectEventListener(){this.scrollElement.addEventListener("scroll",this.handleScroll,{passive:!0})}disconnectEventListener(){this.scrollElement.removeEventListener("scroll",this.handleScroll)}};bn=new WeakMap,vs=new WeakMap;const fi={state:"loading"};async function di(i){return new Promise(t=>setTimeout(t,i))}const hf=Date.now();var Jt,Ce,bs,ys,ws,gi,Zt,Ee,md,vi,yn,wn;let uf=class extends HTMLElement{constructor(){super(...arguments),mt(this,Zt),mt(this,Jt,new Map),mt(this,Ce,hf),mt(this,bs,null),mt(this,ys,!1),mt(this,ws,!1),mt(this,gi,null),mt(this,vi,async()=>{if(R(this,ws))return;const t=Date.now();for(const[e,s]of R(this,Jt).entries())t-s.waitStart>4e3&&(console.error(`Element ${e} has been waiting for more than 4 seconds. Removing from loader (Check callbacks!).`,e),R(this,Jt).delete(e));R(this,ys)&&R(this,Jt).size===0&&(Vi(this,ws,!0),window.clearInterval(R(this,bs)),this.classList.add("ready"),await di(1),fi.state="ready",this.dispatchEvent(new CustomEvent("loader:ready",{bubbles:!0,composed:!0})),_e(this,Zt,Ee).call(this,`Loader ready after ${Date.now()-R(this,Ce)}ms`),await di(10),fi.state="pre-visual",this.classList.add("pre-visual"),this.dispatchEvent(new CustomEvent("loader:pre-visual",{bubbles:!0,composed:!0})),_e(this,Zt,Ee).call(this,`Loader pre-visual after ${Date.now()-R(this,Ce)}ms`),await di(150),fi.state="visual",this.classList.add("visual"),await di(1),this.dispatchEvent(new CustomEvent("loader:visual",{bubbles:!0,composed:!0})),_e(this,Zt,md).call(this),_e(this,Zt,Ee).call(this,`Loader visual after ${Date.now()-R(this,Ce)}ms`),await di(500),this.classList.add("after-visual"))}),mt(this,yn,t=>{const{element:e,state:s}=t.detail;R(this,Jt).set(e,{waitStart:Date.now()})}),mt(this,wn,t=>{const{element:e,state:s}=t.detail,n=R(this,Jt).get(e);if(!n){console.warn("Received ready event for element that did not send waitreq:",e);return}R(this,Jt).delete(e),_e(this,Zt,Ee).call(this,"Element ready:",e,`Waited for ${Date.now()-n.waitStart}ms`),R(this,vi).call(this)})}connectedCallback(){fi.state="loading",window.addEventListener("init:child-waitreq",e=>R(this,yn).call(this,e)),window.addEventListener("init:child-ready",e=>R(this,wn).call(this,e)),Vi(this,bs,window.setInterval(R(this,vi),2e3));const t=()=>{Vi(this,ys,!0),_e(this,Zt,Ee).call(this,`DOMContentLoaded received after ${Date.now()-R(this,Ce)}ms`),R(this,vi).call(this)};document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t,{once:!0}):t()}};Jt=new WeakMap,Ce=new WeakMap,bs=new WeakMap,ys=new WeakMap,ws=new WeakMap,gi=new WeakMap,Zt=new WeakSet,Ee=function(...i){this.hasAttribute("debug")&&console.debug(...i)},md=function(){var i,t;const e=this.getAttribute("observe-scroll-element");let s=window;if(e&&(s=document.querySelector(e),!s)){console.warn(`Scroll handler observe-scroll-element: '${e}' did not match any element. Scroll restoration will be disabled.`);return}Vi(this,gi,new df(s)),(i=R(this,gi))==null||i.connectEventListener(),(t=R(this,gi))==null||t.restoreScrollPosition()},vi=new WeakMap,yn=new WeakMap,wn=new WeakMap;customElements.get("tj-loader")?console.error("tj-loader is already defined. Please check for duplicate imports or custom element definitions."):customElements.define("tj-loader",uf);Object.defineProperty(window,"tj_loader_state",{configurable:!0,enumerable:!0,get(){return fi.state},set(){throw new Error("Cannot set tj_loader_state directly.")}});var pf=Object.defineProperty,fd=i=>{throw TypeError(i)},mf=(i,t,e)=>t in i?pf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Et=(i,t,e)=>mf(i,typeof t!="symbol"?t+"":t,e),gr=(i,t,e)=>t.has(i)||fd("Cannot "+e),X=(i,t,e)=>(gr(i,t,"read from private field"),e?e.call(i):t.get(i)),Lt=(i,t,e)=>t.has(i)?fd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),$s=(i,t,e,s)=>(gr(i,t,"write to private field"),t.set(i,e),e),Qt=(i,t,e)=>(gr(i,t,"access private method"),e);const Bi=[{name:"xs",minWidth:0},{name:"sm",minWidth:576},{name:"md",minWidth:768},{name:"lg",minWidth:992},{name:"xl",minWidth:1200},{name:"xxl",minWidth:1400}],$n=Bi.reduce((i,t)=>(i[t.name]=t.minWidth,i),{});function Tt(i){if(!(i in $n))throw new Error(`Unknown breakpoint: ${i}`);return $n[i]}function ff(){return window.visualViewport?window.visualViewport.width:window.innerWidth}function Ui(i){i===void 0&&(i=ff());for(let t=Bi.length-1;t>=0;t--)if(i>=Bi[t].minWidth)return Bi[t].name;return"xs"}function gd(i,t={},e=[]){Array.isArray(e)||(e=[e]);const s=document.createElement(i);for(const n in t)t[n]!==null&&t[n]!==void 0&&s.setAttribute(n,t[n]!==!0?t[n]:"");for(const n of e)s.append(typeof n=="string"?document.createTextNode(n):n);return s}let ls=class{constructor(t,e=!1){Et(this,"timeout",null),Et(this,"startTimeWithMs",0),Et(this,"maxTimeout",null),this.delay=t,this.max_delay=e}async wait(){return this.startTimeWithMs===0&&(this.startTimeWithMs=Date.now()),this.timeout&&(this.max_delay===!1||this.startTimeWithMs+this.max_delay>Date.now())&&(clearTimeout(this.timeout),this.timeout=null),new Promise(t=>{this.timeout||(this.timeout=setTimeout(()=>{this.timeout=null,this.startTimeWithMs=0,t(!0)},this.delay))})}debounce(t){const e=Date.now();this.startTimeWithMs===0&&(this.startTimeWithMs=e);const s=()=>{this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.maxTimeout&&(clearTimeout(this.maxTimeout),this.maxTimeout=null),this.startTimeWithMs=0,t()};if(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(s,this.delay),this.max_delay!==!1&&!this.maxTimeout){const n=e-this.startTimeWithMs,r=Math.max(0,this.max_delay-n);this.maxTimeout=setTimeout(s,r)}}};const gf=new Set(["button","image","reset","submit"]);function vf(i){return i.endsWith("[]")?i.slice(0,-2):i}function nn(i){return i instanceof HTMLInputElement?i.type.toLowerCase():""}function bf(i){if(i instanceof HTMLSelectElement&&i.multiple)return Array.from(i.selectedOptions,t=>t.value);if(i instanceof HTMLInputElement){if(i.type==="file")return Array.from(i.files??[]);if(i.type==="checkbox")return i.checked;if(i.type==="radio")return i.checked?i.value:void 0}return i.value}function yf(i,t){if(i instanceof HTMLSelectElement&&i.multiple){const e=new Set(Array.isArray(t)?t.map(String):t==null?[]:[String(t)]);for(const s of Array.from(i.options))s.selected=e.has(s.value);return}if(i instanceof HTMLInputElement){if(i.type==="file"){(t==null||Array.isArray(t)&&t.length===0)&&(i.value="");return}if(i.type==="checkbox"){i.checked=!!t;return}if(i.type==="radio"){i.checked=typeof t=="boolean"?t:i.value===String(t);return}}i.value=t}function kn(i,t,e){if(!(e==null||e===!1)){if(e instanceof FormData){e.forEach((s,n)=>i.append(n,s));return}if(Array.isArray(e)){e.forEach(s=>kn(i,t,s));return}if(e instanceof Blob){i.append(t,e);return}i.append(t,String(e))}}let wf=class{constructor(t){this.root=t}get entries(){const t=[];for(const e of Array.from(this.root.querySelectorAll("[name]"))){const s=this.getName(e);!s||!this.isValueElement(e)||this.hasValueElementParent(e)||t.push({name:s,element:e,get value(){return bf(e)},set value(n){yf(e,n)}})}return t}get data(){const t={};for(const[e,s]of this.groupedEntries){const n=this.readGroup(s);n!==void 0&&(t[e]=n)}return t}set data(t){for(const[e,s]of this.groupedEntries)Object.prototype.hasOwnProperty.call(t,e)&&this.writeGroup(s,t[e])}get formData(){const t=new FormData;for(const e of this.entries){if(this.isDisabled(e.element))continue;const s=nn(e.element);if(s==="checkbox"||s==="radio"){const n=e.element;n.checked&&kn(t,e.name,n.value);continue}kn(t,e.name,e.value)}return t}get groupedEntries(){const t=new Map;for(const e of this.entries){const s=vf(e.name),n=t.get(s)??[];n.push(e),t.set(s,n)}return t}getName(t){var e;const s="name"in t&&typeof t.name=="string"?t.name:null;return s?.trim()||((e=t.getAttribute("name"))==null?void 0:e.trim())||null}isValueElement(t){return!("value"in t)||t instanceof HTMLButtonElement?!1:!(t instanceof HTMLInputElement&&gf.has(t.type.toLowerCase()))}hasValueElementParent(t){let e=t.parentElement;for(;e&&e!==this.root;){if(this.getName(e)&&this.isValueElement(e))return!0;e=e.parentElement}return!1}isDisabled(t){return!!t.disabled||t.hasAttribute("disabled")||t.matches(":disabled")}readGroup(t){var e;const s=new Set(t.map(r=>nn(r.element))),n=t.some(r=>r.name.endsWith("[]"));return s.size===1&&s.has("radio")?(e=t.find(r=>r.element.checked))==null?void 0:e.element.value:s.size===1&&s.has("checkbox")?t.length===1&&!n?t[0].element.checked:t.filter(r=>r.element.checked).map(r=>r.element.value):n?t.flatMap(r=>{const o=r.value;return o===void 0?[]:Array.isArray(o)?o:[o]}):t.length===1?t[0].value:t.map(r=>r.value).at(-1)}writeGroup(t,e){const s=new Set(t.map(r=>nn(r.element))),n=t.some(r=>r.name.endsWith("[]"));if(s.size===1&&s.has("radio")){t.forEach(r=>{const o=r.element;o.checked=o.value===String(e)});return}if(s.size===1&&s.has("checkbox")){if(t.length===1&&!n&&typeof e=="boolean"){t[0].element.checked=e;return}const r=new Set((Array.isArray(e)?e:e==null?[]:[e]).map(String));t.forEach(o=>{const l=o.element;l.checked=r.has(l.value)});return}if(n&&Array.isArray(e)&&t.length>1){t.forEach((r,o)=>{r.value=e[o]});return}t.forEach(r=>{r.value=e})}},$f=class{constructor(t,e,s,n="main"){this._debug=t,this.myTag=e,this.myElementId=s,this.instanceId=n}debug(...t){this._debug&&console.debug(`[DEBUG][${this.myTag}:${this.myElementId}:${this.instanceId}]`,...t)}log(...t){console.log(`[LOG][${this.myTag}:${this.myElementId}:${this.instanceId}]`,...t)}warn(...t){console.warn(`[WARN][${this.myTag}:${this.myElementId}:${this.instanceId}]`,...t)}error(...t){console.error(`[ERROR][${this.myTag}:${this.myElementId}:${this.instanceId}]`,...t)}throwError(...t){const e=`[ERROR][${this.myTag}:${this.myElementId}:${this.instanceId}] ${t.join(" ")}`;throw this.error(...t),new Error(e)}},kf=class{constructor(t,e=!0){Et(this,"label"),Et(this,"last"),Et(this,"startTime"),Et(this,"running",!1),Et(this,"enabled"),this.label=t,this.enabled=e,this.startTime=this.last=performance.now(),this.running=!0}lap(t=""){if(!this.enabled)return;const e=performance.now(),s=(e-this.last)/1e3;this.last=e,console.debug(`[${this.label}] ${t} +${s.toFixed(3)}s`)}elapsed(){return performance.now()-this.startTime}reset(){this.startTime=this.last=performance.now()}stop(){return this.running=!1,this.elapsed()}start(){this.running=!0,this.reset()}isRunning(){return this.running}};function xf(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function Sf(i){if(i!=null)try{return JSON.parse(i)}catch{return}}function $l(i){const t=JSON.stringify(i);return t===void 0?"null":t}function _f(i,t){const e={...t};if(xf(i))for(const s of Object.keys(t))s in i&&(e[s]=i[s]);return e}let Af=class{constructor(t,e,s){Et(this,"cache"),this.backend=t,this.storageKey=e,this.initialValue=s}read(){if(this.cache)return this.cache;const t=this.backend?Sf(this.backend.getItem(this.storageKey)):void 0,e=_f(t,this.initialValue);if(this.backend&&this.backend.getItem(this.storageKey)==null)try{this.backend.setItem(this.storageKey,$l(e))}catch{}return this.cache=e,e}write(t){if(this.cache=t,!!this.backend)try{this.backend.setItem(this.storageKey,$l(t))}catch{}}asProxy(){const t={get:(e,s)=>{if(typeof s=="symbol")return s===Symbol.toStringTag?"Storage":void 0;const n=this.read();return s==="toJSON"?()=>({...n}):n[s]},set:(e,s,n)=>{if(typeof s!="string")return!1;const r={...this.read()};return r[s]=n,this.write(r),!0},deleteProperty:(e,s)=>{if(typeof s!="string")return!1;const n=this.read();if(!(s in n))return!0;const r={...n};return delete r[s],this.write(r),!0},has:(e,s)=>{if(typeof s!="string")return!1;const n=this.read();return s in n},ownKeys:()=>{const e=this.read();return Reflect.ownKeys(e)},getOwnPropertyDescriptor:(e,s)=>{if(typeof s!="string")return;const n=this.read();if(s in n)return{enumerable:!0,configurable:!0,writable:!0,value:n[s]}}};return new Proxy({},t)}};function Cf(i){const t=globalThis.window;return(i==="session"?t?.sessionStorage:t?.localStorage)??void 0}function Ef(i,t){return new Af(Cf("session"),i,t).asProxy()}function Tf(i,t,e){return new Promise((s,n)=>{const r=o=>{i.removeEventListener(t,r,e),s(o)};i.addEventListener(t,r,e)})}function vr(){return document.readyState==="loading"?new Promise(i=>{document.addEventListener("DOMContentLoaded",()=>i())}):Promise.resolve()}function kl(){return window.tj_loader_state?window.tj_loader_state!=="loading"?Promise.resolve():Tf(window,"loader:ready"):xn()}function xn(i=window){return i||(i=window),i===window?document.readyState==="complete"?Promise.resolve():new Promise(t=>window.addEventListener("load",()=>t(),{once:!0})):i instanceof HTMLImageElement?i.complete&&i.naturalWidth!==0?Promise.resolve():new Promise((t,e)=>{i.addEventListener("load",()=>t(),{once:!0}),i.addEventListener("error",()=>e(new Error("image error")),{once:!0})}):i instanceof HTMLMediaElement?i.readyState>=HTMLMediaElement.HAVE_FUTURE_DATA?Promise.resolve():new Promise(t=>i.addEventListener("loadeddata",()=>t(),{once:!0})):new Promise(t=>i.addEventListener("load",()=>t(),{once:!0}))}function Of(i){var t,e;class s extends i{constructor(){super(...arguments),Lt(this,t,new ls(200,5e3)),Et(this,"currentBreakPoint",null),Lt(this,e,async()=>{var r;await X(this,t).wait(),await vr();const o=this,l=window.innerWidth;let d=getComputedStyle(o).getPropertyValue("--breakpoint");if(!d||d==="")return;d=d.trim().replace(/^['"]|['"]$/g,"");const c=d.split(","),p=c[0].trim(),a=((r=c[1])==null?void 0:r.trim())??p,f=Ui(l);this.currentBreakPoint!==f&&(Tt(a)<=Tt(f)?o.setAttribute("mode","desktop"):Tt(p)>Tt(f)?o.setAttribute("mode","mobile"):o.setAttribute("mode","tablet"))})}connectedCallback(){super.connectedCallback();try{X(this,e).call(this),window.addEventListener("resize",X(this,e)),X(this,e).call(this)}catch(r){throw console.error("Error in BreakPointMixin:",r,"in element",this),r}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",X(this,e))}}return t=new WeakMap,e=new WeakMap,s}const Sn=Symbol("listenerDefs"),vd=Symbol("withEventBindings");function Lf(i,t){const e=Array.isArray(i)?i:[i];return function(s,n){if(n.kind!=="method")throw new Error("@Listen nur für Methoden");return n.addInitializer(function(){const r=this;(r[Sn]||(r[Sn]=[])).push({method:n.name,events:[...e],opts:t})}),function(...r){if(!this[vd])throw new Error("[EventBindings] @Listen - decorator requires EventBindingMixin.");return s.apply(this,r)}}}function zf(i,t){var e;return!t||t==="host"?i:t==="document"?i.ownerDocument??document:t==="window"?((e=i.ownerDocument)==null?void 0:e.defaultView)??window:t==="shadowRoot"?i.shadowRoot??i:typeof t=="function"?t(i):t}function br(i){var t,e,s;class n extends i{constructor(...o){super(...o),Lt(this,e),Lt(this,t),this[vd]=!0}connectedCallback(){var o;(o=super.connectedCallback)==null||o.call(this),Qt(this,e,s).call(this)}disconnectedCallback(){var o,l;(o=X(this,t))==null||o.abort(),(l=super.disconnectedCallback)==null||l.call(this)}}return t=new WeakMap,e=new WeakSet,s=function(){var r,o,l;(r=X(this,t))==null||r.abort(),$s(this,t,new AbortController);const d=this[Sn]||[];for(const c of d){const p=zf(this,(o=c.opts)==null?void 0:o.target),a=((l=c.opts)==null?void 0:l.options)??{},f=this[c.method].bind(this);for(const h of c.events)p.addEventListener(h,f,{...a,signal:X(this,t).signal})}},n}let Mf=1;function Bs(i){var t,e,s;class n extends i{constructor(){super(...arguments),Lt(this,t,null),Lt(this,e,Mf++),Lt(this,s,null)}invalidateDebugCache(){$s(this,t,null)}get _debug(){return X(this,t)!==null?X(this,t):(this instanceof HTMLElement&&$s(this,t,this.hasAttribute("debug")&&!["false","0","off","no"].includes(this.getAttribute("debug")||"")),X(this,t)===!0&&console.info(`[DEBUG][ID:${X(this,e)}] LoggingMixin: Debug mode is enabled for <${this.tagName}>`,this),X(this,t)??!1)}getLogger(o="main"){const l="<"+(this.tagName||this.constructor.name||"UnknownElement")+">";return X(this,s)||$s(this,s,new $f(this._debug,l,`${X(this,e)}`,o)),X(this,s)}debug(...o){this.getLogger().debug(...o)}log(...o){this.getLogger().log(...o)}warn(...o){this.getLogger().warn(...o)}error(...o){this.getLogger().error(...o)}throwError(...o){return this.getLogger().throwError(...o)}}return t=new WeakMap,e=new WeakMap,s=new WeakMap,n}function bd(i){class t extends i{connectedCallback(){this.dispatchEvent(new CustomEvent("init:child-waitreq",{detail:{element:this,state:"connected"},bubbles:!0,composed:!0})),super.connectedCallback()}firstUpdated(s){var n;(n=super.firstUpdated)==null||n.call(this,s),this.dispatchEvent(new CustomEvent("init:child-ready",{detail:{element:this,state:"ready"},bubbles:!0,composed:!0}))}disconnectedCallback(){window.dispatchEvent(new CustomEvent("init:child-ready",{detail:{element:this,state:"disconnected"},bubbles:!0,composed:!0})),super.disconnectedCallback()}}return t}function Pf(i){var t,e,s,n,r,o,l;class d extends i{constructor(){super(...arguments),Lt(this,e),Lt(this,t,new WeakMap),Lt(this,r,p=>{Qt(this,e,n).call(this,p.target)})}firstUpdated(p){var a;(a=super.firstUpdated)==null||a.call(this,p),Qt(this,e,s).call(this)}updated(p){var a;(a=super.updated)==null||a.call(this,p),Qt(this,e,s).call(this)}}return t=new WeakMap,e=new WeakSet,s=function(){var c;const p=(c=this.shadowRoot)==null?void 0:c.querySelectorAll("slot");p?.forEach(a=>{if(Qt(this,e,n).call(this,a),!X(this,t).has(a)){const f=h=>X(this,r).call(this,h);X(this,t).set(a,f),a.addEventListener("slotchange",f)}})},n=function(c){const p=Qt(this,e,o).call(this,c.assignedNodes({flatten:!0})),a=Qt(this,e,o).call(this,c.childNodes);p||a?c.classList.remove("slot-empty"):c.classList.add("slot-empty")},r=new WeakMap,o=function(c){return Array.from(c).some(p=>Qt(this,e,l).call(this,p))},l=function(c){return c.nodeType===Node.TEXT_NODE?(c.textContent||"").trim().length>0:c.nodeType===Node.ELEMENT_NODE},d}const ks=globalThis,yr=ks.ShadowRoot&&(ks.ShadyCSS===void 0||ks.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wr=Symbol(),xl=new WeakMap;let yd=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==wr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yr&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=xl.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&xl.set(e,t))}return t}toString(){return this.cssText}};const Ds=i=>new yd(typeof i=="string"?i:i+"",void 0,wr),If=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,n,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new yd(e,i,wr)},Df=(i,t)=>{if(yr)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),n=ks.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}},Sl=yr?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Ds(e)})(i):i;const{is:Wf,defineProperty:Nf,getOwnPropertyDescriptor:jf,getOwnPropertyNames:Hf,getOwnPropertySymbols:Rf,getPrototypeOf:Ff}=Object,Us=globalThis,_l=Us.trustedTypes,qf=_l?_l.emptyScript:"",Vf=Us.reactiveElementPolyfillSupport,Yi=(i,t)=>i,Ws={toAttribute(i,t){switch(t){case Boolean:i=i?qf:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},$r=(i,t)=>!Wf(i,t),Al={attribute:!0,type:String,converter:Ws,reflect:!1,useDefault:!1,hasChanged:$r};Symbol.metadata??=Symbol("metadata"),Us.litPropertyMetadata??=new WeakMap;let fe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Al){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,e);n!==void 0&&Nf(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){const{get:n,set:r}=jf(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:n,set(o){const l=n?.call(this);r?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Al}static _$Ei(){if(this.hasOwnProperty(Yi("elementProperties")))return;const t=Ff(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Yi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yi("properties"))){const e=this.properties,s=[...Hf(e),...Rf(e)];for(const n of s)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,n]of e)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const n=this._$Eu(e,s);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(Sl(n))}else t!==void 0&&e.push(Sl(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Df(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:Ws).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const r=s.getPropertyOptions(n),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Ws;this._$Em=n;const l=o.fromAttribute(e,r.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(t,e,s,n=!1,r){if(t!==void 0){const o=this.constructor;if(n===!1&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??$r)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:n,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,r]of s){const{wrapped:o}=r,l=this[n];o!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,r,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},fe[Yi("elementProperties")]=new Map,fe[Yi("finalized")]=new Map,Vf?.({ReactiveElement:fe}),(Us.reactiveElementVersions??=[]).push("2.1.2");const kr=globalThis,Cl=i=>i,Ns=kr.trustedTypes,El=Ns?Ns.createPolicy("lit-html",{createHTML:i=>i}):void 0,wd="$lit$",ee=`lit$${Math.random().toFixed(9).slice(2)}$`,$d="?"+ee,Bf=`<${$d}>`,ye=document,Ji=()=>ye.createComment(""),Zi=i=>i===null||typeof i!="object"&&typeof i!="function",xr=Array.isArray,Uf=i=>xr(i)||typeof i?.[Symbol.iterator]=="function",rn=`[ 	
\f\r]`,hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tl=/-->/g,Ol=/>/g,de=RegExp(`>|${rn}(?:([^\\s"'>=/]+)(${rn}*=${rn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ll=/'/g,zl=/"/g,kd=/^(?:script|style|textarea|title)$/i,Yf=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),zt=Yf(1),we=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Ml=new WeakMap,ge=ye.createTreeWalker(ye,129);function xd(i,t){if(!xr(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return El!==void 0?El.createHTML(t):t}const Xf=(i,t)=>{const e=i.length-1,s=[];let n,r=t===2?"<svg>":t===3?"<math>":"",o=hi;for(let l=0;l<e;l++){const d=i[l];let c,p,a=-1,f=0;for(;f<d.length&&(o.lastIndex=f,p=o.exec(d),p!==null);)f=o.lastIndex,o===hi?p[1]==="!--"?o=Tl:p[1]!==void 0?o=Ol:p[2]!==void 0?(kd.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=de):p[3]!==void 0&&(o=de):o===de?p[0]===">"?(o=n??hi,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?de:p[3]==='"'?zl:Ll):o===zl||o===Ll?o=de:o===Tl||o===Ol?o=hi:(o=de,n=void 0);const h=o===de&&i[l+1].startsWith("/>")?" ":"";r+=o===hi?d+Bf:a>=0?(s.push(c),d.slice(0,a)+wd+d.slice(a)+ee+h):d+ee+(a===-2?l:h)}return[xd(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let _n=class Sd{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let r=0,o=0;const l=t.length-1,d=this.parts,[c,p]=Xf(t,e);if(this.el=Sd.createElement(c,s),ge.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(n=ge.nextNode())!==null&&d.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const a of n.getAttributeNames())if(a.endsWith(wd)){const f=p[o++],h=n.getAttribute(a).split(ee),g=/([.?@])?(.*)/.exec(f);d.push({type:1,index:r,name:g[2],strings:h,ctor:g[1]==="."?Kf:g[1]==="?"?Jf:g[1]==="@"?Zf:Ys}),n.removeAttribute(a)}else a.startsWith(ee)&&(d.push({type:6,index:r}),n.removeAttribute(a));if(kd.test(n.tagName)){const a=n.textContent.split(ee),f=a.length-1;if(f>0){n.textContent=Ns?Ns.emptyScript:"";for(let h=0;h<f;h++)n.append(a[h],Ji()),ge.nextNode(),d.push({type:2,index:++r});n.append(a[f],Ji())}}}else if(n.nodeType===8)if(n.data===$d)d.push({type:2,index:r});else{let a=-1;for(;(a=n.data.indexOf(ee,a+1))!==-1;)d.push({type:7,index:r}),a+=ee.length-1}r++}}static createElement(t,e){const s=ye.createElement("template");return s.innerHTML=t,s}};function Oe(i,t,e=i,s){if(t===we)return t;let n=s!==void 0?e._$Co?.[s]:e._$Cl;const r=Zi(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(i),n._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=n:e._$Cl=n),n!==void 0&&(t=Oe(i,n._$AS(i,t.values),n,s)),t}let Gf=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,n=(t?.creationScope??ye).importNode(e,!0);ge.currentNode=n;let r=ge.nextNode(),o=0,l=0,d=s[0];for(;d!==void 0;){if(o===d.index){let c;d.type===2?c=new Sr(r,r.nextSibling,this,t):d.type===1?c=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(c=new Qf(r,this,t)),this._$AV.push(c),d=s[++l]}o!==d?.index&&(r=ge.nextNode(),o++)}return ge.currentNode=ye,n}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},Sr=class _d{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,n){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Oe(this,t,e),Zi(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==we&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Uf(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&Zi(this._$AH)?this._$AA.nextSibling.data=t:this.T(ye.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=_n.createElement(xd(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(e);else{const r=new Gf(n,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=Ml.get(t.strings);return e===void 0&&Ml.set(t.strings,e=new _n(t)),e}k(t){xr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const r of t)n===e.length?e.push(s=new _d(this.O(Ji()),this.O(Ji()),this,this.options)):s=e[n],s._$AI(r),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=Cl(t).nextSibling;Cl(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Ys=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,n,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,n){const r=this.strings;let o=!1;if(r===void 0)t=Oe(this,t,e,0),o=!Zi(t)||t!==this._$AH&&t!==we,o&&(this._$AH=t);else{const l=t;let d,c;for(t=r[0],d=0;d<r.length-1;d++)c=Oe(this,l[s+d],e,d),c===we&&(c=this._$AH[d]),o||=!Zi(c)||c!==this._$AH[d],c===F?t=F:t!==F&&(t+=(c??"")+r[d+1]),this._$AH[d]=c}o&&!n&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Kf=class extends Ys{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}},Jf=class extends Ys{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}},Zf=class extends Ys{constructor(t,e,s,n,r){super(t,e,s,n,r),this.type=5}_$AI(t,e=this){if((t=Oe(this,t,e,0)??F)===we)return;const s=this._$AH,n=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==F&&(s===F||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Qf=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Oe(this,t)}};const tg=kr.litHtmlPolyfillSupport;tg?.(_n,Sr),(kr.litHtmlVersions??=[]).push("3.3.3");const eg=(i,t,e)=>{const s=e?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const r=e?.renderBefore??null;s._$litPart$=n=new Sr(t.insertBefore(Ji(),r),r,void 0,e??{})}return n._$AI(i),n};const _r=globalThis;let be=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=eg(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return we}};be._$litElement$=!0,be.finalized=!0,_r.litElementHydrateSupport?.({LitElement:be});const ig=_r.litElementPolyfillSupport;ig?.({LitElement:be});(_r.litElementVersions??=[]).push("4.2.2");const Xs=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};const sg={attribute:!0,type:String,converter:Ws,reflect:!1,hasChanged:$r},ng=(i=sg,t,e)=>{const{kind:s,metadata:n}=e;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),r.set(e.name,i),s==="accessor"){const{name:o}=e;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,d,i,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const d=this[o];t.call(this,l),this.requestUpdate(o,d,i,!0,l)}}throw Error("Unsupported decorator location: "+s)};function tt(i){return(t,e)=>typeof e=="object"?ng(i,t,e):((s,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(n,r):void 0})(i,t,e)}const rg=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);function Ad(i,t){return(e,s,n)=>{const r=o=>o.renderRoot?.querySelector(i)??null;return rg(e,s,{get(){return r(this)}})}}const ag=":host{--border-color: red;--background-color: lightgray;font-family:Arial,sans-serif}#error-fixed-indicator{position:fixed;top:10px;right:10px;cursor:pointer;z-index:100000;padding:5px 10px;width:auto;max-width:90vw;min-width:100px;height:auto;box-shadow:0 4px 8px #0003;border:5px solid white;color:#fff;background-color:red;animation:blink 1s infinite;border-radius:15px;font-size:20px;font-weight:700;font-family:Arial,sans-serif}@keyframes blink{0%,to{background-color:#000}50%{background-color:red}}#error{background-color:var(--background-color);border:3px solid var(--border-color);padding:10px;margin:10px;border-radius:5px}h1{color:red;font-size:24px;margin:0}.error-details{font-size:14px;max-height:200px;overflow:auto}";var og=Object.create,Ar=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,Cd=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Re=i=>{throw TypeError(i)},cg=(i,t,e)=>t in i?Ar(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Pl=(i,t)=>Ar(i,"name",{value:t,configurable:!0}),dg=i=>[,,,og(i?.[Cd("metadata")]??null)],Ed=["class","method","getter","setter","accessor","field","value","get","set"],bi=i=>i!==void 0&&typeof i!="function"?Re("Function expected"):i,hg=(i,t,e,s,n)=>({kind:Ed[i],name:t,metadata:s,addInitializer:r=>e._?Re("Already initialized"):n.push(bi(r||null))}),ug=(i,t)=>cg(t,Cd("metadata"),i[3]),An=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},Td=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Ed[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&lg(a<4?n:{get[e](){return Il(this,r)},set[e](u){return Dl(this,r,u)}},e));a?h&&a<4&&Pl(r,(a>2?"set ":a>1?"get ":"")+e):Pl(n,e);for(var w=s.length-1;w>=0;w--)c=hg(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>pg(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?Il:fg)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>Dl(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?bi(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Re("Object expected"):(bi(o=l.get)&&(m.get=o),bi(o=l.set)&&(m.set=o),bi(o=l.init)&&y.unshift(o));return a||ug(i,n),m&&Ar(n,e,m),h?a^4?r:m:n},Cr=(i,t,e)=>t.has(i)||Re("Cannot "+e),pg=(i,t)=>Object(t)!==t?Re('Cannot use the "in" operator on this value'):i.has(t),Il=(i,t,e)=>(Cr(i,t,"read from private field"),e?e.call(i):t.get(i)),mg=(i,t,e)=>t.has(i)?Re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Dl=(i,t,e,s)=>(Cr(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),fg=(i,t,e)=>(Cr(i,t,"access private method"),e),Od,Cn,Ld,Le,Er;Ld=[Xs("tj-error-element")];let ze=class extends(Cn=be,Od=[tt({type:String,reflect:!0})],Cn){constructor(t="An error occurred",e){super(),this.originalCode=void 0,mg(this,Er,An(Le,8,this)),An(Le,11,this),this.message=t,this.originalCode=e}static get is(){return"tj-error-element"}render(){return zt`
      <div id="error-fixed-indicator" @click=${()=>this.scrollIntoView({behavior:"smooth"})}>
        Err: ${this.message}
      </div>
      <div id="error">
        <h1>Error: ${this.message}</h1>
        <pre class="error-details">
          ${this.originalCode?this.originalCode:"No code provided."}
        </pre
        >

        <slot></slot>
      </div>
    `}};Le=dg(Cn);Er=new WeakMap;Td(Le,4,"message",Od,ze,Er);ze=Td(Le,0,"TjErrorElement",Ld,ze);ze.styles=[Ds(ag)];An(Le,1,ze);function Tr(i,{allowAttributes:t=!0,ignoreGaps:e=!0}={}){let s="div",n=null,r=[],o=[],l={};const d=/(^[a-z][\w-]*)|#[\w-]+|\.[\w:-]+|\[\s*([\w-]+)(?:\s*=\s*(['"]?)(.*?)\3)?\s*\]/gi;let c=0;for(;;){const p=d.exec(i);if(!p||p.index!==c){if(!e&&p&&p.index>c)break;break}const a=p[0];if(a[0]==="#")n=a.slice(1);else if(a[0]===".")r.push(a.slice(1));else if(a[0]==="["){if(!t)throw new Error(`Attributes not allowed: '${a}'`);const f=p[2],h=p[4]||void 0;o.push({name:f,value:h}),l[f]=h}else s=a;c+=a.length}return{tag:s,id:n,classes:r,attrs:o,attrsMap:l,length:c,rest:i.slice(c)}}function gg(i){return typeof i.beforeLayoutCallback=="function"}function vg(i,t,e){var s;const n=/^(=|\+|!|-|\/|)([0-9]+(?:\.[0-9]+)?|);?/,r=e.replace(n,""),o=Tr(r),l={...Array.from(i.attributes).reduce((a,f)=>(a[f.name]=f.value,a),{})};if(delete l.layout,o.classes.length>0){const a=[...((s=l.class)==null?void 0:s.split(/\s+/).filter(Boolean))??[],...o.classes];l.class=Array.from(new Set(a)).join(" ")}o.id&&(l.id=o.id);const d=o.tag||"section";let c=!1,p=gd(d,{...l,layoutOrig:e});if(d.includes("-")&&!customElements.get(d))console.warn(`Custom element <${d}> is not registered.`),p=new ze(`Custom element <${d}> is not registered.`,i.outerHTML),i.replaceWith(p),p.append(i),c=!0;else{const a=Array.from(i.children);gg(p)&&(c=p.beforeLayoutCallback(i,p,a)===!1),p.__ORIG_ELEMENT__=i,p.append(...Array.from(i.children)),i.replaceWith(p)}return{replacementElement:p,skipChildren:c}}function js(i,t={}){const{recursive:e=!0}=t,s=[];if(Array.isArray(i))return i.forEach(l=>s.push(...js(l,t))),s;if(!(i instanceof HTMLElement))return[];const n=i.getAttribute("layout");let r=!1,o=i;return n&&({replacementElement:o,skipChildren:r}=vg(i,t,n)),e&&!r&&Array.from(o.children).forEach(l=>s.push(...js(l,t))),s}const an=/^(=|\+|!|-|\/|)([0-9]+(?:\.[0-9]+)?|)(;|$)/;let bg=class{constructor(t,e=!1){this.debug=e,this.currentContainerNode=null,this.containerPath=[],this.containerIndex=[0],this.controlLayoutIndex=[],this.lastFixedI=20,this.currentContainerNode=this.rootNode=t,this.containerPath.push(this.rootNode)}getI(t){const e=t.tagName,s=t.getAttribute("layout"),n={i:-99,variant:"new",tag:"hr",hi:null};if(s){const r=s.match(an);if(r){const o=r[1];n.variant=o==="="||o==="+"?"append":o==="!"||o==="-"?"skip":o==="/"?"close":"new",r[2]!==""&&(n.i=parseFloat(r[2])*10)}}if(e==="HR"&&s===null)return null;if(n.variant==="close"){if(e!=="HR")throw new Error("layout close syntax (/i;) is only supported on HR control elements");if(n.i===-99){const r=this.controlLayoutIndex[this.controlLayoutIndex.length-1];if(r===void 0)throw new Error("Cannot close current layout level: no open HR layout wrapper");n.i=r}return n}if(e==="HR")return n.i===-99?n.i=this.lastFixedI+5:this.lastFixedI=n.i,n;if(e.startsWith("H")&&e.length===2){let r=e.substring(1);return n.tag="h",n.hi=parseInt(r),r==="1"&&(r="2"),n.i===-99&&(n.i=parseInt(r)*10),this.lastFixedI=n.i,n}return null}stripControlOnlyLayout(t){const e=t.getAttribute("layout");if(!e)return;const s=e.match(an);s&&e.slice(s[0].length).trim()===""&&t.removeAttribute("layout")}getAttributeRecords(t,e=!1){const s={},n=t.getAttribute("layout");let r=null;if(n){const o=n.replace(an,"").trim();o!==""&&(r=Tr(o))}for(const o of Array.from(t.attributes))o.name.startsWith("section-")?s[o.name.replace(/^section-/,"")]=o.value:(o.name.startsWith("layout")||e)&&(s[o.name]=o.value,t.removeAttribute(o.name));return e||Array.from(t.classList).forEach(o=>{o.startsWith("section-")&&(s.class=(s.class?s.class+" ":"")+o.replace(/^section-/,""),t.classList.remove(o))}),r&&(r.classes.forEach(o=>{s.class=(s.class?s.class+" ":"")+o+" "}),r.attrs.forEach(o=>{s[o.name]=o.value??""}),r.id&&(s.id=r.id)),s}createNewContainerNode(t,e){const s=this.getAttributeRecords(t,t.tagName==="HR"),n=gd("section",s);return n.__IT=e,n}arrangeSingleNode(t,e){let s=0;for(s=0;s<this.containerIndex.length&&!(this.containerIndex[s]>=e.i);s++);let n;if(e.variant==="append"){const o=this.containerPath[s];if(!o||this.containerIndex[s]!==e.i)throw new Error(`Cannot append to layout level ${e.i/10}: no existing section at this level`);n=o,this.stripControlOnlyLayout(t)}else n=this.createNewContainerNode(t,e);const r=this.containerPath[s-1];if(!r)throw new Error(`Cannot create layout level ${e.i/10}: no parent container`);this.containerPath.length=s,this.containerIndex.length=s,t.tagName==="HR"&&(t.setAttribute("aria-hidden","true"),t.setAttribute("hidden","hidden")),n.appendChild(t),r.appendChild(n),this.containerPath.push(n),this.containerIndex.push(e.i),this.currentContainerNode=n,t.tagName==="HR"&&e.variant==="new"&&this.controlLayoutIndex.push(e.i)}closeLevel(t){for(;this.containerIndex.length>1&&this.containerIndex[this.containerIndex.length-1]>=t;)this.containerIndex.pop(),this.containerPath.pop();for(;this.controlLayoutIndex.length&&this.controlLayoutIndex[this.controlLayoutIndex.length-1]>=t;)this.controlLayoutIndex.pop();this.currentContainerNode=this.containerPath[this.containerPath.length-1]??this.rootNode}appendToCurrentContainer(t){if(this.currentContainerNode===null)throw new Error("No current container node set");this.currentContainerNode.appendChild(t)}arrange(t){for(const e of t){if(e.nodeType!==Node.ELEMENT_NODE){this.appendToCurrentContainer(e);continue}const s=e,n=this.getI(s);if(!n){this.appendToCurrentContainer(e);continue}if(n.variant==="close"){s.parentNode&&s.parentNode.removeChild(s),this.closeLevel(n.i);continue}if(n.variant==="skip"){this.stripControlOnlyLayout(s),this.appendToCurrentContainer(e);continue}this.arrangeSingleNode(s,n)}}};const yg=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]),wg=3,$g=4;let kg=class{constructor(){this.name="text-block"}parse(t){var e;const s=Array.from(t.querySelectorAll("*")).reverse();for(const o of s){if(!o.innerHTML.includes("#["))continue;const l=this.parseLine(o.innerHTML,t.ownerDocument);l&&o.replaceWith(l)}const n=t.ownerDocument.createTreeWalker(t,$g),r=[];for(;n.nextNode();){const o=n.currentNode;o.nodeType===wg&&(e=o.textContent)!=null&&e.includes("#[")&&r.push(o)}for(const o of r)this.parseTextNode(o)}parseTextNode(t){const e=t.data.split(/(\r?\n)/),s=t.ownerDocument.createDocumentFragment();let n=!1;for(const r of e){if(/^\r?\n$/.test(r)){s.append(r);continue}const o=this.parseLine(r,t.ownerDocument);o?(s.append(o),n=!0):s.append(r)}n&&t.replaceWith(s)}parseLine(t,e){const s=t.match(/^\s*#\[(.*)\]\s*$/);if(!s||s[1].includes("#["))return null;const n=s[1].replaceAll("&quot;",'"').replaceAll("&#39;","'").replaceAll("&#x27;","'").replaceAll("“",'"').replaceAll("”",'"').replaceAll("‘","'").replaceAll("’","'");try{return this.createElement(n,e)}catch(r){return console.warn("[tj-content-pane] Unable to parse text block:",t,r),null}}createElement(t,e){const{definition:s,content:n}=this.splitContent(t);if(!/^[a-z][\w-]*/i.test(s))throw new Error("The text block must start with an element name.");const r=Tr(s,{allowAttributes:!0}),o=r.rest.trim(),l=e.createElement(r.tag);r.id&&(l.id=r.id),l.classList.add(...r.classes);for(const d of r.attrs)this.applyAttribute(l,d);for(const d of this.parseAttributes(o))this.applyAttribute(l,d);if(n!==void 0){if(yg.has(r.tag.toLowerCase()))throw new Error(`The void element <${r.tag}> cannot have content.`);l.innerHTML=n.trim()}return l}splitContent(t){let e=null;for(let s=0;s<t.length;s++){const n=t[s];if(e){n===e&&(e=null);continue}if(n==='"'||n==="'"){e=n;continue}if(n===">")return{definition:t.slice(0,s).trim(),content:t.slice(s+1)};if(t.startsWith("&gt;",s))return{definition:t.slice(0,s).trim(),content:t.slice(s+4)}}return{definition:t.trim()}}parseAttributes(t){if(!t)return[];const e=[],s=/([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gy;let n=0;for(;n<t.length;){for(;/\s/.test(t[n]??"");)n++;if(n>=t.length)break;s.lastIndex=n;const r=s.exec(t);if(!r||r.index!==n)throw new Error(`Invalid attribute syntax near '${t.slice(n)}'.`);const o=r[0].includes("=");e.push({name:r[1],value:o?r[2]??r[3]??r[4]??"":void 0}),n=s.lastIndex}return e}applyAttribute(t,e){if(e.name.toLowerCase()==="class"&&e.value){t.classList.add(...e.value.split(/\s+/).filter(Boolean));return}t.setAttribute(e.name,e.value??"")}};var xg=Object.create,Or=Object.defineProperty,Sg=Object.getOwnPropertyDescriptor,zd=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Fe=i=>{throw TypeError(i)},_g=(i,t,e)=>t in i?Or(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Wl=(i,t)=>Or(i,"name",{value:t,configurable:!0}),Ag=i=>[,,,xg(i?.[zd("metadata")]??null)],Md=["class","method","getter","setter","accessor","field","value","get","set"],yi=i=>i!==void 0&&typeof i!="function"?Fe("Function expected"):i,Cg=(i,t,e,s,n)=>({kind:Md[i],name:t,metadata:s,addInitializer:r=>e._?Fe("Already initialized"):n.push(yi(r||null))}),Eg=(i,t)=>_g(t,zd("metadata"),i[3]),wi=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},Lr=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Md[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&Sg(a<4?n:{get[e](){return Nl(this,r)},set[e](u){return Hl(this,r,u)}},e));a?h&&a<4&&Wl(r,(a>2?"set ":a>1?"get ":"")+e):Wl(n,e);for(var w=s.length-1;w>=0;w--)c=Cg(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>Tg(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?Nl:Og)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>Hl(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?yi(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Fe("Object expected"):(yi(o=l.get)&&(m.get=o),yi(o=l.set)&&(m.set=o),yi(o=l.init)&&y.unshift(o));return a||Eg(i,n),m&&Or(n,e,m),h?a^4?r:m:n},zr=(i,t,e)=>t.has(i)||Fe("Cannot "+e),Tg=(i,t)=>Object(t)!==t?Fe('Cannot use the "in" operator on this value'):i.has(t),Nl=(i,t,e)=>(zr(i,t,"read from private field"),e?e.call(i):t.get(i)),jl=(i,t,e)=>t.has(i)?Fe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Hl=(i,t,e,s)=>(zr(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Og=(i,t,e)=>(zr(i,t,"access private method"),e),Pd,Id,En,Dd,qt,Mr,Pr;Ef("tj_sess_state",{lhref:"",scrollpos:0,sessstart:Date.now(),pages:0});new ls(100,200);const Wd=new Map,Rl=new kg;Wd.set(Rl.name,Rl);Dd=[Xs("tj-content-pane")];let Qi=class extends(En=br(Bs(bd(fe))),Id=[tt({type:Boolean,reflect:!0,attribute:"skip-layout"})],Pd=[tt({type:String,reflect:!0,attribute:"pre-parser"})],En){constructor(){super(),jl(this,Mr,wi(qt,8,this,!1)),wi(qt,11,this),jl(this,Pr,wi(qt,12,this,"")),wi(qt,15,this)}static get is(){return"tj-content-pane"}createRenderRoot(){return this}arrange(){const t=new kf("SectionTreeBuilder");this.log("arrange() called"),this.applyPreParsers();const e=new bg(this),s=Array.from(this.children);if(e.arrange(s),this.debug("Firing afterArrange event"),this.dispatchEvent(new CustomEvent("afterArrange",{detail:{target:this},bubbles:!0})),this.skipLayout){this.warn("Skipping layout as per skipLayout property.");return}js(Array.from(this.children),{recursive:!0}),t.lap("after arrange")}applyPreParsers(){for(const t of this.preParser.split(/\s+/).filter(Boolean)){const e=Wd.get(t);if(!e){this.warn(`Unknown pre-parser '${t}'.`);continue}e.parse(this)}}async connectedCallback(){await vr(),super.connectedCallback(),this.arrange()}};qt=Ag(En);Mr=new WeakMap;Pr=new WeakMap;Lr(qt,4,"skipLayout",Id,Qi,Mr);Lr(qt,4,"preParser",Pd,Qi,Pr);Qi=Lr(qt,0,"ContentAreaElement2",Dd,Qi);wi(qt,1,Qi);const Lg=/^@var\(\s*(--[a-zA-Z0-9_-]+)\s*\)$/;function zg(i,t,e){const s=t.trim();if(!s)throw new Error(`Empty selector alternative at position ${e+1} in data-query "${i}".`);if(!s.startsWith("@var"))return{type:"selector",selector:s};const n=s.match(Lg);if(!n)throw new Error(`Invalid CSS variable selector "${s}" in data-query "${i}". Expected @var(--custom-property).`);return{type:"variable",name:n[1],expression:s}}function Fl(i,t,e){try{return Array.from(t.querySelectorAll(i))}catch(s){const n=s instanceof Error?s.message:String(s);throw new Error(`Invalid CSS selector "${i}" ${e}: ${n}`)}}function Mg(i,t){console.error(i instanceof Error?i:new Error(String(i)),t)}function Pg(i,t){let e;for(const[s,n]of i.split("|").entries())try{const r=zg(i,n,s);if(r.type==="selector"){const d=Fl(r.selector,t,`in data-query "${i}"`);if(d.length>0)return{elements:d,source:"selector"};continue}e??(e=getComputedStyle(t));const o=e.getPropertyValue(r.name).trim();if(!o)continue;const l=Fl(o,t,`resolved from ${r.expression}`);if(l.length>0)return{elements:l,source:"variable"}}catch(r){Mg(r,t)}return{elements:[],source:null}}function ql({slotElement:i,slotName:t,elements:e},s){e.forEach(n=>{n.hasAttribute("slot")&&!s.has(n)||(i.getAttributeNames().filter(r=>r.startsWith("data-set-attribute-")).forEach(r=>{const o=r.replace(/^data-set-attribute-/,"");if(!n.hasAttribute(o)){const l=i.getAttribute(r);l!==null&&n.setAttribute(o,l)}}),t!==""&&(n.setAttribute("slot",t),s.add(n)))})}function Nd(i){class t extends i{beforeLayoutCallback(s,n,r){return!1}firstUpdated(s){var n,r;(n=super.firstUpdated)==null||n.call(this,s);const o=((r=this.shadowRoot)==null?void 0:r.querySelectorAll("slot[data-query]"))??[],l=[],d=new WeakSet;for(const c of Array.from(o)){if(!(c instanceof HTMLSlotElement))continue;const p=c.getAttribute("name")??"";if(p!==""&&c.assignedElements({flatten:!0}).length>0)continue;const a=c.getAttribute("data-query");if(a)try{const f=Pg(a,this),h={slotElement:c,slotName:p,elements:f.elements};f.source==="variable"?l.push(h):ql(h,d)}catch(f){const h=f instanceof Error?f.message:String(f);console.error(new Error(`Failed to process data-query "${a}" for slot "${p}": ${h}`),c)}}l.forEach(c=>ql(c,d)),js(Array.from(this.children),{recursive:!0})}}return t}function jd(i,t){if(!i.includes("[")&&!i.includes("]"))return{parts:i.split(t),errors:[]};const e=[],s=[],n=[];let r=0,o=!1;for(let l=0;l<i.length;l++){const d=i[l];if(o){o=!1;continue}if(d==="\\"){o=!0;continue}if(d==="["){n.push(l);continue}if(d==="]"){const c=n.pop();c===void 0?s.push({code:"unexpected-closing-bracket",index:l,message:`Unexpected closing square bracket at index ${l}.`}):l===c+1&&s.push({code:"empty-bracket-value",index:c,message:`Empty square-bracket value at index ${c}.`});continue}d===t&&n.length===0&&(e.push(i.slice(r,l)),r=l+1)}o&&s.push({code:"dangling-escape",index:i.length-1,message:`Dangling escape character at index ${i.length-1}.`});for(const l of n)s.push({code:"unclosed-opening-bracket",index:l,message:`Opening square bracket at index ${l} is not closed. Use underscores instead of whitespace inside arbitrary values.`});return e.push(i.slice(r)),{parts:e,errors:s}}function Hs(i,t){return jd(i,t).parts}function Hd(i){return jd(i,":").errors}function xs(i){return Hs(i,".").filter(Boolean)}function Ig(i){const t=Hs(i,":");if(t.length===1)return xs(t[0]);if(t.length===2)return xs(t[1]);const e=[];for(let s=0;s<t.length;s+=2)e.push(...xs(t[s]));return e}const Dg={width:"width","min-width":"min-width","max-width":"max-width",height:"height","min-height":"min-height","max-height":"max-height","aspect-ratio":"aspect-ratio",margin:"margin","margin-top":"margin-top","margin-right":"margin-right","margin-bottom":"margin-bottom","margin-left":"margin-left",padding:"padding","padding-top":"padding-top","padding-right":"padding-right","padding-bottom":"padding-bottom","padding-left":"padding-left",gap:"gap","row-gap":"row-gap","column-gap":"column-gap","font-size":"font-size","text-size":"font-size","line-height":"line-height","letter-spacing":"letter-spacing",top:"top",right:"right",bottom:"bottom",left:"left",inset:"inset","flex-basis":"flex-basis","grid-template-columns":"grid-template-columns","grid-template-rows":"grid-template-rows","border-radius":"border-radius","border-width":"border-width",opacity:"opacity","z-index":"z-index"},Vl=new WeakMap;function Rd(i){return/^[A-Za-z_][A-Za-z0-9_-]*(?:\.[A-Za-z_][A-Za-z0-9_-]*)*$/.test(i)}function Wg(i){const t=i.indexOf("-[");if(t<=0||!i.endsWith("]"))return null;const e=i.slice(0,t),s=Dg[e];if(!s)return null;const n=i.slice(t+2,-1);if(!n||/[;{}\u0000-\u001f\u007f]/.test(n))return null;const r=n.split("_").join(" ");return/\b(?:url|image-set)\s*\(/i.test(r)?null:{className:i,property:s,value:r}}let Ng=class{constructor(t,e){this.declarations=new Map,this.styleElement=null,this.document=t;const s=e?.trim()||null;if(s&&!Rd(s))throw new Error(`Invalid CSS layer name: "${s}"`);this.layer=s}register(t){if(this.declarations.has(t))return!1;const e=Wg(t);return!e||!this.supports(e.property,e.value)?!1:(this.declarations.set(t,e),this.render(),!0)}supports(t,e){var s;const n=(s=this.document.defaultView)==null?void 0:s.CSS;if(n&&typeof n.supports=="function")return n.supports(t,e);const r=this.document.createElement("span").style;return r.setProperty(t,e),r.getPropertyValue(t)!==""}render(){this.styleElement||(this.styleElement=this.document.createElement("style"),this.styleElement.setAttribute("data-trunkjs-responsive-utilities",""),this.layer&&this.styleElement.setAttribute("data-layer",this.layer),this.document.head.appendChild(this.styleElement));const t=Array.from(this.declarations.values()).map(({className:e,property:s,value:n})=>`[class~="${Rg(e)}"] { ${s}: ${n}; }`);this.styleElement.textContent=this.layer?`@layer ${this.layer} {
  ${t.join(`
  `)}
}`:t.join(`
`)}};function jg(i,t,e){const s=i.getAttribute("class")||"";if(!s.includes("[")&&!s.includes("]"))return 0;let n;try{n=Hg(i.ownerDocument,t)}catch(o){return e.warn(o instanceof Error?o.message:String(o),i),0}let r=0;for(const o of s.split(/\s+/)){if(!o.includes("[")&&!o.includes("]"))continue;const l=Hd(o);if(l.length>0){for(const d of l)e.warn(`Invalid arbitrary utility token "${o}": ${d.message}`,i);continue}for(const d of Ig(o))n.register(d)&&r++}return r}function Hg(i,t){const e=t?.trim()||"";if(e&&!Rd(e))throw new Error(`Invalid CSS layer name: "${e}"`);let s=Vl.get(i);s||(s=new Map,Vl.set(i,s));let n=s.get(e);return n||(n=new Ng(i,e),s.set(e,n)),n}function Rg(i){return i.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\a ")}function on(i){const t=i.trim();if(!t)return{from:0,till:1/0};if(t.startsWith("-")){const s=t.slice(1).trim();return{from:0,till:Tt(s)}}if(t.endsWith("-")){const s=t.slice(0,-1).trim();return{from:Tt(s),till:1/0}}const e=t.indexOf("-");if(e>=0){const s=t.slice(0,e).trim(),n=t.slice(e+1).trim(),r=Tt(s),o=n?Tt(n):1/0;return{from:r,till:o}}return{from:Tt(t),till:1/0}}function Fg(i){var t,e,s,n;const r=new Set,o=[],l=(d,c,p)=>{const a=p.includes("[")?xs(p):p.split(".");for(const f of a)r.add(f),o.push({from:d,till:c,className:f})};for(const d of i){if(!d.includes(":"))continue;const c=d.includes("[")||d.includes("]");if(c&&Hd(d).length>0)continue;const p=c?Hs(d,":"):d.split(":");if(p.length===1)continue;if(p.length===2){const[b,y]=p;if(!b||!y)continue;const x=on(b);l(x.from,x.till,y);continue}const a=d.startsWith(":")?d:"::"+d,f=c?Hs(a,":"):a.split(":");let h=(t=f[1])==null?void 0:t.trim(),g=(e=f[2])==null?void 0:e.trim();for(let b=3;b+1<f.length;b+=2){const y=(s=f[b])==null?void 0:s.trim();let x=(n=f[b+1])==null?void 0:n.trim();y&&!x&&(x="");try{const m=on(`${h}-${y}`);l(m.from,m.till,g)}catch(m){throw new Error(`Error parsing breakpoint range "${y}" in part "${d}": ${m instanceof Error?m.message:String(m)}`)}h=y,g=x}try{const b=on(`${h}`);l(b.from,b.till,g)}catch(b){throw new Error(`Error parsing breakpoint range "${h}" in part "${d}": ${b instanceof Error?b.message:String(b)}`)}}return{data:o,observedClassNames:r}}function qg(i,t){if(!i.includes(":"))return i;const e=Tt(t);let s=new Set(i.split(" "));const n=Fg(s);for(const r of n.observedClassNames)s.delete(r);for(const r of n.data)e>=r.from&&e<r.till&&s.add(r.className);return Array.from(s).join(" ")}function Vg(i,t,e){const s=i.getAttribute("class")||"";if(s.indexOf(":")===-1)return;if(!i.isConnected){e.warn("Element is no longer connected to the DOM, skipping class adjustment:",i);return}e.debug("Adujsted class for element:",i);const n=qg(s,t);n!==s&&i.setAttribute("class",n)}let Ss=class extends Error{constructor(t,e){super(t),this.context=e,this.name="StyleParseError"}},Bl=class extends Ss{constructor(t,e){super(t,e),this.name="StyleDeclarationError"}};function Fd(i){if(i.length===0)return"";if(Array.isArray(i[0]))return i.map(t=>Fd(t)).filter(t=>t).join("; ");{const[t,e,s]=i;return`${t}: ${e}${s?" !"+s:""}`}}function Bg(i){return i[1]+(i[2]?" !"+i[2]:"")}function Ug(i,t){const e=(c,p)=>c,s=[];let n="";const r=[];let o=null,l=0,d=0;for(const c of i)o?(c===o&&(o=null),n+=c):c==="'"||c==='"'?(o=c,n+=c):c==="("?(l++,n+=c):c===")"?(e(l===0,new Ss("Unmatched closing parenthesis )",ln(d,i))),l=Math.max(0,l-1),n+=c):c===";"&&l===0?(r.push(n),n=""):n+=c,d++;e(o!==null,new Ss("Unclosed quote",ln(d-1,i))),e(l>0,new Ss("Unbalanced parentheses: missing )",ln(d-1,i))),n.trim()&&r.push(n);for(const c of r){const p=c.trim();if(!p)continue;let a=-1;o=null,l=0;for(let b=0;b<p.length;b++){const y=p[b];if(o)y===o&&(o=null);else if(y==="'"||y==='"')o=y;else if(y==="(")l++;else if(y===")")e(l===0,new Bl("Unmatched closing parenthesis ) in declaration",{declaration:p})),l=Math.max(0,l-1);else if(y===":"&&l===0){a=b;break}}if(e(a<1,new Bl("Missing colon (:) in declaration",{declaration:p}))&&a<1||a<1)continue;const f=p.slice(0,a).trim();let h=p.slice(a+1).trim(),g;/\s*!important\s*$/i.test(h)&&(h=h.replace(/\s*!important\s*$/i,"").trim(),g="important"),f&&s.push([f,h,g])}return s}function ln(i,t){const e=Math.max(0,i-15),s=Math.min(t.length,i+15);return{index:i,input:t,near:t.slice(e,s)}}function Yg(i,t){const e=Array.from(i.attributes).filter(l=>l.name.startsWith("style-")),s={};let n=!1;const r=new Set;for(const l of e){const d=l.name.substring(6),c=s[d]=Ug(l.value||"");n=!0;for(const p of c)r.add(p[0]),i.style[p[0]]||i.style.setProperty(p[0],"unset")}if(!n)return;if(!s.xs){const l=[];for(const d of r){const c=i.style.getPropertyValue(d)||"",p=i.style.getPropertyPriority(d)==="important"?"important":void 0;l.push([d,c,p])}s.xs=l,i.setAttribute("style-xs",Fd(l))}const o=new Map;for(const l of Bi)if(t>=l.minWidth&&s[l.name]){const d=s[l.name];for(const c of d)o.set(c[0],Bg(c))}for(const[l,d]of o)i.style.setProperty(l,d)}let Xg=class{constructor(t){this.logger=t,this.observer=null,this.changedElements=new Set,this.debouncer=new ls(10,100),this.breakpoint=Ui(),this.utilityLayer=null}async processChanges(){for(const t of this.changedElements)jg(t,this.utilityLayer,this.logger),Vg(t,this.breakpoint,this.logger),Yg(t,$n[this.breakpoint]||0),this.changedElements.delete(t)}async spoolElement(t){this.changedElements.has(t)||(this.changedElements.add(t),await this.debouncer.wait(),this.processChanges())}onChange(t){var e;for(const s of t)if(s.type==="childList")for(const n of Array.from(s.addedNodes||[]))n instanceof HTMLElement&&this.queueAll(n);else if(s.type==="attributes"){if(!(s.target instanceof HTMLElement)||!(s.attributeName==="class"||(e=s.attributeName)!=null&&e.startsWith("style")))continue;this.spoolElement(s.target)}}queueAll(t=null){t===null&&(t=document.body),(t.hasAttribute("class")||t.getAttributeNames().some(e=>e.startsWith("style-")))&&this.spoolElement(t),t.querySelectorAll("[class]").forEach(e=>this.spoolElement(e)),Array.from(t.getElementsByTagName("*")).filter(e=>[...e.getAttributeNames()].some(s=>s.startsWith("style-"))).forEach(e=>this.spoolElement(e))}startObserving(t){this.observer=new MutationObserver(this.onChange.bind(this)),this.observer.observe(t,{attributes:!0,childList:!0,subtree:!0})}stopObserving(){var t;(t=this.observer)==null||t.disconnect()}};var Gg=Object.create,qd=Object.defineProperty,Kg=Object.getOwnPropertyDescriptor,Vd=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Gs=i=>{throw TypeError(i)},Jg=(i,t,e)=>t in i?qd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Zg=i=>[,,,Gg(i?.[Vd("metadata")]??null)],Bd=["class","method","getter","setter","accessor","field","value","get","set"],Ud=i=>i!==void 0&&typeof i!="function"?Gs("Function expected"):i,Qg=(i,t,e,s,n)=>({kind:Bd[i],name:t,metadata:s,addInitializer:r=>e._?Gs("Already initialized"):n.push(Ud(r||null))}),tv=(i,t)=>Jg(t,Vd("metadata"),i[3]),ev=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)r[n].call(e);return s},iv=(i,t,e,s,n,r)=>{for(var o,l,d,c,p=t&7,a=!1,f=!1,h=2,g=Bd[p+5],b=i[h]||(i[h]=[]),y=(n=n.prototype,Kg(n,e)),x=s.length-1;x>=0;x--)d=Qg(p,e,l={},i[3],b),d.static=a,d.private=f,c=d.access={has:m=>e in m},c.get=m=>m[e],o=(0,s[x])(y[g],d),l._=1,Ud(o)&&(y[g]=o);return y&&qd(n,e,y),n},Yd=(i,t,e)=>t.has(i)||Gs("Cannot "+e),pt=(i,t,e)=>(Yd(i,t,"read from private field"),t.get(i)),Ul=(i,t,e)=>t.has(i)?Gs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Yl=(i,t,e,s)=>(Yd(i,t,"write to private field"),t.set(i,e),e),Xd,Tn,Nt,jt,Ks;let Ir=class extends(Tn=br(Bs(HTMLElement)),Xd=[Lf("resize",{target:"window"})],Tn){constructor(){super(),ev(Ks,5,this),this.resizeDebouncer=new ls(50,1500),Ul(this,Nt,Ui()),Ul(this,jt,new Xg(this.getLogger("observer")))}static get observedAttributes(){return["width","height","orientation"]}async onResize(t){await this.resizeDebouncer.wait();const e=Ui();e!==pt(this,Nt)&&(Yl(this,Nt,e),this.log(`Breakpoint changed to ${pt(this,Nt)}, adjusting layout.`),pt(this,jt).breakpoint=pt(this,Nt),pt(this,jt).queueAll())}attributeChangedCallback(t,e,s){}async connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),Yl(this,Nt,Ui()),pt(this,jt).breakpoint=pt(this,Nt),pt(this,jt).utilityLayer=this.getAttribute("layer"),this.debug("Initializing ElementObserver for responsive adjustments.",pt(this,Nt)),pt(this,jt).startObserving(this),pt(this,jt).queueAll()}disconnectedCallback(){var t;(t=super.disconnectedCallback)==null||t.call(this),this.debug("TjResponsiveElement disconnected from the DOM."),pt(this,jt).stopObserving()}};Ks=Zg(Tn);Nt=new WeakMap;jt=new WeakMap;iv(Ks,1,"onResize",Xd,Ir);tv(Ks,Ir);customElements.get("tj-responsive")||customElements.define("tj-responsive",Ir);var sv=Object.defineProperty,Gd=i=>{throw TypeError(i)},nv=(i,t,e)=>t in i?sv(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ot=(i,t,e)=>nv(i,typeof t!="symbol"?t+"":t,e),Dr=(i,t,e)=>t.has(i)||Gd("Cannot "+e),G=(i,t,e)=>(Dr(i,t,"read from private field"),e?e.call(i):t.get(i)),Mt=(i,t,e)=>t.has(i)?Gd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),_s=(i,t,e,s)=>(Dr(i,t,"write to private field"),t.set(i,e),e),te=(i,t,e)=>(Dr(i,t,"access private method"),e);const As=[{name:"xs",minWidth:0},{name:"sm",minWidth:576},{name:"md",minWidth:768},{name:"lg",minWidth:992},{name:"xl",minWidth:1200},{name:"xxl",minWidth:1400}],Xl=As.reduce((i,t)=>(i[t.name]=t.minWidth,i),{});function ms(i){if(!(i in Xl))throw new Error(`Unknown breakpoint: ${i}`);return Xl[i]}function rv(){return window.visualViewport?window.visualViewport.width:window.innerWidth}function av(i){i===void 0&&(i=rv());for(let t=As.length-1;t>=0;t--)if(i>=As[t].minWidth)return As[t].name;return"xs"}function Kd(i,t={},e=[]){Array.isArray(e)||(e=[e]);const s=document.createElement(i);for(const n in t)t[n]!==null&&t[n]!==void 0&&s.setAttribute(n,t[n]!==!0?t[n]:"");for(const n of e)s.append(typeof n=="string"?document.createTextNode(n):n);return s}let Jd=class{constructor(t,e=!1){Ot(this,"timeout",null),Ot(this,"startTimeWithMs",0),Ot(this,"maxTimeout",null),this.delay=t,this.max_delay=e}async wait(){return this.startTimeWithMs===0&&(this.startTimeWithMs=Date.now()),this.timeout&&(this.max_delay===!1||this.startTimeWithMs+this.max_delay>Date.now())&&(clearTimeout(this.timeout),this.timeout=null),new Promise(t=>{this.timeout||(this.timeout=setTimeout(()=>{this.timeout=null,this.startTimeWithMs=0,t(!0)},this.delay))})}debounce(t){const e=Date.now();this.startTimeWithMs===0&&(this.startTimeWithMs=e);const s=()=>{this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.maxTimeout&&(clearTimeout(this.maxTimeout),this.maxTimeout=null),this.startTimeWithMs=0,t()};if(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(s,this.delay),this.max_delay!==!1&&!this.maxTimeout){const n=e-this.startTimeWithMs,r=Math.max(0,this.max_delay-n);this.maxTimeout=setTimeout(s,r)}}},ov=class{constructor(t,e,s,n="main"){this._debug=t,this.myTag=e,this.myElementId=s,this.instanceId=n}debug(...t){this._debug&&console.debug(`[DEBUG][${this.myTag}:${this.myElementId}:${this.instanceId}]`,...t)}log(...t){console.log(`[LOG][${this.myTag}:${this.myElementId}:${this.instanceId}]`,...t)}warn(...t){console.warn(`[WARN][${this.myTag}:${this.myElementId}:${this.instanceId}]`,...t)}error(...t){console.error(`[ERROR][${this.myTag}:${this.myElementId}:${this.instanceId}]`,...t)}throwError(...t){const e=`[ERROR][${this.myTag}:${this.myElementId}:${this.instanceId}] ${t.join(" ")}`;throw this.error(...t),new Error(e)}},lv=class{constructor(t,e=!0){Ot(this,"label"),Ot(this,"last"),Ot(this,"startTime"),Ot(this,"running",!1),Ot(this,"enabled"),this.label=t,this.enabled=e,this.startTime=this.last=performance.now(),this.running=!0}lap(t=""){if(!this.enabled)return;const e=performance.now(),s=(e-this.last)/1e3;this.last=e,console.debug(`[${this.label}] ${t} +${s.toFixed(3)}s`)}elapsed(){return performance.now()-this.startTime}reset(){this.startTime=this.last=performance.now()}stop(){return this.running=!1,this.elapsed()}start(){this.running=!0,this.reset()}isRunning(){return this.running}};function cv(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)}function dv(i){if(i!=null)try{return JSON.parse(i)}catch{return}}function Gl(i){const t=JSON.stringify(i);return t===void 0?"null":t}function hv(i,t){const e={...t};if(cv(i))for(const s of Object.keys(t))s in i&&(e[s]=i[s]);return e}let uv=class{constructor(t,e,s){Ot(this,"cache"),this.backend=t,this.storageKey=e,this.initialValue=s}read(){if(this.cache)return this.cache;const t=this.backend?dv(this.backend.getItem(this.storageKey)):void 0,e=hv(t,this.initialValue);if(this.backend&&this.backend.getItem(this.storageKey)==null)try{this.backend.setItem(this.storageKey,Gl(e))}catch{}return this.cache=e,e}write(t){if(this.cache=t,!!this.backend)try{this.backend.setItem(this.storageKey,Gl(t))}catch{}}asProxy(){const t={get:(e,s)=>{if(typeof s=="symbol")return s===Symbol.toStringTag?"Storage":void 0;const n=this.read();return s==="toJSON"?()=>({...n}):n[s]},set:(e,s,n)=>{if(typeof s!="string")return!1;const r={...this.read()};return r[s]=n,this.write(r),!0},deleteProperty:(e,s)=>{if(typeof s!="string")return!1;const n=this.read();if(!(s in n))return!0;const r={...n};return delete r[s],this.write(r),!0},has:(e,s)=>{if(typeof s!="string")return!1;const n=this.read();return s in n},ownKeys:()=>{const e=this.read();return Reflect.ownKeys(e)},getOwnPropertyDescriptor:(e,s)=>{if(typeof s!="string")return;const n=this.read();if(s in n)return{enumerable:!0,configurable:!0,writable:!0,value:n[s]}}};return new Proxy({},t)}};function pv(i){const t=globalThis.window;return(i==="session"?t?.sessionStorage:t?.localStorage)??void 0}function mv(i,t){return new uv(pv("session"),i,t).asProxy()}function Zd(i,t,e){return new Promise((s,n)=>{const r=o=>{i.removeEventListener(t,r,e),s(o)};i.addEventListener(t,r,e)})}function Wr(){return document.readyState==="loading"?new Promise(i=>{document.addEventListener("DOMContentLoaded",()=>i())}):Promise.resolve()}function Qd(){return window.tj_loader_state?window.tj_loader_state!=="loading"?Promise.resolve():Zd(window,"loader:ready"):th()}function fv(){return window.tj_loader_state?window.tj_loader_state==="pre-visual"||window.tj_loader_state==="visual"?Promise.resolve():Zd(window,"loader:pre-visual"):th()}function th(i=window){return i||(i=window),i===window?document.readyState==="complete"?Promise.resolve():new Promise(t=>window.addEventListener("load",()=>t(),{once:!0})):i instanceof HTMLImageElement?i.complete&&i.naturalWidth!==0?Promise.resolve():new Promise((t,e)=>{i.addEventListener("load",()=>t(),{once:!0}),i.addEventListener("error",()=>e(new Error("image error")),{once:!0})}):i instanceof HTMLMediaElement?i.readyState>=HTMLMediaElement.HAVE_FUTURE_DATA?Promise.resolve():new Promise(t=>i.addEventListener("loadeddata",()=>t(),{once:!0})):new Promise(t=>i.addEventListener("load",()=>t(),{once:!0}))}function gv(i){var t,e;class s extends i{constructor(){super(...arguments),Mt(this,t,new Jd(200,5e3)),Ot(this,"currentBreakPoint",null),Mt(this,e,async()=>{var r;await G(this,t).wait(),await Wr();const o=this,l=window.innerWidth;let d=getComputedStyle(o).getPropertyValue("--breakpoint");if(!d||d==="")return;d=d.trim().replace(/^['"]|['"]$/g,"");const c=d.split(","),p=c[0].trim(),a=((r=c[1])==null?void 0:r.trim())??p,f=av(l);this.currentBreakPoint!==f&&(ms(a)<=ms(f)?o.setAttribute("mode","desktop"):ms(p)>ms(f)?o.setAttribute("mode","mobile"):o.setAttribute("mode","tablet"))})}connectedCallback(){super.connectedCallback();try{G(this,e).call(this),window.addEventListener("resize",G(this,e)),G(this,e).call(this)}catch(r){throw console.error("Error in BreakPointMixin:",r,"in element",this),r}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",G(this,e))}}return t=new WeakMap,e=new WeakMap,s}const On=Symbol("listenerDefs"),eh=Symbol("withEventBindings");function K(i,t){const e=Array.isArray(i)?i:[i];return function(s,n){if(n.kind!=="method")throw new Error("@Listen nur für Methoden");return n.addInitializer(function(){const r=this;(r[On]||(r[On]=[])).push({method:n.name,events:[...e],opts:t})}),function(...r){if(!this[eh])throw new Error("[EventBindings] @Listen - decorator requires EventBindingMixin.");return s.apply(this,r)}}}function vv(i,t){var e;return!t||t==="host"?i:t==="document"?i.ownerDocument??document:t==="window"?((e=i.ownerDocument)==null?void 0:e.defaultView)??window:t==="shadowRoot"?i.shadowRoot??i:typeof t=="function"?t(i):t}function Js(i){var t,e,s;class n extends i{constructor(...o){super(...o),Mt(this,e),Mt(this,t),this[eh]=!0}connectedCallback(){var o;(o=super.connectedCallback)==null||o.call(this),te(this,e,s).call(this)}disconnectedCallback(){var o,l;(o=G(this,t))==null||o.abort(),(l=super.disconnectedCallback)==null||l.call(this)}}return t=new WeakMap,e=new WeakSet,s=function(){var r,o,l;(r=G(this,t))==null||r.abort(),_s(this,t,new AbortController);const d=this[On]||[];for(const c of d){const p=vv(this,(o=c.opts)==null?void 0:o.target),a=((l=c.opts)==null?void 0:l.options)??{},f=this[c.method].bind(this);for(const h of c.events)p.addEventListener(h,f,{...a,signal:G(this,t).signal})}},n}let bv=1;function cs(i){var t,e,s;class n extends i{constructor(){super(...arguments),Mt(this,t,null),Mt(this,e,bv++),Mt(this,s,null)}invalidateDebugCache(){_s(this,t,null)}get _debug(){return G(this,t)!==null?G(this,t):(this instanceof HTMLElement&&_s(this,t,this.hasAttribute("debug")&&!["false","0","off","no"].includes(this.getAttribute("debug")||"")),G(this,t)===!0&&console.info(`[DEBUG][ID:${G(this,e)}] LoggingMixin: Debug mode is enabled for <${this.tagName}>`,this),G(this,t)??!1)}getLogger(o="main"){const l="<"+(this.tagName||this.constructor.name||"UnknownElement")+">";return G(this,s)||_s(this,s,new ov(this._debug,l,`${G(this,e)}`,o)),G(this,s)}debug(...o){this.getLogger().debug(...o)}log(...o){this.getLogger().log(...o)}warn(...o){this.getLogger().warn(...o)}error(...o){this.getLogger().error(...o)}throwError(...o){return this.getLogger().throwError(...o)}}return t=new WeakMap,e=new WeakMap,s=new WeakMap,n}function ih(i){class t extends i{connectedCallback(){this.dispatchEvent(new CustomEvent("init:child-waitreq",{detail:{element:this,state:"connected"},bubbles:!0,composed:!0})),super.connectedCallback()}firstUpdated(s){var n;(n=super.firstUpdated)==null||n.call(this,s),this.dispatchEvent(new CustomEvent("init:child-ready",{detail:{element:this,state:"ready"},bubbles:!0,composed:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent("init:child-ready",{detail:{element:this,state:"disconnected"},bubbles:!0,composed:!0}))}}return t}function Nr(i){var t,e,s,n,r,o,l;class d extends i{constructor(){super(...arguments),Mt(this,e),Mt(this,t,new WeakMap),Mt(this,r,p=>{te(this,e,n).call(this,p.target)})}firstUpdated(p){var a;(a=super.firstUpdated)==null||a.call(this,p),te(this,e,s).call(this)}updated(p){var a;(a=super.updated)==null||a.call(this,p),te(this,e,s).call(this)}}return t=new WeakMap,e=new WeakSet,s=function(){var c;const p=(c=this.shadowRoot)==null?void 0:c.querySelectorAll("slot");p?.forEach(a=>{if(te(this,e,n).call(this,a),!G(this,t).has(a)){const f=h=>G(this,r).call(this,h);G(this,t).set(a,f),a.addEventListener("slotchange",f)}})},n=function(c){const p=te(this,e,o).call(this,c.assignedNodes({flatten:!0})),a=te(this,e,o).call(this,c.childNodes);p||a?c.classList.remove("slot-empty"):c.classList.add("slot-empty")},r=new WeakMap,o=function(c){return Array.from(c).some(p=>te(this,e,l).call(this,p))},l=function(c){return c.nodeType===Node.TEXT_NODE?(c.textContent||"").trim().length>0:c.nodeType===Node.ELEMENT_NODE},d}const Cs=globalThis,jr=Cs.ShadowRoot&&(Cs.ShadyCSS===void 0||Cs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sh=Symbol(),Kl=new WeakMap;let nh=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==sh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(jr&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Kl.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Kl.set(e,t))}return t}toString(){return this.cssText}};const E=i=>new nh(typeof i=="string"?i:i+"",void 0,sh),yv=(i,t)=>{if(jr)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),n=Cs.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}},Jl=jr?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return E(e)})(i):i;const{is:wv,defineProperty:$v,getOwnPropertyDescriptor:kv,getOwnPropertyNames:xv,getOwnPropertySymbols:Sv,getPrototypeOf:_v}=Object,Zs=globalThis,Zl=Zs.trustedTypes,Av=Zl?Zl.emptyScript:"",Cv=Zs.reactiveElementPolyfillSupport,Xi=(i,t)=>i,Rs={toAttribute(i,t){switch(t){case Boolean:i=i?Av:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Hr=(i,t)=>!wv(i,t),Ql={attribute:!0,type:String,converter:Rs,reflect:!1,useDefault:!1,hasChanged:Hr};Symbol.metadata??=Symbol("metadata"),Zs.litPropertyMetadata??=new WeakMap;let ie=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ql){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,e);n!==void 0&&$v(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){const{get:n,set:r}=kv(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:n,set(o){const l=n?.call(this);r?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ql}static _$Ei(){if(this.hasOwnProperty(Xi("elementProperties")))return;const t=_v(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xi("properties"))){const e=this.properties,s=[...xv(e),...Sv(e)];for(const n of s)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,n]of e)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const n=this._$Eu(e,s);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(Jl(n))}else t!==void 0&&e.push(Jl(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yv(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:Rs).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const r=s.getPropertyOptions(n),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Rs;this._$Em=n;const l=o.fromAttribute(e,r.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(t,e,s,n=!1,r){if(t!==void 0){const o=this.constructor;if(n===!1&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??Hr)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:n,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,r]of s){const{wrapped:o}=r,l=this[n];o!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,r,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ie.elementStyles=[],ie.shadowRootOptions={mode:"open"},ie[Xi("elementProperties")]=new Map,ie[Xi("finalized")]=new Map,Cv?.({ReactiveElement:ie}),(Zs.reactiveElementVersions??=[]).push("2.1.2");const Rr=globalThis,tc=i=>i,Fs=Rr.trustedTypes,ec=Fs?Fs.createPolicy("lit-html",{createHTML:i=>i}):void 0,rh="$lit$",se=`lit$${Math.random().toFixed(9).slice(2)}$`,ah="?"+se,Ev=`<${ah}>`,$e=document,ts=()=>$e.createComment(""),es=i=>i===null||typeof i!="object"&&typeof i!="function",Fr=Array.isArray,Tv=i=>Fr(i)||typeof i?.[Symbol.iterator]=="function",cn=`[ 	
\f\r]`,ui=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ic=/-->/g,sc=/>/g,he=RegExp(`>|${cn}(?:([^\\s"'>=/]+)(${cn}*=${cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nc=/'/g,rc=/"/g,oh=/^(?:script|style|textarea|title)$/i,Ov=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),k=Ov(1),ke=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),ac=new WeakMap,ve=$e.createTreeWalker($e,129);function lh(i,t){if(!Fr(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ec!==void 0?ec.createHTML(t):t}const Lv=(i,t)=>{const e=i.length-1,s=[];let n,r=t===2?"<svg>":t===3?"<math>":"",o=ui;for(let l=0;l<e;l++){const d=i[l];let c,p,a=-1,f=0;for(;f<d.length&&(o.lastIndex=f,p=o.exec(d),p!==null);)f=o.lastIndex,o===ui?p[1]==="!--"?o=ic:p[1]!==void 0?o=sc:p[2]!==void 0?(oh.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=he):p[3]!==void 0&&(o=he):o===he?p[0]===">"?(o=n??ui,a=-1):p[1]===void 0?a=-2:(a=o.lastIndex-p[2].length,c=p[1],o=p[3]===void 0?he:p[3]==='"'?rc:nc):o===rc||o===nc?o=he:o===ic||o===sc?o=ui:(o=he,n=void 0);const h=o===he&&i[l+1].startsWith("/>")?" ":"";r+=o===ui?d+Ev:a>=0?(s.push(c),d.slice(0,a)+rh+d.slice(a)+se+h):d+se+(a===-2?l:h)}return[lh(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let Ln=class ch{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let r=0,o=0;const l=t.length-1,d=this.parts,[c,p]=Lv(t,e);if(this.el=ch.createElement(c,s),ve.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(n=ve.nextNode())!==null&&d.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const a of n.getAttributeNames())if(a.endsWith(rh)){const f=p[o++],h=n.getAttribute(a).split(se),g=/([.?@])?(.*)/.exec(f);d.push({type:1,index:r,name:g[2],strings:h,ctor:g[1]==="."?Mv:g[1]==="?"?Pv:g[1]==="@"?Iv:Qs}),n.removeAttribute(a)}else a.startsWith(se)&&(d.push({type:6,index:r}),n.removeAttribute(a));if(oh.test(n.tagName)){const a=n.textContent.split(se),f=a.length-1;if(f>0){n.textContent=Fs?Fs.emptyScript:"";for(let h=0;h<f;h++)n.append(a[h],ts()),ve.nextNode(),d.push({type:2,index:++r});n.append(a[f],ts())}}}else if(n.nodeType===8)if(n.data===ah)d.push({type:2,index:r});else{let a=-1;for(;(a=n.data.indexOf(se,a+1))!==-1;)d.push({type:7,index:r}),a+=se.length-1}r++}}static createElement(t,e){const s=$e.createElement("template");return s.innerHTML=t,s}};function Me(i,t,e=i,s){if(t===ke)return t;let n=s!==void 0?e._$Co?.[s]:e._$Cl;const r=es(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(i),n._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=n:e._$Cl=n),n!==void 0&&(t=Me(i,n._$AS(i,t.values),n,s)),t}let zv=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,n=(t?.creationScope??$e).importNode(e,!0);ve.currentNode=n;let r=ve.nextNode(),o=0,l=0,d=s[0];for(;d!==void 0;){if(o===d.index){let c;d.type===2?c=new qr(r,r.nextSibling,this,t):d.type===1?c=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(c=new Dv(r,this,t)),this._$AV.push(c),d=s[++l]}o!==d?.index&&(r=ve.nextNode(),o++)}return ve.currentNode=$e,n}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},qr=class dh{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,n){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Me(this,t,e),es(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==ke&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tv(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&es(this._$AH)?this._$AA.nextSibling.data=t:this.T($e.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ln.createElement(lh(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(e);else{const r=new zv(n,this),o=r.u(this.options);r.p(e),this.T(o),this._$AH=r}}_$AC(t){let e=ac.get(t.strings);return e===void 0&&ac.set(t.strings,e=new Ln(t)),e}k(t){Fr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const r of t)n===e.length?e.push(s=new dh(this.O(ts()),this.O(ts()),this,this.options)):s=e[n],s._$AI(r),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=tc(t).nextSibling;tc(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Qs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,n,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=_}_$AI(t,e=this,s,n){const r=this.strings;let o=!1;if(r===void 0)t=Me(this,t,e,0),o=!es(t)||t!==this._$AH&&t!==ke,o&&(this._$AH=t);else{const l=t;let d,c;for(t=r[0],d=0;d<r.length-1;d++)c=Me(this,l[s+d],e,d),c===ke&&(c=this._$AH[d]),o||=!es(c)||c!==this._$AH[d],c===_?t=_:t!==_&&(t+=(c??"")+r[d+1]),this._$AH[d]=c}o&&!n&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Mv=class extends Qs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},Pv=class extends Qs{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},Iv=class extends Qs{constructor(t,e,s,n,r){super(t,e,s,n,r),this.type=5}_$AI(t,e=this){if((t=Me(this,t,e,0)??_)===ke)return;const s=this._$AH,n=t===_&&s!==_||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==_&&(s===_||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Dv=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Me(this,t)}};const Wv=Rr.litHtmlPolyfillSupport;Wv?.(Ln,qr),(Rr.litHtmlVersions??=[]).push("3.3.3");const Nv=(i,t,e)=>{const s=e?.renderBefore??t;let n=s._$litPart$;if(n===void 0){const r=e?.renderBefore??null;s._$litPart$=n=new qr(t.insertBefore(ts(),r),r,void 0,e??{})}return n._$AI(i),n};const Vr=globalThis;let Pt=class extends ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nv(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ke}};Pt._$litElement$=!0,Pt.finalized=!0,Vr.litElementHydrateSupport?.({LitElement:Pt});const jv=Vr.litElementPolyfillSupport;jv?.({LitElement:Pt});(Vr.litElementVersions??=[]).push("4.2.2");const j=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};const Hv={attribute:!0,type:String,converter:Rs,reflect:!1,hasChanged:Hr},Rv=(i=Hv,t,e)=>{const{kind:s,metadata:n}=e;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),r.set(e.name,i),s==="accessor"){const{name:o}=e;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,d,i,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(s==="setter"){const{name:o}=e;return function(l){const d=this[o];t.call(this,l),this.requestUpdate(o,d,i,!0,l)}}throw Error("Unsupported decorator location: "+s)};function $(i){return(t,e)=>typeof e=="object"?Rv(i,t,e):((s,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(n,r):void 0})(i,t,e)}function T(i){return $({...i,state:!0,attribute:!1})}const hh=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);function Fv(i,t){return(e,s,n)=>{const r=o=>o.renderRoot?.querySelector(i)??null;return hh(e,s,{get(){return r(this)}})}}function qv(i){return(t,e)=>{const{slot:s,selector:n}={},r="slot"+(s?`[name=${s}]`:":not([name])");return hh(t,e,{get(){const o=this.renderRoot?.querySelector(r),l=o?.assignedElements(i)??[];return n===void 0?l:l.filter(d=>d.matches(n))}})}}const Vv=":host{--border-color: red;--background-color: lightgray;font-family:Arial,sans-serif}#error-fixed-indicator{position:fixed;top:10px;right:10px;cursor:pointer;z-index:100000;padding:5px 10px;width:auto;max-width:90vw;min-width:100px;height:auto;box-shadow:0 4px 8px #0003;border:5px solid white;color:#fff;background-color:red;animation:blink 1s infinite;border-radius:15px;font-size:20px;font-weight:700;font-family:Arial,sans-serif}@keyframes blink{0%,to{background-color:#000}50%{background-color:red}}#error{background-color:var(--background-color);border:3px solid var(--border-color);padding:10px;margin:10px;border-radius:5px}h1{color:red;font-size:24px;margin:0}.error-details{font-size:14px;max-height:200px;overflow:auto}";var Bv=Object.create,Br=Object.defineProperty,Uv=Object.getOwnPropertyDescriptor,uh=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),qe=i=>{throw TypeError(i)},Yv=(i,t,e)=>t in i?Br(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,oc=(i,t)=>Br(i,"name",{value:t,configurable:!0}),Xv=i=>[,,,Bv(i?.[uh("metadata")]??null)],ph=["class","method","getter","setter","accessor","field","value","get","set"],$i=i=>i!==void 0&&typeof i!="function"?qe("Function expected"):i,Gv=(i,t,e,s,n)=>({kind:ph[i],name:t,metadata:s,addInitializer:r=>e._?qe("Already initialized"):n.push($i(r||null))}),Kv=(i,t)=>Yv(t,uh("metadata"),i[3]),zn=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},mh=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=ph[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&Uv(a<4?n:{get[e](){return lc(this,r)},set[e](u){return cc(this,r,u)}},e));a?h&&a<4&&oc(r,(a>2?"set ":a>1?"get ":"")+e):oc(n,e);for(var w=s.length-1;w>=0;w--)c=Gv(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>Jv(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?lc:Qv)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>cc(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?$i(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?qe("Object expected"):($i(o=l.get)&&(m.get=o),$i(o=l.set)&&(m.set=o),$i(o=l.init)&&y.unshift(o));return a||Kv(i,n),m&&Br(n,e,m),h?a^4?r:m:n},Ur=(i,t,e)=>t.has(i)||qe("Cannot "+e),Jv=(i,t)=>Object(t)!==t?qe('Cannot use the "in" operator on this value'):i.has(t),lc=(i,t,e)=>(Ur(i,t,"read from private field"),e?e.call(i):t.get(i)),Zv=(i,t,e)=>t.has(i)?qe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),cc=(i,t,e,s)=>(Ur(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Qv=(i,t,e)=>(Ur(i,t,"access private method"),e),fh,Mn,gh,Pe,Yr;gh=[j("tj-error-element")];let Ie=class extends(Mn=Pt,fh=[$({type:String,reflect:!0})],Mn){constructor(t="An error occurred",e){super(),this.originalCode=void 0,Zv(this,Yr,zn(Pe,8,this)),zn(Pe,11,this),this.message=t,this.originalCode=e}static get is(){return"tj-error-element"}render(){return k`
      <div id="error-fixed-indicator" @click=${()=>this.scrollIntoView({behavior:"smooth"})}>
        Err: ${this.message}
      </div>
      <div id="error">
        <h1>Error: ${this.message}</h1>
        <pre class="error-details">
          ${this.originalCode?this.originalCode:"No code provided."}
        </pre
        >

        <slot></slot>
      </div>
    `}};Pe=Xv(Mn);Yr=new WeakMap;mh(Pe,4,"message",fh,Ie,Yr);Ie=mh(Pe,0,"TjErrorElement",gh,Ie);Ie.styles=[E(Vv)];zn(Pe,1,Ie);function Xr(i,{allowAttributes:t=!0,ignoreGaps:e=!0}={}){let s="div",n=null,r=[],o=[],l={};const d=/(^[a-z][\w-]*)|#[\w-]+|\.[\w:-]+|\[\s*([\w-]+)(?:\s*=\s*(['"]?)(.*?)\3)?\s*\]/gi;let c=0;for(;;){const p=d.exec(i);if(!p||p.index!==c){if(!e&&p&&p.index>c)break;break}const a=p[0];if(a[0]==="#")n=a.slice(1);else if(a[0]===".")r.push(a.slice(1));else if(a[0]==="["){if(!t)throw new Error(`Attributes not allowed: '${a}'`);const f=p[2],h=p[4]||void 0;o.push({name:f,value:h}),l[f]=h}else s=a;c+=a.length}return{tag:s,id:n,classes:r,attrs:o,attrsMap:l,length:c,rest:i.slice(c)}}function tb(i){return typeof i.beforeLayoutCallback=="function"}function eb(i,t,e){var s;const n=/^(=|\+|!|-|\/|)([0-9]+(?:\.[0-9]+)?|);?/,r=e.replace(n,""),o=Xr(r),l={...Array.from(i.attributes).reduce((a,f)=>(a[f.name]=f.value,a),{})};if(delete l.layout,o.classes.length>0){const a=[...((s=l.class)==null?void 0:s.split(/\s+/).filter(Boolean))??[],...o.classes];l.class=Array.from(new Set(a)).join(" ")}o.id&&(l.id=o.id);const d=o.tag||"section";let c=!1,p=Kd(d,{...l,layoutOrig:e});if(d.includes("-")&&!customElements.get(d))console.warn(`Custom element <${d}> is not registered.`),p=new Ie(`Custom element <${d}> is not registered.`,i.outerHTML),i.replaceWith(p),p.append(i),c=!0;else{const a=Array.from(i.children);tb(p)&&(c=p.beforeLayoutCallback(i,p,a)===!1),p.__ORIG_ELEMENT__=i,p.append(...Array.from(i.children)),i.replaceWith(p)}return{replacementElement:p,skipChildren:c}}function qs(i,t={}){const{recursive:e=!0}=t,s=[];if(Array.isArray(i))return i.forEach(l=>s.push(...qs(l,t))),s;if(!(i instanceof HTMLElement))return[];const n=i.getAttribute("layout");let r=!1,o=i;return n&&({replacementElement:o,skipChildren:r}=eb(i,t,n)),e&&!r&&Array.from(o.children).forEach(l=>s.push(...qs(l,t))),s}const dn=/^(=|\+|!|-|\/|)([0-9]+(?:\.[0-9]+)?|)(;|$)/;let ib=class{constructor(t,e=!1){this.debug=e,this.currentContainerNode=null,this.containerPath=[],this.containerIndex=[0],this.controlLayoutIndex=[],this.lastFixedI=20,this.currentContainerNode=this.rootNode=t,this.containerPath.push(this.rootNode)}getI(t){const e=t.tagName,s=t.getAttribute("layout"),n={i:-99,variant:"new",tag:"hr",hi:null};if(s){const r=s.match(dn);if(r){const o=r[1];n.variant=o==="="||o==="+"?"append":o==="!"||o==="-"?"skip":o==="/"?"close":"new",r[2]!==""&&(n.i=parseFloat(r[2])*10)}}if(e==="HR"&&s===null)return null;if(n.variant==="close"){if(e!=="HR")throw new Error("layout close syntax (/i;) is only supported on HR control elements");if(n.i===-99){const r=this.controlLayoutIndex[this.controlLayoutIndex.length-1];if(r===void 0)throw new Error("Cannot close current layout level: no open HR layout wrapper");n.i=r}return n}if(e==="HR")return n.i===-99?n.i=this.lastFixedI+5:this.lastFixedI=n.i,n;if(e.startsWith("H")&&e.length===2){let r=e.substring(1);return n.tag="h",n.hi=parseInt(r),r==="1"&&(r="2"),n.i===-99&&(n.i=parseInt(r)*10),this.lastFixedI=n.i,n}return null}stripControlOnlyLayout(t){const e=t.getAttribute("layout");if(!e)return;const s=e.match(dn);s&&e.slice(s[0].length).trim()===""&&t.removeAttribute("layout")}getAttributeRecords(t,e=!1){const s={},n=t.getAttribute("layout");let r=null;if(n){const o=n.replace(dn,"").trim();o!==""&&(r=Xr(o))}for(const o of Array.from(t.attributes))o.name.startsWith("section-")?s[o.name.replace(/^section-/,"")]=o.value:(o.name.startsWith("layout")||e)&&(s[o.name]=o.value,t.removeAttribute(o.name));return e||Array.from(t.classList).forEach(o=>{o.startsWith("section-")&&(s.class=(s.class?s.class+" ":"")+o.replace(/^section-/,""),t.classList.remove(o))}),r&&(r.classes.forEach(o=>{s.class=(s.class?s.class+" ":"")+o+" "}),r.attrs.forEach(o=>{s[o.name]=o.value??""}),r.id&&(s.id=r.id)),s}createNewContainerNode(t,e){const s=this.getAttributeRecords(t,t.tagName==="HR"),n=Kd("section",s);return n.__IT=e,n}arrangeSingleNode(t,e){let s=0;for(s=0;s<this.containerIndex.length&&!(this.containerIndex[s]>=e.i);s++);let n;if(e.variant==="append"){const o=this.containerPath[s];if(!o||this.containerIndex[s]!==e.i)throw new Error(`Cannot append to layout level ${e.i/10}: no existing section at this level`);n=o,this.stripControlOnlyLayout(t)}else n=this.createNewContainerNode(t,e);const r=this.containerPath[s-1];if(!r)throw new Error(`Cannot create layout level ${e.i/10}: no parent container`);this.containerPath.length=s,this.containerIndex.length=s,t.tagName==="HR"&&(t.setAttribute("aria-hidden","true"),t.setAttribute("hidden","hidden")),n.appendChild(t),r.appendChild(n),this.containerPath.push(n),this.containerIndex.push(e.i),this.currentContainerNode=n,t.tagName==="HR"&&e.variant==="new"&&this.controlLayoutIndex.push(e.i)}closeLevel(t){for(;this.containerIndex.length>1&&this.containerIndex[this.containerIndex.length-1]>=t;)this.containerIndex.pop(),this.containerPath.pop();for(;this.controlLayoutIndex.length&&this.controlLayoutIndex[this.controlLayoutIndex.length-1]>=t;)this.controlLayoutIndex.pop();this.currentContainerNode=this.containerPath[this.containerPath.length-1]??this.rootNode}appendToCurrentContainer(t){if(this.currentContainerNode===null)throw new Error("No current container node set");this.currentContainerNode.appendChild(t)}arrange(t){for(const e of t){if(e.nodeType!==Node.ELEMENT_NODE){this.appendToCurrentContainer(e);continue}const s=e,n=this.getI(s);if(!n){this.appendToCurrentContainer(e);continue}if(n.variant==="close"){s.parentNode&&s.parentNode.removeChild(s),this.closeLevel(n.i);continue}if(n.variant==="skip"){this.stripControlOnlyLayout(s),this.appendToCurrentContainer(e);continue}this.arrangeSingleNode(s,n)}}};const sb=new Set(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]),nb=3,rb=4;let ab=class{constructor(){this.name="text-block"}parse(t){var e;const s=Array.from(t.querySelectorAll("*")).reverse();for(const o of s){if(!o.innerHTML.includes("#["))continue;const l=this.parseLine(o.innerHTML,t.ownerDocument);l&&o.replaceWith(l)}const n=t.ownerDocument.createTreeWalker(t,rb),r=[];for(;n.nextNode();){const o=n.currentNode;o.nodeType===nb&&(e=o.textContent)!=null&&e.includes("#[")&&r.push(o)}for(const o of r)this.parseTextNode(o)}parseTextNode(t){const e=t.data.split(/(\r?\n)/),s=t.ownerDocument.createDocumentFragment();let n=!1;for(const r of e){if(/^\r?\n$/.test(r)){s.append(r);continue}const o=this.parseLine(r,t.ownerDocument);o?(s.append(o),n=!0):s.append(r)}n&&t.replaceWith(s)}parseLine(t,e){const s=t.match(/^\s*#\[(.*)\]\s*$/);if(!s||s[1].includes("#["))return null;const n=s[1].replaceAll("&quot;",'"').replaceAll("&#39;","'").replaceAll("&#x27;","'").replaceAll("“",'"').replaceAll("”",'"').replaceAll("‘","'").replaceAll("’","'");try{return this.createElement(n,e)}catch(r){return console.warn("[tj-content-pane] Unable to parse text block:",t,r),null}}createElement(t,e){const{definition:s,content:n}=this.splitContent(t);if(!/^[a-z][\w-]*/i.test(s))throw new Error("The text block must start with an element name.");const r=Xr(s,{allowAttributes:!0}),o=r.rest.trim(),l=e.createElement(r.tag);r.id&&(l.id=r.id),l.classList.add(...r.classes);for(const d of r.attrs)this.applyAttribute(l,d);for(const d of this.parseAttributes(o))this.applyAttribute(l,d);if(n!==void 0){if(sb.has(r.tag.toLowerCase()))throw new Error(`The void element <${r.tag}> cannot have content.`);l.innerHTML=n.trim()}return l}splitContent(t){let e=null;for(let s=0;s<t.length;s++){const n=t[s];if(e){n===e&&(e=null);continue}if(n==='"'||n==="'"){e=n;continue}if(n===">")return{definition:t.slice(0,s).trim(),content:t.slice(s+1)};if(t.startsWith("&gt;",s))return{definition:t.slice(0,s).trim(),content:t.slice(s+4)}}return{definition:t.trim()}}parseAttributes(t){if(!t)return[];const e=[],s=/([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gy;let n=0;for(;n<t.length;){for(;/\s/.test(t[n]??"");)n++;if(n>=t.length)break;s.lastIndex=n;const r=s.exec(t);if(!r||r.index!==n)throw new Error(`Invalid attribute syntax near '${t.slice(n)}'.`);const o=r[0].includes("=");e.push({name:r[1],value:o?r[2]??r[3]??r[4]??"":void 0}),n=s.lastIndex}return e}applyAttribute(t,e){if(e.name.toLowerCase()==="class"&&e.value){t.classList.add(...e.value.split(/\s+/).filter(Boolean));return}t.setAttribute(e.name,e.value??"")}};var ob=Object.create,Gr=Object.defineProperty,lb=Object.getOwnPropertyDescriptor,vh=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Ve=i=>{throw TypeError(i)},cb=(i,t,e)=>t in i?Gr(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,dc=(i,t)=>Gr(i,"name",{value:t,configurable:!0}),db=i=>[,,,ob(i?.[vh("metadata")]??null)],bh=["class","method","getter","setter","accessor","field","value","get","set"],ki=i=>i!==void 0&&typeof i!="function"?Ve("Function expected"):i,hb=(i,t,e,s,n)=>({kind:bh[i],name:t,metadata:s,addInitializer:r=>e._?Ve("Already initialized"):n.push(ki(r||null))}),ub=(i,t)=>cb(t,vh("metadata"),i[3]),xi=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},Kr=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=bh[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&lb(a<4?n:{get[e](){return hc(this,r)},set[e](u){return pc(this,r,u)}},e));a?h&&a<4&&dc(r,(a>2?"set ":a>1?"get ":"")+e):dc(n,e);for(var w=s.length-1;w>=0;w--)c=hb(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>pb(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?hc:mb)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>pc(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?ki(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Ve("Object expected"):(ki(o=l.get)&&(m.get=o),ki(o=l.set)&&(m.set=o),ki(o=l.init)&&y.unshift(o));return a||ub(i,n),m&&Gr(n,e,m),h?a^4?r:m:n},Jr=(i,t,e)=>t.has(i)||Ve("Cannot "+e),pb=(i,t)=>Object(t)!==t?Ve('Cannot use the "in" operator on this value'):i.has(t),hc=(i,t,e)=>(Jr(i,t,"read from private field"),e?e.call(i):t.get(i)),uc=(i,t,e)=>t.has(i)?Ve("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),pc=(i,t,e,s)=>(Jr(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),mb=(i,t,e)=>(Jr(i,t,"access private method"),e),yh,wh,Pn,$h,Vt,Zr,Qr;mv("tj_sess_state",{lhref:"",scrollpos:0,sessstart:Date.now(),pages:0});new Jd(100,200);const kh=new Map,mc=new ab;kh.set(mc.name,mc);$h=[j("tj-content-pane")];let is=class extends(Pn=Js(cs(ih(ie))),wh=[$({type:Boolean,reflect:!0,attribute:"skip-layout"})],yh=[$({type:String,reflect:!0,attribute:"pre-parser"})],Pn){constructor(){super(),uc(this,Zr,xi(Vt,8,this,!1)),xi(Vt,11,this),uc(this,Qr,xi(Vt,12,this,"")),xi(Vt,15,this)}static get is(){return"tj-content-pane"}createRenderRoot(){return this}arrange(){const t=new lv("SectionTreeBuilder");this.log("arrange() called"),this.applyPreParsers();const e=new ib(this),s=Array.from(this.children);if(e.arrange(s),this.debug("Firing afterArrange event"),this.dispatchEvent(new CustomEvent("afterArrange",{detail:{target:this},bubbles:!0})),this.skipLayout){this.warn("Skipping layout as per skipLayout property.");return}qs(Array.from(this.children),{recursive:!0}),t.lap("after arrange")}applyPreParsers(){for(const t of this.preParser.split(/\s+/).filter(Boolean)){const e=kh.get(t);if(!e){this.warn(`Unknown pre-parser '${t}'.`);continue}e.parse(this)}}async connectedCallback(){await Wr(),super.connectedCallback(),this.arrange()}};Vt=db(Pn);Zr=new WeakMap;Qr=new WeakMap;Kr(Vt,4,"skipLayout",wh,is,Zr);Kr(Vt,4,"preParser",yh,is,Qr);is=Kr(Vt,0,"ContentAreaElement2",$h,is);xi(Vt,1,is);const fb=/^@var\(\s*(--[a-zA-Z0-9_-]+)\s*\)$/;function gb(i,t,e){const s=t.trim();if(!s)throw new Error(`Empty selector alternative at position ${e+1} in data-query "${i}".`);if(!s.startsWith("@var"))return{type:"selector",selector:s};const n=s.match(fb);if(!n)throw new Error(`Invalid CSS variable selector "${s}" in data-query "${i}". Expected @var(--custom-property).`);return{type:"variable",name:n[1],expression:s}}function fc(i,t,e){try{return Array.from(t.querySelectorAll(i))}catch(s){const n=s instanceof Error?s.message:String(s);throw new Error(`Invalid CSS selector "${i}" ${e}: ${n}`)}}function vb(i,t){console.error(i instanceof Error?i:new Error(String(i)),t)}function bb(i,t){let e;for(const[s,n]of i.split("|").entries())try{const r=gb(i,n,s);if(r.type==="selector"){const d=fc(r.selector,t,`in data-query "${i}"`);if(d.length>0)return{elements:d,source:"selector"};continue}e??(e=getComputedStyle(t));const o=e.getPropertyValue(r.name).trim();if(!o)continue;const l=fc(o,t,`resolved from ${r.expression}`);if(l.length>0)return{elements:l,source:"variable"}}catch(r){vb(r,t)}return{elements:[],source:null}}function gc({slotElement:i,slotName:t,elements:e},s){e.forEach(n=>{n.hasAttribute("slot")&&!s.has(n)||(i.getAttributeNames().filter(r=>r.startsWith("data-set-attribute-")).forEach(r=>{const o=r.replace(/^data-set-attribute-/,"");if(!n.hasAttribute(o)){const l=i.getAttribute(r);l!==null&&n.setAttribute(o,l)}}),t!==""&&(n.setAttribute("slot",t),s.add(n)))})}function ds(i){class t extends i{beforeLayoutCallback(s,n,r){return!1}firstUpdated(s){var n,r;(n=super.firstUpdated)==null||n.call(this,s);const o=((r=this.shadowRoot)==null?void 0:r.querySelectorAll("slot[data-query]"))??[],l=[],d=new WeakSet;for(const c of Array.from(o)){if(!(c instanceof HTMLSlotElement))continue;const p=c.getAttribute("name")??"";if(p!==""&&c.assignedElements({flatten:!0}).length>0)continue;const a=c.getAttribute("data-query");if(a)try{const f=bb(a,this),h={slotElement:c,slotName:p,elements:f.elements};f.source==="variable"?l.push(h):gc(h,d)}catch(f){const h=f instanceof Error?f.message:String(f);console.error(new Error(`Failed to process data-query "${a}" for slot "${p}": ${h}`),c)}}l.forEach(c=>gc(c,d)),qs(Array.from(this.children),{recursive:!0})}}return t}function yb(i){class t extends i{#t;connectedCallback(){super.connectedCallback(),this.ensureDefaultStyleClass(),this.#e()}disconnectedCallback(){this.#t?.disconnect(),this.#t=void 0,super.disconnectedCallback()}ensureDefaultStyleClass(){Array.from(this.classList).some(n=>n.startsWith("style-"))||this.classList.add("style-default")}#e(){this.#t===void 0&&(this.#t=new MutationObserver(()=>this.ensureDefaultStyleClass()),this.#t.observe(this,{attributes:!0,attributeFilter:["class"]}))}}return t}const wb={logging:!0,slotVisibility:!1,eventBinding:!1,breakpoints:!1,setDefaultStyle:!0,subLayoutApply:!1};function it(i={}){const t={...wb,...i};let e=Pt;return e=ih(e),t.setDefaultStyle&&(e=yb(e)),t.logging&&(e=cs(e)),t.slotVisibility&&(e=Nr(e)),t.breakpoints&&(e=gv(e)),t.eventBinding&&(e=Js(e)),t.subLayoutApply&&(e=ds(e)),e}const $b=`/* General Purpose SCSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
}

dialog {
  color: inherit;
  background: transparent;
  border: none;
}

a,
i {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

slot {
  display: contents;
}

:host {
  --container-width: var(--nt-container-width, 100%);
  --nte-navbar-position: static;
  --nte-navbar-scroll-threshold: 1;
  --nte-navbar-top: 0;
  --nte-navbar-background: Canvas;
  --nte-navbar-background-at-top: var(--nte-navbar-background);
  --nte-navbar-shadow: 0 0.25rem 1rem color-mix(in srgb, currentColor 12%, transparent);
  --nte-navbar-overlay-offset: 0px;
  display: block;
  position: var(--nte-navbar-position);
  inset-block-start: var(--nte-navbar-top);
  z-index: var(--nt-navbar-z-index, 10);
  width: 100%;
  background: var(--nte-navbar-background);
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

:host(.with-shadow) {
  box-shadow: var(--nte-navbar-shadow);
}

:host(.with-shadow-on-scroll.is-below-threshold) {
  box-shadow: var(--nte-navbar-shadow);
}

:host(.with-transparent-at-top:not(.is-below-threshold)) {
  background: transparent;
  box-shadow: none;
}

:host(.with-overlay-at-top:not(.is-below-threshold)) {
  margin-block-end: calc(-1 * var(--nte-navbar-overlay-offset));
}

#navbar {
  display: block;
  width: 100%;
}`;var kb=Object.create,ta=Object.defineProperty,xb=Object.getOwnPropertyDescriptor,xh=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Sh=i=>{throw TypeError(i)},Sb=(i,t,e)=>t in i?ta(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,_b=(i,t)=>ta(i,"name",{value:t,configurable:!0}),Ab=i=>[,,,kb(i?.[xh("metadata")]??null)],Cb=["class","method","getter","setter","accessor","field","value","get","set"],_h=i=>i!==void 0&&typeof i!="function"?Sh("Function expected"):i,Eb=(i,t,e,s,n)=>({kind:Cb[i],name:t,metadata:s,addInitializer:r=>e._?Sh("Already initialized"):n.push(_h(r||null))}),Tb=(i,t)=>Sb(t,xh("metadata"),i[3]),Ob=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)r[n].call(e);return s},Lb=(i,t,e,s,n,r)=>{var o,l,d,c=t&7,p=!1,a=0,f=i[a]||(i[a]=[]),h=c&&(n=n.prototype,c<5&&(c>3||!p)&&xb(n,e));_b(n,e);for(var g=s.length-1;g>=0;g--)d=Eb(c,e,l={},i[3],f),o=(0,s[g])(n,d),l._=1,_h(o)&&(n=o);return Tb(i,n),h&&ta(n,e,h),p?c^4?r:h:n},Ah,ea,Ch;Ah=[j("nte-navbar")];const Eh=class extends(Ch=it({})){constructor(){super(...arguments),this.scrollThreshold=1,this.styleObserver=new MutationObserver(()=>this.refreshComponentStyle()),this._onScroll=()=>this.updateScrollState(),this._onSlotChange=()=>this.updateScrollState()}static get is(){return"nte-navbar"}connectedCallback(){super.connectedCallback(),this.styleObserver.observe(this,{attributes:!0,attributeFilter:["class","style"]}),window.addEventListener("scroll",this._onScroll,{passive:!0}),this.refreshComponentStyle()}disconnectedCallback(){this.styleObserver.disconnect(),window.removeEventListener("scroll",this._onScroll),super.disconnectedCallback()}refreshComponentStyle(){const t=this.getComponentStyle();this.scrollThreshold=t.scrollThreshold,this.updateScrollState()}getComponentStyle(){const t=getComputedStyle(this).getPropertyValue("--nte-navbar-scroll-threshold").trim(),e=Number.parseFloat(t);return{scrollThreshold:Number.isFinite(e)?Math.max(0,e):1}}updateScrollState(){const t=Math.max(0,window.scrollY),e=t>0,s=t>this.scrollThreshold;this.classList.toggle("is-scrolled",e),this.classList.toggle("is-below-threshold",s),this.syncLineScrollState(e,s)}syncLineScrollState(t,e){for(const s of Array.from(this.querySelectorAll("nte-navbar-line")))s.classList.toggle("is-navbar-scrolled",t),s.classList.toggle("is-navbar-below-threshold",e)}render(){return k`<div id="navbar" part="navbar"><slot @slotchange=${this._onSlotChange}></slot></div>`}};Eh.styles=[E($b)];let In=Eh;ea=Ab(Ch);In=Lb(ea,0,"NteNavbar",Ah,In);Ob(ea,1,In);const zb=`/* General Purpose SCSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
}

dialog {
  color: inherit;
  background: transparent;
  border: none;
}

a,
i {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

slot {
  display: contents;
}

:host {
  --height: auto;
  --height-scrolled: var(--height);
  --background: transparent;
  --text-color: var(--nt-text);
  display: block;
  position: relative;
  isolation: isolate;
  width: 100%;
  block-size: var(--height);
  max-block-size: var(--height);
  min-block-size: 0;
  overflow: clip;
  color: var(--text-color);
  background: var(--background);
  transition: block-size 0.2s ease-in-out, max-block-size 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

:host(.with-shrink-on-scroll) {
  max-block-size: var(--height);
}

:host(.is-navbar-below-threshold.with-shrink-on-scroll) {
  block-size: var(--height-scrolled);
  max-block-size: var(--height-scrolled);
}

:host(.with-collapse-on-scroll),
:host(.hide-on-scroll) {
  max-block-size: var(--height);
}

:host(.is-navbar-below-threshold.with-collapse-on-scroll),
:host(.is-navbar-below-threshold.hide-on-scroll) {
  block-size: 0;
  max-block-size: 0;
  opacity: 0;
}

#line {
  width: 100%;
  block-size: 100%;
  min-block-size: 0;
}

#container {
  width: min(100%, var(--container-width, var(--nt-container-width, 100%)));
  block-size: 100%;
  min-block-size: 0;
  margin-inline: auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
}

.region {
  min-width: 0;
  min-block-size: 0;
  block-size: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.region ::slotted(*) {
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

#start {
  justify-content: flex-start;
}

#center {
  justify-content: center;
  justify-self: center;
}

#end {
  justify-content: flex-end;
}

#container:has(> #center > slot.slot-empty) {
  display: flex;
  justify-content: space-between;
}

#container:has(> #center > slot.slot-empty) #start,
#container:has(> #center > slot.slot-empty) #end {
  flex: 0 1 auto;
}

#container:has(> #center > slot.slot-empty) #center {
  display: none;
}

.region:has(> slot.slot-empty) {
  visibility: hidden;
  pointer-events: none;
}`;var Mb=Object.create,ia=Object.defineProperty,Pb=Object.getOwnPropertyDescriptor,Th=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Oh=i=>{throw TypeError(i)},Ib=(i,t,e)=>t in i?ia(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Db=(i,t)=>ia(i,"name",{value:t,configurable:!0}),Wb=i=>[,,,Mb(i?.[Th("metadata")]??null)],Nb=["class","method","getter","setter","accessor","field","value","get","set"],Lh=i=>i!==void 0&&typeof i!="function"?Oh("Function expected"):i,jb=(i,t,e,s,n)=>({kind:Nb[i],name:t,metadata:s,addInitializer:r=>e._?Oh("Already initialized"):n.push(Lh(r||null))}),Hb=(i,t)=>Ib(t,Th("metadata"),i[3]),Rb=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)r[n].call(e);return s},Fb=(i,t,e,s,n,r)=>{var o,l,d,c=t&7,p=!1,a=0,f=i[a]||(i[a]=[]),h=c&&(n=n.prototype,c<5&&(c>3||!p)&&Pb(n,e));Db(n,e);for(var g=s.length-1;g>=0;g--)d=jb(c,e,l={},i[3],f),o=(0,s[g])(n,d),l._=1,Lh(o)&&(n=o);return Hb(i,n),h&&ia(n,e,h),p?c^4?r:h:n},zh,sa,Mh;zh=[j("nte-navbar-line")];const Ph=class extends(Mh=it({slotVisibility:!0})){static get is(){return"nte-navbar-line"}render(){return k`
      <div id="line" part="line">
        <div id="container" part="container">
          <div id="start" class="region" part="start"><slot name="start"></slot></div>
          <div id="center" class="region" part="center"><slot name="center"></slot></div>
          <div id="end" class="region" part="end"><slot name="end"></slot></div>
        </div>
      </div>
      <!-- Der Default-Slot bleibt als sichtbarer Diagnose-Fallback bestehen; Inhalte darin zeigen einen falschen Slot-Namen an. -->
      <slot NO-DEFAULT-SLOT></slot>
    `}};Ph.styles=[E(zb)];let Dn=Ph;sa=Wb(Mh);Dn=Fb(sa,0,"NteNavbarLine",zh,Dn);Rb(sa,1,Dn);const gt=i=>i??_,qb=`/* General Purpose SCSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
}

dialog {
  color: inherit;
  background: transparent;
  border: none;
}

a,
i {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

slot {
  display: contents;
}

:host {
  --nte-nav-flow: row;
  --nte-nav-align: stretch;
  --nte-nav-justify: flex-start;
  --nte-nav-gap: 0;
  --nte-nav-item-gap: 0.5rem;
  --nte-nav-submenu-gap: 0.25rem;
  --nte-nav-submenu-min-inline-size: 12rem;
  --nte-nav-submenu-inline-size: max(100%, var(--nte-nav-submenu-min-inline-size));
  --nte-nav-submenu-max-block-size: min(70vh, 32rem);
  --nte-nav-submenu-position: absolute;
  --nte-nav-submenu-inset-block-start: 100%;
  --nte-nav-submenu-inset-inline-start: 0;
  --nte-nav-nested-submenu-inset-block-start: 0;
  --nte-nav-nested-submenu-inset-inline-start: 100%;
  --nte-nav-submenu-position-area: block-end span-inline-end;
  --nte-nav-nested-submenu-position-area: inline-end span-block-end;
  --nte-nav-submenu-enter-transform: translateY(-0.35rem);
  --nte-nav-nested-submenu-enter-transform: translateX(-0.35rem);
  --nte-nav-transition-duration: 160ms;
  display: block;
  inline-size: fit-content;
  max-inline-size: 100%;
}

#nav {
  display: block;
}

#list {
  display: flex;
  flex-flow: var(--nte-nav-flow) nowrap;
  align-items: var(--nte-nav-align);
  justify-content: var(--nte-nav-justify);
  gap: var(--nte-nav-gap);
  min-inline-size: 0;
}

#list > slot {
  display: contents;
}`;var Vb=Object.create,na=Object.defineProperty,Bb=Object.getOwnPropertyDescriptor,Ih=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Be=i=>{throw TypeError(i)},Ub=(i,t,e)=>t in i?na(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,vc=(i,t)=>na(i,"name",{value:t,configurable:!0}),Yb=i=>[,,,Vb(i?.[Ih("metadata")]??null)],Dh=["class","method","getter","setter","accessor","field","value","get","set"],Si=i=>i!==void 0&&typeof i!="function"?Be("Function expected"):i,Xb=(i,t,e,s,n)=>({kind:Dh[i],name:t,metadata:s,addInitializer:r=>e._?Be("Already initialized"):n.push(Si(r||null))}),Gb=(i,t)=>Ub(t,Ih("metadata"),i[3]),Wn=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},Wh=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Dh[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&Bb(a<4?n:{get[e](){return bc(this,r)},set[e](u){return yc(this,r,u)}},e));a?h&&a<4&&vc(r,(a>2?"set ":a>1?"get ":"")+e):vc(n,e);for(var w=s.length-1;w>=0;w--)c=Xb(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>Kb(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?bc:Zb)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>yc(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Si(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Be("Object expected"):(Si(o=l.get)&&(m.get=o),Si(o=l.set)&&(m.set=o),Si(o=l.init)&&y.unshift(o));return a||Gb(i,n),m&&na(n,e,m),h?a^4?r:m:n},ra=(i,t,e)=>t.has(i)||Be("Cannot "+e),Kb=(i,t)=>Object(t)!==t?Be('Cannot use the "in" operator on this value'):i.has(t),bc=(i,t,e)=>(ra(i,t,"read from private field"),e?e.call(i):t.get(i)),Jb=(i,t,e)=>t.has(i)?Be("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),yc=(i,t,e,s)=>(ra(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Zb=(i,t,e)=>(ra(i,t,"access private method"),e),Nh,Nn,jh,De,aa;jh=[j("nte-nav")];let ss=class extends(Nn=it(),Nh=[$({type:String,reflect:!0,attribute:"aria-label"})],Nn){constructor(){super(...arguments),Jb(this,aa,Wn(De,8,this,"")),Wn(De,11,this)}render(){return super.render(),k`
      <nav id="nav" part="nav" aria-label=${gt(this.ariaLabel||void 0)}>
        <div id="list" part="list" role="list">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </nav>
    `}_onSlotChange(t){const e=t.currentTarget.assignedElements({flatten:!0}).filter(n=>n.matches("nte-nav-item")),s=getComputedStyle(this).getPropertyValue("--nte-nav-flow").trim()==="column";e.forEach(n=>{const r=Array.from(n.children).some(o=>o.matches("nte-nav-item"));n.toggleAttribute("submenu-popover",r&&!s)})}};De=Yb(Nn);aa=new WeakMap;Wh(De,4,"ariaLabel",Nh,ss,aa);ss=Wh(De,0,"NteNav",jh,ss);ss.styles=[E(qb)];Wn(De,1,ss);const Qb=`/* General Purpose SCSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  background: none;
  border: none;
  outline: none;
}

dialog {
  color: inherit;
  background: transparent;
  border: none;
}

a,
i {
  color: inherit;
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

slot {
  display: contents;
}

slot.slot-empty {
  display: none !important;
}

:host {
  --order: 0;
  display: block;
  position: relative;
  order: var(--order);
  min-inline-size: 0;
}

#link,
#text,
#disclosure,
#toggle {
  display: flex;
  align-items: center;
}

#item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: stretch;
  min-block-size: 100%;
}

#details {
  display: contents;
}

#link,
#text,
#disclosure {
  flex: 1 1 auto;
  min-inline-size: 0;
  gap: var(--nte-nav-item-gap);
}

#label {
  min-inline-size: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#link,
#text,
#disclosure {
  grid-column: 1/-1;
  grid-row: 1;
}

#item:has(#toggle) > #link {
  grid-column: 1;
}

#toggle {
  grid-column: 2;
  grid-row: 1;
  flex: 0 0 auto;
  justify-content: center;
}

#disclosure,
#toggle {
  anchor-name: --nte-nav-submenu-anchor;
  list-style: none;
}

#disclosure::-webkit-details-marker,
#toggle::-webkit-details-marker {
  display: none;
}

#icon:has(> slot.slot-empty) {
  display: none !important;
}

#icon,
#indicator {
  flex: 0 0 auto;
}

#indicator {
  inline-size: 1em;
  block-size: 1em;
  transition: transform var(--nte-nav-transition-duration) ease;
}

#details[open] #indicator,
#item:has(#submenu:popover-open) #indicator {
  transform: rotate(180deg);
}

#submenu {
  z-index: 10;
  display: grid;
  grid-column: 1/-1;
  grid-row: 2;
  grid-template-rows: 0fr;
  inline-size: var(--nte-nav-submenu-inline-size);
  min-inline-size: var(--nte-nav-submenu-min-inline-size);
  max-block-size: var(--nte-nav-submenu-max-block-size);
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: var(--nte-nav-submenu-position);
  inset-block-start: var(--nte-nav-submenu-inset-block-start);
  inset-inline-start: var(--nte-nav-submenu-inset-inline-start);
  opacity: 0;
  transform: var(--nte-nav-submenu-enter-transform);
  visibility: hidden;
  pointer-events: none;
  transition: grid-template-rows var(--nte-nav-transition-duration) ease, opacity var(--nte-nav-transition-duration) ease, transform var(--nte-nav-transition-duration) ease, visibility var(--nte-nav-transition-duration) allow-discrete;
}

#details[open] #submenu {
  grid-template-rows: 1fr;
  margin-block-start: var(--nte-nav-submenu-gap);
  opacity: 1;
  transform: none;
  visibility: visible;
  pointer-events: auto;
}

#submenu[popover] {
  inline-size: max-content;
  max-inline-size: calc(100vw - 2rem);
  margin: var(--nte-nav-submenu-gap) 0 0;
  overflow: hidden;
  position: fixed;
  position-anchor: --nte-nav-submenu-anchor;
  position-area: var(--nte-nav-submenu-position-area);
  position-try-fallbacks: flip-block, flip-inline;
  inset: auto;
  transition: opacity var(--nte-nav-transition-duration) ease, transform var(--nte-nav-transition-duration) ease, display var(--nte-nav-transition-duration) allow-discrete, overlay var(--nte-nav-transition-duration) allow-discrete;
}

@supports (inline-size: anchor-size(inline)) {
  #submenu[popover] {
    inline-size: max(anchor-size(inline), var(--nte-nav-submenu-min-inline-size));
  }
}
#submenu[popover]:not(:popover-open) {
  display: none;
}

#submenu[popover]:popover-open {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: none;
  visibility: visible;
  pointer-events: auto;
}

@starting-style {
  #submenu[popover]:popover-open {
    opacity: 0;
    transform: var(--nte-nav-submenu-enter-transform);
  }
}
#submenu-inner {
  min-block-size: 0;
  overflow: auto;
}

#submenu slot {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

#submenu slot::slotted(nte-nav-item) {
  --nte-nav-submenu-inset-block-start: var(--nte-nav-nested-submenu-inset-block-start);
  --nte-nav-submenu-inset-inline-start: var(--nte-nav-nested-submenu-inset-inline-start);
  --nte-nav-submenu-position-area: var(--nte-nav-nested-submenu-position-area);
  --nte-nav-submenu-enter-transform: var(--nte-nav-nested-submenu-enter-transform);
}

@media (prefers-reduced-motion: reduce) {
  #indicator,
  #submenu {
    transition-duration: 0.01ms;
  }
}`;var ty=Object.create,oa=Object.defineProperty,ey=Object.getOwnPropertyDescriptor,Hh=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Ue=i=>{throw TypeError(i)},iy=(i,t,e)=>t in i?oa(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,wc=(i,t)=>oa(i,"name",{value:t,configurable:!0}),sy=i=>[,,,ty(i?.[Hh("metadata")]??null)],Rh=["class","method","getter","setter","accessor","field","value","get","set"],_i=i=>i!==void 0&&typeof i!="function"?Ue("Function expected"):i,ny=(i,t,e,s,n)=>({kind:Rh[i],name:t,metadata:s,addInitializer:r=>e._?Ue("Already initialized"):n.push(_i(r||null))}),ry=(i,t)=>iy(t,Hh("metadata"),i[3]),Y=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},It=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Rh[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&ey(a<4?n:{get[e](){return $c(this,r)},set[e](u){return kc(this,r,u)}},e));a?h&&a<4&&wc(r,(a>2?"set ":a>1?"get ":"")+e):wc(n,e);for(var w=s.length-1;w>=0;w--)c=ny(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>ay(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?$c:oy)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>kc(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?_i(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Ue("Object expected"):(_i(o=l.get)&&(m.get=o),_i(o=l.set)&&(m.set=o),_i(o=l.init)&&y.unshift(o));return a||ry(i,n),m&&oa(n,e,m),h?a^4?r:m:n},la=(i,t,e)=>t.has(i)||Ue("Cannot "+e),ay=(i,t)=>Object(t)!==t?Ue('Cannot use the "in" operator on this value'):i.has(t),$c=(i,t,e)=>(la(i,t,"read from private field"),e?e.call(i):t.get(i)),Wt=(i,t,e)=>t.has(i)?Ue("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),kc=(i,t,e,s)=>(la(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),oy=(i,t,e)=>(la(i,t,"access private method"),e),Fh,qh,Vh,Bh,Uh,Yh,Xh,Gh,Kh,jn,Jh,L,ca,da,ha,ua,pa,ma,fa,ga,va;Jh=[j("nte-nav-item")];let ht=class extends(jn=it({slotVisibility:!0}),Kh=[$({type:String,reflect:!0})],Gh=[$({type:String,reflect:!0})],Xh=[$({type:String,reflect:!0})],Yh=[$({type:String})],Uh=[$({type:String,reflect:!0})],Bh=[$({type:Boolean,reflect:!0,attribute:"submenu-popover"})],Vh=[$({type:String,attribute:"submenu-label"})],qh=[T()],Fh=[T()],jn){constructor(){super(...arguments),Wt(this,ca,Y(L,8,this,"")),Y(L,11,this),Wt(this,da,Y(L,12,this,"")),Y(L,15,this),Wt(this,ha,Y(L,16,this,"")),Y(L,19,this),Wt(this,ua,Y(L,20,this,"")),Y(L,23,this),Wt(this,pa,Y(L,24,this,"")),Y(L,27,this),Wt(this,ma,Y(L,28,this,!1)),Y(L,31,this),Wt(this,fa,Y(L,32,this,"Untermenü")),Y(L,35,this),Wt(this,ga,Y(L,36,this,!1)),Y(L,39,this),Wt(this,va,Y(L,40,this,"")),Y(L,43,this)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","listitem"),this._assignNestedItems()}disconnectedCallback(){super.disconnectedCallback()}render(){super.render();const t=this._renderLabel();return k`
      <div id="item" part="item">
        ${this._hasSubmenu?this.submenuPopover?k`
                  ${this.href?this._renderLink(t):_}
                  ${this.href?this._renderIconOnlyPopoverControl():this._renderLabelPopoverControl(t)}
                  ${this._renderSubmenu()}
                `:k`
                  ${this.href?this._renderLink(t):_}
                  <details id="details" part="details">
                    ${this.href?this._renderIconOnlyDisclosure():this._renderLabelDisclosure(t)}
                    ${this._renderSubmenu()}
                  </details>
                `:this.href?this._renderLink(t):k`<span id="text" part="text">${t}</span>`}
      </div>
    `}_renderLink(t){return k`
      <a
        id="link"
        part="link"
        href=${this.href}
        target=${gt(this.target||void 0)}
        rel=${gt(this.rel||void 0)}
        download=${gt(this.hasAttribute("download")?this.download:void 0)}
        aria-current=${gt(this.current||void 0)}
      >
        ${t}
      </a>
    `}_renderLabel(){return k`
      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>
      <span id="label" part="label">
        <slot @slotchange=${this._onLabelSlotChange}></slot>
      </span>
    `}_renderIconOnlyDisclosure(){return k`
      <summary id="toggle" part="toggle" aria-label=${this._submenuAccessibleName()}>
        ${this._renderIndicator()}
      </summary>
    `}_renderLabelDisclosure(t){return k` <summary id="disclosure" part="disclosure">${t} ${this._renderIndicator()}</summary> `}_renderIconOnlyPopoverControl(){return k`
      <button
        id="toggle"
        type="button"
        part="toggle"
        popovertarget="submenu"
        aria-label=${this._submenuAccessibleName()}
      >
        ${this._renderIndicator()}
      </button>
    `}_renderLabelPopoverControl(t){return k`
      <button id="disclosure" type="button" part="disclosure" popovertarget="submenu">
        ${t} ${this._renderIndicator()}
      </button>
    `}_renderSubmenu(){return k`
      <div
        id="submenu"
        part="submenu"
        role="list"
        aria-label=${this._submenuAccessibleName()}
        popover=${gt(this.submenuPopover?"auto":void 0)}
      >
        <div id="submenu-inner" part="submenu-inner">
          <slot name="submenu" @slotchange=${this._onSubmenuSlotChange}></slot>
        </div>
      </div>
    `}_renderIndicator(){return k`
      <svg id="indicator" part="indicator" aria-hidden="true" viewBox="0 0 16 16">
        <path d="m3 6 5 5 5-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
      </svg>
    `}_submenuAccessibleName(){return this._labelText?`${this.submenuLabel}: ${this._labelText}`:this.submenuLabel}_onLabelSlotChange(t){const e=t.currentTarget.assignedNodes({flatten:!0});this._assignNestedItems(),this._labelText=e.filter(s=>!(s instanceof HTMLElement&&s.matches("nte-nav-item"))).map(s=>{var n;return((n=s.textContent)==null?void 0:n.trim())??""}).filter(Boolean).join(" ")}_onSubmenuSlotChange(t){const e=t.currentTarget;this._hasSubmenu=e.assignedElements({flatten:!0}).some(s=>s.matches("nte-nav-item"))}_assignNestedItems(){const t=Array.from(this.children).filter(e=>e.matches("nte-nav-item"));t.forEach(e=>e.setAttribute("slot","submenu")),this._hasSubmenu=t.length>0}};L=sy(jn);ca=new WeakMap;da=new WeakMap;ha=new WeakMap;ua=new WeakMap;pa=new WeakMap;ma=new WeakMap;fa=new WeakMap;ga=new WeakMap;va=new WeakMap;It(L,4,"href",Kh,ht,ca);It(L,4,"target",Gh,ht,da);It(L,4,"rel",Xh,ht,ha);It(L,4,"download",Yh,ht,ua);It(L,4,"current",Uh,ht,pa);It(L,4,"submenuPopover",Bh,ht,ma);It(L,4,"submenuLabel",Vh,ht,fa);It(L,4,"_hasSubmenu",qh,ht,ga);It(L,4,"_labelText",Fh,ht,va);ht=It(L,0,"NteNavItem",Jh,ht);ht.styles=[E(Qb)];Y(L,1,ht);class ly{constructor(t,e=!1){this.delay=t,this.max_delay=e,this.timeout=null,this.startTimeWithMs=0}async wait(){return this.startTimeWithMs===0&&(this.startTimeWithMs=Date.now()),this.timeout&&(this.max_delay===!1||this.startTimeWithMs+this.max_delay>Date.now())&&clearTimeout(this.timeout),new Promise(t=>{this.timeout=setTimeout(()=>{this.startTimeWithMs=0,t(!0)},this.delay)})}debounce(t){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{t()},this.delay)}}const Es={xs:{name:"xs",minWidth:0},sm:{name:"sm",minWidth:576},md:{name:"md",minWidth:768},lg:{name:"lg",minWidth:992},xl:{name:"xl",minWidth:1200},xxl:{name:"xxl",minWidth:1400}};let pi=Es.xs;function hn(){const i=window.innerWidth;let t=Es.xs;for(const e in Es){const s=Es[e];i>=s.minWidth&&(t=s)}return t}if(!window.__nextrap_current_breakpoint){window.__nextrap_current_breakpoint=hn();const i=new ly(200,500);window.addEventListener("resize",async()=>{if(await i.wait(),pi!==hn()){pi=hn(),window.__nextrap_current_breakpoint=pi;const t=new CustomEvent("breakpoint-changed",{detail:{breakpoint:pi}});console.log("Breakpoint changed",pi),window.dispatchEvent(t)}})}const Zh="nte-group-open-close";function cy(i,t){document.dispatchEvent(new CustomEvent(Zh,{bubbles:!1,composed:!0,detail:{open:i,groupName:t}}))}function dy(i,t){const e=document.createElement("template");return e.innerHTML=i.trim(),t.append(e.content.cloneNode(!0)),new Proxy({},{get(s,n){if(n==="fragment")return t;if(typeof n=="string"){const r=t.getElementById(n);if(!r)throw new Error(`❌ Unknown id '${n}'.`);return r}}})}const yl=class yl extends ie{constructor(t){super();const e=this.createRenderRoot();this.$=dy(t,e)}connectedCallback(){super.connectedCallback();let t=this.css;Array.isArray(t)||(t=[t]);const e=t.map(s=>s instanceof nh?s.styleSheet:E(s).styleSheet);this.shadowRoot.adoptedStyleSheets=e}};yl.DEFINITION={classes:[],attributes:{}};let xc=yl;const hy=`:host {
  --size: 2.75rem;
  --color: var(--nt-text, black);
  --color-hover: var(--color);
  --width: max(2px, calc(var(--size) / 11));
  --bar-width: 62%;
  --transition-duration: 200ms;
  display: inline-block;
  inline-size: var(--size);
  block-size: var(--size);
  min-inline-size: 44px;
  min-block-size: 44px;
}

#button {
  padding: 0;
  inline-size: 100%;
  block-size: 100%;
  cursor: pointer;
}

.hamburger {
  display: block;
  appearance: none;
  border: 0 none;
  background: none;
  position: relative;
  color: var(--color);
  touch-action: manipulation;
}
.hamburger:hover {
  color: var(--color-hover);
}
.hamburger:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
.hamburger:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

:host([open]) .hamburger .bar:nth-of-type(1) {
  transform: translate(-50%, -50%) rotate(45deg);
}
:host([open]) .hamburger .bar:nth-of-type(2) {
  opacity: 0;
}
:host([open]) .hamburger .bar:nth-of-type(3) {
  transform: translate(-50%, -50%) rotate(-45deg);
}

:host(:focus-within) .hamburger {
  outline: 2px solid currentColor;
  outline-offset: -2px;
  border-radius: var(--nt-border-radius, 0.375rem);
}

:host(:not([open])) #button:hover .bar:nth-of-type(1) {
  transform: translate(-50%, calc(-50% - var(--size) * 0.22));
}
:host(:not([open])) #button:hover .bar:nth-of-type(2) {
  transform: translate(-50%, -50%);
}
:host(:not([open])) #button:hover .bar:nth-of-type(3) {
  transform: translate(-50%, calc(-50% + var(--size) * 0.22));
}

.bar {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  inline-size: var(--bar-width);
  block-size: var(--width);
  border-radius: var(--width);
  background-color: currentColor;
  transition: transform var(--transition-duration) ease, opacity var(--transition-duration) ease;
}
.bar:nth-of-type(1) {
  transform: translate(-50%, calc(-50% - var(--size) * 0.18));
}
.bar:nth-of-type(2) {
  transform: translate(-50%, -50%);
}
.bar:nth-of-type(3) {
  transform: translate(-50%, calc(-50% + var(--size) * 0.18));
}

@media (prefers-reduced-motion: reduce) {
  .bar {
    transition-duration: 0.01ms;
  }
}`;var uy=Object.create,ba=Object.defineProperty,py=Object.getOwnPropertyDescriptor,Qh=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Ye=i=>{throw TypeError(i)},my=(i,t,e)=>t in i?ba(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Sc=(i,t)=>ba(i,"name",{value:t,configurable:!0}),fy=i=>[,,,uy(i?.[Qh("metadata")]??null)],tu=["class","method","getter","setter","accessor","field","value","get","set"],Ai=i=>i!==void 0&&typeof i!="function"?Ye("Function expected"):i,gy=(i,t,e,s,n)=>({kind:tu[i],name:t,metadata:s,addInitializer:r=>e._?Ye("Already initialized"):n.push(Ai(r||null))}),vy=(i,t)=>my(t,Qh("metadata"),i[3]),st=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},Gt=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=tu[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&py(a<4?n:{get[e](){return _c(this,r)},set[e](u){return Ac(this,r,u)}},e));a?h&&a<4&&Sc(r,(a>2?"set ":a>1?"get ":"")+e):Sc(n,e);for(var w=s.length-1;w>=0;w--)c=gy(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>by(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?_c:yy)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>Ac(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Ai(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Ye("Object expected"):(Ai(o=l.get)&&(m.get=o),Ai(o=l.set)&&(m.set=o),Ai(o=l.init)&&y.unshift(o));return a||vy(i,n),m&&ba(n,e,m),h?a^4?r:m:n},ya=(i,t,e)=>t.has(i)||Ye("Cannot "+e),by=(i,t)=>Object(t)!==t?Ye('Cannot use the "in" operator on this value'):i.has(t),_c=(i,t,e)=>(ya(i,t,"read from private field"),e?e.call(i):t.get(i)),ue=(i,t,e)=>t.has(i)?Ye("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Ac=(i,t,e,s)=>(ya(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),yy=(i,t,e)=>(ya(i,t,"access private method"),e),eu,iu,su,nu,ru,au,ou,lu,Hn,cu,P,wa,$a,ka,xa,Sa,_a,Aa;cu=[j("nte-burger")];let vt=class extends(Hn=it({eventBinding:!0}),lu=[$({type:Boolean,attribute:"open",reflect:!0})],ou=[$({type:Boolean,attribute:"static-state",reflect:!0})],au=[$({type:String,reflect:!0})],ru=[$({type:String,attribute:"aria-label"})],nu=[$({type:String,attribute:"aria-controls"})],su=[$({type:Boolean,reflect:!0})],iu=[$({type:String,reflect:!1,attribute:"data-group-name"})],eu=[K(Zh,{target:"document"})],Hn){constructor(){super(...arguments),st(P,5,this),ue(this,wa,st(P,8,this,!1)),st(P,11,this),ue(this,$a,st(P,12,this,!1)),st(P,15,this),ue(this,ka,st(P,16,this,"Menu")),st(P,19,this),ue(this,xa,st(P,20,this,"")),st(P,23,this),ue(this,Sa,st(P,24,this,"")),st(P,27,this),ue(this,_a,st(P,28,this,!1)),st(P,31,this),ue(this,Aa,st(P,32,this,"")),st(P,35,this)}render(){return k`
      <button
        id="button"
        class="hamburger"
        part="button"
        type="button"
        aria-label=${this.accessibleLabel||this.text||"Menu"}
        aria-expanded=${this.open?"true":"false"}
        aria-controls=${gt(this.controls||void 0)}
        ?disabled=${this.disabled}
        @click=${this.toggle}
      >
        <span class="bar" part="bar bar-top"></span>
        <span class="bar" part="bar bar-middle"></span>
        <span class="bar" part="bar bar-bottom"></span>
      </button>
    `}toggle(){!this.disabled&&!this.staticState&&(this.open=!this.open)}listenEvents(t){t instanceof CustomEvent&&t.detail.groupName===this.dataGroupName&&(this.open=t.detail.open)}update(t){super.update(t),t.has("open")&&this.dataGroupName!==""&&cy(this.open,this.dataGroupName)}};P=fy(Hn);wa=new WeakMap;$a=new WeakMap;ka=new WeakMap;xa=new WeakMap;Sa=new WeakMap;_a=new WeakMap;Aa=new WeakMap;Gt(P,4,"open",lu,vt,wa);Gt(P,4,"staticState",ou,vt,$a);Gt(P,4,"text",au,vt,ka);Gt(P,4,"accessibleLabel",ru,vt,xa);Gt(P,4,"controls",nu,vt,Sa);Gt(P,4,"disabled",su,vt,_a);Gt(P,4,"dataGroupName",iu,vt,Aa);Gt(P,1,"listenEvents",eu,vt);vt=Gt(P,0,"NteBurger",cu,vt);vt.styles=[E(hy)];st(P,1,vt);const dt="",wy=`:host {
  --nte-offcanvas-placement: right;
  --nte-offcanvas-mode: overlay;
  --nte-offcanvas-modal: 1;
  --nte-offcanvas-width: var(--width, 33vw);
  --nte-offcanvas-min-width: var(--min-width, 250px);
  --nte-offcanvas-max-width: var(--max-width, 400px);
  --nte-offcanvas-height: auto;
  --nte-offcanvas-max-height: 100dvh;
  --nte-offcanvas-transition-duration: var(--transition-duration, 240ms);
  --nte-offcanvas-transition-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
  --nte-offcanvas-backdrop-blur: 4px;
  --nte-offcanvas-close-display: flex;
  display: contents;
}

#dialog {
  position: fixed;
  inset: auto;
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  box-sizing: border-box;
  max-width: none;
  max-height: none;
  color: inherit;
  z-index: var(--z-index, 2000);
  background-color: var(--nte-offcanvas-background, var(--nt-surface));
  box-shadow: var(--nte-offcanvas-shadow, none);
  flex-direction: column;
  opacity: 1;
  transition: opacity var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing), transform var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing);
}

#dialog[open] {
  display: flex;
}

#dialog::backdrop {
  background: var(--nte-offcanvas-backdrop, transparent);
  backdrop-filter: blur(var(--nte-offcanvas-backdrop-blur));
  opacity: 1;
  transition: opacity var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing), backdrop-filter var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing);
}

#dialog[data-backdrop=hidden]::backdrop {
  background: transparent;
  backdrop-filter: none;
  pointer-events: none;
}

#dialog[data-state=opening]::backdrop,
#dialog[data-state=open]::backdrop {
  opacity: 1;
}

#dialog[data-state=closing]::backdrop,
#dialog[data-state=closed]::backdrop {
  opacity: 0;
}

#dialog[data-placement=left],
#dialog[data-placement=right] {
  top: 0;
  bottom: 0;
  width: var(--nte-offcanvas-width);
  min-width: var(--nte-offcanvas-min-width);
  max-width: var(--nte-offcanvas-max-width);
  height: 100dvh;
}

#dialog[data-placement=left] {
  left: 0;
  box-shadow: -2.5vw 0 0 2.5vw var(--nte-offcanvas-background, var(--nt-surface)), var(--nte-offcanvas-shadow, 0 0 transparent);
}

#dialog[data-placement=right] {
  right: 0;
  box-shadow: 2.5vw 0 0 2.5vw var(--nte-offcanvas-background, var(--nt-surface)), var(--nte-offcanvas-shadow, 0 0 transparent);
}

#dialog[data-placement=left][data-state=closed] {
  transform: translateX(-100%);
}

#dialog[data-placement=right][data-state=closed] {
  transform: translateX(100%);
}

#dialog[data-placement=left][data-state=opening] {
  animation: nte-offcanvas-open-left var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=left][data-state=closing] {
  animation: nte-offcanvas-close-left var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=right][data-state=opening] {
  animation: nte-offcanvas-open-right var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=right][data-state=closing] {
  animation: nte-offcanvas-close-right var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=left][data-state=open],
#dialog[data-placement=right][data-state=open] {
  transform: translateX(0);
}

#dialog[data-placement=top],
#dialog[data-placement=bottom] {
  left: 0;
  right: 0;
  width: 100vw;
  height: var(--nte-offcanvas-height);
  max-height: var(--nte-offcanvas-max-height);
}

#dialog[data-placement=top] {
  top: 0;
}

#dialog[data-placement=bottom] {
  bottom: 0;
}

#dialog[data-placement=top][data-state=closed] {
  transform: translateY(-100%);
}

#dialog[data-placement=bottom][data-state=closed] {
  transform: translateY(100%);
}

#dialog[data-placement=top][data-state=opening] {
  animation: nte-offcanvas-open-top var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=top][data-state=closing] {
  animation: nte-offcanvas-close-top var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=bottom][data-state=opening] {
  animation: nte-offcanvas-open-bottom var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=bottom][data-state=closing] {
  animation: nte-offcanvas-close-bottom var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=top][data-state=open],
#dialog[data-placement=bottom][data-state=open] {
  transform: translateY(0);
}

#dialog[data-placement=fullscreen] {
  inset: 0;
  width: 100vw;
  height: 100dvh;
}

#dialog[data-placement=fullscreen][data-state=closed] {
  transform: translateY(-100%);
}

#dialog[data-placement=fullscreen][data-state=opening] {
  animation: nte-offcanvas-open-fullscreen var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=fullscreen][data-state=closing] {
  animation: nte-offcanvas-close-fullscreen var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;
}

#dialog[data-placement=fullscreen][data-state=open] {
  transform: translateY(0);
}

#top {
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  flex: 0 0 auto;
  background: var(--header-background, transparent);
}

#header {
  display: flex;
  min-width: 0;
  box-sizing: border-box;
  align-items: center;
  flex: 1 1 auto;
  padding: var(--header-padding, 0);
}

#header:has(> slot[name=header].slot-empty) {
  display: none;
}

#main {
  display: flex;
  width: 100%;
  min-height: min(var(--main-min-height, 0px), 100%);
  max-height: 100%;
  box-sizing: border-box;
  flex: 1 1 auto;
  padding: var(--main-padding, 0);
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: auto;
}

#footer {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  padding: var(--footer-padding, var(--header-padding, 0));
}

#footer:has(> slot.slot-empty) {
  display: none;
}

#close {
  display: var(--nte-offcanvas-close-display);
  margin-inline-start: auto;
  padding: var(--header-padding, 0);
  flex: 0 0 auto;
}

#header:not(:has(> slot[name=header].slot-empty)) + #close {
  padding-inline-start: 0;
}

#default-close {
  appearance: none;
  display: inline-grid;
  place-items: center;
  inline-size: var(--close-btn-size, 2.5rem);
  block-size: var(--close-btn-size, 2.5rem);
  padding: 0;
  border: 0;
  border-radius: var(--close-btn-border-radius, 999px);
  background: var(--close-btn-background, transparent);
  color: var(--close-btn-color, inherit);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}
#default-close::before {
  content: "";
  display: block;
  inline-size: var(--close-btn-icon-size, 1.25rem);
  block-size: var(--close-btn-icon-size, 1.25rem);
  background-color: currentColor;
  mask: var(--nt-icon-close) center/contain no-repeat;
}
#default-close:hover {
  background: var(--close-btn-hover-background, color-mix(in srgb, currentColor 8%, transparent));
}
#default-close:focus-visible {
  outline: 2px solid var(--nt-focus, currentColor);
  outline-offset: 2px;
}
#default-close:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@keyframes nte-offcanvas-open-left {
  0% {
    transform: translateX(-100%);
  }
  82% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes nte-offcanvas-close-left {
  0% {
    transform: translateX(0);
  }
  18% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes nte-offcanvas-open-right {
  0% {
    transform: translateX(100%);
  }
  82% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes nte-offcanvas-close-right {
  0% {
    transform: translateX(0);
  }
  18% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes nte-offcanvas-open-top {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes nte-offcanvas-close-top {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
@keyframes nte-offcanvas-open-fullscreen {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes nte-offcanvas-close-fullscreen {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
@keyframes nte-offcanvas-open-bottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes nte-offcanvas-close-bottom {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}
@media (prefers-reduced-motion: reduce) {
  #dialog,
  #dialog::backdrop {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
  }
}`;var $y=Object.create,Ca=Object.defineProperty,ky=Object.getOwnPropertyDescriptor,du=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Xe=i=>{throw TypeError(i)},xy=(i,t,e)=>t in i?Ca(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Cc=(i,t)=>Ca(i,"name",{value:t,configurable:!0}),Sy=i=>[,,,$y(i?.[du("metadata")]??null)],hu=["class","method","getter","setter","accessor","field","value","get","set"],Ci=i=>i!==void 0&&typeof i!="function"?Xe("Function expected"):i,_y=(i,t,e,s,n)=>({kind:hu[i],name:t,metadata:s,addInitializer:r=>e._?Xe("Already initialized"):n.push(Ci(r||null))}),Ay=(i,t)=>xy(t,du("metadata"),i[3]),Z=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},xt=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=hu[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&ky(a<4?n:{get[e](){return Ec(this,r)},set[e](u){return Tc(this,r,u)}},e));a?h&&a<4&&Cc(r,(a>2?"set ":a>1?"get ":"")+e):Cc(n,e);for(var w=s.length-1;w>=0;w--)c=_y(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>Cy(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?Ec:Ey)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>Tc(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Ci(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Xe("Object expected"):(Ci(o=l.get)&&(m.get=o),Ci(o=l.set)&&(m.set=o),Ci(o=l.init)&&y.unshift(o));return a||Ay(i,n),m&&Ca(n,e,m),h?a^4?r:m:n},Ea=(i,t,e)=>t.has(i)||Xe("Cannot "+e),Cy=(i,t)=>Object(t)!==t?Xe('Cannot use the "in" operator on this value'):i.has(t),Ec=(i,t,e)=>(Ea(i,t,"read from private field"),e?e.call(i):t.get(i)),Kt=(i,t,e)=>t.has(i)?Xe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Tc=(i,t,e,s)=>(Ea(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Ey=(i,t,e)=>(Ea(i,t,"access private method"),e),uu,pu,mu,fu,gu,vu,bu,yu,wu,$u,Rn,ku,z,Ta,Oa,La,za,Ma,Pa,Ia,Da;const Ft={opening:"nte-offcanvas:opening",opened:"nte-offcanvas:opened",closing:"nte-offcanvas:closing",closed:"nte-offcanvas:closed"},Ty=["left","right","top","bottom","fullscreen"],Oy=["overlay","push"];ku=[j("nte-offcanvas")];let lt=class xu extends(Rn=it({eventBinding:!0,slotVisibility:!0}),$u=[$({type:Boolean,reflect:!0})],wu=[$({type:Boolean,reflect:!0})],yu=[$({type:String,attribute:"open-group"})],bu=[$({type:String,attribute:"layout-group"})],vu=[$({type:String,attribute:"data-group-name"})],gu=[T()],fu=[T()],mu=[T()],pu=[K(Ft.opening,{target:"window"})],uu=[K("click",{target:"host"})],Rn){constructor(t={}){super(),Z(z,5,this),Kt(this,Ta,Z(z,8,this,!0)),Z(z,11,this),Kt(this,Oa,Z(z,12,this,!1)),Z(z,15,this),Kt(this,La,Z(z,16,this,"")),Z(z,19,this),Kt(this,za,Z(z,20,this,"")),Z(z,23,this),Kt(this,Ma,Z(z,24,this,"")),Z(z,27,this),Kt(this,Pa,Z(z,28,this,"closed")),Z(z,31,this),Kt(this,Ia,Z(z,32,this,"closed")),Z(z,35,this),Kt(this,Da,Z(z,36,this)),Z(z,39,this),this.instanceId=`nte-offcanvas-${++xu.instanceCounter}`,this.presentation={placement:"right",mode:"overlay",modal:!0,size:"var(--nte-offcanvas-width, var(--width, 33vw))",duration:"var(--nte-offcanvas-transition-duration, var(--transition-duration, 240ms))",easing:"var(--nte-offcanvas-transition-easing, ease-in-out)"},this.activePresentation=null,this.ready=!1,this.mutationObserver=void 0,this.openPromise=void 0,this.closePromise=void 0,"content"in t&&(this.programmaticContent=t.content),t.openGroup!==void 0&&(this.openGroup=t.openGroup),t.layoutGroup!==void 0&&(this.layoutGroup=t.layoutGroup),t.opened!==void 0&&(this.opened=t.opened),t.backdrop!==void 0&&(this.backdrop=t.backdrop)}static get is(){return"nte-offcanvas"}get content(){return this.programmaticContent}set content(t){this.programmaticContent=t}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(()=>this.onPresentationMutation()),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["class","style"]})}disconnectedCallback(){var t;(t=this.mutationObserver)==null||t.disconnect(),this.mutationObserver=void 0,super.disconnectedCallback()}async firstUpdated(t){super.firstUpdated(t),this.presentation=this.readPresentation(),this.requestUpdate(),await Qd(),this.ready=!0,this.opened&&await this.open()}updated(t){super.updated(t),!(!this.ready||!t.has("opened"))&&(this.opened&&this.lifecycle==="closed"?this.open():!this.opened&&(this.lifecycle==="open"||this.lifecycle==="opening")&&this.close())}open(){return!this.isConnected&&document.body!==null&&document.body.append(this),this.openPromise!==void 0&&this.lifecycle!=="closing"?this.openPromise:this.lifecycle==="open"?Promise.resolve():this.lifecycle==="closing"&&this.closePromise!==void 0?this.closePromise.then(()=>this.open()):(this.opened=!0,this.openPromise=this.performOpen().finally(()=>{this.openPromise=void 0}),this.openPromise)}close(){return this.lifecycle==="closed"?(this.opened=!1,Promise.resolve()):this.lifecycle==="closing"&&this.closePromise!==void 0?this.closePromise:(this.opened=!1,this.closePromise=this.performClose().finally(()=>{this.closePromise=void 0}),this.closePromise)}toggle(){return this.opened?this.close():this.open()}onOtherOpening(t){var e;const s=t.detail;if(s.id===this.instanceId||this.lifecycle!=="open"&&this.lifecycle!=="opening")return;const n=this.activePresentation??this.presentation,r=this.groupName!==""&&s.openGroup!==""&&this.groupName===s.openGroup,o=n.modal&&s.modal&&n.placement===s.placement;if(!r&&!o)return;const l=this.close();(e=s.waitUntil)==null||e.call(s,l)}onHostClick(t){t.composedPath().some(e=>e instanceof HTMLElement&&e.matches("[data-nt-dismiss='offcanvas']"))&&this.close()}get groupName(){return this.openGroup||this.legacyGroupName}get dialog(){return this.renderRoot.querySelector("#dialog")}async performOpen(){await this.updateComplete,this.presentation=this.readPresentation(),this.activePresentation=this.presentation,this.lifecycle="opening",this.visualState="closed",this.requestUpdate(),await this.updateComplete;const t=this.dialog;if(t===null){this.lifecycle="closed",this.visualState="closed";return}this.activePresentation=this.resolveAutoSize(this.activePresentation,t);const e=this.dispatchState(Ft.opening,this.activePresentation,!0);await Promise.allSettled(e),!(!this.opened||this.lifecycle!=="opening")&&(t.open||(this.activePresentation.modal?t.showModal():t.show()),this.visualState="opening",this.requestUpdate(),await this.waitForVisualTransition(t),!(!this.opened||this.lifecycle!=="opening")&&(this.lifecycle="open",this.visualState="open",this.requestUpdate(),this.dispatchState(Ft.opened,this.activePresentation)))}async performClose(){const t=this.activePresentation??this.presentation,e=this.dialog;this.lifecycle="closing",this.visualState=e!=null&&e.open?"closing":"closed",this.requestUpdate(),this.dispatchState(Ft.closing,t),e!=null&&e.open&&(await this.waitForVisualTransition(e),e.open&&e.close()),this.lifecycle="closed",this.visualState="closed",this.activePresentation=null,this.presentation=this.readPresentation(),this.requestUpdate(),this.dispatchState(Ft.closed,t)}dispatchState(t,e,s=!1){const n=[],r={id:this.instanceId,placement:e.placement,mode:e.mode,openGroup:this.groupName,layoutGroup:this.layoutGroup.trim(),modal:e.modal,size:e.size,duration:e.duration,easing:e.easing};return s&&(r.waitUntil=o=>n.push(Promise.resolve(o))),window.dispatchEvent(new CustomEvent(t,{detail:r})),n}onPresentationMutation(){const t=this.readPresentation();if(this.lifecycle==="closed"){this.presentation=t,this.requestUpdate();return}this.activePresentation!==null&&(this.activePresentation={...t,placement:this.activePresentation.placement,modal:this.activePresentation.modal},this.presentation=this.activePresentation,this.requestUpdate(),this.lifecycle==="open"&&this.dispatchState(Ft.opened,this.activePresentation))}readPresentation(){const t=getComputedStyle(this),e=(f,h)=>t.getPropertyValue(f).trim()||h,s=e("--nte-offcanvas-placement","right"),n=Ty.includes(s)?s:"right",r=e("--nte-offcanvas-mode","overlay"),o=Oy.includes(r)?r:"overlay",l=n==="fullscreen"?"overlay":o,d=this.parseCssBoolean(e("--nte-offcanvas-modal","1"),!0),c=e("--nte-offcanvas-transition-duration",e("--transition-duration","240ms")),p=e("--nte-offcanvas-transition-easing","ease-in-out");let a;return n==="left"||n==="right"?a=e("--nte-offcanvas-width",e("--width","33vw")):n==="top"||n==="bottom"?a=e("--nte-offcanvas-height","auto"):a="100%",{placement:n,mode:l,modal:d,size:a,duration:c,easing:p}}resolveAutoSize(t,e){if(t.placement!=="top"&&t.placement!=="bottom"||t.size!=="auto")return t;const s=e.open;s||e.setAttribute("open","");const n=e.getBoundingClientRect().height;return s||e.removeAttribute("open"),{...t,size:`${n}px`}}parseCssBoolean(t,e){const s=t.trim().toLowerCase();return["1","true","yes","on"].includes(s)?!0:["0","false","no","off"].includes(s)?!1:e}async waitForVisualTransition(t){await this.updateComplete,await new Promise(s=>requestAnimationFrame(()=>s())),await new Promise(s=>requestAnimationFrame(()=>s()));const e=t.getAnimations();e.length!==0&&await Promise.allSettled(e.map(s=>s.finished))}onDialogCancel(t){t.preventDefault(),this.close()}onDialogBackdropClick(t){if(!this.backdrop||t.target!==t.currentTarget)return;const e=this.dialog;if(e===null)return;const s=e.getBoundingClientRect();(t.clientX<s.left||t.clientX>s.right||t.clientY<s.top||t.clientY>s.bottom)&&this.close()}render(){const t=this.activePresentation??this.presentation,e=this.getAttribute("aria-label")??"Offcanvas";return k`
      <dialog
        id="dialog"
        part="offcanvas dialog"
        aria-label=${e}
        data-placement=${t.placement}
        data-mode=${t.mode}
        data-modal=${t.modal?"true":"false"}
        data-state=${this.visualState}
        data-backdrop=${this.backdrop?"visible":"hidden"}
        @cancel=${this.onDialogCancel}
        @click=${this.onDialogBackdropClick}
      >
        <div id="top">
          <div id="header" part="header">
            <slot name="header"></slot>
          </div>
          <div id="close" part="close">
            <slot name="close">
              <button
                id="default-close"
                type="button"
                aria-label="Close"
                data-nt-dismiss="offcanvas"
                part="close-button"
              ></button>
            </slot>
          </div>
        </div>

        <div id="main" part="main">
          ${this.programmaticContent===void 0?k`<slot></slot>`:this.programmaticContent===null?_:this.programmaticContent}
        </div>

        <div id="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}};z=Sy(Rn);Ta=new WeakMap;Oa=new WeakMap;La=new WeakMap;za=new WeakMap;Ma=new WeakMap;Pa=new WeakMap;Ia=new WeakMap;Da=new WeakMap;xt(z,4,"backdrop",$u,lt,Ta);xt(z,4,"opened",wu,lt,Oa);xt(z,4,"openGroup",yu,lt,La);xt(z,4,"layoutGroup",bu,lt,za);xt(z,4,"legacyGroupName",vu,lt,Ma);xt(z,4,"lifecycle",gu,lt,Pa);xt(z,4,"visualState",fu,lt,Ia);xt(z,4,"programmaticContent",mu,lt,Da);xt(z,1,"onOtherOpening",pu,lt);xt(z,1,"onHostClick",uu,lt);lt=xt(z,0,"NteOffcanvas",ku,lt);lt.styles=[E(dt),E(wy)];lt.instanceCounter=0;Z(z,1,lt);const Ly=`:host {
  --nte-offcanvas-pane-left: 0px;
  --nte-offcanvas-pane-right: 0px;
  --nte-offcanvas-pane-top: 0px;
  --nte-offcanvas-pane-bottom: 0px;
  --nte-offcanvas-pane-transition-duration: var(--nte-offcanvas-transition-duration, 240ms);
  --nte-offcanvas-pane-transition-easing: var(--nte-offcanvas-transition-easing, ease-in-out);
  display: block;
  min-width: 0;
  min-height: 0;
}

#pane {
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
  padding-left: var(--nte-offcanvas-pane-left);
  padding-right: var(--nte-offcanvas-pane-right);
  padding-top: var(--nte-offcanvas-pane-top);
  padding-bottom: var(--nte-offcanvas-pane-bottom);
  transition: padding-left var(--nte-offcanvas-pane-transition-duration) var(--nte-offcanvas-pane-transition-easing), padding-right var(--nte-offcanvas-pane-transition-duration) var(--nte-offcanvas-pane-transition-easing), padding-top var(--nte-offcanvas-pane-transition-duration) var(--nte-offcanvas-pane-transition-easing), padding-bottom var(--nte-offcanvas-pane-transition-duration) var(--nte-offcanvas-pane-transition-easing);
}

@media (prefers-reduced-motion: reduce) {
  #pane {
    transition-duration: 1ms;
  }
}`;var zy=Object.create,Wa=Object.defineProperty,My=Object.getOwnPropertyDescriptor,Su=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Ge=i=>{throw TypeError(i)},Py=(i,t,e)=>t in i?Wa(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Oc=(i,t)=>Wa(i,"name",{value:t,configurable:!0}),Iy=i=>[,,,zy(i?.[Su("metadata")]??null)],_u=["class","method","getter","setter","accessor","field","value","get","set"],Ei=i=>i!==void 0&&typeof i!="function"?Ge("Function expected"):i,Dy=(i,t,e,s,n)=>({kind:_u[i],name:t,metadata:s,addInitializer:r=>e._?Ge("Already initialized"):n.push(Ei(r||null))}),Wy=(i,t)=>Py(t,Su("metadata"),i[3]),Ts=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},tn=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=_u[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&My(a<4?n:{get[e](){return Lc(this,r)},set[e](u){return zc(this,r,u)}},e));a?h&&a<4&&Oc(r,(a>2?"set ":a>1?"get ":"")+e):Oc(n,e);for(var w=s.length-1;w>=0;w--)c=Dy(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>Ny(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?Lc:Hy)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>zc(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Ei(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Ge("Object expected"):(Ei(o=l.get)&&(m.get=o),Ei(o=l.set)&&(m.set=o),Ei(o=l.init)&&y.unshift(o));return a||Wy(i,n),m&&Wa(n,e,m),h?a^4?r:m:n},Na=(i,t,e)=>t.has(i)||Ge("Cannot "+e),Ny=(i,t)=>Object(t)!==t?Ge('Cannot use the "in" operator on this value'):i.has(t),Lc=(i,t,e)=>(Na(i,t,"read from private field"),e?e.call(i):t.get(i)),jy=(i,t,e)=>t.has(i)?Ge("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),zc=(i,t,e,s)=>(Na(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Hy=(i,t,e)=>(Na(i,t,"access private method"),e),Au,Cu,Eu,Fn,Tu,Yt,ja;Tu=[j("nte-offcanvas-pane")];let xe=class extends(Fn=it({eventBinding:!0}),Eu=[$({type:String,attribute:"layout-group"})],Cu=[K(Ft.opening,{target:"window"}),K(Ft.opened,{target:"window"})],Au=[K(Ft.closed,{target:"window"})],Fn){constructor(){super(...arguments),Ts(Yt,5,this),jy(this,ja,Ts(Yt,8,this,"")),Ts(Yt,11,this),this.active=new Map}onOffcanvasActive(t){const e=t.detail;if(e.placement==="fullscreen")return;const s=this.getActiveAtPlacement(e.placement);s.delete(e.id),e.mode==="push"&&this.accepts(e.layoutGroup)&&s.set(e.id,{id:e.id,size:e.size,duration:e.duration,easing:e.easing}),this.applyInset(e.placement,e.duration,e.easing)}onOffcanvasClosed(t){const e=t.detail;if(e.placement==="fullscreen")return;const s=this.active.get(e.placement);s!=null&&s.delete(e.id)&&this.applyInset(e.placement,e.duration,e.easing)}accepts(t){return t===""?!1:this.layoutGroup.split(/\s+/u).includes(t)}getActiveAtPlacement(t){let e=this.active.get(t);return e===void 0&&(e=new Map,this.active.set(t,e)),e}applyInset(t,e,s){const n=this.active.get(t),r=n===void 0?[]:Array.from(n.values()),o=r[r.length-1];this.style.setProperty(`--nte-offcanvas-pane-${t}`,o?.size??"0px"),this.style.setProperty("--nte-offcanvas-pane-transition-duration",o?.duration??e??"var(--nte-offcanvas-transition-duration, 240ms)"),this.style.setProperty("--nte-offcanvas-pane-transition-easing",o?.easing??s??"var(--nte-offcanvas-transition-easing, ease-in-out)")}render(){return k`<div id="pane" part="pane"><slot></slot></div>`}};Yt=Iy(Fn);ja=new WeakMap;tn(Yt,4,"layoutGroup",Eu,xe,ja);tn(Yt,1,"onOffcanvasActive",Cu,xe);tn(Yt,1,"onOffcanvasClosed",Au,xe);xe=tn(Yt,0,"NteOffcanvasPane",Tu,xe);xe.styles=[E(Ly)];Ts(Yt,1,xe);const Ry=`:host {
  /*
  * delta: 25 => 75% loaded
  */
  --delta: 50;
  --percentage: 1;
  --percentage-txt: '1%';
  --playtime: 1250ms;
  --color-loader: #6a6a6a;
  --color-checked: #55c900;
  --color-progress: #509dde;
  --color-cross: #df2f2f;
  --color-info: #2196f3;
  --color-warning: #ff9800;
  --check-pop-delay: calc(var(--playtime) * 0.35);
  --check-pop-duration: calc(var(--playtime) * 0.65);
  aspect-ratio: 1/1;
  display: inline-block;
}

:host > div {
  display: block;
  width: 100%;
  height: 100%;
}

:host(.progress) #spinner {
  animation: none;
}
:host(.progress) #spinner #spinner-viewbox {
  animation: none;
}
:host(.progress) #spinner #spinner-text {
  display: block;
  animation: none;
  opacity: 1;
}
:host(.progress) #spinner #spinner-circle {
  animation: none;
  stroke: var(--color-progress);
  stroke-dasharray: 100;
  fill: transparent;
  transform: rotate(180deg);
  stroke-dashoffset: calc((100 - var(--percentage)) * 1px);
  transition: stroke-dashoffset 0.2s ease-out;
}

:host(.cross) #spinner {
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fill;
  animation-duration: var(--playtime);
  animation-timing-function: ease-in-out;
}
:host(.cross) #spinner #spinner-circle {
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fill;
  animation-duration: var(--playtime);
  stroke: var(--color-cross);
  animation-timing-function: ease-in-out;
}
:host(.cross) #spinner #spinner-cross {
  display: block;
  animation-name: grow-cross;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-duration: var(--playtime);
  animation-timing-function: ease-in-out;
}
:host(.cross) #spinner #spinner-cross line {
  animation-name: draw-cross;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-duration: var(--playtime);
  animation-timing-function: ease-in-out;
}

:host(.checked) #spinner {
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fill-checked;
  animation-duration: var(--playtime);
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
:host(.checked) #spinner #spinner-circle {
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fill-checked;
  animation-duration: var(--playtime);
  stroke: var(--color-checked);
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
:host(.checked) #spinner #spinner-check {
  display: block;
  animation-name: check-pop;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: var(--check-pop-delay);
  animation-duration: var(--check-pop-duration);
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

:host(.info) #spinner {
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fill-checked;
  animation-duration: var(--playtime);
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
:host(.info) #spinner #spinner-circle {
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fill-checked;
  animation-duration: var(--playtime);
  stroke: var(--color-info);
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
:host(.info) #spinner #spinner-info {
  display: block;
  animation-name: check-pop;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: var(--check-pop-delay);
  animation-duration: var(--check-pop-duration);
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

:host(.warning) #spinner {
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fill-checked;
  animation-duration: var(--playtime);
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
:host(.warning) #spinner #spinner-circle {
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fill-checked;
  animation-duration: var(--playtime);
  stroke: var(--color-warning);
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
:host(.warning) #spinner #spinner-warning {
  display: block;
  animation-name: warning-pop;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: var(--check-pop-delay);
  animation-duration: var(--check-pop-duration);
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

#spinner {
  position: relative;
  height: 100%;
  width: 100%;
  transform-origin: 50% 50%;
  animation: var(--playtime) linear infinite both spin;
}
#spinner svg {
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
}
#spinner #spinner-circle {
  animation: var(--playtime) ease-in-out infinite both chase;
  fill: transparent;
  stroke: var(--color-loader);
  stroke-dasharray: 100;
  stroke-linecap: round;
  stroke-width: 5px;
  transform-box: fill-box;
  transform-origin: 50% 50%;
}
#spinner #spinner-text:before {
  position: absolute;
  font-size: 30px;
  color: var(--color-loader);
  content: var(--percentage-txt);
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
#spinner #spinner-text {
  display: none;
  opacity: 0;
  transform-origin: 50% 50%;
}
#spinner #spinner-check {
  position: absolute;
  inset: 0;
  display: none;
  opacity: 0;
  transform-origin: 50% 50%;
}
#spinner #spinner-check path {
  transform: translate(25%, 25%) scale(2.5);
  height: 1000px;
  width: 100px;
  fill: var(--color-checked);
}
#spinner #spinner-cross {
  position: absolute;
  inset: 0;
  display: none;
}
#spinner #spinner-cross line {
  stroke: var(--color-cross);
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}
#spinner #spinner-info {
  position: absolute;
  inset: 0;
  display: none;
  opacity: 0;
  transform-origin: 50% 50%;
}
#spinner #spinner-info text {
  fill: var(--color-info);
}
#spinner #spinner-warning {
  position: absolute;
  inset: 0;
  display: none;
  opacity: 0;
  transform-origin: 50% 50%;
}
#spinner #spinner-warning text {
  fill: var(--color-warning);
}

@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes chase {
  0% {
    stroke-dashoffset: 99;
    transform: rotate(0deg);
  }
  50% {
    stroke-dashoffset: var(--delta);
    transform: rotate(180deg);
  }
  100% {
    stroke-dashoffset: 99;
    transform: rotate(360deg);
  }
}
@keyframes fill {
  0% {
    stroke-dashoffset: 99;
    transform: rotate(0deg);
  }
  50%, 100% {
    stroke-dashoffset: 0;
    transform: rotate(360deg);
  }
}
@keyframes fill-checked {
  0% {
    stroke-dashoffset: 99;
    transform: rotate(0deg);
  }
  45% {
    stroke-dashoffset: 0;
    transform: rotate(300deg);
  }
  100% {
    stroke-dashoffset: 0;
    transform: rotate(360deg);
  }
}
@keyframes grow {
  0% {
    transform: scale(0) rotate(0deg);
  }
  50%, 100% {
    transform: scale(1) rotate(360deg);
  }
}
@keyframes check-pop {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-14deg);
  }
  60% {
    opacity: 1;
    transform: scale(1.14) rotate(5deg);
  }
  80% {
    transform: scale(0.96) rotate(-2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes grow-cross {
  0% {
    transform: scale(0) rotate(0deg);
  }
  50%, 100% {
    transform: scale(1) rotate(180deg);
  }
}
@keyframes draw-cross {
  0%, 30% {
    stroke-dashoffset: 100;
  }
  60%, 100% {
    stroke-dashoffset: 0;
  }
}
@keyframes warning-pop {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(6px);
  }
  60% {
    opacity: 1;
    transform: scale(1.14) translateY(-3px);
  }
  80% {
    transform: scale(0.96) translateY(1px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}`,Fy=`
<div id="spinner" part="spinner">
  <svg id="spinner-viewbox" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" part="viewbox">
    <circle id="spinner-circle" cx="50" cy="50" r="45" pathLength="100" part="circle"></circle>
  </svg>

  <svg id="spinner-check" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" part="check">
    <path d="M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42L7 14.17z"></path>
  </svg>
  <svg id="spinner-cross" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" part="cross">
    <line x1="30" y1="30" x2="70" y2="70"></line>
    <line x1="70" y1="30" x2="30" y2="70"></line>
  </svg>
  <svg id="spinner-info" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" part="info">
    <text x="50" y="72" text-anchor="middle" font-size="64" font-weight="bold" font-family="sans-serif">?</text>
  </svg>
  <svg id="spinner-warning" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" part="warning">
    <text x="50" y="72" text-anchor="middle" font-size="64" font-weight="bold" font-family="sans-serif">!</text>
  </svg>
  <div id="spinner-text" part="text"></div>
</div>`;let qy=class extends HTMLElement{connectedCallback(){Array.from(this.classList).some(t=>t.startsWith("style-"))||this.classList.add("style-default")}constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("style"),s=document.createElement("div");e.textContent=Ry,s.innerHTML=Fy,t.append(e,s)}};customElements.get("nte-spinner")||customElements.define("nte-spinner",qy);const Vy={CHILD:2},By=i=>(...t)=>({_$litDirective$:i,values:t});let Uy=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};let qn=class extends Uy{constructor(t){if(super(t),this.it=_,t.type!==Vy.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===_||t==null)return this._t=void 0,this.it=t;if(t===ke)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};qn.directiveName="unsafeHTML",qn.resultType=1;const en=By(qn),Yy=1e4,Xy=`:host {
  position: relative;
  z-index: 9999;
}

#dialog {
  width: var(--nte-feedback-dialog-width, min(100vw - 2rem, 42rem));
  max-height: var(--nte-feedback-dialog-max-height, calc(100vh - 2rem));
  margin: 0;
  padding: 0;
  background: var(--nt-surface-raised);
  border: var(--nt-border-width) solid var(--nt-border);
  border-radius: var(--nt-border-radius-xl);
  box-shadow: 0 0.5rem 1rem rgb(from var(--nt-text) r g b/0.15), 0 0.125rem 0.25rem rgb(from var(--nt-text) r g b/0.075);
  color: var(--nt-text);
  position: fixed;
  inset: 50% auto auto 50%;
  transform: translate(-50%, -50%);
  overflow: visible;
}

#dialog:not([open]) {
  display: none;
}

#dialog::backdrop {
  background: rgb(from var(--nt-dark) r g b/0.5);
  backdrop-filter: blur(6px);
}

#dialog.shake {
  animation: dialog-shake 0.35s ease;
}

#panel {
  position: relative;
  display: grid;
  gap: var(--nte-feedback-panel-gap, 1rem);
  overflow: auto;
  max-height: var(--nte-feedback-dialog-max-height, calc(100vh - 2rem));
  padding: var(--nt-spacing-component);
}

#header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--nte-feedback-header-gap, 1rem);
  align-items: start;
}

#close {
  appearance: none;
  display: inline-grid;
  place-items: center;
  inline-size: var(--close-btn-size, 2.5rem);
  block-size: var(--close-btn-size, 2.5rem);
  padding: 0;
  border: 0;
  border-radius: var(--close-btn-border-radius, 999px);
  background: var(--close-btn-background, transparent);
  color: var(--close-btn-color, inherit);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}
#close::before {
  content: "";
  display: block;
  inline-size: var(--close-btn-icon-size, 1.25rem);
  block-size: var(--close-btn-icon-size, 1.25rem);
  background-color: currentColor;
  mask: var(--nt-icon-close) center/contain no-repeat;
}
#close:hover {
  background: var(--close-btn-hover-background, color-mix(in srgb, currentColor 8%, transparent));
}
#close:focus-visible {
  outline: 2px solid var(--nt-focus, currentColor);
  outline-offset: 2px;
}
#close:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

#spinner {
  justify-self: center;
  width: 110px;
}

#content {
  display: grid;
  gap: var(--nte-feedback-content-gap, 0.75rem);
}

#details-summary {
  cursor: pointer;
}

#details-content {
  white-space: pre-wrap;
  word-break: break-word;
}

#actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--nte-feedback-actions-gap, 0.75rem);
}

#assistive-context {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.btn {
  --btn-txt: var(--nt-text-on-primary, #fff);
  --btn-bg: var(--nt-primary, #0d6efd);
  --btn-bg-hover: var(--nt-primary-hover, var(--btn-bg));
  --btn-bg-active: var(--nt-primary-active, var(--btn-bg));
  display: inline-block;
  appearance: none;
  -webkit-appearance: none;
  padding: var(--nt-btn-padding-y, 0.5rem) var(--nt-btn-padding-x, 1rem);
  background-color: var(--btn-bg);
  color: var(--btn-txt) !important;
  border-radius: var(--nt-border-radius, var(--nt-radius, 0.375rem));
  border: var(--nt-border-width, 1px) solid var(--btn-bg);
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}
.btn:focus-visible {
  outline: 2px solid var(--nt-primary, #0d6efd);
  outline-offset: 2px;
}
.btn {
  transition: background-color 0.3s ease, color 0.3s ease;
}
.btn:link, .btn:visited {
  color: var(--btn-txt) !important;
}
.btn:hover {
  background-color: var(--btn-bg-hover);
  color: var(--btn-txt) !important;
  text-decoration: none;
}
.btn:active {
  background-color: var(--btn-bg-active);
  color: var(--btn-txt) !important;
}
.btn.disabled, .btn[disabled] {
  background-color: rgb(from var(--btn-bg) r g b/0.5);
  color: rgb(from var(--nt-text, currentColor) r g b/0.5) !important;
  cursor: not-allowed;
  pointer-events: none;
}

.btn[part~=button-primary] {
  --btn-bg: var(--nt-primary) !important;
  --btn-bg-hover: var(--nt-primary-hover, var(--nt-primary)) !important;
  --btn-bg-active: var(--nt-primary-active, var(--nt-primary)) !important;
  --btn-txt: var(--nt-text-on-primary, var(--nt-text-on-primary, #fff)) !important;
  border-color: var(--nt-primary) !important;
}

.btn[part~=button-secondary] {
  --btn-bg: var(--nt-secondary) !important;
  --btn-bg-hover: var(--nt-secondary-hover, var(--nt-secondary)) !important;
  --btn-bg-active: var(--nt-secondary-active, var(--nt-secondary)) !important;
  --btn-txt: var(--nt-text-on-secondary, var(--nt-text-on-primary, #fff)) !important;
  border-color: var(--nt-secondary) !important;
}

.btn[part~=button-danger] {
  --btn-bg: var(--nt-danger) !important;
  --btn-bg-hover: var(--nt-danger-hover, var(--nt-danger)) !important;
  --btn-bg-active: var(--nt-danger-active, var(--nt-danger)) !important;
  --btn-txt: var(--nt-text-on-danger, var(--nt-text-on-primary, #fff)) !important;
  border-color: var(--nt-danger) !important;
}

@media (prefers-reduced-motion: reduce) {
  #dialog.shake {
    animation: none;
  }
}
@keyframes dialog-shake {
  0%, 100% {
    transform: translate(-50%, -50%) translateX(0);
  }
  15% {
    transform: translate(-50%, -50%) translateX(-10px);
  }
  30% {
    transform: translate(-50%, -50%) translateX(10px);
  }
  45% {
    transform: translate(-50%, -50%) translateX(-8px);
  }
  60% {
    transform: translate(-50%, -50%) translateX(8px);
  }
  75% {
    transform: translate(-50%, -50%) translateX(-4px);
  }
}`;var Gy=Object.create,Ha=Object.defineProperty,Ky=Object.getOwnPropertyDescriptor,Ou=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Ke=i=>{throw TypeError(i)},Jy=(i,t,e)=>t in i?Ha(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Mc=(i,t)=>Ha(i,"name",{value:t,configurable:!0}),Zy=i=>[,,,Gy(i?.[Ou("metadata")]??null)],Lu=["class","method","getter","setter","accessor","field","value","get","set"],Ti=i=>i!==void 0&&typeof i!="function"?Ke("Function expected"):i,Qy=(i,t,e,s,n)=>({kind:Lu[i],name:t,metadata:s,addInitializer:r=>e._?Ke("Already initialized"):n.push(Ti(r||null))}),t0=(i,t)=>Jy(t,Ou("metadata"),i[3]),W=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},J=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Lu[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&Ky(a<4?n:{get[e](){return Pc(this,r)},set[e](u){return Ic(this,r,u)}},e));a?h&&a<4&&Mc(r,(a>2?"set ":a>1?"get ":"")+e):Mc(n,e);for(var w=s.length-1;w>=0;w--)c=Qy(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>e0(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?Pc:i0)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>Ic(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Ti(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Ke("Object expected"):(Ti(o=l.get)&&(m.get=o),Ti(o=l.set)&&(m.set=o),Ti(o=l.init)&&y.unshift(o));return a||t0(i,n),m&&Ha(n,e,m),h?a^4?r:m:n},Ra=(i,t,e)=>t.has(i)||Ke("Cannot "+e),e0=(i,t)=>Object(t)!==t?Ke('Cannot use the "in" operator on this value'):i.has(t),Pc=(i,t,e)=>(Ra(i,t,"read from private field"),e?e.call(i):t.get(i)),yt=(i,t,e)=>t.has(i)?Ke("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Ic=(i,t,e,s)=>(Ra(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),i0=(i,t,e)=>(Ra(i,t,"access private method"),e),zu,Mu,Pu,Iu,Du,Wu,Nu,ju,Hu,Ru,Fu,qu,Vu,Bu,Uu,Yu,Xu,Gu,Vn,Ku,A,Fa,qa,Va,Ba,Ua,Ya,Xa,Ga,Ka,Ja,Za;const s0={eventBinding:!0};Ku=[j("nte-feedback")];let q=class extends(Vn=it(s0),Gu=[Fv("#dialog")],Xu=[T()],Yu=[T()],Uu=[T()],Bu=[T()],Vu=[T()],qu=[T()],Fu=[T()],Ru=[T()],Hu=[T()],ju=[T()],Nu=[K("nextrap:feedback-close",{target:"window"})],Wu=[K("nextrap:loading",{target:"window"})],Du=[K("nextrap:progress",{target:"window"})],Iu=[K("nextrap:success",{target:"window"})],Pu=[K("nextrap:fail",{target:"window"})],Mu=[K("nextrap:info",{target:"window"})],zu=[K("nextrap:confirm",{target:"window"})],Vn){constructor(){super(...arguments),W(A,5,this),yt(this,Fa,W(A,8,this,null)),W(A,11,this),yt(this,qa,W(A,12,this,!1)),W(A,15,this),yt(this,Va,W(A,16,this,"idle")),W(A,19,this),yt(this,Ba,W(A,20,this,"")),W(A,23,this),yt(this,Ua,W(A,24,this,"")),W(A,27,this),yt(this,Ya,W(A,28,this,"")),W(A,31,this),yt(this,Xa,W(A,32,this,0)),W(A,35,this),yt(this,Ga,W(A,36,this,"")),W(A,39,this),yt(this,Ka,W(A,40,this,[])),W(A,43,this),yt(this,Ja,W(A,44,this,"")),W(A,47,this),yt(this,Za,W(A,48,this,!1)),W(A,51,this),this._abortCallback=void 0,this._infoConfirmCallback=void 0,this._autoCloseTimer=null,this._shakeTimer=null,this._mockMessageTimer=null,this._mockAnimationFrame=null,this._onAbortClick=()=>this._dismiss(),this._onDismissClick=()=>this._dismiss(),this._onInfoConfirm=()=>{const t=this._infoConfirmCallback;t?.(),this.close()},this._onDialogCancel=t=>{t.preventDefault(),this._cancelable&&this._dismiss()},this._onDialogClick=t=>{const e=this._dialogElement;if(!(e!=null&&e.open))return;const s=e.getBoundingClientRect();if(t.clientX<s.left||t.clientX>s.right||t.clientY<s.top||t.clientY>s.bottom){if(t.preventDefault(),this._requiresExplicitInteraction()){this._shake();return}this._dismiss()}}}disconnectedCallback(){this._clearAutoCloseTimer(),this._clearMockProgress(),this._clearShakeTimer(),this._syncDialogState(!1),super.disconnectedCallback()}updated(t){super.updated(t),this._syncDialogState(this._open)}render(){return k`
      <dialog id="dialog" part="dialog" aria-labelledby="headline" aria-describedby="assistive-context message"
        aria-modal="true" aria-busy=${this._isBusy()?"true":"false"} role=${this._getRole()}
        @cancel=${this._onDialogCancel} @click=${this._onDialogClick}>
        ${this._open&&this._status!=="idle"?k`
          <div id="panel" part="panel">
            <div id="assistive-context" part="assistive-context">${this._getAssistiveContext()}</div>
            <div id="header" part="header">
              <div id="headline" part="headline">${this._getTitle()}</div>
              ${this._cancelable?k`<button id="close" part="close-button" type="button" aria-label="Dialog schließen" @click=${this._onDismissClick}></button>`:_}
            </div>
            ${this._showsSpinner()?k`<nte-spinner id="spinner" part="spinner" class=${this._getSpinnerClass()} style=${this._getSpinnerStyle()}></nte-spinner>`:_}
            <div id="content" part="content">
              <div id="message" part="message">${this._message}</div>
              ${this._referenceLabel?k`<div id="reference" part="reference">${this._referenceLabel}</div>`:_}
              ${this._status==="fail"&&this._details?k`<details id="details" part="details"><summary id="details-summary" part="details-summary">Details anzeigen</summary><pre id="details-content" part="details-content">${this._details}</pre></details>`:_}
              ${this._status==="confirm"&&this._confirmHtml?k`<div id="html" part="html">${en(this._confirmHtml)}</div>`:_}
            </div>
            ${this._hasActions()?k`<div id="actions" part="actions">${this._renderActions()}</div>`:_}
          </div>`:_}
      </dialog>`}close(){var t;const e=this._open;this._clearAutoCloseTimer(),this._clearMockProgress(),this._clearShakeTimer(),(t=this._dialogElement)==null||t.classList.remove("shake"),this._syncDialogState(!1),this._open=!1,this._status="idle",this._title="",this._message="",this._details="",this._progress=0,this._confirmHtml="",this._actions=[],this._referenceLabel="",this._cancelable=!1,this._abortCallback=void 0,this._infoConfirmCallback=void 0,e&&window.dispatchEvent(new CustomEvent("nextrap:feedback-closed"))}_handleClose(){this.close()}_handleLoading(t){const e=t.detail??{};this._openState("loading",e.title,e.message,e.reference,e.cancelable??!!e.onAbort),this._abortCallback=e.onAbort,this._progress=0}_handleProgress(t){const e=t.detail;e&&(this._openState("progress",e.title,e.message,e.reference,e.cancelable??!!e.onAbort),this._abortCallback=e.onAbort,this._progress=this._clampProgress(e.progress),this._startMockProgress(e),this._progress>=100&&this._scheduleAutoClose(!0))}_handleSuccess(t){const e=t.detail??{};this._openState("success",e.title,e.message,void 0,e.cancelable??!0),this._scheduleAutoClose(e.autoClose??!0)}_handleFail(t){const e=t.detail??{};this._openState("fail",e.title,e.message,void 0,e.cancelable??!0),this._details=e.details??"",this._scheduleAutoClose(e.autoClose??!0)}_handleInfo(t){const e=t.detail??{};this._openState("info",e.title,e.message,void 0,e.cancelable??!0),this._infoConfirmCallback=e.onConfirm}_handleConfirm(t){var e;const s=t.detail??{};this._openState("confirm",s.title,s.message,void 0,s.cancelable??!0),this._confirmHtml=s.html??"",this._actions=(e=s.actions)!=null&&e.length?s.actions:[{label:"OK",variant:"primary"}]}_openState(t,e,s,n,r=!1){this._clearAutoCloseTimer(),this._open=!0,this._status=t,this._title=e?.trim()||this._getDefaultTitle(t),this._message=s?.trim()||this._getDefaultMessage(t),this._details="",this._confirmHtml="",this._actions=[],this._referenceLabel=this._getReferenceLabel(n),this._cancelable=r,this._abortCallback=void 0,this._infoConfirmCallback=void 0}_renderActions(){switch(this._status){case"loading":case"progress":return this._abortCallback?k`<button class="btn" part=${this._getButtonPart("secondary")} @click=${this._onAbortClick}>Abort</button>`:_;case"success":case"fail":return k`<button class="btn" part=${this._getButtonPart("primary")} @click=${()=>this.close()}>Close</button>`;case"info":return k`<button class="btn" part=${this._getButtonPart("primary")} @click=${this._onInfoConfirm}>OK</button>`;case"confirm":return this._actions.map(t=>k`<button class="btn" part=${this._getButtonPart(t.variant??"secondary")} @click=${()=>this._onConfirmAction(t)}>${t.label}</button>`);default:return _}}_hasActions(){return this._status==="loading"||this._status==="progress"?!!this._abortCallback:this._status==="success"||this._status==="fail"||this._status==="info"?!0:this._status==="confirm"&&this._actions.length>0}_showsSpinner(){return this._status!=="confirm"}_isBusy(){return this._status==="loading"||this._status==="progress"}_getTitle(){return this._title||this._getDefaultTitle(this._status)}_getDefaultTitle(t){switch(t){case"loading":return"Loading";case"progress":return"Progress";case"success":return"Success";case"fail":return"Error";case"info":return"Information";case"confirm":return"Confirmation";default:return""}}_getAssistiveContext(){switch(this._status){case"loading":case"progress":return"Wartedialog geöffnet. Bitte warten, der Vorgang wird ausgeführt.";case"confirm":return"Nachfragedialog geöffnet. Bitte treffen Sie eine Auswahl.";case"fail":return"Fehlerdialog geöffnet.";case"success":return"Erfolgsdialog geöffnet.";case"info":return"Informationsdialog geöffnet.";default:return""}}_getDefaultMessage(t){switch(t){case"loading":return"Please wait...";case"progress":return"The process is running...";case"success":return"The operation was completed successfully.";case"fail":return"The operation could not be completed.";case"info":return"Information";case"confirm":return"Please confirm the next step."}}_getSpinnerClass(){switch(this._status){case"progress":return"progress";case"success":return"checked";case"fail":return"cross";case"info":return"info";default:return""}}_getSpinnerStyle(){return this._status==="progress"?`--percentage: ${this._progress}; --percentage-txt: '${Math.round(this._progress)}%';`:_}_getRole(){return this._status==="confirm"||this._status==="fail"?"alertdialog":"dialog"}_getReferenceLabel(t){return typeof t=="string"?t:t instanceof HTMLElement?t.id?`#${t.id}`:t.tagName.toLowerCase():""}_clampProgress(t){return Math.min(100,Math.max(0,Number.isFinite(t)?t:0))}_getButtonPart(t){return`button button-${t}`}_scheduleAutoClose(t,e=Yy){this._clearAutoCloseTimer(),t&&(this._autoCloseTimer=window.setTimeout(()=>this.close(),e))}_clearAutoCloseTimer(){this._autoCloseTimer!==null&&(window.clearTimeout(this._autoCloseTimer),this._autoCloseTimer=null)}_startMockProgress(t){var e;if(this._clearMockProgress(),!t.mock)return;const s=Math.max(1,t.mockDuration??1e4),n=((e=t.mockMessages)==null?void 0:e.filter(Boolean))??[],r=performance.now(),o=Math.min(95,this._progress||0);if(n.length>0){this._message=n[0];const d=s/n.length;this._mockMessageTimer=window.setInterval(()=>{const c=Math.min(n.length-1,Math.floor((performance.now()-r)/d));this._message=n[c]},Math.max(50,d))}const l=d=>{const c=Math.min(s,d-r),p=c/s,a=1-Math.pow(1-p,2);this._progress=o+(95-o)*a,c<s&&this._status==="progress"&&(this._mockAnimationFrame=window.requestAnimationFrame(l))};this._mockAnimationFrame=window.requestAnimationFrame(l)}_clearMockProgress(){this._mockMessageTimer!==null&&(window.clearInterval(this._mockMessageTimer),this._mockMessageTimer=null),this._mockAnimationFrame!==null&&(window.cancelAnimationFrame(this._mockAnimationFrame),this._mockAnimationFrame=null)}_clearShakeTimer(){this._shakeTimer!==null&&(window.clearTimeout(this._shakeTimer),this._shakeTimer=null)}_requiresExplicitInteraction(){return this._status==="confirm"||this._status==="info"&&this._infoConfirmCallback?!0:(this._status==="loading"||this._status==="progress")&&!this._cancelable}_shake(){const t=this._dialogElement;t&&(this._clearShakeTimer(),t.classList.remove("shake"),t.offsetWidth,t.classList.add("shake"),this._shakeTimer=window.setTimeout(()=>{t.classList.remove("shake"),this._shakeTimer=null},350))}_syncDialogState(t){const e=this._dialogElement;if(e){if(t){if(e.open)return;if(typeof e.showModal=="function"){e.showModal();return}e.setAttribute("open","");return}if(!e.open){e.removeAttribute("open");return}if(typeof e.close=="function"){e.close();return}e.removeAttribute("open")}}_dismiss(){if((this._status==="loading"||this._status==="progress")&&this._abortCallback){const t=this._abortCallback;t(),this.close();return}this.close()}_onConfirmAction(t){var e;(e=t.callback)==null||e.call(t),this.close()}};A=Zy(Vn);Fa=new WeakMap;qa=new WeakMap;Va=new WeakMap;Ba=new WeakMap;Ua=new WeakMap;Ya=new WeakMap;Xa=new WeakMap;Ga=new WeakMap;Ka=new WeakMap;Ja=new WeakMap;Za=new WeakMap;J(A,4,"_dialogElement",Gu,q,Fa);J(A,4,"_open",Xu,q,qa);J(A,4,"_status",Yu,q,Va);J(A,4,"_title",Uu,q,Ba);J(A,4,"_message",Bu,q,Ua);J(A,4,"_details",Vu,q,Ya);J(A,4,"_progress",qu,q,Xa);J(A,4,"_confirmHtml",Fu,q,Ga);J(A,4,"_actions",Ru,q,Ka);J(A,4,"_referenceLabel",Hu,q,Ja);J(A,4,"_cancelable",ju,q,Za);J(A,1,"_handleClose",Nu,q);J(A,1,"_handleLoading",Wu,q);J(A,1,"_handleProgress",Du,q);J(A,1,"_handleSuccess",Iu,q);J(A,1,"_handleFail",Pu,q);J(A,1,"_handleInfo",Mu,q);J(A,1,"_handleConfirm",zu,q);q=J(A,0,"NteFeedback",Ku,q);q.styles=[E(Xy),E(dt)];W(A,1,q);const un="relocate",n0="<tj-element-relocator> warning";let r0=class extends HTMLElement{constructor(){super(...arguments),this.sourceElement=null,this.targetElement=null,this.sourceObserver=null}static get observedAttributes(){return["class","source","target"]}async connectedCallback(){await kl(),this.sync()}disconnectedCallback(){this.restore(),this.sourceElement=null,this.targetElement=null}async attributeChangedCallback(){await kl(),this.isConnected&&this.sync()}sync(){var t,e;this.warnAboutUnsupportedClasses();const s=(t=this.getAttribute("source"))==null?void 0:t.trim(),n=(e=this.getAttribute("target"))==null?void 0:e.trim();if(!s||!n){this.warn(`Missing ${s?'"target"':'"source"'} selector.`);return}const r=this.querySelectorInDocument(s,"source"),o=this.querySelectorInDocument(n,"target");if(!(!r||!o)){if(r===o||r.contains(o)||o.contains(r)){this.warn("Source and target must be different elements and must not contain each other.");return}(r!==this.sourceElement||o!==this.targetElement)&&(this.restore(),this.sourceElement=r,this.targetElement=o),this.classList.contains(un)?(this.observeSource(),this.moveSourceItems()):this.restore()}}querySelectorInDocument(t,e){try{const s=this.ownerDocument.querySelector(t);return s||this.warn(`${e} not found: "${t}".`),s}catch{return this.warn(`Invalid "${e}" selector: "${t}".`),null}}observeSource(){this.sourceObserver||!this.sourceElement||(this.sourceObserver=new MutationObserver(()=>this.moveSourceItems()),this.sourceObserver.observe(this.sourceElement,{childList:!0}))}moveSourceItems(){if(!(!this.sourceElement||!this.targetElement||!this.classList.contains(un)))for(;this.sourceElement.firstElementChild;)this.targetElement.append(this.sourceElement.firstElementChild)}restore(){if(this.disconnectSourceObserver(),!(!this.sourceElement||!this.targetElement))for(;this.targetElement.firstElementChild;)this.sourceElement.append(this.targetElement.firstElementChild)}disconnectSourceObserver(){var t;(t=this.sourceObserver)==null||t.disconnect(),this.sourceObserver=null}warn(t){console.warn(n0,{reason:t,element:this})}warnAboutUnsupportedClasses(){const t=Array.from(this.classList).filter(e=>e!==un&&!e.includes(":"));t.length&&this.warn(`Unsupported classes: ${t.join(", ")}.`)}};customElements.get("tj-element-relocator")||customElements.define("tj-element-relocator",r0);const Dc="default";let a0=class{constructor(){this.presets=new Map,this.listeners=new Map}register(t,e){const s=this.normalizeName(t);return this.presets.set(s,e),this.notify(s,e),this}unregister(t){const e=t.trim(),s=this.presets.delete(e);return s&&this.notify(e,void 0),s}get(t){return t?this.presets.get(t.trim()):void 0}has(t){return this.presets.has(t.trim())}subscribe(t,e){const s=this.normalizeName(t),n=this.listeners.get(s)??new Set;return n.add(e),this.listeners.set(s,n),()=>{n.delete(e),n.size===0&&this.listeners.delete(s)}}normalizeName(t){const e=t.trim();if(!e)throw new Error("A form preset name must not be empty.");return e}notify(t,e){for(const s of this.listeners.get(t)??[])s(e)}};const o0=globalThis.__trunkjsFormRegistry??(globalThis.__trunkjsFormRegistry=new a0);let l0=class extends HTMLElement{constructor(t=o0){super(),this.registry=t,this.dataAccessor=new wf(this),this.unsubscribeRegistry=null,this.pluginCleanups=[],this.handleClick=e=>{const s=e.target instanceof Element?e.target:null,n=s?.closest('button, input, [type="submit"]');!n||n.closest("tj-form")!==this||!this.isSubmitter(n)||(e.preventDefault(),this.requestSubmit(n,e))}}static get observedAttributes(){return["preset"]}connectedCallback(){this.addEventListener("click",this.handleClick),this.watchPreset()}disconnectedCallback(){var t;this.removeEventListener("click",this.handleClick),(t=this.unsubscribeRegistry)==null||t.call(this),this.unsubscribeRegistry=null,this.disconnectPlugins()}attributeChangedCallback(){this.isConnected&&this.watchPreset()}get name(){return this.getAttribute("name")??""}set name(t){t?this.setAttribute("name",t):this.removeAttribute("name")}get preset(){var t;return((t=this.getAttribute("preset"))==null?void 0:t.trim())||Dc}set preset(t){t&&t!==Dc?this.setAttribute("preset",t):this.removeAttribute("preset")}get value(){return this.dataAccessor.data}set value(t){this.dataAccessor.data=t}get entries(){return this.dataAccessor.entries}getElements(){return this.entries.map(({element:t})=>t)}async requestSubmit(t=null,e=null){var s,n;if(!this.validateControls())return;const r=this.createContext(t,e);if(this.dispatchEvent(new CustomEvent("tj-form-submit",{bubbles:!0,cancelable:!0,detail:r})))return(n=(s=this.activePreset)==null?void 0:s.onSubmit)==null?void 0:n.call(s,r)}isSubmitter(t){var e;return t instanceof HTMLButtonElement?(t.getAttribute("type")??"submit").toLowerCase()==="submit":t instanceof HTMLInputElement?["submit","image"].includes(t.type.toLowerCase()):((e=t.getAttribute("type"))==null?void 0:e.toLowerCase())==="submit"}validateControls(){var t,e;const s=[];for(const n of this.getElements()){const r=n;!this.isVisibleControl(r)||typeof r.checkValidity!="function"||r.checkValidity()||s.push(r)}return s.forEach(n=>{var r;return(r=n.reportValidity)==null?void 0:r.call(n)}),(e=(t=s[0])==null?void 0:t.focus)==null||e.call(t),s.length===0}isVisibleControl(t){if(t.hidden||t.closest("[hidden]"))return!1;if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=window.getComputedStyle(t);return e.display!=="none"&&e.visibility!=="hidden"}createContext(t,e){return{form:this,submitter:t,sourceEvent:e,value:this.value,getElements:()=>this.getElements()}}watchPreset(){var t;(t=this.unsubscribeRegistry)==null||t.call(this),this.unsubscribeRegistry=this.registry.subscribe(this.preset,e=>this.activatePreset(e)),this.activatePreset(this.registry.get(this.preset))}activatePreset(t){if(this.disconnectPlugins(),this.activePreset=t,!!t){t.value&&(this.value=t.value);for(const e of t.plugins??[]){const s=e.connect(this);s&&this.pluginCleanups.push(s)}}}disconnectPlugins(){this.pluginCleanups.splice(0).forEach(t=>t())}};typeof customElements<"u"&&!customElements.get("tj-form")&&customElements.define("tj-form",l0);var Ju=i=>{throw TypeError(i)},c0=(i,t,e)=>t.has(i)||Ju("Cannot "+e),d0=(i,t,e)=>(c0(i,t,"read from private field"),e?e.call(i):t.get(i)),h0=(i,t,e)=>t.has(i)?Ju("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e);function u0(i){if(typeof i=="string")return{value:i,label:i};if(i&&typeof i=="object"){const t=i;if(typeof t.value=="string"||typeof t.label=="string")return{value:String(t.value??t.label??""),label:String(t.label??t.value??""),disabled:!!t.disabled,html:typeof t.html=="string"?t.html:void 0};const e=Object.entries(t)[0];if(e&&typeof e[0]=="string"&&typeof e[1]=="string")return{value:e[0],label:e[1]}}return null}function p0(i){if(!i)return[];const t=i.trim();if(!t)return[];if(t.startsWith("[")||t.startsWith("{"))try{const e=JSON.parse(t);if(Array.isArray(e))return e.map(u0).filter(s=>s!==null);if(e&&typeof e=="object")return Object.entries(e).map(([s,n])=>({value:s,label:String(n)}))}catch(e){return console.warn("Invalid data-options JSON:",e),[]}return t.split(";").map(e=>e.trim()).filter(Boolean).map(e=>{const[s,n]=e.split("|").map(r=>r.trim());return{value:s??"",label:n||s||""}})}function m0(i){return JSON.stringify(i)}const ot="main-control",ae="validation-content",f0=`:host {
  display: block;
}

:where(#wrapper),
:where(#field) {
  display: grid;
  gap: 0.5rem;
}

:where(#label) {
  margin: 0;
  font-weight: 600;
}

:where(#label[hidden]) {
  display: none;
}

:where(#control-shell) {
  display: flex;
  align-items: stretch;
  gap: 0.5rem;
  min-height: 2.75rem;
  border: 1px solid #ced4da;
}

:where(#control) {
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
  min-width: 0;
  padding: 0.625rem 0.75rem;
}

:where(#control-input) {
  display: flex;
  flex: 1 1 auto;
  align-items: stretch;
  min-width: 0;
}

:where(#control-input) > * {
  flex: 1 1 auto;
  min-width: 0;
}

:where(#start),
:where(#end) {
  display: flex;
  flex: 0 0 auto;
  align-items: stretch;
  align-self: stretch;
}

:where(#start.slot-empty),
:where(#end.slot-empty) {
  display: none;
}

:where(#start)::slotted(*),
:where(#end)::slotted(*) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  box-sizing: border-box;
  height: 100%;
  max-height: 100%;
}

:where(#control-shell:focus-within) {
  border-color: #0d6efd;
}

:where(#validation) {
  display: none;
  grid-template-rows: 1fr;
  padding-top: 0.375rem;
}

:where(#validation slot) {
  display: contents;
}

:where(#validation-inner) {
  min-height: 0;
  overflow: visible;
}

:where(#validation-bubble) {
  position: relative;
}

:where(#validation-arrow) {
  position: absolute;
  top: 0;
  left: 0.75rem;
  display: block;
  width: 0.625rem;
  height: 0.625rem;
  background: white;
  border-top: 1px solid #dc3545;
  border-left: 1px solid #dc3545;
  transform: translateY(-50%) rotate(45deg);
}

:where(#validation-content) {
  display: block;
  border: 1px solid #dc3545;
}

:host([invalid]) :where(#validation:has(slot:not(.slot-empty))) {
  display: grid;
  padding-top: 0.175rem;
}

:where(#input-aid) {
  display: none;
  grid-template-rows: 0fr;
}

:where(#input-aid slot) {
  display: contents;
}

:where(#input-aid-inner) {
  min-height: 0;
  overflow: visible;
}

:where(#input-aid-bubble) {
  position: relative;
  opacity: 0;
}

:where(#input-aid-arrow) {
  position: absolute;
  top: 0;
  left: 0.75rem;
  display: block;
  width: 0.625rem;
  height: 0.625rem;
  background: white;
  border-top: 1px solid #0d6efd;
  border-left: 1px solid #0d6efd;
  transform: translateY(-50%) rotate(45deg);
}

:where(#input-aid-content) {
  display: block;
  border: 1px solid #0d6efd;
}

:where(#input-aid:has(slot:not(.slot-empty))) {
  display: grid;
}

:host(:focus-within) :where(#input-aid:has(slot:not(.slot-empty))) {
  grid-template-rows: 1fr;
  padding-top: 0.375rem;
}

:host(:focus-within) :where(#input-aid:has(slot:not(.slot-empty))) :where(#input-aid-bubble) {
  opacity: 1;
  transform: translateY(0);
}`;var g0=Object.create,Qa=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,Zu=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),Je=i=>{throw TypeError(i)},b0=(i,t,e)=>t in i?Qa(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Wc=(i,t)=>Qa(i,"name",{value:t,configurable:!0}),y0=i=>[,,,g0(i?.[Zu("metadata")]??null)],Qu=["class","method","getter","setter","accessor","field","value","get","set"],Oi=i=>i!==void 0&&typeof i!="function"?Je("Function expected"):i,w0=(i,t,e,s,n)=>({kind:Qu[i],name:t,metadata:s,addInitializer:r=>e._?Je("Already initialized"):n.push(Oi(r||null))}),$0=(i,t)=>b0(t,Zu("metadata"),i[3]),O=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},B=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Qu[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&v0(a<4?n:{get[e](){return C(this,r)},set[e](u){return ne(this,r,u)}},e));a?h&&a<4&&Wc(r,(a>2?"set ":a>1?"get ":"")+e):Wc(n,e);for(var w=s.length-1;w>=0;w--)c=w0(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>k0(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?C:Li)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>ne(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Oi(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?Je("Object expected"):(Oi(o=l.get)&&(m.get=o),Oi(o=l.set)&&(m.set=o),Oi(o=l.init)&&y.unshift(o));return a||$0(i,n),m&&Qa(n,e,m),h?a^4?r:m:n},to=(i,t,e)=>t.has(i)||Je("Cannot "+e),k0=(i,t)=>Object(t)!==t?Je('Cannot use the "in" operator on this value'):i.has(t),C=(i,t,e)=>(to(i,t,"read from private field"),e?e.call(i):t.get(i)),V=(i,t,e)=>t.has(i)?Je("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),ne=(i,t,e,s)=>(to(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Li=(i,t,e)=>(to(i,t,"access private method"),e),tp,ep,ip,sp,np,rp,ap,op,lp,cp,dp,hp,up,pp,mp,fp,gp,vp,bp,Bn,yp,S,eo,io,so,no,ro,ao,oo,lo,co,ho,uo,po,mo,fo,go,H,Gi,Te,et,At,wp,Un,$p,Ki;yp=[j("nte-input")];let I=class kp extends(Bn=it({eventBinding:!0,slotVisibility:!0}),bp=[$({type:String,reflect:!0})],vp=[$({type:String})],gp=[$({type:String})],fp=[$({attribute:"data-options",converter:{fromAttribute:t=>p0(t),toAttribute:t=>m0(t)}})],mp=[$({type:Boolean})],pp=[$({type:Boolean,reflect:!0})],up=[$({type:Boolean,attribute:"readonly",reflect:!0})],hp=[$({type:String,attribute:"validation-message",reflect:!0})],dp=[$({type:Boolean,reflect:!0})],cp=[$({type:Boolean,reflect:!0})],lp=[$({type:Boolean,reflect:!0,attribute:"has-value"})],op=[$({type:Boolean,reflect:!0,attribute:"has-placeholder"})],ap=[$({type:Boolean,reflect:!0,attribute:"hoverlabel-active"})],rp=[T()],np=[T()],sp=[K("input",{target:"host"}),K("invalid",{target:"host"})],ip=[K("click")],ep=[K("change")],tp=[K("input")],Bn){constructor(){super(),O(S,5,this),V(this,At),V(this,eo,O(S,8,this,"text")),O(S,11,this),V(this,io,O(S,12,this,"")),O(S,15,this),V(this,so,O(S,16,this,"")),O(S,19,this),V(this,no,O(S,20,this,null)),O(S,23,this),V(this,ro,O(S,24,this,!1)),O(S,27,this),V(this,ao,O(S,28,this,!1)),O(S,31,this),V(this,oo,O(S,32,this,!1)),O(S,35,this),V(this,lo,O(S,36,this,"")),O(S,39,this),V(this,co,O(S,40,this,!1)),O(S,43,this),V(this,ho,O(S,44,this,!1)),O(S,47,this),V(this,uo,O(S,48,this,!1)),O(S,51,this),V(this,po,O(S,52,this,!1)),O(S,55,this),V(this,mo,O(S,56,this,!1)),O(S,59,this),V(this,fo,O(S,60,this)),O(S,63,this),V(this,go,O(S,64,this,ot)),O(S,67,this),V(this,H),V(this,Gi),V(this,Te),V(this,et,null),typeof this.attachInternals=="function"&&ne(this,et,this.attachInternals())}static registerPlugin(t){for(const e of t.types){const s=e.trim().toLowerCase();if(s){if(this.plugins.has(s))throw new Error(`Plugin for input type "${s}" is already registered.`);this.plugins.set(s,t)}}}static getPlugin(t){return this.plugins.get(t.trim().toLowerCase())}async connectedCallback(){var t,e,s;await fv();const n=kp.getPlugin(C(this,At,Ki));if(!n)throw new Error(`No plugin for type ${C(this,At,Ki)}`);ne(this,H,new n(this)),this._value===void 0&&(this._value=(t=C(this,H))==null?void 0:t.getInitValue()),Li(this,At,Un).call(this)&&typeof((e=C(this,et))==null?void 0:e.setValidity)=="function"&&C(this,et).setValidity({customError:!0,badInput:!0},"Invalid value"),super.connectedCallback(),Li(this,At,$p).call(this,C(this,H).getStyleSheet()),(s=C(this,H))==null||s.connected()}disconnectedCallback(){var t;super.disconnectedCallback(),(t=C(this,H))==null||t.disconnected()}checkValidity(){var t,e;return this.disabled||this.readOnly?!0:((t=C(this,et))==null?void 0:t.checkValidity())??((e=C(this,H))==null?void 0:e.isValid())??!0}reportValidity(){var t,e;return this.disabled||this.readOnly?!0:((t=C(this,et))==null?void 0:t.reportValidity())??((e=C(this,H))==null?void 0:e.isValid())??!0}attributeChangedCallback(t,e,s){var n;super.attributeChangedCallback(t,e,s),(n=C(this,H))==null||n.onHostAttributeChange(t,e,s)}updated(t){var e,s,n;super.updated(t),(e=C(this,H))==null||e.updated(t),this.syncPluginState(),(t.has("disabled")||t.has("readOnly"))&&(this.disabled||this.readOnly?((n=(s=C(this,et))==null?void 0:s.setValidity)==null||n.call(s,{}),this.invalid=!1,this.valid=!1):(t.get("disabled")===!0||t.get("readOnly")===!0)&&this.onMustRevalidateInternal())}render(){const t=C(this,H),e=this.classList.contains("hoverlabel"),s=t?.render(this.renderContext),n=k`
      <label id="label" part="label" for=${this._labelFor} ?hidden=${!this.label||!!(t!=null&&t.isLabelHidden())}>
        ${this.label}
      </label>
    `;return k`
      <div id="wrapper" part="wrapper">
        <div id="field" part="field">
          ${e?_:n}

          <div id="control-shell" part="control">
            <slot id="start" name="start" part="start"></slot>
            <div id="control" part="control-inner">
              ${e?n:_}
              <div id="control-input" part="control-input">${s??_}</div>
            </div>
            <slot id="end" name="end" part="end"></slot>
          </div>
        </div>

        <div id="validation" part="validation" aria-live="polite">
          <div id="validation-inner" part="validation-inner">
            <div id="validation-bubble" part="validation-bubble">
              <span id="validation-arrow" part="validation-arrow" aria-hidden="true"></span>
              <div id="validation-content" part="validation-content">
                <slot name="validation">${this.validationMessage}</slot>
              </div>
            </div>
          </div>
        </div>

        <div id="input-aid" part="input-aid">
          <div id="input-aid-inner" part="input-aid-inner">
            <div id="input-aid-bubble" part="input-aid-bubble">
              <span id="input-aid-arrow" part="input-aid-arrow" aria-hidden="true"></span>
              <div id="input-aid-content" part="input-aid-content">
                <slot name="input-aid"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}update(t){t.has("disabled")&&this.toggleAttribute("disabled",this.disabled),t.has("readOnly")&&this.toggleAttribute("readonly",this.readOnly),super.update(t)}get renderContext(){return{element:this,type:C(this,At,Ki)}}get form(){var t;return((t=C(this,et))==null?void 0:t.form)??null}get name(){return this.getAttribute("name")??""}get value(){return this._value}set value(t){this._value=t,this.syncPluginState()}get selectedOptions(){var t;return((t=C(this,H))==null?void 0:t.getSelectedOptions())??[]}syncPluginState(){const t=C(this,H);this.hasValue=t?.hasValue()??!1,this.hasPlaceholder=t?.hasPlaceholder()??this.hasAttribute("placeholder"),this.hoverlabelActive=t?.isHoverlabelActive()??!1,this._labelFor=t?.getLabelFor()??ot,Li(this,At,wp).call(this)}formResetCallback(){var t;(t=C(this,H))==null||t.formResetCallback(),this.syncPluginState()}formDisabledCallback(t){var e;(e=C(this,H))==null||e.formDisabledCallback(t),this.syncPluginState()}onMustRevalidateInternal(){var t,e,s;Li(this,At,Un).call(this)&&(((t=C(this,H))==null?void 0:t.isValid())===!0?(typeof((e=C(this,et))==null?void 0:e.setValidity)=="function"&&C(this,et).setValidity({}),this.removeAttribute("invalid"),this.setAttribute("valid","")):(typeof((s=C(this,et))==null?void 0:s.setValidity)=="function"&&C(this,et).setValidity({customError:!0,badInput:!0},"Invalid value"),this.setAttribute("invalid",""),this.removeAttribute("valid")))}onClick(t){var e,s,n;this.hasAttribute("disabled")||((e=C(this,H))==null||e.onClick(t),(n=(s=C(this,H))==null?void 0:s.getFormElement())==null||n.focus())}onChange(t){var e;this.disabled||this.readOnly||(e=C(this,H))==null||e.onChange(t)}onInput(t){var e;this.disabled||this.readOnly||(e=C(this,H))==null||e.onInput(t)}};S=y0(Bn);eo=new WeakMap;io=new WeakMap;so=new WeakMap;no=new WeakMap;ro=new WeakMap;ao=new WeakMap;oo=new WeakMap;lo=new WeakMap;co=new WeakMap;ho=new WeakMap;uo=new WeakMap;po=new WeakMap;mo=new WeakMap;fo=new WeakMap;go=new WeakMap;H=new WeakMap;Gi=new WeakMap;Te=new WeakMap;et=new WeakMap;At=new WeakSet;wp=function(){var i;if(!(!C(this,et)||typeof C(this,et).setFormValue!="function")){if(!this.name||this.hasAttribute("disabled")){C(this,et).setFormValue(null);return}C(this,et).setFormValue(((i=C(this,H))==null?void 0:i.getFormValue())??null)}};Un=function(){return!!(this.hasAttribute("required")&&!this.hasAttribute("disabled")&&!this.hasAttribute("readonly"))};$p=function(i){var t;const e=this.renderRoot;if(!(e instanceof ShadowRoot)||(C(this,Te)&&"adoptedStyleSheets"in e&&(e.adoptedStyleSheets=e.adoptedStyleSheets.filter(n=>n!==C(this,Te)),ne(this,Te,void 0)),(t=C(this,Gi))==null||t.remove(),ne(this,Gi,void 0),!i))return;if(typeof CSSStyleSheet<"u"&&i instanceof CSSStyleSheet&&"adoptedStyleSheets"in e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,i],ne(this,Te,i);return}const s=document.createElement("style");s.setAttribute("data-plugin-style",C(this,At,Ki)),s.textContent=typeof i=="string"?i:Array.from(i.cssRules,n=>n.cssText).join(`
`),e.append(s),ne(this,Gi,s)};Ki=function(){return this.type.trim().toLowerCase()||"text"};B(S,4,"type",bp,I,eo);B(S,4,"label",vp,I,io);B(S,4,"placeholder",gp,I,so);B(S,4,"options",fp,I,no);B(S,4,"multiple",mp,I,ro);B(S,4,"disabled",pp,I,ao);B(S,4,"readOnly",up,I,oo);B(S,4,"validationMessage",hp,I,lo);B(S,4,"invalid",dp,I,co);B(S,4,"valid",cp,I,ho);B(S,4,"hasValue",lp,I,uo);B(S,4,"hasPlaceholder",op,I,po);B(S,4,"hoverlabelActive",ap,I,mo);B(S,4,"_value",rp,I,fo);B(S,4,"_labelFor",np,I,go);B(S,1,"onMustRevalidateInternal",sp,I);B(S,1,"onClick",ip,I);B(S,1,"onChange",ep,I);B(S,1,"onInput",tp,I);I=B(S,0,"NteInput",yp,I);I.formAssociated=!0;I.styles=[E(f0),E(dt)];I.plugins=new Map;O(S,1,I);let Ze=I,x0=class{constructor(t){this.host=t}connected(){}disconnected(){}updated(t){}onClick(t){}onInput(t){}getFormElement(){return null}getValue(){return this.host.value}setValue(t){this.host.value=t}getStyleSheet(){return null}getFormValue(){}getSelectedOptions(){return[]}hasValue(){return!1}hasPlaceholder(){return!1}isHoverlabelActive(){return!1}isLabelHidden(){return!1}getControlId(){var t;return((t=this.getFormElement())==null?void 0:t.id)||ot}getLabelFor(){return this.getControlId()}isValid(){return null}onChange(t){}getInitValue(){return this.host.getAttribute("value")??null}onHostAttributeChange(t,e,s){}formResetCallback(){}formDisabledCallback(t){}};var Yn;let Qe=class extends x0{constructor(){super(...arguments),h0(this,Yn)}query(t){var e;return((e=this.host.renderRoot)==null?void 0:e.querySelector(t))??null}queryAll(t){var e;return Array.from(((e=this.host.renderRoot)==null?void 0:e.querySelectorAll(t))??[])}getHostAttribute(t,e=""){return this.host.getAttribute(t)??e}hasHostAttribute(t){return this.host.hasAttribute(t)}normalizeStringValue(t){return t==null?"":String(t)}createFormData(t){if(!this.host.name||t.length===0)return null;const e=new FormData;return t.forEach(s=>{e.append(this.host.name,s)}),e}syncHostState(){this.host.syncPluginState()}disconnected(){var t;(t=d0(this,Yn))==null||t.abort()}getFormValue(){const t=this.getValue();return Array.isArray(t)?this.createFormData(t):typeof t=="boolean"?t?this.getHostAttribute("value","on"):null:t==null?null:String(t)}hasValue(){const t=this.getValue();return Array.isArray(t)?t.length>0:typeof t=="boolean"?t:this.normalizeStringValue(t).trim().length>0}hasPlaceholder(){return this.hasHostAttribute("placeholder")}isHoverlabelActive(){return this.hasPlaceholder()||this.hasValue()}};Yn=new WeakMap;const S0="/* checkbox styling is applied via light DOM mixins */",xp=class extends Qe{getStyleSheet(){return S0}get checkbox(){return this.query('input[type="checkbox"]')}getFormElement(){return this.checkbox}getInitValue(){return this.host.hasAttribute("checked")}onInput(){var t;this.host.value=(t=this.checkbox)==null?void 0:t.checked}render(t){const{element:e}=t;return k`
      <label part="checkbox-label" for=${ot}>
        <input
          id=${ot}
          part="checkbox-input"
          type="checkbox"
          aria-describedby=${ae}
          name=${e.getAttribute("name")??""}
          value=${e.getAttribute("value")??"on"}
          ?checked=${this.host.value===!0}
          ?disabled=${e.hasAttribute("disabled")||e.hasAttribute("readonly")}
          ?required=${e.hasAttribute("required")}
        />
        <span part="checkbox-text">${e.label}</span>
      </label>
    `}isValid(){var t;return((t=this.checkbox)==null?void 0:t.checkValidity())??null}getSelectedOptions(){var t;return this.getValue()?[{value:this.getHostAttribute("value",((t=this.checkbox)==null?void 0:t.value)??"on"),label:this.host.label||this.getHostAttribute("value","on")}]:[]}hasPlaceholder(){return!1}isHoverlabelActive(){return!1}isLabelHidden(){return!0}};xp.types=["checkbox"];let _0=xp;function A0(i){const t=i.querySelector("options");return t instanceof HTMLElement?Array.from(t.querySelectorAll("option")).map(e=>({value:e.value,label:e.label||e.textContent||e.value,disabled:e.disabled,html:e.innerHTML||void 0})):[]}function ns(i){return i.options&&i.options.length>0?i.options:A0(i)}function C0(i){const t=i.trim();if(!t)return[];if(t.startsWith("["))try{const e=JSON.parse(t);if(Array.isArray(e))return e.map(s=>String(s))}catch{}return t.split(/[;,]/).map(e=>e.trim()).filter(Boolean)}function rs(i){return Array.isArray(i)?i.map(t=>String(t)).filter(Boolean):typeof i=="boolean"?i?["true"]:[]:i==null?[]:C0(String(i))}function Sp(i,t){const e=new Set(Array.from(t).map(s=>String(s)));return ns(i).filter(s=>e.has(s.value))}const E0=`select {
  width: 100%;
  min-width: 0;
  color: inherit;
  font: inherit;
  background: transparent;
  border: 0;
  outline: 0;
}`,_p=class extends Qe{getStyleSheet(){return E0}get select(){return this.query("select")}getFormElement(){return this.select}render(t){const{element:e}=t,s=ns(e),n=rs(this.host.value)[0]??"";return k`
      <select
        id=${ot}
        part="select"
        name=${e.getAttribute("name")??""}
        aria-describedby=${ae}
        ?disabled=${e.hasAttribute("disabled")||e.hasAttribute("readonly")}
        ?required=${e.hasAttribute("required")}
      >
        ${s.map(r=>k`
            <option
              value=${r.value}
              ?disabled=${!!r.disabled}
              ?selected=${r.value===n}
            >
              ${this.renderOptionLabel(r)??_}
            </option>
          `)}
      </select>
    `}onInput(){var t;this.host.value=((t=this.select)==null?void 0:t.value)??""}onChange(){this.onInput()}isValid(){var t;return((t=this.select)==null?void 0:t.checkValidity())??null}getValue(){return this.host.value}getSelectedOptions(){return Sp(this.host,rs(this.host.value))}renderOptionLabel(t){return t.html?en(t.html):t.label}};_p.types=["select"];let T0=_p;const O0=`[part~=option-list] {
  width: 100%;
}`,Ap=class extends Qe{getStyleSheet(){return O0}get inputs(){return this.queryAll("#control input")}getFormElement(){return this.inputs[0]??null}getInitValue(){return this.normalizeSelectedValues(this.host.getAttribute("value"))}render(t){const{element:e}=t,s=ns(e),n=new Set(this.normalizeSelectedValues(this.host.value)),r=e.multiple?"checkbox":"radio",o=e.getAttribute("name")??`${ot}-group`,l=e.multiple?"group":"radiogroup";return k`
      <div
        id=${`${ot}-group`}
        part="option-list"
        role=${l}
        aria-describedby=${ae}
      >
        ${s.map((d,c)=>{const p=c===0?ot:`${ot}-${c}`;return k`
            <label part="option-label" for=${p}>
              <input
                id=${p}
                part="option-input"
                type=${r}
                name=${o}
                value=${d.value}
                aria-describedby=${ae}
                ?checked=${n.has(d.value)}
                ?disabled=${!!d.disabled||e.hasAttribute("disabled")||e.hasAttribute("readonly")}
                ?required=${!e.multiple&&e.hasAttribute("required")}
              />
              <span part="option-text">${this.renderOptionLabel(d)??_}</span>
            </label>
          `})}
      </div>
    `}onInput(){this.host.value=this.getSelectedValuesFromInputs()}onChange(){this.onInput()}getValue(){return this.host.value}getFormValue(){return this.createFormData(this.normalizeSelectedValues(this.host.value))}getSelectedOptions(){return Sp(this.host,this.normalizeSelectedValues(this.host.value))}hasPlaceholder(){return!1}isHoverlabelActive(){return this.hasValue()}normalizeSelectedValues(t){const e=rs(t);return this.host.multiple?e:e.slice(0,1)}getSelectedValuesFromInputs(){return this.inputs.filter(t=>t.checked).map(t=>t.value)}renderOptionLabel(t){return t.html?en(t.html):t.label}};Ap.types=["select-radio"];let L0=Ap;const z0=`input {
  width: 100%;
  min-width: 0;
  color: inherit;
  font: inherit;
  background: transparent;
  border: 0;
  outline: 0;
}`,Cp=class extends Qe{getStyleSheet(){return z0}get input(){return this.query("input")}getFormElement(){return this.input}onInput(){var t;this.host.value=(t=this.input)==null?void 0:t.value}render(t){const{element:e,type:s}=t;return k`
      <input
        id=${ot}
        part="input"
        type=${s}
        name=${e.getAttribute("name")??""}
        .value=${this.normalizeStringValue(this.host.value)}
        placeholder=${e.getAttribute("placeholder")??""}
        aria-describedby=${ae}
        pattern=${gt(e.getAttribute("pattern")??void 0)}
        minlength=${gt(e.getAttribute("minlength")??void 0)}
        maxlength=${gt(e.getAttribute("maxlength")??void 0)}
        ?disabled=${e.hasAttribute("disabled")}
        ?readonly=${e.hasAttribute("readonly")}
        ?required=${e.hasAttribute("required")}
      />
    `}isValid(){return this.query("input").checkValidity()}getValue(){var t;return(t=this.input)==null?void 0:t.value}};Cp.types=["text","email","password"];let M0=Cp;const P0=`textarea {
  width: 100%;
  min-width: 0;
  color: inherit;
  font: inherit;
  background: transparent;
  border: 0;
  outline: 0;
  overflow-y: hidden;
  resize: none;
}`,Ep=class extends Qe{getStyleSheet(){return P0}get textarea(){return this.query("textarea")}getFormElement(){return this.textarea}render(t){const{element:e}=t;return k`
      <textarea
        id=${ot}
        part="textarea"
        rows=${e.getAttribute("rows")??"3"}
        name=${e.getAttribute("name")??""}
        .value=${this.normalizeStringValue(this.host.value)}
        placeholder=${e.getAttribute("placeholder")??""}
        aria-describedby=${ae}
        minlength=${gt(e.getAttribute("minlength")??void 0)}
        maxlength=${gt(e.getAttribute("maxlength")??void 0)}
        ?disabled=${e.hasAttribute("disabled")}
        ?readonly=${e.hasAttribute("readonly")}
        ?required=${e.hasAttribute("required")}
      ></textarea>
    `}updated(){this.clampHeight()}onInput(){var t;this.host.value=((t=this.textarea)==null?void 0:t.value)??"",this.clampHeight()}getValue(){return this.host.value}isValid(){var t;return((t=this.textarea)==null?void 0:t.checkValidity())??null}clampHeight(){const t=this.textarea;if(!t)return;t.style.height="auto";const e=getComputedStyle(t),s=this.parsePixelValue(t.style.minHeight||e.minHeight)??0,n=this.parsePixelValue(t.style.maxHeight||e.maxHeight)??Number.POSITIVE_INFINITY,r=Math.min(Math.max(t.scrollHeight,s),n);t.style.height=`${r}px`,t.style.overflowY=t.scrollHeight>n?"auto":"hidden"}parsePixelValue(t){const e=Number.parseFloat(t);return Number.isFinite(e)?e:void 0}};Ep.types=["textarea"];let I0=Ep;const D0=`[part~=token-list] {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

[part~=token-input] {
  min-width: 0;
  color: inherit;
  font: inherit;
  background: transparent;
  border: 0;
  border-radius: 0;
  outline: 0;
  box-shadow: none;
}`,Tp=class extends Qe{constructor(){super(...arguments),this.handleDraftInput=()=>{this.syncHostState()},this.handleDraftCommit=()=>{this.commitDraftValue()},this.handleKeydown=t=>{var e;if(t.key==="Enter"||t.key===","||t.key===";"){t.preventDefault(),this.commitDraftValue();return}if(t.key==="Backspace"&&!((e=this.input)!=null&&e.value)){const s=this.normalizeSelectedValues(this.host.value),n=s[s.length-1];n&&(t.preventDefault(),this.removeToken(n))}}}getStyleSheet(){return D0}get input(){return this.query('input[type="text"]')}getFormElement(){return this.input}get isStrict(){return this.host.hasAttribute("strict")}getInitValue(){return this.normalizeSelectedValues(this.host.getAttribute("value"))}render(t){const{element:e}=t,s=this.normalizeSelectedValues(this.host.value),n=this.getAvailableOptions(s);return k`
      <div part="token-list" aria-describedby=${ae}>
        ${s.map(r=>{const o=this.resolveOption(r),l=o!=null&&o.html?en(o.html):o?.label??r;return k`
            <span part="token">
              <span part="token-text">${l??_}</span>
              <button
                type="button"
                part="token-remove"
                aria-label=${`Token "${o?.label??r}" entfernen`}
                ?disabled=${e.hasAttribute("disabled")||e.hasAttribute("readonly")}
                @click=${()=>this.removeToken(r)}
              >
                ×
              </button>
            </span>
          `})}

        <input
          id=${ot}
          part="token-input"
          type="text"
          list=${n.length>0?`${ot}-options`:""}
          placeholder=${e.getAttribute("placeholder")??""}
          aria-describedby=${ae}
          ?disabled=${e.hasAttribute("disabled")}
          ?readonly=${e.hasAttribute("readonly")}
          @input=${this.handleDraftInput}
          @change=${this.handleDraftCommit}
          @blur=${this.handleDraftCommit}
          @keydown=${this.handleKeydown}
        />
      </div>

      ${n.length>0?k`
            <datalist id=${`${ot}-options`}>
              ${n.map(r=>k`<option value=${r.value}>${r.label}</option>`)}
            </datalist>
          `:_}
    `}onInput(t){t.target===this.input&&this.syncHostState()}onChange(t){t.target===this.input&&this.commitDraftValue()}getValue(){return this.normalizeSelectedValues(this.host.value)}getSelectedOptions(){return this.normalizeSelectedValues(this.host.value).map(t=>this.resolveOption(t)??{value:t,label:t})}isValid(){return!this.host.hasAttribute("required")||this.host.hasAttribute("disabled")?!0:this.normalizeSelectedValues(this.host.value).length>0}isHoverlabelActive(){var t;return this.hasValue()||this.getDraftValue().length>0||((t=this.host.shadowRoot)==null?void 0:t.activeElement)===this.input}formResetCallback(){this.host.value=this.getInitValue(),this.clearDraftValue()}updated(){const t=this.normalizeSelectedValues(this.host.value);this.areValuesEqual(this.host.value,t)||(this.host.value=t)}normalizeSelectedValues(t){const e=Array.from(new Set(rs(t)));return this.isStrict?e.filter(s=>this.resolveOption(s)):e}getDraftValue(){var t;return((t=this.input)==null?void 0:t.value.trim())??""}clearDraftValue(){this.input&&(this.input.value="")}commitDraftValue(){this.addTokens(this.getDraftValue())}addTokens(t){if(!t||this.host.hasAttribute("disabled")||this.host.hasAttribute("readonly"))return;const e=this.normalizeSelectedValues([...this.normalizeSelectedValues(this.host.value),...t.split(/[;,\n]/).map(s=>s.trim()).filter(Boolean)]);this.host.value=e,this.clearDraftValue(),this.dispatchValueEvents()}removeToken(t){var e;this.host.hasAttribute("disabled")||this.host.hasAttribute("readonly")||(this.host.value=this.normalizeSelectedValues(this.host.value).filter(s=>s!==t),this.dispatchValueEvents(),(e=this.input)==null||e.focus())}getAvailableOptions(t){const e=new Set(t);return ns(this.host).filter(s=>!s.disabled&&!e.has(s.value))}resolveOption(t){return ns(this.host).find(e=>e.value===t)??null}areValuesEqual(t,e){const s=rs(t);return s.length===e.length&&s.every((n,r)=>n===e[r])}dispatchValueEvents(){this.host.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.host.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}};Tp.types=["token-input"];let W0=Tp;Ze.registerPlugin(M0);Ze.registerPlugin(I0);Ze.registerPlugin(T0);Ze.registerPlugin(L0);Ze.registerPlugin(_0);Ze.registerPlugin(W0);const N0=`/* The ShadowDOM Styles */
:host {
  --image-aspect-ratio: var(--aspect-ratio, 16 / 9);
  display: block;
}

#wrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
}

*:has(> .slot-empty) {
  display: none !important;
}

#header {
  order: 2;
}

#image {
  aspect-ratio: var(--image-aspect-ratio);
  width: 100%;
  height: auto;
  display: block;
}
#image slot::slotted(p) {
  display: contents;
}
#image {
  overflow: hidden;
  order: 1;
  z-index: 2;
  isolation: isolate;
  position: relative;
}
#image #gradient {
  border-radius: inherit;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

#content {
  z-index: 3;
  order: 50;
  flex-grow: 1;
}

#footer {
  order: 999;
}

#wrapper {
  --_nte-card-first-bleed: var(--_nte-card-bleed-image-start, 0);
}

#wrapper:has(#header > .slot-empty):has(#content > .slot-empty):has(#footer > .slot-empty) {
  --_nte-card-last-bleed: var(--_nte-card-bleed-image-end, 0);
}

#wrapper:has(#image > .slot-empty) {
  --_nte-card-first-bleed: var(--_nte-card-bleed-header-start, 0);
}

#wrapper:has(#content > .slot-empty):has(#footer > .slot-empty) {
  --_nte-card-last-bleed: var(--_nte-card-bleed-header-end, 0);
}

#wrapper:has(#image > .slot-empty):has(#header > .slot-empty) {
  --_nte-card-first-bleed: var(--_nte-card-bleed-content-start, 0);
}

#wrapper:has(#footer > .slot-empty) {
  --_nte-card-last-bleed: var(--_nte-card-bleed-content-end, 0);
}

#wrapper:has(#image > .slot-empty):has(#header > .slot-empty):has(#content > .slot-empty) {
  --_nte-card-first-bleed: var(--_nte-card-bleed-footer-start, 0);
}

#wrapper {
  --_nte-card-last-bleed: var(--_nte-card-bleed-footer-end, 0);
}

#wrapper:has(#image > .slot-empty):has(#header > .slot-empty):has(#content > .slot-empty):has(#footer > .slot-empty) {
  display: none !important;
}`;var j0=Object.create,vo=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,Op=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),ti=i=>{throw TypeError(i)},R0=(i,t,e)=>t in i?vo(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Nc=(i,t)=>vo(i,"name",{value:t,configurable:!0}),F0=i=>[,,,j0(i?.[Op("metadata")]??null)],Lp=["class","method","getter","setter","accessor","field","value","get","set"],zi=i=>i!==void 0&&typeof i!="function"?ti("Function expected"):i,q0=(i,t,e,s,n)=>({kind:Lp[i],name:t,metadata:s,addInitializer:r=>e._?ti("Already initialized"):n.push(zi(r||null))}),V0=(i,t)=>R0(t,Op("metadata"),i[3]),Mi=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},bo=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Lp[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&H0(a<4?n:{get[e](){return Xn(this,r)},set[e](u){return Gn(this,r,u)}},e));a?h&&a<4&&Nc(r,(a>2?"set ":a>1?"get ":"")+e):Nc(n,e);for(var w=s.length-1;w>=0;w--)c=q0(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>B0(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?Xn:U0)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>Gn(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?zi(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?ti("Object expected"):(zi(o=l.get)&&(m.get=o),zi(o=l.set)&&(m.set=o),zi(o=l.init)&&y.unshift(o));return a||V0(i,n),m&&vo(n,e,m),h?a^4?r:m:n},yo=(i,t,e)=>t.has(i)||ti("Cannot "+e),B0=(i,t)=>Object(t)!==t?ti('Cannot use the "in" operator on this value'):i.has(t),Xn=(i,t,e)=>(yo(i,t,"read from private field"),e?e.call(i):t.get(i)),pn=(i,t,e)=>t.has(i)?ti("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Gn=(i,t,e,s)=>(yo(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),U0=(i,t,e)=>(yo(i,t,"access private method"),e),zp,Mp,Kn,Pp,Bt,wo,$o,Os;Pp=[j("nte-card")];let We=class extends(Kn=it({breakpoints:!0,eventBinding:!0,slotVisibility:!0,subLayoutApply:!0}),Mp=[T()],zp=[$({type:String,reflect:!0})],Kn){constructor(){super(...arguments),pn(this,wo,Mi(Bt,8,this,0)),Mi(Bt,11,this),pn(this,$o,Mi(Bt,12,this,"nte-card")),Mi(Bt,15,this),pn(this,Os,null),this.onLinkSlotChange=t=>{this.updateClickableFromLinkSlot(t.target)},this.onImageSlotChange=t=>{this.applyImageSlotDefaults(t.target),this.updateRegionState()},this.onRegionSlotChange=()=>this.updateRegionState()}get _linkAnchor(){return Xn(this,Os)}set _linkAnchor(t){Gn(this,Os,t)}getImageSlot(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector('slot[name="image"]')}findAnchorWithHref(t){if(t instanceof HTMLAnchorElement&&t.hasAttribute("href"))return t;const e=t.querySelector("a[href]");return e instanceof HTMLAnchorElement?e:null}updateClickableFromLinkSlot(t){var e;const s=t??((e=this.shadowRoot)==null?void 0:e.querySelector('slot[name="link"]'));if(!s){this._linkAnchor=null,this.classList.remove("clickable");return}const n=s.assignedElements({flatten:!0});let r=null;for(const o of n)if(r=this.findAnchorWithHref(o),r)break;this._linkAnchor=r,this.classList.toggle("clickable",!!this._linkAnchor),this.requestUpdate()}firstUpdated(t){super.firstUpdated(t),this.updateClickableFromLinkSlot(),this.applyImageSlotDefaults(),this.updateRegionState()}updateRegionState(){const t=["image","header","content","footer"].filter(e=>{var s;const n=(s=this.shadowRoot)==null?void 0:s.querySelector(`#${e} > slot`);return n?.assignedNodes({flatten:!0}).some(r=>{var o;return r.nodeType===Node.ELEMENT_NODE||r.nodeType===Node.TEXT_NODE&&!!((o=r.textContent)!=null&&o.trim())})});this.setAttribute("data-card-regions",t.join(" "))}applyImageSlotDefaults(t){const e=t??this.getImageSlot();if(e)for(const s of e.assignedElements({flatten:!0})){const n=s instanceof HTMLImageElement?[s]:Array.from(s.querySelectorAll("img"));for(const r of n)r.style.display===""&&(r.style.display="block"),r.style.width===""&&(r.style.width="100%"),r.style.height===""&&(r.style.height="100%"),r.style.objectFit===""&&(r.style.objectFit="cover")}}render(){var t;const e=k`
      <div part="wrapper" id="wrapper">
        <div part="header" id="header"><slot name="header" @slotchange=${this.onRegionSlotChange} data-query=":scope > .header"></slot></div>
        <div part="image" id="image">
          <slot
            id="image-slot"
            name="image"
            data-query=":scope > .image | :scope > img:not(.keep) | :scope > p:has(img:not(.keep))"
            @slotchange=${this.onImageSlotChange}
          ></slot>
          <div part="gradient" id="gradient"></div>
        </div>
        <div part="content" id="content"><slot @slotchange=${this.onRegionSlotChange}></slot></div>
        <div part="footer" id="footer"><slot name="footer" @slotchange=${this.onRegionSlotChange} data-query=":scope > .footer"></slot></div>
        <div hidden>
          <slot
            name="link"
            data-query=":scope > p:has(a[href]:empty) | :scope > p:has(a[href].link)"
            @slotchange=${this.onLinkSlotChange}
          ></slot>
        </div>
      </div>
    `,s=((t=this._linkAnchor)==null?void 0:t.getAttribute("href"))||void 0;return s?k`<a part="link" id="link" href=${s}>${e}</a>`:e}};Bt=F0(Kn);wo=new WeakMap;$o=new WeakMap;Os=new WeakMap;bo(Bt,4,"_count",Mp,We,wo);bo(Bt,4,"name",zp,We,$o);We=bo(Bt,0,"NteCardElement",Pp,We);We.styles=[E(N0),E(dt)];Mi(Bt,1,We);const Y0=`/* The ShadowDOM Styles */
/* Refer to README.md for style guidelines */
:host {
  /* Public CSS variables (host API) */
  --nte-image-border-radius: var(--nt-radius-lg, 12px);
  --nte-image-shadow: var(--nt-shadow-md, 0 4px 20px rgba(0, 0, 0, 0.08));
  --nte-image-gap: var(--nt-space-4, 8px);
  --nte-image-caption-fg: var(--nt-text, #333);
  --nte-image-caption-bg: var(--nt-body-tertiary, #e4e6ef);
  --nte-image-caption-border: var(--nt-border-subtle, rgba(0, 0, 0, 0.05));
  --nte-image-arrow-bg: rgba(0, 0, 0, 0.2);
  --nte-image-arrow-bg-hover: rgba(0, 0, 0, 0.5);
  --nte-image-progress-bg: var(--nt-text-on-primary, #ffffff);
  width: var(--nte-image-width, 100%);
  height: var(--nte-image-height, auto);
  aspect-ratio: var(--nte-image-aspect-ratio, 16/9);
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

:host(.round-borders) {
  border-radius: var(--nte-image-border-radius);
  overflow: hidden;
}

::slotted(img) {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
  cursor: pointer;
  position: absolute;
  inset: 0;
  z-index: 1;
}

.navigation-arrows {
  display: flex;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  z-index: 2;
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nte-image-root:hover .navigation-arrows {
  opacity: 1;
}

.arrow-button {
  pointer-events: all;
  background: var(--nte-image-arrow-bg);
  color: white;
  border: none;
  width: 40px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  font-size: 18px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(4px);
  border-radius: 0 4px 4px 0;
}

.arrow-button.prev {
  border-radius: 0 4px 4px 0;
}

.arrow-button.next {
  border-radius: 4px 0 0 4px;
}

.arrow-button:hover {
  background: var(--nte-image-arrow-bg-hover);
  width: 50px;
}

.arrow-button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: -4px;
}

.nte-image-root {
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.image-container {
  position: relative;
  flex: 1;
  overflow: hidden;
  height: 100%;
  width: 100%;
  box-shadow: var(--nte-image-shadow);
}

.caption-container {
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 80px;
  box-shadow: var(--nte-image-shadow);
  margin-top: -1px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
}

:host(.round-borders) .caption-container {
  border-radius: 0 0 var(--nte-image-border-radius) var(--nte-image-border-radius);
  overflow: hidden;
}

.caption {
  min-height: 0;
  width: 100%;
  color: var(--nte-image-caption-fg);
  font-size: 14px;
  text-align: center;
  padding: 12px 16px;
  z-index: 2;
  font-weight: 500;
  letter-spacing: 0.3px;
  background-color: var(--nte-image-caption-bg);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 1px solid var(--nte-image-caption-border);
  margin: 0;
  line-height: 1.5;
}

.caption:empty {
  display: none;
}

.caption-container:has(.caption:empty) {
  max-height: 0;
}

@media (prefers-color-scheme: dark) {
  :host {
    --nte-image-caption-fg: var(--nt-text, #f0f0f0);
    --nte-image-caption-bg: var(--nt-body-tertiary, rgba(30, 30, 30, 0.95));
    --nte-image-caption-border: var(--nt-border-subtle, rgba(255, 255, 255, 0.05));
  }
}
.indicators {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--nte-image-gap);
  z-index: 2;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.nte-image-root:has(.caption-container .caption:not(:empty)) .indicators {
  bottom: 62px;
}

.indicator-container {
  position: relative;
  display: flex;
  align-items: center;
}

.indicator {
  width: 30px;
  height: 5px;
  border-radius: 2.5px;
  background-color: var(--nte-image-indicator-bg, rgba(0, 0, 0, 0.3));
  margin: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(2px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.indicator.active {
  background-color: var(--nte-image-indicator-active-bg, rgba(0, 0, 0, 0.6));
  width: 40px;
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--nte-image-progress-bg);
  transition: width 0.05s linear;
}

.progress-bar.paused {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
}
.pause-icon-small {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pause-icon-small:before,
.pause-icon-small:after {
  content: "";
  position: absolute;
  width: 2px;
  height: 8px;
  background-color: white;
  border-radius: 1px;
  top: 50%;
  transform: translateY(-50%);
}

.pause-icon-small:before {
  left: 35%;
}

.pause-icon-small:after {
  right: 35%;
}

/* Remove the standalone pause indicator since we're integrating it with indicators */
.pause-indicator {
  display: none;
}

.image-container:hover .indicators {
  opacity: 1;
}

:host(.round-borders) img {
  border-radius: var(--nte-image-border-radius);
}

/* When captions are present, adjust the image container to only have top rounded corners */
:host(.round-borders) .caption-container:not(:empty) ~ .image-container,
:host(.round-borders) .caption:not(:empty) ~ .image-container {
  border-radius: var(--nte-image-border-radius) var(--nte-image-border-radius) 0 0;
}

/* Ensure the entire component has proper overflow handling */
:host(.round-borders) {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Fullsize feature visual indicator */
:host(.fullsize) ::slotted(img) {
  cursor: zoom-in;
  transition: transform 0.2s ease;
}

:host(.fullsize) ::slotted(img:hover) {
  transform: scale(1.02);
}

/* Slideshow functionality styles */
:host(.slideshow) ::slotted(img) {
  transition: opacity 0.5s ease;
}

:host(.slideshow) ::slotted(img:not(.active)) {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

:host(.slideshow) ::slotted(img.active) {
  opacity: 1;
  z-index: 1;
  pointer-events: auto;
  position: absolute;
}

/* Blend transition animation for slideshow */
:host(.slideshow.blend) ::slotted(img.active) {
  animation: blendTransition 0.5s ease;
}

@keyframes blendTransition {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
/* Ensure image container has proper positioning for slideshow */
:host(.slideshow) .image-container {
  position: relative;
}

/* Fix for slideshow images to maintain proper sizing */
:host(.slideshow) ::slotted(img) {
  object-fit: cover;
}

:host(.single-image) ::slotted(img:not(:first-of-type)) {
  visibility: hidden;
  pointer-events: none;
}`,jc=5e3,mn=i=>{if(!i||i.trim()==="")return{};const t=/(?![^(]*\))(?![^"]*"(?:[^"]*"[^"]*")*[^"]*$);/;return i.split(t).map(e=>e.trim()).filter(e=>e!=="").reduce((e,s)=>{const n=s.indexOf(":");if(n===-1)return e[s.trim()]="",e;const r=s.substring(0,n).trim(),o=s.substring(n+1).trim();return r===""||(e[r]=o),e},{})},Ct=i=>{if(!i)return{value:0,unit:"%"};const t=i.match(/^([\d.-]+)(%|px|em|rem|vh|vw)?$/);return t?{value:parseFloat(t[1]),unit:t[2]||"%"}:{value:0,unit:"%"}},X0=(i,t,e)=>{i.style.objectFit="cover",t.position&&(i.style.objectPosition=t.position);const s=Ct(t.top),n=Ct(t.right),r=Ct(t.bottom),o=Ct(t.left);i.style.marginTop=`-${s.value}${s.unit}`,i.style.marginLeft=`-${o.value}${o.unit}`,i.style.marginRight=`-${n.value}${n.unit}`,i.style.marginBottom=`-${r.value}${r.unit}`,s.unit==="%"&&n.unit==="%"&&r.unit==="%"&&o.unit==="%"?(i.style.width="100%",i.style.height="100%",i.style.clipPath=`polygon(
            ${o.value}% ${s.value}%,
            ${100-n.value}% ${s.value}%,
            ${100-n.value}% ${100-r.value}%,
            ${o.value}% ${100-r.value}%
        )`):(i.style.width=`calc(100% + ${o.value}${o.unit} + ${n.value}${n.unit})`,i.style.height=`calc(100% + ${s.value}${s.unit} + ${r.value}${r.unit})`,i.style.clipPath=`polygon(
            ${o.value}${o.unit} ${s.value}${s.unit},
            calc(100% - ${n.value}${n.unit}) ${s.value}${s.unit},
            calc(100% - ${n.value}${n.unit}) calc(100% - ${r.value}${r.unit}),
            ${o.value}${o.unit} calc(100% - ${r.value}${r.unit})
        )`);const l=G0(t,e);if(i.style.transform=`scale(${l})`,i.style.transformOrigin=i.style.objectPosition||"center center",t.transform){const d=i.style.transform;i.style.transform=`${d} ${t.transform}`}},G0=(i,t)=>{const e=Ct(i.top),s=Ct(i.right),n=Ct(i.bottom),r=Ct(i.left);if(e.unit==="%"&&s.unit==="%"&&n.unit==="%"&&r.unit==="%"){const o=100-r.value-s.value,l=100-e.value-n.value,d=o>0?100/o:1,c=l>0?100/l:1;return Math.max(d,c,1)}else if(t){const o=Ct(t.width),l=Ct(t.height);let d,c;o.unit==="vw"?d=window.innerWidth*o.value/100:o.unit==="vh"?d=window.innerHeight*o.value/100:l.unit==="%"?d=window.innerWidth*o.value/100:d=o.value,l.unit==="vw"?c=window.innerWidth*l.value/100:l.unit==="vh"?c=window.innerHeight*l.value/100:l.unit==="%"?c=window.innerWidth*l.value/100:c=l.value;const p=e.unit==="%"?e.value*c/100:e.value,a=s.unit==="%"?s.value*d/100:s.value,f=n.unit==="%"?n.value*c/100:n.value,h=r.unit==="%"?r.value*d/100:r.value,g=d-h-a,b=c-p-f,y=g>0?d/g:1,x=b>0?c/b:1;return Math.max(y,x,1)}return 1},fn=()=>{const i="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,t=window.innerWidth<=768,e=navigator.userAgent.toLowerCase(),s=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e);return i&&(t||s)},K0=50,J0=300,Z0=300,Q0=(i,t,e,s,n,r)=>{if(r&&document.querySelector(`.nxa-fullsize-container[data-instance="${r}"]`)||document.querySelector(".nxa-fullsize-container"))return;const o=document.createElement("div");o.className="nxa-fullsize-container";const l=document.createElement("div");l.className="nxa-fullsize-dark-overlay";const d=document.createElement("div");d.className="nxa-fullsize-bg",d.style.backgroundImage=`url(${JSON.stringify(i.src)})`;const c=document.createElement("img");c.src=i.src,c.className="nxa-fullsize-image",r&&(o.setAttribute("data-instance",r),l.setAttribute("data-instance",r),d.setAttribute("data-instance",r),c.setAttribute("data-instance",r));const p=document.createElement("button");p.className="nxa-fullsize-close-btn",p.setAttribute("aria-label","Close fullsize image"),p.style.display=t?"inline-grid":"none",r&&p.setAttribute("data-instance",r),o.appendChild(l),o.appendChild(d),o.appendChild(c),o.appendChild(p);const a={startX:0,startY:0,endX:0,endY:0,isSwiping:!1,touchHandled:!1,touchStartTime:0,isButtonTouch:!1,touchTarget:null};if(s&&n){const v=document.createElement("button");v.className="nxa-fullsize-nav-btn prev",v.innerHTML="❮",v.addEventListener("touchstart",ut=>{ut.stopPropagation(),a.isButtonTouch=!0,a.touchHandled=!0,n()},{passive:!1}),v.addEventListener("click",ut=>{ut.stopPropagation(),a.touchHandled||n()});const U=document.createElement("button");U.className="nxa-fullsize-nav-btn next",U.innerHTML="❯",U.addEventListener("touchstart",ut=>{ut.stopPropagation(),a.isButtonTouch=!0,a.touchHandled=!0,s()},{passive:!1}),U.addEventListener("click",ut=>{ut.stopPropagation(),a.touchHandled||s()}),r&&(v.setAttribute("data-instance",r),U.setAttribute("data-instance",r)),o.appendChild(v),o.appendChild(U)}const f=()=>{document.removeEventListener("keydown",u),l.removeEventListener("click",f),c.removeEventListener("click",h),p.removeEventListener("click",b),o.removeEventListener("touchstart",y),o.removeEventListener("touchmove",x),o.removeEventListener("touchend",m),o.removeEventListener("touchcancel",w),o.classList.add("closing"),setTimeout(()=>{o.remove(),document.querySelector(".nxa-fullsize-container"),e?.()},Z0)},h=()=>{f()},g=v=>{const U=v.target;U.classList.contains("nxa-fullsize-nav-btn")||U.closest(".nxa-fullsize-nav-btn")||U===p||U.closest(".nxa-fullsize-close-btn")||f()},b=v=>{v.stopPropagation(),f()},y=v=>{v.touches.length>1||a.isButtonTouch||(a.touchTarget=v.target,!(a.touchTarget===p||a.touchTarget===c)&&(a.startX=v.touches[0].clientX,a.startY=v.touches[0].clientY,a.isSwiping=!1,a.touchHandled=!1,a.touchStartTime=Date.now(),o.classList.add("touch-active")))},x=v=>{if(v.touches.length>1||a.isButtonTouch||a.touchTarget===p||a.touchTarget===c)return;const U=v.touches[0].clientX,ut=v.touches[0].clientY,wl=U-a.startX,af=ut-a.startY;!a.isSwiping&&Math.abs(wl)>10&&(a.isSwiping=!0),a.isSwiping&&Math.abs(wl)>Math.abs(af)&&(v.preventDefault(),a.touchHandled=!0,a.endX=U,a.endY=ut)},m=()=>{if(a.isButtonTouch){a.isButtonTouch=!1;return}if(a.touchTarget===p||a.touchTarget===c){f();return}const v=Date.now()-a.touchStartTime,U=a.endX-a.startX,ut=a.endY-a.startY;a.isSwiping=!1,o.classList.remove("touch-active"),Math.abs(U)>Math.abs(ut)&&Math.abs(U)>K0?U>0&&n?n():U<0&&s&&s():!a.touchHandled&&v<300&&f(),setTimeout(()=>{a.touchHandled=!1,a.endX=0,a.endY=0,a.touchTarget=null},J0)},w=()=>{a.isSwiping=!1,a.touchHandled=!1,a.isButtonTouch=!1,a.touchTarget=null,o.classList.remove("touch-active")},u=v=>{v.key==="Escape"?f():v.key==="ArrowLeft"&&n?n():v.key==="ArrowRight"&&s&&s()};c.addEventListener("click",h,!0),l.addEventListener("click",f),o.addEventListener("click",g),p.addEventListener("click",b),o.addEventListener("touchstart",y,{passive:!0}),o.addEventListener("touchmove",x,{passive:!1}),o.addEventListener("touchend",m,{passive:!0}),o.addEventListener("touchcancel",w,{passive:!0}),document.addEventListener("keydown",u),document.body.appendChild(o)};var tw=Object.defineProperty,ew=Object.getOwnPropertyDescriptor,D=(i,t,e,s)=>{for(var n=s>1?void 0:s?ew(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&tw(t,e,n),n};let M=class extends Pt{constructor(){super(),this.globalDataCrop={},this.childDataCrop=[],this._features=[],this._styleSignature="",this._styleObserver=null,this.slidesShowConfig={},this.fullSize=!1,this.roundBorders=!1,this.debug=!1,this.isFullSizeActive=!1,this.currentCaption="",this.touchStartX=0,this.touchStartY=0,this.touchEndX=0,this.touchEndY=0,this.isMobileDevice=!1,this.isPaused=!1,this.slideProgress=0,this.isSwiping=!1,this.swipeDistance=0,this.swipeThreshold=50,this.swipeVelocityThreshold=.3,this._intervalId=null,this._resizeObserver=null,this._boundHandleResize=null,this._boundPauseSlideshow=null,this._boundResumeSlideshow=null,this.handleSlotChange=()=>{this.refreshStyles(),this.childDataCrop=[],Array.from(this.children).forEach((t,e)=>{this.childDataCrop[e]=mn(t?.getAttribute("data-crop")||"")}),this.cropImages(),this.updateCurrentCaption(),this.preventImageDrag(),this.slidesShowConfig.enabled&&this.attachSlideshowStyles(),this.fullSize&&(this.removeFullsizeClickHandlers(),this.addFullsizeClickHandlers())},this.handleFullsizeClick=t=>{if(!this.fullSize)return;const e=t.target;t.stopPropagation(),this.debugLog("Image clicked for fullsize view",{src:e.src,fullSize:this.fullSize}),this.onImageClick&&(this.onImageClick(e,t),this.debugLog("onImageClick callback called"));let s;if(this.slidesShowConfig.enabled?(s=this.querySelector("img.active")||e,this.debugLog("Using active slide for fullsize view",{src:s.src})):(s=e,this.debugLog("Using clicked image for fullsize view",{src:s.src})),s){this.isFullSizeActive=!0,this.debugLog("Setting isFullSizeActive to true"),this.slidesShowConfig.enabled&&this.pauseSlideshow();const n=()=>{this.isFullSizeActive=!1,this.debugLog("Fullsize view closed"),this.onFullscreenExit&&(this.onFullscreenExit(s),this.debugLog("onFullscreenExit callback called")),this.slidesShowConfig.enabled&&this.resumeSlideshow()},r=Array.from(this.children).filter(l=>l instanceof HTMLImageElement||l.tagName.toLowerCase()==="img").length,o=r>1;this.debugLog("Calling createFullsizeView",{imgSrc:s.src,isMobileDevice:this.isMobileDevice,hasNavigation:o,imageCount:r,hasOnNext:!!this.handleFullscreenNext,hasOnPrev:!!this.handleFullscreenPrev}),Q0(s,this.isMobileDevice,n,o?this.handleFullscreenNext:void 0,o?this.handleFullscreenPrev:void 0,this._instanceId),this.onFullscreenEnter&&(this.onFullscreenEnter(s),this.debugLog("onFullscreenEnter callback called"))}else this.debugLog("No image found for fullsize view")},this.nextSlide=()=>{this.slideProgress=0;const t=this.querySelector("img.active");if(!t)return;const e=t.nextElementSibling||this.querySelector("img:first-child");if(e&&(t.classList.remove("active"),e.classList.add("active"),this.updateCurrentCaption(),this.onSlideChange)){const s=Array.from(this.querySelectorAll("img")).indexOf(e);this.onSlideChange(s,e)}this.requestUpdate()},this.prevSlide=()=>{this.slideProgress=0;const t=this.querySelector("img.active");if(!t)return;const e=t.previousElementSibling||this.querySelector("img:last-child");if(e&&(t.classList.remove("active"),e.classList.add("active"),this.updateCurrentCaption(),this.onSlideChange)){const s=Array.from(this.querySelectorAll("img")).indexOf(e);this.onSlideChange(s,e)}this.requestUpdate()},this.pauseSlideshow=()=>{this.isPaused=!0;const t=this.querySelector("img.active");t&&this.onSlideshowPause&&this.onSlideshowPause(t),this.requestUpdate()},this.resumeSlideshow=()=>{if(this.isFullSizeActive)return;this.isPaused=!1;const t=this.querySelector("img.active");t&&this.onSlideshowResume&&this.onSlideshowResume(t),this.requestUpdate()},this.handleTouchMove=t=>{if(this.isFullSizeActive||!this.isSwiping)return;this.touchEndX=t.touches[0].clientX,this.touchEndY=t.touches[0].clientY;const e=this.touchStartX-this.touchEndX,s=this.touchStartY-this.touchEndY;if(Math.abs(e)>Math.abs(s)&&(t.preventDefault(),this.swipeDistance=e,this.isFullSizeActive)){const n=document.querySelector(`.nte-fullsize-image[data-instance="${this._instanceId}"]`);n&&(n.style.transform=`translateX(${e}px)`)}},this.handleFullscreenNext=()=>{if(Array.from(this.children).filter(t=>t instanceof HTMLImageElement||t.tagName.toLowerCase()==="img").length>1){this.nextSlide();const t=this.querySelector("img.active");if(t){const e=document.querySelector(`.nxa-fullsize-image[data-instance="${this._instanceId}"]`),s=document.querySelector(`.nxa-fullsize-bg[data-instance="${this._instanceId}"]`);e&&s&&(e.style.transition="transform 0.3s ease-out",e.src=t.src,s.style.backgroundImage=`url(${t.src})`,setTimeout(()=>{e.style.transition=""},300))}}},this.handleFullscreenPrev=()=>{if(Array.from(this.children).filter(t=>t instanceof HTMLImageElement||t.tagName.toLowerCase()==="img").length>1){this.prevSlide();const t=this.querySelector("img.active");if(t){const e=document.querySelector(`.nxa-fullsize-image[data-instance="${this._instanceId}"]`),s=document.querySelector(`.nxa-fullsize-bg[data-instance="${this._instanceId}"]`);e&&s&&(e.style.transition="transform 0.3s ease-out",e.src=t.src,s.style.backgroundImage=`url(${t.src})`,setTimeout(()=>{e.style.transition=""},300))}}},this.handleResize=()=>{this.isMobileDevice=fn()},this._instanceId=`nte-image-${Math.random().toString(36).substring(2,11)}`}debugLog(t,e){this.debug&&console.log(`[nte-image] ${t}`,e)}connectedCallback(){super.connectedCallback(),this.debugLog("Component connected to DOM"),this.childDataCrop=[],this.slidesShowConfig={},this.globalDataCrop={},this.globalDataCrop=mn(this.getAttribute("data-crop")||""),Array.from(this.children).forEach((t,e)=>{this.childDataCrop[e]=mn(t?.getAttribute("data-crop")||"")}),this._styleSignature="",this.refreshStyles(),this._styleObserver=new MutationObserver(()=>this.refreshStyles()),this._styleObserver.observe(this,{attributes:!0,attributeFilter:["class","style"]}),this.updateCurrentCaption(),requestAnimationFrame(()=>{this.cropImages(),this._resizeObserver=new ResizeObserver(()=>{this.cropImages()}),this._resizeObserver.observe(this)}),this.isMobileDevice=fn(),this.isMobileDevice&&(this.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),this.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),this.addEventListener("touchend",this.handleTouchEnd,{passive:!1})),this._boundHandleResize=this.handleResize,window.addEventListener("resize",this._boundHandleResize),setTimeout(()=>{this.checkAndRestartSlideshow()},100)}disconnectedCallback(){var t;super.disconnectedCallback(),this.clearInterval(),(t=this._styleObserver)==null||t.disconnect(),this._styleObserver=null,this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this.isMobileDevice&&(this.removeEventListener("touchstart",this.handleTouchStart),this.removeEventListener("touchmove",this.handleTouchMove),this.removeEventListener("touchend",this.handleTouchEnd)),this.fullSize&&this.removeFullsizeClickHandlers(),this._boundHandleResize&&(window.removeEventListener("resize",this._boundHandleResize),this._boundHandleResize=null),this._boundPauseSlideshow&&(this.removeEventListener("mouseenter",this._boundPauseSlideshow),this._boundPauseSlideshow=null),this._boundResumeSlideshow&&(this.removeEventListener("mouseleave",this._boundResumeSlideshow),this._boundResumeSlideshow=null)}clearInterval(){this._intervalId!==null&&(clearInterval(this._intervalId),this._intervalId=null)}refreshStyles(){if(!this.isConnected)return;const t=getComputedStyle(this),e=t.getPropertyValue("--nte-image-features").trim(),s=t.getPropertyValue("--nte-image-interval").trim(),n=this.querySelectorAll(":scope > img").length,r=JSON.stringify([e,s,n]);if(r===this._styleSignature)return;this._styleSignature=r,this._features=e.split(/\s+/).filter(Boolean);const o=!e||this._features.includes("auto"),l=this._features.includes("none"),d=!l&&(this._features.includes("slideshow")||o&&n>1),c=/^(\d+(?:\.\d+)?)(ms|s)?$/.exec(s),p=c?Number(c[1])*(c[2]==="s"?1e3:1):0,a=this.fullSize;this.fullSize=!l&&this._features.includes("fullsize"),this.roundBorders=!l&&this._features.includes("round-borders"),this.slidesShowConfig={enabled:d,interval:Number.isFinite(p)&&p>0?p:jc,pauseOnHover:!this._features.includes("dont-pause-on-hover"),showArrows:!l&&(this._features.includes("arrows")||o),showIndicators:!l&&(this._features.includes("indicators")||o),transition:this._features.includes("blend")?"blend":"fade"},this.classList.toggle("round-borders",this.roundBorders),this.classList.toggle("fullsize",this.fullSize),this.classList.toggle("blend",!l&&this._features.includes("blend")),this.classList.toggle("slideshow",d),this.classList.toggle("single-image",!d),this.clearInterval(),this._boundPauseSlideshow&&this.removeEventListener("mouseenter",this._boundPauseSlideshow),this._boundResumeSlideshow&&this.removeEventListener("mouseleave",this._boundResumeSlideshow),this._boundPauseSlideshow=null,this._boundResumeSlideshow=null,this.isPaused=this.isFullSizeActive||this.slidesShowConfig.pauseOnHover===!0&&this.matches(":hover"),d&&(this.attachSlideshowStyles(),this.initSlideshowInterval()),a!==this.fullSize&&(this.fullSize?this.initFullSize():this.removeFullsizeClickHandlers()),this.updateCurrentCaption(),this.requestUpdate()}firstUpdated(t){super.firstUpdated(t),this.isMobileDevice=fn(),this.slidesShowConfig.enabled&&(this.attachSlideshowStyles(),this.initSlideshowInterval()),this.fullSize&&this.initFullSize(),this.preventImageDrag(),this.requestUpdate()}render(){return super.render(),k`
      <div class="nte-image-root" part="root">
        ${this.slidesShowConfig.showArrows&&this.slidesShowConfig.enabled?k`
              <div class="navigation-arrows" part="navigation-arrows">
                <button type="button" class="arrow-button prev" part="previous-button" aria-label="Vorheriges Bild" @click=${this.prevSlide}>&lt;</button>
                <button type="button" class="arrow-button next" part="next-button" aria-label="Nächstes Bild" @click=${this.nextSlide}>&gt;</button>
              </div>
            `:_}
        ${this.slidesShowConfig.showIndicators&&this.slidesShowConfig.enabled?k` <div class="indicators" part="indicators">${this.renderIndicators()}</div> `:_}
        <div class="image-container" part="image-container">
          <slot @slotchange=${this.handleSlotChange}></slot>
          ${this.slidesShowConfig.enabled&&this.isPaused?k`
                <div class="pause-indicator">
                  <div class="pause-icon"></div>
                </div>
              `:_}
        </div>
        <div class="caption-container" part="caption-container">
          <div class="caption">${this.currentCaption||""}</div>
        </div>
      </div>
    `}updateCurrentCaption(){if(this.slidesShowConfig.enabled){const e=this.querySelector("img.active");if(e){this.currentCaption=e.getAttribute("data-caption")||"";return}}const t=this.querySelector("img");t&&(this.currentCaption=t.getAttribute("data-caption")||"")}initFullSize(){this.debugLog("Initializing fullsize feature"),this.removeFullsizeClickHandlers(),setTimeout(()=>{this.addFullsizeClickHandlers(),this.debugLog("Fullsize click handlers added to images (delayed)")},100)}addFullsizeClickHandlers(){if(!this.isConnected||!this.fullSize)return;const t=Array.from(this.querySelectorAll("img"));if(this.debugLog("Adding click handlers to images",{imageCount:t.length,fullSize:this.fullSize,features:this._features}),t.length===0){this.debugLog("No images found in component");return}const e=t.map(s=>s.complete?Promise.resolve():new Promise(n=>{s.onload=n,s.onerror=n}));Promise.all(e).then(()=>{!this.isConnected||!this.fullSize||(this.debugLog("All images loaded, adding click handlers"),t.forEach((s,n)=>{s.removeEventListener("click",this.handleFullsizeClick),s.addEventListener("click",this.handleFullsizeClick,{capture:!0});const r=s.onclick!==null||s.hasAttribute("onclick");this.debugLog(`Added click handler to image ${n}`,{src:s.src,hasListener:r,imgOnClick:s.onclick,imgHasOnclickAttr:s.hasAttribute("onclick"),imgComplete:s.complete,imgNaturalWidth:s.naturalWidth,imgNaturalHeight:s.naturalHeight}),s.addEventListener("click",o=>{this.debugLog("Test click detected on image",{src:s.src,event:o})},{capture:!0})}))})}removeFullsizeClickHandlers(){Array.from(this.querySelectorAll("img")).forEach(t=>{t.removeEventListener("click",this.handleFullsizeClick)})}attachSlideshowStyles(){const t=Array.from(this.children).find(e=>e instanceof HTMLImageElement);t&&!this.querySelector("img.active")&&t.classList.add("active"),this.classList.add("slideshow"),this.fullSize&&this.addFullsizeClickHandlers()}initSlideshowInterval(){this.clearInterval();const t=this.slidesShowConfig.interval||jc;this.slideProgress=0;const e=50,s=e/t*100;this._intervalId=window.setInterval(()=>{if(!this.isConnected){this.debugLog("Component disconnected, clearing interval"),this.clearInterval();return}this.isPaused||(this.slideProgress+=s,this.slideProgress>=100&&(this.slideProgress=0,this.debugLog("Slideshow advancing to next slide"),this.nextSlide()),this.requestUpdate())},e),this.slidesShowConfig.pauseOnHover&&(this._boundPauseSlideshow=this.pauseSlideshow,this._boundResumeSlideshow=this.resumeSlideshow,this.addEventListener("mouseenter",this._boundPauseSlideshow),this.addEventListener("mouseleave",this._boundResumeSlideshow))}cropImages(){Array.from(this.children).forEach((t,e)=>{if(!(t instanceof HTMLImageElement))return;const s={...this.globalDataCrop,...this.childDataCrop[e]},n={width:`${this.offsetWidth}px`,height:`${this.offsetHeight}px`};X0(t,s,n)})}renderIndicators(){const t=Array.from(this.querySelectorAll("img"));return t.length===0?_:t.map((e,s)=>{const n=s===this.getCurrentSlideIndex();return k`
        <div class="indicator-container">
          <div class="indicator ${n?"active":""}" @click=${()=>this.goToSlide(s)}>
            ${n?k`<div
                  class="progress-bar ${this.isPaused?"paused":""}"
                  style="width: ${this.slideProgress}%"
                ></div>`:_}
          </div>
        </div>
      `})}getCurrentSlideIndex(){const t=Array.from(this.querySelectorAll("img")),e=this.querySelector("img.active");return t.indexOf(e)}goToSlide(t){this.slideProgress=0;const e=Array.from(this.querySelectorAll("img")),s=this.querySelector("img.active");s&&s.classList.remove("active"),e[t]&&(e[t].classList.add("active"),this.updateCurrentCaption()),this._intervalId!==null&&(this.clearInterval(),this.initSlideshowInterval())}handleTouchStart(t){this.isFullSizeActive||(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY)}handleTouchEnd(t){if(this.isFullSizeActive||!this.slidesShowConfig.enabled)return;const e=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY,n=this.touchStartX-e,r=this.touchStartY-s;Math.abs(n)>Math.abs(r)&&Math.abs(n)>50&&(t.preventDefault(),n>0?this.nextSlide():this.prevSlide())}checkAndRestartSlideshow(){this.slidesShowConfig.enabled&&this._intervalId===null&&this.initSlideshowInterval()}preventImageDrag(){Array.from(this.querySelectorAll("img")).forEach(t=>{t.setAttribute("draggable","false"),t.addEventListener("dragstart",e=>e.preventDefault())})}};M.styles=[E(Y0)];D([$({type:Object})],M.prototype,"globalDataCrop",2);D([$({type:Array})],M.prototype,"childDataCrop",2);D([T()],M.prototype,"slidesShowConfig",2);D([T()],M.prototype,"fullSize",2);D([T()],M.prototype,"roundBorders",2);D([$({type:Function})],M.prototype,"onSlideChange",2);D([$({type:Function})],M.prototype,"onFullscreenEnter",2);D([$({type:Function})],M.prototype,"onFullscreenExit",2);D([$({type:Function})],M.prototype,"onSlideshowPause",2);D([$({type:Function})],M.prototype,"onSlideshowResume",2);D([$({type:Function})],M.prototype,"onImageClick",2);D([$({type:Boolean})],M.prototype,"debug",2);D([T()],M.prototype,"isFullSizeActive",2);D([T()],M.prototype,"currentCaption",2);D([T()],M.prototype,"touchStartX",2);D([T()],M.prototype,"touchStartY",2);D([T()],M.prototype,"touchEndX",2);D([T()],M.prototype,"touchEndY",2);D([T()],M.prototype,"isMobileDevice",2);D([T()],M.prototype,"isPaused",2);D([T()],M.prototype,"slideProgress",2);D([T()],M.prototype,"isSwiping",2);D([T()],M.prototype,"swipeDistance",2);D([T()],M.prototype,"swipeThreshold",2);D([T()],M.prototype,"swipeVelocityThreshold",2);M=D([j("nte-image")],M);var iw=Object.defineProperty,sw=Object.getOwnPropertyDescriptor,Dt=(i,t,e,s)=>{for(var n=s>1?void 0:s?sw(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&iw(t,e,n),n};let bt=class extends be{constructor(){super(...arguments),this.variant="mobile",this.color="var(--nt-primary)",this.backgroundColor="var(--nt-light)",this.height="",this.borderRadius=5,this.showAfterScroll=70,this.transitionDuration=.1,this.offsetSelector="",this.offsetTop=70,this.progress=0,this.isVisible=!1,this.computedOffsetTop=70,this.recomputeOffsetTop=()=>{let i=this.offsetTop;if(this.offsetSelector){const t=document.querySelector(this.offsetSelector);if(t){const e=t.getBoundingClientRect();i=Math.max(0,Math.round(e.height))}}i!==this.computedOffsetTop&&(this.computedOffsetTop=i,this.requestUpdate())},this.isTickScheduled=!1,this.handleScroll=()=>{this.isTickScheduled||(this.isTickScheduled=!0,requestAnimationFrame(()=>{const i=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)-window.innerHeight,t=i>0?window.scrollY/i*100:0;this.progress=Math.min(Math.max(t,0),100),this.variant==="mobile"?this.isVisible=window.scrollY>this.showAfterScroll:this.isVisible=!0,this.isTickScheduled=!1,this.requestUpdate()}))}}connectedCallback(){super.connectedCallback(),this.setupScrollListener(),this.setupOffsetObservers()}disconnectedCallback(){super.disconnectedCallback(),this.removeScrollListener(),this.teardownOffsetObservers()}setupScrollListener(){window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.handleScroll()}removeScrollListener(){window.removeEventListener("scroll",this.handleScroll)}setupOffsetObservers(){if(this.recomputeOffsetTop(),window.addEventListener("resize",this.recomputeOffsetTop,{passive:!0}),this.offsetSelector&&"ResizeObserver"in window){const i=document.querySelector(this.offsetSelector);i&&(this.resizeObserver=new ResizeObserver(()=>this.recomputeOffsetTop()),this.resizeObserver.observe(i))}}teardownOffsetObservers(){window.removeEventListener("resize",this.recomputeOffsetTop),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=void 0)}updated(i){i.has("offsetSelector")&&(this.teardownOffsetObservers(),this.setupOffsetObservers())}getProgressBarStyles(){return`
      height: ${this.variant==="desktop"?this.height&&this.height.trim().length>0?this.height:"var(--nt-space-3)":this.height&&this.height.trim().length>0?this.height:"4px"};
      border-radius: calc(0.25rem * ${this.borderRadius});
      background-color: var(--nt-${this.backgroundColor}, #EDF1F8);
    `}getProgressFillStyles(){return`
      height: 100%;
      width: ${this.progress}%;
      background-color: var(--nt-${this.color}, #FE6606);
      transition: width ${this.transitionDuration}s ease-out;
    `}getContainerStyles(){const i=this.getProgressBarStyles();return this.variant==="mobile"?`${i} display: ${this.isVisible?"block":"none"}; top: ${this.computedOffsetTop}px; position: sticky;`:i}render(){return zt`
      <div
        class="progress-container ${this.variant==="mobile"?"mobile-variant":"desktop-variant"}"
        style="${this.getContainerStyles()}"
      >
        <div
          class="progress-bar"
          style="${this.getProgressFillStyles()}"
        ></div>
      </div>
    `}};bt.styles=If`
    :host {
      display: block;
    }

    .progress-container {
      position: relative;
      overflow: hidden;
      transition: opacity 0.3s ease-in-out;
    }

    .progress-bar {
      height: 100%;
      transition: width 0.1s ease-out;
    }

    .mobile-variant {
      position: sticky;
      z-index: 10;
    }

    .desktop-variant {
      /* Desktop specific styles can be added here */
    }

    .hidden {
      display: none !important;
    }
  `;Dt([tt({type:String,attribute:"variant"})],bt.prototype,"variant",2);Dt([tt({type:String,attribute:"color"})],bt.prototype,"color",2);Dt([tt({type:String,attribute:"background-color"})],bt.prototype,"backgroundColor",2);Dt([tt({type:String,attribute:"height"})],bt.prototype,"height",2);Dt([tt({type:Number,attribute:"border-radius"})],bt.prototype,"borderRadius",2);Dt([tt({type:Number,attribute:"show-after-scroll"})],bt.prototype,"showAfterScroll",2);Dt([tt({type:Number,attribute:"transition-duration"})],bt.prototype,"transitionDuration",2);Dt([tt({type:String,attribute:"offset-selector"})],bt.prototype,"offsetSelector",2);Dt([tt({type:Number,attribute:"offset-top"})],bt.prototype,"offsetTop",2);bt=Dt([Xs("progress-bar")],bt);async function nw(i){return new Promise(t=>{window.setTimeout(()=>t(),i)})}var Vs=class Ls{static RATIO_SHORTCUTS={a:"1-1",b:"4-3",c:"3-2",d:"16-9",e:"21-9",B:"3-4",C:"2-3",D:"9-16",E:"9-21"};static WIDTH_SHORTCUTS={a:"260",b:"414",c:"896",d:"1280",e:"1440",f:"1920",g:"2560"};static CDN_V2_REGEX=/(?:^|\/)v2\/[^\/]+\/[^\/]+_[^\/]+\/[^\/]+\.[a-z0-9_]+(?:$|[?#])/i;static isCdnImage(t){return typeof t!="string"||t.length===0?!1:Ls.CDN_V2_REGEX.test(t)}static decode(t){let e=t.split("/");if(e.length<4)throw Error("Invalid url format"+this.url);let s=e[1],[n,r]=e[2].split("_"),[o,l]=e[3].split(".");if(!n||!r||!o||!l)throw Error("Invalid url format: "+this.url);return r=r.replaceAll(/([a-zA-Z])/g,d=>"-"+(Ls.WIDTH_SHORTCUTS[d]??d)+"-"),n=n.replaceAll(/([a-zA-Z])/g,d=>Ls.RATIO_SHORTCUTS[d]??d),{id:s,aspectRatio:n.split("-").join("/"),widths:r.split("-").filter(d=>d.trim()!==""),filename:o,extensions:l.split("_")}}},Ip=class{rules;constructor(t){let e=(t??"").trim();if(!e){this.rules=[];return}if(/^[0-9]+(?:\.[0-9]+)?$/.test(e)){let r=parseFloat(e);if(!(r>0))throw Error("Scale must be a positive number");this.rules=[{minScreen:0,scale:r}];return}let s=e.split(";").map(r=>r.trim()).filter(Boolean);if(s.length===0)throw Error("Invalid adjust-sizes input");let n=new Map;for(let r of s){let o;if(o=r.match(/^:([0-9]+(?:\.[0-9]+)?)$/),o){let l=parseFloat(o[1]);if(!(l>0))throw Error(`Invalid scale in entry "${r}"`);n.set(0,l);continue}if(o=r.match(/^([0-9]+):([0-9]+(?:\.[0-9]+)?)$/),o){let l=parseInt(o[1],10),d=parseFloat(o[2]);if(!(d>0))throw Error(`Invalid scale in entry "${r}"`);n.set(l,d);continue}throw Error(`Invalid adjust-sizes entry: "${r}"`)}this.rules=Array.from(n.entries()).sort((r,o)=>r[0]-o[0]).map(([r,o])=>({minScreen:r,scale:o}))}getSizeAdjustment(t=void 0){t===void 0&&(t=window.innerWidth||document.documentElement.clientWidth||0);let e=this.rules.length>0?this.rules[this.rules.length-1].scale:1;for(let s of this.rules)if(t>=s.minScreen)e=s.scale;else break;return e}},rw=class Jn{static RATIO_SHORTCUTS={"1-1":"a","4-3":"b","3-2":"c","16-9":"d","21-9":"e","3-4":"B","2-3":"C","9-16":"D","9-21":"E"};static WIDTH_SHORTCUTS={260:"a",414:"b",896:"c",1280:"d",1440:"e",1920:"f",2560:"g"};widths;ratio;extensions;constructor(t,e){this.id=t,this.filename=e,this.widths=[],this.extensions=[],this.ratio=""}setAspectRatio(t,e){this.ratio=`${t}-${e}`}setReatio(t){t=t.replaceAll("/","-"),this.ratio=t}setWidths(t){return console.log("set widths",t),this.widths=t.map(e=>e.toString()),this}addWidth(t){this.widths.push(t.toString())}setExtensions(t){return this.extensions=t,this}toString(){let t=this.widths.join("-"),e=this.extensions.join("_"),s=this.ratio;return s=s.replace(/([0-9\-]+)/,n=>Jn.RATIO_SHORTCUTS[n]??n),t=t.replace(/([0-9]+)/g,n=>Jn.WIDTH_SHORTCUTS[n]??n),`v2/${this.id}/${s}_${t}/${this.filename}.${e}`}},Hc=class{base;path;origUri;sizeAdjustment=1;debug=!1;constructor(t,e,s){this.image=t,this.logger=s;let n=t.getAttribute("data-src")||t.getAttribute("src");s.debug("Constructor image with URI: "+n,t),this.origUri=n,n.replace(/^(.*?\/)(v2\/.*)$/,(l,d,c)=>(this.base=d,this.path=c,""));let r=t.getAttribute("data-size-adjust");if(r)try{e=new Ip(r).getSizeAdjustment()}catch(l){s.error(`Failed to parse attribute 'data-size-adjust="${r}"' for image`,t,l)}this.sizeAdjustment=e;let o=Vs.decode(this.path);if(this.setOptimalImageDimensions(o),!n.endsWith(".svg")){if(this.image.getAttribute("loading")==="eager"){this.loadHiRes(o);return}(async()=>(await this.image.decode().catch(()=>{}),this.loadHiRes(o)))()}}reload(){let t=Vs.decode(this.path);this.loadHiRes(t)}async loadHiRes(t){if(await xn(),await xn(this.image),await nw(40),!this.image.isConnected)return;let e=null,s=window.innerWidth||document.documentElement.clientWidth,n=e=this.image.getBoundingClientRect().width;(e===0||e===null)&&(e=s),e=Math.round(e*this.sizeAdjustment);let r=parseInt(t.widths[0]);for(let d of t.widths){let c=parseInt(d);if(c<e)break;r=c}this.logger.debug("MicxCdnImgElement: Best fitting width for "+t.filename+" is "+r+"px (clientBoundingRect = "+n+" windowWidth="+s+" px, sizeAdjustment="+this.sizeAdjustment+")");let o=new rw(t.id,t.filename);o.setReatio(t.aspectRatio),o.addWidth(r),o.setExtensions(t.extensions);let l=this.base+"/"+o.toString();this.image.style.backgroundSize="cover",this.image.style.backgroundImage="url("+this.origUri+")",this.image.setAttribute("src",l),this.image.addEventListener("load",()=>{this.image.style.backgroundImage="none",this.image.classList.add("loaded")})}setOptimalImageDimensions(t){let e=t.aspectRatio.split("/").map(r=>parseInt(r)),s=e[0]/e[1],n=parseInt(t.widths[0]);for(let r of t.widths){let o=parseInt(r);if(o<innerWidth)break;n=o}this.image.setAttribute("width",n.toString()),this.image.setAttribute("height",(n/s).toString()),this.image.classList.add("micx-image-loader"),this.image.hasAttribute("alt")===!1&&this.image.setAttribute("alt",t.filename)}},aw=new ls(500,1e3),ow=class extends Bs(HTMLElement){static get observedAttributes(){return["default-size-adjust"]}_observer;_seen=new WeakSet;_imageDefaultSizeAdjustment=1;_windowWidth=window.innerWidth;onResize=async()=>{await aw.wait(),this._windowWidth!==window.innerWidth&&(this._windowWidth=window.innerWidth,this.log("Resize event detected, reprocessing images"),this.querySelectorAll("img").forEach(t=>{let e=t.getAttribute("data-src")||t.src||"";if(!Vs.isCdnImage(e)){this.debug("Image is not a CDN image, skipping:",t);return}new Hc(t,this._imageDefaultSizeAdjustment,this.getLogger())}))};async connectedCallback(){this.debug("MicxCdnImageLoader connected to DOM"),await vr(),this.updateDefaultSizeAdjustment(),this.startObserving(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){this.stopObserving(),window.removeEventListener("resize",this.onResize)}startObserving(){this._observer||(this.querySelectorAll("img").forEach(t=>this._enqueue(t)),this._observer=new MutationObserver(t=>{for(let e of t)if(!(e.type!=="childList"||e.addedNodes.length===0))for(let s=0;s<e.addedNodes.length;s++){let n=e.addedNodes[s];if(n.nodeType!==Node.ELEMENT_NODE)continue;let r=n,o=Array.from(r.getElementsByTagName("img"));o.length>0&&o.forEach(l=>this._enqueue(l)),r.tagName==="IMG"&&this._enqueue(r)}}),this._observer.observe(this,{childList:!0,subtree:!0}))}stopObserving(){this._observer&&=(this._observer.disconnect(),void 0)}_enqueue(t){this._seen.has(t)||(this._seen.add(t),queueMicrotask(()=>this.onImageAdded(t)))}updateDefaultSizeAdjustment(){let t=this.getAttribute("default-size-adjust");if(!t){this._imageDefaultSizeAdjustment=1;return}try{this._imageDefaultSizeAdjustment=new Ip(t).getSizeAdjustment()}catch(e){this.error("Failed to parse default-size-adjust=",t,e),this._imageDefaultSizeAdjustment=1}}attributeChangedCallback(t,e,s){this.debug("Properties changed:",t),t==="default-size-adjust"&&this.updateDefaultSizeAdjustment()}onImageAdded(t){if(this.debug("onImageAdded image:",t),!Vs.isCdnImage(t.src||t.getAttribute("data-src"))){this.debug("Image is not a CDN image, skipping:",t);return}if(t.hasAttribute("loading")||t.setAttribute("loading","lazy"),!t.hasAttribute("src")){if(!t.hasAttribute("data-src")){this.warn("Image without src or data-src found, skipping:",t);return}t.src=t.getAttribute("data-src")}t.hasAttribute("data-src")||t.setAttribute("data-src",t.src),this.debug("new CDN image:",t,"with default size adjustment:",this._imageDefaultSizeAdjustment),new Hc(t,this._imageDefaultSizeAdjustment,this.getLogger())}};customElements.define("micx-cdn-image-loader",ow);function lw(i){class t extends i{#t;connectedCallback(){super.connectedCallback(),this.ensureDefaultStyleClass(),this.#e()}disconnectedCallback(){this.#t?.disconnect(),this.#t=void 0,super.disconnectedCallback()}ensureDefaultStyleClass(){Array.from(this.classList).some(s=>s.startsWith("style-"))||this.classList.add("style-default")}#e(){this.#t===void 0&&(this.#t=new MutationObserver(()=>this.ensureDefaultStyleClass()),this.#t.observe(this,{attributes:!0,attributeFilter:["class"]}))}}return t}const cw={logging:!0,slotVisibility:!1,eventBinding:!1,breakpoints:!1,setDefaultStyle:!0,subLayoutApply:!1};function Dp(i={}){const t={...cw,...i};let e=be;return e=bd(e),t.setDefaultStyle&&(e=lw(e)),t.logging&&(e=Bs(e)),t.slotVisibility&&(e=Pf(e)),t.breakpoints&&(e=Of(e)),t.eventBinding&&(e=br(e)),t.subLayoutApply&&(e=Nd(e)),e}const dw="",hw=':host{display:contents}slot[name=launcher].slot-empty{display:none}dialog{width:var(--nte-dialog-width, min(90vw, 500px));height:var(--nte-dialog-height, auto);max-width:var(--nte-dialog-max-width, 90vw);max-height:var(--nte-dialog-max-height, calc(100vh - 3.5rem) );margin:auto;padding:0;border:var(--nte-dialog-border, 0);border-radius:var(--nte-dialog-border-radius, var(--nt-border-radius, .5rem));background:var(--nte-dialog-background, transparent);color:var(--nte-dialog-color, inherit);display:flex;flex-direction:column;box-shadow:var(--nte-dialog-box-shadow, 0 .5rem 1rem rgba(0, 0, 0, .15), 0 .125rem .25rem rgba(0, 0, 0, .075));overflow:hidden;opacity:0;transform:translateY(-24px) scale(.98);transition:opacity var(--nte-dialog-transition-duration, .25s) var(--nte-dialog-transition-easing, ease),transform var(--nte-dialog-transition-duration, .25s) var(--nte-dialog-transition-easing, ease)}dialog:open{opacity:1;transform:translateY(0) scale(1)}@starting-style{dialog:open{opacity:0;transform:translateY(-24px) scale(.98)}}dialog.closing{opacity:0;transform:translateY(-24px) scale(.98)}dialog.shake{animation:dialogShake .35s ease}dialog::backdrop{background:var(--nte-dialog-backdrop-background-closed, rgba(0, 0, 0, 0));-webkit-backdrop-filter:blur(var(--nte-dialog-backdrop-blur-closed, 0));backdrop-filter:blur(var(--nte-dialog-backdrop-blur-closed, 0));transition:background var(--nte-dialog-transition-duration, .25s) var(--nte-dialog-transition-easing, ease),backdrop-filter var(--nte-dialog-transition-duration, .25s) var(--nte-dialog-transition-easing, ease)}dialog:open::backdrop{background:var(--nte-dialog-backdrop-background, rgba(0, 0, 0, .5));-webkit-backdrop-filter:blur(var(--nte-dialog-backdrop-blur, 6px));backdrop-filter:blur(var(--nte-dialog-backdrop-blur, 6px))}@starting-style{dialog:open::backdrop{background:var(--nte-dialog-backdrop-background-closed, rgba(0, 0, 0, 0));-webkit-backdrop-filter:blur(var(--nte-dialog-backdrop-blur-closed, 0));backdrop-filter:blur(var(--nte-dialog-backdrop-blur-closed, 0))}}dialog.closing::backdrop{background:var(--nte-dialog-backdrop-background-closed, rgba(0, 0, 0, 0));-webkit-backdrop-filter:blur(var(--nte-dialog-backdrop-blur-closed, 0));backdrop-filter:blur(var(--nte-dialog-backdrop-blur-closed, 0))}#header,#footer{display:flex;align-items:center;padding:var(--nte-dialog-section-padding, 1rem);background:var(--nte-dialog-section-background, var(--nte-dialog-background, transparent))}#header:has(slot[name=title].slot-empty){display:none}#header:has(#close-button):has(slot[name=title].slot-empty){display:flex;justify-content:flex-end}#footer:has(slot[name=footer].slot-empty){display:none}#header{justify-content:space-between;border-bottom:var(--nte-dialog-header-border, 1px solid #dee2e6);font-size:1.25rem;font-weight:500;line-height:1.5}#content{overflow:auto;flex-grow:1}#footer{justify-content:flex-end;gap:.5rem;border-top:var(--nte-dialog-footer-border, 1px solid #dee2e6)}#close-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-grid;place-items:center;inline-size:var(--close-btn-size, 2.5rem);block-size:var(--close-btn-size, 2.5rem);padding:0;border:0;border-radius:var(--close-btn-border-radius, 999px);background:var(--close-btn-background, transparent);color:var(--close-btn-color, inherit);cursor:pointer;transition:background-color .15s ease,color .15s ease,opacity .15s ease}#close-button:before{content:"";display:block;inline-size:var(--close-btn-icon-size, 1.25rem);block-size:var(--close-btn-icon-size, 1.25rem);background-color:currentColor;mask:var(--nt-icon-close) center/contain no-repeat}#close-button:hover{background:var(--close-btn-hover-background, color-mix(in srgb, currentColor 8%, transparent))}#close-button:focus-visible{outline:2px solid var(--nt-focus, currentColor);outline-offset:2px}#close-button:disabled{opacity:.5;cursor:not-allowed}#close-button{margin-left:auto}#close-button:has(slot:not(.slot-empty)):before{display:none}:host(.with-floating-header) dialog{position:relative}:host(.with-floating-header) #header{position:absolute;top:0;left:0;width:100%;z-index:1;transition:background .25s ease,backdrop-filter .25s ease}:host(.with-floating-header) dialog:hover #header{background:var(--nte-dialog-floating-header-background, rgba(255, 255, 255, .8));-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}@media(prefers-reduced-motion:reduce){dialog,dialog::backdrop{transition-duration:0s}}@media(max-width:576px){dialog{width:var(--nte-dialog-mobile-width, calc(100vw - 1rem) );max-height:var(--nte-dialog-mobile-max-height, calc(100vh - 1rem) )}}@keyframes dialogShake{0%,to{transform:translateY(0) translate(0) scale(1)}15%{transform:translateY(0) translate(-10px) scale(1)}30%{transform:translateY(0) translate(10px) scale(1)}45%{transform:translateY(0) translate(-8px) scale(1)}60%{transform:translateY(0) translate(8px) scale(1)}75%{transform:translateY(0) translate(-4px) scale(1)}}';var uw=Object.create,ko=Object.defineProperty,pw=Object.getOwnPropertyDescriptor,Wp=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),ei=i=>{throw TypeError(i)},mw=(i,t,e)=>t in i?ko(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Rc=(i,t)=>ko(i,"name",{value:t,configurable:!0}),fw=i=>[,,,uw(i?.[Wp("metadata")]??null)],Np=["class","method","getter","setter","accessor","field","value","get","set"],Pi=i=>i!==void 0&&typeof i!="function"?ei("Function expected"):i,gw=(i,t,e,s,n)=>({kind:Np[i],name:t,metadata:s,addInitializer:r=>e._?ei("Already initialized"):n.push(Pi(r||null))}),vw=(i,t)=>mw(t,Wp("metadata"),i[3]),nt=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},ce=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Np[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&pw(a<4?n:{get[e](){return Fc(this,r)},set[e](u){return qc(this,r,u)}},e));a?h&&a<4&&Rc(r,(a>2?"set ":a>1?"get ":"")+e):Rc(n,e);for(var w=s.length-1;w>=0;w--)c=gw(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>bw(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?Fc:yw)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>qc(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Pi(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?ei("Object expected"):(Pi(o=l.get)&&(m.get=o),Pi(o=l.set)&&(m.set=o),Pi(o=l.init)&&y.unshift(o));return a||vw(i,n),m&&ko(n,e,m),h?a^4?r:m:n},xo=(i,t,e)=>t.has(i)||ei("Cannot "+e),bw=(i,t)=>Object(t)!==t?ei('Cannot use the "in" operator on this value'):i.has(t),Fc=(i,t,e)=>(xo(i,t,"read from private field"),e?e.call(i):t.get(i)),pe=(i,t,e)=>t.has(i)?ei("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),qc=(i,t,e,s)=>(xo(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),yw=(i,t,e)=>(xo(i,t,"access private method"),e),jp,Hp,Rp,Fp,qp,Vp,Bp,Zn,Up,N,So,_o,Ao,Co,Eo,To,Oo;const ww={fromAttribute(i){return i===null?!1:i===""?!0:i},toAttribute(i){return i===!1?null:i===!0?"":i}};Up=[Xs("nte-dialog")];let ct=class St extends(Zn=Nd(Dp({slotVisibility:!0})),Bp=[Ad("dialog")],Vp=[tt({type:String,reflect:!0})],qp=[tt({attribute:"anchor",reflect:!0,converter:ww})],Fp=[tt({type:Boolean,attribute:"no-dismiss",reflect:!0})],Rp=[tt({type:Boolean,attribute:"hide-close-button",reflect:!0})],Hp=[tt({type:Boolean,attribute:"no-escape",reflect:!0})],jp=[tt({type:String,attribute:"backdrop-action",reflect:!0})],Zn){constructor(){super(...arguments),pe(this,So,nt(N,8,this,null)),nt(N,11,this),pe(this,_o,nt(N,12,this,"closed")),nt(N,15,this),pe(this,Ao,nt(N,16,this,!1)),nt(N,19,this),pe(this,Co,nt(N,20,this,!1)),nt(N,23,this),pe(this,Eo,nt(N,24,this,!1)),nt(N,27,this),pe(this,To,nt(N,28,this,!1)),nt(N,31,this),pe(this,Oo,nt(N,32,this,"shake")),nt(N,35,this),this._isClosing=!1,this._openedByAnchor=!1,this._scrollLockActive=!1,this.onHashChange=()=>{this.syncWithAnchor()}}connectedCallback(){super.connectedCallback(),window.addEventListener("hashchange",this.onHashChange),this.updateComplete.then(()=>this.syncWithAnchor())}disconnectedCallback(){window.removeEventListener("hashchange",this.onHashChange),this.unlockBackgroundScroll(),super.disconnectedCallback()}updated(t){super.updated(t),(t.has("anchor")||t.has("id"))&&this.syncWithAnchor()}render(){const t=!this.noDismiss&&!this.hideCloseButton;return zt`
      <slot
        name="launcher"
        data-query=":scope > .launcher | :scope > [data-dialog-launcher]"
        @click=${this.onLauncherClick}
      ></slot>

      <dialog part="dialog" @cancel=${this.onDialogCancel} @close=${this.onDialogClose} @click=${this.onDialogClick}>
        <div id="header" part="header">
          <slot name="title" data-query=":scope > h1 | :scope > h2 | :scope > h3 | :scope > h4 | :scope > h5"></slot>
          ${t?zt`<button
                  part="close-button"
                  id="close-button"
                  type="button"
                  aria-label="Close"
                  @click=${this.onCloseButtonClick}
                >
                  <slot name="closeButton"></slot>
                </button>`:null}
        </div>
        <div id="content" part="content"><slot></slot></div>
        <div id="footer" part="footer">
          <slot name="footer" data-query=":scope > .footer | :scope > [data-dialog-footer]"></slot>
        </div>
      </dialog>
    `}show(){var t,e;(t=this.dialogEl)==null||t.classList.remove("closing"),this.mode="open",(e=this.dialogEl)==null||e.show()}showModal(){const t=this.dialogEl;t&&(t.open||(t.classList.remove("closing"),this.mode="open",t.showModal(),this.lockBackgroundScroll()))}async close(){if(this._isClosing)return;this._isClosing=!0;const t=this.dialogEl;if(!t){this.mode="closed",this.unlockBackgroundScroll(),this._isClosing=!1;return}if(!t.open){this.mode="closed",t.classList.remove("closing"),this._isClosing=!1;return}t.classList.add("closing"),await this.waitForCloseTransition(t),t.open&&t.close(),this._isClosing=!1}async waitForCloseTransition(t){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=getComputedStyle(t),s=e.transitionDuration.split(",").map(l=>this.cssTimeToMs(l.trim())),n=e.transitionDelay.split(",").map(l=>this.cssTimeToMs(l.trim())),r=Math.max(s.length,n.length);let o=0;for(let l=0;l<r;l+=1){const d=s[l%s.length]??0,c=n[l%n.length]??0;o=Math.max(o,d+c)}o<=0||await new Promise(l=>{let d=!1;const c=()=>{d||(d=!0,t.removeEventListener("transitionend",p),t.removeEventListener("transitioncancel",c),window.clearTimeout(a),l())},p=f=>{f.target===t&&f.propertyName==="opacity"&&c()},a=window.setTimeout(c,o+50);t.addEventListener("transitionend",p),t.addEventListener("transitioncancel",c)})}cssTimeToMs(t){return t.endsWith("ms")?Number.parseFloat(t)||0:t.endsWith("s")?(Number.parseFloat(t)||0)*1e3:0}get anchorName(){return typeof this.anchor=="string"&&this.anchor.length>0?this.anchor:this.anchor===!0&&this.id||null}get anchorHash(){const t=this.anchorName;return t?`#modal:${t}`:null}async syncWithAnchor(){const t=this.anchorHash;if(!t)return;await this.updateComplete;const e=window.location.hash===t;if(e&&this.mode!=="open"){this._openedByAnchor=!0,this.showModal();return}!e&&this._openedByAnchor&&this.mode==="open"&&(this._openedByAnchor=!1,await this.close())}clearAnchorHash(){const t=this.anchorHash;!t||window.location.hash!==t||window.history.replaceState(window.history.state,"",`${window.location.pathname}${window.location.search}`)}onLauncherClick(){const t=this.anchorHash;if(t){window.location.hash===t?this.syncWithAnchor():window.location.hash=t;return}this.showModal()}onCloseButtonClick(){this.requestDismiss("close-button")}onDialogCancel(t){if(t.preventDefault(),this.noDismiss||this.noEscape){this.shake();return}this.requestDismiss("escape")}onDialogClose(){var t;this.mode="closed",(t=this.dialogEl)==null||t.classList.remove("closing"),this.unlockBackgroundScroll(),(this._openedByAnchor||window.location.hash===this.anchorHash)&&(this._openedByAnchor=!1,this.clearAnchorHash()),this.dispatchEvent(new CustomEvent("closed",{bubbles:!0,composed:!0}))}onDialogClick(t){const e=this.dialogEl;if(!(e!=null&&e.open))return;const s=e.getBoundingClientRect();if(t.clientX<s.left||t.clientX>s.right||t.clientY<s.top||t.clientY>s.bottom){if(t.preventDefault(),this.noDismiss||this.backdropAction==="shake"){this.shake();return}(this.backdropAction==="cancel"||this.backdropAction==="dismiss")&&this.requestDismiss("backdrop")}}requestDismiss(t){if(this.noDismiss){this.shake();return}const e=new CustomEvent("dismiss",{detail:{reason:t},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&this.close()}shake(){const t=this.dialogEl;t&&(t.classList.remove("shake"),t.offsetWidth,t.classList.add("shake"),window.setTimeout(()=>t.classList.remove("shake"),350))}lockBackgroundScroll(){if(this._scrollLockActive)return;const{body:t,documentElement:e}=document;St.modalScrollLockCount===0&&(St.previousBodyOverflow=t.style.overflow,St.previousDocumentOverflow=e.style.overflow,t.style.overflow="hidden",e.style.overflow="hidden"),St.modalScrollLockCount+=1,this._scrollLockActive=!0}unlockBackgroundScroll(){if(!this._scrollLockActive)return;const{body:t,documentElement:e}=document;St.modalScrollLockCount=Math.max(0,St.modalScrollLockCount-1),St.modalScrollLockCount===0&&(t.style.overflow=St.previousBodyOverflow,e.style.overflow=St.previousDocumentOverflow),this._scrollLockActive=!1}};N=fw(Zn);So=new WeakMap;_o=new WeakMap;Ao=new WeakMap;Co=new WeakMap;Eo=new WeakMap;To=new WeakMap;Oo=new WeakMap;ce(N,4,"dialogEl",Bp,ct,So);ce(N,4,"mode",Vp,ct,_o);ce(N,4,"anchor",qp,ct,Ao);ce(N,4,"noDismiss",Fp,ct,Co);ce(N,4,"hideCloseButton",Rp,ct,Eo);ce(N,4,"noEscape",Hp,ct,To);ce(N,4,"backdropAction",jp,ct,Oo);ct=ce(N,0,"NteDialog",Up,ct);ct.styles=[Ds(hw),Ds(dw)];ct.modalScrollLockCount=0;ct.previousBodyOverflow="";ct.previousDocumentOverflow="";nt(N,1,ct);var $w=Object.create,Yp=Object.defineProperty,kw=Object.getOwnPropertyDescriptor,Xp=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),hs=i=>{throw TypeError(i)},xw=(i,t,e)=>t in i?Yp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Sw=i=>[,,,$w(i?.[Xp("metadata")]??null)],Gp=["class","method","getter","setter","accessor","field","value","get","set"],Ii=i=>i!==void 0&&typeof i!="function"?hs("Function expected"):i,_w=(i,t,e,s,n)=>({kind:Gp[i],name:t,metadata:s,addInitializer:r=>e._?hs("Already initialized"):n.push(Ii(r||null))}),Aw=(i,t)=>xw(t,Xp("metadata"),i[3]),Vc=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},Cw=(i,t,e,s,n,r)=>{for(var o,l,d,c,p,a=t&7,f=!1,h=!1,g=i.length+1,b=Gp[a+5],y=i[g-1]=[],x=i[g]||(i[g]=[]),m=(n=n.prototype,kw({get[e](){return Ew(this,r)},set[e](u){return Ow(this,r,u)}},e)),w=s.length-1;w>=0;w--)c=_w(a,e,d={},i[3],x),c.static=f,c.private=h,p=c.access={has:u=>e in u},p.get=u=>u[e],p.set=(u,v)=>u[e]=v,l=(0,s[w])({get:m.get,set:m.set},c),d._=1,l===void 0?Ii(l)&&(m[b]=l):typeof l!="object"||l===null?hs("Object expected"):(Ii(o=l.get)&&(m.get=o),Ii(o=l.set)&&(m.set=o),Ii(o=l.init)&&y.unshift(o));return m&&Yp(n,e,m),n},Kp=(i,t,e)=>t.has(i)||hs("Cannot "+e),Ew=(i,t,e)=>(Kp(i,t,"read from private field"),t.get(i)),Tw=(i,t,e)=>t.has(i)?hs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Ow=(i,t,e,s)=>(Kp(i,t,"write to private field"),t.set(i,e),e),Jp,Qn,as,Lo;let zo=class extends(Qn=Dp(),Jp=[Ad("nte-dialog")],Qn){constructor(){super(...arguments),this.input=void 0,this.dialogOptions={},Tw(this,Lo,Vc(as,8,this,null)),Vc(as,11,this),this.resultResolver=null,this.resultPromise=null,this.settled=!1,this.onDismiss=t=>{t.preventDefault(),this.abort()},this.onClosed=()=>{this.settled||this.abort()}}createRenderRoot(){return this}static async show(...t){const e=new this;document.body.append(e);try{return await e.open(...t)}finally{e.remove()}}async open(...t){var e;return this.resultPromise?this.resultPromise:(this.input=t[0],this.settled=!1,this.resultPromise=new Promise(s=>{this.resultResolver=s}),this.requestUpdate(),await this.updateComplete,(e=this.dialog)==null||e.showModal(),this.resultPromise)}submit(...t){this.finish({submitted:!0,data:t[0]})}abort(){this.finish({submitted:!1})}renderTitle(){return null}renderFooter(){return null}render(){const t=this.dialogOptions,e=t.dismiss===!1?!1:t.dismiss??{},s=Array.isArray(t.dialogClass)?t.dialogClass.join(" "):t.dialogClass??"",n=this.renderTitle(),r=this.renderFooter();return zt`
      <nte-dialog
        class=${s}
        ?no-dismiss=${e===!1}
        ?hide-close-button=${e!==!1&&e.closeButton===!1}
        ?no-escape=${e!==!1&&e.escape===!1}
        backdrop-action=${e===!1?"shake":e.backdrop??"shake"}
        @dismiss=${this.onDismiss}
        @closed=${this.onClosed}
      >
        ${n===null?F:zt`<div slot="title">${n}</div>`} ${this.renderDialog()}
        ${r===null?F:zt`<div slot="footer">${r}</div>`}
      </nte-dialog>
    `}async finish(t){var e;if(this.settled||!this.resultResolver)return;this.settled=!0;const s=this.resultResolver;this.resultResolver=null,await((e=this.dialog)==null?void 0:e.close()),s(t)}};as=Sw(Qn);Lo=new WeakMap;Cw(as,4,"dialog",Jp,zo,Lo);Aw(as,zo);const Lw={CHILD:2},zw=i=>(...t)=>({_$litDirective$:i,values:t});class Mw{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class tr extends Mw{constructor(t){if(super(t),this.it=F,t.type!==Lw.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===F||t==null)return this._t=void 0,this.it=t;if(t===we)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}tr.directiveName="unsafeHTML",tr.resultType=1;const Bc=zw(tr),mi=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];class kt{constructor(){this.openHours=new Map,this.vacations=[]}static convertToDateTime(t){return t==null?null:t instanceof Date?t:typeof t=="string"?new Date(t):new Date}addOpenHour(t,e,s){const n=this.openHours.get(t)||[];n.push({from:e,till:s}),this.openHours.set(t,n)}addVacation(t,e,s,n){const r=kt.convertToDateTime(t),o=kt.convertToDateTime(e);r===null||o===null||(o.setHours(23,59,59,999),this.vacations.push({fromDate:r,tillDate:o,title:s,text:n}))}isVacation(t=null){const e=kt.convertToDateTime(t??new Date);return this.vacations.some(s=>s.fromDate!==null&&e!==null&&e>=s.fromDate&&e<=s.tillDate)}getVacation(t=null){const e=kt.convertToDateTime(t??new Date);if(e===null)return null;const s=this.vacations.find(n=>e>=n.fromDate&&e<=n.tillDate);return s?{title:s.title,text:s.text}:null}getUpcomingVacation(t=null){const e=new Date,s=new Date(e);return t===null?this.vacations.filter(n=>n.tillDate>=e):(t.days&&s.setDate(s.getDate()+t.days),t.months&&s.setMonth(s.getMonth()+t.months),this.vacations.filter(n=>n.fromDate>=e&&n.fromDate<=s||n.tillDate>=e&&n.tillDate<=s||n.fromDate<=e&&n.tillDate>=s))}isOpen(t=null){const e=kt.convertToDateTime(t);return e===null?!1:!this.isVacation(e)&&this.getTodayOpenDates(e).some(s=>{const n=`${e.getHours()}:${String(e.getMinutes()).padStart(2,"0")}`;return n>=s.from&&n<=s.till})}getNextOpenDate(t=null){const e=kt.convertToDateTime(t);for(;this.isVacation(e)||!this.isOpen(e);)e.setHours(0,0,0,0),e.setDate(e.getDate()+1);return e}getTodayOpenDates(t=null){const e=kt.convertToDateTime(t),s=mi[e.getDay()];return this.openHours.get(s)||[]}getHumanReadableOpenDates(t=null){const e=kt.convertToDateTime(t);if(this.isVacation(e)){const l=this.getVacation(e);return`Closed due to vacation: ${l?.title}. Next open date: ${mi[this.getNextOpenDate(e).getDay()]} ${this.getNextOpenDate(e).toLocaleDateString()} at 9:00.`}if(this.isOpen(e)){const l=this.getTodayOpenDates(e).find(d=>`${e.getHours()}:${String(e.getMinutes()).padStart(2,"0")}`<=d.till);return`Currently open till ${l?.till}. Next open date: ${mi[this.getNextOpenDate(e).getDay()]} at 9:00.`}const s=this.getNextOpenDate(e),n=this.getTodayOpenDates(s),r=mi[s.getDay()],o=n.map(l=>`${l.from} - ${l.till}`).join(" and ");return`Closed now. Open next: ${r} ${o}.`}loadStruct(t){this.openHours.clear(),this.vacations=[],t.json.forEach(e=>{if(e.status==="open"){const s=typeof e.dayOfWeek=="number"?mi[e.dayOfWeek]:e.dayOfWeek;this.addOpenHour(s,e.from,e.to)}}),Array.isArray(t.vacation)&&t.vacation.forEach(e=>{this.addVacation(e.from,e.till,e.title,e.text)})}}function er(i){let t=i.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>");return t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(/---/g,"<hr>"),t}function Zp(i){return new Promise(t=>window.setTimeout(t,i))}function Qp(){return document.readyState!=="loading"?Promise.resolve():new Promise(i=>{document.addEventListener("DOMContentLoaded",()=>i(),{once:!0})})}let Pw=class extends HTMLElement{constructor(){super(...arguments),this.defaultMarkup=null}async connectedCallback(){await Qp(),await Zp(100);const t=this.getAttribute("data-class");if(window.openhours===void 0){console.error("[leuffen-announcements] window.openhours not defined");return}const e=new kt;e.loadStruct(window.openhours),this.defaultMarkup===null&&(this.defaultMarkup=this.innerHTML),this.innerHTML="";const s=document.createElement("div");s.dataset.owner="leuffen-announcements",t!==null&&(s.className=t),this.append(s);let n=0;for(const r of e.getUpcomingVacation(null)){n++;const o=document.createElement("p");o.dataset.owner="leuffen-announcement",o.innerHTML=er(r.title),s.append(o)}n===0&&(this.classList.add("no-announcements"),this.innerHTML=this.defaultMarkup)}};customElements.get("leuffen-announcements")||customElements.define("leuffen-announcements",Pw);let tm=class extends zo{constructor(){super(...arguments),this.dialogOptions={dismiss:{closeButton:!0,escape:!1,backdrop:"shake"}}}renderTitle(){return zt`${Bc(er(this.input.title))}`}renderDialog(){const t=this.input.text.replace(/\n/g,"<br>");return zt`<div class="p-3">${Bc(er(t))}</div>`}renderFooter(){return zt`<button
      type="button"
      class="btn btn-secondary"
      @click=${()=>this.abort()}
    >
      Schließen
    </button>`}};customElements.get("leuffen-vacation-dialog")||customElements.define("leuffen-vacation-dialog",tm);let Iw=class extends HTMLElement{async connectedCallback(){if(this.style.display="none",await Qp(),await Zp(100),window.openhours===void 0){console.error("[leuffen-vacation-modal] window.openhours not defined");return}if(!Array.isArray(window.openhours.vacation)){console.error("[leuffen-vacation-modal] window.openhours.vacation is not a array");return}const t=new kt;if(t.loadStruct(window.openhours),console.log("[leuffen-vacation-modal] openhours loaded",t),t.isVacation(null)){console.log("[leuffen-vacation-modal] showing vacation modal");const e=t.getVacation(null);e!==null&&await tm.show(e)}}};customElements.get("leuffen-vacation-modal")||customElements.define("leuffen-vacation-modal",Iw);const Dw=`:host {
  --gap: var(--nt-spacing-layout);
  --container-width: var(--nt-container-width, 100%);
  --inner-padding: var(--nt-space-3);
  --section-bg: transparent;
  --cols: 6;
  --breakpoint: md;
  background: var(--section-bg);
  display: block;
}

#container {
  margin-left: var(--container-margin-left, auto);
  margin-right: var(--container-margin-right, auto);
  width: var(--container-render-width, var(--container-width));
  box-sizing: border-box;
}

#wrapper {
  box-sizing: border-box;
  --aside-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: var(--gap);
  align-items: stretch;
}

#wrapper:has(#top > .slot-empty):has(#main > .slot-empty):has(#aside > .slot-empty):has(#bottom > .slot-empty) {
  display: none !important;
}

#wrapper:has(#main > .slot-empty) #aside::after {
  content: none !important;
}

*:has(> .slot-empty) {
  display: none !important;
}

#header,
#footer,
#top,
#bottom {
  width: 100%;
  box-sizing: border-box;
}

#top {
  order: 0;
  flex: 0 0 auto;
}

#main {
  box-sizing: border-box;
  order: 1;
  min-width: 0;
}

#aside {
  box-sizing: border-box;
  order: 2;
  min-width: 0;
}

#bottom {
  order: 3;
  flex: 0 0 auto;
}

:host([mode=mobile]) #container {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}
:host([mode=mobile]) #main,
:host([mode=mobile]) #aside {
  width: 100%;
  flex: 0 0 100%;
}

:host([mode=mobile].mobile-reverse) #aside {
  order: 1;
}
:host([mode=mobile].mobile-reverse) #main {
  order: 2;
}

:host([mode=desktop].desktop-reverse) #wrapper {
  flex-direction: row-reverse;
}

:host([mode=desktop]) #wrapper {
  flex-direction: row;
  --main-width: calc(100% * var(--cols, 1) / 12);
}
:host([mode=desktop]) #wrapper:has(#aside > .slot-empty) {
  flex-direction: column;
}
:host([mode=desktop]) #wrapper:has(#aside > .slot-empty) #main {
  width: 100%;
  flex-basis: 100%;
}
:host([mode=desktop]) #wrapper #main {
  width: var(--main-width);
  flex: 0 0 var(--main-width);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
:host([mode=desktop]) #wrapper #aside {
  flex: 1 1 1px;
  box-sizing: border-box;
}
:host([mode=desktop]) #aside {
  width: auto;
  min-width: 0;
  flex: 1 1 1px;
  box-sizing: border-box;
}
:host([mode=desktop]) #aside:has(.slot-empty) {
  display: none;
}`;var Ww=(i,t,e,s)=>{for(var n=t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(n)||n);return n};let ir=class extends it({breakpoints:!0,subLayoutApply:!0,slotVisibility:!0,eventBinding:!1}){connectedCallback(){super.connectedCallback(),this.classList.add("ntl-2col")}render(){return k`
      <div part="container" id="container">
        <div part="header" id="header">
          <slot name="header" data-query="@var(--ntl-2col-header-selector) | :scope > .header"></slot>
        </div>
        <div part="wrapper" id="wrapper">
          <div part="top" id="top">
            <slot name="top" data-query="@var(--ntl-2col-top-selector) | :scope > .top"></slot>
          </div>
          <div part="main" id="main">
            <slot></slot>
          </div>
          <div part="aside" id="aside">
            <slot
              name="aside"
              data-query="@var(--ntl-2col-aside-selector) | :scope > .aside | :scope > p:has(img)"
              data-set-attribute-class="auto"
            ></slot>
          </div>
          <div part="bottom" id="bottom">
            <slot name="bottom" data-query="@var(--ntl-2col-bottom-selector) | :scope > .bottom"></slot>
          </div>
        </div>
        <div part="footer" id="footer">
          <slot name="footer" data-query="@var(--ntl-2col-footer-selector) | :scope > .footer"></slot>
        </div>
      </div>
    `}};ir.styles=[E(dt),E(Dw)];ir=Ww([j("ntl-2col")],ir);const Nw=`:host {
  --height-offset: 0px;
  --breakpoint: xl;
  display: block;
}

#root {
  width: 100%;
  isolation: isolate;
  display: grid;
  position: relative;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
}

#wrapper {
  grid-row: 1;
  grid-column: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
}
#wrapper > * {
  display: flex;
  flex-direction: column;
}
#wrapper > :has(.slot-empty) {
  display: none !important;
}

#background {
  position: absolute;
  overflow: hidden;
  z-index: 0;
  height: 100%;
  inset: 0;
}`;var jw=Object.create,Mo=Object.defineProperty,Hw=Object.getOwnPropertyDescriptor,em=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),im=i=>{throw TypeError(i)},Rw=(i,t,e)=>t in i?Mo(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Fw=(i,t)=>Mo(i,"name",{value:t,configurable:!0}),qw=i=>[,,,jw(i?.[em("metadata")]??null)],Vw=["class","method","getter","setter","accessor","field","value","get","set"],sm=i=>i!==void 0&&typeof i!="function"?im("Function expected"):i,Bw=(i,t,e,s,n)=>({kind:Vw[i],name:t,metadata:s,addInitializer:r=>e._?im("Already initialized"):n.push(sm(r||null))}),Uw=(i,t)=>Rw(t,em("metadata"),i[3]),Yw=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)r[n].call(e);return s},Xw=(i,t,e,s,n,r)=>{var o,l,d,c=t&7,p=!1,a=0,f=i[a]||(i[a]=[]),h=c&&(n=n.prototype,c<5&&(c>3||!p)&&Hw(n,e));Fw(n,e);for(var g=s.length-1;g>=0;g--)d=Bw(c,e,l={},i[3],f),o=(0,s[g])(n,d),l._=1,sm(o)&&(n=o);return Uw(i,n),h&&Mo(n,e,h),p?c^4?r:h:n},nm,Po,rm;const Gw={breakpoints:!0,subLayoutApply:!0,slotVisibility:!0,eventBinding:!0};nm=[j("ntl-hero")];const am=class extends(rm=it(Gw)){async updated(t){super.updated(t),await Qd(),this.style.setProperty("--height-offset",`${this.offsetTop}px`)}render(){return k`
      <div part="root" id="root">
        <div id="background" part="background">
          <slot name="bg"></slot>
        </div>

        <div id="wrapper" part="wrapper">
          <div id="top-title" part="top-title">
            <slot name="top-title"></slot>
          </div>

          <div id="title" part="title">
            <slot name="title"></slot>
          </div>

          <div id="content" part="content">
            <slot></slot>
          </div>

          <div id="footer" part="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};am.styles=[E(Nw),E(dt)];let sr=am;Po=qw(rm);sr=Xw(Po,0,"NtlHero",nm,sr);Yw(Po,1,sr);const Kw=`/* The ShadowDOM Styles */
#wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
}

#image {
  width: 100%;
  height: 100%;
  grid-row: 1;
  grid-column: 2;
  z-index: 0;
}

#gradient {
  width: 100%;
  height: 100%;
  grid-row: 1;
  grid-column: 2;
  z-index: 1;
}

#content {
  width: 100%;
  height: 100%;
  grid-row: 1;
  grid-column: 1;
}`;var Jw=Object.create,Io=Object.defineProperty,Zw=Object.getOwnPropertyDescriptor,om=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),ii=i=>{throw TypeError(i)},Qw=(i,t,e)=>t in i?Io(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Uc=(i,t)=>Io(i,"name",{value:t,configurable:!0}),t$=i=>[,,,Jw(i?.[om("metadata")]??null)],lm=["class","method","getter","setter","accessor","field","value","get","set"],Di=i=>i!==void 0&&typeof i!="function"?ii("Function expected"):i,e$=(i,t,e,s,n)=>({kind:lm[i],name:t,metadata:s,addInitializer:r=>e._?ii("Already initialized"):n.push(Di(r||null))}),i$=(i,t)=>Qw(t,om("metadata"),i[3]),nr=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},cm=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=lm[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&Zw(a<4?n:{get[e](){return Yc(this,r)},set[e](u){return Xc(this,r,u)}},e));a?h&&a<4&&Uc(r,(a>2?"set ":a>1?"get ":"")+e):Uc(n,e);for(var w=s.length-1;w>=0;w--)c=e$(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>s$(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?Yc:r$)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>Xc(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Di(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?ii("Object expected"):(Di(o=l.get)&&(m.get=o),Di(o=l.set)&&(m.set=o),Di(o=l.init)&&y.unshift(o));return a||i$(i,n),m&&Io(n,e,m),h?a^4?r:m:n},Do=(i,t,e)=>t.has(i)||ii("Cannot "+e),s$=(i,t)=>Object(t)!==t?ii('Cannot use the "in" operator on this value'):i.has(t),Yc=(i,t,e)=>(Do(i,t,"read from private field"),e?e.call(i):t.get(i)),n$=(i,t,e)=>t.has(i)?ii("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Xc=(i,t,e,s)=>(Do(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),r$=(i,t,e)=>(Do(i,t,"access private method"),e),dm,rr,hm,Ne,Wo;hm=[j("nte-slide")];let os=class extends(rr=Nr(ds(Js(cs(Pt)))),dm=[$({type:String,reflect:!0})],rr){constructor(){super(...arguments),n$(this,Wo,nr(Ne,8,this,"nte-slide")),nr(Ne,11,this)}render(){return k`
      <div part="wrapper" id="wrapper">
        <div part="image" id="image">
          <slot name="image" data-query=":scope > img:not(.keep) | :scope > p:has(img:not(.keep))"></slot>
        </div>
        <div part="gradient" id="gradient"></div>
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}};Ne=t$(rr);Wo=new WeakMap;cm(Ne,4,"name",dm,os,Wo);os=cm(Ne,0,"NteSlideElement",hm,os);os.styles=[E(Kw),E(dt)];nr(Ne,1,os);const a$=`/* The ShadowDOM Styles */
:host {
  --aspect-ratio: 16/9;
  --nav-inset: 0;
  --nav-button-size: 48px;
  --nav-button-bg: color-mix(in srgb, var(--nt-primary, #000000), transparent 50%);
  --nav-button-color: var(--nt-teritary, #fff);
  --indicator-size: 12px;
  --indicator-gap: 8px;
  --indicator-color: var(--nt-primary-subtle, rgba(255, 255, 255, 0.5));
  --indicator-active-color: var(--nt-primary, #fff);
  --transition-duration: 0.5s;
  display: block;
}

#wrapper {
  width: 100%;
  aspect-ratio: var(--aspect-ratio);
  display: block;
  position: relative;
}

#content {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  justify-items: center;
  align-items: center;
}
#content > ::slotted(.hide) {
  display: none !important;
}
#content > ::slotted(*) {
  grid-column: 1;
  grid-row: 1;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-duration) ease-in-out, visibility var(--transition-duration) ease-in-out;
}
#content > ::slotted(.active) {
  opacity: 1;
  visibility: visible;
}
#content > ::slotted(.prev), #content > ::slotted(.next) {
  opacity: 0;
  visibility: hidden;
}

#navigation {
  z-index: 110;
  position: absolute;
  inset: var(--nav-inset);
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  padding: 0 1rem;
}

#navigation button {
  pointer-events: auto;
  width: var(--nav-button-size);
  height: var(--nav-button-size);
  border: none;
  border-radius: 50%;
  background: var(--nav-button-bg);
  color: var(--nav-button-color);
  font-size: 1.5rem;
  cursor: pointer;
  transition: background var(--transition-duration);
}
#navigation button:focus-visible {
  outline: 2px solid var(--nav-button-color);
  outline-offset: 2px;
}

#indicator {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--indicator-gap);
  z-index: 100;
}

#indicator button {
  width: var(--indicator-size);
  height: var(--indicator-size);
  border: none;
  border-radius: 50%;
  background: var(--indicator-color);
  cursor: pointer;
  padding: 0;
  transition: background var(--transition-duration), transform var(--transition-duration);
}
#indicator button:hover {
  transform: scale(1.2);
}
#indicator button[active] {
  background: var(--indicator-active-color);
}
#indicator button:focus-visible {
  outline: 2px solid var(--indicator-active-color);
  outline-offset: 2px;
}`;var o$=Object.create,No=Object.defineProperty,l$=Object.getOwnPropertyDescriptor,um=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),si=i=>{throw TypeError(i)},c$=(i,t,e)=>t in i?No(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Gc=(i,t)=>No(i,"name",{value:t,configurable:!0}),d$=i=>[,,,o$(i?.[um("metadata")]??null)],pm=["class","method","getter","setter","accessor","field","value","get","set"],Wi=i=>i!==void 0&&typeof i!="function"?si("Function expected"):i,h$=(i,t,e,s,n)=>({kind:pm[i],name:t,metadata:s,addInitializer:r=>e._?si("Already initialized"):n.push(Wi(r||null))}),u$=(i,t)=>c$(t,um("metadata"),i[3]),wt=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},ni=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=pm[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&l$(a<4?n:{get[e](){return ar(this,r)},set[e](u){return or(this,r,u)}},e));a?h&&a<4&&Gc(r,(a>2?"set ":a>1?"get ":"")+e):Gc(n,e);for(var w=s.length-1;w>=0;w--)c=h$(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>p$(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?ar:m$)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>or(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Wi(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?si("Object expected"):(Wi(o=l.get)&&(m.get=o),Wi(o=l.set)&&(m.set=o),Wi(o=l.init)&&y.unshift(o));return a||u$(i,n),m&&No(n,e,m),h?a^4?r:m:n},jo=(i,t,e)=>t.has(i)||si("Cannot "+e),p$=(i,t)=>Object(t)!==t?si('Cannot use the "in" operator on this value'):i.has(t),ar=(i,t,e)=>(jo(i,t,"read from private field"),e?e.call(i):t.get(i)),Ae=(i,t,e)=>t.has(i)?si("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),or=(i,t,e,s)=>(jo(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),m$=(i,t,e)=>(jo(i,t,"access private method"),e),mm,fm,gm,vm,bm,lr,ym,Q,Ho,Ro,Fo,qo,zs,Vo;ym=[j("nte-slider")];let Xt=class extends(lr=Nr(ds(Js(cs(Pt)))),bm=[$({type:String,reflect:!0})],vm=[$({type:Number,reflect:!0,attribute:"active-index"})],gm=[$({type:Boolean,reflect:!0})],fm=[$({type:Number,attribute:"autoplay-interval"})],mm=[qv()],lr){constructor(){super(...arguments),Ae(this,Ho,wt(Q,8,this,"nte-slider")),wt(Q,11,this),Ae(this,Ro,wt(Q,12,this,0)),wt(Q,15,this),Ae(this,Fo,wt(Q,16,this,!1)),wt(Q,19,this),Ae(this,qo,wt(Q,20,this,5e3)),wt(Q,23,this),Ae(this,zs,[]),this.autoplayTimer=void 0,Ae(this,Vo,wt(Q,24,this)),wt(Q,27,this)}get slides(){return ar(this,zs)}set slides(t){or(this,zs,t)}connectedCallback(){super.connectedCallback(),this.autoplay&&this.startAutoplay()}disconnectedCallback(){super.disconnectedCallback(),this.stopAutoplay()}handleSlotChange(){this.warn("handleSlotChange: slides = ",this.slottedElements,""),this.slides=this.slottedElements.filter(t=>t.matches(":not(hr)")),this.setActiveSlide(this.activeIndex)}setActiveSlide(t){this.slides.forEach((e,s)=>{e.classList.remove("prev","active","next"),s===t&&e.classList.add("active")}),this.renderIndicators()}goToSlide(t){t<0&&(t=this.slides.length-1),t>=this.slides.length&&(t=0),this.activeIndex=t,this.setActiveSlide(t),this.dispatchEvent(new CustomEvent("slide-change",{detail:{index:this.activeIndex}}))}next(){this.goToSlide(this.activeIndex+1)}prev(){this.goToSlide(this.activeIndex-1)}startAutoplay(){this.stopAutoplay(),this.autoplayTimer=window.setInterval(()=>this.next(),this.autoplayInterval)}stopAutoplay(){this.autoplayTimer&&(clearInterval(this.autoplayTimer),this.autoplayTimer=void 0)}renderIndicators(){var t;const e=(t=this.shadowRoot)==null?void 0:t.getElementById("indicator");e&&(e.innerHTML="",this.slides.forEach((s,n)=>{const r=document.createElement("button");r.part.add("indicator-dot"),r.toggleAttribute("active",n===this.activeIndex),r.addEventListener("click",()=>this.goToSlide(n)),e.appendChild(r)}))}render(){return k`
      <div>
        <div part="wrapper" id="wrapper">
          <div part="content" id="content">
            <slot
              data-query=":scope > section:not(.keep)"
              data-set-attribute-layout="nte-slide"
              @slotchange=${this.handleSlotChange}
            ></slot>
          </div>
          <div part="navigation" id="navigation">
            <button part="nav-prev" @click=${this.prev}>&#10094;</button>
            <button part="nav-next" @click=${this.next}>&#10095;</button>
          </div>
          <div part="indicator" id="indicator"></div>
        </div>
      </div>
    `}};Q=d$(lr);Ho=new WeakMap;Ro=new WeakMap;Fo=new WeakMap;qo=new WeakMap;zs=new WeakMap;Vo=new WeakMap;ni(Q,4,"name",bm,Xt,Ho);ni(Q,4,"activeIndex",vm,Xt,Ro);ni(Q,4,"autoplay",gm,Xt,Fo);ni(Q,4,"autoplayInterval",fm,Xt,qo);ni(Q,4,"slottedElements",mm,Xt,Vo);Xt=ni(Q,0,"NteSliderElement",ym,Xt);Xt.styles=[E(a$),E(dt)];wt(Q,1,Xt);const f$=`/* The ShadowDOM Styles */
:host {
  --container-width: var(--nt-container-width, 100%);
  --min-width: unset;
  --max-width: unset;
  --gutter-x: var(--nt-spacing-layout);
  --gutter-y: var(--nt-spacing-layout);
  --breakpoint: xl;
  display: block;
  box-sizing: border-box;
}

#container {
  margin: 0 auto;
  width: var(--container-width);
  box-sizing: border-box;
}

#header:has(.slot-empty),
#footer:has(.slot-empty) {
  display: none;
}

#main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gutter-y, 0px) var(--gutter-x, 0px);
}
#main ::slotted(*) {
  box-sizing: border-box;
  flex: 0 1 calc(8.3333333333% * var(--cols, 12) - var(--gutter-x, 0px) * (12 - var(--cols, 12)) / 12);
  width: calc(8.3333333333% * var(--cols, 12) - var(--gutter-x, 0px) * (12 - var(--cols, 12)) / 12);
  min-width: var(--min-width);
  max-width: var(--max-width);
  overflow: hidden;
}

:host([cols="1"]) {
  --cols: 1;
}

#main ::slotted([cols="1"]) {
  --cols: 1;
}

:host([cols="2"]) {
  --cols: 2;
}

#main ::slotted([cols="2"]) {
  --cols: 2;
}

:host([cols="3"]) {
  --cols: 3;
}

#main ::slotted([cols="3"]) {
  --cols: 3;
}

:host([cols="4"]) {
  --cols: 4;
}

#main ::slotted([cols="4"]) {
  --cols: 4;
}

:host([cols="5"]) {
  --cols: 5;
}

#main ::slotted([cols="5"]) {
  --cols: 5;
}

:host([cols="6"]) {
  --cols: 6;
}

#main ::slotted([cols="6"]) {
  --cols: 6;
}

:host([cols="7"]) {
  --cols: 7;
}

#main ::slotted([cols="7"]) {
  --cols: 7;
}

:host([cols="8"]) {
  --cols: 8;
}

#main ::slotted([cols="8"]) {
  --cols: 8;
}

:host([cols="9"]) {
  --cols: 9;
}

#main ::slotted([cols="9"]) {
  --cols: 9;
}

:host([cols="10"]) {
  --cols: 10;
}

#main ::slotted([cols="10"]) {
  --cols: 10;
}

:host([cols="11"]) {
  --cols: 11;
}

#main ::slotted([cols="11"]) {
  --cols: 11;
}

:host([cols="12"]) {
  --cols: 12;
}

#main ::slotted([cols="12"]) {
  --cols: 12;
}

:host([mode=desktop]) #main {
  flex-direction: row;
}

:host([mode=mobile]) #container {
  width: 100%;
}
:host([mode=mobile]) #main {
  flex-direction: column;
}
:host([mode=mobile]) #main ::slotted(*) {
  --gutter-x: 0px;
  flex: 0 0 100%;
  width: 100%;
}`;var g$=Object.create,Bo=Object.defineProperty,v$=Object.getOwnPropertyDescriptor,wm=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),$m=i=>{throw TypeError(i)},b$=(i,t,e)=>t in i?Bo(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,y$=(i,t)=>Bo(i,"name",{value:t,configurable:!0}),w$=i=>[,,,g$(i?.[wm("metadata")]??null)],$$=["class","method","getter","setter","accessor","field","value","get","set"],km=i=>i!==void 0&&typeof i!="function"?$m("Function expected"):i,k$=(i,t,e,s,n)=>({kind:$$[i],name:t,metadata:s,addInitializer:r=>e._?$m("Already initialized"):n.push(km(r||null))}),x$=(i,t)=>b$(t,wm("metadata"),i[3]),S$=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)r[n].call(e);return s},_$=(i,t,e,s,n,r)=>{var o,l,d,c=t&7,p=!1,a=0,f=i[a]||(i[a]=[]),h=c&&(n=n.prototype,c<5&&(c>3||!p)&&v$(n,e));y$(n,e);for(var g=s.length-1;g>=0;g--)d=k$(c,e,l={},i[3],f),o=(0,s[g])(n,d),l._=1,km(o)&&(n=o);return x$(i,n),h&&Bo(n,e,h),p?c^4?r:h:n},xm,Uo,Sm;xm=[j("ntl-card-row")];const _m=class extends(Sm=it({breakpoints:!0,subLayoutApply:!0})){beforeLayoutCallback(t){var e;const s=t.querySelector(':scope > section > [slot="header"]');if(s instanceof HTMLElement){const n=s.parentElement,r=Array.from(t.children).find(o=>o.matches(".header, h1, h2, h3, h4, h5, h6"));r?.setAttribute("slot","header"),r?r.after(s):t.prepend(s),n!=null&&n.matches("section")&&n.children.length===0&&((e=n.textContent)==null?void 0:e.trim())===""&&n.remove()}return!1}render(){return k`
      <div part="container" id="container">
        <div id="header" part="header">
          <slot
            name="header"
            data-query=":scope > .header | :scope > h1,:scope > h2,:scope > h3,:scope > h4,:scope > h5,:scope > h6, :scope > p"
          ></slot>
        </div>
        <div part="main" id="main">
          <!-- set .style-parent to indicate that the child elements should inherit the style of the parent -->
          <slot
            data-query=":scope > section"
            data-set-attribute-layout="nte-card.style-parent"
            data-query-opt=""
          ></slot>
        </div>
        <div id="footer" part="footer">
          <slot name="footer" data-query=":scope > footer"></slot>
        </div>
      </div>
    `}};_m.styles=[E(f$),E(dt)];let cr=_m;Uo=w$(Sm);cr=_$(Uo,0,"NtlCardRowElement",xm,cr);S$(Uo,1,cr);const A$=`/* The ShadowDOM Styles */
:host {
  --container-width: var(--nt-container-width) /* Refer to README.md for style guidelines */;
  --gap: var(--nt-spacing-layout);
  --breakpoint: md, lg;
  --columns: var(--cols, 3);
  --columns-tablet: var(--cols-tablet, 2);
  --columns-mobile: var(--cols-mobile, 1);
  --min-width: 0px;
  --max-width: unset;
}

:host([mode=tablet]:not(.with-min-width)) #main {
  grid-template-columns: repeat(var(--columns-tablet), minmax(0, 1fr));
}
:host([mode=tablet]:not(.with-min-width)) #content-wrapper {
  flex-direction: column;
}

:host([mode=mobile]:not(.with-min-width)) #main {
  grid-template-columns: repeat(var(--columns-mobile), minmax(0, 1fr));
}
:host([mode=mobile]:not(.with-min-width)) #content-wrapper {
  flex-direction: column;
}

#wrapper {
  width: var(--container-width);
  margin: 0 auto;
}

#content-wrapper {
  display: flex;
  flex-direction: row;
  gap: var(--gap);
  margin-top: var(--gap);
  margin-bottom: var(--gap);
}
#content-wrapper > * {
  flex: 1 1 auto;
}

#main {
  display: grid;
  gap: var(--gap);
  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
}
#main > ::slotted(*) {
  width: 100%;
  max-width: var(--max-width);
  height: 100%;
}

:host(.with-min-width) #main {
  grid-template-columns: repeat(auto-fit, minmax(min(var(--min-width), 100%), 1fr));
}`;var C$=Object.create,Yo=Object.defineProperty,E$=Object.getOwnPropertyDescriptor,Am=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),ri=i=>{throw TypeError(i)},T$=(i,t,e)=>t in i?Yo(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Kc=(i,t)=>Yo(i,"name",{value:t,configurable:!0}),O$=i=>[,,,C$(i?.[Am("metadata")]??null)],Cm=["class","method","getter","setter","accessor","field","value","get","set"],Ni=i=>i!==void 0&&typeof i!="function"?ri("Function expected"):i,L$=(i,t,e,s,n)=>({kind:Cm[i],name:t,metadata:s,addInitializer:r=>e._?ri("Already initialized"):n.push(Ni(r||null))}),z$=(i,t)=>T$(t,Am("metadata"),i[3]),ji=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},Xo=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Cm[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&E$(a<4?n:{get[e](){return Jc(this,r)},set[e](u){return Qc(this,r,u)}},e));a?h&&a<4&&Kc(r,(a>2?"set ":a>1?"get ":"")+e):Kc(n,e);for(var w=s.length-1;w>=0;w--)c=L$(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>M$(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?Jc:P$)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>Qc(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Ni(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?ri("Object expected"):(Ni(o=l.get)&&(m.get=o),Ni(o=l.set)&&(m.set=o),Ni(o=l.init)&&y.unshift(o));return a||z$(i,n),m&&Yo(n,e,m),h?a^4?r:m:n},Go=(i,t,e)=>t.has(i)||ri("Cannot "+e),M$=(i,t)=>Object(t)!==t?ri('Cannot use the "in" operator on this value'):i.has(t),Jc=(i,t,e)=>(Go(i,t,"read from private field"),e?e.call(i):t.get(i)),Zc=(i,t,e)=>t.has(i)?ri("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Qc=(i,t,e,s)=>(Go(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),P$=(i,t,e)=>(Go(i,t,"access private method"),e),Em,Tm,dr,Om,Ut,Ko,Jo;Om=[j("ntl-card-grid")];let je=class extends(dr=it({breakpoints:!0,subLayoutApply:!0}),Tm=[$({type:String,reflect:!0})],Em=[$({type:String,reflect:!0})],dr){constructor(){super(...arguments),Zc(this,Ko,ji(Ut,8,this,"nte-card.style-parent")),ji(Ut,11,this),Zc(this,Jo,ji(Ut,12,this,"ntl-card-grid")),ji(Ut,15,this)}render(){return k`
      <div part="wrapper" id="wrapper">
        <div part="header" id="header">
          <slot
            name="header"
            data-query=":scope > .header | :scope > h1:not(.keep),:scope > h2:not(.keep),:scope > h3:not(.keep),:scope > h4:not(.keep),:scope > h5:not(.keep),:scope > h6:not(.keep)"
          ></slot>
        </div>
        <div part="content-wrapper" id="content-wrapper">
          <div part="main" id="main">
            <slot data-query=":scope > section:not(.aside)" data-set-attribute-layout="${this.childLayout}"></slot>
          </div>
          <div part="aside" id="aside">
            <slot name="aside" data-query=":scope > .aside"></slot>
          </div>
        </div>
        <div part="footer" id="footer">
          <slot name="footer" data-query=":scope > .footer"></slot>
        </div>
      </div>
    `}};Ut=O$(dr);Ko=new WeakMap;Jo=new WeakMap;Xo(Ut,4,"childLayout",Tm,je,Ko);Xo(Ut,4,"name",Em,je,Jo);je=Xo(Ut,0,"NtlCardGridElement",Om,je);je.styles=[E(A$),E(dt)];ji(Ut,1,je);const I$=`:host {
  display: block;
}

#details {
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

#summary {
  order: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  list-style: none;
}
#summary::-webkit-details-marker {
  display: none;
}
#summary::marker {
  display: none;
  content: "";
}

#content-wrap {
  height: 0;
  overflow: hidden;
  transition: height var(--transition-duration, 350ms) ease;
}

#title {
  flex: 1;
  min-width: 0;
}

#marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--marker-size, 1.25rem);
  height: var(--marker-size, 1.25rem);
  flex-shrink: 0;
  color: var(--marker-color, currentColor);
}
#marker::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-image: var(--marker-icon-closed, none);
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-image: var(--marker-icon-closed, none);
}

:host([open]) #marker::before {
  mask-image: var(--marker-icon-open, var(--marker-icon-closed, none));
  -webkit-mask-image: var(--marker-icon-open, var(--marker-icon-closed, none));
}

:host([marker-icon=plus]) #marker::before {
  mask-image: var(--marker-icon-plus, var(--marker-icon-closed, none));
  -webkit-mask-image: var(--marker-icon-plus, var(--marker-icon-closed, none));
}

:host([marker-icon=plus][open]) #marker::before {
  mask-image: var(--marker-icon-minus, var(--marker-icon-open, none));
  -webkit-mask-image: var(--marker-icon-minus, var(--marker-icon-open, none));
}

:host([marker-position=start]) #marker {
  order: -1;
}

#summary:focus-visible {
  outline: var(--focus-outline, 2px solid currentColor);
  outline-offset: -2px;
}`;var D$=Object.create,Zo=Object.defineProperty,W$=Object.getOwnPropertyDescriptor,Lm=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),ai=i=>{throw TypeError(i)},N$=(i,t,e)=>t in i?Zo(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,td=(i,t)=>Zo(i,"name",{value:t,configurable:!0}),j$=i=>[,,,D$(i?.[Lm("metadata")]??null)],zm=["class","method","getter","setter","accessor","field","value","get","set"],Hi=i=>i!==void 0&&typeof i!="function"?ai("Function expected"):i,H$=(i,t,e,s,n)=>({kind:zm[i],name:t,metadata:s,addInitializer:r=>e._?ai("Already initialized"):n.push(Hi(r||null))}),R$=(i,t)=>N$(t,Lm("metadata"),i[3]),me=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},sn=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=zm[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&W$(a<4?n:{get[e](){return ed(this,r)},set[e](u){return id(this,r,u)}},e));a?h&&a<4&&td(r,(a>2?"set ":a>1?"get ":"")+e):td(n,e);for(var w=s.length-1;w>=0;w--)c=H$(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>F$(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?ed:q$)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>id(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Hi(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?ai("Object expected"):(Hi(o=l.get)&&(m.get=o),Hi(o=l.set)&&(m.set=o),Hi(o=l.init)&&y.unshift(o));return a||R$(i,n),m&&Zo(n,e,m),h?a^4?r:m:n},Qo=(i,t,e)=>t.has(i)||ai("Cannot "+e),F$=(i,t)=>Object(t)!==t?ai('Cannot use the "in" operator on this value'):i.has(t),ed=(i,t,e)=>(Qo(i,t,"read from private field"),e?e.call(i):t.get(i)),gn=(i,t,e)=>t.has(i)?ai("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),id=(i,t,e,s)=>(Qo(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),q$=(i,t,e)=>(Qo(i,t,"access private method"),e),Mm,Pm,Im,hr,Dm,ft,tl,el,il;Dm=[j("nte-accordion-item")];let Se=class extends(hr=ds(it({slotVisibility:!1,eventBinding:!1})),Im=[$({type:Boolean,reflect:!0})],Pm=[$({type:String,reflect:!0,attribute:"marker-position"})],Mm=[$({type:String,reflect:!0,attribute:"marker-icon"})],hr){constructor(){super(...arguments),gn(this,tl,me(ft,8,this,!1)),me(ft,11,this),gn(this,el,me(ft,12,this,"end")),me(ft,15,this),gn(this,il,me(ft,16,this,null)),me(ft,19,this),this._detailsElement=null,this._contentWrapElement=null,this._transitionEndHandler=null,this._animationFrame=0,this._isReady=!1}firstUpdated(t){var e,s;super.firstUpdated(t),this._detailsElement=((e=this.shadowRoot)==null?void 0:e.querySelector("#details"))??null,this._contentWrapElement=((s=this.shadowRoot)==null?void 0:s.querySelector("#content-wrap"))??null,this._isReady=!0,this._applyOpenState(!1)}updated(t){super.updated(t),t.has("open")&&this._isReady&&(this._applyOpenState(!0),this._dispatchToggle())}disconnectedCallback(){this._clearAnimationState(),super.disconnectedCallback()}_onSummaryClick(t){t.preventDefault(),this.open=!this.open}_applyOpenState(t){if(this.open){this._expandContent(t);return}this._collapseContent(t)}_expandContent(t){if(!this._detailsElement||!this._contentWrapElement)return;const e=this._detailsElement,s=this._contentWrapElement;if(this._clearAnimationState(),e.open=!0,!t){s.style.height="auto";return}const n=s.getBoundingClientRect().height;s.style.height=`${n}px`,s.offsetHeight;const r=s.scrollHeight;if(Math.abs(r-n)<1){s.style.height="auto";return}this._animationFrame=requestAnimationFrame(()=>{s.style.height=`${r}px`}),this._transitionEndHandler=o=>{o.target!==s||o.propertyName!=="height"||(this._clearAnimationState(),s.style.height="auto")},s.addEventListener("transitionend",this._transitionEndHandler)}_collapseContent(t){if(!this._detailsElement||!this._contentWrapElement)return;const e=this._detailsElement,s=this._contentWrapElement;if(this._clearAnimationState(),!t){e.open=!1,s.style.height="0px";return}if(!e.open){s.style.height="0px";return}const n=s.getBoundingClientRect().height||s.scrollHeight;s.style.height=`${n}px`,s.offsetHeight,this._animationFrame=requestAnimationFrame(()=>{s.style.height="0px"}),this._transitionEndHandler=r=>{r.target!==s||r.propertyName!=="height"||(this._clearAnimationState(),e.open=!1,s.style.height="0px")},s.addEventListener("transitionend",this._transitionEndHandler)}_clearAnimationState(){this._animationFrame&&(cancelAnimationFrame(this._animationFrame),this._animationFrame=0),this._contentWrapElement&&this._transitionEndHandler&&(this._contentWrapElement.removeEventListener("transitionend",this._transitionEndHandler),this._transitionEndHandler=null)}_dispatchToggle(){this.dispatchEvent(new CustomEvent("accordion-toggle",{detail:{open:this.open},bubbles:!0,composed:!0}))}render(){return k`
      <details id="details" part="details">
        <summary id="summary" part="summary" @click=${this._onSummaryClick}>
          <span id="title" part="title">
            <slot
              name="title"
              data-query=":scope > h1,:scope > h2,:scope > h3,:scope > h4,:scope > h5,:scope > h6"
            ></slot>
          </span>
          <span id="marker" part="marker"></span>
        </summary>
        <div id="content-wrap">
          <div id="content" part="content">
            <slot></slot>
          </div>
        </div>
      </details>
    `}};ft=j$(hr);tl=new WeakMap;el=new WeakMap;il=new WeakMap;sn(ft,4,"open",Im,Se,tl);sn(ft,4,"markerPosition",Pm,Se,el);sn(ft,4,"markerIcon",Mm,Se,il);Se=sn(ft,0,"NteAccordionItemElement",Dm,Se);Se.styles=[E(dt),E(I$)];me(ft,1,Se);const V$=`:host {
  display: block;
}

#accordion {
  display: block;
}`;var B$=Object.create,sl=Object.defineProperty,U$=Object.getOwnPropertyDescriptor,Wm=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),oi=i=>{throw TypeError(i)},Y$=(i,t,e)=>t in i?sl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,sd=(i,t)=>sl(i,"name",{value:t,configurable:!0}),X$=i=>[,,,B$(i?.[Wm("metadata")]??null)],Nm=["class","method","getter","setter","accessor","field","value","get","set"],Ri=i=>i!==void 0&&typeof i!="function"?oi("Function expected"):i,G$=(i,t,e,s,n)=>({kind:Nm[i],name:t,metadata:s,addInitializer:r=>e._?oi("Already initialized"):n.push(Ri(r||null))}),K$=(i,t)=>Y$(t,Wm("metadata"),i[3]),Ht=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},us=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Nm[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&U$(a<4?n:{get[e](){return nd(this,r)},set[e](u){return rd(this,r,u)}},e));a?h&&a<4&&sd(r,(a>2?"set ":a>1?"get ":"")+e):sd(n,e);for(var w=s.length-1;w>=0;w--)c=G$(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>J$(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?nd:Z$)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>rd(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Ri(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?oi("Object expected"):(Ri(o=l.get)&&(m.get=o),Ri(o=l.set)&&(m.set=o),Ri(o=l.init)&&y.unshift(o));return a||K$(i,n),m&&sl(n,e,m),h?a^4?r:m:n},nl=(i,t,e)=>t.has(i)||oi("Cannot "+e),J$=(i,t)=>Object(t)!==t?oi('Cannot use the "in" operator on this value'):i.has(t),nd=(i,t,e)=>(nl(i,t,"read from private field"),e?e.call(i):t.get(i)),fs=(i,t,e)=>t.has(i)?oi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),rd=(i,t,e,s)=>(nl(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),Z$=(i,t,e)=>(nl(i,t,"access private method"),e),jm,Hm,Rm,Fm,ur,qm,rt,rl,al,ol,ll;const Q$={fromAttribute(i){if(i===null)return;if(i==="")return 0;const t=parseInt(i,10);return isNaN(t)?void 0:t},toAttribute(i){return i!==void 0?String(i):null}};qm=[j("nte-accordion")];let oe=class extends(ur=it({slotVisibility:!1,eventBinding:!1,subLayoutApply:!0}),Fm=[$({type:Boolean,reflect:!0})],Rm=[$({converter:Q$,attribute:"initial-open-index"})],Hm=[$({type:String,reflect:!0,attribute:"marker-position"})],jm=[$({type:String,reflect:!0,attribute:"marker-icon"})],ur){constructor(){super(...arguments),fs(this,rl,Ht(rt,8,this,!0)),Ht(rt,11,this),fs(this,al,Ht(rt,12,this,0)),Ht(rt,15,this),fs(this,ol,Ht(rt,16,this,null)),Ht(rt,19,this),fs(this,ll,Ht(rt,20,this,null)),Ht(rt,23,this),this._initialized=!1,this._onSlotChange=()=>{this._propagateProperties(),this._applyInitialOpenIndex()},this._onItemToggle=t=>{if(!this.exclusive||!t.detail.open)return;const e=t.target;for(const s of this._getAccordionItems())s!==e&&s.open&&(s.open=!1)}}connectedCallback(){super.connectedCallback(),this.classList.add("nte-accordion")}firstUpdated(t){super.firstUpdated(t),this.addEventListener("accordion-toggle",this._onItemToggle),this._onSlotChange()}_propagateProperties(){for(const t of this._getAccordionItems())this.markerPosition&&!t.hasAttribute("marker-position")&&(t.markerPosition=this.markerPosition),this.markerIcon&&!t.hasAttribute("marker-icon")&&(t.markerIcon=this.markerIcon)}_applyInitialOpenIndex(){if(this._initialized||this.initialOpenIndex===void 0)return;this._initialized=!0;const t=this._getAccordionItems();this.initialOpenIndex>=0&&this.initialOpenIndex<t.length&&(t[this.initialOpenIndex].open=!0)}_getAccordionItems(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot:not([name])");return e?e.assignedElements({flatten:!0}).filter(s=>s.tagName==="NTE-ACCORDION-ITEM"):[]}render(){return k`
      <div id="accordion" part="accordion">
        <slot
          data-query=":scope > section:not(.keep)"
          data-set-attribute-layout="nte-accordion-item"
          @slotchange=${this._onSlotChange}
        ></slot>
      </div>
    `}};rt=X$(ur);rl=new WeakMap;al=new WeakMap;ol=new WeakMap;ll=new WeakMap;us(rt,4,"exclusive",Fm,oe,rl);us(rt,4,"initialOpenIndex",Rm,oe,al);us(rt,4,"markerPosition",Hm,oe,ol);us(rt,4,"markerIcon",jm,oe,ll);oe=us(rt,0,"NteAccordionElement",qm,oe);oe.styles=[E(dt),E(V$)];Ht(rt,1,oe);const tk=`:host {
  --breakpoint: lg;
  display: block;
  isolation: isolate;
}

:host([consentgiven=true]) #pre-consent,
:host([consentgiven=true]) #background {
  z-index: 0;
  opacity: 0;
}
:host([consentgiven=true]) #consented-content {
  z-index: 99;
  opacity: 1;
}
:host([consentgiven=true]) #loading-text {
  opacity: 1;
}

#wrapper {
  display: grid;
  height: 100%;
}
#wrapper > * {
  grid-area: 1/1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

#pre-consent {
  opacity: 1;
  z-index: 99;
}

#background {
  opacity: 1;
}

#consented-content {
  z-index: 0;
  opacity: 0;
}

#loading-text {
  opacity: 0;
  z-index: 5;
}`;var ek=Object.create,cl=Object.defineProperty,ik=Object.getOwnPropertyDescriptor,Vm=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),li=i=>{throw TypeError(i)},sk=(i,t,e)=>t in i?cl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ad=(i,t)=>cl(i,"name",{value:t,configurable:!0}),nk=i=>[,,,ek(i?.[Vm("metadata")]??null)],Bm=["class","method","getter","setter","accessor","field","value","get","set"],Fi=i=>i!==void 0&&typeof i!="function"?li("Function expected"):i,rk=(i,t,e,s,n)=>({kind:Bm[i],name:t,metadata:s,addInitializer:r=>e._?li("Already initialized"):n.push(Fi(r||null))}),ak=(i,t)=>sk(t,Vm("metadata"),i[3]),Ms=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},dl=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Bm[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&ik(a<4?n:{get[e](){return od(this,r)},set[e](u){return cd(this,r,u)}},e));a?h&&a<4&&ad(r,(a>2?"set ":a>1?"get ":"")+e):ad(n,e);for(var w=s.length-1;w>=0;w--)c=rk(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>ok(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?od:_t)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>cd(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?Fi(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?li("Object expected"):(Fi(o=l.get)&&(m.get=o),Fi(o=l.set)&&(m.set=o),Fi(o=l.init)&&y.unshift(o));return a||ak(i,n),m&&cl(n,e,m),h?a^4?r:m:n},hl=(i,t,e)=>t.has(i)||li("Cannot "+e),ok=(i,t)=>Object(t)!==t?li('Cannot use the "in" operator on this value'):i.has(t),od=(i,t,e)=>(hl(i,t,"read from private field"),e?e.call(i):t.get(i)),ld=(i,t,e)=>t.has(i)?li("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),cd=(i,t,e,s)=>(hl(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),_t=(i,t,e)=>(hl(i,t,"access private method"),e),Um,Ym,pr,Xm,$t,Gm,re,ul,Ps,Is,Km,Jm;const lk={breakpoints:!0,slotVisibility:!0,eventBinding:!0};function ck(i){return i.replace(/^['"]|['"]$/g,"")}Xm=[j("nte-consent-blocker")];let He=class extends(pr=ds(it(lk)),Ym=[K("click",{target:"host"})],Um=[$({reflect:!0})],pr){constructor(){super(...arguments),Ms(re,5,this),ld(this,$t),ld(this,ul,Ms(re,8,this,!1)),Ms(re,11,this)}async connectedCallback(){await Wr(),super.connectedCallback(),this.classList.add("nte-consent-blocker")}onClick(t){t.target instanceof HTMLButtonElement&&t.target.closest('[data-action="consent"]')&&_t(this,$t,Gm).call(this)}firstUpdated(t){if(super.firstUpdated(t),this.querySelector(":scope > template")===null){const e=_t(this,$t,Ps).call(this,"--default-template-selector");e&&_t(this,$t,Is).call(this,e)}if(this.querySelector(':scope > [slot="background"]')===null){const e=_t(this,$t,Ps).call(this,"--default-background-selector");(!e||!_t(this,$t,Is).call(this,e,"background"))&&_t(this,$t,Km).call(this)}if(this.querySelector(':scope > [slot="pre-consent"]')===null){const e=_t(this,$t,Ps).call(this,"--default-pre-consent-selector");(!e||!_t(this,$t,Is).call(this,e,"pre-consent"))&&_t(this,$t,Jm).call(this)}}render(){return k`
      <div id="wrapper" part="wrapper">
        <div id="background" part="background">
          <slot name="background" data-query=":scope > .background | :scope > p:has(img:not(.keep))"></slot>
        </div>
        <div id="consented-content" part="consented-content"><slot name="consented-content"></slot></div>
        <div id="pre-consent" part="pre-consent"><slot name="pre-consent"></slot></div>
        <div id="loading-text" part="loading-text">Bitte warten...</div>
      </div>
    `}};re=nk(pr);$t=new WeakSet;Gm=function(){const i=this.querySelector(":scope > template");if(!i){this.warn("No template found for consented content. Please provide a <template> element as a child of nte-consent-blocker with the consented content.");return}Array.from(i.content.childNodes).forEach(t=>{const e=t.cloneNode(!0);e instanceof HTMLElement&&(e.setAttribute("slot","consented-content"),this.appendChild(e))}),this.consentGiven=!0};ul=new WeakMap;Ps=function(i){return ck(getComputedStyle(this).getPropertyValue(i).trim())};Is=function(i,t=null){let e;try{e=this.ownerDocument.querySelector(i)}catch{return this.warn(`Invalid default template selector: ${i}`),!1}if(!(e instanceof HTMLTemplateElement))return this.warn(`Default template selector does not reference a <template>: ${i}`),!1;if(t)Array.from(e.content.children).forEach(s=>{const n=s.cloneNode(!0);n.setAttribute("slot",t),this.appendChild(n)});else{const s=this.ownerDocument.createElement("template");s.content.appendChild(e.content.cloneNode(!0)),this.appendChild(s)}return!0};Km=function(){const i=this.ownerDocument.createElement("template");i.innerHTML='<img loading="lazy" fetchpriority="low" alt="Karte noch nicht geladen" src="https://cdn.leuffen.de/hyperpage-components/v1.0/google-maps/maps-preview.jpg">';const t=i.content.firstElementChild;t&&(t.setAttribute("slot","background"),this.appendChild(t))};Jm=function(){const i=this.ownerDocument.createElement("template");i.innerHTML='<button class="btn btn-primary" data-action="consent">Daten von Google laden</button><p>Mit Klick auf Daten von Google laden, wird der externe Inhalt geladen und die zugehörige Datenschutzerklärung akzeptiert.</p>',Array.from(i.content.children).forEach(t=>{t.setAttribute("slot","pre-consent"),this.appendChild(t)})};dl(re,1,"onClick",Ym,He);dl(re,4,"consentGiven",Um,He,ul);He=dl(re,0,"NteConsentBlockerElement",Xm,He);He.styles=[E(dt),E(tk)];Ms(re,1,He);const dk=`/* The ShadowDOM Styles */
:host {
  display: block;
  overflow: visible;
  position: relative;
}

.parallax-wrapper {
  position: relative;
  overflow: visible;
  display: block;
  height: 100%;
  width: 100%;
}

.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
}

slot {
  display: none;
}

::slotted(*) {
  display: none !important;
}`;var hk=Object.create,pl=Object.defineProperty,uk=Object.getOwnPropertyDescriptor,Zm=(i,t)=>(t=Symbol[i])?t:Symbol.for("Symbol."+i),ci=i=>{throw TypeError(i)},pk=(i,t,e)=>t in i?pl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,dd=(i,t)=>pl(i,"name",{value:t,configurable:!0}),mk=i=>[,,,hk(i?.[Zm("metadata")]??null)],Qm=["class","method","getter","setter","accessor","field","value","get","set"],qi=i=>i!==void 0&&typeof i!="function"?ci("Function expected"):i,fk=(i,t,e,s,n)=>({kind:Qm[i],name:t,metadata:s,addInitializer:r=>e._?ci("Already initialized"):n.push(qi(r||null))}),gk=(i,t)=>pk(t,Zm("metadata"),i[3]),Rt=(i,t,e,s)=>{for(var n=0,r=i[t>>1],o=r&&r.length;n<o;n++)t&1?r[n].call(e):s=r[n].call(e,s);return s},ps=(i,t,e,s,n,r)=>{var o,l,d,c,p,a=t&7,f=!!(t&8),h=!!(t&16),g=a>3?i.length+1:a?f?1:2:0,b=Qm[a+5],y=a>3&&(i[g-1]=[]),x=i[g]||(i[g]=[]),m=a&&(!h&&!f&&(n=n.prototype),a<5&&(a>3||!h)&&uk(a<4?n:{get[e](){return hd(this,r)},set[e](u){return ud(this,r,u)}},e));a?h&&a<4&&dd(r,(a>2?"set ":a>1?"get ":"")+e):dd(n,e);for(var w=s.length-1;w>=0;w--)c=fk(a,e,d={},i[3],x),a&&(c.static=f,c.private=h,p=c.access={has:h?u=>vk(n,u):u=>e in u},a^3&&(p.get=h?u=>(a^1?hd:bk)(u,n,a^4?r:m.get):u=>u[e]),a>2&&(p.set=h?(u,v)=>ud(u,n,v,a^4?r:m.set):(u,v)=>u[e]=v)),l=(0,s[w])(a?a<4?h?r:m[b]:a>4?void 0:{get:m.get,set:m.set}:n,c),d._=1,a^4||l===void 0?qi(l)&&(a>4?y.unshift(l):a?h?r=l:m[b]=l:n=l):typeof l!="object"||l===null?ci("Object expected"):(qi(o=l.get)&&(m.get=o),qi(o=l.set)&&(m.set=o),qi(o=l.init)&&y.unshift(o));return a||gk(i,n),m&&pl(n,e,m),h?a^4?r:m:n},ml=(i,t,e)=>t.has(i)||ci("Cannot "+e),vk=(i,t)=>Object(t)!==t?ci('Cannot use the "in" operator on this value'):i.has(t),hd=(i,t,e)=>(ml(i,t,"read from private field"),e?e.call(i):t.get(i)),gs=(i,t,e)=>t.has(i)?ci("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),ud=(i,t,e,s)=>(ml(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e),bk=(i,t,e)=>(ml(i,t,"access private method"),e),tf,ef,sf,nf,mr,rf,at,fl,gl,vl,bl;rf=[j("nte-parallax-bg")];class le extends(mr=cs(Pt),nf=[$({type:String})],sf=[$({type:String})],ef=[$({type:String})],tf=[$({type:String})],mr){constructor(){super(...arguments),gs(this,fl,Rt(at,8,this,"")),Rt(at,11,this),gs(this,gl,Rt(at,12,this,"100vh")),Rt(at,15,this),gs(this,vl,Rt(at,16,this,"100%")),Rt(at,19,this),gs(this,bl,Rt(at,20,this,"transparent")),Rt(at,23,this),this.onScroll=()=>{var t;const e=window.scrollY,s=this.getBoundingClientRect().top+e,n=(e-s)*-.3,r=(t=this.shadowRoot)==null?void 0:t.querySelector(".parallax-container");r&&(r.style.transform=`translateY(${n}px)`)}}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.onScroll,{passive:!0}),this.updateComplete.then(()=>{this.setupSlotObserver(),this.extractImageFromSlot(),this.onScroll()})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.onScroll)}setupSlotObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");e&&e.addEventListener("slotchange",()=>{this.extractImageFromSlot()})}extractImageFromSlot(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");if(!e)return;const s=e.assignedElements();let n=!1;s.forEach(r=>{var o;if(r instanceof HTMLElement){const l=r.getAttribute("src")||((o=r.querySelector("img"))==null?void 0:o.getAttribute("src"));l&&l!==this.image&&(this.image=l,n=!0),r.style.display="none"}}),n&&this.requestUpdate()}render(){return k`
      <div
        class="parallax-wrapper"
        style="height: ${this.height}; width: ${this.width}; background-color: ${this.backgroundColor}"
      >
        <div class="parallax-container" style="background-image: url('${this.image}')"></div>
        <slot></slot>
      </div>
    `}}at=mk(mr);fl=new WeakMap;gl=new WeakMap;vl=new WeakMap;bl=new WeakMap;ps(at,4,"image",nf,le,fl);ps(at,4,"height",sf,le,gl);ps(at,4,"width",ef,le,vl);ps(at,4,"backgroundColor",tf,le,bl);le=ps(at,0,"NteParallaxBg",rf,le);le.styles=[E(dk),E(dt)];Rt(at,1,le);
