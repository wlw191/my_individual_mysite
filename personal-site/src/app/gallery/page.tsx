import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'A collection of photos.',
};

// Placeholder data using an external service (picsum.photos)
const galleryData = [
  { id: 1, src: 'https://picsum.photos/seed/p1/800/600', alt: 'A random landscape' },
  { id: 2, src: 'https://picsum.photos/seed/p2/800/600', alt: 'A random city' },
  { id: 3, src: 'https://picsum.photos/seed/p3/800/600', alt: 'A random animal' },
  { id: 4, src: 'https://picsum.photos/seed/p4/800/600', alt: 'A random object' },
  { id: 5, src: 'https://picsum.photos/seed/p5/800/600', alt: 'A random nature shot' },
  { id: 6, src: 'https://picsum.photos/seed/p6/800/600', alt: 'A random architectural design' },
  { id: 7, src: 'https://picsum.photos/seed/p7/800/600', alt: 'A random street view' },
  { id: 8, src: 'https://picsum.photos/seed/p8/800/600', alt: 'A random abstract photo' },
];

const GalleryPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-5xl font-bold text-primary mb-12 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryData.map((photo) => (
          <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                {photo.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
