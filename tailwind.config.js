/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
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
        DEFAULT: "rgb(var(--primary-color) / <alpha-value>)"
      }
    }
  },
  plugins: []
};
