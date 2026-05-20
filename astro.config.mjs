import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yenniejun.com',
  build: {
    // Use a non-underscore-prefixed folder so GitHub Pages' Jekyll can't strip it.
    // (_astro is the default; .nojekyll should also disable Jekyll, but this is belt-and-suspenders.)
    assets: 'astro-assets',
  },
  server: {
    port: 4321,
  },
});
