import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Permet d'écouter sur toutes les interfaces réseau
    port: 5173, // Vous pouvez spécifier un autre port si nécessaire
  },
  plugins: [react()],
  base: '/Portfolio/',
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
})