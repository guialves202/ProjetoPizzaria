/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#f50926',
      'secondary': '#303030',
      'terceary': '#e9eeee',
      'white': '#fefefe',
      'black': '#111',
      'gray': '#222222',
      'soft-white': '#f1f1f1',
      'yellow': '#fac900',
    },
    extend: {},
  },
  plugins: [],
}

