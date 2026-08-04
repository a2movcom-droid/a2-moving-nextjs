import type { Metadata } from 'next';
import { CityPage } from '@/components/PageBlocks';
import { cityName } from '@/lib/site';

const slug = 'rolling-hills-estates-movers';
const city = cityName(slug);

export const metadata: Metadata = {
  title: `${city} Movers | Local Moving Company | A2 Moving`,
  description: 'Rolling Hills Estates movers for local, long-distance, packing and labor services, with careful planning for hills, gates, stairs and longer carries.',
  alternates: { canonical: `/${slug}` },
};

export default function Page() {
  return <CityPage city={slug} />;
}
