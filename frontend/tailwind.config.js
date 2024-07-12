/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#101010",
        secondary: "#d1d5db",
        muted: "#212121",
        major: "#00FF00",
        minor: "#7c3aed",
      },
      textColor: {
        primary: "#d1d5db",
        secondary: "#101010",
        muted: "#212121",
        major: "#00FF00",
        minor: "#7c3aed",
      },
      borderColor: {
        primary: "#101010",
        secondary: "#d1d5db",
        muted: "#212121",
        major: "#00FF00",
        minor: "#7c3aed",
      },
      ringColor: {
        primary: "#fff",
        secondary: "#d1d5db",
        muted: "#212121",
        major: "#00FF00",
        minor: "#7c3aed",
      },
    },
  },
  plugins: [],
}

