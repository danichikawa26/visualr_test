/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      current: "currentColor",
      white: {
        DEFAULT: "var(--white)"
      },
      gray: {
        lighter: "var(--text-lighter-gray)",
        light: "var(--text-light-gray)",
        DEFAULT: "var(--text-gray)",
        dark: "var(--line)",
        darker: "var(--bg-form)"
      },
      blue: {
        DEFAULT: "var(--bg-dark-1)",
        dark: "var(--bg-dark-2)"
      },
      orange: {
        light: "rgb(var(--primary-color-rgb) / <alpha-value>)",
        DEFAULT: "var(--primary-color)"
      }
    }
  },
  plugins: []
};
