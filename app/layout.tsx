import type { Metadata, Viewport } from 'next';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'A2 Moving | Long Beach Movers',
  description:
    'A2 Moving provides professional moving services in Long Beach and Southern California.',
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'A2 Moving',
    title: 'A2 Moving | Long Beach Movers',
    description:
      'Professional local, long-distance, residential and commercial movers serving Long Beach and Southern California.',
    url: site.url,
    type: 'website',
    locale: 'en_US',
    images: ['/images/move-14.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A2 Moving | Long Beach Movers',
    description:
      'Professional movers serving Long Beach and Southern California.',
    images: ['/images/move-14.webp'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gtm = process.env.NEXT_PUBLIC_GTM_ID;
  const ga = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        {gtm && <GoogleTagManager gtmId={gtm} />}
        <Header />
        <main>{children}</main>
        <Footer />
        {ga && <GoogleAnalytics gaId={ga} />}
      </body>
    </html>
  );
}
