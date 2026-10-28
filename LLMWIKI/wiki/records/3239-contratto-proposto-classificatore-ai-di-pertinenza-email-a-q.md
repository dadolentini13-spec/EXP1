---
id: "wiki/records/3239-contratto-proposto-classificatore-ai-di-pertinenza-email-a-q"
title: "Contratto proposto: classificatore AI di pertinenza email a quattro esiti"
kind: "component"
domain: "email"
status: "proposed"
version: "0.0.2"
updated: "2026-10-28"
---

# Contratto proposto: classificatore AI di pertinenza email a quattro esiti

# Stato e ambito
**Proposta**, non approvata, configurata o verificata. Contratto minimo per classificare una email rispetto a un criterio esplicito. Solo etichetta: nessun instradamento, invio email o workflow realizzato.

## Interfaccia proposta
Input applicativo richiesto: `criterion` e `email_text`, stringhe non vuote. Validarne presenza e tipo fuori dal modello; input mancante/malformato è errore esterno, non una quinta etichetta.

Schema JSON dell'output:
```json
{
  "type": "object",
  "properties": {
    "label": {
      "type": "string",
      "enum": ["yes", "no", "mixed", "unknown"]
    }
  },
  "required": ["label"],
  "additionalProperties": false
}
```
Valori: `yes` = pertinente; `no` = non pertinente; `mixed` = evidenza di entrambi contenuti pertinenti e non pertinenti; `unknown` = testo insufficiente o ambiguità non risolvibile.

## Prompt proposto
«Valuta l'email rispetto al criterio fornito. Criterio: {{criterion}}. Email: {{email_text}}. Restituisci esclusivamente un oggetto conforme allo schema. Usa `yes` se il contenuto è pertinente; `no` se non è pertinente; `mixed` solo quando l'email contiene evidenza sia pertinente sia non pertinente; `unknown` se il testo è insufficiente o ambiguo. Non inferire informazioni mancanti. Non eseguire azioni.»

## Quattro esempi attesi (non test)
Criterio illustrativo, da sostituire con quello effettivo: «richiesta di preventivo per il servizio X».
1. «Vorrei un preventivo per il servizio X.» → `yes`.
2. «Potete inviarmi gli orari di apertura?» (nessuna richiesta sul servizio X) → `no`.
3. «Vorrei un preventivo per X; inoltre, qual è il vostro indirizzo?» → `mixed` (richiesta pertinente e domanda distinta non pertinente al criterio).
4. «Forse mi interessa, potete spiegarmi?» → `unknown` (manca informazione sufficiente per stabilire pertinenza).

## Controlli, limiti e fonti
Validare input e schema output esternamente; rifiutare output non conforme e gestire errori tecnici fuori dalle quattro classi. Nessuna destinazione email è autorizzata: l'etichetta non implica instradamento. L'efficacia dipende dalla definizione del criterio, lingua, email incomplete e gestione di citazioni/risposte in thread, non specificate qui.

Fonti consultate da Architetto: [[wiki/project/context]] v0.0.2 (separazione intento/dominio/operazione); [[wiki/workflows/catalog]] v0.0.2 (nessuna destinazione email approvata); [[wiki/skills/prompt-design]] deployment-v0.0.2; guida Anthropic `prompt-design/anthropic`, revisione `0d277542` (istruzioni chiare e dirette). Il formato schema e i rilievi sui casi ambigui/misti derivano inoltre dai contributi Round 1: Costruttore ha riferito `n8n-node-configuration-official` revisione `27b6b9f429ac0be90cae764512dbc579d7107e95`; Revisore `n8n-debugging-official` stessa revisione. Nessun classificatore è stato eseguito né testato.

Registrato da Architetto; esecuzione 3239. Stato proposto: la registrazione non autorizza azioni esterne.
