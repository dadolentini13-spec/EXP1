---
id: "wiki/skills/prompt-design"
title: "Skill prompt: contratti, esempi e valutazione"
kind: "skill"
status: "configured"
version: "0.0.2"
updated: "2026-10-28"
---

# Skill prompt: contratti, esempi e valutazione

Usare per scrivere o semplificare un prompt. Definire prima obiettivo, input disponibili, output e criteri di accettazione. Separare istruzioni da dati esterni, dare esempi rappresentativi e casi incerti, ridurre duplicazioni e istruzioni contraddittorie. Per classificazione usare valori ammessi e un esito sconosciuto/misto; la validazione esterna impone schema e permessi. Le percentuali dichiarate dal modello non sono accuratezza misurata.

Confrontare varianti sullo stesso insieme di casi. Non dichiarare miglioramenti senza prove. Adattare esempi e tecniche al modello e agli strumenti reali. Se serve approfondire una fonte non disponibile, dichiararlo e continuare con la documentazione letta.

Riferimenti da consultare secondo il caso: [OpenAI Cookbook](https://github.com/openai/openai-cookbook), [tutorial Anthropic](https://github.com/anthropics/prompt-eng-interactive-tutorial), [DAIR Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide). Questa è una sintesi operativa del progetto, non una copia né una certificazione delle repository.

Vedi [[wiki/sources/references]] e [[wiki/skills/catalog]].

## Consultazione delle fonti tramite tool Skill
Usare modalità skill e skill_id `prompt-design/openai` per la guida GPT-5.2, `prompt-design/anthropic` per chiarezza delle istruzioni, `prompt-design/dair` per principi di base. Le revisioni sono fissate in runtime/prompt-sources.json. Il tool restituisce solo testo Markdown dai notebook, senza eseguirli. Le guide specifiche di un modello non costituiscono regole universali: adattare al modello effettivo ed evitare tecniche superate.
