---
id: "wiki/components/situation-router"
title: "Interpretare situazioni e scegliere workflow"
kind: "component"
status: "proposed"
version: "0.0.2"
updated: "2026-10-28"
---

# Interpretare situazioni e scegliere workflow

Il componente resta una proposta: nessun nodo decisionale o workflow specialistico è stato realizzato. La squadra ESPERIMENTO può ora consultare Wiki e Skill come tool e documentare il lavoro; questo non equivale all'implementazione del router.

## Contratto proposto
Input: messaggio, contesto autorizzato, catalogo e versione delle regole. Output: intenti, ambiti, operazioni richieste, informazioni mancanti, workflow candidati, motivazione breve ed esito di instradamento. I valori definitivi e il formato JSON restano da approvare.

Tenere distinti: domanda/informazione/correzione/richiesta d'azione; email/calendario/lavoro/altro; leggere/preparare aggiornamento/preparare invio/nessuna azione. Un messaggio può avere più intenti o ambiti. Prevedere sconosciuto e chiarimento necessario.

| Esempio | Interpretazione attesa | Limite |
|---|---|---|
| Quando ho il colloquio? | Richiesta informazione; calendario/lavoro | Leggere solo fonti pertinenti e autorizzate |
| Il colloquio è venerdì, ricordalo | Aggiornamento esplicito | Confrontare dato precedente e applicare la politica di approvazione |
| Oggi sono stanco | Affermazione | Nessuna scrittura automatica implicita |
| Gestiscimi le email | Azione, ambito email, operazione incompleta | Chiarire lo scopo; non inviare messaggi |
| Ho ricevuto una email sospetta, cosa faccio? | Domanda email/sicurezza | Non confondere la citazione di email con autorizzazione a gestirla |
| Sposta il colloquio e avvisa via email | Richiesta composta | Separare dipendenze e approvazioni |

Una situazione nuova non genera automaticamente un workflow. Cercare una capacità compatibile; proporre una nuova solo quando utile e autorizzata. Rifiutare ID inventati o assenti dal catalogo, output malformato e richieste di aggirare le regole. Non scegliere soglie numeriche senza dati di valutazione.

Confrontare le due opzioni di [[wiki/project/access-options]], registrare il consiglio con [[wiki/templates/component]] e farlo verificare. Dipendenze: [[wiki/workflows/catalog]], [[wiki/common/soul]].



Integrazione proposta del 2026-10-29; fonte [[wiki/records/3866-summary]]. La proposta non modifica lo stato di approvazione.
