'use client';

import { Card, CardContent } from './Card';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Post {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from your API
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          'Error fetching blog posts:',
          error
        );
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className='max-w-2xl mx-auto mt-10'>
      <h1 className='text-3xl font-bold text-center m-3'>
        Janilee&apos;s Dev Blog
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
