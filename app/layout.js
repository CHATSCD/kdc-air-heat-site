import './globals.css'
import { BUSINESS, SITE_URL } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Emergency AC Repair Saucier, MS | KDC Air & Heat — 24/7',
    template: '%s | KDC Air & Heat',
  },
  description:
    '24/7 emergency AC repair in Saucier, Gulfport, Harrison & Stone County, MS. Licensed & insured HVAC contractor, 20+ years, 4.9★ from 140+ reviews, 30-minute local dispatch. Call (228) 255-7030.',
  applicationName: BUSINESS.name,
  keywords: [
    'emergency AC repair Saucier MS',
    'AC repair near me Saucier',
    '24 hour AC repair Gulfport MS',
    'mobile home AC repair Mississippi',
    'HVAC contractor Harrison County MS',
    'heat pump replacement Gulfport MS',
    'ductwork repair Stone County MS',
    'thermostat installation Saucier MS',
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: BUSINESS.name,
    locale: 'en_US',
    title: 'Emergency AC Repair in Saucier, MS | KDC Air & Heat — 24/7',
    description:
      'No cooling? Call (228) 255-7030. 24/7 emergency AC repair, mobile home HVAC specialists, 30-minute local dispatch across Saucier, Gulfport, Harrison & Stone County.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency AC Repair in Saucier, MS | KDC Air & Heat — 24/7',
    description:
      'No cooling? Call (228) 255-7030. Licensed & insured MS HVAC contractor, 4.9★ (140+ reviews), 30-minute local dispatch, nights & weekends.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'HVAC',
  // Turn OFF iOS phone-number auto-detection so our own tel: links stay the only tappable numbers.
  formatDetection: { telephone: false, address: false, email: false },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1220',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
