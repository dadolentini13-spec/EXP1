---
id: "wiki/implementation/wiki-access"
title: "Accesso wiki tramite tool — v0.0.2"
kind: "component"
status: "configured"
version: "0.0.2"
updated: "2026-10-29"
---

# Accesso wiki tramite tool

## Stato corrente — integrazione e registrazione verificate

Il collaudo reale **3866** ha completato sette contributi. Il writer ha salvato una sola sintesi wiki/records/3866-summary.md e integrato wiki/components/situation-router.md nel commit c8f5e371daed4d710759e7c61438ed25f4c6fd3f. Il retry identico ha restituito already_registered senza altro commit. La rilettura **3893**, da un nuovo compito, conferma la pagina aggiornata HTTP200 allo stesso SHA. La proposta di router resta proposta: non è un'implementazione del componente.

Superati **29 test JavaScript**. Prove n8n3828: commit atomico di fonte, record, pagina e quattro indici con HTTP simulato;3830: retry senza creazione/pubblicazione Git;3831: fase anticipata rifiutata senza arresto. Il primo collaudo3833 salvava un record ma ometteva la patch: corretti istruzione finale, descrizione del retry e parametro integrations_json esplicito. Nel3866 cinque chiamate premature del modello sono state respinte prima di GitHub: il controllo esterno è necessario anche quando il prompt vieta già l'azione. Unicità e integrazione finale sono state poi rispettate.

Il writer non è più solo append-only: supporta sintesi proposte e patch esatte fino a tre pagine tematiche esistenti, con fonte originale, metadati preservati e indici/grafo nello stesso commit. Scopo e confini: [[wiki/implementation/wiki-integration]]. Non è deduplicazione semantica universale e non cambia pagine approvate, regole o identità.

**Parte ancora necessaria:** il tool live di schemi/validazione n8n per Costruttore. Configurazione MCP preparata e validata staticamente, non collegata: manca una credenziale MCP n8n e l'endpoint deve essere confermato. Servono soli strumenti di lettura e validazione; non sono concessi modifica o pubblicazione n8n. Il principale H9035WWxnJqodZFq resta unico e inattivo; utility pubblicate su chiamata. Nessun Python degli agenti o invio Telegram durante le prove. Le descrizioni sotto conservano lo storico e sono superate dove differiscono.



## Stato verificato il 29/10/2026 — workflow unico

La v0.0.2 approvata è integrata nell'orchestratore originale **H9035WWxnJqodZFq — ESPERIMENTO | Sistema** (27 nodi). La copia parallela y6GPjnFOVuronj0z è archiviata. Le due utility Wiki/Skill e scrittura restano tool interni richiamabili dall'orchestratore; non sono altre squadre ufficiali. Il reader ammette anche la diagnostica POr7YW1yIRXYseLZ. Il principale è inattivo; solo le utility con trigger di chiamata sono pubblicate. Nessun invio Telegram o Python eseguito.

Il collaudo reale **3239** ha completato A1 → C1 → R1 → A2 → C2 → R2 → sintesi Architetto: sette risposte non vuote, fonti Wiki/Skill effettivamente lette e scritture GitHub riuscite. Il solo invio finale Telegram era simulato. Limite iterazioni portato a20 dopo il fallimento3179; budget output a6000 dopo risposte troncate/assenti in3196. Corretta la normalizzazione dei parametri Skill; regressione reale3236 riuscita.

**Accettazione parziale:** Architetto ha scritto due schede nel compito3239, anziché l'unica richiesta; manca un controllo di unicità indipendente dal titolo. Le riletture dei nuovi record nello stesso job restituiscono WIKI_DOCUMENT_NOT_LISTED, perché lo snapshot resta quello iniziale: è il comportamento coerente con la versione fissata, non prova di scrittura fallita. Le risposte del tool indicano la disponibilità nelle nuove esecuzioni. Conservati entrambi i record proposti e il loro storico, senza promuoverli ad approvati.

Costruttore ha consegnato contratto JSON e prompt, dichiarandoli proposte; non dispone ancora di un tool per leggere/validare gli schemi live n8n e quindi non è provata la consegna autonoma di JSON n8n verificato da incollare. Il writer aggiunge record e aggiorna gli indici, ma non integra ancora conoscenza nelle pagine tematiche esistenti. Non dichiarare completato il metodo LLM Wiki. I futuri nodi decisionali e workflow specializzati sono il lavoro della squadra, non prerequisiti di questo collaudo.

Dettagli tecnici: runtime/acceptance-3239.json e [[wiki/verification/v002]]. La v0.0.1 documentale e i sorgenti raw restano nello storico; il workflow originale ora contiene la v0.0.2 per decisione esplicita di Davide. Le descrizioni precedenti sotto sono storiche dove differiscono.


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
- Orchestratore: H9035WWxnJqodZFq, 27 nodi, tre agenti, due round e sintesi finale.
- Consultazione: FDb2O8tfyh6oMUht, 21 nodi interni al tool.
- Registrazione: nnpZJePc10RpgNGa, 21 nodi interni al tool.
- Diagnostica: POr7YW1yIRXYseLZ, 3 nodi, nessun modello, risultato non bloccante.

## Stato attuale
Il workflow principale resta inattivo nella cartella Esperimento del progetto personale corretto. Il token aggiornato permette lettura e scrittura reale su EXP1: esecuzioni3159,3161,3164 riuscite. Il precedente403 è risolto. ID Telegram configurato. Restano da verificare le scelte dei tool da parte dei modelli reali.

La precedente revisione automatica aveva bloccato il collegamento ai modelli; Davide ha poi approvato la revisione e l'implementazione completa. La configurazione dei modelli OpenAI è stata salvata con la nuova architettura, senza attivarla. Nessuna prova completa con modelli e Telegram è stata effettuata. Vedi [[wiki/verification/v002]], [[wiki/workflows/system/orchestratore-v002]] e [[wiki/skills/catalog]].

## Accesso Telegram
Il mittente viene controllato prima dei modelli e dei tool. Solo chat privata e ID utente esplicitamente autorizzato; runtime/deployment.json contiene l’ID 5218311620 fornito da Davide e riportato anche nel controllo n8n. Questo controllo di accesso è distinto dalla consultazione non bloccante dei documenti.

## Verifica successiva del contesto
Esecuzione3163: le istruzioni comuni e le identità arrivano ai tre nodi Contesto; ciclo completo simulato con ID di Davide autorizzato. Questo verifica la composizione degli input, non la comprensione dei modelli né la loro scelta dei tool. Il contenuto individuale coincide con i tre soul.md della wiki. I file sono copiati nelle istruzioni al deployment: la loro modifica su GitHub non aggiorna automaticamente le istruzioni salvate in n8n.

## Unificazione del29/10/2026
Su richiesta di Davide, le modifiche approvate sono integrate nell’orchestratore originale H9035WWxnJqodZFq. La copia parallela è archiviata. I servizi Wiki/Skill e registrazione sono pubblicati e autorizzano il chiamante ufficiale; non hanno trigger autonomi. Il collaudo3176 ha rilevato i servizi non eseguibili;3179 ha rilevato il limite di12iterazioni. Servizi pubblicati e limite portato a20 prima del nuovo collaudo ufficiale. [[wiki/workflows/system/orchestratore]] è la scheda corrente.
