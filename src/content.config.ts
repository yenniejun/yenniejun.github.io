import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    posttype: z.string().optional(),
    path: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    title: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    posttype: z.string().optional(),
    path: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    title: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    link: z.string().url().optional(),
    rating: z.number().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, books };
