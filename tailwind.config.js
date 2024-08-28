/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["dosis", "sans-serif"],
      },
      borderRadius: {
        'custom': '0 0 50% 50% / 0 0 100% 100%'
      },
    },
  },
  plugins: [],
};
