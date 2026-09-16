import test from 'node:test';
import assert from 'node:assert/strict';
import {env} from '../lib/vercel-cloudflare.ts';

test('Vercel adapter fails closed without storage configuration',async()=>{
 const keys=['CLOUDFLARE_ACCOUNT_ID','CLOUDFLARE_D1_DATABASE_ID','CLOUDFLARE_D1_API_TOKEN'];const old=keys.map(k=>process.env[k]);keys.forEach(k=>delete process.env[k]);
 try{await assert.rejects(env.DB.prepare('SELECT 1').run(),/not configured/)}finally{keys.forEach((k,i)=>{if(old[i]!==undefined)process.env[k]=old[i]})}
});
test('Vercel adapter binds data separately and rejects upstream failures',async()=>{
 const old=globalThis.fetch;const keys=['CLOUDFLARE_ACCOUNT_ID','CLOUDFLARE_D1_DATABASE_ID','CLOUDFLARE_D1_API_TOKEN'];const previous=keys.map(k=>process.env[k]);keys.forEach(k=>process.env[k]='test');
 try{
 globalThis.fetch=async(url,opts)=>{assert.equal(opts.cache,'no-store');assert.deepEqual(JSON.parse(opts.body),{sql:'SELECT ? AS value',params:["x'; DROP TABLE enquiries;--"]});return Response.json({success:true,result:[{success:true,meta:{changes:0},results:[{value:'safe'}]}]})};
 assert.deepEqual(await env.DB.prepare('SELECT ? AS value').bind("x'; DROP TABLE enquiries;--").first(),{value:'safe'});
 globalThis.fetch=async()=>new Response('Unavailable',{status:503});await assert.rejects(env.DB.prepare('SELECT 1').run(),/request failed/);
 globalThis.fetch=async()=>Response.json({success:false,errors:[]});await assert.rejects(env.DB.prepare('SELECT 1').run());
 }finally{globalThis.fetch=old;keys.forEach((k,i)=>{if(previous[i]===undefined)delete process.env[k];else process.env[k]=previous[i]})}
});
