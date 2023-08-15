/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '-2xl': {max: '1535px'},
        '-xl': {max: '1279px'},
        '-lg': {max: '1023px'},
        '-sm': {max: '639px'},
      },
      fontFamily: {
        'roboto': ['var(--font-roboto-mono)'],
        'spartan': ['var(--font-league-spartan)']
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
