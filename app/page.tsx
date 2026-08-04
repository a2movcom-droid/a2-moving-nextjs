import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import QuoteForm from '@/components/QuoteForm';
import { Benefits, BottomCTA, PhotoGallery, ServiceCards } from '@/components/PageBlocks';
import { cities, cityName, site } from '@/lib/site';
import { localBusinessSchema, faqSchema } from '@/lib/schema';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Long Beach Moving Services | A2 Moving',
  description: 'Professional Long Beach movers for local, long-distance, residential and commercial moves, plus packing and labor-only moving services.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Long Beach Moving Services | A2 Moving', description: 'Professional local, long-distance, residential and commercial movers in Long Beach, CA.', url: site.url, type: 'website', images:['/images/move-14.webp'] }
};
const faqs = [
  {q:'Do you provide local moving in Long Beach?',a:'Yes. A2 Moving provides local moving for homes, apartments, offices and businesses throughout Long Beach and nearby cities.'},
  {q:'Can I book online?',a:'Yes. Use the Book Now button to open our Supermove booking form and request your move online.'},
  {q:'Do you offer packing and labor-only services?',a:'Yes. We offer packing, unpacking, loading, unloading and labor-only moving services.'}
];
export default function Home(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(localBusinessSchema())}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema(faqs))}}/><Hero/><PhotoGallery/><Benefits/><ServiceCards/><section className="section alt"><div className="container grid2"><div><p className="eyebrow darkText">Service Areas</p><h2>Movers Across Southern California</h2><p className="muted">Explore A2 Moving service areas across Southern California and find local moving information for your city.</p><div className="cityLinks">{cities.map(c=><Link key={c} href={`/${c}`}>{cityName(c)} Movers</Link>)}</div></div><QuoteForm/></div></section><section className="section"><div className="container faq"><h2>Moving FAQ</h2>{faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section><BottomCTA/></>}
