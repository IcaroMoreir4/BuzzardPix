/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bzd-orange-light": "#f09819",
        "bzd-orange": "#fe6501",
        "bzd-orange-dark": "#831b0b",
        "bzd-white": "#ffffff",
        "bzd-gray": "#f1eded",
        "bzd-black": "#000000",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'kulim': ['Kulim Park', 'sans-serif'],
      },
      fontSize: {
        '1-xs': ['0.75rem', '1.35'],     // Font size and line height
        '2-xs': ['0.875rem', '1.43'],
        '1-s': ['1rem', '1.5'],
        '2-s': ['1rem', '1.5'],
        '1-m': ['1.125rem', '1.35'],
        '2-m': ['1.125rem', '1.35'],
        '1-l': ['1.5rem', '1.5'],
        '2-l': ['1.5rem', '1.5'],
        '1-xl': ['2rem', '1.25'],
        '2-xl': ['2rem', '1.25'],
        '1-xxl': ['4rem', '1.125'],
        '1-xxxl': ['6rem', '1.12']
      },
    },
  },
  plugins: [],
}

