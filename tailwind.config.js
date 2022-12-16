/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#393E46",
        secondary: "#6D9886",
        tertiary: "#6D9886",
        background: "#F7F7F7",
        title: "#495057",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
