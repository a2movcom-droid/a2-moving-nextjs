import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif','image/webp'],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
  return [
    {
      source: '/copy-of-about-us',
      destination: '/piano-moving',
      permanent: true,
    },
    {
      source: '/copy-of-piano-moving-1',
      destination: '/long-distance-moving',
      permanent: true,
    },
    {
      source: '/copy-of-piano-moving-4',
      destination: '/labor-services',
      permanent: true,
    },
  
  ];
},
  poweredByHeader: false,
  compress: true,
  async headers(){
    return [{source:'/(.*)', headers:[
      {key:'X-Frame-Options', value:'SAMEORIGIN'},
      {key:'X-Content-Type-Options', value:'nosniff'},
      {key:'Referrer-Policy', value:'strict-origin-when-cross-origin'},
      {key:'Permissions-Policy', value:'camera=(), microphone=(), geolocation=()'},
    ]}]
  }
};
export default nextConfig;
