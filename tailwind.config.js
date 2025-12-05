/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brick: {
                    500: "#A63C3C",
                    600: "#8F2929", // Primary brand color
                    700: "#7A1F1F",
                    800: "#631717",
                    900: "#4D1010",
                },
                amber: {
                    400: "#FBBF24",
                    500: "#F59E0B", // Beer gold
                    600: "#D97706",
                },
                charcoal: {
                    800: "#2D2D2D",
                    900: "#1A1A1A", // Dark background
                    950: "#0F0F0F",
                },
                cream: {
                    50: "#FEFDFB",
                    100: "#FDFBF7", // Light text background
                    200: "#FBF6E9",
                },
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
                display: ["Oswald", "ui-sans-serif", "system-ui", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
