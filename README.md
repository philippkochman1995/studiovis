# Studio Vis – lokale Website

Die Website wird über einen lokalen Webserver oder die veröffentlichte Domain geöffnet. Die Navigation nutzt kurze Verzeichnisadressen wie `/website/` und `/studio/`. „Weiter“ führt zur Auswahlfrage. „Ich will eine Website“ öffnet die Website-Seite; die zweite Auswahl führt zur Google-Rezension. Von der Website-Seite geht es direkt zur Studio-Vis-Startseite. Dort führen die Kontaktbuttons zum Formular unter `/studio/#kontakt`. Alte Adressen wie `/ueber-uns/` und `/studio/contact/` leiten zu den neuen Zielen weiter. Die Projektbelege auf der Website-Seite öffnen mit der lokal eingebundenen GLightbox-Bibliothek.

Das Quiz unter `quiz/` bleibt für eine spätere Verwendung im Projekt, ist aber nicht mehr Teil des Navigationsflusses.

Die Diagnose-Tests laufen mit `npm test`.

Alternativ im Ordner `Website` starten:

```sh
python3 -m http.server 8080
```

Danach `http://localhost:8080/` aufrufen.
