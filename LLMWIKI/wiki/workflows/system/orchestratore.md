---
id: "wiki/workflows/system/orchestratore"
title: "Orchestratore — stato osservato"
kind: "workflow"
status: "configured"
version: "0.0.2"
updated: "2026-10-28"
---

# Orchestratore — stato osservato

Nome: ESPERIMENTO | Sistema | Identità Agenti
ID: H9035WWxnJqodZFq
URL: https://n8n-uull.srv2097610.hstgr.cloud/workflow/H9035WWxnJqodZFq
Versione n8n osservata: 42206f8f-e55f-4b35-9598-6feccd079ff5
Attivo: false; nodi: 26.

Input: messaggio testuale Telegram con chat. Output previsto: una sintesi nella stessa chat. Percorso: due giri Architetto/Costruttore/Revisore, poi sintesi Architetto; sette chiamate AI previste.

Dipende da Telegram, tre nodi modello configurati su gpt-6-luna, identità Qdrant e skill GitHub a commit fissato. Mancano credenziali REST Qdrant. Nessun tool per modificare altri workflow; nessun consenso eseguibile implementato.

La v0.0.2 non modifica questo workflow e non vi aggiunge un caricatore wiki. Verifiche storiche documentate in [[wiki/releases/v0.0.1]]. Snapshot sanitizzato in raw, credenziali e webhook esclusi.

Richiede [[wiki/workflows/system/inizializza-identita]], [[wiki/common/soul]] e [[wiki/project/access-options]] prima della futura integrazione.

