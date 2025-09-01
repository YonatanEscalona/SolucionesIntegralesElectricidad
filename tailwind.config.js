/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amarillo': '#FFD700',
        'azul-oscuro': '#1e3a8a',
        'azul-claro': '#3b82f6'
      }
    },
  },
  plugins: [],
}
