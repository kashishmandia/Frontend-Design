/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      backgroundImage: {
        // UPDATED: Much whiter gradient (0.9 to 0.7) to hide the blue background
        panel: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)',
        answer: 'linear-gradient(to right, #e0f2fe, #f0f9ff)', // Very light blue for active item
      },
      boxShadow: {
        // UPDATED: Deep, soft shadow to make the card "float"
        glass: '0 20px 50px -12px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 0 20px rgba(255, 255, 255, 0.5)',
      },
      borderRadius: {
        jumbo: '40px',
        pill: '50px',
      },
      colors: {
        ink: '#15313D',
      }
    },
  },
  plugins: [],
}