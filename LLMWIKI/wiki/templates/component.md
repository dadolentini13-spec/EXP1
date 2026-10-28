---
id: "wiki/templates/component"
title: "Modello per componente o consiglio"
kind: "template"
status: "prepared"
version: "0.0.2"
updated: "2026-10-28"
---

# Modello per componente o consiglio

## Identificazione
ID stabile, tipo, ambito principale, versione, stato, autore, fonti e data osservata.

## Esigenza e risultato
Obiettivo, problema, situazione attuale, comportamento desiderato con esempio, confini e criteri verificabili.

## Contratto
Input/output e valori ammessi; dipendenze e componenti riusati; letture/scritture; strumenti e permessi richiesti; approvazioni; errori, ambiguità e duplicazioni.

## Audit e piano
Evidenze disponibili, alternative valide sotto regole comuni, vantaggi/costi, consiglio motivato, decisioni ancora aperte. Non inventare una seconda opzione valida se è incompatibile con un requisito: dichiararlo.

## Consegna e verifica
Prompt e codice con runtime, nodi incollabili e collegamenti se verificati, casi normali/misti/incerti, esiti e prove, limiti e prossimo passo. Separare bozza ed esecuzione.

## Relazioni
requires, depends_on, implements, derived_from, supersedes, verifies; registrare sia il link nella pagina sia gli archi in graph.json. Decisioni con data, approvatore e perimetro esatto.

## Notion
Usare i campi effettivi del database. Prima leggere guida/modello del progetto; priorità e scadenza solo se decise; Motivo obbligatorio per Bloccato/Sospeso. Non cambiare la v0.0.1 per registrare la v0.0.2.

Riferimenti: [[SCHEMA]], [[wiki/common/soul]], [[wiki/project/context]].

