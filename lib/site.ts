export const site = {
  name: 'A2 Moving',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.a2movingcompany.com',
  phone: '(562) 759-5569',
  phoneHref: 'tel:+15627595569',
  bookingUrl: process.env.NEXT_PUBLIC_SUPERMOVE_BOOKING_URL || 'https://app.supermove.co/0/a2movingcompany/request?referrer=4838',
  email: 'info@a2movingcompany.com',
  city: 'Long Beach',
  state: 'CA',
  serviceArea: 'Southern California',
  reviewRating: '4.9',
  reviewCount: '1,200+',
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
    desc: "Whether you're moving to a new apartment, house, or condo in Long Beach, A2 Moving provides experienced local movers to make the process easier. We understand local moving logistics and focus on careful handling, efficient loading, and dependable service from pickup to delivery."
  },
  {
    slug: 'long-distance-moving',
    title: 'Long Distance Moving',
    keyword: 'Long Distance Movers Long Beach',
    desc: 'Planning a move beyond Long Beach? A2 Moving provides professional long-distance moving services with clear communication throughout the process. From careful loading at your current location to transportation and unloading at your destination, our team helps make long-distance relocation simpler and more organized.'
  },
  {
    slug: 'commercial-moving',
    title: 'Commercial Moving',
    keyword: 'Commercial Movers Long Beach',
    desc: 'Relocating a business requires careful coordination and an experienced moving team. A2 Moving provides commercial moving services for businesses of different sizes, helping transport furniture, equipment, inventory, and other business items while keeping your relocation organized and efficient.'
  },
  {
    slug: 'office-moving',
    title: 'Office Moving',
    keyword: 'Office Movers Long Beach',
    desc: 'Moving an office requires organization, planning, and careful handling of business equipment. A2 Moving helps Long Beach businesses relocate desks, office furniture, workstations, and equipment efficiently, helping reduce disruption and get your new workspace ready sooner.'
  },
  {
    slug: 'packing-services',
    title: 'Packing Services',
    keyword: 'Packing Services Long Beach',
    desc: 'Proper packing can make a major difference in protecting your belongings during a move. A2 Moving offers professional packing services in Long Beach for household goods, furniture, kitchen items, and other belongings. Choose full packing assistance or get help with only the items you need professionally prepared.'
  },
  {
    slug: 'labor-services',
    title: 'Labor Services',
    keyword: 'Labor Moving Services Long Beach',
    desc: 'Already have a truck, container, or storage unit? A2 Moving provides professional moving labor for customers who need extra help with loading, unloading, furniture moving, and rearranging heavy household items. Get an experienced moving crew without booking a full-service move.'
  },
  {
    slug: 'piano-moving',
    title: 'Piano Moving',
    keyword: 'piano movers long beach',
    desc: 'Careful piano moving for upright, baby grand and grand piano moves.'
  },
  {
    slug: 'heavy-items',
    title: 'Heavy Items Moving',
    keyword: 'heavy item movers long beach',
    desc: 'Moving help for safes, heavy furniture, appliances and oversized items.'
  },
  {
    slug: 'apartment-moving',
    title: 'Apartment Moving',
    keyword: 'apartment movers long beach',
    desc: 'Apartment and condo moves with stairs, elevators and building requirements handled carefully.'
  },
  {
    slug: 'residential-moving',
    title: 'Residential Moving',
    keyword: 'residential movers long beach',
    desc: 'Full-service home moving with professional movers, trucks and protective supplies.'
  },
];

export const cities = [
  'long-beach-movers','irvine-movers','anaheim-movers','torrance-movers','santa-clarita-movers','lakewood-movers','los-angeles-movers','huntington-beach-movers','pasadena-movers','alhambra-movers'
];
export const cityName = (slug:string)=>slug.replace('-movers','').split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
