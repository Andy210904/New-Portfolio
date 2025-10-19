/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          purple: "#8b5cf6",
          pink: "#f472b6",
          green: "#10b981",
          yellow: "#f59e0b",
          cyan: "#06b6d4",
        },
        dark: {
          950: "#030712",
          900: "#0f0f0f",
          800: "#1a1a1a",
          700: "#2a2a2a",
          600: "#3a3a3a",
          500: "#4a4a4a",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce 3s infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        typewriter: "typewriter 3s steps(40) 1s 1 normal both",
        blink: "blink 1s infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            transform: "translateX(-50%)",
          },
          "50%": {
            transform: "translateX(50%)",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            transform: "translate(-50%, -50%)",
          },
          "25%": {
            transform: "translate(50%, -50%)",
          },
          "50%": {
            transform: "translate(50%, 50%)",
          },
          "75%": {
            transform: "translate(-50%, 50%)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        glow: {
          from: {
            "text-shadow":
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00ff41, 0 0 35px #00ff41, 0 0 40px #00ff41",
          },
          to: {
            "text-shadow":
              "0 0 2px #fff, 0 0 5px #fff, 0 0 8px #fff, 0 0 12px #00ff41, 0 0 18px #00ff41, 0 0 25px #00ff41",
          },
        },
        typewriter: {
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        },
        blink: {
          "0%, 50%": {
            opacity: "1",
          },
          "51%, 100%": {
            opacity: "0",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
