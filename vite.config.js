import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/ChatGPT-Web/',
  server: {
    host: '0.0.0.0'
  },
  build:{
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/ChatGPT-Web/prod" : "/",
  resolve: {
    
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
