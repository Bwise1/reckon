/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "2rem",
        lg: "5rem",
      },
    },
    extend: {
      screens: {
        md: "1024px", // Custom size for medium screens
        lg: "1280px", // Custom size for laptop screens
      },
      fontFamily: {
        hellix: ["var(--font-hellix)"],
      },
      colors: {
        reckonBlue: "#003566",
        reckonBlueGreen: "#289693",
        reckonLightBlue: "#E6E6E6",
      },
      backgroundImage: {},
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
