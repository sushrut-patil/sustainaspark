//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#015D67',  // Your teal color
          'light': '#0B7285',
          'dark': '#014855',
        },
        'secondary': {
          DEFAULT: '#FFB800',  // Your yellow color
          'light': '#FFCD4D',
          'dark': '#CC9400',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
