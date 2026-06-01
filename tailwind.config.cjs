/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#1a1814',
        cream: '#faf6ef',
        sepia: '#8c6a3b',
        rule: '#d8cfbf',
      },
      maxWidth: {
        prose: '38rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
