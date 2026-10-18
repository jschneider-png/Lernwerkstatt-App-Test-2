SANITÄRTECHNIK 11 – SAISON NAHTLOS FIX

Grundlage: deine aktuell hochgeladene komplette Repository-ZIP.

PROBLEM BEHOBEN:
- Saisonhintergrund lag teilweise hinter dem body und wirkte dadurch schwarz.
- Auf der Startseite wurde die zentrale saison.js bisher überhaupt nicht geladen.
- Mehrere weitere Root-Seiten luden saison.js ebenfalls noch nicht.

DIESE VERSION:
- legt die Hintergrundwelt sichtbar hinter die Inhalte, aber über den body-Hintergrund
- macht die Übergänge weich mit transparenten Farbverläufen
- verwendet keine harte rechteckige Hintergrundfläche
- lässt Startseite / Klassenzimmer / Links / Blockwochen inhaltlich unverändert
- Normalmodus lässt die Originaloptik vollständig unangetastet
- Karten bekommen je nach Saison einen lesbaren Glas-Effekt

HOCHLADEN:
1. saison.js im Hauptverzeichnis ersetzen.
2. Die enthaltenen HTML-Dateien an derselben Stelle ersetzen.
3. assets/saison NICHT erneut hochladen – deine vorhandenen Bilder/GIFs werden weiterverwendet.
4. kurs-links.js NICHT anfassen.

Saison wählen:
const SAISON = 'normal';
const SAISON = 'halloween';
const SAISON = 'weihnachten';
const SAISON = 'fruehling';
const SAISON = 'sommer';

Die nicht bereits angebundenen Seiten, die einmalig ergänzt wurden:
- wiederholungen.html
- missionen.html
- wiederholung.html
- index.html
- bw01-interaktiv.html