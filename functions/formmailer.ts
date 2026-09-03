import "@trunkjs/form";
import { registerFormPreset } from "@trunkjs/form";
import { sleep } from "@trunkjs/browser-utils";
import { MicxFormmailerApi } from "@micx/lib-js";
import { Feedback } from "@nextrap/nte-feedback";

// Stellt die vom Layout gesetzte Formmailer-Konfiguration typsicher bereit.
declare global {
  interface Window {
    micx_subscription: string;
    micx_endpoint: string;
  }
}

// Zeigt während der Übermittlung einen mehrstufigen Feedback-Zustand an und liefert eine Abbruchfunktion zurück.
function showFormmailerProgress(): () => void {
  let stopped = false;

  void Feedback.loading({ title: "Bitte warten...", message: "Die Übertragung wird gestartet" });

  void (async () => {
    await sleep(5000);
    if (stopped) return;

    await Feedback.progress({
      progress: 0,
      mock: true,
      title: "Übertragung gestartet...",
      mockDuration: 10000,
      mockMessages: [
        "Eine sichere Verbindung wird hergestellt …",
        "Verschlüsselte Übertragung der Nachricht …",
        "Warten auf Empfangsbestätigung …",
      ],
    });
  })();

  return () => {
    stopped = true;
    Feedback.close();
  };
}

// Registriert die optionale Micx-Übermittlung für alle tj-form-Formulare der einbindenden Website.
registerFormPreset({
  async onSubmit(formContext) {
    let cancelProgress: (() => void) | undefined;

    try {
      cancelProgress = showFormmailerProgress();
      await sleep(20000);

      const api = new MicxFormmailerApi(window.micx_subscription, window.micx_endpoint);
      await api.sendData(formContext.value);
      cancelProgress?.();

      await Feedback.success({
        title: "Nachricht übermittelt",
        message: "Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.",
        autoClose: false,
      });

      formContext.getElements().forEach((element) => element.setAttribute("disabled", "true"));
      if (formContext.submitter) formContext.submitter.innerText = "Nachricht übermittelt";
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
