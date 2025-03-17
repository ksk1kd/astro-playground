import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/news" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
  })
});

export const collections = { news };