---
id: "SCHEMA"
title: "Schema e regole della wiki"
kind: "schema"
status: "prepared"
version: "0.0.2"
updated: "2026-10-28"
---

# Schema e regole della wiki

## Organizzazione
- `raw/`: evidenze conservate e snapshot sanitizzati; aggiungere nuove acquisizioni senza sovrascrivere quelle precedenti.
- `wiki/`: descrizioni e relazioni aggiornabili, distinguendo fatti, proposte e verifiche.
- `index.md`: ingresso per argomento; `log.md`: cronologia append-only.

Questa è una nostra istanza del metodo citato in [[wiki/sources/karpathy-llm-wiki]], non un'implementazione ufficiale dell'autore.

## Metadati
Ogni pagina Markdown ha id univoco uguale al percorso senza estensione, titolo, tipo, stato, versione e data. Tipi ammessi: index, schema, policy, identity, context, decision, recommendation, workflow, component, source, release, verification, template, log.

Stati: prepared, proposed, approved, configured, verified, blocked, deferred, historical. Un documento prepared non rende operativo il componente descritto; i workflow indicano separatamente configurazione ed esecuzione.

I percorsi sono relativi alla radice LLMWIKI. Wikilink canonico: `[[wiki/project/context]]`. Usare il percorso completo per evitare omonimie; alias ammesso dopo |. `graph.json` elenca link e riferimenti inversi. Collegamenti esterni sono URL Markdown.

## Aggiornamenti
Conservare input e fonte, proporre o registrare il cambiamento, aggiornare pagina e indice, annotare la decisione, verificare riferimenti e stati. Non promuovere un consiglio a decisione approvata né una bozza a codice verificato. Segnalare fonti discordanti, invece di cancellare la prova precedente.

Un consiglio significativo ha id, motivazione, fonti consultate, alternative, stato e decisione di Davide. Un workflow ha id n8n verificato, versione osservata, dipendenze, input/output, permessi, prove e collegamenti.

Prima di modificare Notion leggere le regole del progetto di destinazione, non assumere che la tassonomia della wiki sostituisca quella di Notion. La scheda v0.0.1 resta congelata. Vedi [[wiki/common/soul]] e [[wiki/templates/component]].


## Operazioni del manutentore LLM
L'assistente mantiene la wiki integrando sintesi e relazioni; Davide sceglie fonti, obiettivi e decisioni. Seguire [[wiki/operations/ingest]], [[wiki/operations/query]] e [[wiki/operations/lint]]. Leggere l'indice e conservare le risposte utili entro l'autorizzazione ricevuta.
La base operativa usa file Markdown e Git. Manifest e grafo JSON sono indici derivati, non un database della memoria. Ogni modifica richiede controllo e commit; la destinazione remota resta da scegliere.
