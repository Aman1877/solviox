import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative paths in the built HTML so it works when opened from the filesystem or subpaths
  base: './',
  plugins: [react()],
})
