"use client";

import { useMemo, useEffect, useState } from "react";

export default function ClientBlogImage({ id, title }: { id: string; title: string }) {
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem(`blog_image_${id}`);
    if (storedImage) {
      setRandomImage(storedImage);
    } else {
      const newImage = `https://picsum.photos/600/400`;
      localStorage.setItem(`blog_image_${id}`, newImage);
      setRandomImage(newImage);
    }
  }, [id]);

  return (
    <img
      src={randomImage}
      alt={`Image of ${title}`}
      className="w-full h-64 object-cover rounded-lg mt-4"
    />
  );
}