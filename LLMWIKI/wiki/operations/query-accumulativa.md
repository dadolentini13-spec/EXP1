---
id: "wiki/operations/query-accumulativa"
title: "Query che accumula nuova conoscenza"
kind: "context"
status: "prepared"
version: "0.0.2"
updated: "2026-10-29"
---

# Query che accumula conoscenza

Metodo [[wiki/sources/karpathy-llm-wiki]], operazione Query. Non ridurre la risposta a retrieval di frammenti, né salvare ogni chat indiscriminatamente.

1. Comprendi la domanda e seleziona le pagine pertinenti usando [[index]] e metadati; segui anche wikilink e dipendenze utili.
2. Leggi le pagine e identifica versioni, fonti, incoerenze e informazioni mancanti. Se una pagina manca, prosegui segnalando il limite.
3. Sintetizza con riferimenti ai percorsi, senza presentare ipotesi come fatti o dedurre approvazioni.
4. Chiediti se la risposta produce **conoscenza riutilizzabile**: confronto, nuova relazione tra progetti, chiarimento duraturo, sintesi interdisciplinare o decisione di Davide. Se no, non scrivere.
5. Se sì, usa il processo [[wiki/operations/ingest-intelligente]]: integra la nuova comprensione nelle pagine pertinenti, crea una pagina solo se serve e collega la sintesi alle fonti. Il risultato della conversazione non deve rimanere disperso nello storico della chat.
6. Architetto coordina la registrazione consentita, mentre Costruttore e Revisore propongono contenuto e controlli. Nessuna decisione approvata viene inventata.

Output: risposta, pagine consultate, conflitti, nuova conoscenza proposta, percorsi di integrazione, esito del salvataggio (se effettuato), limiti.
