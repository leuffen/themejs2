var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _a2, _b, _c, _d;
/* empty css                      */
const breakpoints$1 = [
  { name: "xs", minWidth: 0 },
  { name: "sm", minWidth: 576 },
  { name: "md", minWidth: 768 },
  { name: "lg", minWidth: 992 },
  { name: "xl", minWidth: 1200 },
  { name: "xxl", minWidth: 1400 }
];
const breakpointMap = breakpoints$1.reduce(
  (map, bp) => {
    map[bp.name] = bp.minWidth;
    return map;
  },
  {}
);
function getBreakpointMinWidth(breakpoint) {
  if (!(breakpoint in breakpointMap)) {
    throw new Error(`Unknown breakpoint: ${breakpoint}`);
  }
  return breakpointMap[breakpoint];
}
function getViewportWidth() {
  if (window.visualViewport) {
    return window.visualViewport.width;
  } else {
    return window.innerWidth;
  }
}
function getCurrentBreakpoint(width) {
  if (width === void 0) {
    width = getViewportWidth();
  }
  for (let i5 = breakpoints$1.length - 1; i5 >= 0; i5--) {
    if (width >= breakpoints$1[i5].minWidth) {
      return breakpoints$1[i5].name;
    }
  }
  return "xs";
}
function create_element(tag, attrs = {}, children = []) {
  if (!Array.isArray(children)) {
    children = [children];
  }
  const el = document.createElement(tag);
  for (const k3 in attrs) {
    if (attrs[k3] !== null && attrs[k3] !== void 0) {
      el.setAttribute(k3, attrs[k3] !== true ? attrs[k3] : "");
    }
  }
  for (const c2 of children)
    el.append(typeof c2 === "string" ? document.createTextNode(c2) : c2);
  return el;
}
let Debouncer$1 = class Debouncer {
  /**
   *
   * @param delay     Debounce delay in milliseconds
   * @param max_delay Maximum delay in milliseconds, if false then no maximum delay is applied
   */
  constructor(delay, max_delay = false) {
    __publicField(this, "timeout", null);
    __publicField(this, "startTimeWithMs", 0);
    __publicField(this, "maxTimeout", null);
    this.delay = delay;
    this.max_delay = max_delay;
  }
  async wait() {
    if (this.startTimeWithMs === 0) {
      this.startTimeWithMs = Date.now();
    }
    if (this.timeout) {
      if (this.max_delay === false || this.startTimeWithMs + this.max_delay > Date.now()) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    }
    return new Promise((resolve) => {
      if (this.timeout) return;
      this.timeout = setTimeout(() => {
        this.timeout = null;
        this.startTimeWithMs = 0;
        resolve(true);
      }, this.delay);
    });
  }
  debounce(callback) {
    const now = Date.now();
    if (this.startTimeWithMs === 0) {
      this.startTimeWithMs = now;
    }
    const fire = () => {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      if (this.maxTimeout) {
        clearTimeout(this.maxTimeout);
        this.maxTimeout = null;
      }
      this.startTimeWithMs = 0;
      callback();
    };
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(fire, this.delay);
    if (this.max_delay !== false && !this.maxTimeout) {
      const elapsed = now - this.startTimeWithMs;
      const remaining = Math.max(0, this.max_delay - elapsed);
      this.maxTimeout = setTimeout(fire, remaining);
    }
  }
};
class Logger {
  constructor(_debug, myTag, myElementId, instanceId = "main") {
    this._debug = _debug;
    this.myTag = myTag;
    this.myElementId = myElementId;
    this.instanceId = instanceId;
  }
  debug(...args) {
    if (this._debug) console.debug(`[DEBUG][${this.myTag}:${this.myElementId}:${this.instanceId}]`, ...args);
  }
  log(...args) {
    console.log(`[LOG][${this.myTag}:${this.myElementId}:${this.instanceId}]`, ...args);
  }
  warn(...args) {
    console.warn(`[WARN][${this.myTag}:${this.myElementId}:${this.instanceId}]`, ...args);
  }
  error(...args) {
    console.error(`[ERROR][${this.myTag}:${this.myElementId}:${this.instanceId}]`, ...args);
  }
  throwError(...args) {
    const message = `[ERROR][${this.myTag}:${this.myElementId}:${this.instanceId}] ${args.join(" ")}`;
    this.error(...args);
    throw new Error(message);
  }
}
class Stopwatch {
  constructor(label, enabled = true) {
    __publicField(this, "label");
    __publicField(this, "last");
    __publicField(this, "startTime");
    __publicField(this, "running", false);
    __publicField(this, "enabled");
    this.label = label;
    this.enabled = enabled;
    this.startTime = this.last = performance.now();
    this.running = true;
  }
  lap(msg = "") {
    if (!this.enabled) return;
    const now = performance.now();
    const diff = (now - this.last) / 1e3;
    this.last = now;
    console.debug(`[${this.label}] ${msg} +${diff.toFixed(3)}s`);
  }
  elapsed() {
    return performance.now() - this.startTime;
  }
  reset() {
    this.startTime = this.last = performance.now();
  }
  stop() {
    this.running = false;
    return this.elapsed();
  }
  start() {
    this.running = true;
    this.reset();
  }
  isRunning() {
    return this.running;
  }
}
function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function safeParse(raw) {
  if (raw == null) return void 0;
  try {
    return JSON.parse(raw);
  } catch {
    return void 0;
  }
}
function safeStringify(value) {
  const s2 = JSON.stringify(value);
  return s2 === void 0 ? "null" : s2;
}
function normalizeWithInitial(parsed, initialValue) {
  const out = { ...initialValue };
  if (isObject(parsed)) {
    for (const k3 of Object.keys(initialValue)) {
      if (k3 in parsed) out[k3] = parsed[k3];
    }
  }
  return out;
}
class StorageProxy {
  constructor(backend, storageKey, initialValue) {
    __publicField(this, "cache");
    this.backend = backend;
    this.storageKey = storageKey;
    this.initialValue = initialValue;
  }
  read() {
    if (this.cache) return this.cache;
    const parsed = this.backend ? safeParse(this.backend.getItem(this.storageKey)) : void 0;
    const normalized = normalizeWithInitial(parsed, this.initialValue);
    if (this.backend) {
      const existing = this.backend.getItem(this.storageKey);
      if (existing == null) {
        try {
          this.backend.setItem(this.storageKey, safeStringify(normalized));
        } catch {
        }
      }
    }
    this.cache = normalized;
    return normalized;
  }
  write(next) {
    this.cache = next;
    if (!this.backend) return;
    try {
      this.backend.setItem(this.storageKey, safeStringify(next));
    } catch {
    }
  }
  asProxy() {
    const handler = {
      get: (_target, prop) => {
        if (typeof prop === "symbol") {
          if (prop === Symbol.toStringTag) return "Storage";
          return void 0;
        }
        const data = this.read();
        if (prop === "toJSON") return () => ({ ...data });
        return data[prop];
      },
      set: (_target, prop, value) => {
        if (typeof prop !== "string") return false;
        const data = this.read();
        const next = { ...data };
        next[prop] = value;
        this.write(next);
        return true;
      },
      deleteProperty: (_target, prop) => {
        if (typeof prop !== "string") return false;
        const data = this.read();
        if (!(prop in data)) return true;
        const next = { ...data };
        delete next[prop];
        this.write(next);
        return true;
      },
      has: (_target, prop) => {
        if (typeof prop !== "string") return false;
        const data = this.read();
        return prop in data;
      },
      ownKeys: () => {
        const data = this.read();
        return Reflect.ownKeys(data);
      },
      getOwnPropertyDescriptor: (_target, prop) => {
        if (typeof prop !== "string") return void 0;
        const data = this.read();
        if (!(prop in data)) return void 0;
        return {
          enumerable: true,
          configurable: true,
          writable: true,
          value: data[prop]
        };
      }
    };
    return new Proxy({}, handler);
  }
}
function getBackend(kind) {
  const w = globalThis.window;
  const storage = kind === "session" ? w == null ? void 0 : w.sessionStorage : w == null ? void 0 : w.localStorage;
  return storage ?? void 0;
}
function session_storage(storageKey, initialValue) {
  return new StorageProxy(getBackend("session"), storageKey, initialValue).asProxy();
}
function waitForDomContentLoaded$1() {
  if (document.readyState === "loading") {
    return new Promise((resolve) => {
      document.addEventListener("DOMContentLoaded", () => resolve());
    });
  }
  return Promise.resolve();
}
function waitForLoad(el = window) {
  if (!el) el = window;
  if (el === window) {
    if (document.readyState === "complete") return Promise.resolve();
    return new Promise((res) => window.addEventListener("load", () => res(), { once: true }));
  }
  if (el instanceof HTMLImageElement) {
    if (el.complete && el.naturalWidth !== 0) return Promise.resolve();
    return new Promise((res, rej) => {
      el.addEventListener("load", () => res(), { once: true });
      el.addEventListener("error", () => rej(new Error("image error")), { once: true });
    });
  }
  if (el instanceof HTMLMediaElement) {
    if (el.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) return Promise.resolve();
    return new Promise((res) => el.addEventListener("loadeddata", () => res(), { once: true }));
  }
  return new Promise((res) => el.addEventListener("load", () => res(), { once: true }));
}
function sleep$1(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function BreakPointMixin(Base) {
  var _debouncer, _updateBreakPoint;
  class BreakPoint extends Base {
    constructor() {
      super(...arguments);
      __privateAdd(this, _debouncer, new Debouncer$1(200, 5e3));
      __publicField(this, "currentBreakPoint", null);
      __privateAdd(this, _updateBreakPoint, async () => {
        var _a3;
        await __privateGet(this, _debouncer).wait();
        await waitForDomContentLoaded$1();
        const self = this;
        const width = window.innerWidth;
        let breaksAt = getComputedStyle(self).getPropertyValue("--breakpoint");
        if (!breaksAt || breaksAt === "") {
          return;
        }
        breaksAt = breaksAt.trim().replace(/^['"]|['"]$/g, "");
        const breaksAtArray = breaksAt.split(",");
        const breaksAtMobile = breaksAtArray[0].trim();
        const breaksAtTablet = ((_a3 = breaksAtArray[1]) == null ? void 0 : _a3.trim()) ?? breaksAtMobile;
        const newBreakPoint = getCurrentBreakpoint(width);
        if (this.currentBreakPoint !== newBreakPoint) {
          if (getBreakpointMinWidth(breaksAtTablet) <= getBreakpointMinWidth(newBreakPoint)) {
            self.setAttribute("mode", "desktop");
          } else if (getBreakpointMinWidth(breaksAtMobile) > getBreakpointMinWidth(newBreakPoint)) {
            self.setAttribute("mode", "mobile");
          } else {
            self.setAttribute("mode", "tablet");
          }
        }
      });
    }
    connectedCallback() {
      super.connectedCallback();
      try {
        __privateGet(this, _updateBreakPoint).call(this);
        window.addEventListener("resize", __privateGet(this, _updateBreakPoint));
        __privateGet(this, _updateBreakPoint).call(this);
      } catch (error) {
        console.error("Error in BreakPointMixin:", error, "in element", this);
        throw error;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      window.removeEventListener("resize", __privateGet(this, _updateBreakPoint));
    }
  }
  _debouncer = new WeakMap();
  _updateBreakPoint = new WeakMap();
  return BreakPoint;
}
const LISTENER_DEFS = Symbol("listenerDefs");
const MIXIN_FLAG = Symbol("withEventBindings");
function Listen(type, opts) {
  const evts = Array.isArray(type) ? type : [type];
  return function(value, context) {
    if (context.kind !== "method") throw new Error("@Listen nur für Methoden");
    context.addInitializer(function() {
      const host = this;
      (host[LISTENER_DEFS] || (host[LISTENER_DEFS] = [])).push({
        method: context.name,
        events: [...evts],
        opts
      });
    });
    return function(...args) {
      if (!this[MIXIN_FLAG]) {
        throw new Error("[EventBindings] @Listen - decorator requires EventBindingMixin.");
      }
      return value.apply(this, args);
    };
  };
}
function resolveTarget(host, spec) {
  var _a3;
  if (!spec || spec === "host") return host;
  if (spec === "document") return host.ownerDocument ?? document;
  if (spec === "window") return ((_a3 = host.ownerDocument) == null ? void 0 : _a3.defaultView) ?? window;
  if (spec === "shadowRoot") return host.shadowRoot ?? host;
  if (typeof spec === "function") return spec(host);
  return spec;
}
function EventBindingsMixin(Base) {
  var _ac, _EventBindings_instances, bindEventListeners_fn;
  class EventBindings extends Base {
    constructor(...a2) {
      super(...a2);
      __privateAdd(this, _EventBindings_instances);
      __privateAdd(this, _ac);
      this[MIXIN_FLAG] = true;
    }
    connectedCallback() {
      var _a3;
      (_a3 = super.connectedCallback) == null ? void 0 : _a3.call(this);
      __privateMethod(this, _EventBindings_instances, bindEventListeners_fn).call(this);
    }
    disconnectedCallback() {
      var _a3, _b2;
      (_a3 = __privateGet(this, _ac)) == null ? void 0 : _a3.abort();
      (_b2 = super.disconnectedCallback) == null ? void 0 : _b2.call(this);
    }
  }
  _ac = new WeakMap();
  _EventBindings_instances = new WeakSet();
  bindEventListeners_fn = function() {
    var _a3, _b2, _c2;
    (_a3 = __privateGet(this, _ac)) == null ? void 0 : _a3.abort();
    __privateSet(this, _ac, new AbortController());
    const defs = this[LISTENER_DEFS] || [];
    for (const def of defs) {
      const target = resolveTarget(this, (_b2 = def.opts) == null ? void 0 : _b2.target);
      const baseOpts = ((_c2 = def.opts) == null ? void 0 : _c2.options) ?? {};
      const handler = this[def.method].bind(this);
      for (const evt of def.events) {
        target.addEventListener(evt, handler, { ...baseOpts, signal: __privateGet(this, _ac).signal });
      }
    }
  };
  return EventBindings;
}
let elementId = 1;
function LoggingMixin(Base) {
  var _debugCached, _myElementId, _myLoggerInstance;
  class LoggingClass extends Base {
    constructor() {
      super(...arguments);
      __privateAdd(this, _debugCached, null);
      __privateAdd(this, _myElementId, elementId++);
      __privateAdd(this, _myLoggerInstance, null);
    }
    /**
     * Clears the cached debug flag so the attribute will be checked again
     * on the next log/warn/error call.
     */
    invalidateDebugCache() {
      __privateSet(this, _debugCached, null);
    }
    get _debug() {
      if (__privateGet(this, _debugCached) !== null) return __privateGet(this, _debugCached);
      if (this instanceof HTMLElement) {
        __privateSet(this, _debugCached, this.hasAttribute("debug") && !["false", "0", "off", "no"].includes(this.getAttribute("debug") || ""));
      }
      if (__privateGet(this, _debugCached) === true) {
        console.info(
          // @ts-expect-error - it says tagName is not defined -whatever
          `[DEBUG][ID:${__privateGet(this, _myElementId)}] LoggingMixin: Debug mode is enabled for <${this.tagName}>`,
          this
        );
      }
      return __privateGet(this, _debugCached) ?? false;
    }
    getLogger(instanceId = "main") {
      const tagName = "<" + (this.tagName || this.constructor.name || "UnknownElement") + ">";
      if (!__privateGet(this, _myLoggerInstance)) {
        __privateSet(this, _myLoggerInstance, new Logger(this._debug, tagName, `${__privateGet(this, _myElementId)}`, instanceId));
      }
      return __privateGet(this, _myLoggerInstance);
    }
    debug(...args) {
      this.getLogger().debug(...args);
    }
    log(...args) {
      this.getLogger().log(...args);
    }
    warn(...args) {
      this.getLogger().warn(...args);
    }
    error(...args) {
      this.getLogger().error(...args);
    }
    throwError(...args) {
      return this.getLogger().throwError(...args);
    }
  }
  _debugCached = new WeakMap();
  _myElementId = new WeakMap();
  _myLoggerInstance = new WeakMap();
  return LoggingClass;
}
function SlotVisibilityMixin(Base) {
  var _SlotVisibility_instances, initializeSlots_fn, _onSlotChange, isRenderableNode_fn2;
  class SlotVisibility extends Base {
    constructor() {
      super(...arguments);
      __privateAdd(this, _SlotVisibility_instances);
      __privateAdd(this, _onSlotChange, (e2) => {
        const slot = e2.target;
        const assigned = slot.assignedNodes({ flatten: true }).filter((n4) => __privateMethod(this, _SlotVisibility_instances, isRenderableNode_fn2).call(this, n4));
        const hasContent = assigned.length > 0;
        if (hasContent) {
          slot.classList.remove("slot-empty");
        }
      });
    }
    firstUpdated(changedProperties) {
      var _a3;
      (_a3 = super.firstUpdated) == null ? void 0 : _a3.call(this, changedProperties);
      __privateMethod(this, _SlotVisibility_instances, initializeSlots_fn).call(this);
    }
  }
  _SlotVisibility_instances = new WeakSet();
  initializeSlots_fn = function() {
    var _a3;
    const slots = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelectorAll("slot");
    slots == null ? void 0 : slots.forEach((slot) => {
      slot.classList.add("slot-empty");
      slot.addEventListener("slotchange", (e2) => __privateGet(this, _onSlotChange).call(this, e2));
    });
  };
  _onSlotChange = new WeakMap();
  isRenderableNode_fn2 = function(n4) {
    if (n4.nodeType === Node.TEXT_NODE) {
      return (n4.textContent || "").trim().length > 0;
    }
    return n4.nodeType === Node.ELEMENT_NODE;
  };
  return SlotVisibility;
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$6 = globalThis, e$9 = t$6.ShadowRoot && (void 0 === t$6.ShadyCSS || t$6.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$6 = Symbol(), o$e = /* @__PURE__ */ new WeakMap();
let n$b = class n {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$6) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$9 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$e.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$e.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$a = (t2) => new n$b("string" == typeof t2 ? t2 : t2 + "", void 0, s$6), S$3 = (s2, o2) => {
  if (e$9) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n4 = t$6.litNonce;
    void 0 !== n4 && o3.setAttribute("nonce", n4), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$6 = e$9 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$a(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$8, defineProperty: e$8, getOwnPropertyDescriptor: h$6, getOwnPropertyNames: r$9, getOwnPropertySymbols: o$d, getPrototypeOf: n$a } = Object, a$4 = globalThis, c$5 = a$4.trustedTypes, l$4 = c$5 ? c$5.emptyScript : "", p$4 = a$4.reactiveElementPolyfillSupport, d$3 = (t2, s2) => t2, u$5 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$4 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i5 = t2;
  switch (s2) {
    case Boolean:
      i5 = null !== t2;
      break;
    case Number:
      i5 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t2);
      } catch (t3) {
        i5 = null;
      }
  }
  return i5;
} }, f$4 = (t2, s2) => !i$8(t2, s2), b$3 = { attribute: true, type: String, converter: u$5, reflect: false, useDefault: false, hasChanged: f$4 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$4.litPropertyMetadata ?? (a$4.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let y$3 = class y extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$3) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i5 = Symbol(), h3 = this.getPropertyDescriptor(t2, i5, s2);
      void 0 !== h3 && e$8(this.prototype, t2, h3);
    }
  }
  static getPropertyDescriptor(t2, s2, i5) {
    const { get: e2, set: r2 } = h$6(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e2, set(s3) {
      const h3 = e2 == null ? void 0 : e2.call(this);
      r2 == null ? void 0 : r2.call(this, s3), this.requestUpdate(t2, h3, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$3("elementProperties"))) return;
    const t2 = n$a(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$3("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$3("properties"))) {
      const t3 = this.properties, s2 = [...r$9(t3), ...o$d(t3)];
      for (const i5 of s2) this.createProperty(i5, t3[i5]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i5] of s2) this.elementProperties.set(t3, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i5 = this._$Eu(t3, s2);
      void 0 !== i5 && this._$Eh.set(i5, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i5 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i5.unshift(c$6(s3));
    } else void 0 !== s2 && i5.push(c$6(s2));
    return i5;
  }
  static _$Eu(t2, s2) {
    const i5 = s2.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a3;
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a3 = this.constructor.l) == null ? void 0 : _a3.forEach((t2) => t2(this));
  }
  addController(t2) {
    var _a3;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_a3 = t2.hostConnected) == null ? void 0 : _a3.call(t2));
  }
  removeController(t2) {
    var _a3;
    (_a3 = this._$EO) == null ? void 0 : _a3.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i5 of s2.keys()) this.hasOwnProperty(i5) && (t2.set(i5, this[i5]), delete this[i5]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$3(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var _a3;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a3 = this._$EO) == null ? void 0 : _a3.forEach((t2) => {
      var _a4;
      return (_a4 = t2.hostConnected) == null ? void 0 : _a4.call(t2);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var _a3;
    (_a3 = this._$EO) == null ? void 0 : _a3.forEach((t2) => {
      var _a4;
      return (_a4 = t2.hostDisconnected) == null ? void 0 : _a4.call(t2);
    });
  }
  attributeChangedCallback(t2, s2, i5) {
    this._$AK(t2, i5);
  }
  _$ET(t2, s2) {
    var _a3;
    const i5 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i5);
    if (void 0 !== e2 && true === i5.reflect) {
      const h3 = (void 0 !== ((_a3 = i5.converter) == null ? void 0 : _a3.toAttribute) ? i5.converter : u$5).toAttribute(s2, i5.type);
      this._$Em = t2, null == h3 ? this.removeAttribute(e2) : this.setAttribute(e2, h3), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    var _a3, _b2;
    const i5 = this.constructor, e2 = i5._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i5.getPropertyOptions(e2), h3 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a3 = t3.converter) == null ? void 0 : _a3.fromAttribute) ? t3.converter : u$5;
      this._$Em = e2;
      const r2 = h3.fromAttribute(s2, t3.type);
      this[e2] = r2 ?? ((_b2 = this._$Ej) == null ? void 0 : _b2.get(e2)) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i5, e2 = false, h3) {
    var _a3;
    if (void 0 !== t2) {
      const r2 = this.constructor;
      if (false === e2 && (h3 = this[t2]), i5 ?? (i5 = r2.getPropertyOptions(t2)), !((i5.hasChanged ?? f$4)(h3, s2) || i5.useDefault && i5.reflect && h3 === ((_a3 = this._$Ej) == null ? void 0 : _a3.get(t2)) && !this.hasAttribute(r2._$Eu(t2, i5)))) return;
      this.C(t2, s2, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i5, reflect: e2, wrapped: h3 }, r2) {
    i5 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h3 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i5 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a3;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i5] of t3) {
        const { wrapped: t4 } = i5, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i5, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), (_a3 = this._$EO) == null ? void 0 : _a3.forEach((t3) => {
        var _a4;
        return (_a4 = t3.hostUpdate) == null ? void 0 : _a4.call(t3);
      }), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var _a3;
    (_a3 = this._$EO) == null ? void 0 : _a3.forEach((t3) => {
      var _a4;
      return (_a4 = t3.hostUpdated) == null ? void 0 : _a4.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t3) => this._$ET(t3, this[t3]))), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$3.elementStyles = [], y$3.shadowRootOptions = { mode: "open" }, y$3[d$3("elementProperties")] = /* @__PURE__ */ new Map(), y$3[d$3("finalized")] = /* @__PURE__ */ new Map(), p$4 == null ? void 0 : p$4({ ReactiveElement: y$3 }), (a$4.reactiveElementVersions ?? (a$4.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$5 = globalThis, i$7 = (t2) => t2, s$5 = t$5.trustedTypes, e$7 = s$5 ? s$5.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, h$5 = "$lit$", o$c = `lit$${Math.random().toFixed(9).slice(2)}$`, n$9 = "?" + o$c, r$8 = `<${n$9}>`, l$3 = document, c$4 = () => l$3.createComment(""), a$3 = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u$4 = Array.isArray, d$2 = (t2) => u$4(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), f$3 = "[ 	\n\f\r]", v$2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _$2 = /-->/g, m$2 = />/g, p$3 = RegExp(`>|${f$3}(?:([^\\s"'>=/]+)(${f$3}*=${f$3}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g$2 = /'/g, $$1 = /"/g, y$2 = /^(?:script|style|textarea|title)$/i, x$1 = (t2) => (i5, ...s2) => ({ _$litType$: t2, strings: i5, values: s2 }), b$2 = x$1(1), E$1 = Symbol.for("lit-noChange"), A$1 = Symbol.for("lit-nothing"), C$1 = /* @__PURE__ */ new WeakMap(), P$1 = l$3.createTreeWalker(l$3, 129);
function V$1(t2, i5) {
  if (!u$4(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e$7 ? e$7.createHTML(i5) : i5;
}
const N$1 = (t2, i5) => {
  const s2 = t2.length - 1, e2 = [];
  let n4, l2 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c2 = v$2;
  for (let i6 = 0; i6 < s2; i6++) {
    const s3 = t2[i6];
    let a2, u2, d2 = -1, f2 = 0;
    for (; f2 < s3.length && (c2.lastIndex = f2, u2 = c2.exec(s3), null !== u2); ) f2 = c2.lastIndex, c2 === v$2 ? "!--" === u2[1] ? c2 = _$2 : void 0 !== u2[1] ? c2 = m$2 : void 0 !== u2[2] ? (y$2.test(u2[2]) && (n4 = RegExp("</" + u2[2], "g")), c2 = p$3) : void 0 !== u2[3] && (c2 = p$3) : c2 === p$3 ? ">" === u2[0] ? (c2 = n4 ?? v$2, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? p$3 : '"' === u2[3] ? $$1 : g$2) : c2 === $$1 || c2 === g$2 ? c2 = p$3 : c2 === _$2 || c2 === m$2 ? c2 = v$2 : (c2 = p$3, n4 = void 0);
    const x2 = c2 === p$3 && t2[i6 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === v$2 ? s3 + r$8 : d2 >= 0 ? (e2.push(a2), s3.slice(0, d2) + h$5 + s3.slice(d2) + o$c + x2) : s3 + o$c + (-2 === d2 ? i6 : x2);
  }
  return [V$1(t2, l2 + (t2[s2] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e2];
};
let S$2 = class S {
  constructor({ strings: t2, _$litType$: i5 }, e2) {
    let r2;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = N$1(t2, i5);
    if (this.el = S.createElement(f2, e2), P$1.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = P$1.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(h$5)) {
          const i6 = v2[a2++], s2 = r2.getAttribute(t3).split(o$c), e3 = /([.?@])?(.*)/.exec(i6);
          d2.push({ type: 1, index: l2, name: e3[2], strings: s2, ctor: "." === e3[1] ? I$1 : "?" === e3[1] ? L$1 : "@" === e3[1] ? z$1 : H$1 }), r2.removeAttribute(t3);
        } else t3.startsWith(o$c) && (d2.push({ type: 6, index: l2 }), r2.removeAttribute(t3));
        if (y$2.test(r2.tagName)) {
          const t3 = r2.textContent.split(o$c), i6 = t3.length - 1;
          if (i6 > 0) {
            r2.textContent = s$5 ? s$5.emptyScript : "";
            for (let s2 = 0; s2 < i6; s2++) r2.append(t3[s2], c$4()), P$1.nextNode(), d2.push({ type: 2, index: ++l2 });
            r2.append(t3[i6], c$4());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === n$9) d2.push({ type: 2, index: l2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(o$c, t3 + 1)); ) d2.push({ type: 7, index: l2 }), t3 += o$c.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i5) {
    const s2 = l$3.createElement("template");
    return s2.innerHTML = t2, s2;
  }
};
function M$1(t2, i5, s2 = t2, e2) {
  var _a3, _b2;
  if (i5 === E$1) return i5;
  let h3 = void 0 !== e2 ? (_a3 = s2._$Co) == null ? void 0 : _a3[e2] : s2._$Cl;
  const o2 = a$3(i5) ? void 0 : i5._$litDirective$;
  return (h3 == null ? void 0 : h3.constructor) !== o2 && ((_b2 = h3 == null ? void 0 : h3._$AO) == null ? void 0 : _b2.call(h3, false), void 0 === o2 ? h3 = void 0 : (h3 = new o2(t2), h3._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ?? (s2._$Co = []))[e2] = h3 : s2._$Cl = h3), void 0 !== h3 && (i5 = M$1(t2, h3._$AS(t2, i5.values), h3, e2)), i5;
}
let R$1 = class R {
  constructor(t2, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i5 }, parts: s2 } = this._$AD, e2 = ((t2 == null ? void 0 : t2.creationScope) ?? l$3).importNode(i5, true);
    P$1.currentNode = e2;
    let h3 = P$1.nextNode(), o2 = 0, n4 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i6;
        2 === r2.type ? i6 = new k$1(h3, h3.nextSibling, this, t2) : 1 === r2.type ? i6 = new r2.ctor(h3, r2.name, r2.strings, this, t2) : 6 === r2.type && (i6 = new Z$1(h3, this, t2)), this._$AV.push(i6), r2 = s2[++n4];
      }
      o2 !== (r2 == null ? void 0 : r2.index) && (h3 = P$1.nextNode(), o2++);
    }
    return P$1.currentNode = l$3, e2;
  }
  p(t2) {
    let i5 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i5), i5 += s2.strings.length - 2) : s2._$AI(t2[i5])), i5++;
  }
};
let k$1 = class k {
  get _$AU() {
    var _a3;
    return ((_a3 = this._$AM) == null ? void 0 : _a3._$AU) ?? this._$Cv;
  }
  constructor(t2, i5, s2, e2) {
    this.type = 2, this._$AH = A$1, this._$AN = void 0, this._$AA = t2, this._$AB = i5, this._$AM = s2, this.options = e2, this._$Cv = (e2 == null ? void 0 : e2.isConnected) ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i5.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i5 = this) {
    t2 = M$1(this, t2, i5), a$3(t2) ? t2 === A$1 || null == t2 || "" === t2 ? (this._$AH !== A$1 && this._$AR(), this._$AH = A$1) : t2 !== this._$AH && t2 !== E$1 && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d$2(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A$1 && a$3(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l$3.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a3;
    const { values: i5, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S$2.createElement(V$1(s2.h, s2.h[0]), this.options)), s2);
    if (((_a3 = this._$AH) == null ? void 0 : _a3._$AD) === e2) this._$AH.p(i5);
    else {
      const t3 = new R$1(e2, this), s3 = t3.u(this.options);
      t3.p(i5), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i5 = C$1.get(t2.strings);
    return void 0 === i5 && C$1.set(t2.strings, i5 = new S$2(t2)), i5;
  }
  k(t2) {
    u$4(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s2, e2 = 0;
    for (const h3 of t2) e2 === i5.length ? i5.push(s2 = new k(this.O(c$4()), this.O(c$4()), this, this.options)) : s2 = i5[e2], s2._$AI(h3), e2++;
    e2 < i5.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i5.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    var _a3;
    for ((_a3 = this._$AP) == null ? void 0 : _a3.call(this, false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$7(t2).nextSibling;
      i$7(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    var _a3;
    void 0 === this._$AM && (this._$Cv = t2, (_a3 = this._$AP) == null ? void 0 : _a3.call(this, t2));
  }
};
let H$1 = class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i5, s2, e2, h3) {
    this.type = 1, this._$AH = A$1, this._$AN = void 0, this.element = t2, this.name = i5, this._$AM = e2, this.options = h3, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A$1;
  }
  _$AI(t2, i5 = this, s2, e2) {
    const h3 = this.strings;
    let o2 = false;
    if (void 0 === h3) t2 = M$1(this, t2, i5, 0), o2 = !a$3(t2) || t2 !== this._$AH && t2 !== E$1, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n4, r2;
      for (t2 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r2 = M$1(this, e3[s2 + n4], i5, n4), r2 === E$1 && (r2 = this._$AH[n4]), o2 || (o2 = !a$3(r2) || r2 !== this._$AH[n4]), r2 === A$1 ? t2 = A$1 : t2 !== A$1 && (t2 += (r2 ?? "") + h3[n4 + 1]), this._$AH[n4] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A$1 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
};
let I$1 = class I extends H$1 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A$1 ? void 0 : t2;
  }
};
let L$1 = class L extends H$1 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A$1);
  }
};
let z$1 = class z extends H$1 {
  constructor(t2, i5, s2, e2, h3) {
    super(t2, i5, s2, e2, h3), this.type = 5;
  }
  _$AI(t2, i5 = this) {
    if ((t2 = M$1(this, t2, i5, 0) ?? A$1) === E$1) return;
    const s2 = this._$AH, e2 = t2 === A$1 && s2 !== A$1 || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h3 = t2 !== A$1 && (s2 === A$1 || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h3 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a3;
    "function" == typeof this._$AH ? this._$AH.call(((_a3 = this.options) == null ? void 0 : _a3.host) ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
};
let Z$1 = class Z {
  constructor(t2, i5, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M$1(this, t2);
  }
};
const B$1 = t$5.litHtmlPolyfillSupport;
B$1 == null ? void 0 : B$1(S$2, k$1), (t$5.litHtmlVersions ?? (t$5.litHtmlVersions = [])).push("3.3.2");
const D$1 = (t2, i5, s2) => {
  const e2 = (s2 == null ? void 0 : s2.renderBefore) ?? i5;
  let h3 = e2._$litPart$;
  if (void 0 === h3) {
    const t3 = (s2 == null ? void 0 : s2.renderBefore) ?? null;
    e2._$litPart$ = h3 = new k$1(i5.insertBefore(c$4(), t3), t3, void 0, s2 ?? {});
  }
  return h3._$AI(t2), h3;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s$4 = globalThis;
let i$6 = class i extends y$3 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a3;
    const t2 = super.createRenderRoot();
    return (_a3 = this.renderOptions).renderBefore ?? (_a3.renderBefore = t2.firstChild), t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D$1(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a3;
    super.connectedCallback(), (_a3 = this._$Do) == null ? void 0 : _a3.setConnected(true);
  }
  disconnectedCallback() {
    var _a3;
    super.disconnectedCallback(), (_a3 = this._$Do) == null ? void 0 : _a3.setConnected(false);
  }
  render() {
    return E$1;
  }
};
i$6._$litElement$ = true, i$6["finalized"] = true, (_a2 = s$4.litElementHydrateSupport) == null ? void 0 : _a2.call(s$4, { LitElement: i$6 });
const o$b = s$4.litElementPolyfillSupport;
o$b == null ? void 0 : o$b({ LitElement: i$6 });
(s$4.litElementVersions ?? (s$4.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4 = (t2) => (e2, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e2);
  }) : customElements.define(t2, e2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$a = { attribute: true, type: String, converter: u$5, reflect: false, hasChanged: f$4 }, r$7 = (t2 = o$a, e2, r2) => {
  const { kind: n4, metadata: i5 } = r2;
  let s2 = globalThis.litPropertyMetadata.get(i5);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i5, s2 = /* @__PURE__ */ new Map()), "setter" === n4 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n4) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n5 = e2.get.call(this);
      e2.set.call(this, r3), this.requestUpdate(o2, n5, t2, true, r3);
    }, init(e3) {
      return void 0 !== e3 && this.C(o2, void 0, t2, e3), e3;
    } };
  }
  if ("setter" === n4) {
    const { name: o2 } = r2;
    return function(r3) {
      const n5 = this[o2];
      e2.call(this, r3), this.requestUpdate(o2, n5, t2, true, r3);
    };
  }
  throw Error("Unsupported decorator location: " + n4);
};
function n$8(t2) {
  return (e2, o2) => "object" == typeof o2 ? r$7(t2, e2, o2) : ((t3, e3, o3) => {
    const r2 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}
const style$k = ":host {\n  --border-color: red;\n  --background-color: lightgray;\n  font-family: Arial, sans-serif;\n}\n\n#error-fixed-indicator {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  z-index: 100000;\n  padding: 5px 10px;\n  width: auto;\n  max-width: 90vw;\n  min-width: 100px;\n  height: auto;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  border: 5px solid white;\n  color: white;\n  background-color: red;\n  animation: blink 1s infinite;\n  border-radius: 15px;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: Arial, sans-serif;\n}\n\n@keyframes blink {\n  0%, 100% {\n    background-color: black;\n  }\n  50% {\n    background-color: red;\n  }\n}\n#error {\n  background-color: var(--background-color);\n  border: 3px solid var(--border-color);\n  padding: 10px;\n  margin: 10px;\n  border-radius: 5px;\n}\n\nh1 {\n  color: red;\n  font-size: 24px;\n  margin: 0;\n}\n\n.error-details {\n  font-size: 14px;\n  max-height: 200px;\n  overflow: auto;\n}";
var __create$h = Object.create;
var __defProp$m = Object.defineProperty;
var __getOwnPropDesc$n = Object.getOwnPropertyDescriptor;
var __knownSymbol$h = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$h = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$m(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$g = (target, value) => __defProp$m(target, "name", { value, configurable: true });
var __decoratorStart$h = (base) => [, , , __create$h((base == null ? void 0 : base[__knownSymbol$h("metadata")]) ?? null)];
var __decoratorStrings$h = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$h = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$h("Function expected") : fn;
var __decoratorContext$h = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$h[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$h("Already initialized") : fns.push(__expectFn$h(fn || null)) });
var __decoratorMetadata$h = (array, target) => __defNormalProp$h(target, __knownSymbol$h("metadata"), array[3]);
var __runInitializers$h = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$h = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$h[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$n(k3 < 4 ? target : { get [name]() {
    return __privateGet$e(this, extra);
  }, set [name](x2) {
    return __privateSet$e(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$g(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$g(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$h(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$d(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$e : __privateMethod$d)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$e(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$h(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$h("Object expected");
    else __expectFn$h(fn = it.get) && (desc.get = fn), __expectFn$h(fn = it.set) && (desc.set = fn), __expectFn$h(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$h(array, target), desc && __defProp$m(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$e = (obj, member, msg) => member.has(obj) || __typeError$h("Cannot " + msg);
var __privateIn$d = (member, obj) => Object(obj) !== obj ? __typeError$h('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$e = (obj, member, getter) => (__accessCheck$e(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$e = (obj, member, value) => member.has(obj) ? __typeError$h("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$e = (obj, member, value, setter) => (__accessCheck$e(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$d = (obj, member, method) => (__accessCheck$e(obj, member, "access private method"), method);
var _message_dec, _a$h, _TjErrorElement_decorators, _init$h, _message;
_TjErrorElement_decorators = [t$4("tj-error-element")];
class TjErrorElement extends (_a$h = i$6, _message_dec = [n$8({ type: String, reflect: true })], _a$h) {
  constructor(message = "An error occurred", originalCode) {
    super();
    this.originalCode = void 0;
    __privateAdd$e(this, _message, __runInitializers$h(_init$h, 8, this)), __runInitializers$h(_init$h, 11, this);
    this.message = message;
    this.originalCode = originalCode;
  }
  static get is() {
    return "tj-error-element";
  }
  render() {
    return b$2`
      <div id="error-fixed-indicator" @click=${() => this.scrollIntoView({ behavior: "smooth" })}>
        Err: ${this.message}
      </div>
      <div id="error">
        <h1>Error: ${this.message}</h1>
        <pre class="error-details">
          ${this.originalCode ? this.originalCode : "No code provided."}
        </pre
        >

        <slot></slot>
      </div>
    `;
  }
}
_init$h = __decoratorStart$h(_a$h);
_message = /* @__PURE__ */ new WeakMap();
__decorateElement$h(_init$h, 4, "message", _message_dec, TjErrorElement, _message);
TjErrorElement = __decorateElement$h(_init$h, 0, "TjErrorElement", _TjErrorElement_decorators, TjErrorElement);
TjErrorElement.styles = [r$a(style$k)];
__runInitializers$h(_init$h, 1, TjErrorElement);
function parseSelector(sel, { allowAttributes = true, ignoreGaps = true } = {}) {
  let tag = "div", id = null, classes = [], attrs = [], attrsMap = {};
  const regex = /(^[a-z][\w-]*)|#[\w-]+|\.[\w:-]+|\[\s*([\w-]+)(?:\s*=\s*(['"]?)(.*?)\3)?\s*\]/gi;
  let i5 = 0;
  while (true) {
    const m2 = regex.exec(sel);
    if (!m2 || m2.index !== i5) {
      if (!ignoreGaps && m2 && m2.index > i5)
        break;
      else break;
    }
    const s2 = m2[0];
    if (s2[0] === "#") id = s2.slice(1);
    else if (s2[0] === ".") classes.push(s2.slice(1));
    else if (s2[0] === "[") {
      if (!allowAttributes) throw new Error(`Attributes not allowed: '${s2}'`);
      const name = m2[2];
      const value = m2[4] || void 0;
      attrs.push({ name, value });
      attrsMap[name] = value;
    } else tag = s2;
    i5 += s2.length;
  }
  return { tag, id, classes, attrs, attrsMap, length: i5, rest: sel.slice(i5) };
}
function isManualBeforeLayoutElement(element) {
  return typeof element.beforeLayoutCallback === "function";
}
function applyLayoutToElement(element, options, layoutOrig) {
  const regex = /^(\+|-|)([0-9]+\.?[0-9]*);?/;
  const layout = layoutOrig.replace(regex, "");
  const elementDef = parseSelector(layout);
  const origAttrs = Array.from(element.attributes).reduce(
    (acc, attr) => {
      acc[attr.name] = attr.value;
      return acc;
    },
    {}
  );
  const tag = elementDef.tag || "div";
  let skipChildren = false;
  let replacementElement = create_element(tag, { ...origAttrs, layoutOrig });
  if (tag.includes("-") && !customElements.get(tag)) {
    console.warn(`Custom element <${tag}> is not registered.`);
    replacementElement = new TjErrorElement(`Custom element <${tag}> is not registered.`, element.outerHTML);
    element.replaceWith(replacementElement);
    replacementElement.append(element);
    skipChildren = true;
  } else {
    const children = Array.from(element.children);
    if (isManualBeforeLayoutElement(replacementElement)) {
      skipChildren = replacementElement.beforeLayoutCallback(element, replacementElement, children) === false;
    }
    replacementElement.__ORIG_ELEMENT__ = element;
    replacementElement.append(...Array.from(element.children));
    element.replaceWith(replacementElement);
  }
  return {
    replacementElement,
    skipChildren
  };
}
function applyLayout(element, options = {}) {
  const { recursive = true } = options;
  let ret = [];
  if (Array.isArray(element)) {
    element.forEach((el) => ret.push(...applyLayout(el, options)));
    return ret;
  } else if (!(element instanceof HTMLElement)) {
    return [];
  }
  const layoutOrig = element.getAttribute("layout");
  let skipChildren = false;
  let replacementElement = element;
  if (layoutOrig) {
    ({ replacementElement, skipChildren } = applyLayoutToElement(element, options, layoutOrig));
  }
  if (recursive && !skipChildren) {
    const children = Array.from(replacementElement.children);
    children.forEach((child) => ret.push(...applyLayout(child, options)));
  }
  return ret;
}
class SectionTreeBuilder {
  constructor(rootNode, debug = false) {
    this.debug = debug;
    this.currentContainerNode = null;
    this.containerPath = [];
    this.containerIndex = [0];
    this.lastFixedI = 20;
    this.currentContainerNode = this.rootNode = rootNode;
    this.containerPath.push(this.rootNode);
  }
  getI(element) {
    const tagname = element.tagName;
    const layout = element.getAttribute("layout");
    const ret = { i: -99, variant: "new", tag: "hr", hi: null };
    if (layout) {
      const regex = /^(\+|-|)([0-9]\.?[0-9]?|)(;|$)/;
      const matches = layout.match(regex);
      if (matches) {
        ret.variant = matches[1] === "+" ? "append" : matches[1] === "-" ? "skip" : "new";
        if (matches[2] !== "") {
          ret.i = parseFloat(matches[2]) * 10;
        }
      }
    }
    if (tagname === "HR" && layout === null) {
      return null;
    }
    if (tagname === "HR") {
      if (layout !== null && ret.i === -99) {
        ret.i = this.lastFixedI + 5;
        return ret;
      }
      this.lastFixedI = ret.i;
      return ret;
    } else if (tagname.startsWith("H") && tagname.length === 2) {
      let val = tagname.substring(1);
      ret.tag = "h";
      ret.hi = parseInt(val);
      if (val === "1") {
        val = "2";
      }
      if (ret.i === -99) {
        ret.i = parseInt(val) * 10;
        this.lastFixedI = ret.i;
      }
      return ret;
    }
    return null;
  }
  getAttributeRecords(originalNode, isHR = false) {
    const attributes = {};
    const layout = originalNode.getAttribute("layout");
    let parsedLayout = null;
    if (layout) {
      const regex = /^(\+|-|)([0-9]\.?[0-9]?|)(;|)/;
      const layoutWithoutI = layout.replace(regex, "").trim();
      if (layoutWithoutI !== "") {
        parsedLayout = parseSelector(layoutWithoutI);
      }
    }
    for (const attr of Array.from(originalNode.attributes)) {
      if (attr.name.startsWith("section-")) {
        attributes[attr.name.replace(/^section-/, "")] = attr.value;
      } else if (attr.name.startsWith("layout")) {
        attributes[attr.name] = attr.value;
        originalNode.removeAttribute(attr.name);
      } else if (isHR) {
        attributes[attr.name] = attr.value;
        originalNode.removeAttribute(attr.name);
      }
    }
    if (!isHR) {
      Array.from(originalNode.classList).forEach((className) => {
        if (className.startsWith("section-")) {
          attributes["class"] = (attributes["class"] ? attributes["class"] + " " : "") + className.replace(/^section-/, "");
          originalNode.classList.remove(className);
        }
      });
    }
    if (parsedLayout) {
      parsedLayout.classes.forEach((className) => {
        attributes["class"] = (attributes["class"] ? attributes["class"] + " " : "") + className + " ";
      });
      parsedLayout.attrs.forEach((attr) => {
        attributes[attr.name] = attr.value ?? "";
      });
      parsedLayout.id && (attributes["id"] = parsedLayout.id);
    }
    return attributes;
  }
  createNewContainerNode(originalNode, it) {
    const attributes = this.getAttributeRecords(originalNode, originalNode.tagName === "HR");
    const newContainerNode = create_element("section", attributes);
    newContainerNode.__IT = it;
    return newContainerNode;
  }
  arrangeSingleNode(node, it) {
    it.i;
    let j = 0;
    for (j = 0; j < this.containerIndex.length; j++) {
      if (this.containerIndex[j] >= it.i) {
        break;
      }
    }
    let containerNode = null;
    if (it.variant === "append") {
      containerNode = this.containerPath[j];
    } else {
      containerNode = this.createNewContainerNode(node, it);
    }
    const curContainer = this.containerPath[j - 1];
    this.containerPath.length = j;
    this.containerIndex.length = j;
    if (node.tagName === "HR") {
      node.setAttribute("aria-hidden", "true");
      node.setAttribute("hidden", "hidden");
    }
    containerNode.appendChild(node);
    curContainer.appendChild(containerNode);
    this.containerPath.push(containerNode);
    this.containerIndex.push(it.i);
    this.currentContainerNode = containerNode;
  }
  appendToCurrentContainer(node) {
    if (this.currentContainerNode === null) {
      throw new Error("No current container node set");
    }
    this.currentContainerNode.appendChild(node);
  }
  arrange(nodes) {
    for (let curNode of nodes) {
      if (curNode.nodeType !== Node.ELEMENT_NODE) {
        this.appendToCurrentContainer(curNode);
        continue;
      }
      const element = curNode;
      const it = this.getI(element);
      if (!it || it.variant === "skip") {
        this.appendToCurrentContainer(curNode);
        continue;
      }
      this.arrangeSingleNode(element, it);
    }
  }
}
var __create$g = Object.create;
var __defProp$l = Object.defineProperty;
var __getOwnPropDesc$m = Object.getOwnPropertyDescriptor;
var __knownSymbol$g = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$g = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$f = (target, value) => __defProp$l(target, "name", { value, configurable: true });
var __decoratorStart$g = (base) => [, , , __create$g((base == null ? void 0 : base[__knownSymbol$g("metadata")]) ?? null)];
var __decoratorStrings$g = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$g = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$g("Function expected") : fn;
var __decoratorContext$g = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$g[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$g("Already initialized") : fns.push(__expectFn$g(fn || null)) });
var __decoratorMetadata$g = (array, target) => __defNormalProp$g(target, __knownSymbol$g("metadata"), array[3]);
var __runInitializers$g = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$g = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$g[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$m(k3 < 4 ? target : { get [name]() {
    return __privateGet$d(this, extra);
  }, set [name](x2) {
    return __privateSet$d(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$f(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$f(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$g(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$c(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$d : __privateMethod$c)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$d(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$g(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$g("Object expected");
    else __expectFn$g(fn = it.get) && (desc.get = fn), __expectFn$g(fn = it.set) && (desc.set = fn), __expectFn$g(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$g(array, target), desc && __defProp$l(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$d = (obj, member, msg) => member.has(obj) || __typeError$g("Cannot " + msg);
var __privateIn$c = (member, obj) => Object(obj) !== obj ? __typeError$g('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$d = (obj, member, getter) => (__accessCheck$d(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$d = (obj, member, value) => member.has(obj) ? __typeError$g("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$d = (obj, member, value, setter) => (__accessCheck$d(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$c = (obj, member, method) => (__accessCheck$d(obj, member, "access private method"), method);
var _onScroll_dec$1, _skipLayout_dec, _a$g, _ContentAreaElement2_decorators, _init$g, _skipLayout, _afterScrolling;
const tjSessionStage = session_storage("tj_sess_state", {
  lhref: "",
  // The last Page that was loaded
  scrollpos: 0,
  sessstart: Date.now(),
  pages: 0
});
const scrollDebouncer = new Debouncer$1(100, 200);
_ContentAreaElement2_decorators = [t$4("tj-content-pane")];
class ContentAreaElement2 extends (_a$g = EventBindingsMixin(LoggingMixin(y$3)), _skipLayout_dec = [n$8({ type: Boolean, reflect: true, attribute: "skip-layout" })], _onScroll_dec$1 = [Listen("scroll", { target: "window", options: { passive: true } })], _a$g) {
  constructor() {
    super();
    __runInitializers$g(_init$g, 5, this);
    __privateAdd$d(this, _skipLayout, __runInitializers$g(_init$g, 8, this, false)), __runInitializers$g(_init$g, 11, this);
    __privateAdd$d(this, _afterScrolling, false);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }
  static get is() {
    return "tj-content-pane";
  }
  createRenderRoot() {
    return this;
  }
  async onScroll() {
    if (!__privateGet$d(this, _afterScrolling)) {
      return;
    }
    await scrollDebouncer.wait();
    const pos = Math.round(window.scrollY || window.pageYOffset);
    console.log("Saving scroll position:", pos);
    tjSessionStage.scrollpos = pos;
  }
  async scrollToPosition() {
    await waitForLoad();
    console.log("Scrolling to position, session state:", tjSessionStage.scrollpos);
    const curUrl = window.location.href;
    let reload = true;
    if (tjSessionStage.lhref !== curUrl) {
      reload = false;
      tjSessionStage.lhref = curUrl;
      tjSessionStage.pages += 1;
      tjSessionStage.scrollpos = 0;
    }
    if (reload) {
      const scrollToIndex = tjSessionStage.scrollpos;
      for (let i5 = 0; i5 < 10; i5++) {
        window.scrollTo({ top: scrollToIndex, behavior: "auto" });
        if (scrollToIndex <= document.documentElement.scrollHeight - window.innerHeight + 1) {
          console.log("Scrolled to position:", scrollToIndex);
          break;
        }
        await sleep$1(i5 * 150);
      }
      await sleep$1(2e3);
      __privateSet$d(this, _afterScrolling, true);
      return;
    }
    let hashElement = null;
    const hash = window.location.hash;
    if (hash) {
      hashElement = document.getElementById(hash.substring(1));
      if (hashElement) {
        hashElement.scrollIntoView({ behavior: "smooth" });
        __privateSet$d(this, _afterScrolling, true);
        return;
      }
    }
  }
  arrange() {
    const sw = new Stopwatch("SectionTreeBuilder");
    this.log("arrange() called");
    const sectionTreeBuilder = new SectionTreeBuilder(this);
    const children = Array.from(this.children);
    sectionTreeBuilder.arrange(children);
    if (this.skipLayout) {
      this.warn("Skipping layout as per skipLayout property.");
      return;
    }
    applyLayout(Array.from(this.children), { recursive: true });
    sw.lap("after arrange");
    this.scrollToPosition();
  }
  async connectedCallback() {
    await waitForDomContentLoaded$1();
    super.connectedCallback();
    this.arrange();
  }
}
_init$g = __decoratorStart$g(_a$g);
_skipLayout = /* @__PURE__ */ new WeakMap();
_afterScrolling = /* @__PURE__ */ new WeakMap();
__decorateElement$g(_init$g, 4, "skipLayout", _skipLayout_dec, ContentAreaElement2, _skipLayout);
__decorateElement$g(_init$g, 1, "onScroll", _onScroll_dec$1, ContentAreaElement2);
ContentAreaElement2 = __decorateElement$g(_init$g, 0, "ContentAreaElement2", _ContentAreaElement2_decorators, ContentAreaElement2);
__runInitializers$g(_init$g, 1, ContentAreaElement2);
function multiQuerySelectAll(qurey, element) {
  const queries = qurey.split("|");
  for (const query of queries) {
    const nodes = element.querySelectorAll(query.trim());
    if (nodes.length > 0) {
      return Array.from(nodes);
    }
  }
  return [];
}
function SubLayoutApplyMixin(Base) {
  class SubLayoutApply extends Base {
    beforeLayoutCallback(element, replacementElement, children) {
      return false;
    }
    firstUpdated(changedProperties) {
      var _a3, _b2;
      (_a3 = super.firstUpdated) == null ? void 0 : _a3.call(this, changedProperties);
      const queryElements = ((_b2 = this.shadowRoot) == null ? void 0 : _b2.querySelectorAll("slot[data-query]")) ?? [];
      for (const slotElement of Array.from(queryElements)) {
        const query = slotElement.getAttribute("data-query");
        if (!query) continue;
        let queriedElements = [];
        try {
          queriedElements = multiQuerySelectAll(query, this);
        } catch (error) {
          this.error(`"${error}" in slot`, slotElement);
          throw error;
        }
        queriedElements.forEach((matchedElement) => {
          slotElement.getAttributeNames().filter((attrName) => attrName.startsWith("data-set-attribute-")).forEach((attrName) => {
            const newName = attrName.replace(/^data-set-attribute-/, "");
            if (!matchedElement.hasAttribute(newName)) {
              const value = slotElement.getAttribute(attrName);
              if (value !== null) {
                matchedElement.setAttribute(newName, value);
              }
            }
          });
          if (!matchedElement.hasAttribute("slot")) {
            const slotName = slotElement.getAttribute("name");
            if (slotName) matchedElement.setAttribute("slot", slotName);
          }
        });
      }
      applyLayout(Array.from(this.children), { recursive: true });
    }
  }
  return SubLayoutApply;
}
const autoAddedClassNamesMap = /* @__PURE__ */ new WeakMap();
function parseBreakpointRange(spec) {
  const s2 = spec.trim();
  if (!s2) return { from: 0, till: Infinity };
  if (s2.startsWith("-")) {
    const right = s2.slice(1).trim();
    return { from: 0, till: getBreakpointMinWidth(right) };
  }
  if (s2.endsWith("-")) {
    const left = s2.slice(0, -1).trim();
    return { from: getBreakpointMinWidth(left), till: Infinity };
  }
  const dashIdx = s2.indexOf("-");
  if (dashIdx >= 0) {
    const left = s2.slice(0, dashIdx).trim();
    const right = s2.slice(dashIdx + 1).trim();
    const from = getBreakpointMinWidth(left);
    const till = right ? getBreakpointMinWidth(right) : Infinity;
    return { from, till };
  }
  return { from: getBreakpointMinWidth(s2), till: Infinity };
}
function getObservedClasses(input) {
  const parts = input.split(" ");
  const retArr = [];
  for (const part of parts) {
    if (!part.includes(":")) {
      continue;
    }
    let [bp, className] = part.split(":");
    if (!bp || !className) {
      continue;
    }
    const def = parseBreakpointRange(bp);
    const ret = { from: def.from, till: def.till, className };
    retArr.push(ret);
  }
  return retArr;
}
function getAdjustetClassString(input, breakpoint, addedClasses) {
  if (!input.includes(":")) return input;
  const minWidth = getBreakpointMinWidth(breakpoint);
  let splitClasses = input.split(" ");
  const observedClasses = getObservedClasses(input);
  for (const cls of addedClasses) {
    splitClasses = splitClasses.filter((c2) => c2 !== cls);
  }
  for (const observed of observedClasses) {
    splitClasses = splitClasses.filter((c2) => c2 !== observed.className);
  }
  for (const observed of observedClasses) {
    if (minWidth >= observed.from && minWidth < observed.till) {
      splitClasses.push(observed.className);
      addedClasses.add(observed.className);
    }
  }
  return splitClasses.join(" ");
}
function adjustElementClasses(element, breakpoint, logger) {
  const origClasses = element.getAttribute("class") || "";
  if (origClasses.indexOf(":") === -1) {
    return;
  }
  if (!element.isConnected) {
    logger.warn("Element is no longer connected to the DOM, skipping class adjustment:", element);
    return;
  }
  logger.debug("Adujsted class for element:", element);
  let addedClasses = autoAddedClassNamesMap.get(element);
  if (!addedClasses) {
    addedClasses = /* @__PURE__ */ new Set();
    autoAddedClassNamesMap.set(element, addedClasses);
  }
  const newClasses = getAdjustetClassString(origClasses, breakpoint, addedClasses);
  if (newClasses !== origClasses) {
    element.setAttribute("class", newClasses);
  }
}
class StyleParseError extends Error {
  constructor(message, context) {
    super(message);
    this.context = context;
    this.name = "StyleParseError";
  }
}
class StyleDeclarationError extends StyleParseError {
  constructor(message, context) {
    super(message, context);
    this.name = "StyleDeclarationError";
  }
}
function getStyleEntryAsString(entry) {
  if (entry.length === 0) return "";
  if (Array.isArray(entry[0])) {
    return entry.map((e2) => getStyleEntryAsString(e2)).filter((s2) => s2).join("; ");
  } else {
    const [prop, value, priority] = entry;
    return `${prop}: ${value}${priority ? " !" + priority : ""}`;
  }
}
function getSTyleEntryValueAsString(entry) {
  return entry[1] + (entry[2] ? " !" + entry[2] : "");
}
function parseStyleAttribute(styleText, opts) {
  const throwIf = (condition, err) => {
    return condition;
  };
  const out = [];
  let buf = "";
  const decls = [];
  let q = null, depth = 0;
  let idx = 0;
  for (const ch of styleText) {
    if (q) {
      if (ch === q) q = null;
      buf += ch;
    } else {
      if (ch === "'" || ch === '"') {
        q = ch;
        buf += ch;
      } else if (ch === "(") {
        depth++;
        buf += ch;
      } else if (ch === ")") {
        if (throwIf(depth === 0, new StyleParseError("Unmatched closing parenthesis )", withCtx(idx, styleText)))) ;
        depth = Math.max(0, depth - 1);
        buf += ch;
      } else if (ch === ";" && depth === 0) {
        decls.push(buf);
        buf = "";
      } else buf += ch;
    }
    idx++;
  }
  if (throwIf(q !== null, new StyleParseError("Unclosed quote", withCtx(idx - 1, styleText)))) ;
  if (throwIf(depth > 0, new StyleParseError("Unbalanced parentheses: missing )", withCtx(idx - 1, styleText)))) ;
  if (buf.trim()) decls.push(buf);
  for (const raw of decls) {
    const s2 = raw.trim();
    if (!s2) continue;
    let i5 = -1;
    q = null;
    depth = 0;
    for (let k3 = 0; k3 < s2.length; k3++) {
      const ch = s2[k3];
      if (q) {
        if (ch === q) q = null;
      } else {
        if (ch === "'" || ch === '"') q = ch;
        else if (ch === "(") depth++;
        else if (ch === ")") {
          if (throwIf(
            depth === 0,
            new StyleDeclarationError("Unmatched closing parenthesis ) in declaration", { declaration: s2 })
          )) ;
          depth = Math.max(0, depth - 1);
        } else if (ch === ":" && depth === 0) {
          i5 = k3;
          break;
        }
      }
    }
    if (throwIf(i5 < 1, new StyleDeclarationError("Missing colon (:) in declaration", { declaration: s2 }))) {
      if (i5 < 1) continue;
    }
    if (i5 < 1) continue;
    const prop = s2.slice(0, i5).trim();
    let value = s2.slice(i5 + 1).trim();
    let priority;
    if (/\s*!important\s*$/i.test(value)) {
      value = value.replace(/\s*!important\s*$/i, "").trim();
      priority = "important";
    }
    if (prop) out.push([prop, value, priority]);
  }
  return out;
}
function withCtx(index, input) {
  const start = Math.max(0, index - 15);
  const end = Math.min(input.length, index + 15);
  return {
    index,
    input,
    near: input.slice(start, end)
  };
}
function adjustElementStyle(element, curWidth) {
  const styleAttributes = Array.from(element.attributes).filter((attr) => attr.name.startsWith("style-"));
  const styleBpMap = {};
  let hasResponsiveStyles = false;
  const observedStyles = /* @__PURE__ */ new Set();
  for (const attr of styleAttributes) {
    const bp = attr.name.substring("style-".length);
    const stylesEntries = styleBpMap[bp] = parseStyleAttribute(attr.value || "");
    hasResponsiveStyles = true;
    for (const entry of stylesEntries) {
      observedStyles.add(entry[0]);
      if (!element.style[entry[0]]) {
        element.style.setProperty(entry[0], "unset");
      }
    }
  }
  if (!hasResponsiveStyles) return;
  if (!styleBpMap["xs"]) {
    const initialValues = [];
    for (const prop of observedStyles) {
      const value = element.style.getPropertyValue(prop) || "";
      const priority = element.style.getPropertyPriority(prop) === "important" ? "important" : void 0;
      initialValues.push([prop, value, priority]);
    }
    styleBpMap["xs"] = initialValues;
    element.setAttribute("style-xs", getStyleEntryAsString(initialValues));
  }
  const styleResult = /* @__PURE__ */ new Map();
  for (const bp of breakpoints$1) {
    if (curWidth >= bp.minWidth) {
      if (styleBpMap[bp.name]) {
        const styles = styleBpMap[bp.name];
        for (const entry of styles) {
          styleResult.set(entry[0], getSTyleEntryValueAsString(entry));
        }
      }
    }
  }
  for (const [prop, value] of styleResult) {
    element.style.setProperty(prop, value);
  }
}
class ElementObserver {
  constructor(logger) {
    this.logger = logger;
    this.observer = null;
    this.changedElements = /* @__PURE__ */ new Set();
    this.debouncer = new Debouncer$1(10, 100);
    this.breakpoint = getCurrentBreakpoint();
  }
  async processChanges() {
    for (const el of this.changedElements) {
      adjustElementClasses(el, this.breakpoint, this.logger);
      adjustElementStyle(el, breakpointMap[this.breakpoint] || 0);
      this.changedElements.delete(el);
    }
  }
  async spoolElement(element) {
    if (this.changedElements.has(element)) {
      return;
    }
    this.changedElements.add(element);
    await this.debouncer.wait();
    this.processChanges();
  }
  onChange(mutations) {
    var _a3;
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        for (const addedNode of Array.from(mutation.addedNodes || [])) {
          if (addedNode instanceof HTMLElement) {
            this.spoolElement(addedNode);
          }
        }
      } else if (mutation.type === "attributes") {
        if (!(mutation.target instanceof HTMLElement)) {
          continue;
        }
        if (!(mutation.attributeName === "class" || ((_a3 = mutation.attributeName) == null ? void 0 : _a3.startsWith("style")))) {
          continue;
        }
        this.spoolElement(mutation.target);
      }
    }
  }
  /**
   * Queue all all elements (or those under root) that have class or style-* attributes
   *
   * @param root
   */
  queueAll(root = null) {
    if (root === null) {
      root = document.body;
    }
    root.querySelectorAll("[class]").forEach((e2) => this.spoolElement(e2));
    Array.from(root.getElementsByTagName("*")).filter((el) => [...el.getAttributeNames()].some((a2) => a2.startsWith("style-"))).forEach((e2) => this.spoolElement(e2));
  }
  startObserving(target) {
    this.observer = new MutationObserver(this.onChange.bind(this));
    this.observer.observe(target, { attributes: true, childList: true, subtree: true });
  }
  stopObserving() {
    var _a3;
    (_a3 = this.observer) == null ? void 0 : _a3.disconnect();
  }
}
var __create$f = Object.create;
var __defProp$k = Object.defineProperty;
var __getOwnPropDesc$l = Object.getOwnPropertyDescriptor;
var __knownSymbol$f = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$f = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __decoratorStart$f = (base) => [, , , __create$f((base == null ? void 0 : base[__knownSymbol$f("metadata")]) ?? null)];
var __decoratorStrings$f = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$f = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$f("Function expected") : fn;
var __decoratorContext$f = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$f[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$f("Already initialized") : fns.push(__expectFn$f(fn || null)) });
var __decoratorMetadata$f = (array, target) => __defNormalProp$f(target, __knownSymbol$f("metadata"), array[3]);
var __runInitializers$f = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) fns[i5].call(self);
  return value;
};
var __decorateElement$f = (array, flags, name, decorators, target, extra) => {
  var it, done, ctx, access, k3 = flags & 7, s2 = false, p2 = false;
  var j = 2, key = __decoratorStrings$f[k3 + 5];
  var extraInitializers = array[j] || (array[j] = []);
  var desc = (target = target.prototype, __getOwnPropDesc$l(target, name));
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$f(k3, name, done = {}, array[3], extraInitializers);
    {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: (x2) => name in x2 };
      access.get = (x2) => x2[name];
    }
    it = (0, decorators[i5])(desc[key], ctx), done._ = 1;
    __expectFn$f(it) && (desc[key] = it);
  }
  return desc && __defProp$k(target, name, desc), target;
};
var __accessCheck$c = (obj, member, msg) => member.has(obj) || __typeError$f("Cannot " + msg);
var __privateGet$c = (obj, member, getter) => (__accessCheck$c(obj, member, "read from private field"), member.get(obj));
var __privateAdd$c = (obj, member, value) => member.has(obj) ? __typeError$f("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$c = (obj, member, value, setter) => (__accessCheck$c(obj, member, "write to private field"), member.set(obj, value), value);
var _onResize_dec, _a$f, _breakpoint$1, _elementObserver, _init$f;
class TjResponsiveElement extends (_a$f = EventBindingsMixin(LoggingMixin(HTMLElement)), _onResize_dec = [Listen("resize", { target: "window" })], _a$f) {
  constructor() {
    super();
    __runInitializers$f(_init$f, 5, this);
    this.resizeDebouncer = new Debouncer$1(50, 1500);
    __privateAdd$c(this, _breakpoint$1, getCurrentBreakpoint());
    __privateAdd$c(this, _elementObserver, new ElementObserver(this.getLogger("observer")));
  }
  static get observedAttributes() {
    return ["width", "height", "orientation"];
  }
  async onResize(ev) {
    await this.resizeDebouncer.wait();
    const newBreakpoint = getCurrentBreakpoint();
    if (newBreakpoint !== __privateGet$c(this, _breakpoint$1)) {
      __privateSet$c(this, _breakpoint$1, newBreakpoint);
      this.log(`Breakpoint changed to ${__privateGet$c(this, _breakpoint$1)}, adjusting layout.`);
      __privateGet$c(this, _elementObserver).breakpoint = __privateGet$c(this, _breakpoint$1);
      __privateGet$c(this, _elementObserver).queueAll();
    }
  }
  attributeChangedCallback(_name2, oldValue, newValue) {
  }
  async connectedCallback() {
    var _a3;
    (_a3 = super.connectedCallback) == null ? void 0 : _a3.call(this);
    __privateSet$c(this, _breakpoint$1, getCurrentBreakpoint());
    __privateGet$c(this, _elementObserver).breakpoint = __privateGet$c(this, _breakpoint$1);
    this.debug("Initializing ElementObserver for responsive adjustments.", __privateGet$c(this, _breakpoint$1));
    __privateGet$c(this, _elementObserver).startObserving(this);
    __privateGet$c(this, _elementObserver).queueAll();
  }
  disconnectedCallback() {
    var _a3;
    (_a3 = super.disconnectedCallback) == null ? void 0 : _a3.call(this);
    this.debug("TjResponsiveElement disconnected from the DOM.");
    __privateGet$c(this, _elementObserver).stopObserving();
  }
}
_init$f = __decoratorStart$f(_a$f);
_breakpoint$1 = /* @__PURE__ */ new WeakMap();
_elementObserver = /* @__PURE__ */ new WeakMap();
__decorateElement$f(_init$f, 1, "onResize", _onResize_dec, TjResponsiveElement);
__decoratorMetadata$f(_init$f, TjResponsiveElement);
if (!customElements.get("tj-responsive")) {
  customElements.define("tj-responsive", TjResponsiveElement);
}
class Debouncer2 {
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
function isBiggerThanBreakpoint(breakpoint) {
  if (typeof breakpoint === "string" && breakpoint.endsWith("px")) {
    breakpoint = parseInt(breakpoint.replace("px", ""));
  }
  if (typeof breakpoint === "string") {
    breakpoint = breakpoints[breakpoint];
    if (!breakpoint) {
      throw new Error(
        `Breakpoint ${breakpoint} not found. Defined breakpoints are: ${Object.keys(breakpoints).join(", ")}`
      );
    }
  } else if (typeof breakpoint === "number") {
    breakpoint = { name: "c", minWidth: breakpoint };
  }
  return window.innerWidth >= breakpoint.minWidth;
}
if (!window.__nextrap_current_breakpoint) {
  window.__nextrap_current_breakpoint = calculateCurrentBreakpoint();
  const deboucer = new Debouncer2(200, 500);
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
class SlotTool {
  /**
   * Checks recursively if the element is visible.
   *
   * @param el
   */
  static isVisible(el) {
    const style2 = getComputedStyle(el);
    if (style2.display === "none") {
      return false;
    }
    if (el instanceof HTMLElement && (el.offsetWidth > 0 || el.offsetHeight > 0 || el.tagName === "IMG" || el.textContent !== "")) {
      return true;
    }
    if (!el.children) return false;
    for (const child of el.children) {
      if (this.isVisible(child)) return true;
    }
    return false;
  }
  /**
   * Usage:
   *
   * in firstupdated or connectedCallback of your element:
   * ```ts
   *  override firstUpdated(_changedProperties: PropertyValues) {
   *     SlotTool.observeEmptySlots(this)
   *   }
   * ```
   *
   * @param slot
   */
  static isEmptySlot(slot) {
    const assignedElements = slot.assignedElements({ flatten: true });
    if (assignedElements.length === 0) {
      return true;
    }
    return assignedElements.every((el) => !this.isVisible(el));
  }
  static observeEmptySlots(element) {
    const shadowRoot = element.shadowRoot;
    if (!shadowRoot) {
      console.warn("Element has no shadow root", element);
      return;
    }
    const slots = shadowRoot.querySelectorAll("slot");
    slots.forEach((slot) => {
      if (this.isEmptySlot(slot)) {
        slot.setAttribute("empty", "");
      } else {
        slot.removeAttribute("empty");
      }
      slot.onslotchange = () => {
        if (this.isEmptySlot(slot)) {
          slot.setAttribute("empty", "");
        } else {
          slot.removeAttribute("empty");
        }
      };
    });
  }
}
function waitForDomContentLoaded() {
  if (document.readyState === "loading") {
    return new Promise((resolve) => {
      document.addEventListener("DOMContentLoaded", () => resolve());
    });
  }
  return Promise.resolve();
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function eventListener(event, target = "this", options) {
  return function(proto, prop, descriptor) {
    const origConnected = proto.connectedCallback;
    const origDisconnected = proto.disconnectedCallback;
    proto.connectedCallback = function() {
      const targetEl = target === "this" ? this : target;
      const events = Array.isArray(event) ? event : [event];
      this.__eventListenerRemovers ?? (this.__eventListenerRemovers = []);
      for (const e2 of events) {
        const boundFn = this[prop].bind(this);
        targetEl.addEventListener(e2, boundFn);
        this.__eventListenerRemovers.push(() => targetEl.removeEventListener(e2, boundFn));
      }
      origConnected == null ? void 0 : origConnected.call(this);
    };
    proto.disconnectedCallback = function() {
      var _a3;
      (_a3 = this.__eventListenerRemovers) == null ? void 0 : _a3.forEach((fn) => fn());
      this.__eventListenerRemovers = [];
      origDisconnected == null ? void 0 : origDisconnected.call(this);
    };
  };
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
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3 = globalThis, e$6 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$3 = Symbol(), o$9 = /* @__PURE__ */ new WeakMap();
let n$7 = class n2 {
  constructor(t2, e2, o2) {
    if (this._$cssResult$ = true, o2 !== s$3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$6 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = o$9.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && o$9.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$6 = (t2) => new n$7("string" == typeof t2 ? t2 : t2 + "", void 0, s$3), i$5 = (t2, ...e2) => {
  const o2 = 1 === t2.length ? t2[0] : e2.reduce((e3, s2, o3) => e3 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$7(o2, t2, s$3);
}, S$1 = (s2, o2) => {
  if (e$6) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e2 of o2) {
    const o3 = document.createElement("style"), n4 = t$3.litNonce;
    void 0 !== n4 && o3.setAttribute("nonce", n4), o3.textContent = e2.cssText, s2.appendChild(o3);
  }
}, c$3 = e$6 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules) e2 += s2.cssText;
  return r$6(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$4, defineProperty: e$5, getOwnPropertyDescriptor: h$4, getOwnPropertyNames: r$5, getOwnPropertySymbols: o$8, getPrototypeOf: n$6 } = Object, a$2 = globalThis, c$2 = a$2.trustedTypes, l$2 = c$2 ? c$2.emptyScript : "", p$2 = a$2.reactiveElementPolyfillSupport, d$1 = (t2, s2) => t2, u$3 = { toAttribute(t2, s2) {
  switch (s2) {
    case Boolean:
      t2 = t2 ? l$2 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s2) {
  let i5 = t2;
  switch (s2) {
    case Boolean:
      i5 = null !== t2;
      break;
    case Number:
      i5 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i5 = JSON.parse(t2);
      } catch (t3) {
        i5 = null;
      }
  }
  return i5;
} }, f$2 = (t2, s2) => !i$4(t2, s2), b$1 = { attribute: true, type: String, converter: u$3, reflect: false, useDefault: false, hasChanged: f$2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$2.litPropertyMetadata ?? (a$2.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let y$1 = class y2 extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$1) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i5 = Symbol(), h3 = this.getPropertyDescriptor(t2, i5, s2);
      void 0 !== h3 && e$5(this.prototype, t2, h3);
    }
  }
  static getPropertyDescriptor(t2, s2, i5) {
    const { get: e2, set: r2 } = h$4(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e2, set(s3) {
      const h3 = e2 == null ? void 0 : e2.call(this);
      r2 == null ? void 0 : r2.call(this, s3), this.requestUpdate(t2, h3, i5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties"))) return;
    const t2 = n$6(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s2 = [...r$5(t3), ...o$8(t3)];
      for (const i5 of s2) this.createProperty(i5, t3[i5]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i5] of s2) this.elementProperties.set(t3, i5);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i5 = this._$Eu(t3, s2);
      void 0 !== i5 && this._$Eh.set(i5, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i5 = [];
    if (Array.isArray(s2)) {
      const e2 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e2) i5.unshift(c$3(s3));
    } else void 0 !== s2 && i5.push(c$3(s2));
    return i5;
  }
  static _$Eu(t2, s2) {
    const i5 = s2.attribute;
    return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a3;
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (_a3 = this.constructor.l) == null ? void 0 : _a3.forEach((t2) => t2(this));
  }
  addController(t2) {
    var _a3;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_a3 = t2.hostConnected) == null ? void 0 : _a3.call(t2));
  }
  removeController(t2) {
    var _a3;
    (_a3 = this._$EO) == null ? void 0 : _a3.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i5 of s2.keys()) this.hasOwnProperty(i5) && (t2.set(i5, this[i5]), delete this[i5]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var _a3;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a3 = this._$EO) == null ? void 0 : _a3.forEach((t2) => {
      var _a4;
      return (_a4 = t2.hostConnected) == null ? void 0 : _a4.call(t2);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var _a3;
    (_a3 = this._$EO) == null ? void 0 : _a3.forEach((t2) => {
      var _a4;
      return (_a4 = t2.hostDisconnected) == null ? void 0 : _a4.call(t2);
    });
  }
  attributeChangedCallback(t2, s2, i5) {
    this._$AK(t2, i5);
  }
  _$ET(t2, s2) {
    var _a3;
    const i5 = this.constructor.elementProperties.get(t2), e2 = this.constructor._$Eu(t2, i5);
    if (void 0 !== e2 && true === i5.reflect) {
      const h3 = (void 0 !== ((_a3 = i5.converter) == null ? void 0 : _a3.toAttribute) ? i5.converter : u$3).toAttribute(s2, i5.type);
      this._$Em = t2, null == h3 ? this.removeAttribute(e2) : this.setAttribute(e2, h3), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    var _a3, _b2;
    const i5 = this.constructor, e2 = i5._$Eh.get(t2);
    if (void 0 !== e2 && this._$Em !== e2) {
      const t3 = i5.getPropertyOptions(e2), h3 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a3 = t3.converter) == null ? void 0 : _a3.fromAttribute) ? t3.converter : u$3;
      this._$Em = e2;
      const r2 = h3.fromAttribute(s2, t3.type);
      this[e2] = r2 ?? ((_b2 = this._$Ej) == null ? void 0 : _b2.get(e2)) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i5, e2 = false, h3) {
    var _a3;
    if (void 0 !== t2) {
      const r2 = this.constructor;
      if (false === e2 && (h3 = this[t2]), i5 ?? (i5 = r2.getPropertyOptions(t2)), !((i5.hasChanged ?? f$2)(h3, s2) || i5.useDefault && i5.reflect && h3 === ((_a3 = this._$Ej) == null ? void 0 : _a3.get(t2)) && !this.hasAttribute(r2._$Eu(t2, i5)))) return;
      this.C(t2, s2, i5);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i5, reflect: e2, wrapped: h3 }, r2) {
    i5 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h3 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i5 || (s2 = void 0), this._$AL.set(t2, s2)), true === e2 && this._$Em !== t2 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t2));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a3;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i5] of t3) {
        const { wrapped: t4 } = i5, e2 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e2 || this.C(s3, void 0, i5, e2);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), (_a3 = this._$EO) == null ? void 0 : _a3.forEach((t3) => {
        var _a4;
        return (_a4 = t3.hostUpdate) == null ? void 0 : _a4.call(t3);
      }), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var _a3;
    (_a3 = this._$EO) == null ? void 0 : _a3.forEach((t3) => {
      var _a4;
      return (_a4 = t3.hostUpdated) == null ? void 0 : _a4.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t3) => this._$ET(t3, this[t3]))), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$2 == null ? void 0 : p$2({ ReactiveElement: y$1 }), (a$2.reactiveElementVersions ?? (a$2.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = globalThis, i$3 = (t2) => t2, s$2 = t$2.trustedTypes, e$4 = s$2 ? s$2.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, h$3 = "$lit$", o$7 = `lit$${Math.random().toFixed(9).slice(2)}$`, n$5 = "?" + o$7, r$4 = `<${n$5}>`, l$1 = document, c$1 = () => l$1.createComment(""), a$1 = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u$2 = Array.isArray, d = (t2) => u$2(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), f$1 = "[ 	\n\f\r]", v$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _$1 = /-->/g, m$1 = />/g, p$1 = RegExp(`>|${f$1}(?:([^\\s"'>=/]+)(${f$1}*=${f$1}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g$1 = /'/g, $ = /"/g, y3 = /^(?:script|style|textarea|title)$/i, x = (t2) => (i5, ...s2) => ({ _$litType$: t2, strings: i5, values: s2 }), b = x(1), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l$1.createTreeWalker(l$1, 129);
function V(t2, i5) {
  if (!u$2(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e$4 ? e$4.createHTML(i5) : i5;
}
const N = (t2, i5) => {
  const s2 = t2.length - 1, e2 = [];
  let n4, l2 = 2 === i5 ? "<svg>" : 3 === i5 ? "<math>" : "", c2 = v$1;
  for (let i6 = 0; i6 < s2; i6++) {
    const s3 = t2[i6];
    let a2, u2, d2 = -1, f2 = 0;
    for (; f2 < s3.length && (c2.lastIndex = f2, u2 = c2.exec(s3), null !== u2); ) f2 = c2.lastIndex, c2 === v$1 ? "!--" === u2[1] ? c2 = _$1 : void 0 !== u2[1] ? c2 = m$1 : void 0 !== u2[2] ? (y3.test(u2[2]) && (n4 = RegExp("</" + u2[2], "g")), c2 = p$1) : void 0 !== u2[3] && (c2 = p$1) : c2 === p$1 ? ">" === u2[0] ? (c2 = n4 ?? v$1, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? p$1 : '"' === u2[3] ? $ : g$1) : c2 === $ || c2 === g$1 ? c2 = p$1 : c2 === _$1 || c2 === m$1 ? c2 = v$1 : (c2 = p$1, n4 = void 0);
    const x2 = c2 === p$1 && t2[i6 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === v$1 ? s3 + r$4 : d2 >= 0 ? (e2.push(a2), s3.slice(0, d2) + h$3 + s3.slice(d2) + o$7 + x2) : s3 + o$7 + (-2 === d2 ? i6 : x2);
  }
  return [V(t2, l2 + (t2[s2] || "<?>") + (2 === i5 ? "</svg>" : 3 === i5 ? "</math>" : "")), e2];
};
class S2 {
  constructor({ strings: t2, _$litType$: i5 }, e2) {
    let r2;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = N(t2, i5);
    if (this.el = S2.createElement(f2, e2), P.currentNode = this.el.content, 2 === i5 || 3 === i5) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = P.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(h$3)) {
          const i6 = v2[a2++], s2 = r2.getAttribute(t3).split(o$7), e3 = /([.?@])?(.*)/.exec(i6);
          d2.push({ type: 1, index: l2, name: e3[2], strings: s2, ctor: "." === e3[1] ? I2 : "?" === e3[1] ? L2 : "@" === e3[1] ? z2 : H2 }), r2.removeAttribute(t3);
        } else t3.startsWith(o$7) && (d2.push({ type: 6, index: l2 }), r2.removeAttribute(t3));
        if (y3.test(r2.tagName)) {
          const t3 = r2.textContent.split(o$7), i6 = t3.length - 1;
          if (i6 > 0) {
            r2.textContent = s$2 ? s$2.emptyScript : "";
            for (let s2 = 0; s2 < i6; s2++) r2.append(t3[s2], c$1()), P.nextNode(), d2.push({ type: 2, index: ++l2 });
            r2.append(t3[i6], c$1());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === n$5) d2.push({ type: 2, index: l2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(o$7, t3 + 1)); ) d2.push({ type: 7, index: l2 }), t3 += o$7.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i5) {
    const s2 = l$1.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function M(t2, i5, s2 = t2, e2) {
  var _a3, _b2;
  if (i5 === E) return i5;
  let h3 = void 0 !== e2 ? (_a3 = s2._$Co) == null ? void 0 : _a3[e2] : s2._$Cl;
  const o2 = a$1(i5) ? void 0 : i5._$litDirective$;
  return (h3 == null ? void 0 : h3.constructor) !== o2 && ((_b2 = h3 == null ? void 0 : h3._$AO) == null ? void 0 : _b2.call(h3, false), void 0 === o2 ? h3 = void 0 : (h3 = new o2(t2), h3._$AT(t2, s2, e2)), void 0 !== e2 ? (s2._$Co ?? (s2._$Co = []))[e2] = h3 : s2._$Cl = h3), void 0 !== h3 && (i5 = M(t2, h3._$AS(t2, i5.values), h3, e2)), i5;
}
class R2 {
  constructor(t2, i5) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i5 }, parts: s2 } = this._$AD, e2 = ((t2 == null ? void 0 : t2.creationScope) ?? l$1).importNode(i5, true);
    P.currentNode = e2;
    let h3 = P.nextNode(), o2 = 0, n4 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i6;
        2 === r2.type ? i6 = new k2(h3, h3.nextSibling, this, t2) : 1 === r2.type ? i6 = new r2.ctor(h3, r2.name, r2.strings, this, t2) : 6 === r2.type && (i6 = new Z2(h3, this, t2)), this._$AV.push(i6), r2 = s2[++n4];
      }
      o2 !== (r2 == null ? void 0 : r2.index) && (h3 = P.nextNode(), o2++);
    }
    return P.currentNode = l$1, e2;
  }
  p(t2) {
    let i5 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i5), i5 += s2.strings.length - 2) : s2._$AI(t2[i5])), i5++;
  }
}
class k2 {
  get _$AU() {
    var _a3;
    return ((_a3 = this._$AM) == null ? void 0 : _a3._$AU) ?? this._$Cv;
  }
  constructor(t2, i5, s2, e2) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i5, this._$AM = s2, this.options = e2, this._$Cv = (e2 == null ? void 0 : e2.isConnected) ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i5 = this._$AM;
    return void 0 !== i5 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i5.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i5 = this) {
    t2 = M(this, t2, i5), a$1(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== E && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A && a$1(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l$1.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var _a3;
    const { values: i5, _$litType$: s2 } = t2, e2 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S2.createElement(V(s2.h, s2.h[0]), this.options)), s2);
    if (((_a3 = this._$AH) == null ? void 0 : _a3._$AD) === e2) this._$AH.p(i5);
    else {
      const t3 = new R2(e2, this), s3 = t3.u(this.options);
      t3.p(i5), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i5 = C.get(t2.strings);
    return void 0 === i5 && C.set(t2.strings, i5 = new S2(t2)), i5;
  }
  k(t2) {
    u$2(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s2, e2 = 0;
    for (const h3 of t2) e2 === i5.length ? i5.push(s2 = new k2(this.O(c$1()), this.O(c$1()), this, this.options)) : s2 = i5[e2], s2._$AI(h3), e2++;
    e2 < i5.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i5.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    var _a3;
    for ((_a3 = this._$AP) == null ? void 0 : _a3.call(this, false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$3(t2).nextSibling;
      i$3(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    var _a3;
    void 0 === this._$AM && (this._$Cv = t2, (_a3 = this._$AP) == null ? void 0 : _a3.call(this, t2));
  }
}
class H2 {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i5, s2, e2, h3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i5, this._$AM = e2, this.options = h3, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A;
  }
  _$AI(t2, i5 = this, s2, e2) {
    const h3 = this.strings;
    let o2 = false;
    if (void 0 === h3) t2 = M(this, t2, i5, 0), o2 = !a$1(t2) || t2 !== this._$AH && t2 !== E, o2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let n4, r2;
      for (t2 = h3[0], n4 = 0; n4 < h3.length - 1; n4++) r2 = M(this, e3[s2 + n4], i5, n4), r2 === E && (r2 = this._$AH[n4]), o2 || (o2 = !a$1(r2) || r2 !== this._$AH[n4]), r2 === A ? t2 = A : t2 !== A && (t2 += (r2 ?? "") + h3[n4 + 1]), this._$AH[n4] = r2;
    }
    o2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class I2 extends H2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
class L2 extends H2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A);
  }
}
class z2 extends H2 {
  constructor(t2, i5, s2, e2, h3) {
    super(t2, i5, s2, e2, h3), this.type = 5;
  }
  _$AI(t2, i5 = this) {
    if ((t2 = M(this, t2, i5, 0) ?? A) === E) return;
    const s2 = this._$AH, e2 = t2 === A && s2 !== A || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h3 = t2 !== A && (s2 === A || e2);
    e2 && this.element.removeEventListener(this.name, this, s2), h3 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a3;
    "function" == typeof this._$AH ? this._$AH.call(((_a3 = this.options) == null ? void 0 : _a3.host) ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class Z2 {
  constructor(t2, i5, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M(this, t2);
  }
}
const B = t$2.litHtmlPolyfillSupport;
B == null ? void 0 : B(S2, k2), (t$2.litHtmlVersions ?? (t$2.litHtmlVersions = [])).push("3.3.2");
const D = (t2, i5, s2) => {
  const e2 = (s2 == null ? void 0 : s2.renderBefore) ?? i5;
  let h3 = e2._$litPart$;
  if (void 0 === h3) {
    const t3 = (s2 == null ? void 0 : s2.renderBefore) ?? null;
    e2._$litPart$ = h3 = new k2(i5.insertBefore(c$1(), t3), t3, void 0, s2 ?? {});
  }
  return h3._$AI(t2), h3;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s$1 = globalThis;
let i$2 = class i2 extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a3;
    const t2 = super.createRenderRoot();
    return (_a3 = this.renderOptions).renderBefore ?? (_a3.renderBefore = t2.firstChild), t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a3;
    super.connectedCallback(), (_a3 = this._$Do) == null ? void 0 : _a3.setConnected(true);
  }
  disconnectedCallback() {
    var _a3;
    super.disconnectedCallback(), (_a3 = this._$Do) == null ? void 0 : _a3.setConnected(false);
  }
  render() {
    return E;
  }
};
i$2._$litElement$ = true, i$2["finalized"] = true, (_b = s$1.litElementHydrateSupport) == null ? void 0 : _b.call(s$1, { LitElement: i$2 });
const o$6 = s$1.litElementPolyfillSupport;
o$6 == null ? void 0 : o$6({ LitElement: i$2 });
(s$1.litElementVersions ?? (s$1.litElementVersions = [])).push("4.2.2");
function wrap(html, shadowRoot) {
  const t2 = document.createElement("template");
  t2.innerHTML = html.trim();
  shadowRoot.append(t2.content.cloneNode(true));
  return new Proxy({}, {
    get(_2, prop) {
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
const _NtSimpleElement = class _NtSimpleElement extends y$1 {
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
      if (item instanceof n$7) {
        return item.styleSheet;
      } else {
        return r$6(item).styleSheet;
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
const defaultNteFeatures = {
  logging: true,
  slotVisibility: false,
  eventBinding: false,
  breakpoints: false
};
function nextrap_element(features2 = {}) {
  const mergedFeatures = { ...defaultNteFeatures, ...features2 };
  let constructor = i$2;
  if (mergedFeatures.logging) {
    constructor = LoggingMixin(constructor);
  }
  if (mergedFeatures.slotVisibility) {
    constructor = SlotVisibilityMixin(constructor);
  }
  if (mergedFeatures.breakpoints) {
    constructor = BreakPointMixin(constructor);
  }
  if (mergedFeatures.eventBinding) {
    constructor = EventBindingsMixin(constructor);
  }
  return constructor;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = (t2) => (e2, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e2);
  }) : customElements.define(t2, e2);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$5 = { attribute: true, type: String, converter: u$3, reflect: false, hasChanged: f$2 }, r$3 = (t2 = o$5, e2, r2) => {
  const { kind: n4, metadata: i5 } = r2;
  let s2 = globalThis.litPropertyMetadata.get(i5);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i5, s2 = /* @__PURE__ */ new Map()), "setter" === n4 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n4) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n5 = e2.get.call(this);
      e2.set.call(this, r3), this.requestUpdate(o2, n5, t2, true, r3);
    }, init(e3) {
      return void 0 !== e3 && this.C(o2, void 0, t2, e3), e3;
    } };
  }
  if ("setter" === n4) {
    const { name: o2 } = r2;
    return function(r3) {
      const n5 = this[o2];
      e2.call(this, r3), this.requestUpdate(o2, n5, t2, true, r3);
    };
  }
  throw Error("Unsupported decorator location: " + n4);
};
function n$4(t2) {
  return (e2, o2) => "object" == typeof o2 ? r$3(t2, e2, o2) : ((t3, e3, o3) => {
    const r2 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r$2(r2) {
  return n$4({ ...r2, state: true, attribute: false });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$3 = (e2, t2, c2) => (c2.configurable = true, c2.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e2, t2, c2), c2);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o$4(o2) {
  return (e2, n4) => {
    const { slot: r2, selector: s2 } = {}, c2 = "slot" + (r2 ? `[name=${r2}]` : ":not([name])");
    return e$3(e2, n4, { get() {
      var _a3;
      const t2 = (_a3 = this.renderRoot) == null ? void 0 : _a3.querySelector(c2), e3 = (t2 == null ? void 0 : t2.assignedElements(o2)) ?? [];
      return void 0 === s2 ? e3 : e3.filter((t3) => t3.matches(s2));
    } });
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = { ATTRIBUTE: 1, CHILD: 2 }, e$2 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
let i$1 = class i3 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i5) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i5;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1 = e$2(class extends i$1 {
  constructor(t$12) {
    var _a3;
    if (super(t$12), t$12.type !== t.ATTRIBUTE || "class" !== t$12.name || ((_a3 = t$12.strings) == null ? void 0 : _a3.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((s2) => t2[s2]).join(" ") + " ";
  }
  update(s2, [i5]) {
    var _a3, _b2;
    if (void 0 === this.st) {
      this.st = /* @__PURE__ */ new Set(), void 0 !== s2.strings && (this.nt = new Set(s2.strings.join(" ").split(/\s/).filter((t2) => "" !== t2)));
      for (const t2 in i5) i5[t2] && !((_a3 = this.nt) == null ? void 0 : _a3.has(t2)) && this.st.add(t2);
      return this.render(i5);
    }
    const r2 = s2.element.classList;
    for (const t2 of this.st) t2 in i5 || (r2.remove(t2), this.st.delete(t2));
    for (const t2 in i5) {
      const s3 = !!i5[t2];
      s3 === this.st.has(t2) || ((_b2 = this.nt) == null ? void 0 : _b2.has(t2)) || (s3 ? (r2.add(t2), this.st.add(t2)) : (r2.remove(t2), this.st.delete(t2)));
    }
    return E;
  }
});
const style$j = "/* General Purpose SCSS Reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\na,\ni {\n  color: inherit;\n  text-decoration: none;\n}\n\nul,\nol {\n  list-style: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nslot {\n  display: contents; /* Allows slotted elements to inherit styles from parent */\n}\n\n:host {\n  --backdrop: rgb(from var(--nt-dark) r g b / 0.5);\n  --header-background: transparent;\n  --background-color: var(--nt-primary-subtle);\n  --shadow-color: rgb(from var(--nt-dark) r g b / 0.5);\n  --main-padding: 0;\n  --header-padding: var(--nt-space);\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 33%;\n  min-width: 250px;\n  max-width: 400px;\n  z-index: 2000;\n  padding: 0;\n  isolation: isolate;\n  display: block;\n}\n:host[opened] {\n  display: block;\n}\n\n#offcanvas {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: var(--background-color);\n  box-shadow: 0 0 10px var(--shadow-color);\n  transition: transform 0.2s ease-in-out;\n  transform: translateX(0);\n}\n#offcanvas.closed {\n  transform: translateX(100%);\n}\n\n#header:has(> slot[empty]) {\n  display: none;\n}\n#header {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--header-background);\n  flex-grow: 0;\n  padding: var(--header-padding);\n}\n\n#main {\n  display: flex;\n  width: 100%;\n  flex-grow: 1;\n  padding: var(--main-padding);\n  min-height: 200px;\n  overflow: auto;\n  scroll-behavior: auto;\n  scrollbar-gutter: auto;\n  height: 100%;\n}\n\n#footer:has(> slot[empty]) {\n  display: none;\n}\n#footer {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n  flex-grow: 0;\n  padding: var(--padding);\n}\n\n#backdrop.closed {\n  opacity: 0;\n}\n#backdrop {\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--backdrop);\n  z-index: -1;\n  display: block;\n}";
var __defProp$j = Object.defineProperty;
var __getOwnPropDesc$k = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$k(target, key) : target;
  for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
    if (decorator = decorators[i5])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$j(target, key, result);
  return result;
};
let NteOffcanvas = class extends i$2 {
  constructor() {
    super();
    this.backdrop = true;
    this.opened = false;
    this.dataGroupName = "";
    this.closedClass = true;
    this.addEventListener("click", (event) => {
      if (event === void 0 || !event.target || !(event.target instanceof HTMLElement)) {
        return;
      }
      if (event.target.closest("[data-nt-dismiss='offcanvas']") !== null) {
        this.close();
      }
    });
  }
  static get is() {
    return "nte-offcanvas";
  }
  connectedCallback() {
    super.connectedCallback();
  }
  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  toggle() {
    this.opened = !this.opened;
  }
  async updated(changedProperties) {
    if (changedProperties.has("opened")) {
      if (this.dataGroupName !== "") {
        triggerGroupOpenCloseEvent(this.opened, this.dataGroupName);
      }
      if (this.opened) {
        this.style.display = "block";
        await sleep(1);
        SlotTool.observeEmptySlots(this);
        this.closedClass = false;
      } else {
        this.closedClass = true;
        await sleep(400);
        this.style.display = "none";
      }
    }
  }
  render() {
    return b`
      <div
        id="backdrop"
        part="backdrop"
        @click=${() => this.opened = false}
        class=${e$1({ closed: this.closedClass })}
      ></div>
      <div
        id="offcanvas"
        part="offcanvas"
        role="dialog"
        aria-modal="true"
        class=${e$1({ closed: this.closedClass })}
        ?backdrop="${this.backdrop}"
      >
        <div id="header" part="header">
          <slot name="header"></slot>
        </div>

        <div id="main" part="main">
          <slot></slot>
        </div>

        <div id="footer" part="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
};
NteOffcanvas.styles = [r$6(style$j)];
__decorateClass$5([
  n$4({ type: Boolean, reflect: true })
], NteOffcanvas.prototype, "backdrop", 2);
__decorateClass$5([
  n$4({ type: Boolean, reflect: true })
], NteOffcanvas.prototype, "opened", 2);
__decorateClass$5([
  n$4({ type: String, attribute: "data-group-name" })
], NteOffcanvas.prototype, "dataGroupName", 2);
__decorateClass$5([
  r$2()
], NteOffcanvas.prototype, "closedClass", 2);
NteOffcanvas = __decorateClass$5([
  t$1(NteOffcanvas.is)
], NteOffcanvas);
const style$i = ":host {\n  --container-width: var(--nt-container-width);\n  --text-color: var(--nt-text);\n  --hover-color: var(--nt-primary);\n  --hover-text-color: var(--nt-text-on-primary);\n  --transition: 0.2s ease-in-out;\n  --submenu-bg: var(--nt-light);\n  --submenu-text-color: var(--nt-text);\n  --submenu-hover-text-color: var(--nt-primary);\n  --justify-content: center;\n  --sidemenu-bg: var(--nt-primary-subtle);\n  --justify-sidebar-burger: flex-end;\n  --height: auto;\n  --default-alpha: 0.7;\n  height: var(--height);\n  display: block;\n}\n\nnav {\n  height: 100%;\n}\n\n#main {\n  height: 100%;\n}\n\n#burger-wrapper {\n  padding: 15px;\n}\n\n#text {\n  padding-right: 10px;\n}\n\n#burger-default {\n  cursor: pointer;\n}\n#burger-default slot::slotted(span) {\n  color: rgb(from var(--text-color) r g b/var(--default-alpha));\n  transition: color var(--transition);\n}\n#burger-default nte-burger {\n  --color: rgb(from var(--text-color) r g b / var(--default-alpha));\n}\n\n#burger-default:hover slot::slotted(span) {\n  color: rgb(from var(--text-color) r g b/1);\n}\n#burger-default:hover nte-burger {\n  --color: rgb(from var(--text-color) r g b / 1);\n}";
var __create$e = Object.create;
var __defProp$i = Object.defineProperty;
var __getOwnPropDesc$j = Object.getOwnPropertyDescriptor;
var __knownSymbol$e = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$e = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$e = (target, value) => __defProp$i(target, "name", { value, configurable: true });
var __decoratorStart$e = (base) => [, , , __create$e((base == null ? void 0 : base[__knownSymbol$e("metadata")]) ?? null)];
var __decoratorStrings$e = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$e = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$e("Function expected") : fn;
var __decoratorContext$e = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$e[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$e("Already initialized") : fns.push(__expectFn$e(fn || null)) });
var __decoratorMetadata$e = (array, target) => __defNormalProp$e(target, __knownSymbol$e("metadata"), array[3]);
var __runInitializers$e = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$e = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$e[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$j(k3 < 4 ? target : { get [name]() {
    return __privateGet$b(this, extra);
  }, set [name](x2) {
    return __privateSet$b(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$e(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$e(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$e(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$b(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$b : __privateMethod$b)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$b(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$e(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$e("Object expected");
    else __expectFn$e(fn = it.get) && (desc.get = fn), __expectFn$e(fn = it.set) && (desc.set = fn), __expectFn$e(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$e(array, target), desc && __defProp$i(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$b = (obj, member, msg) => member.has(obj) || __typeError$e("Cannot " + msg);
var __privateIn$b = (member, obj) => Object(obj) !== obj ? __typeError$e('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$b = (obj, member, getter) => (__accessCheck$b(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$b = (obj, member, value) => member.has(obj) ? __typeError$e("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$b = (obj, member, value, setter) => (__accessCheck$b(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$b = (obj, member, method) => (__accessCheck$b(obj, member, "access private method"), method);
var _handleClickOutside_dec, _handleClickOnSubmenu_dec, __isTransferred_dec, _dataGroupName_dec, _transferTo_dec, _breakpoint_dec, _mode_dec$1, _a$e, _NteNav_decorators, _init$e, _mode$1, _breakpoint, _transferTo, _dataGroupName, __isTransferred, _curClickLi;
const features$1 = {
  eventBinding: true,
  logging: true
};
_NteNav_decorators = [t$1("nte-nav")];
class NteNav extends (_a$e = nextrap_element(features$1), _mode_dec$1 = [n$4({ type: String, reflect: true })], _breakpoint_dec = [n$4({ type: String, reflect: true })], _transferTo_dec = [n$4({ type: String, reflect: true, attribute: "transfer-to" })], _dataGroupName_dec = [n$4({ type: String, reflect: false, attribute: "data-group-name" })], __isTransferred_dec = [r$2()], _handleClickOnSubmenu_dec = [Listen("click", { target: "host" })], _handleClickOutside_dec = [Listen("click", { target: "window" })], _a$e) {
  constructor() {
    super();
    __runInitializers$e(_init$e, 5, this);
    __privateAdd$b(this, _mode$1, __runInitializers$e(_init$e, 8, this, "slave")), __runInitializers$e(_init$e, 11, this);
    __privateAdd$b(this, _breakpoint, __runInitializers$e(_init$e, 12, this, "99999px")), __runInitializers$e(_init$e, 15, this);
    __privateAdd$b(this, _transferTo, __runInitializers$e(_init$e, 16, this, "")), __runInitializers$e(_init$e, 19, this);
    __privateAdd$b(this, _dataGroupName, __runInitializers$e(_init$e, 20, this, "")), __runInitializers$e(_init$e, 23, this);
    __privateAdd$b(this, __isTransferred, __runInitializers$e(_init$e, 24, this, false)), __runInitializers$e(_init$e, 27, this);
    __privateAdd$b(this, _curClickLi, null);
  }
  handleClickOnSubmenu(e2) {
    var _a3;
    const clickLi = (_a3 = e2.target) == null ? void 0 : _a3.closest("li:has(ul)");
    if (__privateGet$b(this, _curClickLi)) {
      __privateGet$b(this, _curClickLi).classList.remove("is-open");
      __privateSet$b(this, _curClickLi, null);
    }
    if (!clickLi) {
      return;
    }
    __privateSet$b(this, _curClickLi, clickLi);
    clickLi.classList.add("is-open");
  }
  handleClickOutside(e2) {
    if (!__privateGet$b(this, _curClickLi)) {
      return;
    }
    const clickInside = __privateGet$b(this, _curClickLi).contains(e2.target);
    if (!clickInside) {
      __privateGet$b(this, _curClickLi).classList.remove("is-open");
      __privateSet$b(this, _curClickLi, null);
    }
  }
  getOffcanvas() {
    if (!this.transferTo) {
      return null;
    }
    return document.querySelector(this.transferTo);
  }
  getOffcanvasNav() {
    const offcanvas = this.getOffcanvas();
    return offcanvas ? offcanvas.querySelector("nte-nav") : null;
  }
  render() {
    return b` <nav>
      <div id="burger-wrapper" ?hidden=${!this._isTransferred}>
        <slot
          name="burger"
          open
          aria-haspopup="true"
          id="burger"
          class="burger"
          @click=${() => {
      var _a3;
      return (_a3 = this.getOffcanvas()) == null ? void 0 : _a3.open();
    }}
        >
          <!-- fallback icon -->
          ${this._isTransferred ? b`<div id="burger-default" style="display:flex; align-items: center; justify-content: center;">
                <div id="text" part="menutext"><slot name="menu-text"></slot></div>
                <nte-burger
                  part="burger"
                  label="Menu"
                  data-group-name="${this.dataGroupName}"
                  id="open-burger"
                  onclick="this.open = true"
                ></nte-burger>
              </div>` : ""}
        </slot>
      </div>

      <div class="nt-nav-links" id="main" part="main">
        <slot id="main-slot"></slot>
      </div>
    </nav>`;
  }
  transferToElement(targetElement) {
    var _a3;
    const mainSlot = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("#main-slot");
    if (mainSlot === null) {
      return;
    }
    const elements = Array.from(mainSlot.assignedElements({ flatten: true }));
    elements.forEach((el) => {
      if (el instanceof HTMLElement) {
        targetElement.appendChild(el);
      }
    });
  }
  updated(_changedProperties) {
    var _a3, _b2;
    super.updated(_changedProperties);
    if (this._isTransferred) {
      this.transferToElement(
        this.getOffcanvasNav() ?? (() => {
          throw new Error("No offcanvas nav found");
        })()
      );
    } else {
      (_a3 = this.getOffcanvasNav()) == null ? void 0 : _a3.transferToElement(this);
      (_b2 = this.getOffcanvas()) == null ? void 0 : _b2.close();
    }
  }
  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    const cl = this.classList;
    if (!cl.contains("nav-vertical") && !cl.contains("nav-horizontal")) {
      cl.add(this.closest("nte-offcanvas") === null ? "nav-horizontal" : "nav-vertical");
    }
  }
  updateTransferState() {
    if (isBiggerThanBreakpoint(this.breakpoint)) {
      this._isTransferred = false;
    } else {
      this._isTransferred = true;
    }
  }
  async connectedCallback() {
    super.connectedCallback();
    if (this.mode === "slave") {
      return;
    }
    if (this.transferTo !== "") {
      this._isTransferred = false;
      if (this.breakpoint !== "") {
        if (!isBiggerThanBreakpoint(this.breakpoint)) {
          this._isTransferred = true;
        }
        window.addEventListener("breakpoint-changed", (event) => {
          this.updateTransferState();
        });
      }
    }
    await waitForLoad();
    this.updateTransferState();
    await sleep$1(3e3);
    this.updateTransferState();
  }
}
_init$e = __decoratorStart$e(_a$e);
_mode$1 = /* @__PURE__ */ new WeakMap();
_breakpoint = /* @__PURE__ */ new WeakMap();
_transferTo = /* @__PURE__ */ new WeakMap();
_dataGroupName = /* @__PURE__ */ new WeakMap();
__isTransferred = /* @__PURE__ */ new WeakMap();
_curClickLi = /* @__PURE__ */ new WeakMap();
__decorateElement$e(_init$e, 4, "mode", _mode_dec$1, NteNav, _mode$1);
__decorateElement$e(_init$e, 4, "breakpoint", _breakpoint_dec, NteNav, _breakpoint);
__decorateElement$e(_init$e, 4, "transferTo", _transferTo_dec, NteNav, _transferTo);
__decorateElement$e(_init$e, 4, "dataGroupName", _dataGroupName_dec, NteNav, _dataGroupName);
__decorateElement$e(_init$e, 4, "_isTransferred", __isTransferred_dec, NteNav, __isTransferred);
__decorateElement$e(_init$e, 1, "handleClickOnSubmenu", _handleClickOnSubmenu_dec, NteNav);
__decorateElement$e(_init$e, 1, "handleClickOutside", _handleClickOutside_dec, NteNav);
NteNav = __decorateElement$e(_init$e, 0, "NteNav", _NteNav_decorators, NteNav);
NteNav.styles = [r$6(style$i)];
__runInitializers$e(_init$e, 1, NteNav);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r$1 = (o2) => void 0 === o2.strings;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const s = (i5, t2) => {
  var _a3;
  const e2 = i5._$AN;
  if (void 0 === e2) return false;
  for (const i6 of e2) (_a3 = i6._$AO) == null ? void 0 : _a3.call(i6, t2, false), s(i6, t2);
  return true;
}, o$3 = (i5) => {
  let t2, e2;
  do {
    if (void 0 === (t2 = i5._$AM)) break;
    e2 = t2._$AN, e2.delete(i5), i5 = t2;
  } while (0 === (e2 == null ? void 0 : e2.size));
}, r = (i5) => {
  for (let t2; t2 = i5._$AM; i5 = t2) {
    let e2 = t2._$AN;
    if (void 0 === e2) t2._$AN = e2 = /* @__PURE__ */ new Set();
    else if (e2.has(i5)) break;
    e2.add(i5), c(t2);
  }
};
function h$2(i5) {
  void 0 !== this._$AN ? (o$3(this), this._$AM = i5, r(this)) : this._$AM = i5;
}
function n$3(i5, t2 = false, e2 = 0) {
  const r2 = this._$AH, h3 = this._$AN;
  if (void 0 !== h3 && 0 !== h3.size) if (t2) if (Array.isArray(r2)) for (let i6 = e2; i6 < r2.length; i6++) s(r2[i6], false), o$3(r2[i6]);
  else null != r2 && (s(r2, false), o$3(r2));
  else s(this, i5);
}
const c = (i5) => {
  i5.type == t.CHILD && (i5._$AP ?? (i5._$AP = n$3), i5._$AQ ?? (i5._$AQ = h$2));
};
class f extends i$1 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i5, t2, e2) {
    super._$AT(i5, t2, e2), r(this), this.isConnected = i5._$AU;
  }
  _$AO(i5, t2 = true) {
    var _a3, _b2;
    i5 !== this.isConnected && (this.isConnected = i5, i5 ? (_a3 = this.reconnected) == null ? void 0 : _a3.call(this) : (_b2 = this.disconnected) == null ? void 0 : _b2.call(this)), t2 && (s(this, i5), o$3(this));
  }
  setValue(t2) {
    if (r$1(this._$Ct)) this._$Ct._$AI(t2, this);
    else {
      const i5 = [...this._$Ct._$AH];
      i5[this._$Ci] = t2, this._$Ct._$AI(i5, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e = () => new h$1();
let h$1 = class h {
};
const o$2 = /* @__PURE__ */ new WeakMap(), n$2 = e$2(class extends f {
  render(i5) {
    return A;
  }
  update(i5, [s2]) {
    var _a3;
    const e2 = s2 !== this.G;
    return e2 && void 0 !== this.G && this.rt(void 0), (e2 || this.lt !== this.ct) && (this.G = s2, this.ht = (_a3 = i5.options) == null ? void 0 : _a3.host, this.rt(this.ct = i5.element)), A;
  }
  rt(t2) {
    if (this.isConnected || (t2 = void 0), "function" == typeof this.G) {
      const i5 = this.ht ?? globalThis;
      let s2 = o$2.get(i5);
      void 0 === s2 && (s2 = /* @__PURE__ */ new WeakMap(), o$2.set(i5, s2)), void 0 !== s2.get(this.G) && this.G.call(this.ht, void 0), s2.set(this.G, t2), void 0 !== t2 && this.G.call(this.ht, t2);
    } else this.G.value = t2;
  }
  get lt() {
    var _a3, _b2;
    return "function" == typeof this.G ? (_a3 = o$2.get(this.ht ?? globalThis)) == null ? void 0 : _a3.get(this.G) : (_b2 = this.G) == null ? void 0 : _b2.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
const style$h = "/* General Purpose SCSS Reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\na,\ni {\n  color: inherit;\n  text-decoration: none;\n}\n\nul,\nol {\n  list-style: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nslot {\n  display: contents; /* Allows slotted elements to inherit styles from parent */\n}\n\n:host {\n  --bg: transparent;\n  --spacer-bg: transparent;\n  --container-width: var(--nt-container-width, 100%);\n  --brand-height: 80px;\n  --spacer-height: 80px;\n  width: 100vw;\n  margin: 0;\n}\n\n:host(a) {\n  height: 85px;\n  width: auto;\n}\n\n#wrapper {\n  position: relative;\n  left: 0;\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n#spacer {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  transition: height 0.3s ease-in-out;\n  height: var(--spacer-height);\n  background-color: var(--spacer-bg);\n}\n\n#navbar {\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  height: auto;\n  background-color: var(--bg);\n  z-index: 1000;\n}\n\n#main {\n  width: 100vw;\n  display: block;\n}";
var __create$d = Object.create;
var __defProp$h = Object.defineProperty;
var __getOwnPropDesc$i = Object.getOwnPropertyDescriptor;
var __knownSymbol$d = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$d = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$d = (target, value) => __defProp$h(target, "name", { value, configurable: true });
var __decoratorStart$d = (base) => [, , , __create$d((base == null ? void 0 : base[__knownSymbol$d("metadata")]) ?? null)];
var __decoratorStrings$d = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$d = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$d("Function expected") : fn;
var __decoratorContext$d = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$d[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$d("Already initialized") : fns.push(__expectFn$d(fn || null)) });
var __decoratorMetadata$d = (array, target) => __defNormalProp$d(target, __knownSymbol$d("metadata"), array[3]);
var __runInitializers$d = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$d = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$d[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$i(k3 < 4 ? target : { get [name]() {
    return __privateGet$a(this, extra);
  }, set [name](x2) {
    return __privateSet$a(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$d(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$d(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$d(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$a(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$a : __privateMethod$a)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$a(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$d(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$d("Object expected");
    else __expectFn$d(fn = it.get) && (desc.get = fn), __expectFn$d(fn = it.set) && (desc.set = fn), __expectFn$d(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$d(array, target), desc && __defProp$h(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$a = (obj, member, msg) => member.has(obj) || __typeError$d("Cannot " + msg);
var __privateIn$a = (member, obj) => Object(obj) !== obj ? __typeError$d('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$a = (obj, member, getter) => (__accessCheck$a(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$a = (obj, member, value) => member.has(obj) ? __typeError$d("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$a = (obj, member, value, setter) => (__accessCheck$a(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$a = (obj, member, method) => (__accessCheck$a(obj, member, "access private method"), method);
var _scrollThreshold_dec, _a$d, _NteNavbar_decorators, _init$d, _scrollThreshold;
_NteNavbar_decorators = [t$1("nte-navbar")];
class NteNavbar extends (_a$d = i$2, _scrollThreshold_dec = [n$4({ type: Number, attribute: "scroll-threshold", reflect: true })], _a$d) {
  constructor() {
    super();
    this.navbarRef = e();
    this.spacerRef = e();
    __privateAdd$a(this, _scrollThreshold, __runInitializers$d(_init$d, 8, this, 0)), __runInitializers$d(_init$d, 11, this);
    this._lastScrollY = window.scrollY;
    this._scrollUpPixels = 0;
    this._debouncer = void 0;
    this._debouncer = new Debouncer2(100, 300);
    document.addEventListener(
      "scroll",
      async () => {
        this.updateScrollState();
      },
      { passive: true }
    );
  }
  static get is() {
    return "nte-navbar";
  }
  updateScrollState() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 1) {
      this.classList.add("is-scrolled");
    } else {
      this.classList.remove("is-scrolled");
    }
    if (currentScrollY < this._lastScrollY) {
      this._scrollUpPixels += this._lastScrollY - currentScrollY;
      if (this._scrollUpPixels > 10 && currentScrollY < this.scrollThreshold) {
        this.classList.add("is-scrolling-up");
      }
    } else {
      this._scrollUpPixels = 0;
      this.classList.remove("is-scrolling-up");
    }
    if (currentScrollY > this.scrollThreshold) {
      this.classList.add("is-below-threshold");
    } else {
      this.classList.remove("is-below-threshold");
    }
    this._lastScrollY = currentScrollY;
  }
  async connectedCallback() {
    this.updateScrollState();
    await waitForDomContentLoaded();
    super.connectedCallback();
  }
  // Adjust the spacer height on every render
  async updated(_changedProperties) {
    await waitForDomContentLoaded();
    super.updated(_changedProperties);
  }
  firstUpdated(_changedProperties) {
    SlotTool.observeEmptySlots(this);
  }
  render() {
    return b`
      <div id="wrapper" part="wrapper">
        <div id="spacer" part="spacer" ${n$2(this.spacerRef)}></div>
        <div id="navbar" part="navbar" ${n$2(this.navbarRef)}>
          <div id="brand" part="brand">
            <slot name="brand"></slot>
          </div>
          <div id="main">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
_init$d = __decoratorStart$d(_a$d);
_scrollThreshold = /* @__PURE__ */ new WeakMap();
__decorateElement$d(_init$d, 4, "scrollThreshold", _scrollThreshold_dec, NteNavbar, _scrollThreshold);
NteNavbar = __decorateElement$d(_init$d, 0, "NteNavbar", _NteNavbar_decorators, NteNavbar);
NteNavbar.styles = [r$6(style$h)];
__runInitializers$d(_init$d, 1, NteNavbar);
const style$g = "/* General Purpose SCSS Reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\na,\ni {\n  color: inherit;\n  text-decoration: none;\n}\n\nul,\nol {\n  list-style: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nslot {\n  display: contents; /* Allows slotted elements to inherit styles from parent */\n}\n\n:host {\n  --container-width: var(--nt-container-width, 100%);\n  --background: transparent;\n  --text-color: var(--nt-text);\n  --height: auto;\n  --brand-height: 80px;\n  display: block;\n  height: 100%;\n  width: 100vw;\n}\n\n:host(.hide-on-scroll) {\n  transition: max-height 0.3s ease-in-out;\n  max-height: 100px;\n}\n\n:host(.hide-on-scroll.is-scrolled) {\n  max-height: 0;\n  overflow: hidden;\n}\n\n:host(.brand-center) #container {\n  justify-content: space-between;\n  position: relative;\n}\n:host(.brand-center) #container #brand {\n  justify-content: center;\n  width: 100%;\n}\n:host(.brand-center) #container #nav {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n#main {\n  height: var(--height);\n  transition: height 0.2s ease-in-out;\n  overflow: visible;\n  width: 100%;\n  display: flex;\n  background: var(--background);\n}\n\n#container {\n  width: var(--container-width);\n  margin: 0 auto;\n  display: flex;\n}\n#container #brand:has(slot[empty]) {\n  display: none;\n}\n#container #brand {\n  min-width: 0;\n  flex-shrink: 1;\n  width: auto;\n  align-items: start;\n  display: flex;\n  height: 100%;\n  justify-items: center;\n}\n#container #nav {\n  display: flex;\n  flex-grow: 1;\n  justify-content: end;\n  align-items: center;\n  gap: 1rem;\n}";
var __create$c = Object.create;
var __defProp$g = Object.defineProperty;
var __getOwnPropDesc$h = Object.getOwnPropertyDescriptor;
var __knownSymbol$c = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$c = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$c = (target, value) => __defProp$g(target, "name", { value, configurable: true });
var __decoratorStart$c = (base) => [, , , __create$c((base == null ? void 0 : base[__knownSymbol$c("metadata")]) ?? null)];
var __decoratorStrings$c = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$c = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$c("Function expected") : fn;
var __decoratorContext$c = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$c[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$c("Already initialized") : fns.push(__expectFn$c(fn || null)) });
var __decoratorMetadata$c = (array, target) => __defNormalProp$c(target, __knownSymbol$c("metadata"), array[3]);
var __runInitializers$c = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) fns[i5].call(self);
  return value;
};
var __decorateElement$c = (array, flags, name, decorators, target, extra) => {
  var it, done, ctx, k3 = flags & 7, p2 = false;
  var j = 0;
  var extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (target = target.prototype, k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$h(target, name));
  __name$c(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$c(k3, name, done = {}, array[3], extraInitializers);
    it = (0, decorators[i5])(target, ctx), done._ = 1;
    __expectFn$c(it) && (target = it);
  }
  return __decoratorMetadata$c(array, target), desc && __defProp$g(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var _NteNavbarLine_decorators, _init$c, _a$c;
_NteNavbarLine_decorators = [t$1("nte-navbar-line")];
const _NteNavbarLine = class _NteNavbarLine extends (_a$c = i$2) {
  constructor() {
    super(...arguments);
    this._isScrolled = false;
  }
  static get is() {
    return "nte-navbar-line";
  }
  updateScrollState() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 1 && !this._isScrolled) {
      this.classList.add("is-scrolled");
      this._isScrolled = true;
    } else if (currentScrollY <= 1 && this._isScrolled) {
      this.classList.remove("is-scrolled");
      this._isScrolled = false;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("scroll", () => this.updateScrollState(), { passive: true });
  }
  async firstUpdated(_changedProperties) {
    SlotTool.observeEmptySlots(this);
    this.updateScrollState();
  }
  render() {
    return b`
      <div id="main" part="main">
        <div id="container" part="container">
          <div id="brand" part="brand">
            <slot name="brand"></slot>
          </div>
          <div id="nav" part="nav">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
_NteNavbarLine.styles = [r$6(style$g)];
let NteNavbarLine = _NteNavbarLine;
_init$c = __decoratorStart$c(_a$c);
NteNavbarLine = __decorateElement$c(_init$c, 0, "NteNavbarLine", _NteNavbarLine_decorators, NteNavbarLine);
__runInitializers$c(_init$c, 1, NteNavbarLine);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1 = "important", i4 = " !" + n$1, o$1 = e$2(class extends i$1 {
  constructor(t$12) {
    var _a3;
    if (super(t$12), t$12.type !== t.ATTRIBUTE || "style" !== t$12.name || ((_a3 = t$12.strings) == null ? void 0 : _a3.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return Object.keys(t2).reduce((e2, r2) => {
      const s2 = t2[r2];
      return null == s2 ? e2 : e2 + `${r2 = r2.includes("-") ? r2 : r2.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s2};`;
    }, "");
  }
  update(e2, [r2]) {
    const { style: s2 } = e2.element;
    if (void 0 === this.ft) return this.ft = new Set(Object.keys(r2)), this.render(r2);
    for (const t2 of this.ft) null == r2[t2] && (this.ft.delete(t2), t2.includes("-") ? s2.removeProperty(t2) : s2[t2] = null);
    for (const t2 in r2) {
      const e3 = r2[t2];
      if (null != e3) {
        this.ft.add(t2);
        const r3 = "string" == typeof e3 && e3.endsWith(i4);
        t2.includes("-") || r3 ? s2.setProperty(t2, r3 ? e3.slice(0, -11) : e3, r3 ? n$1 : "") : s2[t2] = e3;
      }
    }
    return E;
  }
});
const style$f = ":host {\n  display: block;\n  --animation-duration: 0.3s;\n  --auto-aspect-ratio: unset;\n  aspect-ratio: var(--auto-aspect-ratio);\n  height: auto;\n  width: auto;\n}\n\n.wrapper {\n  --orig-top: 0;\n  --orig-left: 0;\n  --orig-width: 0;\n  --orig-height: 0;\n  --self-top: 0;\n  --self-left: 0;\n  --self-width: 100%;\n  --self-height: 100%;\n  display: inline-block;\n  width: var(--self-width);\n  height: var(--self-height);\n  object-fit: contain;\n  overflow: visible;\n  position: fixed;\n  opacity: 0;\n}\n.wrapper.initialized {\n  opacity: 1;\n}\n.wrapper {\n  top: var(--self-top);\n  left: var(--self-left);\n  transition: all var(--animation-duration) ease-in-out;\n}\n.wrapper.inactive {\n  z-index: 99999;\n  top: calc(var(--orig-top));\n  left: calc(var(--orig-left));\n  width: var(--orig-width);\n  height: var(--orig-height);\n}\n.wrapper.inactive.done {\n  z-index: inherit;\n  visibility: hidden;\n}\n.wrapper > slot {\n  display: contents;\n}\n.wrapper ::slotted(*) {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transition: all 0.3s ease-in-out;\n}";
var __create$b = Object.create;
var __defProp$f = Object.defineProperty;
var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
var __knownSymbol$b = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$b = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$b = (target, value) => __defProp$f(target, "name", { value, configurable: true });
var __decoratorStart$b = (base) => [, , , __create$b((base == null ? void 0 : base[__knownSymbol$b("metadata")]) ?? null)];
var __decoratorStrings$b = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$b = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$b("Function expected") : fn;
var __decoratorContext$b = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$b[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$b("Already initialized") : fns.push(__expectFn$b(fn || null)) });
var __decoratorMetadata$b = (array, target) => __defNormalProp$b(target, __knownSymbol$b("metadata"), array[3]);
var __runInitializers$b = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$b = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$b[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$g(k3 < 4 ? target : { get [name]() {
    return __privateGet$9(this, extra);
  }, set [name](x2) {
    return __privateSet$9(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$b(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$b(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$b(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$9(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$9 : __privateMethod$9)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$9(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$b(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$b("Object expected");
    else __expectFn$b(fn = it.get) && (desc.get = fn), __expectFn$b(fn = it.set) && (desc.set = fn), __expectFn$b(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$b(array, target), desc && __defProp$f(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$9 = (obj, member, msg) => member.has(obj) || __typeError$b("Cannot " + msg);
var __privateIn$9 = (member, obj) => Object(obj) !== obj ? __typeError$b('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$9 = (obj, member, getter) => (__accessCheck$9(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$9 = (obj, member, value) => member.has(obj) ? __typeError$b("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$9 = (obj, member, value, setter) => (__accessCheck$9(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$9 = (obj, member, method) => (__accessCheck$9(obj, member, "access private method"), method);
var _onScroll_dec, _initialized_dec, _done_dec, _mode_dec, _active_dec, _brandSelector_dec, _a$b, _NteNavBrandRelocator_decorators, _init$b, _brandSelector, _active, _mode, _done, _initialized, _brandElement;
_NteNavBrandRelocator_decorators = [t$1("nte-nav-brand-relocator")];
class NteNavBrandRelocator extends (_a$b = EventBindingsMixin(LoggingMixin(i$2)), _brandSelector_dec = [n$4({ type: String, reflect: true })], _active_dec = [n$4({ type: Boolean, reflect: true })], _mode_dec = [n$4({ type: String, reflect: true })], _done_dec = [r$2()], _initialized_dec = [r$2()], _onScroll_dec = [Listen("scroll", { target: "window", options: { passive: true } })], _a$b) {
  constructor() {
    super(...arguments);
    __runInitializers$b(_init$b, 5, this);
    __privateAdd$9(this, _brandSelector, __runInitializers$b(_init$b, 8, this, ".brand-image")), __runInitializers$b(_init$b, 11, this);
    __privateAdd$9(this, _active, __runInitializers$b(_init$b, 12, this, null)), __runInitializers$b(_init$b, 15, this);
    __privateAdd$9(this, _mode, __runInitializers$b(_init$b, 16, this, "auto")), __runInitializers$b(_init$b, 19, this);
    __privateAdd$9(this, _done, __runInitializers$b(_init$b, 20, this, false)), __runInitializers$b(_init$b, 23, this);
    __privateAdd$9(this, _initialized, __runInitializers$b(_init$b, 24, this, false)), __runInitializers$b(_init$b, 27, this);
    __privateAdd$9(this, _brandElement, null);
  }
  onScroll() {
    if (this.mode !== "auto") {
      this.log("Mode is not auto, skipping scroll handling");
      return;
    }
    const active = window.scrollY <= 2;
    if (active !== this.active) {
      this.active = active;
    }
  }
  onanimationEnd() {
    this.log("Animation ended - finalizing state");
    if (!this.active) {
      this.brandElement.style.visibility = "visible";
      this.done = true;
    }
  }
  get brandElement() {
    if (!__privateGet$9(this, _brandElement)) {
      __privateSet$9(this, _brandElement, document.querySelector(this.brandSelector));
      if (!__privateGet$9(this, _brandElement)) {
        this.warn(`Brand element not found using selector: ${this.brandSelector}`);
      }
    }
    return __privateGet$9(this, _brandElement);
  }
  render() {
    var _a3;
    const brandRect = (_a3 = this.brandElement) == null ? void 0 : _a3.getBoundingClientRect();
    if (!brandRect) {
      return null;
    }
    const selfRect = this.getBoundingClientRect();
    const styles = {
      "--orig-top": brandRect.top + "px",
      "--orig-left": brandRect.left + "px",
      "--orig-width": brandRect.width + "px",
      "--orig-height": brandRect.height + "px",
      "--self-top": selfRect.top + "px",
      "--self-left": selfRect.left + "px",
      "--self-width": selfRect.width + "px",
      "--self-height": selfRect.height + "px"
    };
    return b`<div
      class="wrapper ${this.active ? "" : "inactive"} ${this.done ? "done" : ""} ${this.initialized ? "initialized" : ""}"
      style=${o$1(styles)}
      @transitionend=${() => this.onanimationEnd()}
    >
      <slot></slot>
    </div>`;
  }
  update(changedProperties) {
    var _a3;
    if (changedProperties.has("active")) {
      if (this.active === true) {
        (_a3 = __privateGet$9(this, _brandElement)) == null ? void 0 : _a3.style.setProperty("visibility", "hidden");
        this.done = false;
      }
    }
    super.update(changedProperties);
  }
  get ghostElement() {
    return this.querySelector("img");
  }
  async firstUpdated() {
    var _a3, _b2, _c2;
    if (this.brandElement === null) {
      this.warn(`Brand element not found using selector: ${this.brandSelector}`);
      return;
    }
    this.log("Waiting for Ghost element loading...", this.ghostElement);
    await waitForLoad(this.ghostElement);
    await sleep$1(10);
    while (!((_a3 = this.ghostElement) == null ? void 0 : _a3.naturalWidth)) {
      this.log("Waiting for Ghost element to have naturalWidth...", this.ghostElement);
      await sleep$1(100);
    }
    while (this.brandElement && !this.brandElement.getBoundingClientRect().width) {
      this.log("Waiting for Brand element to have width...", this.brandElement);
      await sleep$1(100);
    }
    const aspectRatio = ((_b2 = this.ghostElement) == null ? void 0 : _b2.naturalWidth) / ((_c2 = this.ghostElement) == null ? void 0 : _c2.naturalHeight);
    this.log("Setting Aspect ratio:", aspectRatio);
    this.style.setProperty("--auto-aspect-ratio", aspectRatio.toString());
    this.log("Brand element is now loaded:", this.brandElement);
    this.initialized = true;
    this.onScroll();
  }
  async connectedCallback() {
    await waitForDomContentLoaded();
    if (this.ghostElement === null) {
      const brand = this.brandElement;
      this.log("first connectedCallback() on Brand element:", brand);
      if (!brand) {
        this.warn(`Brand element not found using selector: ${this.brandSelector}`);
        return;
      }
      if (!this.hasChildNodes()) {
        const ghost = create_element("img", { src: brand.getAttribute("src") });
        this.appendChild(ghost);
        this.onScroll();
      }
    }
    super.connectedCallback();
  }
}
_init$b = __decoratorStart$b(_a$b);
_brandSelector = /* @__PURE__ */ new WeakMap();
_active = /* @__PURE__ */ new WeakMap();
_mode = /* @__PURE__ */ new WeakMap();
_done = /* @__PURE__ */ new WeakMap();
_initialized = /* @__PURE__ */ new WeakMap();
_brandElement = /* @__PURE__ */ new WeakMap();
__decorateElement$b(_init$b, 4, "brandSelector", _brandSelector_dec, NteNavBrandRelocator, _brandSelector);
__decorateElement$b(_init$b, 4, "active", _active_dec, NteNavBrandRelocator, _active);
__decorateElement$b(_init$b, 4, "mode", _mode_dec, NteNavBrandRelocator, _mode);
__decorateElement$b(_init$b, 4, "done", _done_dec, NteNavBrandRelocator, _done);
__decorateElement$b(_init$b, 4, "initialized", _initialized_dec, NteNavBrandRelocator, _initialized);
__decorateElement$b(_init$b, 1, "onScroll", _onScroll_dec, NteNavBrandRelocator);
NteNavBrandRelocator = __decorateElement$b(_init$b, 0, "NteNavBrandRelocator", _NteNavBrandRelocator_decorators, NteNavBrandRelocator);
NteNavBrandRelocator.styles = [r$6(style$f)];
__runInitializers$b(_init$b, 1, NteNavBrandRelocator);
const style$e = ":host {\n  --size: 40px;\n  --color: var(--nt-text, black);\n  --color-hover: var(--color);\n  --width: 4px;\n  height: var(--size);\n  width: var(--size);\n  display: block;\n}\n\n#button {\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n.hamburger {\n  display: block;\n  appearance: none;\n  border: 0 none;\n  background: none;\n  position: relative;\n  transition: transform 0.4s;\n}\n.hamburger:hover {\n  --color: var(--color-hover);\n}\n\n:host([open]) .hamburger .bar:nth-of-type(1) {\n  transform-origin: center center;\n  transform: translateY(calc(0.5em - var(--width) / 2)) rotate(45deg);\n}\n:host([open]) .hamburger .bar:nth-of-type(2) {\n  opacity: 0;\n}\n:host([open]) .hamburger .bar:nth-of-type(3) {\n  transform: translateY(calc(0.5em - var(--width) / 2)) rotate(-45deg);\n}\n\n:host(:not([open])) #button:hover .bar:nth-of-type(1) {\n  transform: translateY(calc(0.2em - var(--width) / 2));\n}\n:host(:not([open])) #button:hover .bar:nth-of-type(2) {\n  transform: translateY(calc(0.5em - var(--width) / 2));\n}\n:host(:not([open])) #button:hover .bar:nth-of-type(3) {\n  transform: translateY(calc(0.8em - var(--width) / 2));\n}\n\n.bar {\n  font-size: var(--size);\n}\n.bar:nth-of-type(1) {\n  transform: translateY(calc(0.25em - var(--width) / 2));\n}\n.bar:nth-of-type(2) {\n  transform: translateY(calc(0.5em - var(--width) / 2));\n}\n.bar:nth-of-type(3) {\n  transform: translateY(calc(0.75em - var(--width) / 2));\n}\n.bar {\n  height: var(--width);\n  width: var(--size);\n  display: block;\n  position: absolute;\n  top: 0;\n  background-color: var(--color);\n  transition: 0.4s;\n}";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a = Symbol.for(""), o = (t2) => {
  if ((t2 == null ? void 0 : t2.r) === a) return t2 == null ? void 0 : t2._$litStatic$;
}, l = /* @__PURE__ */ new Map(), n3 = (t2) => (r2, ...e2) => {
  const a2 = e2.length;
  let s2, i5;
  const n4 = [], u2 = [];
  let c2, $2 = 0, f2 = false;
  for (; $2 < a2; ) {
    for (c2 = r2[$2]; $2 < a2 && void 0 !== (i5 = e2[$2], s2 = o(i5)); ) c2 += s2 + r2[++$2], f2 = true;
    $2 !== a2 && u2.push(i5), n4.push(c2), $2++;
  }
  if ($2 === a2 && n4.push(r2[a2]), f2) {
    const t3 = n4.join("$$lit$$");
    void 0 === (r2 = l.get(t3)) && (n4.raw = n4, l.set(t3, r2 = n4)), e2 = u2;
  }
  return t2(r2, ...e2);
}, u$1 = n3(b);
var __defProp$e = Object.defineProperty;
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
  for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
    if (decorator = decorators[i5])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$e(target, key, result);
  return result;
};
let NteBurger = class extends i$2 {
  constructor() {
    super();
    this.open = false;
    this.text = "Menu";
    this.dataGroupName = "";
  }
  render() {
    return u$1` <button id="button" class="hamburger">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </button>`;
  }
  listenEvents(event) {
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
};
NteBurger.styles = [r$6(style$e)];
__decorateClass$4([
  n$4({ type: Boolean, attribute: "open", reflect: true })
], NteBurger.prototype, "open", 2);
__decorateClass$4([
  n$4({ type: String, reflect: true })
], NteBurger.prototype, "text", 2);
__decorateClass$4([
  n$4({ type: String, reflect: false, attribute: "data-group-name" })
], NteBurger.prototype, "dataGroupName", 2);
__decorateClass$4([
  eventListener(EVENT_NAME_GROUP_OPEN_CLOSE, document)
], NteBurger.prototype, "listenEvents", 1);
NteBurger = __decorateClass$4([
  t$1("nte-burger")
], NteBurger);
console.log("Loading nte-nav...");
const style$d = "/* General Purpose SCSS Reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\na,\ni {\n  color: inherit;\n  text-decoration: none;\n}\n\nul,\nol {\n  list-style: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nslot {\n  display: contents; /* Allows slotted elements to inherit styles from parent */\n}";
const resetStyle = style$d;
const style$c = '/* The ShadowDOM Styles */\n:host {\n  display: block;\n  /* Customizable variables (Bootstrap-ish defaults) */\n  --card-bg: var(--nt-body, #fff);\n  --card-color: var(--nt-dark, #212529);\n  --card-border-color: var(--nt-dark, #dee2e6);\n  --card-border-radius: var(--nt-border-radius);\n  --card-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  --image-aspect-ratio: 1/1; /* default aspect ratio */\n  --card-spacer-x: 1rem;\n  --card-spacer-y: 1rem;\n  /* container width hint for consistency */\n  --container-width: var(--nt-container-width);\n}\n\n/* Full-height mode */\n:host([fill]) {\n  height: 100%;\n}\n\n.card {\n  position: relative;\n  display: block;\n  background-color: var(--card-bg);\n  color: var(--card-color);\n  border: 1px solid var(--card-border-color);\n  border-radius: var(--card-border-radius);\n  box-shadow: var(--card-box-shadow);\n  overflow: hidden; /* ensure rounded corners clip child content */\n}\n.card[tabindex="0"] {\n  cursor: pointer;\n}\n\n/* Make the card a flex column in fill-mode so body can stretch */\n:host([fill]) .card {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n/* Sections */\n.card-header,\n.card-footer {\n  padding: var(--card-spacer-y) var(--card-spacer-x);\n  background-color: rgba(0, 0, 0, 0.03);\n}\n\n.card-header {\n  border-bottom: 1px solid var(--card-border-color);\n}\n\n.card-footer {\n  border-top: 1px solid var(--card-border-color);\n}\n\n.card-body {\n  padding: var(--card-spacer-y) var(--card-spacer-x);\n}\n\n/* Let body expand only in fill mode */\n:host([fill]) .card-body {\n  flex: 1 1 auto;\n  min-height: 0; /* avoid overflowing flex children */\n}\n\n/* Image section (top) */\n.card-img-top slot {\n  display: contents;\n}\n.card-img-top {\n  display: block;\n  width: 100%;\n  height: auto;\n  aspect-ratio: var(--image-aspect-ratio); /* default aspect ratio */\n  /* Ensure top corners stay rounded */\n  border-top-left-radius: var(--card-border-radius);\n  border-top-right-radius: var(--card-border-radius);\n}\n\n/* Normalize slotted image items */\n.card-img-top slot::slotted(img) {\n  display: block;\n  width: 100%;\n}\n\n.card-img-top slot::slotted(p) {\n  margin: 0; /* when image is wrapped in a paragraph */\n}\n\n/* hide wrappers when not used */\n[hidden] {\n  display: none !important;\n}';
var __create$a = Object.create;
var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __knownSymbol$a = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$a = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$a = (target, value) => __defProp$d(target, "name", { value, configurable: true });
var __decoratorStart$a = (base) => [, , , __create$a((base == null ? void 0 : base[__knownSymbol$a("metadata")]) ?? null)];
var __decoratorStrings$a = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$a = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$a("Function expected") : fn;
var __decoratorContext$a = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$a[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$a("Already initialized") : fns.push(__expectFn$a(fn || null)) });
var __decoratorMetadata$a = (array, target) => __defNormalProp$a(target, __knownSymbol$a("metadata"), array[3]);
var __runInitializers$a = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$a = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$a[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$e(k3 < 4 ? target : { get [name]() {
    return __privateGet$8(this, extra);
  }, set [name](x2) {
    return __privateSet$8(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$a(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$a(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$a(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$8(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$8 : __privateMethod$8)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$8(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$a(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$a("Object expected");
    else __expectFn$a(fn = it.get) && (desc.get = fn), __expectFn$a(fn = it.set) && (desc.set = fn), __expectFn$a(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$a(array, target), desc && __defProp$d(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$8 = (obj, member, msg) => member.has(obj) || __typeError$a("Cannot " + msg);
var __privateIn$8 = (member, obj) => Object(obj) !== obj ? __typeError$a('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$8 = (obj, member, getter) => (__accessCheck$8(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$8 = (obj, member, value) => member.has(obj) ? __typeError$a("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$8 = (obj, member, value, setter) => (__accessCheck$8(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$8 = (obj, member, method) => (__accessCheck$8(obj, member, "access private method"), method);
var __ariaLabel_dec, __role_dec, __hasFooter_dec, __hasImage_dec, __hasHeader_dec, _fill_dec, _a$a, _NteCardElement_decorators, _init$a, _fill, __hasHeader, __hasImage, __hasFooter, __role, __ariaLabel, _aHrefElmeent, _click, _onHeaderSlot, _onFooterSlot, _onImageSlot, _onLinkSlot, _NteCardElement_instances, isRenderableNode_fn;
_NteCardElement_decorators = [t$1("nte-card")];
class NteCardElement extends (_a$a = LoggingMixin(i$2), _fill_dec = [n$4({ type: Boolean, reflect: true })], __hasHeader_dec = [r$2()], __hasImage_dec = [r$2()], __hasFooter_dec = [r$2()], __role_dec = [r$2()], __ariaLabel_dec = [r$2()], _a$a) {
  constructor() {
    super(...arguments);
    __privateAdd$8(this, _NteCardElement_instances);
    __privateAdd$8(this, _fill, __runInitializers$a(_init$a, 8, this, false)), __runInitializers$a(_init$a, 11, this);
    __privateAdd$8(this, __hasHeader, __runInitializers$a(_init$a, 12, this, false)), __runInitializers$a(_init$a, 15, this);
    __privateAdd$8(this, __hasImage, __runInitializers$a(_init$a, 16, this, false)), __runInitializers$a(_init$a, 19, this);
    __privateAdd$8(this, __hasFooter, __runInitializers$a(_init$a, 20, this, false)), __runInitializers$a(_init$a, 23, this);
    __privateAdd$8(this, __role, __runInitializers$a(_init$a, 24, this, "")), __runInitializers$a(_init$a, 27, this);
    __privateAdd$8(this, __ariaLabel, __runInitializers$a(_init$a, 28, this, null)), __runInitializers$a(_init$a, 31, this);
    __privateAdd$8(this, _aHrefElmeent, null);
    __privateAdd$8(this, _click, () => {
      var _a3;
      (_a3 = __privateGet$8(this, _aHrefElmeent)) == null ? void 0 : _a3.click();
    });
    __privateAdd$8(this, _onHeaderSlot, (e2) => {
      const slot = e2.target;
      const assigned = slot.assignedNodes({ flatten: true }).filter((n4) => __privateMethod$8(this, _NteCardElement_instances, isRenderableNode_fn).call(this, n4));
      this._hasHeader = assigned.length > 0;
    });
    __privateAdd$8(this, _onFooterSlot, (e2) => {
      const slot = e2.target;
      const assigned = slot.assignedNodes({ flatten: true }).filter((n4) => __privateMethod$8(this, _NteCardElement_instances, isRenderableNode_fn).call(this, n4));
      this._hasFooter = assigned.length > 0;
    });
    __privateAdd$8(this, _onImageSlot, (e2) => {
      const slot = e2.target;
      const assigned = slot.assignedElements({ flatten: true });
      this._hasImage = assigned.length > 0;
    });
    __privateAdd$8(this, _onLinkSlot, async (e2) => {
      var _a3;
      const slot = e2.target;
      const assigned = slot.assignedElements({ flatten: true });
      if (assigned.length > 0) {
        this._role = "button";
        const el = assigned[0];
        if (el instanceof HTMLAnchorElement) {
          __privateSet$8(this, _aHrefElmeent, el);
          console.log("Found link element in slot:", el, el.getAttribute("aria-label"), el.textContent);
          this._ariaLabel = el.getAttribute("aria-label") || ((_a3 = el.textContent) == null ? void 0 : _a3.trim()) || "";
        } else {
          this.warn(
            "nte-card: The element assigned to the 'link' slot is not an anchor (<a>) element. Element found:",
            el
          );
          __privateSet$8(this, _aHrefElmeent, null);
        }
      }
    });
  }
  render() {
    return b`
      <div
        class="card"
        part="card"
        role=${this._role}
        @click=${() => __privateGet$8(this, _click).call(this)}
        @keydown=${(e2) => {
      if (e2.key === "Enter" || e2.key === " ") {
        e2.preventDefault();
        __privateGet$8(this, _click).call(this);
      }
    }}
        aria-label=${this._ariaLabel}
        tabindex=${this._role === "button" ? "0" : "-1"}
      >
        <div class="card-header" part="header" ?hidden=${!this._hasHeader}>
          <slot name="header" @slotchange=${__privateGet$8(this, _onHeaderSlot)}></slot>
        </div>

        <div class="card-img-top" part="image" ?hidden=${!this._hasImage}>
          <slot name="image" @slotchange=${__privateGet$8(this, _onImageSlot)}></slot>
        </div>

        <div class="card-body" part="body">
          <slot></slot>
        </div>

        <div class="card-footer" part="footer" ?hidden=${!this._hasFooter}>
          <slot name="footer" @slotchange=${__privateGet$8(this, _onFooterSlot)}></slot>
        </div>
        <div hidden>
          <slot name="link" @slotchange=${__privateGet$8(this, _onLinkSlot)}></slot>
        </div>
      </div>
    `;
  }
}
_init$a = __decoratorStart$a(_a$a);
_fill = /* @__PURE__ */ new WeakMap();
__hasHeader = /* @__PURE__ */ new WeakMap();
__hasImage = /* @__PURE__ */ new WeakMap();
__hasFooter = /* @__PURE__ */ new WeakMap();
__role = /* @__PURE__ */ new WeakMap();
__ariaLabel = /* @__PURE__ */ new WeakMap();
_aHrefElmeent = /* @__PURE__ */ new WeakMap();
_click = /* @__PURE__ */ new WeakMap();
_onHeaderSlot = /* @__PURE__ */ new WeakMap();
_onFooterSlot = /* @__PURE__ */ new WeakMap();
_onImageSlot = /* @__PURE__ */ new WeakMap();
_onLinkSlot = /* @__PURE__ */ new WeakMap();
_NteCardElement_instances = /* @__PURE__ */ new WeakSet();
isRenderableNode_fn = function(n4) {
  if (n4.nodeType === Node.TEXT_NODE) {
    return (n4.textContent || "").trim().length > 0;
  }
  return n4.nodeType === Node.ELEMENT_NODE;
};
__decorateElement$a(_init$a, 4, "fill", _fill_dec, NteCardElement, _fill);
__decorateElement$a(_init$a, 4, "_hasHeader", __hasHeader_dec, NteCardElement, __hasHeader);
__decorateElement$a(_init$a, 4, "_hasImage", __hasImage_dec, NteCardElement, __hasImage);
__decorateElement$a(_init$a, 4, "_hasFooter", __hasFooter_dec, NteCardElement, __hasFooter);
__decorateElement$a(_init$a, 4, "_role", __role_dec, NteCardElement, __role);
__decorateElement$a(_init$a, 4, "_ariaLabel", __ariaLabel_dec, NteCardElement, __ariaLabel);
NteCardElement = __decorateElement$a(_init$a, 0, "NteCardElement", _NteCardElement_decorators, NteCardElement);
NteCardElement.styles = [r$6(style$c), r$6(resetStyle)];
__runInitializers$a(_init$a, 1, NteCardElement);
const componentStyles = `/* The ShadowDOM Styles */
/* Refer to README.md for style guidelines */
:host {
  /* Public CSS variables (host API) */
  --nte-image-border-radius: var(--nt-radius-lg, 12px);
  --nte-image-shadow: var(--nt-shadow-md, 0 4px 20px rgba(0, 0, 0, 0.08));
  --nte-image-gap: var(--nt-base-gap, 8px);
  --nte-image-caption-fg: var(--nt-text, #333);
  --nte-image-caption-bg: var(--nt-body-tertiary, #e4e6ef);
  --nte-image-caption-border: var(--nt-border-subtle, rgba(0, 0, 0, 0.05));
  --nte-image-arrow-bg: rgba(0, 0, 0, 0.2);
  --nte-image-arrow-bg-hover: rgba(0, 0, 0, 0.5);
  --nte-image-progress-bg: var(--nt-text-on-primary, #ffffff);
  width: inherit;
  height: inherit;
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
  width: inherit;
  height: inherit;
  user-select: none;
  -webkit-user-drag: none;
  cursor: pointer;
  position: relative;
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
  opacity: 0;
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

.nte-image-root {
  height: 100%;
  position: relative;
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
:host([data-features*=fullsize]) ::slotted(img) {
  cursor: zoom-in;
  transition: transform 0.2s ease;
}

:host([data-features*=fullsize]) ::slotted(img):hover {
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
  position: relative;
}

/* Blend transition animation for slideshow */
:host(.slideshow[data-features*=blend]) ::slotted(img.active) {
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
}`;
const SlideShowTransitions = ["fade", "slide", "blend"];
const defaultSlideshowInterval = 5e3;
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
const getSlideshowStyles = (transition) => {
  return `
        nte-image img {
          transition: opacity 0.5s ease;
        }

        nte-image.slideshow img:not(.active) {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        nte-image.slideshow img.active {
          opacity: 1;
          z-index: 1;
          pointer-events: auto;
        }

        ${transition === "blend" ? `
        nte-image.slideshow img.active {
          animation: blendTransition 0.5s ease;
        }
        @keyframes blendTransition {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }
        ` : ""}
    `;
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
  closeBtn.innerHTML = "×";
  closeBtn.style.display = isMobileDevice ? "flex" : "none";
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
      var _a3;
      container.remove();
      if (!document.querySelector(".nxa-fullsize-container")) {
        (_a3 = document.getElementById("nxa-fullsize-styles")) == null ? void 0 : _a3.remove();
      }
      onClose == null ? void 0 : onClose();
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

        .nxa-fullsize-close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 44px;
            height: 44px;
            background-color: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 50%;
            color: white;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 2;
            backdrop-filter: blur(8px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            animation: nxa-fullsize-fade-in 0.5s ease-out 0.2s backwards;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .nxa-fullsize-close-btn:hover {
            background-color: rgba(255, 255, 255, 0.15);
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .nxa-fullsize-close-btn:active {
            transform: scale(0.95);
        }

        @media (max-width: 768px) {
            .nxa-fullsize-close-btn {
                top: 16px;
                right: 16px;
                width: 40px;
                height: 40px;
                font-size: 20px;
            }
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
    `;
};
var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
    if (decorator = decorators[i5])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$c(target, key, result);
  return result;
};
let NteImage = class extends i$2 {
  /**
   * Creates a new NteImage component.
   * Sets default width and height if not specified.
   */
  constructor() {
    super();
    this.globalDataCrop = {};
    this.childDataCrop = [];
    this.dataFeatures = [];
    this.slidesShowConfig = {};
    this.fullSize = false;
    this.roundBorders = false;
    this.interval = 0;
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
      this.childDataCrop = [];
      Array.from(this.children).forEach((child, index) => {
        this.childDataCrop[index] = cssToJson((child == null ? void 0 : child.getAttribute("data-crop")) || "");
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
    if (!this.style.width) {
      this.style.width = "100%";
    }
    if (!this.style.height) {
      this.style.height = "100%";
    }
    this.childDataCrop = [];
    this.slidesShowConfig = {};
    this.globalDataCrop = {};
    this.globalDataCrop = cssToJson(this.getAttribute("data-crop") || "");
    Array.from(this.children).forEach((child, index) => {
      this.childDataCrop[index] = cssToJson((child == null ? void 0 : child.getAttribute("data-crop")) || "");
    });
    this.initSlidesShowConfig();
    const children = Array.from(this.children);
    this.slidesShowConfig.showCaptions = children.some((child) => child.getAttribute("data-caption") !== null);
    this.fullSize = this.dataFeatures.includes("fullsize");
    this.debugLog("Fullsize property set", {
      fullSize: this.fullSize,
      dataFeatures: this.dataFeatures
    });
    this.roundBorders = this.dataFeatures.includes("round-borders");
    if (this.roundBorders && !this.currentCaption) {
      this.classList.add("round-borders");
    } else {
      this.classList.remove("round-borders");
    }
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
  /**
   * Lifecycle method called before each update
   * Handles changes to reactive properties
   */
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("dataFeatures")) {
      this.debugLog("dataFeatures changed", {
        oldValue: changedProperties.get("dataFeatures"),
        newValue: this.dataFeatures
      });
      this.debugLog("dataFeatures updated", {
        dataFeatures: this.dataFeatures,
        includesFullsize: this.dataFeatures.includes("fullsize")
      });
      const wasFullSize = this.fullSize;
      this.fullSize = this.dataFeatures.includes("fullsize");
      this.debugLog("Fullsize state changed", {
        wasFullSize,
        newFullSize: this.fullSize
      });
      if (wasFullSize !== this.fullSize) {
        if (this.fullSize) {
          this.initFullSize();
          this.debugLog("Fullsize feature enabled");
        } else {
          this.removeFullsizeClickHandlers();
          this.debugLog("Fullsize feature disabled");
        }
      }
      this.initSlidesShowConfig();
      this.roundBorders = this.dataFeatures.includes("round-borders");
      if (this.roundBorders && !this.currentCaption) {
        this.classList.add("round-borders");
      } else {
        this.classList.remove("round-borders");
      }
    }
  }
  /**
   * Lifecycle method called after the element's first render
   * Initializes features that require the DOM to be rendered
   */
  firstUpdated() {
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
    return b`
      <div class="nte-image-root" part="root">
        ${this.slidesShowConfig.showArrows && this.slidesShowConfig.enabled && !this.isMobileDevice ? b`
              <div class="navigation-arrows">
                <button class="arrow-button prev" @click=${this.prevSlide}>&lt;</button>
                <button class="arrow-button next" @click=${this.nextSlide}>&gt;</button>
              </div>
            ` : A}
        ${this.slidesShowConfig.showIndicators && this.slidesShowConfig.enabled ? b` <div class="indicators">${this.renderIndicators()}</div> ` : A}
        <div class="image-container">
          <slot @slotchange=${this.handleSlotChange}></slot>
          ${this.slidesShowConfig.enabled && this.isPaused ? b`
                <div class="pause-indicator">
                  <div class="pause-icon"></div>
                </div>
              ` : A}
        </div>
        <div class="caption-container">
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
   * Initializes slideshow configuration based on data-features
   */
  initSlidesShowConfig() {
    this.slidesShowConfig.enabled = this.dataFeatures.includes("slideshow");
    if (!this.slidesShowConfig.enabled) {
      const imageCount = Array.from(this.children).filter(
        (child) => child instanceof HTMLImageElement || child.tagName.toLowerCase() === "img"
      ).length;
      if (imageCount > 1) {
        this.slidesShowConfig.enabled = true;
        this.dataFeatures.push("slideshow");
        this.dataFeatures.push("arrows");
        this.dataFeatures.push("indicators");
      } else {
        return;
      }
    }
    this.slidesShowConfig.interval = this.interval || defaultSlideshowInterval;
    this.slidesShowConfig.pauseOnHover = !this.dataFeatures.includes("dont-pause-on-hover");
    const transition = SlideShowTransitions.find((t2) => this.dataFeatures.includes(t2));
    this.slidesShowConfig.transition = transition || "fade";
    this.slidesShowConfig.showArrows = this.dataFeatures.includes("arrows");
    this.slidesShowConfig.showIndicators = this.dataFeatures.includes("indicators");
    this.roundBorders = this.dataFeatures.includes("round-borders");
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
    const images = Array.from(this.querySelectorAll("img"));
    this.debugLog("Adding click handlers to images", {
      imageCount: images.length,
      fullSize: this.fullSize,
      dataFeatures: this.dataFeatures
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
   * Attaches slideshow styles to the document and initializes the first slide
   */
  attachSlideshowStyles() {
    const firstImg = Array.from(this.children).find((child) => child instanceof HTMLImageElement);
    if (firstImg) {
      firstImg.classList.add("active");
    }
    const styleId = `${this._instanceId}-slideshow-styles`;
    if (!document.getElementById(styleId)) {
      const globalStyle = document.createElement("style");
      globalStyle.id = styleId;
      globalStyle.textContent = getSlideshowStyles(this.slidesShowConfig.transition);
      document.head.appendChild(globalStyle);
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
    return images.map((_2, index) => {
      const isActive = index === this.getCurrentSlideIndex();
      return b`
        <div class="indicator-container">
          <div class="indicator ${isActive ? "active" : ""}" @click=${() => this.goToSlide(index)}>
            ${isActive ? b`<div class="progress-bar ${this.isPaused ? "paused" : ""}" style="width: ${this.slideProgress}%"></div>` : A}
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
NteImage.styles = [r$6(componentStyles)];
__decorateClass$3([
  n$4({ type: Object })
], NteImage.prototype, "globalDataCrop", 2);
__decorateClass$3([
  n$4({ type: Array })
], NteImage.prototype, "childDataCrop", 2);
__decorateClass$3([
  n$4({
    type: Array,
    attribute: "data-features",
    converter: {
      fromAttribute: (value) => {
        const result = (value == null ? void 0 : value.split(" ").filter(Boolean)) || [];
        return result;
      },
      toAttribute: (value) => {
        return value.join(" ");
      }
    }
  })
], NteImage.prototype, "dataFeatures", 2);
__decorateClass$3([
  n$4({ type: Object })
], NteImage.prototype, "slidesShowConfig", 2);
__decorateClass$3([
  n$4({ type: Boolean })
], NteImage.prototype, "fullSize", 2);
__decorateClass$3([
  n$4({ type: Boolean })
], NteImage.prototype, "roundBorders", 2);
__decorateClass$3([
  n$4({ type: Number })
], NteImage.prototype, "interval", 2);
__decorateClass$3([
  n$4({ type: Function })
], NteImage.prototype, "onSlideChange", 2);
__decorateClass$3([
  n$4({ type: Function })
], NteImage.prototype, "onFullscreenEnter", 2);
__decorateClass$3([
  n$4({ type: Function })
], NteImage.prototype, "onFullscreenExit", 2);
__decorateClass$3([
  n$4({ type: Function })
], NteImage.prototype, "onSlideshowPause", 2);
__decorateClass$3([
  n$4({ type: Function })
], NteImage.prototype, "onSlideshowResume", 2);
__decorateClass$3([
  n$4({ type: Function })
], NteImage.prototype, "onImageClick", 2);
__decorateClass$3([
  n$4({ type: Boolean })
], NteImage.prototype, "debug", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "isFullSizeActive", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "currentCaption", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "touchStartX", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "touchStartY", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "touchEndX", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "touchEndY", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "isMobileDevice", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "isPaused", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "slideProgress", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "isSwiping", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "swipeDistance", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "swipeThreshold", 2);
__decorateClass$3([
  r$2()
], NteImage.prototype, "swipeVelocityThreshold", 2);
NteImage = __decorateClass$3([
  t$1("nte-image")
], NteImage);
var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
    if (decorator = decorators[i5])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$b(target, key, result);
  return result;
};
let ProgressBar = class extends i$2 {
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
ProgressBar.styles = i$5`
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
  n$4({ type: String, attribute: "variant" })
], ProgressBar.prototype, "variant", 2);
__decorateClass$2([
  n$4({ type: String, attribute: "color" })
], ProgressBar.prototype, "color", 2);
__decorateClass$2([
  n$4({ type: String, attribute: "background-color" })
], ProgressBar.prototype, "backgroundColor", 2);
__decorateClass$2([
  n$4({ type: String, attribute: "height" })
], ProgressBar.prototype, "height", 2);
__decorateClass$2([
  n$4({ type: Number, attribute: "border-radius" })
], ProgressBar.prototype, "borderRadius", 2);
__decorateClass$2([
  n$4({ type: Number, attribute: "show-after-scroll" })
], ProgressBar.prototype, "showAfterScroll", 2);
__decorateClass$2([
  n$4({ type: Number, attribute: "transition-duration" })
], ProgressBar.prototype, "transitionDuration", 2);
__decorateClass$2([
  n$4({ type: String, attribute: "offset-selector" })
], ProgressBar.prototype, "offsetSelector", 2);
__decorateClass$2([
  n$4({ type: Number, attribute: "offset-top" })
], ProgressBar.prototype, "offsetTop", 2);
ProgressBar = __decorateClass$2([
  t$1("progress-bar")
], ProgressBar);
async function u(e2) {
  return new Promise((t2) => {
    window.setTimeout(() => t2(), e2);
  });
}
var p = (_c = class {
  static isCdnImage(t2) {
    return typeof t2 != "string" || t2.length === 0 ? false : _c.CDN_V2_REGEX.test(t2);
  }
  static decode(t2) {
    let n4 = t2.split("/");
    if (n4.length < 4) throw Error("Invalid url format");
    let r2 = n4[1], [i5, a2] = n4[2].split("_"), [o2, s2] = n4[3].split(".");
    return a2 = a2.replaceAll(/([a-zA-Z])/g, (t3) => "-" + (_c.WIDTH_SHORTCUTS[t3] ?? t3) + "-"), i5 = i5.replaceAll(/([a-zA-Z])/g, (t3) => _c.RATIO_SHORTCUTS[t3] ?? t3), {
      id: r2,
      aspectRatio: i5.split("-").join("/"),
      widths: a2.split("-").filter((e2) => e2.trim() !== ""),
      filename: o2,
      extensions: s2.split("_")
    };
  }
}, __publicField(_c, "RATIO_SHORTCUTS", {
  a: "1-1",
  b: "4-3",
  c: "3-2",
  d: "16-9",
  e: "21-9",
  B: "3-4",
  C: "2-3",
  D: "9-16",
  E: "9-21"
}), __publicField(_c, "WIDTH_SHORTCUTS", {
  a: "260",
  b: "414",
  c: "896",
  d: "1280",
  e: "1440",
  f: "1920",
  g: "2560"
}), __publicField(_c, "CDN_V2_REGEX", /(?:^|\/)v2\/[^\/]+\/[^\/]+_[^\/]+\/[^\/]+\.[a-z0-9_]+(?:$|[?#])/i), _c), m = class {
  constructor(e2) {
    __publicField(this, "rules");
    let t2 = (e2 ?? "").trim();
    if (!t2) {
      this.rules = [];
      return;
    }
    if (/^[0-9]+(?:\.[0-9]+)?$/.test(t2)) {
      let e3 = parseFloat(t2);
      if (!(e3 > 0)) throw Error("Scale must be a positive number");
      this.rules = [{
        minScreen: 0,
        scale: e3
      }];
      return;
    }
    let n4 = t2.split(";").map((e3) => e3.trim()).filter(Boolean);
    if (n4.length === 0) throw Error("Invalid adjust-sizes input");
    let r2 = /* @__PURE__ */ new Map();
    for (let e3 of n4) {
      let t3;
      if (t3 = e3.match(/^:([0-9]+(?:\.[0-9]+)?)$/), t3) {
        let n5 = parseFloat(t3[1]);
        if (!(n5 > 0)) throw Error(`Invalid scale in entry "${e3}"`);
        r2.set(0, n5);
        continue;
      }
      if (t3 = e3.match(/^([0-9]+):([0-9]+(?:\.[0-9]+)?)$/), t3) {
        let n5 = parseInt(t3[1], 10), i5 = parseFloat(t3[2]);
        if (!(i5 > 0)) throw Error(`Invalid scale in entry "${e3}"`);
        r2.set(n5, i5);
        continue;
      }
      throw Error(`Invalid adjust-sizes entry: "${e3}"`);
    }
    this.rules = Array.from(r2.entries()).sort((e3, t3) => e3[0] - t3[0]).map(([e3, t3]) => ({
      minScreen: e3,
      scale: t3
    }));
  }
  getSizeAdjustment(e2 = void 0) {
    e2 === void 0 && (e2 = window.innerWidth || document.documentElement.clientWidth || 0);
    let t2 = this.rules.length > 0 ? this.rules[this.rules.length - 1].scale : 1;
    for (let n4 of this.rules) if (e2 >= n4.minScreen) t2 = n4.scale;
    else break;
    return t2;
  }
}, h2 = (_d = class {
  constructor(e2, t2) {
    __publicField(this, "widths");
    __publicField(this, "ratio");
    __publicField(this, "extensions");
    this.id = e2, this.filename = t2, this.widths = [], this.extensions = [], this.ratio = "";
  }
  setAspectRatio(e2, t2) {
    this.ratio = `${e2}-${t2}`;
  }
  setReatio(e2) {
    e2 = e2.replaceAll("/", "-"), this.ratio = e2;
  }
  setWidths(e2) {
    return console.log("set widths", e2), this.widths = e2.map((e3) => e3.toString()), this;
  }
  addWidth(e2) {
    this.widths.push(e2.toString());
  }
  setExtensions(e2) {
    return this.extensions = e2, this;
  }
  toString() {
    let t2 = this.widths.join("-"), n4 = this.extensions.join("_"), r2 = this.ratio;
    return r2 = r2.replace(/([0-9\-]+)/, (t3) => _d.RATIO_SHORTCUTS[t3] ?? t3), t2 = t2.replace(/([0-9]+)/g, (t3) => _d.WIDTH_SHORTCUTS[t3] ?? t3), `v2/${this.id}/${r2}_${t2}/${this.filename}.${n4}`;
  }
}, __publicField(_d, "RATIO_SHORTCUTS", {
  "1-1": "a",
  "4-3": "b",
  "3-2": "c",
  "16-9": "d",
  "21-9": "e",
  "3-4": "B",
  "2-3": "C",
  "9-16": "D",
  "9-21": "E"
}), __publicField(_d, "WIDTH_SHORTCUTS", {
  260: "a",
  414: "b",
  896: "c",
  1280: "d",
  1440: "e",
  1920: "f",
  2560: "g"
}), _d), g = class {
  constructor(e2, t2, n4) {
    __publicField(this, "base");
    __publicField(this, "path");
    __publicField(this, "origUri");
    __publicField(this, "sizeAdjustment", 1);
    __publicField(this, "debug", false);
    this.image = e2, this.logger = n4;
    let r2 = e2.getAttribute("data-src") || e2.getAttribute("src");
    n4.debug("Constructor image with URI: " + r2, e2), this.origUri = r2, r2.replace(/^(.*?\/)(v2\/.*)$/, (e3, t3, n5) => (this.base = t3, this.path = n5, ""));
    let i5 = e2.getAttribute("data-size-adjust");
    if (i5) try {
      t2 = new m(i5).getSizeAdjustment();
    } catch (t3) {
      n4.error(`Failed to parse attribute 'data-size-adjust="${i5}"' for image`, e2, t3);
    }
    this.sizeAdjustment = t2;
    let a2 = p.decode(this.path);
    if (this.setOptimalImageDimensions(a2), !r2.endsWith(".svg")) {
      if (this.image.getAttribute("loading") === "eager") {
        this.loadHiRes(a2);
        return;
      }
      (async () => {
        await this.image.decode().catch(() => {
        }), this.loadHiRes(a2);
      })();
    }
  }
  reload() {
    let e2 = p.decode(this.path);
    this.loadHiRes(e2);
  }
  async loadHiRes(e2) {
    if (await waitForLoad(), await waitForLoad(this.image), await u(40), !this.image.isConnected) return;
    let t2 = null, n4 = window.innerWidth || document.documentElement.clientWidth, i5 = t2 = this.image.getBoundingClientRect().width;
    (t2 === 0 || t2 === null) && (t2 = n4), t2 = Math.round(t2 * this.sizeAdjustment);
    let a2 = parseInt(e2.widths[0]);
    for (let n5 of e2.widths) {
      let e3 = parseInt(n5);
      if (e3 < t2) break;
      a2 = e3;
    }
    this.logger.debug("MicxCdnImgElement: Best fitting width for " + e2.filename + " is " + a2 + "px (clientBoundingRect = " + i5 + " windowWidth=" + n4 + " px, sizeAdjustment=" + this.sizeAdjustment + ")");
    let o2 = new h2(e2.id, e2.filename);
    o2.setReatio(e2.aspectRatio), o2.addWidth(a2), o2.setExtensions(e2.extensions);
    let s2 = this.base + "/" + o2.toString();
    this.image.style.backgroundSize = "cover", this.image.style.backgroundImage = "url(" + this.origUri + ")", this.image.setAttribute("src", s2), this.image.addEventListener("load", () => {
      this.image.style.backgroundImage = "none", this.image.classList.add("loaded");
    });
  }
  setOptimalImageDimensions(e2) {
    let t2 = e2.aspectRatio.split("/").map((e3) => parseInt(e3)), n4 = t2[0] / t2[1], r2 = parseInt(e2.widths[0]);
    for (let t3 of e2.widths) {
      let e3 = parseInt(t3);
      if (e3 < innerWidth) break;
      r2 = e3;
    }
    this.image.setAttribute("width", r2.toString()), this.image.setAttribute("height", (r2 / n4).toString()), this.image.classList.add("micx-image-loader"), this.image.hasAttribute("alt") === false && this.image.setAttribute("alt", e2.filename);
  }
}, _ = new Debouncer$1(500, 1e3), v = class extends LoggingMixin(HTMLElement) {
  constructor() {
    super(...arguments);
    __publicField(this, "_observer");
    __publicField(this, "_seen", /* @__PURE__ */ new WeakSet());
    __publicField(this, "_imageDefaultSizeAdjustment", 1);
    __publicField(this, "_windowWidth", window.innerWidth);
    __publicField(this, "onResize", async () => {
      await _.wait(), this._windowWidth !== window.innerWidth && (this._windowWidth = window.innerWidth, this.log("Resize event detected, reprocessing images"), this.querySelectorAll("img").forEach((e2) => {
        let t2 = e2.getAttribute("data-src") || e2.src || "";
        if (!p.isCdnImage(t2)) {
          this.debug("Image is not a CDN image, skipping:", e2);
          return;
        }
        new g(e2, this._imageDefaultSizeAdjustment, this.getLogger());
      }));
    });
  }
  static get observedAttributes() {
    return ["default-size-adjust"];
  }
  async connectedCallback() {
    this.debug("MicxCdnImageLoader connected to DOM"), await waitForDomContentLoaded$1(), this.updateDefaultSizeAdjustment(), this.startObserving(), window.addEventListener("resize", this.onResize);
  }
  disconnectedCallback() {
    this.stopObserving(), window.removeEventListener("resize", this.onResize);
  }
  startObserving() {
    this._observer || (this.querySelectorAll("img").forEach((e2) => this._enqueue(e2)), this._observer = new MutationObserver((e2) => {
      for (let t2 of e2) if (!(t2.type !== "childList" || t2.addedNodes.length === 0)) for (let e3 = 0; e3 < t2.addedNodes.length; e3++) {
        let n4 = t2.addedNodes[e3];
        if (n4.nodeType !== Node.ELEMENT_NODE) continue;
        let r2 = n4, i5 = Array.from(r2.getElementsByTagName("img"));
        i5.length > 0 && i5.forEach((e4) => this._enqueue(e4)), r2.tagName === "IMG" && this._enqueue(r2);
      }
    }), this._observer.observe(this, {
      childList: true,
      subtree: true
    }));
  }
  stopObserving() {
    this._observer && (this._observer = (this._observer.disconnect(), void 0));
  }
  _enqueue(e2) {
    this._seen.has(e2) || (this._seen.add(e2), queueMicrotask(() => this.onImageAdded(e2)));
  }
  updateDefaultSizeAdjustment() {
    let e2 = this.getAttribute("default-size-adjust");
    if (!e2) {
      this._imageDefaultSizeAdjustment = 1;
      return;
    }
    try {
      this._imageDefaultSizeAdjustment = new m(e2).getSizeAdjustment();
    } catch (t2) {
      this.error("Failed to parse default-size-adjust=", e2, t2), this._imageDefaultSizeAdjustment = 1;
    }
  }
  attributeChangedCallback(e2, t2, n4) {
    this.debug("Properties changed:", e2), e2 === "default-size-adjust" && this.updateDefaultSizeAdjustment();
  }
  onImageAdded(e2) {
    if (this.debug("onImageAdded image:", e2), !p.isCdnImage(e2.src || e2.getAttribute("data-src"))) {
      this.debug("Image is not a CDN image, skipping:", e2);
      return;
    }
    if (e2.hasAttribute("loading") || e2.setAttribute("loading", "lazy"), !e2.hasAttribute("src")) {
      if (!e2.hasAttribute("data-src")) {
        this.warn("Image without src or data-src found, skipping:", e2);
        return;
      }
      e2.src = e2.getAttribute("data-src");
    }
    e2.hasAttribute("data-src") || e2.setAttribute("data-src", e2.src), this.debug("new CDN image:", e2, "with default size adjustment:", this._imageDefaultSizeAdjustment), new g(e2, this._imageDefaultSizeAdjustment, this.getLogger());
  }
};
customElements.define("micx-cdn-image-loader", v);
const defaultNtlFeatures = {
  ...defaultNteFeatures,
  subLayoutApply: false
};
function nextrap_layout(features2 = {}) {
  const mergedFeatures = { ...defaultNtlFeatures, ...features2 };
  let c2 = nextrap_element(mergedFeatures);
  if (mergedFeatures.subLayoutApply) {
    c2 = SubLayoutApplyMixin(c2);
  }
  return c2;
}
const style$b = ":host {\n  --gap: var(--nt-gap);\n  --container-width: var(--nt-container-width, 100%);\n  --container-border: var(--nt-border-width) solid var(--nt-primary-subtle);\n  --container-bg: var(--nt-light);\n  --padding-x: var(--nt-default-gap-x);\n  --padding-y: var(--nt-default-gap-y);\n  --cols: 6;\n  --breakpoint: md;\n  display: block;\n}\n\n#container {\n  margin: 0 auto;\n  width: var(--container-width);\n  background: var(--container-bg);\n  border: var(--container-border);\n}\n\n#wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: var(--gap);\n  align-items: stretch;\n}\n\n#main {\n  order: 2;\n  padding: var(--padding-y) var(--padding-x);\n}\n\n#aside {\n  order: 1;\n}\n\n:host([mode=desktop]) #wrapper {\n  position: relative;\n  flex-direction: row;\n}\n:host([mode=desktop]) #wrapper:has(#aside > .slot-empty) {\n  flex-direction: column;\n}\n:host([mode=desktop]) #wrapper:has(#aside > .slot-empty) #main {\n  width: 100%;\n}\n:host([mode=desktop]) #main {\n  order: 1;\n  width: calc(100% * var(--cols, 1) / 12);\n}\n:host([mode=desktop]) #aside {\n  order: 2;\n  width: calc(100% * (12 - var(--cols, 1)) / 12);\n}\n:host([mode=desktop]) #aside:has(.slot-empty) {\n  display: none;\n}\n:host([mode=desktop]):host(.reverse) #main {\n  order: 2;\n}\n:host([mode=desktop]):host(.reverse) #aside {\n  order: 1;\n}";
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
    if (decorator = decorators[i5])
      result = decorator(result) || result;
  return result;
};
let Ntl2Col = class extends nextrap_layout({
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
        <div part="top">
          <slot name="top" data-query=":scope > .top"></slot>
        </div>
        <div part="wrapper" id="wrapper">
          <div part="main" id="main">
            <slot></slot>
          </div>
          <div part="aside" id="aside">
            <slot name="aside" data-query=":scope > .aside | :scope > p:has(img)"></slot>
          </div>
        </div>
        <div part="bottom">
          <slot name="bottom" data-query=":scope > .bottom"></slot>
        </div>
      </div>
    `;
  }
};
Ntl2Col.styles = [r$6(resetStyle), r$6(style$b)];
Ntl2Col = __decorateClass$1([
  t$1("ntl-2col")
], Ntl2Col);
const style$a = "/* Shadow DOM Styles for hero */\n:host {\n  --bg-color: var(--nt-body-teritary, #e4e6ef);\n  --container-width: var(--nt-container-width, 100%);\n  --height-offset: 0px;\n  --min-height: 500px;\n}\n\n#root {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - var(--height-offset, 0px));\n  max-height: calc(100vh - var(--height-offset, 0px));\n  display: grid;\n  min-height: var(--min-height);\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n}\n\n#wrapper {\n  padding-top: var(--top-offset);\n  width: var(--container-width);\n  margin: 0 auto;\n  grid-row: 1;\n  grid-column: 1;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#wrapper #title, #wrapper #top-title {\n  text-align: center;\n}\n#wrapper > #title,\n#wrapper #content {\n  flex-grow: 1;\n}\n#wrapper > * {\n  display: flex;\n  align-items: center;\n}\n#wrapper > :has(.slot-empty) {\n  display: none !important;\n}\n\n#background {\n  grid-row: 1;\n  grid-column: 1;\n  background-color: var(--bg-color);\n  z-index: 0;\n  height: 100%;\n  position: absolute;\n  inset: 0;\n}\n\n.background::slotted(*) {\n  pointer-events: auto;\n}\n\n#content {\n  height: 100%;\n}";
var __create$9 = Object.create;
var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __knownSymbol$9 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$9 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$9 = (target, value) => __defProp$a(target, "name", { value, configurable: true });
var __decoratorStart$9 = (base) => [, , , __create$9((base == null ? void 0 : base[__knownSymbol$9("metadata")]) ?? null)];
var __decoratorStrings$9 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$9 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$9("Function expected") : fn;
var __decoratorContext$9 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$9[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$9("Already initialized") : fns.push(__expectFn$9(fn || null)) });
var __decoratorMetadata$9 = (array, target) => __defNormalProp$9(target, __knownSymbol$9("metadata"), array[3]);
var __runInitializers$9 = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) fns[i5].call(self);
  return value;
};
var __decorateElement$9 = (array, flags, name, decorators, target, extra) => {
  var it, done, ctx, k3 = flags & 7, p2 = false;
  var j = 0;
  var extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (target = target.prototype, k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$a(target, name));
  __name$9(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$9(k3, name, done = {}, array[3], extraInitializers);
    it = (0, decorators[i5])(target, ctx), done._ = 1;
    __expectFn$9(it) && (target = it);
  }
  return __decoratorMetadata$9(array, target), desc && __defProp$a(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var _NtlHero_decorators, _init$9, _a$9;
_NtlHero_decorators = [t$1("ntl-hero")];
const _NtlHero = class _NtlHero extends (_a$9 = SlotVisibilityMixin(SubLayoutApplyMixin(LoggingMixin(i$2)))) {
  async updated(changedProperties) {
    super.updated(changedProperties);
    await sleep$1(1e3);
    this.style.setProperty("--height-offset", `${this.offsetTop}px`);
  }
  render() {
    return b`
      <div part="root" id="root">
        <div id="background">
          <slot name="bg"></slot>
        </div>

        <div id="wrapper">
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
_NtlHero.styles = [r$6(style$a), r$6(resetStyle)];
let NtlHero = _NtlHero;
_init$9 = __decoratorStart$9(_a$9);
NtlHero = __decorateElement$9(_init$9, 0, "NtlHero", _NtlHero_decorators, NtlHero);
__runInitializers$9(_init$9, 1, NtlHero);
const style$9 = "/* The ShadowDOM Styles */\n#wrapper {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr 1fr;\n}\n\n#image {\n  width: 100%;\n  height: 100%;\n  grid-row: 1;\n  grid-column: 2;\n  z-index: 0;\n}\n\n#gradient {\n  width: 100%;\n  height: 100%;\n  grid-row: 1;\n  grid-column: 2;\n  z-index: 1;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  grid-row: 1;\n  grid-column: 1;\n}";
var __create$8 = Object.create;
var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __knownSymbol$8 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$8 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$8 = (target, value) => __defProp$9(target, "name", { value, configurable: true });
var __decoratorStart$8 = (base) => [, , , __create$8((base == null ? void 0 : base[__knownSymbol$8("metadata")]) ?? null)];
var __decoratorStrings$8 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$8 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$8("Function expected") : fn;
var __decoratorContext$8 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$8[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$8("Already initialized") : fns.push(__expectFn$8(fn || null)) });
var __decoratorMetadata$8 = (array, target) => __defNormalProp$8(target, __knownSymbol$8("metadata"), array[3]);
var __runInitializers$8 = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$8 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$8[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$9(k3 < 4 ? target : { get [name]() {
    return __privateGet$7(this, extra);
  }, set [name](x2) {
    return __privateSet$7(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$8(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$8(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$8(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$7(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$7 : __privateMethod$7)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$7(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$8(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$8("Object expected");
    else __expectFn$8(fn = it.get) && (desc.get = fn), __expectFn$8(fn = it.set) && (desc.set = fn), __expectFn$8(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$8(array, target), desc && __defProp$9(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$7 = (obj, member, msg) => member.has(obj) || __typeError$8("Cannot " + msg);
var __privateIn$7 = (member, obj) => Object(obj) !== obj ? __typeError$8('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$7 = (obj, member, getter) => (__accessCheck$7(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$7 = (obj, member, value) => member.has(obj) ? __typeError$8("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$7 = (obj, member, value, setter) => (__accessCheck$7(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$7 = (obj, member, method) => (__accessCheck$7(obj, member, "access private method"), method);
var _name_dec$3, _a$8, _NtlSlideElement_decorators, _init$8, _name$3;
_NtlSlideElement_decorators = [t$1("ntl-slide")];
class NtlSlideElement extends (_a$8 = SlotVisibilityMixin(
  SubLayoutApplyMixin(EventBindingsMixin(LoggingMixin(i$2)))
), _name_dec$3 = [n$4({ type: String, reflect: true })], _a$8) {
  constructor() {
    super(...arguments);
    __privateAdd$7(this, _name$3, __runInitializers$8(_init$8, 8, this, "ntl-slide")), __runInitializers$8(_init$8, 11, this);
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
_name$3 = /* @__PURE__ */ new WeakMap();
__decorateElement$8(_init$8, 4, "name", _name_dec$3, NtlSlideElement, _name$3);
NtlSlideElement = __decorateElement$8(_init$8, 0, "NtlSlideElement", _NtlSlideElement_decorators, NtlSlideElement);
NtlSlideElement.styles = [r$6(style$9), r$6(resetStyle)];
__runInitializers$8(_init$8, 1, NtlSlideElement);
const style$8 = "/* The ShadowDOM Styles */\n:host {\n  --aspect-ratio: 16/9;\n  --nav-inset: 0;\n  --nav-button-size: 48px;\n  --nav-button-bg: color-mix(in srgb, var(--nt-primary, #000000), transparent 50%);\n  --nav-button-color: var(--nt-teritary, #fff);\n  --indicator-size: 12px;\n  --indicator-gap: 8px;\n  --indicator-color: var(--nt-primary-subtle, rgba(255, 255, 255, 0.5));\n  --indicator-active-color: var(--nt-primary, #fff);\n  --transition-duration: 0.5s;\n  display: block;\n}\n\n#wrapper {\n  width: 100%;\n  aspect-ratio: var(--aspect-ratio);\n  display: block;\n  position: relative;\n}\n\n#content {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  place-items: center;\n  justify-items: center;\n  align-items: center;\n}\n#content > ::slotted(.hide) {\n  display: none !important;\n}\n#content > ::slotted(*) {\n  grid-column: 1;\n  grid-row: 1;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity var(--transition-duration) ease-in-out, visibility var(--transition-duration) ease-in-out;\n}\n#content > ::slotted(.active) {\n  opacity: 1;\n  visibility: visible;\n}\n#content > ::slotted(.prev), #content > ::slotted(.next) {\n  opacity: 0;\n  visibility: hidden;\n}\n\n#navigation {\n  z-index: 110;\n  position: absolute;\n  inset: var(--nav-inset);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  pointer-events: none;\n  padding: 0 1rem;\n}\n\n#navigation button {\n  pointer-events: auto;\n  width: var(--nav-button-size);\n  height: var(--nav-button-size);\n  border: none;\n  border-radius: 50%;\n  background: var(--nav-button-bg);\n  color: var(--nav-button-color);\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: background var(--transition-duration);\n}\n#navigation button:focus-visible {\n  outline: 2px solid var(--nav-button-color);\n  outline-offset: 2px;\n}\n\n#indicator {\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: var(--indicator-gap);\n  z-index: 100;\n}\n\n#indicator button {\n  width: var(--indicator-size);\n  height: var(--indicator-size);\n  border: none;\n  border-radius: 50%;\n  background: var(--indicator-color);\n  cursor: pointer;\n  padding: 0;\n  transition: background var(--transition-duration), transform var(--transition-duration);\n}\n#indicator button:hover {\n  transform: scale(1.2);\n}\n#indicator button[active] {\n  background: var(--indicator-active-color);\n}\n#indicator button:focus-visible {\n  outline: 2px solid var(--indicator-active-color);\n  outline-offset: 2px;\n}";
var __create$7 = Object.create;
var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __knownSymbol$7 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$7 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$7 = (target, value) => __defProp$8(target, "name", { value, configurable: true });
var __decoratorStart$7 = (base) => [, , , __create$7((base == null ? void 0 : base[__knownSymbol$7("metadata")]) ?? null)];
var __decoratorStrings$7 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$7 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$7("Function expected") : fn;
var __decoratorContext$7 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$7[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$7("Already initialized") : fns.push(__expectFn$7(fn || null)) });
var __decoratorMetadata$7 = (array, target) => __defNormalProp$7(target, __knownSymbol$7("metadata"), array[3]);
var __runInitializers$7 = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$7 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$7[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$8(k3 < 4 ? target : { get [name]() {
    return __privateGet$6(this, extra);
  }, set [name](x2) {
    return __privateSet$6(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$7(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$7(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$7(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$6(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$6 : __privateMethod$6)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$6(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$7(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$7("Object expected");
    else __expectFn$7(fn = it.get) && (desc.get = fn), __expectFn$7(fn = it.set) && (desc.set = fn), __expectFn$7(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$7(array, target), desc && __defProp$8(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$6 = (obj, member, msg) => member.has(obj) || __typeError$7("Cannot " + msg);
var __privateIn$6 = (member, obj) => Object(obj) !== obj ? __typeError$7('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$6 = (obj, member, getter) => (__accessCheck$6(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$6 = (obj, member, value) => member.has(obj) ? __typeError$7("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$6 = (obj, member, value, setter) => (__accessCheck$6(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$6 = (obj, member, method) => (__accessCheck$6(obj, member, "access private method"), method);
var _slottedElements_dec, _autoplayInterval_dec, _autoplay_dec, _activeIndex_dec, _name_dec$2, _a$7, _NtlSliderElement_decorators, _init$7, _name$2, _activeIndex, _autoplay, _autoplayInterval, _slides, _slottedElements;
_NtlSliderElement_decorators = [t$1("ntl-slider")];
class NtlSliderElement extends (_a$7 = SlotVisibilityMixin(
  SubLayoutApplyMixin(EventBindingsMixin(LoggingMixin(i$2)))
), _name_dec$2 = [n$4({ type: String, reflect: true })], _activeIndex_dec = [n$4({ type: Number, reflect: true, attribute: "active-index" })], _autoplay_dec = [n$4({ type: Boolean, reflect: true })], _autoplayInterval_dec = [n$4({ type: Number, attribute: "autoplay-interval" })], _slottedElements_dec = [o$4()], _a$7) {
  constructor() {
    super(...arguments);
    __privateAdd$6(this, _name$2, __runInitializers$7(_init$7, 8, this, "ntl-slider")), __runInitializers$7(_init$7, 11, this);
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
  set slides(_2) {
    __privateSet$6(this, _slides, _2);
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
    var _a3;
    const container = (_a3 = this.shadowRoot) == null ? void 0 : _a3.getElementById("indicator");
    if (!container) return;
    container.innerHTML = "";
    this.slides.forEach((_2, index) => {
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
              data-set-attribute-layout="ntl-slide"
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
_name$2 = /* @__PURE__ */ new WeakMap();
_activeIndex = /* @__PURE__ */ new WeakMap();
_autoplay = /* @__PURE__ */ new WeakMap();
_autoplayInterval = /* @__PURE__ */ new WeakMap();
_slides = /* @__PURE__ */ new WeakMap();
_slottedElements = /* @__PURE__ */ new WeakMap();
__decorateElement$7(_init$7, 4, "name", _name_dec$2, NtlSliderElement, _name$2);
__decorateElement$7(_init$7, 4, "activeIndex", _activeIndex_dec, NtlSliderElement, _activeIndex);
__decorateElement$7(_init$7, 4, "autoplay", _autoplay_dec, NtlSliderElement, _autoplay);
__decorateElement$7(_init$7, 4, "autoplayInterval", _autoplayInterval_dec, NtlSliderElement, _autoplayInterval);
__decorateElement$7(_init$7, 4, "slottedElements", _slottedElements_dec, NtlSliderElement, _slottedElements);
NtlSliderElement = __decorateElement$7(_init$7, 0, "NtlSliderElement", _NtlSliderElement_decorators, NtlSliderElement);
NtlSliderElement.styles = [r$6(style$8), r$6(resetStyle)];
__runInitializers$7(_init$7, 1, NtlSliderElement);
const style$7 = "/* The ShadowDOM Styles */\n:host {\n  --container-bg: transparent;\n  --container-border: none;\n  --container-width: var(--nt-container-width) /* Refer to README.md for style guidelines */;\n  --default-cols: var(--cols);\n  --cols: 6;\n  --gutter-x: var(--nt-gap);\n  --gutter-y: var(--nt-gap);\n  --breakpoint: xl;\n  display: block;\n}\n\n#container {\n  margin: 0 auto;\n  width: var(--container-width);\n  background: var(--container-bg);\n  border: var(--container-border);\n}\n\n#main {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: var(--gutter-y);\n}\n#main ::slotted(*) {\n  width: calc(8.3333333333% * var(--cols, 1) - var(--gutter-x));\n}\n\n:host([mode=desktop]) #main {\n  margin-left: calc(var(--gutter-x) / -2);\n  width: calc(100% + var(--gutter-x));\n  flex-direction: row;\n}\n:host([mode=desktop]) #main ::slotted(*) {\n  --cols: var(--default-cols);\n}\n\n:host([mode=mobile]) #main {\n  flex-direction: column;\n}\n:host([mode=mobile]) #main ::slotted(*) {\n  --cols: 12 !important;\n  --gutter-x: 0px;\n}";
var __create$6 = Object.create;
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __knownSymbol$6 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$6 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$6 = (target, value) => __defProp$7(target, "name", { value, configurable: true });
var __decoratorStart$6 = (base) => [, , , __create$6((base == null ? void 0 : base[__knownSymbol$6("metadata")]) ?? null)];
var __decoratorStrings$6 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$6 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$6("Function expected") : fn;
var __decoratorContext$6 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$6[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$6("Already initialized") : fns.push(__expectFn$6(fn || null)) });
var __decoratorMetadata$6 = (array, target) => __defNormalProp$6(target, __knownSymbol$6("metadata"), array[3]);
var __runInitializers$6 = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) fns[i5].call(self);
  return value;
};
var __decorateElement$6 = (array, flags, name, decorators, target, extra) => {
  var it, done, ctx, k3 = flags & 7, p2 = false;
  var j = 0;
  var extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (target = target.prototype, k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$7(target, name));
  __name$6(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$6(k3, name, done = {}, array[3], extraInitializers);
    it = (0, decorators[i5])(target, ctx), done._ = 1;
    __expectFn$6(it) && (target = it);
  }
  return __decoratorMetadata$6(array, target), desc && __defProp$7(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var _NtlCardRowElement_decorators, _init$6, _a$6;
_NtlCardRowElement_decorators = [t$1("ntl-card-row")];
const _NtlCardRowElement = class _NtlCardRowElement extends (_a$6 = nextrap_layout({
  breakpoints: true,
  subLayoutApply: true
})) {
  render() {
    return b`
      <div part="container" id="container">
        <div id="header" part="header">
          <slot
            name="header"
            data-query=":scope > .header | :scope > h1,:scope > h2,:scope > h3,:scope > h4,:scope > h5,:scope > h6"
          ></slot>
        </div>
        <div part="main" id="main">
          <slot data-query=":scope > section" data-set-attribute-layout="ntl-card" data-query-opt=""></slot>
        </div>
        <div id="footer" part="footer">
          <slot name="footer" data-query=":scope > footer"></slot>
        </div>
      </div>
    `;
  }
};
_NtlCardRowElement.styles = [r$6(style$7), r$6(resetStyle)];
let NtlCardRowElement = _NtlCardRowElement;
_init$6 = __decoratorStart$6(_a$6);
NtlCardRowElement = __decorateElement$6(_init$6, 0, "NtlCardRowElement", _NtlCardRowElement_decorators, NtlCardRowElement);
__runInitializers$6(_init$6, 1, NtlCardRowElement);
const style$6 = "/* The ShadowDOM Styles */\n:host {\n  --border-color: var(--nt-primary);\n  --background-color: unset;\n  --border-radius: var(--nt-border-radius);\n  --border: var(--nt-border-width) solid var(--border-color);\n  --x-padding: var(--nt-default-gap-x);\n  --y-padding: var(--nt-default-gap-y);\n  --image-aspect-ratio: 16/9;\n}\n\n#wrapper {\n  border: var(--border);\n  border-radius: var(--border-radius);\n  background-color: var(--background-color);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n#wrapper > :has(.slot-empty) {\n  display: none;\n}\n\n#header {\n  order: 2;\n  padding: var(--y-padding) var(--x-padding);\n  padding-bottom: 0;\n}\n#header:has(.slot-empty) {\n  display: none;\n}\n\n#image {\n  aspect-ratio: var(--image-aspect-ratio);\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n#image slot::slotted(p) {\n  display: contents;\n}\n#image {\n  overflow: hidden;\n  order: 1;\n  z-index: 2;\n  isolation: isolate;\n  position: relative;\n  border-radius: var(--border-radius);\n}\n#image #gradient {\n  border-radius: inherit;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n#content {\n  z-index: 3;\n  order: 50;\n  flex-grow: 1;\n  padding: var(--y-padding) var(--x-padding);\n}\n\n#footer {\n  order: 999;\n}";
var __create$5 = Object.create;
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __knownSymbol$5 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$5 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$5 = (target, value) => __defProp$6(target, "name", { value, configurable: true });
var __decoratorStart$5 = (base) => [, , , __create$5((base == null ? void 0 : base[__knownSymbol$5("metadata")]) ?? null)];
var __decoratorStrings$5 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$5 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$5("Function expected") : fn;
var __decoratorContext$5 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$5[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$5("Already initialized") : fns.push(__expectFn$5(fn || null)) });
var __decoratorMetadata$5 = (array, target) => __defNormalProp$5(target, __knownSymbol$5("metadata"), array[3]);
var __runInitializers$5 = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$5 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$5[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$6(k3 < 4 ? target : { get [name]() {
    return __privateGet$5(this, extra);
  }, set [name](x2) {
    return __privateSet$5(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$5(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$5(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$5(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$5(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$5 : __privateMethod$5)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$5(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$5(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$5("Object expected");
    else __expectFn$5(fn = it.get) && (desc.get = fn), __expectFn$5(fn = it.set) && (desc.set = fn), __expectFn$5(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$5(array, target), desc && __defProp$6(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$5 = (obj, member, msg) => member.has(obj) || __typeError$5("Cannot " + msg);
var __privateIn$5 = (member, obj) => Object(obj) !== obj ? __typeError$5('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$5 = (obj, member, getter) => (__accessCheck$5(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$5 = (obj, member, value) => member.has(obj) ? __typeError$5("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$5 = (obj, member, value, setter) => (__accessCheck$5(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$5 = (obj, member, method) => (__accessCheck$5(obj, member, "access private method"), method);
var _name_dec$1, __count_dec, _a$5, _NtlCardElement_decorators, _init$5, __count, _name$1, __linkAnchor;
_NtlCardElement_decorators = [t$1("ntl-card")];
class NtlCardElement extends (_a$5 = nextrap_layout({
  breakpoints: true,
  subLayoutApply: true,
  eventBinding: true,
  slotVisibility: true
}), __count_dec = [r$2()], _name_dec$1 = [n$4({ type: String, reflect: true })], _a$5) {
  constructor() {
    super(...arguments);
    __privateAdd$5(this, __count, __runInitializers$5(_init$5, 8, this, 0)), __runInitializers$5(_init$5, 11, this);
    __privateAdd$5(this, _name$1, __runInitializers$5(_init$5, 12, this, "ntl-card")), __runInitializers$5(_init$5, 15, this);
    __privateAdd$5(this, __linkAnchor, null);
    this.onLinkSlotChange = (e2) => {
      this.updateClickableFromLinkSlot(e2.target);
    };
  }
  get _linkAnchor() {
    return __privateGet$5(this, __linkAnchor);
  }
  set _linkAnchor(_2) {
    __privateSet$5(this, __linkAnchor, _2);
  }
  findAnchorWithHref(root) {
    if (root instanceof HTMLAnchorElement && root.hasAttribute("href")) {
      return root;
    }
    const a2 = root.querySelector("a[href]");
    return a2 instanceof HTMLAnchorElement ? a2 : null;
  }
  updateClickableFromLinkSlot(slot) {
    var _a3;
    const linkSlot = slot ?? ((_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector('slot[name="link"]'));
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
  }
  render() {
    var _a3;
    const wrapper = b`
      <div part="wrapper" id="wrapper">
        <div part="header" id="header">
          <slot name="header" data-query=":scope > .header"></slot>
        </div>
        <div part="image" id="image">
          <slot
            id="image-slot"
            name="image"
            data-query=":scope > .image | :scope > img:not(.keep) | :scope > p:has(img:not(.keep))"
          ></slot>
          <div part="gradient" id="gradient"></div>
        </div>
        <div part="content" id="content">
          <slot></slot>
        </div>
        <div part="footer" id="footer">
          <slot name="footer" data-query=":scope > .footer"></slot>
        </div>
        <div hidden>
          <slot name="link" data-query=":scope > p:has(a[href]:empty)" @slotchange=${this.onLinkSlotChange}></slot>
        </div>
      </div>
    `;
    const href = ((_a3 = this._linkAnchor) == null ? void 0 : _a3.getAttribute("href")) || void 0;
    if (href) {
      return b`<a part="link" id="link" href=${href}>${wrapper}</a>`;
    }
    return wrapper;
  }
}
_init$5 = __decoratorStart$5(_a$5);
__count = /* @__PURE__ */ new WeakMap();
_name$1 = /* @__PURE__ */ new WeakMap();
__linkAnchor = /* @__PURE__ */ new WeakMap();
__decorateElement$5(_init$5, 4, "_count", __count_dec, NtlCardElement, __count);
__decorateElement$5(_init$5, 4, "name", _name_dec$1, NtlCardElement, _name$1);
NtlCardElement = __decorateElement$5(_init$5, 0, "NtlCardElement", _NtlCardElement_decorators, NtlCardElement);
NtlCardElement.styles = [r$6(style$6), r$6(resetStyle)];
__runInitializers$5(_init$5, 1, NtlCardElement);
const style$5 = "/* The ShadowDOM Styles */\n:host {\n  --container-width: var(--nt-container-width) /* Refer to README.md for style guidelines */;\n  --gap: var(--nt-gap);\n  --breakpoint: md, lg;\n  --cols: 3;\n  --cols-tablet: 2;\n  --cols-mobile: 1;\n}\n\n:host([mode=tablet]) #main {\n  grid-template-columns: repeat(var(--cols-tablet), minmax(0, 1fr));\n}\n:host([mode=tablet]) #content-wrapper {\n  flex-direction: column;\n}\n\n:host([mode=mobile]) #main {\n  grid-template-columns: repeat(var(--cols-mobile), minmax(0, 1fr));\n}\n:host([mode=mobile]) #content-wrapper {\n  flex-direction: column;\n}\n\n#wrapper {\n  width: var(--container-width);\n  margin: 0 auto;\n}\n\n#content-wrapper {\n  display: flex;\n  flex-direction: row;\n  gap: var(--gap);\n  margin-top: var(--gap);\n  margin-bottom: var(--gap);\n}\n#content-wrapper > * {\n  flex: 1 1 auto;\n}\n\n#main {\n  display: grid;\n  gap: var(--gap);\n  grid-template-columns: repeat(var(--cols), minmax(0, 1fr));\n}\n#main > ::slotted(*) {\n  width: 100%;\n  height: 100%;\n}";
var __create$4 = Object.create;
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __knownSymbol$4 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$4 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$4 = (target, value) => __defProp$5(target, "name", { value, configurable: true });
var __decoratorStart$4 = (base) => [, , , __create$4((base == null ? void 0 : base[__knownSymbol$4("metadata")]) ?? null)];
var __decoratorStrings$4 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$4 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$4("Function expected") : fn;
var __decoratorContext$4 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$4[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$4("Already initialized") : fns.push(__expectFn$4(fn || null)) });
var __decoratorMetadata$4 = (array, target) => __defNormalProp$4(target, __knownSymbol$4("metadata"), array[3]);
var __runInitializers$4 = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$4 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$4[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$5(k3 < 4 ? target : { get [name]() {
    return __privateGet$4(this, extra);
  }, set [name](x2) {
    return __privateSet$4(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$4(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$4(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$4(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$4(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$4 : __privateMethod$4)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$4(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$4(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$4("Object expected");
    else __expectFn$4(fn = it.get) && (desc.get = fn), __expectFn$4(fn = it.set) && (desc.set = fn), __expectFn$4(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$4(array, target), desc && __defProp$5(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$4 = (obj, member, msg) => member.has(obj) || __typeError$4("Cannot " + msg);
var __privateIn$4 = (member, obj) => Object(obj) !== obj ? __typeError$4('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$4 = (obj, member, getter) => (__accessCheck$4(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$4 = (obj, member, value) => member.has(obj) ? __typeError$4("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$4 = (obj, member, value, setter) => (__accessCheck$4(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$4 = (obj, member, method) => (__accessCheck$4(obj, member, "access private method"), method);
var _name_dec, _childLayout_dec, _a$4, _NtlCardGridElement_decorators, _init$4, _childLayout, _name;
_NtlCardGridElement_decorators = [t$1("ntl-card-grid")];
class NtlCardGridElement extends (_a$4 = nextrap_layout({
  breakpoints: true,
  subLayoutApply: true
}), _childLayout_dec = [n$4({ type: String, reflect: true })], _name_dec = [n$4({ type: String, reflect: true })], _a$4) {
  constructor() {
    super(...arguments);
    __privateAdd$4(this, _childLayout, __runInitializers$4(_init$4, 8, this, "ntl-card")), __runInitializers$4(_init$4, 11, this);
    __privateAdd$4(this, _name, __runInitializers$4(_init$4, 12, this, "ntl-card-grid")), __runInitializers$4(_init$4, 15, this);
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
_init$4 = __decoratorStart$4(_a$4);
_childLayout = /* @__PURE__ */ new WeakMap();
_name = /* @__PURE__ */ new WeakMap();
__decorateElement$4(_init$4, 4, "childLayout", _childLayout_dec, NtlCardGridElement, _childLayout);
__decorateElement$4(_init$4, 4, "name", _name_dec, NtlCardGridElement, _name);
NtlCardGridElement = __decorateElement$4(_init$4, 0, "NtlCardGridElement", _NtlCardGridElement_decorators, NtlCardGridElement);
NtlCardGridElement.styles = [r$6(style$5), r$6(resetStyle)];
__runInitializers$4(_init$4, 1, NtlCardGridElement);
const style$4 = `@charset "UTF-8";
/* ShadowDOM Styles for ntl-accordion-item */
:host {
  display: block;
  --border-color: var(--nt-border-color, #e5e7eb);
  --background-color-heading: var(--nt-light-subtle);
  --background-color-heading-hover: var(--nt-light);
  --header-padding: var(--nt-spacing-md, 1rem);
  --content-padding: var(--nt-spacing-md, 1rem);
  --marker-size: 1.5rem;
  --padding: 0.5rem 1rem;
  interpolate-size: allow-keywords;
  /* Icon data URLs as CSS variables — reference --ntl-icon-* from :root (index.scss)
   * with inline SVG fallbacks for standalone usage.
   * Override these from outside to change individual icons. */
  --icon-chevron-down: var(
    --ntl-icon-chevron-down,
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")
  );
  --icon-chevron-up: var(
    --ntl-icon-chevron-up,
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='18 15 12 9 6 15'/%3E%3C/svg%3E")
  );
  --icon-plus: var(
    --ntl-icon-plus,
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 5v14M5 12h14'/%3E%3C/svg%3E")
  );
  --icon-minus: var(
    --ntl-icon-minus,
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E")
  );
  /* Active icon — defaults to chevron.
   * --marker-icon-closed / --marker-icon-open can be set from outside
   * (e.g. via section-style in markdown) to override with custom SVG URLs. */
  --active-marker-icon: var(--marker-icon-closed, var(--icon-chevron-down));
}

:host([open]) {
  --active-marker-icon: var(--marker-icon-open, var(--icon-chevron-up));
}

details {
  overflow: hidden;
}

/* Fallback for browsers without ::details-content support */
details:not([open]) #content {
  display: none;
}

details[open] #content {
  display: block;
}

/* Progressive enhancement: Smooth animation for browsers that support ::details-content */
@supports selector(::details-content) {
  details::details-content {
    block-size: 0;
    overflow: hidden;
    transition: block-size 0.5s, content-visibility 0.5s;
    transition-behavior: allow-discrete;
    padding-inline: var(--content-padding);
  }
  details[open]::details-content {
    block-size: auto;
  }
  /* When using ::details-content, let it handle visibility */
  details:not([open]) #content,
  details[open] #content {
    display: block;
  }
}
details * {
  margin: 0;
}

summary {
  display: flex;
  align-items: center;
  line-height: 1.3;
  padding: var(--header-padding);
  list-style-position: outside;
  gap: 0.75rem;
  cursor: pointer;
  user-select: none;
  list-style: none;
  background-color: var(--background-color-heading);
}
summary::-webkit-details-marker {
  display: none;
}
summary::marker {
  display: none;
  content: "";
}
summary:hover {
  background-color: var(--background-color-heading-hover);
}

#content {
  padding-block: 1rem;
}

#title {
  flex: 1;
  font-weight: 500;
}

/* Marker icon using CSS mask-image */
#marker {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--marker-size);
  height: var(--marker-size);
  flex-shrink: 0;
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
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-image: var(--active-marker-icon);
  -webkit-mask-image: var(--active-marker-icon);
}

/* Marker icon variants */
:host([marker-icon=plus]) {
  --active-marker-icon: var(--marker-icon-closed, var(--icon-plus));
}

:host([marker-icon=plus][open]) {
  --active-marker-icon: var(--marker-icon-open, var(--icon-minus));
}

/* Marker position */
:host([marker-position=start]) #summary {
  flex-direction: row-reverse;
}

summary:focus-visible {
  outline: 2px solid var(--nt-focus-ring-color, #3b82f6);
  outline-offset: -2px;
}`;
var __create$3 = Object.create;
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __knownSymbol$3 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$3 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$3 = (target, value) => __defProp$4(target, "name", { value, configurable: true });
var __decoratorStart$3 = (base) => [, , , __create$3((base == null ? void 0 : base[__knownSymbol$3("metadata")]) ?? null)];
var __decoratorStrings$3 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$3 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$3("Function expected") : fn;
var __decoratorContext$3 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$3[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$3("Already initialized") : fns.push(__expectFn$3(fn || null)) });
var __decoratorMetadata$3 = (array, target) => __defNormalProp$3(target, __knownSymbol$3("metadata"), array[3]);
var __runInitializers$3 = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$3 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$3[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$4(k3 < 4 ? target : { get [name]() {
    return __privateGet$3(this, extra);
  }, set [name](x2) {
    return __privateSet$3(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$3(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$3(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$3(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$3(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$3 : __privateMethod$3)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$3(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$3(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$3("Object expected");
    else __expectFn$3(fn = it.get) && (desc.get = fn), __expectFn$3(fn = it.set) && (desc.set = fn), __expectFn$3(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$3(array, target), desc && __defProp$4(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$3 = (obj, member, msg) => member.has(obj) || __typeError$3("Cannot " + msg);
var __privateIn$3 = (member, obj) => Object(obj) !== obj ? __typeError$3('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$3 = (obj, member, getter) => (__accessCheck$3(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$3 = (obj, member, value) => member.has(obj) ? __typeError$3("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$3 = (obj, member, value, setter) => (__accessCheck$3(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$3 = (obj, member, method) => (__accessCheck$3(obj, member, "access private method"), method);
var _markerIcon_dec$1, _markerPosition_dec$1, _open_dec, _a$3, _NtlAccordionItemElement_decorators, _init$3, _open, _markerPosition$1, _markerIcon$1;
_NtlAccordionItemElement_decorators = [t$1("ntl-accordion-item")];
class NtlAccordionItemElement extends (_a$3 = SubLayoutApplyMixin(LoggingMixin(i$2)), _open_dec = [n$4({ type: Boolean, reflect: true })], _markerPosition_dec$1 = [n$4({ type: String, reflect: true, attribute: "marker-position" })], _markerIcon_dec$1 = [n$4({ type: String, reflect: true, attribute: "marker-icon" })], _a$3) {
  constructor() {
    super(...arguments);
    __privateAdd$3(this, _open, __runInitializers$3(_init$3, 8, this, false)), __runInitializers$3(_init$3, 11, this);
    __privateAdd$3(this, _markerPosition$1, __runInitializers$3(_init$3, 12, this, "end")), __runInitializers$3(_init$3, 15, this);
    __privateAdd$3(this, _markerIcon$1, __runInitializers$3(_init$3, 16, this, null)), __runInitializers$3(_init$3, 19, this);
    this._detailsElement = null;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated(__changedProperties) {
    var _a3;
    super.firstUpdated(__changedProperties);
    this._detailsElement = ((_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("details")) ?? null;
    if (this._detailsElement) {
      this._detailsElement.open = this.open;
    }
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("open") && this._detailsElement) {
      this._detailsElement.open = this.open;
    }
  }
  _onToggle(e2) {
    const details = e2.target;
    this.open = details.open;
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
      <details @toggle="${this._onToggle}">
        <summary id="summary" part="summary">
          <span id="title" part="title">
            <slot
              name="title"
              data-query=":scope > h1,:scope > h2,:scope > h3,:scope > h4,:scope > h5,:scope > h6"
            ></slot>
          </span>
          <span id="marker" part="marker"></span>
        </summary>
        <div id="content" part="content">
          <slot></slot>
        </div>
      </details>
    `;
  }
}
_init$3 = __decoratorStart$3(_a$3);
_open = /* @__PURE__ */ new WeakMap();
_markerPosition$1 = /* @__PURE__ */ new WeakMap();
_markerIcon$1 = /* @__PURE__ */ new WeakMap();
__decorateElement$3(_init$3, 4, "open", _open_dec, NtlAccordionItemElement, _open);
__decorateElement$3(_init$3, 4, "markerPosition", _markerPosition_dec$1, NtlAccordionItemElement, _markerPosition$1);
__decorateElement$3(_init$3, 4, "markerIcon", _markerIcon_dec$1, NtlAccordionItemElement, _markerIcon$1);
NtlAccordionItemElement = __decorateElement$3(_init$3, 0, "NtlAccordionItemElement", _NtlAccordionItemElement_decorators, NtlAccordionItemElement);
NtlAccordionItemElement.styles = [r$6(style$4), r$6(resetStyle)];
__runInitializers$3(_init$3, 1, NtlAccordionItemElement);
const style$3 = "/* ShadowDOM Styles for ntl-accordion */\n:host {\n  --heading-margin-bottom: 1rem;\n  --heading-margin-top: 1rem;\n  --heading-color: var(--nt-primary);\n  display: block;\n}\n\n::slotted(h1),\n::slotted(h2),\n::slotted(h3),\n::slotted(h4),\n::slotted(h5),\n::slotted(h6) {\n  margin-top: var(--heading-margin-top) !important;\n  margin-bottom: var(--heading-margin-bottom) !important;\n  color: var(--heading-color);\n}";
var __create$2 = Object.create;
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __knownSymbol$2 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$2 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$2 = (target, value) => __defProp$3(target, "name", { value, configurable: true });
var __decoratorStart$2 = (base) => [, , , __create$2((base == null ? void 0 : base[__knownSymbol$2("metadata")]) ?? null)];
var __decoratorStrings$2 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$2 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$2("Function expected") : fn;
var __decoratorContext$2 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$2[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$2("Already initialized") : fns.push(__expectFn$2(fn || null)) });
var __decoratorMetadata$2 = (array, target) => __defNormalProp$2(target, __knownSymbol$2("metadata"), array[3]);
var __runInitializers$2 = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$2 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$2[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$3(k3 < 4 ? target : { get [name]() {
    return __privateGet$2(this, extra);
  }, set [name](x2) {
    return __privateSet$2(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$2(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$2(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$2(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$2(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$2 : __privateMethod$2)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$2(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$2(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$2("Object expected");
    else __expectFn$2(fn = it.get) && (desc.get = fn), __expectFn$2(fn = it.set) && (desc.set = fn), __expectFn$2(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$2(array, target), desc && __defProp$3(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$2 = (obj, member, msg) => member.has(obj) || __typeError$2("Cannot " + msg);
var __privateIn$2 = (member, obj) => Object(obj) !== obj ? __typeError$2('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$2 = (obj, member, getter) => (__accessCheck$2(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$2 = (obj, member, value) => member.has(obj) ? __typeError$2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$2 = (obj, member, value, setter) => (__accessCheck$2(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$2 = (obj, member, method) => (__accessCheck$2(obj, member, "access private method"), method);
var _markerIcon_dec, _markerPosition_dec, _initialOpenIndex_dec, _exclusive_dec, _a$2, _NtlAccordionElement_decorators, _init$2, _exclusive, _initialOpenIndex, _markerPosition, _markerIcon;
const initialOpenIndexConverter = {
  fromAttribute(value) {
    if (value === null) {
      return void 0;
    }
    if (value === "") {
      return 0;
    }
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? void 0 : parsed;
  },
  toAttribute(value) {
    return value !== void 0 ? String(value) : null;
  }
};
_NtlAccordionElement_decorators = [t$1("ntl-accordion")];
class NtlAccordionElement extends (_a$2 = SubLayoutApplyMixin(LoggingMixin(i$2)), _exclusive_dec = [n$4({ type: Boolean, reflect: true })], _initialOpenIndex_dec = [n$4({ converter: initialOpenIndexConverter, attribute: "initial-open-index" })], _markerPosition_dec = [n$4({ type: String, reflect: true, attribute: "marker-position" })], _markerIcon_dec = [n$4({ type: String, reflect: true, attribute: "marker-icon" })], _a$2) {
  constructor() {
    super(...arguments);
    __privateAdd$2(this, _exclusive, __runInitializers$2(_init$2, 8, this, true)), __runInitializers$2(_init$2, 11, this);
    __privateAdd$2(this, _initialOpenIndex, __runInitializers$2(_init$2, 12, this, 0)), __runInitializers$2(_init$2, 15, this);
    __privateAdd$2(this, _markerPosition, __runInitializers$2(_init$2, 16, this, null)), __runInitializers$2(_init$2, 19, this);
    __privateAdd$2(this, _markerIcon, __runInitializers$2(_init$2, 20, this, null)), __runInitializers$2(_init$2, 23, this);
    this._initialized = false;
  }
  firstUpdated(__changedProperties) {
    var _a3;
    super.firstUpdated(__changedProperties);
    this.addEventListener("accordion-toggle", this._onItemToggle.bind(this));
    const slot = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("slot:not([name])");
    slot == null ? void 0 : slot.addEventListener("slotchange", () => this._onSlotChange());
  }
  _onSlotChange() {
    this._propagateProperties();
    this._applyInitialOpenIndex();
  }
  _propagateProperties() {
    const items = this._getAccordionItems();
    for (const item of items) {
      if (this.markerPosition && !item.hasAttribute("marker-position")) {
        item.markerPosition = this.markerPosition;
      }
      if (this.markerIcon && !item.hasAttribute("marker-icon")) {
        item.markerIcon = this.markerIcon;
      }
    }
  }
  _applyInitialOpenIndex() {
    if (this._initialized) return;
    this._initialized = true;
    if (this.initialOpenIndex === void 0) return;
    const items = this._getAccordionItems();
    if (this.initialOpenIndex >= 0 && this.initialOpenIndex < items.length) {
      items[this.initialOpenIndex].open = true;
    }
  }
  _onItemToggle(e2) {
    if (!this.exclusive || !e2.detail.open) return;
    const target = e2.target;
    const items = this._getAccordionItems();
    for (const item of items) {
      if (item !== target && item.open) {
        item.open = false;
      }
    }
  }
  _getAccordionItems() {
    var _a3;
    const slot = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("slot:not([name])");
    if (!slot) return [];
    return slot.assignedElements({ flatten: true }).filter((el) => el.tagName === "NTL-ACCORDION-ITEM");
  }
  render() {
    return b`
      <div class="accordion" part="accordion">
        <slot data-query=":scope > section" data-set-attribute-layout="ntl-accordion-item"></slot>
      </div>
    `;
  }
}
_init$2 = __decoratorStart$2(_a$2);
_exclusive = /* @__PURE__ */ new WeakMap();
_initialOpenIndex = /* @__PURE__ */ new WeakMap();
_markerPosition = /* @__PURE__ */ new WeakMap();
_markerIcon = /* @__PURE__ */ new WeakMap();
__decorateElement$2(_init$2, 4, "exclusive", _exclusive_dec, NtlAccordionElement, _exclusive);
__decorateElement$2(_init$2, 4, "initialOpenIndex", _initialOpenIndex_dec, NtlAccordionElement, _initialOpenIndex);
__decorateElement$2(_init$2, 4, "markerPosition", _markerPosition_dec, NtlAccordionElement, _markerPosition);
__decorateElement$2(_init$2, 4, "markerIcon", _markerIcon_dec, NtlAccordionElement, _markerIcon);
NtlAccordionElement = __decorateElement$2(_init$2, 0, "NtlAccordionElement", _NtlAccordionElement_decorators, NtlAccordionElement);
NtlAccordionElement.styles = [r$6(style$3), r$6(resetStyle)];
__runInitializers$2(_init$2, 1, NtlAccordionElement);
const style$2 = "/* The ShadowDOM Styles */\n:host {\n  --aspect-ratio: 16 / 9;\n  --breakpoint: lg;\n  aspect-ratio: var(--aspect-ratio);\n  width: 100%;\n  display: block;\n  isolation: isolate;\n}\n\n:host([mode=mobile]) {\n  --aspect-ratio: 1 / 1;\n}\n\n:host([consentgiven=true]) #pre-consent,\n:host([consentgiven=true]) #background {\n  z-index: 0;\n  opacity: 0;\n}\n:host([consentgiven=true]) #consented-content {\n  z-index: 99;\n  opacity: 1;\n}\n:host([consentgiven=true]) #loading-text {\n  opacity: 1;\n}\n\n#wrapper {\n  display: grid;\n  height: 100%;\n}\n#wrapper > * {\n  grid-area: 1/1;\n  width: 100%;\n  height: 100%;\n}\n\n#pre-consent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  transition: opacity 0.3s ease;\n  opacity: 1;\n  z-index: 99;\n}\n\n#background {\n  height: 100%;\n  transition: opacity 3s ease;\n  opacity: 1;\n}\n\n#consented-content {\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  opacity: 0;\n  transition: opacity 0.5s ease;\n}\n#consented-content slot::slotted(*) {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n\n#loading-text {\n  opacity: 0;\n  transition: opacity 0.5s ease;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n  z-index: 5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}";
var __create$1 = Object.create;
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __knownSymbol$1 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$1 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name$1 = (target, value) => __defProp$2(target, "name", { value, configurable: true });
var __decoratorStart$1 = (base) => [, , , __create$1((base == null ? void 0 : base[__knownSymbol$1("metadata")]) ?? null)];
var __decoratorStrings$1 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$1 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$1("Function expected") : fn;
var __decoratorContext$1 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$1[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$1("Already initialized") : fns.push(__expectFn$1(fn || null)) });
var __decoratorMetadata$1 = (array, target) => __defNormalProp$1(target, __knownSymbol$1("metadata"), array[3]);
var __runInitializers$1 = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement$1 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings$1[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$2(k3 < 4 ? target : { get [name]() {
    return __privateGet$1(this, extra);
  }, set [name](x2) {
    return __privateSet$1(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name$1(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name$1(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext$1(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn$1(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet$1 : __privateMethod$1)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet$1(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn$1(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$1("Object expected");
    else __expectFn$1(fn = it.get) && (desc.get = fn), __expectFn$1(fn = it.set) && (desc.set = fn), __expectFn$1(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata$1(array, target), desc && __defProp$2(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck$1 = (obj, member, msg) => member.has(obj) || __typeError$1("Cannot " + msg);
var __privateIn$1 = (member, obj) => Object(obj) !== obj ? __typeError$1('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$1 = (obj, member, getter) => (__accessCheck$1(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$1 = (obj, member, value) => member.has(obj) ? __typeError$1("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$1 = (obj, member, value, setter) => (__accessCheck$1(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$1 = (obj, member, method) => (__accessCheck$1(obj, member, "access private method"), method);
var _consentGiven_dec, _onClick_dec, _a$1, _NtlConsentBlockerElement_decorators, _NtlConsentBlockerElement_instances, giveConsent_fn, _init$1, _consentGiven, copyElementFromString_fn;
const features = {
  breakpoints: true,
  // Enables responsive design features
  subLayoutApply: true,
  // For NTL only: Enable <slot data-query= support for sub-layouts
  slotVisibility: false,
  // quick fix for marking empty slots (unless CSS Standard supports :empty for slots)
  eventBinding: true
  // Switch event binding using @Listen decorators
};
function stripQuotes(str) {
  return str.replace(/^['"]|['"]$/g, "");
}
_NtlConsentBlockerElement_decorators = [t$1("ntl-consent-blocker")];
class NtlConsentBlockerElement extends (_a$1 = nextrap_layout(features), _onClick_dec = [Listen("click", { target: "host" })], _consentGiven_dec = [n$4({ reflect: true })], _a$1) {
  constructor() {
    super(...arguments);
    __runInitializers$1(_init$1, 5, this);
    __privateAdd$1(this, _NtlConsentBlockerElement_instances);
    __privateAdd$1(this, _consentGiven, __runInitializers$1(_init$1, 8, this, false)), __runInitializers$1(_init$1, 11, this);
  }
  onClick(e2) {
    if (e2.target instanceof HTMLButtonElement && e2.target.closest('[data-action="consent"]')) {
      __privateMethod$1(this, _NtlConsentBlockerElement_instances, giveConsent_fn).call(this);
    }
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    if (this.querySelector(":scope > template") === null) {
      const defaultTemplate = getComputedStyle(this).getPropertyValue("--default-template");
      if (defaultTemplate) {
        const wrapper = document.createElement("template");
        __privateMethod$1(this, _NtlConsentBlockerElement_instances, copyElementFromString_fn).call(this, defaultTemplate, null, wrapper);
        this.appendChild(wrapper);
      }
    }
    if (this.querySelector(':scope > [slot="background"]') === null) {
      const defaultBg = getComputedStyle(this).getPropertyValue("--default-bg");
      if (defaultBg) {
        __privateMethod$1(this, _NtlConsentBlockerElement_instances, copyElementFromString_fn).call(this, defaultBg, "background");
      }
    }
    if (this.querySelector(':scope > [slot="pre-consent"]') === null) {
      const defaultPreConsent = getComputedStyle(this).getPropertyValue("--default-pre-consent");
      if (defaultPreConsent) {
        __privateMethod$1(this, _NtlConsentBlockerElement_instances, copyElementFromString_fn).call(this, defaultPreConsent, "pre-consent");
      }
    }
  }
  render() {
    return b`
      <div id="wrapper" part="wrapper">
        <div id="background" part="background">
          <slot name="background" data-query=":scope > .background | :scope > p:has(img:not(.keep))"></slot>
        </div>

        <div id="consented-content" part="consented-content">
          <slot name="consented-content"></slot>
        </div>

        <div id="pre-consent" part="pre-consent">
          <slot name="pre-consent"></slot>
        </div>

        <div id="loading-text">Bitte warten...</div>
      </div>
    `;
  }
}
_init$1 = __decoratorStart$1(_a$1);
_NtlConsentBlockerElement_instances = /* @__PURE__ */ new WeakSet();
giveConsent_fn = function() {
  const template = this.querySelector(":scope > template");
  if (!template) {
    this.warn(
      "No template found for consented content. Please provide a <template> element as a child of ntl-consent-blocker with the consented content."
    );
    return;
  }
  Array.from(template.content.childNodes).forEach((el) => {
    const clone = el.cloneNode(true);
    if (clone instanceof HTMLElement) {
      clone.setAttribute("slot", "consented-content");
      this.appendChild(clone);
    }
  });
  this.consentGiven = true;
};
_consentGiven = /* @__PURE__ */ new WeakMap();
copyElementFromString_fn = function(htmlString, slotName, wrapperElement = this) {
  const template = document.createElement("template");
  template.innerHTML = stripQuotes(htmlString);
  Array.from(template.content.children).forEach((element) => {
    const clone = element.cloneNode(true);
    if (slotName && clone instanceof HTMLElement) {
      clone.setAttribute("slot", slotName);
    }
    wrapperElement instanceof HTMLTemplateElement ? wrapperElement.content.appendChild(clone) : wrapperElement.appendChild(clone);
  });
};
__decorateElement$1(_init$1, 1, "onClick", _onClick_dec, NtlConsentBlockerElement);
__decorateElement$1(_init$1, 4, "consentGiven", _consentGiven_dec, NtlConsentBlockerElement, _consentGiven);
NtlConsentBlockerElement = __decorateElement$1(_init$1, 0, "NtlConsentBlockerElement", _NtlConsentBlockerElement_decorators, NtlConsentBlockerElement);
NtlConsentBlockerElement.styles = [r$6(style$2), r$6(resetStyle)];
__runInitializers$1(_init$1, 1, NtlConsentBlockerElement);
const style$1 = "/* The ShadowDOM Styles */\n:host {\n  display: block;\n  overflow: visible;\n  position: relative;\n}\n\n.parallax-wrapper {\n  position: relative;\n  overflow: visible;\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.parallax-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-size: 100% auto;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\nslot {\n  display: none;\n}\n\n::slotted(*) {\n  display: none !important;\n}";
var __create = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError2 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp$1(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [, , , __create((base == null ? void 0 : base[__knownSymbol("metadata")]) ?? null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError2("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError2("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp2(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i5 = 0, fns = array[flags >> 1], n4 = fns && fns.length; i5 < n4; i5++) flags & 1 ? fns[i5].call(self) : value = fns[i5].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k3 = flags & 7, s2 = !!(flags & 8), p2 = !!(flags & 16);
  var j = k3 > 3 ? array.length + 1 : k3 ? s2 ? 1 : 2 : 0, key = __decoratorStrings[k3 + 5];
  var initializers = k3 > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k3 && (!p2 && !s2 && (target = target.prototype), k3 < 5 && (k3 > 3 || !p2) && __getOwnPropDesc$1(k3 < 4 ? target : { get [name]() {
    return __privateGet2(this, extra);
  }, set [name](x2) {
    return __privateSet2(this, extra, x2);
  } }, name));
  k3 ? p2 && k3 < 4 && __name(extra, (k3 > 2 ? "set " : k3 > 1 ? "get " : "") + name) : __name(target, name);
  for (var i5 = decorators.length - 1; i5 >= 0; i5--) {
    ctx = __decoratorContext(k3, name, done = {}, array[3], extraInitializers);
    if (k3) {
      ctx.static = s2, ctx.private = p2, access = ctx.access = { has: p2 ? (x2) => __privateIn(target, x2) : (x2) => name in x2 };
      if (k3 ^ 3) access.get = p2 ? (x2) => (k3 ^ 1 ? __privateGet2 : __privateMethod2)(x2, target, k3 ^ 4 ? extra : desc.get) : (x2) => x2[name];
      if (k3 > 2) access.set = p2 ? (x2, y4) => __privateSet2(x2, target, y4, k3 ^ 4 ? extra : desc.set) : (x2, y4) => x2[name] = y4;
    }
    it = (0, decorators[i5])(k3 ? k3 < 4 ? p2 ? extra : desc[key] : k3 > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k3 ^ 4 || it === void 0) __expectFn(it) && (k3 > 4 ? initializers.unshift(it) : k3 ? p2 ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError2("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k3 || __decoratorMetadata(array, target), desc && __defProp$1(target, name, desc), p2 ? k3 ^ 4 ? extra : desc : target;
};
var __accessCheck2 = (obj, member, msg) => member.has(obj) || __typeError2("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError2('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet2 = (obj, member, getter) => (__accessCheck2(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd2 = (obj, member, value) => member.has(obj) ? __typeError2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet2 = (obj, member, value, setter) => (__accessCheck2(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod2 = (obj, member, method) => (__accessCheck2(obj, member, "access private method"), method);
var _backgroundColor_dec, _width_dec, _height_dec, _image_dec, _a, _NtlParallaxBg_decorators, _init, _image, _height, _width, _backgroundColor;
_NtlParallaxBg_decorators = [t$1("ntl-parallax-bg")];
class NtlParallaxBg extends (_a = LoggingMixin(i$2), _image_dec = [n$4({ type: String })], _height_dec = [n$4({ type: String })], _width_dec = [n$4({ type: String })], _backgroundColor_dec = [n$4({ type: String })], _a) {
  constructor() {
    super(...arguments);
    __privateAdd2(this, _image, __runInitializers(_init, 8, this, "")), __runInitializers(_init, 11, this);
    __privateAdd2(this, _height, __runInitializers(_init, 12, this, "100vh")), __runInitializers(_init, 15, this);
    __privateAdd2(this, _width, __runInitializers(_init, 16, this, "100%")), __runInitializers(_init, 19, this);
    __privateAdd2(this, _backgroundColor, __runInitializers(_init, 20, this, "transparent")), __runInitializers(_init, 23, this);
    this.onScroll = () => {
      var _a3;
      const scrolled = window.scrollY;
      const rect = this.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const parallaxOffset = (scrolled - elementTop) * -0.3;
      const container = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector(".parallax-container");
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
    var _a3;
    const slot = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("slot");
    if (slot) {
      slot.addEventListener("slotchange", () => {
        this.extractImageFromSlot();
      });
    }
  }
  extractImageFromSlot() {
    var _a3;
    const slot = (_a3 = this.shadowRoot) == null ? void 0 : _a3.querySelector("slot");
    if (!slot) {
      return;
    }
    const assignedElements = slot.assignedElements();
    let foundImage = false;
    assignedElements.forEach((element) => {
      var _a4;
      if (element instanceof HTMLElement) {
        const imgSrc = element.getAttribute("src") || ((_a4 = element.querySelector("img")) == null ? void 0 : _a4.getAttribute("src"));
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
        <div
          class="parallax-container"
          style="background-image: url('${this.image}')"
        ></div>
        <slot></slot>
      </div>
    `;
  }
}
_init = __decoratorStart(_a);
_image = /* @__PURE__ */ new WeakMap();
_height = /* @__PURE__ */ new WeakMap();
_width = /* @__PURE__ */ new WeakMap();
_backgroundColor = /* @__PURE__ */ new WeakMap();
__decorateElement(_init, 4, "image", _image_dec, NtlParallaxBg, _image);
__decorateElement(_init, 4, "height", _height_dec, NtlParallaxBg, _height);
__decorateElement(_init, 4, "width", _width_dec, NtlParallaxBg, _width);
__decorateElement(_init, 4, "backgroundColor", _backgroundColor_dec, NtlParallaxBg, _backgroundColor);
NtlParallaxBg = __decorateElement(_init, 0, "NtlParallaxBg", _NtlParallaxBg_decorators, NtlParallaxBg);
NtlParallaxBg.styles = [r$6(style$1), r$6(resetStyle)];
__runInitializers(_init, 1, NtlParallaxBg);
const style = "/* The ShadowDOM Styles - defined inline in the component via css`` tag */\n:host {\n  display: block;\n  position: fixed;\n  bottom: 1rem;\n  left: 1rem;\n  z-index: 9999;\n}\n\n.switcher {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 0.375rem 0.625rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);\n  font-family: system-ui, -apple-system, sans-serif;\n  font-size: 0.8125rem;\n}\n\n.label {\n  color: #666;\n  user-select: none;\n  white-space: nowrap;\n}\n\nselect {\n  appearance: none;\n  -webkit-appearance: none;\n  background: #f5f5f5 url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23666'/%3E%3C/svg%3E\") no-repeat right 0.5rem center;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 0.25rem 1.5rem 0.25rem 0.5rem;\n  font-size: 0.8125rem;\n  font-family: inherit;\n  color: #333;\n  cursor: pointer;\n  min-width: 100px;\n  outline: none;\n  transition: border-color 0.15s ease;\n}\n\nselect:hover {\n  border-color: #bbb;\n}\n\nselect:focus {\n  border-color: #888;\n}";
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i5 = decorators.length - 1, decorator; i5 >= 0; i5--)
    if (decorator = decorators[i5])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp2(target, key, result);
  return result;
};
let NteThemeSwitcherElement = class extends i$2 {
  constructor() {
    super(...arguments);
    this.themes = "";
    this.target = "html";
    this._activeTheme = "default";
    this._themeList = [];
  }
  connectedCallback() {
    super.connectedCallback();
    this._parseThemes();
    this._readThemeFromUrl();
    this._applyTheme();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._removeThemeClass();
  }
  /**
   * Parse the themes property into an array
   */
  _parseThemes() {
    if (!this.themes) {
      this._themeList = [];
      return;
    }
    this._themeList = this.themes.split(" ").map((t2) => t2.trim()).filter((t2) => t2.length > 0);
  }
  /**
   * Read theme from URL parameter `?theme=XYZ`
   */
  _readThemeFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const urlTheme = params.get("theme");
    if (urlTheme && this._themeList.includes(urlTheme)) {
      this._activeTheme = urlTheme;
    } else {
      this._activeTheme = this._themeList[0] || "default";
    }
  }
  /**
   * Update URL parameter without page reload
   */
  _updateUrl() {
    const url = new URL(window.location.href);
    if (this._activeTheme === "default") {
      url.searchParams.delete("theme");
    } else {
      url.searchParams.set("theme", this._activeTheme);
    }
    window.history.replaceState(null, "", url.toString());
  }
  /**
   * Apply the theme class to the body element
   */
  _applyTheme() {
    var _a3;
    this._removeThemeClass();
    if (this._activeTheme !== "default") {
      ((_a3 = document.querySelector(this.target)) == null ? void 0 : _a3.classList.add(`${this._activeTheme}`)) || console.log(`Target element "${this.target}" not found for theme application.`);
    }
  }
  /**
   * Remove all theme classes from the body element (cleanup)
   */
  _removeThemeClass() {
    var _a3;
    const allThemeClasses = this._themeList.map((t2) => `${t2}`);
    (_a3 = document.querySelector(this.target)) == null ? void 0 : _a3.classList.remove(...allThemeClasses);
  }
  /**
   * Handle theme selection change
   */
  _onThemeChange(e2) {
    const select = e2.target;
    this._activeTheme = select.value;
    this._applyTheme();
    this._updateUrl();
  }
  render() {
    if (this._themeList.length === 0) return A;
    return b`
      <div class="switcher">
        <span class="label">Theme:</span>
        <select @change="${this._onThemeChange}" .value="${this._activeTheme}">
          ${this._themeList.map(
      (theme) => b` <option value="${theme}" ?selected="${theme === this._activeTheme}">${theme}</option> `
    )}
        </select>
      </div>
    `;
  }
};
NteThemeSwitcherElement.styles = [r$6(style), r$6(resetStyle)];
__decorateClass([
  n$4({ type: String })
], NteThemeSwitcherElement.prototype, "themes", 2);
__decorateClass([
  n$4({ type: String, reflect: true })
], NteThemeSwitcherElement.prototype, "target", 2);
__decorateClass([
  r$2()
], NteThemeSwitcherElement.prototype, "_activeTheme", 2);
__decorateClass([
  r$2()
], NteThemeSwitcherElement.prototype, "_themeList", 2);
NteThemeSwitcherElement = __decorateClass([
  t$1("nte-theme-switcher")
], NteThemeSwitcherElement);
