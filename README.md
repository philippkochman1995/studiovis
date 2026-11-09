# Studio Vis – lokale Website

Die Website kann direkt über `index.html` im Browser geöffnet werden. „Weiter“ führt zur Auswahlfrage. „Ich will eine Website“ öffnet direkt die Website-Seite; die zweite Auswahl führt zur Google-Rezension. Von der Website-Seite geht es zur Über-uns-Seite. Deren „Weiter“-Button führt zur lokalen Studio-Vis-Seite. Die Projektbelege auf der Website-Seite öffnen mit der lokal eingebundenen GLightbox-Bibliothek.

Das Quiz unter `quiz/` bleibt für eine spätere Verwendung im Projekt, ist aber nicht mehr Teil des Navigationsflusses.

Die Diagnose-Tests laufen mit `npm test`.

Alternativ im Ordner `Website` starten:

```sh
python3 -m http.server 8080
```

Danach `http://localhost:8080/` aufrufen.
