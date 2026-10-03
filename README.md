# Unser Reiserückblick 2025–2026

## Projektidee und Ziel

Die Website stellt Uliana, Alexander und ihren Hund Franny sowie Reiseerinnerungen von Dezember 2025 bis März 2026 vor. Persönliche Berichte über Innsbruck, Seoul und Da Nang beschreiben Erlebnisse, Bewertungen und Eindrücke. Acht eigene Fotos ergänzen die Vorstellung und die Reiseberichte; für den Einstieg werden drei davon wiederverwendet. Der Webauftritt richtet sich an Menschen, die unsere Reiseerlebnisse kennenlernen und Anregungen für eigene Reisen erhalten möchten.

Die Website ist als eine zusammenhängende Seite geplant. Über die Navigation können Besucher direkt zu den einzelnen Abschnitten springen. Grundlage sind die handgezeichneten Skizzen für die Desktop- und Mobilansicht.

## Geplante Inhalte und Anordnung

| Abschnitt | Inhalte | Navigationsziel |
| --- | --- | --- |
| Kopfbereich | Schriftzug „Reisen“ als Link zum Seitenanfang und Navigation | `#start` |
| Einstieg | Überschrift „Unser Reiserückblick 2025–2026“, Bildergalerie und Link „Entdecken“ zur Reiseübersicht | `#start` |
| Wir | Vorstellung von Uliana, Alexander und Franny sowie ein gemeinsames Foto | `#wir` |
| Reiseziele | Kurze Übersicht mit Links zu den drei Reiseberichten | `#reiseziele` |
| Innsbruck | Dezember 2025, Erfahrungsbericht, eigene Bewertung, „Gefallen“, „Nicht gefallen“ und ein Foto | `#innsbruck` |
| Seoul | März 2026, Erfahrungsbericht, eigene Bewertung, „Gefallen“, „Nicht gefallen“ und ein Foto | `#seoul` |
| Da Nang | März 2026, Erfahrungsbericht, eigene Bewertung, „Gefallen“, „Nicht gefallen“ und vier Fotos | `#da-nang` |
| Kontakt | Kontakttext und externer Link zum Instagram-Profil `hey.uliana`; gemeinsames Strandfoto; kein Formular | `#kontakt` |
| Fußbereich | Urheberangabe und Link zurück zum Seitenanfang | `#start` |

Die Reiseübersicht konkretisiert das Navigationsziel „Reiseziele“ aus den Skizzen. Die Bewertungen sind unsere eigenen, festen Einschätzungen auf einer Skala bis 5. Sie werden als eindeutige Zahlen ausgeschrieben, damit auch halbe Punkte verständlich sind. Eine spätere Darstellung mit Flugzeugsymbolen kann die Textangabe ergänzen. Eine Bewertungsfunktion für Besucher ist nicht vorgesehen.

Innsbrucks Reisezeitraum wurde auf Dezember 2025 korrigiert; die Skizzen müssen für die PDF-Abgabe entsprechend aktualisiert werden.

## Geplantes responsives Verhalten

Das Konzept legt die Darstellung für **360 bis 1920 Pixel Bildschirmbreite** fest. Die Inhalte passen sich ohne horizontales Scrollen an die verfügbare Breite an. Es gelten zwei Breakpoints: **768 px** und **1024 px**, jeweils bezogen auf die Breite des Browserfensters. Die Grundanordnung gilt unter 768 px; ab 768 px gilt die Tabletanordnung und ab 1024 px die Desktopanordnung. Die Tabletansicht ergänzt die vorhandenen Mobil- und Desktopskizzen.

Die folgenden Regeln beschreiben das verbindliche Ziel für die spätere CSS-Umsetzung. Der derzeitige HTML-Stand besitzt diese Layouts noch nicht.

| Bereich | Breite | Anordnung |
| --- | --- | --- |
| Mobil | 360–767 px | Eine Hauptspalte. Im Einstieg folgen Überschrift, Einleitungstext, Galerie und „Entdecken“ aufeinander. Im Abschnitt „Wir“ stehen Überschrift, Text und Foto untereinander. Die Reiseübersicht zeigt die drei Links untereinander. Reiseberichte erscheinen nacheinander: jeweils Überschrift, Reisezeitraum, Bewertung, Bericht, positive und negative Eindrücke sowie Foto beziehungsweise Bildergruppe. Die vier Fotos von Da Nang bilden zwei Spalten und zwei Reihen. Im Kontaktbereich folgen Überschrift, Text, Instagram-Link und Foto aufeinander. Die Navigation wird über einen Menübutton aufgeklappt. |
| Tablet | 768–1023 px | Einstieg, Reiseübersicht, Reiseberichte und Kontaktbereich behalten die mobile Reihenfolge. Im Abschnitt „Wir“ steht die Überschrift über zwei Spalten: Text links, Foto rechts. Die vier Fotos von Da Nang bleiben in zwei Spalten und zwei Reihen angeordnet. Die Navigation bleibt über den Menübutton aufklappbar. |
| Desktop | 1024–1920 px | Die Navigation ist vollständig sichtbar, der Menübutton ausgeblendet. Im Einstieg stehen Überschrift, Einleitungstext und „Entdecken“ links, die Galerie rechts. Im Abschnitt „Wir“ stehen unter der Überschrift der Text links und das Foto rechts. Die drei Links der Reiseübersicht stehen nebeneinander. Jeder Reisebericht beginnt mit Überschrift und Reisezeitraum über dem jeweiligen Inhalt. Bei Innsbruck steht das Foto links; Bewertung, Bericht sowie positive und negative Eindrücke stehen rechts. Bei Seoul steht der Bericht mit positiven und negativen Eindrücken links; rechts stehen die Bewertung und darunter das Foto. Bei Da Nang steht der Bericht links und die Bewertung mit positiven und negativen Eindrücken rechts; darunter stehen vier Fotos in einer Reihe. Im Kontaktbereich stehen Überschrift, Text und Instagram-Link links und das Foto rechts. |

Innsbruck und Seoul enthalten jeweils ein einzelnes Foto ohne Galeriebedienung. Die vier Fotos von Da Nang sind eine statische Bildergruppe. Nur der Einstieg erhält einen manuellen Bildwechsel zwischen den drei ausgewählten Reisefotos.

Der Inhaltsbereich ist zentriert und maximal **1200 px** breit. Auf kleineren Bildschirmen schrumpft er mit dem verfügbaren Platz; seitliche Innenabstände verhindern, dass Inhalte am Fensterrand anliegen. Bilder passen sich ihrer Spalte an und behalten ihre Proportionen. Texte umbrechen innerhalb ihrer Spalte. Alle Texte, Reisebewertungen und Fotos bleiben auf jeder Bildschirmgröße zugänglich. Ausgeblendet werden nur das geschlossene Navigationsmenü unter 1024 px, der Menübutton ab 1024 px und die gerade nicht angezeigten Bilder der Einstiegsgalerie. Die ausgeblendeten Galeriebilder bleiben über die Vor- und Zurück-Buttons erreichbar. Der Footer steht auf allen Geräten unter dem Kontaktbereich.

## Geplante Bedienung und Barrierefreiheit

- Die Navigationslinks und „Entdecken“ führen zu Abschnitten auf derselben Seite.
- Unter 1024 px öffnet und schließt ein beschrifteter Menübutton die Navigation. Das geöffnete Menü zeigt alle Links untereinander unter dem Kopfbereich. Der Button teilt den geöffneten Zustand über `aria-expanded` mit und verweist über `aria-controls` auf das Menü. Nach Auswahl eines Links wird das Menü geschlossen und der zugehörige Abschnitt angesprungen. Ohne JavaScript bleiben alle Links sichtbar und erreichbar.
- Die Einstiegsgalerie zeigt jeweils ein Bild in der Reihenfolge Innsbruck, Seoul und Küste bei Da Nang. Sie wird manuell mit beschrifteten Vor- und Zurück-Buttons bedient, die auch per Tastatur erreichbar sind. Nach dem letzten Bild folgt wieder das erste; rückwärts entsprechend das letzte. Es gibt keinen automatischen Bildwechsel. Ohne JavaScript werden die drei Bilder vollständig im Dokument angezeigt.
- Aktuell sind alle Fotos als normale Bilder im Dokument eingebunden. Die vier Fotos aus Da Nang bleiben als Bildergruppe sichtbar; bei den einzelnen Fotos aus Innsbruck und Seoul sind keine Galeriebuttons erforderlich.
- Der Kontaktlink öffnet das Instagram-Profil `hey.uliana` im selben Tab. Es werden keine Instagram-Inhalte eingebettet.
- Bewertungen stehen als Text im HTML, beispielsweise „4,5 von 5“. Spätere dekorative Bewertungssymbole sollen für Screenreader ausgeblendet werden, damit die Bewertung nicht doppelt vorgelesen wird.
- Das HTML verwendet passende Bereiche wie `header`, `nav`, `main`, `section`, `article` und `footer` sowie eine nachvollziehbare Überschriftenhierarchie.
- Ein Sprunglink führt direkt zum Hauptinhalt. Die Seitensprache ist Deutsch.
- Eigene Fotos erhalten passende Alternativtexte. Bei der späteren Gestaltung werden lesbare Kontraste, sichtbare Tastaturfokusse und ausreichend große Bedienelemente berücksichtigt.
- Die Aufgabenstellung nennt WCAG 2.1 oder neuer als Orientierung. Die Barrierefreiheit wird während der Umsetzung geprüft; das Grundgerüst stellt noch keine vollständige Erfüllung dar.

## Projektstruktur

```text
2026-09-website-Uliana-Mukhina/
├── .gitignore
├── README.md
├── assets/
│   └── images/
│       ├── danang1.JPG
│       ├── danang2.JPG
│       ├── danang3.JPG
│       ├── danang4.JPG
│       ├── innsbruck.JPG
│       ├── kontakt.JPG
│       ├── seoul-gasse.jpg
│       └── uliana-alexander-franny.jpg
└── index.html
```

Eigene Bilder liegen unter `assets/images/`. Alle acht Fotos sind mit beschreibenden Alternativtexten eingebunden: ein gemeinsames Foto, ein Foto aus Innsbruck, ein Selfie aus Seoul, vier Fotos aus Da Nang und ein Strandfoto im Kontaktbereich. Die Einstiegsauswahl verwendet die vorhandenen Fotos aus Innsbruck, Seoul und von der Küste bei Da Nang erneut. Eine einfache Größenbegrenzung sorgt dafür, dass die Fotos auch auf schmalen Bildschirmen in den verfügbaren Platz passen. Weitere Gestaltung und JavaScript kommen später hinzu.

## Aktueller Stand

Das HTML mit einfacher Bildgrößenbegrenzung enthält den Einstieg, eine kurze Vorstellung sowie drei Reiseberichte auf Grundlage der persönlichen Angaben von Uliana. Jeder Bericht enthält den Reisezeitraum, eine Bewertung und Listen mit positiven und negativen Eindrücken. Die Navigation und Reiseübersicht verlinken alle drei Ziele. Alle acht vorhandenen Fotos und der Kontaktlink zu Instagram sind eingebunden. Die drei geplanten Arbeitsschritte sind umgesetzt; der Webauftritt umfasst drei Reiseziele. Die responsiven Layouts, das mobile Menü und der interaktive Bildwechsel im Einstieg sind bisher nur geplant.

Die nächsten Arbeitsschritte sind:

1. Die überarbeitete Konzeptbeschreibung durchsehen, committen und pushen.
2. In den Skizzen den Reisezeitraum von Innsbruck korrigieren und die vereinfachten Bild- und Kontaktbereiche dokumentieren.
3. Das Konzept mit den aktualisierten Skizzen und den endgültigen Festlegungen als PDF für PebblePad zusammenstellen. Das PDF ist noch nicht Teil dieses Projektstands.

## Lokal ansehen

Die Datei `index.html` direkt im Browser öffnen. Für das Grundgerüst sind keine Installation und kein Build erforderlich. Abgesehen von der einfachen Bildgrößenbegrenzung gibt es noch keine CSS-Gestaltung. Der Browser zeigt die Abschnitte untereinander und alle Navigationslinks offen an.

## Versionskontrolle

Die Arbeit wird schrittweise mit Git gespeichert. Jeder Commit soll einen tatsächlich abgeschlossenen Arbeitsschritt dokumentieren. Die Dateien werden anschließend in das zugehörige GitHub-Classroom-Repository gepusht.
