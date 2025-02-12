import prisma from '@/lib/prisma';
import { Card, CardContent } from './Card';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
}

export default async function Blog() {
  const posts: Post[] = (
    await prisma.blogPost.findMany({})
  ).map((post: Post) => ({
    ...post,
    createdAt: post.createdAt,
  }));

  return (
    <div className='max-w-2xl mx-auto mt-10'>
      <h1 className='text-3xl font-bold text-center m-3'>
        + Janilee&apos;s Dev Blog
      </h1>
      <Card>
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>
              <CardContent>
                <Link
                  href={`/blog/${post.id}`}
                  className='text-xl text-pink-600 hover:underline'
                >
                  {post.title}
                </Link>
                <p className='text-gray-600 text-sm'>
                  Published{' '}
                  {new Date(
                    post.createdAt
                  ).toUTCString()}
                </p>
              </CardContent>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
