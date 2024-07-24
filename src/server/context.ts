import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import prisma from "./db";
import { inferAsyncReturnType } from "@trpc/server";

export const createContext = () => {
  return {
    prisma,
  };
};

export type Context = inferAsyncReturnType <typeof createContext>