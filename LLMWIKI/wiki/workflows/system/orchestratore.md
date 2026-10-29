---
id: "wiki/workflows/system/orchestratore"
title: "ESPERIMENTO — workflow ufficiale"
kind: "workflow"
status: "configured"
version: "0.0.2"
updated: "2026-10-29"
---

# ESPERIMENTO — workflow ufficiale

Nome: ESPERIMENTO | Sistema. ID ufficiale H9035WWxnJqodZFq. La revisione v0.0.2 approvata è integrata in questo workflow su richiesta di Davide del 29/10/2026. La v0.0.1 è conservata nello storico Git, negli snapshot raw e nella storia versioni n8n; non è una seconda versione operativa.

27 nodi: Telegram autorizzato5218311620, due round Architetto/Costruttore/Revisore e sintesi finale di Architetto, sette contributi. Regole comuni e identità nelle istruzioni; Wiki e Skill come ai_tool a ogni ruolo; registrazione proposta soltanto ad Architetto. Nessun documento obbligatorio, nessun interprete Python.

La copia parallela y6GPjnFOVuronj0z è archiviata e marcata STORICO. Le utility FDb2O8tfyh6oMUht (lettura e skill) e nnpZJePc10RpgNGa (registrazione) sono servizi interni pubblicati e invocabili dai soli workflow ammessi: nessun timer, Telegram o webhook autonomo. Il loro chiamante ora è il workflow ufficiale.

L'ingresso Telegram del workflow principale resta inattivo durante il collaudo. Il limite per ruolo è20iterazioni: il collaudo ha mostrato che12letture pertinenti esaurivano il vecchio limite senza consentire la risposta. Le credenziali di modelli e Telegram sono preservate.

Scopo: aiutare Davide a progettare e consegnare componenti decisionali, prompt, codice e workflow pertinenti pronti da revisionare/incollare. Non occorre preimplementare quei componenti per collaudare la squadra. La modifica diretta di n8n da parte degli agenti non è disponibile. La registrazione nella wiki è append-only; l'integrazione semantica automatica nelle pagine esistenti resta un'estensione da completare.

Riferimenti: [[wiki/workflows/system/orchestratore-v002]], [[wiki/implementation/wiki-access]], [[wiki/verification/v002]], [[wiki/releases/v0.0.1]].
