/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens:{
        sm:'480px',
        md: '768px',
        lg: '1024px',
    },
    extend: {
        colors: {
            primaryColor: '#010a5e',
            primaryColorLight:'#010a5e',
            secondaryColor: '#FFCC00',
            paragraphColor:'#c0c0c0',
            wihteColor:'#fff',
            blackColor:'#000',
            greenColor:'#007936',
            redColor:'#cc3433',
            darkColor:'#000',
            darkColorLight:'#171717',
        },
        keyframes: {
            move: {
                "50%": {transform: 'translateY(-1rem)'}
            }
        },
        animation: {
            'movingY': 'move 2s linear infinite'
        }
    },
    container:{
        center: true,
        padding:{
            default: '1rem',
            sm: '1.5rem'
        }
    }
    ,
    fontFamily :{
      oswald :['Oswald','sans-serif'],
      dmsans: ['DM Sans' , 'sans-serif']
    }
  },
  plugins: [],
}

