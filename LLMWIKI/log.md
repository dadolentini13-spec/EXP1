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

- 28/10/2026 — Davide approva la revisione v0.0.2: tool ai_tool per Wiki e Skill, nessun documento obbligatorio, skill pertinenti per tutti i ruoli e Python senza esecuzione. Nuovo orchestratore separato dalla v0.0.1, writer solo Architetto. Credenziale presente, lettura reale EXP1 respinta da GitHub con 403. Dettagli e prove: [[wiki/implementation/wiki-access]], [[wiki/verification/v002]], [[wiki/skills/catalog]].

- 2026-10-28 — Architetto, job v002-accesso-token-aggiornato: registrato [[wiki/records/v002-accesso-token-aggiornato-verifica-accesso-wiki-con-token-aggiornato|Verifica accesso wiki con token aggiornato]] come proposed.

- 28/10/2026 — Token GitHub aggiornato da Davide: lettura3159, registrazione3161 e rilettura3164 riuscite realmente su EXP1. ID Telegram5218311620 autorizzato; verifica input dei tre agenti3163 riuscita con modelli simulati. Prompt e soul.md individuali non modificati. Restano verifica dei modelli con tool e componenti decisionali.

- 2026-10-28 — Architetto, job 3239: registrato [[wiki/records/3239-contratto-proposto-classificatore-ai-di-pertinenza-email-a-q|Contratto proposto: classificatore AI di pertinenza email a quattro esiti]] come proposed.

- 2026-10-28 — Architetto, job 3239: registrato [[wiki/records/3239-contratto-proposto-per-classificatore-ai-di-pertinenza-email|Contratto proposto per classificatore AI di pertinenza email (3239)]] come proposed.

##29/10/2026 — unificazione approvata e collaudo reale

Unico orchestratore H9035WWxnJqodZFq; copia parallela archiviata; tool interni riservati. Live3239: sette contributi, letture Wiki/Skill, due record proposti; richiesta di una sola scheda non rispettata. Entrambi conservati senza approvazione. Stato e limiti in [[wiki/verification/v002]].
