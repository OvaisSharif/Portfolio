

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover:'#fcf4ff',
        darkHover:'#2a004a',
        darkTheme:'#11001F'
      },
      fontFamily: {
        Outfit: ["Outfit","sans-serif"],
        Ovo: ["Ovo","serif"]
      },
      boxShadow: {
       'black': 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
        'white':'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
      },
      gridTemplateColumns: {
        'auto':'repeat(auto-fit, minmax(200px,1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
