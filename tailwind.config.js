
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "sans"],
        dyna: ["DynaPuff", "sans"]
      },
      keyframes: {
        train: {
          '0%': { transform: "translateX(0%)" },
          '100%': { transform: "translateX(-50%)" },
        },
      },
      animation: {
        train: 'train 40s linear infinite'
      }
    },
     
  },
  plugins: [],
}