/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, colors:{
        "primary-orange":"#F78840",
        "primary-halfWhite":"#FBFAF2",
        "primary-green":"#006A4E",
        "primary-white":"#F1F1F1",
        "primary-hover-blue":"#D0F0C0"

      }
      
    },
  },
  plugins: [],
}
