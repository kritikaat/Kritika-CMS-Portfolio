
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // You can add custom colors, fonts, etc. here
      colors: {
        // Custom colors for your brand if needed
      },
      maxWidth: {
        '7xl': '80rem', // For centered layout
      }
    },
  },
  plugins: [],
}