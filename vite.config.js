import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// GitHub Pages requires /WaterkloofSchool/ for project sites
export default defineConfig({
  plugins: [react()],
  base: '/WaterkloofSchool/',
})
