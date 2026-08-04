import type { ReactNode } from 'react';import Image from 'next/image';
function ServiceIcon({ slug }: { slug: string }) {
  const icons: Record<string, ReactNode> = {
    'local-moving': (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10.5V20h13v-9.5" />
        <path d="M9.5 20v-6h5v6" />
      </>
    ),

    'long-distance-moving': (
      <>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </>
    ),

    'commercial-moving': (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
        <path d="M10 21v-3h4v3" />
      </>
    ),

    'office-moving': (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </>
    ),

    'packing-services': (
      <>
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="M4 7v10l8 4 8-4V7" />
        <path d="M12 11v10" />
        <path d="m8 5 8 4" />
      </>
    ),

    'labor-services': (
      <>
        <path d="M5 3h3l3 13h8" />
        <path d="M9 7h9v7h-7" />
        <circle cx="12" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
      </>
    ),
  };

  return (
    <div className="serviceIcon" aria-hidden="true">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[slug] ?? icons['local-moving']}
      </svg>
    </div>
  );
}
import Link from 'next/link';
import { cityName, gallery, services, site } from '@/lib/site';
import { serviceSchema } from '@/lib/schema';
import { TrackingLink } from './TrackingButton';
import QuoteForm from './QuoteForm';

export function PhotoGallery(){return <section className="section black"><div className="container center"><p className="eyebrow">Our Moving in Action</p><h2>Real Moves. Real Care.</h2><div className="gallery">{gallery.slice(0,10).map((g,i)=><Image key={g.src} src={g.src} alt={g.alt} width={420} height={280} sizes="(max-width:768px) 50vw, 18vw" loading={i<2?'eager':'lazy'}/>)}</div></div></section>}
export function ServiceCards() {
  return (
    <section className="section">
      <div className="container center">
        <p className="eyebrow darkText">Our Services</p>
        <h2>Complete Moving Solutions</h2>
        <p className="muted">
          No job is too big or too small. We handle it all with care.
        </p>

        <div className="serviceGrid">
          {services.slice(0, 6).map((service) => (
            <Link
              className="serviceCard"
              key={service.slug}
              href={`/${service.slug}`}
            >
              <ServiceIcon slug={service.slug} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span>Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Benefits(){return <section className="benefitStrip"><div className="container benefits"><div><b>Licensed & Insured</b><p>Your belongings are safe with full protection.</p></div><div><b>Experienced Team</b><p>Trained, professional movers who care.</p></div><div><b>Transparent Pricing</b><p>No hidden fees, ever.</p></div><div><b>Dependable Scheduling</b><p>Clear communication before moving day.</p></div></div></section>}
export function BottomCTA(){return <section className="bottomCta"><div className="container bottomGrid"><div><b>Need help now?</b><a href={site.phoneHref}>{site.phone}</a><span>Call us anytime</span></div><div><b>Book your move online</b><p>Secure • Fast • Easy</p><TrackingLink href={site.bookingUrl} target="_blank" event="book_now_click" location="bottom_cta" className="btn dark">Book Now</TrackingLink></div><div><b>Get a free quote</b><p>No obligation estimate</p><Link href="/contact" className="btn dark">Get My Quote</Link></div></div></section>}
export function AutoReplyBlock(){return <section className="section alt"><div className="container"><div className="replyCard"><h2>Local Move Auto-Reply</h2><p>After a customer submits a local quote request, the website can show this automatic response and track the quote conversion in GA4/GTM.</p><div className="replyText">Thank you for considering A2 Moving for your upcoming move. Our local moving rates start at $119/hour for 2 movers, $159/hour for 3 movers, and $199/hour for 4 movers, plus a one-time $50 fuel charge. All jobs have a 3-hour minimum. Our pricing includes the truck, blankets, plastic wrap, tools, dollies, tape, basic furniture disassembly/reassembly, and liability coverage. No hidden fees.</div></div></div></section>}
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
const serviceContent: Record<string, { heading: string; body: string }> = {
  'Local Moving': {
    heading: 'Local Movers in Long Beach',
    body: 'A2 Moving handles apartment, condo and home moves throughout Long Beach. We plan for parking, elevators, stairs and building access, then protect furniture and home surfaces during loading and delivery.',
  },
  'Long Distance Moving': {
    heading: 'Long Distance Movers from Long Beach',
    body: 'Our long-distance moving team coordinates pickup, furniture protection, transportation and delivery beyond the Long Beach area. Customers receive clear communication about access, scheduling and destination details before moving day.',
  },
  'Commercial Moving': {
    heading: 'Commercial Movers for Long Beach Businesses',
    body: 'A2 Moving relocates offices, retail spaces and other businesses with organized handling for furniture, equipment and inventory. We plan loading order and access details to help limit disruption during the relocation.',
  },
  'Residential Moving': {
    heading: 'Residential Movers for Homes and Apartments',
    body: 'Our residential movers serve houses, apartments and condos with moving trucks, blankets, dollies and protective supplies. We prepare for stairs, elevators, long carries and furniture disassembly before the crew begins loading.',
  },
  'Heavy Items Moving': {
    heading: 'Furniture and Heavy Item Movers in Long Beach',
    body: 'A2 Moving provides furniture moving and careful handling for safes, appliances and oversized household items. Item weight, dimensions, stairs and access should be shared before the move so the right crew and equipment can be scheduled.',
  },
};

export function ServicePage({title, keyword, desc}:{title:string; keyword:string; desc:string}){
  const related = services.filter(s=>s.title!==title).slice(0,5);
  const included = includedByService[title] || [];
  const serviceSlug = services.find((service) => service.title === title)?.slug;
  const serviceUrl = serviceSlug ? `${site.url}/${serviceSlug}` : site.url;
  const schema = serviceSchema(title, desc, serviceUrl);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g, '\\u003c')}}/><section className="serviceHero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / {title}</div><p className="eyebrow">A2 Moving Service</p><h1>{title}</h1><p>{desc} Our trained movers protect furniture, floors, walls and doorways while keeping your move organized from start to finish.</p><div className="herocta"><TrackingLink href={site.bookingUrl} target="_blank" event="book_now_click" location={`${keyword}_service_page`} className="btn gold big">Book Your Move Online</TrackingLink><TrackingLink href={site.phoneHref} event="phone_click" location={`${keyword}_service_page`} className="btn outline big">Call Now {site.phone}</TrackingLink></div></div></section><section className="section"><div className="container grid2"><div className="contentBlock"><h2>{serviceContent[title]?.heading ?? keyword}</h2><p className="muted">{serviceContent[title]?.body ?? 'A2 Moving helps customers with careful planning, professional equipment and clear communication. Our moving crews bring blankets, dollies, tools and wrap to protect belongings during the move.'}</p><h2>What is included</h2><ul>
  {included.map((item) => (
    <li key={item}>{item}</li>
  ))}
</ul><h2>Related services</h2><div className="pillLinks">{related.map(s=><Link key={s.slug} href={`/${s.slug}`}>{s.title}</Link>)}</div></div><QuoteForm/></div></section><PhotoGallery/><BottomCTA/></>
}

const cityDetails: Record<string, {
  intro: string;
  logistics: string;
  nearby: string[];
}> = {
  'cerritos-movers': {
    intro:
      'A2 Moving serves Cerritos homes, apartments and businesses with professional crews, moving trucks and protective supplies. We plan each move around building access, parking, elevators and the distance between locations.',
    logistics:
      'Cerritos moves can involve planned neighborhoods, townhomes, busy commercial areas and access near the 91 and 605 freeways. Sharing gate instructions, loading rules and parking details before moving day helps the crew arrive prepared.',
    nearby: ['Artesia', 'Norwalk', 'Lakewood', 'La Palma'],
  },
  'rancho-palos-verdes-movers': {
    intro:
      'A2 Moving provides residential, long-distance, packing and labor services throughout Rancho Palos Verdes and the Palos Verdes Peninsula. Our crews protect furniture and home surfaces while planning carefully for property access.',
    logistics:
      'Hillside streets, stairs, long driveways and gated properties can affect truck access and loading time in Rancho Palos Verdes. We review access details before the move and bring the equipment needed for careful handling.',
    nearby: ['Palos Verdes Estates', 'Rolling Hills Estates', 'Rolling Hills', 'San Pedro'],
  },
  'rolling-hills-estates-movers': {
    intro:
      'A2 Moving helps Rolling Hills Estates residents relocate homes, apartments and offices with trained movers, professional equipment and careful furniture protection.',
    logistics:
      'Moves on the Palos Verdes Peninsula may include hills, private roads, gates, stairs and longer carries between the home and truck. Advance access information helps us plan the right crew and equipment.',
    nearby: ['Rancho Palos Verdes', 'Palos Verdes Estates', 'Rolling Hills', 'Torrance'],
  },
  'san-marino-movers': {
    intro:
      'A2 Moving serves San Marino with local moving, long-distance moving, packing and labor assistance for homes and businesses. We focus on careful handling, clear communication and organized loading from start to finish.',
    logistics:
      'Established residential streets, larger homes, delicate furniture and driveway access can require additional planning in San Marino. Customers can share parking, stair and specialty-item details in advance so the crew is prepared.',
    nearby: ['Pasadena', 'Alhambra', 'South Pasadena', 'Arcadia'],
  },
};

export function CityPage({city}:{city:string}){
  const name = cityName(city);
  const details = cityDetails[city];
  const intro = details?.intro ??
    `A2 Moving provides professional local, long-distance, commercial, packing and labor-only moving services in ${name}, CA and nearby communities.`;

  return <><section className="serviceHero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / {name} Movers</div><p className="eyebrow">Southern California Movers</p><h1>{name} Movers</h1><p>{intro}</p><div className="herocta"><TrackingLink href={site.bookingUrl} target="_blank" event="book_now_click" location={`${city}_city_page`} className="btn gold big">Book Your Move Online</TrackingLink><TrackingLink href={site.phoneHref} event="phone_click" location={`${city}_city_page`} className="btn outline big">Call Now {site.phone}</TrackingLink></div></div></section><section className="section"><div className="container grid2"><div><h2>Moving Services in {name}</h2><p className="muted">Whether you are moving from an apartment, home, office or storage unit, A2 Moving offers trained movers, reliable trucks and professional moving supplies to make your move easier.</p><div className="pillLinks">{services.slice(0,8).map(s=><Link key={s.slug} href={`/${s.slug}`}>{s.title}</Link>)}</div>{details && <><h2>Planning a Move in {name}</h2><p className="muted">{details.logistics}</p><h2>Nearby Areas We Serve</h2><p className="muted">{details.nearby.join(', ')}</p></>}<h2>Why choose A2 Moving?</h2><ul><li>Local and long-distance moving</li><li>Commercial, office and residential moves</li><li>Professional packing and furniture protection</li><li>Clear communication and online booking</li></ul></div><QuoteForm/></div></section><ServiceCards/><BottomCTA/></>
}
