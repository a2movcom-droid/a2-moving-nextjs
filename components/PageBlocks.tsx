import Image from 'next/image';
import Link from 'next/link';
import { cityName, gallery, services, site } from '@/lib/site';
import { TrackingLink } from './TrackingButton';
import QuoteForm from './QuoteForm';

export function PhotoGallery(){return <section className="section black"><div className="container center"><p className="eyebrow">Our Moving in Action</p><h2>Real Moves. Real Care.</h2><div className="gallery">{gallery.slice(0,10).map((g,i)=><Image key={g.src} src={g.src} alt={g.alt} width={420} height={280} sizes="(max-width:768px) 50vw, 18vw" loading={i<2?'eager':'lazy'}/>)}</div></div></section>}
export function ServiceCards(){return <section className="section"><div className="container center"><p className="eyebrow darkText">Our Services</p><h2>Complete Moving Solutions</h2><p className="muted">No job is too big or too small. We handle it all with care.</p><div className="serviceGrid">{services.slice(0,6).map(s=><Link className="serviceCard" key={s.slug} href={`/${s.slug}`}><div className="serviceIcon">▣</div><h3>{s.title}</h3><p>{s.desc}</p><span>Learn More →</span></Link>)}</div></div></section>}
export function Benefits(){return <section className="benefitStrip"><div className="container benefits"><div><b>Licensed & Insured</b><p>Your belongings are safe with full protection.</p></div><div><b>Experienced Team</b><p>Trained, professional movers who care.</p></div><div><b>Transparent Pricing</b><p>No hidden fees, ever.</p></div><div><b>On-Time Guarantee</b><p>We value your time and schedule.</p></div></div></section>}
export function BottomCTA(){return <section className="bottomCta"><div className="container bottomGrid"><div><b>Need help now?</b><a href={site.phoneHref}>{site.phone}</a><span>Call us anytime</span></div><div><b>Book your move online</b><p>Secure • Fast • Easy</p><TrackingLink href={site.bookingUrl} target="_blank" event="book_now_click" location="bottom_cta" className="btn dark">Book Now</TrackingLink></div><div><b>Get a free quote</b><p>No obligation estimate</p><Link href="/contact" className="btn dark">Get My Quote</Link></div></div></section>}
export function AutoReplyBlock(){return <section className="section alt"><div className="container"><div className="replyCard"><h2>Local Move Auto-Reply</h2><p>After a customer submits a local quote request, the website can show this automatic response and track the quote conversion in GA4/GTM.</p><div className="replyText">Thank you for considering A2 Moving for your upcoming move. Our local moving rates start at $119/hour for 2 movers, $159/hour for 3 movers, and $199/hour for 4 movers, plus a one-time $50 fuel charge. All jobs have a 3-hour minimum. Our pricing includes the truck, blankets, plastic wrap, tools, dollies, tape, basic furniture disassembly/reassembly, and liability coverage. No hidden fees.</div></div></div></section>}
export function ServicePage
  const includedByService: Record<string, string[]> = {
  'Local Moving': [
    'Professional moving crew',
    'Clean moving truck and equipment',
    'Moving blankets, dollies and tools',
    'Basic furniture disassembly and reassembly',
    'Furniture and home surface protection',
  ],

  'Long Distance Moving': [
    'Professional long-distance moving crew',
    'Moving truck and transportation',
    'Furniture wrapping and protection',
    'Loading and unloading',
    'Move coordination from pickup to delivery',
  ],

  'Commercial Moving': [
    'Experienced commercial moving crew',
    'Business furniture and equipment handling',
    'Loading and unloading',
    'Furniture protection',
    'Organized commercial relocation support',
  ],

  'Office Moving': [
    'Professional office moving crew',
    'Desk and workstation handling',
    'Office furniture and equipment moving',
    'Basic disassembly and reassembly',
    'Organized loading, transportation and unloading',
  ],

  'Packing Services': [
    'Professional packing assistance',
    'Full or partial packing options',
    'Furniture wrapping and protection',
    'Kitchen and household item packing',
    'Unpacking assistance when requested',
  ],

  'Labor Services': [
    'Professional moving labor crew',
    'Loading and unloading assistance',
    'Furniture moving and rearranging',
    'Rental truck, container and storage unit loading',
    'Basic furniture disassembly and reassembly',
    'Truck and transportation not included',
  ],

  'Piano Moving': [
    'Experienced piano moving crew',
    'Careful wrapping and protection',
    'Specialized moving equipment',
    'Careful loading and unloading',
    'Handling for upright, baby grand and grand pianos',
  ],

  'Heavy Items Moving': [
    'Experienced heavy-item moving crew',
    'Specialized moving equipment',
    'Careful item protection',
    'Loading and unloading assistance',
    'Handling for oversized and heavy items',
  ],

  'Apartment Moving': [
    'Professional moving crew',
    'Moving truck and equipment',
    'Furniture protection',
    'Stair and elevator move assistance',
    'Basic furniture disassembly and reassembly',
  ],

  'Residential Moving': [
    'Professional residential moving crew',
    'Moving truck and equipment',
    'Moving blankets and protective supplies',
    'Loading and unloading',
    'Basic furniture disassembly and reassembly',
  ],
};
export function ServicePage({title, keyword, desc}:{title:string; keyword:string; desc:string}){
  const related = services.filter(s=>s.title!==title).slice(0,5);
  const included = includedByService[title] || [];
  return <><section className="serviceHero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / {title}</div><p className="eyebrow">A2 Moving Service</p><h1>{title}</h1><p>{desc} Our trained movers protect furniture, floors, walls and doorways while keeping your move organized from start to finish.</p><div className="herocta"><TrackingLink href={site.bookingUrl} target="_blank" event="book_now_click" location={`${keyword}_service_page`} className="btn gold big">Book Your Move Online</TrackingLink><TrackingLink href={site.phoneHref} event="phone_click" location={`${keyword}_service_page`} className="btn outline big">Call Now {site.phone}</TrackingLink></div></div></section><section className="section"><div className="container grid2"><div className="contentBlock"><h2>{keyword}</h2><p className="muted">A2 Moving helps customers with careful planning, professional equipment and clear communication. Our local moving crews bring blankets, dollies, tools and wrap to protect your belongings during the move.</p><h2>What is included</h2><ul>
  {included.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul><h2>Related services</h2><div className="pillLinks">{related.map(s=><Link key={s.slug} href={`/${s.slug}`}>{s.title}</Link>)}</div></div><QuoteForm/></div></section><PhotoGallery/><BottomCTA/></>
}

export function CityPage({city}:{city:string}){
  const name = cityName(city);
  return <><section className="serviceHero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / {name} Movers</div><p className="eyebrow">Southern California Movers</p><h1>{name} Movers</h1><p>A2 Moving provides professional local, long-distance, commercial, packing and labor-only moving services in {name}, CA and nearby communities.</p><div className="herocta"><TrackingLink href={site.bookingUrl} target="_blank" event="book_now_click" location={`${city}_city_page`} className="btn gold big">Book Your Move Online</TrackingLink><TrackingLink href={site.phoneHref} event="phone_click" location={`${city}_city_page`} className="btn outline big">Call Now {site.phone}</TrackingLink></div></div></section><section className="section"><div className="container grid2"><div><h2>Moving Services in {name}</h2><p className="muted">Whether you are moving from an apartment, home, office or storage unit, A2 Moving offers trained movers, reliable trucks and professional moving supplies to make your move easier.</p><div className="pillLinks">{services.slice(0,8).map(s=><Link key={s.slug} href={`/${s.slug}`}>{s.title}</Link>)}</div><h2>Why choose A2 Moving?</h2><ul><li>Local and long-distance moving</li><li>Commercial, office and residential moves</li><li>Professional packing and furniture protection</li><li>Clear communication and online booking</li></ul></div><QuoteForm/></div></section><ServiceCards/><BottomCTA/></>
}
