# A2 Moving Next.js Website

Premium black + gold A2 Moving website starter built for organic SEO, high conversion, Supermove booking, image optimization, Google indexing and Core Web Vitals.

## Included

- Next.js App Router
- SEO-friendly service pages and city pages
- Supermove Book Now integration
- Sticky mobile Call / Book Now buttons
- Local move quote auto-reply
- Real A2 Moving photos optimized as WebP
- LocalBusiness / MovingCompany schema
- FAQ schema
- Service schema helpers
- sitemap.xml and robots.txt
- GA4 + GTM placeholders
- Vercel-ready configuration
- Cloudflare CDN setup notes

## Booking Link

The current Supermove booking link is already set:

```txt
https://app.supermove.co/0/a2movingcompany/request?referrer=4838
```

You can update it in `.env.local`:

```bash
NEXT_PUBLIC_SUPERMOVE_BOOKING_URL=https://app.supermove.co/0/a2movingcompany/request?referrer=4838
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel Deployment

1. Push this folder to GitHub.
2. Go to Vercel → Add New Project.
3. Import the GitHub repo.
4. Add environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://www.a2movingcompany.com
NEXT_PUBLIC_SUPERMOVE_BOOKING_URL=https://app.supermove.co/0/a2movingcompany/request?referrer=4838
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

5. Deploy.
6. Test the temporary Vercel URL.
7. Connect your domain `a2movingcompany.com` in Vercel.

## Cloudflare CDN Setup

Use Cloudflare as DNS/CDN in front of Vercel:

1. Add `a2movingcompany.com` to Cloudflare.
2. Change nameservers at your domain registrar to Cloudflare.
3. In Cloudflare DNS, point:
   - `www` CNAME → `cname.vercel-dns.com`
   - root domain handled through Vercel instructions / A record or CNAME flattening.
4. SSL/TLS mode: Full.
5. Enable:
   - Brotli
   - HTTP/2 and HTTP/3
   - Auto Minify optional
   - Always Use HTTPS
6. Do not use aggressive Rocket Loader until scripts are tested.

## Google Search Console

After deployment:

1. Verify `https://www.a2movingcompany.com`.
2. Submit sitemap:

```txt
https://www.a2movingcompany.com/sitemap.xml
```

3. Inspect important URLs:
   - /local-moving
   - /long-distance-moving
   - /commercial-moving
   - /labor-services
   - /heavy-items
   - /piano-moving
   - /long-beach-movers

## Google Ads / GA4 Events

The buttons are prepared to send these events:

- `phone_click`
- `book_now_click`
- `quote_click`
- `quote_form_submit`

Use Google Tag Manager to convert these into Google Ads conversions.

## Core Web Vitals

This build uses:

- Next/Image
- WebP optimized photos
- Static pages
- Sticky lightweight CSS
- Compressed assets
- Proper metadata and canonical URLs

Before launch, test with:

- PageSpeed Insights
- GTmetrix
- Google Search Console Core Web Vitals

## Next Content Steps

Add long unique content to city pages:

- Long Beach Movers
- Irvine Movers
- Anaheim Movers
- Torrance Movers
- Santa Clarita Movers
- Lakewood Movers

Each city page should have 800–1,500 words, FAQs, real photos, and internal links.
