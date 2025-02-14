import BlogPost from '@/components/BlogPost.tsx';
import { notFound } from 'next/navigation.js';
import prisma from '@/lib/prisma.ts';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const post = await prisma.blogPost.findUnique({
    where: { id: resolvedParams.id },
  });

  if (!post) return notFound();

  return <BlogPost post={post} />;
}
