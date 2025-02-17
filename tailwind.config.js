module.exports = {
    darkMode: "class", // Enables class-based dark mode
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}", // Added support for layouts directory
        "./widgets/**/*.{js,ts,jsx,tsx}", // Added support for widgets directory
    ],
    theme: {
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
                '192': '48rem', // Added extra large spacing value
            },
            colors: {
                'custom-blue': '#1E40AF',
                'custom-yellow': '#FBBF24',
                'custom-gray': '#2D2D2D', // Added custom gray for better UI contrast
                'custom-red': '#DC2626', // Added custom red for alerts
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"], // Added custom Poppins font
            },
            container: {
                center: true, // Automatically center containers
                padding: "1rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"), // Added line-clamp for text truncation
    ],
};
