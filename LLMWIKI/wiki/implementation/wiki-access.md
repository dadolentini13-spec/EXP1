---
id: "wiki/implementation/wiki-access"
title: "Accesso wiki tramite tool — v0.0.2"
kind: "component"
status: "configured"
version: "0.0.2"
updated: "2026-10-28"
---

# Accesso wiki tramite tool

## Contratto approvato
GitHub privato EXP1, radice LLMWIKI. Ogni AI Agent ha Wiki e Skill collegati alla porta ai_tool, senza nodi di precaricamento sulla catena principale. I subworkflow interni implementano i tool. Le istruzioni essenziali condivise e le tre identità sono incluse nella configurazione degli agenti; nessun documento esterno è obbligatorio.

Search restituisce metadati classificati; read legge una pagina indicizzata. Non vengono caricati tutti i documenti. La ricerca è per parole e classificazioni, guidata dall'agente: non è ricerca semantica a embedding. I wikilink indirizzano ulteriori letture.

Un documento o indice assente, una richiesta non ammessa, 403 o timeout restituiscono ok:false, continue:true e dettagli: non arrestano il confronto. I permessi restano applicati dal codice; continuare non significa ignorarli.

## Snapshot e audit
La prima consultazione della wiki risolve main a uno SHA e lo conserva per job_id in una tabella tecnica n8n; le chiamate successive usano quello SHA. I ruoli sono sequenziali e parallel_tool_calls è disabilitato. La tabella contiene soltanto job_id e SHA: non è la memoria degli agenti. Le skill ufficiali hanno revisione sorgente fissa; le tre guide interne sono incluse nel deployment. Se manca l'accesso privato, le skill pubbliche e incluse restano disponibili.

Le esecuzioni n8n conservano i risultati e i log di lettura con job, ruolo, percorso, revisione, esito e data. I log non sono inseriti nel prompt intero a ogni turno.

## Scrittura Architetto
Registra wiki è collegato soltanto ad Architetto. Crea esclusivamente un nuovo record proposto sotto wiki/records e aggiorna manifest, indice, log e grafo in un commit atomico. Non può sovrascrivere regole, identità, raw o v0.0.1. Link inesistenti, duplicati e concorrenza restituiscono un esito al chiamante. Nessun force push. La registrazione non equivale ad approvazione delle azioni descritte. La sessione corrente conserva lo snapshot; le nuove sessioni vedono il commit nuovo.

## Workflow
- Orchestratore: y6GPjnFOVuronj0z, 27 nodi, tre agenti, due round e sintesi finale.
- Consultazione: FDb2O8tfyh6oMUht, 21 nodi interni al tool.
- Registrazione: nnpZJePc10RpgNGa, 21 nodi interni al tool.
- Diagnostica: POr7YW1yIRXYseLZ, 3 nodi, nessun modello, risultato non bloccante.

## Stato attuale
Tutti i workflow restano inattivi nella cartella Esperimento del progetto personale corretto. Il token aggiornato permette lettura e scrittura reale su EXP1: esecuzioni3159,3161,3164 riuscite. Il precedente403 è risolto. ID Telegram configurato. Restano da verificare le scelte dei tool da parte dei modelli reali.

La precedente revisione automatica aveva bloccato il collegamento ai modelli; Davide ha poi approvato la revisione e l'implementazione completa. La configurazione dei modelli OpenAI è stata salvata con la nuova architettura, senza attivarla. Nessuna prova completa con modelli e Telegram è stata effettuata. Vedi [[wiki/verification/v002]], [[wiki/workflows/system/orchestratore-v002]] e [[wiki/skills/catalog]].

## Accesso Telegram
Il mittente viene controllato prima dei modelli e dei tool. Solo chat privata e ID utente esplicitamente autorizzato; runtime/deployment.json contiene l’ID 5218311620 fornito da Davide e riportato anche nel controllo n8n. Questo controllo di accesso è distinto dalla consultazione non bloccante dei documenti.

## Verifica successiva del contesto
Esecuzione3163: le istruzioni comuni e le identità arrivano ai tre nodi Contesto; ciclo completo simulato con ID di Davide autorizzato. Questo verifica la composizione degli input, non la comprensione dei modelli né la loro scelta dei tool. Il contenuto individuale coincide con i tre soul.md della wiki. I file sono copiati nelle istruzioni al deployment: la loro modifica su GitHub non aggiorna automaticamente le istruzioni salvate in n8n.
