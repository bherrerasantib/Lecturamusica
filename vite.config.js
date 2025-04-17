// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import vue  from '@vitejs/plugin-vue'
import path from 'path'

// Plugins extras
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport   from 'unplugin-auto-import/vite'
import Components   from 'unplugin-vue-components/vite'

export default defineConfig(({ mode }) => {
  // Carga variables de entorno de .env y .env.[mode]
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      // Soporte de SFC de Vue
      vue(),

      // Auto-import de APIs de Vue, Router y Pinia
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'src/auto-imports.d.ts',
      }),

      // Auto-registra componentes de /src/components
      Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        deep: true,
        dts: 'src/components.d.ts',
      }),

      compression(),                                 // gzip
      compression({ algorithm: 'brotliCompress' }),  // brotli

      // Genera un reporte HTML del bundle
      visualizer({
        filename: 'dist/stats.html',
        open: false,        
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    server: {
      port: Number(env.VITE_PORT) || 5173,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, ''),
        },
      },
    },

    build: {
      outDir: 'dist',
      sourcemap: false,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
          },
        },
      },
    },

    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia'],
    },
  }
})
