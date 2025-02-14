import prisma from "@/lib/prisma.ts";
import { NextResponse } from "next/server.js";

export async function GET() {
  const posts = await prisma.blogPost.findMany();
  return NextResponse.json(posts);
}