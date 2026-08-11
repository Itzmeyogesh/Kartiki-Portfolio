/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0f172a',
          900: '#0b0f19',
          950: '#05070d',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        }
      }
    },
  },
  plugins: [],
}