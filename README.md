# Studio Vis – lokale Website

Die Website wird über einen lokalen Webserver oder die veröffentlichte Domain geöffnet. Die Hauptadresse `/` führt direkt zur Studio-Vis-Startseite unter `/studio/`. Dort führen die Kontaktbuttons zum Formular unter `/studio/#kontakt`. Alte Adressen wie `/ueber-uns/` und `/studio/contact/` leiten zu den neuen Zielen weiter.

Die neuen Einstiegsseiten (`/auswahl/`, `/website/` und weitere) bleiben für eine spätere Verwendung im Projekt, sind aber vorerst nicht Teil des Besuchsflusses.

Das Quiz unter `quiz/` bleibt für eine spätere Verwendung im Projekt, ist aber nicht mehr Teil des Navigationsflusses.

Die Diagnose-Tests laufen mit `npm test`.

Alternativ im Ordner `Website` starten:

```sh
python3 -m http.server 8080
```

Danach `http://localhost:8080/` aufrufen.
