/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'jordancap': "url('./src/assets/jordan2.svg')"
      },
      fontFamily: {
        'archivo': ["Archivo", "sans-serif"]
      }
    },
  },
  plugins: [],
}