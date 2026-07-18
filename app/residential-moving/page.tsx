import type { Metadata } from 'next';
import { services } from '@/lib/site';
import { ServicePage } from '@/components/PageBlocks';
import { faqSchema } from '@/lib/schema';

const slug = 'residential-moving';
const service = services.find((s) => s.slug === slug)!;

export const metadata: Metadata = {
  title: `${service.keyword} | A2 Moving`,
  description: service.desc,
  alternates: { canonical: `/${service.slug}` },
  openGraph: { title: `${service.keyword} | A2 Moving`, description: service.desc, url: `/${service.slug}`, type: 'website' },
};

export default function Page() {
  const faqs = [{ q: `Do you offer ${service.title.toLowerCase()}?`, a: `Yes. A2 Moving provides ${service.title.toLowerCase()} in Long Beach and Southern California.` }];
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} /><ServicePage title={service.title} keyword={service.keyword} desc={service.desc} /></>;
}
