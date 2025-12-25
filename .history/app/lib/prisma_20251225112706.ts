import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const createPrismaClient = () =>
  new PrismaClient().$extends(withAccelerate())

type PrismaClientWithAccelerate = ReturnType<typeof createPrismaClient>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientWithAccelerate | undefined
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
