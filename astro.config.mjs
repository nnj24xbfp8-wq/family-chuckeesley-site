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
    // Merged duplicate person entry into margaret-youman-eesley (same person).
    '/family/peggy-don-eesley/': '/family/margaret-youman-eesley/',
    // Merged duplicate Jan 1 1971 Dorothy Hauser letter into the canonical page.
    '/docs/letters/charlie-to-dorothy-1971-01-01-mothers-for-peace/': '/docs/letters/charlie-to-dorothy-hauser-1971-01-01/',
  },
});
