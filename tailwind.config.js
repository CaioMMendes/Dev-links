/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobileDark': 'url(@/assets/backgroundDark.svg)',
        'mobileLight': 'url(@/assets/backgroundLight.svg)',
        'switchDark': 'url(@/assets/MoonStars.svg)',
        'switchLight': 'url(@/assets/Sun.svg)',
      }
    },
  },
  plugins: [],
}