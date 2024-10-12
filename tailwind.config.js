/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "my-green": "#6FA35D",
        "my-skyblue": "#56b7bc",
        "my-yellow": "#F0AA45",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};
