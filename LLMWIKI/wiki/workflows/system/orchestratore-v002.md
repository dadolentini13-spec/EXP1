---
id: "wiki/workflows/system/orchestratore-v002"
title: "Orchestratore con tool v0.0.2"
kind: "workflow"
status: "configured"
version: "0.0.2"
updated: "2026-10-28"
---

# Orchestratore con tool v0.0.2

ID n8n y6GPjnFOVuronj0z. Nome ESPERIMENTO | Sistema | v0.0.2. Cartella Esperimento, progetto personale di Davide (dado.lentini13@gmail.com). 27 nodi, gruppi Architetto, Costruttore, Revisore e Consegna Telegram.

Catena: messaggio Telegram, stato compito, Architetto → Costruttore → Revisore, due round, Architetto finale e risposta. Sette contributi attesi. Nessun caricamento wiki sulla catena: le porte ai_tool forniscono Wiki e Skill a ciascun agente, Registra wiki soltanto ad Architetto.

Modelli e credenziali già esistenti preservati; Code Interpreter esplicitamente falso. Strumenti di esecuzione Python o modifica n8n assenti. I ruoli possono consegnare codice e configurazioni; la consultazione non aggiunge permessi operativi.

Le istruzioni comuni [[wiki/common/soul]] e le identità [[wiki/agents/architetto/soul]], [[wiki/agents/costruttore/soul]], [[wiki/agents/revisore/soul]] sono incluse nel deployment. Aggiornare un file identità in GitHub non modifica automaticamente il prompt salvato in n8n: occorre una revisione del deployment.

Stato inattivo, nessuna attivazione Telegram eseguita. Prova 3125 con agenti e invio simulati verifica la catena di sette contributi, non la qualità dei modelli o le loro scelte di tool. Vedi [[wiki/verification/v002]] e [[wiki/implementation/wiki-access]].

## Accesso Telegram
Il mittente viene controllato prima dei modelli e dei tool. Solo chat privata e ID utente esplicitamente autorizzato; runtime/deployment.json contiene l’ID 5218311620 fornito da Davide e riportato anche nel controllo n8n. Questo controllo di accesso è distinto dalla consultazione non bloccante dei documenti.

## Verifica successiva del contesto
Esecuzione3163: le istruzioni comuni e le identità arrivano ai tre nodi Contesto; ciclo completo simulato con ID di Davide autorizzato. Questo verifica la composizione degli input, non la comprensione dei modelli né la loro scelta dei tool. Il contenuto individuale coincide con i tre soul.md della wiki. I file sono copiati nelle istruzioni al deployment: la loro modifica su GitHub non aggiorna automaticamente le istruzioni salvate in n8n.
