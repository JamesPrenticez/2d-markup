/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit"]
      },
      backgroundColor: {
        // primary: "#101010",
        // secondary: "#d1d5db",
        // muted: "#212121",
        // major: "#00FF00",
        // minor: "#7c3aed",

        primary: "#ffffff",
        secondary: "#3c2f1f",
        muted: "#f5f5dc",
        dust: "#a4978e",
        // honeydew: "#ffd27f",
        wheat: "#c7a17a",
        espresso: "#4b3b30",
        bronze: "#6b542e",
        ochre: "#8b6d3b",
        shadow: "#4b3a32",
        umber: "",
        major: "#ffd700",
        minor: "#006994",
      },
      textColor: {
        // primary: "#d1d5db",
        // secondary: "#101010",
        // muted: "#212121",
        // major: "#00FF00",
        // minor: "#7c3aed",


        primary: "#ffffff",
        secondary: "#3c2f2f",
        muted: "#f5f5dc",
        dust: "#a4978e",
        honeydew: "#ffd27f",
        wheat: "#c7a17a",
        espresso: "#4b3b30",
        bronze: "#6b542e",
        ochre: "#8b6d3b",
        shadow: "#4b3a32",
        umber: "#3c2f1f",
        major: "#ffd700",
        minor: "#006994",





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

