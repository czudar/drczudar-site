// Arculati adat a honlap számára.
// A brand/colors/office/munkatárs-azonosság a brand-tokens.yaml-ból GENERÁLT (auto-sync,
// lásd scripts/sync-brand.mjs); a munkatárs-életrajzok szerkesztői tartalomból (content.js).
import generated from './brand.generated.js';
import { peopleContent } from './content.js';

export const brand = generated.brand;
export const colors = generated.colors;
export const fonts = generated.fonts;
export const office = generated.office;

// Token-azonosság + szerkesztői tartalom összefűzése slug szerint.
export const people = generated.peopleTokens.map((p) => ({
  ...p,
  ...(peopleContent[p.slug] || {}),
}));
