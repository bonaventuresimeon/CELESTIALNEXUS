import {z} from 'zod';
const responseSchema=z.object({success:z.literal(true),result:z.array(z.object({success:z.literal(true),meta:z.object({changes:z.number()}),results:z.array(z.record(z.unknown())).optional()})).min(1)});
// Server-only compatibility adapter for the existing D1 schema on Vercel.
// Never expose these environment variables through NEXT_PUBLIC_*.
class Statement {
 private sql:string; private params:unknown[];
 constructor(sql:string,params:unknown[]=[]){this.sql=sql;this.params=params}
 bind(...params:unknown[]){return new Statement(this.sql,params)}
 async run(){
 const account=process.env.CLOUDFLARE_ACCOUNT_ID, id=process.env.CLOUDFLARE_D1_DATABASE_ID, token=process.env.CLOUDFLARE_D1_API_TOKEN;
 if(!account||!id||!token)throw new Error('Enquiry database is not configured');
 const response=await fetch(`https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(account)}/d1/database/${encodeURIComponent(id)}/query`,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify({sql:this.sql,params:this.params}),cache:'no-store',signal:AbortSignal.timeout(10000)});
 if(!response.ok)throw new Error('Database request failed');
 const data=responseSchema.parse(await response.json());return data.result[0];
 }
 async first(){const data=await this.run();return data.results?.[0]??null}
}
export const env={DB:{prepare(sql:string){return new Statement(sql)}}};
