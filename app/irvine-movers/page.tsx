import type { Metadata } from 'next';
import { CityPage } from '@/components/PageBlocks';
import { cityName } from '@/lib/site';

const slug = 'irvine-movers';
const city = cityName(slug);

export const metadata: Metadata = {
  title: `${city} Movers | Local Moving Company | A2 Moving`,
  description: 'Irvine movers for apartments, homes and businesses. A2 Moving provides local and long-distance moving, packing and labor help with organized planning.',
  alternates: { canonical: `/${slug}` },
};

export default function Page() {
  return <CityPage city={slug} />;
}
