# Unser Reiserückblick 2026

Ein persönlicher Webauftritt von Uliana Mukhina für das IU-Modul **Projekt: Web-Programmierung (DLBUXPWP01)**.

## Projektidee und Ziel

Die Website stellt Uliana, Alexander und Franny sowie ihre Reisen im Jahr 2026 vor. Geplant sind persönliche Berichte über Innsbruck, Seoul und Da Nang mit eigenen Fotos, Bewertungen und Eindrücken. Der Webauftritt richtet sich an Menschen, die unsere Reiseerlebnisse kennenlernen und Anregungen für eigene Reisen erhalten möchten.

Die Website ist als eine zusammenhängende Seite geplant. Über die Navigation können Besucher direkt zu den einzelnen Abschnitten springen. Grundlage sind die handgezeichneten Skizzen für die Desktop- und Mobilansicht.

## Geplante Inhalte und Anordnung

| Abschnitt | Inhalte | Navigationsziel |
| --- | --- | --- |
| Kopfbereich | Schriftzug „Reisen“ als Link zum Seitenanfang und Navigation | `#start` |
| Einstieg | Überschrift „Unser Reiserückblick 2026“, Bildergalerie und Link „Entdecken“ zur Reiseübersicht | `#start` |
| Wir | Vorstellung von Uliana, Alexander und Franny sowie ein gemeinsames Foto | `#wir` |
| Reiseziele | Kurze Übersicht mit Links zu den drei Reiseberichten | `#reiseziele` |
| Innsbruck | Januar 2026, Erfahrungsbericht, eigene Bewertung, „Gefallen“, „Nicht gefallen“ und Bildergalerie | `#innsbruck` |
| Seoul | März 2026, Erfahrungsbericht, eigene Bewertung, „Gefallen“, „Nicht gefallen“ und Bildergalerie | `#seoul` |
| Da Nang | März 2026, Erfahrungsbericht, eigene Bewertung, „Gefallen“, „Nicht gefallen“ und vier Fotos | `#da-nang` |
| Kontakt | Kontakttext und Kontaktmöglichkeit; genaue Inhalte und Bedeutung des Bildplatzhalters werden noch festgelegt | `#kontakt` |
| Fußbereich | Urheberangabe und Link zurück zum Seitenanfang | `#start` |

Die Reiseübersicht konkretisiert das Navigationsziel „Reiseziele“ aus den Skizzen. Die Sterne sind zunächst als unsere eigenen, festen Bewertungen geplant. Eine Bewertungsfunktion für Besucher ist nicht vorgesehen.

## Geplantes responsives Verhalten

Die Website soll von **360 bis 1920 Pixel Bildschirmbreite** ohne horizontales Scrollen nutzbar sein. Die folgenden Breakpoints bilden den vorläufigen Plan für die spätere CSS-Umsetzung. Die Tabletansicht ergänzt die vorhandenen Mobil- und Desktopskizzen.

| Bereich | Breite | Anordnung |
| --- | --- | --- |
| Mobil | 360–767 px | Eine Hauptspalte. Im Einstieg folgen Überschrift, Galerie und „Entdecken“ aufeinander. Im Abschnitt „Wir“ stehen Überschrift, Text und Foto untereinander, damit auch bei 360 px genügend Platz bleibt. Reiseberichte erscheinen nacheinander; die vier Fotos von Da Nang bilden zwei Spalten. Die Navigation wird später über einen Menübutton aufgeklappt. |
| Tablet | 768–1023 px | Einstieg und Reiseberichte bleiben einspaltig. Im Abschnitt „Wir“ können Text und Foto nebeneinander stehen. Die Da-Nang-Galerie bleibt zweispaltig. Die Navigation bleibt aufklappbar. |
| Desktop | 1024–1920 px | Die Navigation ist vollständig sichtbar. Im Einstieg stehen Überschrift und „Entdecken“ links, die Galerie rechts. Vorstellungstext und Foto stehen nebeneinander. Bei Innsbruck steht die Galerie links und der Bericht mit Bewertung rechts, bei Seoul der Bericht links und die Galerie mit Bewertung rechts. Bei Da Nang stehen Bericht und Bewertung mit positiven und negativen Eindrücken nebeneinander; darunter stehen vier Fotos in einer Reihe. |

Für große Bildschirme ist eine zentrierte Inhaltsbreite von maximal 1200 px geplant. Bilder passen sich ihrem verfügbaren Platz an und behalten ihre Proportionen. Texte und wesentliche Informationen bleiben auf allen Geräten zugänglich. Der Kontaktbereich bleibt vorerst einspaltig, bis seine Inhalte geklärt sind.

## Geplante Bedienung und Barrierefreiheit

- Die Navigationslinks und „Entdecken“ führen zu Abschnitten auf derselben Seite.
- Die spätere mobile Navigation erhält einen beschrifteten Button, der den geöffneten Zustand mitteilt. Ohne JavaScript sollen die Links weiterhin erreichbar sein.
- Die späteren Bildergalerien werden manuell mit beschrifteten Vor- und Zurück-Buttons bedient. Nach dem letzten Bild folgt wieder das erste; rückwärts entsprechend das letzte. Ein automatischer Bildwechsel ist nicht geplant.
- Bis zur Umsetzung der Galerien werden die Fotos als normale Bilder im Dokument eingebunden.
- Bewertungen werden zusätzlich als Text angegeben, beispielsweise „4 von 5 Sternen“.
- Das HTML verwendet passende Bereiche wie `header`, `nav`, `main`, `section`, `article` und `footer` sowie eine nachvollziehbare Überschriftenhierarchie.
- Ein Sprunglink führt direkt zum Hauptinhalt. Die Seitensprache ist Deutsch.
- Eigene Fotos erhalten passende Alternativtexte. Bei der späteren Gestaltung werden lesbare Kontraste, sichtbare Tastaturfokusse und ausreichend große Bedienelemente berücksichtigt.
- Die Aufgabenstellung nennt WCAG 2.1 oder neuer als Orientierung. Die Barrierefreiheit wird während der Umsetzung geprüft; das Grundgerüst stellt noch keine vollständige Erfüllung dar.

## Projektstruktur

```text
2026-09-website-Uliana-Mukhina/
├── .gitignore
├── README.md
└── index.html
```

Eigene Bilder werden im weiteren Verlauf unter `assets/images/` ergänzt. CSS und JavaScript kommen bei der Umsetzung von Gestaltung und Interaktionen hinzu.

## Aktueller Stand: erster Arbeitsschritt

Vorhanden sind das Konzept in dieser README und ein ungestyltes HTML-Grundgerüst mit Navigation und den geplanten Abschnitten. Kommentare im HTML markieren noch fehlende Inhalte. Die responsiven Layouts, das mobile Menü und die Bildergalerien sind bisher nur geplant.

Die nächsten Arbeitsschritte sind:

1. Vorstellung und tatsächliche Reiseberichte einschließlich Bewertungen ergänzen.
2. Eigene Bilder und Kontaktinformationen hinzufügen sowie Navigation und HTML überprüfen.
3. Das Konzept mit den Skizzen und den endgültigen Festlegungen als PDF für PebblePad zusammenstellen.

## Lokal ansehen

Die Datei `index.html` direkt im Browser öffnen. Für das Grundgerüst sind keine Installation und kein Build erforderlich. Ohne CSS zeigt der Browser alle Abschnitte untereinander und alle Navigationslinks offen an.

## Versionskontrolle

Die Arbeit wird schrittweise mit Git gespeichert. Jeder Commit soll einen tatsächlich abgeschlossenen Arbeitsschritt dokumentieren. Die Dateien werden anschließend in das zugehörige GitHub-Classroom-Repository gepusht.
