/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        error: "#EA4E2C",
        success: "#3FBE61",
        info: "#006DE3"
      },
      animation: {
        toast: "appear 0.3s forwards, disappear 0.3s 2.5s forwards"
      },
      keyframes: {
        appear: {
          "0%": {
            maxHeight: 0,
            opacity: 0,
            right: "-100%"
          },
          "100%": {
            maxHeight: "160px",
            opacity: 1,
            right: "20px"
          }
        },
        disappear: {
          "0%": {
            maxHeight: "160px",
            opacity: 1,
            right: "20px"
          },
          "100%": {
            maxHeight: 0,
            opacity: 0,
            right: "-100%"
          }
        }
      }
    },
  },
  plugins: [],
}
