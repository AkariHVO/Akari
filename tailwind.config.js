/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tlw-',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "xsm": "360px",
      "sm": "640px",
      "md": "750px",
      "lg": "990px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    fontFamily: {
      "title": 'var(--font-heading-family)',
      "text": 'var(--font-body-family)',
    },
    extend: {},
  },
  plugins: [],
}

