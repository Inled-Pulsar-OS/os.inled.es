import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const community = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/community" }),
    schema: z.object({
        type: z.enum(["error", "idea", "help", "roadmap"]),
        title: z.string(),
        status: z.string().default("Open"),
        priority: z
            .enum(["low", "medium", "high", "critical"])
            .default("medium"),
        date: z.coerce.date().default(() => new Date()),
        url: z.string().url().optional(),
    }),
});

const people = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/data/people" }),
    schema: z.object({
        name: z.string(),
        note: z.string().default(""),
        date: z.coerce.date().default(() => new Date()),
    }),
});

export const collections = { community, people };
