// import prisma from '@/lib/prisma';
import Blog from '@/components/Blog';

export default async function BlogPage() {
  // const posts = await prisma.blogPost.findMany();

  return <div>{<Blog />}</div>;
}
