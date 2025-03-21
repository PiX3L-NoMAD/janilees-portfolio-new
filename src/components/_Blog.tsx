'use client';
import { Suspense } from 'react';
import BlogList from './_BlogList';

export default function Blog() {
  return (
    <section className='pt-5 pb-20 px-6 text-left bg-gradient-to-b from-gray-800 to-gray-900 justify-items-center'>
      <h2 className='text-3xl font-bold text-purple-400 text-center'>
        Janilee&apos;s Dev Blog
      </h2>
      <div className='mt-8 grid grid-cols-1 w-fit gap-6'>
        <Suspense
          fallback={
            <div>Loading blog posts...</div>
          }
        >
          <BlogList />
        </Suspense>
      </div>
    </section>
  );
}
