import fs from 'node:fs';import path from 'node:path';
const root=new URL('../',import.meta.url).pathname;
const write=(p,title,kind,status,body)=>fs.writeFileSync(path.join(root,p),`---\nid: "${p.slice(0,-3)}"\ntitle: ${JSON.stringify(title)}\nkind: "${kind}"\nstatus: "${status}"\nversion: "0.0.2"\nupdated: "2026-10-28"\n---\n\n${body}\n`);
write('README.md','LLMWIKI — ingresso','index','configured',`# LLMWIKI

Base condivisa dell'ecosistema di Davide nel repository privato EXP1. La v0.0.2 configura i tre agenti n8n con tool Wiki e Skill. Nessuna lettura obbligatoria e nessun blocco se un documento manca.

Consulta [[index]], [[SCHEMA]], [[wiki/project/context]], [[wiki/skills/catalog]] e [[wiki/implementation/wiki-access]] secondo il compito. Il metodo di riferimento è [[wiki/sources/karpathy-llm-wiki]].

Stato: configurazioni salvate e inattive. La credenziale n8n è collegata ma GitHub restituisce 403 su EXP1: occorre abilitare il repository e Contents Read and write. Catalogo, guide incluse e skill pubbliche funzionano anche senza accesso alla wiki privata. Non sono stati eseguiti Python, chiamate ai modelli o invii Telegram durante queste verifiche.

Lo storico è GitHub; [[wiki/releases/v0.0.1]] resta storico e la revisione è [[wiki/releases/v0.0.2]]. La scelta della memoria resta nel contesto [[wiki/project/memory-deferred]].`);
write('wiki/implementation/wiki-access.md','Accesso wiki tramite tool — v0.0.2','component','configured',`# Accesso wiki tramite tool

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

## Stato e limite osservato
Tutti salvati e inattivi nella cartella Esperimento del progetto personale corretto. Credenziale GitHub account collegata; lettura reale 3118 ha ricevuto 403 Resource not accessible by personal access token su EXP1. Servono autorizzazione a EXP1 e Contents Read and write per leggere e scrivere. Nessuna credenziale viene memorizzata nel testo dei nodi.

La precedente revisione automatica aveva bloccato il collegamento ai modelli; Davide ha poi approvato la revisione e l'implementazione completa. La configurazione dei modelli OpenAI è stata salvata con la nuova architettura, senza attivarla. Nessuna prova completa con modelli e Telegram è stata effettuata. Vedi [[wiki/verification/v002]], [[wiki/workflows/system/orchestratore-v002]] e [[wiki/skills/catalog]].`);
write('wiki/project/access-options.md','Consultazione e accessi','decision','approved',`# Consultazione e accessi

Decisioni approvate da Davide: file Markdown persistenti su GitHub; lettura ai tre ruoli; registrazione tramite Architetto; consultazione mirata e classificata; snapshot coerente per esecuzione e storico; log letture.

Revisione del 28/10/2026: wiki e skill come tool degli AI Agent. Nessun documento obbligatorio e nessun arresto per la sua assenza. Le regole essenziali sono incluse negli agenti. Fonti mancanti vengono dichiarate e si cercano alternative pertinenti.

Wiki e collegamento diretto a n8n sono complementari. Questa release collega la wiki e le skill, non strumenti di modifica automatica dei workflow. Costruttore prepara codice e configurazioni; non esegue Python né usa ambienti di prova.

Le due opzioni di routing restano valide se rispettano le stesse regole: interpretazione e instradamento separati, oppure componente unico. A fine audit/piano motivare la preferenza, senza introdurre uno schema diverso per ciascuna.

Stato verificabile e permessi: [[wiki/implementation/wiki-access]]. Skill: [[wiki/skills/catalog]].`);
write('wiki/project/context.md','Contesto dell’ecosistema','context','approved',`# Contesto dell'ecosistema

Davide costruisce gradualmente un ecosistema che distingue intento, dominio e operazione e coinvolge workflow pertinenti. Una domanda non implica automaticamente un database e un'affermazione non concede una scrittura. Le situazioni si distinguono per contratto e comportamento, non per la sola forma grammaticale.

Architetto coordina, propone criteri e consigli e assegna requisiti; Costruttore prepara n8n e codice anche Python; Revisore controlla requisiti e limiti. Tutti hanno almeno tre skill disponibili e scelgono quelle pertinenti dal [[wiki/skills/catalog]]. Python non viene eseguito e non è previsto un ambiente di prova per gli agenti.

La v0.0.2 usa tool per wiki e skill, senza documenti obbligatori. La configurazione è separata dalla v0.0.1; il nuovo nome e la firma Telegram sono esperimentoV0.0.2. La baseline conserva i nomi storici e Qdrant non viene inizializzato.

Conservare decisioni e fonti nella wiki senza inventare stato n8n o verifiche. [[wiki/project/memory-deferred]] registra una decisione futura: non inserirla nel prompt individuale di Architetto. Stato attuale: [[wiki/implementation/wiki-access]].`);
write('wiki/releases/v0.0.2.md','Release v0.0.2','release','configured',`# Release v0.0.2

Estende la base LLM Wiki con un nuovo orchestratore, identità completate, tool Wiki e Skill per tre agenti, registrazione controllata riservata ad Architetto. 17 skill disponibili a ogni ruolo, selezionate per compito; n8n ufficiali a revisione fissa più guide interne Python, prompt e wiki.

Nessun documento obbligatorio; indisponibilità restituita senza arresto. Snapshot per job, classificazioni e audit. Nessun interprete Python o Code Interpreter collegato.

La [[wiki/releases/v0.0.1]] e i due workflow storici non vengono modificati. Configurazioni v0.0.2 salvate ma inattive. Accesso privato n8n ancora da sbloccare: token GitHub risponde 403 per EXP1. Nessun test live con modelli o Telegram.

Dettagli: [[wiki/implementation/wiki-access]], [[wiki/verification/v002]], [[wiki/workflows/system/orchestratore-v002]] e [[wiki/skills/catalog]].`);
write('wiki/workflows/system/orchestratore-v002.md','Orchestratore con tool v0.0.2','workflow','configured',`# Orchestratore con tool v0.0.2

ID n8n y6GPjnFOVuronj0z. Nome ESPERIMENTO | Sistema | v0.0.2. Cartella Esperimento, progetto personale di Davide (dado.lentini13@gmail.com). 27 nodi, gruppi Architetto, Costruttore, Revisore e Consegna Telegram.

Catena: messaggio Telegram, stato compito, Architetto → Costruttore → Revisore, due round, Architetto finale e risposta. Sette contributi attesi. Nessun caricamento wiki sulla catena: le porte ai_tool forniscono Wiki e Skill a ciascun agente, Registra wiki soltanto ad Architetto.

Modelli e credenziali già esistenti preservati; Code Interpreter esplicitamente falso. Strumenti di esecuzione Python o modifica n8n assenti. I ruoli possono consegnare codice e configurazioni; la consultazione non aggiunge permessi operativi.

Le istruzioni comuni [[wiki/common/soul]] e le identità [[wiki/agents/architetto/soul]], [[wiki/agents/costruttore/soul]], [[wiki/agents/revisore/soul]] sono incluse nel deployment. Aggiornare un file identità in GitHub non modifica automaticamente il prompt salvato in n8n: occorre una revisione del deployment.

Stato inattivo, nessuna attivazione Telegram eseguita. Prova 3125 con agenti e invio simulati verifica la catena di sette contributi, non la qualità dei modelli o le loro scelte di tool. Vedi [[wiki/verification/v002]] e [[wiki/implementation/wiki-access]].`);
let f=path.join(root,'wiki/operations/lint.md');fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace('letture obbligatorie','politica di lettura non bloccante'));
f=path.join(root,'SCHEMA.md');fs.writeFileSync(f,fs.readFileSync(f,'utf8').replace('template, log.','template, log, skill.').replace('la destinazione remota resta da scegliere.','la destinazione remota è dadolentini13-spec/EXP1, radice LLMWIKI. Nessuna lettura è obbligatoria: l’assenza di un documento produce indisponibilità, non un arresto.'));
f=path.join(root,'wiki/workflows/catalog.md');fs.appendFileSync(f,'\n## v0.0.2 — configurata, inattiva\n\n[[wiki/workflows/system/orchestratore-v002]] descrive il nuovo sistema e i tool. [[wiki/implementation/wiki-access]] elenca reader, writer e diagnostica. Le voci storiche sopra descrivono soltanto la v0.0.1.\n');
fs.writeFileSync(path.join(root,'runtime/planned-agent-connection.json'),JSON.stringify({status:'superseded',reason:'Preload e documenti obbligatori eliminati su istruzione di Davide',replacement:'orchestratore-v002.workflow.json',history:'Versione precedente conservata nella storia Git'},null,2)+'\n');
