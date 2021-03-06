module.exports = {
    content: [
        "./app.vue",
        "./components/**/*.{vue,js,jsx,ts,tsx}",
        "./layouts/**/*.{vue,js,jsx,ts,tsx}",
        "./pages/**/*.{vue,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                "sm-red": "0 0 1px red",
            },
        },
    },
    plugins: [],
};
