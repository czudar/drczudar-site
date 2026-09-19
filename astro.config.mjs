import { defineConfig } from 'astro/config';

// drczudar.hu — Czudar DHH Ügyvédi Iroda
// Statikus, háromnyelvű (HU alap, EN, 中文). Token-vezérelt (brand-tokens.yaml).
export default defineConfig({
  site: 'https://www.drczudar.hu',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'hu',
    locales: ['hu', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false, // HU: /, EN: /en/, ZH: /zh/
    },
  },
  build: { format: 'directory', assets: 'assets' },
});
