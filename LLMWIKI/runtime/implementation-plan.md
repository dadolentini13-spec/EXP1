# v0.0.2 — piano e registro
Specifica: approvazione di Davide del 28/10/2026. Tool collegati ai tre agenti, nessun documento obbligatorio, almeno tre skill disponibili per ruolo, selezione per pertinenza, Python solo produzione codice. Conservare v0.0.1.
1. Reader non bloccante e snapshot per job in tabella tecnica (non memoria degli agenti).
2. Catalogo skill ufficiali n8n e guida Python documentata; identità in quattro sezioni.
3. Nuovo orchestratore con tool wiki e skill, writer solo Architetto; conservare ciclo due round.
4. Test JavaScript dei contratti e verifiche GitHub reali, senza eseguire Python o inviare Telegram.
5. GitHub e Notion v0.0.2 aggiornati, verifiche e limiti dichiarati.
Ruling: sviluppo nel branch locale implement-v002-tools, preservando il checkout e i workflow storici. L'approvazione implementa tutto autorizza la consegna nel repository esistente, non l'attivazione Telegram.
Pre-flight: il reader deve ritornare sempre un oggetto anche per richieste invalide; tool roles e job_id sono fissati dal chiamante. Le skill non autorizzano nuovi tool.
Baseline: 11 test passati (vecchio contratto); alcuni test saranno sostituiti perché lo stop obbligatorio è stato esplicitamente eliminato.

Task1: complete — reader21nodes, snapshot cache per job, errors nonblocking; live private403 recorded, public skill200.
Task2: complete — three identities,17skills available by relevance, prompting sources pinned; no Python execution.
Task3: complete — separate27node main, writer21nodes, Telegram allowlist default deny pending numeric ID; original orchestrator version and updatedAt unchanged.
Task4: complete —17JS tests pass, n8n simulated chain7contributions, missing doc continues, writer atomic5file plan passes after JSON-clone sandbox fix.
Ruling: private GitHub403 is a credential grant issue; do not substitute another account or expose the wiki publicly. Complete all code/docs and mark live access blocked.
Ruling: no verified TelegramID in available sources; default deny until Davide supplies it. This is authorization, not mandatory-document loading.
Final review: independent reviewer found allowlist gap and title delimiters; fixed with regression tests. Runtime writer3136 exposed structuredClone unavailable, fixed;3140 passed simulated publication path.

29/10/2026: decisione successiva esplicita di Davide: unico workflow ufficiale. Integrata v002 nel main originale H9035WWxnJqodZFq,27nodi; copia y6GPjnFOVuronj0z archiviata. Helper callers aggiornati;20iterazioni e6000token output.21testJS; live3239 completa sette contributi e tool reali, ma produce2record anziché1: accettazione parziale. Writer append-only e schemi n8n live mancanti restano limiti dichiarati. Nessun Python o invio Telegram.
