/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-outer":
          "inset 0 10px 12px 0 rgba(0, 0, 0, 0.1), 0 15px 16px -3px rgba(0, 0, 0, 0.3), 0 4px 15px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
