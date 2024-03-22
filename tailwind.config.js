/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "font-Marcellus": ['Marcellus', 'serif'],
        "font-Yanone": ['Yanone Kaffeesatz', 'sans-serif'],
        "font-Josefin": ['Josefin Sans', 'sans-serif'],
        "font-Kanit": ['Kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
}

