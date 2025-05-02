/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        'textPrimary': '#1E293B',
        'textMuted': '#64748B',
        'navigationColor': '#0057FF',
        'primaryAccent': '#0057FF',
      },

      fontSize: {
        'sl': '0.875rem'
      }
    },
  },
  plugins: [],
}
