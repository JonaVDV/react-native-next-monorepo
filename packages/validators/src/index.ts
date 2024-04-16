import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export const authValidator = z.object({
  username: z.string().regex(/^[a-z0-9_-]+$/).min(4).max(32),
  password: z.string().min(6).max(255),
});
