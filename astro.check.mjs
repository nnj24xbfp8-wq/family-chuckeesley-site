import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'; import sitemap from '@astrojs/sitemap'; import tailwind from '@astrojs/tailwind';
export default defineConfig({ site:'https://family.chuckeesley.com', integrations:[mdx(),sitemap(),tailwind()], image:{service:{entrypoint:'astro/assets/services/noop'}}, outDir:'/tmp/fam-st', cacheDir:'/tmp/fam-z-astro', vite:{ cacheDir:'/tmp/fam-z-vite' } });
