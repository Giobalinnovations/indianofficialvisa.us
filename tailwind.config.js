/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C5282',
        secondary: '#1A365D',
        accent: '#ED8936',
        tertiary: '#4299E1',
        success: '#48BB78',
        warning: '#ECC94B',
        danger: '#F56565',
        info: '#4FD1C5',
        light: '#F7FAFC',
        dark: '#2D3748',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dots-pattern': "url('/assets/images/patterns/dots.png')",
        'wave-pattern': "url('/assets/images/patterns/wave.png')",
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        glow: '0 0 15px rgba(66, 153, 225, 0.5)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out forwards',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards var(--delay, 0s)',
        slideIn: 'slideIn 0.6s ease-out forwards var(--delay, 0s)',
      },
    },
  },
  plugins: [],
};
