module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}", // Added support for layouts directory
        "./widgets/**/*.{js,ts,jsx,tsx}" // Added support for widgets directory
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem', // Added custom spacing values
                '160': '40rem', // Added another custom spacing value
            },
            colors: {
                'custom-blue': '#1E40AF', // Added custom blue color
                'custom-yellow': '#FBBF24' // Added custom yellow color
            }
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"), // Added typography plugin
        require("@tailwindcss/aspect-ratio") // Added aspect-ratio plugin for responsive images and videos
    ],
};
