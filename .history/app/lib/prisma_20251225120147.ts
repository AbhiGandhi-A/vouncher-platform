import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

let prismaInstance:
  | ReturnType<typeof createPrismaClient>
  | undefined

function createPrismaClient() {
  return new PrismaClient().$extends(withAccelerate())
}

export function getPrisma() {
  if (!prismaInstance) {
    prismaInstance = createPrismaClient()
  }
  return prismaInstance
}
