import {fetchRequestHandler} from "@trpc/server/adapters/fetch"
import { createContext } from "@/server/context"
import { appRouter } from "@/server/routers"

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: createContext
  })
}

export { handler as GET, handler as POST }
