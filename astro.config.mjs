// @ts-check
import { defineConfig,passthroughImageService } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://dessieowo.com',
  output: 'server',
  adapter: cloudflare(),

  image:  {
    service: passthroughImageService()
  },

  integrations: [mdx()]
});