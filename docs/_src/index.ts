import "@trunkjs/loader";
import "@trunkjs/form";
import { registerFormPreset } from "@trunkjs/form";
import { MicxFormmailerApi } from "@micx/lib-js";
import { Feedback } from "@nextrap/nte-feedback";
import "./style.scss";
import { showMockProgress } from "./progress-feedback";

// Declares the Micx configuration provided by the 10_blanc layout.
declare global {
  interface Window {
    micx_subscription: string;
    micx_endpoint: string;
  }
}

import "@leuffen/themejs2";

// Development only
import "@nextrap/nte-theme-switcher";
import {sleep} from "@trunkjs/browser-utils";

// Handles the default tj-form submission and reports its result through the shared feedback surface.
registerFormPreset({
  async onSubmit(formContext) {
    const value = formContext.value;
    let cancelProgress: (() => void) | undefined;

    try {
      cancelProgress = showMockProgress();

      await sleep(20000);
      const api = new MicxFormmailerApi(window.micx_subscription, window.micx_endpoint);
      await api.sendData(value);

      // Stop the progress animation
      cancelProgress?.();

      // Shows a success feedback message and keeps it visible until the user closes it.
      await Feedback.success({
        title: "Nachricht übermittelt",
        message: "Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.",
        autoClose: false,
      });

      // Disable the submit button and change its text to indicate successful submission.
      formContext.getElements().forEach((element) => {
        element.setAttribute("disabled", "true");
      });
      if (formContext.submitter) {
        formContext.submitter.innerText = "Nachricht übermittelt";
      }
    } catch (error) {
      cancelProgress?.();
      console.error("Form submission error:", error);
      await Feedback.error({
        title: "Fehler bei der Übermittlung",
        message: "Die Nachricht konnte nicht übermittelt werden.",
        details: String(error),
        autoClose: false,
      });
    }
  },
});
