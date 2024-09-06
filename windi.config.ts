import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  plugins: [require('@windicss/plugin-scrollbar')]
})
