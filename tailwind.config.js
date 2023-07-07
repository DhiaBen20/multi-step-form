/** @type {import('tailwindcss').Config} */
import Theme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Ubuntu", ...Theme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
