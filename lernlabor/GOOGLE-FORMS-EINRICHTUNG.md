# Google Forms: Feedback zur Lernwerkstatt

Die Schülerfeedback-Seite in GitHub ist bereits eingebunden. Für die automatische Sammlung in Google Forms ist **einmalig** eine Aktion im Google-Konto der Lehrkraft nötig.

1. Melde dich mit dem Google-Konto an, in dem die Antworten gespeichert werden sollen. Öffne https://script.google.com/ und erstelle ein neues Projekt.
2. Ersetze den vorhandenen Code in **Code.gs** durch den Inhalt von `google-form-erstellen.gs`.
3. Speichere und führe die Funktion `erstelleLernwerkstattFeedback` einmal aus. Bestätige erforderliche Google-Berechtigungen.
4. Öffne unten im Skript-Editor das **Ausführungsprotokoll**. Dort stehen Schülerlink, Bearbeitungslink und die Antworttabelle.
5. Öffne die neue Google-Form und prüfe unter **Einstellungen**: keine E-Mail-Adressen erfassen, keine verpflichtende Anmeldung, soweit für deine Schülerinnen und Schüler möglich. Bei Schul-/Workspace-Konten können Vorgaben der Organisation gelten.
6. Trage **nur den SCHÜLERLINK** (nicht die Antworttabelle oder den Bearbeitungslink) in `lernlabor/feedback-config.js` als Wert von `FORM_URL` ein. Das bestehende Formular-Menü leitet die SuS danach zu Google Forms.
7. Freigabe: Die Tabelle nur als Lehrkraft behalten. Für die Klassenauswertung die Diagramme aus Google Forms unter **Antworten → Zusammenfassung** über Beamer zeigen; Freitexte vorher prüfen.

**Datenschutz:** Auch ohne E-Mail-Erfassung können freiwillige Texte identifizierende Angaben enthalten. Die Teilnahme sollte freiwillig sein, nach schulischen Vorgaben datenschutzrechtlich geprüft werden und die Klassenpräsentation sollte nur aggregierte Zahlen bzw. geprüfte Kommentare zeigen.

**Wichtig:** Das Skript erzeugt bei jedem erneuten Ausführen ein **neues** Formular und eine **neue** Tabelle. Führe es daher nur einmal aus.
