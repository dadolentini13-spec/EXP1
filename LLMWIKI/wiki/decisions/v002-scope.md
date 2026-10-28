---
id: "wiki/decisions/v002-scope"
title: "Decisioni v0.0.2"
kind: "decision"
status: "approved"
version: "0.0.2"
updated: "2026-10-28"
---

# Decisioni v0.0.2

## Richieste esplicite di Davide — 28/10/2026
- Conservare la v0.0.1 e aggiungere una v0.0.2.
- Rendere le regole del progetto comuni a ogni agente.
- Raccogliere consigli e implementazioni in una base consultabile e classificata.
- Usare un sistema di collegamenti wiki con un'unica radice LLMWIKI.
- Informare Architetto del futuro confronto sulla memoria tramite il contesto, non modificando il suo prompt individuale.

## Scelte di preparazione dell'assistente
Base Markdown portabile, con snapshot e metadati. È un artefatto preparato per revisione; non equivale alla scelta di repository, server o database di produzione. È stata richiesta una preferenza sulla collocazione, senza risposta selezionata; è stato adottato questo formato reversibile.

## Decisioni ancora aperte
Sorgente runtime raggiungibile; connettore e permessi; modalità di caricamento e aggiornamento; modello di approvazione delle scritture della wiki; scelta della memoria in futuro.

Collegamenti: [[wiki/project/access-options]], [[wiki/project/memory-deferred]], [[wiki/releases/v0.0.2]].


## Scelta successiva di Davide — 28/10/2026
Seguire il metodo originale del Gist di Karpathy: wiki Markdown mantenuta dall'LLM, fonti conservate, schema, indice, cronologia, operazioni ingest/query/lint e storico Git. Non è stata scelta una destinazione remota o un database della memoria.
