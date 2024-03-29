/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT(
    {
      darkMode: "",
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
          'node_modules/flowbite-react/lib/esm/**/*.js',
      ],
      theme: {
        extend: {
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
                'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          },
          colors: {
            primary: "#28B2FF",
            textPrimary: "#252525",
            colorBorder: "#C4C4C4",
            premium: "#FFCB12"
            
            

          },
          fontFamily: {
            montserrat:['Montserrat', 'sans-serif'],
            
          },
          // customForms: theme => ({
          //       default: {
          //           checkbox: {
          //               icon: '<svg fill="#1a202c" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>',
          //               '&:hover': {
          //                   icon: '<svg fill="#4a5568" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>',
          //               },
          //           },
          //           radio: {
          //               icon: '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          //                   '<rect y="0.5" width="19" height="19" rx="9.5" fill="#537FE7"/>\n' +
          //                   '<circle cx="9.5" cy="10" r="5.5" fill="white"/>\n' +
          //                   '</svg>\n'
          //           },
          //       },
          // })
        },
      },

      plugins: [
          require('@headlessui/tailwindcss'),
          require('flowbite/plugin')
  ],
    }
)
