import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { CreatePostSchema } from "@acme/validators";

import { protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = {
  all: publicProcedure.query(({ ctx }) => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    // return ctx.db.query.post.findMany({
    //   orderBy: desc(schema.post.id),
    //   limit: 10,
    // });
    return {}
  }),

  byId: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      // return ctx.db
      //   .select()
      //   .from(schema.post)
      //   .where(eq(schema.post.id, input.id));

      return {}
    }),

  create: protectedProcedure
    .input(CreatePostSchema)
    .mutation(({ ctx, input }) => {
      return {}
    }),

  delete: protectedProcedure.input(z.number()).mutation(({ ctx, input }) => {
    return {}
  }),
} satisfies TRPCRouterRecord;
