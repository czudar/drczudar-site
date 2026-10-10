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
  // Az „Adatvédelmi tájékoztató” 2026/2-től „Adatkezelési tájékoztató”; a régi címek
  // átirányítanak (statikus buildben: meta-refresh + canonical az új címre).
  redirects: {
    '/adatvedelmi-tajekoztato': '/adatkezelesi-tajekoztato/',
    '/en/adatvedelmi-tajekoztato': '/en/data-processing-notice/',
    '/zh/adatvedelmi-tajekoztato': '/zh/data-processing-notice/',
    '/ko/adatvedelmi-tajekoztato': '/ko/data-processing-notice/',
  },
  build: { format: 'directory', assets: 'assets' },
  integrations: [sitemap()],
});
