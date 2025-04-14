import { defineCollection, z } from 'astro:content';

const games = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    director: z.string(),
    publisher: z.string(),
    developed: z.string(),
    release: z.number(),
    plot: z.string(),
    genres: z.array(z.string()),
    img: z.string()
  })
});

export const collections = { games };
