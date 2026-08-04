import type { Metadata } from 'next';
import { CityPage } from '@/components/PageBlocks';
import { cityName } from '@/lib/site';

const slug = 'san-marino-movers';
const city = cityName(slug);

export const metadata: Metadata = {
  title: `${city} Movers | Local Moving Company | A2 Moving`,
  description: 'San Marino movers for homes and businesses. A2 Moving provides careful local, long-distance, packing and labor services with professional furniture protection.',
  alternates: { canonical: `/${slug}` },
};

export default function Page() {
  return <CityPage city={slug} />;
}
