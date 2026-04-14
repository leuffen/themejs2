import {create_element} from "@trunkjs/browser-utils";


window.addEventListener("afterArrange", () => {
  console.log("Generating kickers...");
  document.querySelectorAll("h1[data-kicker], h2[data-kicker], h3[data-kicker], h4[data-kicker], h5[data-kicker], h6[data-kicker]").forEach((heading) => {
    const prefix = heading.getAttribute("data-kicker");
    if ( ! prefix) {
      return;
    }
    const kicker = create_element("span", { class: "kicker" }, prefix);
    heading.insertAdjacentElement("beforebegin", kicker);
  });
});
