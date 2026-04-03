import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(),],
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.hdr', '**/*.mp4', '**/*.mov'],
  base:"/PortfolioDocs/",
   build: {
    chunkSizeWarningLimit: 2000, 
  rollupOptions: {
    output: {
      manualChunks(id) {
        // Use a single slash and check for the core libraries
        if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
          return 'r3f-bundle';
        }
      }
    }
  }
},
  server:{
    cachedir:"node_modules/.vite",
    hmr: {
      overlay: true,
      clientPort: 1909,
      port : 5173,
      watch: {
        usePolling: true,
      }

    }
  }
})

