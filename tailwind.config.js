/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'kirakira-yellow': '#ffff00',
        'm-auto': 'margin 0 auto',
        'border-black': 'solid 10px black',
        'transform-0-25': 'translate(0px, 25%)',
        'light-pink': '#ffebe3',
        'light-blue': '#007bd0',
        'light-skin': '#ffebe3',
        'light-gray': '#e5e5e6',
        'light-orange': '#f29600',
        'dark-orange': '#ff9900',
        'light-rainbow': '#ff7c54',
        'table-color1': '#ffebe3',
        'table-color2': '#fff1ec',
        'common-orange': '#FF773E',
        'hexadecimal-color': '#ffe773',
        'lightHexadecimal-color': '#ffe7734d',
        'user-color': '#8dc21f',
        'darkBlue-color': '#003366',
        'lightBlue-color': '#0068b7',
        'orange-color': '#f08300',
        'lightOrange-color': '#FFE60D',
        'blue-color': '#0068b7',
        'gray-color': '#e5e5e6'
      }
    },
    fontSize: {
      small: '10px',
      xs: '0.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    borderWidth: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
      12: '12px',
      14: '14px'
    },
    screens: {
      '2xl': '1535px',
      xl: '1279px',
      lg: { max: '1024px' },
      md: { max: '767px' },
      sm: { max: '639px' }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow:
            '3px 3px 3px white,-3px -3px 3px white,-3px 3px 3px white,3px -3px 3px white,3px 0px 3px white,-3px -0px 3px white,0px 3px 3px white,0px -3px 3px white'
        }
      }
      addUtilities(newUtilities)
    }
  ]
}
