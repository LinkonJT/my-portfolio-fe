import flowbitePlugin from 'flowbite/plugin'

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  // theme: {
  //   extend: {
  //     colors: {},
  //     fontFamily: {
  //       sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  //     },
  //   }
  // },
  plugins: [
    flowbitePlugin
  ],
}
