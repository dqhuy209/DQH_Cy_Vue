/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-+/,
    },
  ],
}

// :class=
// "[
//   'w-[75px] pt-[10px] py-[10px] rounded-full text-white ',
//   selectedColors[product.id] === color.color
//     ? 'bg-' + color.color.toLowerCase() + '-500'
//     : 'bg-gray-400',
// ]"
