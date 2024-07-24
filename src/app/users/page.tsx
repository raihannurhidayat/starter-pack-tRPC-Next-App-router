"use client"

import { trpc } from "@/server/libs/trpc";
import React from "react";

const UsersPage = () => {
  const { data } = trpc.user.getUsers.useQuery();

  return (
    <div>
      {data?.length == 0 ? (
        <div className="flex items-center justify-center text-3xl font-semibold text-red-600">
          Tidak ada data user
        </div>
      ) : (
        <div>
          {data?.map((user) => (
            <h1 key={user.id}>{user.name}</h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
