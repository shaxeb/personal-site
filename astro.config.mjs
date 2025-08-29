// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

import tailwindcss from '@tailwindcss/vite';
import sitemapPlugin from '@astrojs/sitemap';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import opengraphImages from 'astro-opengraph-images';
import { simple } from './src/og/simple.tsx';
import * as fs from 'node:fs';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: "https://shah.build",
  vite: {
    plugins: [tailwindcss(), sitemapPlugin()]
  },

  integrations: [
    react(),
    mdx(),
    opengraphImages({
      options: {
        fonts: [
          {
            name: "Roboto",
            weight: 400,
            style: "normal",
            data: fs.readFileSync(
              "node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff"
            ),
          },
        ],
      },
      render: simple,
    }),
  ],
  adapter: netlify(),

  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
});