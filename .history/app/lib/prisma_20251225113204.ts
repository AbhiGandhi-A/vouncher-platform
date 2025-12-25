import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

/**
 * Create Prisma client (Prisma 7 compliant)
 */
const createPrismaClient = () =>
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL, // ✅ CORRECT
      },
    },
  }).$extends(withAccelerate())

/**
 * Infer extended Prisma client type
 */
type PrismaClientWithAccelerate = ReturnType<typeof createPrismaClient>

/**
 * Global cache (Next.js / Vercel safe)
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
