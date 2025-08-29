// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

import tailwindcss from '@tailwindcss/vite';
import sitemapPlugin from '@astrojs/sitemap';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), sitemapPlugin()]
  },

  integrations: [react(), mdx()],
  adapter: netlify(),

  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
});