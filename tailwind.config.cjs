/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        coal: '#18131e',
        spark: '#ffae00',
        ember: '#e3452c',
      },
      boxShadow: {
        DEFAULT: '10px 10px 30px black'
      }
    },
  },
  plugins: [],
}
