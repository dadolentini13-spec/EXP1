---
id: "wiki/operations/lint-wikilinks"
title: "Revisione strutturale, semantica e dei wikilink"
kind: "verification"
status: "configured"
version: "0.0.3"
updated: "2026-10-29"
---

# Revisione della wiki

Metodo [[wiki/sources/karpathy-llm-wiki]], operazione Lint. Separare sempre i **controlli meccanici** dalla **revisione semantica dell'LLM**.

## Controlli meccanici
- ogni wikilink interno ha un percorso esistente o viene marcato come mancante;
- id, titolo, tipo, stato, provenienza, timestamp sono coerenti;
- backlinks, manifest, graph e indice concordano;
- pagine orfane senza ingressi, duplicati potenziali e documenti senza fonte sono segnalati;
- `raw/` e le versioni storiche non vengono mutate.

## Controlli semantici dell'LLM
- individuare affermazioni tra pagine incompatibili, specificando entrambe le fonti;
- evidenziare affermazioni superate rispetto a fonti più recenti;
- rilevare concetti ricorrenti senza pagina, relazioni pertinenti assenti e domande da approfondire;
- produrre un rapporto con osservazione, evidenza, impatto, azione proposta, confidenza ed eventuale bisogno di approvazione.

Architetto prepara correzioni tematiche conformi al tool di registrazione; Revisore riesamina i conflitti importanti. Nessuna correzione automatica di identità, regole, documenti approvati o `raw/`. Nessun controllo statico equivale a una verifica semantica completa: dichiarare copertura e limiti.

## Esito
Rapporto sintetico ordinato per impatto; le correzioni concordate aggiornano le pagine coinvolte con un commit e una voce su `log.md`; i conflitti irrisolti restano tracciati, non vengono cancellati.


Tool operativo: Wiki con mode lint restituisce rilievi su manifest, grafo, backlinks e index. Il rapporto specifica page_bodies_checked:false e semantic_review_performed:false. I controlli su ogni corpo, provenienza e significato richiedono letture mirate e revisione degli agenti; non si dichiara una copertura semantica globale.
