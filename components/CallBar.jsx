import { PHONE, PHONE_HREF } from '@/lib/site'
import { PhoneIcon } from '@/components/Icons'

/**
 * Always-visible sticky call bar pinned to the bottom of the screen.
 * One 64px+ tap target — a thumb can hit it without looking, which is the
 * whole point for someone standing in a 95° house.
 */
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 safe-bottom">
      <div className="border-t border-flame-700/40 bg-ink shadow-[0_-6px_24px_-8px_rgba(11,18,32,0.6)]">
        <a
          href={PHONE_HREF}
          aria-label={`Call KDC Air & Heat now at ${PHONE}, open 24 hours`}
          className="tap flex min-h-[64px] w-full items-center justify-center gap-3 bg-flame-600 px-4 py-3 text-white transition-colors active:bg-flame-700 hover:bg-flame-700"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
            <PhoneIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col items-center leading-tight">
            <span className="text-[15px] font-extrabold tracking-tight sm:text-lg">
              Call Now: {PHONE}
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-white/85">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-ringPulse" />
              24/7 emergency line · tap to call
            </span>
          </span>
        </a>
      </div>
    </div>
  )
}
