'use client';
import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { site } from '@/lib/site';

const reply = `Thank you for considering A2 Moving for your upcoming move. Our local moving rates start at $119/hour for 2 movers, $159/hour for 3 movers, and $199/hour for 4 movers, plus a one-time $50 fuel charge. All jobs have a 3-hour minimum. Our pricing includes the truck, blankets, plastic wrap, tools, dollies, tape, basic furniture disassembly/reassembly, and liability coverage. No hidden fees. Questions? Call us at 562-759-5569.`;

export default function QuoteForm(){
  const [sent,setSent]=useState(false);
  return <div className="quote" id="quote"><h2>Get a Free Moving Quote</h2><p>Fast response. No obligation estimate.</p>{sent ? <div className="success"><h3>Thank you. Your request is ready.</h3><p>{reply}</p><a className="btn gold" href={site.bookingUrl} target="_blank">Continue to Book Online</a></div> : <form onSubmit={(e)=>{e.preventDefault();trackEvent('quote_form_submit',{form_location:'website'});setSent(true)}}><div className="formgrid"><input required placeholder="Name"/><input required placeholder="Phone"/><input placeholder="Email"/><input type="date"/><input placeholder="Pickup city"/><input placeholder="Delivery city"/><select><option>Local move</option><option>Long distance</option><option>Commercial</option><option>Packing</option><option>Labor only</option></select><textarea placeholder="Tell us what you are moving"/></div><button className="btn gold" type="submit">Send Quote Request</button></form>}</div>
}
