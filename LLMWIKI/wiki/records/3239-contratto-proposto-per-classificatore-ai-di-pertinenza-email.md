---
id: "wiki/records/3239-contratto-proposto-per-classificatore-ai-di-pertinenza-email"
title: "Contratto proposto per classificatore AI di pertinenza email (3239)"
kind: "component"
domain: "email"
status: "proposed"
version: "0.0.2"
updated: "2026-10-28"
---

# Contratto proposto per classificatore AI di pertinenza email (3239)

# Stato
Proposta non approvata. Contratto minimo per classificare email; non è un workflow n8n né una configurazione verificata.

## Fonti effettivamente lette nel job
- Architetto: [[wiki/project/context]] v0.0.2 e [[wiki/workflows/catalog]] v0.0.2 (letti nuovamente in round 2); skill [[wiki/skills/prompt-design]] `deployment-v0.0.2`.
- Nel transcript round 1: Costruttore ha letto `n8n-node-configuration-official` revisione `27b6b9f429ac0be90cae764512dbc579d7107e95`; Revisore `n8n-debugging-official` alla stessa revisione. Entrambi hanno letto prompt-design `deployment-v0.0.2` e Anthropic *Being Clear and Direct*, revisione `0d277542`.
- Nel transcript round 2: Costruttore ha consultato anche `prompt-design/openai`, revisione `a8132ca2f7a5de3a6cf15d9e79d172787b42b697`.

Il catalogo non riporta destinazioni email approvate; pertanto il contratto produce solo un’etichetta, senza instradamento o azione.

## Output JSON proposto
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

`yes`: evidenza di pertinenza rispetto al criterio. `no`: evidenza di non pertinenza. `mixed`: evidenza sia pertinente sia non pertinente. `unknown`: testo insufficiente o interpretazione ambigua. Il criterio è input obbligatorio da definire prima dell’uso.

## Prompt proposto
«Classifica l’email rispetto a questo criterio di pertinenza: [criterio]. `yes`: contenuto pertinente; `no`: non pertinente; `mixed`: evidenza di contenuti pertinenti e non pertinenti; `unknown`: testo insufficiente o interpretazione ambigua. Non inferire informazioni mancanti. Restituisci solo l’oggetto conforme allo schema.»

## Quattro esempi attesi (non eseguiti)
Per tutti, criterio illustrativo: “richieste di preventivo”. Sono esempi di comportamento atteso, non risultati di test.
1. «Vorrei un preventivo per il servizio X.» → `{"label":"yes"}`
2. «Potete inviarmi la fattura già emessa?» → `{"label":"no"}`
3. «Vorrei un preventivo per X; inoltre, potete aggiornare il mio indirizzo di fatturazione?» → `{"label":"mixed"}`
4. «Mi interessa, potete dirmi di più?» (nessun contesto sufficiente a stabilire se chiede un preventivo) → `{"label":"unknown"}`

## Limiti e accettazione proposta
Il criterio concreto e il testo dell’email devono essere forniti; esempi dipendono dal criterio e non generalizzano a ogni casella. Input assente/malformato, errori tecnici e output fuori schema non sono etichette: gestione e validazione esterne devono fallire in modo controllato, senza convertirli in un valore o attivare un’azione. Nessuna destinazione autorizzata è stata identificata. Prima dell’uso servono controlli sullo schema e valutazione su casi rappresentativi, inclusi ambigui e multi-intento. Nessuna prova del classificatore, configurazione n8n, invio email o attivazione workflow è stata eseguita.

## Revisione dei ruoli
Il Revisore ha rilevato che `mixed` deve richiedere evidenza di entrambe le classi e che vaghezza da sola è `unknown`; il prompt e gli esempi recepiscono il rilievo. Il Revisore non ha potuto confermare la scheda del round 2, perché il percorso allora dichiarato restituiva `WIKI_DOCUMENT_NOT_LISTED`; ciò non provava il fallimento della scrittura. Questa è la scheda proposta registrata tramite il tool in questo round.

Registrato da Architetto; esecuzione 3239. Stato proposto: la registrazione non autorizza azioni esterne.
