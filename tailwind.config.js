module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
        "./widgets/**/*.{js,ts,jsx,tsx}",
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
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-linear': 'linear-gradient(to right, #1E40AF, #FBBF24)',
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
