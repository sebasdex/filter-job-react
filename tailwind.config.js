/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-img': "url('/assets/images/bg-header-mobile.svg')",
        'desktop-img': "url('/assets/images/bg-header-desktop.svg')"
      }
    },
  },
  plugins: [],
}

