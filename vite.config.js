import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is only set for production (GitHub Pages), not for local dev
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/my-portfolio-V2/' : '/'
}))
