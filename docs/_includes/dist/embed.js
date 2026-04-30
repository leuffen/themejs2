const style = ':host(.ready):not(:host(.stay-open)) #wrapper {\n  display: none !important;\n}\n:host(.ready):not(:host(.stay-open)) slot#main::slotted(*) {\n  display: block !important;\n}\n\n:host(.ready.pre-visual):not(:host(.stay-open)) #wrapper {\n  display: none !important;\n}\n:host(.ready.pre-visual):not(:host(.stay-open)) slot#main::slotted(*) {\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n\n:host(.ready.pre-visual.visual):not(:host(.stay-open)) #wrapper {\n  display: none !important;\n}\n:host(.ready.pre-visual.visual):not(:host(.stay-open)) slot#main::slotted(*) {\n  transition: none !important;\n}\n\nslot#main::slotted(*) {\n  display: none !important;\n  transition: opacity 0.1s ease;\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n\n#wrapper {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n#window {\n  max-width: 600px;\n  aspect-ratio: 16/9;\n  width: 90vw;\n  min-width: 100px;\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 10px;\n  flex-direction: column;\n  border-radius: 8px;\n  display: flex;\n  z-index: 9999;\n}\n#window #image {\n  width: 70%;\n  height: 60%;\n  align-self: center;\n  object-fit: contain;\n  object-position: center center;\n}\n#window #image img {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n}\n#window #image img.loaded {\n  opacity: 1;\n}\n#window #loadbar::before {\n  display: block;\n  content: "";\n  width: 100%;\n  height: 100%;\n  background-color: #55c900;\n  animation: loading 10s ease;\n}\n#window #loadbar {\n  box-shadow: 0 0 1px 1px lightgray;\n  margin-top: 20px;\n  background-color: lightgray;\n  position: relative;\n  width: 100%;\n  height: 8px;\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n@keyframes loading {\n  0% {\n    width: 0%;\n  }\n  1% {\n    width: 40%;\n  }\n  10% {\n    width: 60%;\n  }\n  30% {\n    width: 80%;\n  }\n  100% {\n    width: 100%;\n  }\n}\nslot {\n  display: contents;\n}';
const tj_loader_state_internal = {
  state: "loading"
};
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const startTime = Date.now();
class LoaderElement extends HTMLElement {
  #elementMap = /* @__PURE__ */ new Map();
  #startTime = startTime;
  #interval = null;
  #onAfterLoad = false;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    const shadowRoot = this.shadowRoot;
    shadowRoot.appendChild(styleElement);
    const rootElement = document.createElement("div");
    rootElement.innerHTML = `<div id="wrapper"><slot name="loader"><div id="window"><div id="image"><img src="" loading="eager" fetchpriority="high"></div><div id="loadbar"></div></div></slot></div><slot id="main"></slot>`;
    shadowRoot.appendChild(rootElement);
  }
  connectedCallback() {
    window.tj_loader_state = "loading";
    this.addEventListener("init:child-waitreq", (e) => this.#handleChildWaitReq(e));
    this.addEventListener("init:child-ready", (e) => this.#handleChildReady(e));
    this.#interval = window.setInterval(this.#checkReadyState, 2e3);
    window.addEventListener("DOMContentLoaded", () => {
      this.#onAfterLoad = true;
      console.debug(`Window load event received after ${Date.now() - this.#startTime}ms`);
      this.#checkReadyState();
    });
    window.setTimeout(() => {
      const firstImg = document.querySelector("img.loader") ?? document.querySelector("img");
      const imageSrc = firstImg?.getAttribute("src") || this.getAttribute("data-src") || "";
      const img = this.shadowRoot.querySelector("img");
      if (img) {
        img.onload = () => {
          img.classList.add("loaded");
        };
        img.setAttribute("src", imageSrc);
      }
    }, 2);
  }
  #checkReadyState = async () => {
    const now = Date.now();
    for (const [element, info] of this.#elementMap.entries()) {
      if (now - info.waitStart > 4e3) {
        console.error(`Element ${element} has been waiting for more than 4 seconds. Removing from loader (Check callbacks!).`, element);
        this.#elementMap.delete(element);
      }
    }
    if (!this.#onAfterLoad) {
      return;
    }
    if (this.#elementMap.size === 0) {
      window.clearInterval(this.#interval);
      this.classList.add("ready");
      await sleep(1);
      tj_loader_state_internal.state = "ready";
      this.dispatchEvent(new CustomEvent("loader:ready", {
        bubbles: true,
        composed: true
      }));
      console.debug(`Loader ready after ${Date.now() - this.#startTime}ms`);
      await sleep(10);
      tj_loader_state_internal.state = "pre-visual";
      this.classList.add("pre-visual");
      this.dispatchEvent(new CustomEvent("loader:pre-visual", {
        bubbles: true,
        composed: true
      }));
      console.debug(`Loader pre-visual after ${Date.now() - this.#startTime}ms`);
      await sleep(150);
      tj_loader_state_internal.state = "visual";
      this.classList.add("visual");
      await sleep(1);
      this.dispatchEvent(new CustomEvent("loader:visual", {
        bubbles: true,
        composed: true
      }));
      console.debug(`Loader visual after ${Date.now() - this.#startTime}ms`);
    }
  };
  #handleChildWaitReq = (event) => {
    const { element, state } = event.detail;
    this.#elementMap.set(element, { waitStart: Date.now() });
  };
  #handleChildReady = (event) => {
    const { element, state } = event.detail;
    const info = this.#elementMap.get(element);
    if (!info) {
      console.warn(`Received ready event for element that did not send waitreq:`, element);
      return;
    }
    this.#elementMap.delete(element);
    console.debug(`Element ready:`, element, `Waited for ${Date.now() - info.waitStart}ms`);
    this.#checkReadyState();
  };
}
if (customElements.get("tj-loader")) {
  console.error("tj-loader is already defined. Please check for duplicate imports or custom element definitions.");
} else {
  customElements.define("tj-loader", LoaderElement);
}
Object.assign(window, {
  get tj_loader_state() {
    return tj_loader_state_internal.state;
  },
  set tj_loader_state(value) {
    throw new Error(`Cannot set tj_loader_state directly.`);
  }
});
console.log("Embed script loaded");
