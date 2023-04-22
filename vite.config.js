import {
  defineConfig
} from 'vite'
import {
  fileURLToPath
} from 'url'
import svgLoader from 'vite-svg-loader'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Dev-links",

  plugins: [react(),
    svgLoader({
      defaultImport: 'url',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url)),
    },
  },
})