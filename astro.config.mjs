// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemapPlugin from '@astrojs/sitemap';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), sitemapPlugin()]
  },

  integrations: [react()],
  adapter: netlify()
});