/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    colors: {
      "primary": "#0A0908",
      "secondary": "#22333b",
      "tertiary": "#F2F4F3",
      "quaternary": "#A9927D",
      "quinary": "#5E503F"
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      cs: '1360px',
      xl: '1440px',
    },

    extend: {
      minHeight: (theme) => ({
        ...theme("spacing"),
      })
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
