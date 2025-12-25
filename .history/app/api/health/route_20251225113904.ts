export const runtime = "nodejs"
export const dynamic = "force-dynamic"

import { NextResponse } from "next/server"
import { getPrisma } from "@/app/lib/prisma"

export async function GET() {
  const prisma = getPrisma() // ✅ runtime only
  const users = await prisma.user.count()

  return NextResponse.json({
    status: "ok",
    users,
  })
}
