import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const createPrismaClient = () => {
  if (!process.env.PRISMA_ACCELERATE_URL) {
    throw new Error("PRISMA_ACCELERATE_URL is not set")
  }

  return new PrismaClient({
    // Prisma 7 runtime expects THIS
    accelerateUrl: process.env.PRISMA_ACCELERATE_URL,
  }).$extends(withAccelerate())
}

type PrismaAcceleratedClient = ReturnType<typeof createPrismaClient>

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaAcceleratedClient | undefined
}

export const prisma = global.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma
}
