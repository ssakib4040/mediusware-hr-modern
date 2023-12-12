/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "black",
          secondary: "black",
          accent: "black",
          neutral: "#686de0",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
