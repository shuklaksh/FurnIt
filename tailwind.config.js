module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fef9f4", 100: "#f6f6f6", 500: "#8f8f8f", "50_01": "#f8f8f8", "50_a3": "#f8f8f8a3" },
        white: { A700: "#ffffff" },
        yellow: { 100: "#fee3ca" },
        blue_gray: { 100: "#d9d9d9", 400: "#878690", "900_01": "#23292e" },
        black: {
          900: "#000201",
          "900_3f": "#0000003f",
          "900_7f": "#04080f7f",
          "900_87": "#00020187",
          "900_7f_01": "#0000007f",
        },
        red: { A200: "#ff4f4f" },
        orange: { 50: "#feefe0", 400: "#ff9432" },
        gray_200: "#ededed",
      },
      boxShadow: { xs: "10px 20px  60px 0px #0000003f" },
      fontFamily: {
        rubik: "Rubik",
        raleway: "Raleway",
        pollerone: "Poller One",
        plusjakartasans: "Plus Jakarta Sans",
        poppins: "Poppins",
        josefinsans: "Josefin Sans",
      },
      opacity: { 0.81: 0.81, 0.5: 0.5 },
      backgroundImage: { gradient: "linear-gradient(135deg, #273032,#274b53)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
