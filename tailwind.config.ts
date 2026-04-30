import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f8ff",
          500: "#1f4ed8",
          700: "#1639a3"
        }
      }
    }
  },
  plugins: []
};

export default config;