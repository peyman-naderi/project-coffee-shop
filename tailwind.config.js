/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        "brown": {
          "100" : "#ECE0D1",
          "300" : "#DBC1AC",
          "600" : "#967259",
          "900" : "#634832"
        },        
      },
      boxShadow : {
        "normal" : "0px 1px 10px rgba(0, 0, 0, 0.05) ",
      },
      borderRadius : {
        "4xl" : "2rem"
      },
      fontFamily : {
        "dana" : "dana",
        "danaMedium" : "dana medium",
        "danademibold" : "dana demibold",
        "morabbaLight" : "morabba light",
        "morabbaMedium" : "morabba medium",
        "morabbaBold" : "morabba bold",
      },
      letterSpacing : {
        "tightest" : "-0.065em"
      },
      spacing : {
        "30" : "7.5rem",
        "25" : "6.25rem",
        "50" : "12.5rem",
        
      },
      container : {
        center : true,
        padding : {
          default : "1rem",
          lg : "0.625rem",
        }
      },
      backgroundImage : {
        "bg-desctop" : "url(../img/headerBgDesktop.webp)",
        "bg-mobile" : "url(../img/headerBgMobile.webp)",
        "bg-product" : "url(../img/body-bg.png)" 
      }
    },
    screens : {
      "xs" : "480px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}
