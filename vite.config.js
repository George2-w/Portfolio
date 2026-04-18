import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(),],
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.hdr', '**/*.mp4', '**/*.mov'],

  server: {
    host: '0.0.0.0',
    port: 8090,
    watch: {
      usePolling: true,
    }
  }
})

