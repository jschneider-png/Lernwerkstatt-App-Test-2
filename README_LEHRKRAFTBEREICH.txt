SANITÄRTECHNIK 11 – LEHRKRAFT-BEREICH FINAL

Neu:
In JEDEM virtuellen Klassenzimmer BW02 bis BW12 gibt es jetzt
einen klar markierten Bereich:

LEHRKRAFT_INHALTE

Dort kannst du eigene Ergänzungen eintragen, ohne im großen DATA-Block
suchen zu müssen.

Beispiel:

const LEHRKRAFT_INHALTE = {
  0:{
    text:'Hier steht mein eigener fachlicher Zusatz.',
    bild:'bilder/wasserhaerte.jpg',
    bildunterschrift:'Kalkablagerung im Wärmetauscher',
    bilder:['bilder/a.jpg','bilder/b.jpg'],
    hinweis:'Merke: ...',
    tipp:'Praxistipp: ...',
    html:''
  }
};

0 = erstes Lernmodul
1 = zweites Lernmodul
2 = drittes Lernmodul
3 = viertes Lernmodul
4 = fünftes Lernmodul

BILDER:
Bilder einfach in dein GitHub-Repository laden, zum Beispiel:

bilder/wasserhaerte.jpg

Dann nur den Dateinamen in LEHRKRAFT_INHALTE eintragen.
Kein externer Link nötig.

MEBIS / DRIVE:
Direkt darüber gibt es weiterhin MATERIAL_LINKS:

const MATERIAL_LINKS={
  mebis:'',
  drive:'',
  arbeitsblatt:'',
  glossar:''
};

UPLOAD:
- Die Ordner VK-BW02 bis VK-BW12 ersetzen.
- lernpfad.html ersetzen.
- bei ByCS zusätzlich lernpfad-bycs.html ersetzen.

Alle vorhandenen Fachtexte, Übungen, Quiz, Fun Facts und Fortschrittsfunktionen
bleiben erhalten.
