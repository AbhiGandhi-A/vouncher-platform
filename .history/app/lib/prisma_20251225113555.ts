import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

/**
 * Factory function to create Prisma Client with extensions
 */
const createPrismaClient = () => {
  return new PrismaClient().$extends(withAccelerate())
}

/**
 * Infer the EXACT client type returned by $extends()
 */
type PrismaClientExtended = ReturnType<typeof createPrismaClient>

/**
 * Global cache (Next.js / Vercel safe)
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientExtended | undefined
}

/**
 * Export singleton Prisma client
 */
export const prisma =
  globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
