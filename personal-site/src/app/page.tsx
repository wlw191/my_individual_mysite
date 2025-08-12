import React, { Suspense } from 'react';
import Link from 'next/link';
import Scene from '@/components/3D/Scene';

export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Suspense fallback={<div className="w-full h-full bg-neutral-900" />}>
          <Scene />
        </Suspense>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Jules - Creative Developer
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mt-4 mb-8">
          I build immersive and user-friendly web experiences. Exploring the intersection of code, design, and performance.
        </p>
        <div className="flex space-x-4">
          <Link href="/about" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105">
            About Me
          </Link>
          <Link href="/articles" className="bg-neutral-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-neutral-600 transition-transform transform hover:scale-105">
            View Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
