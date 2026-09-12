import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const clean = (value, max = 300) => String(value ?? '').trim().slice(0, max)

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 })
  }

  // Honeypot: pretend everything is fine, store nothing.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true })
  }

  const lead = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    service: clean(body.service, 120),
    urgency: clean(body.urgency, 120),
    city: clean(body.city, 120),
    notes: clean(body.notes, 800),
    source: 'website',
    page_path: clean(body.path, 200) || '/',
    user_agent: clean(request.headers.get('user-agent'), 300),
  }

  if (!lead.name || !lead.phone) {
    return NextResponse.json({ ok: false, error: 'Name and phone are required' }, { status: 400 })
  }

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    // Don't block the visitor, but make it loud in the deploy logs.
    console.error('[request-service] Supabase env vars missing — lead not stored:', lead)
    return NextResponse.json({ ok: true, stored: false })
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/service_requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(lead),
      cache: 'no-store',
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('[request-service] Supabase insert failed:', response.status, detail)
      return NextResponse.json({ ok: false, error: 'Could not save request' }, { status: 502 })
    }

    return NextResponse.json({ ok: true, stored: true })
  } catch (error) {
    console.error('[request-service] Unexpected error:', error)
    return NextResponse.json({ ok: false, error: 'Unexpected error' }, { status: 500 })
  }
}
