/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      colors: {
        putih: '#FFFBFD',
        merah: '#9D2330',
        abu: '#666',
      }
    },
  },
  plugins: [],
}

