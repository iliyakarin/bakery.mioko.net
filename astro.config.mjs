import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Replace YOUR_USERNAME and YOUR_REPO with your GitHub username and repo name.
// If using a custom domain (bakery.mioko.net), set site to that and remove base.
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME',
  integrations: [tailwind()],
  output: 'static',
});
