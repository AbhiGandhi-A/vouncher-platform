import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const userCount = await prisma.user.count()
  return NextResponse.json({
    status: "ok",
    userCount,
    environment: "production",
  })
}
