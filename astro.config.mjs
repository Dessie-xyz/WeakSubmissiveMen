// @ts-check
import { defineConfig,passthroughImageService } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.weaksubmissive.men',
  output: 'server',
  adapter: cloudflare(),

  image:  {
    service: passthroughImageService()
  },

  integrations: [mdx(), sitemap({
      filter: (page) => {
        const url = new URL(page);

        // Exclude anything under /r/
        return !url.pathname.startsWith('/r/');
      },
    })]
});