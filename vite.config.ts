import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '')
  
  // Log environment variables during build (helps debug Netlify builds)
  console.log('=== VITE BUILD DIAGNOSTICS ===')
  console.log('Build mode:', mode)
  console.log('VITE_GEMINI_API_KEY exists:', !!env.VITE_GEMINI_API_KEY)
  console.log('VITE_GEMINI_API_KEY length:', env.VITE_GEMINI_API_KEY?.length || 0)
  console.log('All VITE_ vars:', Object.keys(env).filter(key => key.startsWith('VITE_')))
  console.log('==============================')
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Explicitly define env variables to ensure they're included
    define: {
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || ''),
    },
    build: {
      // Ensure source maps for debugging
      sourcemap: true,
      rollupOptions: {
        output: {
          // Ensure env vars are not accidentally removed during build
          manualChunks: undefined,
        },
      },
    },
  }
})
