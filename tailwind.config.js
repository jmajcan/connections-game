/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cupidsCards: {
          primary: "#fb6f92",
          secondary: "#ff8fab",
          accent: "#ffb3c6",
          neutral: "#33151c",
          base: "#ffe5ec",
          info: "#6ed6fa",
          success: "#00b57e",
          warning: "#faf16e",
          error: "#ff2d46",
        },
        kindler: {
          primary: "#0033a0",
          secondary: "#71b3dd",
          accent: "#ee7b30",
          neutral: "#2b2d42",
          base: "#deeef7",
          info: "#00a9e0",
          success: "#27999889",
          warning: "#ffb81c",
          error: "#ff002b",
        },
        cozyCorner: {
          primary: "#d90429",
          secondary: "#ef233c",
          accent: "#8d99ae",
          neutral: "#2b2d42",
          base: "#edf2f4",
          info: "#0499d9",
          success: "#2f8843f",
          warning: "#d9cf04",
          error: "#ae0320",
        },
        getReal: {
          primary: "#2c6e49",
          secondary: "#4c956c",
          accent: "#d68c45",
          neutral: "#1d1a20",
          base: "#fefee3",
          info: "#8cc8e4",
          success: "#205125",
          warning: "#f5b800",
          error: "#d68c45",
        },
        primary: '#1BAD69',
        secondary: '#2C5843',
        accent: '#EAEAEA',
        neutral: '#101715',
        light: {
          100: '#f2f2f2',
          200: '#EAEAEA',
          300: '#C8C8C8',
        },
        info: '#321CAD',
        success: '#2cc692',
        warning: '#e3b505',
        error: '#AD2F1C',
      }
    },
  },
  daisyui: {
    themes: [
      {
        cupidsCards: {
          "primary": "#fb6f92",
          "secondary": "#ff8fab",
          "accent": "#ffb3c6",
          "neutral": "#33151c",
          "base-100": "#ffe5ec",
          "info": "#6ed6fa",
          "success": "#00b57e",
          "warning": "#faf16e",
          "error": "#ff2d46",
        },
        kindler: {
          "primary": "#0033a0",
          "secondary": "#71b3dd",
          "accent": "#ee7b30",
          "neutral": "#2b2d42",
          "base-100": "#deeef7",
          "info": "#00a9e0",
          "success": "#27999889",
          "warning": "#ffb81c",
          "error": "#ff002b",
        },
        cozyCorner: {
          "primary": "#d90429",
          "secondary": "#ef233c",
          "accent": "#8d99ae",
          "neutral": "#2b2d42",
          "base-100": "#edf2f4",
          "info": "#0499d9",
          "success": "#2f843f",
          "warning": "#d9cf04",
          "error": "#ae0320",
        },
        getReal: {
          "primary": "#2c6e49",
          "secondary": "#4c956c",
          "accent": "#d68c45",
          "neutral": "#1d1a20",
          "base-100": "#fefee3",
          "info": "#8cc8e4",
          "success": "#205125",
          "warning": "#f5b800",
          "error": "#d68c45",
        },
      },
    ],
  },
  plugins: [
    daisyui,
  ],
}
