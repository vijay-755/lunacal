/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBackground: 'rgb(38,42,47)',  // Define custom colors
        customBackground2: 'rgba(97, 97, 97, 0.82)',
        customBorder: 'rgba(150, 190, 231, 1)',
        customFirstwidget: 'rgba(54, 60, 67, 1)',
        customBoxes:'rgb(74,78,84)',
        customUlBackground:'rgb(23,23,23)',
        customButtonBackground:'rgb(40,41,47)',
        customFontButtons:'rgb(163,173,178)',
        customFontContent:'rgba(150, 150, 150, 1)',
        customAddImage:'rgba(255, 255, 255, 0.03)',

      },
      backgroundImage: {
        'custom-gradientRectangle': 'linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)',  // Define your custom gradient here
      },
      fontFamily: {
        customFont: [ 'Plus Jakarta Sans', 'sans-serif'], 
        customFont2: [ 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


// screens: {
//   'sm': '640px',
//   // => @media (min-width: 640px) { ... }

//   'md': '768px',
//   // => @media (min-width: 768px) { ... }

//   'lg': '1024px',
//   // => @media (min-width: 1024px) { ... }

//   'xl': '1280px',
//   // => @media (min-width: 1280px) { ... }

//   '2xl': '1536px',
//   // => @media (min-width: 1536px) { ... }