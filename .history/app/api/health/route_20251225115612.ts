export const runtime = "nodejs"
export const dynamic = "force-dynamic"

import { getPrisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const prisma = getPrisma()
  const users = await prisma.user.count()

  return NextResponse.json({
    status: "ok",
    users,
  })
}
