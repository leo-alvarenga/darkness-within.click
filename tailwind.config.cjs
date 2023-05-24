/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fill: {
        'force-fore': 'filter: invert(100%) sepia(25%) saturate(388%) hue-rotate(275deg) brightness(86%) contrast(92%)'
      },
      colors: {
        black1: '#151314',
        black2: '#1f1c1e',
        gray1: '#312c2f',
        gray2: '#4b4447',
        gray3: '#6b6166',
        gray4: '#91858b',
        gray5: '#b8b0b4',
        white1: '#e4e2e3',
        pink1: '#e782c0',
        pink2: '#f785cb',
        pink3: '#fd8ad0',
        purple1: '#c1b7f3',
        blue1: '#006599',
        green1: '#42aa81',
        green2: '#51e1aa',
        green3: '#b2be27',
        salmon1: '#f8b090',

        foreground: '#d4d0d3',
        background: '#0c0a0b'
      },

      animation: {
        blink: 'vanish 2s linear infinite',
        fliping: 'flip 3s infinite',
        rotation: 'spin 1s linear infinite',
        altrotation: 'altspin 0.5s linear infinite'
      },
      keyframes: {
        blinking: {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0'
          }
        },
        vanish: {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '.5'
          }
        },
        flip: {
          '0%, 80%': {
            transform: 'rotateY(360deg)'
          }
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        altspin: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      },

      fontFamily: {
        term: ['Anonymous Pro', 'monospace']
      }
    }
  },
  plugins: []
}
