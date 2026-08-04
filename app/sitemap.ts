import type { MetadataRoute } from 'next';
import { cities, services, site } from '@/lib/site';

const supportingRoutes = [
  'about-us',
  'blog',
  'contact',
  'faq',
  'pricing-plans',
  'reviews',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...services.map((service) => ({
      url: `${site.url}/${service.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...cities.map((city) => ({
      url: `${site.url}/${city}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...supportingRoutes.map((route) => ({
      url: `${site.url}/${route}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
