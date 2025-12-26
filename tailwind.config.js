/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004AAD',
        secondary: '#5de0e6',
        accent: '#00D4FF',
        light: '#F8FAFC',
        dark: '#1A1F2E',
        'gradient-start': '#5de0e6',
        'gradient-end': '#004AAD',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 74, 173, 0.08)',
        'medium': '0 4px 16px rgba(0, 74, 173, 0.12)',
        'strong': '0 8px 32px rgba(0, 74, 173, 0.16)',
        'glow': '0 0 30px rgba(93, 224, 230, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
