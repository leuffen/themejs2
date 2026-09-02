import { Feedback } from "@nextrap/nte-feedback";

// Keeps each feedback state visible for the intended transition duration.
const sleep = (milliseconds: number) =>
  new Promise((resolve) => window.setTimeout(resolve, milliseconds));

// Starts the feedback animation and exposes a simple stop function for the form handler.
export function showMockProgress(): () => void {
  let $stop = false;

  Feedback.loading({ title: "Bitte warten...", message: "Die Übertragung wird gestartet" });

  void (async () => {
    await sleep(5000);
    if ($stop) return;

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

  // Stops the pending transition and closes the currently visible feedback state.
  return () => {
    $stop = true;
    Feedback.close();
  };
}
