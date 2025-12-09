// ARCHIVO: astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.stacksolver.tech',
  integrations: [
    react(),
    sitemap()
  ]
});