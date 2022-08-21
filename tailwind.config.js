/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      "primary": "#0A0908",
      "secondary": "#22333b"
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
