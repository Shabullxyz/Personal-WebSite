/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  theme: {
    fontFamily: {
     
      'display': ['Oswald', ...],
      'body': ['"Open Sans"', ...],
    }
  }
}
