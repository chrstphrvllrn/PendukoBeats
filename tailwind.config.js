/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
       
        brand: {
            primary: 'hsl(var(--color-brand-primary))',
            secondary: "hsl(var(--color-brand-secondary))",
             white: "hsl(var(--color-brand-white))",
             zinc: {
                  50:  "hsl(var(--color-brand-zinc-50))",
                  100:  "hsl(var(--color-brand-zinc-100))",
                  200:  "hsl(var(--color-brand-zinc-200))",
                  400:  "hsl(var(--color-brand-zinc-400))",
                  500:  "hsl(var(--color-brand-zinc-500))",
                  700:  "hsl(var(--color-brand-zinc-700))",
                  800:  "hsl(var(--color-brand-zinc-800))",
             },
             gray:{
                400: "hsl(var(--color-brand-gray-400))",
                700: "hsl(var(--color-brand-gray-700))"
             }
            },
         ivory: {
            primary: "hsl(var(--color-ivory-primary))",
        },
         bronze: {
            primary: "hsl(var(--color-bronze-primary))",
        },
        lightgray:{
            primary: "hsl(var(--color-lightgray-primary))"
        },
        goldenyellow:{
          primary: "hsl(var(--color-goldenyellow-primary))"
        } 
      }
    },
  },
  plugins: [],
}

