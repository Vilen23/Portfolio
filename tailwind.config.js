/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
          
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      backgroundImage: {
        'gradient-to': 'linear-gradient(to right, #FBB03B, #D4145A)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gradientColorStops: theme => ({
        'stop1': '#FBB03B',
        'stop2': '#D4145A',
      })
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.border-gradient': {
          border: 'double 1px transparent',
          backgroundImage: 'linear-gradient(to right, #D4145A, #FBB03B)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'content-box, border-box', 
          boxDecorationBreak: 'clone'
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
