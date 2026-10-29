---
id: "wiki/implementation/wiki-integration"
title: "Registrazione unica e integrazione tematica"
kind: "implementation"
status: "configured"
version: "0.0.2"
updated: "2026-10-29"
---

# Registrazione unica e integrazione tematica

Registra wiki resta un tool di Architetto nel solo orchestratore ufficiale H9035WWxnJqodZFq. Non è un passaggio obbligatorio per leggere documenti o proseguire il confronto.

## Unicità e fase

Il chiamante fissa ruolo, job_id, phase e richiesta originale. Soltanto la fase finale può pubblicare. Un compito ha una sola sintesi persistente, wiki/records/{job_id}-summary.md, indipendente dal titolo. Ripetere una chiamata di conferma è consentito e restituisce already_registered senza un altro commit, senza applicare nuove integrazioni. I record storici non vengono rimossi. Le scritture concorrenti usano genitore fissato e force:false: il conflitto non sovrascrive una versione più recente.

## Integrazione

Architetto legge le pagine pertinenti con Wiki e propone una sintesi tramite integrations_json, sempre esplicito: [] per nessuna integrazione; altrimenti massimo tre oggetti con path, old_text e new_text. I percorsi ammessi sono pagine tematiche esistenti sotto wiki/components, wiki/concepts e wiki/decisions, con stato proposed/configured/prepared. Non vengono create automaticamente nuove pagine tematiche e non sono modificabili regole, identità, release, fonti storiche o schede approvate.

old_text deve essere presente una sola volta nel corpo della pagina, fuori dal frontmatter e dal titolo principale. Il tool sostituisce soltanto quel passaggio, conserva metadati e titolo e aggiunge provenienza e stato proposto dell'integrazione. Il modello decide la sintesi; il codice verifica percorso, corrispondenza del testo, link e confini di scrittura. Non è una deduplicazione semantica universale.

La richiesta originale viene conservata in raw/ingest/{job_id}.md. Un solo albero Git contiene fonte, record, eventuali pagine integrate, manifest, indice, log e grafo. I collegamenti delle pagine toccate e i backlink vengono ricostruiti, rimuovendo quelli non più presenti nel testo. Un testo obsoleto/ambiguo, documento indisponibile o link non censito restituisce errore non bloccante senza pubblicazioni parziali.

## Verifiche e confini

Prove n8n3828 (integrazione atomica con API simulate),3830 (retry senza nodi di creazione/pubblicazione Git),3831 (fase anticipata respinta). Collaudo reale3833: sette contributi e una sola registrazione; le tre scritture anticipate sono respinte, ma il modello omette la patch finale. Corretti il messaggio della fase finale, la distinzione tra retry e nuova scrittura e l'obbligo di specificare integrations_json. Collaudo3866 riuscito: sette contributi, patch pubblicata nel commit c8f5e371daed4d710759e7c61438ed25f4c6fd3f e retry already_registered senza secondo commit; rilettura3893 HTTP200 da nuovo job. Dettagli in [[wiki/verification/v002]].29testJS passati.

Lo snapshot di lettura del job resta invariato dopo una scrittura. Le nuove esecuzioni leggono il nuovo commit. Non è stato scelto un sistema di memoria durevole. Riferimenti: [[wiki/operations/ingest]], [[wiki/skills/wiki-maintenance]], [[wiki/implementation/wiki-access]].

## Accesso agli schemi n8n

Le skill non concedono accesso API. Non è presente una credenziale MCP n8n utilizzabile dai bot: perciò Costruttore non ha ancora un tool live di configurazione/validazione. runtime/n8n-schema-tool.pending.json è una configurazione preparata e validata staticamente con l'istanza, non collegata. Endpoint da confermare e credenziale bearer MCP da selezionare in n8n. Le sole capacità previste sono search_nodes, get_node_types, validate_node_config e validate_workflow; i nomi effettivi devono essere verificati tramite tools/list prima del collegamento. Nessun accesso di modifica o pubblicazione n8n viene aggiunto implicitamente.
