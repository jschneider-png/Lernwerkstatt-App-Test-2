SANITÄRTECHNIK 11 – REPARATURPAKET 404 / STARTSEITE

URSACHE:
In einem früheren Paket lag zusätzlich eine index.html als Übersicht der
virtuellen Klassenzimmer. Wenn diese Datei ins Hauptverzeichnis hochgeladen
wird, überschreibt sie die eigentliche Startseite des Sanitärtechnik-Kurses.

DADURCH:
- wirkt das Layout "zerstört"
- das virtuelle Klassenzimmer der Startseite verschwindet
- Links auf noch nicht vorhandene VK-BW-Ordner können 404 zeigen

SO REPARIERST DU ES:

1. Im HAUPTVERZEICHNIS des GitHub-Repositories die vorhandene index.html
   durch die index.html aus diesem Reparaturpaket ersetzen.

2. Die aktuelle lernpfad.html aus diesem Paket hochladen/ersetzen.
   Sie enthält weiterhin die Lernlandkarte direkt oben.

3. Wenn du ByCS nutzt, zusätzlich lernpfad-bycs.html ersetzen.

4. Die virtuellen Klassenzimmer müssen als echte Ordner vorliegen:
   VK-BW02/index.html
   VK-BW03/index.html
   ...
   VK-BW12/index.html

   Solange ein Ordner noch nicht existiert, führt genau dieser BW-Link
   erwartungsgemäß auf 404. Das beschädigt aber nicht den restlichen Kurs.

WICHTIG:
Die Datei index.html im Hauptverzeichnis ist IMMER die Startseite des
gesamten Sanitärtechnik-Kurses. Eine Übersichts-index.html aus einem
Unterpaket darf dort niemals darüberkopiert werden.

GitHub Pages Startseite:
https://jschneider-png.github.io/Lernwerkstatt-Sanit-rtechnik-11/

Beispiel BW2:
https://jschneider-png.github.io/Lernwerkstatt-Sanit-rtechnik-11/VK-BW02/
