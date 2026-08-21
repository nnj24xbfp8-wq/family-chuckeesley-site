import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://family.chuckeesley.com',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Redirects for URLs that previously existed and have been moved.
  // Keep these around so external links / search-engine indexes don't 404.
  redirects: {
    '/docs/letters/charlie-to-terrie-1971-06-22/': '/docs/letters/charlie-to-terrie-1970-06-22/',
    '/places/saigon-1970/': '/places/saigon/',
    // Merged duplicate person entry into margaret-youman-eesley (same person).
    '/family/peggy-don-eesley/': '/family/margaret-youman-eesley/',
    // Merged duplicate Jan 1 1971 Dorothy Hauser letter into the canonical page.
    '/docs/letters/charlie-to-dorothy-1971-01-01-mothers-for-peace/': '/docs/letters/charlie-to-dorothy-hauser-1971-01-01/',
    // Merged duplicate B-24 crew pages (variant spellings) into the memoir-spelling canonical pages.
    '/family/lyle-pound/': '/family/lyle-found/',
    '/family/charles-boyt/': '/family/charles-bojt/',
    // Merged duplicate stub (portrait) into the canonical Scioto "Ota" Chenoweth Smith page — GEDCOM confirms one person.
    '/family/ota-chenoweth-smith/': '/family/scioto-mafry-chenoweth/',
    // Merged thin duplicate stub into the canonical Catharina (Boeshar) Wildermuth page (1840–1933; same person).
    '/family/catherina-boeshar/': '/family/catharina-boeshar-wildermuth/',
    // Merged misdated duplicate of the 29 Mar 1971 R&R-booking letter (had been filed as "1970-03-29"; same letter, scan dad9).
    '/docs/letters/charlie-to-terrie-1970-03-29-ticket-cash/': '/docs/letters/charlie-to-terrie-1971-03-29-second-rr-booking/',
    // Merged thin romanized stub into the canonical Shang Lingke 尚玲珂 page (same person; FamilySearch G9MN-QDX preserved there).
    '/family/ling-ke-shang/': '/family/lingke-shang/',
  },
});
