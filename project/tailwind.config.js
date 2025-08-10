/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#61210a',      // Cioccolato - CTA, hover
        accent: '#6e3c0d',       // Cafe Royale - backgrounds
        'text-dark': '#271202',  // Kilamanjaro - strong text
        'text-subtle': '#3e3504', // Deep Bronze - secondary elements
        highlight: '#FFD166',    // Optional vivid accent for badges/icons
        background: '#FFFFFF',   // White base
        // Legacy colors for dashboards
        coral: '#FF6F61',
        pistachio: '#A8E6CF',
        charcoal: '#1C1C1C',
        'dark-gray': '#4F4F4F',
        mango: '#FFD166',
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
        'sans': ['Epilogue', 'sans-serif'],
        // Legacy fonts for dashboards
        'archivo': ['Archivo Black', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
