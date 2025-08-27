/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  safelist: [
    'bg-yellow-100', 'border-yellow-300',
    'bg-blue-100', 'border-blue-300',
    'bg-green-100', 'border-green-300',
    'bg-purple-100', 'border-purple-300',
    'bg-pink-100', 'border-pink-300',
    'bg-red-100', 'border-red-300',
    'bg-gray-100', 'border-gray-300',
    'bg-indigo-100', 'border-indigo-300',
    'bg-orange-100', 'border-orange-300',
    'bg-white', 'border-gray-300',

    // Safelist for dynamic font sizes
    'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        base: '1.125rem',  // 18px
        lg: '1.25rem',     // 20px
        xl: '1.5rem',      // 24px
        '2xl': '1.875rem', // 30px
        '3xl': '2.25rem',  // 36px
      },
      spacing: {
        'section-y': '6rem', // 96px vertical spacing
      },
      colors: {
        primary: '#006d77',
        secondary: '#83c5be',
        accent: '#edf6f9',
        text: '#333333',
      },
    },
  },
  plugins: [],
};
