/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'pw-purple': '#5E50A1',
        'pw-purple-hover' : '#483b84',
        'pw-orange': '#ff9b00',
        'pw-orange-hover': '#da8e1a',
        'pw-gray60': '#46505C',
        'pw-gray40': '#9EA0A5',
        'pw-gray20': '#E2E5ED',
        'pw-gray10': '#eaeaea',
        'pw-gray5': '#F6F7F8',
        'pw-white': '#F6F7F8',
        'pw-white-hover' : '#ebebeb',
        'pw-black': '#1F2A36',
        'pw-loading': '#ffffffd9'
      }
    },
  },
  plugins: [],
}
