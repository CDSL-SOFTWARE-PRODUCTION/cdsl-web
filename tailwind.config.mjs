/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                premium: {
                    navy: '#0b0c10', // Deep rich black-blue
                    'navy-light': '#1f2833', // Lighter technical gray-blue
                    blue: '#66fcf1', // Electric Cyan (Vucko/Cyberpunk accent)
                    white: '#ffffff',
                    gray: '#c5c6c7', // Muted text
                    black: '#000000',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                display: ['Outfit', 'ui-sans-serif', 'system-ui'],
                logo: ['"Bruno Ace SC"', 'sans-serif'],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                premium: {
                    primary: '#66fcf1',
                    secondary: '#1f2833',
                    accent: '#45a29e',
                    neutral: '#1f2833',
                    'base-100': '#0b0c10',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272',
                },
                clarity: {
                    primary: '#0b0c10', // Dark Navy as primary for high contrast
                    secondary: '#1f2833',
                    accent: '#66fcf1', // Electric Cyan as accent
                    neutral: '#f3f4f6', // Light Gray
                    'base-100': '#ffffff', // White background
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272',
                },
            },
        ],
    },
};
