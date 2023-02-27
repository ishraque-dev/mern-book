/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryGreen: 'var(--primary-green)',
        primaryBlue: 'var(--primary-blue)',
        secondaryBlue: 'var(--secondary-blue)',
        primaryBlack: 'var(--primary-black)',
        secondaryBlack: 'var(--secondary-black)',
        primaryPurple: 'var(--primary-purple)',
        primaryWhite: 'var(--primary-white)',
        secondaryWhite: 'var(--secondary-white)',
        primaryBgWhite: 'var(--primary-bg-white)',
        borderColor: '#F7F7F7',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        primary: "'Noto Sans', sans-serif",
      },
      container: {
        center: true,
      },
      
    },
  },
  plugins: [],
};
