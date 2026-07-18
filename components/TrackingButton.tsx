'use client';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

type Props = { href:string; event:string; location:string; className?:string; children:React.ReactNode; target?:string };
export function TrackingLink({href,event,location,className,children,target}:Props){
  return <Link href={href} target={target} className={className} onClick={()=>trackEvent(event,{button_location:location,link_url:href})}>{children}</Link>;
}
