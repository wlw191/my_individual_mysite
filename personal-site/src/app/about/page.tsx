import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about the author of this website.',
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-primary mb-6">About Me</h1>

      <div className="prose lg:prose-xl dark:prose-invert max-w-none">
        <p>
          Hello! I'm a passionate developer, creator, and lifelong learner. Welcome to my personal space on the internet where I share my thoughts, projects, and journey.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">My Journey</h2>
        <p>
          My fascination with technology started at a young age. From tinkering with old computers to writing my first lines of code, I've always been driven by a desire to understand how things work and to build things that can make a difference. This journey has taken me through various domains, from web development to exploring the decentralized future with Web3.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">My Philosophy</h2>
        <p>
          I believe in the power of simplicity and the KISS (Keep It Simple, Stupid) principle. In a world of increasing complexity, creating solutions that are elegant, intuitive, and easy to understand is more important than ever. I strive to apply this philosophy to both my code and my life.
        </p>

        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">This Site</h2>
        <p>
          This website is my digital garden—a place for me to experiment with new technologies, write about my findings, and showcase my work. It's built with Next.js, Tailwind CSS, and a sprinkle of 3D magic. I hope you find something interesting here.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
