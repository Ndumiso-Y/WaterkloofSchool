import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Use relative base for maximum compatibility
export default defineConfig({
  plugins: [react()],
  base: './',
})
