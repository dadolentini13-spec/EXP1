---
id: "wiki/implementation/wiki-access"
title: "Accesso GitHub alla wiki — v0.0.2"
kind: "component"
status: "configured"
version: "0.0.2"
updated: "2026-10-28"
---

# Accesso GitHub alla wiki

## Decisioni applicate
Repository privato dadolentini13-spec/EXP1, cartella LLMWIKI. Lettura per i tre ruoli; scritture future soltanto tramite Architetto e approvazione finale. Essenziali comuni, ricerca mirata classificata, snapshot coerente e log delle letture. Nessuna memoria scelta.

## Architettura preparata
Il caricamento risolve una sola volta il commit di main e legge manifest, sei documenti comuni e tre identità a quel commit. I tre agenti ricevono le stesse regole; contesto e indice restano distinti dall'identità individuale. Le pagine ulteriori si cercano per metadati e parole, con l'agente che sceglie query e percorsi; non viene usato un motore semantico a embedding.

Il lettore espone search/read con commit, ruolo e job fissati dal chiamante. I percorsi devono essere nella lista del manifest e nella wiki; niente raw, URL arbitrari o scritture. La ricerca restituisce metadati, non tutta la wiki. Le letture sono registrate nelle esecuzioni n8n con documento, snapshot, agente, esito e data.

## Workflow salvati
- [Consultazione wiki](https://n8n-uull.srv2097610.hstgr.cloud/workflow/FDb2O8tfyh6oMUht): 7 nodi, trigger da workflow, sola lettura.
- [Verifica accesso](https://n8n-uull.srv2097610.hstgr.cloud/workflow/POr7YW1yIRXYseLZ): 9 nodi, avvio manuale, nessun modello e nessun Telegram.

Entrambi sono inattivi e richiedono credenziale GitHub. Il lettore limita il chiamante alla verifica accesso; quando il flusso agenti sarà autorizzato, il perimetro sarà aggiornato secondo necessità.

## Collegamento agenti non applicato
La configurazione completa dei tre agenti è preparata in runtime/planned-agent-connection.json, ma l'aggiornamento n8n è stato respinto dalla revisione automatica: passerebbe wiki privata e messaggi Telegram ai modelli OpenAI senza autorizzazione specifica alla trasmissione. Non è stato aggirato il blocco. Al posto del collegamento AI è stata salvata una verifica che legge soltanto e non chiama modelli o Telegram.

## Verifiche
11 test unitari superati. Test n8n con servizi esterni simulati: 3083 caricamento riuscito; 3084 lettura riuscita; 3085 arresto atteso su SCHEMA mancante; 3086 ricerca riuscita. Sono stati controllati i log restituiti, non solo gli stati delle esecuzioni.

Queste prove non dimostrano l'accesso GitHub reale da n8n né l'uso della wiki da parte dei modelli. Una credenziale Contents: Read sul solo EXP1 e il consenso specifico al passaggio ai modelli sono prerequisiti distinti.

## Piano rimanente
1. Configurare credenziale GitHub in n8n e testare una lettura reale senza modelli.
2. Ottenere il consenso esplicito alla trasmissione ai modelli OpenAI.
3. Applicare la configurazione dei tre agenti, mantenendo la v0.0.1.
4. Verificare contesto, snapshot e chiamate agli strumenti prima dell'attivazione.

Collegamenti: [[wiki/project/access-options]], [[wiki/common/soul]], [[wiki/releases/v0.0.2]], [[wiki/verification/v002]].
