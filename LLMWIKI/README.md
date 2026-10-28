---
id: "README"
title: "LLMWIKI — ingresso"
kind: "index"
status: "prepared"
version: "0.0.2"
updated: "2026-10-28"
---

# LLMWIKI — ingresso

Base documentale dell'ecosistema di Davide. Versione 0.0.2: preparata, non ancora collegata ai bot.

Inizia da [[SCHEMA]], poi [[index]] e [[wiki/project/context]]. Le letture comuni e quelle per ruolo sono in `manifest.json`.

La cartella contiene documenti Markdown collegati, metadati JSON, snapshot sanitizzati e uno storico. Può essere portata in GitHub o su un server; nessun archivio della memoria è stato selezionato.

La pubblicazione della cartella non concede da sola accesso agli agenti: seguire [[wiki/project/access-options]]. La versione storica è [[wiki/releases/v0.0.1]], la nuova è [[wiki/releases/v0.0.2]].


## Utilizzo e storico
Il manutentore con accesso ai file segue SCHEMA e le operazioni dell'indice. Il pacchetto include un bundle con lo storico Git, ripristinabile in una directory separata:

```bash
git clone /percorso/LLMWIKI-history.bundle LLMWIKI
```

Il bundle ripristina lo storico della release. Rapporti di consegna e bundle stesso sono materiale di confezionamento esterno allo storico. Nessun repository GitHub remoto è stato creato o aggiornato e i bot n8n non hanno ancora accesso ai file.
