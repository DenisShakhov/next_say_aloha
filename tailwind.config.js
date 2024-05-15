/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-text': '#004F66',
        'blue': '#0083BB',
        'light-blue': '#F4F7F8',
        'grey-text': '#181818'
      },
      container: {
        screens:{
          '2xl': '1160px',
          'md:': '800px'
        }
      },
      borderRadius: {
        '3xl': '30px'
      }
    }
  },
  plugins: [],
};
