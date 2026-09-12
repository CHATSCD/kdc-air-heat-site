/**
 * Inline SVG icon set — zero image requests, zero icon-library JS.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
}

export function PhoneIcon({ className = 'h-5 w-5', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.26-1.26a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

export function SnowflakeIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 2v20M4.2 6.5l15.6 11M19.8 6.5 4.2 17.5" />
      <path d="M12 6l2-2M12 6l-2-2M12 18l2 2M12 18l-2 2" />
    </svg>
  )
}

export function MobileHomeIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M3 11.5 12 4.5l9 7" />
      <path d="M5.5 10v8h13v-8" />
      <path d="M9.5 13h5v5h-5z" />
      <path d="M6 21.5h1.5M16.5 21.5H18" />
    </svg>
  )
}

export function HeatPumpIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="1.8" />
      <path d="M12 10.2c0-3.1 3.4-3.1 3.4-1 0 1.4-1.6 2.1-3.4 1Z" />
      <path d="M13.8 12c3.1 0 3.1 3.4 1 3.4-1.4 0-2.1-1.6-1-3.4Z" />
      <path d="M12 13.8c0 3.1-3.4 3.1-3.4 1 0-1.4 1.6-2.1 3.4-1Z" />
      <path d="M10.2 12c-3.1 0-3.1-3.4-1-3.4 1.4 0 2.1 1.6 1 3.4Z" />
    </svg>
  )
}

export function DuctIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <rect x="2.5" y="6" width="19" height="5.5" rx="2.75" />
      <path d="M6.5 11.5V15M12 11.5V17M17.5 11.5V15" />
      <path d="M3.5 20h17" />
    </svg>
  )
}

export function ThermostatIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <rect x="5" y="2.5" width="14" height="19" rx="3.5" />
      <circle cx="12" cy="9.5" r="3.2" />
      <path d="M9.3 16.6h5.4" />
    </svg>
  )
}

export function BoltIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...props}>
      <path d="M13.4 2 4.6 13.6c-.3.4 0 .9.5.9h5.1l-1.1 7.2c-.1.6.7.9 1 .4l8.8-11.6c.3-.4 0-.9-.5-.9h-5.1l1.2-7.1c.1-.6-.7-1-1.1-.5Z" />
    </svg>
  )
}

export function ShieldIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 3l7.2 2.8v5.4c0 4.3-2.9 8.2-7.2 9.8-4.3-1.6-7.2-5.5-7.2-9.8V5.8L12 3Z" />
      <path d="m9 11.8 2.1 2.1L15.2 9.8" />
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4', ...props }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...props}>
      <path d="M10 1.6l2.6 5.3 5.8.85-4.2 4.1 1 5.75L10 14.9l-5.2 2.7 1-5.75L1.6 7.75l5.8-.85L10 1.6Z" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.6 2.1" />
    </svg>
  )
}

export function MapPinIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M12 21.2s7-5.7 7-11.2a7 7 0 1 0-14 0c0 5.5 7 11.2 7 11.2Z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-4 w-4', ...props }) {
  return (
    <svg {...base} strokeWidth="2.4" className={className} {...props}>
      <path d="m4.8 12.6 4.6 4.6L19.2 6.9" />
    </svg>
  )
}

export function ChevronDownIcon({ className = 'h-5 w-5', ...props }) {
  return (
    <svg {...base} strokeWidth="2.2" className={className} {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  )
}

export function FlameIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2c4.2 6.2 1.4 8.8 4.2 12 1.8 2.1 3.3 3.7 3.3 6.2A7.5 7.5 0 0 1 12 22a7.5 7.5 0 0 1-7.5-1.8C4.5 16.7 7 15 8.5 12.9 10.3 10.3 7.8 8.2 12 2Z" />
    </svg>
  )
}

export function WrenchIcon({ className = 'h-6 w-6', ...props }) {
  return (
    <svg {...base} className={className} {...props}>
      <path d="M14.7 6.3a4.4 4.4 0 0 0 5.6 5.6l-7 7a2.4 2.4 0 0 1-3.4 0l-2.8-2.8a2.4 2.4 0 0 1 0-3.4l7-7Z" />
      <path d="M6.4 5.1 4.6 3.3M3.3 8.2l-1.8-.4" />
    </svg>
  )
}

export const ICONS = {
  snowflake: SnowflakeIcon,
  mobilehome: MobileHomeIcon,
  heatpump: HeatPumpIcon,
  duct: DuctIcon,
  thermostat: ThermostatIcon,
  bolt: BoltIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  pin: MapPinIcon,
  wrench: WrenchIcon,
  phone: PhoneIcon,
  flame: FlameIcon,
}
