var q$3 = (i4) => {
  throw TypeError(i4);
};
var O$2 = (i4, s2, e4) => s2.has(i4) || q$3("Cannot " + e4);
var t$4 = (i4, s2, e4) => (O$2(i4, s2, "read from private field"), e4 ? e4.call(i4) : s2.get(i4)), n$5 = (i4, s2, e4) => s2.has(i4) ? q$3("Cannot add the same private member more than once") : s2 instanceof WeakSet ? s2.add(i4) : s2.set(i4, e4), a$2 = (i4, s2, e4, o2) => (O$2(i4, s2, "write to private field"), s2.set(i4, e4), e4), r$5 = (i4, s2, e4) => (O$2(i4, s2, "access private method"), e4);
const C$3 = {
  state: "loading"
};
async function S$4(i4) {
  return new Promise((s2) => setTimeout(s2, i4));
}
const x$4 = Date.now();
var h$4, v$3, j$3, D$4, R$3, m$5, p$5, E$3, _$3, H$4;
let F$3 = class F extends HTMLElement {
  constructor() {
    super(...arguments);
    n$5(this, m$5);
    n$5(this, h$4, /* @__PURE__ */ new Map());
    n$5(this, v$3, x$4);
    n$5(this, j$3, null);
    n$5(this, D$4, false);
    n$5(this, R$3, false);
    n$5(this, E$3, async () => {
      if (t$4(this, R$3)) return;
      const e4 = Date.now();
      for (const [o2, c2] of t$4(this, h$4).entries())
        e4 - c2.waitStart > 4e3 && (console.error(
          `Element ${o2} has been waiting for more than 4 seconds. Removing from loader (Check callbacks!).`,
          o2
        ), t$4(this, h$4).delete(o2));
      t$4(this, D$4) && t$4(this, h$4).size === 0 && (a$2(this, R$3, true), window.clearInterval(t$4(this, j$3)), this.classList.add("ready"), await S$4(1), C$3.state = "ready", this.dispatchEvent(
        new CustomEvent("loader:ready", {
          bubbles: true,
          composed: true
        })
      ), r$5(this, m$5, p$5).call(this, `Loader ready after ${Date.now() - t$4(this, v$3)}ms`), await S$4(10), C$3.state = "pre-visual", this.classList.add("pre-visual"), this.dispatchEvent(
        new CustomEvent("loader:pre-visual", {
          bubbles: true,
          composed: true
        })
      ), r$5(this, m$5, p$5).call(this, `Loader pre-visual after ${Date.now() - t$4(this, v$3)}ms`), await S$4(150), C$3.state = "visual", this.classList.add("visual"), await S$4(1), this.dispatchEvent(
        new CustomEvent("loader:visual", {
          bubbles: true,
          composed: true
        })
      ), r$5(this, m$5, p$5).call(this, `Loader visual after ${Date.now() - t$4(this, v$3)}ms`), await S$4(500), this.classList.add("after-visual"));
    });
    n$5(this, _$3, (e4) => {
      const { element: o2, state: c2 } = e4.detail;
      t$4(this, h$4).set(o2, { waitStart: Date.now() });
    });
    n$5(this, H$4, (e4) => {
      const { element: o2, state: c2 } = e4.detail, d2 = t$4(this, h$4).get(o2);
      if (!d2) {
        console.warn("Received ready event for element that did not send waitreq:", o2);
        return;
      }
      t$4(this, h$4).delete(o2), r$5(this, m$5, p$5).call(this, "Element ready:", o2, `Waited for ${Date.now() - d2.waitStart}ms`), t$4(this, E$3).call(this);
    });
  }
  connectedCallback() {
    C$3.state = "loading", window.addEventListener("init:child-waitreq", (o2) => t$4(this, _$3).call(this, o2)), window.addEventListener("init:child-ready", (o2) => t$4(this, H$4).call(this, o2)), a$2(this, j$3, window.setInterval(t$4(this, E$3), 2e3));
    const e4 = () => {
      a$2(this, D$4, true), r$5(this, m$5, p$5).call(this, `DOMContentLoaded received after ${Date.now() - t$4(this, v$3)}ms`), t$4(this, E$3).call(this);
    };
    document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", e4, { once: true }) : e4();
  }
};
h$4 = /* @__PURE__ */ new WeakMap(), v$3 = /* @__PURE__ */ new WeakMap(), j$3 = /* @__PURE__ */ new WeakMap(), D$4 = /* @__PURE__ */ new WeakMap(), R$3 = /* @__PURE__ */ new WeakMap(), m$5 = /* @__PURE__ */ new WeakSet(), p$5 = function(...e4) {
  this.hasAttribute("debug") && console.debug(...e4);
}, E$3 = /* @__PURE__ */ new WeakMap(), _$3 = /* @__PURE__ */ new WeakMap(), H$4 = /* @__PURE__ */ new WeakMap();
customElements.get("tj-loader") ? console.error("tj-loader is already defined. Please check for duplicate imports or custom element definitions.") : customElements.define("tj-loader", F$3);
var w$2, y$2, g$4, T$2, A$4, L$4, I$3, W$3;
let B$4 = class B {
  constructor(s2 = window, e4 = "scroll-position1", o2 = () => {
  }) {
    n$5(this, T$2);
    n$5(this, w$2);
    n$5(this, y$2, false);
    n$5(this, g$4, false);
    n$5(this, L$4, () => {
      if (!(!t$4(this, y$2) || !t$4(this, g$4))) {
        window.clearTimeout(t$4(this, w$2)), a$2(this, w$2, void 0);
        try {
          const s3 = this.scrollElement === window ? window.scrollY : this.scrollElement.scrollTop;
          sessionStorage.setItem(this.scrollId, JSON.stringify({ url: location.href, scrollTop: s3 })), this.debug("Saved scroll position", location.href, s3);
        } catch {
        }
      }
    });
    n$5(this, I$3, () => {
      t$4(this, y$2) && (window.clearTimeout(t$4(this, w$2)), a$2(this, w$2, window.setTimeout(t$4(this, L$4), 100)));
    });
    this.scrollElement = s2, this.scrollId = e4, this.debug = o2;
  }
  restoreScrollPosition() {
    const s2 = r$5(this, T$2, A$4).call(this);
    (s2 == null ? void 0 : s2.url) === location.href ? (this.debug("Restoring saved position", s2.scrollTop, location.href), this.scrollElement.scrollTo({ top: s2.scrollTop, left: 0, behavior: "instant" })) : this.scrollToHash() || (this.debug("Scrolling to top", location.href), this.scrollElement.scrollTo({ top: 0, left: 0, behavior: "instant" })), a$2(this, y$2, true);
  }
  scrollToHash(s2 = "instant") {
    const e4 = r$5(this, T$2, W$3).call(this, location.hash);
    return e4 ? (this.debug("Scrolling to anchor", location.hash, s2), e4.scrollIntoView({ behavior: s2, block: "start" }), true) : false;
  }
  connectEventListener() {
    t$4(this, g$4) || (a$2(this, g$4, true), this.scrollElement.addEventListener("scroll", t$4(this, I$3), { passive: true }), window.addEventListener("pagehide", t$4(this, L$4)));
  }
  disconnectEventListener() {
    a$2(this, g$4, false), window.clearTimeout(t$4(this, w$2)), this.scrollElement.removeEventListener("scroll", t$4(this, I$3)), window.removeEventListener("pagehide", t$4(this, L$4));
  }
};
w$2 = /* @__PURE__ */ new WeakMap(), y$2 = /* @__PURE__ */ new WeakMap(), g$4 = /* @__PURE__ */ new WeakMap(), T$2 = /* @__PURE__ */ new WeakSet(), A$4 = function() {
  try {
    const s2 = sessionStorage.getItem(this.scrollId);
    if (!s2) return null;
    const e4 = JSON.parse(s2);
    if (typeof e4 == "object" && e4 !== null && "url" in e4 && typeof e4.url == "string" && "scrollTop" in e4 && typeof e4.scrollTop == "number" && Number.isFinite(e4.scrollTop)) return e4;
  } catch {
  }
  return null;
}, L$4 = /* @__PURE__ */ new WeakMap(), I$3 = /* @__PURE__ */ new WeakMap(), W$3 = function(s2) {
  if (!s2) return null;
  let e4;
  try {
    e4 = decodeURIComponent(s2.slice(1));
  } catch {
    e4 = s2.slice(1);
  }
  return document.getElementById(e4) || document.getElementsByName(e4)[0] || null;
};
var f$3, u$5, l$3, b$3, k$3, P$2, N$3;
let J$2 = class J extends HTMLElement {
  constructor() {
    super(...arguments);
    n$5(this, l$3);
    n$5(this, f$3, null);
    n$5(this, u$5, null);
    n$5(this, P$2, () => {
      var e4;
      (e4 = t$4(this, u$5)) == null || e4.scrollToHash("auto");
    });
  }
  connectedCallback() {
    t$4(this, f$3) || (a$2(this, f$3, new AbortController()), "scrollRestoration" in history && (history.scrollRestoration = "manual"), r$5(this, l$3, N$3).call(this, t$4(this, f$3)));
  }
  disconnectedCallback() {
    var e4, o2;
    (e4 = t$4(this, f$3)) == null || e4.abort(), a$2(this, f$3, null), window.removeEventListener("hashchange", t$4(this, P$2)), (o2 = t$4(this, u$5)) == null || o2.disconnectEventListener(), a$2(this, u$5, null);
  }
};
f$3 = /* @__PURE__ */ new WeakMap(), u$5 = /* @__PURE__ */ new WeakMap(), l$3 = /* @__PURE__ */ new WeakSet(), b$3 = function(...e4) {
  this.hasAttribute("debug") && console.debug("tj-loader-scroll-restore:", ...e4);
}, k$3 = function(e4, o2, c2) {
  return new Promise((d2) => {
    e4.addEventListener(o2, () => d2(), { once: true, signal: c2 }), c2.addEventListener("abort", () => d2(), { once: true });
  });
}, P$2 = /* @__PURE__ */ new WeakMap(), N$3 = async function(e4) {
  const { signal: o2 } = e4;
  if (document.readyState === "loading" && (r$5(this, l$3, b$3).call(this, "Waiting for DOMContentLoaded"), await r$5(this, l$3, k$3).call(this, document, "DOMContentLoaded", o2)), o2.aborted) return;
  const c2 = document.querySelector("tj-loader");
  if (c2 ? window.tj_loader_state !== "visual" && (r$5(this, l$3, b$3).call(this, "Waiting for loader:visual"), await r$5(this, l$3, k$3).call(this, c2, "loader:visual", o2)) : document.readyState !== "complete" && (r$5(this, l$3, b$3).call(this, "Waiting for window load (no tj-loader found)"), await r$5(this, l$3, k$3).call(this, window, "load", o2)), o2.aborted || (await new Promise((M2) => requestAnimationFrame(() => M2())), o2.aborted)) return;
  const d2 = this.getAttribute("observe-scroll-element"), $2 = d2 ? document.querySelector(d2) : window;
  if (!$2) {
    console.warn(`tj-loader-scroll-restore: '${d2}' did not match a scroll element.`);
    return;
  }
  r$5(this, l$3, b$3).call(this, "Restoring scroll position", d2 || "window"), a$2(this, u$5, new B$4($2, "scroll-position1", (...M2) => r$5(this, l$3, b$3).call(this, ...M2))), t$4(this, u$5).restoreScrollPosition(), t$4(this, u$5).connectEventListener(), window.addEventListener("hashchange", t$4(this, P$2));
};
customElements.get("tj-loader-scroll-restore") ? console.error("tj-loader-scroll-restore is already defined. Please check for duplicate imports.") : customElements.define("tj-loader-scroll-restore", J$2);
Object.defineProperty(window, "tj_loader_state", {
  configurable: true,
  enumerable: true,
  get() {
    return C$3.state;
  },
  set() {
    throw new Error("Cannot set tj_loader_state directly.");
  }
});
var j$2 = Object.defineProperty;
var I$2 = (n3) => {
  throw TypeError(n3);
};
var F$2 = (n3, t2, e4) => t2 in n3 ? j$2(n3, t2, { enumerable: true, configurable: true, writable: true, value: e4 }) : n3[t2] = e4;
var f$2 = (n3, t2, e4) => F$2(n3, typeof t2 != "symbol" ? t2 + "" : t2, e4), L$3 = (n3, t2, e4) => t2.has(n3) || I$2("Cannot " + e4);
var c$4 = (n3, t2, e4) => (L$3(n3, t2, "read from private field"), e4 ? e4.call(n3) : t2.get(n3)), m$4 = (n3, t2, e4) => t2.has(n3) ? I$2("Cannot add the same private member more than once") : t2 instanceof WeakSet ? t2.add(n3) : t2.set(n3, e4), p$4 = (n3, t2, e4, i4) => (L$3(n3, t2, "write to private field"), t2.set(n3, e4), e4), g$3 = (n3, t2, e4) => (L$3(n3, t2, "access private method"), e4);
const k$2 = [
  { name: "xs", minWidth: 0 },
  { name: "sm", minWidth: 576 },
  { name: "md", minWidth: 768 },
  { name: "lg", minWidth: 992 },
  { name: "xl", minWidth: 1200 },
  { name: "xxl", minWidth: 1400 }
], W$2 = k$2.reduce(
  (n3, t2) => (n3[t2.name] = t2.minWidth, n3),
  {}
);
function E$2(n3) {
  if (!(n3 in W$2))
    throw new Error(`Unknown breakpoint: ${n3}`);
  return W$2[n3];
}
function H$3() {
  return window.visualViewport ? window.visualViewport.width : window.innerWidth;
}
function U$2(n3) {
  n3 === void 0 && (n3 = H$3());
  for (let t2 = k$2.length - 1; t2 >= 0; t2--)
    if (n3 >= k$2[t2].minWidth)
      return k$2[t2].name;
  return "xs";
}
function it$1(n3, t2 = {}, e4 = []) {
  Array.isArray(e4) || (e4 = [e4]);
  const i4 = document.createElement(n3);
  for (const r2 in t2)
    t2[r2] !== null && t2[r2] !== void 0 && i4.setAttribute(r2, t2[r2] !== true ? t2[r2] : "");
  for (const r2 of e4)
    i4.append(typeof r2 == "string" ? document.createTextNode(r2) : r2);
  return i4;
}
let N$2 = class N {
  /**
   *
   * @param delay     Debounce delay in milliseconds
   * @param max_delay Maximum delay in milliseconds, if false then no maximum delay is applied
   */
  constructor(t2, e4 = false) {
    f$2(this, "timeout", null);
    f$2(this, "startTimeWithMs", 0);
    f$2(this, "maxTimeout", null);
    this.delay = t2, this.max_delay = e4;
  }
  async wait() {
    return this.startTimeWithMs === 0 && (this.startTimeWithMs = Date.now()), this.timeout && (this.max_delay === false || this.startTimeWithMs + this.max_delay > Date.now()) && (clearTimeout(this.timeout), this.timeout = null), new Promise((t2) => {
      this.timeout || (this.timeout = setTimeout(() => {
        this.timeout = null, this.startTimeWithMs = 0, t2(true);
      }, this.delay));
    });
  }
  /**
   * @deprecated Use wait() instead and handle the callback logic in the caller function for better control and flexibility.
   * @param callback
   */
  debounce(t2) {
    const e4 = Date.now();
    this.startTimeWithMs === 0 && (this.startTimeWithMs = e4);
    const i4 = () => {
      this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.maxTimeout && (clearTimeout(this.maxTimeout), this.maxTimeout = null), this.startTimeWithMs = 0, t2();
    };
    if (this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(i4, this.delay), this.max_delay !== false && !this.maxTimeout) {
      const r2 = e4 - this.startTimeWithMs, s2 = Math.max(0, this.max_delay - r2);
      this.maxTimeout = setTimeout(i4, s2);
    }
  }
};
const z$3 = /* @__PURE__ */ new Set(["button", "image", "reset", "submit"]);
function G$1(n3) {
  return n3.endsWith("[]") ? n3.slice(0, -2) : n3;
}
function A$3(n3) {
  return n3 instanceof HTMLInputElement ? n3.type.toLowerCase() : "";
}
function K$1(n3) {
  if (n3 instanceof HTMLSelectElement && n3.multiple)
    return Array.from(n3.selectedOptions, (t2) => t2.value);
  if (n3 instanceof HTMLInputElement) {
    if (n3.type === "file")
      return Array.from(n3.files ?? []);
    if (n3.type === "checkbox")
      return n3.checked;
    if (n3.type === "radio")
      return n3.checked ? n3.value : void 0;
  }
  return n3.value;
}
function q$2(n3, t2) {
  if (n3 instanceof HTMLSelectElement && n3.multiple) {
    const e4 = new Set(Array.isArray(t2) ? t2.map(String) : t2 == null ? [] : [String(t2)]);
    for (const i4 of Array.from(n3.options))
      i4.selected = e4.has(i4.value);
    return;
  }
  if (n3 instanceof HTMLInputElement) {
    if (n3.type === "file") {
      (t2 == null || Array.isArray(t2) && t2.length === 0) && (n3.value = "");
      return;
    }
    if (n3.type === "checkbox") {
      n3.checked = !!t2;
      return;
    }
    if (n3.type === "radio") {
      n3.checked = typeof t2 == "boolean" ? t2 : n3.value === String(t2);
      return;
    }
  }
  n3.value = t2;
}
function x$3(n3, t2, e4) {
  if (!(e4 == null || e4 === false)) {
    if (e4 instanceof FormData) {
      e4.forEach((i4, r2) => n3.append(r2, i4));
      return;
    }
    if (Array.isArray(e4)) {
      e4.forEach((i4) => x$3(n3, t2, i4));
      return;
    }
    if (e4 instanceof Blob) {
      n3.append(t2, e4);
      return;
    }
    n3.append(t2, String(e4));
  }
}
let st$2 = class st {
  constructor(t2) {
    this.root = t2;
  }
  get entries() {
    const t2 = [];
    for (const e4 of Array.from(this.root.querySelectorAll("[name]"))) {
      const i4 = this.getName(e4);
      !i4 || !this.isValueElement(e4) || this.hasValueElementParent(e4) || t2.push({
        name: i4,
        element: e4,
        get value() {
          return K$1(e4);
        },
        set value(r2) {
          q$2(e4, r2);
        }
      });
    }
    return t2;
  }
  get data() {
    const t2 = {};
    for (const [e4, i4] of this.groupedEntries) {
      const r2 = this.readGroup(i4);
      r2 !== void 0 && (t2[e4] = r2);
    }
    return t2;
  }
  set data(t2) {
    for (const [e4, i4] of this.groupedEntries)
      Object.prototype.hasOwnProperty.call(t2, e4) && this.writeGroup(i4, t2[e4]);
  }
  get formData() {
    const t2 = new FormData();
    for (const e4 of this.entries) {
      if (this.isDisabled(e4.element))
        continue;
      const i4 = A$3(e4.element);
      if (i4 === "checkbox" || i4 === "radio") {
        const r2 = e4.element;
        r2.checked && x$3(t2, e4.name, r2.value);
        continue;
      }
      x$3(t2, e4.name, e4.value);
    }
    return t2;
  }
  get groupedEntries() {
    const t2 = /* @__PURE__ */ new Map();
    for (const e4 of this.entries) {
      const i4 = G$1(e4.name), r2 = t2.get(i4) ?? [];
      r2.push(e4), t2.set(i4, r2);
    }
    return t2;
  }
  getName(t2) {
    var i4;
    const e4 = "name" in t2 && typeof t2.name == "string" ? t2.name : null;
    return (e4 == null ? void 0 : e4.trim()) || ((i4 = t2.getAttribute("name")) == null ? void 0 : i4.trim()) || null;
  }
  isValueElement(t2) {
    return !("value" in t2) || t2 instanceof HTMLButtonElement ? false : !(t2 instanceof HTMLInputElement && z$3.has(t2.type.toLowerCase()));
  }
  /** A named value element owns its value, so its descendants are not collected twice. */
  hasValueElementParent(t2) {
    let e4 = t2.parentElement;
    for (; e4 && e4 !== this.root; ) {
      if (this.getName(e4) && this.isValueElement(e4))
        return true;
      e4 = e4.parentElement;
    }
    return false;
  }
  isDisabled(t2) {
    return !!t2.disabled || t2.hasAttribute("disabled") || t2.matches(":disabled");
  }
  readGroup(t2) {
    var r2;
    const e4 = new Set(t2.map((s2) => A$3(s2.element))), i4 = t2.some((s2) => s2.name.endsWith("[]"));
    return e4.size === 1 && e4.has("radio") ? (r2 = t2.find((s2) => s2.element.checked)) == null ? void 0 : r2.element.value : e4.size === 1 && e4.has("checkbox") ? t2.length === 1 && !i4 ? t2[0].element.checked : t2.filter((s2) => s2.element.checked).map((s2) => s2.element.value) : i4 ? t2.flatMap((s2) => {
      const o2 = s2.value;
      return o2 === void 0 ? [] : Array.isArray(o2) ? o2 : [o2];
    }) : t2.length === 1 ? t2[0].value : t2.map((s2) => s2.value).at(-1);
  }
  writeGroup(t2, e4) {
    const i4 = new Set(t2.map((s2) => A$3(s2.element))), r2 = t2.some((s2) => s2.name.endsWith("[]"));
    if (i4.size === 1 && i4.has("radio")) {
      t2.forEach((s2) => {
        const o2 = s2.element;
        o2.checked = o2.value === String(e4);
      });
      return;
    }
    if (i4.size === 1 && i4.has("checkbox")) {
      if (t2.length === 1 && !r2 && typeof e4 == "boolean") {
        t2[0].element.checked = e4;
        return;
      }
      const s2 = new Set((Array.isArray(e4) ? e4 : e4 == null ? [] : [e4]).map(String));
      t2.forEach((o2) => {
        const a2 = o2.element;
        a2.checked = s2.has(a2.value);
      });
      return;
    }
    if (r2 && Array.isArray(e4) && t2.length > 1) {
      t2.forEach((s2, o2) => {
        s2.value = e4[o2];
      });
      return;
    }
    t2.forEach((s2) => {
      s2.value = e4;
    });
  }
};
let J$1 = class J2 {
  constructor(t2, e4, i4, r2 = "main") {
    this._debug = t2, this.myTag = e4, this.myElementId = i4, this.instanceId = r2;
  }
  debug(...t2) {
    this._debug && console.debug(`[DEBUG][${this.myTag}:${this.myElementId}:${this.instanceId}]`, ...t2);
  }
  log(...t2) {
    console.log(`[LOG][${this.myTag}:${this.myElementId}:${this.instanceId}]`, ...t2);
  }
  warn(...t2) {
    console.warn(`[WARN][${this.myTag}:${this.myElementId}:${this.instanceId}]`, ...t2);
  }
  error(...t2) {
    console.error(`[ERROR][${this.myTag}:${this.myElementId}:${this.instanceId}]`, ...t2);
  }
  throwError(...t2) {
    const e4 = `[ERROR][${this.myTag}:${this.myElementId}:${this.instanceId}] ${t2.join(" ")}`;
    throw this.error(...t2), new Error(e4);
  }
};
let at$1 = class at {
  constructor(t2, e4 = true) {
    f$2(this, "label");
    f$2(this, "last");
    f$2(this, "startTime");
    f$2(this, "running", false);
    f$2(this, "enabled");
    this.label = t2, this.enabled = e4, this.startTime = this.last = performance.now(), this.running = true;
  }
  lap(t2 = "") {
    if (!this.enabled) return;
    const e4 = performance.now(), i4 = (e4 - this.last) / 1e3;
    this.last = e4, console.debug(`[${this.label}] ${t2} +${i4.toFixed(3)}s`);
  }
  elapsed() {
    return performance.now() - this.startTime;
  }
  reset() {
    this.startTime = this.last = performance.now();
  }
  stop() {
    return this.running = false, this.elapsed();
  }
  start() {
    this.running = true, this.reset();
  }
  isRunning() {
    return this.running;
  }
};
function X$1(n3) {
  return typeof n3 == "object" && n3 !== null && !Array.isArray(n3);
}
function Q$1(n3) {
  if (n3 != null)
    try {
      return JSON.parse(n3);
    } catch {
      return;
    }
}
function $$3(n3) {
  const t2 = JSON.stringify(n3);
  return t2 === void 0 ? "null" : t2;
}
function Y$2(n3, t2) {
  const e4 = { ...t2 };
  if (X$1(n3))
    for (const i4 of Object.keys(t2))
      i4 in n3 && (e4[i4] = n3[i4]);
  return e4;
}
let D$3 = class D {
  constructor(t2, e4, i4) {
    f$2(this, "cache");
    this.backend = t2, this.storageKey = e4, this.initialValue = i4;
  }
  read() {
    if (this.cache) return this.cache;
    const t2 = this.backend ? Q$1(this.backend.getItem(this.storageKey)) : void 0, e4 = Y$2(t2, this.initialValue);
    if (this.backend && this.backend.getItem(this.storageKey) == null)
      try {
        this.backend.setItem(this.storageKey, $$3(e4));
      } catch {
      }
    return this.cache = e4, e4;
  }
  write(t2) {
    if (this.cache = t2, !!this.backend)
      try {
        this.backend.setItem(this.storageKey, $$3(t2));
      } catch {
      }
  }
  asProxy() {
    const t2 = {
      get: (e4, i4) => {
        if (typeof i4 == "symbol")
          return i4 === Symbol.toStringTag ? "Storage" : void 0;
        const r2 = this.read();
        return i4 === "toJSON" ? () => ({ ...r2 }) : r2[i4];
      },
      set: (e4, i4, r2) => {
        if (typeof i4 != "string") return false;
        const o2 = { ...this.read() };
        return o2[i4] = r2, this.write(o2), true;
      },
      deleteProperty: (e4, i4) => {
        if (typeof i4 != "string") return false;
        const r2 = this.read();
        if (!(i4 in r2)) return true;
        const s2 = { ...r2 };
        return delete s2[i4], this.write(s2), true;
      },
      has: (e4, i4) => {
        if (typeof i4 != "string") return false;
        const r2 = this.read();
        return i4 in r2;
      },
      ownKeys: () => {
        const e4 = this.read();
        return Reflect.ownKeys(e4);
      },
      getOwnPropertyDescriptor: (e4, i4) => {
        if (typeof i4 != "string") return;
        const r2 = this.read();
        if (i4 in r2)
          return {
            enumerable: true,
            configurable: true,
            writable: true,
            value: r2[i4]
          };
      }
    };
    return new Proxy({}, t2);
  }
};
function B$3(n3) {
  const t2 = globalThis.window;
  return (n3 === "session" ? t2 == null ? void 0 : t2.sessionStorage : t2 == null ? void 0 : t2.localStorage) ?? void 0;
}
function ut$1(n3, t2) {
  return new D$3(B$3("session"), n3, t2).asProxy();
}
function _$2(n3, t2, e4) {
  return new Promise((i4, r2) => {
    const s2 = (o2) => {
      n3.removeEventListener(t2, s2, e4), i4(o2);
    };
    n3.addEventListener(t2, s2, e4);
  });
}
function Z$3() {
  return document.readyState === "loading" ? new Promise((n3) => {
    document.addEventListener("DOMContentLoaded", () => n3());
  }) : Promise.resolve();
}
function dt$1() {
  return window.tj_loader_state ? window.tj_loader_state !== "loading" ? Promise.resolve() : _$2(window, "loader:ready") : C$2();
}
function lt$1() {
  return window.tj_loader_state ? window.tj_loader_state === "pre-visual" || window.tj_loader_state === "visual" ? Promise.resolve() : _$2(window, "loader:pre-visual") : C$2();
}
function C$2(n3 = window) {
  return n3 || (n3 = window), n3 === window ? document.readyState === "complete" ? Promise.resolve() : new Promise((t2) => window.addEventListener("load", () => t2(), { once: true })) : n3 instanceof HTMLImageElement ? n3.complete && n3.naturalWidth !== 0 ? Promise.resolve() : new Promise((t2, e4) => {
    n3.addEventListener("load", () => t2(), { once: true }), n3.addEventListener("error", () => e4(new Error("image error")), { once: true });
  }) : n3 instanceof HTMLMediaElement ? n3.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA ? Promise.resolve() : new Promise((t2) => n3.addEventListener("loadeddata", () => t2(), { once: true })) : new Promise((t2) => n3.addEventListener("load", () => t2(), { once: true }));
}
function gt$1(n3) {
  var e4, i4;
  class t2 extends n3 {
    constructor() {
      super(...arguments);
      m$4(this, e4, new N$2(200, 5e3));
      f$2(this, "currentBreakPoint", null);
      m$4(this, i4, async () => {
        var h3;
        await c$4(this, e4).wait(), await Z$3();
        const o2 = this, a2 = window.innerWidth;
        let d2 = getComputedStyle(o2).getPropertyValue("--breakpoint");
        if (!d2 || d2 === "")
          return;
        d2 = d2.trim().replace(/^['"]|['"]$/g, "");
        const w2 = d2.split(","), y3 = w2[0].trim(), u3 = ((h3 = w2[1]) == null ? void 0 : h3.trim()) ?? y3, l2 = U$2(a2);
        this.currentBreakPoint !== l2 && (E$2(u3) <= E$2(l2) ? o2.setAttribute("mode", "desktop") : E$2(y3) > E$2(l2) ? o2.setAttribute("mode", "mobile") : o2.setAttribute("mode", "tablet"));
      });
    }
    connectedCallback() {
      super.connectedCallback();
      try {
        c$4(this, i4).call(this), window.addEventListener("resize", c$4(this, i4)), c$4(this, i4).call(this);
      } catch (o2) {
        throw console.error("Error in BreakPointMixin:", o2, "in element", this), o2;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback(), window.removeEventListener("resize", c$4(this, i4));
    }
  }
  return e4 = /* @__PURE__ */ new WeakMap(), i4 = /* @__PURE__ */ new WeakMap(), t2;
}
const v$2 = /* @__PURE__ */ Symbol("listenerDefs"), V$3 = /* @__PURE__ */ Symbol("withEventBindings");
function wt$1(n3, t2) {
  const e4 = Array.isArray(n3) ? n3 : [n3];
  return function(i4, r2) {
    if (r2.kind !== "method") throw new Error("@Listen nur für Methoden");
    return r2.addInitializer(function() {
      const s2 = this;
      (s2[v$2] || (s2[v$2] = [])).push({
        method: r2.name,
        events: [...e4],
        opts: t2
      });
    }), function(...s2) {
      if (!this[V$3])
        throw new Error("[EventBindings] @Listen - decorator requires EventBindingMixin.");
      return i4.apply(this, s2);
    };
  };
}
function tt$1(n3, t2) {
  var e4;
  return !t2 || t2 === "host" ? n3 : t2 === "document" ? n3.ownerDocument ?? document : t2 === "window" ? ((e4 = n3.ownerDocument) == null ? void 0 : e4.defaultView) ?? window : t2 === "shadowRoot" ? n3.shadowRoot ?? n3 : typeof t2 == "function" ? t2(n3) : t2;
}
function yt$1(n3) {
  var e4, i4, R3;
  class t2 extends n3 {
    constructor(...a2) {
      super(...a2);
      m$4(this, i4);
      m$4(this, e4);
      this[V$3] = true;
    }
    connectedCallback() {
      var a2;
      (a2 = super.connectedCallback) == null || a2.call(this), g$3(this, i4, R3).call(this);
    }
    disconnectedCallback() {
      var a2, d2;
      (a2 = c$4(this, e4)) == null || a2.abort(), (d2 = super.disconnectedCallback) == null || d2.call(this);
    }
  }
  return e4 = /* @__PURE__ */ new WeakMap(), i4 = /* @__PURE__ */ new WeakSet(), R3 = function() {
    var d2, w2, y3;
    (d2 = c$4(this, e4)) == null || d2.abort(), p$4(this, e4, new AbortController());
    const a2 = this[v$2] || [];
    for (const u3 of a2) {
      const l2 = tt$1(this, (w2 = u3.opts) == null ? void 0 : w2.target), h3 = ((y3 = u3.opts) == null ? void 0 : y3.options) ?? {}, b2 = this[u3.method].bind(this);
      for (const T2 of u3.events)
        l2.addEventListener(T2, b2, { ...h3, signal: c$4(this, e4).signal });
    }
  }, t2;
}
let et$2 = 1;
function pt$1(n3) {
  var e4, i4, r2;
  class t2 extends n3 {
    constructor() {
      super(...arguments);
      m$4(this, e4, null);
      m$4(this, i4, et$2++);
      m$4(this, r2, null);
    }
    /**
     * Clears the cached debug flag so the attribute will be checked again
     * on the next log/warn/error call.
     */
    invalidateDebugCache() {
      p$4(this, e4, null);
    }
    get _debug() {
      return c$4(this, e4) !== null ? c$4(this, e4) : (this instanceof HTMLElement && p$4(this, e4, this.hasAttribute("debug") && !["false", "0", "off", "no"].includes(this.getAttribute("debug") || "")), c$4(this, e4) === true && console.info(
        // @ts-expect-error - it says tagName is not defined -whatever
        `[DEBUG][ID:${c$4(this, i4)}] LoggingMixin: Debug mode is enabled for <${this.tagName}>`,
        this
      ), c$4(this, e4) ?? false);
    }
    getLogger(a2 = "main") {
      const d2 = "<" + (this.tagName || this.constructor.name || "UnknownElement") + ">";
      return c$4(this, r2) || p$4(this, r2, new J$1(this._debug, d2, `${c$4(this, i4)}`, a2)), c$4(this, r2);
    }
    debug(...a2) {
      this.getLogger().debug(...a2);
    }
    log(...a2) {
      this.getLogger().log(...a2);
    }
    warn(...a2) {
      this.getLogger().warn(...a2);
    }
    error(...a2) {
      this.getLogger().error(...a2);
    }
    throwError(...a2) {
      return this.getLogger().throwError(...a2);
    }
  }
  return e4 = /* @__PURE__ */ new WeakMap(), i4 = /* @__PURE__ */ new WeakMap(), r2 = /* @__PURE__ */ new WeakMap(), t2;
}
function bt$1(n3) {
  class t2 extends n3 {
    connectedCallback() {
      this.dispatchEvent(
        new CustomEvent("init:child-waitreq", {
          detail: {
            element: this,
            state: "connected"
          },
          bubbles: true,
          composed: true
        })
      ), super.connectedCallback();
    }
    firstUpdated(i4) {
      var r2;
      (r2 = super.firstUpdated) == null || r2.call(this, i4), this.dispatchEvent(
        new CustomEvent("init:child-ready", {
          detail: {
            element: this,
            state: "ready"
          },
          bubbles: true,
          composed: true
        })
      );
    }
    disconnectedCallback() {
      window.dispatchEvent(
        new CustomEvent("init:child-ready", {
          detail: {
            element: this,
            state: "disconnected"
          },
          bubbles: true,
          composed: true
        })
      ), super.disconnectedCallback();
    }
  }
  return t2;
}
function Et(n3) {
  var e4, i4, M2, S3, o2, P2, O2;
  class t2 extends n3 {
    constructor() {
      super(...arguments);
      m$4(this, i4);
      m$4(this, e4, /* @__PURE__ */ new WeakMap());
      m$4(this, o2, (u3) => {
        g$3(this, i4, S3).call(this, u3.target);
      });
    }
    firstUpdated(u3) {
      var l2;
      (l2 = super.firstUpdated) == null || l2.call(this, u3), g$3(this, i4, M2).call(this);
    }
    updated(u3) {
      var l2;
      (l2 = super.updated) == null || l2.call(this, u3), g$3(this, i4, M2).call(this);
    }
  }
  return e4 = /* @__PURE__ */ new WeakMap(), i4 = /* @__PURE__ */ new WeakSet(), M2 = function() {
    var l2;
    const u3 = (l2 = this.shadowRoot) == null ? void 0 : l2.querySelectorAll("slot");
    u3 == null || u3.forEach((h3) => {
      if (g$3(this, i4, S3).call(this, h3), !c$4(this, e4).has(h3)) {
        const b2 = (T2) => c$4(this, o2).call(this, T2);
        c$4(this, e4).set(h3, b2), h3.addEventListener("slotchange", b2);
      }
    });
  }, S3 = function(u3) {
    const l2 = g$3(this, i4, P2).call(this, u3.assignedNodes({ flatten: true })), h3 = g$3(this, i4, P2).call(this, u3.childNodes);
    l2 || h3 ? u3.classList.remove("slot-empty") : u3.classList.add("slot-empty");
  }, o2 = /* @__PURE__ */ new WeakMap(), P2 = function(u3) {
    return Array.from(u3).some((l2) => g$3(this, i4, O2).call(this, l2));
  }, O2 = function(u3) {
    return u3.nodeType === Node.TEXT_NODE ? (u3.textContent || "").trim().length > 0 : u3.nodeType === Node.ELEMENT_NODE;
  }, t2;
}
const t$3 = globalThis, e$6 = t$3.ShadowRoot && (void 0 === t$3.ShadyCSS || t$3.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = /* @__PURE__ */ Symbol(), o$7 = /* @__PURE__ */ new WeakMap();
let n$4 = class n {
  constructor(t2, e4, o2) {
    if (this._$cssResult$ = true, o2 !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e4;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$6 && void 0 === t2) {
      const e4 = void 0 !== s2 && 1 === s2.length;
      e4 && (t2 = o$7.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e4 && o$7.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$4 = (t2) => new n$4("string" == typeof t2 ? t2 : t2 + "", void 0, s$2), i$5 = (t2, ...e4) => {
  const o2 = 1 === t2.length ? t2[0] : e4.reduce((e5, s2, o3) => e5 + ((t3) => {
    if (true === t3._$cssResult$) return t3.cssText;
    if ("number" == typeof t3) return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s2) + t2[o3 + 1], t2[0]);
  return new n$4(o2, t2, s$2);
}, S$3 = (s2, o2) => {
  if (e$6) s2.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else for (const e4 of o2) {
    const o3 = document.createElement("style"), n3 = t$3.litNonce;
    void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e4.cssText, s2.appendChild(o3);
  }
}, c$3 = e$6 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e4 = "";
  for (const s2 of t3.cssRules) e4 += s2.cssText;
  return r$4(e4);
})(t2) : t2;
const { is: i$4, defineProperty: e$5, getOwnPropertyDescriptor: h$3, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$6, getPrototypeOf: n$3 } = Object, a$1 = globalThis, c$2 = a$1.trustedTypes, l$2 = c$2 ? c$2.emptyScript : "", p$3 = a$1.reactiveElementPolyfillSupport, d$2 = (t2, s2) => t2, u$4 = { toAttribute(t2, s2) {
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
  let i4 = t2;
  switch (s2) {
    case Boolean:
      i4 = null !== t2;
      break;
    case Number:
      i4 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i4 = JSON.parse(t2);
      } catch (t3) {
        i4 = null;
      }
  }
  return i4;
} }, f$1 = (t2, s2) => !i$4(t2, s2), b$2 = { attribute: true, type: String, converter: u$4, reflect: false, useDefault: false, hasChanged: f$1 };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let y$1 = class y extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ??= []).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s2 = b$2) {
    if (s2.state && (s2.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t2) && ((s2 = Object.create(s2)).wrapped = true), this.elementProperties.set(t2, s2), !s2.noAccessor) {
      const i4 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t2, i4, s2);
      void 0 !== h3 && e$5(this.prototype, t2, h3);
    }
  }
  static getPropertyDescriptor(t2, s2, i4) {
    const { get: e4, set: r2 } = h$3(this.prototype, t2) ?? { get() {
      return this[s2];
    }, set(t3) {
      this[s2] = t3;
    } };
    return { get: e4, set(s3) {
      const h3 = e4?.call(this);
      r2?.call(this, s3), this.requestUpdate(t2, h3, i4);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? b$2;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$2("elementProperties"))) return;
    const t2 = n$3(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$2("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$2("properties"))) {
      const t3 = this.properties, s2 = [...r$3(t3), ...o$6(t3)];
      for (const i4 of s2) this.createProperty(i4, t3[i4]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s2 = litPropertyMetadata.get(t2);
      if (void 0 !== s2) for (const [t3, i4] of s2) this.elementProperties.set(t3, i4);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s2] of this.elementProperties) {
      const i4 = this._$Eu(t3, s2);
      void 0 !== i4 && this._$Eh.set(i4, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s2) {
    const i4 = [];
    if (Array.isArray(s2)) {
      const e4 = new Set(s2.flat(1 / 0).reverse());
      for (const s3 of e4) i4.unshift(c$3(s3));
    } else void 0 !== s2 && i4.push(c$3(s2));
    return i4;
  }
  static _$Eu(t2, s2) {
    const i4 = s2.attribute;
    return false === i4 ? void 0 : "string" == typeof i4 ? i4 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t2) => t2(this));
  }
  addController(t2) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t2), void 0 !== this.renderRoot && this.isConnected && t2.hostConnected?.();
  }
  removeController(t2) {
    this._$EO?.delete(t2);
  }
  _$E_() {
    const t2 = /* @__PURE__ */ new Map(), s2 = this.constructor.elementProperties;
    for (const i4 of s2.keys()) this.hasOwnProperty(i4) && (t2.set(i4, this[i4]), delete this[i4]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$3(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t2) => t2.hostConnected?.());
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t2) => t2.hostDisconnected?.());
  }
  attributeChangedCallback(t2, s2, i4) {
    this._$AK(t2, i4);
  }
  _$ET(t2, s2) {
    const i4 = this.constructor.elementProperties.get(t2), e4 = this.constructor._$Eu(t2, i4);
    if (void 0 !== e4 && true === i4.reflect) {
      const h3 = (void 0 !== i4.converter?.toAttribute ? i4.converter : u$4).toAttribute(s2, i4.type);
      this._$Em = t2, null == h3 ? this.removeAttribute(e4) : this.setAttribute(e4, h3), this._$Em = null;
    }
  }
  _$AK(t2, s2) {
    const i4 = this.constructor, e4 = i4._$Eh.get(t2);
    if (void 0 !== e4 && this._$Em !== e4) {
      const t3 = i4.getPropertyOptions(e4), h3 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== t3.converter?.fromAttribute ? t3.converter : u$4;
      this._$Em = e4;
      const r2 = h3.fromAttribute(s2, t3.type);
      this[e4] = r2 ?? this._$Ej?.get(e4) ?? r2, this._$Em = null;
    }
  }
  requestUpdate(t2, s2, i4, e4 = false, h3) {
    if (void 0 !== t2) {
      const r2 = this.constructor;
      if (false === e4 && (h3 = this[t2]), i4 ??= r2.getPropertyOptions(t2), !((i4.hasChanged ?? f$1)(h3, s2) || i4.useDefault && i4.reflect && h3 === this._$Ej?.get(t2) && !this.hasAttribute(r2._$Eu(t2, i4)))) return;
      this.C(t2, s2, i4);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t2, s2, { useDefault: i4, reflect: e4, wrapped: h3 }, r2) {
    i4 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t2) && (this._$Ej.set(t2, r2 ?? s2 ?? this[t2]), true !== h3 || void 0 !== r2) || (this._$AL.has(t2) || (this.hasUpdated || i4 || (s2 = void 0), this._$AL.set(t2, s2)), true === e4 && this._$Em !== t2 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t2));
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
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t4, s3] of this._$Ep) this[t4] = s3;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0) for (const [s3, i4] of t3) {
        const { wrapped: t4 } = i4, e4 = this[s3];
        true !== t4 || this._$AL.has(s3) || void 0 === e4 || this.C(s3, void 0, i4, e4);
      }
    }
    let t2 = false;
    const s2 = this._$AL;
    try {
      t2 = this.shouldUpdate(s2), t2 ? (this.willUpdate(s2), this._$EO?.forEach((t3) => t3.hostUpdate?.()), this.update(s2)) : this._$EM();
    } catch (s3) {
      throw t2 = false, this._$EM(), s3;
    }
    t2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    this._$EO?.forEach((t3) => t3.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
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
    this._$Eq &&= this._$Eq.forEach((t3) => this._$ET(t3, this[t3])), this._$EM();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$2("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$2("finalized")] = /* @__PURE__ */ new Map(), p$3?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.2");
const t$2 = globalThis, i$3 = (t2) => t2, s$1 = t$2.trustedTypes, e$4 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, h$2 = "$lit$", o$5 = `lit$${Math.random().toFixed(9).slice(2)}$`, n$2 = "?" + o$5, r$2 = `<${n$2}>`, l$1 = document, c$1 = () => l$1.createComment(""), a = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, u$3 = Array.isArray, d$1 = (t2) => u$3(t2) || "function" == typeof t2?.[Symbol.iterator], f = "[ 	\n\f\r]", v$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _$1 = /-->/g, m$3 = />/g, p$2 = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g$2 = /'/g, $$2 = /"/g, y2 = /^(?:script|style|textarea|title)$/i, x$2 = (t2) => (i4, ...s2) => ({ _$litType$: t2, strings: i4, values: s2 }), b$1 = x$2(1), E$1 = /* @__PURE__ */ Symbol.for("lit-noChange"), A$2 = /* @__PURE__ */ Symbol.for("lit-nothing"), C$1 = /* @__PURE__ */ new WeakMap(), P$1 = l$1.createTreeWalker(l$1, 129);
function V$2(t2, i4) {
  if (!u$3(t2) || !t2.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e$4 ? e$4.createHTML(i4) : i4;
}
const N$1 = (t2, i4) => {
  const s2 = t2.length - 1, e4 = [];
  let n3, l2 = 2 === i4 ? "<svg>" : 3 === i4 ? "<math>" : "", c2 = v$1;
  for (let i5 = 0; i5 < s2; i5++) {
    const s3 = t2[i5];
    let a2, u3, d2 = -1, f2 = 0;
    for (; f2 < s3.length && (c2.lastIndex = f2, u3 = c2.exec(s3), null !== u3); ) f2 = c2.lastIndex, c2 === v$1 ? "!--" === u3[1] ? c2 = _$1 : void 0 !== u3[1] ? c2 = m$3 : void 0 !== u3[2] ? (y2.test(u3[2]) && (n3 = RegExp("</" + u3[2], "g")), c2 = p$2) : void 0 !== u3[3] && (c2 = p$2) : c2 === p$2 ? ">" === u3[0] ? (c2 = n3 ?? v$1, d2 = -1) : void 0 === u3[1] ? d2 = -2 : (d2 = c2.lastIndex - u3[2].length, a2 = u3[1], c2 = void 0 === u3[3] ? p$2 : '"' === u3[3] ? $$2 : g$2) : c2 === $$2 || c2 === g$2 ? c2 = p$2 : c2 === _$1 || c2 === m$3 ? c2 = v$1 : (c2 = p$2, n3 = void 0);
    const x3 = c2 === p$2 && t2[i5 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === v$1 ? s3 + r$2 : d2 >= 0 ? (e4.push(a2), s3.slice(0, d2) + h$2 + s3.slice(d2) + o$5 + x3) : s3 + o$5 + (-2 === d2 ? i5 : x3);
  }
  return [V$2(t2, l2 + (t2[s2] || "<?>") + (2 === i4 ? "</svg>" : 3 === i4 ? "</math>" : "")), e4];
};
let S$2 = class S {
  constructor({ strings: t2, _$litType$: i4 }, e4) {
    let r2;
    this.parts = [];
    let l2 = 0, a2 = 0;
    const u3 = t2.length - 1, d2 = this.parts, [f2, v2] = N$1(t2, i4);
    if (this.el = S.createElement(f2, e4), P$1.currentNode = this.el.content, 2 === i4 || 3 === i4) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = P$1.nextNode()) && d2.length < u3; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes()) for (const t3 of r2.getAttributeNames()) if (t3.endsWith(h$2)) {
          const i5 = v2[a2++], s2 = r2.getAttribute(t3).split(o$5), e5 = /([.?@])?(.*)/.exec(i5);
          d2.push({ type: 1, index: l2, name: e5[2], strings: s2, ctor: "." === e5[1] ? I$1 : "?" === e5[1] ? L$2 : "@" === e5[1] ? z$2 : H$2 }), r2.removeAttribute(t3);
        } else t3.startsWith(o$5) && (d2.push({ type: 6, index: l2 }), r2.removeAttribute(t3));
        if (y2.test(r2.tagName)) {
          const t3 = r2.textContent.split(o$5), i5 = t3.length - 1;
          if (i5 > 0) {
            r2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i5; s2++) r2.append(t3[s2], c$1()), P$1.nextNode(), d2.push({ type: 2, index: ++l2 });
            r2.append(t3[i5], c$1());
          }
        }
      } else if (8 === r2.nodeType) if (r2.data === n$2) d2.push({ type: 2, index: l2 });
      else {
        let t3 = -1;
        for (; -1 !== (t3 = r2.data.indexOf(o$5, t3 + 1)); ) d2.push({ type: 7, index: l2 }), t3 += o$5.length - 1;
      }
      l2++;
    }
  }
  static createElement(t2, i4) {
    const s2 = l$1.createElement("template");
    return s2.innerHTML = t2, s2;
  }
};
function M$2(t2, i4, s2 = t2, e4) {
  if (i4 === E$1) return i4;
  let h3 = void 0 !== e4 ? s2._$Co?.[e4] : s2._$Cl;
  const o2 = a(i4) ? void 0 : i4._$litDirective$;
  return h3?.constructor !== o2 && (h3?._$AO?.(false), void 0 === o2 ? h3 = void 0 : (h3 = new o2(t2), h3._$AT(t2, s2, e4)), void 0 !== e4 ? (s2._$Co ??= [])[e4] = h3 : s2._$Cl = h3), void 0 !== h3 && (i4 = M$2(t2, h3._$AS(t2, i4.values), h3, e4)), i4;
}
let R$2 = class R {
  constructor(t2, i4) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i4;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i4 }, parts: s2 } = this._$AD, e4 = (t2?.creationScope ?? l$1).importNode(i4, true);
    P$1.currentNode = e4;
    let h3 = P$1.nextNode(), o2 = 0, n3 = 0, r2 = s2[0];
    for (; void 0 !== r2; ) {
      if (o2 === r2.index) {
        let i5;
        2 === r2.type ? i5 = new k$1(h3, h3.nextSibling, this, t2) : 1 === r2.type ? i5 = new r2.ctor(h3, r2.name, r2.strings, this, t2) : 6 === r2.type && (i5 = new Z$2(h3, this, t2)), this._$AV.push(i5), r2 = s2[++n3];
      }
      o2 !== r2?.index && (h3 = P$1.nextNode(), o2++);
    }
    return P$1.currentNode = l$1, e4;
  }
  p(t2) {
    let i4 = 0;
    for (const s2 of this._$AV) void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i4), i4 += s2.strings.length - 2) : s2._$AI(t2[i4])), i4++;
  }
};
let k$1 = class k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t2, i4, s2, e4) {
    this.type = 2, this._$AH = A$2, this._$AN = void 0, this._$AA = t2, this._$AB = i4, this._$AM = s2, this.options = e4, this._$Cv = e4?.isConnected ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i4 = this._$AM;
    return void 0 !== i4 && 11 === t2?.nodeType && (t2 = i4.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i4 = this) {
    t2 = M$2(this, t2, i4), a(t2) ? t2 === A$2 || null == t2 || "" === t2 ? (this._$AH !== A$2 && this._$AR(), this._$AH = A$2) : t2 !== this._$AH && t2 !== E$1 && this._(t2) : void 0 !== t2._$litType$ ? this.$(t2) : void 0 !== t2.nodeType ? this.T(t2) : d$1(t2) ? this.k(t2) : this._(t2);
  }
  O(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  _(t2) {
    this._$AH !== A$2 && a(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(l$1.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    const { values: i4, _$litType$: s2 } = t2, e4 = "number" == typeof s2 ? this._$AC(t2) : (void 0 === s2.el && (s2.el = S$2.createElement(V$2(s2.h, s2.h[0]), this.options)), s2);
    if (this._$AH?._$AD === e4) this._$AH.p(i4);
    else {
      const t3 = new R$2(e4, this), s3 = t3.u(this.options);
      t3.p(i4), this.T(s3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i4 = C$1.get(t2.strings);
    return void 0 === i4 && C$1.set(t2.strings, i4 = new S$2(t2)), i4;
  }
  k(t2) {
    u$3(this._$AH) || (this._$AH = [], this._$AR());
    const i4 = this._$AH;
    let s2, e4 = 0;
    for (const h3 of t2) e4 === i4.length ? i4.push(s2 = new k(this.O(c$1()), this.O(c$1()), this, this.options)) : s2 = i4[e4], s2._$AI(h3), e4++;
    e4 < i4.length && (this._$AR(s2 && s2._$AB.nextSibling, e4), i4.length = e4);
  }
  _$AR(t2 = this._$AA.nextSibling, s2) {
    for (this._$AP?.(false, true, s2); t2 !== this._$AB; ) {
      const s3 = i$3(t2).nextSibling;
      i$3(t2).remove(), t2 = s3;
    }
  }
  setConnected(t2) {
    void 0 === this._$AM && (this._$Cv = t2, this._$AP?.(t2));
  }
};
let H$2 = class H {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i4, s2, e4, h3) {
    this.type = 1, this._$AH = A$2, this._$AN = void 0, this.element = t2, this.name = i4, this._$AM = e4, this.options = h3, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A$2;
  }
  _$AI(t2, i4 = this, s2, e4) {
    const h3 = this.strings;
    let o2 = false;
    if (void 0 === h3) t2 = M$2(this, t2, i4, 0), o2 = !a(t2) || t2 !== this._$AH && t2 !== E$1, o2 && (this._$AH = t2);
    else {
      const e5 = t2;
      let n3, r2;
      for (t2 = h3[0], n3 = 0; n3 < h3.length - 1; n3++) r2 = M$2(this, e5[s2 + n3], i4, n3), r2 === E$1 && (r2 = this._$AH[n3]), o2 ||= !a(r2) || r2 !== this._$AH[n3], r2 === A$2 ? t2 = A$2 : t2 !== A$2 && (t2 += (r2 ?? "") + h3[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e4 && this.j(t2);
  }
  j(t2) {
    t2 === A$2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
};
let I$1 = class I extends H$2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A$2 ? void 0 : t2;
  }
};
let L$2 = class L extends H$2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== A$2);
  }
};
let z$2 = class z extends H$2 {
  constructor(t2, i4, s2, e4, h3) {
    super(t2, i4, s2, e4, h3), this.type = 5;
  }
  _$AI(t2, i4 = this) {
    if ((t2 = M$2(this, t2, i4, 0) ?? A$2) === E$1) return;
    const s2 = this._$AH, e4 = t2 === A$2 && s2 !== A$2 || t2.capture !== s2.capture || t2.once !== s2.once || t2.passive !== s2.passive, h3 = t2 !== A$2 && (s2 === A$2 || e4);
    e4 && this.element.removeEventListener(this.name, this, s2), h3 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
};
let Z$2 = class Z {
  constructor(t2, i4, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    M$2(this, t2);
  }
};
const B$2 = t$2.litHtmlPolyfillSupport;
B$2?.(S$2, k$1), (t$2.litHtmlVersions ??= []).push("3.3.3");
const D$2 = (t2, i4, s2) => {
  const e4 = s2?.renderBefore ?? i4;
  let h3 = e4._$litPart$;
  if (void 0 === h3) {
    const t3 = s2?.renderBefore ?? null;
    e4._$litPart$ = h3 = new k$1(i4.insertBefore(c$1(), t3), t3, void 0, s2 ?? {});
  }
  return h3._$AI(t2), h3;
};
const s = globalThis;
let i$2 = class i extends y$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t2 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t2.firstChild, t2;
  }
  update(t2) {
    const r2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D$2(r2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E$1;
  }
};
i$2._$litElement$ = true, i$2["finalized"] = true, s.litElementHydrateSupport?.({ LitElement: i$2 });
const o$4 = s.litElementPolyfillSupport;
o$4?.({ LitElement: i$2 });
(s.litElementVersions ??= []).push("4.2.2");
const t$1 = (t2) => (e4, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e4);
  }) : customElements.define(t2, e4);
};
const o$3 = { attribute: true, type: String, converter: u$4, reflect: false, hasChanged: f$1 }, r$1 = (t2 = o$3, e4, r2) => {
  const { kind: n3, metadata: i4 } = r2;
  let s2 = globalThis.litPropertyMetadata.get(i4);
  if (void 0 === s2 && globalThis.litPropertyMetadata.set(i4, s2 = /* @__PURE__ */ new Map()), "setter" === n3 && ((t2 = Object.create(t2)).wrapped = true), s2.set(r2.name, t2), "accessor" === n3) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n4 = e4.get.call(this);
      e4.set.call(this, r3), this.requestUpdate(o2, n4, t2, true, r3);
    }, init(e5) {
      return void 0 !== e5 && this.C(o2, void 0, t2, e5), e5;
    } };
  }
  if ("setter" === n3) {
    const { name: o2 } = r2;
    return function(r3) {
      const n4 = this[o2];
      e4.call(this, r3), this.requestUpdate(o2, n4, t2, true, r3);
    };
  }
  throw Error("Unsupported decorator location: " + n3);
};
function n$1(t2) {
  return (e4, o2) => "object" == typeof o2 ? r$1(t2, e4, o2) : ((t3, e5, o3) => {
    const r2 = e5.hasOwnProperty(o3);
    return e5.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e5, o3) : void 0;
  })(t2, e4, o2);
}
function r(r2) {
  return n$1({ ...r2, state: true, attribute: false });
}
const e$3 = (e4, t2, c2) => (c2.configurable = true, c2.enumerable = true, Reflect.decorate && "object" != typeof t2 && Object.defineProperty(e4, t2, c2), c2);
function e$2(e4, r2) {
  return (n3, s2, i4) => {
    const o2 = (t2) => t2.renderRoot?.querySelector(e4) ?? null;
    return e$3(n3, s2, { get() {
      return o2(this);
    } });
  };
}
function o$2(o2) {
  return (e4, n3) => {
    const { slot: r2, selector: s2 } = {}, c2 = "slot" + (r2 ? `[name=${r2}]` : ":not([name])");
    return e$3(e4, n3, { get() {
      const t2 = this.renderRoot?.querySelector(c2), e5 = t2?.assignedElements(o2) ?? [];
      return void 0 === s2 ? e5 : e5.filter((t3) => t3.matches(s2));
    } });
  };
}
const ke = ":host{--border-color: red;--background-color: lightgray;font-family:Arial,sans-serif}#error-fixed-indicator{position:fixed;top:10px;right:10px;cursor:pointer;z-index:100000;padding:5px 10px;width:auto;max-width:90vw;min-width:100px;height:auto;box-shadow:0 4px 8px #0003;border:5px solid white;color:#fff;background-color:red;animation:blink 1s infinite;border-radius:15px;font-size:20px;font-weight:700;font-family:Arial,sans-serif}@keyframes blink{0%,to{background-color:#000}50%{background-color:red}}#error{background-color:var(--background-color);border:3px solid var(--border-color);padding:10px;margin:10px;border-radius:5px}h1{color:red;font-size:24px;margin:0}.error-details{font-size:14px;max-height:200px;overflow:auto}";
var Se = Object.create, z$1 = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, ie = (t2, e4) => (e4 = Symbol[t2]) ? e4 : /* @__PURE__ */ Symbol.for("Symbol." + t2), b = (t2) => {
  throw TypeError(t2);
}, Le = (t2, e4, r2) => e4 in t2 ? z$1(t2, e4, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e4] = r2, G = (t2, e4) => z$1(t2, "name", { value: e4, configurable: true }), Ie = (t2) => [, , , Se((t2 == null ? void 0 : t2[ie("metadata")]) ?? null)], oe = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], k2 = (t2) => t2 !== void 0 && typeof t2 != "function" ? b("Function expected") : t2, Pe = (t2, e4, r2, i4, n3) => ({ kind: oe[t2], name: e4, metadata: i4, addInitializer: (o2) => r2._ ? b("Already initialized") : n3.push(k2(o2 || null)) }), Te = (t2, e4) => Le(e4, ie("metadata"), t2[3]), M$1 = (t2, e4, r2, i4) => {
  for (var n3 = 0, o2 = t2[e4 >> 1], s2 = o2 && o2.length; n3 < s2; n3++) e4 & 1 ? o2[n3].call(r2) : i4 = o2[n3].call(r2, i4);
  return i4;
}, se = (t2, e4, r2, i4, n3, o2) => {
  var s2, l2, p2, c2, d2, a2 = e4 & 7, f2 = !!(e4 & 8), u3 = !!(e4 & 16), m2 = a2 > 3 ? t2.length + 1 : a2 ? f2 ? 1 : 2 : 0, E2 = oe[a2 + 5], C2 = a2 > 3 && (t2[m2 - 1] = []), P2 = t2[m2] || (t2[m2] = []), v2 = a2 && (!u3 && !f2 && (n3 = n3.prototype), a2 < 5 && (a2 > 3 || !u3) && $e(a2 < 4 ? n3 : { get [r2]() {
    return V$1(this, o2);
  }, set [r2](h3) {
    return Q(this, o2, h3);
  } }, r2));
  a2 ? u3 && a2 < 4 && G(o2, (a2 > 2 ? "set " : a2 > 1 ? "get " : "") + r2) : G(n3, r2);
  for (var y3 = i4.length - 1; y3 >= 0; y3--)
    c2 = Pe(a2, r2, p2 = {}, t2[3], P2), a2 && (c2.static = f2, c2.private = u3, d2 = c2.access = { has: u3 ? (h3) => Ne(n3, h3) : (h3) => r2 in h3 }, a2 ^ 3 && (d2.get = u3 ? (h3) => (a2 ^ 1 ? V$1 : Oe)(h3, n3, a2 ^ 4 ? o2 : v2.get) : (h3) => h3[r2]), a2 > 2 && (d2.set = u3 ? (h3, _2) => Q(h3, n3, _2, a2 ^ 4 ? o2 : v2.set) : (h3, _2) => h3[r2] = _2)), l2 = (0, i4[y3])(a2 ? a2 < 4 ? u3 ? o2 : v2[E2] : a2 > 4 ? void 0 : { get: v2.get, set: v2.set } : n3, c2), p2._ = 1, a2 ^ 4 || l2 === void 0 ? k2(l2) && (a2 > 4 ? C2.unshift(l2) : a2 ? u3 ? o2 = l2 : v2[E2] = l2 : n3 = l2) : typeof l2 != "object" || l2 === null ? b("Object expected") : (k2(s2 = l2.get) && (v2.get = s2), k2(s2 = l2.set) && (v2.set = s2), k2(s2 = l2.init) && C2.unshift(s2));
  return a2 || Te(t2, n3), v2 && z$1(n3, r2, v2), u3 ? a2 ^ 4 ? o2 : v2 : n3;
}, R$1 = (t2, e4, r2) => e4.has(t2) || b("Cannot " + r2), Ne = (t2, e4) => Object(e4) !== e4 ? b('Cannot use the "in" operator on this value') : t2.has(e4), V$1 = (t2, e4, r2) => (R$1(t2, e4, "read from private field"), r2 ? r2.call(t2) : e4.get(t2)), Me = (t2, e4, r2) => e4.has(t2) ? b("Cannot add the same private member more than once") : e4 instanceof WeakSet ? e4.add(t2) : e4.set(t2, r2), Q = (t2, e4, r2, i4) => (R$1(t2, e4, "write to private field"), i4 ? i4.call(t2, r2) : e4.set(t2, r2), r2), Oe = (t2, e4, r2) => (R$1(t2, e4, "access private method"), r2), ae, O$1, le, w$1, D$1;
le = [t$1("tj-error-element")];
let x$1 = class x extends (O$1 = i$2, ae = [n$1({ type: String, reflect: true })], O$1) {
  constructor(e4 = "An error occurred", r2) {
    super(), this.originalCode = void 0, Me(this, D$1, M$1(w$1, 8, this)), M$1(w$1, 11, this), this.message = e4, this.originalCode = r2;
  }
  static get is() {
    return "tj-error-element";
  }
  render() {
    return b$1`
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
};
w$1 = Ie(O$1);
D$1 = /* @__PURE__ */ new WeakMap();
se(w$1, 4, "message", ae, x$1, D$1);
x$1 = se(w$1, 0, "TjErrorElement", le, x$1);
x$1.styles = [r$4(ke)];
M$1(w$1, 1, x$1);
function H$1(t2, { allowAttributes: e4 = true, ignoreGaps: r2 = true } = {}) {
  let i4 = "div", n3 = null, o2 = [], s2 = [], l2 = {};
  const p2 = /(^[a-z][\w-]*)|#[\w-]+|\.[\w:-]+|\[\s*([\w-]+)(?:\s*=\s*(['"]?)(.*?)\3)?\s*\]/gi;
  let c2 = 0;
  for (; ; ) {
    const d2 = p2.exec(t2);
    if (!d2 || d2.index !== c2) {
      if (!r2 && d2 && d2.index > c2)
        break;
      break;
    }
    const a2 = d2[0];
    if (a2[0] === "#") n3 = a2.slice(1);
    else if (a2[0] === ".") o2.push(a2.slice(1));
    else if (a2[0] === "[") {
      if (!e4) throw new Error(`Attributes not allowed: '${a2}'`);
      const f2 = d2[2], u3 = d2[4] || void 0;
      s2.push({ name: f2, value: u3 }), l2[f2] = u3;
    } else i4 = a2;
    c2 += a2.length;
  }
  return { tag: i4, id: n3, classes: o2, attrs: s2, attrsMap: l2, length: c2, rest: t2.slice(c2) };
}
function We(t2) {
  return typeof t2.beforeLayoutCallback == "function";
}
function ze(t2, e4, r2) {
  var a2;
  const i4 = /^(=|\+|!|-|\/|)([0-9]+(?:\.[0-9]+)?|);?/, n3 = r2.replace(i4, ""), o2 = H$1(n3), l2 = { ...Array.from(t2.attributes).reduce(
    (f2, u3) => (f2[u3.name] = u3.value, f2),
    {}
  ) };
  if (delete l2.layout, o2.classes.length > 0) {
    const f2 = [
      ...((a2 = l2.class) == null ? void 0 : a2.split(/\s+/).filter(Boolean)) ?? [],
      ...o2.classes
    ];
    l2.class = Array.from(new Set(f2)).join(" ");
  }
  o2.id && (l2.id = o2.id);
  const p2 = o2.tag || "section";
  let c2 = false, d2 = it$1(p2, { ...l2, layoutOrig: r2 });
  if (p2.includes("-") && !customElements.get(p2))
    console.warn(`Custom element <${p2}> is not registered.`), d2 = new x$1(`Custom element <${p2}> is not registered.`, t2.outerHTML), t2.replaceWith(d2), d2.append(t2), c2 = true;
  else {
    const f2 = Array.from(t2.children);
    We(d2) && (c2 = d2.beforeLayoutCallback(t2, d2, f2) === false), d2.__ORIG_ELEMENT__ = t2, d2.append(...Array.from(t2.children)), t2.replaceWith(d2);
  }
  return { replacementElement: d2, skipChildren: c2 };
}
function I2(t2, e4 = {}) {
  const { recursive: r2 = true } = e4, i4 = [];
  if (Array.isArray(t2))
    return t2.forEach((l2) => i4.push(...I2(l2, e4))), i4;
  if (!(t2 instanceof HTMLElement))
    return [];
  const n3 = t2.getAttribute("layout");
  let o2 = false, s2 = t2;
  return n3 && ({ replacementElement: s2, skipChildren: o2 } = ze(t2, e4, n3)), r2 && !o2 && Array.from(s2.children).forEach((l2) => i4.push(...I2(l2, e4))), i4;
}
const T$1 = /^(=|\+|!|-|\/|)([0-9]+(?:\.[0-9]+)?|)(;|$)/;
class Re {
  constructor(e4, r2 = false) {
    this.debug = r2, this.currentContainerNode = null, this.containerPath = [], this.containerIndex = [0], this.controlLayoutIndex = [], this.lastFixedI = 20, this.currentContainerNode = this.rootNode = e4, this.containerPath.push(this.rootNode);
  }
  getI(e4) {
    const r2 = e4.tagName, i4 = e4.getAttribute("layout"), n3 = { i: -99, variant: "new", tag: "hr", hi: null };
    if (i4) {
      const o2 = i4.match(T$1);
      if (o2) {
        const s2 = o2[1];
        n3.variant = s2 === "=" || s2 === "+" ? "append" : s2 === "!" || s2 === "-" ? "skip" : s2 === "/" ? "close" : "new", o2[2] !== "" && (n3.i = parseFloat(o2[2]) * 10);
      }
    }
    if (r2 === "HR" && i4 === null) return null;
    if (n3.variant === "close") {
      if (r2 !== "HR") throw new Error("layout close syntax (/i;) is only supported on HR control elements");
      if (n3.i === -99) {
        const o2 = this.controlLayoutIndex[this.controlLayoutIndex.length - 1];
        if (o2 === void 0) throw new Error("Cannot close current layout level: no open HR layout wrapper");
        n3.i = o2;
      }
      return n3;
    }
    if (r2 === "HR")
      return n3.i === -99 ? n3.i = this.lastFixedI + 5 : this.lastFixedI = n3.i, n3;
    if (r2.startsWith("H") && r2.length === 2) {
      let o2 = r2.substring(1);
      return n3.tag = "h", n3.hi = parseInt(o2), o2 === "1" && (o2 = "2"), n3.i === -99 && (n3.i = parseInt(o2) * 10), this.lastFixedI = n3.i, n3;
    }
    return null;
  }
  stripControlOnlyLayout(e4) {
    const r2 = e4.getAttribute("layout");
    if (!r2) return;
    const i4 = r2.match(T$1);
    i4 && r2.slice(i4[0].length).trim() === "" && e4.removeAttribute("layout");
  }
  getAttributeRecords(e4, r2 = false) {
    const i4 = {}, n3 = e4.getAttribute("layout");
    let o2 = null;
    if (n3) {
      const s2 = n3.replace(T$1, "").trim();
      s2 !== "" && (o2 = H$1(s2));
    }
    for (const s2 of Array.from(e4.attributes))
      s2.name.startsWith("section-") ? i4[s2.name.replace(/^section-/, "")] = s2.value : (s2.name.startsWith("layout") || r2) && (i4[s2.name] = s2.value, e4.removeAttribute(s2.name));
    return r2 || Array.from(e4.classList).forEach((s2) => {
      s2.startsWith("section-") && (i4.class = (i4.class ? i4.class + " " : "") + s2.replace(/^section-/, ""), e4.classList.remove(s2));
    }), o2 && (o2.classes.forEach((s2) => {
      i4.class = (i4.class ? i4.class + " " : "") + s2 + " ";
    }), o2.attrs.forEach((s2) => {
      i4[s2.name] = s2.value ?? "";
    }), o2.id && (i4.id = o2.id)), i4;
  }
  createNewContainerNode(e4, r2) {
    const i4 = this.getAttributeRecords(e4, e4.tagName === "HR"), n3 = it$1("section", i4);
    return n3.__IT = r2, n3;
  }
  arrangeSingleNode(e4, r2) {
    let i4 = 0;
    for (i4 = 0; i4 < this.containerIndex.length && !(this.containerIndex[i4] >= r2.i); i4++)
      ;
    let n3;
    if (r2.variant === "append") {
      const s2 = this.containerPath[i4];
      if (!s2 || this.containerIndex[i4] !== r2.i)
        throw new Error(`Cannot append to layout level ${r2.i / 10}: no existing section at this level`);
      n3 = s2, this.stripControlOnlyLayout(e4);
    } else
      n3 = this.createNewContainerNode(e4, r2);
    const o2 = this.containerPath[i4 - 1];
    if (!o2) throw new Error(`Cannot create layout level ${r2.i / 10}: no parent container`);
    this.containerPath.length = i4, this.containerIndex.length = i4, e4.tagName === "HR" && (e4.setAttribute("aria-hidden", "true"), e4.setAttribute("hidden", "hidden")), n3.appendChild(e4), o2.appendChild(n3), this.containerPath.push(n3), this.containerIndex.push(r2.i), this.currentContainerNode = n3, e4.tagName === "HR" && r2.variant === "new" && this.controlLayoutIndex.push(r2.i);
  }
  closeLevel(e4) {
    for (; this.containerIndex.length > 1 && this.containerIndex[this.containerIndex.length - 1] >= e4; )
      this.containerIndex.pop(), this.containerPath.pop();
    for (; this.controlLayoutIndex.length && this.controlLayoutIndex[this.controlLayoutIndex.length - 1] >= e4; )
      this.controlLayoutIndex.pop();
    this.currentContainerNode = this.containerPath[this.containerPath.length - 1] ?? this.rootNode;
  }
  appendToCurrentContainer(e4) {
    if (this.currentContainerNode === null) throw new Error("No current container node set");
    this.currentContainerNode.appendChild(e4);
  }
  arrange(e4) {
    for (const r2 of e4) {
      if (r2.nodeType !== Node.ELEMENT_NODE) {
        this.appendToCurrentContainer(r2);
        continue;
      }
      const i4 = r2, n3 = this.getI(i4);
      if (!n3) {
        this.appendToCurrentContainer(r2);
        continue;
      }
      if (n3.variant === "close") {
        i4.parentNode && i4.parentNode.removeChild(i4), this.closeLevel(n3.i);
        continue;
      }
      if (n3.variant === "skip") {
        this.stripControlOnlyLayout(i4), this.appendToCurrentContainer(r2);
        continue;
      }
      this.arrangeSingleNode(i4, n3);
    }
  }
}
const De = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), He = 3, qe = 4;
class Fe {
  constructor() {
    this.name = "text-block";
  }
  parse(e4) {
    var o2;
    const r2 = Array.from(e4.querySelectorAll("*")).reverse();
    for (const s2 of r2) {
      if (!s2.innerHTML.includes("#[")) continue;
      const l2 = this.parseLine(s2.innerHTML, e4.ownerDocument);
      l2 && s2.replaceWith(l2);
    }
    const i4 = e4.ownerDocument.createTreeWalker(e4, qe), n3 = [];
    for (; i4.nextNode(); ) {
      const s2 = i4.currentNode;
      s2.nodeType === He && ((o2 = s2.textContent) != null && o2.includes("#[")) && n3.push(s2);
    }
    for (const s2 of n3) this.parseTextNode(s2);
  }
  parseTextNode(e4) {
    const i4 = e4.data.split(/(\r?\n)/), n3 = e4.ownerDocument.createDocumentFragment();
    let o2 = false;
    for (const s2 of i4) {
      if (/^\r?\n$/.test(s2)) {
        n3.append(s2);
        continue;
      }
      const l2 = this.parseLine(s2, e4.ownerDocument);
      l2 ? (n3.append(l2), o2 = true) : n3.append(s2);
    }
    o2 && e4.replaceWith(n3);
  }
  parseLine(e4, r2) {
    const i4 = e4.match(/^\s*#\[(.*)\]\s*$/);
    if (!i4 || i4[1].includes("#[")) return null;
    const n3 = i4[1].replaceAll("&quot;", '"').replaceAll("&#39;", "'").replaceAll("&#x27;", "'").replaceAll("“", '"').replaceAll("”", '"').replaceAll("‘", "'").replaceAll("’", "'");
    try {
      return this.createElement(n3, r2);
    } catch (o2) {
      return console.warn("[tj-content-pane] Unable to parse text block:", e4, o2), null;
    }
  }
  createElement(e4, r2) {
    const { definition: i4, content: n3 } = this.splitContent(e4);
    if (!/^[a-z][\w-]*/i.test(i4)) throw new Error("The text block must start with an element name.");
    const o2 = H$1(i4, { allowAttributes: true }), s2 = o2.rest.trim(), l2 = r2.createElement(o2.tag);
    o2.id && (l2.id = o2.id), l2.classList.add(...o2.classes);
    for (const p2 of o2.attrs) this.applyAttribute(l2, p2);
    for (const p2 of this.parseAttributes(s2)) this.applyAttribute(l2, p2);
    if (n3 !== void 0) {
      if (De.has(o2.tag.toLowerCase()))
        throw new Error(`The void element <${o2.tag}> cannot have content.`);
      l2.innerHTML = n3.trim();
    }
    return l2;
  }
  splitContent(e4) {
    let r2 = null;
    for (let i4 = 0; i4 < e4.length; i4++) {
      const n3 = e4[i4];
      if (r2) {
        n3 === r2 && (r2 = null);
        continue;
      }
      if (n3 === '"' || n3 === "'") {
        r2 = n3;
        continue;
      }
      if (n3 === ">")
        return { definition: e4.slice(0, i4).trim(), content: e4.slice(i4 + 1) };
      if (e4.startsWith("&gt;", i4))
        return { definition: e4.slice(0, i4).trim(), content: e4.slice(i4 + 4) };
    }
    return { definition: e4.trim() };
  }
  parseAttributes(e4) {
    if (!e4) return [];
    const r2 = [], i4 = /([^\s"'<>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gy;
    let n3 = 0;
    for (; n3 < e4.length; ) {
      for (; /\s/.test(e4[n3] ?? ""); ) n3++;
      if (n3 >= e4.length) break;
      i4.lastIndex = n3;
      const o2 = i4.exec(e4);
      if (!o2 || o2.index !== n3) throw new Error(`Invalid attribute syntax near '${e4.slice(n3)}'.`);
      const s2 = o2[0].includes("=");
      r2.push({ name: o2[1], value: s2 ? o2[2] ?? o2[3] ?? o2[4] ?? "" : void 0 }), n3 = i4.lastIndex;
    }
    return r2;
  }
  applyAttribute(e4, r2) {
    if (r2.name.toLowerCase() === "class" && r2.value) {
      e4.classList.add(...r2.value.split(/\s+/).filter(Boolean));
      return;
    }
    e4.setAttribute(r2.name, r2.value ?? "");
  }
}
var Be = Object.create, q$1 = Object.defineProperty, je = Object.getOwnPropertyDescriptor, ce = (t2, e4) => (e4 = Symbol[t2]) ? e4 : /* @__PURE__ */ Symbol.for("Symbol." + t2), A$1 = (t2) => {
  throw TypeError(t2);
}, Ue = (t2, e4, r2) => e4 in t2 ? q$1(t2, e4, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e4] = r2, Z$1 = (t2, e4) => q$1(t2, "name", { value: e4, configurable: true }), Ge = (t2) => [, , , Be((t2 == null ? void 0 : t2[ce("metadata")]) ?? null)], ue = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], S$1 = (t2) => t2 !== void 0 && typeof t2 != "function" ? A$1("Function expected") : t2, Ve = (t2, e4, r2, i4, n3) => ({ kind: ue[t2], name: e4, metadata: i4, addInitializer: (o2) => r2._ ? A$1("Already initialized") : n3.push(S$1(o2 || null)) }), Qe = (t2, e4) => Ue(e4, ce("metadata"), t2[3]), $$1 = (t2, e4, r2, i4) => {
  for (var n3 = 0, o2 = t2[e4 >> 1], s2 = o2 && o2.length; n3 < s2; n3++) e4 & 1 ? o2[n3].call(r2) : i4 = o2[n3].call(r2, i4);
  return i4;
}, F$1 = (t2, e4, r2, i4, n3, o2) => {
  var s2, l2, p2, c2, d2, a2 = e4 & 7, f2 = !!(e4 & 8), u3 = !!(e4 & 16), m2 = a2 > 3 ? t2.length + 1 : a2 ? f2 ? 1 : 2 : 0, E2 = ue[a2 + 5], C2 = a2 > 3 && (t2[m2 - 1] = []), P2 = t2[m2] || (t2[m2] = []), v2 = a2 && (!u3 && !f2 && (n3 = n3.prototype), a2 < 5 && (a2 > 3 || !u3) && je(a2 < 4 ? n3 : { get [r2]() {
    return J3(this, o2);
  }, set [r2](h3) {
    return X(this, o2, h3);
  } }, r2));
  a2 ? u3 && a2 < 4 && Z$1(o2, (a2 > 2 ? "set " : a2 > 1 ? "get " : "") + r2) : Z$1(n3, r2);
  for (var y3 = i4.length - 1; y3 >= 0; y3--)
    c2 = Ve(a2, r2, p2 = {}, t2[3], P2), a2 && (c2.static = f2, c2.private = u3, d2 = c2.access = { has: u3 ? (h3) => Ze(n3, h3) : (h3) => r2 in h3 }, a2 ^ 3 && (d2.get = u3 ? (h3) => (a2 ^ 1 ? J3 : Je)(h3, n3, a2 ^ 4 ? o2 : v2.get) : (h3) => h3[r2]), a2 > 2 && (d2.set = u3 ? (h3, _2) => X(h3, n3, _2, a2 ^ 4 ? o2 : v2.set) : (h3, _2) => h3[r2] = _2)), l2 = (0, i4[y3])(a2 ? a2 < 4 ? u3 ? o2 : v2[E2] : a2 > 4 ? void 0 : { get: v2.get, set: v2.set } : n3, c2), p2._ = 1, a2 ^ 4 || l2 === void 0 ? S$1(l2) && (a2 > 4 ? C2.unshift(l2) : a2 ? u3 ? o2 = l2 : v2[E2] = l2 : n3 = l2) : typeof l2 != "object" || l2 === null ? A$1("Object expected") : (S$1(s2 = l2.get) && (v2.get = s2), S$1(s2 = l2.set) && (v2.set = s2), S$1(s2 = l2.init) && C2.unshift(s2));
  return a2 || Qe(t2, n3), v2 && q$1(n3, r2, v2), u3 ? a2 ^ 4 ? o2 : v2 : n3;
}, B$1 = (t2, e4, r2) => e4.has(t2) || A$1("Cannot " + r2), Ze = (t2, e4) => Object(e4) !== e4 ? A$1('Cannot use the "in" operator on this value') : t2.has(e4), J3 = (t2, e4, r2) => (B$1(t2, e4, "read from private field"), r2 ? r2.call(t2) : e4.get(t2)), K = (t2, e4, r2) => e4.has(t2) ? A$1("Cannot add the same private member more than once") : e4 instanceof WeakSet ? e4.add(t2) : e4.set(t2, r2), X = (t2, e4, r2, i4) => (B$1(t2, e4, "write to private field"), i4 ? i4.call(t2, r2) : e4.set(t2, r2), r2), Je = (t2, e4, r2) => (B$1(t2, e4, "access private method"), r2), de, he, W$1, pe, g$1, j$1, U$1;
ut$1("tj_sess_state", {
  lhref: "",
  // The last Page that was loaded
  scrollpos: 0,
  sessstart: Date.now(),
  pages: 0
});
new N$2(100, 200);
const fe = /* @__PURE__ */ new Map(), Y$1 = new Fe();
fe.set(Y$1.name, Y$1);
pe = [t$1("tj-content-pane")];
let L$1 = class L2 extends (W$1 = yt$1(pt$1(bt$1(y$1))), he = [n$1({ type: Boolean, reflect: true, attribute: "skip-layout" })], de = [n$1({ type: String, reflect: true, attribute: "pre-parser" })], W$1) {
  constructor() {
    super(), K(this, j$1, $$1(g$1, 8, this, false)), $$1(g$1, 11, this), K(this, U$1, $$1(g$1, 12, this, "")), $$1(g$1, 15, this);
  }
  static get is() {
    return "tj-content-pane";
  }
  createRenderRoot() {
    return this;
  }
  arrange() {
    const e4 = new at$1("SectionTreeBuilder");
    this.log("arrange() called"), this.applyPreParsers();
    const r2 = new Re(this), i4 = Array.from(this.children);
    if (r2.arrange(i4), this.debug("Firing afterArrange event"), this.dispatchEvent(
      new CustomEvent("afterArrange", { detail: { target: this }, bubbles: true })
    ), this.skipLayout) {
      this.warn("Skipping layout as per skipLayout property.");
      return;
    }
    I2(Array.from(this.children), { recursive: true }), e4.lap("after arrange");
  }
  applyPreParsers() {
    for (const e4 of this.preParser.split(/\s+/).filter(Boolean)) {
      const r2 = fe.get(e4);
      if (!r2) {
        this.warn(`Unknown pre-parser '${e4}'.`);
        continue;
      }
      r2.parse(this);
    }
  }
  async connectedCallback() {
    await Z$3(), super.connectedCallback(), this.arrange();
  }
};
g$1 = Ge(W$1);
j$1 = /* @__PURE__ */ new WeakMap();
U$1 = /* @__PURE__ */ new WeakMap();
F$1(g$1, 4, "skipLayout", he, L$1, j$1);
F$1(g$1, 4, "preParser", de, L$1, U$1);
L$1 = F$1(g$1, 0, "ContentAreaElement2", pe, L$1);
$$1(g$1, 1, L$1);
const Ke = /^@var\(\s*(--[a-zA-Z0-9_-]+)\s*\)$/;
function Xe(t2, e4, r2) {
  const i4 = e4.trim();
  if (!i4)
    throw new Error(`Empty selector alternative at position ${r2 + 1} in data-query "${t2}".`);
  if (!i4.startsWith("@var"))
    return { type: "selector", selector: i4 };
  const n3 = i4.match(Ke);
  if (!n3)
    throw new Error(
      `Invalid CSS variable selector "${i4}" in data-query "${t2}". Expected @var(--custom-property).`
    );
  return { type: "variable", name: n3[1], expression: i4 };
}
function ee(t2, e4, r2) {
  try {
    return Array.from(e4.querySelectorAll(t2));
  } catch (i4) {
    const n3 = i4 instanceof Error ? i4.message : String(i4);
    throw new Error(`Invalid CSS selector "${t2}" ${r2}: ${n3}`);
  }
}
function Ye(t2, e4) {
  console.error(t2 instanceof Error ? t2 : new Error(String(t2)), e4);
}
function et$1(t2, e4) {
  let r2;
  for (const [i4, n3] of t2.split("|").entries())
    try {
      const o2 = Xe(t2, n3, i4);
      if (o2.type === "selector") {
        const p2 = ee(o2.selector, e4, `in data-query "${t2}"`);
        if (p2.length > 0) return { elements: p2, source: "selector" };
        continue;
      }
      r2 ?? (r2 = getComputedStyle(e4));
      const s2 = r2.getPropertyValue(o2.name).trim();
      if (!s2) continue;
      const l2 = ee(s2, e4, `resolved from ${o2.expression}`);
      if (l2.length > 0) return { elements: l2, source: "variable" };
    } catch (o2) {
      Ye(o2, e4);
    }
  return { elements: [], source: null };
}
function te({ slotElement: t2, slotName: e4, elements: r2 }, i4) {
  r2.forEach((n3) => {
    n3.hasAttribute("slot") && !i4.has(n3) || (t2.getAttributeNames().filter((o2) => o2.startsWith("data-set-attribute-")).forEach((o2) => {
      const s2 = o2.replace(/^data-set-attribute-/, "");
      if (!n3.hasAttribute(s2)) {
        const l2 = t2.getAttribute(o2);
        l2 !== null && n3.setAttribute(s2, l2);
      }
    }), e4 !== "" && (n3.setAttribute("slot", e4), i4.add(n3)));
  });
}
function st$1(t2) {
  class e4 extends t2 {
    beforeLayoutCallback(i4, n3, o2) {
      return false;
    }
    firstUpdated(i4) {
      var l2, p2;
      (l2 = super.firstUpdated) == null || l2.call(this, i4);
      const n3 = ((p2 = this.shadowRoot) == null ? void 0 : p2.querySelectorAll("slot[data-query]")) ?? [], o2 = [], s2 = /* @__PURE__ */ new WeakSet();
      for (const c2 of Array.from(n3)) {
        if (!(c2 instanceof HTMLSlotElement)) continue;
        const d2 = c2.getAttribute("name") ?? "";
        if (d2 !== "" && c2.assignedElements({ flatten: true }).length > 0)
          continue;
        const a2 = c2.getAttribute("data-query");
        if (a2)
          try {
            const f2 = et$1(a2, this), u3 = { slotElement: c2, slotName: d2, elements: f2.elements };
            f2.source === "variable" ? o2.push(u3) : te(u3, s2);
          } catch (f2) {
            const u3 = f2 instanceof Error ? f2.message : String(f2);
            console.error(
              new Error(`Failed to process data-query "${a2}" for slot "${d2}": ${u3}`),
              c2
            );
          }
      }
      o2.forEach(
        (c2) => te(c2, s2)
      ), I2(Array.from(this.children), { recursive: true });
    }
  }
  return e4;
}
function R2(e4, t2) {
  if (!e4.includes("[") && !e4.includes("]"))
    return { parts: e4.split(t2), errors: [] };
  const s2 = [], r2 = [], i4 = [];
  let l2 = 0, a2 = false;
  for (let n3 = 0; n3 < e4.length; n3++) {
    const o2 = e4[n3];
    if (a2) {
      a2 = false;
      continue;
    }
    if (o2 === "\\") {
      a2 = true;
      continue;
    }
    if (o2 === "[") {
      i4.push(n3);
      continue;
    }
    if (o2 === "]") {
      const c2 = i4.pop();
      c2 === void 0 ? r2.push({
        code: "unexpected-closing-bracket",
        index: n3,
        message: `Unexpected closing square bracket at index ${n3}.`
      }) : n3 === c2 + 1 && r2.push({
        code: "empty-bracket-value",
        index: c2,
        message: `Empty square-bracket value at index ${c2}.`
      });
      continue;
    }
    o2 === t2 && i4.length === 0 && (s2.push(e4.slice(l2, n3)), l2 = n3 + 1);
  }
  a2 && r2.push({
    code: "dangling-escape",
    index: e4.length - 1,
    message: `Dangling escape character at index ${e4.length - 1}.`
  });
  for (const n3 of i4)
    r2.push({
      code: "unclosed-opening-bracket",
      index: n3,
      message: `Opening square bracket at index ${n3} is not closed. Use underscores instead of whitespace inside arbitrary values.`
    });
  return s2.push(e4.slice(l2)), { parts: s2, errors: r2 };
}
function A(e4, t2) {
  return R2(e4, t2).parts;
}
function N2(e4) {
  return R2(e4, ":").errors;
}
function x2(e4) {
  return A(e4, ".").filter(Boolean);
}
function Y(e4) {
  const t2 = A(e4, ":");
  if (t2.length === 1)
    return x2(t2[0]);
  if (t2.length === 2)
    return x2(t2[1]);
  const s2 = [];
  for (let r2 = 0; r2 < t2.length; r2 += 2)
    s2.push(...x2(t2[r2]));
  return s2;
}
const tt = {
  width: "width",
  "min-width": "min-width",
  "max-width": "max-width",
  height: "height",
  "min-height": "min-height",
  "max-height": "max-height",
  "aspect-ratio": "aspect-ratio",
  margin: "margin",
  "margin-top": "margin-top",
  "margin-right": "margin-right",
  "margin-bottom": "margin-bottom",
  "margin-left": "margin-left",
  padding: "padding",
  "padding-top": "padding-top",
  "padding-right": "padding-right",
  "padding-bottom": "padding-bottom",
  "padding-left": "padding-left",
  gap: "gap",
  "row-gap": "row-gap",
  "column-gap": "column-gap",
  "font-size": "font-size",
  "text-size": "font-size",
  "line-height": "line-height",
  "letter-spacing": "letter-spacing",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
  inset: "inset",
  "flex-basis": "flex-basis",
  "grid-template-columns": "grid-template-columns",
  "grid-template-rows": "grid-template-rows",
  "border-radius": "border-radius",
  "border-width": "border-width",
  opacity: "opacity",
  "z-index": "z-index"
}, L3 = /* @__PURE__ */ new WeakMap();
function D2(e4) {
  return /^[A-Za-z_][A-Za-z0-9_-]*(?:\.[A-Za-z_][A-Za-z0-9_-]*)*$/.test(e4);
}
function et(e4) {
  const t2 = e4.indexOf("-[");
  if (t2 <= 0 || !e4.endsWith("]"))
    return null;
  const s2 = e4.slice(0, t2), r2 = tt[s2];
  if (!r2)
    return null;
  const i4 = e4.slice(t2 + 2, -1);
  if (!i4 || /[;{}\u0000-\u001f\u007f]/.test(i4))
    return null;
  const l2 = i4.split("_").join(" ");
  return /\b(?:url|image-set)\s*\(/i.test(l2) ? null : { className: e4, property: r2, value: l2 };
}
class st2 {
  constructor(t2, s2) {
    this.declarations = /* @__PURE__ */ new Map(), this.styleElement = null, this.document = t2;
    const r2 = (s2 == null ? void 0 : s2.trim()) || null;
    if (r2 && !D2(r2))
      throw new Error(`Invalid CSS layer name: "${r2}"`);
    this.layer = r2;
  }
  register(t2) {
    if (this.declarations.has(t2))
      return false;
    const s2 = et(t2);
    return !s2 || !this.supports(s2.property, s2.value) ? false : (this.declarations.set(t2, s2), this.render(), true);
  }
  supports(t2, s2) {
    var l2;
    const r2 = (l2 = this.document.defaultView) == null ? void 0 : l2.CSS;
    if (r2 && typeof r2.supports == "function")
      return r2.supports(t2, s2);
    const i4 = this.document.createElement("span").style;
    return i4.setProperty(t2, s2), i4.getPropertyValue(t2) !== "";
  }
  render() {
    this.styleElement || (this.styleElement = this.document.createElement("style"), this.styleElement.setAttribute("data-trunkjs-responsive-utilities", ""), this.layer && this.styleElement.setAttribute("data-layer", this.layer), this.document.head.appendChild(this.styleElement));
    const t2 = Array.from(this.declarations.values()).map(
      ({ className: s2, property: r2, value: i4 }) => `[class~="${nt(s2)}"] { ${r2}: ${i4}; }`
    );
    this.styleElement.textContent = this.layer ? `@layer ${this.layer} {
  ${t2.join(`
  `)}
}` : t2.join(`
`);
  }
}
function rt(e4, t2, s2) {
  const r2 = e4.getAttribute("class") || "";
  if (!r2.includes("[") && !r2.includes("]"))
    return 0;
  let i4;
  try {
    i4 = it(e4.ownerDocument, t2);
  } catch (a2) {
    return s2.warn(a2 instanceof Error ? a2.message : String(a2), e4), 0;
  }
  let l2 = 0;
  for (const a2 of r2.split(/\s+/)) {
    if (!a2.includes("[") && !a2.includes("]"))
      continue;
    const n3 = N2(a2);
    if (n3.length > 0) {
      for (const o2 of n3)
        s2.warn(`Invalid arbitrary utility token "${a2}": ${o2.message}`, e4);
      continue;
    }
    for (const o2 of Y(a2))
      i4.register(o2) && l2++;
  }
  return l2;
}
function it(e4, t2) {
  const s2 = (t2 == null ? void 0 : t2.trim()) || "";
  if (s2 && !D2(s2))
    throw new Error(`Invalid CSS layer name: "${s2}"`);
  let r2 = L3.get(e4);
  r2 || (r2 = /* @__PURE__ */ new Map(), L3.set(e4, r2));
  let i4 = r2.get(s2);
  return i4 || (i4 = new st2(e4, s2), r2.set(s2, i4)), i4;
}
function nt(e4) {
  return e4.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\a ");
}
function z2(e4) {
  const t2 = e4.trim();
  if (!t2) return { from: 0, till: 1 / 0 };
  if (t2.startsWith("-")) {
    const r2 = t2.slice(1).trim();
    return { from: 0, till: E$2(r2) };
  }
  if (t2.endsWith("-")) {
    const r2 = t2.slice(0, -1).trim();
    return { from: E$2(r2), till: 1 / 0 };
  }
  const s2 = t2.indexOf("-");
  if (s2 >= 0) {
    const r2 = t2.slice(0, s2).trim(), i4 = t2.slice(s2 + 1).trim(), l2 = E$2(r2), a2 = i4 ? E$2(i4) : 1 / 0;
    return { from: l2, till: a2 };
  }
  return { from: E$2(t2), till: 1 / 0 };
}
function ot(e4) {
  var i4, l2, a2, n3;
  const t2 = /* @__PURE__ */ new Set(), s2 = [], r2 = (o2, c2, u3) => {
    const h3 = u3.includes("[") ? x2(u3) : u3.split(".");
    for (const p2 of h3)
      t2.add(p2), s2.push({ from: o2, till: c2, className: p2 });
  };
  for (const o2 of e4) {
    if (!o2.includes(":"))
      continue;
    const c2 = o2.includes("[") || o2.includes("]");
    if (c2 && N2(o2).length > 0)
      continue;
    const u3 = c2 ? A(o2, ":") : o2.split(":");
    if (u3.length === 1)
      continue;
    if (u3.length === 2) {
      const [d2, f2] = u3;
      if (!d2 || !f2)
        continue;
      const y3 = z2(d2);
      r2(y3.from, y3.till, f2);
      continue;
    }
    const h3 = o2.startsWith(":") ? o2 : "::" + o2, p2 = c2 ? A(h3, ":") : h3.split(":");
    let g2 = (i4 = p2[1]) == null ? void 0 : i4.trim(), v2 = (l2 = p2[2]) == null ? void 0 : l2.trim();
    for (let d2 = 3; d2 + 1 < p2.length; d2 += 2) {
      const f2 = (a2 = p2[d2]) == null ? void 0 : a2.trim();
      let y3 = (n3 = p2[d2 + 1]) == null ? void 0 : n3.trim();
      f2 && !y3 && (y3 = "");
      try {
        const b2 = z2(`${g2}-${f2}`);
        r2(b2.from, b2.till, v2);
      } catch (b2) {
        throw new Error(
          `Error parsing breakpoint range "${f2}" in part "${o2}": ${b2 instanceof Error ? b2.message : String(b2)}`
        );
      }
      g2 = f2, v2 = y3;
    }
    try {
      const d2 = z2(`${g2}`);
      r2(d2.from, d2.till, v2);
    } catch (d2) {
      throw new Error(
        `Error parsing breakpoint range "${g2}" in part "${o2}": ${d2 instanceof Error ? d2.message : String(d2)}`
      );
    }
  }
  return { data: s2, observedClassNames: t2 };
}
function at2(e4, t2) {
  if (!e4.includes(":")) return e4;
  const s2 = E$2(t2);
  let r2 = new Set(e4.split(" "));
  const i4 = ot(r2);
  for (const l2 of i4.observedClassNames)
    r2.delete(l2);
  for (const l2 of i4.data)
    s2 >= l2.from && s2 < l2.till && r2.add(l2.className);
  return Array.from(r2).join(" ");
}
function lt(e4, t2, s2) {
  const r2 = e4.getAttribute("class") || "";
  if (r2.indexOf(":") === -1)
    return;
  if (!e4.isConnected) {
    s2.warn("Element is no longer connected to the DOM, skipping class adjustment:", e4);
    return;
  }
  s2.debug("Adujsted class for element:", e4);
  const i4 = at2(r2, t2);
  i4 !== r2 && e4.setAttribute("class", i4);
}
class C extends Error {
  constructor(t2, s2) {
    super(t2), this.context = s2, this.name = "StyleParseError";
  }
}
class j extends C {
  constructor(t2, s2) {
    super(t2, s2), this.name = "StyleDeclarationError";
  }
}
function q(e4) {
  if (e4.length === 0) return "";
  if (Array.isArray(e4[0]))
    return e4.map((t2) => q(t2)).filter((t2) => t2).join("; ");
  {
    const [t2, s2, r2] = e4;
    return `${t2}: ${s2}${r2 ? " !" + r2 : ""}`;
  }
}
function ct(e4) {
  return e4[1] + (e4[2] ? " !" + e4[2] : "");
}
function ut(e4, t2) {
  const s2 = (c2, u3) => c2, r2 = [];
  let i4 = "";
  const l2 = [];
  let a2 = null, n3 = 0, o2 = 0;
  for (const c2 of e4)
    a2 ? (c2 === a2 && (a2 = null), i4 += c2) : c2 === "'" || c2 === '"' ? (a2 = c2, i4 += c2) : c2 === "(" ? (n3++, i4 += c2) : c2 === ")" ? (s2(n3 === 0, new C("Unmatched closing parenthesis )", M(o2, e4))), n3 = Math.max(0, n3 - 1), i4 += c2) : c2 === ";" && n3 === 0 ? (l2.push(i4), i4 = "") : i4 += c2, o2++;
  s2(a2 !== null, new C("Unclosed quote", M(o2 - 1, e4))), s2(n3 > 0, new C("Unbalanced parentheses: missing )", M(o2 - 1, e4))), i4.trim() && l2.push(i4);
  for (const c2 of l2) {
    const u3 = c2.trim();
    if (!u3) continue;
    let h3 = -1;
    a2 = null, n3 = 0;
    for (let d2 = 0; d2 < u3.length; d2++) {
      const f2 = u3[d2];
      if (a2)
        f2 === a2 && (a2 = null);
      else if (f2 === "'" || f2 === '"') a2 = f2;
      else if (f2 === "(") n3++;
      else if (f2 === ")")
        s2(
          n3 === 0,
          new j("Unmatched closing parenthesis ) in declaration", { declaration: u3 })
        ), n3 = Math.max(0, n3 - 1);
      else if (f2 === ":" && n3 === 0) {
        h3 = d2;
        break;
      }
    }
    if (s2(h3 < 1, new j("Missing colon (:) in declaration", { declaration: u3 })) && h3 < 1 || h3 < 1) continue;
    const p2 = u3.slice(0, h3).trim();
    let g2 = u3.slice(h3 + 1).trim(), v2;
    /\s*!important\s*$/i.test(g2) && (g2 = g2.replace(/\s*!important\s*$/i, "").trim(), v2 = "important"), p2 && r2.push([p2, g2, v2]);
  }
  return r2;
}
function M(e4, t2) {
  const s2 = Math.max(0, e4 - 15), r2 = Math.min(t2.length, e4 + 15);
  return {
    index: e4,
    input: t2,
    near: t2.slice(s2, r2)
  };
}
function dt(e4, t2) {
  const s2 = Array.from(e4.attributes).filter((n3) => n3.name.startsWith("style-")), r2 = {};
  let i4 = false;
  const l2 = /* @__PURE__ */ new Set();
  for (const n3 of s2) {
    const o2 = n3.name.substring(6), c2 = r2[o2] = ut(n3.value || "");
    i4 = true;
    for (const u3 of c2)
      l2.add(u3[0]), e4.style[u3[0]] || e4.style.setProperty(u3[0], "unset");
  }
  if (!i4) return;
  if (!r2.xs) {
    const n3 = [];
    for (const o2 of l2) {
      const c2 = e4.style.getPropertyValue(o2) || "", u3 = e4.style.getPropertyPriority(o2) === "important" ? "important" : void 0;
      n3.push([o2, c2, u3]);
    }
    r2.xs = n3, e4.setAttribute("style-xs", q(n3));
  }
  const a2 = /* @__PURE__ */ new Map();
  for (const n3 of k$2)
    if (t2 >= n3.minWidth && r2[n3.name]) {
      const o2 = r2[n3.name];
      for (const c2 of o2)
        a2.set(c2[0], ct(c2));
    }
  for (const [n3, o2] of a2)
    e4.style.setProperty(n3, o2);
}
class ft {
  constructor(t2) {
    this.logger = t2, this.observer = null, this.changedElements = /* @__PURE__ */ new Set(), this.debouncer = new N$2(10, 100), this.breakpoint = U$2(), this.utilityLayer = null;
  }
  async processChanges() {
    for (const t2 of this.changedElements)
      rt(t2, this.utilityLayer, this.logger), lt(t2, this.breakpoint, this.logger), dt(t2, W$2[this.breakpoint] || 0), this.changedElements.delete(t2);
  }
  async spoolElement(t2) {
    this.changedElements.has(t2) || (this.changedElements.add(t2), await this.debouncer.wait(), this.processChanges());
  }
  onChange(t2) {
    var s2;
    for (const r2 of t2)
      if (r2.type === "childList")
        for (const i4 of Array.from(r2.addedNodes || []))
          i4 instanceof HTMLElement && this.queueAll(i4);
      else if (r2.type === "attributes") {
        if (!(r2.target instanceof HTMLElement) || !(r2.attributeName === "class" || (s2 = r2.attributeName) != null && s2.startsWith("style")))
          continue;
        this.spoolElement(r2.target);
      }
  }
  /**
   * Queue all all elements (or those under root) that have class or style-* attributes
   *
   * @param root
   */
  queueAll(t2 = null) {
    t2 === null && (t2 = document.body), (t2.hasAttribute("class") || t2.getAttributeNames().some((s2) => s2.startsWith("style-"))) && this.spoolElement(t2), t2.querySelectorAll("[class]").forEach((s2) => this.spoolElement(s2)), Array.from(t2.getElementsByTagName("*")).filter((s2) => [...s2.getAttributeNames()].some((r2) => r2.startsWith("style-"))).forEach((s2) => this.spoolElement(s2));
  }
  startObserving(t2) {
    this.observer = new MutationObserver(this.onChange.bind(this)), this.observer.observe(t2, { attributes: true, childList: true, subtree: true });
  }
  stopObserving() {
    var t2;
    (t2 = this.observer) == null || t2.disconnect();
  }
}
var ht = Object.create, V = Object.defineProperty, pt = Object.getOwnPropertyDescriptor, T = (e4, t2) => (t2 = Symbol[e4]) ? t2 : /* @__PURE__ */ Symbol.for("Symbol." + e4), S2 = (e4) => {
  throw TypeError(e4);
}, gt = (e4, t2, s2) => t2 in e4 ? V(e4, t2, { enumerable: true, configurable: true, writable: true, value: s2 }) : e4[t2] = s2, mt = (e4) => [, , , ht((e4 == null ? void 0 : e4[T("metadata")]) ?? null)], U = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"], Z2 = (e4) => e4 !== void 0 && typeof e4 != "function" ? S2("Function expected") : e4, yt = (e4, t2, s2, r2, i4) => ({ kind: U[e4], name: t2, metadata: r2, addInitializer: (l2) => s2._ ? S2("Already initialized") : i4.push(Z2(l2 || null)) }), bt = (e4, t2) => gt(t2, T("metadata"), e4[3]), vt = (e4, t2, s2, r2) => {
  for (var i4 = 0, l2 = e4[t2 >> 1], a2 = l2 && l2.length; i4 < a2; i4++) l2[i4].call(s2);
  return r2;
}, wt = (e4, t2, s2, r2, i4, l2) => {
  for (var a2, n3, o2, c2, u3 = t2 & 7, h3 = false, p2 = false, g2 = 2, v2 = U[u3 + 5], d2 = e4[g2] || (e4[g2] = []), f2 = (i4 = i4.prototype, pt(i4, s2)), y3 = r2.length - 1; y3 >= 0; y3--)
    o2 = yt(u3, s2, n3 = {}, e4[3], d2), o2.static = h3, o2.private = p2, c2 = o2.access = { has: (b2) => s2 in b2 }, c2.get = (b2) => b2[s2], a2 = (0, r2[y3])(f2[v2], o2), n3._ = 1, Z2(a2) && (f2[v2] = a2);
  return f2 && V(i4, s2, f2), i4;
}, F2 = (e4, t2, s2) => t2.has(e4) || S2("Cannot " + s2), m$2 = (e4, t2, s2) => (F2(e4, t2, "read from private field"), t2.get(e4)), P = (e4, t2, s2) => t2.has(e4) ? S2("Cannot add the same private member more than once") : t2 instanceof WeakSet ? t2.add(e4) : t2.set(e4, s2), B2 = (e4, t2, s2, r2) => (F2(e4, t2, "write to private field"), t2.set(e4, s2), s2), H2, O, w, E, $;
class W extends (O = yt$1(pt$1(HTMLElement)), H2 = [wt$1("resize", { target: "window" })], O) {
  constructor() {
    super(), vt($, 5, this), this.resizeDebouncer = new N$2(50, 1500), P(this, w, U$2()), P(this, E, new ft(this.getLogger("observer")));
  }
  static get observedAttributes() {
    return ["width", "height", "orientation"];
  }
  async onResize(t2) {
    await this.resizeDebouncer.wait();
    const s2 = U$2();
    s2 !== m$2(this, w) && (B2(this, w, s2), this.log(`Breakpoint changed to ${m$2(this, w)}, adjusting layout.`), m$2(this, E).breakpoint = m$2(this, w), m$2(this, E).queueAll());
  }
  attributeChangedCallback(t2, s2, r2) {
  }
  async connectedCallback() {
    var t2;
    (t2 = super.connectedCallback) == null || t2.call(this), B2(this, w, U$2()), m$2(this, E).breakpoint = m$2(this, w), m$2(this, E).utilityLayer = this.getAttribute("layer"), this.debug("Initializing ElementObserver for responsive adjustments.", m$2(this, w)), m$2(this, E).startObserving(this), m$2(this, E).queueAll();
  }
  disconnectedCallback() {
    var t2;
    (t2 = super.disconnectedCallback) == null || t2.call(this), this.debug("TjResponsiveElement disconnected from the DOM."), m$2(this, E).stopObserving();
  }
}
$ = mt(O);
w = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
wt($, 1, "onResize", H2, W);
bt($, W);
customElements.get("tj-responsive") || customElements.define("tj-responsive", W);
const o$1 = (o2) => o2 ?? A$2;
const t = { CHILD: 2 }, e$1 = (t2) => (...e4) => ({ _$litDirective$: t2, values: e4 });
let i$1 = class i2 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e4, i4) {
    this._$Ct = t2, this._$AM = e4, this._$Ci = i4;
  }
  _$AS(t2, e4) {
    return this.update(t2, e4);
  }
  update(t2, e4) {
    return this.render(...e4);
  }
};
const m$1 = {}, p$1 = (o2, t2 = m$1) => o2._$AH = t2;
const i3 = e$1(class extends i$1 {
  constructor() {
    super(...arguments), this.key = A$2;
  }
  render(r2, t2) {
    return this.key = r2, t2;
  }
  update(r2, [t2, e4]) {
    return t2 !== this.key && (p$1(r2), this.key = t2), e4;
  }
});
class e extends i$1 {
  constructor(i4) {
    if (super(i4), this.it = A$2, i4.type !== t.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r2) {
    if (r2 === A$2 || null == r2) return this._t = void 0, this.it = r2;
    if (r2 === E$1) return r2;
    if ("string" != typeof r2) throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r2 === this.it) return this._t;
    this.it = r2;
    const s2 = [r2];
    return s2.raw = s2, this._t = { _$litType$: this.constructor.resultType, strings: s2, values: [] };
  }
}
e.directiveName = "unsafeHTML", e.resultType = 1;
const o = e$1(e);
const n2 = "relocate", l = "<tj-element-relocator> warning";
let u$2 = class u extends HTMLElement {
  constructor() {
    super(...arguments), this.sourceElement = null, this.targetElement = null, this.sourceObserver = null;
  }
  static get observedAttributes() {
    return ["class", "source", "target"];
  }
  async connectedCallback() {
    await dt$1(), this.sync();
  }
  disconnectedCallback() {
    this.restore(), this.sourceElement = null, this.targetElement = null;
  }
  async attributeChangedCallback() {
    await dt$1(), this.isConnected && this.sync();
  }
  sync() {
    var i4, o2;
    this.warnAboutUnsupportedClasses();
    const e4 = (i4 = this.getAttribute("source")) == null ? void 0 : i4.trim(), s2 = (o2 = this.getAttribute("target")) == null ? void 0 : o2.trim();
    if (!e4 || !s2) {
      this.warn(`Missing ${e4 ? '"target"' : '"source"'} selector.`);
      return;
    }
    const t2 = this.querySelectorInDocument(e4, "source"), r2 = this.querySelectorInDocument(s2, "target");
    if (!(!t2 || !r2)) {
      if (t2 === r2 || t2.contains(r2) || r2.contains(t2)) {
        this.warn("Source and target must be different elements and must not contain each other.");
        return;
      }
      (t2 !== this.sourceElement || r2 !== this.targetElement) && (this.restore(), this.sourceElement = t2, this.targetElement = r2), this.classList.contains(n2) ? (this.observeSource(), this.moveSourceItems()) : this.restore();
    }
  }
  querySelectorInDocument(e4, s2) {
    try {
      const t2 = this.ownerDocument.querySelector(e4);
      return t2 || this.warn(`${s2} not found: "${e4}".`), t2;
    } catch {
      return this.warn(`Invalid "${s2}" selector: "${e4}".`), null;
    }
  }
  observeSource() {
    this.sourceObserver || !this.sourceElement || (this.sourceObserver = new MutationObserver(() => this.moveSourceItems()), this.sourceObserver.observe(this.sourceElement, { childList: true }));
  }
  moveSourceItems() {
    if (!(!this.sourceElement || !this.targetElement || !this.classList.contains(n2)))
      for (; this.sourceElement.firstElementChild; )
        this.targetElement.append(this.sourceElement.firstElementChild);
  }
  restore() {
    if (this.disconnectSourceObserver(), !(!this.sourceElement || !this.targetElement))
      for (; this.targetElement.firstElementChild; )
        this.sourceElement.append(this.targetElement.firstElementChild);
  }
  disconnectSourceObserver() {
    var e4;
    (e4 = this.sourceObserver) == null || e4.disconnect(), this.sourceObserver = null;
  }
  warn(e4) {
    console.warn(l, { reason: e4, element: this });
  }
  warnAboutUnsupportedClasses() {
    const e4 = Array.from(this.classList).filter(
      (s2) => s2 !== n2 && !s2.includes(":")
    );
    e4.length && this.warn(`Unsupported classes: ${e4.join(", ")}.`);
  }
};
customElements.get("tj-element-relocator") || customElements.define("tj-element-relocator", u$2);
const u$1 = "default";
let h$1 = class h {
  constructor() {
    this.presets = /* @__PURE__ */ new Map(), this.listeners = /* @__PURE__ */ new Map();
  }
  register(t2, e4) {
    const i4 = this.normalizeName(t2);
    return this.presets.set(i4, e4), this.notify(i4, e4), this;
  }
  unregister(t2) {
    const e4 = t2.trim(), i4 = this.presets.delete(e4);
    return i4 && this.notify(e4, void 0), i4;
  }
  get(t2) {
    return t2 ? this.presets.get(t2.trim()) : void 0;
  }
  has(t2) {
    return this.presets.has(t2.trim());
  }
  subscribe(t2, e4) {
    const i4 = this.normalizeName(t2), s2 = this.listeners.get(i4) ?? /* @__PURE__ */ new Set();
    return s2.add(e4), this.listeners.set(i4, s2), () => {
      s2.delete(e4), s2.size === 0 && this.listeners.delete(i4);
    };
  }
  normalizeName(t2) {
    const e4 = t2.trim();
    if (!e4)
      throw new Error("A form preset name must not be empty.");
    return e4;
  }
  notify(t2, e4) {
    for (const i4 of this.listeners.get(t2) ?? [])
      i4(e4);
  }
};
const c = globalThis.__trunkjsFormRegistry ?? (globalThis.__trunkjsFormRegistry = new h$1());
class d extends HTMLElement {
  constructor(t2 = c) {
    super(), this.registry = t2, this.dataAccessor = new st$2(this), this.unsubscribeRegistry = null, this.pluginCleanups = [], this.handleClick = (e4) => {
      const i4 = e4.target instanceof Element ? e4.target : null, s2 = i4 == null ? void 0 : i4.closest('button, input, [type="submit"]');
      !s2 || s2.closest("tj-form") !== this || !this.isSubmitter(s2) || (e4.preventDefault(), this.requestSubmit(s2, e4));
    };
  }
  static get observedAttributes() {
    return ["preset"];
  }
  connectedCallback() {
    this.addEventListener("click", this.handleClick), this.watchPreset();
  }
  disconnectedCallback() {
    var t2;
    this.removeEventListener("click", this.handleClick), (t2 = this.unsubscribeRegistry) == null || t2.call(this), this.unsubscribeRegistry = null, this.disconnectPlugins();
  }
  attributeChangedCallback() {
    this.isConnected && this.watchPreset();
  }
  get name() {
    return this.getAttribute("name") ?? "";
  }
  set name(t2) {
    t2 ? this.setAttribute("name", t2) : this.removeAttribute("name");
  }
  get preset() {
    var t2;
    return ((t2 = this.getAttribute("preset")) == null ? void 0 : t2.trim()) || u$1;
  }
  set preset(t2) {
    t2 && t2 !== u$1 ? this.setAttribute("preset", t2) : this.removeAttribute("preset");
  }
  get value() {
    return this.dataAccessor.data;
  }
  set value(t2) {
    this.dataAccessor.data = t2;
  }
  get entries() {
    return this.dataAccessor.entries;
  }
  getElements() {
    return this.entries.map(({ element: t2 }) => t2);
  }
  async requestSubmit(t2 = null, e4 = null) {
    var r2, o2;
    if (!this.validateControls())
      return;
    const i4 = this.createContext(t2, e4);
    if (this.dispatchEvent(
      new CustomEvent("tj-form-submit", {
        bubbles: true,
        cancelable: true,
        detail: i4
      })
    ))
      return (o2 = (r2 = this.activePreset) == null ? void 0 : r2.onSubmit) == null ? void 0 : o2.call(r2, i4);
  }
  isSubmitter(t2) {
    var e4;
    return t2 instanceof HTMLButtonElement ? (t2.getAttribute("type") ?? "submit").toLowerCase() === "submit" : t2 instanceof HTMLInputElement ? ["submit", "image"].includes(t2.type.toLowerCase()) : ((e4 = t2.getAttribute("type")) == null ? void 0 : e4.toLowerCase()) === "submit";
  }
  // Validates native and form-associated custom controls before dispatching the submit event.
  validateControls() {
    var e4, i4;
    const t2 = [];
    for (const s2 of this.getElements()) {
      const r2 = s2;
      !this.isVisibleControl(r2) || typeof r2.checkValidity != "function" || r2.checkValidity() || t2.push(r2);
    }
    return t2.forEach((s2) => {
      var r2;
      return (r2 = s2.reportValidity) == null ? void 0 : r2.call(s2);
    }), (i4 = (e4 = t2[0]) == null ? void 0 : e4.focus) == null || i4.call(e4), t2.length === 0;
  }
  // Uses the browser visibility API where available and falls back to the relevant HTML visibility states.
  isVisibleControl(t2) {
    if (t2.hidden || t2.closest("[hidden]"))
      return false;
    if (typeof t2.checkVisibility == "function")
      return t2.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
    const e4 = window.getComputedStyle(t2);
    return e4.display !== "none" && e4.visibility !== "hidden";
  }
  createContext(t2, e4) {
    return {
      form: this,
      submitter: t2,
      sourceEvent: e4,
      value: this.value,
      getElements: () => this.getElements()
    };
  }
  watchPreset() {
    var t2;
    (t2 = this.unsubscribeRegistry) == null || t2.call(this), this.unsubscribeRegistry = this.registry.subscribe(this.preset, (e4) => this.activatePreset(e4)), this.activatePreset(this.registry.get(this.preset));
  }
  activatePreset(t2) {
    if (this.disconnectPlugins(), this.activePreset = t2, !!t2) {
      t2.value && (this.value = t2.value);
      for (const e4 of t2.plugins ?? []) {
        const i4 = e4.connect(this);
        i4 && this.pluginCleanups.push(i4);
      }
    }
  }
  disconnectPlugins() {
    this.pluginCleanups.splice(0).forEach((t2) => t2());
  }
}
typeof customElements < "u" && !customElements.get("tj-form") && customElements.define("tj-form", d);
async function u2(e4) {
  return new Promise((t2) => {
    window.setTimeout(() => t2(), e4);
  });
}
var p = class e2 {
  static RATIO_SHORTCUTS = {
    a: "1-1",
    b: "4-3",
    c: "3-2",
    d: "16-9",
    e: "21-9",
    B: "3-4",
    C: "2-3",
    D: "9-16",
    E: "9-21"
  };
  static WIDTH_SHORTCUTS = {
    a: "260",
    b: "414",
    c: "896",
    d: "1280",
    e: "1440",
    f: "1920",
    g: "2560"
  };
  static CDN_V2_REGEX = /(?:^|\/)v2\/[^\/]+\/[^\/]+_[^\/]+\/[^\/]+\.[a-z0-9_]+(?:$|[?#])/i;
  static isCdnImage(t2) {
    return typeof t2 != "string" || t2.length === 0 ? false : e2.CDN_V2_REGEX.test(t2);
  }
  static decode(t2) {
    let n3 = t2.split("/");
    if (n3.length < 4) throw Error("Invalid url format" + this.url);
    let r2 = n3[1], [i4, a2] = n3[2].split("_"), [o2, s2] = n3[3].split(".");
    if (!i4 || !a2 || !o2 || !s2) throw Error("Invalid url format: " + this.url);
    return a2 = a2.replaceAll(/([a-zA-Z])/g, (t3) => "-" + (e2.WIDTH_SHORTCUTS[t3] ?? t3) + "-"), i4 = i4.replaceAll(/([a-zA-Z])/g, (t3) => e2.RATIO_SHORTCUTS[t3] ?? t3), {
      id: r2,
      aspectRatio: i4.split("-").join("/"),
      widths: a2.split("-").filter((e4) => e4.trim() !== ""),
      filename: o2,
      extensions: s2.split("_")
    };
  }
}, m = class {
  rules;
  constructor(e4) {
    let t2 = (e4 ?? "").trim();
    if (!t2) {
      this.rules = [];
      return;
    }
    if (/^[0-9]+(?:\.[0-9]+)?$/.test(t2)) {
      let e5 = parseFloat(t2);
      if (!(e5 > 0)) throw Error("Scale must be a positive number");
      this.rules = [{
        minScreen: 0,
        scale: e5
      }];
      return;
    }
    let n3 = t2.split(";").map((e5) => e5.trim()).filter(Boolean);
    if (n3.length === 0) throw Error("Invalid adjust-sizes input");
    let r2 = /* @__PURE__ */ new Map();
    for (let e5 of n3) {
      let t3;
      if (t3 = e5.match(/^:([0-9]+(?:\.[0-9]+)?)$/), t3) {
        let n4 = parseFloat(t3[1]);
        if (!(n4 > 0)) throw Error(`Invalid scale in entry "${e5}"`);
        r2.set(0, n4);
        continue;
      }
      if (t3 = e5.match(/^([0-9]+):([0-9]+(?:\.[0-9]+)?)$/), t3) {
        let n4 = parseInt(t3[1], 10), i4 = parseFloat(t3[2]);
        if (!(i4 > 0)) throw Error(`Invalid scale in entry "${e5}"`);
        r2.set(n4, i4);
        continue;
      }
      throw Error(`Invalid adjust-sizes entry: "${e5}"`);
    }
    this.rules = Array.from(r2.entries()).sort((e5, t3) => e5[0] - t3[0]).map(([e5, t3]) => ({
      minScreen: e5,
      scale: t3
    }));
  }
  getSizeAdjustment(e4 = void 0) {
    e4 === void 0 && (e4 = window.innerWidth || document.documentElement.clientWidth || 0);
    let t2 = this.rules.length > 0 ? this.rules[this.rules.length - 1].scale : 1;
    for (let n3 of this.rules) if (e4 >= n3.minScreen) t2 = n3.scale;
    else break;
    return t2;
  }
}, h2 = class e3 {
  static RATIO_SHORTCUTS = {
    "1-1": "a",
    "4-3": "b",
    "3-2": "c",
    "16-9": "d",
    "21-9": "e",
    "3-4": "B",
    "2-3": "C",
    "9-16": "D",
    "9-21": "E"
  };
  static WIDTH_SHORTCUTS = {
    260: "a",
    414: "b",
    896: "c",
    1280: "d",
    1440: "e",
    1920: "f",
    2560: "g"
  };
  widths;
  ratio;
  extensions;
  constructor(e4, t2) {
    this.id = e4, this.filename = t2, this.widths = [], this.extensions = [], this.ratio = "";
  }
  setAspectRatio(e4, t2) {
    this.ratio = `${e4}-${t2}`;
  }
  setReatio(e4) {
    e4 = e4.replaceAll("/", "-"), this.ratio = e4;
  }
  setWidths(e4) {
    return console.log("set widths", e4), this.widths = e4.map((e5) => e5.toString()), this;
  }
  addWidth(e4) {
    this.widths.push(e4.toString());
  }
  setExtensions(e4) {
    return this.extensions = e4, this;
  }
  toString() {
    let t2 = this.widths.join("-"), n3 = this.extensions.join("_"), r2 = this.ratio;
    return r2 = r2.replace(/([0-9\-]+)/, (t3) => e3.RATIO_SHORTCUTS[t3] ?? t3), t2 = t2.replace(/([0-9]+)/g, (t3) => e3.WIDTH_SHORTCUTS[t3] ?? t3), `v2/${this.id}/${r2}_${t2}/${this.filename}.${n3}`;
  }
}, g = class {
  base;
  path;
  origUri;
  sizeAdjustment = 1;
  debug = false;
  constructor(e4, t2, n3) {
    this.image = e4, this.logger = n3;
    let r2 = e4.getAttribute("data-src") || e4.getAttribute("src");
    n3.debug("Constructor image with URI: " + r2, e4), this.origUri = r2, r2.replace(/^(.*?\/)(v2\/.*)$/, (e5, t3, n4) => (this.base = t3, this.path = n4, ""));
    let i4 = e4.getAttribute("data-size-adjust");
    if (i4) try {
      t2 = new m(i4).getSizeAdjustment();
    } catch (t3) {
      n3.error(`Failed to parse attribute 'data-size-adjust="${i4}"' for image`, e4, t3);
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
    let e4 = p.decode(this.path);
    this.loadHiRes(e4);
  }
  async loadHiRes(e4) {
    if (await C$2(), await C$2(this.image), await u2(40), !this.image.isConnected) return;
    let t2 = null, n3 = window.innerWidth || document.documentElement.clientWidth, i4 = t2 = this.image.getBoundingClientRect().width;
    (t2 === 0 || t2 === null) && (t2 = n3), t2 = Math.round(t2 * this.sizeAdjustment);
    let a2 = parseInt(e4.widths[0]);
    for (let n4 of e4.widths) {
      let e5 = parseInt(n4);
      if (e5 < t2) break;
      a2 = e5;
    }
    this.logger.debug("MicxCdnImgElement: Best fitting width for " + e4.filename + " is " + a2 + "px (clientBoundingRect = " + i4 + " windowWidth=" + n3 + " px, sizeAdjustment=" + this.sizeAdjustment + ")");
    let o2 = new h2(e4.id, e4.filename);
    o2.setReatio(e4.aspectRatio), o2.addWidth(a2), o2.setExtensions(e4.extensions);
    let s2 = this.base + "/" + o2.toString();
    this.image.style.backgroundSize = "cover", this.image.style.backgroundImage = "url(" + this.origUri + ")", this.image.setAttribute("src", s2), this.image.addEventListener("load", () => {
      this.image.style.backgroundImage = "none", this.image.classList.add("loaded");
    });
  }
  setOptimalImageDimensions(e4) {
    let t2 = e4.aspectRatio.split("/").map((e5) => parseInt(e5)), n3 = t2[0] / t2[1], r2 = parseInt(e4.widths[0]);
    for (let t3 of e4.widths) {
      let e5 = parseInt(t3);
      if (e5 < innerWidth) break;
      r2 = e5;
    }
    this.image.setAttribute("width", r2.toString()), this.image.setAttribute("height", (r2 / n3).toString()), this.image.classList.add("micx-image-loader"), this.image.hasAttribute("alt") === false && this.image.setAttribute("alt", e4.filename);
  }
}, _ = new N$2(500, 1e3), v = class extends pt$1(HTMLElement) {
  static get observedAttributes() {
    return ["default-size-adjust"];
  }
  _observer;
  _seen = /* @__PURE__ */ new WeakSet();
  _imageDefaultSizeAdjustment = 1;
  _windowWidth = window.innerWidth;
  onResize = async () => {
    await _.wait(), this._windowWidth !== window.innerWidth && (this._windowWidth = window.innerWidth, this.log("Resize event detected, reprocessing images"), this.querySelectorAll("img").forEach((e4) => {
      let t2 = e4.getAttribute("data-src") || e4.src || "";
      if (!p.isCdnImage(t2)) {
        this.debug("Image is not a CDN image, skipping:", e4);
        return;
      }
      new g(e4, this._imageDefaultSizeAdjustment, this.getLogger());
    }));
  };
  async connectedCallback() {
    this.debug("MicxCdnImageLoader connected to DOM"), await Z$3(), this.updateDefaultSizeAdjustment(), this.startObserving(), window.addEventListener("resize", this.onResize);
  }
  disconnectedCallback() {
    this.stopObserving(), window.removeEventListener("resize", this.onResize);
  }
  startObserving() {
    this._observer || (this.querySelectorAll("img").forEach((e4) => this._enqueue(e4)), this._observer = new MutationObserver((e4) => {
      for (let t2 of e4) if (!(t2.type !== "childList" || t2.addedNodes.length === 0)) for (let e5 = 0; e5 < t2.addedNodes.length; e5++) {
        let n3 = t2.addedNodes[e5];
        if (n3.nodeType !== Node.ELEMENT_NODE) continue;
        let r2 = n3, i4 = Array.from(r2.getElementsByTagName("img"));
        i4.length > 0 && i4.forEach((e6) => this._enqueue(e6)), r2.tagName === "IMG" && this._enqueue(r2);
      }
    }), this._observer.observe(this, {
      childList: true,
      subtree: true
    }));
  }
  stopObserving() {
    this._observer &&= (this._observer.disconnect(), void 0);
  }
  _enqueue(e4) {
    this._seen.has(e4) || (this._seen.add(e4), queueMicrotask(() => this.onImageAdded(e4)));
  }
  updateDefaultSizeAdjustment() {
    let e4 = this.getAttribute("default-size-adjust");
    if (!e4) {
      this._imageDefaultSizeAdjustment = 1;
      return;
    }
    try {
      this._imageDefaultSizeAdjustment = new m(e4).getSizeAdjustment();
    } catch (t2) {
      this.error("Failed to parse default-size-adjust=", e4, t2), this._imageDefaultSizeAdjustment = 1;
    }
  }
  attributeChangedCallback(e4, t2, n3) {
    this.debug("Properties changed:", e4), e4 === "default-size-adjust" && this.updateDefaultSizeAdjustment();
  }
  onImageAdded(e4) {
    if (this.debug("onImageAdded image:", e4), !p.isCdnImage(e4.src || e4.getAttribute("data-src"))) {
      this.debug("Image is not a CDN image, skipping:", e4);
      return;
    }
    if (e4.hasAttribute("loading") || e4.setAttribute("loading", "lazy"), !e4.hasAttribute("src")) {
      if (!e4.hasAttribute("data-src")) {
        this.warn("Image without src or data-src found, skipping:", e4);
        return;
      }
      e4.src = e4.getAttribute("data-src");
    }
    e4.hasAttribute("data-src") || e4.setAttribute("data-src", e4.src), this.debug("new CDN image:", e4, "with default size adjustment:", this._imageDefaultSizeAdjustment), new g(e4, this._imageDefaultSizeAdjustment, this.getLogger());
  }
};
customElements.define("micx-cdn-image-loader", v);
export {
  A$2 as A,
  Et as E,
  Z$3 as Z,
  b$1 as a,
  bt$1 as b,
  r as c,
  y$1 as d,
  n$4 as e,
  dt$1 as f,
  gt$1 as g,
  i3 as h,
  i$2 as i,
  o as j,
  e$2 as k,
  lt$1 as l,
  i$5 as m,
  n$1 as n,
  o$1 as o,
  pt$1 as p,
  o$2 as q,
  r$4 as r,
  st$1 as s,
  t$1 as t,
  wt$1 as w,
  yt$1 as y
};
//# sourceMappingURL=vendor-BrlR3vZs.js.map
