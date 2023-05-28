/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                // genJyuuGothic: ['GenJyuuGothic', ...defaultTheme.fontFamily.sans],
                'poppins': ['Poppins', 'sans-serif', ...defaultTheme.fontFamily.sans]
            },
            width: {
                30: '7.5rem',
            },
            colors: {
                primary: '#FABE00',
                'primary-light': '#FFEDB4',
                secondary: '#57C3EA',
                brown: '#BF7600',
                dark: '#2F2F2F',
                'dark-blue': '#002138',
                gray: '#767676',
                'gray-light': '#B3B3B3',
            },
            container: (theme) => ({
                center: true,
                padding: theme('spacing.5'),
            }),
        },
    },
    plugins: ['tailwindcss ,autoprefixer'],
}
