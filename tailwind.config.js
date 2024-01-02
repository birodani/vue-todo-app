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
            keyframes: {
                modalAppear: {
                    from: { top: '-300px', opacity: 0 },
                    to: { top: 0, opacity: 1 },
                },
            },
            animation: {
                modal: 'modalAppear 2s',
                dropdownMenu: 'modalAppear 1s',
            },
        },
    },
    plugins: [],
}
