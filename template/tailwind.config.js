/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./public/**/*.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                "fixel": "'Fixel'",
                "sofia_kyivska": "'Sofia Kyivska'",
                "rutenia": "'Rutenia'",
                "rutenia_arial": "'Rutenia Arial'"
            }
        },
        colors: {
            "blue": '#0088ff',
            "green": '#008800',
            "red": '#ff2800',
            "gold": '#ffd700',
            "yellow": '#ffff00',
            "gray": '#999999',
            // project colors
            "black": "rgb(1,9,15)",
            "dark": "rgb(2,23,39)",
            "prev-dark": "rgb(3,38,64)",
            "default": "rgb(4,52,88)",
            "prev-light": "rgb(5,66,112)",
            "light": "rgb(6,81,137)",
            "super-light": "rgb(7,95,161)",
            "bright": "rgb(8,109,185)",
            "prev-bright": "rgb(9,124,210)",
            "vivid": "rgb(10,138,234)",
            "sky": "rgb(24,151,245)",
            "soft-sky": "rgb(49,162,246)",
            "light-sky": "rgb(73,173,247)",
            "cloud": "rgb(97,184,248)",
            "bright-cloud": "rgb(122,195,249)",
            "soft-cloud": "rgb(146,206,250)",
            "lighter-cloud": "rgb(170,217,251)",
            "fade-cloud": "rgb(195,228,252)",
            "pale-blue": "rgb(219,239,253)",
            "near-white": "rgb(243,250,254)",
            "white": "rgb(255,255,255)"
        }
    },
    plugins: [],
};
