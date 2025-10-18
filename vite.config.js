import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 9099,
    proxy: {
      '/api': {
        target: 'http://localhost:9098',  // 👈 backend address
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
