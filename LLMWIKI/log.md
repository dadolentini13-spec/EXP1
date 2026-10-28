---
id: "log"
title: "Cronologia"
kind: "log"
status: "prepared"
version: "0.0.2"
updated: "2026-10-28"
---

# Cronologia

## 2026-10-28 | prepare | v0.0.2
Creata base documentale LLMWIKI dopo richiesta di Davide. Fonte originale consultata. Riletti i due workflow e la scheda v0.0.1, senza modificarli. Predisposte regole comuni e contesto separato, con decisione memoria rinviata. Collegamento degli agenti ancora da realizzare.

Relazioni: [[wiki/decisions/v002-scope]], [[wiki/releases/v0.0.2]], [[wiki/releases/v0.0.1]].


## 2026-10-28 | ingest | Metodo originale LLM Wiki
Acquisita la scelta di Davide in raw/user. Integrate le procedure [[wiki/operations/ingest]], [[wiki/operations/query]], [[wiki/operations/lint]]; aggiornati schema, indice e [[wiki/decisions/v002-scope]]. Predisposto storico Git senza destinazione remota.

## 2026-10-28 | implement | Accesso GitHub
Preparati lettore e verifica manuale in n8n, senza attivazioni. Test locali e simulati superati; registrati i limiti in [[wiki/implementation/wiki-access]]. La trasmissione ai modelli è stata bloccata dalla revisione automatica e non aggirata. GitHub n8n richiede ancora la credenziale; la v0.0.1 resta invariata.
