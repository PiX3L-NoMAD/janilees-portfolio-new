import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import ClientBlogImage from './_ClientBlogImage';
import GlowDivider from './ui/GlowDivider';
import Footer from './Footer';
import Button from './ui/Button';
import Link from 'next/link';

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
    <div className='bg-gradient-to-b mx-auto from-gray-800 to-gray-900 text-white min-h-screen pt-5 items-stretch'>
      <Link href='/'>
        <Button>Go Back</Button>
      </Link>
      <div className='max-w-2xl mt-1 gap-6 mx-auto'>
        <h1 className='max-w-2xl text-3xl font-bold text-purple-400 mt-3 px-6'>
          {post.title}
        </h1>
        <div className='mx-auto p-6'>
          <p className='text-gray-400 mx-auto text-base'>
            By Janilee Svaerdstaal,{' '}
            <i>Full-Stack Software Developer</i>
          </p>
          <p className='text-gray-600 text-sm'>
            Published{' '}
            {new Date(
              post.createdAt
            ).toUTCString()}
          </p>

          <ClientBlogImage
            id={post.id}
            title={post.title}
          />

          <div className='my-4 text-gray-200 max-w-3xl mx-auto text-left'>
            <ReactMarkdown
              remarkPlugins={[
                [remarkGfm],
                [remarkBreaks],
              ]}
            >
              {post.body}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <GlowDivider />
      <Footer />
    </div>
  );
}
