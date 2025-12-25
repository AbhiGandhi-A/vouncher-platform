import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const users = await prisma.user.count()
  return NextResponse.json({
    status: "ok",
    users,
  })
}
