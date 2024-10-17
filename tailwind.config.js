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
                  300:  "hsl(var(--color-brand-zinc-300))",
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
        },
        primary:{
          50:  "hsl(var(--color-primary-50))",
          100:  "hsl(var(--color-primary-100))",
          200:  "hsl(var(--color-primary-200))",
          300:  "hsl(var(--color-primary-300))",
          400:  "hsl(var(--color-primary-400))",
          500:  "hsl(var(--color-primary-500))",
      
        },
        secondary:{
         
          300:  "hsl(var(--color-secondary-300))",
          400:  "hsl(var(--color-secondary-400))",
          500:  "hsl(var(--color-secondary-500))",
          600:  "hsl(var(--color-secondary-600))",
          700:  "hsl(var(--color-secondary-700))",
          800:  "hsl(var(--color-secondary-800))",
      
        }
      }
    },
  },
  plugins: [],
}

