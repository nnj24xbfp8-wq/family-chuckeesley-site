import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://family.chuckeesley.com',
  integrations: [mdx(), sitemap(), tailwind()],
  // Redirects for URLs that previously existed and have been moved.
  // Keep these around so external links / search-engine indexes don't 404.
  redirects: {
    '/docs/letters/charlie-to-terrie-1971-06-22/': '/docs/letters/charlie-to-terrie-1970-06-22/',
    '/places/saigon-1970/': '/places/saigon/',
  },
  // Passthrough is fine while seeds are SVG only. Switch to the default
  // sharp-backed service (just delete this block) once real photos arrive.
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
});
