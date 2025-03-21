/* eslint-disable  @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  createdAt: string;
}

export default function BlogList() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/blog_posts')
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = data.posts.sort(
          (a: Post, b: Post) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
        setPosts(sortedPosts);
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

  return (
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
  );
}
