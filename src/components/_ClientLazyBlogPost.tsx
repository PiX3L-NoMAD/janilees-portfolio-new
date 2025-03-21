'use client';

import dynamic from 'next/dynamic';

interface BlogPostType {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
}

const LazyBlogPost = dynamic(
  () => import('./_BlogPost'),
  {
    loading: () => <div>Loading post...</div>,
    ssr: false,
  }
);

export default function ClientLazyBlogPost({
  post,
}: {
  post: BlogPostType;
}) {
  return <LazyBlogPost post={post} />;
}
