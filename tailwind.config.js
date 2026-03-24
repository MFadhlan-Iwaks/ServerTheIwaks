module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        mc: {
          dirt: '#8B5A2B',
          grass: '#4CAF50',
          wood: '#A0522D',
          stone: '#9E9E9E',
          bg: '#FDFBF7'
        }
      }
    },
  },
  plugins: [],
};