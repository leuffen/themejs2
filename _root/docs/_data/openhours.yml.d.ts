
type Table = {
    day: string, // e.g. "Mo - Fr"
    time: string // e.g. "08:00 - 12:00<br>13:00 - 17:00"
}

type TableJson = {
    dayOfWeek: number, // e.g. 1
    from: string, // e.g. "08:00"
    till: string, // e.g. "12:00"
    status: "" // Reserved for future use
}
type Vacation = {
    from: string, // Date Time string e.g. 2022-01-01 - leave empty if no data
    till: string, // Date Time string e.g. 2029-01-01
    short_text: string, // e.g. "New Year's Day"
    text: string, // e.g. "Vertretung durch ..."
    title: string, // e.g. "Urlaub vom 01.01. bis 01.01.2022"
}

/**
 * The file type of the openhours.yml file
 *
 * Speichert die Sprechstundenzeiten / Öffnungszeiten
 */
export type filetype = {
    _editor: "openhours/v1",
    table: Table[],     // Tabellenansicht der Öffnungszeiten
    json: TableJson[],  // Öffnungszeiten für each day of the week / time slot
    vacation: Vacation[],   // Leave empty if no data
}
