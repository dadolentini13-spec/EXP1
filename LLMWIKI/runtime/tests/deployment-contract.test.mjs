import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const root=new URL('../',import.meta.url);
const read=name=>JSON.parse(fs.readFileSync(new URL(name,root),'utf8'));
test('official workflow has enough iterations for the observed twelve-read consultation and its final response',()=>{const w=read('orchestratore-v002.workflow.json');for(const n of w.nodes.filter(n=>n.type==='@n8n/n8n-nodes-langchain.agent'))assert.ok(n.parameters.options.maxIterations>12,`${n.name} cannot complete after twelve tool reads`);});
test('official workflow and tools refer to the original orchestrator identity',()=>{const w=read('orchestratore-v002.workflow.json');assert.equal(w.id,'H9035WWxnJqodZFq');const writer=read('writer.workflow.json');assert.equal(writer.settings.callerIds,w.id);const reader=read('reader.workflow.json');assert.ok(reader.settings.callerIds.split(',').includes(w.id));assert.ok(!reader.settings.callerIds.split(',').includes('y6GPjnFOVuronj0z'));});
