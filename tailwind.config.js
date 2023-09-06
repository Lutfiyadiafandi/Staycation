/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridAutoRows: {
        cards: "minmax(0, 215px)",
      },
      screens: {
        at: "1140px",
      },
      colors: {
        primary: "#3252DF",
        secondary: "#152C5B",
        grey: "#B0B0B0",
        pink: "#FF498B",
        gold: "#FFCC47",
      },
      fontSize: {
        heading1: "42px",
        heading2: "36px",
        heading3: "31px",
        display1: "26px",
        display2: "24px",
        display3: "20px",
        detail1: ["18px", { lineHeight: "30.6px" }],
        detail2: ["16px", { lineHeight: "27.2px" }],
        detail3: "15px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
