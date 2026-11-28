import { b as bt, p as pt, E as Et, g as gt, y as yt, s as st, i, r, a as b, t, o, n, c as r$1, A, d as y, e as n$1, w as wt, f as dt, h as i$1, j as o$1, k as e, l as lt, m as i$2, q as o$2, Z } from "./assets/vendor-BrlR3vZs.js";
function SetDefaultStyleMixin(Base) {
  class SetDefaultStyleMixinClass extends Base {
    #styleClassObserver;
    connectedCallback() {
      super.connectedCallback();
      this.ensureDefaultStyleClass();
      this.#observeStyleClassChanges();
    }
    disconnectedCallback() {
      this.#styleClassObserver?.disconnect();
      this.#styleClassObserver = void 0;
      super.disconnectedCallback();
    }
    ensureDefaultStyleClass() {
      const hasStyleClass = Array.from(this.classList).some((className) => className.startsWith("style-"));
      if (!hasStyleClass) {
        this.classList.add("style-default");
      }
    }
    #observeStyleClassChanges() {
      if (this.#styleClassObserver !== void 0) {
        return;
      }
      this.#styleClassObserver = new MutationObserver(() => this.ensureDefaultStyleClass());
      this.#styleClassObserver.observe(this, {
        attributes: true,
        attributeFilter: ["class"]
      });
    }
  }
  return SetDefaultStyleMixinClass;
}
const defaultNteFeatures = {
  logging: true,
  slotVisibility: false,
  eventBinding: false,
  breakpoints: false,
  setDefaultStyle: true,
  subLayoutApply: false
};
function nextrap_element(features2 = {}) {
  const mergedFeatures = { ...defaultNteFeatures, ...features2 };
  let constructor = i;
  constructor = bt(constructor);
  if (mergedFeatures.setDefaultStyle) {
    constructor = SetDefaultStyleMixin(constructor);
  }
  if (mergedFeatures.logging) {
    constructor = pt(constructor);
  }
  if (mergedFeatures.slotVisibility) {
    constructor = Et(constructor);
  }
  if (mergedFeatures.breakpoints) {
    constructor = gt(constructor);
  }
  if (mergedFeatures.eventBinding) {
    constructor = yt(constructor);
  }
  if (mergedFeatures.subLayoutApply) {
    constructor = st(constructor);
  }
  return constructor;
}
const style$u = "/* General Purpose SCSS Reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\ndialog {\n  color: inherit;\n  background: transparent;\n  border: none;\n}\n\na,\ni {\n  color: inherit;\n  text-decoration: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nslot {\n  display: contents;\n}\n\n:host {\n  --container-width: var(--nt-container-width, 100%);\n  --nte-navbar-position: static;\n  --nte-navbar-scroll-threshold: 1;\n  --nte-navbar-top: 0;\n  --nte-navbar-background: Canvas;\n  --nte-navbar-background-at-top: var(--nte-navbar-background);\n  --nte-navbar-shadow: 0 0.25rem 1rem color-mix(in srgb, currentColor 12%, transparent);\n  --nte-navbar-overlay-offset: 0px;\n  display: block;\n  position: var(--nte-navbar-position);\n  inset-block-start: var(--nte-navbar-top);\n  z-index: var(--nt-navbar-z-index, 10);\n  width: 100%;\n  background: var(--nte-navbar-background);\n  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n\n:host(.with-shadow) {\n  box-shadow: var(--nte-navbar-shadow);\n}\n\n:host(.with-shadow-on-scroll.is-below-threshold) {\n  box-shadow: var(--nte-navbar-shadow);\n}\n\n:host(.with-transparent-at-top:not(.is-below-threshold)) {\n  background: transparent;\n  box-shadow: none;\n}\n\n:host(.with-overlay-at-top:not(.is-below-threshold)) {\n  margin-block-end: calc(-1 * var(--nte-navbar-overlay-offset));\n}\n\n#navbar {\n  display: block;\n  width: 100%;\n}";
var __create$j = Object.create;
var __defProp$l = Object.defineProperty;
var __getOwnPropDesc$n = Object.getOwnPropertyDescriptor;
var __knownSymbol$j = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$j = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$j = (target, value) => __defProp$l(target, "name", { value, configurable: true });
var __decoratorStart$j = (base) => [, , , __create$j(base?.[__knownSymbol$j("metadata")] ?? null)];
var __decoratorStrings$j = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$j = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$j("Function expected") : fn;
var __decoratorContext$j = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$j[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$j("Already initialized") : fns.push(__expectFn$j(fn || null)) });
var __decoratorMetadata$j = (array, target) => __defNormalProp$j(target, __knownSymbol$j("metadata"), array[3]);
var __runInitializers$j = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) fns[i2].call(self);
  return value;
};
var __decorateElement$j = (array, flags, name, decorators, target, extra) => {
  var it, done, ctx, k = flags & 7, p = false;
  var j = 0;
  var extraInitializers = array[j] || (array[j] = []);
  var desc = k && (target = target.prototype, k < 5 && (k > 3 || !p) && __getOwnPropDesc$n(target, name));
  __name$j(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$j(k, name, done = {}, array[3], extraInitializers);
    it = (0, decorators[i2])(target, ctx), done._ = 1;
    __expectFn$j(it) && (target = it);
  }
  return __decoratorMetadata$j(array, target), desc && __defProp$l(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var _NteNavbar_decorators, _init$j, _a$j;
_NteNavbar_decorators = [t("nte-navbar")];
const _NteNavbar = class _NteNavbar extends (_a$j = nextrap_element({})) {
  constructor() {
    super(...arguments);
    this.scrollThreshold = 1;
    this.styleObserver = new MutationObserver(() => this.refreshComponentStyle());
    this._onScroll = () => this.updateScrollState();
    this._onSlotChange = () => this.updateScrollState();
  }
  static get is() {
    return "nte-navbar";
  }
  connectedCallback() {
    super.connectedCallback();
    this.styleObserver.observe(this, { attributes: true, attributeFilter: ["class", "style"] });
    window.addEventListener("scroll", this._onScroll, { passive: true });
    this.refreshComponentStyle();
  }
  disconnectedCallback() {
    this.styleObserver.disconnect();
    window.removeEventListener("scroll", this._onScroll);
    super.disconnectedCallback();
  }
  refreshComponentStyle() {
    const componentStyle = this.getComponentStyle();
    this.scrollThreshold = componentStyle.scrollThreshold;
    this.updateScrollState();
  }
  getComponentStyle() {
    const computed = getComputedStyle(this);
    const rawThreshold = computed.getPropertyValue("--nte-navbar-scroll-threshold").trim();
    const parsedThreshold = Number.parseFloat(rawThreshold);
    return {
      scrollThreshold: Number.isFinite(parsedThreshold) ? Math.max(0, parsedThreshold) : 1
    };
  }
  updateScrollState() {
    const scrollY = Math.max(0, window.scrollY);
    const isScrolled = scrollY > 0;
    const isBelowThreshold = scrollY > this.scrollThreshold;
    this.classList.toggle("is-scrolled", isScrolled);
    this.classList.toggle("is-below-threshold", isBelowThreshold);
    this.syncLineScrollState(isScrolled, isBelowThreshold);
  }
  syncLineScrollState(isScrolled, isBelowThreshold) {
    for (const line of Array.from(this.querySelectorAll("nte-navbar-line"))) {
      line.classList.toggle("is-navbar-scrolled", isScrolled);
      line.classList.toggle("is-navbar-below-threshold", isBelowThreshold);
    }
  }
  render() {
    return b`<div id="navbar" part="navbar"><slot @slotchange=${this._onSlotChange}></slot></div>`;
  }
};
_NteNavbar.styles = [r(style$u)];
let NteNavbar = _NteNavbar;
_init$j = __decoratorStart$j(_a$j);
NteNavbar = __decorateElement$j(_init$j, 0, "NteNavbar", _NteNavbar_decorators, NteNavbar);
__runInitializers$j(_init$j, 1, NteNavbar);
const style$t = "/* General Purpose SCSS Reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\ndialog {\n  color: inherit;\n  background: transparent;\n  border: none;\n}\n\na,\ni {\n  color: inherit;\n  text-decoration: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nslot {\n  display: contents;\n}\n\n:host {\n  --height: auto;\n  --height-scrolled: var(--height);\n  --background: transparent;\n  --text-color: var(--nt-text);\n  display: block;\n  position: relative;\n  isolation: isolate;\n  width: 100%;\n  block-size: var(--height);\n  max-block-size: var(--height);\n  min-block-size: 0;\n  overflow: clip;\n  color: var(--text-color);\n  background: var(--background);\n  transition: block-size 0.2s ease-in-out, max-block-size 0.2s ease-in-out, opacity 0.2s ease-in-out;\n}\n\n:host(.with-shrink-on-scroll) {\n  max-block-size: var(--height);\n}\n\n:host(.is-navbar-below-threshold.with-shrink-on-scroll) {\n  block-size: var(--height-scrolled);\n  max-block-size: var(--height-scrolled);\n}\n\n:host(.with-collapse-on-scroll),\n:host(.hide-on-scroll) {\n  max-block-size: var(--height);\n}\n\n:host(.is-navbar-below-threshold.with-collapse-on-scroll),\n:host(.is-navbar-below-threshold.hide-on-scroll) {\n  block-size: 0;\n  max-block-size: 0;\n  opacity: 0;\n}\n\n#line {\n  width: 100%;\n  block-size: 100%;\n  min-block-size: 0;\n}\n\n#container {\n  width: min(100%, var(--container-width, var(--nt-container-width, 100%)));\n  block-size: 100%;\n  min-block-size: 0;\n  margin-inline: auto;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);\n  align-items: center;\n}\n\n.region {\n  min-width: 0;\n  min-block-size: 0;\n  block-size: 100%;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.region ::slotted(*) {\n  min-width: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n#start {\n  justify-content: flex-start;\n}\n\n#center {\n  justify-content: center;\n  justify-self: center;\n}\n\n#end {\n  justify-content: flex-end;\n}\n\n#container:has(> #center > slot.slot-empty) {\n  display: flex;\n  justify-content: space-between;\n}\n\n#container:has(> #center > slot.slot-empty) #start,\n#container:has(> #center > slot.slot-empty) #end {\n  flex: 0 1 auto;\n}\n\n#container:has(> #center > slot.slot-empty) #center {\n  display: none;\n}\n\n.region:has(> slot.slot-empty) {\n  visibility: hidden;\n  pointer-events: none;\n}";
var __create$i = Object.create;
var __defProp$k = Object.defineProperty;
var __getOwnPropDesc$m = Object.getOwnPropertyDescriptor;
var __knownSymbol$i = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$i = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$i = (target, value) => __defProp$k(target, "name", { value, configurable: true });
var __decoratorStart$i = (base) => [, , , __create$i(base?.[__knownSymbol$i("metadata")] ?? null)];
var __decoratorStrings$i = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$i = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$i("Function expected") : fn;
var __decoratorContext$i = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$i[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$i("Already initialized") : fns.push(__expectFn$i(fn || null)) });
var __decoratorMetadata$i = (array, target) => __defNormalProp$i(target, __knownSymbol$i("metadata"), array[3]);
var __runInitializers$i = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) fns[i2].call(self);
  return value;
};
var __decorateElement$i = (array, flags, name, decorators, target, extra) => {
  var it, done, ctx, k = flags & 7, p = false;
  var j = 0;
  var extraInitializers = array[j] || (array[j] = []);
  var desc = k && (target = target.prototype, k < 5 && (k > 3 || !p) && __getOwnPropDesc$m(target, name));
  __name$i(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$i(k, name, done = {}, array[3], extraInitializers);
    it = (0, decorators[i2])(target, ctx), done._ = 1;
    __expectFn$i(it) && (target = it);
  }
  return __decoratorMetadata$i(array, target), desc && __defProp$k(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var _NteNavbarLine_decorators, _init$i, _a$i;
_NteNavbarLine_decorators = [t("nte-navbar-line")];
const _NteNavbarLine = class _NteNavbarLine extends (_a$i = nextrap_element({ slotVisibility: true })) {
  static get is() {
    return "nte-navbar-line";
  }
  render() {
    return b`
      <div id="line" part="line">
        <div id="container" part="container">
          <div id="start" class="region" part="start"><slot name="start"></slot></div>
          <div id="center" class="region" part="center"><slot name="center"></slot></div>
          <div id="end" class="region" part="end"><slot name="end"></slot></div>
        </div>
      </div>
      <!-- Der Default-Slot bleibt als sichtbarer Diagnose-Fallback bestehen; Inhalte darin zeigen einen falschen Slot-Namen an. -->
      <slot NO-DEFAULT-SLOT></slot>
    `;
  }
};
_NteNavbarLine.styles = [r(style$t)];
let NteNavbarLine = _NteNavbarLine;
_init$i = __decoratorStart$i(_a$i);
NteNavbarLine = __decorateElement$i(_init$i, 0, "NteNavbarLine", _NteNavbarLine_decorators, NteNavbarLine);
__runInitializers$i(_init$i, 1, NteNavbarLine);
const style$s = "/* General Purpose SCSS Reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\ndialog {\n  color: inherit;\n  background: transparent;\n  border: none;\n}\n\na,\ni {\n  color: inherit;\n  text-decoration: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nslot {\n  display: contents;\n}\n\n:host {\n  --nte-nav-flow: row;\n  --nte-nav-align: stretch;\n  --nte-nav-justify: flex-start;\n  --nte-nav-gap: 0;\n  --nte-nav-item-gap: 0.5rem;\n  --nte-nav-submenu-gap: 0.25rem;\n  --nte-nav-submenu-min-inline-size: 12rem;\n  --nte-nav-submenu-inline-size: max(100%, var(--nte-nav-submenu-min-inline-size));\n  --nte-nav-submenu-max-block-size: min(70vh, 32rem);\n  --nte-nav-submenu-position: absolute;\n  --nte-nav-submenu-inset-block-start: 100%;\n  --nte-nav-submenu-inset-inline-start: 0;\n  --nte-nav-nested-submenu-inset-block-start: 0;\n  --nte-nav-nested-submenu-inset-inline-start: 100%;\n  --nte-nav-submenu-position-area: block-end span-inline-end;\n  --nte-nav-nested-submenu-position-area: inline-end span-block-end;\n  --nte-nav-submenu-enter-transform: translateY(-0.35rem);\n  --nte-nav-nested-submenu-enter-transform: translateX(-0.35rem);\n  --nte-nav-transition-duration: 160ms;\n  display: block;\n  inline-size: fit-content;\n  max-inline-size: 100%;\n}\n\n#nav {\n  display: block;\n}\n\n#list {\n  display: flex;\n  flex-flow: var(--nte-nav-flow) nowrap;\n  align-items: var(--nte-nav-align);\n  justify-content: var(--nte-nav-justify);\n  gap: var(--nte-nav-gap);\n  min-inline-size: 0;\n}\n\n#list > slot {\n  display: contents;\n}";
var __create$h = Object.create;
var __defProp$j = Object.defineProperty;
var __getOwnPropDesc$l = Object.getOwnPropertyDescriptor;
var __knownSymbol$h = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$h = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$h = (target, value) => __defProp$j(target, "name", { value, configurable: true });
var __decoratorStart$h = (base) => [, , , __create$h(base?.[__knownSymbol$h("metadata")] ?? null)];
var __decoratorStrings$h = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$h = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$h("Function expected") : fn;
var __decoratorContext$h = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$h[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$h("Already initialized") : fns.push(__expectFn$h(fn || null)) });
var __decoratorMetadata$h = (array, target) => __defNormalProp$h(target, __knownSymbol$h("metadata"), array[3]);
var __runInitializers$h = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$h = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$h[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$l(k < 4 ? target : { get [name]() {
    return __privateGet$f(this, extra);
  }, set [name](x) {
    return __privateSet$f(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$h(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$h(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$h(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$f(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$f : __privateMethod$f)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$f(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$h(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$h("Object expected");
    else __expectFn$h(fn = it.get) && (desc.get = fn), __expectFn$h(fn = it.set) && (desc.set = fn), __expectFn$h(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$h(array, target), desc && __defProp$j(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$f = (obj, member, msg) => member.has(obj) || __typeError$h("Cannot " + msg);
var __privateIn$f = (member, obj) => Object(obj) !== obj ? __typeError$h('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$f = (obj, member, getter) => (__accessCheck$f(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$f = (obj, member, value) => member.has(obj) ? __typeError$h("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$f = (obj, member, value, setter) => (__accessCheck$f(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$f = (obj, member, method) => (__accessCheck$f(obj, member, "access private method"), method);
var _ariaLabel_dec, _a$h, _NteNav_decorators, _init$h, _ariaLabel;
_NteNav_decorators = [t("nte-nav")];
class NteNav extends (_a$h = nextrap_element(), _ariaLabel_dec = [n({ type: String, reflect: true, attribute: "aria-label" })], _a$h) {
  constructor() {
    super(...arguments);
    __privateAdd$f(this, _ariaLabel, __runInitializers$h(_init$h, 8, this, "")), __runInitializers$h(_init$h, 11, this);
  }
  render() {
    super.render();
    return b`
      <nav id="nav" part="nav" aria-label=${o(this.ariaLabel || void 0)}>
        <div id="list" part="list" role="list">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </nav>
    `;
  }
  _onSlotChange(event) {
    const slot = event.currentTarget;
    const items = slot.assignedElements({ flatten: true }).filter((element) => element.matches("nte-nav-item"));
    const isVertical = getComputedStyle(this).getPropertyValue("--nte-nav-flow").trim() === "column";
    items.forEach((item) => {
      const hasSubmenu = Array.from(item.children).some((child) => child.matches("nte-nav-item"));
      item.toggleAttribute("submenu-popover", hasSubmenu && !isVertical);
    });
  }
}
_init$h = __decoratorStart$h(_a$h);
_ariaLabel = /* @__PURE__ */ new WeakMap();
__decorateElement$h(_init$h, 4, "ariaLabel", _ariaLabel_dec, NteNav, _ariaLabel);
NteNav = __decorateElement$h(_init$h, 0, "NteNav", _NteNav_decorators, NteNav);
NteNav.styles = [r(style$s)];
__runInitializers$h(_init$h, 1, NteNav);
const style$r = "/* General Purpose SCSS Reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\ndialog {\n  color: inherit;\n  background: transparent;\n  border: none;\n}\n\na,\ni {\n  color: inherit;\n  text-decoration: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nslot {\n  display: contents;\n}\n\nslot.slot-empty {\n  display: none !important;\n}\n\n:host {\n  --order: 0;\n  display: block;\n  position: relative;\n  order: var(--order);\n  min-inline-size: 0;\n}\n\n#link,\n#text,\n#disclosure,\n#toggle {\n  display: flex;\n  align-items: center;\n}\n\n#item {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: stretch;\n  min-block-size: 100%;\n}\n\n#details {\n  display: contents;\n}\n\n#link,\n#text,\n#disclosure {\n  flex: 1 1 auto;\n  min-inline-size: 0;\n  gap: var(--nte-nav-item-gap);\n}\n\n#label {\n  min-inline-size: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n#link,\n#text,\n#disclosure {\n  grid-column: 1/-1;\n  grid-row: 1;\n}\n\n#item:has(#toggle) > #link {\n  grid-column: 1;\n}\n\n#toggle {\n  grid-column: 2;\n  grid-row: 1;\n  flex: 0 0 auto;\n  justify-content: center;\n}\n\n#disclosure,\n#toggle {\n  anchor-name: --nte-nav-submenu-anchor;\n  list-style: none;\n}\n\n#disclosure::-webkit-details-marker,\n#toggle::-webkit-details-marker {\n  display: none;\n}\n\n#icon:has(> slot.slot-empty) {\n  display: none !important;\n}\n\n#icon,\n#indicator {\n  flex: 0 0 auto;\n}\n\n#indicator {\n  inline-size: 1em;\n  block-size: 1em;\n  transition: transform var(--nte-nav-transition-duration) ease;\n}\n\n#details[open] #indicator,\n#item:has(#submenu:popover-open) #indicator {\n  transform: rotate(180deg);\n}\n\n#submenu {\n  z-index: 10;\n  display: grid;\n  grid-column: 1/-1;\n  grid-row: 2;\n  grid-template-rows: 0fr;\n  inline-size: var(--nte-nav-submenu-inline-size);\n  min-inline-size: var(--nte-nav-submenu-min-inline-size);\n  max-block-size: var(--nte-nav-submenu-max-block-size);\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  position: var(--nte-nav-submenu-position);\n  inset-block-start: var(--nte-nav-submenu-inset-block-start);\n  inset-inline-start: var(--nte-nav-submenu-inset-inline-start);\n  opacity: 0;\n  transform: var(--nte-nav-submenu-enter-transform);\n  visibility: hidden;\n  pointer-events: none;\n  transition: grid-template-rows var(--nte-nav-transition-duration) ease, opacity var(--nte-nav-transition-duration) ease, transform var(--nte-nav-transition-duration) ease, visibility var(--nte-nav-transition-duration) allow-discrete;\n}\n\n#details[open] #submenu {\n  grid-template-rows: 1fr;\n  margin-block-start: var(--nte-nav-submenu-gap);\n  opacity: 1;\n  transform: none;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n#submenu[popover] {\n  inline-size: max-content;\n  max-inline-size: calc(100vw - 2rem);\n  margin: var(--nte-nav-submenu-gap) 0 0;\n  overflow: hidden;\n  position: fixed;\n  position-anchor: --nte-nav-submenu-anchor;\n  position-area: var(--nte-nav-submenu-position-area);\n  position-try-fallbacks: flip-block, flip-inline;\n  inset: auto;\n  transition: opacity var(--nte-nav-transition-duration) ease, transform var(--nte-nav-transition-duration) ease, display var(--nte-nav-transition-duration) allow-discrete, overlay var(--nte-nav-transition-duration) allow-discrete;\n}\n\n@supports (inline-size: anchor-size(inline)) {\n  #submenu[popover] {\n    inline-size: max(anchor-size(inline), var(--nte-nav-submenu-min-inline-size));\n  }\n}\n#submenu[popover]:not(:popover-open) {\n  display: none;\n}\n\n#submenu[popover]:popover-open {\n  display: grid;\n  grid-template-rows: 1fr;\n  opacity: 1;\n  transform: none;\n  visibility: visible;\n  pointer-events: auto;\n}\n\n@starting-style {\n  #submenu[popover]:popover-open {\n    opacity: 0;\n    transform: var(--nte-nav-submenu-enter-transform);\n  }\n}\n#submenu-inner {\n  min-block-size: 0;\n  overflow: auto;\n}\n\n#submenu slot {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n#submenu slot::slotted(nte-nav-item) {\n  --nte-nav-submenu-inset-block-start: var(--nte-nav-nested-submenu-inset-block-start);\n  --nte-nav-submenu-inset-inline-start: var(--nte-nav-nested-submenu-inset-inline-start);\n  --nte-nav-submenu-position-area: var(--nte-nav-nested-submenu-position-area);\n  --nte-nav-submenu-enter-transform: var(--nte-nav-nested-submenu-enter-transform);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  #indicator,\n  #submenu {\n    transition-duration: 0.01ms;\n  }\n}";
var __create$g = Object.create;
var __defProp$i = Object.defineProperty;
var __getOwnPropDesc$k = Object.getOwnPropertyDescriptor;
var __knownSymbol$g = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$g = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$g = (target, value) => __defProp$i(target, "name", { value, configurable: true });
var __decoratorStart$g = (base) => [, , , __create$g(base?.[__knownSymbol$g("metadata")] ?? null)];
var __decoratorStrings$g = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$g = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$g("Function expected") : fn;
var __decoratorContext$g = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$g[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$g("Already initialized") : fns.push(__expectFn$g(fn || null)) });
var __decoratorMetadata$g = (array, target) => __defNormalProp$g(target, __knownSymbol$g("metadata"), array[3]);
var __runInitializers$g = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$g = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$g[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$k(k < 4 ? target : { get [name]() {
    return __privateGet$e(this, extra);
  }, set [name](x) {
    return __privateSet$e(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$g(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$g(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$g(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$e(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$e : __privateMethod$e)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$e(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$g(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$g("Object expected");
    else __expectFn$g(fn = it.get) && (desc.get = fn), __expectFn$g(fn = it.set) && (desc.set = fn), __expectFn$g(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$g(array, target), desc && __defProp$i(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$e = (obj, member, msg) => member.has(obj) || __typeError$g("Cannot " + msg);
var __privateIn$e = (member, obj) => Object(obj) !== obj ? __typeError$g('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$e = (obj, member, getter) => (__accessCheck$e(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$e = (obj, member, value) => member.has(obj) ? __typeError$g("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$e = (obj, member, value, setter) => (__accessCheck$e(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$e = (obj, member, method) => (__accessCheck$e(obj, member, "access private method"), method);
var __labelText_dec, __hasSubmenu_dec, _submenuLabel_dec, _submenuPopover_dec, _current_dec, _download_dec, _rel_dec, _target_dec, _href_dec, _a$g, _NteNavItem_decorators, _init$g, _href, _target, _rel, _download, _current, _submenuPopover, _submenuLabel, __hasSubmenu, __labelText;
_NteNavItem_decorators = [t("nte-nav-item")];
class NteNavItem extends (_a$g = nextrap_element({ slotVisibility: true }), _href_dec = [n({ type: String, reflect: true })], _target_dec = [n({ type: String, reflect: true })], _rel_dec = [n({ type: String, reflect: true })], _download_dec = [n({ type: String })], _current_dec = [n({ type: String, reflect: true })], _submenuPopover_dec = [n({ type: Boolean, reflect: true, attribute: "submenu-popover" })], _submenuLabel_dec = [n({ type: String, attribute: "submenu-label" })], __hasSubmenu_dec = [r$1()], __labelText_dec = [r$1()], _a$g) {
  constructor() {
    super(...arguments);
    __privateAdd$e(this, _href, __runInitializers$g(_init$g, 8, this, "")), __runInitializers$g(_init$g, 11, this);
    __privateAdd$e(this, _target, __runInitializers$g(_init$g, 12, this, "")), __runInitializers$g(_init$g, 15, this);
    __privateAdd$e(this, _rel, __runInitializers$g(_init$g, 16, this, "")), __runInitializers$g(_init$g, 19, this);
    __privateAdd$e(this, _download, __runInitializers$g(_init$g, 20, this, "")), __runInitializers$g(_init$g, 23, this);
    __privateAdd$e(this, _current, __runInitializers$g(_init$g, 24, this, "")), __runInitializers$g(_init$g, 27, this);
    __privateAdd$e(this, _submenuPopover, __runInitializers$g(_init$g, 28, this, false)), __runInitializers$g(_init$g, 31, this);
    __privateAdd$e(this, _submenuLabel, __runInitializers$g(_init$g, 32, this, "Untermenü")), __runInitializers$g(_init$g, 35, this);
    __privateAdd$e(this, __hasSubmenu, __runInitializers$g(_init$g, 36, this, false)), __runInitializers$g(_init$g, 39, this);
    __privateAdd$e(this, __labelText, __runInitializers$g(_init$g, 40, this, "")), __runInitializers$g(_init$g, 43, this);
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("role")) {
      this.setAttribute("role", "listitem");
    }
    this._assignNestedItems();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  render() {
    super.render();
    const label = this._renderLabel();
    return b`
      <div id="item" part="item">
        ${this._hasSubmenu ? this.submenuPopover ? b`
                  ${this.href ? this._renderLink(label) : A}
                  ${this.href ? this._renderIconOnlyPopoverControl() : this._renderLabelPopoverControl(label)}
                  ${this._renderSubmenu()}
                ` : b`
                  ${this.href ? this._renderLink(label) : A}
                  <details id="details" part="details">
                    ${this.href ? this._renderIconOnlyDisclosure() : this._renderLabelDisclosure(label)}
                    ${this._renderSubmenu()}
                  </details>
                ` : this.href ? this._renderLink(label) : b`<span id="text" part="text">${label}</span>`}
      </div>
    `;
  }
  _renderLink(label) {
    return b`
      <a
        id="link"
        part="link"
        href=${this.href}
        target=${o(this.target || void 0)}
        rel=${o(this.rel || void 0)}
        download=${o(this.hasAttribute("download") ? this.download : void 0)}
        aria-current=${o(this.current || void 0)}
      >
        ${label}
      </a>
    `;
  }
  _renderLabel() {
    return b`
      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>
      <span id="label" part="label">
        <slot @slotchange=${this._onLabelSlotChange}></slot>
      </span>
    `;
  }
  _renderIconOnlyDisclosure() {
    return b`
      <summary id="toggle" part="toggle" aria-label=${this._submenuAccessibleName()}>
        ${this._renderIndicator()}
      </summary>
    `;
  }
  _renderLabelDisclosure(label) {
    return b` <summary id="disclosure" part="disclosure">${label} ${this._renderIndicator()}</summary> `;
  }
  _renderIconOnlyPopoverControl() {
    return b`
      <button
        id="toggle"
        type="button"
        part="toggle"
        popovertarget="submenu"
        aria-label=${this._submenuAccessibleName()}
      >
        ${this._renderIndicator()}
      </button>
    `;
  }
  _renderLabelPopoverControl(label) {
    return b`
      <button id="disclosure" type="button" part="disclosure" popovertarget="submenu">
        ${label} ${this._renderIndicator()}
      </button>
    `;
  }
  _renderSubmenu() {
    return b`
      <div
        id="submenu"
        part="submenu"
        role="list"
        aria-label=${this._submenuAccessibleName()}
        popover=${o(this.submenuPopover ? "auto" : void 0)}
      >
        <div id="submenu-inner" part="submenu-inner">
          <slot name="submenu" @slotchange=${this._onSubmenuSlotChange}></slot>
        </div>
      </div>
    `;
  }
  _renderIndicator() {
    return b`
      <svg id="indicator" part="indicator" aria-hidden="true" viewBox="0 0 16 16">
        <path d="m3 6 5 5 5-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
      </svg>
    `;
  }
  _submenuAccessibleName() {
    return this._labelText ? `${this.submenuLabel}: ${this._labelText}` : this.submenuLabel;
  }
  _onLabelSlotChange(event) {
    const slot = event.currentTarget;
    const assignedNodes = slot.assignedNodes({ flatten: true });
    this._assignNestedItems();
    this._labelText = assignedNodes.filter((node) => !(node instanceof HTMLElement && node.matches("nte-nav-item"))).map((node) => node.textContent?.trim() ?? "").filter(Boolean).join(" ");
  }
  _onSubmenuSlotChange(event) {
    const slot = event.currentTarget;
    this._hasSubmenu = slot.assignedElements({ flatten: true }).some((element) => element.matches("nte-nav-item"));
  }
  _assignNestedItems() {
    const nestedItems = Array.from(this.children).filter((element) => element.matches("nte-nav-item"));
    nestedItems.forEach((item) => item.setAttribute("slot", "submenu"));
    this._hasSubmenu = nestedItems.length > 0;
  }
}
_init$g = __decoratorStart$g(_a$g);
_href = /* @__PURE__ */ new WeakMap();
_target = /* @__PURE__ */ new WeakMap();
_rel = /* @__PURE__ */ new WeakMap();
_download = /* @__PURE__ */ new WeakMap();
_current = /* @__PURE__ */ new WeakMap();
_submenuPopover = /* @__PURE__ */ new WeakMap();
_submenuLabel = /* @__PURE__ */ new WeakMap();
__hasSubmenu = /* @__PURE__ */ new WeakMap();
__labelText = /* @__PURE__ */ new WeakMap();
__decorateElement$g(_init$g, 4, "href", _href_dec, NteNavItem, _href);
__decorateElement$g(_init$g, 4, "target", _target_dec, NteNavItem, _target);
__decorateElement$g(_init$g, 4, "rel", _rel_dec, NteNavItem, _rel);
__decorateElement$g(_init$g, 4, "download", _download_dec, NteNavItem, _download);
__decorateElement$g(_init$g, 4, "current", _current_dec, NteNavItem, _current);
__decorateElement$g(_init$g, 4, "submenuPopover", _submenuPopover_dec, NteNavItem, _submenuPopover);
__decorateElement$g(_init$g, 4, "submenuLabel", _submenuLabel_dec, NteNavItem, _submenuLabel);
__decorateElement$g(_init$g, 4, "_hasSubmenu", __hasSubmenu_dec, NteNavItem, __hasSubmenu);
__decorateElement$g(_init$g, 4, "_labelText", __labelText_dec, NteNavItem, __labelText);
NteNavItem = __decorateElement$g(_init$g, 0, "NteNavItem", _NteNavItem_decorators, NteNavItem);
NteNavItem.styles = [r(style$r)];
__runInitializers$g(_init$g, 1, NteNavItem);
class Debouncer {
  /**
   *
   * @param delay     Debounce delay in milliseconds
   * @param max_delay Maximum delay in milliseconds, if false then no maximum delay is applied
   */
  constructor(delay, max_delay = false) {
    this.delay = delay;
    this.max_delay = max_delay;
    this.timeout = null;
    this.startTimeWithMs = 0;
  }
  async wait() {
    if (this.startTimeWithMs === 0) {
      this.startTimeWithMs = Date.now();
    }
    if (this.timeout) {
      if (this.max_delay === false || this.startTimeWithMs + this.max_delay > Date.now()) {
        clearTimeout(this.timeout);
      }
    }
    return new Promise((resolve) => {
      this.timeout = setTimeout(() => {
        this.startTimeWithMs = 0;
        resolve(true);
      }, this.delay);
    });
  }
  debounce(callback) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      callback();
    }, this.delay);
  }
}
const breakpoints = {
  xs: { name: "xs", minWidth: 0 },
  sm: { name: "sm", minWidth: 576 },
  md: { name: "md", minWidth: 768 },
  lg: { name: "lg", minWidth: 992 },
  xl: { name: "xl", minWidth: 1200 },
  xxl: { name: "xxl", minWidth: 1400 }
};
let currentBreakpoint = breakpoints["xs"];
function calculateCurrentBreakpoint() {
  const width = window.innerWidth;
  let curBreakpoint = breakpoints["xs"];
  for (const key in breakpoints) {
    const breakpoint = breakpoints[key];
    if (width >= breakpoint.minWidth) {
      curBreakpoint = breakpoint;
    }
  }
  return curBreakpoint;
}
if (!window.__nextrap_current_breakpoint) {
  window.__nextrap_current_breakpoint = calculateCurrentBreakpoint();
  const deboucer = new Debouncer(200, 500);
  window.addEventListener("resize", async () => {
    await deboucer.wait();
    if (currentBreakpoint !== calculateCurrentBreakpoint()) {
      currentBreakpoint = calculateCurrentBreakpoint();
      window.__nextrap_current_breakpoint = currentBreakpoint;
      const event = new CustomEvent("breakpoint-changed", {
        detail: { breakpoint: currentBreakpoint }
      });
      console.log("Breakpoint changed", currentBreakpoint);
      window.dispatchEvent(event);
    }
  });
}
const EVENT_NAME_GROUP_OPEN_CLOSE = "nte-group-open-close";
function triggerGroupOpenCloseEvent(open, groupName) {
  document.dispatchEvent(
    new CustomEvent(EVENT_NAME_GROUP_OPEN_CLOSE, {
      bubbles: false,
      composed: true,
      detail: { open, groupName }
    })
  );
}
function wrap(html, shadowRoot) {
  const t2 = document.createElement("template");
  t2.innerHTML = html.trim();
  shadowRoot.append(t2.content.cloneNode(true));
  return new Proxy({}, {
    get(_, prop) {
      if (prop === "fragment") {
        return shadowRoot;
      }
      if (typeof prop === "string") {
        const e2 = shadowRoot.getElementById(prop);
        if (!e2) {
          throw new Error(`❌ Unknown id '${prop}'.`);
        }
        return e2;
      }
      return void 0;
    }
  });
}
const _NtSimpleElement = class _NtSimpleElement extends y {
  constructor(html) {
    super();
    const shadowRoot = this.createRenderRoot();
    this.$ = wrap(html, shadowRoot);
  }
  connectedCallback() {
    super.connectedCallback();
    let css = this.css;
    if (!Array.isArray(css)) {
      css = [css];
    }
    const cssStyleSheets = css.map((item) => {
      if (item instanceof n$1) {
        return item.styleSheet;
      } else {
        return r(item).styleSheet;
      }
    });
    this.shadowRoot.adoptedStyleSheets = cssStyleSheets;
  }
};
_NtSimpleElement.DEFINITION = {
  classes: [],
  attributes: {}
};
let NtSimpleElement = _NtSimpleElement;
const style$q = ":host {\n  --size: 2.75rem;\n  --color: var(--nt-text, black);\n  --color-hover: var(--color);\n  --width: max(2px, calc(var(--size) / 11));\n  --bar-width: 62%;\n  --transition-duration: 200ms;\n  display: inline-block;\n  inline-size: var(--size);\n  block-size: var(--size);\n  min-inline-size: 44px;\n  min-block-size: 44px;\n}\n\n#button {\n  padding: 0;\n  inline-size: 100%;\n  block-size: 100%;\n  cursor: pointer;\n}\n\n.hamburger {\n  display: block;\n  appearance: none;\n  border: 0 none;\n  background: none;\n  position: relative;\n  color: var(--color);\n  touch-action: manipulation;\n}\n.hamburger:hover {\n  color: var(--color-hover);\n}\n.hamburger:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\n.hamburger:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n:host([open]) .hamburger .bar:nth-of-type(1) {\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n:host([open]) .hamburger .bar:nth-of-type(2) {\n  opacity: 0;\n}\n:host([open]) .hamburger .bar:nth-of-type(3) {\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n:host(:focus-within) .hamburger {\n  outline: 2px solid currentColor;\n  outline-offset: -2px;\n  border-radius: var(--nt-border-radius, 0.375rem);\n}\n\n:host(:not([open])) #button:hover .bar:nth-of-type(1) {\n  transform: translate(-50%, calc(-50% - var(--size) * 0.22));\n}\n:host(:not([open])) #button:hover .bar:nth-of-type(2) {\n  transform: translate(-50%, -50%);\n}\n:host(:not([open])) #button:hover .bar:nth-of-type(3) {\n  transform: translate(-50%, calc(-50% + var(--size) * 0.22));\n}\n\n.bar {\n  position: absolute;\n  inset-block-start: 50%;\n  inset-inline-start: 50%;\n  inline-size: var(--bar-width);\n  block-size: var(--width);\n  border-radius: var(--width);\n  background-color: currentColor;\n  transition: transform var(--transition-duration) ease, opacity var(--transition-duration) ease;\n}\n.bar:nth-of-type(1) {\n  transform: translate(-50%, calc(-50% - var(--size) * 0.18));\n}\n.bar:nth-of-type(2) {\n  transform: translate(-50%, -50%);\n}\n.bar:nth-of-type(3) {\n  transform: translate(-50%, calc(-50% + var(--size) * 0.18));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .bar {\n    transition-duration: 0.01ms;\n  }\n}";
var __create$f = Object.create;
var __defProp$h = Object.defineProperty;
var __getOwnPropDesc$j = Object.getOwnPropertyDescriptor;
var __knownSymbol$f = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$f = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$f = (target, value) => __defProp$h(target, "name", { value, configurable: true });
var __decoratorStart$f = (base) => [, , , __create$f(base?.[__knownSymbol$f("metadata")] ?? null)];
var __decoratorStrings$f = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$f = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$f("Function expected") : fn;
var __decoratorContext$f = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$f[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$f("Already initialized") : fns.push(__expectFn$f(fn || null)) });
var __decoratorMetadata$f = (array, target) => __defNormalProp$f(target, __knownSymbol$f("metadata"), array[3]);
var __runInitializers$f = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$f = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$f[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$j(k < 4 ? target : { get [name]() {
    return __privateGet$d(this, extra);
  }, set [name](x) {
    return __privateSet$d(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$f(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$f(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$f(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$d(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$d : __privateMethod$d)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$d(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$f(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$f("Object expected");
    else __expectFn$f(fn = it.get) && (desc.get = fn), __expectFn$f(fn = it.set) && (desc.set = fn), __expectFn$f(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$f(array, target), desc && __defProp$h(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$d = (obj, member, msg) => member.has(obj) || __typeError$f("Cannot " + msg);
var __privateIn$d = (member, obj) => Object(obj) !== obj ? __typeError$f('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$d = (obj, member, getter) => (__accessCheck$d(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$d = (obj, member, value) => member.has(obj) ? __typeError$f("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$d = (obj, member, value, setter) => (__accessCheck$d(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$d = (obj, member, method) => (__accessCheck$d(obj, member, "access private method"), method);
var _listenEvents_dec, _dataGroupName_dec, _disabled_dec$1, _controls_dec, _accessibleLabel_dec, _text_dec, _staticState_dec, _open_dec$1, _a$f, _NteBurger_decorators, _init$f, _open$1, _staticState, _text, _accessibleLabel, _controls, _disabled$1, _dataGroupName;
_NteBurger_decorators = [t("nte-burger")];
class NteBurger extends (_a$f = nextrap_element({
  eventBinding: true
}), _open_dec$1 = [n({ type: Boolean, attribute: "open", reflect: true })], _staticState_dec = [n({ type: Boolean, attribute: "static-state", reflect: true })], _text_dec = [n({ type: String, reflect: true })], _accessibleLabel_dec = [n({ type: String, attribute: "aria-label" })], _controls_dec = [n({ type: String, attribute: "aria-controls" })], _disabled_dec$1 = [n({ type: Boolean, reflect: true })], _dataGroupName_dec = [n({ type: String, reflect: false, attribute: "data-group-name" })], _listenEvents_dec = [wt(EVENT_NAME_GROUP_OPEN_CLOSE, { target: "document" })], _a$f) {
  constructor() {
    super(...arguments);
    __runInitializers$f(_init$f, 5, this);
    __privateAdd$d(this, _open$1, __runInitializers$f(_init$f, 8, this, false)), __runInitializers$f(_init$f, 11, this);
    __privateAdd$d(this, _staticState, __runInitializers$f(_init$f, 12, this, false)), __runInitializers$f(_init$f, 15, this);
    __privateAdd$d(this, _text, __runInitializers$f(_init$f, 16, this, "Menu")), __runInitializers$f(_init$f, 19, this);
    __privateAdd$d(this, _accessibleLabel, __runInitializers$f(_init$f, 20, this, "")), __runInitializers$f(_init$f, 23, this);
    __privateAdd$d(this, _controls, __runInitializers$f(_init$f, 24, this, "")), __runInitializers$f(_init$f, 27, this);
    __privateAdd$d(this, _disabled$1, __runInitializers$f(_init$f, 28, this, false)), __runInitializers$f(_init$f, 31, this);
    __privateAdd$d(this, _dataGroupName, __runInitializers$f(_init$f, 32, this, "")), __runInitializers$f(_init$f, 35, this);
  }
  render() {
    return b`
      <button
        id="button"
        class="hamburger"
        part="button"
        type="button"
        aria-label=${this.accessibleLabel || this.text || "Menu"}
        aria-expanded=${this.open ? "true" : "false"}
        aria-controls=${o(this.controls || void 0)}
        ?disabled=${this.disabled}
        @click=${this.toggle}
      >
        <span class="bar" part="bar bar-top"></span>
        <span class="bar" part="bar bar-middle"></span>
        <span class="bar" part="bar bar-bottom"></span>
      </button>
    `;
  }
  toggle() {
    if (!this.disabled && !this.staticState) this.open = !this.open;
  }
  listenEvents(event) {
    if (!(event instanceof CustomEvent)) {
      return;
    }
    if (event.detail.groupName !== this.dataGroupName) {
      return;
    }
    this.open = event.detail.open;
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has("open") && this.dataGroupName !== "") {
      triggerGroupOpenCloseEvent(this.open, this.dataGroupName);
    }
  }
}
_init$f = __decoratorStart$f(_a$f);
_open$1 = /* @__PURE__ */ new WeakMap();
_staticState = /* @__PURE__ */ new WeakMap();
_text = /* @__PURE__ */ new WeakMap();
_accessibleLabel = /* @__PURE__ */ new WeakMap();
_controls = /* @__PURE__ */ new WeakMap();
_disabled$1 = /* @__PURE__ */ new WeakMap();
_dataGroupName = /* @__PURE__ */ new WeakMap();
__decorateElement$f(_init$f, 4, "open", _open_dec$1, NteBurger, _open$1);
__decorateElement$f(_init$f, 4, "staticState", _staticState_dec, NteBurger, _staticState);
__decorateElement$f(_init$f, 4, "text", _text_dec, NteBurger, _text);
__decorateElement$f(_init$f, 4, "accessibleLabel", _accessibleLabel_dec, NteBurger, _accessibleLabel);
__decorateElement$f(_init$f, 4, "controls", _controls_dec, NteBurger, _controls);
__decorateElement$f(_init$f, 4, "disabled", _disabled_dec$1, NteBurger, _disabled$1);
__decorateElement$f(_init$f, 4, "dataGroupName", _dataGroupName_dec, NteBurger, _dataGroupName);
__decorateElement$f(_init$f, 1, "listenEvents", _listenEvents_dec, NteBurger);
NteBurger = __decorateElement$f(_init$f, 0, "NteBurger", _NteBurger_decorators, NteBurger);
NteBurger.styles = [r(style$q)];
__runInitializers$f(_init$f, 1, NteBurger);
const style$p = "";
const resetStyle = style$p;
const style$o = ':host {\n  --nte-offcanvas-placement: right;\n  --nte-offcanvas-mode: overlay;\n  --nte-offcanvas-modal: 1;\n  --nte-offcanvas-width: var(--width, 33vw);\n  --nte-offcanvas-min-width: var(--min-width, 250px);\n  --nte-offcanvas-max-width: var(--max-width, 400px);\n  --nte-offcanvas-height: auto;\n  --nte-offcanvas-max-height: 100dvh;\n  --nte-offcanvas-transition-duration: var(--transition-duration, 240ms);\n  --nte-offcanvas-transition-easing: cubic-bezier(0.2, 0.8, 0.2, 1);\n  --nte-offcanvas-backdrop-blur: 4px;\n  --nte-offcanvas-close-display: flex;\n  display: contents;\n}\n\n#dialog {\n  position: fixed;\n  inset: auto;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  max-width: none;\n  max-height: none;\n  color: inherit;\n  z-index: var(--z-index, 2000);\n  background-color: var(--nte-offcanvas-background, var(--nt-surface));\n  box-shadow: var(--nte-offcanvas-shadow, none);\n  flex-direction: column;\n  opacity: 1;\n  transition: opacity var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing), transform var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing);\n}\n\n#dialog[open] {\n  display: flex;\n}\n\n#dialog::backdrop {\n  background: var(--nte-offcanvas-backdrop, transparent);\n  backdrop-filter: blur(var(--nte-offcanvas-backdrop-blur));\n  opacity: 1;\n  transition: opacity var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing), backdrop-filter var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing);\n}\n\n#dialog[data-backdrop=hidden]::backdrop {\n  background: transparent;\n  backdrop-filter: none;\n  pointer-events: none;\n}\n\n#dialog[data-state=opening]::backdrop,\n#dialog[data-state=open]::backdrop {\n  opacity: 1;\n}\n\n#dialog[data-state=closing]::backdrop,\n#dialog[data-state=closed]::backdrop {\n  opacity: 0;\n}\n\n#dialog[data-placement=left],\n#dialog[data-placement=right] {\n  top: 0;\n  bottom: 0;\n  width: var(--nte-offcanvas-width);\n  min-width: var(--nte-offcanvas-min-width);\n  max-width: var(--nte-offcanvas-max-width);\n  height: 100dvh;\n}\n\n#dialog[data-placement=left] {\n  left: 0;\n  box-shadow: -2.5vw 0 0 2.5vw var(--nte-offcanvas-background, var(--nt-surface)), var(--nte-offcanvas-shadow, 0 0 transparent);\n}\n\n#dialog[data-placement=right] {\n  right: 0;\n  box-shadow: 2.5vw 0 0 2.5vw var(--nte-offcanvas-background, var(--nt-surface)), var(--nte-offcanvas-shadow, 0 0 transparent);\n}\n\n#dialog[data-placement=left][data-state=closed] {\n  transform: translateX(-100%);\n}\n\n#dialog[data-placement=right][data-state=closed] {\n  transform: translateX(100%);\n}\n\n#dialog[data-placement=left][data-state=opening] {\n  animation: nte-offcanvas-open-left var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=left][data-state=closing] {\n  animation: nte-offcanvas-close-left var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=right][data-state=opening] {\n  animation: nte-offcanvas-open-right var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=right][data-state=closing] {\n  animation: nte-offcanvas-close-right var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=left][data-state=open],\n#dialog[data-placement=right][data-state=open] {\n  transform: translateX(0);\n}\n\n#dialog[data-placement=top],\n#dialog[data-placement=bottom] {\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: var(--nte-offcanvas-height);\n  max-height: var(--nte-offcanvas-max-height);\n}\n\n#dialog[data-placement=top] {\n  top: 0;\n}\n\n#dialog[data-placement=bottom] {\n  bottom: 0;\n}\n\n#dialog[data-placement=top][data-state=closed] {\n  transform: translateY(-100%);\n}\n\n#dialog[data-placement=bottom][data-state=closed] {\n  transform: translateY(100%);\n}\n\n#dialog[data-placement=top][data-state=opening] {\n  animation: nte-offcanvas-open-top var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=top][data-state=closing] {\n  animation: nte-offcanvas-close-top var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=bottom][data-state=opening] {\n  animation: nte-offcanvas-open-bottom var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=bottom][data-state=closing] {\n  animation: nte-offcanvas-close-bottom var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=top][data-state=open],\n#dialog[data-placement=bottom][data-state=open] {\n  transform: translateY(0);\n}\n\n#dialog[data-placement=fullscreen] {\n  inset: 0;\n  width: 100vw;\n  height: 100dvh;\n}\n\n#dialog[data-placement=fullscreen][data-state=closed] {\n  transform: translateY(-100%);\n}\n\n#dialog[data-placement=fullscreen][data-state=opening] {\n  animation: nte-offcanvas-open-fullscreen var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=fullscreen][data-state=closing] {\n  animation: nte-offcanvas-close-fullscreen var(--nte-offcanvas-transition-duration) var(--nte-offcanvas-transition-easing) both;\n}\n\n#dialog[data-placement=fullscreen][data-state=open] {\n  transform: translateY(0);\n}\n\n#top {\n  position: relative;\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  flex: 0 0 auto;\n  background: var(--header-background, transparent);\n}\n\n#header {\n  display: flex;\n  min-width: 0;\n  box-sizing: border-box;\n  align-items: center;\n  flex: 1 1 auto;\n  padding: var(--header-padding, 0);\n}\n\n#header:has(> slot[name=header].slot-empty) {\n  display: none;\n}\n\n#main {\n  display: flex;\n  width: 100%;\n  min-height: min(var(--main-min-height, 0px), 100%);\n  max-height: 100%;\n  box-sizing: border-box;\n  flex: 1 1 auto;\n  padding: var(--main-padding, 0);\n  overflow-x: hidden;\n  overflow-y: auto;\n  scrollbar-gutter: auto;\n}\n\n#footer {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex: 0 0 auto;\n  padding: var(--footer-padding, var(--header-padding, 0));\n}\n\n#footer:has(> slot.slot-empty) {\n  display: none;\n}\n\n#close {\n  display: var(--nte-offcanvas-close-display);\n  margin-inline-start: auto;\n  padding: var(--header-padding, 0);\n  flex: 0 0 auto;\n}\n\n#header:not(:has(> slot[name=header].slot-empty)) + #close {\n  padding-inline-start: 0;\n}\n\n#default-close {\n  appearance: none;\n  display: inline-grid;\n  place-items: center;\n  inline-size: var(--close-btn-size, 2.5rem);\n  block-size: var(--close-btn-size, 2.5rem);\n  padding: 0;\n  border: 0;\n  border-radius: var(--close-btn-border-radius, 999px);\n  background: var(--close-btn-background, transparent);\n  color: var(--close-btn-color, inherit);\n  cursor: pointer;\n  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;\n}\n#default-close::before {\n  content: "";\n  display: block;\n  inline-size: var(--close-btn-icon-size, 1.25rem);\n  block-size: var(--close-btn-icon-size, 1.25rem);\n  background-color: currentColor;\n  mask: var(--nt-icon-close) center/contain no-repeat;\n}\n#default-close:hover {\n  background: var(--close-btn-hover-background, color-mix(in srgb, currentColor 8%, transparent));\n}\n#default-close:focus-visible {\n  outline: 2px solid var(--nt-focus, currentColor);\n  outline-offset: 2px;\n}\n#default-close:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n@keyframes nte-offcanvas-open-left {\n  0% {\n    transform: translateX(-100%);\n  }\n  82% {\n    transform: translateX(5%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes nte-offcanvas-close-left {\n  0% {\n    transform: translateX(0);\n  }\n  18% {\n    transform: translateX(5%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n@keyframes nte-offcanvas-open-right {\n  0% {\n    transform: translateX(100%);\n  }\n  82% {\n    transform: translateX(-5%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@keyframes nte-offcanvas-close-right {\n  0% {\n    transform: translateX(0);\n  }\n  18% {\n    transform: translateX(-5%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@keyframes nte-offcanvas-open-top {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n@keyframes nte-offcanvas-close-top {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-100%);\n  }\n}\n@keyframes nte-offcanvas-open-fullscreen {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n@keyframes nte-offcanvas-close-fullscreen {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-100%);\n  }\n}\n@keyframes nte-offcanvas-open-bottom {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n@keyframes nte-offcanvas-close-bottom {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(100%);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  #dialog,\n  #dialog::backdrop {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n  }\n}';
var __create$e = Object.create;
var __defProp$g = Object.defineProperty;
var __getOwnPropDesc$i = Object.getOwnPropertyDescriptor;
var __knownSymbol$e = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$e = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$e = (target, value) => __defProp$g(target, "name", { value, configurable: true });
var __decoratorStart$e = (base) => [, , , __create$e(base?.[__knownSymbol$e("metadata")] ?? null)];
var __decoratorStrings$e = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$e = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$e("Function expected") : fn;
var __decoratorContext$e = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$e[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$e("Already initialized") : fns.push(__expectFn$e(fn || null)) });
var __decoratorMetadata$e = (array, target) => __defNormalProp$e(target, __knownSymbol$e("metadata"), array[3]);
var __runInitializers$e = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$e = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$e[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$i(k < 4 ? target : { get [name]() {
    return __privateGet$c(this, extra);
  }, set [name](x) {
    return __privateSet$c(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$e(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$e(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$e(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$c(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$c : __privateMethod$c)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$c(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$e(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$e("Object expected");
    else __expectFn$e(fn = it.get) && (desc.get = fn), __expectFn$e(fn = it.set) && (desc.set = fn), __expectFn$e(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$e(array, target), desc && __defProp$g(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$c = (obj, member, msg) => member.has(obj) || __typeError$e("Cannot " + msg);
var __privateIn$c = (member, obj) => Object(obj) !== obj ? __typeError$e('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$c = (obj, member, getter) => (__accessCheck$c(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$c = (obj, member, value) => member.has(obj) ? __typeError$e("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$c = (obj, member, value, setter) => (__accessCheck$c(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$c = (obj, member, method) => (__accessCheck$c(obj, member, "access private method"), method);
var _onHostClick_dec, _onOtherOpening_dec, _programmaticContent_dec, _visualState_dec, _lifecycle_dec, _legacyGroupName_dec, _layoutGroup_dec$1, _openGroup_dec, _opened_dec, _backdrop_dec, _a$e, _NteOffcanvas_decorators, _init$e, _backdrop, _opened, _openGroup, _layoutGroup$1, _legacyGroupName, _lifecycle, _visualState, _programmaticContent;
const NTE_OFFCANVAS_EVENTS = {
  opening: "nte-offcanvas:opening",
  opened: "nte-offcanvas:opened",
  closing: "nte-offcanvas:closing",
  closed: "nte-offcanvas:closed"
};
const PLACEMENTS = ["left", "right", "top", "bottom", "fullscreen"];
const MODES = ["overlay", "push"];
_NteOffcanvas_decorators = [t("nte-offcanvas")];
let _NteOffcanvas = class _NteOffcanvas2 extends (_a$e = nextrap_element({
  eventBinding: true,
  slotVisibility: true
}), _backdrop_dec = [n({ type: Boolean, reflect: true })], _opened_dec = [n({ type: Boolean, reflect: true })], _openGroup_dec = [n({ type: String, attribute: "open-group" })], _layoutGroup_dec$1 = [n({ type: String, attribute: "layout-group" })], _legacyGroupName_dec = [n({ type: String, attribute: "data-group-name" })], _lifecycle_dec = [r$1()], _visualState_dec = [r$1()], _programmaticContent_dec = [r$1()], _onOtherOpening_dec = [wt(NTE_OFFCANVAS_EVENTS.opening, { target: "window" })], _onHostClick_dec = [wt("click", { target: "host" })], _a$e) {
  constructor(options = {}) {
    super();
    __runInitializers$e(_init$e, 5, this);
    __privateAdd$c(this, _backdrop, __runInitializers$e(_init$e, 8, this, true)), __runInitializers$e(_init$e, 11, this);
    __privateAdd$c(this, _opened, __runInitializers$e(_init$e, 12, this, false)), __runInitializers$e(_init$e, 15, this);
    __privateAdd$c(this, _openGroup, __runInitializers$e(_init$e, 16, this, "")), __runInitializers$e(_init$e, 19, this);
    __privateAdd$c(this, _layoutGroup$1, __runInitializers$e(_init$e, 20, this, "")), __runInitializers$e(_init$e, 23, this);
    __privateAdd$c(this, _legacyGroupName, __runInitializers$e(_init$e, 24, this, "")), __runInitializers$e(_init$e, 27, this);
    __privateAdd$c(this, _lifecycle, __runInitializers$e(_init$e, 28, this, "closed")), __runInitializers$e(_init$e, 31, this);
    __privateAdd$c(this, _visualState, __runInitializers$e(_init$e, 32, this, "closed")), __runInitializers$e(_init$e, 35, this);
    __privateAdd$c(this, _programmaticContent, __runInitializers$e(_init$e, 36, this)), __runInitializers$e(_init$e, 39, this);
    this.instanceId = `nte-offcanvas-${++_NteOffcanvas2.instanceCounter}`;
    this.presentation = {
      placement: "right",
      mode: "overlay",
      modal: true,
      size: "var(--nte-offcanvas-width, var(--width, 33vw))",
      duration: "var(--nte-offcanvas-transition-duration, var(--transition-duration, 240ms))",
      easing: "var(--nte-offcanvas-transition-easing, ease-in-out)"
    };
    this.activePresentation = null;
    this.ready = false;
    this.mutationObserver = void 0;
    this.openPromise = void 0;
    this.closePromise = void 0;
    if ("content" in options) {
      this.programmaticContent = options.content;
    }
    if (options.openGroup !== void 0) {
      this.openGroup = options.openGroup;
    }
    if (options.layoutGroup !== void 0) {
      this.layoutGroup = options.layoutGroup;
    }
    if (options.opened !== void 0) {
      this.opened = options.opened;
    }
    if (options.backdrop !== void 0) {
      this.backdrop = options.backdrop;
    }
  }
  static get is() {
    return "nte-offcanvas";
  }
  get content() {
    return this.programmaticContent;
  }
  set content(value) {
    this.programmaticContent = value;
  }
  connectedCallback() {
    super.connectedCallback();
    this.mutationObserver = new MutationObserver(() => this.onPresentationMutation());
    this.mutationObserver.observe(this, {
      attributes: true,
      attributeFilter: ["class", "style"]
    });
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.mutationObserver = void 0;
    super.disconnectedCallback();
  }
  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.presentation = this.readPresentation();
    this.requestUpdate();
    await dt();
    this.ready = true;
    if (this.opened) {
      await this.open();
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (!this.ready || !changedProperties.has("opened")) {
      return;
    }
    if (this.opened && this.lifecycle === "closed") {
      void this.open();
    } else if (!this.opened && (this.lifecycle === "open" || this.lifecycle === "opening")) {
      void this.close();
    }
  }
  open() {
    if (!this.isConnected && document.body !== null) {
      document.body.append(this);
    }
    if (this.openPromise !== void 0 && this.lifecycle !== "closing") {
      return this.openPromise;
    }
    if (this.lifecycle === "open") {
      return Promise.resolve();
    }
    if (this.lifecycle === "closing" && this.closePromise !== void 0) {
      return this.closePromise.then(() => this.open());
    }
    this.opened = true;
    this.openPromise = this.performOpen().finally(() => {
      this.openPromise = void 0;
    });
    return this.openPromise;
  }
  close() {
    if (this.lifecycle === "closed") {
      this.opened = false;
      return Promise.resolve();
    }
    if (this.lifecycle === "closing" && this.closePromise !== void 0) {
      return this.closePromise;
    }
    this.opened = false;
    this.closePromise = this.performClose().finally(() => {
      this.closePromise = void 0;
    });
    return this.closePromise;
  }
  toggle() {
    return this.opened ? this.close() : this.open();
  }
  onOtherOpening(event) {
    const customEvent = event;
    const detail = customEvent.detail;
    if (detail.id === this.instanceId || this.lifecycle !== "open" && this.lifecycle !== "opening") {
      return;
    }
    const active = this.activePresentation ?? this.presentation;
    const sameGroup = this.groupName !== "" && detail.openGroup !== "" && this.groupName === detail.openGroup;
    const sameModalPlacement = active.modal && detail.modal && active.placement === detail.placement;
    if (!sameGroup && !sameModalPlacement) {
      return;
    }
    const closing = this.close();
    detail.waitUntil?.(closing);
  }
  onHostClick(event) {
    const dismissControl = event.composedPath().some((target) => target instanceof HTMLElement && target.matches("[data-nt-dismiss='offcanvas']"));
    if (dismissControl) {
      void this.close();
    }
  }
  get groupName() {
    return this.openGroup || this.legacyGroupName;
  }
  get dialog() {
    return this.renderRoot.querySelector("#dialog");
  }
  async performOpen() {
    await this.updateComplete;
    this.presentation = this.readPresentation();
    this.activePresentation = this.presentation;
    this.lifecycle = "opening";
    this.visualState = "closed";
    this.requestUpdate();
    await this.updateComplete;
    const dialog = this.dialog;
    if (dialog === null) {
      this.lifecycle = "closed";
      this.visualState = "closed";
      return;
    }
    this.activePresentation = this.resolveAutoSize(this.activePresentation, dialog);
    const waits = this.dispatchState(NTE_OFFCANVAS_EVENTS.opening, this.activePresentation, true);
    await Promise.allSettled(waits);
    if (!this.opened || this.lifecycle !== "opening") {
      return;
    }
    if (!dialog.open) {
      if (this.activePresentation.modal) {
        dialog.showModal();
      } else {
        dialog.show();
      }
    }
    this.visualState = "opening";
    this.requestUpdate();
    await this.waitForVisualTransition(dialog);
    if (!this.opened || this.lifecycle !== "opening") {
      return;
    }
    this.lifecycle = "open";
    this.visualState = "open";
    this.requestUpdate();
    this.dispatchState(NTE_OFFCANVAS_EVENTS.opened, this.activePresentation);
  }
  async performClose() {
    const presentation = this.activePresentation ?? this.presentation;
    const dialog = this.dialog;
    this.lifecycle = "closing";
    this.visualState = dialog?.open ? "closing" : "closed";
    this.requestUpdate();
    this.dispatchState(NTE_OFFCANVAS_EVENTS.closing, presentation);
    if (dialog?.open) {
      await this.waitForVisualTransition(dialog);
      if (dialog.open) {
        dialog.close();
      }
    }
    this.lifecycle = "closed";
    this.visualState = "closed";
    this.activePresentation = null;
    this.presentation = this.readPresentation();
    this.requestUpdate();
    this.dispatchState(NTE_OFFCANVAS_EVENTS.closed, presentation);
  }
  dispatchState(name, presentation, collectWaits = false) {
    const waits = [];
    const detail = {
      id: this.instanceId,
      placement: presentation.placement,
      mode: presentation.mode,
      openGroup: this.groupName,
      layoutGroup: this.layoutGroup.trim(),
      modal: presentation.modal,
      size: presentation.size,
      duration: presentation.duration,
      easing: presentation.easing
    };
    if (collectWaits) {
      detail.waitUntil = (promise) => waits.push(Promise.resolve(promise));
    }
    window.dispatchEvent(new CustomEvent(name, { detail }));
    return waits;
  }
  onPresentationMutation() {
    const next = this.readPresentation();
    if (this.lifecycle === "closed") {
      this.presentation = next;
      this.requestUpdate();
      return;
    }
    if (this.activePresentation === null) {
      return;
    }
    this.activePresentation = {
      ...next,
      placement: this.activePresentation.placement,
      modal: this.activePresentation.modal
    };
    this.presentation = this.activePresentation;
    this.requestUpdate();
    if (this.lifecycle === "open") {
      this.dispatchState(NTE_OFFCANVAS_EVENTS.opened, this.activePresentation);
    }
  }
  readPresentation() {
    const computed = getComputedStyle(this);
    const css = (name, fallback) => computed.getPropertyValue(name).trim() || fallback;
    const placementValue = css("--nte-offcanvas-placement", "right");
    const placement = PLACEMENTS.includes(placementValue) ? placementValue : "right";
    const modeValue = css("--nte-offcanvas-mode", "overlay");
    const configuredMode = MODES.includes(modeValue) ? modeValue : "overlay";
    const mode = placement === "fullscreen" ? "overlay" : configuredMode;
    const modal = this.parseCssBoolean(css("--nte-offcanvas-modal", "1"), true);
    const duration = css("--nte-offcanvas-transition-duration", css("--transition-duration", "240ms"));
    const easing = css("--nte-offcanvas-transition-easing", "ease-in-out");
    let size;
    if (placement === "left" || placement === "right") {
      size = css("--nte-offcanvas-width", css("--width", "33vw"));
    } else if (placement === "top" || placement === "bottom") {
      size = css("--nte-offcanvas-height", "auto");
    } else {
      size = "100%";
    }
    return { placement, mode, modal, size, duration, easing };
  }
  resolveAutoSize(presentation, dialog) {
    if (presentation.placement !== "top" && presentation.placement !== "bottom" || presentation.size !== "auto") {
      return presentation;
    }
    const wasOpen = dialog.open;
    if (!wasOpen) {
      dialog.setAttribute("open", "");
    }
    const measuredHeight = dialog.getBoundingClientRect().height;
    if (!wasOpen) {
      dialog.removeAttribute("open");
    }
    return { ...presentation, size: `${measuredHeight}px` };
  }
  parseCssBoolean(value, fallback) {
    const normalized = value.trim().toLowerCase();
    if (["1", "true", "yes", "on"].includes(normalized)) {
      return true;
    }
    if (["0", "false", "no", "off"].includes(normalized)) {
      return false;
    }
    return fallback;
  }
  async waitForVisualTransition(element) {
    await this.updateComplete;
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    await new Promise((resolve) => requestAnimationFrame(() => resolve()));
    const animations = element.getAnimations();
    if (animations.length === 0) {
      return;
    }
    await Promise.allSettled(animations.map((animation) => animation.finished));
  }
  onDialogCancel(event) {
    event.preventDefault();
    void this.close();
  }
  onDialogBackdropClick(event) {
    if (!this.backdrop || event.target !== event.currentTarget) {
      return;
    }
    const dialog = this.dialog;
    if (dialog === null) {
      return;
    }
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) {
      void this.close();
    }
  }
  render() {
    const presentation = this.activePresentation ?? this.presentation;
    const label = this.getAttribute("aria-label") ?? "Offcanvas";
    return b`
      <dialog
        id="dialog"
        part="offcanvas dialog"
        aria-label=${label}
        data-placement=${presentation.placement}
        data-mode=${presentation.mode}
        data-modal=${presentation.modal ? "true" : "false"}
        data-state=${this.visualState}
        data-backdrop=${this.backdrop ? "visible" : "hidden"}
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
          ${this.programmaticContent === void 0 ? b`<slot></slot>` : this.programmaticContent === null ? A : this.programmaticContent}
        </div>

        <div id="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </dialog>
    `;
  }
};
_init$e = __decoratorStart$e(_a$e);
_backdrop = /* @__PURE__ */ new WeakMap();
_opened = /* @__PURE__ */ new WeakMap();
_openGroup = /* @__PURE__ */ new WeakMap();
_layoutGroup$1 = /* @__PURE__ */ new WeakMap();
_legacyGroupName = /* @__PURE__ */ new WeakMap();
_lifecycle = /* @__PURE__ */ new WeakMap();
_visualState = /* @__PURE__ */ new WeakMap();
_programmaticContent = /* @__PURE__ */ new WeakMap();
__decorateElement$e(_init$e, 4, "backdrop", _backdrop_dec, _NteOffcanvas, _backdrop);
__decorateElement$e(_init$e, 4, "opened", _opened_dec, _NteOffcanvas, _opened);
__decorateElement$e(_init$e, 4, "openGroup", _openGroup_dec, _NteOffcanvas, _openGroup);
__decorateElement$e(_init$e, 4, "layoutGroup", _layoutGroup_dec$1, _NteOffcanvas, _layoutGroup$1);
__decorateElement$e(_init$e, 4, "legacyGroupName", _legacyGroupName_dec, _NteOffcanvas, _legacyGroupName);
__decorateElement$e(_init$e, 4, "lifecycle", _lifecycle_dec, _NteOffcanvas, _lifecycle);
__decorateElement$e(_init$e, 4, "visualState", _visualState_dec, _NteOffcanvas, _visualState);
__decorateElement$e(_init$e, 4, "programmaticContent", _programmaticContent_dec, _NteOffcanvas, _programmaticContent);
__decorateElement$e(_init$e, 1, "onOtherOpening", _onOtherOpening_dec, _NteOffcanvas);
__decorateElement$e(_init$e, 1, "onHostClick", _onHostClick_dec, _NteOffcanvas);
_NteOffcanvas = __decorateElement$e(_init$e, 0, "NteOffcanvas", _NteOffcanvas_decorators, _NteOffcanvas);
_NteOffcanvas.styles = [r(resetStyle), r(style$o)];
_NteOffcanvas.instanceCounter = 0;
__runInitializers$e(_init$e, 1, _NteOffcanvas);
const style$n = ":host {\n  --nte-offcanvas-pane-left: 0px;\n  --nte-offcanvas-pane-right: 0px;\n  --nte-offcanvas-pane-top: 0px;\n  --nte-offcanvas-pane-bottom: 0px;\n  --nte-offcanvas-pane-transition-duration: var(--nte-offcanvas-transition-duration, 240ms);\n  --nte-offcanvas-pane-transition-easing: var(--nte-offcanvas-transition-easing, ease-in-out);\n  display: block;\n  min-width: 0;\n  min-height: 0;\n}\n\n#pane {\n  box-sizing: border-box;\n  min-width: 0;\n  min-height: 0;\n  padding-left: var(--nte-offcanvas-pane-left);\n  padding-right: var(--nte-offcanvas-pane-right);\n  padding-top: var(--nte-offcanvas-pane-top);\n  padding-bottom: var(--nte-offcanvas-pane-bottom);\n  transition: padding-left var(--nte-offcanvas-pane-transition-duration) var(--nte-offcanvas-pane-transition-easing), padding-right var(--nte-offcanvas-pane-transition-duration) var(--nte-offcanvas-pane-transition-easing), padding-top var(--nte-offcanvas-pane-transition-duration) var(--nte-offcanvas-pane-transition-easing), padding-bottom var(--nte-offcanvas-pane-transition-duration) var(--nte-offcanvas-pane-transition-easing);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  #pane {\n    transition-duration: 1ms;\n  }\n}";
var __create$d = Object.create;
var __defProp$f = Object.defineProperty;
var __getOwnPropDesc$h = Object.getOwnPropertyDescriptor;
var __knownSymbol$d = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$d = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$d = (target, value) => __defProp$f(target, "name", { value, configurable: true });
var __decoratorStart$d = (base) => [, , , __create$d(base?.[__knownSymbol$d("metadata")] ?? null)];
var __decoratorStrings$d = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$d = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$d("Function expected") : fn;
var __decoratorContext$d = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$d[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$d("Already initialized") : fns.push(__expectFn$d(fn || null)) });
var __decoratorMetadata$d = (array, target) => __defNormalProp$d(target, __knownSymbol$d("metadata"), array[3]);
var __runInitializers$d = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$d = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$d[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$h(k < 4 ? target : { get [name]() {
    return __privateGet$b(this, extra);
  }, set [name](x) {
    return __privateSet$b(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$d(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$d(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$d(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$b(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$b : __privateMethod$b)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$b(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$d(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$d("Object expected");
    else __expectFn$d(fn = it.get) && (desc.get = fn), __expectFn$d(fn = it.set) && (desc.set = fn), __expectFn$d(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$d(array, target), desc && __defProp$f(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$b = (obj, member, msg) => member.has(obj) || __typeError$d("Cannot " + msg);
var __privateIn$b = (member, obj) => Object(obj) !== obj ? __typeError$d('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$b = (obj, member, getter) => (__accessCheck$b(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$b = (obj, member, value) => member.has(obj) ? __typeError$d("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$b = (obj, member, value, setter) => (__accessCheck$b(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$b = (obj, member, method) => (__accessCheck$b(obj, member, "access private method"), method);
var _onOffcanvasClosed_dec, _onOffcanvasActive_dec, _layoutGroup_dec, _a$d, _NteOffcanvasPane_decorators, _init$d, _layoutGroup;
_NteOffcanvasPane_decorators = [t("nte-offcanvas-pane")];
class NteOffcanvasPane extends (_a$d = nextrap_element({ eventBinding: true }), _layoutGroup_dec = [n({ type: String, attribute: "layout-group" })], _onOffcanvasActive_dec = [wt(NTE_OFFCANVAS_EVENTS.opening, { target: "window" }), wt(NTE_OFFCANVAS_EVENTS.opened, { target: "window" })], _onOffcanvasClosed_dec = [wt(NTE_OFFCANVAS_EVENTS.closed, { target: "window" })], _a$d) {
  constructor() {
    super(...arguments);
    __runInitializers$d(_init$d, 5, this);
    __privateAdd$b(this, _layoutGroup, __runInitializers$d(_init$d, 8, this, "")), __runInitializers$d(_init$d, 11, this);
    this.active = /* @__PURE__ */ new Map();
  }
  onOffcanvasActive(event) {
    const detail = event.detail;
    if (detail.placement === "fullscreen") return;
    const activeAtPlacement = this.getActiveAtPlacement(detail.placement);
    activeAtPlacement.delete(detail.id);
    if (detail.mode === "push" && this.accepts(detail.layoutGroup)) {
      activeAtPlacement.set(detail.id, {
        id: detail.id,
        size: detail.size,
        duration: detail.duration,
        easing: detail.easing
      });
    }
    this.applyInset(detail.placement, detail.duration, detail.easing);
  }
  onOffcanvasClosed(event) {
    const detail = event.detail;
    if (detail.placement === "fullscreen") return;
    const activeAtPlacement = this.active.get(detail.placement);
    if (!activeAtPlacement?.delete(detail.id)) return;
    this.applyInset(detail.placement, detail.duration, detail.easing);
  }
  accepts(layoutGroup) {
    if (layoutGroup === "") return false;
    return this.layoutGroup.split(/\s+/u).includes(layoutGroup);
  }
  getActiveAtPlacement(placement) {
    let activeAtPlacement = this.active.get(placement);
    if (activeAtPlacement === void 0) {
      activeAtPlacement = /* @__PURE__ */ new Map();
      this.active.set(placement, activeAtPlacement);
    }
    return activeAtPlacement;
  }
  applyInset(placement, duration, easing) {
    const activeAtPlacement = this.active.get(placement);
    const activeInsets = activeAtPlacement === void 0 ? [] : Array.from(activeAtPlacement.values());
    const active = activeInsets[activeInsets.length - 1];
    this.style.setProperty(`--nte-offcanvas-pane-${placement}`, active?.size ?? "0px");
    this.style.setProperty(
      "--nte-offcanvas-pane-transition-duration",
      active?.duration ?? duration ?? "var(--nte-offcanvas-transition-duration, 240ms)"
    );
    this.style.setProperty(
      "--nte-offcanvas-pane-transition-easing",
      active?.easing ?? easing ?? "var(--nte-offcanvas-transition-easing, ease-in-out)"
    );
  }
  render() {
    return b`<div id="pane" part="pane"><slot></slot></div>`;
  }
}
_init$d = __decoratorStart$d(_a$d);
_layoutGroup = /* @__PURE__ */ new WeakMap();
__decorateElement$d(_init$d, 4, "layoutGroup", _layoutGroup_dec, NteOffcanvasPane, _layoutGroup);
__decorateElement$d(_init$d, 1, "onOffcanvasActive", _onOffcanvasActive_dec, NteOffcanvasPane);
__decorateElement$d(_init$d, 1, "onOffcanvasClosed", _onOffcanvasClosed_dec, NteOffcanvasPane);
NteOffcanvasPane = __decorateElement$d(_init$d, 0, "NteOffcanvasPane", _NteOffcanvasPane_decorators, NteOffcanvasPane);
NteOffcanvasPane.styles = [r(style$n)];
__runInitializers$d(_init$d, 1, NteOffcanvasPane);
const style$m = ":host {\n  /*\n  * delta: 25 => 75% loaded\n  */\n  --delta: 50;\n  --percentage: 1;\n  --percentage-txt: '1%';\n  --playtime: 1250ms;\n  --color-loader: #6a6a6a;\n  --color-checked: #55c900;\n  --color-progress: #509dde;\n  --color-cross: #df2f2f;\n  --color-info: #2196f3;\n  --color-warning: #ff9800;\n  --check-pop-delay: calc(var(--playtime) * 0.35);\n  --check-pop-duration: calc(var(--playtime) * 0.65);\n  aspect-ratio: 1/1;\n  display: inline-block;\n}\n\n:host > div {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n:host(.progress) #spinner {\n  animation: none;\n}\n:host(.progress) #spinner #spinner-viewbox {\n  animation: none;\n}\n:host(.progress) #spinner #spinner-text {\n  display: block;\n  animation: none;\n  opacity: 1;\n}\n:host(.progress) #spinner #spinner-circle {\n  animation: none;\n  stroke: var(--color-progress);\n  stroke-dasharray: 100;\n  fill: transparent;\n  transform: rotate(180deg);\n  stroke-dashoffset: calc((100 - var(--percentage)) * 1px);\n  transition: stroke-dashoffset 0.2s ease-out;\n}\n\n:host(.cross) #spinner {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-name: fill;\n  animation-duration: var(--playtime);\n  animation-timing-function: ease-in-out;\n}\n:host(.cross) #spinner #spinner-circle {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-name: fill;\n  animation-duration: var(--playtime);\n  stroke: var(--color-cross);\n  animation-timing-function: ease-in-out;\n}\n:host(.cross) #spinner #spinner-cross {\n  display: block;\n  animation-name: grow-cross;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-duration: var(--playtime);\n  animation-timing-function: ease-in-out;\n}\n:host(.cross) #spinner #spinner-cross line {\n  animation-name: draw-cross;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-duration: var(--playtime);\n  animation-timing-function: ease-in-out;\n}\n\n:host(.checked) #spinner {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-name: fill-checked;\n  animation-duration: var(--playtime);\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n}\n:host(.checked) #spinner #spinner-circle {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-name: fill-checked;\n  animation-duration: var(--playtime);\n  stroke: var(--color-checked);\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n}\n:host(.checked) #spinner #spinner-check {\n  display: block;\n  animation-name: check-pop;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: var(--check-pop-delay);\n  animation-duration: var(--check-pop-duration);\n  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n:host(.info) #spinner {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-name: fill-checked;\n  animation-duration: var(--playtime);\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n}\n:host(.info) #spinner #spinner-circle {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-name: fill-checked;\n  animation-duration: var(--playtime);\n  stroke: var(--color-info);\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n}\n:host(.info) #spinner #spinner-info {\n  display: block;\n  animation-name: check-pop;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: var(--check-pop-delay);\n  animation-duration: var(--check-pop-duration);\n  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n:host(.warning) #spinner {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-name: fill-checked;\n  animation-duration: var(--playtime);\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n}\n:host(.warning) #spinner #spinner-circle {\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-name: fill-checked;\n  animation-duration: var(--playtime);\n  stroke: var(--color-warning);\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n}\n:host(.warning) #spinner #spinner-warning {\n  display: block;\n  animation-name: warning-pop;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n  animation-delay: var(--check-pop-delay);\n  animation-duration: var(--check-pop-duration);\n  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n#spinner {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  transform-origin: 50% 50%;\n  animation: var(--playtime) linear infinite both spin;\n}\n#spinner svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n#spinner #spinner-circle {\n  animation: var(--playtime) ease-in-out infinite both chase;\n  fill: transparent;\n  stroke: var(--color-loader);\n  stroke-dasharray: 100;\n  stroke-linecap: round;\n  stroke-width: 5px;\n  transform-box: fill-box;\n  transform-origin: 50% 50%;\n}\n#spinner #spinner-text:before {\n  position: absolute;\n  font-size: 30px;\n  color: var(--color-loader);\n  content: var(--percentage-txt);\n  top: 0;\n  left: 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n#spinner #spinner-text {\n  display: none;\n  opacity: 0;\n  transform-origin: 50% 50%;\n}\n#spinner #spinner-check {\n  position: absolute;\n  inset: 0;\n  display: none;\n  opacity: 0;\n  transform-origin: 50% 50%;\n}\n#spinner #spinner-check path {\n  transform: translate(25%, 25%) scale(2.5);\n  height: 1000px;\n  width: 100px;\n  fill: var(--color-checked);\n}\n#spinner #spinner-cross {\n  position: absolute;\n  inset: 0;\n  display: none;\n}\n#spinner #spinner-cross line {\n  stroke: var(--color-cross);\n  stroke-width: 6px;\n  stroke-linecap: round;\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n}\n#spinner #spinner-info {\n  position: absolute;\n  inset: 0;\n  display: none;\n  opacity: 0;\n  transform-origin: 50% 50%;\n}\n#spinner #spinner-info text {\n  fill: var(--color-info);\n}\n#spinner #spinner-warning {\n  position: absolute;\n  inset: 0;\n  display: none;\n  opacity: 0;\n  transform-origin: 50% 50%;\n}\n#spinner #spinner-warning text {\n  fill: var(--color-warning);\n}\n\n@keyframes spin {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n@keyframes chase {\n  0% {\n    stroke-dashoffset: 99;\n    transform: rotate(0deg);\n  }\n  50% {\n    stroke-dashoffset: var(--delta);\n    transform: rotate(180deg);\n  }\n  100% {\n    stroke-dashoffset: 99;\n    transform: rotate(360deg);\n  }\n}\n@keyframes fill {\n  0% {\n    stroke-dashoffset: 99;\n    transform: rotate(0deg);\n  }\n  50%, 100% {\n    stroke-dashoffset: 0;\n    transform: rotate(360deg);\n  }\n}\n@keyframes fill-checked {\n  0% {\n    stroke-dashoffset: 99;\n    transform: rotate(0deg);\n  }\n  45% {\n    stroke-dashoffset: 0;\n    transform: rotate(300deg);\n  }\n  100% {\n    stroke-dashoffset: 0;\n    transform: rotate(360deg);\n  }\n}\n@keyframes grow {\n  0% {\n    transform: scale(0) rotate(0deg);\n  }\n  50%, 100% {\n    transform: scale(1) rotate(360deg);\n  }\n}\n@keyframes check-pop {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) rotate(-14deg);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.14) rotate(5deg);\n  }\n  80% {\n    transform: scale(0.96) rotate(-2deg);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n  }\n}\n@keyframes grow-cross {\n  0% {\n    transform: scale(0) rotate(0deg);\n  }\n  50%, 100% {\n    transform: scale(1) rotate(180deg);\n  }\n}\n@keyframes draw-cross {\n  0%, 30% {\n    stroke-dashoffset: 100;\n  }\n  60%, 100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes warning-pop {\n  0% {\n    opacity: 0;\n    transform: scale(0.3) translateY(6px);\n  }\n  60% {\n    opacity: 1;\n    transform: scale(1.14) translateY(-3px);\n  }\n  80% {\n    transform: scale(0.96) translateY(1px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}";
const template = `
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
</div>`;
class NteSpinnerElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const styleElement = document.createElement("style");
    const rootElement = document.createElement("div");
    styleElement.textContent = style$m;
    rootElement.innerHTML = template;
    shadowRoot.append(styleElement, rootElement);
  }
}
if (!customElements.get("nte-spinner")) {
  customElements.define("nte-spinner", NteSpinnerElement);
}
const NTE_FEEDBACK_DEFAULT_AUTO_CLOSE_MS = 1e4;
const style$l = ':host {\n  position: relative;\n  z-index: 9999;\n}\n\n#mini-loader {\n  position: fixed;\n  inset: 0 0 auto;\n  width: 100%;\n  max-width: none;\n  height: 2px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  overflow: hidden;\n  background: transparent;\n  pointer-events: none;\n  z-index: 2147483647;\n  opacity: 1;\n}\n\n#mini-loader::backdrop {\n  background: transparent;\n  pointer-events: none;\n}\n\n#mini-loader.ready {\n  animation: mini-loader-finish 160ms ease-out 180ms forwards;\n}\n\n#mini-loader-value {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: var(--nt-primary);\n  transform: scaleX(0);\n  transform-origin: left center;\n  animation: mini-loader-progress 10s linear forwards;\n  transition: transform 180ms ease-out;\n}\n\n@keyframes mini-loader-progress {\n  0% {\n    transform: scaleX(0);\n  }\n  2% {\n    transform: scaleX(0.5);\n  }\n  10% {\n    transform: scaleX(0.75);\n  }\n  50% {\n    transform: scaleX(0.9);\n  }\n  100% {\n    transform: scaleX(0.95);\n  }\n}\n@keyframes mini-loader-finish {\n  to {\n    opacity: 0;\n  }\n}\n#dialog {\n  width: var(--nte-feedback-dialog-width, min(100vw - 2rem, 42rem));\n  max-height: var(--nte-feedback-dialog-max-height, calc(100vh - 2rem));\n  margin: 0;\n  padding: 0;\n  background: var(--nt-surface-raised);\n  border: var(--nt-border-width) solid var(--nt-border);\n  border-radius: var(--nt-border-radius-xl);\n  box-shadow: 0 0.5rem 1rem rgb(from var(--nt-text) r g b/0.15), 0 0.125rem 0.25rem rgb(from var(--nt-text) r g b/0.075);\n  color: var(--nt-text);\n  position: fixed;\n  inset: 50% auto auto 50%;\n  transform: translate(-50%, -50%);\n  overflow: visible;\n}\n\n#dialog:not([open]) {\n  display: none;\n}\n\n#dialog::backdrop {\n  background: rgb(from var(--nt-dark) r g b/0.5);\n  backdrop-filter: blur(6px);\n}\n\n#dialog.shake {\n  animation: dialog-shake 0.35s ease;\n}\n\n#panel {\n  position: relative;\n  display: grid;\n  gap: var(--nte-feedback-panel-gap, 1rem);\n  overflow: auto;\n  max-height: var(--nte-feedback-dialog-max-height, calc(100vh - 2rem));\n  padding: var(--nt-spacing-component);\n}\n\n#header {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: var(--nte-feedback-header-gap, 1rem);\n  align-items: start;\n}\n\n#close {\n  appearance: none;\n  display: inline-grid;\n  place-items: center;\n  inline-size: var(--close-btn-size, 2.5rem);\n  block-size: var(--close-btn-size, 2.5rem);\n  padding: 0;\n  border: 0;\n  border-radius: var(--close-btn-border-radius, 999px);\n  background: var(--close-btn-background, transparent);\n  color: var(--close-btn-color, inherit);\n  cursor: pointer;\n  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;\n}\n#close::before {\n  content: "";\n  display: block;\n  inline-size: var(--close-btn-icon-size, 1.25rem);\n  block-size: var(--close-btn-icon-size, 1.25rem);\n  background-color: currentColor;\n  mask: var(--nt-icon-close) center/contain no-repeat;\n}\n#close:hover {\n  background: var(--close-btn-hover-background, color-mix(in srgb, currentColor 8%, transparent));\n}\n#close:focus-visible {\n  outline: 2px solid var(--nt-focus, currentColor);\n  outline-offset: 2px;\n}\n#close:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n#spinner {\n  justify-self: center;\n  width: 110px;\n}\n\n#content {\n  display: grid;\n  gap: var(--nte-feedback-content-gap, 0.75rem);\n}\n\n#details-summary {\n  cursor: pointer;\n}\n\n#details-content {\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n#actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--nte-feedback-actions-gap, 0.75rem);\n}\n\n#assistive-context {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n\n.btn {\n  --btn-txt: var(--nt-text-on-primary, #fff);\n  --btn-bg: var(--nt-primary, #0d6efd);\n  --btn-bg-hover: var(--nt-primary-hover, var(--btn-bg));\n  --btn-bg-active: var(--nt-primary-active, var(--btn-bg));\n  --btn-padding-x: var(--nt-btn-padding-x, 1rem);\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  appearance: none;\n  -webkit-appearance: none;\n  padding: var(--nt-btn-padding-y, 0.5rem) var(--btn-padding-x);\n  background-color: var(--btn-bg);\n  color: var(--btn-txt) !important;\n  border-radius: var(--nt-border-radius, var(--nt-radius, 0.375rem));\n  border: var(--nt-border-width, 1px) solid var(--btn-bg);\n  font: inherit;\n  font-weight: 500;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n}\n.btn:focus-visible {\n  outline: 2px solid var(--nt-primary, #0d6efd);\n  outline-offset: 2px;\n}\n.btn {\n  transition: none;\n}\n.btn:link, .btn:visited {\n  color: var(--btn-txt) !important;\n}\n.btn:hover {\n  background-color: var(--btn-bg-hover);\n  color: var(--btn-txt) !important;\n  text-decoration: none;\n}\n.btn:active {\n  background-color: var(--btn-bg-active);\n  color: var(--btn-txt) !important;\n}\n.btn.disabled, .btn[disabled] {\n  background-color: rgb(from var(--btn-bg) r g b/0.5);\n  color: rgb(from var(--nt-text, currentColor) r g b/0.5) !important;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.btn[part~=button-primary] {\n  --btn-bg: var(--nt-primary) !important;\n  --btn-bg-hover: var(--nt-primary-hover, var(--nt-primary)) !important;\n  --btn-bg-active: var(--nt-primary-active, var(--nt-primary)) !important;\n  --btn-txt: var(--nt-text-on-primary, #fff) !important;\n  border-color: var(--nt-primary) !important;\n}\n\n.btn[part~=button-secondary] {\n  --btn-bg: var(--nt-secondary) !important;\n  --btn-bg-hover: var(--nt-secondary-hover, var(--nt-secondary)) !important;\n  --btn-bg-active: var(--nt-secondary-active, var(--nt-secondary)) !important;\n  --btn-txt: var(--nt-text-on-secondary, #fff) !important;\n  border-color: var(--nt-secondary) !important;\n}\n\n.btn[part~=button-danger] {\n  --btn-bg: var(--nt-danger) !important;\n  --btn-bg-hover: var(--nt-danger-hover, var(--nt-danger)) !important;\n  --btn-bg-active: var(--nt-danger-active, var(--nt-danger)) !important;\n  --btn-txt: var(--nt-text-on-danger, #fff) !important;\n  border-color: var(--nt-danger) !important;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  #mini-loader-value {\n    animation: none;\n    transform: scaleX(0.5);\n    transition: none;\n  }\n  #mini-loader.ready {\n    animation-duration: 1ms;\n    animation-delay: 0s;\n  }\n  #dialog.shake {\n    animation: none;\n  }\n}\n@keyframes dialog-shake {\n  0%, 100% {\n    transform: translate(-50%, -50%) translateX(0);\n  }\n  15% {\n    transform: translate(-50%, -50%) translateX(-10px);\n  }\n  30% {\n    transform: translate(-50%, -50%) translateX(10px);\n  }\n  45% {\n    transform: translate(-50%, -50%) translateX(-8px);\n  }\n  60% {\n    transform: translate(-50%, -50%) translateX(8px);\n  }\n  75% {\n    transform: translate(-50%, -50%) translateX(-4px);\n  }\n}';
var __create$c = Object.create;
var __defProp$e = Object.defineProperty;
var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
var __knownSymbol$c = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$c = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$c = (target, value) => __defProp$e(target, "name", { value, configurable: true });
var __decoratorStart$c = (base) => [, , , __create$c(base?.[__knownSymbol$c("metadata")] ?? null)];
var __decoratorStrings$c = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$c = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$c("Function expected") : fn;
var __decoratorContext$c = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$c[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$c("Already initialized") : fns.push(__expectFn$c(fn || null)) });
var __decoratorMetadata$c = (array, target) => __defNormalProp$c(target, __knownSymbol$c("metadata"), array[3]);
var __runInitializers$c = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$c = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$c[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$g(k < 4 ? target : { get [name]() {
    return __privateGet$a(this, extra);
  }, set [name](x) {
    return __privateSet$a(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$c(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$c(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$c(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$a(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$a : __privateMethod$a)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$a(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$c(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$c("Object expected");
    else __expectFn$c(fn = it.get) && (desc.get = fn), __expectFn$c(fn = it.set) && (desc.set = fn), __expectFn$c(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$c(array, target), desc && __defProp$e(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$a = (obj, member, msg) => member.has(obj) || __typeError$c("Cannot " + msg);
var __privateIn$a = (member, obj) => Object(obj) !== obj ? __typeError$c('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$a = (obj, member, getter) => (__accessCheck$a(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$a = (obj, member, value) => member.has(obj) ? __typeError$c("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$a = (obj, member, value, setter) => (__accessCheck$a(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$a = (obj, member, method) => (__accessCheck$a(obj, member, "access private method"), method);
var __handleConfirm_dec, __handleInfo_dec, __handleFail_dec, __handleSuccess_dec, __handleProgress_dec, __handleReady_dec, __handleLoading_dec, __handleClose_dec, __miniReady_dec, __loadingVariant_dec, __cancelable_dec, __referenceLabel_dec, __actions_dec, __confirmHtml_dec, __progress_dec, __details_dec, __message_dec, __title_dec, __status_dec, __open_dec, __miniLoaderElement_dec, __dialogElement_dec, _a$c, _NteFeedback_decorators, _init$c, __dialogElement, __miniLoaderElement, __open, __status, __title, __message, __details, __progress, __confirmHtml, __actions, __referenceLabel, __cancelable, __loadingVariant, __miniReady;
const features$2 = { eventBinding: true };
_NteFeedback_decorators = [t("nte-feedback")];
class NteFeedback extends (_a$c = nextrap_element(features$2), __dialogElement_dec = [e("#dialog")], __miniLoaderElement_dec = [e("#mini-loader")], __open_dec = [r$1()], __status_dec = [r$1()], __title_dec = [r$1()], __message_dec = [r$1()], __details_dec = [r$1()], __progress_dec = [r$1()], __confirmHtml_dec = [r$1()], __actions_dec = [r$1()], __referenceLabel_dec = [r$1()], __cancelable_dec = [r$1()], __loadingVariant_dec = [r$1()], __miniReady_dec = [r$1()], __handleClose_dec = [wt("nextrap:feedback-close", { target: "window" })], __handleLoading_dec = [wt("nextrap:loading", { target: "window" })], __handleReady_dec = [wt("nextrap:ready", { target: "window" })], __handleProgress_dec = [wt("nextrap:progress", { target: "window" })], __handleSuccess_dec = [wt("nextrap:success", { target: "window" })], __handleFail_dec = [wt("nextrap:fail", { target: "window" })], __handleInfo_dec = [wt("nextrap:info", { target: "window" })], __handleConfirm_dec = [wt("nextrap:confirm", { target: "window" })], _a$c) {
  constructor() {
    super(...arguments);
    __runInitializers$c(_init$c, 5, this);
    __privateAdd$a(this, __dialogElement, __runInitializers$c(_init$c, 8, this, null)), __runInitializers$c(_init$c, 11, this);
    __privateAdd$a(this, __miniLoaderElement, __runInitializers$c(_init$c, 12, this, null)), __runInitializers$c(_init$c, 15, this);
    __privateAdd$a(this, __open, __runInitializers$c(_init$c, 16, this, false)), __runInitializers$c(_init$c, 19, this);
    __privateAdd$a(this, __status, __runInitializers$c(_init$c, 20, this, "idle")), __runInitializers$c(_init$c, 23, this);
    __privateAdd$a(this, __title, __runInitializers$c(_init$c, 24, this, "")), __runInitializers$c(_init$c, 27, this);
    __privateAdd$a(this, __message, __runInitializers$c(_init$c, 28, this, "")), __runInitializers$c(_init$c, 31, this);
    __privateAdd$a(this, __details, __runInitializers$c(_init$c, 32, this, "")), __runInitializers$c(_init$c, 35, this);
    __privateAdd$a(this, __progress, __runInitializers$c(_init$c, 36, this, 0)), __runInitializers$c(_init$c, 39, this);
    __privateAdd$a(this, __confirmHtml, __runInitializers$c(_init$c, 40, this, "")), __runInitializers$c(_init$c, 43, this);
    __privateAdd$a(this, __actions, __runInitializers$c(_init$c, 44, this, [])), __runInitializers$c(_init$c, 47, this);
    __privateAdd$a(this, __referenceLabel, __runInitializers$c(_init$c, 48, this, "")), __runInitializers$c(_init$c, 51, this);
    __privateAdd$a(this, __cancelable, __runInitializers$c(_init$c, 52, this, false)), __runInitializers$c(_init$c, 55, this);
    __privateAdd$a(this, __loadingVariant, __runInitializers$c(_init$c, 56, this, "dialog")), __runInitializers$c(_init$c, 59, this);
    __privateAdd$a(this, __miniReady, __runInitializers$c(_init$c, 60, this, false)), __runInitializers$c(_init$c, 63, this);
    this._miniLoadId = 0;
    this._abortCallback = void 0;
    this._infoConfirmCallback = void 0;
    this._autoCloseTimer = null;
    this._shakeTimer = null;
    this._mockMessageTimer = null;
    this._mockAnimationFrame = null;
    this._onAbortClick = () => this._dismiss();
    this._onDismissClick = () => this._dismiss();
    this._onInfoConfirm = () => {
      const callback = this._infoConfirmCallback;
      callback?.();
      this.close();
    };
    this._onDialogCancel = (event) => {
      event.preventDefault();
      if (this._cancelable) this._dismiss();
    };
    this._onDialogClick = (event) => {
      const dialog = this._dialogElement;
      if (!dialog?.open) return;
      const rect = dialog.getBoundingClientRect();
      const clickedBackdrop = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
      if (!clickedBackdrop) return;
      event.preventDefault();
      if (this._requiresExplicitInteraction()) {
        this._shake();
        return;
      }
      this._dismiss();
    };
  }
  // Entfernen beendet einen Mini-Loader samt Promise; ein Reconnect startet ihn nicht neu.
  disconnectedCallback() {
    if (this._isMiniLoader()) this.close();
    this._clearAutoCloseTimer();
    this._clearMockProgress();
    this._clearShakeTimer();
    this._syncDialogState(false);
    super.disconnectedCallback();
  }
  // Erst gerenderte, verbundene Elemente dürfen in den Top Layer aufgenommen werden.
  updated(_changedProperties) {
    super.updated(_changedProperties);
    if (!this.isConnected) return;
    this._syncDialogState(this._open && !this._isMiniLoader());
    this._syncMiniLoaderState(this._isMiniLoader());
    if (this._miniReady) this._finishMiniLoader();
  }
  // Beide Darstellungen nutzen denselben Zustand; Mini öffnet keinen modalen Dialog.
  render() {
    return b`
      ${super.render()}
      ${this._isMiniLoader() ? i$1(this._miniLoadId, b`
        <div id="mini-loader" part="mini-loader" popover="manual"
          role="progressbar" aria-label=${this._title} aria-valuetext=${this._message}
          aria-busy=${this._miniReady ? "false" : "true"}
          aria-valuenow=${this._miniReady ? "100" : A}
          @animationend=${this._onMiniAnimationEnd}>
          <span id="mini-loader-value" part="mini-loader-value"></span>
        </div>`) : A}
      <dialog id="dialog" part="dialog" aria-labelledby="headline" aria-describedby="assistive-context message"
        aria-modal="true" aria-busy=${this._isBusy() ? "true" : "false"} role=${this._getRole()}
        @cancel=${this._onDialogCancel} @click=${this._onDialogClick}>
        ${this._open && this._status !== "idle" && !this._isMiniLoader() ? b`
          <div id="panel" part="panel">
            <div id="assistive-context" part="assistive-context">${this._getAssistiveContext()}</div>
            <div id="header" part="header">
              <div id="headline" part="headline">${this._getTitle()}</div>
              ${this._cancelable ? b`<button id="close" part="close-button" type="button" aria-label="Dialog schließen" @click=${this._onDismissClick}></button>` : A}
            </div>
            ${this._showsSpinner() ? b`<nte-spinner id="spinner" part="spinner" class=${this._getSpinnerClass()} style=${this._getSpinnerStyle()}></nte-spinner>` : A}
            <div id="content" part="content">
              <div id="message" part="message">${this._message}</div>
              ${this._referenceLabel ? b`<div id="reference" part="reference">${this._referenceLabel}</div>` : A}
              ${this._status === "fail" && this._details ? b`<details id="details" part="details"><summary id="details-summary" part="details-summary">Details anzeigen</summary><pre id="details-content" part="details-content">${this._details}</pre></details>` : A}
              ${this._status === "confirm" && this._confirmHtml ? b`<div id="html" part="html">${o$1(this._confirmHtml)}</div>` : A}
            </div>
            ${this._hasActions() ? b`<div id="actions" part="actions">${this._renderActions()}</div>` : A}
          </div>` : A}
      </dialog>`;
  }
  // Explizites Schließen bleibt synchron, damit neue Feedback-Promises nicht vorzeitig enden.
  close() {
    const wasOpen = this._open;
    this._clearMiniLoader();
    this._clearAutoCloseTimer();
    this._clearMockProgress();
    this._clearShakeTimer();
    this._dialogElement?.classList.remove("shake");
    this._syncDialogState(false);
    this._open = false;
    this._status = "idle";
    this._title = "";
    this._message = "";
    this._details = "";
    this._progress = 0;
    this._confirmHtml = "";
    this._actions = [];
    this._referenceLabel = "";
    this._cancelable = false;
    this._abortCallback = void 0;
    this._infoConfirmCallback = void 0;
    if (wasOpen) window.dispatchEvent(new CustomEvent("nextrap:feedback-closed"));
  }
  _handleClose() {
    this.close();
  }
  _handleLoading(event) {
    const detail = event.detail ?? {};
    this._openState("loading", detail.title, detail.message, detail.reference, detail.cancelable ?? !!detail.onAbort);
    this._abortCallback = detail.onAbort;
    this._progress = 0;
    this._loadingVariant = detail.variant ?? "dialog";
    if (this._isMiniLoader()) {
      this._clearMockProgress();
      this._miniLoadId++;
    }
  }
  _handleReady() {
    if (!this._open || this._status !== "loading") return;
    if (!this._isMiniLoader()) {
      this.close();
      return;
    }
    this._miniReady = true;
  }
  _handleProgress(event) {
    const detail = event.detail;
    if (!detail) return;
    this._openState("progress", detail.title, detail.message, detail.reference, detail.cancelable ?? !!detail.onAbort);
    this._abortCallback = detail.onAbort;
    this._progress = this._clampProgress(detail.progress);
    this._startMockProgress(detail);
    if (this._progress >= 100) this._scheduleAutoClose(true);
  }
  _handleSuccess(event) {
    const detail = event.detail ?? {};
    this._openState("success", detail.title, detail.message, void 0, detail.cancelable ?? true);
    this._scheduleAutoClose(detail.autoClose ?? true);
  }
  _handleFail(event) {
    const detail = event.detail ?? {};
    this._openState("fail", detail.title, detail.message, void 0, detail.cancelable ?? true);
    this._details = detail.details ?? "";
    this._scheduleAutoClose(detail.autoClose ?? true);
  }
  _handleInfo(event) {
    const detail = event.detail ?? {};
    this._openState("info", detail.title, detail.message, void 0, detail.cancelable ?? true);
    this._infoConfirmCallback = detail.onConfirm;
  }
  _handleConfirm(event) {
    const detail = event.detail ?? {};
    this._openState("confirm", detail.title, detail.message, void 0, detail.cancelable ?? true);
    this._confirmHtml = detail.html ?? "";
    this._actions = detail.actions?.length ? detail.actions : [{ label: "OK", variant: "primary" }];
  }
  // Ein neuer Zustand übernimmt die zentrale Feedback-Fläche und verwirft alte Mini-Animationen.
  _openState(status, title, message, reference, cancelable = false) {
    this._clearMiniLoader();
    this._clearAutoCloseTimer();
    this._syncDialogState(false);
    this._open = true;
    this._status = status;
    this._title = title?.trim() || this._getDefaultTitle(status);
    this._message = message?.trim() || this._getDefaultMessage(status);
    this._details = "";
    this._confirmHtml = "";
    this._actions = [];
    this._referenceLabel = this._getReferenceLabel(reference);
    this._cancelable = cancelable;
    this._abortCallback = void 0;
    this._infoConfirmCallback = void 0;
  }
  // Statusdialoge bieten nur dann eine Schließen-Aktion an, wenn sie abbrechbar sind.
  _renderActions() {
    switch (this._status) {
      case "loading":
      case "progress":
        return this._abortCallback ? b`<button class="btn" part=${this._getButtonPart("secondary")} @click=${this._onAbortClick}>Abort</button>` : A;
      case "success":
      case "fail":
        return this._cancelable ? b`<button class="btn" part=${this._getButtonPart("primary")} @click=${() => this.close()}>Close</button>` : A;
      case "info":
        return b`<button class="btn" part=${this._getButtonPart("primary")} @click=${this._onInfoConfirm}>OK</button>`;
      case "confirm":
        return this._actions.map((action) => b`<button class="btn" part=${this._getButtonPart(action.variant ?? "secondary")} @click=${() => this._onConfirmAction(action)}>${action.label}</button>`);
      default:
        return A;
    }
  }
  // Ohne erlaubte Aktion bleibt auch der zugehörige Aktionsbereich ausgeblendet.
  _hasActions() {
    if (this._status === "loading" || this._status === "progress") return !!this._abortCallback;
    if (this._status === "success" || this._status === "fail") return this._cancelable;
    if (this._status === "info") return true;
    return this._status === "confirm" && this._actions.length > 0;
  }
  _showsSpinner() {
    return this._status !== "confirm";
  }
  _isBusy() {
    return this._status === "loading" || this._status === "progress";
  }
  _getTitle() {
    return this._title || this._getDefaultTitle(this._status);
  }
  _getDefaultTitle(status) {
    switch (status) {
      case "loading":
        return "Loading";
      case "progress":
        return "Progress";
      case "success":
        return "Success";
      case "fail":
        return "Error";
      case "info":
        return "Information";
      case "confirm":
        return "Confirmation";
      default:
        return "";
    }
  }
  _getAssistiveContext() {
    switch (this._status) {
      case "loading":
      case "progress":
        return "Wartedialog geöffnet. Bitte warten, der Vorgang wird ausgeführt.";
      case "confirm":
        return "Nachfragedialog geöffnet. Bitte treffen Sie eine Auswahl.";
      case "fail":
        return "Fehlerdialog geöffnet.";
      case "success":
        return "Erfolgsdialog geöffnet.";
      case "info":
        return "Informationsdialog geöffnet.";
      default:
        return "";
    }
  }
  _getDefaultMessage(status) {
    switch (status) {
      case "loading":
        return "Please wait...";
      case "progress":
        return "The process is running...";
      case "success":
        return "The operation was completed successfully.";
      case "fail":
        return "The operation could not be completed.";
      case "info":
        return "Information";
      case "confirm":
        return "Please confirm the next step.";
    }
  }
  _getSpinnerClass() {
    switch (this._status) {
      case "progress":
        return "progress";
      case "success":
        return "checked";
      case "fail":
        return "cross";
      case "info":
        return "info";
      default:
        return "";
    }
  }
  _getSpinnerStyle() {
    return this._status === "progress" ? `--percentage: ${this._progress}; --percentage-txt: '${Math.round(this._progress)}%';` : A;
  }
  _getRole() {
    return this._status === "confirm" || this._status === "fail" ? "alertdialog" : "dialog";
  }
  _getReferenceLabel(reference) {
    if (typeof reference === "string") return reference;
    if (reference instanceof HTMLElement) return reference.id ? `#${reference.id}` : reference.tagName.toLowerCase();
    return "";
  }
  _clampProgress(progress) {
    return Math.min(100, Math.max(0, Number.isFinite(progress) ? progress : 0));
  }
  _getButtonPart(variant) {
    return `button button-${variant}`;
  }
  _scheduleAutoClose(enabled, delay = NTE_FEEDBACK_DEFAULT_AUTO_CLOSE_MS) {
    this._clearAutoCloseTimer();
    if (enabled) this._autoCloseTimer = window.setTimeout(() => this.close(), delay);
  }
  _clearAutoCloseTimer() {
    if (this._autoCloseTimer === null) return;
    window.clearTimeout(this._autoCloseTimer);
    this._autoCloseTimer = null;
  }
  // Der Balken ist eine Variante des bestehenden Loading-Zustands, kein eigener Feedback-Kanal.
  _isMiniLoader() {
    return this._open && this._status === "loading" && this._loadingVariant === "mini";
  }
  // Ready übernimmt einmalig die sichtbare CSS-Position; Transition und Fade laufen in CSS.
  _finishMiniLoader() {
    const loader = this._miniLoaderElement;
    const value = loader?.firstElementChild;
    if (!loader || !value || loader.classList.contains("ready")) return;
    value.style.transform = getComputedStyle(value).transform;
    value.style.animation = "none";
    void value.offsetWidth;
    value.style.transform = "scaleX(1)";
    loader.classList.add("ready");
  }
  // Nur das Ausblenden des aktuellen Balkens beendet Loading, nicht dessen Ladeanimation.
  _onMiniAnimationEnd(event) {
    if (event.target === this._miniLoaderElement && event.animationName === "mini-loader-finish" && this._miniReady) this.close();
  }
  // Schließen oder Ersetzen entfernt die CSS-Animation zusammen mit ihrem Element.
  _clearMiniLoader() {
    this._syncMiniLoaderState(false);
    this._loadingVariant = "dialog";
    this._miniReady = false;
  }
  // Ein manuelles Popover liegt ohne Fokus- oder Klicksperre über normalem Seiteninhalt.
  // Ohne Popover-API bleibt die feste Positionierung aus dem Shadow-SCSS wirksam.
  _syncMiniLoaderState(open) {
    const loader = this._miniLoaderElement;
    if (!loader?.isConnected || typeof loader.showPopover !== "function") return;
    const shown = loader.matches(":popover-open");
    if (open && !shown) loader.showPopover();
    if (!open && shown) loader.hidePopover();
  }
  // Animates mock progress without reaching 100% before the real operation reports completion.
  _startMockProgress(detail) {
    this._clearMockProgress();
    if (!detail.mock) return;
    const duration = Math.max(1, detail.mockDuration ?? 1e4);
    const messages = detail.mockMessages?.filter(Boolean) ?? [];
    const startedAt = performance.now();
    const target = Math.min(95, this._progress || 0);
    if (messages.length > 0) {
      this._message = messages[0];
      const step = duration / messages.length;
      this._mockMessageTimer = window.setInterval(() => {
        const index = Math.min(messages.length - 1, Math.floor((performance.now() - startedAt) / step));
        this._message = messages[index];
      }, Math.max(50, step));
    }
    const animate = (now) => {
      const elapsed = Math.min(duration, now - startedAt);
      const ratio = elapsed / duration;
      const eased = 1 - Math.pow(1 - ratio, 2);
      this._progress = target + (95 - target) * eased;
      if (elapsed < duration && this._status === "progress") {
        this._mockAnimationFrame = window.requestAnimationFrame(animate);
      }
    };
    this._mockAnimationFrame = window.requestAnimationFrame(animate);
  }
  _clearMockProgress() {
    if (this._mockMessageTimer !== null) {
      window.clearInterval(this._mockMessageTimer);
      this._mockMessageTimer = null;
    }
    if (this._mockAnimationFrame !== null) {
      window.cancelAnimationFrame(this._mockAnimationFrame);
      this._mockAnimationFrame = null;
    }
  }
  _clearShakeTimer() {
    if (this._shakeTimer === null) return;
    window.clearTimeout(this._shakeTimer);
    this._shakeTimer = null;
  }
  // Nicht abbrechbare Dialoge dürfen auch durch Hintergrundklicks nicht verschwinden.
  _requiresExplicitInteraction() {
    if (!this._cancelable) return true;
    if (this._status === "confirm") return true;
    return this._status === "info" && !!this._infoConfirmCallback;
  }
  _shake() {
    const dialog = this._dialogElement;
    if (!dialog) return;
    this._clearShakeTimer();
    dialog.classList.remove("shake");
    void dialog.offsetWidth;
    dialog.classList.add("shake");
    this._shakeTimer = window.setTimeout(() => {
      dialog.classList.remove("shake");
      this._shakeTimer = null;
    }, 350);
  }
  _syncDialogState(open) {
    const dialog = this._dialogElement;
    if (!dialog) return;
    if (open) {
      if (dialog.open) return;
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
        return;
      }
      dialog.setAttribute("open", "");
      return;
    }
    if (!dialog.open) {
      dialog.removeAttribute("open");
      return;
    }
    if (typeof dialog.close === "function") {
      dialog.close();
      return;
    }
    dialog.removeAttribute("open");
  }
  _dismiss() {
    if ((this._status === "loading" || this._status === "progress") && this._abortCallback) {
      const callback = this._abortCallback;
      callback();
      this.close();
      return;
    }
    this.close();
  }
  _onConfirmAction(action) {
    action.callback?.();
    this.close();
  }
}
_init$c = __decoratorStart$c(_a$c);
__dialogElement = /* @__PURE__ */ new WeakMap();
__miniLoaderElement = /* @__PURE__ */ new WeakMap();
__open = /* @__PURE__ */ new WeakMap();
__status = /* @__PURE__ */ new WeakMap();
__title = /* @__PURE__ */ new WeakMap();
__message = /* @__PURE__ */ new WeakMap();
__details = /* @__PURE__ */ new WeakMap();
__progress = /* @__PURE__ */ new WeakMap();
__confirmHtml = /* @__PURE__ */ new WeakMap();
__actions = /* @__PURE__ */ new WeakMap();
__referenceLabel = /* @__PURE__ */ new WeakMap();
__cancelable = /* @__PURE__ */ new WeakMap();
__loadingVariant = /* @__PURE__ */ new WeakMap();
__miniReady = /* @__PURE__ */ new WeakMap();
__decorateElement$c(_init$c, 4, "_dialogElement", __dialogElement_dec, NteFeedback, __dialogElement);
__decorateElement$c(_init$c, 4, "_miniLoaderElement", __miniLoaderElement_dec, NteFeedback, __miniLoaderElement);
__decorateElement$c(_init$c, 4, "_open", __open_dec, NteFeedback, __open);
__decorateElement$c(_init$c, 4, "_status", __status_dec, NteFeedback, __status);
__decorateElement$c(_init$c, 4, "_title", __title_dec, NteFeedback, __title);
__decorateElement$c(_init$c, 4, "_message", __message_dec, NteFeedback, __message);
__decorateElement$c(_init$c, 4, "_details", __details_dec, NteFeedback, __details);
__decorateElement$c(_init$c, 4, "_progress", __progress_dec, NteFeedback, __progress);
__decorateElement$c(_init$c, 4, "_confirmHtml", __confirmHtml_dec, NteFeedback, __confirmHtml);
__decorateElement$c(_init$c, 4, "_actions", __actions_dec, NteFeedback, __actions);
__decorateElement$c(_init$c, 4, "_referenceLabel", __referenceLabel_dec, NteFeedback, __referenceLabel);
__decorateElement$c(_init$c, 4, "_cancelable", __cancelable_dec, NteFeedback, __cancelable);
__decorateElement$c(_init$c, 4, "_loadingVariant", __loadingVariant_dec, NteFeedback, __loadingVariant);
__decorateElement$c(_init$c, 4, "_miniReady", __miniReady_dec, NteFeedback, __miniReady);
__decorateElement$c(_init$c, 1, "_handleClose", __handleClose_dec, NteFeedback);
__decorateElement$c(_init$c, 1, "_handleLoading", __handleLoading_dec, NteFeedback);
__decorateElement$c(_init$c, 1, "_handleReady", __handleReady_dec, NteFeedback);
__decorateElement$c(_init$c, 1, "_handleProgress", __handleProgress_dec, NteFeedback);
__decorateElement$c(_init$c, 1, "_handleSuccess", __handleSuccess_dec, NteFeedback);
__decorateElement$c(_init$c, 1, "_handleFail", __handleFail_dec, NteFeedback);
__decorateElement$c(_init$c, 1, "_handleInfo", __handleInfo_dec, NteFeedback);
__decorateElement$c(_init$c, 1, "_handleConfirm", __handleConfirm_dec, NteFeedback);
NteFeedback = __decorateElement$c(_init$c, 0, "NteFeedback", _NteFeedback_decorators, NteFeedback);
NteFeedback.styles = [r(style$l), r(resetStyle)];
__runInitializers$c(_init$c, 1, NteFeedback);
function normalizeOption(option) {
  if (typeof option === "string") {
    return { value: option, label: option };
  }
  if (option && typeof option === "object") {
    const candidate = option;
    if (typeof candidate.value === "string" || typeof candidate.label === "string") {
      return {
        value: String(candidate.value ?? candidate.label ?? ""),
        label: String(candidate.label ?? candidate.value ?? ""),
        disabled: Boolean(candidate.disabled),
        html: typeof candidate.html === "string" ? candidate.html : void 0
      };
    }
    const entry = Object.entries(candidate)[0];
    if (entry && typeof entry[0] === "string" && typeof entry[1] === "string") {
      return {
        value: entry[0],
        label: entry[1]
      };
    }
  }
  return null;
}
function parseInputOptions(value) {
  if (!value) {
    return [];
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return [];
  }
  if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map(normalizeOption).filter((option) => option !== null);
      }
      if (parsed && typeof parsed === "object") {
        return Object.entries(parsed).map(([key, label]) => ({
          value: key,
          label: String(label)
        }));
      }
    } catch (error) {
      console.warn("Invalid data-options JSON:", error);
      return [];
    }
  }
  return trimmed.split(";").map((entry) => entry.trim()).filter(Boolean).map((entry) => {
    const [valuePart, labelPart] = entry.split("|").map((part) => part.trim());
    const value2 = valuePart ?? "";
    const label = labelPart || valuePart || "";
    return {
      value: value2,
      label
    };
  });
}
function serializeInputOptions(value) {
  return JSON.stringify(value);
}
const NTE_INPUT_CONTROL_ID = "main-control";
const NTE_INPUT_VALIDATION_ID = "validation-content";
const style$k = ":host {\n  display: block;\n}\n\n:host(.inline) {\n  display: inline-block;\n}\n\n:where(#wrapper),\n:where(#field) {\n  display: grid;\n  gap: 0.5rem;\n}\n\n:where(#label) {\n  margin: 0;\n  font-weight: 600;\n}\n\n:where(#label-area[hidden]) {\n  display: none;\n}\n\n:where(#label[hidden]) {\n  display: none;\n}\n\n:where(#control-shell) {\n  display: flex;\n  align-items: stretch;\n  gap: 0.5rem;\n  min-height: 2.75rem;\n  border: 1px solid #ced4da;\n}\n\n:where(#control) {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: stretch;\n  min-width: 0;\n  padding: 0.625rem 0.75rem;\n}\n\n:where(#control-input) {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: stretch;\n  min-width: 0;\n}\n\n:where(#control-input) > * {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n\n:where(#start),\n:where(#end) {\n  display: flex;\n  flex: 0 0 auto;\n  align-items: stretch;\n  align-self: stretch;\n}\n\n:where(#start.slot-empty),\n:where(#end.slot-empty) {\n  display: none;\n}\n\n:where(#start)::slotted(*),\n:where(#end)::slotted(*) {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  align-self: stretch;\n  box-sizing: border-box;\n  height: 100%;\n  max-height: 100%;\n}\n\n:where(#control-shell:focus-within) {\n  border-color: #0d6efd;\n}\n\n:where(#validation) {\n  display: none;\n  grid-template-rows: 1fr;\n  padding-top: 0.375rem;\n}\n\n:where(#validation slot) {\n  display: contents;\n}\n\n:where(#validation-inner) {\n  min-height: 0;\n  overflow: visible;\n}\n\n:where(#validation-bubble) {\n  position: relative;\n}\n\n:where(#validation-arrow) {\n  position: absolute;\n  top: 0;\n  left: 0.75rem;\n  display: block;\n  width: 0.625rem;\n  height: 0.625rem;\n  background: white;\n  border-top: 1px solid #dc3545;\n  border-left: 1px solid #dc3545;\n  transform: translateY(-50%) rotate(45deg);\n}\n\n:where(#validation-content) {\n  display: block;\n  border: 1px solid #dc3545;\n}\n\n:host([invalid]) :where(#validation:has(slot:not(.slot-empty))) {\n  display: grid;\n  padding-top: 0.175rem;\n}\n\n:where(#input-aid) {\n  display: none;\n  grid-template-rows: 0fr;\n}\n\n:where(#input-aid slot) {\n  display: contents;\n}\n\n:where(#input-aid-inner) {\n  min-height: 0;\n  overflow: visible;\n}\n\n:where(#input-aid-bubble) {\n  position: relative;\n  opacity: 0;\n}\n\n:where(#input-aid-arrow) {\n  position: absolute;\n  top: 0;\n  left: 0.75rem;\n  display: block;\n  width: 0.625rem;\n  height: 0.625rem;\n  background: white;\n  border-top: 1px solid #0d6efd;\n  border-left: 1px solid #0d6efd;\n  transform: translateY(-50%) rotate(45deg);\n}\n\n:where(#input-aid-content) {\n  display: block;\n  border: 1px solid #0d6efd;\n}\n\n:where(#input-aid:has(slot:not(.slot-empty))) {\n  display: grid;\n}\n\n:host(:focus-within) :where(#input-aid:has(slot:not(.slot-empty))) {\n  grid-template-rows: 1fr;\n  padding-top: 0.375rem;\n}\n\n:host(:focus-within) :where(#input-aid:has(slot:not(.slot-empty))) :where(#input-aid-bubble) {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n:where(#label-area) {\n  min-width: 0;\n}\n\n:where(#description-trigger) {\n  border: 0;\n  padding: 0;\n  background: transparent;\n  color: inherit;\n  cursor: help;\n  anchor-name: --nte-input-description-anchor;\n}\n\n:where(#label-area:has(#description-slot.slot-empty) #description-trigger) {\n  display: none;\n}\n\n:where(#description-popover) {\n  position-anchor: --nte-input-description-anchor;\n  position-area: bottom center;\n  margin: 0.5rem 0 0;\n  box-sizing: border-box;\n  inline-size: max-content;\n  max-inline-size: min(400px, 50vw);\n  overflow-wrap: anywhere;\n  padding: 0.75rem 1rem;\n  border: 1px solid var(--nt-border-color, #ced4da);\n  border-radius: var(--nt-border-radius, 0.375rem);\n  color: var(--nt-text, #212529);\n  background: var(--nt-body, #fff);\n  box-shadow: 0 0.5rem 1rem color-mix(in srgb, var(--nt-text, #212529) 15%, transparent);\n}";
var __create$b = Object.create;
var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __knownSymbol$b = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$b = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$b = (target, value) => __defProp$d(target, "name", { value, configurable: true });
var __decoratorStart$b = (base) => [, , , __create$b(base?.[__knownSymbol$b("metadata")] ?? null)];
var __decoratorStrings$b = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$b = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$b("Function expected") : fn;
var __decoratorContext$b = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$b[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$b("Already initialized") : fns.push(__expectFn$b(fn || null)) });
var __decoratorMetadata$b = (array, target) => __defNormalProp$b(target, __knownSymbol$b("metadata"), array[3]);
var __runInitializers$b = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$b = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$b[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$f(k < 4 ? target : { get [name]() {
    return __privateGet$9(this, extra);
  }, set [name](x) {
    return __privateSet$9(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$b(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$b(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$b(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$9(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$9 : __privateMethod$9)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$9(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$b(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$b("Object expected");
    else __expectFn$b(fn = it.get) && (desc.get = fn), __expectFn$b(fn = it.set) && (desc.set = fn), __expectFn$b(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$b(array, target), desc && __defProp$d(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$9 = (obj, member, msg) => member.has(obj) || __typeError$b("Cannot " + msg);
var __privateIn$9 = (member, obj) => Object(obj) !== obj ? __typeError$b('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$9 = (obj, member, getter) => (__accessCheck$9(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$9 = (obj, member, value) => member.has(obj) ? __typeError$b("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$9 = (obj, member, value, setter) => (__accessCheck$9(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$9 = (obj, member, method) => (__accessCheck$9(obj, member, "access private method"), method);
var _onInput_dec, _onChange_dec, _onShadowChange_dec, _onClick_dec$1, _onMustRevalidateInternal_dec, __labelFor_dec, __value_dec, _hoverlabelActive_dec, _hasPlaceholder_dec, _hasValue_dec, _valid_dec, _invalid_dec, _validationMessage_dec, _readOnly_dec, _disabled_dec, _multiple_dec, _options_dec, _placeholder_dec, _offText_dec, _onText_dec, _label_dec, _type_dec, _a$b, _NteInput_decorators, _init$b, _type, _label, _onText, _offText, _placeholder, _options, _multiple, _disabled, _readOnly, _validationMessage, _invalid, _valid, _hasValue, _hasPlaceholder, _hoverlabelActive, __value, __labelFor, _plugin, _pluginStyleElement, _pluginConstructableStyleSheet, _internals, _NteInput_instances, syncFormValue_fn, willValidate_fn, applyPluginStyleSheet_fn, normalizedType_get;
_NteInput_decorators = [t("nte-input")];
let _NteInput = class _NteInput2 extends (_a$b = nextrap_element({
  eventBinding: true,
  slotVisibility: true
  // This will add .slot-empty to empty slot elements. Rely on this to detect empty slots in css.
}), _type_dec = [n({ type: String, reflect: true })], _label_dec = [n({ type: String, reflect: true, useDefault: true })], _onText_dec = [n({ type: String, attribute: "on-text" })], _offText_dec = [n({ type: String, attribute: "off-text" })], _placeholder_dec = [n({ type: String })], _options_dec = [n({
  attribute: "data-options",
  converter: {
    fromAttribute: (value) => parseInputOptions(value),
    toAttribute: (value) => serializeInputOptions(value)
  }
})], _multiple_dec = [n({ type: Boolean })], _disabled_dec = [n({ type: Boolean, reflect: true })], _readOnly_dec = [n({ type: Boolean, attribute: "readonly", reflect: true })], _validationMessage_dec = [n({ type: String, attribute: "validation-message", reflect: true })], _invalid_dec = [n({ type: Boolean, reflect: true })], _valid_dec = [n({ type: Boolean, reflect: true })], _hasValue_dec = [n({ type: Boolean, reflect: true, attribute: "has-value" })], _hasPlaceholder_dec = [n({ type: Boolean, reflect: true, attribute: "has-placeholder" })], _hoverlabelActive_dec = [n({ type: Boolean, reflect: true, attribute: "hoverlabel-active" })], __value_dec = [r$1()], __labelFor_dec = [r$1()], _onMustRevalidateInternal_dec = [wt("input", { target: "host" }), wt("invalid", { target: "host" })], _onClick_dec$1 = [wt("click")], _onShadowChange_dec = [wt("change", { target: "shadowRoot" })], _onChange_dec = [wt("change")], _onInput_dec = [wt("input", { options: { capture: true } })], _a$b) {
  constructor() {
    super();
    __runInitializers$b(_init$b, 5, this);
    __privateAdd$9(this, _NteInput_instances);
    __privateAdd$9(this, _type, __runInitializers$b(_init$b, 8, this, "text")), __runInitializers$b(_init$b, 11, this);
    __privateAdd$9(this, _label, __runInitializers$b(_init$b, 12, this, "")), __runInitializers$b(_init$b, 15, this);
    __privateAdd$9(this, _onText, __runInitializers$b(_init$b, 16, this, "")), __runInitializers$b(_init$b, 19, this);
    __privateAdd$9(this, _offText, __runInitializers$b(_init$b, 20, this, "")), __runInitializers$b(_init$b, 23, this);
    __privateAdd$9(this, _placeholder, __runInitializers$b(_init$b, 24, this, "")), __runInitializers$b(_init$b, 27, this);
    __privateAdd$9(this, _options, __runInitializers$b(_init$b, 28, this, null)), __runInitializers$b(_init$b, 31, this);
    __privateAdd$9(this, _multiple, __runInitializers$b(_init$b, 32, this, false)), __runInitializers$b(_init$b, 35, this);
    __privateAdd$9(this, _disabled, __runInitializers$b(_init$b, 36, this, false)), __runInitializers$b(_init$b, 39, this);
    __privateAdd$9(this, _readOnly, __runInitializers$b(_init$b, 40, this, false)), __runInitializers$b(_init$b, 43, this);
    __privateAdd$9(this, _validationMessage, __runInitializers$b(_init$b, 44, this, "")), __runInitializers$b(_init$b, 47, this);
    __privateAdd$9(this, _invalid, __runInitializers$b(_init$b, 48, this, false)), __runInitializers$b(_init$b, 51, this);
    __privateAdd$9(this, _valid, __runInitializers$b(_init$b, 52, this, false)), __runInitializers$b(_init$b, 55, this);
    __privateAdd$9(this, _hasValue, __runInitializers$b(_init$b, 56, this, false)), __runInitializers$b(_init$b, 59, this);
    __privateAdd$9(this, _hasPlaceholder, __runInitializers$b(_init$b, 60, this, false)), __runInitializers$b(_init$b, 63, this);
    __privateAdd$9(this, _hoverlabelActive, __runInitializers$b(_init$b, 64, this, false)), __runInitializers$b(_init$b, 67, this);
    __privateAdd$9(this, __value, __runInitializers$b(_init$b, 68, this)), __runInitializers$b(_init$b, 71, this);
    __privateAdd$9(this, __labelFor, __runInitializers$b(_init$b, 72, this, NTE_INPUT_CONTROL_ID)), __runInitializers$b(_init$b, 75, this);
    __privateAdd$9(this, _plugin);
    __privateAdd$9(this, _pluginStyleElement);
    __privateAdd$9(this, _pluginConstructableStyleSheet);
    __privateAdd$9(this, _internals, null);
    if (typeof this.attachInternals === "function") {
      __privateSet$9(this, _internals, this.attachInternals());
    }
  }
  static registerPlugin(pluginClass) {
    for (const rawType of pluginClass.types) {
      const type = rawType.trim().toLowerCase();
      if (!type) {
        continue;
      }
      if (this.plugins.has(type)) {
        throw new Error(`Plugin for input type "${type}" is already registered.`);
      }
      this.plugins.set(type, pluginClass);
    }
  }
  static getPlugin(type) {
    return this.plugins.get(type.trim().toLowerCase());
  }
  async connectedCallback() {
    await lt();
    const pluginClass = _NteInput2.getPlugin(__privateGet$9(this, _NteInput_instances, normalizedType_get));
    if (!pluginClass) {
      throw new Error(`No plugin for type ${__privateGet$9(this, _NteInput_instances, normalizedType_get)}`);
    }
    __privateSet$9(this, _plugin, new pluginClass(this));
    if (this._value === void 0) {
      this._value = __privateGet$9(this, _plugin)?.getInitValue();
    }
    if (__privateMethod$9(this, _NteInput_instances, willValidate_fn).call(this) && typeof __privateGet$9(this, _internals)?.setValidity === "function") {
      __privateGet$9(this, _internals).setValidity({ customError: true, badInput: true }, "Invalid value");
    }
    super.connectedCallback();
    __privateMethod$9(this, _NteInput_instances, applyPluginStyleSheet_fn).call(this, __privateGet$9(this, _plugin).getStyleSheet());
    __privateGet$9(this, _plugin)?.connected();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    __privateGet$9(this, _plugin)?.disconnected();
  }
  // Exposes the form-associated validity contract so tj-form can validate this custom control before submit.
  checkValidity() {
    if (this.disabled || this.readOnly) return true;
    return __privateGet$9(this, _internals)?.checkValidity() ?? __privateGet$9(this, _plugin)?.isValid() ?? true;
  }
  // Reports the native validation state and lets the browser display the control's validation feedback.
  reportValidity() {
    if (this.disabled || this.readOnly) return true;
    return __privateGet$9(this, _internals)?.reportValidity() ?? __privateGet$9(this, _plugin)?.isValid() ?? true;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    __privateGet$9(this, _plugin)?.onHostAttributeChange(name, oldValue, newValue);
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    __privateGet$9(this, _plugin)?.updated(changedProperties);
    this.syncPluginState();
    if (changedProperties.has("disabled") || changedProperties.has("readOnly")) {
      if (this.disabled || this.readOnly) {
        __privateGet$9(this, _internals)?.setValidity?.({});
        this.invalid = false;
        this.valid = false;
      } else if (changedProperties.get("disabled") === true || changedProperties.get("readOnly") === true) {
        this.onMustRevalidateInternal();
      }
    }
  }
  render() {
    const plugin = __privateGet$9(this, _plugin);
    const isHoverLabel = this.classList.contains("hoverlabel");
    const pluginHtml = plugin?.render(this.renderContext);
    const labelTemplate = b`
      <label id="label" part="label" for=${this._labelFor} ?hidden=${!this.label && !this.hasAttribute("label") || Boolean(plugin?.isLabelHidden())}>
        ${this.label}
      </label>
    `;
    return b`
      <div id="wrapper" part="wrapper">
        <div id="field" part="field">
          ${isHoverLabel || Boolean(plugin?.isLabelHidden()) ? A : b`
                <div id="label-area" part="label-area" ?hidden=${!this.label && !this.hasAttribute("label")}>
                  ${labelTemplate}
                  <button
                    id="description-trigger"
                    part="description-trigger"
                    type="button"
                    aria-label="Beschreibung zu ${this.label}"
                    aria-haspopup="true"
                    aria-controls="description-popover"
                    popovertarget="description-popover"
                    @click=${(event) => event.stopPropagation()}
                    @pointerenter=${this.onDescriptionEnter}
                    @pointerleave=${this.onDescriptionLeave}
                  >ⓘ</button>
                  <div
                    id="description-popover"
                    part="description-popover"
                    popover="auto"
                    role="note"
                    @pointerenter=${this.onDescriptionEnter}
                    @pointerleave=${this.onDescriptionLeave}
                  ><slot id="description-slot" name="description"></slot></div>
                </div>
              `}

          <div id="control-shell" part="control">
            <slot id="start" name="start" part="start"></slot>
            <div id="control" part="control-inner">
              ${isHoverLabel ? labelTemplate : A}
              <div id="control-input" part="control-input">${pluginHtml ?? A}</div>
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
    `;
  }
  update(changedProperties) {
    if (changedProperties.has("disabled")) {
      this.toggleAttribute("disabled", this.disabled);
    }
    if (changedProperties.has("readOnly")) {
      this.toggleAttribute("readonly", this.readOnly);
    }
    super.update(changedProperties);
  }
  get renderContext() {
    return {
      element: this,
      type: __privateGet$9(this, _NteInput_instances, normalizedType_get)
    };
  }
  get form() {
    return __privateGet$9(this, _internals)?.form ?? null;
  }
  get name() {
    return this.getAttribute("name") ?? "";
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.syncPluginState();
  }
  get selectedOptions() {
    return __privateGet$9(this, _plugin)?.getSelectedOptions() ?? [];
  }
  syncPluginState() {
    const plugin = __privateGet$9(this, _plugin);
    this.hasValue = plugin?.hasValue() ?? false;
    this.hasPlaceholder = plugin?.hasPlaceholder() ?? this.hasAttribute("placeholder");
    this.hoverlabelActive = plugin?.isHoverlabelActive() ?? false;
    this._labelFor = plugin?.getLabelFor() ?? NTE_INPUT_CONTROL_ID;
    __privateMethod$9(this, _NteInput_instances, syncFormValue_fn).call(this);
  }
  formResetCallback() {
    __privateGet$9(this, _plugin)?.formResetCallback();
    this.syncPluginState();
  }
  formDisabledCallback(disabled) {
    __privateGet$9(this, _plugin)?.formDisabledCallback(disabled);
    this.syncPluginState();
  }
  onMustRevalidateInternal() {
    if (!__privateMethod$9(this, _NteInput_instances, willValidate_fn).call(this)) {
      return;
    }
    if (__privateGet$9(this, _plugin)?.isValid() === true) {
      if (typeof __privateGet$9(this, _internals)?.setValidity === "function") {
        __privateGet$9(this, _internals).setValidity({});
      }
      this.removeAttribute("invalid");
      this.setAttribute("valid", "");
    } else {
      if (typeof __privateGet$9(this, _internals)?.setValidity === "function") {
        __privateGet$9(this, _internals).setValidity({ customError: true, badInput: true }, "Invalid value");
      }
      this.setAttribute("invalid", "");
      this.removeAttribute("valid");
    }
  }
  // Hover öffnet dieselbe native Popover-Fläche wie ein Klick auf den Info-Button.
  onDescriptionEnter() {
    const popover = this.renderRoot.querySelector("#description-popover");
    if (popover && !popover.matches(":popover-open") && popover.querySelector("slot")?.assignedNodes().length) {
      popover.showPopover();
    }
  }
  // Beim Verlassen des Info-Bereichs wird die Hover-Hilfe geschlossen.
  onDescriptionLeave(event) {
    const trigger = this.renderRoot.querySelector("#description-trigger");
    const popover = this.renderRoot.querySelector("#description-popover");
    const next = event.relatedTarget;
    if (next instanceof Node && (trigger?.contains(next) || popover?.contains(next))) return;
    if (popover?.matches(":popover-open")) popover.hidePopover();
  }
  onClick(e2) {
    if (this.hasAttribute("disabled")) {
      return;
    }
    __privateGet$9(this, _plugin)?.onClick(e2);
    __privateGet$9(this, _plugin)?.getFormElement()?.focus();
  }
  onShadowChange(e2) {
    if (e2.composed || this.disabled || this.readOnly) return;
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }
  onChange(e2) {
    if (this.disabled || this.readOnly) return;
    __privateGet$9(this, _plugin)?.onChange(e2);
  }
  onInput(e2) {
    if (this.disabled || this.readOnly) return;
    __privateGet$9(this, _plugin)?.onInput(e2);
  }
};
_init$b = __decoratorStart$b(_a$b);
_type = /* @__PURE__ */ new WeakMap();
_label = /* @__PURE__ */ new WeakMap();
_onText = /* @__PURE__ */ new WeakMap();
_offText = /* @__PURE__ */ new WeakMap();
_placeholder = /* @__PURE__ */ new WeakMap();
_options = /* @__PURE__ */ new WeakMap();
_multiple = /* @__PURE__ */ new WeakMap();
_disabled = /* @__PURE__ */ new WeakMap();
_readOnly = /* @__PURE__ */ new WeakMap();
_validationMessage = /* @__PURE__ */ new WeakMap();
_invalid = /* @__PURE__ */ new WeakMap();
_valid = /* @__PURE__ */ new WeakMap();
_hasValue = /* @__PURE__ */ new WeakMap();
_hasPlaceholder = /* @__PURE__ */ new WeakMap();
_hoverlabelActive = /* @__PURE__ */ new WeakMap();
__value = /* @__PURE__ */ new WeakMap();
__labelFor = /* @__PURE__ */ new WeakMap();
_plugin = /* @__PURE__ */ new WeakMap();
_pluginStyleElement = /* @__PURE__ */ new WeakMap();
_pluginConstructableStyleSheet = /* @__PURE__ */ new WeakMap();
_internals = /* @__PURE__ */ new WeakMap();
_NteInput_instances = /* @__PURE__ */ new WeakSet();
syncFormValue_fn = function() {
  if (!__privateGet$9(this, _internals) || typeof __privateGet$9(this, _internals).setFormValue !== "function") {
    return;
  }
  if (!this.name || this.hasAttribute("disabled")) {
    __privateGet$9(this, _internals).setFormValue(null);
    return;
  }
  __privateGet$9(this, _internals).setFormValue(__privateGet$9(this, _plugin)?.getFormValue() ?? null);
};
willValidate_fn = function() {
  if (this.hasAttribute("required") && !this.hasAttribute("disabled") && !this.hasAttribute("readonly")) {
    return true;
  }
  return false;
};
applyPluginStyleSheet_fn = function(styleSheet) {
  const renderRoot = this.renderRoot;
  if (!(renderRoot instanceof ShadowRoot)) {
    return;
  }
  if (__privateGet$9(this, _pluginConstructableStyleSheet) && "adoptedStyleSheets" in renderRoot) {
    renderRoot.adoptedStyleSheets = renderRoot.adoptedStyleSheets.filter(
      (sheet) => sheet !== __privateGet$9(this, _pluginConstructableStyleSheet)
    );
    __privateSet$9(this, _pluginConstructableStyleSheet, void 0);
  }
  __privateGet$9(this, _pluginStyleElement)?.remove();
  __privateSet$9(this, _pluginStyleElement, void 0);
  if (!styleSheet) {
    return;
  }
  if (typeof CSSStyleSheet !== "undefined" && styleSheet instanceof CSSStyleSheet && "adoptedStyleSheets" in renderRoot) {
    renderRoot.adoptedStyleSheets = [...renderRoot.adoptedStyleSheets, styleSheet];
    __privateSet$9(this, _pluginConstructableStyleSheet, styleSheet);
    return;
  }
  const styleElement = document.createElement("style");
  styleElement.setAttribute("data-plugin-style", __privateGet$9(this, _NteInput_instances, normalizedType_get));
  styleElement.textContent = typeof styleSheet === "string" ? styleSheet : Array.from(styleSheet.cssRules, (rule) => rule.cssText).join("\n");
  renderRoot.append(styleElement);
  __privateSet$9(this, _pluginStyleElement, styleElement);
};
normalizedType_get = function() {
  return this.type.trim().toLowerCase() || "text";
};
__decorateElement$b(_init$b, 4, "type", _type_dec, _NteInput, _type);
__decorateElement$b(_init$b, 4, "label", _label_dec, _NteInput, _label);
__decorateElement$b(_init$b, 4, "onText", _onText_dec, _NteInput, _onText);
__decorateElement$b(_init$b, 4, "offText", _offText_dec, _NteInput, _offText);
__decorateElement$b(_init$b, 4, "placeholder", _placeholder_dec, _NteInput, _placeholder);
__decorateElement$b(_init$b, 4, "options", _options_dec, _NteInput, _options);
__decorateElement$b(_init$b, 4, "multiple", _multiple_dec, _NteInput, _multiple);
__decorateElement$b(_init$b, 4, "disabled", _disabled_dec, _NteInput, _disabled);
__decorateElement$b(_init$b, 4, "readOnly", _readOnly_dec, _NteInput, _readOnly);
__decorateElement$b(_init$b, 4, "validationMessage", _validationMessage_dec, _NteInput, _validationMessage);
__decorateElement$b(_init$b, 4, "invalid", _invalid_dec, _NteInput, _invalid);
__decorateElement$b(_init$b, 4, "valid", _valid_dec, _NteInput, _valid);
__decorateElement$b(_init$b, 4, "hasValue", _hasValue_dec, _NteInput, _hasValue);
__decorateElement$b(_init$b, 4, "hasPlaceholder", _hasPlaceholder_dec, _NteInput, _hasPlaceholder);
__decorateElement$b(_init$b, 4, "hoverlabelActive", _hoverlabelActive_dec, _NteInput, _hoverlabelActive);
__decorateElement$b(_init$b, 4, "_value", __value_dec, _NteInput, __value);
__decorateElement$b(_init$b, 4, "_labelFor", __labelFor_dec, _NteInput, __labelFor);
__decorateElement$b(_init$b, 1, "onMustRevalidateInternal", _onMustRevalidateInternal_dec, _NteInput);
__decorateElement$b(_init$b, 1, "onClick", _onClick_dec$1, _NteInput);
__decorateElement$b(_init$b, 1, "onShadowChange", _onShadowChange_dec, _NteInput);
__decorateElement$b(_init$b, 1, "onChange", _onChange_dec, _NteInput);
__decorateElement$b(_init$b, 1, "onInput", _onInput_dec, _NteInput);
_NteInput = __decorateElement$b(_init$b, 0, "NteInput", _NteInput_decorators, _NteInput);
_NteInput.formAssociated = true;
_NteInput.styles = [r(style$k), r(resetStyle)];
_NteInput.plugins = /* @__PURE__ */ new Map();
__runInitializers$b(_init$b, 1, _NteInput);
let NteInput = _NteInput;
class NteInputPluginInterface {
  constructor(host) {
    this.host = host;
  }
  connected() {
  }
  disconnected() {
  }
  updated(_changedProperties) {
  }
  onClick(e2) {
  }
  onInput(e2) {
  }
  /**
   * Returns the actual form element that is associated with this plugin.
   */
  getFormElement() {
    return null;
  }
  getValue() {
    return this.host.value;
  }
  setValue(value) {
    this.host.value = value;
  }
  getStyleSheet() {
    return null;
  }
  getFormValue() {
    return void 0;
  }
  getSelectedOptions() {
    return [];
  }
  hasValue() {
    return false;
  }
  hasPlaceholder() {
    return false;
  }
  isHoverlabelActive() {
    return false;
  }
  isLabelHidden() {
    return false;
  }
  getControlId() {
    return this.getFormElement()?.id || NTE_INPUT_CONTROL_ID;
  }
  getLabelFor() {
    return this.getControlId();
  }
  isValid() {
    return null;
  }
  onChange(newValue) {
  }
  /**
   * Called once on startup to determine the initial value of the value propierty.
   *
   * Will normaly return the value or the Property value
   */
  getInitValue() {
    return this.host.getAttribute("value") ?? null;
  }
  onHostAttributeChange(_name2, _oldValue, _newValue) {
  }
  formResetCallback() {
  }
  formDisabledCallback(_disabled2) {
  }
}
class AbstractNteInputPlugin extends NteInputPluginInterface {
  #eventController;
  query(selector) {
    return this.host.renderRoot?.querySelector(selector) ?? null;
  }
  queryAll(selector) {
    return Array.from(this.host.renderRoot?.querySelectorAll(selector) ?? []);
  }
  getHostAttribute(name, fallback = "") {
    return this.host.getAttribute(name) ?? fallback;
  }
  hasHostAttribute(name) {
    return this.host.hasAttribute(name);
  }
  normalizeStringValue(value) {
    if (value === null || value === void 0) {
      return "";
    }
    return String(value);
  }
  createFormData(values) {
    if (!this.host.name || values.length === 0) {
      return null;
    }
    const formData = new FormData();
    values.forEach((value) => {
      formData.append(this.host.name, value);
    });
    return formData;
  }
  syncHostState() {
    this.host.syncPluginState();
  }
  disconnected() {
    this.#eventController?.abort();
  }
  getFormValue() {
    const value = this.getValue();
    if (Array.isArray(value)) {
      return this.createFormData(value);
    }
    if (typeof value === "boolean") {
      return value ? this.getHostAttribute("value", "on") : null;
    }
    if (value === null || value === void 0) {
      return null;
    }
    return String(value);
  }
  hasValue() {
    const value = this.getValue();
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    if (typeof value === "boolean") {
      return value;
    }
    return this.normalizeStringValue(value).trim().length > 0;
  }
  hasPlaceholder() {
    return this.hasHostAttribute("placeholder");
  }
  isHoverlabelActive() {
    return this.hasPlaceholder() || this.hasValue();
  }
}
const style$j = "/* checkbox styling is applied via light DOM mixins */";
const _DefaultCheckboxPlugin = class _DefaultCheckboxPlugin extends AbstractNteInputPlugin {
  getStyleSheet() {
    return style$j;
  }
  get checkbox() {
    return this.query('input[type="checkbox"]');
  }
  getFormElement() {
    return this.checkbox;
  }
  getInitValue() {
    return this.host.hasAttribute("checked");
  }
  onInput() {
    this.host.value = this.checkbox?.checked;
  }
  // Native Auswahlfelder kennen kein readonly; die interne Sperre erhält den Formularwert des Hosts.
  render(context) {
    const { element } = context;
    return b`
      <label part="checkbox-label" for=${NTE_INPUT_CONTROL_ID}>
        <input
          id=${NTE_INPUT_CONTROL_ID}
          part="checkbox-input"
          type="checkbox"
          aria-describedby=${NTE_INPUT_VALIDATION_ID}
          name=${element.getAttribute("name") ?? ""}
          value=${element.getAttribute("value") ?? "on"}
          ?checked=${this.host.value === true}
          ?disabled=${element.hasAttribute("disabled") || element.hasAttribute("readonly")}
          ?required=${element.hasAttribute("required")}
        />
        <span part="checkbox-text">${element.label}</span>
      </label>
    `;
  }
  isValid() {
    return this.checkbox?.checkValidity() ?? null;
  }
  getSelectedOptions() {
    if (!this.getValue()) {
      return [];
    }
    return [
      {
        value: this.getHostAttribute("value", this.checkbox?.value ?? "on"),
        label: this.host.label || this.getHostAttribute("value", "on")
      }
    ];
  }
  hasPlaceholder() {
    return false;
  }
  isHoverlabelActive() {
    return false;
  }
  isLabelHidden() {
    return true;
  }
};
_DefaultCheckboxPlugin.types = ["checkbox"];
let DefaultCheckboxPlugin = _DefaultCheckboxPlugin;
function getWrappedOptions(element) {
  const optionsWrapper = element.querySelector("options");
  if (!(optionsWrapper instanceof HTMLElement)) {
    return [];
  }
  return Array.from(optionsWrapper.querySelectorAll("option")).map(
    (sourceOption) => ({
      value: sourceOption.value,
      label: sourceOption.label || sourceOption.textContent || sourceOption.value,
      disabled: sourceOption.disabled,
      html: sourceOption.innerHTML || void 0
    })
  );
}
function resolveInputOptions(element) {
  return element.options && element.options.length > 0 ? element.options : getWrappedOptions(element);
}
function parseMultipleValues(value) {
  const trimmed = value.trim();
  if (!trimmed) {
    return [];
  }
  if (trimmed.startsWith("[")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map((item) => String(item));
      }
    } catch {
    }
  }
  return trimmed.split(/[;,]/).map((part) => part.trim()).filter(Boolean);
}
function normalizeValueArray(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item)).filter(Boolean);
  }
  if (typeof value === "boolean") {
    return value ? ["true"] : [];
  }
  if (value === null || value === void 0) {
    return [];
  }
  return parseMultipleValues(String(value));
}
function resolveSelectedInputOptions(element, selectedValues) {
  const valueSet = new Set(Array.from(selectedValues).map((value) => String(value)));
  return resolveInputOptions(element).filter((option) => valueSet.has(option.value));
}
const style$i = "select {\n  width: 100%;\n  min-width: 0;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n:host(.inline) select {\n  width: auto;\n  min-width: max-content;\n}";
const _DefaultSelectPlugin = class _DefaultSelectPlugin extends AbstractNteInputPlugin {
  getStyleSheet() {
    return style$i;
  }
  get select() {
    return this.query("select");
  }
  getFormElement() {
    return this.select;
  }
  // Native Auswahlfelder kennen kein readonly; die interne Sperre erhält den Formularwert des Hosts.
  render(context) {
    const { element } = context;
    const options = resolveInputOptions(element);
    const selectedValue = normalizeValueArray(this.host.value)[0] ?? "";
    return b`
      <select
        id=${NTE_INPUT_CONTROL_ID}
        part="select"
        name=${element.getAttribute("name") ?? ""}
        aria-describedby=${NTE_INPUT_VALIDATION_ID}
        ?disabled=${element.hasAttribute("disabled") || element.hasAttribute("readonly")}
        ?required=${element.hasAttribute("required")}
      >
        ${options.map(
      (option) => b`
            <option
              value=${option.value}
              ?disabled=${Boolean(option.disabled)}
              ?selected=${option.value === selectedValue}
            >
              ${this.renderOptionLabel(option) ?? A}
            </option>
          `
    )}
      </select>
    `;
  }
  onInput() {
    this.host.value = this.select?.value ?? "";
  }
  onChange() {
    this.onInput();
  }
  isValid() {
    return this.select?.checkValidity() ?? null;
  }
  getValue() {
    return this.host.value;
  }
  getSelectedOptions() {
    return resolveSelectedInputOptions(this.host, normalizeValueArray(this.host.value));
  }
  renderOptionLabel(option) {
    return option.html ? o$1(option.html) : option.label;
  }
};
_DefaultSelectPlugin.types = ["select"];
let DefaultSelectPlugin = _DefaultSelectPlugin;
const style$h = "[part~=option-list] {\n  width: 100%;\n}";
const _DefaultSelectRadioPlugin = class _DefaultSelectRadioPlugin extends AbstractNteInputPlugin {
  getStyleSheet() {
    return style$h;
  }
  get inputs() {
    return this.queryAll("#control input");
  }
  getFormElement() {
    return this.inputs[0] ?? null;
  }
  getInitValue() {
    return this.normalizeSelectedValues(this.host.getAttribute("value"));
  }
  // Native Auswahlfelder kennen kein readonly; die interne Sperre erhält den Formularwert des Hosts.
  render(context) {
    const { element } = context;
    const options = resolveInputOptions(element);
    const selectedValues = new Set(this.normalizeSelectedValues(this.host.value));
    const inputType = element.multiple ? "checkbox" : "radio";
    const groupName = element.getAttribute("name") ?? `${NTE_INPUT_CONTROL_ID}-group`;
    const role = element.multiple ? "group" : "radiogroup";
    return b`
      <div
        id=${`${NTE_INPUT_CONTROL_ID}-group`}
        part="option-list"
        role=${role}
        aria-describedby=${NTE_INPUT_VALIDATION_ID}
      >
        ${options.map((option, index) => {
      const optionId = index === 0 ? NTE_INPUT_CONTROL_ID : `${NTE_INPUT_CONTROL_ID}-${index}`;
      return b`
            <label part="option-label" for=${optionId}>
              <input
                id=${optionId}
                part="option-input"
                type=${inputType}
                name=${groupName}
                value=${option.value}
                aria-describedby=${NTE_INPUT_VALIDATION_ID}
                ?checked=${selectedValues.has(option.value)}
                ?disabled=${Boolean(option.disabled) || element.hasAttribute("disabled") || element.hasAttribute("readonly")}
                ?required=${!element.multiple && element.hasAttribute("required")}
              />
              <span part="option-text">${this.renderOptionLabel(option) ?? A}</span>
            </label>
          `;
    })}
      </div>
    `;
  }
  onInput() {
    this.host.value = this.getSelectedValuesFromInputs();
  }
  onChange() {
    this.onInput();
  }
  getValue() {
    return this.host.value;
  }
  getFormValue() {
    return this.createFormData(this.normalizeSelectedValues(this.host.value));
  }
  getSelectedOptions() {
    return resolveSelectedInputOptions(this.host, this.normalizeSelectedValues(this.host.value));
  }
  hasPlaceholder() {
    return false;
  }
  isHoverlabelActive() {
    return this.hasValue();
  }
  normalizeSelectedValues(value) {
    const values = normalizeValueArray(value);
    return this.host.multiple ? values : values.slice(0, 1);
  }
  getSelectedValuesFromInputs() {
    return this.inputs.filter((input) => input.checked).map((input) => input.value);
  }
  renderOptionLabel(option) {
    return option.html ? o$1(option.html) : option.label;
  }
};
_DefaultSelectRadioPlugin.types = ["select-radio"];
let DefaultSelectRadioPlugin = _DefaultSelectRadioPlugin;
const style$g = '.switch {\n  --switch-width: 2.5rem;\n  --switch-height: 1.5rem;\n  --switch-thumb-size: calc(var(--switch-height) - (var(--switch-padding) * 2));\n  --switch-thumb-offset: var(--switch-padding);\n  --switch-thumb-translate: calc(var(--switch-width) - var(--switch-height));\n  --switch-padding: 0.1875rem;\n  --switch-gap: 0.625rem;\n  --switch-off-bg: var(--nt-gray-400, #adb5bd);\n  --switch-on-bg: var(--nt-primary, #0d6efd);\n  --switch-off-border: transparent;\n  --switch-on-border: transparent;\n  --switch-thumb-bg: #fff;\n  --switch-thumb-checked-bg: #fff;\n  --switch-radius: 999px;\n  --switch-thumb-radius: 50%;\n  --switch-focus-ring: var(--nt-focus-ring, rgba(13, 110, 253, 0.35));\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: var(--switch-gap);\n  color: var(--nt-text, currentColor);\n  line-height: 1.25;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n.switch:has(.switch-input:disabled) {\n  cursor: not-allowed;\n}\n.switch.switch-theme {\n  --switch-theme-icon-color: var(--nt-text-muted, #6c757d);\n  --switch-theme-icon-active-color: var(--nt-primary, #0d6efd);\n  --switch-theme-icon-inactive-opacity: 0.42;\n}\n.switch.switch-theme .switch-control {\n  order: 1;\n}\n.switch.switch-theme .switch-label {\n  order: 3;\n}\n.switch.switch-theme [data-switch-theme-icon] {\n  display: inline-grid;\n  place-items: center;\n  width: var(--switch-theme-icon-size, var(--switch-height));\n  height: var(--switch-theme-icon-size, var(--switch-height));\n  flex: 0 0 auto;\n  transition: color 160ms ease, opacity 160ms ease, transform 160ms ease;\n}\n.switch.switch-theme [data-switch-theme-icon] svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.switch.switch-theme [data-switch-theme-icon=light] {\n  order: 0;\n}\n.switch.switch-theme [data-switch-theme-icon=dark] {\n  order: 2;\n}\n.switch.switch-theme .switch-input:not(:checked) ~ [data-switch-theme-icon=light],\n.switch.switch-theme .switch-input:checked ~ [data-switch-theme-icon=dark] {\n  color: var(--switch-theme-icon-active-color);\n  opacity: 1;\n  transform: scale(1);\n}\n.switch.switch-theme .switch-input:checked ~ [data-switch-theme-icon=light],\n.switch.switch-theme .switch-input:not(:checked) ~ [data-switch-theme-icon=dark] {\n  color: var(--switch-theme-icon-color);\n  opacity: var(--switch-theme-icon-inactive-opacity);\n  transform: scale(0.9);\n}\n@media (prefers-reduced-motion: reduce) {\n  .switch.switch-theme [data-switch-theme-icon] {\n    transition-duration: 0.01ms;\n  }\n}\n@media (forced-colors: active) {\n  .switch.switch-theme .switch-input:not(:checked) ~ [data-switch-theme-icon=light],\n  .switch.switch-theme .switch-input:checked ~ [data-switch-theme-icon=dark] {\n    color: Highlight;\n  }\n  .switch.switch-theme .switch-input:checked ~ [data-switch-theme-icon=light],\n  .switch.switch-theme .switch-input:not(:checked) ~ [data-switch-theme-icon=dark] {\n    color: GrayText;\n  }\n}\n\n.switch-input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n  border: 0;\n}\n.switch-input:checked + .switch-control {\n  background-color: var(--switch-on-bg);\n  border-color: var(--switch-on-border);\n}\n.switch-input:checked + .switch-control::after {\n  background-color: var(--switch-thumb-checked-bg);\n  transform: translateX(var(--switch-thumb-translate));\n}\n.switch-input:focus-visible + .switch-control {\n  outline: 0;\n  box-shadow: 0 0 0 0.25rem var(--switch-focus-ring);\n}\n.switch-input:disabled + .switch-control, .switch-input:disabled ~ .switch-label {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (forced-colors: active) {\n  .switch-input:focus-visible + .switch-control {\n    outline: 2px solid Highlight;\n    outline-offset: 2px;\n    box-shadow: none;\n  }\n  .switch-input:checked + .switch-control {\n    background-color: Highlight;\n    border-color: Highlight;\n  }\n}\n\n.switch-control {\n  position: relative;\n  flex: 0 0 auto;\n  width: var(--switch-width);\n  height: var(--switch-height);\n  box-sizing: border-box;\n  background-color: var(--switch-off-bg);\n  border: var(--nt-border-width, 1px) solid var(--switch-off-border);\n  border-radius: var(--switch-radius);\n  transition: background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;\n}\n.switch-control::after {\n  content: "";\n  position: absolute;\n  top: var(--switch-thumb-offset);\n  left: var(--switch-thumb-offset);\n  width: var(--switch-thumb-size);\n  height: var(--switch-thumb-size);\n  box-sizing: border-box;\n  background-color: var(--switch-thumb-bg);\n  border-radius: var(--switch-thumb-radius);\n  box-shadow: var(--switch-thumb-shadow, 0 1px 2px rgba(0, 0, 0, 0.28));\n  transition: transform 160ms ease, background-color 160ms ease;\n}\n@media (prefers-reduced-motion: reduce) {\n  .switch-control, .switch-control::after {\n    transition-duration: 0.01ms;\n  }\n}\n@media (forced-colors: active) {\n  .switch-control {\n    border-color: ButtonText;\n  }\n  .switch-control::after {\n    background-color: ButtonText;\n    box-shadow: none;\n  }\n}\n\n.switch-label {\n  user-select: none;\n}';
const _DefaultSwitchPlugin = class _DefaultSwitchPlugin extends DefaultCheckboxPlugin {
  getStyleSheet() {
    return style$g;
  }
  isLabelHidden() {
    return false;
  }
  render(context) {
    const { element } = context;
    return b`
      <label class="switch" part="switch">
        <input
          id=${NTE_INPUT_CONTROL_ID}
          class="switch-input"
          part="switch-input"
          type="checkbox"
          role="switch"
          aria-label=${element.getAttribute("aria-label") ?? element.label.trim()}
          aria-describedby=${NTE_INPUT_VALIDATION_ID}
          name=${element.getAttribute("name") ?? ""}
          value=${element.getAttribute("value") ?? "on"}
          ?checked=${element.value === true}
          ?disabled=${element.hasAttribute("disabled") || element.hasAttribute("readonly")}
          ?required=${element.hasAttribute("required")}
        />
        <span class="switch-control" part="switch-control" aria-hidden="true"></span>
        <!-- Der optionale Status-Text wechselt mit dem Boolean-Wert, ohne das Formular-Label zu verändern. -->
        ${element.value === true ? element.onText ? b`<span class="switch-label" part="switch-label">${element.onText}</span>` : null : element.offText ? b`<span class="switch-label" part="switch-label">${element.offText}</span>` : null}
      </label>
    `;
  }
};
_DefaultSwitchPlugin.types = ["switch"];
let DefaultSwitchPlugin = _DefaultSwitchPlugin;
const style$f = "input {\n  width: 100%;\n  min-width: 0;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  border: 0;\n  outline: 0;\n}";
const _DefaultTextPlugin = class _DefaultTextPlugin extends AbstractNteInputPlugin {
  getStyleSheet() {
    return style$f;
  }
  get input() {
    return this.query("input");
  }
  getFormElement() {
    return this.input;
  }
  onInput() {
    this.host.value = this.input?.value;
  }
  render(context) {
    const { element, type } = context;
    return b`
      <input
        id=${NTE_INPUT_CONTROL_ID}
        part="input"
        type=${type}
        name=${element.getAttribute("name") ?? ""}
        .value=${this.normalizeStringValue(this.host.value)}
        placeholder=${element.getAttribute("placeholder") ?? ""}
        aria-describedby=${NTE_INPUT_VALIDATION_ID}
        min=${o(element.getAttribute("min") ?? void 0)}
        max=${o(element.getAttribute("max") ?? void 0)}
        pattern=${o(element.getAttribute("pattern") ?? void 0)}
        minlength=${o(element.getAttribute("minlength") ?? void 0)}
        maxlength=${o(element.getAttribute("maxlength") ?? void 0)}
        ?disabled=${element.hasAttribute("disabled")}
        ?readonly=${element.hasAttribute("readonly")}
        ?required=${element.hasAttribute("required")}
      />
    `;
  }
  isValid() {
    return this.query("input").checkValidity();
  }
  getValue() {
    return this.input?.value;
  }
};
_DefaultTextPlugin.types = ["text", "email", "password", "date"];
let DefaultTextPlugin = _DefaultTextPlugin;
const style$e = "textarea {\n  width: 100%;\n  min-width: 0;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  overflow-y: hidden;\n  resize: none;\n}";
const _DefaultTextareaPlugin = class _DefaultTextareaPlugin extends AbstractNteInputPlugin {
  getStyleSheet() {
    return style$e;
  }
  get textarea() {
    return this.query("textarea");
  }
  getFormElement() {
    return this.textarea;
  }
  render(context) {
    const { element } = context;
    return b`
      <textarea
        id=${NTE_INPUT_CONTROL_ID}
        part="textarea"
        rows=${element.getAttribute("rows") ?? "3"}
        name=${element.getAttribute("name") ?? ""}
        .value=${this.normalizeStringValue(this.host.value)}
        placeholder=${element.getAttribute("placeholder") ?? ""}
        aria-describedby=${NTE_INPUT_VALIDATION_ID}
        minlength=${o(element.getAttribute("minlength") ?? void 0)}
        maxlength=${o(element.getAttribute("maxlength") ?? void 0)}
        ?disabled=${element.hasAttribute("disabled")}
        ?readonly=${element.hasAttribute("readonly")}
        ?required=${element.hasAttribute("required")}
      ></textarea>
    `;
  }
  updated() {
    this.clampHeight();
  }
  onInput() {
    this.host.value = this.textarea?.value ?? "";
    this.clampHeight();
  }
  getValue() {
    return this.host.value;
  }
  isValid() {
    return this.textarea?.checkValidity() ?? null;
  }
  clampHeight() {
    const textarea = this.textarea;
    if (!textarea) {
      return;
    }
    textarea.style.height = "auto";
    const styles = getComputedStyle(textarea);
    const minHeight = this.parsePixelValue(textarea.style.minHeight || styles.minHeight) ?? 0;
    const maxHeight = this.parsePixelValue(textarea.style.maxHeight || styles.maxHeight) ?? Number.POSITIVE_INFINITY;
    const targetHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
    textarea.style.height = `${targetHeight}px`;
    textarea.style.overflowY = textarea.scrollHeight > maxHeight ? "auto" : "hidden";
  }
  parsePixelValue(value) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : void 0;
  }
};
_DefaultTextareaPlugin.types = ["textarea"];
let DefaultTextareaPlugin = _DefaultTextareaPlugin;
const style$d = "[part~=token-list] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n[part~=token-input] {\n  min-width: 0;\n  color: inherit;\n  font: inherit;\n  background: transparent;\n  border: 0;\n  border-radius: 0;\n  outline: 0;\n  box-shadow: none;\n}";
const _DefaultTokenInputPlugin = class _DefaultTokenInputPlugin extends AbstractNteInputPlugin {
  constructor() {
    super(...arguments);
    this.handleDraftInput = () => {
      this.syncHostState();
    };
    this.handleDraftCommit = () => {
      this.commitDraftValue();
    };
    this.handleKeydown = (event) => {
      if (event.key === "Enter" || event.key === "," || event.key === ";") {
        event.preventDefault();
        this.commitDraftValue();
        return;
      }
      if (event.key === "Backspace" && !this.input?.value) {
        const tokens = this.normalizeSelectedValues(this.host.value);
        const lastToken = tokens[tokens.length - 1];
        if (lastToken) {
          event.preventDefault();
          this.removeToken(lastToken);
        }
      }
    };
  }
  getStyleSheet() {
    return style$d;
  }
  get input() {
    return this.query('input[type="text"]');
  }
  getFormElement() {
    return this.input;
  }
  get isStrict() {
    return this.host.hasAttribute("strict");
  }
  getInitValue() {
    return this.normalizeSelectedValues(this.host.getAttribute("value"));
  }
  render(context) {
    const { element } = context;
    const tokens = this.normalizeSelectedValues(this.host.value);
    const availableOptions = this.getAvailableOptions(tokens);
    return b`
      <div part="token-list" aria-describedby=${NTE_INPUT_VALIDATION_ID}>
        ${tokens.map((token) => {
      const option = this.resolveOption(token);
      const label = option?.html ? o$1(option.html) : option?.label ?? token;
      return b`
            <span part="token">
              <span part="token-text">${label ?? A}</span>
              <button
                type="button"
                part="token-remove"
                aria-label=${`Token "${option?.label ?? token}" entfernen`}
                ?disabled=${element.hasAttribute("disabled") || element.hasAttribute("readonly")}
                @click=${() => this.removeToken(token)}
              >
                ×
              </button>
            </span>
          `;
    })}

        <input
          id=${NTE_INPUT_CONTROL_ID}
          part="token-input"
          type="text"
          list=${availableOptions.length > 0 ? `${NTE_INPUT_CONTROL_ID}-options` : ""}
          placeholder=${element.getAttribute("placeholder") ?? ""}
          aria-describedby=${NTE_INPUT_VALIDATION_ID}
          ?disabled=${element.hasAttribute("disabled")}
          ?readonly=${element.hasAttribute("readonly")}
          @input=${this.handleDraftInput}
          @change=${this.handleDraftCommit}
          @blur=${this.handleDraftCommit}
          @keydown=${this.handleKeydown}
        />
      </div>

      ${availableOptions.length > 0 ? b`
            <datalist id=${`${NTE_INPUT_CONTROL_ID}-options`}>
              ${availableOptions.map((option) => b`<option value=${option.value}>${option.label}</option>`)}
            </datalist>
          ` : A}
    `;
  }
  onInput(e2) {
    if (e2.target !== this.input) {
      return;
    }
    this.syncHostState();
  }
  onChange(e2) {
    if (e2.target !== this.input) {
      return;
    }
    this.commitDraftValue();
  }
  getValue() {
    return this.normalizeSelectedValues(this.host.value);
  }
  getSelectedOptions() {
    return this.normalizeSelectedValues(this.host.value).map((value) => {
      const option = this.resolveOption(value);
      return option ?? { value, label: value };
    });
  }
  isValid() {
    if (!this.host.hasAttribute("required") || this.host.hasAttribute("disabled")) {
      return true;
    }
    return this.normalizeSelectedValues(this.host.value).length > 0;
  }
  isHoverlabelActive() {
    return this.hasValue() || this.getDraftValue().length > 0 || this.host.shadowRoot?.activeElement === this.input;
  }
  formResetCallback() {
    this.host.value = this.getInitValue();
    this.clearDraftValue();
  }
  updated() {
    const normalizedValue = this.normalizeSelectedValues(this.host.value);
    if (!this.areValuesEqual(this.host.value, normalizedValue)) {
      this.host.value = normalizedValue;
    }
  }
  normalizeSelectedValues(value) {
    const values = Array.from(new Set(normalizeValueArray(value)));
    if (!this.isStrict) {
      return values;
    }
    return values.filter((item) => this.resolveOption(item));
  }
  getDraftValue() {
    return this.input?.value.trim() ?? "";
  }
  clearDraftValue() {
    if (this.input) {
      this.input.value = "";
    }
  }
  commitDraftValue() {
    this.addTokens(this.getDraftValue());
  }
  addTokens(rawValue) {
    if (!rawValue || this.host.hasAttribute("disabled") || this.host.hasAttribute("readonly")) {
      return;
    }
    const nextValues = this.normalizeSelectedValues([
      ...this.normalizeSelectedValues(this.host.value),
      ...rawValue.split(/[;,\n]/).map((part) => part.trim()).filter(Boolean)
    ]);
    this.host.value = nextValues;
    this.clearDraftValue();
    this.dispatchValueEvents();
  }
  removeToken(token) {
    if (this.host.hasAttribute("disabled") || this.host.hasAttribute("readonly")) {
      return;
    }
    this.host.value = this.normalizeSelectedValues(this.host.value).filter((value) => value !== token);
    this.dispatchValueEvents();
    this.input?.focus();
  }
  getAvailableOptions(tokens) {
    const tokenSet = new Set(tokens);
    return resolveInputOptions(this.host).filter((option) => !option.disabled && !tokenSet.has(option.value));
  }
  resolveOption(value) {
    return resolveInputOptions(this.host).find((option) => option.value === value) ?? null;
  }
  areValuesEqual(left, right) {
    const leftValues = normalizeValueArray(left);
    return leftValues.length === right.length && leftValues.every((value, index) => value === right[index]);
  }
  dispatchValueEvents() {
    this.host.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
    this.host.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }
};
_DefaultTokenInputPlugin.types = ["token-input"];
let DefaultTokenInputPlugin = _DefaultTokenInputPlugin;
NteInput.registerPlugin(DefaultTextPlugin);
NteInput.registerPlugin(DefaultTextareaPlugin);
NteInput.registerPlugin(DefaultSelectPlugin);
NteInput.registerPlugin(DefaultSelectRadioPlugin);
NteInput.registerPlugin(DefaultCheckboxPlugin);
NteInput.registerPlugin(DefaultSwitchPlugin);
NteInput.registerPlugin(DefaultTokenInputPlugin);
const style$c = "/* The ShadowDOM Styles */\n:host {\n  --image-aspect-ratio: var(--aspect-ratio, 16 / 9);\n  display: block;\n}\n\n#wrapper {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n*:has(> .slot-empty) {\n  display: none !important;\n}\n\n#header {\n  order: 2;\n}\n\n#image {\n  aspect-ratio: var(--image-aspect-ratio);\n  width: 100%;\n  height: auto;\n  display: block;\n}\n#image slot::slotted(p) {\n  display: contents;\n}\n#image {\n  overflow: hidden;\n  order: 1;\n  z-index: 2;\n  isolation: isolate;\n  position: relative;\n}\n#image #gradient {\n  border-radius: inherit;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n#content {\n  z-index: 3;\n  order: 50;\n  flex-grow: 1;\n}\n\n#footer {\n  order: 999;\n}\n\n#wrapper {\n  --_nte-card-first-bleed: var(--_nte-card-bleed-image-start, 0);\n}\n\n#wrapper:has(#header > .slot-empty):has(#content > .slot-empty):has(#footer > .slot-empty) {\n  --_nte-card-last-bleed: var(--_nte-card-bleed-image-end, 0);\n}\n\n#wrapper:has(#image > .slot-empty) {\n  --_nte-card-first-bleed: var(--_nte-card-bleed-header-start, 0);\n}\n\n#wrapper:has(#content > .slot-empty):has(#footer > .slot-empty) {\n  --_nte-card-last-bleed: var(--_nte-card-bleed-header-end, 0);\n}\n\n#wrapper:has(#image > .slot-empty):has(#header > .slot-empty) {\n  --_nte-card-first-bleed: var(--_nte-card-bleed-content-start, 0);\n}\n\n#wrapper:has(#footer > .slot-empty) {\n  --_nte-card-last-bleed: var(--_nte-card-bleed-content-end, 0);\n}\n\n#wrapper:has(#image > .slot-empty):has(#header > .slot-empty):has(#content > .slot-empty) {\n  --_nte-card-first-bleed: var(--_nte-card-bleed-footer-start, 0);\n}\n\n#wrapper {\n  --_nte-card-last-bleed: var(--_nte-card-bleed-footer-end, 0);\n}\n\n#wrapper:has(#image > .slot-empty):has(#header > .slot-empty):has(#content > .slot-empty):has(#footer > .slot-empty) {\n  display: none !important;\n}";
var __create$a = Object.create;
var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __knownSymbol$a = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$a = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$a = (target, value) => __defProp$c(target, "name", { value, configurable: true });
var __decoratorStart$a = (base) => [, , , __create$a(base?.[__knownSymbol$a("metadata")] ?? null)];
var __decoratorStrings$a = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$a = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$a("Function expected") : fn;
var __decoratorContext$a = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$a[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$a("Already initialized") : fns.push(__expectFn$a(fn || null)) });
var __decoratorMetadata$a = (array, target) => __defNormalProp$a(target, __knownSymbol$a("metadata"), array[3]);
var __runInitializers$a = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$a = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$a[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$e(k < 4 ? target : { get [name]() {
    return __privateGet$8(this, extra);
  }, set [name](x) {
    return __privateSet$8(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$a(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$a(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$a(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$8(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$8 : __privateMethod$8)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$8(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$a(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$a("Object expected");
    else __expectFn$a(fn = it.get) && (desc.get = fn), __expectFn$a(fn = it.set) && (desc.set = fn), __expectFn$a(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$a(array, target), desc && __defProp$c(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$8 = (obj, member, msg) => member.has(obj) || __typeError$a("Cannot " + msg);
var __privateIn$8 = (member, obj) => Object(obj) !== obj ? __typeError$a('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$8 = (obj, member, getter) => (__accessCheck$8(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$8 = (obj, member, value) => member.has(obj) ? __typeError$a("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$8 = (obj, member, value, setter) => (__accessCheck$8(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$8 = (obj, member, method) => (__accessCheck$8(obj, member, "access private method"), method);
var _name_dec$3, __count_dec, _a$a, _NteCardElement_decorators, _init$a, __count, _name$3, __linkAnchor;
_NteCardElement_decorators = [t("nte-card")];
class NteCardElement extends (_a$a = nextrap_element({
  breakpoints: true,
  eventBinding: true,
  slotVisibility: true,
  subLayoutApply: true
}), __count_dec = [r$1()], _name_dec$3 = [n({ type: String, reflect: true })], _a$a) {
  constructor() {
    super(...arguments);
    __privateAdd$8(this, __count, __runInitializers$a(_init$a, 8, this, 0)), __runInitializers$a(_init$a, 11, this);
    __privateAdd$8(this, _name$3, __runInitializers$a(_init$a, 12, this, "nte-card")), __runInitializers$a(_init$a, 15, this);
    __privateAdd$8(this, __linkAnchor, null);
    this.onLinkSlotChange = (e2) => {
      this.updateClickableFromLinkSlot(e2.target);
    };
    this.onImageSlotChange = (e2) => {
      this.applyImageSlotDefaults(e2.target);
      this.updateRegionState();
    };
    this.onRegionSlotChange = () => this.updateRegionState();
  }
  get _linkAnchor() {
    return __privateGet$8(this, __linkAnchor);
  }
  set _linkAnchor(_) {
    __privateSet$8(this, __linkAnchor, _);
  }
  getImageSlot() {
    return this.shadowRoot?.querySelector('slot[name="image"]');
  }
  findAnchorWithHref(root) {
    if (root instanceof HTMLAnchorElement && root.hasAttribute("href")) return root;
    const a = root.querySelector("a[href]");
    return a instanceof HTMLAnchorElement ? a : null;
  }
  updateClickableFromLinkSlot(slot) {
    const linkSlot = slot ?? this.shadowRoot?.querySelector('slot[name="link"]');
    if (!linkSlot) {
      this._linkAnchor = null;
      this.classList.remove("clickable");
      return;
    }
    const assigned = linkSlot.assignedElements({ flatten: true });
    let anchor = null;
    for (const el of assigned) {
      anchor = this.findAnchorWithHref(el);
      if (anchor) break;
    }
    this._linkAnchor = anchor;
    this.classList.toggle("clickable", !!this._linkAnchor);
    this.requestUpdate();
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    this.updateClickableFromLinkSlot();
    this.applyImageSlotDefaults();
    this.updateRegionState();
  }
  // Spiegelt die tatsächliche Slot-Belegung für Theme-Grids, auch bei reinen Textknoten.
  // Das Attribut ist ein abgeleiteter Zustand und wird nicht von Autoren gesetzt.
  updateRegionState() {
    const regions = ["image", "header", "content", "footer"].filter((region) => {
      const slot = this.shadowRoot?.querySelector(`#${region} > slot`);
      return slot?.assignedNodes({ flatten: true }).some(
        (node) => node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE && !!node.textContent?.trim()
      );
    });
    this.setAttribute("data-card-regions", regions.join(" "));
  }
  applyImageSlotDefaults(slot) {
    const imageSlot = slot ?? this.getImageSlot();
    if (!imageSlot) return;
    for (const el of imageSlot.assignedElements({ flatten: true })) {
      const images = el instanceof HTMLImageElement ? [el] : Array.from(el.querySelectorAll("img"));
      for (const image of images) {
        if (image.style.display === "") image.style.display = "block";
        if (image.style.width === "") image.style.width = "100%";
        if (image.style.height === "") image.style.height = "100%";
        if (image.style.objectFit === "") image.style.objectFit = "cover";
      }
    }
  }
  render() {
    const wrapper = b`
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
    `;
    const href = this._linkAnchor?.getAttribute("href") || void 0;
    if (href) return b`<a part="link" id="link" href=${href}>${wrapper}</a>`;
    return wrapper;
  }
}
_init$a = __decoratorStart$a(_a$a);
__count = /* @__PURE__ */ new WeakMap();
_name$3 = /* @__PURE__ */ new WeakMap();
__linkAnchor = /* @__PURE__ */ new WeakMap();
__decorateElement$a(_init$a, 4, "_count", __count_dec, NteCardElement, __count);
__decorateElement$a(_init$a, 4, "name", _name_dec$3, NteCardElement, _name$3);
NteCardElement = __decorateElement$a(_init$a, 0, "NteCardElement", _NteCardElement_decorators, NteCardElement);
NteCardElement.styles = [r(style$c), r(resetStyle)];
__runInitializers$a(_init$a, 1, NteCardElement);
const componentStyles = `/* The ShadowDOM Styles */
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
}`;
const defaultSlideshowInterval = 5e3;
const fullsizeCloseButtonStyle = '.nxa-fullsize-close-btn {\n  appearance: none;\n  display: inline-grid;\n  place-items: center;\n  inline-size: var(--close-btn-size, 2.5rem);\n  block-size: var(--close-btn-size, 2.5rem);\n  padding: 0;\n  border: 0;\n  border-radius: var(--close-btn-border-radius, 999px);\n  background: var(--close-btn-background, transparent);\n  color: var(--close-btn-color, inherit);\n  cursor: pointer;\n  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;\n}\n.nxa-fullsize-close-btn::before {\n  content: "";\n  display: block;\n  inline-size: var(--close-btn-icon-size, 1.25rem);\n  block-size: var(--close-btn-icon-size, 1.25rem);\n  background-color: currentColor;\n  mask: var(--nt-icon-close) center/contain no-repeat;\n}\n.nxa-fullsize-close-btn:hover {\n  background: var(--close-btn-hover-background, color-mix(in srgb, currentColor 8%, transparent));\n}\n.nxa-fullsize-close-btn:focus-visible {\n  outline: 2px solid var(--nt-focus, currentColor);\n  outline-offset: 2px;\n}\n.nxa-fullsize-close-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.nxa-fullsize-close-btn {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 2;\n  color: white;\n  background-color: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(8px);\n  animation: nxa-fullsize-fade-in 0.5s ease-out 0.2s backwards;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n\n.nxa-fullsize-close-btn:hover {\n  background-color: rgba(255, 255, 255, 0.15);\n}\n\n@media (max-width: 768px) {\n  .nxa-fullsize-close-btn {\n    top: 16px;\n    right: 16px;\n  }\n}';
const cssToJson = (cssString) => {
  if (!cssString || cssString.trim() === "") {
    return {};
  }
  const splitByPropertyRegex = /(?![^(]*\))(?![^"]*"(?:[^"]*"[^"]*")*[^"]*$);/;
  const properties = cssString.split(splitByPropertyRegex);
  return properties.map((pair) => pair.trim()).filter((pair) => pair !== "").reduce(
    (acc, pair) => {
      const colonIndex = pair.indexOf(":");
      if (colonIndex === -1) {
        acc[pair.trim()] = "";
        return acc;
      }
      const key = pair.substring(0, colonIndex).trim();
      const value = pair.substring(colonIndex + 1).trim();
      if (key === "") {
        return acc;
      }
      acc[key] = value;
      return acc;
    },
    {}
  );
};
const parseValue = (value) => {
  if (!value) {
    return { value: 0, unit: "%" };
  }
  const match = value.match(/^([\d.-]+)(%|px|em|rem|vh|vw)?$/);
  if (!match) {
    return { value: 0, unit: "%" };
  }
  return {
    value: parseFloat(match[1]),
    unit: match[2] || "%"
  };
};
const cropImage = (child, cropData, referenceSize) => {
  child.style.objectFit = "cover";
  if (cropData["position"]) {
    child.style.objectPosition = cropData["position"];
  }
  const top = parseValue(cropData["top"]);
  const right = parseValue(cropData["right"]);
  const bottom = parseValue(cropData["bottom"]);
  const left = parseValue(cropData["left"]);
  child.style.marginTop = `-${top.value}${top.unit}`;
  child.style.marginLeft = `-${left.value}${left.unit}`;
  child.style.marginRight = `-${right.value}${right.unit}`;
  child.style.marginBottom = `-${bottom.value}${bottom.unit}`;
  if (top.unit === "%" && right.unit === "%" && bottom.unit === "%" && left.unit === "%") {
    child.style.width = "100%";
    child.style.height = "100%";
    child.style.clipPath = `polygon(
            ${left.value}% ${top.value}%,
            ${100 - right.value}% ${top.value}%,
            ${100 - right.value}% ${100 - bottom.value}%,
            ${left.value}% ${100 - bottom.value}%
        )`;
  } else {
    child.style.width = `calc(100% + ${left.value}${left.unit} + ${right.value}${right.unit})`;
    child.style.height = `calc(100% + ${top.value}${top.unit} + ${bottom.value}${bottom.unit})`;
    child.style.clipPath = `polygon(
            ${left.value}${left.unit} ${top.value}${top.unit},
            calc(100% - ${right.value}${right.unit}) ${top.value}${top.unit},
            calc(100% - ${right.value}${right.unit}) calc(100% - ${bottom.value}${bottom.unit}),
            ${left.value}${left.unit} calc(100% - ${bottom.value}${bottom.unit})
        )`;
  }
  const scale = calculateScaleFactor(cropData, referenceSize);
  child.style.transform = `scale(${scale})`;
  child.style.transformOrigin = child.style.objectPosition || "center center";
  if (cropData["transform"]) {
    const currentTransform = child.style.transform;
    child.style.transform = `${currentTransform} ${cropData["transform"]}`;
  }
};
const calculateScaleFactor = (cropData, referenceSize) => {
  const top = parseValue(cropData["top"]);
  const right = parseValue(cropData["right"]);
  const bottom = parseValue(cropData["bottom"]);
  const left = parseValue(cropData["left"]);
  if (top.unit === "%" && right.unit === "%" && bottom.unit === "%" && left.unit === "%") {
    const visibleWidth = 100 - left.value - right.value;
    const visibleHeight = 100 - top.value - bottom.value;
    const scaleX = visibleWidth > 0 ? 100 / visibleWidth : 1;
    const scaleY = visibleHeight > 0 ? 100 / visibleHeight : 1;
    return Math.max(scaleX, scaleY, 1);
  } else if (referenceSize) {
    const referenceWidth = parseValue(referenceSize.width);
    const referenceHeight = parseValue(referenceSize.height);
    let referenceWidthPixels;
    let referenceHeightPixels;
    if (referenceWidth.unit === "vw") {
      referenceWidthPixels = window.innerWidth * referenceWidth.value / 100;
    } else if (referenceWidth.unit === "vh") {
      referenceWidthPixels = window.innerHeight * referenceWidth.value / 100;
    } else if (referenceHeight.unit === "%") {
      referenceWidthPixels = window.innerWidth * referenceWidth.value / 100;
    } else {
      referenceWidthPixels = referenceWidth.value;
    }
    if (referenceHeight.unit === "vw") {
      referenceHeightPixels = window.innerWidth * referenceHeight.value / 100;
    } else if (referenceHeight.unit === "vh") {
      referenceHeightPixels = window.innerHeight * referenceHeight.value / 100;
    } else if (referenceHeight.unit === "%") {
      referenceHeightPixels = window.innerWidth * referenceHeight.value / 100;
    } else {
      referenceHeightPixels = referenceHeight.value;
    }
    const topPx = top.unit === "%" ? top.value * referenceHeightPixels / 100 : top.value;
    const rightPx = right.unit === "%" ? right.value * referenceWidthPixels / 100 : right.value;
    const bottomPx = bottom.unit === "%" ? bottom.value * referenceHeightPixels / 100 : bottom.value;
    const leftPx = left.unit === "%" ? left.value * referenceWidthPixels / 100 : left.value;
    const visibleWidth = referenceWidthPixels - leftPx - rightPx;
    const visibleHeight = referenceHeightPixels - topPx - bottomPx;
    const scaleX = visibleWidth > 0 ? referenceWidthPixels / visibleWidth : 1;
    const scaleY = visibleHeight > 0 ? referenceHeightPixels / visibleHeight : 1;
    return Math.max(scaleX, scaleY, 1);
  }
  return 1;
};
const detectMobileDevice = () => {
  const hasTouchCapability = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
  const isMobileWidth = window.innerWidth <= 768;
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileUserAgent = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  return hasTouchCapability && (isMobileWidth || isMobileUserAgent);
};
const SWIPE_THRESHOLD = 50;
const TOUCH_RESET_DELAY = 300;
const TRANSITION_DURATION = 300;
const createFullsizeView = (img, isMobileDevice, onClose, onNext, onPrev, instanceId) => {
  if (instanceId && document.querySelector(`.nxa-fullsize-container[data-instance="${instanceId}"]`)) {
    return;
  }
  if (document.querySelector(".nxa-fullsize-container")) {
    return;
  }
  const styleEl = document.createElement("style");
  styleEl.id = "nxa-fullsize-styles";
  styleEl.textContent = getFullsizeStyles(img.src);
  const container = document.createElement("div");
  container.className = "nxa-fullsize-container";
  const darkOverlay = document.createElement("div");
  darkOverlay.className = "nxa-fullsize-dark-overlay";
  const blurredBg = document.createElement("div");
  blurredBg.className = "nxa-fullsize-bg";
  const fullSizeImg = document.createElement("img");
  fullSizeImg.src = img.src;
  fullSizeImg.className = "nxa-fullsize-image";
  if (instanceId) {
    container.setAttribute("data-instance", instanceId);
    darkOverlay.setAttribute("data-instance", instanceId);
    blurredBg.setAttribute("data-instance", instanceId);
    fullSizeImg.setAttribute("data-instance", instanceId);
  }
  const closeBtn = document.createElement("button");
  closeBtn.className = "nxa-fullsize-close-btn";
  closeBtn.setAttribute("aria-label", "Close fullsize image");
  closeBtn.style.display = isMobileDevice ? "inline-grid" : "none";
  if (instanceId) {
    closeBtn.setAttribute("data-instance", instanceId);
  }
  container.appendChild(darkOverlay);
  container.appendChild(blurredBg);
  container.appendChild(fullSizeImg);
  container.appendChild(closeBtn);
  const touchState = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
    isSwiping: false,
    touchHandled: false,
    touchStartTime: 0,
    isButtonTouch: false,
    touchTarget: null
  };
  if (onNext && onPrev) {
    const prevBtn = document.createElement("button");
    prevBtn.className = "nxa-fullsize-nav-btn prev";
    prevBtn.innerHTML = "❮";
    prevBtn.addEventListener(
      "touchstart",
      (e2) => {
        e2.stopPropagation();
        touchState.isButtonTouch = true;
        touchState.touchHandled = true;
        onPrev();
      },
      { passive: false }
    );
    prevBtn.addEventListener("click", (e2) => {
      e2.stopPropagation();
      if (!touchState.touchHandled) {
        onPrev();
      }
    });
    const nextBtn = document.createElement("button");
    nextBtn.className = "nxa-fullsize-nav-btn next";
    nextBtn.innerHTML = "❯";
    nextBtn.addEventListener(
      "touchstart",
      (e2) => {
        e2.stopPropagation();
        touchState.isButtonTouch = true;
        touchState.touchHandled = true;
        onNext();
      },
      { passive: false }
    );
    nextBtn.addEventListener("click", (e2) => {
      e2.stopPropagation();
      if (!touchState.touchHandled) {
        onNext();
      }
    });
    if (instanceId) {
      prevBtn.setAttribute("data-instance", instanceId);
      nextBtn.setAttribute("data-instance", instanceId);
    }
    container.appendChild(prevBtn);
    container.appendChild(nextBtn);
  }
  const cleanup = () => {
    document.removeEventListener("keydown", keyHandler);
    darkOverlay.removeEventListener("click", cleanup);
    fullSizeImg.removeEventListener("click", handleImageClick);
    closeBtn.removeEventListener("click", handleCloseClick);
    container.removeEventListener("touchstart", handleTouchStart);
    container.removeEventListener("touchmove", handleTouchMove);
    container.removeEventListener("touchend", handleTouchEnd);
    container.removeEventListener("touchcancel", handleTouchCancel);
    container.classList.add("closing");
    setTimeout(() => {
      container.remove();
      if (!document.querySelector(".nxa-fullsize-container")) {
        document.getElementById("nxa-fullsize-styles")?.remove();
      }
      onClose?.();
    }, TRANSITION_DURATION);
  };
  const handleImageClick = () => {
    cleanup();
  };
  const handleContainerClick = (e2) => {
    const target = e2.target;
    if (target.classList.contains("nxa-fullsize-nav-btn") || target.closest(".nxa-fullsize-nav-btn")) {
      return;
    }
    if (target === closeBtn || target.closest(".nxa-fullsize-close-btn")) {
      return;
    }
    cleanup();
  };
  const handleCloseClick = (e2) => {
    e2.stopPropagation();
    cleanup();
  };
  const handleTouchStart = (e2) => {
    if (e2.touches.length > 1 || touchState.isButtonTouch) return;
    touchState.touchTarget = e2.target;
    if (touchState.touchTarget === closeBtn || touchState.touchTarget === fullSizeImg) return;
    touchState.startX = e2.touches[0].clientX;
    touchState.startY = e2.touches[0].clientY;
    touchState.isSwiping = false;
    touchState.touchHandled = false;
    touchState.touchStartTime = Date.now();
    container.classList.add("touch-active");
  };
  const handleTouchMove = (e2) => {
    if (e2.touches.length > 1 || touchState.isButtonTouch) return;
    if (touchState.touchTarget === closeBtn || touchState.touchTarget === fullSizeImg) return;
    const currentX = e2.touches[0].clientX;
    const currentY = e2.touches[0].clientY;
    const xDiff = currentX - touchState.startX;
    const yDiff = currentY - touchState.startY;
    if (!touchState.isSwiping && Math.abs(xDiff) > 10) {
      touchState.isSwiping = true;
    }
    if (touchState.isSwiping && Math.abs(xDiff) > Math.abs(yDiff)) {
      e2.preventDefault();
      touchState.touchHandled = true;
      touchState.endX = currentX;
      touchState.endY = currentY;
    }
  };
  const handleTouchEnd = () => {
    if (touchState.isButtonTouch) {
      touchState.isButtonTouch = false;
      return;
    }
    if (touchState.touchTarget === closeBtn || touchState.touchTarget === fullSizeImg) {
      cleanup();
      return;
    }
    const touchDuration = Date.now() - touchState.touchStartTime;
    const xDiff = touchState.endX - touchState.startX;
    const yDiff = touchState.endY - touchState.startY;
    touchState.isSwiping = false;
    container.classList.remove("touch-active");
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > SWIPE_THRESHOLD) {
      if (xDiff > 0 && onPrev) {
        onPrev();
      } else if (xDiff < 0 && onNext) {
        onNext();
      }
    } else if (!touchState.touchHandled && touchDuration < 300) {
      cleanup();
    }
    setTimeout(() => {
      touchState.touchHandled = false;
      touchState.endX = 0;
      touchState.endY = 0;
      touchState.touchTarget = null;
    }, TOUCH_RESET_DELAY);
  };
  const handleTouchCancel = () => {
    touchState.isSwiping = false;
    touchState.touchHandled = false;
    touchState.isButtonTouch = false;
    touchState.touchTarget = null;
    container.classList.remove("touch-active");
  };
  const keyHandler = (event) => {
    if (event.key === "Escape") {
      cleanup();
    } else if (event.key === "ArrowLeft" && onPrev) {
      onPrev();
    } else if (event.key === "ArrowRight" && onNext) {
      onNext();
    }
  };
  fullSizeImg.addEventListener("click", handleImageClick, true);
  darkOverlay.addEventListener("click", cleanup);
  container.addEventListener("click", handleContainerClick);
  closeBtn.addEventListener("click", handleCloseClick);
  container.addEventListener("touchstart", handleTouchStart, { passive: true });
  container.addEventListener("touchmove", handleTouchMove, { passive: false });
  container.addEventListener("touchend", handleTouchEnd, { passive: true });
  container.addEventListener("touchcancel", handleTouchCancel, { passive: true });
  document.addEventListener("keydown", keyHandler);
  document.head.appendChild(styleEl);
  document.body.appendChild(container);
};
const getFullsizeStyles = (imgSrc) => {
  return `
        @keyframes nxa-fullsize-fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes nxa-fullsize-scale-in {
            from {
                transform: scale(0.85);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes nxa-fullsize-blur-in {
            from {
                opacity: 0;
                filter: blur(40px);
            }
            to {
                opacity: 0.4;
                filter: blur(25px);
            }
        }

        .nxa-fullsize-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
            cursor: zoom-out;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: nxa-fullsize-fade-in 0.3s ease-out;
        }

        .nxa-fullsize-dark-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.85);
            z-index: 0;
            animation: nxa-fullsize-fade-in 0.4s ease-out;
        }

        .nxa-fullsize-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${imgSrc});
            background-size: cover;
            background-position: center;
            filter: blur(25px);
            opacity: 0.4;
            mix-blend-mode: overlay;
            z-index: 0;
            animation: nxa-fullsize-blur-in 0.8s ease-out;
        }

        .nxa-fullsize-image {
            max-width: calc(100% - 2rem);
            max-height: calc(100% - 2rem);
            object-fit: contain;
            position: relative;
            z-index: 1;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            animation: nxa-fullsize-scale-in 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
            will-change: transform, opacity;
        }

        /* Animation for closing */
        .nxa-fullsize-container.closing {
            animation: nxa-fullsize-fade-in 0.3s ease-in reverse;
        }

        .nxa-fullsize-container.closing .nxa-fullsize-image {
            animation: nxa-fullsize-scale-in 0.3s ease-in reverse;
        }

        .nxa-fullsize-nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 60px;
            background: rgba(0, 0, 0, 0.2);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto 0;
            font-size: 18px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(4px);
            z-index: 2;
            animation: nxa-fullsize-fade-in 0.5s ease-out 0.2s backwards;
        }

        .nxa-fullsize-nav-btn.prev {
            left: 0;
            border-radius: 0 4px 4px 0;
        }

        .nxa-fullsize-nav-btn.next {
            right: 0;
            border-radius: 4px 0 0 4px;
        }

        .nxa-fullsize-nav-btn:hover {
            background: rgba(0, 0, 0, 0.5);
            width: 50px;
        }

        @media (max-width: 768px) {
            .nxa-fullsize-nav-btn {
                width: 35px;
                height: 50px;
                font-size: 16px;
            }

            .nxa-fullsize-nav-btn:hover {
                width: 45px;
            }
        }

        ${fullsizeCloseButtonStyle}
    `;
};
var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$b(target, key, result);
  return result;
};
let NteImage = class extends i {
  /**
   * Creates a new NteImage component.
   * Sets default width and height if not specified.
   */
  constructor() {
    super();
    this.globalDataCrop = {};
    this.childDataCrop = [];
    this._features = [];
    this._styleSignature = "";
    this._styleObserver = null;
    this.slidesShowConfig = {};
    this.fullSize = false;
    this.roundBorders = false;
    this.debug = false;
    this.isFullSizeActive = false;
    this.currentCaption = "";
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;
    this.isMobileDevice = false;
    this.isPaused = false;
    this.slideProgress = 0;
    this.isSwiping = false;
    this.swipeDistance = 0;
    this.swipeThreshold = 50;
    this.swipeVelocityThreshold = 0.3;
    this._intervalId = null;
    this._resizeObserver = null;
    this._boundHandleResize = null;
    this._boundPauseSlideshow = null;
    this._boundResumeSlideshow = null;
    this.handleSlotChange = () => {
      this.refreshStyles();
      this.childDataCrop = [];
      Array.from(this.children).forEach((child, index) => {
        this.childDataCrop[index] = cssToJson(child?.getAttribute("data-crop") || "");
      });
      this.cropImages();
      this.updateCurrentCaption();
      this.preventImageDrag();
      if (this.slidesShowConfig.enabled) {
        this.attachSlideshowStyles();
      }
      if (this.fullSize) {
        this.removeFullsizeClickHandlers();
        this.addFullsizeClickHandlers();
      }
    };
    this.handleFullsizeClick = (event) => {
      if (!this.fullSize) return;
      const target = event.target;
      event.stopPropagation();
      this.debugLog("Image clicked for fullsize view", {
        src: target.src,
        fullSize: this.fullSize
      });
      if (this.onImageClick) {
        this.onImageClick(target, event);
        this.debugLog("onImageClick callback called");
      }
      let img;
      if (this.slidesShowConfig.enabled) {
        img = this.querySelector("img.active") || target;
        this.debugLog("Using active slide for fullsize view", {
          src: img.src
        });
      } else {
        img = target;
        this.debugLog("Using clicked image for fullsize view", {
          src: img.src
        });
      }
      if (img) {
        this.isFullSizeActive = true;
        this.debugLog("Setting isFullSizeActive to true");
        if (this.slidesShowConfig.enabled) {
          this.pauseSlideshow();
        }
        const onClose = () => {
          this.isFullSizeActive = false;
          this.debugLog("Fullsize view closed");
          if (this.onFullscreenExit) {
            this.onFullscreenExit(img);
            this.debugLog("onFullscreenExit callback called");
          }
          if (this.slidesShowConfig.enabled) {
            this.resumeSlideshow();
          }
        };
        const imageCount = Array.from(this.children).filter(
          (child) => child instanceof HTMLImageElement || child.tagName.toLowerCase() === "img"
        ).length;
        const hasNavigation = imageCount > 1;
        this.debugLog("Calling createFullsizeView", {
          imgSrc: img.src,
          isMobileDevice: this.isMobileDevice,
          hasNavigation,
          imageCount,
          hasOnNext: !!this.handleFullscreenNext,
          hasOnPrev: !!this.handleFullscreenPrev
        });
        createFullsizeView(
          img,
          this.isMobileDevice,
          onClose,
          hasNavigation ? this.handleFullscreenNext : void 0,
          hasNavigation ? this.handleFullscreenPrev : void 0,
          this._instanceId
        );
        if (this.onFullscreenEnter) {
          this.onFullscreenEnter(img);
          this.debugLog("onFullscreenEnter callback called");
        }
      } else {
        this.debugLog("No image found for fullsize view");
      }
    };
    this.nextSlide = () => {
      this.slideProgress = 0;
      const activeSlide = this.querySelector("img.active");
      if (!activeSlide) {
        return;
      }
      const nextSlide = activeSlide.nextElementSibling || this.querySelector("img:first-child");
      if (nextSlide) {
        activeSlide.classList.remove("active");
        nextSlide.classList.add("active");
        this.updateCurrentCaption();
        if (this.onSlideChange) {
          const index = Array.from(this.querySelectorAll("img")).indexOf(nextSlide);
          this.onSlideChange(index, nextSlide);
        }
      }
      this.requestUpdate();
    };
    this.prevSlide = () => {
      this.slideProgress = 0;
      const activeSlide = this.querySelector("img.active");
      if (!activeSlide) {
        return;
      }
      const prevSlide = activeSlide.previousElementSibling || this.querySelector("img:last-child");
      if (prevSlide) {
        activeSlide.classList.remove("active");
        prevSlide.classList.add("active");
        this.updateCurrentCaption();
        if (this.onSlideChange) {
          const index = Array.from(this.querySelectorAll("img")).indexOf(prevSlide);
          this.onSlideChange(index, prevSlide);
        }
      }
      this.requestUpdate();
    };
    this.pauseSlideshow = () => {
      this.isPaused = true;
      const activeImage = this.querySelector("img.active");
      if (activeImage && this.onSlideshowPause) {
        this.onSlideshowPause(activeImage);
      }
      this.requestUpdate();
    };
    this.resumeSlideshow = () => {
      if (this.isFullSizeActive) {
        return;
      }
      this.isPaused = false;
      const activeImage = this.querySelector("img.active");
      if (activeImage && this.onSlideshowResume) {
        this.onSlideshowResume(activeImage);
      }
      this.requestUpdate();
    };
    this.handleTouchMove = (e2) => {
      if (this.isFullSizeActive) return;
      if (!this.isSwiping) return;
      this.touchEndX = e2.touches[0].clientX;
      this.touchEndY = e2.touches[0].clientY;
      const xDiff = this.touchStartX - this.touchEndX;
      const yDiff = this.touchStartY - this.touchEndY;
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        e2.preventDefault();
        this.swipeDistance = xDiff;
        if (this.isFullSizeActive) {
          const fullscreenImg = document.querySelector(
            `.nte-fullsize-image[data-instance="${this._instanceId}"]`
          );
          if (fullscreenImg) {
            fullscreenImg.style.transform = `translateX(${xDiff}px)`;
          }
        }
      }
    };
    this.handleFullscreenNext = () => {
      const imageCount = Array.from(this.children).filter(
        (child) => child instanceof HTMLImageElement || child.tagName.toLowerCase() === "img"
      ).length;
      if (imageCount > 1) {
        this.nextSlide();
        const activeImg = this.querySelector("img.active");
        if (activeImg) {
          const fullscreenImg = document.querySelector(
            `.nxa-fullsize-image[data-instance="${this._instanceId}"]`
          );
          const fullscreenBg = document.querySelector(
            `.nxa-fullsize-bg[data-instance="${this._instanceId}"]`
          );
          if (fullscreenImg && fullscreenBg) {
            fullscreenImg.style.transition = "transform 0.3s ease-out";
            fullscreenImg.src = activeImg.src;
            fullscreenBg.style.backgroundImage = `url(${activeImg.src})`;
            setTimeout(() => {
              fullscreenImg.style.transition = "";
            }, 300);
          }
        }
      }
    };
    this.handleFullscreenPrev = () => {
      const imageCount = Array.from(this.children).filter(
        (child) => child instanceof HTMLImageElement || child.tagName.toLowerCase() === "img"
      ).length;
      if (imageCount > 1) {
        this.prevSlide();
        const activeImg = this.querySelector("img.active");
        if (activeImg) {
          const fullscreenImg = document.querySelector(
            `.nxa-fullsize-image[data-instance="${this._instanceId}"]`
          );
          const fullscreenBg = document.querySelector(
            `.nxa-fullsize-bg[data-instance="${this._instanceId}"]`
          );
          if (fullscreenImg && fullscreenBg) {
            fullscreenImg.style.transition = "transform 0.3s ease-out";
            fullscreenImg.src = activeImg.src;
            fullscreenBg.style.backgroundImage = `url(${activeImg.src})`;
            setTimeout(() => {
              fullscreenImg.style.transition = "";
            }, 300);
          }
        }
      }
    };
    this.handleResize = () => {
      this.isMobileDevice = detectMobileDevice();
    };
    this._instanceId = `nte-image-${Math.random().toString(36).substring(2, 11)}`;
  }
  /**
   * Logs debug messages to the console if debug mode is enabled.
   * @param message The debug message
   * @param data Optional additional data
   */
  debugLog(message, data) {
    if (this.debug) {
      console.log(`[nte-image] ${message}`, data);
    }
  }
  /**
   * Lifecycle method called when the element is added to the DOM
   * Initializes properties, event listeners, and observers
   */
  connectedCallback() {
    super.connectedCallback();
    this.debugLog("Component connected to DOM");
    this.childDataCrop = [];
    this.slidesShowConfig = {};
    this.globalDataCrop = {};
    this.globalDataCrop = cssToJson(this.getAttribute("data-crop") || "");
    Array.from(this.children).forEach((child, index) => {
      this.childDataCrop[index] = cssToJson(child?.getAttribute("data-crop") || "");
    });
    this._styleSignature = "";
    this.refreshStyles();
    this._styleObserver = new MutationObserver(() => this.refreshStyles());
    this._styleObserver.observe(this, { attributes: true, attributeFilter: ["class", "style"] });
    this.updateCurrentCaption();
    requestAnimationFrame(() => {
      this.cropImages();
      this._resizeObserver = new ResizeObserver(() => {
        this.cropImages();
      });
      this._resizeObserver.observe(this);
    });
    this.isMobileDevice = detectMobileDevice();
    if (this.isMobileDevice) {
      this.addEventListener("touchstart", this.handleTouchStart, {
        passive: false
      });
      this.addEventListener("touchmove", this.handleTouchMove, {
        passive: false
      });
      this.addEventListener("touchend", this.handleTouchEnd, {
        passive: false
      });
    }
    this._boundHandleResize = this.handleResize;
    window.addEventListener("resize", this._boundHandleResize);
    setTimeout(() => {
      this.checkAndRestartSlideshow();
    }, 100);
  }
  /**
   * Lifecycle method called when the element is removed from the DOM
   * Cleans up intervals and event listeners
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this.clearInterval();
    this._styleObserver?.disconnect();
    this._styleObserver = null;
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    if (this.isMobileDevice) {
      this.removeEventListener("touchstart", this.handleTouchStart);
      this.removeEventListener("touchmove", this.handleTouchMove);
      this.removeEventListener("touchend", this.handleTouchEnd);
    }
    if (this.fullSize) {
      this.removeFullsizeClickHandlers();
    }
    if (this._boundHandleResize) {
      window.removeEventListener("resize", this._boundHandleResize);
      this._boundHandleResize = null;
    }
    if (this._boundPauseSlideshow) {
      this.removeEventListener("mouseenter", this._boundPauseSlideshow);
      this._boundPauseSlideshow = null;
    }
    if (this._boundResumeSlideshow) {
      this.removeEventListener("mouseleave", this._boundResumeSlideshow);
      this._boundResumeSlideshow = null;
    }
  }
  clearInterval() {
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }
  /** Liest auch geerbte Theme-Werte erneut; nach Änderungen an Vorfahren explizit aufrufen. */
  refreshStyles() {
    if (!this.isConnected) return;
    const style2 = getComputedStyle(this);
    const featureValue = style2.getPropertyValue("--nte-image-features").trim();
    const intervalValue = style2.getPropertyValue("--nte-image-interval").trim();
    const imageCount = this.querySelectorAll(":scope > img").length;
    const signature = JSON.stringify([featureValue, intervalValue, imageCount]);
    if (signature === this._styleSignature) return;
    this._styleSignature = signature;
    this._features = featureValue.split(/\s+/).filter(Boolean);
    const automatic = !featureValue || this._features.includes("auto");
    const disabled = this._features.includes("none");
    const enabled = !disabled && (this._features.includes("slideshow") || automatic && imageCount > 1);
    const time = /^(\d+(?:\.\d+)?)(ms|s)?$/.exec(intervalValue);
    const milliseconds = time ? Number(time[1]) * (time[2] === "s" ? 1e3 : 1) : 0;
    const wasFullSize = this.fullSize;
    this.fullSize = !disabled && this._features.includes("fullsize");
    this.roundBorders = !disabled && this._features.includes("round-borders");
    this.slidesShowConfig = {
      enabled,
      interval: Number.isFinite(milliseconds) && milliseconds > 0 ? milliseconds : defaultSlideshowInterval,
      pauseOnHover: !this._features.includes("dont-pause-on-hover"),
      showArrows: !disabled && (this._features.includes("arrows") || automatic),
      showIndicators: !disabled && (this._features.includes("indicators") || automatic),
      transition: this._features.includes("blend") ? "blend" : "fade"
    };
    this.classList.toggle("round-borders", this.roundBorders);
    this.classList.toggle("fullsize", this.fullSize);
    this.classList.toggle("blend", !disabled && this._features.includes("blend"));
    this.classList.toggle("slideshow", enabled);
    this.classList.toggle("single-image", !enabled);
    this.clearInterval();
    if (this._boundPauseSlideshow) this.removeEventListener("mouseenter", this._boundPauseSlideshow);
    if (this._boundResumeSlideshow) this.removeEventListener("mouseleave", this._boundResumeSlideshow);
    this._boundPauseSlideshow = null;
    this._boundResumeSlideshow = null;
    this.isPaused = this.isFullSizeActive || this.slidesShowConfig.pauseOnHover === true && this.matches(":hover");
    if (enabled) {
      this.attachSlideshowStyles();
      this.initSlideshowInterval();
    }
    if (wasFullSize !== this.fullSize) {
      if (this.fullSize) this.initFullSize();
      else this.removeFullsizeClickHandlers();
    }
    this.updateCurrentCaption();
    this.requestUpdate();
  }
  /**
   * Lifecycle method called after the element's first render
   * Initializes features that require the DOM to be rendered
   */
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.isMobileDevice = detectMobileDevice();
    if (this.slidesShowConfig.enabled) {
      this.attachSlideshowStyles();
      this.initSlideshowInterval();
    }
    if (this.fullSize) {
      this.initFullSize();
    }
    this.preventImageDrag();
    this.requestUpdate();
  }
  /**
   * Renders the component template
   * @returns The component's HTML template
   */
  render() {
    super.render();
    return b`
      <div class="nte-image-root" part="root">
        ${this.slidesShowConfig.showArrows && this.slidesShowConfig.enabled ? b`
              <div class="navigation-arrows" part="navigation-arrows">
                <button type="button" class="arrow-button prev" part="previous-button" aria-label="Vorheriges Bild" @click=${this.prevSlide}>&lt;</button>
                <button type="button" class="arrow-button next" part="next-button" aria-label="Nächstes Bild" @click=${this.nextSlide}>&gt;</button>
              </div>
            ` : A}
        ${this.slidesShowConfig.showIndicators && this.slidesShowConfig.enabled ? b` <div class="indicators" part="indicators">${this.renderIndicators()}</div> ` : A}
        <div class="image-container" part="image-container">
          <slot @slotchange=${this.handleSlotChange}></slot>
          ${this.slidesShowConfig.enabled && this.isPaused ? b`
                <div class="pause-indicator">
                  <div class="pause-icon"></div>
                </div>
              ` : A}
        </div>
        <div class="caption-container" part="caption-container">
          <div class="caption">${this.currentCaption || ""}</div>
        </div>
      </div>
    `;
  }
  /**
   * Updates the current caption based on the active slide or first image
   */
  updateCurrentCaption() {
    if (this.slidesShowConfig.enabled) {
      const activeSlide = this.querySelector("img.active");
      if (activeSlide) {
        this.currentCaption = activeSlide.getAttribute("data-caption") || "";
        return;
      }
    }
    const firstImg = this.querySelector("img");
    if (firstImg) {
      this.currentCaption = firstImg.getAttribute("data-caption") || "";
    }
  }
  /**
   * Initializes the fullsize view functionality for images
   */
  initFullSize() {
    this.debugLog("Initializing fullsize feature");
    this.removeFullsizeClickHandlers();
    setTimeout(() => {
      this.addFullsizeClickHandlers();
      this.debugLog("Fullsize click handlers added to images (delayed)");
    }, 100);
  }
  /**
   * Adds click handlers to all images for fullsize functionality
   */
  addFullsizeClickHandlers() {
    if (!this.isConnected || !this.fullSize) return;
    const images = Array.from(this.querySelectorAll("img"));
    this.debugLog("Adding click handlers to images", {
      imageCount: images.length,
      fullSize: this.fullSize,
      features: this._features
    });
    if (images.length === 0) {
      this.debugLog("No images found in component");
      return;
    }
    const imagePromises = images.map((img) => {
      if (img.complete) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    });
    Promise.all(imagePromises).then(() => {
      if (!this.isConnected || !this.fullSize) return;
      this.debugLog("All images loaded, adding click handlers");
      images.forEach((img, index) => {
        img.removeEventListener("click", this.handleFullsizeClick);
        img.addEventListener("click", this.handleFullsizeClick, {
          capture: true
        });
        const hasListener = img.onclick !== null || img.hasAttribute("onclick");
        this.debugLog(`Added click handler to image ${index}`, {
          src: img.src,
          hasListener,
          imgOnClick: img.onclick,
          imgHasOnclickAttr: img.hasAttribute("onclick"),
          imgComplete: img.complete,
          imgNaturalWidth: img.naturalWidth,
          imgNaturalHeight: img.naturalHeight
        });
        img.addEventListener(
          "click",
          (e2) => {
            this.debugLog("Test click detected on image", {
              src: img.src,
              event: e2
            });
          },
          { capture: true }
        );
      });
    });
  }
  /**
   * Removes click handlers from all images
   */
  removeFullsizeClickHandlers() {
    const images = Array.from(this.querySelectorAll("img"));
    images.forEach((img) => {
      img.removeEventListener("click", this.handleFullsizeClick);
    });
  }
  /**
   * Initialisiert den aktiven Slide; die funktionalen Slideshow-Regeln bleiben im Shadow DOM.
   */
  attachSlideshowStyles() {
    const firstImg = Array.from(this.children).find((child) => child instanceof HTMLImageElement);
    if (firstImg && !this.querySelector("img.active")) {
      firstImg.classList.add("active");
    }
    this.classList.add("slideshow");
    if (this.fullSize) {
      this.addFullsizeClickHandlers();
    }
  }
  /**
   * Initializes the slideshow interval and pause/resume behavior
   */
  initSlideshowInterval() {
    this.clearInterval();
    const interval = this.slidesShowConfig.interval || defaultSlideshowInterval;
    this.slideProgress = 0;
    const progressUpdateInterval = 50;
    const progressIncrement = progressUpdateInterval / interval * 100;
    this._intervalId = window.setInterval(() => {
      if (!this.isConnected) {
        this.debugLog("Component disconnected, clearing interval");
        this.clearInterval();
        return;
      }
      if (!this.isPaused) {
        this.slideProgress += progressIncrement;
        if (this.slideProgress >= 100) {
          this.slideProgress = 0;
          this.debugLog("Slideshow advancing to next slide");
          this.nextSlide();
        }
        this.requestUpdate();
      }
    }, progressUpdateInterval);
    if (this.slidesShowConfig.pauseOnHover) {
      this._boundPauseSlideshow = this.pauseSlideshow;
      this._boundResumeSlideshow = this.resumeSlideshow;
      this.addEventListener("mouseenter", this._boundPauseSlideshow);
      this.addEventListener("mouseleave", this._boundResumeSlideshow);
    }
  }
  /**
   * Applies cropping to all images based on crop data
   */
  cropImages() {
    const children = Array.from(this.children);
    children.forEach((child, index) => {
      if (!(child instanceof HTMLImageElement)) {
        return;
      }
      const cropData = {
        ...this.globalDataCrop,
        ...this.childDataCrop[index]
      };
      const referenceSize = {
        width: `${this.offsetWidth}px`,
        height: `${this.offsetHeight}px`
      };
      cropImage(child, cropData, referenceSize);
    });
  }
  /**
   * Renders the indicator dots for the slideshow
   * @returns Array of indicator elements
   */
  renderIndicators() {
    const images = Array.from(this.querySelectorAll("img"));
    if (images.length === 0) {
      return A;
    }
    return images.map((_, index) => {
      const isActive = index === this.getCurrentSlideIndex();
      return b`
        <div class="indicator-container">
          <div class="indicator ${isActive ? "active" : ""}" @click=${() => this.goToSlide(index)}>
            ${isActive ? b`<div
                  class="progress-bar ${this.isPaused ? "paused" : ""}"
                  style="width: ${this.slideProgress}%"
                ></div>` : A}
          </div>
        </div>
      `;
    });
  }
  /**
   * Gets the index of the currently active slide
   * @returns The index of the active slide
   */
  getCurrentSlideIndex() {
    const images = Array.from(this.querySelectorAll("img"));
    const activeSlide = this.querySelector("img.active");
    return images.indexOf(activeSlide);
  }
  /**
   * Navigates to a specific slide by index
   * @param index The index of the slide to display
   */
  goToSlide(index) {
    this.slideProgress = 0;
    const images = Array.from(this.querySelectorAll("img"));
    const activeSlide = this.querySelector("img.active");
    if (activeSlide) {
      activeSlide.classList.remove("active");
    }
    if (images[index]) {
      images[index].classList.add("active");
      this.updateCurrentCaption();
    }
    if (this._intervalId !== null) {
      this.clearInterval();
      this.initSlideshowInterval();
    }
  }
  /**
   * Handles touch start events for swipe detection
   * @param e The touch event
   */
  handleTouchStart(e2) {
    if (this.isFullSizeActive) return;
    this.touchStartX = e2.touches[0].clientX;
    this.touchStartY = e2.touches[0].clientY;
  }
  /**
   * Handles touch end events for swipe detection
   * @param e The touch event
   */
  handleTouchEnd(e2) {
    if (this.isFullSizeActive) return;
    if (!this.slidesShowConfig.enabled) return;
    const touchEndX = e2.changedTouches[0].clientX;
    const touchEndY = e2.changedTouches[0].clientY;
    const xDiff = this.touchStartX - touchEndX;
    const yDiff = this.touchStartY - touchEndY;
    if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 50) {
      e2.preventDefault();
      if (xDiff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }
  /**
   * Checks if the slideshow needs to be restarted due to rapid reconnection
   */
  checkAndRestartSlideshow() {
    if (this.slidesShowConfig.enabled && this._intervalId === null) {
      this.initSlideshowInterval();
    }
  }
  /**
   * Prevents default drag behavior for images
   */
  preventImageDrag() {
    const images = Array.from(this.querySelectorAll("img"));
    images.forEach((img) => {
      img.setAttribute("draggable", "false");
      img.addEventListener("dragstart", (e2) => e2.preventDefault());
    });
  }
};
NteImage.styles = [r(componentStyles)];
__decorateClass$3([
  n({ type: Object })
], NteImage.prototype, "globalDataCrop", 2);
__decorateClass$3([
  n({ type: Array })
], NteImage.prototype, "childDataCrop", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "slidesShowConfig", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "fullSize", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "roundBorders", 2);
__decorateClass$3([
  n({ type: Function })
], NteImage.prototype, "onSlideChange", 2);
__decorateClass$3([
  n({ type: Function })
], NteImage.prototype, "onFullscreenEnter", 2);
__decorateClass$3([
  n({ type: Function })
], NteImage.prototype, "onFullscreenExit", 2);
__decorateClass$3([
  n({ type: Function })
], NteImage.prototype, "onSlideshowPause", 2);
__decorateClass$3([
  n({ type: Function })
], NteImage.prototype, "onSlideshowResume", 2);
__decorateClass$3([
  n({ type: Function })
], NteImage.prototype, "onImageClick", 2);
__decorateClass$3([
  n({ type: Boolean })
], NteImage.prototype, "debug", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "isFullSizeActive", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "currentCaption", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "touchStartX", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "touchStartY", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "touchEndX", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "touchEndY", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "isMobileDevice", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "isPaused", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "slideProgress", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "isSwiping", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "swipeDistance", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "swipeThreshold", 2);
__decorateClass$3([
  r$1()
], NteImage.prototype, "swipeVelocityThreshold", 2);
NteImage = __decorateClass$3([
  t("nte-image")
], NteImage);
var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$a(target, key, result);
  return result;
};
let ProgressBar = class extends i {
  constructor() {
    super(...arguments);
    this.variant = "mobile";
    this.color = "var(--nt-primary)";
    this.backgroundColor = "var(--nt-light)";
    this.height = "";
    this.borderRadius = 5;
    this.showAfterScroll = 70;
    this.transitionDuration = 0.1;
    this.offsetSelector = "";
    this.offsetTop = 70;
    this.progress = 0;
    this.isVisible = false;
    this.computedOffsetTop = 70;
    this.recomputeOffsetTop = () => {
      let next = this.offsetTop;
      if (this.offsetSelector) {
        const el = document.querySelector(this.offsetSelector);
        if (el) {
          const rect = el.getBoundingClientRect();
          next = Math.max(0, Math.round(rect.height));
        }
      }
      if (next !== this.computedOffsetTop) {
        this.computedOffsetTop = next;
        this.requestUpdate();
      }
    };
    this.isTickScheduled = false;
    this.handleScroll = () => {
      if (this.isTickScheduled) return;
      this.isTickScheduled = true;
      requestAnimationFrame(() => {
        const maxScrollable = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
        const scrolled = maxScrollable > 0 ? window.scrollY / maxScrollable * 100 : 0;
        this.progress = Math.min(Math.max(scrolled, 0), 100);
        if (this.variant === "mobile") {
          this.isVisible = window.scrollY > this.showAfterScroll;
        } else {
          this.isVisible = true;
        }
        this.isTickScheduled = false;
        this.requestUpdate();
      });
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.setupScrollListener();
    this.setupOffsetObservers();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeScrollListener();
    this.teardownOffsetObservers();
  }
  setupScrollListener() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  }
  removeScrollListener() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  setupOffsetObservers() {
    this.recomputeOffsetTop();
    window.addEventListener("resize", this.recomputeOffsetTop, { passive: true });
    if (this.offsetSelector && "ResizeObserver" in window) {
      const target = document.querySelector(this.offsetSelector);
      if (target) {
        this.resizeObserver = new ResizeObserver(() => this.recomputeOffsetTop());
        this.resizeObserver.observe(target);
      }
    }
  }
  teardownOffsetObservers() {
    window.removeEventListener("resize", this.recomputeOffsetTop);
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = void 0;
    }
  }
  updated(changed) {
    if (changed.has("offsetSelector")) {
      this.teardownOffsetObservers();
      this.setupOffsetObservers();
    }
  }
  getProgressBarStyles() {
    const effectiveHeight = this.variant === "desktop" ? this.height && this.height.trim().length > 0 ? this.height : "var(--nt-space-3)" : this.height && this.height.trim().length > 0 ? this.height : "4px";
    return `
      height: ${effectiveHeight};
      border-radius: calc(0.25rem * ${this.borderRadius});
      background-color: var(--nt-${this.backgroundColor}, #EDF1F8);
    `;
  }
  getProgressFillStyles() {
    return `
      height: 100%;
      width: ${this.progress}%;
      background-color: var(--nt-${this.color}, #FE6606);
      transition: width ${this.transitionDuration}s ease-out;
    `;
  }
  getContainerStyles() {
    const baseStyles = this.getProgressBarStyles();
    if (this.variant === "mobile") {
      return `${baseStyles} display: ${this.isVisible ? "block" : "none"}; top: ${this.computedOffsetTop}px; position: sticky;`;
    }
    return baseStyles;
  }
  render() {
    return b`
      <div
        class="progress-container ${this.variant === "mobile" ? "mobile-variant" : "desktop-variant"}"
        style="${this.getContainerStyles()}"
      >
        <div
          class="progress-bar"
          style="${this.getProgressFillStyles()}"
        ></div>
      </div>
    `;
  }
};
ProgressBar.styles = i$2`
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
  `;
__decorateClass$2([
  n({ type: String, attribute: "variant" })
], ProgressBar.prototype, "variant", 2);
__decorateClass$2([
  n({ type: String, attribute: "color" })
], ProgressBar.prototype, "color", 2);
__decorateClass$2([
  n({ type: String, attribute: "background-color" })
], ProgressBar.prototype, "backgroundColor", 2);
__decorateClass$2([
  n({ type: String, attribute: "height" })
], ProgressBar.prototype, "height", 2);
__decorateClass$2([
  n({ type: Number, attribute: "border-radius" })
], ProgressBar.prototype, "borderRadius", 2);
__decorateClass$2([
  n({ type: Number, attribute: "show-after-scroll" })
], ProgressBar.prototype, "showAfterScroll", 2);
__decorateClass$2([
  n({ type: Number, attribute: "transition-duration" })
], ProgressBar.prototype, "transitionDuration", 2);
__decorateClass$2([
  n({ type: String, attribute: "offset-selector" })
], ProgressBar.prototype, "offsetSelector", 2);
__decorateClass$2([
  n({ type: Number, attribute: "offset-top" })
], ProgressBar.prototype, "offsetTop", 2);
ProgressBar = __decorateClass$2([
  t("progress-bar")
], ProgressBar);
const style$b = ":host {\n  --gap: var(--nt-spacing-layout);\n  --container-width: var(--nt-container-width, 100%);\n  --inner-padding: var(--nt-space-3);\n  --section-bg: transparent;\n  --cols: 6;\n  --breakpoint: lg;\n  background: var(--section-bg);\n  display: block;\n}\n\n#container {\n  margin-left: var(--container-margin-left, auto);\n  margin-right: var(--container-margin-right, auto);\n  width: var(--container-render-width, var(--container-width));\n  box-sizing: border-box;\n}\n\n#wrapper {\n  box-sizing: border-box;\n  --aside-width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: var(--gap);\n  align-items: stretch;\n}\n\n#wrapper:has(#top > .slot-empty):has(#main > .slot-empty):has(#aside > .slot-empty):has(#bottom > .slot-empty) {\n  display: none !important;\n}\n\n#wrapper:has(#main > .slot-empty) #aside::after {\n  content: none !important;\n}\n\n*:has(> .slot-empty) {\n  display: none !important;\n}\n\n#header,\n#footer,\n#top,\n#bottom {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#top {\n  order: 0;\n  flex: 0 0 auto;\n}\n\n#main {\n  box-sizing: border-box;\n  order: 1;\n  min-width: 0;\n}\n\n#aside {\n  box-sizing: border-box;\n  order: 2;\n  min-width: 0;\n}\n\n#bottom {\n  order: 3;\n  flex: 0 0 auto;\n}\n\n:host([mode=mobile]) #container {\n  margin-left: 0;\n  margin-right: 0;\n  width: 100%;\n}\n:host([mode=mobile]) #main,\n:host([mode=mobile]) #aside {\n  width: 100%;\n  flex: 0 0 100%;\n}\n\n:host([mode=mobile].mobile-reverse) #aside {\n  order: 1;\n}\n:host([mode=mobile].mobile-reverse) #main {\n  order: 2;\n}\n\n:host([mode=desktop].desktop-reverse) #wrapper {\n  flex-direction: row-reverse;\n}\n\n:host([mode=desktop]) #wrapper {\n  flex-direction: row;\n  --main-width: calc(100% * var(--cols, 1) / 12);\n}\n:host([mode=desktop]) #wrapper:has(#aside > .slot-empty) {\n  flex-direction: column;\n}\n:host([mode=desktop]) #wrapper:has(#aside > .slot-empty) #main {\n  width: 100%;\n  flex-basis: 100%;\n}\n:host([mode=desktop]) #wrapper #main {\n  width: var(--main-width);\n  flex: 0 0 var(--main-width);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n:host([mode=desktop]) #wrapper #aside {\n  flex: 1 1 1px;\n  box-sizing: border-box;\n}\n:host([mode=desktop]) #aside {\n  width: auto;\n  min-width: 0;\n  flex: 1 1 1px;\n  box-sizing: border-box;\n}\n:host([mode=desktop]) #aside:has(.slot-empty) {\n  display: none;\n}";
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
let Ntl2Col = class extends nextrap_element({
  breakpoints: true,
  subLayoutApply: true,
  slotVisibility: true,
  eventBinding: false
}) {
  connectedCallback() {
    super.connectedCallback();
    this.classList.add("ntl-2col");
  }
  render() {
    return b`
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
              data-query="@var(--ntl-2col-aside-selector) | :scope > .aside | :scope > p:has(img):not(.keep):not(:has(img.keep))"
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
    `;
  }
};
Ntl2Col.styles = [r(resetStyle), r(style$b)];
Ntl2Col = __decorateClass$1([
  t("ntl-2col")
], Ntl2Col);
const style$a = ':host {\n  --breakpoint: lg;\n  display: block;\n}\n\n#wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.column {\n  box-sizing: border-box;\n  min-width: 0;\n}\n\n::slotted(.d-none) {\n  display: none !important;\n}\n\n:host(:not(.preserve-empty)) .column:has(> slot.slot-empty) {\n  display: none !important;\n}\n\n:host(:not(.preserve-empty):has(> [slot=start].d-none):not(:has(> [slot=start]:not(.d-none)))) #start,\n:host(:not(.preserve-empty):has(> [slot=end].d-none):not(:has(> [slot=end]:not(.d-none)))) #end,\n:host(:not(.preserve-empty):has(> :is(:not([slot]), [slot=""]).d-none):not(:has(> :is(:not([slot]), [slot=""]):not(.d-none)))) #center {\n  display: none !important;\n}\n\n:host(:not(.mobile):is(.desktop, [mode=desktop])) #wrapper {\n  flex-direction: row;\n}\n\n:host(:not(.mobile):is(.desktop, [mode=desktop])) #start {\n  flex: var(--grid-cols, var(--start-cols, 4)) 1 0px;\n}\n\n:host(:not(.mobile):is(.desktop, [mode=desktop])) #center {\n  flex: var(--grid-cols, var(--center-cols, 6)) 1 0px;\n}\n\n:host(:not(.mobile):is(.desktop, [mode=desktop])) #end {\n  flex: var(--grid-cols, var(--end-cols, 4)) 1 0px;\n}\n\n:host(.reverse) #wrapper {\n  flex-direction: column-reverse;\n}\n\n:host(.reverse:not(.mobile):is(.desktop, [mode=desktop])) #wrapper {\n  flex-direction: row-reverse;\n}';
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = decorator(result) || result;
  return result;
};
let NtlColumns = class extends nextrap_element({
  subLayoutApply: true,
  slotVisibility: true,
  breakpoints: true,
  eventBinding: false
}) {
  // Die DOM-Reihenfolge entspricht Mobile und Desktop ohne Reverse.
  render() {
    return b`
      ${super.render()}
      <div part="wrapper" id="wrapper">
        <div part="start" class="column" id="start">
          <slot name="start"></slot>
        </div>
        <div part="center" class="column" id="center">
          <slot></slot>
        </div>
        <div part="end" class="column" id="end">
          <slot name="end" data-query=":scope > .aside"></slot>
        </div>
      </div>
    `;
  }
};
NtlColumns.styles = [r(resetStyle), r(style$a)];
NtlColumns = __decorateClass([
  t("ntl-columns")
], NtlColumns);
const style$9 = ":host {\n  --height-offset: 0px;\n  --breakpoint: xl;\n  display: block;\n}\n\n#root {\n  width: 100%;\n  isolation: isolate;\n  display: grid;\n  position: relative;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n}\n\n#wrapper {\n  grid-row: 1;\n  grid-column: 1;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n}\n#wrapper > * {\n  display: flex;\n  flex-direction: column;\n}\n#wrapper > :has(.slot-empty) {\n  display: none !important;\n}\n\n#background {\n  position: absolute;\n  overflow: hidden;\n  z-index: 0;\n  height: 100%;\n  inset: 0;\n}";
var __create$9 = Object.create;
var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __knownSymbol$9 = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$9 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$9 = (target, value) => __defProp$9(target, "name", { value, configurable: true });
var __decoratorStart$9 = (base) => [, , , __create$9(base?.[__knownSymbol$9("metadata")] ?? null)];
var __decoratorStrings$9 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$9 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$9("Function expected") : fn;
var __decoratorContext$9 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$9[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$9("Already initialized") : fns.push(__expectFn$9(fn || null)) });
var __decoratorMetadata$9 = (array, target) => __defNormalProp$9(target, __knownSymbol$9("metadata"), array[3]);
var __runInitializers$9 = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) fns[i2].call(self);
  return value;
};
var __decorateElement$9 = (array, flags, name, decorators, target, extra) => {
  var it, done, ctx, k = flags & 7, p = false;
  var j = 0;
  var extraInitializers = array[j] || (array[j] = []);
  var desc = k && (target = target.prototype, k < 5 && (k > 3 || !p) && __getOwnPropDesc$9(target, name));
  __name$9(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$9(k, name, done = {}, array[3], extraInitializers);
    it = (0, decorators[i2])(target, ctx), done._ = 1;
    __expectFn$9(it) && (target = it);
  }
  return __decoratorMetadata$9(array, target), desc && __defProp$9(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var _NtlHero_decorators, _init$9, _a$9;
const features$1 = {
  breakpoints: true,
  subLayoutApply: true,
  slotVisibility: true,
  eventBinding: true
};
_NtlHero_decorators = [t("ntl-hero")];
const _NtlHero = class _NtlHero extends (_a$9 = nextrap_element(features$1)) {
  async updated(changedProperties) {
    super.updated(changedProperties);
    await dt();
    this.style.setProperty("--height-offset", `${this.offsetTop}px`);
  }
  render() {
    return b`
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
    `;
  }
};
_NtlHero.styles = [r(style$9), r(resetStyle)];
let NtlHero = _NtlHero;
_init$9 = __decoratorStart$9(_a$9);
NtlHero = __decorateElement$9(_init$9, 0, "NtlHero", _NtlHero_decorators, NtlHero);
__runInitializers$9(_init$9, 1, NtlHero);
const style$8 = "/* The ShadowDOM Styles */\n#wrapper {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 1fr;\n}\n\n#image {\n  width: 100%;\n  height: 100%;\n  grid-row: 1;\n  grid-column: 2;\n  z-index: 0;\n}\n\n#gradient {\n  width: 100%;\n  height: 100%;\n  grid-row: 1;\n  grid-column: 2;\n  z-index: 1;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  grid-row: 1;\n  grid-column: 1;\n}";
var __create$8 = Object.create;
var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __knownSymbol$8 = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$8 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$8 = (target, value) => __defProp$8(target, "name", { value, configurable: true });
var __decoratorStart$8 = (base) => [, , , __create$8(base?.[__knownSymbol$8("metadata")] ?? null)];
var __decoratorStrings$8 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$8 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$8("Function expected") : fn;
var __decoratorContext$8 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$8[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$8("Already initialized") : fns.push(__expectFn$8(fn || null)) });
var __decoratorMetadata$8 = (array, target) => __defNormalProp$8(target, __knownSymbol$8("metadata"), array[3]);
var __runInitializers$8 = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$8 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$8[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$8(k < 4 ? target : { get [name]() {
    return __privateGet$7(this, extra);
  }, set [name](x) {
    return __privateSet$7(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$8(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$8(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$8(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$7(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$7 : __privateMethod$7)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$7(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$8(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$8("Object expected");
    else __expectFn$8(fn = it.get) && (desc.get = fn), __expectFn$8(fn = it.set) && (desc.set = fn), __expectFn$8(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$8(array, target), desc && __defProp$8(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$7 = (obj, member, msg) => member.has(obj) || __typeError$8("Cannot " + msg);
var __privateIn$7 = (member, obj) => Object(obj) !== obj ? __typeError$8('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$7 = (obj, member, getter) => (__accessCheck$7(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$7 = (obj, member, value) => member.has(obj) ? __typeError$8("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$7 = (obj, member, value, setter) => (__accessCheck$7(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$7 = (obj, member, method) => (__accessCheck$7(obj, member, "access private method"), method);
var _name_dec$2, _a$8, _NteSlideElement_decorators, _init$8, _name$2;
_NteSlideElement_decorators = [t("nte-slide")];
class NteSlideElement extends (_a$8 = Et(
  st(yt(pt(i)))
), _name_dec$2 = [n({ type: String, reflect: true })], _a$8) {
  constructor() {
    super(...arguments);
    __privateAdd$7(this, _name$2, __runInitializers$8(_init$8, 8, this, "nte-slide")), __runInitializers$8(_init$8, 11, this);
  }
  render() {
    return b`
      <div part="wrapper" id="wrapper">
        <div part="image" id="image">
          <slot name="image" data-query=":scope > img:not(.keep) | :scope > p:has(img:not(.keep))"></slot>
        </div>
        <div part="gradient" id="gradient"></div>
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
_init$8 = __decoratorStart$8(_a$8);
_name$2 = /* @__PURE__ */ new WeakMap();
__decorateElement$8(_init$8, 4, "name", _name_dec$2, NteSlideElement, _name$2);
NteSlideElement = __decorateElement$8(_init$8, 0, "NteSlideElement", _NteSlideElement_decorators, NteSlideElement);
NteSlideElement.styles = [r(style$8), r(resetStyle)];
__runInitializers$8(_init$8, 1, NteSlideElement);
const style$7 = "/* The ShadowDOM Styles */\n:host {\n  --aspect-ratio: 16/9;\n  --nav-inset: 0;\n  --nav-button-size: 48px;\n  --nav-button-bg: color-mix(in srgb, var(--nt-primary, #000000), transparent 50%);\n  --nav-button-color: var(--nt-teritary, #fff);\n  --indicator-size: 12px;\n  --indicator-gap: 8px;\n  --indicator-color: var(--nt-primary-subtle, rgba(255, 255, 255, 0.5));\n  --indicator-active-color: var(--nt-primary, #fff);\n  --transition-duration: 0.5s;\n  display: block;\n}\n\n#wrapper {\n  width: 100%;\n  aspect-ratio: var(--aspect-ratio);\n  display: block;\n  position: relative;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  place-items: center;\n  justify-items: center;\n  align-items: center;\n}\n#content > ::slotted(.hide) {\n  display: none !important;\n}\n#content > ::slotted(*) {\n  grid-column: 1;\n  grid-row: 1;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity var(--transition-duration) ease-in-out, visibility var(--transition-duration) ease-in-out;\n}\n#content > ::slotted(.active) {\n  opacity: 1;\n  visibility: visible;\n}\n#content > ::slotted(.prev), #content > ::slotted(.next) {\n  opacity: 0;\n  visibility: hidden;\n}\n\n#navigation {\n  z-index: 110;\n  position: absolute;\n  inset: var(--nav-inset);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  pointer-events: none;\n  padding: 0 1rem;\n}\n\n#navigation button {\n  pointer-events: auto;\n  width: var(--nav-button-size);\n  height: var(--nav-button-size);\n  border: none;\n  border-radius: 50%;\n  background: var(--nav-button-bg);\n  color: var(--nav-button-color);\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: background var(--transition-duration);\n}\n#navigation button:focus-visible {\n  outline: 2px solid var(--nav-button-color);\n  outline-offset: 2px;\n}\n\n#indicator {\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: var(--indicator-gap);\n  z-index: 100;\n}\n\n#indicator button {\n  width: var(--indicator-size);\n  height: var(--indicator-size);\n  border: none;\n  border-radius: 50%;\n  background: var(--indicator-color);\n  cursor: pointer;\n  padding: 0;\n  transition: background var(--transition-duration), transform var(--transition-duration);\n}\n#indicator button:hover {\n  transform: scale(1.2);\n}\n#indicator button[active] {\n  background: var(--indicator-active-color);\n}\n#indicator button:focus-visible {\n  outline: 2px solid var(--indicator-active-color);\n  outline-offset: 2px;\n}";
var __create$7 = Object.create;
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __knownSymbol$7 = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$7 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$7 = (target, value) => __defProp$7(target, "name", { value, configurable: true });
var __decoratorStart$7 = (base) => [, , , __create$7(base?.[__knownSymbol$7("metadata")] ?? null)];
var __decoratorStrings$7 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$7 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$7("Function expected") : fn;
var __decoratorContext$7 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$7[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$7("Already initialized") : fns.push(__expectFn$7(fn || null)) });
var __decoratorMetadata$7 = (array, target) => __defNormalProp$7(target, __knownSymbol$7("metadata"), array[3]);
var __runInitializers$7 = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$7 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$7[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$7(k < 4 ? target : { get [name]() {
    return __privateGet$6(this, extra);
  }, set [name](x) {
    return __privateSet$6(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$7(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$7(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$7(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$6(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$6 : __privateMethod$6)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$6(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$7(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$7("Object expected");
    else __expectFn$7(fn = it.get) && (desc.get = fn), __expectFn$7(fn = it.set) && (desc.set = fn), __expectFn$7(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$7(array, target), desc && __defProp$7(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$6 = (obj, member, msg) => member.has(obj) || __typeError$7("Cannot " + msg);
var __privateIn$6 = (member, obj) => Object(obj) !== obj ? __typeError$7('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$6 = (obj, member, getter) => (__accessCheck$6(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$6 = (obj, member, value) => member.has(obj) ? __typeError$7("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$6 = (obj, member, value, setter) => (__accessCheck$6(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$6 = (obj, member, method) => (__accessCheck$6(obj, member, "access private method"), method);
var _slottedElements_dec, _autoplayInterval_dec, _autoplay_dec, _activeIndex_dec, _name_dec$1, _a$7, _NteSliderElement_decorators, _init$7, _name$1, _activeIndex, _autoplay, _autoplayInterval, _slides, _slottedElements;
_NteSliderElement_decorators = [t("nte-slider")];
class NteSliderElement extends (_a$7 = Et(
  st(yt(pt(i)))
), _name_dec$1 = [n({ type: String, reflect: true })], _activeIndex_dec = [n({ type: Number, reflect: true, attribute: "active-index" })], _autoplay_dec = [n({ type: Boolean, reflect: true })], _autoplayInterval_dec = [n({ type: Number, attribute: "autoplay-interval" })], _slottedElements_dec = [o$2()], _a$7) {
  constructor() {
    super(...arguments);
    __privateAdd$6(this, _name$1, __runInitializers$7(_init$7, 8, this, "nte-slider")), __runInitializers$7(_init$7, 11, this);
    __privateAdd$6(this, _activeIndex, __runInitializers$7(_init$7, 12, this, 0)), __runInitializers$7(_init$7, 15, this);
    __privateAdd$6(this, _autoplay, __runInitializers$7(_init$7, 16, this, false)), __runInitializers$7(_init$7, 19, this);
    __privateAdd$6(this, _autoplayInterval, __runInitializers$7(_init$7, 20, this, 5e3)), __runInitializers$7(_init$7, 23, this);
    __privateAdd$6(this, _slides, []);
    this.autoplayTimer = void 0;
    __privateAdd$6(this, _slottedElements, __runInitializers$7(_init$7, 24, this)), __runInitializers$7(_init$7, 27, this);
  }
  get slides() {
    return __privateGet$6(this, _slides);
  }
  set slides(_) {
    __privateSet$6(this, _slides, _);
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.autoplay) {
      this.startAutoplay();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAutoplay();
  }
  handleSlotChange() {
    this.warn("handleSlotChange: slides = ", this.slottedElements, "");
    this.slides = this.slottedElements.filter((el) => el.matches(":not(hr)"));
    this.setActiveSlide(this.activeIndex);
  }
  setActiveSlide(activeIndex) {
    this.slides.forEach((slide, index) => {
      slide.classList.remove("prev", "active", "next");
      if (index === activeIndex) {
        slide.classList.add("active");
      }
    });
    this.renderIndicators();
  }
  /**
   * NAVIGATION
   * @private
   */
  goToSlide(index) {
    if (index < 0) {
      index = this.slides.length - 1;
    }
    if (index >= this.slides.length) {
      index = 0;
    }
    this.activeIndex = index;
    this.setActiveSlide(index);
    this.dispatchEvent(new CustomEvent("slide-change", { detail: { index: this.activeIndex } }));
  }
  next() {
    this.goToSlide(this.activeIndex + 1);
  }
  prev() {
    this.goToSlide(this.activeIndex - 1);
  }
  /**
   * AUTO PLAY
   * @private
   */
  startAutoplay() {
    this.stopAutoplay();
    this.autoplayTimer = window.setInterval(() => this.next(), this.autoplayInterval);
  }
  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = void 0;
    }
  }
  /**
   * INDICATORS
   * @private
   */
  renderIndicators() {
    const container = this.shadowRoot?.getElementById("indicator");
    if (!container) return;
    container.innerHTML = "";
    this.slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.part.add("indicator-dot");
      dot.toggleAttribute("active", index === this.activeIndex);
      dot.addEventListener("click", () => this.goToSlide(index));
      container.appendChild(dot);
    });
  }
  render() {
    return b`
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
    `;
  }
}
_init$7 = __decoratorStart$7(_a$7);
_name$1 = /* @__PURE__ */ new WeakMap();
_activeIndex = /* @__PURE__ */ new WeakMap();
_autoplay = /* @__PURE__ */ new WeakMap();
_autoplayInterval = /* @__PURE__ */ new WeakMap();
_slides = /* @__PURE__ */ new WeakMap();
_slottedElements = /* @__PURE__ */ new WeakMap();
__decorateElement$7(_init$7, 4, "name", _name_dec$1, NteSliderElement, _name$1);
__decorateElement$7(_init$7, 4, "activeIndex", _activeIndex_dec, NteSliderElement, _activeIndex);
__decorateElement$7(_init$7, 4, "autoplay", _autoplay_dec, NteSliderElement, _autoplay);
__decorateElement$7(_init$7, 4, "autoplayInterval", _autoplayInterval_dec, NteSliderElement, _autoplayInterval);
__decorateElement$7(_init$7, 4, "slottedElements", _slottedElements_dec, NteSliderElement, _slottedElements);
NteSliderElement = __decorateElement$7(_init$7, 0, "NteSliderElement", _NteSliderElement_decorators, NteSliderElement);
NteSliderElement.styles = [r(style$7), r(resetStyle)];
__runInitializers$7(_init$7, 1, NteSliderElement);
const style$6 = '/* The ShadowDOM Styles */\n:host {\n  --container-width: var(--nt-container-width, 100%);\n  --min-width: unset;\n  --max-width: unset;\n  --gutter-x: var(--nt-spacing-layout);\n  --gutter-y: var(--nt-spacing-layout);\n  --breakpoint: xl;\n  display: block;\n  box-sizing: border-box;\n}\n\n#container {\n  margin: 0 auto;\n  width: var(--container-width);\n  box-sizing: border-box;\n}\n\n#header:has(.slot-empty),\n#footer:has(.slot-empty) {\n  display: none;\n}\n\n#main {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: var(--gutter-y, 0px) var(--gutter-x, 0px);\n}\n#main ::slotted(*) {\n  box-sizing: border-box;\n  flex: 0 1 calc(8.3333333333% * var(--cols, 12) - var(--gutter-x, 0px) * (12 - var(--cols, 12)) / 12);\n  width: calc(8.3333333333% * var(--cols, 12) - var(--gutter-x, 0px) * (12 - var(--cols, 12)) / 12);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  overflow: hidden;\n}\n\n:host([cols="1"]) {\n  --cols: 1;\n}\n\n#main ::slotted([cols="1"]) {\n  --cols: 1;\n}\n\n:host([cols="2"]) {\n  --cols: 2;\n}\n\n#main ::slotted([cols="2"]) {\n  --cols: 2;\n}\n\n:host([cols="3"]) {\n  --cols: 3;\n}\n\n#main ::slotted([cols="3"]) {\n  --cols: 3;\n}\n\n:host([cols="4"]) {\n  --cols: 4;\n}\n\n#main ::slotted([cols="4"]) {\n  --cols: 4;\n}\n\n:host([cols="5"]) {\n  --cols: 5;\n}\n\n#main ::slotted([cols="5"]) {\n  --cols: 5;\n}\n\n:host([cols="6"]) {\n  --cols: 6;\n}\n\n#main ::slotted([cols="6"]) {\n  --cols: 6;\n}\n\n:host([cols="7"]) {\n  --cols: 7;\n}\n\n#main ::slotted([cols="7"]) {\n  --cols: 7;\n}\n\n:host([cols="8"]) {\n  --cols: 8;\n}\n\n#main ::slotted([cols="8"]) {\n  --cols: 8;\n}\n\n:host([cols="9"]) {\n  --cols: 9;\n}\n\n#main ::slotted([cols="9"]) {\n  --cols: 9;\n}\n\n:host([cols="10"]) {\n  --cols: 10;\n}\n\n#main ::slotted([cols="10"]) {\n  --cols: 10;\n}\n\n:host([cols="11"]) {\n  --cols: 11;\n}\n\n#main ::slotted([cols="11"]) {\n  --cols: 11;\n}\n\n:host([cols="12"]) {\n  --cols: 12;\n}\n\n#main ::slotted([cols="12"]) {\n  --cols: 12;\n}\n\n:host([mode=desktop]) #main {\n  flex-direction: row;\n}\n\n:host([mode=mobile]) #container {\n  width: 100%;\n}\n:host([mode=mobile]) #main {\n  flex-direction: column;\n}\n:host([mode=mobile]) #main ::slotted(*) {\n  --gutter-x: 0px;\n  flex: 0 0 100%;\n  width: 100%;\n}';
var __create$6 = Object.create;
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __knownSymbol$6 = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$6 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$6 = (target, value) => __defProp$6(target, "name", { value, configurable: true });
var __decoratorStart$6 = (base) => [, , , __create$6(base?.[__knownSymbol$6("metadata")] ?? null)];
var __decoratorStrings$6 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$6 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$6("Function expected") : fn;
var __decoratorContext$6 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$6[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$6("Already initialized") : fns.push(__expectFn$6(fn || null)) });
var __decoratorMetadata$6 = (array, target) => __defNormalProp$6(target, __knownSymbol$6("metadata"), array[3]);
var __runInitializers$6 = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) fns[i2].call(self);
  return value;
};
var __decorateElement$6 = (array, flags, name, decorators, target, extra) => {
  var it, done, ctx, k = flags & 7, p = false;
  var j = 0;
  var extraInitializers = array[j] || (array[j] = []);
  var desc = k && (target = target.prototype, k < 5 && (k > 3 || !p) && __getOwnPropDesc$6(target, name));
  __name$6(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$6(k, name, done = {}, array[3], extraInitializers);
    it = (0, decorators[i2])(target, ctx), done._ = 1;
    __expectFn$6(it) && (target = it);
  }
  return __decoratorMetadata$6(array, target), desc && __defProp$6(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var _NtlCardRowElement_decorators, _init$6, _a$6;
_NtlCardRowElement_decorators = [t("ntl-card-row")];
const _NtlCardRowElement = class _NtlCardRowElement extends (_a$6 = nextrap_element({
  breakpoints: true,
  subLayoutApply: true
})) {
  beforeLayoutCallback(sourceElement) {
    const slottedHeader = sourceElement.querySelector(':scope > section > [slot="header"]');
    if (slottedHeader instanceof HTMLElement) {
      const headerSection = slottedHeader.parentElement;
      const firstHeader = Array.from(sourceElement.children).find(
        (child) => child.matches(".header, h1, h2, h3, h4, h5, h6")
      );
      firstHeader?.setAttribute("slot", "header");
      if (firstHeader) {
        firstHeader.after(slottedHeader);
      } else {
        sourceElement.prepend(slottedHeader);
      }
      if (headerSection?.matches("section") && headerSection.children.length === 0 && headerSection.textContent?.trim() === "") {
        headerSection.remove();
      }
    }
    return false;
  }
  render() {
    return b`
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
    `;
  }
};
_NtlCardRowElement.styles = [r(style$6), r(resetStyle)];
let NtlCardRowElement = _NtlCardRowElement;
_init$6 = __decoratorStart$6(_a$6);
NtlCardRowElement = __decorateElement$6(_init$6, 0, "NtlCardRowElement", _NtlCardRowElement_decorators, NtlCardRowElement);
__runInitializers$6(_init$6, 1, NtlCardRowElement);
const style$5 = "/* The ShadowDOM Styles */\n:host {\n  --container-width: var(--nt-container-width) /* Refer to README.md for style guidelines */;\n  --gap: var(--nt-spacing-layout);\n  --breakpoint: md, lg;\n  --columns: var(--cols, 3);\n  --columns-tablet: var(--cols-tablet, 2);\n  --columns-mobile: var(--cols-mobile, 1);\n  --min-width: 0px;\n  --max-width: unset;\n}\n\n:host([mode=tablet]:not(.with-min-width)) #main {\n  grid-template-columns: repeat(var(--columns-tablet), minmax(0, 1fr));\n}\n:host([mode=tablet]:not(.with-min-width)) #content-wrapper {\n  flex-direction: column;\n}\n\n:host([mode=mobile]:not(.with-min-width)) #main {\n  grid-template-columns: repeat(var(--columns-mobile), minmax(0, 1fr));\n}\n:host([mode=mobile]:not(.with-min-width)) #content-wrapper {\n  flex-direction: column;\n}\n\n#wrapper {\n  width: var(--container-width);\n  margin: 0 auto;\n}\n\n#content-wrapper {\n  display: flex;\n  flex-direction: row;\n  gap: var(--gap);\n  margin-top: var(--gap);\n  margin-bottom: var(--gap);\n}\n#content-wrapper > * {\n  flex: 1 1 auto;\n}\n\n#main {\n  display: grid;\n  gap: var(--gap);\n  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));\n}\n#main > ::slotted(*) {\n  width: 100%;\n  max-width: var(--max-width);\n  height: 100%;\n}\n\n:host(.with-min-width) #main {\n  grid-template-columns: repeat(auto-fit, minmax(min(var(--min-width), 100%), 1fr));\n}";
var __create$5 = Object.create;
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __knownSymbol$5 = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$5 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$5 = (target, value) => __defProp$5(target, "name", { value, configurable: true });
var __decoratorStart$5 = (base) => [, , , __create$5(base?.[__knownSymbol$5("metadata")] ?? null)];
var __decoratorStrings$5 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$5 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$5("Function expected") : fn;
var __decoratorContext$5 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$5[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$5("Already initialized") : fns.push(__expectFn$5(fn || null)) });
var __decoratorMetadata$5 = (array, target) => __defNormalProp$5(target, __knownSymbol$5("metadata"), array[3]);
var __runInitializers$5 = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$5 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$5[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$5(k < 4 ? target : { get [name]() {
    return __privateGet$5(this, extra);
  }, set [name](x) {
    return __privateSet$5(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$5(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$5(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$5(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$5(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$5 : __privateMethod$5)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$5(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$5(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$5("Object expected");
    else __expectFn$5(fn = it.get) && (desc.get = fn), __expectFn$5(fn = it.set) && (desc.set = fn), __expectFn$5(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$5(array, target), desc && __defProp$5(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$5 = (obj, member, msg) => member.has(obj) || __typeError$5("Cannot " + msg);
var __privateIn$5 = (member, obj) => Object(obj) !== obj ? __typeError$5('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$5 = (obj, member, getter) => (__accessCheck$5(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$5 = (obj, member, value) => member.has(obj) ? __typeError$5("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$5 = (obj, member, value, setter) => (__accessCheck$5(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$5 = (obj, member, method) => (__accessCheck$5(obj, member, "access private method"), method);
var _name_dec, _childLayout_dec, _a$5, _NtlCardGridElement_decorators, _init$5, _childLayout, _name;
_NtlCardGridElement_decorators = [t("ntl-card-grid")];
class NtlCardGridElement extends (_a$5 = nextrap_element({
  breakpoints: true,
  subLayoutApply: true
}), _childLayout_dec = [n({ type: String, reflect: true })], _name_dec = [n({ type: String, reflect: true })], _a$5) {
  constructor() {
    super(...arguments);
    __privateAdd$5(this, _childLayout, __runInitializers$5(_init$5, 8, this, "nte-card.style-parent")), __runInitializers$5(_init$5, 11, this);
    __privateAdd$5(this, _name, __runInitializers$5(_init$5, 12, this, "ntl-card-grid")), __runInitializers$5(_init$5, 15, this);
  }
  render() {
    return b`
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
    `;
  }
}
_init$5 = __decoratorStart$5(_a$5);
_childLayout = /* @__PURE__ */ new WeakMap();
_name = /* @__PURE__ */ new WeakMap();
__decorateElement$5(_init$5, 4, "childLayout", _childLayout_dec, NtlCardGridElement, _childLayout);
__decorateElement$5(_init$5, 4, "name", _name_dec, NtlCardGridElement, _name);
NtlCardGridElement = __decorateElement$5(_init$5, 0, "NtlCardGridElement", _NtlCardGridElement_decorators, NtlCardGridElement);
NtlCardGridElement.styles = [r(style$5), r(resetStyle)];
__runInitializers$5(_init$5, 1, NtlCardGridElement);
const style$4 = ':host {\n  display: block;\n}\n\n#details {\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n}\n\n#summary {\n  order: 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  list-style: none;\n}\n#summary::-webkit-details-marker {\n  display: none;\n}\n#summary::marker {\n  display: none;\n  content: "";\n}\n\n#content-wrap {\n  height: 0;\n  overflow: hidden;\n  transition: height var(--transition-duration, 350ms) ease;\n}\n\n#title {\n  flex: 1;\n  min-width: 0;\n}\n\n#marker {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--marker-size, 1.25rem);\n  height: var(--marker-size, 1.25rem);\n  flex-shrink: 0;\n  color: var(--marker-color, currentColor);\n}\n#marker::before {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  mask-size: contain;\n  mask-repeat: no-repeat;\n  mask-position: center;\n  mask-image: var(--marker-icon-closed, none);\n  -webkit-mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n  -webkit-mask-position: center;\n  -webkit-mask-image: var(--marker-icon-closed, none);\n}\n\n:host([open]) #marker::before {\n  mask-image: var(--marker-icon-open, var(--marker-icon-closed, none));\n  -webkit-mask-image: var(--marker-icon-open, var(--marker-icon-closed, none));\n}\n\n:host([marker-icon=plus]) #marker::before {\n  mask-image: var(--marker-icon-plus, var(--marker-icon-closed, none));\n  -webkit-mask-image: var(--marker-icon-plus, var(--marker-icon-closed, none));\n}\n\n:host([marker-icon=plus][open]) #marker::before {\n  mask-image: var(--marker-icon-minus, var(--marker-icon-open, none));\n  -webkit-mask-image: var(--marker-icon-minus, var(--marker-icon-open, none));\n}\n\n:host([marker-position=start]) #marker {\n  order: -1;\n}\n\n#summary:focus-visible {\n  outline: var(--focus-outline, 2px solid currentColor);\n  outline-offset: -2px;\n}';
var __create$4 = Object.create;
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __knownSymbol$4 = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$4 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$4 = (target, value) => __defProp$4(target, "name", { value, configurable: true });
var __decoratorStart$4 = (base) => [, , , __create$4(base?.[__knownSymbol$4("metadata")] ?? null)];
var __decoratorStrings$4 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$4 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$4("Function expected") : fn;
var __decoratorContext$4 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$4[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$4("Already initialized") : fns.push(__expectFn$4(fn || null)) });
var __decoratorMetadata$4 = (array, target) => __defNormalProp$4(target, __knownSymbol$4("metadata"), array[3]);
var __runInitializers$4 = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$4 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$4[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$4(k < 4 ? target : { get [name]() {
    return __privateGet$4(this, extra);
  }, set [name](x) {
    return __privateSet$4(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$4(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$4(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$4(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$4(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$4 : __privateMethod$4)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$4(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$4(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$4("Object expected");
    else __expectFn$4(fn = it.get) && (desc.get = fn), __expectFn$4(fn = it.set) && (desc.set = fn), __expectFn$4(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$4(array, target), desc && __defProp$4(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$4 = (obj, member, msg) => member.has(obj) || __typeError$4("Cannot " + msg);
var __privateIn$4 = (member, obj) => Object(obj) !== obj ? __typeError$4('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$4 = (obj, member, getter) => (__accessCheck$4(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$4 = (obj, member, value) => member.has(obj) ? __typeError$4("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$4 = (obj, member, value, setter) => (__accessCheck$4(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$4 = (obj, member, method) => (__accessCheck$4(obj, member, "access private method"), method);
var _markerIcon_dec$1, _markerPosition_dec$1, _open_dec, _a$4, _NteAccordionItemElement_decorators, _init$4, _open, _markerPosition$1, _markerIcon$1;
_NteAccordionItemElement_decorators = [t("nte-accordion-item")];
class NteAccordionItemElement extends (_a$4 = st(
  nextrap_element({
    slotVisibility: false,
    eventBinding: false
  })
), _open_dec = [n({ type: Boolean, reflect: true })], _markerPosition_dec$1 = [n({ type: String, reflect: true, attribute: "marker-position" })], _markerIcon_dec$1 = [n({ type: String, reflect: true, attribute: "marker-icon" })], _a$4) {
  constructor() {
    super(...arguments);
    __privateAdd$4(this, _open, __runInitializers$4(_init$4, 8, this, false)), __runInitializers$4(_init$4, 11, this);
    __privateAdd$4(this, _markerPosition$1, __runInitializers$4(_init$4, 12, this, "end")), __runInitializers$4(_init$4, 15, this);
    __privateAdd$4(this, _markerIcon$1, __runInitializers$4(_init$4, 16, this, null)), __runInitializers$4(_init$4, 19, this);
    this._detailsElement = null;
    this._contentWrapElement = null;
    this._transitionEndHandler = null;
    this._animationFrame = 0;
    this._isReady = false;
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this._detailsElement = this.shadowRoot?.querySelector("#details") ?? null;
    this._contentWrapElement = this.shadowRoot?.querySelector("#content-wrap") ?? null;
    this._isReady = true;
    this._applyOpenState(false);
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("open") && this._isReady) {
      this._applyOpenState(true);
      this._dispatchToggle();
    }
  }
  disconnectedCallback() {
    this._clearAnimationState();
    super.disconnectedCallback();
  }
  _onSummaryClick(e2) {
    e2.preventDefault();
    this.open = !this.open;
  }
  _applyOpenState(animate) {
    if (this.open) {
      this._expandContent(animate);
      return;
    }
    this._collapseContent(animate);
  }
  _expandContent(animate) {
    if (!this._detailsElement || !this._contentWrapElement) return;
    const details = this._detailsElement;
    const wrap2 = this._contentWrapElement;
    this._clearAnimationState();
    details.open = true;
    if (!animate) {
      wrap2.style.height = "auto";
      return;
    }
    const startHeight = wrap2.getBoundingClientRect().height;
    wrap2.style.height = `${startHeight}px`;
    void wrap2.offsetHeight;
    const targetHeight = wrap2.scrollHeight;
    if (Math.abs(targetHeight - startHeight) < 1) {
      wrap2.style.height = "auto";
      return;
    }
    this._animationFrame = requestAnimationFrame(() => {
      wrap2.style.height = `${targetHeight}px`;
    });
    this._transitionEndHandler = (event) => {
      if (event.target !== wrap2 || event.propertyName !== "height") return;
      this._clearAnimationState();
      wrap2.style.height = "auto";
    };
    wrap2.addEventListener("transitionend", this._transitionEndHandler);
  }
  _collapseContent(animate) {
    if (!this._detailsElement || !this._contentWrapElement) return;
    const details = this._detailsElement;
    const wrap2 = this._contentWrapElement;
    this._clearAnimationState();
    if (!animate) {
      details.open = false;
      wrap2.style.height = "0px";
      return;
    }
    if (!details.open) {
      wrap2.style.height = "0px";
      return;
    }
    const startHeight = wrap2.getBoundingClientRect().height || wrap2.scrollHeight;
    wrap2.style.height = `${startHeight}px`;
    void wrap2.offsetHeight;
    this._animationFrame = requestAnimationFrame(() => {
      wrap2.style.height = "0px";
    });
    this._transitionEndHandler = (event) => {
      if (event.target !== wrap2 || event.propertyName !== "height") return;
      this._clearAnimationState();
      details.open = false;
      wrap2.style.height = "0px";
    };
    wrap2.addEventListener("transitionend", this._transitionEndHandler);
  }
  _clearAnimationState() {
    if (this._animationFrame) {
      cancelAnimationFrame(this._animationFrame);
      this._animationFrame = 0;
    }
    if (this._contentWrapElement && this._transitionEndHandler) {
      this._contentWrapElement.removeEventListener("transitionend", this._transitionEndHandler);
      this._transitionEndHandler = null;
    }
  }
  _dispatchToggle() {
    this.dispatchEvent(
      new CustomEvent("accordion-toggle", {
        detail: { open: this.open },
        bubbles: true,
        composed: true
      })
    );
  }
  render() {
    return b`
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
    `;
  }
}
_init$4 = __decoratorStart$4(_a$4);
_open = /* @__PURE__ */ new WeakMap();
_markerPosition$1 = /* @__PURE__ */ new WeakMap();
_markerIcon$1 = /* @__PURE__ */ new WeakMap();
__decorateElement$4(_init$4, 4, "open", _open_dec, NteAccordionItemElement, _open);
__decorateElement$4(_init$4, 4, "markerPosition", _markerPosition_dec$1, NteAccordionItemElement, _markerPosition$1);
__decorateElement$4(_init$4, 4, "markerIcon", _markerIcon_dec$1, NteAccordionItemElement, _markerIcon$1);
NteAccordionItemElement = __decorateElement$4(_init$4, 0, "NteAccordionItemElement", _NteAccordionItemElement_decorators, NteAccordionItemElement);
NteAccordionItemElement.styles = [r(resetStyle), r(style$4)];
__runInitializers$4(_init$4, 1, NteAccordionItemElement);
const style$3 = ":host {\n  display: block;\n}\n\n#accordion {\n  display: block;\n}";
var __create$3 = Object.create;
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __knownSymbol$3 = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$3 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$3 = (target, value) => __defProp$3(target, "name", { value, configurable: true });
var __decoratorStart$3 = (base) => [, , , __create$3(base?.[__knownSymbol$3("metadata")] ?? null)];
var __decoratorStrings$3 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$3 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$3("Function expected") : fn;
var __decoratorContext$3 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$3[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$3("Already initialized") : fns.push(__expectFn$3(fn || null)) });
var __decoratorMetadata$3 = (array, target) => __defNormalProp$3(target, __knownSymbol$3("metadata"), array[3]);
var __runInitializers$3 = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$3 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$3[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$3(k < 4 ? target : { get [name]() {
    return __privateGet$3(this, extra);
  }, set [name](x) {
    return __privateSet$3(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$3(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$3(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$3(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$3(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$3 : __privateMethod$3)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$3(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$3(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$3("Object expected");
    else __expectFn$3(fn = it.get) && (desc.get = fn), __expectFn$3(fn = it.set) && (desc.set = fn), __expectFn$3(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$3(array, target), desc && __defProp$3(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$3 = (obj, member, msg) => member.has(obj) || __typeError$3("Cannot " + msg);
var __privateIn$3 = (member, obj) => Object(obj) !== obj ? __typeError$3('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$3 = (obj, member, getter) => (__accessCheck$3(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$3 = (obj, member, value) => member.has(obj) ? __typeError$3("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$3 = (obj, member, value, setter) => (__accessCheck$3(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$3 = (obj, member, method) => (__accessCheck$3(obj, member, "access private method"), method);
var _markerIcon_dec, _markerPosition_dec, _initialOpenIndex_dec, _exclusive_dec, _a$3, _NteAccordionElement_decorators, _init$3, _exclusive, _initialOpenIndex, _markerPosition, _markerIcon;
const initialOpenIndexConverter = {
  fromAttribute(value) {
    if (value === null) return void 0;
    if (value === "") return 0;
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? void 0 : parsed;
  },
  toAttribute(value) {
    return value !== void 0 ? String(value) : null;
  }
};
_NteAccordionElement_decorators = [t("nte-accordion")];
class NteAccordionElement extends (_a$3 = nextrap_element({
  slotVisibility: false,
  eventBinding: false,
  subLayoutApply: true
}), _exclusive_dec = [n({ type: Boolean, reflect: true })], _initialOpenIndex_dec = [n({ converter: initialOpenIndexConverter, attribute: "initial-open-index" })], _markerPosition_dec = [n({ type: String, reflect: true, attribute: "marker-position" })], _markerIcon_dec = [n({ type: String, reflect: true, attribute: "marker-icon" })], _a$3) {
  constructor() {
    super(...arguments);
    __privateAdd$3(this, _exclusive, __runInitializers$3(_init$3, 8, this, true)), __runInitializers$3(_init$3, 11, this);
    __privateAdd$3(this, _initialOpenIndex, __runInitializers$3(_init$3, 12, this, 0)), __runInitializers$3(_init$3, 15, this);
    __privateAdd$3(this, _markerPosition, __runInitializers$3(_init$3, 16, this, null)), __runInitializers$3(_init$3, 19, this);
    __privateAdd$3(this, _markerIcon, __runInitializers$3(_init$3, 20, this, null)), __runInitializers$3(_init$3, 23, this);
    this._initialized = false;
    this._onSlotChange = () => {
      this._propagateProperties();
      this._applyInitialOpenIndex();
    };
    this._onItemToggle = (e2) => {
      if (!this.exclusive || !e2.detail.open) return;
      const target = e2.target;
      for (const item of this._getAccordionItems()) {
        if (item !== target && item.open) item.open = false;
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.classList.add("nte-accordion");
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.addEventListener("accordion-toggle", this._onItemToggle);
    this._onSlotChange();
  }
  _propagateProperties() {
    for (const item of this._getAccordionItems()) {
      if (this.markerPosition && !item.hasAttribute("marker-position")) item.markerPosition = this.markerPosition;
      if (this.markerIcon && !item.hasAttribute("marker-icon")) item.markerIcon = this.markerIcon;
    }
  }
  _applyInitialOpenIndex() {
    if (this._initialized || this.initialOpenIndex === void 0) return;
    this._initialized = true;
    const items = this._getAccordionItems();
    if (this.initialOpenIndex >= 0 && this.initialOpenIndex < items.length) items[this.initialOpenIndex].open = true;
  }
  _getAccordionItems() {
    const slot = this.shadowRoot?.querySelector("slot:not([name])");
    if (!slot) return [];
    return slot.assignedElements({ flatten: true }).filter((el) => el.tagName === "NTE-ACCORDION-ITEM");
  }
  render() {
    return b`
      <div id="accordion" part="accordion">
        <slot
          data-query=":scope > section:not(.keep)"
          data-set-attribute-layout="nte-accordion-item"
          @slotchange=${this._onSlotChange}
        ></slot>
      </div>
    `;
  }
}
_init$3 = __decoratorStart$3(_a$3);
_exclusive = /* @__PURE__ */ new WeakMap();
_initialOpenIndex = /* @__PURE__ */ new WeakMap();
_markerPosition = /* @__PURE__ */ new WeakMap();
_markerIcon = /* @__PURE__ */ new WeakMap();
__decorateElement$3(_init$3, 4, "exclusive", _exclusive_dec, NteAccordionElement, _exclusive);
__decorateElement$3(_init$3, 4, "initialOpenIndex", _initialOpenIndex_dec, NteAccordionElement, _initialOpenIndex);
__decorateElement$3(_init$3, 4, "markerPosition", _markerPosition_dec, NteAccordionElement, _markerPosition);
__decorateElement$3(_init$3, 4, "markerIcon", _markerIcon_dec, NteAccordionElement, _markerIcon);
NteAccordionElement = __decorateElement$3(_init$3, 0, "NteAccordionElement", _NteAccordionElement_decorators, NteAccordionElement);
NteAccordionElement.styles = [r(resetStyle), r(style$3)];
__runInitializers$3(_init$3, 1, NteAccordionElement);
const style$2 = ":host {\n  --breakpoint: lg;\n  display: block;\n  isolation: isolate;\n}\n\n:host([consentgiven=true]) #pre-consent,\n:host([consentgiven=true]) #background {\n  z-index: 0;\n  opacity: 0;\n}\n:host([consentgiven=true]) #consented-content {\n  z-index: 99;\n  opacity: 1;\n}\n:host([consentgiven=true]) #loading-text {\n  opacity: 1;\n}\n\n#wrapper {\n  display: grid;\n  grid-template-rows: minmax(0, 1fr);\n  height: 100%;\n}\n#wrapper > * {\n  grid-area: 1/1;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n#pre-consent {\n  opacity: 1;\n  z-index: 99;\n}\n\n#background {\n  opacity: 1;\n}\n\n#consented-content {\n  z-index: 0;\n  opacity: 0;\n}\n\n#loading-text {\n  opacity: 0;\n  z-index: 5;\n}";
var __create$2 = Object.create;
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __knownSymbol$2 = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$2 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$2 = (target, value) => __defProp$2(target, "name", { value, configurable: true });
var __decoratorStart$2 = (base) => [, , , __create$2(base?.[__knownSymbol$2("metadata")] ?? null)];
var __decoratorStrings$2 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$2 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$2("Function expected") : fn;
var __decoratorContext$2 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$2[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$2("Already initialized") : fns.push(__expectFn$2(fn || null)) });
var __decoratorMetadata$2 = (array, target) => __defNormalProp$2(target, __knownSymbol$2("metadata"), array[3]);
var __runInitializers$2 = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$2 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$2[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$2(k < 4 ? target : { get [name]() {
    return __privateGet$2(this, extra);
  }, set [name](x) {
    return __privateSet$2(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$2(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$2(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$2(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$2(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$2 : __privateMethod$2)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$2(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$2(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$2("Object expected");
    else __expectFn$2(fn = it.get) && (desc.get = fn), __expectFn$2(fn = it.set) && (desc.set = fn), __expectFn$2(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$2(array, target), desc && __defProp$2(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$2 = (obj, member, msg) => member.has(obj) || __typeError$2("Cannot " + msg);
var __privateIn$2 = (member, obj) => Object(obj) !== obj ? __typeError$2('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$2 = (obj, member, getter) => (__accessCheck$2(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$2 = (obj, member, value) => member.has(obj) ? __typeError$2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$2 = (obj, member, value, setter) => (__accessCheck$2(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$2 = (obj, member, method) => (__accessCheck$2(obj, member, "access private method"), method);
var _consentGiven_dec, _onClick_dec, _a$2, _NteConsentBlockerElement_decorators, _NteConsentBlockerElement_instances, giveConsent_fn, _init$2, _consentGiven, readSelector_fn, copyTemplateFromSelector_fn, appendDefaultBackground_fn, appendDefaultPreConsent_fn;
const features = {
  breakpoints: true,
  slotVisibility: true,
  eventBinding: true
};
function stripQuotes(str) {
  return str.replace(/^['"]|['"]$/g, "");
}
_NteConsentBlockerElement_decorators = [t("nte-consent-blocker")];
class NteConsentBlockerElement extends (_a$2 = st(nextrap_element(features)), _onClick_dec = [wt("click", { target: "host" })], _consentGiven_dec = [n({ reflect: true })], _a$2) {
  constructor() {
    super(...arguments);
    __runInitializers$2(_init$2, 5, this);
    __privateAdd$2(this, _NteConsentBlockerElement_instances);
    __privateAdd$2(this, _consentGiven, __runInitializers$2(_init$2, 8, this, false)), __runInitializers$2(_init$2, 11, this);
  }
  async connectedCallback() {
    await Z();
    super.connectedCallback();
    this.classList.add("nte-consent-blocker");
  }
  onClick(e2) {
    if (e2.target instanceof HTMLButtonElement && e2.target.closest('[data-action="consent"]')) {
      __privateMethod$2(this, _NteConsentBlockerElement_instances, giveConsent_fn).call(this);
    }
  }
  // Ergänzt ausschließlich fehlende Light-DOM-Inhalte aus den konfigurierten CSS-Defaults.
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if (this.querySelector(":scope > template") === null) {
      const defaultTemplateSelector = __privateMethod$2(this, _NteConsentBlockerElement_instances, readSelector_fn).call(this, "--default-template-selector");
      if (defaultTemplateSelector) __privateMethod$2(this, _NteConsentBlockerElement_instances, copyTemplateFromSelector_fn).call(this, defaultTemplateSelector);
    }
    if (this.querySelector(':scope > [slot="background"]') === null) {
      const selector = __privateMethod$2(this, _NteConsentBlockerElement_instances, readSelector_fn).call(this, "--default-background-selector");
      if (!selector || !__privateMethod$2(this, _NteConsentBlockerElement_instances, copyTemplateFromSelector_fn).call(this, selector, "background")) __privateMethod$2(this, _NteConsentBlockerElement_instances, appendDefaultBackground_fn).call(this);
    }
    if (this.querySelector(':scope > [slot="pre-consent"]') === null) {
      const selector = __privateMethod$2(this, _NteConsentBlockerElement_instances, readSelector_fn).call(this, "--default-pre-consent-selector");
      if (!selector || !__privateMethod$2(this, _NteConsentBlockerElement_instances, copyTemplateFromSelector_fn).call(this, selector, "pre-consent")) __privateMethod$2(this, _NteConsentBlockerElement_instances, appendDefaultPreConsent_fn).call(this);
    }
  }
  render() {
    return b`
      <div id="wrapper" part="wrapper">
        <div id="background" part="background">
          <slot name="background" data-query=":scope > .background | :scope > p:has(img:not(.keep))"></slot>
        </div>
        <div id="consented-content" part="consented-content"><slot name="consented-content"></slot></div>
        <div id="pre-consent" part="pre-consent"><slot name="pre-consent"></slot></div>
        <div id="loading-text" part="loading-text">Bitte warten...</div>
      </div>
    `;
  }
}
_init$2 = __decoratorStart$2(_a$2);
_NteConsentBlockerElement_instances = /* @__PURE__ */ new WeakSet();
giveConsent_fn = function() {
  const template2 = this.querySelector(":scope > template");
  if (!template2) {
    this.warn(
      "No template found for consented content. Please provide a <template> element as a child of nte-consent-blocker with the consented content."
    );
    return;
  }
  Array.from(template2.content.childNodes).forEach((el) => {
    const clone = el.cloneNode(true);
    if (clone instanceof HTMLElement) {
      clone.setAttribute("slot", "consented-content");
      this.appendChild(clone);
    }
  });
  this.consentGiven = true;
};
_consentGiven = /* @__PURE__ */ new WeakMap();
readSelector_fn = function(propertyName) {
  return stripQuotes(getComputedStyle(this).getPropertyValue(propertyName).trim());
};
copyTemplateFromSelector_fn = function(selector, slotName = null) {
  let source;
  try {
    source = this.ownerDocument.querySelector(selector);
  } catch {
    this.warn(`Invalid default template selector: ${selector}`);
    return false;
  }
  if (!(source instanceof HTMLTemplateElement)) {
    this.warn(`Default template selector does not reference a <template>: ${selector}`);
    return false;
  }
  if (slotName) {
    Array.from(source.content.children).forEach((element) => {
      const clone = element.cloneNode(true);
      clone.setAttribute("slot", slotName);
      this.appendChild(clone);
    });
  } else {
    const template2 = this.ownerDocument.createElement("template");
    template2.content.appendChild(source.content.cloneNode(true));
    this.appendChild(template2);
  }
  return true;
};
appendDefaultBackground_fn = function() {
  const template2 = this.ownerDocument.createElement("template");
  template2.innerHTML = '<img loading="lazy" fetchpriority="low" alt="Karte noch nicht geladen" src="https://cdn.leuffen.de/hyperpage-components/v1.0/google-maps/maps-preview.jpg">';
  const image = template2.content.firstElementChild;
  if (image) {
    image.setAttribute("slot", "background");
    this.appendChild(image);
  }
};
appendDefaultPreConsent_fn = function() {
  const template2 = this.ownerDocument.createElement("template");
  template2.innerHTML = '<button class="btn btn-primary" data-action="consent">Daten von Google laden</button><p>Mit Klick auf Daten von Google laden, wird der externe Inhalt geladen und die zugehörige Datenschutzerklärung akzeptiert.</p>';
  Array.from(template2.content.children).forEach((element) => {
    element.setAttribute("slot", "pre-consent");
    this.appendChild(element);
  });
};
__decorateElement$2(_init$2, 1, "onClick", _onClick_dec, NteConsentBlockerElement);
__decorateElement$2(_init$2, 4, "consentGiven", _consentGiven_dec, NteConsentBlockerElement, _consentGiven);
NteConsentBlockerElement = __decorateElement$2(_init$2, 0, "NteConsentBlockerElement", _NteConsentBlockerElement_decorators, NteConsentBlockerElement);
NteConsentBlockerElement.styles = [r(resetStyle), r(style$2)];
__runInitializers$2(_init$2, 1, NteConsentBlockerElement);
const style$1 = "/* The ShadowDOM Styles */\n:host {\n  display: block;\n  overflow: visible;\n  position: relative;\n}\n\n.parallax-wrapper {\n  position: relative;\n  overflow: visible;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.parallax-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-size: 100% auto;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\nslot {\n  display: none;\n}\n\n::slotted(*) {\n  display: none !important;\n}";
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __knownSymbol$1 = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError$1 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$1 = (target, value) => __defProp$1(target, "name", { value, configurable: true });
var __decoratorStart$1 = (base) => [, , , __create$1(base?.[__knownSymbol$1("metadata")] ?? null)];
var __decoratorStrings$1 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$1 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$1("Function expected") : fn;
var __decoratorContext$1 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$1[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$1("Already initialized") : fns.push(__expectFn$1(fn || null)) });
var __decoratorMetadata$1 = (array, target) => __defNormalProp$1(target, __knownSymbol$1("metadata"), array[3]);
var __runInitializers$1 = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement$1 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$1[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$1(k < 4 ? target : { get [name]() {
    return __privateGet$1(this, extra);
  }, set [name](x) {
    return __privateSet$1(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$1(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$1(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext$1(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$1(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$1 : __privateMethod$1)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet$1(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$1(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$1("Object expected");
    else __expectFn$1(fn = it.get) && (desc.get = fn), __expectFn$1(fn = it.set) && (desc.set = fn), __expectFn$1(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$1(array, target), desc && __defProp$1(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$1 = (obj, member, msg) => member.has(obj) || __typeError$1("Cannot " + msg);
var __privateIn$1 = (member, obj) => Object(obj) !== obj ? __typeError$1('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$1 = (obj, member, getter) => (__accessCheck$1(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$1 = (obj, member, value) => member.has(obj) ? __typeError$1("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$1 = (obj, member, value, setter) => (__accessCheck$1(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$1 = (obj, member, method) => (__accessCheck$1(obj, member, "access private method"), method);
var _backgroundColor_dec, _width_dec, _height_dec, _image_dec, _a$1, _NteParallaxBg_decorators, _init$1, _image, _height, _width, _backgroundColor;
_NteParallaxBg_decorators = [t("nte-parallax-bg")];
class NteParallaxBg extends (_a$1 = pt(i), _image_dec = [n({ type: String })], _height_dec = [n({ type: String })], _width_dec = [n({ type: String })], _backgroundColor_dec = [n({ type: String })], _a$1) {
  constructor() {
    super(...arguments);
    __privateAdd$1(this, _image, __runInitializers$1(_init$1, 8, this, "")), __runInitializers$1(_init$1, 11, this);
    __privateAdd$1(this, _height, __runInitializers$1(_init$1, 12, this, "100vh")), __runInitializers$1(_init$1, 15, this);
    __privateAdd$1(this, _width, __runInitializers$1(_init$1, 16, this, "100%")), __runInitializers$1(_init$1, 19, this);
    __privateAdd$1(this, _backgroundColor, __runInitializers$1(_init$1, 20, this, "transparent")), __runInitializers$1(_init$1, 23, this);
    this.onScroll = () => {
      const scrolled = window.scrollY;
      const rect = this.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const parallaxOffset = (scrolled - elementTop) * -0.3;
      const container = this.shadowRoot?.querySelector(".parallax-container");
      if (container) {
        container.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("scroll", this.onScroll, { passive: true });
    this.updateComplete.then(() => {
      this.setupSlotObserver();
      this.extractImageFromSlot();
      this.onScroll();
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("scroll", this.onScroll);
  }
  setupSlotObserver() {
    const slot = this.shadowRoot?.querySelector("slot");
    if (slot) {
      slot.addEventListener("slotchange", () => {
        this.extractImageFromSlot();
      });
    }
  }
  extractImageFromSlot() {
    const slot = this.shadowRoot?.querySelector("slot");
    if (!slot) {
      return;
    }
    const assignedElements = slot.assignedElements();
    let foundImage = false;
    assignedElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const imgSrc = element.getAttribute("src") || element.querySelector("img")?.getAttribute("src");
        if (imgSrc && imgSrc !== this.image) {
          this.image = imgSrc;
          foundImage = true;
        }
        element.style.display = "none";
      }
    });
    if (foundImage) {
      this.requestUpdate();
    }
  }
  render() {
    return b`
      <div
        class="parallax-wrapper"
        style="height: ${this.height}; width: ${this.width}; background-color: ${this.backgroundColor}"
      >
        <div class="parallax-container" style="background-image: url('${this.image}')"></div>
        <slot></slot>
      </div>
    `;
  }
}
_init$1 = __decoratorStart$1(_a$1);
_image = /* @__PURE__ */ new WeakMap();
_height = /* @__PURE__ */ new WeakMap();
_width = /* @__PURE__ */ new WeakMap();
_backgroundColor = /* @__PURE__ */ new WeakMap();
__decorateElement$1(_init$1, 4, "image", _image_dec, NteParallaxBg, _image);
__decorateElement$1(_init$1, 4, "height", _height_dec, NteParallaxBg, _height);
__decorateElement$1(_init$1, 4, "width", _width_dec, NteParallaxBg, _width);
__decorateElement$1(_init$1, 4, "backgroundColor", _backgroundColor_dec, NteParallaxBg, _backgroundColor);
NteParallaxBg = __decorateElement$1(_init$1, 0, "NteParallaxBg", _NteParallaxBg_decorators, NteParallaxBg);
NteParallaxBg.styles = [r(style$1), r(resetStyle)];
__runInitializers$1(_init$1, 1, NteParallaxBg);
const NTE_ICON_CONFIG = {
  bootstrapIconsFontUrl: "https://cdn.leuffen.de/hyperpage-components/v1.0/fonts/bootstrap-icons.woff2"
};
let registered = false;
function registerBootstrapIconFont() {
  if (registered) return;
  document.fonts.add(new FontFace(
    "bootstrap-icons",
    `url("${NTE_ICON_CONFIG.bootstrapIconsFontUrl}")`,
    { display: "block" }
  ));
  registered = true;
}
const icons = `/*!
 * Bootstrap Icons v1.10.0 class names; Copyright (c) 2019-2021 The Bootstrap Authors.
 * MIT: see LICENSE.bootstrap-icons.md.
 * Source: leuffen/themejs2, font/_vendor/font-bootstrap-icons.scss,
 * blob 9327d76324eb099502c56d6bfadcb82ba564d789; 43 legacy aliases use CDN-compatible glyphs.
 */

/* Die Host-Pseudoelemente zeigen Glyphen mit festen Font-Eigenschaften und vererbter Größe. */
:host::before {
  display: block;
  font-family: 'bootstrap-icons' !important;
  font-style: normal;
  font-weight: normal !important;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Shadow-!important erhält die Glyph-Zuordnung auch neben globalen Bootstrap-Styles. */
:host(.bi-123)::before { content: "\\f67f" !important; }
:host(.bi-alarm-fill)::before { content: "\\f101" !important; }
:host(.bi-alarm)::before { content: "\\f102" !important; }
:host(.bi-align-bottom)::before { content: "\\f103" !important; }
:host(.bi-align-center)::before { content: "\\f104" !important; }
:host(.bi-align-end)::before { content: "\\f105" !important; }
:host(.bi-align-middle)::before { content: "\\f106" !important; }
:host(.bi-align-start)::before { content: "\\f107" !important; }
:host(.bi-align-top)::before { content: "\\f108" !important; }
:host(.bi-alt)::before { content: "\\f109" !important; }
:host(.bi-app-indicator)::before { content: "\\f10a" !important; }
:host(.bi-app)::before { content: "\\f10b" !important; }
:host(.bi-archive-fill)::before { content: "\\f10c" !important; }
:host(.bi-archive)::before { content: "\\f10d" !important; }
:host(.bi-arrow-90deg-down)::before { content: "\\f10e" !important; }
:host(.bi-arrow-90deg-left)::before { content: "\\f10f" !important; }
:host(.bi-arrow-90deg-right)::before { content: "\\f110" !important; }
:host(.bi-arrow-90deg-up)::before { content: "\\f111" !important; }
:host(.bi-arrow-bar-down)::before { content: "\\f112" !important; }
:host(.bi-arrow-bar-left)::before { content: "\\f113" !important; }
:host(.bi-arrow-bar-right)::before { content: "\\f114" !important; }
:host(.bi-arrow-bar-up)::before { content: "\\f115" !important; }
:host(.bi-arrow-clockwise)::before { content: "\\f116" !important; }
:host(.bi-arrow-counterclockwise)::before { content: "\\f117" !important; }
:host(.bi-arrow-down-circle-fill)::before { content: "\\f118" !important; }
:host(.bi-arrow-down-circle)::before { content: "\\f119" !important; }
:host(.bi-arrow-down-left-circle-fill)::before { content: "\\f11a" !important; }
:host(.bi-arrow-down-left-circle)::before { content: "\\f11b" !important; }
:host(.bi-arrow-down-left-square-fill)::before { content: "\\f11c" !important; }
:host(.bi-arrow-down-left-square)::before { content: "\\f11d" !important; }
:host(.bi-arrow-down-left)::before { content: "\\f11e" !important; }
:host(.bi-arrow-down-right-circle-fill)::before { content: "\\f11f" !important; }
:host(.bi-arrow-down-right-circle)::before { content: "\\f120" !important; }
:host(.bi-arrow-down-right-square-fill)::before { content: "\\f121" !important; }
:host(.bi-arrow-down-right-square)::before { content: "\\f122" !important; }
:host(.bi-arrow-down-right)::before { content: "\\f123" !important; }
:host(.bi-arrow-down-short)::before { content: "\\f124" !important; }
:host(.bi-arrow-down-square-fill)::before { content: "\\f125" !important; }
:host(.bi-arrow-down-square)::before { content: "\\f126" !important; }
:host(.bi-arrow-down-up)::before { content: "\\f127" !important; }
:host(.bi-arrow-down)::before { content: "\\f128" !important; }
:host(.bi-arrow-left-circle-fill)::before { content: "\\f129" !important; }
:host(.bi-arrow-left-circle)::before { content: "\\f12a" !important; }
:host(.bi-arrow-left-right)::before { content: "\\f12b" !important; }
:host(.bi-arrow-left-short)::before { content: "\\f12c" !important; }
:host(.bi-arrow-left-square-fill)::before { content: "\\f12d" !important; }
:host(.bi-arrow-left-square)::before { content: "\\f12e" !important; }
:host(.bi-arrow-left)::before { content: "\\f12f" !important; }
:host(.bi-arrow-repeat)::before { content: "\\f130" !important; }
:host(.bi-arrow-return-left)::before { content: "\\f131" !important; }
:host(.bi-arrow-return-right)::before { content: "\\f132" !important; }
:host(.bi-arrow-right-circle-fill)::before { content: "\\f133" !important; }
:host(.bi-arrow-right-circle)::before { content: "\\f134" !important; }
:host(.bi-arrow-right-short)::before { content: "\\f135" !important; }
:host(.bi-arrow-right-square-fill)::before { content: "\\f136" !important; }
:host(.bi-arrow-right-square)::before { content: "\\f137" !important; }
:host(.bi-arrow-right)::before { content: "\\f138" !important; }
:host(.bi-arrow-up-circle-fill)::before { content: "\\f139" !important; }
:host(.bi-arrow-up-circle)::before { content: "\\f13a" !important; }
:host(.bi-arrow-up-left-circle-fill)::before { content: "\\f13b" !important; }
:host(.bi-arrow-up-left-circle)::before { content: "\\f13c" !important; }
:host(.bi-arrow-up-left-square-fill)::before { content: "\\f13d" !important; }
:host(.bi-arrow-up-left-square)::before { content: "\\f13e" !important; }
:host(.bi-arrow-up-left)::before { content: "\\f13f" !important; }
:host(.bi-arrow-up-right-circle-fill)::before { content: "\\f140" !important; }
:host(.bi-arrow-up-right-circle)::before { content: "\\f141" !important; }
:host(.bi-arrow-up-right-square-fill)::before { content: "\\f142" !important; }
:host(.bi-arrow-up-right-square)::before { content: "\\f143" !important; }
:host(.bi-arrow-up-right)::before { content: "\\f144" !important; }
:host(.bi-arrow-up-short)::before { content: "\\f145" !important; }
:host(.bi-arrow-up-square-fill)::before { content: "\\f146" !important; }
:host(.bi-arrow-up-square)::before { content: "\\f147" !important; }
:host(.bi-arrow-up)::before { content: "\\f148" !important; }
:host(.bi-arrows-angle-contract)::before { content: "\\f149" !important; }
:host(.bi-arrows-angle-expand)::before { content: "\\f14a" !important; }
:host(.bi-arrows-collapse)::before { content: "\\f14b" !important; }
:host(.bi-arrows-expand)::before { content: "\\f14c" !important; }
:host(.bi-arrows-fullscreen)::before { content: "\\f14d" !important; }
:host(.bi-arrows-move)::before { content: "\\f14e" !important; }
:host(.bi-aspect-ratio-fill)::before { content: "\\f14f" !important; }
:host(.bi-aspect-ratio)::before { content: "\\f150" !important; }
:host(.bi-asterisk)::before { content: "\\f151" !important; }
:host(.bi-at)::before { content: "\\f152" !important; }
:host(.bi-award-fill)::before { content: "\\f153" !important; }
:host(.bi-award)::before { content: "\\f154" !important; }
:host(.bi-back)::before { content: "\\f155" !important; }
:host(.bi-backspace-fill)::before { content: "\\f156" !important; }
:host(.bi-backspace-reverse-fill)::before { content: "\\f157" !important; }
:host(.bi-backspace-reverse)::before { content: "\\f158" !important; }
:host(.bi-backspace)::before { content: "\\f159" !important; }
:host(.bi-badge-3d-fill)::before { content: "\\f15a" !important; }
:host(.bi-badge-3d)::before { content: "\\f15b" !important; }
:host(.bi-badge-4k-fill)::before { content: "\\f15c" !important; }
:host(.bi-badge-4k)::before { content: "\\f15d" !important; }
:host(.bi-badge-8k-fill)::before { content: "\\f15e" !important; }
:host(.bi-badge-8k)::before { content: "\\f15f" !important; }
:host(.bi-badge-ad-fill)::before { content: "\\f160" !important; }
:host(.bi-badge-ad)::before { content: "\\f161" !important; }
:host(.bi-badge-ar-fill)::before { content: "\\f162" !important; }
:host(.bi-badge-ar)::before { content: "\\f163" !important; }
:host(.bi-badge-cc-fill)::before { content: "\\f164" !important; }
:host(.bi-badge-cc)::before { content: "\\f165" !important; }
:host(.bi-badge-hd-fill)::before { content: "\\f166" !important; }
:host(.bi-badge-hd)::before { content: "\\f167" !important; }
:host(.bi-badge-tm-fill)::before { content: "\\f168" !important; }
:host(.bi-badge-tm)::before { content: "\\f169" !important; }
:host(.bi-badge-vo-fill)::before { content: "\\f16a" !important; }
:host(.bi-badge-vo)::before { content: "\\f16b" !important; }
:host(.bi-badge-vr-fill)::before { content: "\\f16c" !important; }
:host(.bi-badge-vr)::before { content: "\\f16d" !important; }
:host(.bi-badge-wc-fill)::before { content: "\\f16e" !important; }
:host(.bi-badge-wc)::before { content: "\\f16f" !important; }
:host(.bi-bag-check-fill)::before { content: "\\f170" !important; }
:host(.bi-bag-check)::before { content: "\\f171" !important; }
:host(.bi-bag-dash-fill)::before { content: "\\f172" !important; }
:host(.bi-bag-dash)::before { content: "\\f173" !important; }
:host(.bi-bag-fill)::before { content: "\\f174" !important; }
:host(.bi-bag-plus-fill)::before { content: "\\f175" !important; }
:host(.bi-bag-plus)::before { content: "\\f176" !important; }
:host(.bi-bag-x-fill)::before { content: "\\f177" !important; }
:host(.bi-bag-x)::before { content: "\\f178" !important; }
:host(.bi-bag)::before { content: "\\f179" !important; }
:host(.bi-bar-chart-fill)::before { content: "\\f17a" !important; }
:host(.bi-bar-chart-line-fill)::before { content: "\\f17b" !important; }
:host(.bi-bar-chart-line)::before { content: "\\f17c" !important; }
:host(.bi-bar-chart-steps)::before { content: "\\f17d" !important; }
:host(.bi-bar-chart)::before { content: "\\f17e" !important; }
:host(.bi-basket-fill)::before { content: "\\f17f" !important; }
:host(.bi-basket)::before { content: "\\f180" !important; }
:host(.bi-basket2-fill)::before { content: "\\f181" !important; }
:host(.bi-basket2)::before { content: "\\f182" !important; }
:host(.bi-basket3-fill)::before { content: "\\f183" !important; }
:host(.bi-basket3)::before { content: "\\f184" !important; }
:host(.bi-battery-charging)::before { content: "\\f185" !important; }
:host(.bi-battery-full)::before { content: "\\f186" !important; }
:host(.bi-battery-half)::before { content: "\\f187" !important; }
:host(.bi-battery)::before { content: "\\f188" !important; }
:host(.bi-bell-fill)::before { content: "\\f189" !important; }
:host(.bi-bell)::before { content: "\\f18a" !important; }
:host(.bi-bezier)::before { content: "\\f18b" !important; }
:host(.bi-bezier2)::before { content: "\\f18c" !important; }
:host(.bi-bicycle)::before { content: "\\f18d" !important; }
:host(.bi-binoculars-fill)::before { content: "\\f18e" !important; }
:host(.bi-binoculars)::before { content: "\\f18f" !important; }
:host(.bi-blockquote-left)::before { content: "\\f190" !important; }
:host(.bi-blockquote-right)::before { content: "\\f191" !important; }
:host(.bi-book-fill)::before { content: "\\f192" !important; }
:host(.bi-book-half)::before { content: "\\f193" !important; }
:host(.bi-book)::before { content: "\\f194" !important; }
:host(.bi-bookmark-check-fill)::before { content: "\\f195" !important; }
:host(.bi-bookmark-check)::before { content: "\\f196" !important; }
:host(.bi-bookmark-dash-fill)::before { content: "\\f197" !important; }
:host(.bi-bookmark-dash)::before { content: "\\f198" !important; }
:host(.bi-bookmark-fill)::before { content: "\\f199" !important; }
:host(.bi-bookmark-heart-fill)::before { content: "\\f19a" !important; }
:host(.bi-bookmark-heart)::before { content: "\\f19b" !important; }
:host(.bi-bookmark-plus-fill)::before { content: "\\f19c" !important; }
:host(.bi-bookmark-plus)::before { content: "\\f19d" !important; }
:host(.bi-bookmark-star-fill)::before { content: "\\f19e" !important; }
:host(.bi-bookmark-star)::before { content: "\\f19f" !important; }
:host(.bi-bookmark-x-fill)::before { content: "\\f1a0" !important; }
:host(.bi-bookmark-x)::before { content: "\\f1a1" !important; }
:host(.bi-bookmark)::before { content: "\\f1a2" !important; }
:host(.bi-bookmarks-fill)::before { content: "\\f1a3" !important; }
:host(.bi-bookmarks)::before { content: "\\f1a4" !important; }
:host(.bi-bookshelf)::before { content: "\\f1a5" !important; }
:host(.bi-bootstrap-fill)::before { content: "\\f1a6" !important; }
:host(.bi-bootstrap-reboot)::before { content: "\\f1a7" !important; }
:host(.bi-bootstrap)::before { content: "\\f1a8" !important; }
:host(.bi-border-all)::before { content: "\\f1a9" !important; }
:host(.bi-border-bottom)::before { content: "\\f1aa" !important; }
:host(.bi-border-center)::before { content: "\\f1ab" !important; }
:host(.bi-border-inner)::before { content: "\\f1ac" !important; }
:host(.bi-border-left)::before { content: "\\f1ad" !important; }
:host(.bi-border-middle)::before { content: "\\f1ae" !important; }
:host(.bi-border-outer)::before { content: "\\f1af" !important; }
:host(.bi-border-right)::before { content: "\\f1b0" !important; }
:host(.bi-border-style)::before { content: "\\f1b1" !important; }
:host(.bi-border-top)::before { content: "\\f1b2" !important; }
:host(.bi-border-width)::before { content: "\\f1b3" !important; }
:host(.bi-border)::before { content: "\\f1b4" !important; }
:host(.bi-bounding-box-circles)::before { content: "\\f1b5" !important; }
:host(.bi-bounding-box)::before { content: "\\f1b6" !important; }
:host(.bi-box-arrow-down-left)::before { content: "\\f1b7" !important; }
:host(.bi-box-arrow-down-right)::before { content: "\\f1b8" !important; }
:host(.bi-box-arrow-down)::before { content: "\\f1b9" !important; }
:host(.bi-box-arrow-in-down-left)::before { content: "\\f1ba" !important; }
:host(.bi-box-arrow-in-down-right)::before { content: "\\f1bb" !important; }
:host(.bi-box-arrow-in-down)::before { content: "\\f1bc" !important; }
:host(.bi-box-arrow-in-left)::before { content: "\\f1bd" !important; }
:host(.bi-box-arrow-in-right)::before { content: "\\f1be" !important; }
:host(.bi-box-arrow-in-up-left)::before { content: "\\f1bf" !important; }
:host(.bi-box-arrow-in-up-right)::before { content: "\\f1c0" !important; }
:host(.bi-box-arrow-in-up)::before { content: "\\f1c1" !important; }
:host(.bi-box-arrow-left)::before { content: "\\f1c2" !important; }
:host(.bi-box-arrow-right)::before { content: "\\f1c3" !important; }
:host(.bi-box-arrow-up-left)::before { content: "\\f1c4" !important; }
:host(.bi-box-arrow-up-right)::before { content: "\\f1c5" !important; }
:host(.bi-box-arrow-up)::before { content: "\\f1c6" !important; }
:host(.bi-box-seam)::before { content: "\\f1c7" !important; }
:host(.bi-box)::before { content: "\\f1c8" !important; }
:host(.bi-braces)::before { content: "\\f1c9" !important; }
:host(.bi-bricks)::before { content: "\\f1ca" !important; }
:host(.bi-briefcase-fill)::before { content: "\\f1cb" !important; }
:host(.bi-briefcase)::before { content: "\\f1cc" !important; }
:host(.bi-brightness-alt-high-fill)::before { content: "\\f1cd" !important; }
:host(.bi-brightness-alt-high)::before { content: "\\f1ce" !important; }
:host(.bi-brightness-alt-low-fill)::before { content: "\\f1cf" !important; }
:host(.bi-brightness-alt-low)::before { content: "\\f1d0" !important; }
:host(.bi-brightness-high-fill)::before { content: "\\f1d1" !important; }
:host(.bi-brightness-high)::before { content: "\\f1d2" !important; }
:host(.bi-brightness-low-fill)::before { content: "\\f1d3" !important; }
:host(.bi-brightness-low)::before { content: "\\f1d4" !important; }
:host(.bi-broadcast-pin)::before { content: "\\f1d5" !important; }
:host(.bi-broadcast)::before { content: "\\f1d6" !important; }
:host(.bi-brush-fill)::before { content: "\\f1d7" !important; }
:host(.bi-brush)::before { content: "\\f1d8" !important; }
:host(.bi-bucket-fill)::before { content: "\\f1d9" !important; }
:host(.bi-bucket)::before { content: "\\f1da" !important; }
:host(.bi-bug-fill)::before { content: "\\f1db" !important; }
:host(.bi-bug)::before { content: "\\f1dc" !important; }
:host(.bi-building)::before { content: "\\f1dd" !important; }
:host(.bi-bullseye)::before { content: "\\f1de" !important; }
:host(.bi-calculator-fill)::before { content: "\\f1df" !important; }
:host(.bi-calculator)::before { content: "\\f1e0" !important; }
:host(.bi-calendar-check-fill)::before { content: "\\f1e1" !important; }
:host(.bi-calendar-check)::before { content: "\\f1e2" !important; }
:host(.bi-calendar-date-fill)::before { content: "\\f1e3" !important; }
:host(.bi-calendar-date)::before { content: "\\f1e4" !important; }
:host(.bi-calendar-day-fill)::before { content: "\\f1e5" !important; }
:host(.bi-calendar-day)::before { content: "\\f1e6" !important; }
:host(.bi-calendar-event-fill)::before { content: "\\f1e7" !important; }
:host(.bi-calendar-event)::before { content: "\\f1e8" !important; }
:host(.bi-calendar-fill)::before { content: "\\f1e9" !important; }
:host(.bi-calendar-minus-fill)::before { content: "\\f1ea" !important; }
:host(.bi-calendar-minus)::before { content: "\\f1eb" !important; }
:host(.bi-calendar-month-fill)::before { content: "\\f1ec" !important; }
:host(.bi-calendar-month)::before { content: "\\f1ed" !important; }
:host(.bi-calendar-plus-fill)::before { content: "\\f1ee" !important; }
:host(.bi-calendar-plus)::before { content: "\\f1ef" !important; }
:host(.bi-calendar-range-fill)::before { content: "\\f1f0" !important; }
:host(.bi-calendar-range)::before { content: "\\f1f1" !important; }
:host(.bi-calendar-week-fill)::before { content: "\\f1f2" !important; }
:host(.bi-calendar-week)::before { content: "\\f1f3" !important; }
:host(.bi-calendar-x-fill)::before { content: "\\f1f4" !important; }
:host(.bi-calendar-x)::before { content: "\\f1f5" !important; }
:host(.bi-calendar)::before { content: "\\f1f6" !important; }
:host(.bi-calendar2-check-fill)::before { content: "\\f1f7" !important; }
:host(.bi-calendar2-check)::before { content: "\\f1f8" !important; }
:host(.bi-calendar2-date-fill)::before { content: "\\f1f9" !important; }
:host(.bi-calendar2-date)::before { content: "\\f1fa" !important; }
:host(.bi-calendar2-day-fill)::before { content: "\\f1fb" !important; }
:host(.bi-calendar2-day)::before { content: "\\f1fc" !important; }
:host(.bi-calendar2-event-fill)::before { content: "\\f1fd" !important; }
:host(.bi-calendar2-event)::before { content: "\\f1fe" !important; }
:host(.bi-calendar2-fill)::before { content: "\\f1ff" !important; }
:host(.bi-calendar2-minus-fill)::before { content: "\\f200" !important; }
:host(.bi-calendar2-minus)::before { content: "\\f201" !important; }
:host(.bi-calendar2-month-fill)::before { content: "\\f202" !important; }
:host(.bi-calendar2-month)::before { content: "\\f203" !important; }
:host(.bi-calendar2-plus-fill)::before { content: "\\f204" !important; }
:host(.bi-calendar2-plus)::before { content: "\\f205" !important; }
:host(.bi-calendar2-range-fill)::before { content: "\\f206" !important; }
:host(.bi-calendar2-range)::before { content: "\\f207" !important; }
:host(.bi-calendar2-week-fill)::before { content: "\\f208" !important; }
:host(.bi-calendar2-week)::before { content: "\\f209" !important; }
:host(.bi-calendar2-x-fill)::before { content: "\\f20a" !important; }
:host(.bi-calendar2-x)::before { content: "\\f20b" !important; }
:host(.bi-calendar2)::before { content: "\\f20c" !important; }
:host(.bi-calendar3-event-fill)::before { content: "\\f20d" !important; }
:host(.bi-calendar3-event)::before { content: "\\f20e" !important; }
:host(.bi-calendar3-fill)::before { content: "\\f20f" !important; }
:host(.bi-calendar3-range-fill)::before { content: "\\f210" !important; }
:host(.bi-calendar3-range)::before { content: "\\f211" !important; }
:host(.bi-calendar3-week-fill)::before { content: "\\f212" !important; }
:host(.bi-calendar3-week)::before { content: "\\f213" !important; }
:host(.bi-calendar3)::before { content: "\\f214" !important; }
:host(.bi-calendar4-event)::before { content: "\\f215" !important; }
:host(.bi-calendar4-range)::before { content: "\\f216" !important; }
:host(.bi-calendar4-week)::before { content: "\\f217" !important; }
:host(.bi-calendar4)::before { content: "\\f218" !important; }
:host(.bi-camera-fill)::before { content: "\\f219" !important; }
:host(.bi-camera-reels-fill)::before { content: "\\f21a" !important; }
:host(.bi-camera-reels)::before { content: "\\f21b" !important; }
:host(.bi-camera-video-fill)::before { content: "\\f21c" !important; }
:host(.bi-camera-video-off-fill)::before { content: "\\f21d" !important; }
:host(.bi-camera-video-off)::before { content: "\\f21e" !important; }
:host(.bi-camera-video)::before { content: "\\f21f" !important; }
:host(.bi-camera)::before { content: "\\f220" !important; }
:host(.bi-camera2)::before { content: "\\f221" !important; }
:host(.bi-capslock-fill)::before { content: "\\f222" !important; }
:host(.bi-capslock)::before { content: "\\f223" !important; }
:host(.bi-card-checklist)::before { content: "\\f224" !important; }
:host(.bi-card-heading)::before { content: "\\f225" !important; }
:host(.bi-card-image)::before { content: "\\f226" !important; }
:host(.bi-card-list)::before { content: "\\f227" !important; }
:host(.bi-card-text)::before { content: "\\f228" !important; }
:host(.bi-caret-down-fill)::before { content: "\\f229" !important; }
:host(.bi-caret-down-square-fill)::before { content: "\\f22a" !important; }
:host(.bi-caret-down-square)::before { content: "\\f22b" !important; }
:host(.bi-caret-down)::before { content: "\\f22c" !important; }
:host(.bi-caret-left-fill)::before { content: "\\f22d" !important; }
:host(.bi-caret-left-square-fill)::before { content: "\\f22e" !important; }
:host(.bi-caret-left-square)::before { content: "\\f22f" !important; }
:host(.bi-caret-left)::before { content: "\\f230" !important; }
:host(.bi-caret-right-fill)::before { content: "\\f231" !important; }
:host(.bi-caret-right-square-fill)::before { content: "\\f232" !important; }
:host(.bi-caret-right-square)::before { content: "\\f233" !important; }
:host(.bi-caret-right)::before { content: "\\f234" !important; }
:host(.bi-caret-up-fill)::before { content: "\\f235" !important; }
:host(.bi-caret-up-square-fill)::before { content: "\\f236" !important; }
:host(.bi-caret-up-square)::before { content: "\\f237" !important; }
:host(.bi-caret-up)::before { content: "\\f238" !important; }
:host(.bi-cart-check-fill)::before { content: "\\f239" !important; }
:host(.bi-cart-check)::before { content: "\\f23a" !important; }
:host(.bi-cart-dash-fill)::before { content: "\\f23b" !important; }
:host(.bi-cart-dash)::before { content: "\\f23c" !important; }
:host(.bi-cart-fill)::before { content: "\\f23d" !important; }
:host(.bi-cart-plus-fill)::before { content: "\\f23e" !important; }
:host(.bi-cart-plus)::before { content: "\\f23f" !important; }
:host(.bi-cart-x-fill)::before { content: "\\f240" !important; }
:host(.bi-cart-x)::before { content: "\\f241" !important; }
:host(.bi-cart)::before { content: "\\f242" !important; }
:host(.bi-cart2)::before { content: "\\f243" !important; }
:host(.bi-cart3)::before { content: "\\f244" !important; }
:host(.bi-cart4)::before { content: "\\f245" !important; }
:host(.bi-cash-stack)::before { content: "\\f246" !important; }
:host(.bi-cash)::before { content: "\\f247" !important; }
:host(.bi-cast)::before { content: "\\f248" !important; }
:host(.bi-chat-dots-fill)::before { content: "\\f249" !important; }
:host(.bi-chat-dots)::before { content: "\\f24a" !important; }
:host(.bi-chat-fill)::before { content: "\\f24b" !important; }
:host(.bi-chat-left-dots-fill)::before { content: "\\f24c" !important; }
:host(.bi-chat-left-dots)::before { content: "\\f24d" !important; }
:host(.bi-chat-left-fill)::before { content: "\\f24e" !important; }
:host(.bi-chat-left-quote-fill)::before { content: "\\f24f" !important; }
:host(.bi-chat-left-quote)::before { content: "\\f250" !important; }
:host(.bi-chat-left-text-fill)::before { content: "\\f251" !important; }
:host(.bi-chat-left-text)::before { content: "\\f252" !important; }
:host(.bi-chat-left)::before { content: "\\f253" !important; }
:host(.bi-chat-quote-fill)::before { content: "\\f254" !important; }
:host(.bi-chat-quote)::before { content: "\\f255" !important; }
:host(.bi-chat-right-dots-fill)::before { content: "\\f256" !important; }
:host(.bi-chat-right-dots)::before { content: "\\f257" !important; }
:host(.bi-chat-right-fill)::before { content: "\\f258" !important; }
:host(.bi-chat-right-quote-fill)::before { content: "\\f259" !important; }
:host(.bi-chat-right-quote)::before { content: "\\f25a" !important; }
:host(.bi-chat-right-text-fill)::before { content: "\\f25b" !important; }
:host(.bi-chat-right-text)::before { content: "\\f25c" !important; }
:host(.bi-chat-right)::before { content: "\\f25d" !important; }
:host(.bi-chat-square-dots-fill)::before { content: "\\f25e" !important; }
:host(.bi-chat-square-dots)::before { content: "\\f25f" !important; }
:host(.bi-chat-square-fill)::before { content: "\\f260" !important; }
:host(.bi-chat-square-quote-fill)::before { content: "\\f261" !important; }
:host(.bi-chat-square-quote)::before { content: "\\f262" !important; }
:host(.bi-chat-square-text-fill)::before { content: "\\f263" !important; }
:host(.bi-chat-square-text)::before { content: "\\f264" !important; }
:host(.bi-chat-square)::before { content: "\\f265" !important; }
:host(.bi-chat-text-fill)::before { content: "\\f266" !important; }
:host(.bi-chat-text)::before { content: "\\f267" !important; }
:host(.bi-chat)::before { content: "\\f268" !important; }
:host(.bi-check-all)::before { content: "\\f269" !important; }
:host(.bi-check-circle-fill)::before { content: "\\f26a" !important; }
:host(.bi-check-circle)::before { content: "\\f26b" !important; }
:host(.bi-check-square-fill)::before { content: "\\f26c" !important; }
:host(.bi-check-square)::before { content: "\\f26d" !important; }
:host(.bi-check)::before { content: "\\f26e" !important; }
:host(.bi-check2-all)::before { content: "\\f26f" !important; }
:host(.bi-check2-circle)::before { content: "\\f270" !important; }
:host(.bi-check2-square)::before { content: "\\f271" !important; }
:host(.bi-check2)::before { content: "\\f272" !important; }
:host(.bi-chevron-bar-contract)::before { content: "\\f273" !important; }
:host(.bi-chevron-bar-down)::before { content: "\\f274" !important; }
:host(.bi-chevron-bar-expand)::before { content: "\\f275" !important; }
:host(.bi-chevron-bar-left)::before { content: "\\f276" !important; }
:host(.bi-chevron-bar-right)::before { content: "\\f277" !important; }
:host(.bi-chevron-bar-up)::before { content: "\\f278" !important; }
:host(.bi-chevron-compact-down)::before { content: "\\f279" !important; }
:host(.bi-chevron-compact-left)::before { content: "\\f27a" !important; }
:host(.bi-chevron-compact-right)::before { content: "\\f27b" !important; }
:host(.bi-chevron-compact-up)::before { content: "\\f27c" !important; }
:host(.bi-chevron-contract)::before { content: "\\f27d" !important; }
:host(.bi-chevron-double-down)::before { content: "\\f27e" !important; }
:host(.bi-chevron-double-left)::before { content: "\\f27f" !important; }
:host(.bi-chevron-double-right)::before { content: "\\f280" !important; }
:host(.bi-chevron-double-up)::before { content: "\\f281" !important; }
:host(.bi-chevron-down)::before { content: "\\f282" !important; }
:host(.bi-chevron-expand)::before { content: "\\f283" !important; }
:host(.bi-chevron-left)::before { content: "\\f284" !important; }
:host(.bi-chevron-right)::before { content: "\\f285" !important; }
:host(.bi-chevron-up)::before { content: "\\f286" !important; }
:host(.bi-circle-fill)::before { content: "\\f287" !important; }
:host(.bi-circle-half)::before { content: "\\f288" !important; }
:host(.bi-circle-square)::before { content: "\\f289" !important; }
:host(.bi-circle)::before { content: "\\f28a" !important; }
:host(.bi-clipboard-check)::before { content: "\\f28b" !important; }
:host(.bi-clipboard-data)::before { content: "\\f28c" !important; }
:host(.bi-clipboard-minus)::before { content: "\\f28d" !important; }
:host(.bi-clipboard-plus)::before { content: "\\f28e" !important; }
:host(.bi-clipboard-x)::before { content: "\\f28f" !important; }
:host(.bi-clipboard)::before { content: "\\f290" !important; }
:host(.bi-clock-fill)::before { content: "\\f291" !important; }
:host(.bi-clock-history)::before { content: "\\f292" !important; }
:host(.bi-clock)::before { content: "\\f293" !important; }
:host(.bi-cloud-arrow-down-fill)::before { content: "\\f294" !important; }
:host(.bi-cloud-arrow-down)::before { content: "\\f295" !important; }
:host(.bi-cloud-arrow-up-fill)::before { content: "\\f296" !important; }
:host(.bi-cloud-arrow-up)::before { content: "\\f297" !important; }
:host(.bi-cloud-check-fill)::before { content: "\\f298" !important; }
:host(.bi-cloud-check)::before { content: "\\f299" !important; }
:host(.bi-cloud-download-fill)::before { content: "\\f29a" !important; }
:host(.bi-cloud-download)::before { content: "\\f29b" !important; }
:host(.bi-cloud-drizzle-fill)::before { content: "\\f29c" !important; }
:host(.bi-cloud-drizzle)::before { content: "\\f29d" !important; }
:host(.bi-cloud-fill)::before { content: "\\f29e" !important; }
:host(.bi-cloud-fog-fill)::before { content: "\\f29f" !important; }
:host(.bi-cloud-fog)::before { content: "\\f2a0" !important; }
:host(.bi-cloud-fog2-fill)::before { content: "\\f2a1" !important; }
:host(.bi-cloud-fog2)::before { content: "\\f2a2" !important; }
:host(.bi-cloud-hail-fill)::before { content: "\\f2a3" !important; }
:host(.bi-cloud-hail)::before { content: "\\f2a4" !important; }
:host(.bi-cloud-haze-1)::before { content: "\\f2a7" !important; }
:host(.bi-cloud-haze-fill)::before { content: "\\f2a6" !important; }
:host(.bi-cloud-haze)::before { content: "\\f2a7" !important; }
:host(.bi-cloud-haze2-fill)::before { content: "\\f2a8" !important; }
:host(.bi-cloud-lightning-fill)::before { content: "\\f2a9" !important; }
:host(.bi-cloud-lightning-rain-fill)::before { content: "\\f2aa" !important; }
:host(.bi-cloud-lightning-rain)::before { content: "\\f2ab" !important; }
:host(.bi-cloud-lightning)::before { content: "\\f2ac" !important; }
:host(.bi-cloud-minus-fill)::before { content: "\\f2ad" !important; }
:host(.bi-cloud-minus)::before { content: "\\f2ae" !important; }
:host(.bi-cloud-moon-fill)::before { content: "\\f2af" !important; }
:host(.bi-cloud-moon)::before { content: "\\f2b0" !important; }
:host(.bi-cloud-plus-fill)::before { content: "\\f2b1" !important; }
:host(.bi-cloud-plus)::before { content: "\\f2b2" !important; }
:host(.bi-cloud-rain-fill)::before { content: "\\f2b3" !important; }
:host(.bi-cloud-rain-heavy-fill)::before { content: "\\f2b4" !important; }
:host(.bi-cloud-rain-heavy)::before { content: "\\f2b5" !important; }
:host(.bi-cloud-rain)::before { content: "\\f2b6" !important; }
:host(.bi-cloud-slash-fill)::before { content: "\\f2b7" !important; }
:host(.bi-cloud-slash)::before { content: "\\f2b8" !important; }
:host(.bi-cloud-sleet-fill)::before { content: "\\f2b9" !important; }
:host(.bi-cloud-sleet)::before { content: "\\f2ba" !important; }
:host(.bi-cloud-snow-fill)::before { content: "\\f2bb" !important; }
:host(.bi-cloud-snow)::before { content: "\\f2bc" !important; }
:host(.bi-cloud-sun-fill)::before { content: "\\f2bd" !important; }
:host(.bi-cloud-sun)::before { content: "\\f2be" !important; }
:host(.bi-cloud-upload-fill)::before { content: "\\f2bf" !important; }
:host(.bi-cloud-upload)::before { content: "\\f2c0" !important; }
:host(.bi-cloud)::before { content: "\\f2c1" !important; }
:host(.bi-clouds-fill)::before { content: "\\f2c2" !important; }
:host(.bi-clouds)::before { content: "\\f2c3" !important; }
:host(.bi-cloudy-fill)::before { content: "\\f2c4" !important; }
:host(.bi-cloudy)::before { content: "\\f2c5" !important; }
:host(.bi-code-slash)::before { content: "\\f2c6" !important; }
:host(.bi-code-square)::before { content: "\\f2c7" !important; }
:host(.bi-code)::before { content: "\\f2c8" !important; }
:host(.bi-collection-fill)::before { content: "\\f2c9" !important; }
:host(.bi-collection-play-fill)::before { content: "\\f2ca" !important; }
:host(.bi-collection-play)::before { content: "\\f2cb" !important; }
:host(.bi-collection)::before { content: "\\f2cc" !important; }
:host(.bi-columns-gap)::before { content: "\\f2cd" !important; }
:host(.bi-columns)::before { content: "\\f2ce" !important; }
:host(.bi-command)::before { content: "\\f2cf" !important; }
:host(.bi-compass-fill)::before { content: "\\f2d0" !important; }
:host(.bi-compass)::before { content: "\\f2d1" !important; }
:host(.bi-cone-striped)::before { content: "\\f2d2" !important; }
:host(.bi-cone)::before { content: "\\f2d3" !important; }
:host(.bi-controller)::before { content: "\\f2d4" !important; }
:host(.bi-cpu-fill)::before { content: "\\f2d5" !important; }
:host(.bi-cpu)::before { content: "\\f2d6" !important; }
:host(.bi-credit-card-2-back-fill)::before { content: "\\f2d7" !important; }
:host(.bi-credit-card-2-back)::before { content: "\\f2d8" !important; }
:host(.bi-credit-card-2-front-fill)::before { content: "\\f2d9" !important; }
:host(.bi-credit-card-2-front)::before { content: "\\f2da" !important; }
:host(.bi-credit-card-fill)::before { content: "\\f2db" !important; }
:host(.bi-credit-card)::before { content: "\\f2dc" !important; }
:host(.bi-crop)::before { content: "\\f2dd" !important; }
:host(.bi-cup-fill)::before { content: "\\f2de" !important; }
:host(.bi-cup-straw)::before { content: "\\f2df" !important; }
:host(.bi-cup)::before { content: "\\f2e0" !important; }
:host(.bi-cursor-fill)::before { content: "\\f2e1" !important; }
:host(.bi-cursor-text)::before { content: "\\f2e2" !important; }
:host(.bi-cursor)::before { content: "\\f2e3" !important; }
:host(.bi-dash-circle-dotted)::before { content: "\\f2e4" !important; }
:host(.bi-dash-circle-fill)::before { content: "\\f2e5" !important; }
:host(.bi-dash-circle)::before { content: "\\f2e6" !important; }
:host(.bi-dash-square-dotted)::before { content: "\\f2e7" !important; }
:host(.bi-dash-square-fill)::before { content: "\\f2e8" !important; }
:host(.bi-dash-square)::before { content: "\\f2e9" !important; }
:host(.bi-dash)::before { content: "\\f2ea" !important; }
:host(.bi-diagram-2-fill)::before { content: "\\f2eb" !important; }
:host(.bi-diagram-2)::before { content: "\\f2ec" !important; }
:host(.bi-diagram-3-fill)::before { content: "\\f2ed" !important; }
:host(.bi-diagram-3)::before { content: "\\f2ee" !important; }
:host(.bi-diamond-fill)::before { content: "\\f2ef" !important; }
:host(.bi-diamond-half)::before { content: "\\f2f0" !important; }
:host(.bi-diamond)::before { content: "\\f2f1" !important; }
:host(.bi-dice-1-fill)::before { content: "\\f2f2" !important; }
:host(.bi-dice-1)::before { content: "\\f2f3" !important; }
:host(.bi-dice-2-fill)::before { content: "\\f2f4" !important; }
:host(.bi-dice-2)::before { content: "\\f2f5" !important; }
:host(.bi-dice-3-fill)::before { content: "\\f2f6" !important; }
:host(.bi-dice-3)::before { content: "\\f2f7" !important; }
:host(.bi-dice-4-fill)::before { content: "\\f2f8" !important; }
:host(.bi-dice-4)::before { content: "\\f2f9" !important; }
:host(.bi-dice-5-fill)::before { content: "\\f2fa" !important; }
:host(.bi-dice-5)::before { content: "\\f2fb" !important; }
:host(.bi-dice-6-fill)::before { content: "\\f2fc" !important; }
:host(.bi-dice-6)::before { content: "\\f2fd" !important; }
:host(.bi-disc-fill)::before { content: "\\f2fe" !important; }
:host(.bi-disc)::before { content: "\\f2ff" !important; }
:host(.bi-discord)::before { content: "\\f300" !important; }
:host(.bi-display-fill)::before { content: "\\f301" !important; }
:host(.bi-display)::before { content: "\\f302" !important; }
:host(.bi-distribute-horizontal)::before { content: "\\f303" !important; }
:host(.bi-distribute-vertical)::before { content: "\\f304" !important; }
:host(.bi-door-closed-fill)::before { content: "\\f305" !important; }
:host(.bi-door-closed)::before { content: "\\f306" !important; }
:host(.bi-door-open-fill)::before { content: "\\f307" !important; }
:host(.bi-door-open)::before { content: "\\f308" !important; }
:host(.bi-dot)::before { content: "\\f309" !important; }
:host(.bi-download)::before { content: "\\f30a" !important; }
:host(.bi-droplet-fill)::before { content: "\\f30b" !important; }
:host(.bi-droplet-half)::before { content: "\\f30c" !important; }
:host(.bi-droplet)::before { content: "\\f30d" !important; }
:host(.bi-earbuds)::before { content: "\\f30e" !important; }
:host(.bi-easel-fill)::before { content: "\\f30f" !important; }
:host(.bi-easel)::before { content: "\\f310" !important; }
:host(.bi-egg-fill)::before { content: "\\f311" !important; }
:host(.bi-egg-fried)::before { content: "\\f312" !important; }
:host(.bi-egg)::before { content: "\\f313" !important; }
:host(.bi-eject-fill)::before { content: "\\f314" !important; }
:host(.bi-eject)::before { content: "\\f315" !important; }
:host(.bi-emoji-angry-fill)::before { content: "\\f316" !important; }
:host(.bi-emoji-angry)::before { content: "\\f317" !important; }
:host(.bi-emoji-dizzy-fill)::before { content: "\\f318" !important; }
:host(.bi-emoji-dizzy)::before { content: "\\f319" !important; }
:host(.bi-emoji-expressionless-fill)::before { content: "\\f31a" !important; }
:host(.bi-emoji-expressionless)::before { content: "\\f31b" !important; }
:host(.bi-emoji-frown-fill)::before { content: "\\f31c" !important; }
:host(.bi-emoji-frown)::before { content: "\\f31d" !important; }
:host(.bi-emoji-heart-eyes-fill)::before { content: "\\f31e" !important; }
:host(.bi-emoji-heart-eyes)::before { content: "\\f31f" !important; }
:host(.bi-emoji-laughing-fill)::before { content: "\\f320" !important; }
:host(.bi-emoji-laughing)::before { content: "\\f321" !important; }
:host(.bi-emoji-neutral-fill)::before { content: "\\f322" !important; }
:host(.bi-emoji-neutral)::before { content: "\\f323" !important; }
:host(.bi-emoji-smile-fill)::before { content: "\\f324" !important; }
:host(.bi-emoji-smile-upside-down-fill)::before { content: "\\f325" !important; }
:host(.bi-emoji-smile-upside-down)::before { content: "\\f326" !important; }
:host(.bi-emoji-smile)::before { content: "\\f327" !important; }
:host(.bi-emoji-sunglasses-fill)::before { content: "\\f328" !important; }
:host(.bi-emoji-sunglasses)::before { content: "\\f329" !important; }
:host(.bi-emoji-wink-fill)::before { content: "\\f32a" !important; }
:host(.bi-emoji-wink)::before { content: "\\f32b" !important; }
:host(.bi-envelope-fill)::before { content: "\\f32c" !important; }
:host(.bi-envelope-open-fill)::before { content: "\\f32d" !important; }
:host(.bi-envelope-open)::before { content: "\\f32e" !important; }
:host(.bi-envelope)::before { content: "\\f32f" !important; }
:host(.bi-eraser-fill)::before { content: "\\f330" !important; }
:host(.bi-eraser)::before { content: "\\f331" !important; }
:host(.bi-exclamation-circle-fill)::before { content: "\\f332" !important; }
:host(.bi-exclamation-circle)::before { content: "\\f333" !important; }
:host(.bi-exclamation-diamond-fill)::before { content: "\\f334" !important; }
:host(.bi-exclamation-diamond)::before { content: "\\f335" !important; }
:host(.bi-exclamation-octagon-fill)::before { content: "\\f336" !important; }
:host(.bi-exclamation-octagon)::before { content: "\\f337" !important; }
:host(.bi-exclamation-square-fill)::before { content: "\\f338" !important; }
:host(.bi-exclamation-square)::before { content: "\\f339" !important; }
:host(.bi-exclamation-triangle-fill)::before { content: "\\f33a" !important; }
:host(.bi-exclamation-triangle)::before { content: "\\f33b" !important; }
:host(.bi-exclamation)::before { content: "\\f33c" !important; }
:host(.bi-exclude)::before { content: "\\f33d" !important; }
:host(.bi-eye-fill)::before { content: "\\f33e" !important; }
:host(.bi-eye-slash-fill)::before { content: "\\f33f" !important; }
:host(.bi-eye-slash)::before { content: "\\f340" !important; }
:host(.bi-eye)::before { content: "\\f341" !important; }
:host(.bi-eyedropper)::before { content: "\\f342" !important; }
:host(.bi-eyeglasses)::before { content: "\\f343" !important; }
:host(.bi-facebook)::before { content: "\\f344" !important; }
:host(.bi-file-arrow-down-fill)::before { content: "\\f345" !important; }
:host(.bi-file-arrow-down)::before { content: "\\f346" !important; }
:host(.bi-file-arrow-up-fill)::before { content: "\\f347" !important; }
:host(.bi-file-arrow-up)::before { content: "\\f348" !important; }
:host(.bi-file-bar-graph-fill)::before { content: "\\f349" !important; }
:host(.bi-file-bar-graph)::before { content: "\\f34a" !important; }
:host(.bi-file-binary-fill)::before { content: "\\f34b" !important; }
:host(.bi-file-binary)::before { content: "\\f34c" !important; }
:host(.bi-file-break-fill)::before { content: "\\f34d" !important; }
:host(.bi-file-break)::before { content: "\\f34e" !important; }
:host(.bi-file-check-fill)::before { content: "\\f34f" !important; }
:host(.bi-file-check)::before { content: "\\f350" !important; }
:host(.bi-file-code-fill)::before { content: "\\f351" !important; }
:host(.bi-file-code)::before { content: "\\f352" !important; }
:host(.bi-file-diff-fill)::before { content: "\\f353" !important; }
:host(.bi-file-diff)::before { content: "\\f354" !important; }
:host(.bi-file-earmark-arrow-down-fill)::before { content: "\\f355" !important; }
:host(.bi-file-earmark-arrow-down)::before { content: "\\f356" !important; }
:host(.bi-file-earmark-arrow-up-fill)::before { content: "\\f357" !important; }
:host(.bi-file-earmark-arrow-up)::before { content: "\\f358" !important; }
:host(.bi-file-earmark-bar-graph-fill)::before { content: "\\f359" !important; }
:host(.bi-file-earmark-bar-graph)::before { content: "\\f35a" !important; }
:host(.bi-file-earmark-binary-fill)::before { content: "\\f35b" !important; }
:host(.bi-file-earmark-binary)::before { content: "\\f35c" !important; }
:host(.bi-file-earmark-break-fill)::before { content: "\\f35d" !important; }
:host(.bi-file-earmark-break)::before { content: "\\f35e" !important; }
:host(.bi-file-earmark-check-fill)::before { content: "\\f35f" !important; }
:host(.bi-file-earmark-check)::before { content: "\\f360" !important; }
:host(.bi-file-earmark-code-fill)::before { content: "\\f361" !important; }
:host(.bi-file-earmark-code)::before { content: "\\f362" !important; }
:host(.bi-file-earmark-diff-fill)::before { content: "\\f363" !important; }
:host(.bi-file-earmark-diff)::before { content: "\\f364" !important; }
:host(.bi-file-earmark-easel-fill)::before { content: "\\f365" !important; }
:host(.bi-file-earmark-easel)::before { content: "\\f366" !important; }
:host(.bi-file-earmark-excel-fill)::before { content: "\\f367" !important; }
:host(.bi-file-earmark-excel)::before { content: "\\f368" !important; }
:host(.bi-file-earmark-fill)::before { content: "\\f369" !important; }
:host(.bi-file-earmark-font-fill)::before { content: "\\f36a" !important; }
:host(.bi-file-earmark-font)::before { content: "\\f36b" !important; }
:host(.bi-file-earmark-image-fill)::before { content: "\\f36c" !important; }
:host(.bi-file-earmark-image)::before { content: "\\f36d" !important; }
:host(.bi-file-earmark-lock-fill)::before { content: "\\f36e" !important; }
:host(.bi-file-earmark-lock)::before { content: "\\f36f" !important; }
:host(.bi-file-earmark-lock2-fill)::before { content: "\\f370" !important; }
:host(.bi-file-earmark-lock2)::before { content: "\\f371" !important; }
:host(.bi-file-earmark-medical-fill)::before { content: "\\f372" !important; }
:host(.bi-file-earmark-medical)::before { content: "\\f373" !important; }
:host(.bi-file-earmark-minus-fill)::before { content: "\\f374" !important; }
:host(.bi-file-earmark-minus)::before { content: "\\f375" !important; }
:host(.bi-file-earmark-music-fill)::before { content: "\\f376" !important; }
:host(.bi-file-earmark-music)::before { content: "\\f377" !important; }
:host(.bi-file-earmark-person-fill)::before { content: "\\f378" !important; }
:host(.bi-file-earmark-person)::before { content: "\\f379" !important; }
:host(.bi-file-earmark-play-fill)::before { content: "\\f37a" !important; }
:host(.bi-file-earmark-play)::before { content: "\\f37b" !important; }
:host(.bi-file-earmark-plus-fill)::before { content: "\\f37c" !important; }
:host(.bi-file-earmark-plus)::before { content: "\\f37d" !important; }
:host(.bi-file-earmark-post-fill)::before { content: "\\f37e" !important; }
:host(.bi-file-earmark-post)::before { content: "\\f37f" !important; }
:host(.bi-file-earmark-ppt-fill)::before { content: "\\f380" !important; }
:host(.bi-file-earmark-ppt)::before { content: "\\f381" !important; }
:host(.bi-file-earmark-richtext-fill)::before { content: "\\f382" !important; }
:host(.bi-file-earmark-richtext)::before { content: "\\f383" !important; }
:host(.bi-file-earmark-ruled-fill)::before { content: "\\f384" !important; }
:host(.bi-file-earmark-ruled)::before { content: "\\f385" !important; }
:host(.bi-file-earmark-slides-fill)::before { content: "\\f386" !important; }
:host(.bi-file-earmark-slides)::before { content: "\\f387" !important; }
:host(.bi-file-earmark-spreadsheet-fill)::before { content: "\\f388" !important; }
:host(.bi-file-earmark-spreadsheet)::before { content: "\\f389" !important; }
:host(.bi-file-earmark-text-fill)::before { content: "\\f38a" !important; }
:host(.bi-file-earmark-text)::before { content: "\\f38b" !important; }
:host(.bi-file-earmark-word-fill)::before { content: "\\f38c" !important; }
:host(.bi-file-earmark-word)::before { content: "\\f38d" !important; }
:host(.bi-file-earmark-x-fill)::before { content: "\\f38e" !important; }
:host(.bi-file-earmark-x)::before { content: "\\f38f" !important; }
:host(.bi-file-earmark-zip-fill)::before { content: "\\f390" !important; }
:host(.bi-file-earmark-zip)::before { content: "\\f391" !important; }
:host(.bi-file-earmark)::before { content: "\\f392" !important; }
:host(.bi-file-easel-fill)::before { content: "\\f393" !important; }
:host(.bi-file-easel)::before { content: "\\f394" !important; }
:host(.bi-file-excel-fill)::before { content: "\\f395" !important; }
:host(.bi-file-excel)::before { content: "\\f396" !important; }
:host(.bi-file-fill)::before { content: "\\f397" !important; }
:host(.bi-file-font-fill)::before { content: "\\f398" !important; }
:host(.bi-file-font)::before { content: "\\f399" !important; }
:host(.bi-file-image-fill)::before { content: "\\f39a" !important; }
:host(.bi-file-image)::before { content: "\\f39b" !important; }
:host(.bi-file-lock-fill)::before { content: "\\f39c" !important; }
:host(.bi-file-lock)::before { content: "\\f39d" !important; }
:host(.bi-file-lock2-fill)::before { content: "\\f39e" !important; }
:host(.bi-file-lock2)::before { content: "\\f39f" !important; }
:host(.bi-file-medical-fill)::before { content: "\\f3a0" !important; }
:host(.bi-file-medical)::before { content: "\\f3a1" !important; }
:host(.bi-file-minus-fill)::before { content: "\\f3a2" !important; }
:host(.bi-file-minus)::before { content: "\\f3a3" !important; }
:host(.bi-file-music-fill)::before { content: "\\f3a4" !important; }
:host(.bi-file-music)::before { content: "\\f3a5" !important; }
:host(.bi-file-person-fill)::before { content: "\\f3a6" !important; }
:host(.bi-file-person)::before { content: "\\f3a7" !important; }
:host(.bi-file-play-fill)::before { content: "\\f3a8" !important; }
:host(.bi-file-play)::before { content: "\\f3a9" !important; }
:host(.bi-file-plus-fill)::before { content: "\\f3aa" !important; }
:host(.bi-file-plus)::before { content: "\\f3ab" !important; }
:host(.bi-file-post-fill)::before { content: "\\f3ac" !important; }
:host(.bi-file-post)::before { content: "\\f3ad" !important; }
:host(.bi-file-ppt-fill)::before { content: "\\f3ae" !important; }
:host(.bi-file-ppt)::before { content: "\\f3af" !important; }
:host(.bi-file-richtext-fill)::before { content: "\\f3b0" !important; }
:host(.bi-file-richtext)::before { content: "\\f3b1" !important; }
:host(.bi-file-ruled-fill)::before { content: "\\f3b2" !important; }
:host(.bi-file-ruled)::before { content: "\\f3b3" !important; }
:host(.bi-file-slides-fill)::before { content: "\\f3b4" !important; }
:host(.bi-file-slides)::before { content: "\\f3b5" !important; }
:host(.bi-file-spreadsheet-fill)::before { content: "\\f3b6" !important; }
:host(.bi-file-spreadsheet)::before { content: "\\f3b7" !important; }
:host(.bi-file-text-fill)::before { content: "\\f3b8" !important; }
:host(.bi-file-text)::before { content: "\\f3b9" !important; }
:host(.bi-file-word-fill)::before { content: "\\f3ba" !important; }
:host(.bi-file-word)::before { content: "\\f3bb" !important; }
:host(.bi-file-x-fill)::before { content: "\\f3bc" !important; }
:host(.bi-file-x)::before { content: "\\f3bd" !important; }
:host(.bi-file-zip-fill)::before { content: "\\f3be" !important; }
:host(.bi-file-zip)::before { content: "\\f3bf" !important; }
:host(.bi-file)::before { content: "\\f3c0" !important; }
:host(.bi-files-alt)::before { content: "\\f3c1" !important; }
:host(.bi-files)::before { content: "\\f3c2" !important; }
:host(.bi-film)::before { content: "\\f3c3" !important; }
:host(.bi-filter-circle-fill)::before { content: "\\f3c4" !important; }
:host(.bi-filter-circle)::before { content: "\\f3c5" !important; }
:host(.bi-filter-left)::before { content: "\\f3c6" !important; }
:host(.bi-filter-right)::before { content: "\\f3c7" !important; }
:host(.bi-filter-square-fill)::before { content: "\\f3c8" !important; }
:host(.bi-filter-square)::before { content: "\\f3c9" !important; }
:host(.bi-filter)::before { content: "\\f3ca" !important; }
:host(.bi-flag-fill)::before { content: "\\f3cb" !important; }
:host(.bi-flag)::before { content: "\\f3cc" !important; }
:host(.bi-flower1)::before { content: "\\f3cd" !important; }
:host(.bi-flower2)::before { content: "\\f3ce" !important; }
:host(.bi-flower3)::before { content: "\\f3cf" !important; }
:host(.bi-folder-check)::before { content: "\\f3d0" !important; }
:host(.bi-folder-fill)::before { content: "\\f3d1" !important; }
:host(.bi-folder-minus)::before { content: "\\f3d2" !important; }
:host(.bi-folder-plus)::before { content: "\\f3d3" !important; }
:host(.bi-folder-symlink-fill)::before { content: "\\f3d4" !important; }
:host(.bi-folder-symlink)::before { content: "\\f3d5" !important; }
:host(.bi-folder-x)::before { content: "\\f3d6" !important; }
:host(.bi-folder)::before { content: "\\f3d7" !important; }
:host(.bi-folder2-open)::before { content: "\\f3d8" !important; }
:host(.bi-folder2)::before { content: "\\f3d9" !important; }
:host(.bi-fonts)::before { content: "\\f3da" !important; }
:host(.bi-forward-fill)::before { content: "\\f3db" !important; }
:host(.bi-forward)::before { content: "\\f3dc" !important; }
:host(.bi-front)::before { content: "\\f3dd" !important; }
:host(.bi-fullscreen-exit)::before { content: "\\f3de" !important; }
:host(.bi-fullscreen)::before { content: "\\f3df" !important; }
:host(.bi-funnel-fill)::before { content: "\\f3e0" !important; }
:host(.bi-funnel)::before { content: "\\f3e1" !important; }
:host(.bi-gear-fill)::before { content: "\\f3e2" !important; }
:host(.bi-gear-wide-connected)::before { content: "\\f3e3" !important; }
:host(.bi-gear-wide)::before { content: "\\f3e4" !important; }
:host(.bi-gear)::before { content: "\\f3e5" !important; }
:host(.bi-gem)::before { content: "\\f3e6" !important; }
:host(.bi-geo-alt-fill)::before { content: "\\f3e7" !important; }
:host(.bi-geo-alt)::before { content: "\\f3e8" !important; }
:host(.bi-geo-fill)::before { content: "\\f3e9" !important; }
:host(.bi-geo)::before { content: "\\f3ea" !important; }
:host(.bi-gift-fill)::before { content: "\\f3eb" !important; }
:host(.bi-gift)::before { content: "\\f3ec" !important; }
:host(.bi-github)::before { content: "\\f3ed" !important; }
:host(.bi-globe)::before { content: "\\f3ee" !important; }
:host(.bi-globe2)::before { content: "\\f3ef" !important; }
:host(.bi-google)::before { content: "\\f3f0" !important; }
:host(.bi-graph-down)::before { content: "\\f3f1" !important; }
:host(.bi-graph-up)::before { content: "\\f3f2" !important; }
:host(.bi-grid-1x2-fill)::before { content: "\\f3f3" !important; }
:host(.bi-grid-1x2)::before { content: "\\f3f4" !important; }
:host(.bi-grid-3x2-gap-fill)::before { content: "\\f3f5" !important; }
:host(.bi-grid-3x2-gap)::before { content: "\\f3f6" !important; }
:host(.bi-grid-3x2)::before { content: "\\f3f7" !important; }
:host(.bi-grid-3x3-gap-fill)::before { content: "\\f3f8" !important; }
:host(.bi-grid-3x3-gap)::before { content: "\\f3f9" !important; }
:host(.bi-grid-3x3)::before { content: "\\f3fa" !important; }
:host(.bi-grid-fill)::before { content: "\\f3fb" !important; }
:host(.bi-grid)::before { content: "\\f3fc" !important; }
:host(.bi-grip-horizontal)::before { content: "\\f3fd" !important; }
:host(.bi-grip-vertical)::before { content: "\\f3fe" !important; }
:host(.bi-hammer)::before { content: "\\f3ff" !important; }
:host(.bi-hand-index-fill)::before { content: "\\f400" !important; }
:host(.bi-hand-index-thumb-fill)::before { content: "\\f401" !important; }
:host(.bi-hand-index-thumb)::before { content: "\\f402" !important; }
:host(.bi-hand-index)::before { content: "\\f403" !important; }
:host(.bi-hand-thumbs-down-fill)::before { content: "\\f404" !important; }
:host(.bi-hand-thumbs-down)::before { content: "\\f405" !important; }
:host(.bi-hand-thumbs-up-fill)::before { content: "\\f406" !important; }
:host(.bi-hand-thumbs-up)::before { content: "\\f407" !important; }
:host(.bi-handbag-fill)::before { content: "\\f408" !important; }
:host(.bi-handbag)::before { content: "\\f409" !important; }
:host(.bi-hash)::before { content: "\\f40a" !important; }
:host(.bi-hdd-fill)::before { content: "\\f40b" !important; }
:host(.bi-hdd-network-fill)::before { content: "\\f40c" !important; }
:host(.bi-hdd-network)::before { content: "\\f40d" !important; }
:host(.bi-hdd-rack-fill)::before { content: "\\f40e" !important; }
:host(.bi-hdd-rack)::before { content: "\\f40f" !important; }
:host(.bi-hdd-stack-fill)::before { content: "\\f410" !important; }
:host(.bi-hdd-stack)::before { content: "\\f411" !important; }
:host(.bi-hdd)::before { content: "\\f412" !important; }
:host(.bi-headphones)::before { content: "\\f413" !important; }
:host(.bi-headset)::before { content: "\\f414" !important; }
:host(.bi-heart-fill)::before { content: "\\f415" !important; }
:host(.bi-heart-half)::before { content: "\\f416" !important; }
:host(.bi-heart)::before { content: "\\f417" !important; }
:host(.bi-heptagon-fill)::before { content: "\\f418" !important; }
:host(.bi-heptagon-half)::before { content: "\\f419" !important; }
:host(.bi-heptagon)::before { content: "\\f41a" !important; }
:host(.bi-hexagon-fill)::before { content: "\\f41b" !important; }
:host(.bi-hexagon-half)::before { content: "\\f41c" !important; }
:host(.bi-hexagon)::before { content: "\\f41d" !important; }
:host(.bi-hourglass-bottom)::before { content: "\\f41e" !important; }
:host(.bi-hourglass-split)::before { content: "\\f41f" !important; }
:host(.bi-hourglass-top)::before { content: "\\f420" !important; }
:host(.bi-hourglass)::before { content: "\\f421" !important; }
:host(.bi-house-door-fill)::before { content: "\\f422" !important; }
:host(.bi-house-door)::before { content: "\\f423" !important; }
:host(.bi-house-fill)::before { content: "\\f424" !important; }
:host(.bi-house)::before { content: "\\f425" !important; }
:host(.bi-hr)::before { content: "\\f426" !important; }
:host(.bi-hurricane)::before { content: "\\f427" !important; }
:host(.bi-image-alt)::before { content: "\\f428" !important; }
:host(.bi-image-fill)::before { content: "\\f429" !important; }
:host(.bi-image)::before { content: "\\f42a" !important; }
:host(.bi-images)::before { content: "\\f42b" !important; }
:host(.bi-inbox-fill)::before { content: "\\f42c" !important; }
:host(.bi-inbox)::before { content: "\\f42d" !important; }
:host(.bi-inboxes-fill)::before { content: "\\f42e" !important; }
:host(.bi-inboxes)::before { content: "\\f42f" !important; }
:host(.bi-info-circle-fill)::before { content: "\\f430" !important; }
:host(.bi-info-circle)::before { content: "\\f431" !important; }
:host(.bi-info-square-fill)::before { content: "\\f432" !important; }
:host(.bi-info-square)::before { content: "\\f433" !important; }
:host(.bi-info)::before { content: "\\f434" !important; }
:host(.bi-input-cursor-text)::before { content: "\\f435" !important; }
:host(.bi-input-cursor)::before { content: "\\f436" !important; }
:host(.bi-instagram)::before { content: "\\f437" !important; }
:host(.bi-intersect)::before { content: "\\f438" !important; }
:host(.bi-journal-album)::before { content: "\\f439" !important; }
:host(.bi-journal-arrow-down)::before { content: "\\f43a" !important; }
:host(.bi-journal-arrow-up)::before { content: "\\f43b" !important; }
:host(.bi-journal-bookmark-fill)::before { content: "\\f43c" !important; }
:host(.bi-journal-bookmark)::before { content: "\\f43d" !important; }
:host(.bi-journal-check)::before { content: "\\f43e" !important; }
:host(.bi-journal-code)::before { content: "\\f43f" !important; }
:host(.bi-journal-medical)::before { content: "\\f440" !important; }
:host(.bi-journal-minus)::before { content: "\\f441" !important; }
:host(.bi-journal-plus)::before { content: "\\f442" !important; }
:host(.bi-journal-richtext)::before { content: "\\f443" !important; }
:host(.bi-journal-text)::before { content: "\\f444" !important; }
:host(.bi-journal-x)::before { content: "\\f445" !important; }
:host(.bi-journal)::before { content: "\\f446" !important; }
:host(.bi-journals)::before { content: "\\f447" !important; }
:host(.bi-joystick)::before { content: "\\f448" !important; }
:host(.bi-justify-left)::before { content: "\\f449" !important; }
:host(.bi-justify-right)::before { content: "\\f44a" !important; }
:host(.bi-justify)::before { content: "\\f44b" !important; }
:host(.bi-kanban-fill)::before { content: "\\f44c" !important; }
:host(.bi-kanban)::before { content: "\\f44d" !important; }
:host(.bi-key-fill)::before { content: "\\f44e" !important; }
:host(.bi-key)::before { content: "\\f44f" !important; }
:host(.bi-keyboard-fill)::before { content: "\\f450" !important; }
:host(.bi-keyboard)::before { content: "\\f451" !important; }
:host(.bi-ladder)::before { content: "\\f452" !important; }
:host(.bi-lamp-fill)::before { content: "\\f453" !important; }
:host(.bi-lamp)::before { content: "\\f454" !important; }
:host(.bi-laptop-fill)::before { content: "\\f455" !important; }
:host(.bi-laptop)::before { content: "\\f456" !important; }
:host(.bi-layer-backward)::before { content: "\\f457" !important; }
:host(.bi-layer-forward)::before { content: "\\f458" !important; }
:host(.bi-layers-fill)::before { content: "\\f459" !important; }
:host(.bi-layers-half)::before { content: "\\f45a" !important; }
:host(.bi-layers)::before { content: "\\f45b" !important; }
:host(.bi-layout-sidebar-inset-reverse)::before { content: "\\f45c" !important; }
:host(.bi-layout-sidebar-inset)::before { content: "\\f45d" !important; }
:host(.bi-layout-sidebar-reverse)::before { content: "\\f45e" !important; }
:host(.bi-layout-sidebar)::before { content: "\\f45f" !important; }
:host(.bi-layout-split)::before { content: "\\f460" !important; }
:host(.bi-layout-text-sidebar-reverse)::before { content: "\\f461" !important; }
:host(.bi-layout-text-sidebar)::before { content: "\\f462" !important; }
:host(.bi-layout-text-window-reverse)::before { content: "\\f463" !important; }
:host(.bi-layout-text-window)::before { content: "\\f464" !important; }
:host(.bi-layout-three-columns)::before { content: "\\f465" !important; }
:host(.bi-layout-wtf)::before { content: "\\f466" !important; }
:host(.bi-life-preserver)::before { content: "\\f467" !important; }
:host(.bi-lightbulb-fill)::before { content: "\\f468" !important; }
:host(.bi-lightbulb-off-fill)::before { content: "\\f469" !important; }
:host(.bi-lightbulb-off)::before { content: "\\f46a" !important; }
:host(.bi-lightbulb)::before { content: "\\f46b" !important; }
:host(.bi-lightning-charge-fill)::before { content: "\\f46c" !important; }
:host(.bi-lightning-charge)::before { content: "\\f46d" !important; }
:host(.bi-lightning-fill)::before { content: "\\f46e" !important; }
:host(.bi-lightning)::before { content: "\\f46f" !important; }
:host(.bi-link-45deg)::before { content: "\\f470" !important; }
:host(.bi-link)::before { content: "\\f471" !important; }
:host(.bi-linkedin)::before { content: "\\f472" !important; }
:host(.bi-list-check)::before { content: "\\f473" !important; }
:host(.bi-list-nested)::before { content: "\\f474" !important; }
:host(.bi-list-ol)::before { content: "\\f475" !important; }
:host(.bi-list-stars)::before { content: "\\f476" !important; }
:host(.bi-list-task)::before { content: "\\f477" !important; }
:host(.bi-list-ul)::before { content: "\\f478" !important; }
:host(.bi-list)::before { content: "\\f479" !important; }
:host(.bi-lock-fill)::before { content: "\\f47a" !important; }
:host(.bi-lock)::before { content: "\\f47b" !important; }
:host(.bi-mailbox)::before { content: "\\f47c" !important; }
:host(.bi-mailbox2)::before { content: "\\f47d" !important; }
:host(.bi-map-fill)::before { content: "\\f47e" !important; }
:host(.bi-map)::before { content: "\\f47f" !important; }
:host(.bi-markdown-fill)::before { content: "\\f480" !important; }
:host(.bi-markdown)::before { content: "\\f481" !important; }
:host(.bi-mask)::before { content: "\\f482" !important; }
:host(.bi-megaphone-fill)::before { content: "\\f483" !important; }
:host(.bi-megaphone)::before { content: "\\f484" !important; }
:host(.bi-menu-app-fill)::before { content: "\\f485" !important; }
:host(.bi-menu-app)::before { content: "\\f486" !important; }
:host(.bi-menu-button-fill)::before { content: "\\f487" !important; }
:host(.bi-menu-button-wide-fill)::before { content: "\\f488" !important; }
:host(.bi-menu-button-wide)::before { content: "\\f489" !important; }
:host(.bi-menu-button)::before { content: "\\f48a" !important; }
:host(.bi-menu-down)::before { content: "\\f48b" !important; }
:host(.bi-menu-up)::before { content: "\\f48c" !important; }
:host(.bi-mic-fill)::before { content: "\\f48d" !important; }
:host(.bi-mic-mute-fill)::before { content: "\\f48e" !important; }
:host(.bi-mic-mute)::before { content: "\\f48f" !important; }
:host(.bi-mic)::before { content: "\\f490" !important; }
:host(.bi-minecart-loaded)::before { content: "\\f491" !important; }
:host(.bi-minecart)::before { content: "\\f492" !important; }
:host(.bi-moisture)::before { content: "\\f493" !important; }
:host(.bi-moon-fill)::before { content: "\\f494" !important; }
:host(.bi-moon-stars-fill)::before { content: "\\f495" !important; }
:host(.bi-moon-stars)::before { content: "\\f496" !important; }
:host(.bi-moon)::before { content: "\\f497" !important; }
:host(.bi-mouse-fill)::before { content: "\\f498" !important; }
:host(.bi-mouse)::before { content: "\\f499" !important; }
:host(.bi-mouse2-fill)::before { content: "\\f49a" !important; }
:host(.bi-mouse2)::before { content: "\\f49b" !important; }
:host(.bi-mouse3-fill)::before { content: "\\f49c" !important; }
:host(.bi-mouse3)::before { content: "\\f49d" !important; }
:host(.bi-music-note-beamed)::before { content: "\\f49e" !important; }
:host(.bi-music-note-list)::before { content: "\\f49f" !important; }
:host(.bi-music-note)::before { content: "\\f4a0" !important; }
:host(.bi-music-player-fill)::before { content: "\\f4a1" !important; }
:host(.bi-music-player)::before { content: "\\f4a2" !important; }
:host(.bi-newspaper)::before { content: "\\f4a3" !important; }
:host(.bi-node-minus-fill)::before { content: "\\f4a4" !important; }
:host(.bi-node-minus)::before { content: "\\f4a5" !important; }
:host(.bi-node-plus-fill)::before { content: "\\f4a6" !important; }
:host(.bi-node-plus)::before { content: "\\f4a7" !important; }
:host(.bi-nut-fill)::before { content: "\\f4a8" !important; }
:host(.bi-nut)::before { content: "\\f4a9" !important; }
:host(.bi-octagon-fill)::before { content: "\\f4aa" !important; }
:host(.bi-octagon-half)::before { content: "\\f4ab" !important; }
:host(.bi-octagon)::before { content: "\\f4ac" !important; }
:host(.bi-option)::before { content: "\\f4ad" !important; }
:host(.bi-outlet)::before { content: "\\f4ae" !important; }
:host(.bi-paint-bucket)::before { content: "\\f4af" !important; }
:host(.bi-palette-fill)::before { content: "\\f4b0" !important; }
:host(.bi-palette)::before { content: "\\f4b1" !important; }
:host(.bi-palette2)::before { content: "\\f4b2" !important; }
:host(.bi-paperclip)::before { content: "\\f4b3" !important; }
:host(.bi-paragraph)::before { content: "\\f4b4" !important; }
:host(.bi-patch-check-fill)::before { content: "\\f4b5" !important; }
:host(.bi-patch-check)::before { content: "\\f4b6" !important; }
:host(.bi-patch-exclamation-fill)::before { content: "\\f4b7" !important; }
:host(.bi-patch-exclamation)::before { content: "\\f4b8" !important; }
:host(.bi-patch-minus-fill)::before { content: "\\f4b9" !important; }
:host(.bi-patch-minus)::before { content: "\\f4ba" !important; }
:host(.bi-patch-plus-fill)::before { content: "\\f4bb" !important; }
:host(.bi-patch-plus)::before { content: "\\f4bc" !important; }
:host(.bi-patch-question-fill)::before { content: "\\f4bd" !important; }
:host(.bi-patch-question)::before { content: "\\f4be" !important; }
:host(.bi-pause-btn-fill)::before { content: "\\f4bf" !important; }
:host(.bi-pause-btn)::before { content: "\\f4c0" !important; }
:host(.bi-pause-circle-fill)::before { content: "\\f4c1" !important; }
:host(.bi-pause-circle)::before { content: "\\f4c2" !important; }
:host(.bi-pause-fill)::before { content: "\\f4c3" !important; }
:host(.bi-pause)::before { content: "\\f4c4" !important; }
:host(.bi-peace-fill)::before { content: "\\f4c5" !important; }
:host(.bi-peace)::before { content: "\\f4c6" !important; }
:host(.bi-pen-fill)::before { content: "\\f4c7" !important; }
:host(.bi-pen)::before { content: "\\f4c8" !important; }
:host(.bi-pencil-fill)::before { content: "\\f4c9" !important; }
:host(.bi-pencil-square)::before { content: "\\f4ca" !important; }
:host(.bi-pencil)::before { content: "\\f4cb" !important; }
:host(.bi-pentagon-fill)::before { content: "\\f4cc" !important; }
:host(.bi-pentagon-half)::before { content: "\\f4cd" !important; }
:host(.bi-pentagon)::before { content: "\\f4ce" !important; }
:host(.bi-people-fill)::before { content: "\\f4cf" !important; }
:host(.bi-people)::before { content: "\\f4d0" !important; }
:host(.bi-percent)::before { content: "\\f4d1" !important; }
:host(.bi-person-badge-fill)::before { content: "\\f4d2" !important; }
:host(.bi-person-badge)::before { content: "\\f4d3" !important; }
:host(.bi-person-bounding-box)::before { content: "\\f4d4" !important; }
:host(.bi-person-check-fill)::before { content: "\\f4d5" !important; }
:host(.bi-person-check)::before { content: "\\f4d6" !important; }
:host(.bi-person-circle)::before { content: "\\f4d7" !important; }
:host(.bi-person-dash-fill)::before { content: "\\f4d8" !important; }
:host(.bi-person-dash)::before { content: "\\f4d9" !important; }
:host(.bi-person-fill)::before { content: "\\f4da" !important; }
:host(.bi-person-lines-fill)::before { content: "\\f4db" !important; }
:host(.bi-person-plus-fill)::before { content: "\\f4dc" !important; }
:host(.bi-person-plus)::before { content: "\\f4dd" !important; }
:host(.bi-person-square)::before { content: "\\f4de" !important; }
:host(.bi-person-x-fill)::before { content: "\\f4df" !important; }
:host(.bi-person-x)::before { content: "\\f4e0" !important; }
:host(.bi-person)::before { content: "\\f4e1" !important; }
:host(.bi-phone-fill)::before { content: "\\f4e2" !important; }
:host(.bi-phone-landscape-fill)::before { content: "\\f4e3" !important; }
:host(.bi-phone-landscape)::before { content: "\\f4e4" !important; }
:host(.bi-phone-vibrate-fill)::before { content: "\\f4e5" !important; }
:host(.bi-phone-vibrate)::before { content: "\\f4e6" !important; }
:host(.bi-phone)::before { content: "\\f4e7" !important; }
:host(.bi-pie-chart-fill)::before { content: "\\f4e8" !important; }
:host(.bi-pie-chart)::before { content: "\\f4e9" !important; }
:host(.bi-pin-angle-fill)::before { content: "\\f4ea" !important; }
:host(.bi-pin-angle)::before { content: "\\f4eb" !important; }
:host(.bi-pin-fill)::before { content: "\\f4ec" !important; }
:host(.bi-pin)::before { content: "\\f4ed" !important; }
:host(.bi-pip-fill)::before { content: "\\f4ee" !important; }
:host(.bi-pip)::before { content: "\\f4ef" !important; }
:host(.bi-play-btn-fill)::before { content: "\\f4f0" !important; }
:host(.bi-play-btn)::before { content: "\\f4f1" !important; }
:host(.bi-play-circle-fill)::before { content: "\\f4f2" !important; }
:host(.bi-play-circle)::before { content: "\\f4f3" !important; }
:host(.bi-play-fill)::before { content: "\\f4f4" !important; }
:host(.bi-play)::before { content: "\\f4f5" !important; }
:host(.bi-plug-fill)::before { content: "\\f4f6" !important; }
:host(.bi-plug)::before { content: "\\f4f7" !important; }
:host(.bi-plus-circle-dotted)::before { content: "\\f4f8" !important; }
:host(.bi-plus-circle-fill)::before { content: "\\f4f9" !important; }
:host(.bi-plus-circle)::before { content: "\\f4fa" !important; }
:host(.bi-plus-square-dotted)::before { content: "\\f4fb" !important; }
:host(.bi-plus-square-fill)::before { content: "\\f4fc" !important; }
:host(.bi-plus-square)::before { content: "\\f4fd" !important; }
:host(.bi-plus)::before { content: "\\f4fe" !important; }
:host(.bi-power)::before { content: "\\f4ff" !important; }
:host(.bi-printer-fill)::before { content: "\\f500" !important; }
:host(.bi-printer)::before { content: "\\f501" !important; }
:host(.bi-puzzle-fill)::before { content: "\\f502" !important; }
:host(.bi-puzzle)::before { content: "\\f503" !important; }
:host(.bi-question-circle-fill)::before { content: "\\f504" !important; }
:host(.bi-question-circle)::before { content: "\\f505" !important; }
:host(.bi-question-diamond-fill)::before { content: "\\f506" !important; }
:host(.bi-question-diamond)::before { content: "\\f507" !important; }
:host(.bi-question-octagon-fill)::before { content: "\\f508" !important; }
:host(.bi-question-octagon)::before { content: "\\f509" !important; }
:host(.bi-question-square-fill)::before { content: "\\f50a" !important; }
:host(.bi-question-square)::before { content: "\\f50b" !important; }
:host(.bi-question)::before { content: "\\f50c" !important; }
:host(.bi-rainbow)::before { content: "\\f50d" !important; }
:host(.bi-receipt-cutoff)::before { content: "\\f50e" !important; }
:host(.bi-receipt)::before { content: "\\f50f" !important; }
:host(.bi-reception-0)::before { content: "\\f510" !important; }
:host(.bi-reception-1)::before { content: "\\f511" !important; }
:host(.bi-reception-2)::before { content: "\\f512" !important; }
:host(.bi-reception-3)::before { content: "\\f513" !important; }
:host(.bi-reception-4)::before { content: "\\f514" !important; }
:host(.bi-record-btn-fill)::before { content: "\\f515" !important; }
:host(.bi-record-btn)::before { content: "\\f516" !important; }
:host(.bi-record-circle-fill)::before { content: "\\f517" !important; }
:host(.bi-record-circle)::before { content: "\\f518" !important; }
:host(.bi-record-fill)::before { content: "\\f519" !important; }
:host(.bi-record)::before { content: "\\f51a" !important; }
:host(.bi-record2-fill)::before { content: "\\f51b" !important; }
:host(.bi-record2)::before { content: "\\f51c" !important; }
:host(.bi-reply-all-fill)::before { content: "\\f51d" !important; }
:host(.bi-reply-all)::before { content: "\\f51e" !important; }
:host(.bi-reply-fill)::before { content: "\\f51f" !important; }
:host(.bi-reply)::before { content: "\\f520" !important; }
:host(.bi-rss-fill)::before { content: "\\f521" !important; }
:host(.bi-rss)::before { content: "\\f522" !important; }
:host(.bi-rulers)::before { content: "\\f523" !important; }
:host(.bi-save-fill)::before { content: "\\f524" !important; }
:host(.bi-save)::before { content: "\\f525" !important; }
:host(.bi-save2-fill)::before { content: "\\f526" !important; }
:host(.bi-save2)::before { content: "\\f527" !important; }
:host(.bi-scissors)::before { content: "\\f528" !important; }
:host(.bi-screwdriver)::before { content: "\\f529" !important; }
:host(.bi-search)::before { content: "\\f52a" !important; }
:host(.bi-segmented-nav)::before { content: "\\f52b" !important; }
:host(.bi-server)::before { content: "\\f52c" !important; }
:host(.bi-share-fill)::before { content: "\\f52d" !important; }
:host(.bi-share)::before { content: "\\f52e" !important; }
:host(.bi-shield-check)::before { content: "\\f52f" !important; }
:host(.bi-shield-exclamation)::before { content: "\\f530" !important; }
:host(.bi-shield-fill-check)::before { content: "\\f531" !important; }
:host(.bi-shield-fill-exclamation)::before { content: "\\f532" !important; }
:host(.bi-shield-fill-minus)::before { content: "\\f533" !important; }
:host(.bi-shield-fill-plus)::before { content: "\\f534" !important; }
:host(.bi-shield-fill-x)::before { content: "\\f535" !important; }
:host(.bi-shield-fill)::before { content: "\\f536" !important; }
:host(.bi-shield-lock-fill)::before { content: "\\f537" !important; }
:host(.bi-shield-lock)::before { content: "\\f538" !important; }
:host(.bi-shield-minus)::before { content: "\\f539" !important; }
:host(.bi-shield-plus)::before { content: "\\f53a" !important; }
:host(.bi-shield-shaded)::before { content: "\\f53b" !important; }
:host(.bi-shield-slash-fill)::before { content: "\\f53c" !important; }
:host(.bi-shield-slash)::before { content: "\\f53d" !important; }
:host(.bi-shield-x)::before { content: "\\f53e" !important; }
:host(.bi-shield)::before { content: "\\f53f" !important; }
:host(.bi-shift-fill)::before { content: "\\f540" !important; }
:host(.bi-shift)::before { content: "\\f541" !important; }
:host(.bi-shop-window)::before { content: "\\f542" !important; }
:host(.bi-shop)::before { content: "\\f543" !important; }
:host(.bi-shuffle)::before { content: "\\f544" !important; }
:host(.bi-signpost-2-fill)::before { content: "\\f545" !important; }
:host(.bi-signpost-2)::before { content: "\\f546" !important; }
:host(.bi-signpost-fill)::before { content: "\\f547" !important; }
:host(.bi-signpost-split-fill)::before { content: "\\f548" !important; }
:host(.bi-signpost-split)::before { content: "\\f549" !important; }
:host(.bi-signpost)::before { content: "\\f54a" !important; }
:host(.bi-sim-fill)::before { content: "\\f54b" !important; }
:host(.bi-sim)::before { content: "\\f54c" !important; }
:host(.bi-skip-backward-btn-fill)::before { content: "\\f54d" !important; }
:host(.bi-skip-backward-btn)::before { content: "\\f54e" !important; }
:host(.bi-skip-backward-circle-fill)::before { content: "\\f54f" !important; }
:host(.bi-skip-backward-circle)::before { content: "\\f550" !important; }
:host(.bi-skip-backward-fill)::before { content: "\\f551" !important; }
:host(.bi-skip-backward)::before { content: "\\f552" !important; }
:host(.bi-skip-end-btn-fill)::before { content: "\\f553" !important; }
:host(.bi-skip-end-btn)::before { content: "\\f554" !important; }
:host(.bi-skip-end-circle-fill)::before { content: "\\f555" !important; }
:host(.bi-skip-end-circle)::before { content: "\\f556" !important; }
:host(.bi-skip-end-fill)::before { content: "\\f557" !important; }
:host(.bi-skip-end)::before { content: "\\f558" !important; }
:host(.bi-skip-forward-btn-fill)::before { content: "\\f559" !important; }
:host(.bi-skip-forward-btn)::before { content: "\\f55a" !important; }
:host(.bi-skip-forward-circle-fill)::before { content: "\\f55b" !important; }
:host(.bi-skip-forward-circle)::before { content: "\\f55c" !important; }
:host(.bi-skip-forward-fill)::before { content: "\\f55d" !important; }
:host(.bi-skip-forward)::before { content: "\\f55e" !important; }
:host(.bi-skip-start-btn-fill)::before { content: "\\f55f" !important; }
:host(.bi-skip-start-btn)::before { content: "\\f560" !important; }
:host(.bi-skip-start-circle-fill)::before { content: "\\f561" !important; }
:host(.bi-skip-start-circle)::before { content: "\\f562" !important; }
:host(.bi-skip-start-fill)::before { content: "\\f563" !important; }
:host(.bi-skip-start)::before { content: "\\f564" !important; }
:host(.bi-slack)::before { content: "\\f565" !important; }
:host(.bi-slash-circle-fill)::before { content: "\\f566" !important; }
:host(.bi-slash-circle)::before { content: "\\f567" !important; }
:host(.bi-slash-square-fill)::before { content: "\\f568" !important; }
:host(.bi-slash-square)::before { content: "\\f569" !important; }
:host(.bi-slash)::before { content: "\\f56a" !important; }
:host(.bi-sliders)::before { content: "\\f56b" !important; }
:host(.bi-smartwatch)::before { content: "\\f56c" !important; }
:host(.bi-snow)::before { content: "\\f56d" !important; }
:host(.bi-snow2)::before { content: "\\f56e" !important; }
:host(.bi-snow3)::before { content: "\\f56f" !important; }
:host(.bi-sort-alpha-down-alt)::before { content: "\\f570" !important; }
:host(.bi-sort-alpha-down)::before { content: "\\f571" !important; }
:host(.bi-sort-alpha-up-alt)::before { content: "\\f572" !important; }
:host(.bi-sort-alpha-up)::before { content: "\\f573" !important; }
:host(.bi-sort-down-alt)::before { content: "\\f574" !important; }
:host(.bi-sort-down)::before { content: "\\f575" !important; }
:host(.bi-sort-numeric-down-alt)::before { content: "\\f576" !important; }
:host(.bi-sort-numeric-down)::before { content: "\\f577" !important; }
:host(.bi-sort-numeric-up-alt)::before { content: "\\f578" !important; }
:host(.bi-sort-numeric-up)::before { content: "\\f579" !important; }
:host(.bi-sort-up-alt)::before { content: "\\f57a" !important; }
:host(.bi-sort-up)::before { content: "\\f57b" !important; }
:host(.bi-soundwave)::before { content: "\\f57c" !important; }
:host(.bi-speaker-fill)::before { content: "\\f57d" !important; }
:host(.bi-speaker)::before { content: "\\f57e" !important; }
:host(.bi-speedometer)::before { content: "\\f57f" !important; }
:host(.bi-speedometer2)::before { content: "\\f580" !important; }
:host(.bi-spellcheck)::before { content: "\\f581" !important; }
:host(.bi-square-fill)::before { content: "\\f582" !important; }
:host(.bi-square-half)::before { content: "\\f583" !important; }
:host(.bi-square)::before { content: "\\f584" !important; }
:host(.bi-stack)::before { content: "\\f585" !important; }
:host(.bi-star-fill)::before { content: "\\f586" !important; }
:host(.bi-star-half)::before { content: "\\f587" !important; }
:host(.bi-star)::before { content: "\\f588" !important; }
:host(.bi-stars)::before { content: "\\f589" !important; }
:host(.bi-stickies-fill)::before { content: "\\f58a" !important; }
:host(.bi-stickies)::before { content: "\\f58b" !important; }
:host(.bi-sticky-fill)::before { content: "\\f58c" !important; }
:host(.bi-sticky)::before { content: "\\f58d" !important; }
:host(.bi-stop-btn-fill)::before { content: "\\f58e" !important; }
:host(.bi-stop-btn)::before { content: "\\f58f" !important; }
:host(.bi-stop-circle-fill)::before { content: "\\f590" !important; }
:host(.bi-stop-circle)::before { content: "\\f591" !important; }
:host(.bi-stop-fill)::before { content: "\\f592" !important; }
:host(.bi-stop)::before { content: "\\f593" !important; }
:host(.bi-stoplights-fill)::before { content: "\\f594" !important; }
:host(.bi-stoplights)::before { content: "\\f595" !important; }
:host(.bi-stopwatch-fill)::before { content: "\\f596" !important; }
:host(.bi-stopwatch)::before { content: "\\f597" !important; }
:host(.bi-subtract)::before { content: "\\f598" !important; }
:host(.bi-suit-club-fill)::before { content: "\\f599" !important; }
:host(.bi-suit-club)::before { content: "\\f59a" !important; }
:host(.bi-suit-diamond-fill)::before { content: "\\f59b" !important; }
:host(.bi-suit-diamond)::before { content: "\\f59c" !important; }
:host(.bi-suit-heart-fill)::before { content: "\\f59d" !important; }
:host(.bi-suit-heart)::before { content: "\\f59e" !important; }
:host(.bi-suit-spade-fill)::before { content: "\\f59f" !important; }
:host(.bi-suit-spade)::before { content: "\\f5a0" !important; }
:host(.bi-sun-fill)::before { content: "\\f5a1" !important; }
:host(.bi-sun)::before { content: "\\f5a2" !important; }
:host(.bi-sunglasses)::before { content: "\\f5a3" !important; }
:host(.bi-sunrise-fill)::before { content: "\\f5a4" !important; }
:host(.bi-sunrise)::before { content: "\\f5a5" !important; }
:host(.bi-sunset-fill)::before { content: "\\f5a6" !important; }
:host(.bi-sunset)::before { content: "\\f5a7" !important; }
:host(.bi-symmetry-horizontal)::before { content: "\\f5a8" !important; }
:host(.bi-symmetry-vertical)::before { content: "\\f5a9" !important; }
:host(.bi-table)::before { content: "\\f5aa" !important; }
:host(.bi-tablet-fill)::before { content: "\\f5ab" !important; }
:host(.bi-tablet-landscape-fill)::before { content: "\\f5ac" !important; }
:host(.bi-tablet-landscape)::before { content: "\\f5ad" !important; }
:host(.bi-tablet)::before { content: "\\f5ae" !important; }
:host(.bi-tag-fill)::before { content: "\\f5af" !important; }
:host(.bi-tag)::before { content: "\\f5b0" !important; }
:host(.bi-tags-fill)::before { content: "\\f5b1" !important; }
:host(.bi-tags)::before { content: "\\f5b2" !important; }
:host(.bi-telegram)::before { content: "\\f5b3" !important; }
:host(.bi-telephone-fill)::before { content: "\\f5b4" !important; }
:host(.bi-telephone-forward-fill)::before { content: "\\f5b5" !important; }
:host(.bi-telephone-forward)::before { content: "\\f5b6" !important; }
:host(.bi-telephone-inbound-fill)::before { content: "\\f5b7" !important; }
:host(.bi-telephone-inbound)::before { content: "\\f5b8" !important; }
:host(.bi-telephone-minus-fill)::before { content: "\\f5b9" !important; }
:host(.bi-telephone-minus)::before { content: "\\f5ba" !important; }
:host(.bi-telephone-outbound-fill)::before { content: "\\f5bb" !important; }
:host(.bi-telephone-outbound)::before { content: "\\f5bc" !important; }
:host(.bi-telephone-plus-fill)::before { content: "\\f5bd" !important; }
:host(.bi-telephone-plus)::before { content: "\\f5be" !important; }
:host(.bi-telephone-x-fill)::before { content: "\\f5bf" !important; }
:host(.bi-telephone-x)::before { content: "\\f5c0" !important; }
:host(.bi-telephone)::before { content: "\\f5c1" !important; }
:host(.bi-terminal-fill)::before { content: "\\f5c2" !important; }
:host(.bi-terminal)::before { content: "\\f5c3" !important; }
:host(.bi-text-center)::before { content: "\\f5c4" !important; }
:host(.bi-text-indent-left)::before { content: "\\f5c5" !important; }
:host(.bi-text-indent-right)::before { content: "\\f5c6" !important; }
:host(.bi-text-left)::before { content: "\\f5c7" !important; }
:host(.bi-text-paragraph)::before { content: "\\f5c8" !important; }
:host(.bi-text-right)::before { content: "\\f5c9" !important; }
:host(.bi-textarea-resize)::before { content: "\\f5ca" !important; }
:host(.bi-textarea-t)::before { content: "\\f5cb" !important; }
:host(.bi-textarea)::before { content: "\\f5cc" !important; }
:host(.bi-thermometer-half)::before { content: "\\f5cd" !important; }
:host(.bi-thermometer-high)::before { content: "\\f5ce" !important; }
:host(.bi-thermometer-low)::before { content: "\\f5cf" !important; }
:host(.bi-thermometer-snow)::before { content: "\\f5d0" !important; }
:host(.bi-thermometer-sun)::before { content: "\\f5d1" !important; }
:host(.bi-thermometer)::before { content: "\\f5d2" !important; }
:host(.bi-three-dots-vertical)::before { content: "\\f5d3" !important; }
:host(.bi-three-dots)::before { content: "\\f5d4" !important; }
:host(.bi-toggle-off)::before { content: "\\f5d5" !important; }
:host(.bi-toggle-on)::before { content: "\\f5d6" !important; }
:host(.bi-toggle2-off)::before { content: "\\f5d7" !important; }
:host(.bi-toggle2-on)::before { content: "\\f5d8" !important; }
:host(.bi-toggles)::before { content: "\\f5d9" !important; }
:host(.bi-toggles2)::before { content: "\\f5da" !important; }
:host(.bi-tools)::before { content: "\\f5db" !important; }
:host(.bi-tornado)::before { content: "\\f5dc" !important; }
:host(.bi-trash-fill)::before { content: "\\f5dd" !important; }
:host(.bi-trash)::before { content: "\\f5de" !important; }
:host(.bi-trash2-fill)::before { content: "\\f5df" !important; }
:host(.bi-trash2)::before { content: "\\f5e0" !important; }
:host(.bi-tree-fill)::before { content: "\\f5e1" !important; }
:host(.bi-tree)::before { content: "\\f5e2" !important; }
:host(.bi-triangle-fill)::before { content: "\\f5e3" !important; }
:host(.bi-triangle-half)::before { content: "\\f5e4" !important; }
:host(.bi-triangle)::before { content: "\\f5e5" !important; }
:host(.bi-trophy-fill)::before { content: "\\f5e6" !important; }
:host(.bi-trophy)::before { content: "\\f5e7" !important; }
:host(.bi-tropical-storm)::before { content: "\\f5e8" !important; }
:host(.bi-truck-flatbed)::before { content: "\\f5e9" !important; }
:host(.bi-truck)::before { content: "\\f5ea" !important; }
:host(.bi-tsunami)::before { content: "\\f5eb" !important; }
:host(.bi-tv-fill)::before { content: "\\f5ec" !important; }
:host(.bi-tv)::before { content: "\\f5ed" !important; }
:host(.bi-twitch)::before { content: "\\f5ee" !important; }
:host(.bi-twitter)::before { content: "\\f5ef" !important; }
:host(.bi-type-bold)::before { content: "\\f5f0" !important; }
:host(.bi-type-h1)::before { content: "\\f5f1" !important; }
:host(.bi-type-h2)::before { content: "\\f5f2" !important; }
:host(.bi-type-h3)::before { content: "\\f5f3" !important; }
:host(.bi-type-italic)::before { content: "\\f5f4" !important; }
:host(.bi-type-strikethrough)::before { content: "\\f5f5" !important; }
:host(.bi-type-underline)::before { content: "\\f5f6" !important; }
:host(.bi-type)::before { content: "\\f5f7" !important; }
:host(.bi-ui-checks-grid)::before { content: "\\f5f8" !important; }
:host(.bi-ui-checks)::before { content: "\\f5f9" !important; }
:host(.bi-ui-radios-grid)::before { content: "\\f5fa" !important; }
:host(.bi-ui-radios)::before { content: "\\f5fb" !important; }
:host(.bi-umbrella-fill)::before { content: "\\f5fc" !important; }
:host(.bi-umbrella)::before { content: "\\f5fd" !important; }
:host(.bi-union)::before { content: "\\f5fe" !important; }
:host(.bi-unlock-fill)::before { content: "\\f5ff" !important; }
:host(.bi-unlock)::before { content: "\\f600" !important; }
:host(.bi-upc-scan)::before { content: "\\f601" !important; }
:host(.bi-upc)::before { content: "\\f602" !important; }
:host(.bi-upload)::before { content: "\\f603" !important; }
:host(.bi-vector-pen)::before { content: "\\f604" !important; }
:host(.bi-view-list)::before { content: "\\f605" !important; }
:host(.bi-view-stacked)::before { content: "\\f606" !important; }
:host(.bi-vinyl-fill)::before { content: "\\f607" !important; }
:host(.bi-vinyl)::before { content: "\\f608" !important; }
:host(.bi-voicemail)::before { content: "\\f609" !important; }
:host(.bi-volume-down-fill)::before { content: "\\f60a" !important; }
:host(.bi-volume-down)::before { content: "\\f60b" !important; }
:host(.bi-volume-mute-fill)::before { content: "\\f60c" !important; }
:host(.bi-volume-mute)::before { content: "\\f60d" !important; }
:host(.bi-volume-off-fill)::before { content: "\\f60e" !important; }
:host(.bi-volume-off)::before { content: "\\f60f" !important; }
:host(.bi-volume-up-fill)::before { content: "\\f610" !important; }
:host(.bi-volume-up)::before { content: "\\f611" !important; }
:host(.bi-vr)::before { content: "\\f612" !important; }
:host(.bi-wallet-fill)::before { content: "\\f613" !important; }
:host(.bi-wallet)::before { content: "\\f614" !important; }
:host(.bi-wallet2)::before { content: "\\f615" !important; }
:host(.bi-watch)::before { content: "\\f616" !important; }
:host(.bi-water)::before { content: "\\f617" !important; }
:host(.bi-whatsapp)::before { content: "\\f618" !important; }
:host(.bi-wifi-1)::before { content: "\\f619" !important; }
:host(.bi-wifi-2)::before { content: "\\f61a" !important; }
:host(.bi-wifi-off)::before { content: "\\f61b" !important; }
:host(.bi-wifi)::before { content: "\\f61c" !important; }
:host(.bi-wind)::before { content: "\\f61d" !important; }
:host(.bi-window-dock)::before { content: "\\f61e" !important; }
:host(.bi-window-sidebar)::before { content: "\\f61f" !important; }
:host(.bi-window)::before { content: "\\f620" !important; }
:host(.bi-wrench)::before { content: "\\f621" !important; }
:host(.bi-x-circle-fill)::before { content: "\\f622" !important; }
:host(.bi-x-circle)::before { content: "\\f623" !important; }
:host(.bi-x-diamond-fill)::before { content: "\\f624" !important; }
:host(.bi-x-diamond)::before { content: "\\f625" !important; }
:host(.bi-x-octagon-fill)::before { content: "\\f626" !important; }
:host(.bi-x-octagon)::before { content: "\\f627" !important; }
:host(.bi-x-square-fill)::before { content: "\\f628" !important; }
:host(.bi-x-square)::before { content: "\\f629" !important; }
:host(.bi-x)::before { content: "\\f62a" !important; }
:host(.bi-youtube)::before { content: "\\f62b" !important; }
:host(.bi-zoom-in)::before { content: "\\f62c" !important; }
:host(.bi-zoom-out)::before { content: "\\f62d" !important; }
:host(.bi-bank)::before { content: "\\f62e" !important; }
:host(.bi-bank2)::before { content: "\\f62f" !important; }
:host(.bi-bell-slash-fill)::before { content: "\\f630" !important; }
:host(.bi-bell-slash)::before { content: "\\f631" !important; }
:host(.bi-cash-coin)::before { content: "\\f632" !important; }
:host(.bi-check-lg)::before { content: "\\f633" !important; }
:host(.bi-coin)::before { content: "\\f634" !important; }
:host(.bi-currency-bitcoin)::before { content: "\\f635" !important; }
:host(.bi-currency-dollar)::before { content: "\\f636" !important; }
:host(.bi-currency-euro)::before { content: "\\f637" !important; }
:host(.bi-currency-exchange)::before { content: "\\f638" !important; }
:host(.bi-currency-pound)::before { content: "\\f639" !important; }
:host(.bi-currency-yen)::before { content: "\\f63a" !important; }
:host(.bi-dash-lg)::before { content: "\\f63b" !important; }
:host(.bi-exclamation-lg)::before { content: "\\f63c" !important; }
:host(.bi-file-earmark-pdf-fill)::before { content: "\\f63d" !important; }
:host(.bi-file-earmark-pdf)::before { content: "\\f63e" !important; }
:host(.bi-file-pdf-fill)::before { content: "\\f63f" !important; }
:host(.bi-file-pdf)::before { content: "\\f640" !important; }
:host(.bi-gender-ambiguous)::before { content: "\\f641" !important; }
:host(.bi-gender-female)::before { content: "\\f642" !important; }
:host(.bi-gender-male)::before { content: "\\f643" !important; }
:host(.bi-gender-trans)::before { content: "\\f644" !important; }
:host(.bi-headset-vr)::before { content: "\\f645" !important; }
:host(.bi-info-lg)::before { content: "\\f646" !important; }
:host(.bi-mastodon)::before { content: "\\f647" !important; }
:host(.bi-messenger)::before { content: "\\f648" !important; }
:host(.bi-piggy-bank-fill)::before { content: "\\f649" !important; }
:host(.bi-piggy-bank)::before { content: "\\f64a" !important; }
:host(.bi-pin-map-fill)::before { content: "\\f64b" !important; }
:host(.bi-pin-map)::before { content: "\\f64c" !important; }
:host(.bi-plus-lg)::before { content: "\\f64d" !important; }
:host(.bi-question-lg)::before { content: "\\f64e" !important; }
:host(.bi-recycle)::before { content: "\\f64f" !important; }
:host(.bi-reddit)::before { content: "\\f650" !important; }
:host(.bi-safe-fill)::before { content: "\\f651" !important; }
:host(.bi-safe2-fill)::before { content: "\\f652" !important; }
:host(.bi-safe2)::before { content: "\\f653" !important; }
:host(.bi-sd-card-fill)::before { content: "\\f654" !important; }
:host(.bi-sd-card)::before { content: "\\f655" !important; }
:host(.bi-skype)::before { content: "\\f656" !important; }
:host(.bi-slash-lg)::before { content: "\\f657" !important; }
:host(.bi-translate)::before { content: "\\f658" !important; }
:host(.bi-x-lg)::before { content: "\\f659" !important; }
:host(.bi-safe)::before { content: "\\f65a" !important; }
:host(.bi-apple)::before { content: "\\f65b" !important; }
:host(.bi-microsoft)::before { content: "\\f65d" !important; }
:host(.bi-windows)::before { content: "\\f65e" !important; }
:host(.bi-behance)::before { content: "\\f65c" !important; }
:host(.bi-dribbble)::before { content: "\\f65f" !important; }
:host(.bi-line)::before { content: "\\f660" !important; }
:host(.bi-medium)::before { content: "\\f661" !important; }
:host(.bi-paypal)::before { content: "\\f662" !important; }
:host(.bi-pinterest)::before { content: "\\f663" !important; }
:host(.bi-signal)::before { content: "\\f664" !important; }
:host(.bi-snapchat)::before { content: "\\f665" !important; }
:host(.bi-spotify)::before { content: "\\f666" !important; }
:host(.bi-stack-overflow)::before { content: "\\f667" !important; }
:host(.bi-strava)::before { content: "\\f668" !important; }
:host(.bi-wordpress)::before { content: "\\f669" !important; }
:host(.bi-vimeo)::before { content: "\\f66a" !important; }
:host(.bi-activity)::before { content: "\\f66b" !important; }
:host(.bi-easel2-fill)::before { content: "\\f66c" !important; }
:host(.bi-easel2)::before { content: "\\f66d" !important; }
:host(.bi-easel3-fill)::before { content: "\\f66e" !important; }
:host(.bi-easel3)::before { content: "\\f66f" !important; }
:host(.bi-fan)::before { content: "\\f670" !important; }
:host(.bi-fingerprint)::before { content: "\\f671" !important; }
:host(.bi-graph-down-arrow)::before { content: "\\f672" !important; }
:host(.bi-graph-up-arrow)::before { content: "\\f673" !important; }
:host(.bi-hypnotize)::before { content: "\\f674" !important; }
:host(.bi-magic)::before { content: "\\f675" !important; }
:host(.bi-person-rolodex)::before { content: "\\f676" !important; }
:host(.bi-person-video)::before { content: "\\f677" !important; }
:host(.bi-person-video2)::before { content: "\\f678" !important; }
:host(.bi-person-video3)::before { content: "\\f679" !important; }
:host(.bi-person-workspace)::before { content: "\\f67a" !important; }
:host(.bi-radioactive)::before { content: "\\f67b" !important; }
:host(.bi-webcam-fill)::before { content: "\\f67c" !important; }
:host(.bi-webcam)::before { content: "\\f67d" !important; }
:host(.bi-yin-yang)::before { content: "\\f67e" !important; }
:host(.bi-bandaid-fill)::before { content: "\\f680" !important; }
:host(.bi-bandaid)::before { content: "\\f681" !important; }
:host(.bi-bluetooth)::before { content: "\\f682" !important; }
:host(.bi-body-text)::before { content: "\\f683" !important; }
:host(.bi-boombox)::before { content: "\\f684" !important; }
:host(.bi-boxes)::before { content: "\\f685" !important; }
:host(.bi-dpad-fill)::before { content: "\\f686" !important; }
:host(.bi-dpad)::before { content: "\\f687" !important; }
:host(.bi-ear-fill)::before { content: "\\f688" !important; }
:host(.bi-ear)::before { content: "\\f689" !important; }
:host(.bi-envelope-check-1)::before { content: "\\f68c" !important; }
:host(.bi-envelope-check-fill)::before { content: "\\f68b" !important; }
:host(.bi-envelope-check)::before { content: "\\f68c" !important; }
:host(.bi-envelope-dash-1)::before { content: "\\f68f" !important; }
:host(.bi-envelope-dash-fill)::before { content: "\\f68e" !important; }
:host(.bi-envelope-dash)::before { content: "\\f68f" !important; }
:host(.bi-envelope-exclamation-1)::before { content: "\\f692" !important; }
:host(.bi-envelope-exclamation-fill)::before { content: "\\f691" !important; }
:host(.bi-envelope-exclamation)::before { content: "\\f692" !important; }
:host(.bi-envelope-plus-fill)::before { content: "\\f693" !important; }
:host(.bi-envelope-plus)::before { content: "\\f694" !important; }
:host(.bi-envelope-slash-1)::before { content: "\\f697" !important; }
:host(.bi-envelope-slash-fill)::before { content: "\\f696" !important; }
:host(.bi-envelope-slash)::before { content: "\\f697" !important; }
:host(.bi-envelope-x-1)::before { content: "\\f69a" !important; }
:host(.bi-envelope-x-fill)::before { content: "\\f699" !important; }
:host(.bi-envelope-x)::before { content: "\\f69a" !important; }
:host(.bi-explicit-fill)::before { content: "\\f69b" !important; }
:host(.bi-explicit)::before { content: "\\f69c" !important; }
:host(.bi-git)::before { content: "\\f69d" !important; }
:host(.bi-infinity)::before { content: "\\f69e" !important; }
:host(.bi-list-columns-reverse)::before { content: "\\f69f" !important; }
:host(.bi-list-columns)::before { content: "\\f6a0" !important; }
:host(.bi-meta)::before { content: "\\f6a1" !important; }
:host(.bi-mortorboard-fill)::before { content: "\\f6fd" !important; }
:host(.bi-mortorboard)::before { content: "\\f6fe" !important; }
:host(.bi-nintendo-switch)::before { content: "\\f6a4" !important; }
:host(.bi-pc-display-horizontal)::before { content: "\\f6a5" !important; }
:host(.bi-pc-display)::before { content: "\\f6a6" !important; }
:host(.bi-pc-horizontal)::before { content: "\\f6a7" !important; }
:host(.bi-pc)::before { content: "\\f6a8" !important; }
:host(.bi-playstation)::before { content: "\\f6a9" !important; }
:host(.bi-plus-slash-minus)::before { content: "\\f6aa" !important; }
:host(.bi-projector-fill)::before { content: "\\f6ab" !important; }
:host(.bi-projector)::before { content: "\\f6ac" !important; }
:host(.bi-qr-code-scan)::before { content: "\\f6ad" !important; }
:host(.bi-qr-code)::before { content: "\\f6ae" !important; }
:host(.bi-quora)::before { content: "\\f6af" !important; }
:host(.bi-quote)::before { content: "\\f6b0" !important; }
:host(.bi-robot)::before { content: "\\f6b1" !important; }
:host(.bi-send-check-fill)::before { content: "\\f6b2" !important; }
:host(.bi-send-check)::before { content: "\\f6b3" !important; }
:host(.bi-send-dash-fill)::before { content: "\\f6b4" !important; }
:host(.bi-send-dash)::before { content: "\\f6b5" !important; }
:host(.bi-send-exclamation-1)::before { content: "\\f6b8" !important; }
:host(.bi-send-exclamation-fill)::before { content: "\\f6b7" !important; }
:host(.bi-send-exclamation)::before { content: "\\f6b8" !important; }
:host(.bi-send-fill)::before { content: "\\f6b9" !important; }
:host(.bi-send-plus-fill)::before { content: "\\f6ba" !important; }
:host(.bi-send-plus)::before { content: "\\f6bb" !important; }
:host(.bi-send-slash-fill)::before { content: "\\f6bc" !important; }
:host(.bi-send-slash)::before { content: "\\f6bd" !important; }
:host(.bi-send-x-fill)::before { content: "\\f6be" !important; }
:host(.bi-send-x)::before { content: "\\f6bf" !important; }
:host(.bi-send)::before { content: "\\f6c0" !important; }
:host(.bi-steam)::before { content: "\\f6c1" !important; }
:host(.bi-terminal-dash-1)::before { content: "\\f6c3" !important; }
:host(.bi-terminal-dash)::before { content: "\\f6c3" !important; }
:host(.bi-terminal-plus)::before { content: "\\f6c4" !important; }
:host(.bi-terminal-split)::before { content: "\\f6c5" !important; }
:host(.bi-ticket-detailed-fill)::before { content: "\\f6c6" !important; }
:host(.bi-ticket-detailed)::before { content: "\\f6c7" !important; }
:host(.bi-ticket-fill)::before { content: "\\f6c8" !important; }
:host(.bi-ticket-perforated-fill)::before { content: "\\f6c9" !important; }
:host(.bi-ticket-perforated)::before { content: "\\f6ca" !important; }
:host(.bi-ticket)::before { content: "\\f6cb" !important; }
:host(.bi-tiktok)::before { content: "\\f6cc" !important; }
:host(.bi-window-dash)::before { content: "\\f6cd" !important; }
:host(.bi-window-desktop)::before { content: "\\f6ce" !important; }
:host(.bi-window-fullscreen)::before { content: "\\f6cf" !important; }
:host(.bi-window-plus)::before { content: "\\f6d0" !important; }
:host(.bi-window-split)::before { content: "\\f6d1" !important; }
:host(.bi-window-stack)::before { content: "\\f6d2" !important; }
:host(.bi-window-x)::before { content: "\\f6d3" !important; }
:host(.bi-xbox)::before { content: "\\f6d4" !important; }
:host(.bi-ethernet)::before { content: "\\f6d5" !important; }
:host(.bi-hdmi-fill)::before { content: "\\f6d6" !important; }
:host(.bi-hdmi)::before { content: "\\f6d7" !important; }
:host(.bi-usb-c-fill)::before { content: "\\f6d8" !important; }
:host(.bi-usb-c)::before { content: "\\f6d9" !important; }
:host(.bi-usb-fill)::before { content: "\\f6da" !important; }
:host(.bi-usb-plug-fill)::before { content: "\\f6db" !important; }
:host(.bi-usb-plug)::before { content: "\\f6dc" !important; }
:host(.bi-usb-symbol)::before { content: "\\f6dd" !important; }
:host(.bi-usb)::before { content: "\\f6de" !important; }
:host(.bi-boombox-fill)::before { content: "\\f6df" !important; }
:host(.bi-displayport-1)::before { content: "\\f6e1" !important; }
:host(.bi-displayport)::before { content: "\\f6e1" !important; }
:host(.bi-gpu-card)::before { content: "\\f6e2" !important; }
:host(.bi-memory)::before { content: "\\f6e3" !important; }
:host(.bi-modem-fill)::before { content: "\\f6e4" !important; }
:host(.bi-modem)::before { content: "\\f6e5" !important; }
:host(.bi-motherboard-fill)::before { content: "\\f6e6" !important; }
:host(.bi-motherboard)::before { content: "\\f6e7" !important; }
:host(.bi-optical-audio-fill)::before { content: "\\f6e8" !important; }
:host(.bi-optical-audio)::before { content: "\\f6e9" !important; }
:host(.bi-pci-card)::before { content: "\\f6ea" !important; }
:host(.bi-router-fill)::before { content: "\\f6eb" !important; }
:host(.bi-router)::before { content: "\\f6ec" !important; }
:host(.bi-ssd-fill)::before { content: "\\f6fa" !important; }
:host(.bi-ssd)::before { content: "\\f6fb" !important; }
:host(.bi-thunderbolt-fill)::before { content: "\\f6ef" !important; }
:host(.bi-thunderbolt)::before { content: "\\f6f0" !important; }
:host(.bi-usb-drive-fill)::before { content: "\\f6f1" !important; }
:host(.bi-usb-drive)::before { content: "\\f6f2" !important; }
:host(.bi-usb-micro-fill)::before { content: "\\f6f3" !important; }
:host(.bi-usb-micro)::before { content: "\\f6f4" !important; }
:host(.bi-usb-mini-fill)::before { content: "\\f6f5" !important; }
:host(.bi-usb-mini)::before { content: "\\f6f6" !important; }
:host(.bi-cloud-haze2)::before { content: "\\f6f7" !important; }
:host(.bi-device-hdd-fill)::before { content: "\\f6f8" !important; }
:host(.bi-device-hdd)::before { content: "\\f6f9" !important; }
:host(.bi-device-ssd-fill)::before { content: "\\f6fa" !important; }
:host(.bi-device-ssd)::before { content: "\\f6fb" !important; }
:host(.bi-displayport-fill)::before { content: "\\f6fc" !important; }
:host(.bi-mortarboard-fill)::before { content: "\\f6fd" !important; }
:host(.bi-mortarboard)::before { content: "\\f6fe" !important; }
:host(.bi-terminal-x)::before { content: "\\f6ff" !important; }
:host(.bi-arrow-through-heart-fill)::before { content: "\\f700" !important; }
:host(.bi-arrow-through-heart)::before { content: "\\f701" !important; }
:host(.bi-badge-sd-fill)::before { content: "\\f702" !important; }
:host(.bi-badge-sd)::before { content: "\\f703" !important; }
:host(.bi-bag-heart-fill)::before { content: "\\f704" !important; }
:host(.bi-bag-heart)::before { content: "\\f705" !important; }
:host(.bi-balloon-fill)::before { content: "\\f706" !important; }
:host(.bi-balloon-heart-fill)::before { content: "\\f707" !important; }
:host(.bi-balloon-heart)::before { content: "\\f708" !important; }
:host(.bi-balloon)::before { content: "\\f709" !important; }
:host(.bi-box2-fill)::before { content: "\\f70a" !important; }
:host(.bi-box2-heart-fill)::before { content: "\\f70b" !important; }
:host(.bi-box2-heart)::before { content: "\\f70c" !important; }
:host(.bi-box2)::before { content: "\\f70d" !important; }
:host(.bi-braces-asterisk)::before { content: "\\f70e" !important; }
:host(.bi-calendar-heart-fill)::before { content: "\\f70f" !important; }
:host(.bi-calendar-heart)::before { content: "\\f710" !important; }
:host(.bi-calendar2-heart-fill)::before { content: "\\f711" !important; }
:host(.bi-calendar2-heart)::before { content: "\\f712" !important; }
:host(.bi-chat-heart-fill)::before { content: "\\f713" !important; }
:host(.bi-chat-heart)::before { content: "\\f714" !important; }
:host(.bi-chat-left-heart-fill)::before { content: "\\f715" !important; }
:host(.bi-chat-left-heart)::before { content: "\\f716" !important; }
:host(.bi-chat-right-heart-fill)::before { content: "\\f717" !important; }
:host(.bi-chat-right-heart)::before { content: "\\f718" !important; }
:host(.bi-chat-square-heart-fill)::before { content: "\\f719" !important; }
:host(.bi-chat-square-heart)::before { content: "\\f71a" !important; }
:host(.bi-clipboard-check-fill)::before { content: "\\f71b" !important; }
:host(.bi-clipboard-data-fill)::before { content: "\\f71c" !important; }
:host(.bi-clipboard-fill)::before { content: "\\f71d" !important; }
:host(.bi-clipboard-heart-fill)::before { content: "\\f71e" !important; }
:host(.bi-clipboard-heart)::before { content: "\\f71f" !important; }
:host(.bi-clipboard-minus-fill)::before { content: "\\f720" !important; }
:host(.bi-clipboard-plus-fill)::before { content: "\\f721" !important; }
:host(.bi-clipboard-pulse)::before { content: "\\f722" !important; }
:host(.bi-clipboard-x-fill)::before { content: "\\f723" !important; }
:host(.bi-clipboard2-check-fill)::before { content: "\\f724" !important; }
:host(.bi-clipboard2-check)::before { content: "\\f725" !important; }
:host(.bi-clipboard2-data-fill)::before { content: "\\f726" !important; }
:host(.bi-clipboard2-data)::before { content: "\\f727" !important; }
:host(.bi-clipboard2-fill)::before { content: "\\f728" !important; }
:host(.bi-clipboard2-heart-fill)::before { content: "\\f729" !important; }
:host(.bi-clipboard2-heart)::before { content: "\\f72a" !important; }
:host(.bi-clipboard2-minus-fill)::before { content: "\\f72b" !important; }
:host(.bi-clipboard2-minus)::before { content: "\\f72c" !important; }
:host(.bi-clipboard2-plus-fill)::before { content: "\\f72d" !important; }
:host(.bi-clipboard2-plus)::before { content: "\\f72e" !important; }
:host(.bi-clipboard2-pulse-fill)::before { content: "\\f72f" !important; }
:host(.bi-clipboard2-pulse)::before { content: "\\f730" !important; }
:host(.bi-clipboard2-x-fill)::before { content: "\\f731" !important; }
:host(.bi-clipboard2-x)::before { content: "\\f732" !important; }
:host(.bi-clipboard2)::before { content: "\\f733" !important; }
:host(.bi-emoji-kiss-fill)::before { content: "\\f734" !important; }
:host(.bi-emoji-kiss)::before { content: "\\f735" !important; }
:host(.bi-envelope-heart-fill)::before { content: "\\f736" !important; }
:host(.bi-envelope-heart)::before { content: "\\f737" !important; }
:host(.bi-envelope-open-heart-fill)::before { content: "\\f738" !important; }
:host(.bi-envelope-open-heart)::before { content: "\\f739" !important; }
:host(.bi-envelope-paper-fill)::before { content: "\\f73a" !important; }
:host(.bi-envelope-paper-heart-fill)::before { content: "\\f73b" !important; }
:host(.bi-envelope-paper-heart)::before { content: "\\f73c" !important; }
:host(.bi-envelope-paper)::before { content: "\\f73d" !important; }
:host(.bi-filetype-aac)::before { content: "\\f73e" !important; }
:host(.bi-filetype-ai)::before { content: "\\f73f" !important; }
:host(.bi-filetype-bmp)::before { content: "\\f740" !important; }
:host(.bi-filetype-cs)::before { content: "\\f741" !important; }
:host(.bi-filetype-css)::before { content: "\\f742" !important; }
:host(.bi-filetype-csv)::before { content: "\\f743" !important; }
:host(.bi-filetype-doc)::before { content: "\\f744" !important; }
:host(.bi-filetype-docx)::before { content: "\\f745" !important; }
:host(.bi-filetype-exe)::before { content: "\\f746" !important; }
:host(.bi-filetype-gif)::before { content: "\\f747" !important; }
:host(.bi-filetype-heic)::before { content: "\\f748" !important; }
:host(.bi-filetype-html)::before { content: "\\f749" !important; }
:host(.bi-filetype-java)::before { content: "\\f74a" !important; }
:host(.bi-filetype-jpg)::before { content: "\\f74b" !important; }
:host(.bi-filetype-js)::before { content: "\\f74c" !important; }
:host(.bi-filetype-jsx)::before { content: "\\f74d" !important; }
:host(.bi-filetype-key)::before { content: "\\f74e" !important; }
:host(.bi-filetype-m4p)::before { content: "\\f74f" !important; }
:host(.bi-filetype-md)::before { content: "\\f750" !important; }
:host(.bi-filetype-mdx)::before { content: "\\f751" !important; }
:host(.bi-filetype-mov)::before { content: "\\f752" !important; }
:host(.bi-filetype-mp3)::before { content: "\\f753" !important; }
:host(.bi-filetype-mp4)::before { content: "\\f754" !important; }
:host(.bi-filetype-otf)::before { content: "\\f755" !important; }
:host(.bi-filetype-pdf)::before { content: "\\f756" !important; }
:host(.bi-filetype-php)::before { content: "\\f757" !important; }
:host(.bi-filetype-png)::before { content: "\\f758" !important; }
:host(.bi-filetype-ppt-1)::before { content: "\\f75a" !important; }
:host(.bi-filetype-ppt)::before { content: "\\f75a" !important; }
:host(.bi-filetype-psd)::before { content: "\\f75b" !important; }
:host(.bi-filetype-py)::before { content: "\\f75c" !important; }
:host(.bi-filetype-raw)::before { content: "\\f75d" !important; }
:host(.bi-filetype-rb)::before { content: "\\f75e" !important; }
:host(.bi-filetype-sass)::before { content: "\\f75f" !important; }
:host(.bi-filetype-scss)::before { content: "\\f760" !important; }
:host(.bi-filetype-sh)::before { content: "\\f761" !important; }
:host(.bi-filetype-svg)::before { content: "\\f762" !important; }
:host(.bi-filetype-tiff)::before { content: "\\f763" !important; }
:host(.bi-filetype-tsx)::before { content: "\\f764" !important; }
:host(.bi-filetype-ttf)::before { content: "\\f765" !important; }
:host(.bi-filetype-txt)::before { content: "\\f766" !important; }
:host(.bi-filetype-wav)::before { content: "\\f767" !important; }
:host(.bi-filetype-woff)::before { content: "\\f768" !important; }
:host(.bi-filetype-xls-1)::before { content: "\\f76a" !important; }
:host(.bi-filetype-xls)::before { content: "\\f76a" !important; }
:host(.bi-filetype-xml)::before { content: "\\f76b" !important; }
:host(.bi-filetype-yml)::before { content: "\\f76c" !important; }
:host(.bi-heart-arrow)::before { content: "\\f76d" !important; }
:host(.bi-heart-pulse-fill)::before { content: "\\f76e" !important; }
:host(.bi-heart-pulse)::before { content: "\\f76f" !important; }
:host(.bi-heartbreak-fill)::before { content: "\\f770" !important; }
:host(.bi-heartbreak)::before { content: "\\f771" !important; }
:host(.bi-hearts)::before { content: "\\f772" !important; }
:host(.bi-hospital-fill)::before { content: "\\f773" !important; }
:host(.bi-hospital)::before { content: "\\f774" !important; }
:host(.bi-house-heart-fill)::before { content: "\\f775" !important; }
:host(.bi-house-heart)::before { content: "\\f776" !important; }
:host(.bi-incognito)::before { content: "\\f777" !important; }
:host(.bi-magnet-fill)::before { content: "\\f778" !important; }
:host(.bi-magnet)::before { content: "\\f779" !important; }
:host(.bi-person-heart)::before { content: "\\f77a" !important; }
:host(.bi-person-hearts)::before { content: "\\f77b" !important; }
:host(.bi-phone-flip)::before { content: "\\f77c" !important; }
:host(.bi-plugin)::before { content: "\\f77d" !important; }
:host(.bi-postage-fill)::before { content: "\\f77e" !important; }
:host(.bi-postage-heart-fill)::before { content: "\\f77f" !important; }
:host(.bi-postage-heart)::before { content: "\\f780" !important; }
:host(.bi-postage)::before { content: "\\f781" !important; }
:host(.bi-postcard-fill)::before { content: "\\f782" !important; }
:host(.bi-postcard-heart-fill)::before { content: "\\f783" !important; }
:host(.bi-postcard-heart)::before { content: "\\f784" !important; }
:host(.bi-postcard)::before { content: "\\f785" !important; }
:host(.bi-search-heart-fill)::before { content: "\\f786" !important; }
:host(.bi-search-heart)::before { content: "\\f787" !important; }
:host(.bi-sliders2-vertical)::before { content: "\\f788" !important; }
:host(.bi-sliders2)::before { content: "\\f789" !important; }
:host(.bi-trash3-fill)::before { content: "\\f78a" !important; }
:host(.bi-trash3)::before { content: "\\f78b" !important; }
:host(.bi-valentine)::before { content: "\\f78c" !important; }
:host(.bi-valentine2)::before { content: "\\f78d" !important; }
:host(.bi-wrench-adjustable-circle-fill)::before { content: "\\f78e" !important; }
:host(.bi-wrench-adjustable-circle)::before { content: "\\f78f" !important; }
:host(.bi-wrench-adjustable)::before { content: "\\f790" !important; }
:host(.bi-filetype-json)::before { content: "\\f791" !important; }
:host(.bi-filetype-pptx)::before { content: "\\f792" !important; }
:host(.bi-filetype-xlsx)::before { content: "\\f793" !important; }
:host(.bi-1-circle-1)::before { content: "\\f797" !important; }
:host(.bi-1-circle-fill-1)::before { content: "\\f796" !important; }
:host(.bi-1-circle-fill)::before { content: "\\f796" !important; }
:host(.bi-1-circle)::before { content: "\\f797" !important; }
:host(.bi-1-square-fill)::before { content: "\\f798" !important; }
:host(.bi-1-square)::before { content: "\\f799" !important; }
:host(.bi-2-circle-1)::before { content: "\\f79d" !important; }
:host(.bi-2-circle-fill-1)::before { content: "\\f79c" !important; }
:host(.bi-2-circle-fill)::before { content: "\\f79c" !important; }
:host(.bi-2-circle)::before { content: "\\f79d" !important; }
:host(.bi-2-square-fill)::before { content: "\\f79e" !important; }
:host(.bi-2-square)::before { content: "\\f79f" !important; }
:host(.bi-3-circle-1)::before { content: "\\f7a3" !important; }
:host(.bi-3-circle-fill-1)::before { content: "\\f7a2" !important; }
:host(.bi-3-circle-fill)::before { content: "\\f7a2" !important; }
:host(.bi-3-circle)::before { content: "\\f7a3" !important; }
:host(.bi-3-square-fill)::before { content: "\\f7a4" !important; }
:host(.bi-3-square)::before { content: "\\f7a5" !important; }
:host(.bi-4-circle-1)::before { content: "\\f7a9" !important; }
:host(.bi-4-circle-fill-1)::before { content: "\\f7a8" !important; }
:host(.bi-4-circle-fill)::before { content: "\\f7a8" !important; }
:host(.bi-4-circle)::before { content: "\\f7a9" !important; }
:host(.bi-4-square-fill)::before { content: "\\f7aa" !important; }
:host(.bi-4-square)::before { content: "\\f7ab" !important; }
:host(.bi-5-circle-1)::before { content: "\\f7af" !important; }
:host(.bi-5-circle-fill-1)::before { content: "\\f7ae" !important; }
:host(.bi-5-circle-fill)::before { content: "\\f7ae" !important; }
:host(.bi-5-circle)::before { content: "\\f7af" !important; }
:host(.bi-5-square-fill)::before { content: "\\f7b0" !important; }
:host(.bi-5-square)::before { content: "\\f7b1" !important; }
:host(.bi-6-circle-1)::before { content: "\\f7b5" !important; }
:host(.bi-6-circle-fill-1)::before { content: "\\f7b4" !important; }
:host(.bi-6-circle-fill)::before { content: "\\f7b4" !important; }
:host(.bi-6-circle)::before { content: "\\f7b5" !important; }
:host(.bi-6-square-fill)::before { content: "\\f7b6" !important; }
:host(.bi-6-square)::before { content: "\\f7b7" !important; }
:host(.bi-7-circle-1)::before { content: "\\f7bb" !important; }
:host(.bi-7-circle-fill-1)::before { content: "\\f7ba" !important; }
:host(.bi-7-circle-fill)::before { content: "\\f7ba" !important; }
:host(.bi-7-circle)::before { content: "\\f7bb" !important; }
:host(.bi-7-square-fill)::before { content: "\\f7bc" !important; }
:host(.bi-7-square)::before { content: "\\f7bd" !important; }
:host(.bi-8-circle-1)::before { content: "\\f7c1" !important; }
:host(.bi-8-circle-fill-1)::before { content: "\\f7c0" !important; }
:host(.bi-8-circle-fill)::before { content: "\\f7c0" !important; }
:host(.bi-8-circle)::before { content: "\\f7c1" !important; }
:host(.bi-8-square-fill)::before { content: "\\f7c2" !important; }
:host(.bi-8-square)::before { content: "\\f7c3" !important; }
:host(.bi-9-circle-1)::before { content: "\\f7c7" !important; }
:host(.bi-9-circle-fill-1)::before { content: "\\f7c6" !important; }
:host(.bi-9-circle-fill)::before { content: "\\f7c6" !important; }
:host(.bi-9-circle)::before { content: "\\f7c7" !important; }
:host(.bi-9-square-fill)::before { content: "\\f7c8" !important; }
:host(.bi-9-square)::before { content: "\\f7c9" !important; }
:host(.bi-airplane-engines-fill)::before { content: "\\f7ca" !important; }
:host(.bi-airplane-engines)::before { content: "\\f7cb" !important; }
:host(.bi-airplane-fill)::before { content: "\\f7cc" !important; }
:host(.bi-airplane)::before { content: "\\f7cd" !important; }
:host(.bi-alexa)::before { content: "\\f7ce" !important; }
:host(.bi-alipay)::before { content: "\\f7cf" !important; }
:host(.bi-android)::before { content: "\\f7d0" !important; }
:host(.bi-android2)::before { content: "\\f7d1" !important; }
:host(.bi-box-fill)::before { content: "\\f7d2" !important; }
:host(.bi-box-seam-fill)::before { content: "\\f7d3" !important; }
:host(.bi-browser-chrome)::before { content: "\\f7d4" !important; }
:host(.bi-browser-edge)::before { content: "\\f7d5" !important; }
:host(.bi-browser-firefox)::before { content: "\\f7d6" !important; }
:host(.bi-browser-safari)::before { content: "\\f7d7" !important; }
:host(.bi-c-circle-1)::before { content: "\\f7db" !important; }
:host(.bi-c-circle-fill-1)::before { content: "\\f7da" !important; }
:host(.bi-c-circle-fill)::before { content: "\\f7da" !important; }
:host(.bi-c-circle)::before { content: "\\f7db" !important; }
:host(.bi-c-square-fill)::before { content: "\\f7dc" !important; }
:host(.bi-c-square)::before { content: "\\f7dd" !important; }
:host(.bi-capsule-pill)::before { content: "\\f7de" !important; }
:host(.bi-capsule)::before { content: "\\f7df" !important; }
:host(.bi-car-front-fill)::before { content: "\\f7e0" !important; }
:host(.bi-car-front)::before { content: "\\f7e1" !important; }
:host(.bi-cassette-fill)::before { content: "\\f7e2" !important; }
:host(.bi-cassette)::before { content: "\\f7e3" !important; }
:host(.bi-cc-circle-1)::before { content: "\\f7e7" !important; }
:host(.bi-cc-circle-fill-1)::before { content: "\\f7e6" !important; }
:host(.bi-cc-circle-fill)::before { content: "\\f7e6" !important; }
:host(.bi-cc-circle)::before { content: "\\f7e7" !important; }
:host(.bi-cc-square-fill)::before { content: "\\f7e8" !important; }
:host(.bi-cc-square)::before { content: "\\f7e9" !important; }
:host(.bi-cup-hot-fill)::before { content: "\\f7ea" !important; }
:host(.bi-cup-hot)::before { content: "\\f7eb" !important; }
:host(.bi-currency-rupee)::before { content: "\\f7ec" !important; }
:host(.bi-dropbox)::before { content: "\\f7ed" !important; }
:host(.bi-escape)::before { content: "\\f7ee" !important; }
:host(.bi-fast-forward-btn-fill)::before { content: "\\f7ef" !important; }
:host(.bi-fast-forward-btn)::before { content: "\\f7f0" !important; }
:host(.bi-fast-forward-circle-fill)::before { content: "\\f7f1" !important; }
:host(.bi-fast-forward-circle)::before { content: "\\f7f2" !important; }
:host(.bi-fast-forward-fill)::before { content: "\\f7f3" !important; }
:host(.bi-fast-forward)::before { content: "\\f7f4" !important; }
:host(.bi-filetype-sql)::before { content: "\\f7f5" !important; }
:host(.bi-fire)::before { content: "\\f7f6" !important; }
:host(.bi-google-play)::before { content: "\\f7f7" !important; }
:host(.bi-h-circle-1)::before { content: "\\f7fb" !important; }
:host(.bi-h-circle-fill-1)::before { content: "\\f7fa" !important; }
:host(.bi-h-circle-fill)::before { content: "\\f7fa" !important; }
:host(.bi-h-circle)::before { content: "\\f7fb" !important; }
:host(.bi-h-square-fill)::before { content: "\\f7fc" !important; }
:host(.bi-h-square)::before { content: "\\f7fd" !important; }
:host(.bi-indent)::before { content: "\\f7fe" !important; }
:host(.bi-lungs-fill)::before { content: "\\f7ff" !important; }
:host(.bi-lungs)::before { content: "\\f800" !important; }
:host(.bi-microsoft-teams)::before { content: "\\f801" !important; }
:host(.bi-p-circle-1)::before { content: "\\f805" !important; }
:host(.bi-p-circle-fill-1)::before { content: "\\f804" !important; }
:host(.bi-p-circle-fill)::before { content: "\\f804" !important; }
:host(.bi-p-circle)::before { content: "\\f805" !important; }
:host(.bi-p-square-fill)::before { content: "\\f806" !important; }
:host(.bi-p-square)::before { content: "\\f807" !important; }
:host(.bi-pass-fill)::before { content: "\\f808" !important; }
:host(.bi-pass)::before { content: "\\f809" !important; }
:host(.bi-prescription)::before { content: "\\f80a" !important; }
:host(.bi-prescription2)::before { content: "\\f80b" !important; }
:host(.bi-r-circle-1)::before { content: "\\f80f" !important; }
:host(.bi-r-circle-fill-1)::before { content: "\\f80e" !important; }
:host(.bi-r-circle-fill)::before { content: "\\f80e" !important; }
:host(.bi-r-circle)::before { content: "\\f80f" !important; }
:host(.bi-r-square-fill)::before { content: "\\f810" !important; }
:host(.bi-r-square)::before { content: "\\f811" !important; }
:host(.bi-repeat-1)::before { content: "\\f812" !important; }
:host(.bi-repeat)::before { content: "\\f813" !important; }
:host(.bi-rewind-btn-fill)::before { content: "\\f814" !important; }
:host(.bi-rewind-btn)::before { content: "\\f815" !important; }
:host(.bi-rewind-circle-fill)::before { content: "\\f816" !important; }
:host(.bi-rewind-circle)::before { content: "\\f817" !important; }
:host(.bi-rewind-fill)::before { content: "\\f818" !important; }
:host(.bi-rewind)::before { content: "\\f819" !important; }
:host(.bi-train-freight-front-fill)::before { content: "\\f81a" !important; }
:host(.bi-train-freight-front)::before { content: "\\f81b" !important; }
:host(.bi-train-front-fill)::before { content: "\\f81c" !important; }
:host(.bi-train-front)::before { content: "\\f81d" !important; }
:host(.bi-train-lightrail-front-fill)::before { content: "\\f81e" !important; }
:host(.bi-train-lightrail-front)::before { content: "\\f81f" !important; }
:host(.bi-truck-front-fill)::before { content: "\\f820" !important; }
:host(.bi-truck-front)::before { content: "\\f821" !important; }
:host(.bi-ubuntu)::before { content: "\\f822" !important; }
:host(.bi-unindent)::before { content: "\\f823" !important; }
:host(.bi-unity)::before { content: "\\f824" !important; }
:host(.bi-universal-access-circle)::before { content: "\\f825" !important; }
:host(.bi-universal-access)::before { content: "\\f826" !important; }
:host(.bi-virus)::before { content: "\\f827" !important; }
:host(.bi-virus2)::before { content: "\\f828" !important; }
:host(.bi-wechat)::before { content: "\\f829" !important; }
:host(.bi-yelp)::before { content: "\\f82a" !important; }
:host(.bi-sign-stop-fill)::before { content: "\\f82b" !important; }
:host(.bi-sign-stop-lights-fill)::before { content: "\\f82c" !important; }
:host(.bi-sign-stop-lights)::before { content: "\\f82d" !important; }
:host(.bi-sign-stop)::before { content: "\\f82e" !important; }
:host(.bi-sign-turn-left-fill)::before { content: "\\f82f" !important; }
:host(.bi-sign-turn-left)::before { content: "\\f830" !important; }
:host(.bi-sign-turn-right-fill)::before { content: "\\f831" !important; }
:host(.bi-sign-turn-right)::before { content: "\\f832" !important; }
:host(.bi-sign-turn-slight-left-fill)::before { content: "\\f833" !important; }
:host(.bi-sign-turn-slight-left)::before { content: "\\f834" !important; }
:host(.bi-sign-turn-slight-right-fill)::before { content: "\\f835" !important; }
:host(.bi-sign-turn-slight-right)::before { content: "\\f836" !important; }
:host(.bi-sign-yield-fill)::before { content: "\\f837" !important; }
:host(.bi-sign-yield)::before { content: "\\f838" !important; }
:host(.bi-ev-station-fill)::before { content: "\\f839" !important; }
:host(.bi-ev-station)::before { content: "\\f83a" !important; }
:host(.bi-fuel-pump-diesel-fill)::before { content: "\\f83b" !important; }
:host(.bi-fuel-pump-diesel)::before { content: "\\f83c" !important; }
:host(.bi-fuel-pump-fill)::before { content: "\\f83d" !important; }
:host(.bi-fuel-pump)::before { content: "\\f83e" !important; }
:host(.bi-0-circle-fill)::before { content: "\\f83f" !important; }
:host(.bi-0-circle)::before { content: "\\f840" !important; }
:host(.bi-0-square-fill)::before { content: "\\f841" !important; }
:host(.bi-0-square)::before { content: "\\f842" !important; }
:host(.bi-rocket-fill)::before { content: "\\f843" !important; }
:host(.bi-rocket-takeoff-fill)::before { content: "\\f844" !important; }
:host(.bi-rocket-takeoff)::before { content: "\\f845" !important; }
:host(.bi-rocket)::before { content: "\\f846" !important; }
:host(.bi-stripe)::before { content: "\\f847" !important; }
:host(.bi-subscript)::before { content: "\\f848" !important; }
:host(.bi-superscript)::before { content: "\\f849" !important; }
:host(.bi-trello)::before { content: "\\f84a" !important; }
:host(.bi-envelope-at-fill)::before { content: "\\f84b" !important; }
:host(.bi-envelope-at)::before { content: "\\f84c" !important; }
:host(.bi-regex)::before { content: "\\f84d" !important; }
:host(.bi-text-wrap)::before { content: "\\f84e" !important; }
:host(.bi-sign-dead-end-fill)::before { content: "\\f84f" !important; }
:host(.bi-sign-dead-end)::before { content: "\\f850" !important; }
:host(.bi-sign-do-not-enter-fill)::before { content: "\\f851" !important; }
:host(.bi-sign-do-not-enter)::before { content: "\\f852" !important; }
:host(.bi-sign-intersection-fill)::before { content: "\\f853" !important; }
:host(.bi-sign-intersection-side-fill)::before { content: "\\f854" !important; }
:host(.bi-sign-intersection-side)::before { content: "\\f855" !important; }
:host(.bi-sign-intersection-t-fill)::before { content: "\\f856" !important; }
:host(.bi-sign-intersection-t)::before { content: "\\f857" !important; }
:host(.bi-sign-intersection-y-fill)::before { content: "\\f858" !important; }
:host(.bi-sign-intersection-y)::before { content: "\\f859" !important; }
:host(.bi-sign-intersection)::before { content: "\\f85a" !important; }
:host(.bi-sign-merge-left-fill)::before { content: "\\f85b" !important; }
:host(.bi-sign-merge-left)::before { content: "\\f85c" !important; }
:host(.bi-sign-merge-right-fill)::before { content: "\\f85d" !important; }
:host(.bi-sign-merge-right)::before { content: "\\f85e" !important; }
:host(.bi-sign-no-left-turn-fill)::before { content: "\\f85f" !important; }
:host(.bi-sign-no-left-turn)::before { content: "\\f860" !important; }
:host(.bi-sign-no-parking-fill)::before { content: "\\f861" !important; }
:host(.bi-sign-no-parking)::before { content: "\\f862" !important; }
:host(.bi-sign-no-right-turn-fill)::before { content: "\\f863" !important; }
:host(.bi-sign-no-right-turn)::before { content: "\\f864" !important; }
:host(.bi-sign-railroad-fill)::before { content: "\\f865" !important; }
:host(.bi-sign-railroad)::before { content: "\\f866" !important; }
:host(.bi-building-add)::before { content: "\\f867" !important; }
:host(.bi-building-check)::before { content: "\\f868" !important; }
:host(.bi-building-dash)::before { content: "\\f869" !important; }
:host(.bi-building-down)::before { content: "\\f86a" !important; }
:host(.bi-building-exclamation)::before { content: "\\f86b" !important; }
:host(.bi-building-fill-add)::before { content: "\\f86c" !important; }
:host(.bi-building-fill-check)::before { content: "\\f86d" !important; }
:host(.bi-building-fill-dash)::before { content: "\\f86e" !important; }
:host(.bi-building-fill-down)::before { content: "\\f86f" !important; }
:host(.bi-building-fill-exclamation)::before { content: "\\f870" !important; }
:host(.bi-building-fill-gear)::before { content: "\\f871" !important; }
:host(.bi-building-fill-lock)::before { content: "\\f872" !important; }
:host(.bi-building-fill-slash)::before { content: "\\f873" !important; }
:host(.bi-building-fill-up)::before { content: "\\f874" !important; }
:host(.bi-building-fill-x)::before { content: "\\f875" !important; }
:host(.bi-building-fill)::before { content: "\\f876" !important; }
:host(.bi-building-gear)::before { content: "\\f877" !important; }
:host(.bi-building-lock)::before { content: "\\f878" !important; }
:host(.bi-building-slash)::before { content: "\\f879" !important; }
:host(.bi-building-up)::before { content: "\\f87a" !important; }
:host(.bi-building-x)::before { content: "\\f87b" !important; }
:host(.bi-buildings-fill)::before { content: "\\f87c" !important; }
:host(.bi-buildings)::before { content: "\\f87d" !important; }
:host(.bi-bus-front-fill)::before { content: "\\f87e" !important; }
:host(.bi-bus-front)::before { content: "\\f87f" !important; }
:host(.bi-ev-front-fill)::before { content: "\\f880" !important; }
:host(.bi-ev-front)::before { content: "\\f881" !important; }
:host(.bi-globe-americas)::before { content: "\\f882" !important; }
:host(.bi-globe-asia-australia)::before { content: "\\f883" !important; }
:host(.bi-globe-central-south-asia)::before { content: "\\f884" !important; }
:host(.bi-globe-europe-africa)::before { content: "\\f885" !important; }
:host(.bi-house-add-fill)::before { content: "\\f886" !important; }
:host(.bi-house-add)::before { content: "\\f887" !important; }
:host(.bi-house-check-fill)::before { content: "\\f888" !important; }
:host(.bi-house-check)::before { content: "\\f889" !important; }
:host(.bi-house-dash-fill)::before { content: "\\f88a" !important; }
:host(.bi-house-dash)::before { content: "\\f88b" !important; }
:host(.bi-house-down-fill)::before { content: "\\f88c" !important; }
:host(.bi-house-down)::before { content: "\\f88d" !important; }
:host(.bi-house-exclamation-fill)::before { content: "\\f88e" !important; }
:host(.bi-house-exclamation)::before { content: "\\f88f" !important; }
:host(.bi-house-gear-fill)::before { content: "\\f890" !important; }
:host(.bi-house-gear)::before { content: "\\f891" !important; }
:host(.bi-house-lock-fill)::before { content: "\\f892" !important; }
:host(.bi-house-lock)::before { content: "\\f893" !important; }
:host(.bi-house-slash-fill)::before { content: "\\f894" !important; }
:host(.bi-house-slash)::before { content: "\\f895" !important; }
:host(.bi-house-up-fill)::before { content: "\\f896" !important; }
:host(.bi-house-up)::before { content: "\\f897" !important; }
:host(.bi-house-x-fill)::before { content: "\\f898" !important; }
:host(.bi-house-x)::before { content: "\\f899" !important; }
:host(.bi-person-add)::before { content: "\\f89a" !important; }
:host(.bi-person-down)::before { content: "\\f89b" !important; }
:host(.bi-person-exclamation)::before { content: "\\f89c" !important; }
:host(.bi-person-fill-add)::before { content: "\\f89d" !important; }
:host(.bi-person-fill-check)::before { content: "\\f89e" !important; }
:host(.bi-person-fill-dash)::before { content: "\\f89f" !important; }
:host(.bi-person-fill-down)::before { content: "\\f8a0" !important; }
:host(.bi-person-fill-exclamation)::before { content: "\\f8a1" !important; }
:host(.bi-person-fill-gear)::before { content: "\\f8a2" !important; }
:host(.bi-person-fill-lock)::before { content: "\\f8a3" !important; }
:host(.bi-person-fill-slash)::before { content: "\\f8a4" !important; }
:host(.bi-person-fill-up)::before { content: "\\f8a5" !important; }
:host(.bi-person-fill-x)::before { content: "\\f8a6" !important; }
:host(.bi-person-gear)::before { content: "\\f8a7" !important; }
:host(.bi-person-lock)::before { content: "\\f8a8" !important; }
:host(.bi-person-slash)::before { content: "\\f8a9" !important; }
:host(.bi-person-up)::before { content: "\\f8aa" !important; }
:host(.bi-scooter)::before { content: "\\f8ab" !important; }
:host(.bi-taxi-front-fill)::before { content: "\\f8ac" !important; }
:host(.bi-taxi-front)::before { content: "\\f8ad" !important; }
:host(.bi-amd)::before { content: "\\f8ae" !important; }
:host(.bi-database-add)::before { content: "\\f8af" !important; }
:host(.bi-database-check)::before { content: "\\f8b0" !important; }
:host(.bi-database-dash)::before { content: "\\f8b1" !important; }
:host(.bi-database-down)::before { content: "\\f8b2" !important; }
:host(.bi-database-exclamation)::before { content: "\\f8b3" !important; }
:host(.bi-database-fill-add)::before { content: "\\f8b4" !important; }
:host(.bi-database-fill-check)::before { content: "\\f8b5" !important; }
:host(.bi-database-fill-dash)::before { content: "\\f8b6" !important; }
:host(.bi-database-fill-down)::before { content: "\\f8b7" !important; }
:host(.bi-database-fill-exclamation)::before { content: "\\f8b8" !important; }
:host(.bi-database-fill-gear)::before { content: "\\f8b9" !important; }
:host(.bi-database-fill-lock)::before { content: "\\f8ba" !important; }
:host(.bi-database-fill-slash)::before { content: "\\f8bb" !important; }
:host(.bi-database-fill-up)::before { content: "\\f8bc" !important; }
:host(.bi-database-fill-x)::before { content: "\\f8bd" !important; }
:host(.bi-database-fill)::before { content: "\\f8be" !important; }
:host(.bi-database-gear)::before { content: "\\f8bf" !important; }
:host(.bi-database-lock)::before { content: "\\f8c0" !important; }
:host(.bi-database-slash)::before { content: "\\f8c1" !important; }
:host(.bi-database-up)::before { content: "\\f8c2" !important; }
:host(.bi-database-x)::before { content: "\\f8c3" !important; }
:host(.bi-database)::before { content: "\\f8c4" !important; }
:host(.bi-houses-fill)::before { content: "\\f8c5" !important; }
:host(.bi-houses)::before { content: "\\f8c6" !important; }
:host(.bi-nvidia)::before { content: "\\f8c7" !important; }
:host(.bi-person-vcard-fill)::before { content: "\\f8c8" !important; }
:host(.bi-person-vcard)::before { content: "\\f8c9" !important; }
:host(.bi-sina-weibo)::before { content: "\\f8ca" !important; }
:host(.bi-tencent-qq)::before { content: "\\f8cb" !important; }
:host(.bi-wikipedia)::before { content: "\\f8cc" !important; }

`;
const style = ':host {\n  display: inline-block;\n  inline-size: 1em;\n  block-size: 1em;\n  aspect-ratio: 1;\n  font-size: var(--nte-icon-size, 1.25em);\n  line-height: 1;\n  flex: none;\n}\n\n:host([src]:not([src=""]))::before {\n  display: none !important;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\nimg {\n  display: block;\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: contain;\n}';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : /* @__PURE__ */ Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [, , , __create(base?.[__knownSymbol("metadata")] ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i2 = 0, fns = array[flags >> 1], n2 = fns && fns.length; i2 < n2; i2++) flags & 1 ? fns[i2].call(self) : value = fns[i2].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i2 = decorators.length - 1; i2 >= 0; i2--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y2) => __privateSet(x, target, y2, k ^ 4 ? extra : desc.set) : (x, y2) => x[name] = y2;
    }
    it = (0, decorators[i2])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _src_dec, _a, _NteIcon_decorators, _init, _src;
_NteIcon_decorators = [t("nte-icon")];
class NteIcon extends (_a = nextrap_element({ setDefaultStyle: false }), _src_dec = [n({ reflect: true })], _a) {
  constructor() {
    super(...arguments);
    __privateAdd(this, _src, __runInitializers(_init, 8, this, "")), __runInitializers(_init, 11, this);
  }
  // Die Schrift wird einmal registriert und vom Browser erst bei tatsächlicher Nutzung geladen.
  connectedCallback() {
    super.connectedCallback();
    registerBootstrapIconFont();
  }
  // Bei src übernimmt ein normales Bild die Darstellung; ansonsten genügt das Host-Pseudo-Element.
  render() {
    return b`
      ${super.render()}
      ${this.src ? b`<img part="image" src=${this.src} alt="">` : A}
      <slot NO-DEFAULT-SLOT></slot>
    `;
  }
}
_init = __decoratorStart(_a);
_src = /* @__PURE__ */ new WeakMap();
__decorateElement(_init, 4, "src", _src_dec, NteIcon, _src);
NteIcon = __decorateElement(_init, 0, "NteIcon", _NteIcon_decorators, NteIcon);
NteIcon.styles = [r(icons), r(style)];
__runInitializers(_init, 1, NteIcon);
//# sourceMappingURL=leuffen-tjs2.js.map
