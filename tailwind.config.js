/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#64748b",
        dark: "#0f172a"
      },
      screens: {
        "2xl": "1320px"
      }
    }
  }
}
