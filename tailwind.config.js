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
            letterSpacing: {
                tighter: '-0.05em',
                normal: '0',
                wider: '0.05em',
            },
            backgroundImage: {
                'gradient-radial': "radial-gradient(var(--tw-gradient-stops))",
                'gradient-linear': "linear-gradient(to right, var(--tw-gradient-stops))",
            },
            boxShadow: {
                soft: "0 4px 6px rgba(0, 0, 0, 0.1)",
                deep: "0 10px 15px rgba(0, 0, 0, 0.2)",
            },
            animation: {
                fadeIn: "fadeIn 0.5s ease-in-out",
                slideUp: "slideUp 0.4s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                slideUp: {
                    "0%": { transform: "translateY(10px)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
        require("tailwindcss-animate"), // Added for animations
    ],
};
