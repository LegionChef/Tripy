//for single paste this
	/** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          gendyFont: ["gendyFont", "sans-serif"],
        },
        fontWeight: {
          extralight: 200,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          // Mapping higher weights to the closest available weight
          extrabold: 700, // Map extra bold to bold
          black: 800, // Map black to bold
        },
        keyframes: {
          marquee: {
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          marquee: 'marquee 20s linear infinite',
        },
      },
    },
    plugins: [],
  }
  