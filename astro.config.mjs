// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://dessieowo.com',
  output: 'server',
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'  // ← ADD THIS too (disables Sharp)
    }
  }
});