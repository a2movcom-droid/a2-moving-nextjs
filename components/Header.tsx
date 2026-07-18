import Link from 'next/link';
import { site } from '@/lib/site';
import { TrackingLink } from './TrackingButton';

export default function Header(){
  return <header className="header"><div className="nav container">
    <Link className="logoMark" href="/" aria-label="A2 Moving home"><span>A2</span><b>MOVING</b></Link>
    <nav className="navlinks" aria-label="Main navigation">
      <Link href="/local-moving">Services</Link><Link href="/long-beach-movers">Service Areas</Link><Link href="/about-us">About</Link><Link href="/reviews">Reviews</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link>
    </nav>
    <div className="navcta"><TrackingLink href={site.phoneHref} event="phone_click" location="header" className="phoneCta">☎ <span>{site.phone}<small>Call Us Anytime</small></span></TrackingLink><TrackingLink href={site.bookingUrl} target="_blank" event="book_now_click" location="header" className="btn gold">Book Your Move</TrackingLink></div>
  </div></header>
}
