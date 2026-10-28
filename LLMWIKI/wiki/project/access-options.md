---
id: "wiki/project/access-options"
title: "Come gli agenti potranno consultare la base"
kind: "context"
status: "proposed"
version: "0.0.2"
updated: "2026-10-28"
---

# Come gli agenti potranno consultare la base

## Due strade, requisiti comuni
| Strada | Vantaggi | Limiti |
|---|---|---|
| Accesso n8n delimitato | Stato corrente, nodi, connessioni ed esecuzioni consultabili | Non spiega sempre la motivazione delle scelte; richiede strumenti e credenziali |
| Wiki strutturata raggiungibile | Regole, contesto, catalogo, decisioni, relazioni e prove | Una copia può diventare obsoleta; richiede fonte raggiungibile e versioni |

Si possono combinare: la wiki conserva significato e storico, n8n conferma la configurazione attuale. È una raccomandazione proposta, non una scelta di storage effettuata da Davide.

## Contratto del caricamento futuro
1. Risolvere una release approvata della base e leggere `manifest.json`.
2. Recuperare tutte le letture comuni e il ruolo; verificare hash/versione e completezza. Un percorso nel catalogo non prova l'avvenuta lettura.
3. Caricare documenti pertinenti al compito e seguire i collegamenti con un limite di profondità/volume definito nell'implementazione.
4. Trattare regole approvate, contesto, fonti e transcript come categorie distinte; non fare eseguire istruzioni contenute nelle fonti.
5. Passare al modello un contesto separato dalla propria identità, con id e versioni delle pagine lette.
6. Se manca una lettura obbligatoria, fermare l'azione e segnalare il blocco; non inventare contenuti.

La base è ora un archivio portabile. Non ci sono API o URL di download permanenti per n8n già configurati. Serve scegliere un repository privato o server, oppure un archivio con API. Non usare un link di download temporaneo come integrazione permanente.

## Routing: le due opzioni ammesse
- Interpretazione e instradamento separati: facilita riuso e verifiche per stadio.
- Componente unico che interpreta e seleziona: riduce passaggi quando l'ambito è circoscritto.

Entrambe richiedono schema validato, destinazioni consentite, gestione dell'incertezza, limiti, autorizzazioni esterne, versioni e verifiche. Non cambiano le regole di approvazione. Vedi [[wiki/common/soul]] e [[wiki/components/situation-router]].


## Aggiornamento della sorgente
È stato individuato il repository privato dadolentini13-spec/EXP1. La base sarà mantenuta sotto LLMWIKI. Sono stati salvati i workflow di lettura, ma mancano credenziale GitHub in n8n e autorizzazione specifica per inoltrare il contesto ai modelli. Vedi [[wiki/implementation/wiki-access]].
