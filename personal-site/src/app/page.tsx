import React, { Suspense } from 'react';
import Scene from '@/components/3D/Scene';

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center">
      <Suspense fallback={<div className="w-full h-96 bg-neutral-800 animate-pulse rounded-lg" />}>
        <Scene />
      </Suspense>
      <h1 className="text-4xl font-bold text-primary my-4">Welcome to My Personal Site</h1>
      <p className="text-lg max-w-2xl">
        This is a personal website built with Next.js, Tailwind CSS, and TypeScript, featuring a dynamic article system and interactive 3D elements.
      </p>
    </div>
  );
}
