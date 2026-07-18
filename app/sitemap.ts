import { services, cities, site } from '@/lib/site';
export default function sitemap(){const now=new Date();return ['',...services.map(s=>s.slug),...cities].map(path=>({url:`${site.url}/${path}`.replace(/\/$/,'/'),lastModified:now,changeFrequency:'weekly' as const,priority:path===''?1:0.8}))}
