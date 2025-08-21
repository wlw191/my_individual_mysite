'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// This is a placeholder; in a real app, you'd fetch this data.
const placeholderPosts = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    date: 'August 21, 2025',
    content: `
      <p>This is the beginning of a new journey. Here, I'll share my thoughts on technology, software development, and the occasional musing on life. The web is a canvas, and this site is my corner of it.</p>
      <p>Building things is a passion, and this blog is an extension of that. Expect to see posts about:</p>
      <ul>
        <li>Web Development (React, Next.js, etc.)</li>
        <li>Software Architecture</li>
        <li>Productivity and Tooling</li>
        <li>3D Graphics on the Web</li>
      </ul>
      <pre><code>// A little code snippet to get started
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');</code></pre>
      <p>Stay tuned for more!</p>
    `,
  },
  {
    slug: 'deep-dive-into-nextjs',
    title: 'Deep Dive into Next.js 15',
    date: 'August 22, 2025',
    content: '<p>Next.js 15 is a powerhouse. We will explore its core features in this placeholder article.</p>',
  },
  {
    slug: 'styling-with-tailwind',
    title: 'The Art of Styling with Tailwind CSS',
    date: 'August 23, 2025',
    content: '<p>Tailwind CSS makes styling a breeze. This article will cover the basics of utility-first CSS.</p>',
  },
];

// We cannot generate dynamic metadata in a client component directly.
// This would typically be done in a server component or using generateMetadata function.
// For now, we'll have a generic title.
export const metadata: Metadata = {
  title: 'Blog Post | Flann',
  description: 'A blog post by Flann.',
};


const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const post = placeholderPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound(); // In a real app, this would show a 404 page
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-primary mb-3">{post.title}</h1>
          <p className="text-gray-400 text-lg">{post.date}</p>
        </div>

        <div
          className="prose lg:prose-xl dark:prose-invert max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.article>
    </div>
  );
};

export default BlogPostPage;
