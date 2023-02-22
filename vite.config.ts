import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from 'svelte-preprocess'
import { type UserConfig } from "vite";
const config: UserConfig = {
  plugins: [
    svelte({
      preprocess: preprocess()
    })
  ],
  appType: "mpa",
  base: "/",
  css: {
    devSourcemap: true,
  },
  build: {
    target: "es2017",
    emptyOutDir: false,
    cssCodeSplit: true,
    sourcemap: true,
    minify: "esbuild",
    rollupOptions: {
      treeshake: "recommended",
      input: {
        index: 'index.html',
        games: 'games.html',
        threeDPrints: 'threeDprints.html',
        models: 'models.html',
        developments: 'developments.html',
        experiments: 'experimental.html',
        fourOhFour: '404.html'
      },
      output: {
          dir: './docs',
      },
    },
  },
};
export default config
