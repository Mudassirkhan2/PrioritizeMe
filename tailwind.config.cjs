/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
          focus: '0 0 10px 1000px rgba(0,0,0,0.5)',
          buttonshadow:' 0 0 10px black',
          
      },
      fontFamily:{
        Limelight:[ 'Limelight', "cursive"],
        RampartOne:['Rampart One'," cursive"]
      
    },
  },
  plugins: [],
}
}