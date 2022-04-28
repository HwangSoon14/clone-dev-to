module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#7e57ff',
        'white-smoke': '#f5f5f5',
        'secondary-color': '#3b49df'
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
        slide: 'slide 0.6s',
        scrollDown: 'scrollDown 0.5s'
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateY(-100%)'},
        '50%': {transform: 'translateY(0)'},
        '75%': {transform: 'translateY(-8%)'},
        '100%': { transform: 'translateY(0)' },
      },
      scrollDown: {
        '0%': { transform: 'translateY(-100%)', opacity: 0},
        '50%': {transform: 'translateY(20px)' , opacity: 0.5},
        '100%': { transform: 'translateY(0)', opacity: 1},
      }
      
    }
    },
  },
  plugins: [],
}