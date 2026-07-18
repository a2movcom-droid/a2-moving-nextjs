import QuoteForm from '@/components/QuoteForm';
import { site } from '@/lib/site';
export const metadata = { title:'Contact A2 Moving', description:'Contact A2 Moving for local, long-distance, commercial and packing services.' };
export default function Page(){return <section className="section"><div className="container grid2"><div><p className="eyebrow darkText">Contact</p><h1 style={{color:'#111'}}>Get a Moving Quote</h1><p className="muted">Call {site.phone} or send your quote request. Book online through Supermove anytime.</p><a className="btn gold" href={site.bookingUrl}>Book Your Move Online</a></div><QuoteForm/></div></section>}
