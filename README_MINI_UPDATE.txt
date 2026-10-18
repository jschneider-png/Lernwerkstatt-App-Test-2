SANITÄRTECHNIK 11 – MINI-UPDATE SAISONSTEUERUNG

Dieses Paket enthält NUR die Dateien, die für die zentrale Saisonsteuerung
einmalig angepasst werden müssen.

WICHTIG:
kurs-links.js ist ABSICHTLICH NICHT enthalten.
Deine bereits eingetragenen Mebis-/Drive-/Arbeitsblatt-Links bleiben dadurch unangetastet.

Einmalig ersetzen:
- index.html
- lernpfad.html
- lernpfad-bycs.html
- stundenmaterial.html
- lernorte.html
- lernorte-bycs.html
- aktuelles.html
- aktuelles-bycs.html
- jahresreise-karte.html
- jahresreise-karte-bycs.html
- bycs.html
- VK-BW02/index.html bis VK-BW12/index.html

Neu hinzufügen:
- saison.js

Danach musst du für einen Saisonwechsel NUR NOCH saison.js ändern.

In saison.js:
const SAISON = 'normal';

Mögliche Werte:
'normal'
'halloween'
'weihnachten'
'fruehling'
'sommer'

Beispiel:
const SAISON = 'halloween';

Dann nur saison.js bei GitHub ersetzen.

NICHT ANFASSEN:
- kurs-links.js
- Bilder
- klassenzimmer.png
- jahresreise.png
- andere bereits vorhandene Assets
