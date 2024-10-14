/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vrHeader: '#01C117',
        vrLaranja: '#ff7f10',
      },
    },
  },
  plugins: [],
}

