import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// drczudar.hu — Czudar DHH Ügyvédi Iroda
// Statikus, négynyelvű (HU alap, EN, 中文, 한국어). Token-vezérelt (brand-tokens.yaml).
export default defineConfig({
  site: 'https://www.drczudar.hu',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en', 'zh', 'ko'],
    routing: {
      prefixDefaultLocale: false, // HU: /, EN: /en/, ZH: /zh/, KO: /ko/
    },
  },
  build: { format: 'directory', assets: 'assets' },
  integrations: [sitemap()],
});
