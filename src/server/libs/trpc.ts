import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "../routers";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return ""
  }

  return "http://localhost:3000"
}

export const trpc = createTRPCReact<AppRouter>()

// export const trpc = createTRPCNext<AppRouter>({
//   config(){
//     return {
//       links: [
//         httpBatchLink({
//           url: `${getBaseUrl}/api/trpc`
//         })
//       ]
//     }
//   }
// })