# Unser Reiserückblick 2026

Persönliche Reisewebsite von Uliana Mukhina mit Erinnerungen an Innsbruck (Januar 2026), Seoul und Da Nang (März 2026). Die Seite stellt außerdem Uliana, Alexander und ihren Hund Franny vor und verlinkt das Instagram-Profil `hey.uliana`.

## Lokal öffnen

`index.html` im Browser öffnen. Es sind keine Installation, kein Build und kein Server erforderlich. HTML, CSS, JavaScript und alle Fotos liegen im Repository. Es werden keine externen Schriftarten, CSS-Frameworks oder JavaScript-Bibliotheken geladen.

## Projektstruktur

```text
├── index.html                   # Inhalte und semantische Seitenstruktur
├── README.md
├── assets/
│   ├── css/
│   │   ├── styles.css           # Gestaltung und responsive Seitenlayouts
│   │   └── slideshow.css        # Bildbereiche und Bedienelemente
│   ├── js/
│   │   ├── navigation.js       # Aufklappbares Menü
│   │   └── slideshow.js        # Drei unabhängige Slideshows
│   └── images/                 # 32 eigene Fotos
└── docs/
    ├── konzept-phase-2.html     # Bearbeitbare Quelle des Konzepts
    └── reflexion.md            # Textvorschlag mit weniger als 200 Wörtern
```

## Responsives Design

Die Website ist für 360 bis 1920 Pixel Breite ausgelegt. Der Inhalt ist auf großen Bildschirmen maximal 1200 Pixel breit und zentriert. Flexible Spalten, seitliche Abstände und anpassbare Bilder halten die Inhalte lesbar.

| Breite des Browserfensters | Anordnung |
| --- | --- |
| 360–767 px | Inhalte untereinander; aufklappbare Navigation; Da Nang mit zwei Bildspalten. |
| 768–1023 px | Im Bereich „Wir“ Text und Foto nebeneinander; übrige Bereiche wie mobil; aufklappbare Navigation. |
| Ab 1024 px | Navigation vollständig sichtbar; Einstieg, Vorstellung, Reiseberichte und Kontakt mit zwei Spalten; Reiseziellinks nebeneinander; Da Nang mit vier Bildspalten. |

**CSS Grid** ordnet die Inhaltsbereiche und das Bilderraster an. **Flexbox** richtet Navigation und Slideshow-Bedienelemente aus. **Media Queries** bei 768 und 1024 Pixeln wechseln die Anordnung. Sämtliche CSS-Regeln sind selbst geschrieben; Bootstrap, Tailwind und andere CSS-Frameworks kommen nicht zum Einsatz.

## Bilder und Bedienung

- Rückblick: sieben Fotos; Innsbruck: zehn; Seoul: neun. Jeder dieser Bereiche besitzt eine eigene manuelle Slideshow mit Vor-/Zurück-Buttons und Bildzähler. Nach dem letzten Foto folgt wieder das erste. Es gibt keinen automatischen Bildwechsel.
- Hoch- und Querformatfotos bleiben vollständig sichtbar. Da Nang zeigt vier statische Fotos; „Wir“ und „Kontakt“ jeweils ein Einzelbild.
- Die Buttons lassen sich mit Tab erreichen sowie mit Enter oder Leertaste bedienen. Innerhalb der Slideshow-Bedienung wechseln auch die Pfeiltasten das Bild.
- Das mobile Menü meldet seinen Zustand mit `aria-expanded`. Escape schließt es und setzt den Fokus auf den Menübutton zurück. Nach der Auswahl eines Navigationslinks schließt das Menü und der Zielabschnitt erhält den Fokus.
- Ohne JavaScript bleiben Navigationslinks und Fotos sichtbar. Die dann funktionslosen Slideshow-Buttons sind ausgeblendet.
- Semantische HTML-Bereiche, eine Überschriftenhierarchie, Alternativtexte, sichtbare Fokusmarkierungen und ein Sprunglink unterstützen die Bedienbarkeit. Das ist keine Zusicherung einer vollständigen WCAG-Konformität.

## Prüfung

In Chrome geprüft: Layouts bei 360, 767, 768, 1023, 1024, 1280 und 1920 Pixeln, Menüwechsel beim Vergrößern und Verkleinern des Fensters sowie Tastaturbedienung mit Tab, Enter, Leertaste, Escape und Pfeiltasten. Alle 32 Fotos laden. Die drei Slideshows arbeiten unabhängig und springen an ihren Enden zum jeweils anderen Ende. Auch bei 200 % Schriftgröße entsteht bei den geprüften Breiten 360, 768, 1024 und 1920 Pixeln kein horizontaler Überlauf. Ohne JavaScript bleiben Navigation und Fotos sichtbar. Die Einstellung für reduzierte Bewegung wird berücksichtigt.

Die Originalfotos sind noch nicht für schnelle Downloads verkleinert (insgesamt etwa 153 MiB). Bilder außerhalb des Einstiegs werden verzögert geladen. Für die spätere Veröffentlichung ist die Bildoptimierung noch ein sinnvoller Arbeitsschritt.

## Phase 2 und Abgabe

Das Konzept wurde um die konkrete CSS-Gestaltung, die verbindlichen Anordnungen für Handy, Tablet und Desktop sowie die Menü- und Slideshow-Bedienung verfeinert. Die ursprünglichen Handskizzen bleiben bestehen. Die ergänzenden Festlegungen stehen in [docs/konzept-phase-2.html](docs/konzept-phase-2.html). Die fertige Konzept-PDF für die Abgabe liegt außerhalb dieses Repositorys vor.

Für die Abgabe:

1. Die Website im Browser ansehen und die Änderungen mit Git committen und ins Classroom-Repository pushen.
2. Den Reflexionstext in [docs/reflexion.md](docs/reflexion.md) prüfen und bei Bedarf an die eigenen Erfahrungen anpassen.
3. Die in der Aufgabenstellung vorgesehene Abstimmung zum Werkzeugeinsatz mit der Tutorin oder dem Tutor sowie das Feedback im Creative Lab durchführen, soweit noch nicht geschehen. Eingeholtes Feedback ist hier nicht als bereits erfolgt dokumentiert.
4. Die bereits vorhandene Konzept-PDF auf PebblePad hochladen und den Reflexionstext in das dortige Textfeld übernehmen (maximal 200 Wörter).

Das HTML-Konzept kann zum Überarbeiten im Editor geöffnet und anschließend über den Browser erneut als PDF gedruckt werden (A4, Hintergrundgrafiken an, Kopf- und Fußzeilen aus).
