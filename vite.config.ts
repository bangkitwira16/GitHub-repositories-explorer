import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://bangkitwira16.github.io/GitHub-repositories-explorer',
  define: {
    'process.env': {}
  },
  plugins: [react()],
})
