import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  security: {
    checkOrigin: true
  },
  site: 'https://www.stacksolver.tech',
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
});