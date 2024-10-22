/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxxxs': '280px', // 280px dan kichik ekranlar uchun
        'xxxs': '320px',  // 320px dan kichik ekranlar uchun
        'xxs': '375px',   // 375px breakpoint
        'xs': '475px',    // 475px breakpoint
      },
    },
  },
  plugins: [],
}
