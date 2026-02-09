/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                premium: {
                    navy: '#0a192f',
                    'navy-light': '#112240',
                    blue: '#00f3ff',
                    white: '#ffffff',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
                display: ['Outfit', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                premium: {
                    primary: '#00f3ff',
                    secondary: '#ffffff',
                    accent: '#00f3ff',
                    neutral: '#112240',
                    'base-100': '#0a192f',
                    info: '#3abff8',
                    success: '#36d399',
                    warning: '#fbbd23',
                    error: '#f87272',
                },
            },
        ],
    },
};
