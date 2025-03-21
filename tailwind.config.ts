import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: '0 0 15px 5px rgba(255, 0, 255, 0.7), 0 0 25px 10px rgba(0, 255, 0, 0.5)', // Neon effect shadow
      },
      animation: {
        neonGlow: 'neonGlow 1.5s infinite alternate', // Apply glowing effect
      },
      keyframes: {
        neonGlow: {
          '0%': {
            boxShadow: '0 0 5px rgba(255, 0, 255, 0.7), 0 0 10px rgba(255, 0, 255, 0.7)',
          },
          '50%': {
            boxShadow: '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5)',
          },
          '100%': {
            boxShadow: '0 0 5px rgba(255, 0, 255, 0.7), 0 0 10px rgba(255, 0, 255, 0.7)',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
