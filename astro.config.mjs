import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.stacksolver.tech',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/p/')
    })
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});
