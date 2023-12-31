/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "Blue": "hsl(246, 80%, 60%)",

        "Lightred(work)": "hsl(15, 100%, 70%)",
        "Softblue(play)": "hsl(195, 74%, 62%)",
        "Lightred(study)": "hsl(348, 100%, 68%)",
        "Limegreen(exercise)": "hsl(145, 58%, 55%)",
        "Violet(social)": "hsl(264, 64%, 52%)",
        "Softorange(self care)": "hsl(43, 84%, 65%)",

        "Verydarkblue": "hsl(226, 43%, 10%)",
        "Darkblue": "hsl(235, 46%, 20%)",
        "Desaturatedblue": "hsl(235, 45%, 61%)",
        "PaleBlue": "hsl(236, 100%, 87%)",
        
      },
      fontFamily: {
        'rubik': ['"Rubik"', 'sans-serif']
      }    
    },
  },
  plugins: [],
}

