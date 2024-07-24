"use client";

import { trpc } from "@/server/libs/trpc";

const HomePage = () => {
  const { data } = trpc.user.getUsers.useQuery();

  console.log(data)

  return <div>HomePage</div>;
};

export default HomePage;
