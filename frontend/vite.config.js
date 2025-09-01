import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: process.env.PORT || 5173,
    host: true,
    allowedHosts: [
      'taskwar-ckj1.onrender.com'  // apna Render frontend URL
    ]
  }

})
