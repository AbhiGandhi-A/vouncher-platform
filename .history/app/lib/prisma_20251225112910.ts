import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

/**
 * Factory to create Prisma Client (Prisma 7 compatible)
 */
const createPrismaClient = () =>
  new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL, // 🔴 REQUIRED
  }).$extends(withAccelerate())

/**
 * Infer correct Prisma client type
 */
type PrismaClientWithAccelerate = ReturnType<typeof createPrismaClient>

/**
 * Global cache (Next.js / Vercel safe)
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientWithAccelerate | undefined
}

/**
 * Export singleton
 */
export const prisma =
  globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
