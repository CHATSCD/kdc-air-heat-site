/**
 * Single source of truth for every piece of business info on the page.
 * Change a phone number or city here and it updates everywhere (tel: links included).
 */

export const PHONE = '(228) 255-7030'
export const PHONE_HREF = 'tel:+12282557030'
export const SITE_URL = 'https://www.kdcairandheat.com'

export const BUSINESS = {
  name: 'KDC Air & Heat LLC',
  altName: 'K&D AC Repair',
  valueProp: 'One call and a licensed tech is on the way — 24/7 emergency AC repair.',
  city: 'Saucier',
  region: 'MS',
  hoursShort: '24/7 Emergency Response Line',
  hoursLong: 'Open 24 hours — nights, weekends & holidays',
  responseTime: '30 minutes',
  rating: '4.9',
  reviewCount: '140',
  reviewCountLabel: '140+',
  years: '20+',
  license: 'Licensed & Insured MS HVAC Contractor',
  priceRange: '$$',
  geo: { lat: 30.6356, lng: -89.1353 },
}

export const SERVICES = [
  {
    id: 'emergency-ac',
    icon: 'snowflake',
    name: 'Emergency AC Restoration',
    desc: 'No cooling at 2am? We answer, dispatch, and get the air back on. Diagnostic, repair, and recharge on the first trip whenever the parts are on the truck.',
  },
  {
    id: 'mobile-home',
    icon: 'mobilehome',
    name: 'Mobile Home HVAC Systems',
    desc: 'Mobile home systems are ducted and sized differently, and most shops turn them down. This is our specialty — including the cramped closets and belly ducts.',
  },
  {
    id: 'heat-pump',
    icon: 'heatpump',
    name: 'Heat Pump Replacement',
    desc: 'Heating and cooling from one unit. We size it right for your square footage, pull the permit, and haul the old one off when we leave.',
  },
  {
    id: 'ductwork',
    icon: 'duct',
    name: 'Ductwork Repair & Sealing',
    desc: 'Cold rooms and sky-high bills are usually leaking or crushed ducts. We repair, reseal, and rebalance airflow so the air goes where you actually are.',
  },
  {
    id: 'thermostat',
    icon: 'thermostat',
    name: 'Thermostat Upgrades',
    desc: 'Old dial or dead thermostat? We install and set up smart and programmable thermostats, then walk you through it before we go.',
  },
]

export const USPS = [
  {
    icon: 'mobilehome',
    title: 'Mobile home HVAC specialists',
    desc: 'Most contractors won’t touch a mobile home. We do — and we keep the parts on the truck instead of ordering them.',
  },
  {
    icon: 'clock',
    title: '30-minute local dispatch',
    desc: 'Average response time for no-cool outages in our core area, including the back roads and rural routes.',
  },
  {
    icon: 'bolt',
    title: 'Nights, weekends & holidays',
    desc: 'A real person answers the emergency line. No answering-service maze and no “we can be there Thursday.”',
  },
  {
    icon: 'shield',
    title: 'Flat-rate, priced up front',
    desc: 'Flat-rate emergency service calls with transparent options on paper before any work starts. No hourly meter.',
  },
]

export const AREAS = {
  primary: [
    { city: 'Saucier, MS', zip: '39574' },
    { city: 'Gulfport, MS', zip: '39501–39507' },
    { city: 'Northern Harrison County', zip: '' },
    { city: 'Stone County, MS', zip: '' },
    { city: 'Wiggins, MS', zip: '39577' },
    { city: 'Perkinston, MS', zip: '39573' },
    { city: 'Lyman, MS', zip: '39503' },
    { city: 'Rural routes & mobile home parks', zip: '' },
  ],
  note:
    'Not sure if you’re in range? Call anyway. If you’re in or around Saucier, Gulfport, Harrison or Stone County, you’re almost certainly covered.',
}

export const TESTIMONIALS = [
  {
    quote:
      'I had an emergency in the middle of the night and 1 phone call got it taken care of immediately! Great work at a great price when no one else would even answer.',
    name: 'Jerry G.',
    city: 'Saucier',
  },
  {
    quote:
      'I called at 3:15pm expecting an appointment for the next day, but within a short period of time two technicians were at my door and resolved it.',
    name: 'Kav W.',
    city: 'Harrison County',
  },
  {
    quote:
      'Installed a new unit in my mobile home VERY fast. They stand behind their product and their work.',
    name: 'Dusty C.',
    city: 'Saucier',
  },
]

export const FAQS = [
  {
    q: 'Do you really answer 24/7?',
    a: 'Yes. KDC Air & Heat runs a live 24/7 emergency response line — nights, weekends and holidays included. When your air quits at 2am in August, you get a person on the phone, not a voicemail box.',
  },
  {
    q: 'How fast can you get to me?',
    a: 'For no-cool emergencies in our core area we average 30-minute local dispatch. Rural Harrison and Stone County addresses can run a little longer depending on distance, and we’ll give you a realistic arrival window on the call — not a maybe.',
  },
  {
    q: 'How much does an emergency service call cost?',
    a: 'Emergency service calls are flat-rate, so you know the number before we head out — no hourly meter, no surprise add-ons. We show you transparent repair-vs-replace options with pricing before any work starts.',
  },
  {
    q: 'Do you charge for estimates?',
    a: 'Replacement and installation estimates are free. Diagnostic repair calls carry the flat-rate emergency service fee, and that fee is quoted to you up front before we roll a truck.',
  },
  {
    q: 'Do you work on mobile homes?',
    a: 'It’s one of our specialties. Mobile home HVAC systems are built, ducted and sized differently than site-built homes, and plenty of contractors won’t take the job. We do — fast, and with parts on the truck.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. KDC Air & Heat LLC is a licensed and insured Mississippi HVAC contractor with 20+ years in the trade. Repairs, ductwork, heat pumps, thermostats and full system replacements are all done by our own technicians.',
  },
  {
    q: 'What if I’m not sure I’m in your service area?',
    a: 'Call anyway. If you’re in Saucier, Gulfport, or anywhere in Harrison or Stone County, you’re most likely covered — and if we can’t get to you, we’ll tell you straight instead of wasting your time.',
  },
]
