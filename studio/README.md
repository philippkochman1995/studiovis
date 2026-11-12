# Squarespace-Kopie

Lokale Kopie von https://broccoli-tuba-pmpf.squarespace.com/ mit Startseite, Referenzen, Über uns, Datenschutz und Impressum. Das Kontaktformular liegt auf `/studio/#kontakt`; die frühere Adresse `/studio/contact/` leitet dorthin weiter.

HTML, originale responsive Layoutregeln, 112 CSS-/Bild-/Schriftdateien sind lokal enthalten. `asset-manifest.json` ordnet die Dateien ihren Originalquellen zu. Die vorhandene Website und ihr Quiz bleiben bestehen.

Die Squarespace-JavaScript-Laufzeit, Adobe-Schriften und externe Widgets werden weiterhin von den Originaldiensten geladen. Die Kopie ist daher kein vollständig von Squarespace unabhängiger Export. `local.js` lädt auf allen Studio-Seiten dasselbe Mouseflow-Projekt wie die Hauptseite. Die drei Kontaktformulare auf Startseite, Kontaktseite und Referenzen verwenden Formspree (`https://formspree.io/f/xeaabobk`) und senden an `start@studiovis.at`. Bei erfolgreichem JavaScript-Versand erscheint die Bestätigung direkt unter dem Formular. Der tatsächliche Versand wurde nicht ausgelöst; die Zustellung ist nach Veröffentlichung noch zu prüfen.

Prüfung: Einstieg im Browser angeklickt; Startseite nach dem Laden der Schriften visuell mit dem Original verglichen; Über-uns-Navigation geöffnet; mobile Ansichten und Formularausrichtung geprüft; sämtliche lokalen HTML- und CSS-Dateiverweise geprüft. Kein vollständiger Pixelvergleich aller Unterseiten und Bildschirmgrößen.

Vorschau im Projekt-Hauptordner starten:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Dann http://127.0.0.1:8080/auswahl/ öffnen.
