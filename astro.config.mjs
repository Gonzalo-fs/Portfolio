// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// @ts-ignore
const isProd = process.env.NODE_ENV === 'production';;

// https://astro.build/config
export default defineConfig({
  adapter: isProd ? cloudflare() : undefined,

  image: {
    service: passthroughImageService(),
  },
});