import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z
    .string()
    .url()
    .default('postgres://docker:docker@localhost:5432/agents'),
});

export const env = envSchema.parse(process.env);
