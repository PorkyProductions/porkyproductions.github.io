import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  assetsInclude: ['**/*.stl'],
  build: {
    rollupOptions: {
        input: {
            index: 'index.html',
            games: 'games.html',
            threeDPrints: 'threeDprints.html',
            models: 'models.html'
        },
        output: {
            dir: './docs',
        }
    }
  }
})