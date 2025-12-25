import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"
import type { PrismaClientOptions } from "@prisma/client/runtime/library"

const prismaOptions = {
  datasourceUrl: process.env.DATABASE_URL,
} satisfies PrismaClientOptions

const createPrismaClient = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set")
  }

  return new PrismaClient(prismaOptions).$extends(withAccelerate())
}

type PrismaAcceleratedClient = ReturnType<typeof createPrismaClient>

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaAcceleratedClient | undefined
}

export const prisma =
  global.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma
}
