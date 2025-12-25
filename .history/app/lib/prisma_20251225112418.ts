import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

/**
 * Create Prisma client with Accelerate
 */
const createPrismaClient = () =>
  new PrismaClient().$extends(withAccelerate())

/**
 * Infer correct Prisma type
 */
type PrismaClientWithAccelerate = ReturnType<typeof createPrismaClient>

/**
 * Global cache for Next.js / Vercel
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientWithAccelerate | undefined
}

/**
 * Export singleton Prisma client
 */
export const prisma =
  globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
