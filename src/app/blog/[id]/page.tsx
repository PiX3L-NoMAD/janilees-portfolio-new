import BlogPost from "@/components/BlogPost";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id },
  });

  if (!post) return notFound();

  return <BlogPost post={post} />;
}