/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                noto: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
                poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
}
