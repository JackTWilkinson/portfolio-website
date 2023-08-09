/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
