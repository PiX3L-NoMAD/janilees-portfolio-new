import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({take: 10,});
    return NextResponse.json({ posts: posts || [] });
  } catch (error) {
    console.log("Error fetching posts:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}