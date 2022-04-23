module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#7e57ff',
        'white-smoke': '#f5f5f5'
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
        slide: 'slide 1.3s'
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateY(-100%)'},
        '50%': {transform: 'translateY(0)'},
        '75%': {transform: 'translateY(-8%)'},
        '100%': { transform: 'translateY(0)' },
      }
    }
    },
  },
  plugins: [],
}