/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                accent: "rgb(45 212 191)",
                mainDark: "#0a0a0a",
                bMainDark: "rgb(39 39 42)",
                textDark: "#F4F4F5",
                textDark2: "#D4D4D8",
                main: "#fafafa",
                main1: "#F4F4F4",
                bMain: "#E4E4E7",
                text: "#0A0A09",
                text2: "#18181b",
                text3: "#71717A",
                text4: "#3F3F46",
            },
            fontFamily: {
                clash: "Clash",
                clashVariable: "ClashVariable",
                DmSans: "DMSans",
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
                Arrow: "translateY  2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite 2s",
                trackingRight: "trackingRight 1s cubic-bezier(0,.19,.56,1)",
                trackingLeft: "trackingLeft 1s cubic-bezier(0,.19,.56,1)",
            },
            backgroundImage: {
                cardProyect:
                    "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 100%)",
            },
        },
        plugins: [],
    },
};
