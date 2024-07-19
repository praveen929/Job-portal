module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gradientMid: '#fef7e3',
        gradientStart: '#fef7e3',
        // gradientStart: '#eae2b7',
        // gradientEnd: '#c4dac2',
      },
      animation: {
                fadeInLeft: 'fadeInLeft 1s ease-in-out',
                fadeInRight: 'fadeInRight 1s ease-in-out',
                bounce: 'bounce 1s infinite',
              },
              keyframes: {
                fadeInLeft: {
                  '0%': { opacity: 0, transform: 'translateX(-20px)' },
                  '100%': { opacity: 1, transform: 'translateX(0)' },
                },
                fadeInRight: {
                  '0%': { opacity: 0, transform: 'translateX(20px)' },
                  '100%': { opacity: 1, transform: 'translateX(0)' },
                },
              },
    },
  },
  plugins: [],
}

