import { __decorate, __metadata } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let ProgressBar = class ProgressBar extends LitElement {
    constructor() {
        super(...arguments);
        this.variant = 'mobile';
        this.color = 'var(--nt-primary)';
        this.backgroundColor = 'var(--nt-light)';
        this.height = '';
        this.borderRadius = 5;
        this.showAfterScroll = 70;
        this.transitionDuration = 0.1;
        this.offsetSelector = '';
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
            if (this.isTickScheduled)
                return;
            this.isTickScheduled = true;
            requestAnimationFrame(() => {
                const maxScrollable = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
                const scrolled = maxScrollable > 0 ? (window.scrollY / maxScrollable) * 100 : 0;
                this.progress = Math.min(Math.max(scrolled, 0), 100);
                if (this.variant === 'mobile') {
                    this.isVisible = window.scrollY > this.showAfterScroll;
                }
                else {
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
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        // Initialize once on mount so initial position is reflected
        this.handleScroll();
    }
    removeScrollListener() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    setupOffsetObservers() {
        this.recomputeOffsetTop();
        window.addEventListener('resize', this.recomputeOffsetTop, { passive: true });
        if (this.offsetSelector && 'ResizeObserver' in window) {
            const target = document.querySelector(this.offsetSelector);
            if (target) {
                this.resizeObserver = new ResizeObserver(() => this.recomputeOffsetTop());
                this.resizeObserver.observe(target);
            }
        }
    }
    teardownOffsetObservers() {
        window.removeEventListener('resize', this.recomputeOffsetTop);
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = undefined;
        }
    }
    updated(changed) {
        if (changed.has('offsetSelector')) {
            this.teardownOffsetObservers();
            this.setupOffsetObservers();
        }
    }
    getProgressBarStyles() {
        const effectiveHeight = this.variant === 'desktop'
            ? (this.height && this.height.trim().length > 0 ? this.height : 'var(--nt-space-3)')
            : (this.height && this.height.trim().length > 0 ? this.height : '4px');
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
        if (this.variant === 'mobile') {
            return `${baseStyles} display: ${this.isVisible ? 'block' : 'none'}; top: ${this.computedOffsetTop}px; position: sticky;`;
        }
        return baseStyles;
    }
    render() {
        return html `
      <div
        class="progress-container ${this.variant === 'mobile' ? 'mobile-variant' : 'desktop-variant'}"
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
ProgressBar.styles = css `
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
__decorate([
    property({ type: String, attribute: 'variant' }),
    __metadata("design:type", String)
], ProgressBar.prototype, "variant", void 0);
__decorate([
    property({ type: String, attribute: 'color' }),
    __metadata("design:type", String)
], ProgressBar.prototype, "color", void 0);
__decorate([
    property({ type: String, attribute: 'background-color' }),
    __metadata("design:type", String)
], ProgressBar.prototype, "backgroundColor", void 0);
__decorate([
    property({ type: String, attribute: 'height' }),
    __metadata("design:type", String)
], ProgressBar.prototype, "height", void 0);
__decorate([
    property({ type: Number, attribute: 'border-radius' }),
    __metadata("design:type", Number)
], ProgressBar.prototype, "borderRadius", void 0);
__decorate([
    property({ type: Number, attribute: 'show-after-scroll' }),
    __metadata("design:type", Number)
], ProgressBar.prototype, "showAfterScroll", void 0);
__decorate([
    property({ type: Number, attribute: 'transition-duration' }),
    __metadata("design:type", Number)
], ProgressBar.prototype, "transitionDuration", void 0);
__decorate([
    property({ type: String, attribute: 'offset-selector' }),
    __metadata("design:type", String)
], ProgressBar.prototype, "offsetSelector", void 0);
__decorate([
    property({ type: Number, attribute: 'offset-top' }),
    __metadata("design:type", Number)
], ProgressBar.prototype, "offsetTop", void 0);
ProgressBar = __decorate([
    customElement('progress-bar')
], ProgressBar);
export { ProgressBar };
//# sourceMappingURL=progress-bar.js.map