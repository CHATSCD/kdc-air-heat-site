'use client'

import { useState } from 'react'
import { CheckIcon, PhoneIcon } from '@/components/Icons'
import { PHONE, PHONE_HREF } from '@/lib/site'

const SERVICE_OPTIONS = [
  'Emergency AC repair — no cooling',
  'Mobile home HVAC service',
  'Heat pump replacement / install',
  'Ductwork repair or sealing',
  'Thermostat upgrade',
  'Seasonal tune-up / maintenance',
  'Not sure — need advice',
]

const URGENCY_OPTIONS = [
  'Emergency — no cooling right now',
  'Same day — running but not cooling well',
  'Next day or later this week',
  'Getting a free replacement estimate',
]

const fieldClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base text-ink placeholder-slate-400 shadow-sm transition-colors focus:border-flame-500 focus:outline-none'

export default function RequestForm() {
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    // Honeypot — quietly succeed for bots.
    if (payload.company) {
      setStatus('done')
      return
    }

    if (!String(payload.name || '').trim() || !String(payload.phone || '').trim()) {
      setError('Please add your name and a phone number so we can call you back.')
      return
    }

    setError('')
    setStatus('sending')

    try {
      const response = await fetch('/api/request-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error('Request failed')
      form.reset()
      setStatus('done')
    } catch (err) {
      setStatus('error')
      setError(`We couldn't send that. Call ${PHONE} — the emergency line is answered 24/7.`)
    }
  }

  if (status === 'done') {
    return (
      <div
        className="rounded-2xl border border-green-200 bg-white p-6 shadow-card"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckIcon className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-lg font-extrabold tracking-tight text-ink">
          Request received — we&apos;ll call you back.
        </h3>
        <p className="mt-2 text-[15px] text-slate-600">
          We&apos;ll reach out from {PHONE}. If this is an outage and you need a tech moving now,
          call instead of waiting for the callback.
        </p>
        <a
          href={PHONE_HREF}
          className="tap mt-5 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-flame-600 px-6 py-3.5 text-lg font-extrabold text-white shadow-cta transition-colors hover:bg-flame-700"
        >
          <PhoneIcon className="h-5 w-5" />
          Call {PHONE}
        </a>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-3 w-full text-sm font-semibold text-slate-500 underline underline-offset-2 hover:text-slate-700"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6"
    >
      <h3 className="text-lg font-extrabold tracking-tight text-ink">
        Request a callback
      </h3>
      <p className="mt-1 text-[13px] text-slate-500">
        Takes about 20 seconds. Emergency? Call instead — it&apos;s faster.
      </p>

      <div className="mt-5 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="rf-name" className="mb-1.5 block text-[13px] font-bold text-slate-700">
              Name <span className="text-flame-600">*</span>
            </label>
            <input
              id="rf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="First &amp; last name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="rf-phone" className="mb-1.5 block text-[13px] font-bold text-slate-700">
              Phone <span className="text-flame-600">*</span>
            </label>
            <input
              id="rf-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              placeholder="(228) 000-0000"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="rf-service" className="mb-1.5 block text-[13px] font-bold text-slate-700">
            What do you need?
          </label>
          <select id="rf-service" name="service" defaultValue={SERVICE_OPTIONS[0]} className={fieldClass}>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="rf-urgency" className="mb-1.5 block text-[13px] font-bold text-slate-700">
            How urgent is it?
          </label>
          <select
            id="rf-urgency"
            name="urgency"
            defaultValue={URGENCY_OPTIONS[0]}
            className={fieldClass}
          >
            {URGENCY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="rf-city" className="mb-1.5 block text-[13px] font-bold text-slate-700">
              City / area <span className="font-medium text-slate-400">(optional)</span>
            </label>
            <input
              id="rf-city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Saucier, Gulfport, Wiggins…"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="rf-notes" className="mb-1.5 block text-[13px] font-bold text-slate-700">
              Details <span className="font-medium text-slate-400">(optional)</span>
            </label>
            <input
              id="rf-notes"
              name="notes"
              type="text"
              placeholder="Mobile home, unit brand, since when…"
              className={fieldClass}
            />
          </div>
        </div>

        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="rf-company">Company</label>
          <input id="rf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {error ? (
          <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-[13px] font-semibold text-red-700">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="tap flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-flame-600 px-6 py-4 text-lg font-extrabold text-white shadow-cta transition-colors hover:bg-flame-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'sending' ? 'Sending…' : 'Request Service'}
        </button>

        <p className="text-center text-[12px] leading-relaxed text-slate-500">
          We only use your info to schedule your service. Licensed &amp; insured MS HVAC
          contractor · {PHONE}
        </p>
      </div>
    </form>
  )
}
