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

