import BlogPost from '@/components/BlogPost';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';

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
