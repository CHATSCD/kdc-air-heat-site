import { AREAS, BUSINESS, FAQS, PHONE, SERVICES, SITE_URL, TESTIMONIALS } from '@/lib/site'

const dayOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HVACBusiness', 'LocalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'KDC Air & Heat LLC',
  alternateName: 'K&D AC Repair',
  legalName: 'KDC Air & Heat LLC',
  url: SITE_URL,
  telephone: '+1-228-255-7030',
  description:
    'Licensed and insured Mississippi HVAC contractor providing 24/7 emergency AC repair, mobile home HVAC service, heat pump replacement, ductwork and thermostat upgrades in Saucier, Gulfport, Harrison County and Stone County, MS.',
  slogan: 'One call, 30-minute local dispatch, 24/7 emergency AC repair.',
  priceRange: BUSINESS.priceRange,
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Check, Credit Card',
  knowsLanguage: 'en-US',
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  areaServed: [
    { '@type': 'City', name: 'Saucier, MS' },
    { '@type': 'City', name: 'Gulfport, MS' },
    { '@type': 'AdministrativeArea', name: 'Northern Harrison County, MS' },
    { '@type': 'AdministrativeArea', name: 'Stone County, MS' },
    { '@type': 'City', name: 'Wiggins, MS' },
    { '@type': 'City', name: 'Perkinston, MS' },
    { '@type': 'City', name: 'Lyman, MS' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek,
      opens: '00:00',
      closes: '23:59',
    },
  ],
  specialOpeningHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    description: '24/7 emergency response line — nights, weekends and holidays.',
    dayOfWeek,
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.rating,
    bestRating: '5',
    worstRating: '1',
    reviewCount: BUSINESS.reviewCount,
  },
  review: TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    reviewBody: t.quote,
    author: { '@type': 'Person', name: t.name },
    locationCreated: { '@type': 'Place', name: `${t.city}, MS` },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
  })),
  makesOffer: SERVICES.map((s) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: s.name,
      description: s.desc,
      serviceType: s.name,
      areaServed: { '@type': 'AdministrativeArea', name: 'Harrison & Stone County, MS' },
      provider: { '@type': 'HVACBusiness', name: 'KDC Air & Heat LLC', telephone: '+1-228-255-7030' },
    },
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name },
    })),
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-228-255-7030',
      contactType: 'emergency',
      areaServed: 'US-MS',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek,
        opens: '00:00',
        closes: '23:59',
      },
    },
  ],
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Years in business', value: '20+' },
    { '@type': 'PropertyValue', name: 'Average response time', value: '30 minutes' },
    { '@type': 'PropertyValue', name: 'Licensing', value: BUSINESS.license },
    { '@type': 'PropertyValue', name: 'Specialty', value: 'Mobile home HVAC systems' },
  ],
  serviceArea: AREAS.primary.map((a) => a.city),
  potentialAction: {
    '@type': 'CommunicateAction',
    name: `Call ${PHONE} for 24/7 emergency AC service`,
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'tel:+12282557030',
      actionPlatform: 'http://schema.org/MobileWebPlatform',
    },
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'KDC Air & Heat LLC — Emergency AC Repair, Saucier MS',
  publisher: { '@id': `${SITE_URL}/#business` },
  inLanguage: 'en-US',
}

export const allSchemas = [localBusinessSchema, faqSchema, websiteSchema]
