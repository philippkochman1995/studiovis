# Studio Vis – lokale Website

Die Website wird über einen lokalen Webserver oder die veröffentlichte Domain geöffnet. Die Hauptadresse `/` zeigt direkt die Studio-Vis-Startseite. Dort führen die Kontaktbuttons zum Formular unter `/#kontakt`. Alte Adressen wie `/studio/`, `/ueber-uns/` und `/studio/contact/` leiten zu den passenden Zielen weiter.

Die neuen Einstiegsseiten (`auswahl`, `website`, `ideen`, `gespraech`) und das Quiz liegen für später unter `_drafts/` und werden nicht veröffentlicht. Auch die frühere Startseite liegt dort als `index.html`.

Das Quiz unter `_drafts/quiz/` bleibt für eine spätere Verwendung im Projekt, ist aber nicht mehr Teil des Navigationsflusses.

Die Diagnose-Tests laufen mit `npm test`.

Alternativ im Ordner `Website` starten:

```sh
python3 -m http.server 8080
```

Danach `http://localhost:8080/` aufrufen.
