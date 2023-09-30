/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}"],
    theme: {
        extend: {
            colors: {
                accent: "rgb(45 212 191)",
            },
            fontFamily: {
                clash: "Clash",
                homeLetter: "HomeLetter",
            },
            keyframes: {
                translateY: {
                    "0%": {
                        transform: "translateY(-30%)",
                    },
                    "100%": {
                        transform: "translateY(30%)",
                    },
                },
                trackingLeft: {
                    "0%": {
                        transform: "translateX(100vw)",
                    },
                    "80%": {
                        transform: "translateX(-50%) scale(1.2)",
                    },
                    "100%": {
                        transform: "translateX(1)",
                    },
                },
                trackingRight: {
                    "0%": {
                        transform: "translateX(-100vw)",
                    },
                    "80%": {
                        transform: "translateX(50%) scale(1.2)",
                    },
                    "100%": {
                        transform: "translateX(1)",
                    },
                },
            },
            animation: {
                Arrow: "translateY  2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite 1s",
                trackingRight: "trackingRight 1s cubic-bezier(0,.19,.56,1)",
                trackingLeft: "trackingLeft 1s cubic-bezier(0,.19,.56,1)",
            },
        },
        plugins: [],
    },
};
