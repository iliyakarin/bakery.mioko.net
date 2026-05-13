/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFAF6',
          100: '#F8F1E7',
          200: '#EDE4D6',
          300: '#DDD0BE',
        },
        earth: {
          400: '#C8A882',
          500: '#B8926A',
        },
        bark: {
          700: '#7C6D62',
          800: '#4A3F38',
          900: '#2C2825',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
