import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	outDir: 'docs',
	base: '/',
	integrations: [tailwind()],
});
