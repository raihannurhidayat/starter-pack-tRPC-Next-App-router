"use client";

import { trpc } from "@/server/libs/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getFetch, httpBatchLink, loggerLink } from "@trpc/react-query";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 1000 } },
});

export default function TrpcProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // NOTE: Your production URL environment variable may be different
  const url =
    process.env.NEXT_PUBLIC_APP_DOMAIN &&
    !process.env.NEXT_PUBLIC_APP_DOMAIN.includes("localhost")
      ? `https://www.${process.env.NEXT_PUBLIC_APP_DOMAIN}/api/trpc/`
      : "http://localhost:3000/api/trpc/";

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url,
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: "include",
            });
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}