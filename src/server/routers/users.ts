import { publicProcedure, router } from "../trpc";

export const usersRouter = router({
  getUsers: publicProcedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.user.findMany({});
    return data;
  }),
});
