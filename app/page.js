import CallBar from '@/components/CallBar'
import RequestForm from '@/components/RequestForm'
import {
  BoltIcon,
  CheckIcon,
  ChevronDownIcon,
  FlameIcon,
  ICONS,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  StarIcon,
} from '@/components/Icons'
import { AREAS, BUSINESS, FAQS, PHONE, PHONE_HREF, SERVICES, TESTIMONIALS, USPS } from '@/lib/site'
import { allSchemas } from '@/app/schema'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#area', label: 'Service Area' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#request', label: 'Request Service' },
  { href: '#faq', label: 'FAQ' },
]

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-16 px-4 py-12 sm:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

function Eyebrow({ children }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-flame-600">{children}</p>
  )
}

function Stars({ className = 'h-4 w-4' }) {
  return (
    <span className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  )
}

function CallButton({ label, sub, className = '' }) {
  return (
    <a
      href={PHONE_HREF}
      aria-label={`Call KDC Air & Heat now at ${PHONE}`}
      className={`tap flex min-h-[60px] w-full items-center justify-center gap-3 rounded-2xl bg-flame-600 px-5 py-4 text-white shadow-cta transition-colors active:bg-flame-700 hover:bg-flame-700 sm:w-auto sm:px-8 ${className}`}
    >
      <PhoneIcon className="h-6 w-6 shrink-0" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-lg font-extrabold tracking-tight sm:text-xl">{label}</span>
        {sub ? (
          <span className="text-[11px] font-medium uppercase tracking-wide text-white/85">{sub}</span>
        ) : null}
      </span>
    </a>
  )
}

export default function Home() {
  const year = new Date().getFullYear()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
      />

      {/* ---------------- HEADER: minimal, anchor links only ---------------- */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a
            href="#top"
            className="tap flex items-center gap-2.5 text-white"
            aria-label="KDC Air & Heat — back to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-flame-600 text-white">
              <FlameIcon className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[15px] font-extrabold tracking-tight">KDC Air &amp; Heat</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-flame-300">
                Saucier, MS
              </span>
            </span>
          </a>

          <nav aria-label="Page sections" className="hidden items-center gap-6 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={PHONE_HREF}
            className="tap hidden items-center gap-2 rounded-full bg-flame-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-flame-700 sm:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {PHONE}
          </a>
          <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-green-400 sm:hidden">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
            24/7
          </span>
        </div>
      </header>

      <main className="pb-[104px]">
        {/* ---------------- HERO: everything needed to call, above the fold ---------------- */}
        <section id="top" className="relative overflow-hidden bg-ink text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-flame-600/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-flame-900/40 blur-3xl"
          />

          <div className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-7 sm:pb-14 sm:pt-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-green-300 sm:text-xs">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
              24/7 Emergency Line · Nights, Weekends &amp; Holidays
            </span>

            <h1 className="mt-4 text-[28px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl">
              Emergency AC Repair in{' '}
              <span className="text-flame-400">Saucier &amp; Gulfport, MS</span>
            </h1>

            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-300 sm:text-lg">
              One call and a licensed tech is on the way — 24/7 emergency response, mobile home HVAC
              specialists, 20+ years in the trade. No cooling? You don&apos;t have to wait until
              Monday.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton label={`Call ${PHONE}`} sub="Tap to call · answered 24/7" />
              <a
                href="#request"
                className="tap flex min-h-[52px] items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Or request service online
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-semibold text-slate-300 sm:text-sm">
              <li className="flex items-center gap-1.5">
                <ShieldIcon className="h-4 w-4 text-flame-400" />
                Licensed &amp; Insured MS HVAC Contractor
              </li>
              <li className="flex items-center gap-1.5">
                <span className="flex items-center gap-1 text-amber-400">
                  <StarIcon className="h-4 w-4" />
                  {BUSINESS.rating}
                </span>
                {BUSINESS.reviewCountLabel} reviews
              </li>
              <li className="flex items-center gap-1.5">
                <BoltIcon className="h-4 w-4 text-flame-400" />
                Avg {BUSINESS.responseTime} dispatch
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- TRUST BAR directly under the hero ---------------- */}
        <section className="border-b border-slate-200 bg-slate-50 px-4 py-5">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {[
              { icon: ShieldIcon, top: 'Licensed & Insured', bottom: 'MS HVAC Contractor' },
              { icon: CheckIcon, top: `${BUSINESS.years} Years in the Trade`, bottom: 'Same family, local crew' },
              { icon: StarIcon, top: `${BUSINESS.rating}★ · ${BUSINESS.reviewCountLabel} Reviews`, bottom: 'Google, BBB & Angi' },
              { icon: BoltIcon, top: `${BUSINESS.responseTime} Avg Dispatch`, bottom: 'Nights, weekends, holidays' },
            ].map(({ icon: Icon, top, bottom }) => (
              <div key={top} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-flame-100 text-flame-700">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[13px] font-extrabold text-ink sm:text-sm">{top}</span>
                  <span className="text-[11px] text-slate-500 sm:text-xs">{bottom}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- SERVICES ---------------- */}
        <Section id="services">
          <Eyebrow>What we fix</Eyebrow>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            AC down? Here&apos;s what we handle — in plain English
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            One local crew for everything that moves air in your house or mobile home. Call the
            emergency line and we&apos;ll tell you straight what it takes.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon] ?? ICONS.wrench
              return (
                <article
                  key={service.id}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-flame-50 text-flame-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold tracking-tight text-ink sm:text-lg">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-slate-600">
                    {service.desc}
                  </p>
                  <a
                    href={PHONE_HREF}
                    className="tap mt-4 inline-flex items-center gap-2 text-sm font-bold text-flame-700 hover:text-flame-800"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call about this
                  </a>
                </article>
              )
            })}
          </div>
        </Section>

        {/* ---------------- WHY KDC / URGENCY BAND ---------------- */}
        <Section className="bg-ink text-white">
          <Eyebrow>Why neighbors call KDC</Eyebrow>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Built for rural Harrison &amp; Stone County — and the middle of the night
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {USPS.map((usp) => {
              const Icon = ICONS[usp.icon] ?? ICONS.wrench
              return (
                <div
                  key={usp.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-flame-600/20 text-flame-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-white">{usp.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-300">{usp.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-8 rounded-2xl border border-flame-600/30 bg-flame-600/10 p-5 text-[15px] font-semibold text-flame-200 sm:text-base">
            Standing in a hot house right now? Skip the reading — call{' '}
            <a href={PHONE_HREF} className="underline decoration-flame-400 decoration-2 underline-offset-2">
              {PHONE}
            </a>{' '}
            and a person answers.
          </p>
        </Section>

        {/* ---------------- SERVICE AREA ---------------- */}
        <Section id="area" className="bg-slate-50">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow>Where we roll</Eyebrow>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Serving Saucier, Gulfport &amp; the surrounding counties
              </h2>
              <p className="mt-3 text-slate-600">
                We&apos;re local — not a call center routing you to whoever&apos;s closest. Short
                drives over familiar roads are why we can hit a {BUSINESS.responseTime} average
                dispatch on no-cool calls.
              </p>
              <p className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                {AREAS.note}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="flex items-center gap-2 text-ink">
                <MapPinIcon className="h-5 w-5 text-flame-600" />
                <h3 className="text-base font-extrabold tracking-tight">Service area &amp; zip codes</h3>
              </div>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {AREAS.primary.map((area) => (
                  <li
                    key={area.city}
                    className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3.5 py-2.5"
                  >
                    <span className="flex items-center gap-2 text-[13px] font-semibold text-ink">
                      <CheckIcon className="h-3.5 w-3.5 shrink-0 text-flame-600" />
                      {area.city}
                    </span>
                    {area.zip ? (
                      <span className="shrink-0 text-[11px] font-medium text-slate-500">{area.zip}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <CallButton
                label={`Call ${PHONE}`}
                sub="We'll confirm you're in range in seconds"
                className="mt-5 sm:w-full"
              />
            </div>
          </div>
        </Section>

        {/* ---------------- TESTIMONIALS ---------------- */}
        <Section id="reviews">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Real customers, real emergencies</Eyebrow>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                {BUSINESS.rating} stars from {BUSINESS.reviewCountLabel} reviews
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Stars className="h-5 w-5" />
              <span className="text-sm font-semibold text-slate-600">
                Google · BBB · Angi
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
              >
                <Stars className="h-4 w-4" />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t border-slate-100 pt-3 text-sm">
                  <span className="font-extrabold text-ink">{t.name}</span>
                  <span className="text-slate-500"> · {t.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* ---------------- REQUEST SERVICE FORM (secondary CTA) ---------------- */}
        <Section id="request" className="bg-slate-50">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <Eyebrow>Not ready to call?</Eyebrow>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Request service — we&apos;ll call you right back
              </h2>
              <p className="mt-3 text-slate-600">
                Four quick fields. If you have no cooling at all, calling is faster — but this works
                too, day or night.
              </p>

              <div className="mt-6 rounded-2xl border border-flame-600/25 bg-flame-50 p-5">
                <p className="text-sm font-extrabold uppercase tracking-wide text-flame-700">
                  Fastest option right now
                </p>
                <p className="mt-2 text-[15px] text-slate-700">
                  Call the 24/7 emergency line and we&apos;ll dispatch a tech — average{' '}
                  {BUSINESS.responseTime} locally, nights and weekends included.
                </p>
                <CallButton label={`Call ${PHONE}`} className="mt-4 sm:w-full" />
                <ul className="mt-4 grid gap-2 text-[13px] font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-3.5 w-3.5 text-flame-600" />
                    Flat-rate emergency service calls
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-3.5 w-3.5 text-flame-600" />
                    Transparent options before work starts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-3.5 w-3.5 text-flame-600" />
                    Licensed &amp; insured MS HVAC contractor
                  </li>
                </ul>
              </div>
            </div>

            <RequestForm />
          </div>
        </Section>

        {/* ---------------- FAQ ---------------- */}
        <Section id="faq">
          <Eyebrow>Straight answers</Eyebrow>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Questions people ask before they call
          </h2>
          <div className="mt-6 space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-card open:border-flame-200"
              >
                <summary className="tap no-marker flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-[15px] font-extrabold tracking-tight text-ink sm:text-base">
                    {faq.q}
                  </h3>
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-flame-600 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-600">
            Still unsure?{' '}
            <a href={PHONE_HREF} className="font-bold text-flame-700 underline underline-offset-2">
              Call {PHONE}
            </a>{' '}
            — a real person answers 24/7.
          </p>
        </Section>

        {/* ---------------- CLOSING CTA ---------------- */}
        <Section className="bg-flame-600 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Air&apos;s out? Fix it in one phone call.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] text-white/90 sm:text-base">
              KDC Air &amp; Heat LLC · {BUSINESS.hoursShort} · {BUSINESS.license}
            </p>
            <a
              href={PHONE_HREF}
              className="tap mx-auto mt-6 flex min-h-[64px] w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-ink px-6 py-4 text-xl font-extrabold tracking-tight text-white transition-colors hover:bg-ink-soft"
            >
              <PhoneIcon className="h-6 w-6" />
              Call {PHONE}
            </a>
            <p className="mt-3 text-sm font-semibold text-white/85">
              Avg {BUSINESS.responseTime} local dispatch · Available nights, weekends &amp; holidays
            </p>
          </div>
        </Section>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="bg-ink px-4 pb-8 pt-12 text-slate-300">
          <div className="mx-auto grid w-full max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5 text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-flame-600">
                  <FlameIcon className="h-5 w-5" />
                </span>
                <span className="text-[15px] font-extrabold tracking-tight">
                  KDC Air &amp; Heat LLC
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Also known as K&amp;D AC Repair. {BUSINESS.years} years of trade experience serving
                the Mississippi Gulf Coast.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-flame-400">
                24/7 Emergency Line
              </h3>
              <a
                href={PHONE_HREF}
                className="tap mt-3 block text-lg font-extrabold text-white underline decoration-flame-500 decoration-2 underline-offset-4"
              >
                {PHONE}
              </a>
              <p className="mt-2 text-sm text-slate-400">{BUSINESS.hoursLong}</p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-flame-400">
                Services
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <a href="#services" className="hover:text-white">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-flame-400">
                Service Area
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                {AREAS.primary.slice(0, 6).map((a) => (
                  <li key={a.city}>
                    {a.city}
                    {a.zip ? ` (${a.zip})` : ''}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 pt-6 text-xs text-slate-500">
            <p className="font-semibold text-slate-400">{BUSINESS.license}</p>
            <p className="mt-2">
              © {year} {BUSINESS.name}. All rights reserved. Saucier, MS · Gulfport, MS · Northern
              Harrison County · Stone County.
            </p>
          </div>
        </footer>
      </main>

      {/* Always-on sticky call bar — never more than one tap from a phone call */}
      <CallBar />
    </>
  )
}
