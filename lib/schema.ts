import { site } from './site';

export function localBusinessSchema(){
  return {
    '@context':'https://schema.org', '@type':'MovingCompany',
    name: site.name, url: site.url, telephone: site.phone,
    image: `${site.url}/images/move-14.webp`, priceRange:'$$',
    address:{'@type':'PostalAddress', addressLocality:'Long Beach', addressRegion:'CA', addressCountry:'US'},
    areaServed:['Long Beach','Irvine','Anaheim','Torrance','Santa Clarita','Lakewood','Los Angeles','Huntington Beach','Pasadena','Alhambra'],
    aggregateRating:{'@type':'AggregateRating', ratingValue:site.reviewRating, reviewCount:'1200'},
    sameAs:['https://www.a2movingcompany.com']
  }
}
export function serviceSchema(name:string, description:string, url:string){
  return {'@context':'https://schema.org','@type':'Service', name, description, provider:{'@type':'MovingCompany', name:site.name, telephone:site.phone}, areaServed:site.serviceArea, url};
}
export function faqSchema(faqs:{q:string,a:string}[]){
  return {'@context':'https://schema.org','@type':'FAQPage', mainEntity: faqs.map(f=>({'@type':'Question', name:f.q, acceptedAnswer:{'@type':'Answer', text:f.a}}))}
}
