# KDC Air & Heat LLC — 24/7 Emergency AC Repair (Saucier, MS)

A single-page, mobile-first site built to beat directory listings (Angi / BBB / YellowPages / Facebook) at one job: **get a panicked phone in a hot house to a phone call in under 3 seconds.**

Built with **Next.js 14 (App Router) + Tailwind CSS 3**. Deploys cleanly to Vercel.

---

## The conversion path (in order)

1. **Hero, above the fold** — business name, one-line value prop, 24/7 badge, phone number, and one primary CTA: `Call (228) 255-7030`. No scroll required.
2. **Sticky bottom bar** — always visible, 64px tap target: `Call Now: (228) 255-7030`. Never more than one thumb-tap from a call.
3. **Trust bar** — licensed & insured, 20+ years, 4.9★ / 140+ reviews, 30-min avg dispatch.
4. **Services** — 5 plain-English cards with icons and a "Call about this" tel: link on each.
5. **Why KDC** — mobile home specialists, fast rural dispatch, nights/weekends/holidays, flat-rate pricing.
6. **Service area** — cities + zips (local SEO + "am I in range?" reassurance).
7. **Testimonials** — the three real reviews with name + city.
8. **Request form** — secondary CTA for people who won't call yet (name, phone, service, urgency).
9. **FAQ** — knocks down the top objections (pricing, response time, real 24/7, estimates, mobile homes).
10. **Closing CTA + footer** — NAP, hours, license, service area.

## Performance choices

- **Zero images** — every icon is inline SVG. No carousels, no autoplay video, no stock-photo payload.
- **Zero web fonts** — system font stack, so text paints instantly on 4G.
- **One page, ~0 client JS** except the form (native `<details>` for the FAQ accordion, anchor links for nav).
- Leads go to an API route, not a third-party form widget.

## Project structure

```
app/
  layout.js          SEO metadata (title/description/OG/robots) + viewport
  page.js            The whole page
  schema.js          schema.org LocalBusiness/HVACBusiness, FAQPage, WebSite
  icon.svg           Flame favicon
  robots.js          /robots.txt
  sitemap.js         /sitemap.xml
  api/request-service/route.js   Lead capture endpoint
components/
  CallBar.jsx        Sticky bottom tap-to-call bar
  RequestForm.jsx    Secondary CTA form (client component)
  Icons.jsx          Inline SVG icon set
lib/site.js          ALL business info in one place (phone, services, areas, reviews, FAQs)
```

### Editing content

Almost everything editable lives in **`lib/site.js`** — phone number, services, service area, testimonials, FAQs, rating, response time. Change it once and it updates in the UI, the tel: links, and the structured data.

---

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy to Vercel

1. Import `kdc-air-heat-site` into Vercel (framework auto-detects as Next.js).
2. Set env vars for lead storage (optional but recommended — see below).
3. Point the domain (`kdcairandheat.com` — update `SITE_URL` in `lib/site.js` if the real domain differs).

### Lead storage env vars

Form submissions insert into the Supabase table `public.service_requests` (already created). Add **any one** of these pairs in Vercel → Project → Settings → Environment Variables:

```
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
```

Also supported: `NEXT_PUBLIC_SUPABASE_URL` + `SUPABASE_ANON_KEY` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

If the env vars are missing, the form still shows a success state so the customer isn't blocked, but the lead is **not** stored — it's logged loudly in the Vercel function logs (`[request-service] Supabase env vars missing`). **Set these vars before launch.**

Read leads with:

```sql
select created_at, name, phone, service, urgency, city, notes
from public.service_requests
order by created_at desc;
```

---

## SEO checklist

- [x] Meta title: `Emergency AC Repair Saucier, MS | KDC Air & Heat — 24/7`
- [x] Meta description with phone, service area, rating, response time
- [x] schema.org `HVACBusiness` + `LocalBusiness` — name, phone, address (Saucier, MS), geo, areaServed, 24/7 opening hours, `priceRange: "$$"`, aggregateRating 4.9/140, three reviews, service catalog
- [x] `FAQPage` schema from the on-page FAQ
- [x] OpenGraph + Twitter cards, canonical, robots, `sitemap.xml`
- [x] Every phone number on the page is a `tel:` link (sticky bar, header, hero, each service card, area, form, footer)
- [x] iOS phone auto-detection disabled so our tel: links are the only tappable numbers

## Before launch — verify these

1. **Confirm the zip codes** in `lib/site.js` → `AREAS.primary` (Gulfport 39501–39507, Wiggins 39577, Perkinston 39573, Lyman 39503) match the real dispatch radius.
2. **Set `SITE_URL`** in `lib/site.js` to the live domain.
3. **Add a street address** to the schema `address` if a physical/GBP address can be public — it strengthens local pack matching. Service-area businesses can skip it.
4. **Add real photos later** (truck, techs, installed units) with `next/image` + explicit `width`/`height` — do not add a carousel.
5. **Call tracking**: if a tracking number is added, keep the visible on-page number as the primary and hot-swap only the `tel:` href, or NAP consistency with your Google Business Profile will suffer.
6. Nothing on this page is a made-up guarantee — "30-minute dispatch" and the reviews come from the provided business info. Keep it that way.
