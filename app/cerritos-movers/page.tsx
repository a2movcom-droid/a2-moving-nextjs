import type { Metadata } from 'next';
import { CityPage } from '@/components/PageBlocks';
import { cityName } from '@/lib/site';

const slug = 'cerritos-movers';
const city = cityName(slug);

export const metadata: Metadata = {
  title: `${city} Movers | Local Moving Company | A2 Moving`,
  description: 'Cerritos movers for homes, apartments and businesses. A2 Moving provides local, long-distance, packing and labor services with careful planning for access and parking.',
  alternates: { canonical: `/${slug}` },
};

export default function Page() {
  return <CityPage city={slug} />;
}
