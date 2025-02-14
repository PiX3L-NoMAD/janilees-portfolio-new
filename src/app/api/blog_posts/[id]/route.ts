import { NextResponse } from "next/server.js";
import prisma from "@/lib/prisma.ts";

export async function GET(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id: id },
    });

    if (!post) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
