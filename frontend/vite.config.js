import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: 'http://localhost:3001', // The port where your backend server is running
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\//, '')
      }
    }
  }
})