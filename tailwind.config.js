module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}" // Added support for layouts directory
    ],
    theme: { extend: {} },
    plugins: [require("@tailwindcss/forms")],
};
