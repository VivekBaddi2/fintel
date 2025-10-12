/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",   // if using App Router
        "./pages/**/*.{js,ts,jsx,tsx}", // if you have Pages Router
        "./components/**/*.{js,ts,jsx,tsx}" // all your components
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
