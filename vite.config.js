import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
        input: {
            index: 'index.html',
            games: 'games.html',
            threeDPrints: '3DPrints.html'
        },
        output: {
            dir: './docs',
        }
    }
  }
})