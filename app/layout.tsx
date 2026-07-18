import type { Metadata, Viewport } from 'next';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'A2 Moving | Long Beach Movers', template: '%s | A2 Moving' },
  description: 'A2 Moving provides professional moving services in Long Beach and Southern California.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { siteName: 'A2 Moving', type: 'website', locale: 'en_US' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#050505' };
export default function RootLayout({children}:{children:React.ReactNode}){
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  return <html lang="en"><body>{gtm && <GoogleTagManager gtmId={gtm}/>}<Header/><main>{children}</main><Footer/>{ga && <GoogleAnalytics gaId={ga}/>}</body></html>;
}
