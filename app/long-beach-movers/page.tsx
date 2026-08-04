import type { Metadata } from 'next';
import { CityPage } from '@/components/PageBlocks';
import { cityName } from '@/lib/site';

const slug = 'long-beach-movers';
const city = cityName(slug);

export const metadata: Metadata = {
  title: `${city} Movers | Local Moving Company | A2 Moving`,
  description: 'Long Beach movers for apartments, homes and businesses. A2 Moving provides local, long-distance, packing and labor services with careful furniture protection.',
  alternates: { canonical: `/${slug}` },
};

export default function Page() {
  return <CityPage city={slug} />;
}
