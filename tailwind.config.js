/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
        overlay: 'var(--overlay)',
        bg: 'var(--bg)',
        bw: 'var(--bw)',
        blank: 'var(--blank)',
        text: 'var(--text)',
        mtext: 'var(--mtext)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        ringOffset: 'var(--ring-offset)',

        secondaryBlack: '#212121',
      },
      borderRadius: {
        base: '0px'
      },
      boxShadow: {
        shadow: 'var(--shadow)'
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': {
            transform: 'rotate(15deg)',
            transformOrigin: 'bottom',
          },
          '50%': {
            transform: 'rotate(30deg)',
            transformOrigin: 'bottom',
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
