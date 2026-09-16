import test from 'node:test';
import assert from 'node:assert/strict';
import {pages,navGroups,products,docTopics} from '../lib/content.ts';
const special=new Set(['docs','roadmap','status','pricing','contact']);
test('every navigation and product destination resolves',()=>{for(const items of Object.values(navGroups))for(const[,path]of items)assert.ok(pages[path.slice(1)]||special.has(path.slice(1)),path);for(const[,,path]of products)assert.ok(pages[path]||special.has(path),path)});
test('every documentation topic has a real page',()=>{for(const t of docTopics)assert.ok(pages['docs/'+t.toLowerCase().replaceAll(' ','-')])});
test('legal notices remain explicit drafts',()=>{const entries=Object.entries(pages).filter(([p])=>p.startsWith('legal/'));assert.equal(entries.length,9);for(const[,p]of entries)assert.match(p.eyebrow,/DRAFT/) });
test('AWS architecture and financial claims retain evidence boundaries',()=>{assert.match(pages['technology/aws'].intro,/No active AWS deployment/);assert.match(pages['responsible-ai'].intro,/do not guarantee/);assert.match(pages.platform.sections.at(-1).body,/ROADMAP/)});
test('source review distinguishes implemented code and deployment',()=>{assert.match(pages['technology/architecture'].intro,/source structure/);assert.match(pages.platform.intro,/real implementation/);assert.match(pages['platform/evidence'].intro,/ten supplied/)});
