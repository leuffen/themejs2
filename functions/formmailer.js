import { registerFormPreset as o } from "@trunkjs/form";
import { sleep as s } from "@trunkjs/browser-utils";
import { MicxFormmailerApi as n } from "@micx/lib-js";
import { Feedback as t } from "@nextrap/nte-feedback";
function c() {
  let e = !1;
  return t.loading({ title: "Bitte warten...", message: "Die Übertragung wird gestartet" }), (async () => (await s(5e3), !e && await t.progress({
    progress: 0,
    mock: !0,
    title: "Übertragung gestartet...",
    mockDuration: 1e4,
    mockMessages: [
      "Eine sichere Verbindung wird hergestellt …",
      "Verschlüsselte Übertragung der Nachricht …",
      "Warten auf Empfangsbestätigung …"
    ]
  })))(), () => {
    e = !0, t.close();
  };
}
o({
  async onSubmit(e) {
    let r;
    try {
      r = c(), await s(2e4), await new n(window.micx_subscription, window.micx_endpoint).sendData(e.value), r?.(), await t.success({
        title: "Nachricht übermittelt",
        message: "Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.",
        autoClose: !1
      }), e.getElements().forEach((a) => a.setAttribute("disabled", "true")), e.submitter && (e.submitter.innerText = "Nachricht übermittelt");
    } catch (i) {
      r?.(), console.error("Form submission error:", i), await t.error({
        title: "Fehler bei der Übermittlung",
        message: "Die Nachricht konnte nicht übermittelt werden.",
        details: String(i),
        autoClose: !1
      });
    }
  }
});
