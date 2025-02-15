module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}" // Added support for layouts directory
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem', // Added custom spacing values
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography") // Added typography plugin
    ],
};
