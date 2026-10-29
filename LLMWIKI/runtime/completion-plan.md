# Completamento v0.0.2

Specifica: proseguire le implementazioni approvate, mantenendo H9035WWxnJqodZFq unico orchestratore ufficiale, v001 storica, tool per conoscenza, nessun documento obbligatorio, nessun Python o invio Telegram durante le verifiche.

Scelte operative: una registrazione per job solo nella sintesi finale, identità del record indipendente dal titolo; retry restituisce la registrazione esistente senza nuovo commit. Le integrazioni sono patch testuali esatte sulle pagine tematiche già consultate: fonte e record preservati, metadati e stato approvazione non modificabili; commit unico con indici e grafo. Le alternative sono sola deduplicazione per titolo (già insufficiente in3239) oppure sostituzione libera delle pagine (troppo ampia). Si mantiene il writer Git esistente e si aggiungono solo i controlli e il percorso di integrazione necessari.

- [x] Riprodurre doppio record e registrazione anticipata nei test, poi correggere prepareWrite/prepareWikiCommit in runtime/wiki-access.mjs.
- [x] Testare patch esatta, conflitto, link nuovi, pagine protette e commit atomico; aggiungere integrazione al writer e al tool Architetto. Campo integrations_json = array di {path,old_text,new_text}, massimo3 pagine. Percorsi: wiki/components, wiki/concepts, wiki/decisions; nuove pagine tematiche non create implicitamente. Fonte originale dalla richiesta del workflow, non inventata dal modello.
- [x] Preparare MCP Client Tool per schemi n8n con soli search_nodes/get_node_types/validate_node_config/validate_workflow. Non collegare credenziali estranee o inventate: manca credenziale MCP dell'istanza e l'URL esatto è da confermare.
- [x] Test unitari, configurazioni validate live, collaudo n8n del writer con HTTP simulato e prova reale idempotente, senza effetti Telegram. Aggiornare GitHub e Notion con risultati effettivi.

Rischi da verificare: stesso job con titolo diverso; phase/job controllati dal chiamante; patch basata su testo obsoleto; frontmatter protetto; wikilink contenuti nei blocchi aggiornati e grafo coerente; concorrenti respinti dal force:false; retry non deve ripetere integrazioni.

Ruling: collegamento MCP preparato ma non applicato senza credenziale. Non sostituire account/credenziali di altri servizi. Limite residuo dichiarato nella scheda Notion.
Esiti:29testJS;3828/3830/3831 simulazioni;3833 omette patch, corretto messaggio fase finale e campo esplicito;3866integra+retry,3893rilettura200. Review: bug prefisso job corretto negli embedded; minor: una lettura di target indisponibile in retry può restituire unavailable prima della dedup, senza doppia scrittura. Preesistenti tre warning builtInTools su ramo API non selezionato, non modificati in questo intervento.
