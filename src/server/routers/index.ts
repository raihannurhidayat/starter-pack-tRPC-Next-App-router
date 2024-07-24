import { router } from "../trpc";
import { usersRouter } from "./users";

export const appRouter = router({
  user: usersRouter
})

export type AppRouter = typeof appRouter