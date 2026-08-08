export const site = {
  name: 'A2 Moving',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.a2movingcompany.com',
  phone: '(562) 759-5069',
  phoneHref: 'tel:+15627595069',
  bookingUrl: process.env.NEXT_PUBLIC_SUPERMOVE_BOOKING_URL || 'https://app.supermove.co/0/a2movingcompany/request?referrer=4838',
  email: 'info@a2movingcompany.com',
  address: {
    streetAddress: '2130 Technology Pl',
    addressLocality: 'Long Beach',
    addressRegion: 'CA',
    postalCode: '90810',
    addressCountry: 'US',
  },
  sameAs: [
    'https://maps.google.com/?cid=2428567975241917515',
    'https://www.facebook.com/326475637205993',
    'https://www.yelp.com/biz/a2-moving-long-beach-long-beach',
  ],
  city: 'Long Beach',
  state: 'CA',
  serviceArea: 'Southern California',
  reviewRating: '4.9',
  reviewCount: '448',
  movesCompleted: '5,000+',
};

export const gallery = [
  {src:'/images/move-01.webp', alt:'Loaded moving truck with packed boxes for A2 Moving local move'},
  {src:'/images/move-02.webp', alt:'A2 Moving truck loaded with wrapped furniture'},
  {src:'/images/move-03.webp', alt:'Wrapped furniture protected for moving'},
  {src:'/images/move-04.webp', alt:'Moving blankets and dollies prepared inside truck'},
  {src:'/images/move-05.webp', alt:'Furniture wrapped inside luxury home before move'},
  {src:'/images/move-06.webp', alt:'A2 Moving truck with ramp and supplies'},
  {src:'/images/move-08.webp', alt:'A2 Moving crew wrapping office furniture'},
  {src:'/images/move-09.webp', alt:'Wrapped boxes and furniture for residential moving'},
  {src:'/images/move-10.webp', alt:'Furniture wrapped and protected before loading'},
  {src:'/images/move-11.webp', alt:'Stair protection runner installed for move'},
  {src:'/images/move-13.webp', alt:'A2 Moving commercial office furniture wrapping'},
  {src:'/images/move-14.webp', alt:'A2 Moving truck by ocean view street with packed boxes'},
];

export const services = [
  {
    slug: 'local-moving',
    title: 'Local Moving',
    keyword: 'Local Movers Long Beach',
    desc: 'Experienced local movers in Long Beach for apartments, condos and homes. Careful handling, efficient loading and dependable pickup-to-delivery service.'
  },
  {
    slug: 'long-distance-moving',
    title: 'Long Distance Moving',
    keyword: 'Long Distance Movers Long Beach',
    desc: 'Long-distance movers from Long Beach. We coordinate loading, transport and delivery to your destination with clear communication at every step.'
  },
  {
    slug: 'commercial-moving',
    title: 'Commercial Moving',
    keyword: 'Commercial Movers Long Beach',
    desc: 'Commercial movers in Long Beach for businesses of any size. We relocate furniture, equipment and inventory with minimal disruption to operations.'
  },
  {
    slug: 'office-moving',
    title: 'Office Moving',
    keyword: 'Office Movers Long Beach',
    desc: 'Office movers in Long Beach. We relocate desks, workstations, furniture and equipment efficiently so your new workspace is ready sooner.'
  },
  {
    slug: 'packing-services',
    title: 'Packing Services',
    keyword: 'Packing Services Long Beach',
    desc: 'Professional packing services in Long Beach for household goods, furniture and kitchen items. Choose full packing or help with only what you need.'
  },
  {
    slug: 'labor-services',
    title: 'Labor Services',
    keyword: 'Labor Moving Services Long Beach',
    desc: 'Moving labor in Long Beach for loading, unloading and furniture rearranging. Hire an experienced crew for your truck, container or storage unit.'
  },
  {
    slug: 'piano-moving',
    title: 'Piano Moving',
    keyword: 'Piano Movers Long Beach',
    desc: 'Piano movers in Long Beach for upright, baby grand and grand pianos. Specialized equipment, careful wrapping and trained crews for every move.'
  },
  {
    slug: 'heavy-items',
    title: 'Heavy Items Moving',
    keyword: 'Furniture & Heavy Item Movers Long Beach',
    desc: 'Furniture and heavy item movers in Long Beach for safes, appliances and oversized items. Specialized equipment and trained crews for tough moves.'
  },
  {
    slug: 'apartment-moving',
    title: 'Apartment Moving',
    keyword: 'Apartment Movers Long Beach',
    desc: 'Apartment movers in Long Beach handling stairs, elevators and building requirements. Careful furniture protection for condo and apartment moves.'
  },
  {
    slug: 'residential-moving',
    title: 'Residential Moving',
    keyword: 'Residential Movers Long Beach',
    desc: 'Residential movers in Long Beach for houses, apartments and condos. Full-service home moving with trucks, blankets, dollies and protective supplies.'
  },
];

export const cities = [
  'long-beach-movers','irvine-movers','anaheim-movers','torrance-movers','santa-clarita-movers','lakewood-movers','los-angeles-movers','huntington-beach-movers','pasadena-movers','alhambra-movers','rancho-palos-verdes-movers','rolling-hills-estates-movers','cerritos-movers','san-marino-movers'
];
export const cityName = (slug:string)=>slug.replace('-movers','').split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
