import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const createPrismaClient = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set")
  }

  return new PrismaClient({
    // TS doesn't know this, but Prisma supports it
    datasourceUrl: process.env.DATABASE_URL,
  } as any).$extends(withAccelerate())
}

// 🔑 Let TS infer the correct extended type
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
