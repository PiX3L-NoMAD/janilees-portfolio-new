import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.blogPost.findMany();
  return NextResponse.json(posts);
}