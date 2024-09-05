/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cor-0': 'var(--cor-0)',
        'cor-1': 'var(--cor-1)',
        'cor-2': 'var(--cor-2)',
        'cor-3': 'var(--cor-3)',
        'cor-4': 'var(--cor-4)',
        'cor-5': 'var(--cor-5)',
        'cor-6': 'var(--cor-6)',
        'cor-7': 'var(--cor-7)',
        'cor-8': 'var(--cor-8)',
        'cor-9': 'var(--cor-9)',
        'cor-10': 'var(--cor-10)',
        'cor-11': 'var(--cor-11)',
        'cor-12': 'var(--cor-12)',
        'cor-p1': 'var(--cor-p1)',
        'cor-p2': 'var(--cor-p2)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'kulim': ['Kulim Park', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', '1.35'],     // Font size and line height
        'sm': ['0.875rem', '1.43'],
        'base': ['1rem', '1.5'],
        'lg': ['1.125rem', '1.35'],
        'xl': ['1.5rem', '1.5'],
        '2xl': ['2rem', '1.25'],
        '4xl': ['4rem', '1.125'],
      },
    },
  },
  plugins: [],
}

