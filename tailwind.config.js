/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand: flame orange
        flame: {
          50: '#FFF5EE',
          100: '#FFE8D6',
          200: '#FFCCAA',
          300: '#FFA874',
          400: '#FF8244',
          500: '#FA5A1E',
          600: '#E8430C',
          700: '#BE310B',
          800: '#952810',
          900: '#772410',
        },
        // Brand: slate grey / near-black
        ink: {
          DEFAULT: '#0B1220',
          soft: '#151E2F',
          line: '#233047',
        },
      },
      fontFamily: {
        // System stack = zero font downloads = faster first paint on 4G.
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        cta: '0 12px 28px -12px rgba(250, 90, 30, 0.85)',
        card: '0 1px 2px rgba(11, 18, 32, 0.04), 0 8px 24px -16px rgba(11, 18, 32, 0.25)',
      },
      keyframes: {
        ringPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.6)' },
          '70%': { boxShadow: '0 0 0 8px rgba(34, 197, 94, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(34, 197, 94, 0)' },
        },
      },
      animation: {
        ringPulse: 'ringPulse 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
