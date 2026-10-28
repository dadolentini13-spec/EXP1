---
id: "wiki/skills/python-engineering"
title: "Skill Python: progettazione e consegna del codice"
kind: "skill"
status: "configured"
version: "0.0.2"
updated: "2026-10-28"
---

# Skill Python: progettazione e consegna del codice

## Quando usarla
Quando il compito richiede codice Python, revisione Python, trasformazione dati complessa o una dipendenza specifica del linguaggio. Il linguaggio si sceglie per il problema: non convertire automaticamente ogni nodo n8n in Python.

## Procedura
1. Definire input, output, tipi, esempi, errori e dipendenze. Distinguere programma Python indipendente da Code node n8n.
2. Scegliere strutture built-in semplici: dict/list/set, funzioni piccole e type hints per i contratti. Usare JSON come interfaccia quando adatto; gestire null, Unicode, date e numeri esplicitamente.
3. Validare dati al confine. Gestire eccezioni specifiche, distinguere assenza dati da errore, evitare except generici che nascondono il problema. Prevedere timeout e idempotenza per operazioni esterne, senza eseguirle.
4. Specificare versione Python e pacchetti richiesti quando influiscono sul comportamento. Non inventare moduli installati o compatibilità. La conoscenza del linguaggio non garantisce un interprete disponibile.
5. In n8n consultare anche n8n-code-nodes-official: API di accesso agli item, modalità del Code node e librerie ammesse dipendono dal runtime effettivo. Nessun task runner Python è stato configurato da questa release.
6. Consegnare codice, dipendenze, istruzioni di integrazione e casi di verifica con risultato atteso. Fare revisione statica; non eseguire Python né usare ambienti di prova. Dire chiaramente «non eseguito».

## Fonti e natura della skill
Guida interna del progetto, non una skill ufficiale Python o un addestramento del modello. Basata su documentazione primaria: [tutorial CPython](https://github.com/python/cpython/tree/3.14/Doc/tutorial), [riferimento del linguaggio](https://github.com/python/cpython/tree/3.14/Doc/reference), [JSON nella libreria standard](https://docs.python.org/3.14/library/json.html), [Code n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/).

Consultare [[wiki/skills/catalog]] e [[wiki/common/soul]].
