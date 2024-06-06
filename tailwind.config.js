/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        medulaOne: ["'Medula One'", "sans-serif"]
      },
      colors: {
        light_green: "#084A32A8",
        dark_green: "#084A32",
        red: "#720902",
        disactive_green: '#1E2D28A8',
        dark_black: "#000A0654"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}