import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Replace site/base for GitHub Pages.
// Custom domain (bakery.mioko.net): set site to that URL and remove base entirely.
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
