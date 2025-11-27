/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        waterkloof: {
          green: "#1f5a35",
          gold: "#d7b157",
          softgold: "#e3c679",
          offwhite: "#f7f7f4",
          dark: "#12211a"
        }
      }
    },
  },
  plugins: [],
}
