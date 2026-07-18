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
  { slug:'local-moving', title:'Local Moving', keyword:'local movers long beach', desc:'Fast, careful and affordable local moving services throughout Long Beach and Southern California.'},
  { slug:'long-distance-moving', title:'Long Distance Moving', keyword:'long distance movers california', desc:'Reliable long-distance moving for homes, apartments and businesses across California and beyond.'},
  { slug:'commercial-moving', title:'Commercial Moving', keyword:'commercial movers long beach', desc:'Office and commercial relocation with careful furniture protection and efficient move planning.'},
  { slug:'office-moving', title:'Office Moving', keyword:'office movers long beach', desc:'Office furniture moving, workstation moving and business relocation services.'},
  { slug:'packing-services', title:'Packing Services', keyword:'packing services long beach', desc:'Professional packing and unpacking help for a safer, more organized move.'},
  { slug:'labor-services', title:'Labor Services', keyword:'labor only movers long beach', desc:'Loading, unloading, rearranging and moving labor when you already have a truck or container.'},
  { slug:'piano-moving', title:'Piano Moving', keyword:'piano movers long beach', desc:'Careful piano moving for upright, baby grand and grand piano moves.'},
  { slug:'heavy-items', title:'Heavy Items Moving', keyword:'heavy item movers long beach', desc:'Moving help for safes, heavy furniture, appliances and oversized items.'},
  { slug:'apartment-moving', title:'Apartment Moving', keyword:'apartment movers long beach', desc:'Apartment and condo moves with stairs, elevators and building requirements handled carefully.'},
  { slug:'residential-moving', title:'Residential Moving', keyword:'residential movers long beach', desc:'Full-service home moving with professional movers, trucks and protective supplies.'},
];

export const cities = [
  'long-beach-movers','irvine-movers','anaheim-movers','torrance-movers','santa-clarita-movers','lakewood-movers','los-angeles-movers','huntington-beach-movers','pasadena-movers','alhambra-movers'
];
export const cityName = (slug:string)=>slug.replace('-movers','').split('-').map(w=>w[0].toUpperCase()+w.slice(1)).join(' ');
