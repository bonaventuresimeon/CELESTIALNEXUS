import {pages} from '@/lib/content';
export default function sitemap(){const origin=process.env.NEXT_PUBLIC_SITE_URL||'https://celestialnexus-global.jayiwus.chatgpt.site';return ['',...Object.keys(pages),'docs','roadmap','status','pricing','contact'].map(p=>({url:origin+'/'+p,changeFrequency:'monthly' as const,priority:p===''?1:.6}))}
