// tailwind.config.js
import { createThemes } from "shadcn-ui/themes";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    createThemes({
      light: {
        background: "bg-sky-100",
        foreground: "#000000",
        primary: "#16a34a", // hijau tua
        "primary-foreground": "#ffffff",
      },
      dark: {
        background: "#0f172a",
        foreground: "#ffffff",
        primary: "#22c55e", // hijau terang
        "primary-foreground": "#000000",
      },
    }),
  ],
};
