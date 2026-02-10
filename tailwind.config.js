/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'premium-navy': '#0b0c10',
                'premium-navy-light': '#1f2833',
                'premium-blue': '#66fcf1',
                'premium-white': '#ffffff',
                'premium-gray': '#c5c6c7',
                'premium-black': '#000000',
                'body-base': '#c5c6c7',
                'background-dark': '#0b0c10',
            },
            fontFamily: {
                sans: ['var(--font-sans)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['var(--font-display)', 'Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                logo: ['Bruno Ace SC', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
