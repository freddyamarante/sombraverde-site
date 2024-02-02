/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        orange: '#FA8006',
        sun: '#FEE506',
        ocean: '#0252D8',
        palm: {
          light: '#117E1C',
          DEFAULT: '#0F6C18',
          dark: '#07360C',
        },
        night: {
          light: '#234332',
          DEFAULT: '#0E1B14',
        },
        pale: '#FBFDFC',
      },
    },
  },
  plugins: [],
}
