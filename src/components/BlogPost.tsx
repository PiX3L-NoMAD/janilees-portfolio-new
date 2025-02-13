import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import ClientBlogImage from './ClientBlogImage';

export default function BlogPost({
  post,
}: {
  post: {
    id: string;
    title: string;
    body: string;
    createdAt: Date;
  };
}) {
  return (
    <div className='max-w-2xl mx-auto mt-10 p-3'>
      <h1 className='text-3xl font-bold text-left text-pink-600'>
        {post.title}
      </h1>
      <p className='text-gray-600 text-base'>
        By Janilee Svaerdstaal,{' '}
        <i>Full-Stack Software Developer</i>
      </p>
      <p className='text-gray-600 text-sm'>
        Published{' '}
        {new Date(post.createdAt).toUTCString()}
      </p>

      <ClientBlogImage
        id={post.id}
        title={post.title}
      />

      <div className='mt-4 text-gray-700'>
        <ReactMarkdown
          remarkPlugins={[
            remarkGfm,
            remarkBreaks,
          ]}
        >
          {post.body}
        </ReactMarkdown>
      </div>
    </div>
  );
}
