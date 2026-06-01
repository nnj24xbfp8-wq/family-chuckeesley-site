import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://family.chuckeesley.com',
  integrations: [mdx(), sitemap(), tailwind()],
  // Passthrough is fine while seeds are SVG only. Switch to the default
  // sharp-backed service (just delete this block) once real photos arrive.
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
});
