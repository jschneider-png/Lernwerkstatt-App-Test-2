# Interaktive Trinkwasser-Lernwerkstatt – GitHub Pages

Zwei vollständige, eigenständige Lernseiten für Berufsschüler/-innen (60 Minuten pro Einheit):

1. **trinkwasserbehandlung.html** – Bild-Wegweiser, Ziele, Anforderungen, Wasserqualität, Verfahren inkl. Ionenaustausch und Dosier-Rechenaufgabe, Desinfektion, Praxisfälle, schriftliche Sicherung.
2. **filter.html** – Technischer Wegweiser, Kundensituation mit reduziertem Wasserdurchfluss, Filterarten, bildliche Bauteilzuordnung, Instandhaltung, Entscheidungsfälle und Ergebnisprotokoll.

Die Lernseiten enthalten Selbstkontrolle, Wissensboxen, Lückentexte, Zuordnungen, Freitext, Phasen-Timer, Timeline, Fortschritt, Speicherfunktion und Text-Export. `LEHRKRAFT.md` enthält Musterlösungen und Moderationshinweise.

## Veröffentlichung

Die **gesamten Dateien aus diesem Ordner in dasselbe Verzeichnis** im GitHub-Repository kopieren (insbesondere `app.js`, `style.css` und `wegweiser-trinkwasser.png`). Bei Ablage beispielsweise im Unterordner `lernlabor/` im bestehenden Repository `Lernwerkstatt-Sanit-rtechnik-11` werden nach Aktivierung von GitHub Pages folgende Adressen nutzbar:

```
https://jschneider-png.github.io/Lernwerkstatt-Sanit-rtechnik-11/lernlabor/trinkwasserbehandlung.html
https://jschneider-png.github.io/Lernwerkstatt-Sanit-rtechnik-11/lernlabor/filter.html
```

## In „Unterrichtsmaterial → Öffnen“ hinterlegen

Deine Seite `stundenmaterial.html?bw=2&stunde=4` erklärt, dass die Buttons über `stunden-buttons.js` konfiguriert werden. Der genaue Aufbau dieser JavaScript-Datei ist von hier aus nicht abrufbar, deshalb können die folgenden Angaben nur als **URLs und Beschriftungen**, nicht als erfundener einsatzfertiger Eintrag in unbekanntem Schema, dienen:

- Beschriftung: `Trinkwasserbehandlung – Lernweg öffnen`
- Link: `https://jschneider-png.github.io/Lernwerkstatt-Sanit-rtechnik-11/lernlabor/trinkwasserbehandlung.html`
- Beschriftung: `Filter – Lernwerkstatt öffnen`
- Link: `https://jschneider-png.github.io/Lernwerkstatt-Sanit-rtechnik-11/lernlabor/filter.html`

In `stunden-buttons.js` für **Bildungsweg 2 / Stunde 4** beim betreffenden Materialeintrag hinterlegen, sofern beide Einheiten dort erscheinen sollen. Wenn nur ein „Öffnen“-Button vorgesehen ist, auf `lernlabor/index.html` verlinken.

## Timereinschränkung

Der Timer hat **keinen Reset-Button**. Jede Phase wird separat im Browser gespeichert, beim Wechsel kann die abgelaufene Zeit nicht durch erneutes Klicken aufgefüllt werden. Start/Pause sind erlaubt, und nach 0 Minuten gibt es für diese Phase keinen Neustart. Es ist eine Unterrichtshilfe, kein gesicherter Prüfungs-Timer; Browserdaten löschen oder Wechsel des Endgerätes kann lokale Zustände zurücksetzen.

## Datenschutz / Abgabe

Die Eingaben werden mit `localStorage` lokal im Browser gespeichert; sie werden nicht automatisch an die Lehrkraft übertragen. Abgabe über `Lernprotokoll herunterladen` und anschließenden Upload in mebis. Für gemeinsam genutzte Geräte: bei Bedarf privates Browserfenster benutzen.
