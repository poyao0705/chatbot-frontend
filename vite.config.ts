import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // add @ for src path resolution
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
