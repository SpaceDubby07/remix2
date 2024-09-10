import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: true,
  },
  plugins: [require('daisyui')],
} satisfies Config;
