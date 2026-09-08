import "@trunkjs/content-pane";
import "@trunkjs/responsive";
import "@trunkjs/loader";
import "@nextrap/nte-navbar";
import "@nextrap/nte-nav";
import "@nextrap/nte-burger";
import "@nextrap/nte-offcanvas";
import "@nextrap/nte-feedback";
import "@trunkjs/element-relocator";
import "@trunkjs/form";
import "@nextrap/nte-input";
import "@nextrap/nte-card";
import "@nextrap/nte-image";
import { css as p, LitElement as c, html as d } from "lit";
import { property as i, customElement as f } from "lit/decorators.js";
import "@micx/lib-js";
import "@leuffen/announcements";
import "@nextrap/ntl-2col";
import "@nextrap/ntl-hero";
import "@nextrap/nte-slider";
import "@nextrap/ntl-card-row";
import "@nextrap/ntl-card-grid";
import "@nextrap/nte-accordion";
import "@nextrap/nte-consent-blocker";
import "@nextrap/nte-parallax-bg";
var u = Object.defineProperty, m = Object.getOwnPropertyDescriptor, r = (t, s, n, l) => {
  for (var o = l > 1 ? void 0 : l ? m(s, n) : s, h = t.length - 1, a; h >= 0; h--)
    (a = t[h]) && (o = (l ? a(s, n, o) : a(o)) || o);
  return l && o && u(s, n, o), o;
};
let e = class extends c {
  constructor() {
    super(...arguments), this.variant = "mobile", this.color = "var(--nt-primary)", this.backgroundColor = "var(--nt-light)", this.height = "", this.borderRadius = 5, this.showAfterScroll = 70, this.transitionDuration = 0.1, this.offsetSelector = "", this.offsetTop = 70, this.progress = 0, this.isVisible = !1, this.computedOffsetTop = 70, this.recomputeOffsetTop = () => {
      let t = this.offsetTop;
      if (this.offsetSelector) {
        const s = document.querySelector(this.offsetSelector);
        if (s) {
          const n = s.getBoundingClientRect();
          t = Math.max(0, Math.round(n.height));
        }
      }
      t !== this.computedOffsetTop && (this.computedOffsetTop = t, this.requestUpdate());
    }, this.isTickScheduled = !1, this.handleScroll = () => {
      this.isTickScheduled || (this.isTickScheduled = !0, requestAnimationFrame(() => {
        const t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight, s = t > 0 ? window.scrollY / t * 100 : 0;
        this.progress = Math.min(Math.max(s, 0), 100), this.variant === "mobile" ? this.isVisible = window.scrollY > this.showAfterScroll : this.isVisible = !0, this.isTickScheduled = !1, this.requestUpdate();
      }));
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.setupScrollListener(), this.setupOffsetObservers();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeScrollListener(), this.teardownOffsetObservers();
  }
  setupScrollListener() {
    window.addEventListener("scroll", this.handleScroll, { passive: !0 }), this.handleScroll();
  }
  removeScrollListener() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  setupOffsetObservers() {
    if (this.recomputeOffsetTop(), window.addEventListener("resize", this.recomputeOffsetTop, { passive: !0 }), this.offsetSelector && "ResizeObserver" in window) {
      const t = document.querySelector(this.offsetSelector);
      t && (this.resizeObserver = new ResizeObserver(() => this.recomputeOffsetTop()), this.resizeObserver.observe(t));
    }
  }
  teardownOffsetObservers() {
    window.removeEventListener("resize", this.recomputeOffsetTop), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = void 0);
  }
  updated(t) {
    t.has("offsetSelector") && (this.teardownOffsetObservers(), this.setupOffsetObservers());
  }
  getProgressBarStyles() {
    return `
      height: ${this.variant === "desktop" ? this.height && this.height.trim().length > 0 ? this.height : "var(--nt-space-3)" : this.height && this.height.trim().length > 0 ? this.height : "4px"};
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
    const t = this.getProgressBarStyles();
    return this.variant === "mobile" ? `${t} display: ${this.isVisible ? "block" : "none"}; top: ${this.computedOffsetTop}px; position: sticky;` : t;
  }
  render() {
    return d`
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
e.styles = p`
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
r([
  i({ type: String, attribute: "variant" })
], e.prototype, "variant", 2);
r([
  i({ type: String, attribute: "color" })
], e.prototype, "color", 2);
r([
  i({ type: String, attribute: "background-color" })
], e.prototype, "backgroundColor", 2);
r([
  i({ type: String, attribute: "height" })
], e.prototype, "height", 2);
r([
  i({ type: Number, attribute: "border-radius" })
], e.prototype, "borderRadius", 2);
r([
  i({ type: Number, attribute: "show-after-scroll" })
], e.prototype, "showAfterScroll", 2);
r([
  i({ type: Number, attribute: "transition-duration" })
], e.prototype, "transitionDuration", 2);
r([
  i({ type: String, attribute: "offset-selector" })
], e.prototype, "offsetSelector", 2);
r([
  i({ type: Number, attribute: "offset-top" })
], e.prototype, "offsetTop", 2);
e = r([
  f("progress-bar")
], e);
