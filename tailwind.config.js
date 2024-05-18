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
            screens: {
                xs: "480px",
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
                '192': '48rem',
            },
            colors: {
                'custom-blue': '#1E40AF',
                'custom-yellow': '#FBBF24',
                'custom-gray': '#2D2D2D',
                'custom-red': '#DC2626',
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
            container: {
                center: true,
                padding: "1rem",
            },
            boxShadow: {
                'soft': '0 4px 6px rgba(0, 0, 0, 0.1)', // Soft shadow for subtle depth
                'medium': '0 6px 10px rgba(0, 0, 0, 0.15)', // Medium shadow for contrast
                'large': '0 10px 20px rgba(0, 0, 0, 0.2)', // Large shadow for emphasis
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
    ],
};
