/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx}", "./src/components/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "g-blue": "#4285f4",
        "g-red": "#db4437",
        "g-yellow": "#f4b400",
        "g-green": "#0f9d58"
      }
    },
  },
  plugins: [],
}
