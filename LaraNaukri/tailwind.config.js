/** @type {import('tailwindcss').Config} */
import animatePlugin from 'tailwindcss-animate';

export default {
    content: ['./resources/**/*.blade.php', './resources/**/*.js', './resources/**/*.jsx', './resources/**/*.ts', './resources/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                primary: '#00a264',
            },
            fontFamily: {
                montserrat: 'Montserrat, sans-serif',
            },
        },
    },
    plugins: [animatePlugin],
};
