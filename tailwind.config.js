/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            blue: {
                101: "#73cdfa",
                102: "#7399fa",
                150: "#f2f3f7",
                950: "#03051f"
            }
        }
    },
  },
  plugins: [],
}
