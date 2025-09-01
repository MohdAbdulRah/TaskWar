import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: process.env.PORT || 5173, // Render ka PORT use karega
    host: true                      // external access ke liye
  }
})
