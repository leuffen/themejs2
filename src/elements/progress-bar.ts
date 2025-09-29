import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('progress-bar')
export class ProgressBar extends LitElement {
  @property({ type: String, attribute: 'variant' })
  variant: 'mobile' | 'desktop' = 'mobile';

  @property({ type: String, attribute: 'color' })
  color: string = 'orange-500';

  @property({ type: String, attribute: 'background-color' })
  backgroundColor: string = 'gray-100';

  @property({ type: String, attribute: 'height' })
  height: string = '';

  @property({ type: Number, attribute: 'border-radius' })
  borderRadius: number = 5;

  @property({ type: Number, attribute: 'show-after-scroll' })
  showAfterScroll: number = 70;

  @property({ type: Number, attribute: 'transition-duration' })
  transitionDuration: number = 0.1;

  private progress: number = 0;
  private isVisible: boolean = false;

  static styles = css`
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
      top: 70px;
      z-index: 10;
    }

    .desktop-variant {
      /* Desktop specific styles can be added here */
    }

    .hidden {
      display: none !important;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setupScrollListener();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeScrollListener();
  }

  private setupScrollListener() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    // Initialize once on mount so initial position is reflected
    this.handleScroll();
  }

  private removeScrollListener() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private isTickScheduled = false;

  private handleScroll = () => {
    if (this.isTickScheduled) return;
    this.isTickScheduled = true;
    requestAnimationFrame(() => {
      const maxScrollable = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
      const scrolled = maxScrollable > 0 ? (window.scrollY / maxScrollable) * 100 : 0;
      this.progress = Math.min(Math.max(scrolled, 0), 100);

      if (this.variant === 'mobile') {
        this.isVisible = window.scrollY > this.showAfterScroll;
      } else {
        this.isVisible = true;
      }

      this.isTickScheduled = false;
      this.requestUpdate();
    });
  };

  private getProgressBarStyles() {
    const effectiveHeight = this.variant === 'desktop'
      ? (this.height && this.height.trim().length > 0 ? this.height : 'var(--nt-space-3)')
      : (this.height && this.height.trim().length > 0 ? this.height : '4px');

    return `
      height: ${effectiveHeight};
      border-radius: calc(0.25rem * ${this.borderRadius});
      background-color: var(--nt-${this.backgroundColor}, #EDF1F8);
    `;
  }

  private getProgressFillStyles() {
    return `
      height: 100%;
      width: ${this.progress}%;
      background-color: var(--nt-${this.color}, #FE6606);
      transition: width ${this.transitionDuration}s ease-out;
    `;
  }

  private getContainerStyles() {
    const baseStyles = this.getProgressBarStyles();
    
    if (this.variant === 'mobile') {
      return `${baseStyles} display: ${this.isVisible ? 'block' : 'none'};`;
    }
    
    return baseStyles;
  }

  render() {
    return html`
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
}

