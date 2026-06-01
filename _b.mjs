import { build } from 'astro';
await build({ root: process.cwd(), vite: { cacheDir: '/tmp/family-vite-cache-2' } });
