import { defineCollection, z } from 'astro:content';

// Blog / szakmai publikációk. Fájlnév-konvenció: <slug>.<lang>.md (lang: hu|en|zh)
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.enum(['hu', 'en', 'zh']),
    key: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Czudar DHH'),
    excerpt: z.string(),
    coauthor: z.string().optional(),
    source: z.string().optional(),   // eredeti megjelenés (pl. szakfolyóirat), ha van
    draft: z.boolean().default(false),
    reviewNote: z.string().optional(), // pl. „gépi fordítás — lektorálásra vár"
  }),
});

export const collections = { blog };
