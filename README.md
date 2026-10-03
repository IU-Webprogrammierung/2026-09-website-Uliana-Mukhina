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

Die Website soll von **360 bis 1920 Pixel Bildschirmbreite** ohne horizontales Scrollen nutzbar sein. Die folgenden Breakpoints bilden den vorläufigen Plan für die spätere CSS-Umsetzung. Die Tabletansicht ergänzt die vorhandenen Mobil- und Desktopskizzen.

| Bereich | Breite | Anordnung |
| --- | --- | --- |
| Mobil | 360–767 px | Eine Hauptspalte. Im Einstieg folgen Überschrift, Galerie und „Entdecken“ aufeinander. Im Abschnitt „Wir“ stehen Überschrift, Text und Foto untereinander, damit auch bei 360 px genügend Platz bleibt. Reiseberichte erscheinen nacheinander; die vier Fotos von Da Nang bilden zwei Spalten. Die Navigation wird später über einen Menübutton aufgeklappt. |
| Tablet | 768–1023 px | Einstieg und Reiseberichte bleiben einspaltig. Im Abschnitt „Wir“ können Text und Foto nebeneinander stehen. Die Da-Nang-Galerie bleibt zweispaltig. Die Navigation bleibt aufklappbar. |
| Desktop | 1024–1920 px | Die Navigation ist vollständig sichtbar. Im Einstieg stehen Überschrift und „Entdecken“ links, die Galerie rechts. Vorstellungstext und Foto stehen nebeneinander. Bei Innsbruck steht die Galerie links und der Bericht mit Bewertung rechts, bei Seoul der Bericht links und die Galerie mit Bewertung rechts. Bei Da Nang stehen Bericht und Bewertung mit positiven und negativen Eindrücken nebeneinander; darunter stehen vier Fotos in einer Reihe. |

Für Innsbruck und Seoul wird zunächst jeweils ein Foto statt einer bedienbaren Galerie verwendet.

Für große Bildschirme ist eine zentrierte Inhaltsbreite von maximal 1200 px geplant. Bilder passen sich ihrem verfügbaren Platz an und behalten ihre Proportionen. Texte und wesentliche Informationen bleiben auf allen Geräten zugänglich. Der Kontaktbereich enthält den Kontakttext, den Instagram-Link und ein gemeinsames Strandfoto. Auf Mobilgeräten und Tablets steht das Foto unter dem Text und dem Link. Ab 1024 px stehen Text und Link links und das Foto rechts nebeneinander, entsprechend der ursprünglichen Desktopskizze.

## Geplante Bedienung und Barrierefreiheit

- Die Navigationslinks und „Entdecken“ führen zu Abschnitten auf derselben Seite.
- Die spätere mobile Navigation erhält einen beschrifteten Button, der den geöffneten Zustand mitteilt. Ohne JavaScript sollen die Links weiterhin erreichbar sein.
- Die spätere Einstiegsgalerie wird manuell mit beschrifteten Vor- und Zurück-Buttons bedient. Nach dem letzten Bild folgt wieder das erste; rückwärts entsprechend das letzte. Ein automatischer Bildwechsel ist nicht geplant.
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

1. Die aktuellen Änderungen durchsehen, committen und pushen.
2. In den Skizzen den Reisezeitraum von Innsbruck korrigieren und die vereinfachten Bild- und Kontaktbereiche dokumentieren.
3. Das Konzept mit den aktualisierten Skizzen und den endgültigen Festlegungen als PDF für PebblePad zusammenstellen. Das PDF ist noch nicht Teil dieses Projektstands.

## Lokal ansehen

Die Datei `index.html` direkt im Browser öffnen. Für das Grundgerüst sind keine Installation und kein Build erforderlich. Abgesehen von der einfachen Bildgrößenbegrenzung gibt es noch keine CSS-Gestaltung. Der Browser zeigt die Abschnitte untereinander und alle Navigationslinks offen an.

## Versionskontrolle

Die Arbeit wird schrittweise mit Git gespeichert. Jeder Commit soll einen tatsächlich abgeschlossenen Arbeitsschritt dokumentieren. Die Dateien werden anschließend in das zugehörige GitHub-Classroom-Repository gepusht.
