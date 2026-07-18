import Link from 'next/link';
import { site, services, cities, cityName } from '@/lib/site';
import { TrackingLink } from './TrackingButton';

export default function Footer(){return <>
  <section className="stickyCtas" aria-label="Quick actions"><TrackingLink href={site.phoneHref} event="phone_click" location="sticky_mobile_footer" className="stickyBtn dark">Call Now</TrackingLink><TrackingLink href={site.bookingUrl} target="_blank" event="book_now_click" location="sticky_mobile_footer" className="stickyBtn gold">Book Now</TrackingLink></section>
  <footer className="footer"><div className="container footergrid"><div><div className="logoMark bigLogo"><span>A2</span><b>MOVING</b></div><p>A2 Moving provides professional local, long-distance, commercial, packing and labor-only moving services throughout Southern California.</p><p>USDOT 3109378 | CA 524862 | MTR 0191750</p><TrackingLink href={site.phoneHref} event="phone_click" location="footer" className="footerphone">{site.phone}</TrackingLink></div><div><h3>Services</h3>{services.slice(0,7).map(s=><Link key={s.slug} href={`/${s.slug}`}>{s.title}</Link>)}</div><div><h3>Areas</h3>{cities.slice(0,7).map(c=><Link key={c} href={`/${c}`}>{cityName(c)} Movers</Link>)}</div><div><h3>Book</h3><TrackingLink href={site.bookingUrl} target="_blank" event="book_now_click" location="footer" className="btn gold">Book Online</TrackingLink><Link href="/contact">Get a Quote</Link><Link href="/faq">FAQ</Link></div></div></footer>
</>}
