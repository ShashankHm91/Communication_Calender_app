import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure output directory is 'dist'
    chunkSizeWarningLimit: 1000,  // Optional: Increase chunk size warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';  // Bundle vendor code separately
          }
        }
      }
    }
  },
  server: {
    port: 3000,
  }
})
