'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ClientBlogImage({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [randomImage, setRandomImage] = useState<
    string | null
  >(null);

  useEffect(() => {
    const storedImage = localStorage.getItem(
      `blog_image_${id}`
    );
    if (storedImage) {
      setRandomImage(storedImage);
    } else {
      const newImage = `https://picsum.photos/600/400`;
      localStorage.setItem(
        `blog_image_${id}`,
        newImage
      );
      setRandomImage(newImage);
    }
  }, [id]);

  return (
    <Image
      src={
        randomImage ||
        `https://picsum.photos/600/400`
      }
      width='600'
      height='400'
      alt={`Image of ${title}`}
      className='w-full h-64 object-cover rounded-lg mt-4'
    />
  );
}
