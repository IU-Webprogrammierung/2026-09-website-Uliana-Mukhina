# Unser Reiserückblick 2026

## Projektidee und Ziel

Die Website stellt Uliana, Alexander und ihren Hund Franny sowie Reiseerinnerungen aus dem Jahr 2026 vor. Persönliche Berichte über Innsbruck, Seoul und Da Nang beschreiben Erlebnisse, Bewertungen und Eindrücke. 32 eigene Fotos ergänzen den Einstieg, die Vorstellung, die Reiseberichte und den Kontaktbereich. Der Webauftritt richtet sich an Menschen, die unsere Reiseerlebnisse kennenlernen und Anregungen für eigene Reisen erhalten möchten.

Die Website ist als eine zusammenhängende Seite geplant. Über die Navigation können Besucher direkt zu den einzelnen Abschnitten springen. Grundlage sind die handgezeichneten Skizzen für die Desktop- und Mobilansicht.

## Geplante Inhalte und Anordnung

| Abschnitt | Inhalte | Navigationsziel |
| --- | --- | --- |
| Kopfbereich | Schriftzug „Reisen“ als Link zum Seitenanfang und Navigation | `#start` |
| Einstieg | Überschrift „Unser Reiserückblick 2026“, Slideshow mit sieben Fotos und Link „Entdecken“ zur Reiseübersicht | `#start` |
| Wir | Vorstellung von Uliana, Alexander und Franny sowie ein gemeinsames Foto | `#wir` |
| Reiseziele | Kurze Übersicht mit Links zu den drei Reiseberichten | `#reiseziele` |
| Innsbruck | Januar 2026, Erfahrungsbericht, eigene Bewertung, „Gefallen“, „Nicht gefallen“ und eine Slideshow | `#innsbruck` |
| Seoul | März 2026, Erfahrungsbericht, eigene Bewertung, „Gefallen“, „Nicht gefallen“ und eine Slideshow | `#seoul` |
| Da Nang | März 2026, Erfahrungsbericht, eigene Bewertung, „Gefallen“, „Nicht gefallen“ und vier Fotos | `#da-nang` |
| Kontakt | Kontakttext und externer Link zum Instagram-Profil `hey.uliana`; gemeinsames Strandfoto; kein Formular | `#kontakt` |
| Fußbereich | Urheberangabe und Link zurück zum Seitenanfang | `#start` |

Die Reiseübersicht konkretisiert das Navigationsziel „Reiseziele“ aus den Skizzen. Die Bewertungen sind unsere eigenen, festen Einschätzungen auf einer Skala bis 5. Sie werden als eindeutige Zahlen ausgeschrieben, damit auch halbe Punkte verständlich sind. Eine spätere Darstellung mit Flugzeugsymbolen kann die Textangabe ergänzen. Eine Bewertungsfunktion für Besucher ist nicht vorgesehen.

Alle Reisen sind dem Jahr 2026 zugeordnet. Innsbrucks Reisezeitraum ist Januar 2026; die Skizzen müssen für die PDF-Abgabe entsprechend beschriftet werden.

## Geplantes responsives Verhalten

Das Konzept legt die Darstellung für **360 bis 1920 Pixel Bildschirmbreite** fest. Die Inhalte passen sich ohne horizontales Scrollen an die verfügbare Breite an. Es gelten zwei Breakpoints: **768 px** und **1024 px**, jeweils bezogen auf die Breite des Browserfensters. Die Grundanordnung gilt unter 768 px; ab 768 px gilt die Tabletanordnung und ab 1024 px die Desktopanordnung. Die Tabletansicht ergänzt die vorhandenen Mobil- und Desktopskizzen.

Die folgenden Regeln beschreiben das verbindliche Ziel für die spätere CSS-Umsetzung. Die vollständigen Seitenlayouts und das mobile Menü sind noch nicht umgesetzt. Bereits umgesetzt sind die größenangepassten Bildbereiche, die drei Slideshows und das responsive Bilderraster von Da Nang.

| Bereich | Breite | Anordnung |
| --- | --- | --- |
| Mobil | 360–767 px | Eine Hauptspalte. Im Einstieg folgen Überschrift, Einleitungstext, Slideshow und „Entdecken“ aufeinander. Im Abschnitt „Wir“ stehen Überschrift, Text und Foto untereinander. Die Reiseübersicht zeigt die drei Links untereinander. Reiseberichte erscheinen nacheinander: jeweils Überschrift, Reisezeitraum, Bewertung, Bericht, positive und negative Eindrücke sowie Slideshow beziehungsweise Bildergruppe. Die vier Fotos von Da Nang bilden zwei Spalten und zwei Reihen. Im Kontaktbereich folgen Überschrift, Text, Instagram-Link und Foto aufeinander. Die Navigation wird über einen Menübutton aufgeklappt. |
| Tablet | 768–1023 px | Einstieg, Reiseübersicht, Reiseberichte und Kontaktbereich behalten die mobile Reihenfolge. Im Abschnitt „Wir“ steht die Überschrift über zwei Spalten: Text links, Foto rechts. Die vier Fotos von Da Nang bleiben in zwei Spalten und zwei Reihen angeordnet. Die Navigation bleibt über den Menübutton aufklappbar. |
| Desktop | 1024–1920 px | Die Navigation ist vollständig sichtbar, der Menübutton ausgeblendet. Im Einstieg stehen Überschrift, Einleitungstext und „Entdecken“ links, die Slideshow rechts. Im Abschnitt „Wir“ stehen unter der Überschrift der Text links und das Foto rechts. Die drei Links der Reiseübersicht stehen nebeneinander. Jeder Reisebericht beginnt mit Überschrift und Reisezeitraum über dem jeweiligen Inhalt. Bei Innsbruck steht die Slideshow links; Bewertung, Bericht sowie positive und negative Eindrücke stehen rechts. Bei Seoul steht der Bericht mit positiven und negativen Eindrücken links; rechts stehen die Bewertung und darunter die Slideshow. Bei Da Nang steht der Bericht links und die Bewertung mit positiven und negativen Eindrücken rechts; darunter stehen vier Fotos in einer Reihe. Im Kontaktbereich stehen Überschrift, Text und Instagram-Link links und das Foto rechts. |

Der Einstieg, Innsbruck und Seoul enthalten jeweils eine eigene, unabhängig bedienbare Slideshow. Die vier Fotos von Da Nang bilden eine statische Bildergruppe ohne Bildwechsel. Die Bereiche „Wir“ und „Kontakt“ enthalten jeweils genau ein Foto ohne Slideshow.

Der Inhaltsbereich ist zentriert und maximal **1200 px** breit. Auf kleineren Bildschirmen schrumpft er mit dem verfügbaren Platz; seitliche Innenabstände verhindern, dass Inhalte am Fensterrand anliegen. Bilder passen sich ihrer Spalte an und behalten ihre Proportionen. Texte umbrechen innerhalb ihrer Spalte. Alle Texte, Reisebewertungen und Fotos bleiben auf jeder Bildschirmgröße zugänglich. Ausgeblendet werden nur das geschlossene Navigationsmenü unter 1024 px, der Menübutton ab 1024 px und die gerade nicht angezeigten Bilder der drei Slideshows. Die ausgeblendeten Galeriebilder bleiben über die Vor- und Zurück-Buttons erreichbar. Der Footer steht auf allen Geräten unter dem Kontaktbereich.

## Geplante Bedienung und Barrierefreiheit

- Die Navigationslinks und „Entdecken“ führen zu Abschnitten auf derselben Seite.
- Unter 1024 px öffnet und schließt ein beschrifteter Menübutton die Navigation. Das geöffnete Menü zeigt alle Links untereinander unter dem Kopfbereich. Der Button teilt den geöffneten Zustand über `aria-expanded` mit und verweist über `aria-controls` auf das Menü. Nach Auswahl eines Links wird das Menü geschlossen und der zugehörige Abschnitt angesprungen. Ohne JavaScript bleiben alle Links sichtbar und erreichbar.
- Jede Slideshow zeigt jeweils ein Bild und wird unabhängig über beschriftete Vor- und Zurück-Buttons bedient, die auch per Tastatur erreichbar sind. Die Bedienung wechselt ausschließlich die Fotos des jeweiligen Bereichs. Nach dem letzten Bild folgt wieder das erste; rückwärts entsprechend das letzte. Ein Text wie „Bild 1 von 7“ zeigt die aktuelle Position an. Es gibt keinen automatischen Bildwechsel. Ohne JavaScript bleiben alle Fotos im Dokument sichtbar.
- Der Einstieg enthält sieben ausgewählte Rückblickfotos, Innsbruck zehn Fotos und Seoul neun Fotos. Die Reihenfolge entspricht der Reihenfolge im HTML. Die vier Fotos von Da Nang bleiben statisch; „Wir“ und „Kontakt“ enthalten jeweils ein Einzelbild.
- Die drei Slideshows sind mit JavaScript umgesetzt. Vor- und Zurück-Buttons sind per Tab erreichbar und mit Enter oder Leertaste bedienbar. Bei fokussierter Slideshow-Bedienung wechseln zusätzlich die linke und rechte Pfeiltaste das Bild. Der Bildzähler meldet Änderungen über eine Live-Region. Hoch- und Querformatbilder bleiben vollständig sichtbar. Ohne JavaScript sind alle Fotos sichtbar und die Bedienelemente ausgeblendet.
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
│   ├── css/
│   │   └── slideshow.css
│   ├── js/
│   │   └── slideshow.js
│   └── images/                 # 32 eigene Fotos
└── index.html
```

Eigene Bilder liegen unter `assets/images/`. Alle 32 Fotos sind mit beschreibenden Alternativtexten eingebunden: sieben Rückblickfotos, zehn Fotos aus Innsbruck, neun aus Seoul, vier aus Da Nang sowie je ein Foto für „Wir“ und „Kontakt“. Das CSS begrenzt die Bildbreite und gestaltet die Slideshow-Bedienung. Das JavaScript steuert die drei Slideshows unabhängig voneinander.

## Aktueller Stand

Das HTML enthält den Einstieg, eine kurze Vorstellung sowie drei Reiseberichte auf Grundlage der persönlichen Angaben von Uliana. Jeder Bericht enthält den Reisezeitraum, eine Bewertung und Listen mit positiven und negativen Eindrücken. Die Navigation und Reiseübersicht verlinken alle drei Ziele. Alle 32 Fotos und der Kontaktlink zu Instagram sind eingebunden. Die Slideshows funktionieren mit manuellen Bildwechseln und Bildzählern. Die vier Fotos von Da Nang stehen unter 1024 px in zwei Spalten und ab 1024 px in vier Spalten. Das vollständige responsive Seitenlayout und das mobile Menü sind im Konzept festgelegt und werden später umgesetzt.

Die nächsten Arbeitsschritte sind:

1. Fotos, Bildwechsel und die überarbeitete Konzeptbeschreibung durchsehen, committen und pushen.
2. Die Skizzen mit dem Konzept abgleichen: Innsbruck auf Januar 2026 beschriften, den Instagram-Link im Kontaktbereich ergänzen und die Bildanzahlen vermerken. Die Slideshow-Pfeile für den Einstieg, Innsbruck und Seoul bleiben bestehen; bei „Wir“ und „Kontakt“ bleibt jeweils ein Einzelbild.
3. Das Konzept mit den aktualisierten Skizzen und den endgültigen Festlegungen als PDF für PebblePad zusammenstellen. Das PDF ist noch nicht Teil dieses Projektstands.
4. Vor der Abgabe die Feedbackmöglichkeiten im Creative Lab nutzen und anschließend das Konzept-PDF auf PebblePad hochladen.

## Lokal ansehen

Die Datei `index.html` direkt im Browser öffnen. Es sind keine Installation und kein Build erforderlich. CSS gestaltet die Bildbereiche und die Slideshow-Bedienung; JavaScript ermöglicht den manuellen Bildwechsel. Die übrigen Abschnitte stehen zunächst untereinander und alle Navigationslinks bleiben offen sichtbar.

## Versionskontrolle

Die Arbeit wird schrittweise mit Git gespeichert. Jeder Commit soll einen tatsächlich abgeschlossenen Arbeitsschritt dokumentieren. Die Dateien werden anschließend in das zugehörige GitHub-Classroom-Repository gepusht.
