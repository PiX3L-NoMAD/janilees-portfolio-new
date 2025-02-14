'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from './ui/Button';
import Home from './Portfolio';

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
    fetch('/api/blog_posts')
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
    <section className='pt-5 pb-20 px-6 text-left bg-gradient-to-b from-gray-800 to-gray-900'>
      <h2 className='text-3xl font-bold text-purple-400 text-center'>
        Janilee&apos;s Dev Blog
      </h2>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='p-6 bg-gray-800 rounded-lg shadow-lg'>
          <ul>
            {posts.map((post: Post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.id}`}
                  className='text-xl font-bold text-white hover:text-pink-500 transition ease-in-out'
                >
                  {post.title}
                </Link>
                <p className='text-gray-400 my-2 text-sm'>
                  Published{' '}
                  {new Date(
                    post.createdAt
                  ).toUTCString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
