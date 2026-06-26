import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://family.chuckeesley.com', outDir: '/tmp/famv',
  integrations: [mdx(), sitemap(), tailwind()],
  redirects: { '/docs/letters/charlie-to-terrie-1971-06-22/': '/docs/letters/charlie-to-terrie-1970-06-22/', '/places/saigon-1970/': '/places/saigon/' },
  image: { service: { entrypoint: 'astro/assets/services/noop' } },
});
